"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";
import CircularGallery from "@/components/ui/CircularGallery";
import VariableProximity from "@/components/ui/VariableProximity";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsSectionProps {
  lang?: "en" | "ar";
}

const projectData = {
  en: {
    tagline: "Our Portfolio",
    sectionNum: "03 / PROOF OF WORK",
    title: "Real Projects & Installations",
    description: "Explore a selection of completed elevator installations, maintenance projects, and premium solutions delivered across Egypt.",
    
    videoTitle: "Project Gallery",
    videoDesc: "Browse our completed elevator installations across Cairo and Giza.",
    gallery: [
      {
        title: "Panoramic Glass Cabin Operation",
        type: "Panoramic Hydraulic Lift",
        location: "Giza, Egypt",
        description: "Scenic glass lift cabin in motion showing pyramids horizons.",
        image: "/images/2026-07-05 06.53.17.jpg",
      },
      {
        title: "High-Speed Traction Machine Tuning",
        type: "Electric MRL Elevator",
        location: "New Cairo, Egypt",
        description: "Advanced controller cabinet calibration and mechanical tests.",
        image: "/images/2026-07-05 06.53.43.jpg",
      },
      {
        title: "Luxury Residential Villa Lift",
        type: "Hydraulic Home Lift",
        location: "Alexandria, Egypt",
        description: "Silent piston cabin moving through open-air residential lobby.",
        image: "/images/2026-07-07 01.41.15.jpg",
      },
      {
        title: "Smart Dumbwaiter Calibration",
        type: "Service Dumbwaiter",
        location: "Maadi, Cairo",
        description: "Kitchen service dumbwaiter speed tuning and safety tests.",
        image: "/images/2026-07-06 21.36.58.jpg",
      },
    ],

    featuredTitle: "Featured Masterpiece",
    featuredProject: {
      title: "The Grand Giza Villa Elevator",
      category: "Luxury Residential",
      type: "Panoramic Hydraulic Lift",
      location: "Giza, Egypt",
      status: "Completed",
      image: "/images/2026-07-07 00.35.45.jpg",
      desc: "A custom 3-stop circular glass panoramic elevator installed in a private estate overlooking the pyramids, featuring bespoke hand-polished brass finishes, intelligent control panels, and silent hydraulic propulsion.",
    },

    gridTitle: "Completed Installations",
    gridDesc: "A collection of bespoke engineering designs delivered to residential and commercial sectors.",
    grid: [
      {
        title: "New Cairo Commercial Plaza",
        category: "Commercial",
        type: "MRL Traction Elevators",
        location: "New Cairo, Egypt",
        image: "/images/2026-07-07 01.42.41.jpg",
        desc: "High-traffic electric traction systems designed for modern retail shopping malls.",
      },
      {
        title: "Alexandria Administrative Tower",
        category: "Commercial",
        type: "High-Speed Passenger Lift",
        location: "Alexandria, Egypt",
        image: "/images/2026-07-07 01.41.41.jpg",
        desc: "Fast, gearless elevator systems built for modern multi-story office towers.",
      },
      {
        title: "El Shorouk Residential Mansion",
        category: "Residential",
        type: "Premium Home Lift",
        location: "El Shorouk, Egypt",
        image: "/images/2026-07-05 06.53.17.jpg",
        desc: "Elegant residential villa lift requiring minimal pit depth and headroom.",
      },
      {
        title: "Heliopolis Penthouse Glass Lift",
        category: "Residential",
        type: "Panoramic Screw-Drive Lift",
        location: "Heliopolis, Egypt",
        image: "/images/2026-07-05 06.53.43.jpg",
        desc: "Sleek glass cabin lift designed to fit inside narrow circular stairwells.",
      },
      {
        title: "Katameya Heights Villa Lift",
        category: "Private Estates",
        type: "Custom Hydraulic Home Lift",
        location: "New Cairo, Egypt",
        image: "/images/2026-07-07 00.35.45.jpg",
        desc: "Custom hydraulic home lift featuring luxury interior cabin panel styling.",
      },
      {
        title: "Maadi Heritage Apartment Lift",
        category: "Modernization",
        type: "Retrofit Traction Lift",
        location: "Cairo, Egypt",
        image: "/images/2026-07-07 01.41.45.jpg",
        desc: "Bespoke elevator integration inside historical heritage shaft structures.",
      },
    ],
    ctaTitle: "Need a similar premium project?",
    ctaDesc: "Contact our engineering team to design and install a custom elevator solution for your property.",
    ctaBtn: "Contact Us",
    viewDetails: "View Details",
    videosTitle: "Real Projects in Motion",
    videosDesc: "Watch our installations in action — from panoramic glass lifts to high-speed traction systems.",
    videos: [
      {
        title: "Panoramic Glass Lift in Operation",
        category: "Panoramic Hydraulic Lift",
        location: "Giza, Egypt",
        src: "/videos/2026-07-06 21.37.22.mp4",
        poster: "/images/2026-07-05 06.53.17.jpg",
      },
      {
        title: "High-Speed Traction Elevator Testing",
        category: "Electric MRL Elevator",
        location: "New Cairo, Egypt",
        src: "/videos/2026-07-06 21.37.38.mp4",
        poster: "/images/2026-07-05 06.53.43.jpg",
      },
      {
        title: "Luxury Residential Lift Installation",
        category: "Hydraulic Home Lift",
        location: "Alexandria, Egypt",
        src: "/videos/2026-07-06 21.38.06.mp4",
        poster: "/images/2026-07-07 00.35.45.jpg",
      },
    ],
  },
  ar: {
    tagline: "مشروعاتنا",
    sectionNum: "٠٣ / سابقة الأعمال",
    title: "مشروعاتنا وتركيباتنا على أرض الواقع",
    description: "استكشف مجموعة من مشروعات تركيب وصيانة المصاعد التي نفذتها الشركة في مختلف أنحاء مصر.",
    
    videoTitle: "معرض المشروعات",
    videoDesc: "تصفح مجموعة من مشروعاتنا المنفذة في القاهرة والجيزة.",
    gallery: [
      {
        title: "تشغيل كابينة البانوراما الزجاجية",
        type: "مصعد هيدروليكي بانورامي",
        location: "الجيزة، مصر",
        description: "مصعد زجاجي دائري مخصص يطل على آفاق معمارية فاخرة.",
        image: "/images/2026-07-05 06.53.17.jpg",
      },
      {
        title: "ضبط لوحة تحكم مصعد الجر السريع",
        type: "مصعد كهربائي بدون غرفة ماكينات",
        location: "القاهرة الجديدة، مصر",
        description: "تركيب متطور للوحة التحكم الإلكترونية وإعداد المحرك والجر.",
        image: "/images/2026-07-05 06.53.43.jpg",
      },
      {
        title: "مصعد فيلا سكنية فاخرة",
        type: "مصعد هيدروليكي منزلي",
        location: "الإسكندرية، مصر",
        description: "مصعد مكبس هيدروليكي صامت وهادئ مصمم للفيلات وقليلة الارتفاع.",
        image: "/images/2026-07-07 01.41.15.jpg",
      },
      {
        title: "معايرة مصعد طعام ذكي",
        type: "مصعد خدمات طعام",
        location: "المعادي، القاهرة",
        description: "ضبط سرعة مصعد خدمة المطابخ واختبارات الأمان والسلامة.",
        image: "/images/2026-07-06 21.36.58.jpg",
      },
    ],

    featuredTitle: "تحفة هندسية مختارة",
    featuredProject: {
      title: "مصعد فيلا الجيزة الفاخرة",
      category: "سكني فاخر",
      type: "مصعد هيدروليكي بانورامي",
      location: "الجيزة، مصر",
      status: "مكتمل",
      image: "/images/2026-07-07 00.35.45.jpg",
      desc: "مصعد زجاجي بانورامي دائري مخصص ذو ٣ وقفات تم تركيبه في قصر خاص يطل على الأهرامات، يتميز بتشطيبات نحاسية مصقولة يدوياً، ولوحات تحكم ذكية، ونظام دفع هيدروليكي صامت بالكامل.",
    },

    gridTitle: "المشروعات المنفذة",
    gridDesc: "مجموعة من التصاميم الهندسية المخصصة التي تم توريدها وتركيبها للقطاعين السكني والتجاري.",
    grid: [
      {
        title: "مول القاهرة الجديدة التجاري",
        category: "تجاري",
        type: "مصاعد جر بدون غرفة ماكينة (MRL)",
        location: "القاهرة الجديدة، مصر",
        image: "/images/2026-07-07 01.42.41.jpg",
        desc: "أنظمة مصاعد جر كهربائية عالية التردد مصممة لمراكز التسوق الحديثة.",
      },
      {
        title: "البرج الإداري بالإسكندرية",
        category: "تجاري",
        type: "مصعد ركاب فائق السرعة",
        location: "الإسكندرية، مصر",
        image: "/images/2026-07-07 01.41.41.jpg",
        desc: "أنظمة مصاعد سريعة بدون تروس مصممة للأبراج السكنية والإدارية.",
      },
      {
        title: "قصر الشروق السكني",
        category: "سكني",
        type: "مصعد فيلا منزلي فاخر",
        location: "الشروق، مصر",
        image: "/images/2026-07-05 06.53.17.jpg",
        desc: "مصعد فيلا سكني هادئ وأنيق يتطلب مساحة حفرة ورأسية ضئيلة.",
      },
      {
        title: "بنتهاوس مصر الجديدة الزجاجي",
        category: "سكني",
        type: "مصعد بانوراما لولبي متطور",
        location: "مصر الجديدة، مصر",
        image: "/images/2026-07-05 06.53.43.jpg",
        desc: "مصعد زجاجي مدمج بتصميم لولبي يناسب الفراغات المعمارية الضيقة.",
      },
      {
        title: "مصعد فيلا قطامية هايتس",
        category: "قصور خاصة",
        type: "مصعد منزلي هيدروليكي مخصص",
        location: "نيو كايرو، مصر",
        image: "/images/2026-07-07 00.35.45.jpg",
        desc: "مصعد مكبس هيدروليكي مخصص يتميز بكابينة ذات تشطيبات فاخرة.",
      },
      {
        title: "مصعد عمارة المعادي التراثية",
        category: "تحديث مصاعد",
        type: "تحديث وتركيب مصعد جر",
        location: "القاهرة، مصر",
        image: "/images/2026-07-07 01.41.45.jpg",
        desc: "تكامل مصعد مخصص وتحديثه داخل الفراغات والأعمدة المعمارية للمباني التراثية والأثرية.",
      },
    ],
    ctaTitle: "هل تحتاج إلى مشروع مصعد مماثل؟",
    ctaDesc: "تواصل مع فريقنا الهندسي لتصميم وتركيب حلول مصاعد مخصصة بالكامل لمنشأتك.",
    ctaBtn: "تواصل معنا",
    viewDetails: "عرض التفاصيل",
    videosTitle: "مشروعاتنا الحقيقية",
    videosDesc: "شاهد تركيباتنا أثناء العمل — من المصاعد البانورامية الزجاجية إلى أنظمة الجر عالية السرعة.",
    videos: [
      {
        title: "مصعد بانوراما زجاجي أثناء التشغيل",
        category: "مصعد هيدروليكي بانورامي",
        location: "الجيزة، مصر",
        src: "/videos/2026-07-06 21.37.22.mp4",
        poster: "/images/2026-07-05 06.53.17.jpg",
      },
      {
        title: "اختبار مصعد جر فائق السرعة",
        category: "مصعد كهربائي MRL",
        location: "القاهرة الجديدة، مصر",
        src: "/videos/2026-07-06 21.37.38.mp4",
        poster: "/images/2026-07-05 06.53.43.jpg",
      },
      {
        title: "تركيب مصعد فيلا سكنية فاخرة",
        category: "مصعد هيدروليكي منزلي",
        location: "الإسكندرية، مصر",
        src: "/videos/2026-07-06 21.38.06.mp4",
        poster: "/images/2026-07-07 00.35.45.jpg",
      },
    ],
  },
};

const splitTextWords = (text: string) => {
  return text.split(/\s+/).map((word, idx, arr) => (
    <span key={idx} className="inline-block overflow-hidden pb-1">
      <span className="projects-word inline-block origin-bottom-left">{word}</span>
      {idx < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
    </span>
  ));
};

export default function ProjectsSection({ lang = "en" }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridTitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const [isDark, setIsDark] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string; poster?: string } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
      const observer = new MutationObserver(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => observer.disconnect();
    }
  }, []);

  const isRTL = lang === "ar";
  const content = isRTL ? projectData.ar : projectData.en;

  // Categories list
  const categories = isRTL
    ? ["الكل", "تجاري", "سكني", "تحديث مصاعد"]
    : ["All", "Commercial", "Residential", "Modernization"];

  // Filter logic
  const filteredGridItems = content.grid.filter((proj) => {
    const currentCategory = activeCategory;
    if (currentCategory === "All" || currentCategory === "الكل") return true;
    if (currentCategory === "Commercial" || currentCategory === "تجاري") {
      return (
        proj.category.toLowerCase().includes("commercial") ||
        proj.category.includes("تجاري")
      );
    }
    if (currentCategory === "Residential" || currentCategory === "سكني") {
      return (
        proj.category.toLowerCase().includes("residential") ||
        proj.category.toLowerCase().includes("private") ||
        proj.category.includes("سكني") ||
        proj.category.includes("قصور") ||
        proj.category.includes("منازل")
      );
    }
    if (currentCategory === "Modernization" || currentCategory === "تحديث مصاعد") {
      return (
        proj.category.toLowerCase().includes("modernization") ||
        proj.category.includes("تحديث")
      );
    }
    return true;
  });

  const galleryItems = filteredGridItems.map((proj) => ({
    image: proj.image,
    text: proj.title,
  }));

  // ESC Key listener to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const words = section.querySelectorAll(".projects-word");

      // Intro animation
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(taglineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      )
      .fromTo(words,
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, stagger: 0.015, duration: 0.5, ease: "power3.out" },
        "-=0.45"
      )
      .fromTo(descriptionRef.current,
        { opacity: 0, y: 15 },
        { opacity: 0.7, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );

      // Video Showcase container reveal
      gsap.fromTo(videoSectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Featured Project reveal
      gsap.fromTo(featuredRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Completed Gallery reveal
      const galleryWrap = section.querySelector(".completed-gallery-wrap");
      if (galleryWrap) {
        gsap.fromTo(galleryWrap,
          { opacity: 0, scale: 0.95, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridTitleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

      // CTA reveal
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      );

    }, sectionRef);

    return () => {
      try { ctx.revert(); } catch (_) {}
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isRTL]);

  // Mobile slider controls
  const handleScrollPrev = () => {
    if (mobileScrollRef.current) {
      const scrollAmt = isRTL ? 250 : -250;
      mobileScrollRef.current.scrollBy({ left: scrollAmt, behavior: "smooth" });
    }
  };

  const handleScrollNext = () => {
    if (mobileScrollRef.current) {
      const scrollAmt = isRTL ? -250 : 250;
      mobileScrollRef.current.scrollBy({ left: scrollAmt, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full py-20 md:py-28 lg:py-36 px-4 md:px-8 lg:px-16 bg-[var(--c-bg)] text-[var(--c-text)] overflow-hidden transition-colors duration-500 rounded-t-[32px] md:rounded-t-[40px] lg:rounded-t-[48px] shadow-[0_-30px_60px_rgba(0,0,0,0.15)] z-20"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* Background wireframes */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-8 md:left-16 w-[1px] bg-gradient-to-b from-[#c5a880]/20 via-[#c5a880]/5 to-transparent" />
        <div className="absolute top-0 bottom-0 right-8 md:right-16 w-[1px] bg-gradient-to-b from-[#c5a880]/20 via-[#c5a880]/5 to-transparent" />
        <div className="absolute top-1/3 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/8 to-transparent" />
        <div className="absolute top-2/3 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/8 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* 1. SECTION INTRO */}
        <div className="pb-12 border-b border-[var(--c-border)]/30 relative z-10">
          <span
            ref={taglineRef}
            className={cn(
              "inline-block text-[#ec4e39] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold select-none",
              isRTL && "font-cairo"
            )}
          >
            {content.tagline}
          </span>
          <span className={cn("text-[var(--c-text)]/40 text-[10px] md:text-xs tracking-wider mt-1.5 block select-none", isRTL && "font-cairo")}>
            {content.sectionNum}
          </span>
          <h2
            ref={titleRef}
            className={cn(
              "font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-[1.05] text-[var(--c-text)] max-w-4xl tracking-tight mt-6",
              isRTL && "font-cairo font-bold leading-tight"
            )}
          >
            {splitTextWords(content.title)}
          </h2>
          <p
            ref={descriptionRef}
            className={cn(
              "text-[var(--c-text)]/60 text-sm md:text-base lg:text-lg max-w-2xl mt-6 leading-relaxed select-text",
              isRTL && "font-cairo"
            )}
          >
            {content.description}
          </p>
        </div>

        {/* 2. COMPLETED PROJECTS SLIDER (CIRCULAR GALLERY + MOBILE FALLBACK) */}
        <div ref={gridTitleRef} className="pt-16 border-t border-[var(--c-border)]/20 mt-10 relative z-10">
          
          {/* Header & Category Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div>
              <span className={cn("text-[#ec4e39] text-[10px] md:text-xs font-bold uppercase tracking-widest", isRTL && "font-cairo")}>
                {isRTL ? "سابقة الأعمال الهندسية" : "Bespoke Portfolio"}
              </span>
              <h3 className={cn("text-xl md:text-2xl lg:text-3.5xl font-serif text-[var(--c-text)] font-semibold mt-1", isRTL && "font-cairo")}>
                {content.gridTitle}
              </h3>
              <p className={cn("text-sm text-[var(--c-text)]/60 max-w-xl mt-2", isRTL && "font-cairo")}>
                {content.gridDesc}
              </p>
            </div>

            {/* Scrolled Mobile Slider Prev/Next Controls */}
            <div className="md:hidden flex items-center gap-2 self-start">
              <button
                onClick={handleScrollPrev}
                className="w-9 h-9 rounded-full border border-[var(--c-border)]/20 hover:border-[#ec4e39] flex items-center justify-center text-[var(--c-text)] hover:text-[#ec4e39] transition-all bg-white dark:bg-[#0b0a0a]"
                aria-label="Previous Project"
              >
                <svg className="w-4 h-4 transform rotate-180 rtl:rotate-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button
                onClick={handleScrollNext}
                className="w-9 h-9 rounded-full border border-[var(--c-border)]/20 hover:border-[#ec4e39] flex items-center justify-center text-[var(--c-text)] hover:text-[#ec4e39] transition-all bg-white dark:bg-[#0b0a0a]"
                aria-label="Next Project"
              >
                <svg className="w-4 h-4 transform rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* WORKING CATEGORY FILTER BUTTONS */}
          <div className="flex flex-wrap items-center gap-2.5 pb-8">
            {categories.map((cat, idx) => {
              // Map categories to match state values
              const isCatActive =
                activeCategory === cat ||
                (idx === 0 && (activeCategory === "All" || activeCategory === "الكل")) ||
                (idx === 1 && (activeCategory === "Commercial" || activeCategory === "تجاري")) ||
                (idx === 2 && (activeCategory === "Residential" || activeCategory === "سكني")) ||
                (idx === 3 && (activeCategory === "Modernization" || activeCategory === "تحديث مصاعد"));

              const getTargetCategory = () => {
                if (idx === 0) return isRTL ? "الكل" : "All";
                if (idx === 1) return isRTL ? "تجاري" : "Commercial";
                if (idx === 2) return isRTL ? "سكني" : "Residential";
                return isRTL ? "تحديث مصاعد" : "Modernization";
              };

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(getTargetCategory())}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs font-semibold border transition-all duration-300",
                    isCatActive
                      ? "bg-[#ec4e39] border-[#ec4e39] text-[#FAF0ED]"
                      : "border-[var(--c-border)]/30 hover:border-[#ec4e39] hover:bg-[#ec4e39]/5 text-[var(--c-text)]/70 hover:text-[#ec4e39]",
                    isRTL && "font-cairo"
                  )}
                  aria-label={`Filter projects by ${cat}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* DESKTOP VIEW: Circular WebGL/Grabbing Gallery (Interactive & Lightweight) */}
          <div className="hidden md:block completed-gallery-wrap relative w-full h-[480px] lg:h-[550px] overflow-hidden my-4">
            <CircularGallery
              key={activeCategory} // Force reset CircularGallery on category change
              items={galleryItems}
              bend={3}
              textColor={isDark ? "#c5a880" : "#ec4e39"}
              borderRadius={0.04}
              scrollEase={0.03}
              scrollSpeed={1.8}
              font={isRTL ? "bold 20px Cairo" : "bold 20px Figtree"}
            />
          </div>

          {/* MOBILE VIEW: Small touch-swipe slider container (height 260px–320px, 70-82vw cards) */}
          <div className="block md:hidden w-full overflow-hidden my-4">
            <div
              ref={mobileScrollRef}
              className="flex overflow-x-auto gap-4 scrollbar-none snap-x snap-mandatory scroll-smooth w-full px-1 py-2"
            >
              {filteredGridItems.map((proj, idx) => (
                <div
                  key={idx}
                  className="w-[78vw] shrink-0 snap-center rounded-[24px] overflow-hidden flex flex-col h-[300px] transition-colors"
                  style={{ border: '1px solid var(--c-border)', backgroundColor: 'var(--c-card-bg)', boxShadow: 'var(--shadow-md)' }}
                >
                  {/* Image container */}
                  <div className="relative w-full h-[170px] overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                      sizes="80vw"
                      loading="lazy"
                    />
                  </div>
                  {/* Info details */}
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <span className={cn("text-[9px] uppercase tracking-wider font-bold text-[#ec4e39] block", isRTL && "font-cairo")}>
                        {proj.category}
                      </span>
                      <h4 className={cn("text-xs font-semibold text-[var(--c-text)] mt-1 truncate", isRTL && "font-cairo")}>
                        {proj.title}
                      </h4>
                    </div>
                    {/* Location & Details button */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[var(--c-border)]/10">
                      <span className={cn("text-[10px] text-[var(--c-text)]/50 tracking-wide", isRTL && "font-cairo")}>
                        {proj.location}
                      </span>
                      <button
                        onClick={() => {
                          const featuredEl = document.getElementById("featured-masterpiece");
                          if (featuredEl) {
                            featuredEl.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className={cn("text-[10px] font-bold text-[#ec4e39] hover:text-[#0b0a0a] hover:underline transition-colors", isRTL && "font-cairo")}
                        aria-label={`View details for ${proj.title}`}
                      >
                        {content.viewDetails}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. PROJECT GALLERY (REAL PROJECTS) */}
        <div ref={videoSectionRef} className="pt-16 pb-12 relative z-10">
          <div className="pb-8">
            <span className={cn("text-[#ec4e39] text-[10px] md:text-xs font-bold uppercase tracking-widest", isRTL && "font-cairo")}>
              {isRTL ? "معرض المشروعات" : "Project Gallery"}
            </span>
            <h3 className={cn("text-xl md:text-2xl lg:text-3.5xl font-serif text-[var(--c-text)] font-semibold mt-1", isRTL && "font-cairo")}>
              {content.videoTitle}
            </h3>
            <p className={cn("text-sm text-[var(--c-text)]/60 max-w-xl mt-2", isRTL && "font-cairo")}>
              {content.videoDesc}
            </p>
          </div>

          {/* Grid layout (3 desktop, 2 tablet, 1 mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full mt-6">
            {content.gallery.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage({ src: item.image, title: item.title })}
                className="relative rounded-[24px] overflow-hidden border text-start flex flex-col justify-end group outline-none aspect-[16/10] w-full cursor-pointer"
                style={{ borderColor: 'var(--c-border)' }}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  loading="lazy"
                />
                
                {/* Gradient mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                {/* View icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center border-2 border-white/30 bg-black/20 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 group-focus:opacity-100 z-10"
                  style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>

                {/* Info contents */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end min-h-[140px] pointer-events-none">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/70 font-bold mb-2">
                    <span>{item.location}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ec4e39]" />
                    <span>{item.type}</span>
                  </div>

                  <h4 className={cn("text-sm lg:text-base font-semibold leading-tight font-serif text-white truncate", isRTL && "font-cairo")}>
                    {item.title}
                  </h4>

                  <p className={cn("text-[11px] text-white/50 mt-1 leading-relaxed select-text truncate", isRTL && "font-cairo")}>
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 4. REAL PROJECTS IN MOTION — VIDEO GALLERY */}
        <div className="pt-16 pb-8 relative z-10">
          <div className="pb-8">
            <span className={cn("text-[#ec4e39] text-[10px] md:text-xs font-bold uppercase tracking-widest", isRTL && "font-cairo")}>
              {isRTL ? "مشروعاتنا الحقيقية" : "Real Projects"}
            </span>
            <h3 className={cn("text-xl md:text-2xl lg:text-3.5xl font-serif text-[var(--c-text)] font-semibold mt-1", isRTL && "font-cairo")}>
              {content.videosTitle}
            </h3>
            <p className={cn("text-sm text-[var(--c-text)]/60 max-w-xl mt-2", isRTL && "font-cairo")}>
              {content.videosDesc}
            </p>
          </div>

          {/* Desktop: 3-col grid | Mobile: horizontal scroll */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {content.videos.map((video, idx) => (
              <button
                key={idx}
                onClick={() => setActiveVideo({ src: video.src, title: video.title, poster: video.poster })}
                className="relative rounded-[24px] overflow-hidden border text-start flex flex-col justify-end group outline-none aspect-[4/3] w-full cursor-pointer"
                style={{ borderColor: 'var(--c-border)' }}
                aria-label={`Play video: ${video.title}`}
              >
                {/* Poster image */}
                <Image
                  src={video.poster}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  loading="lazy"
                />

                {/* Gradient mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                {/* Play button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/60 bg-black/30 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#ec4e39] group-hover:border-[#ec4e39] group-hover:scale-110 z-10">
                  <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Info */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end min-h-[120px] pointer-events-none">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/70 font-bold mb-2">
                    <span>{video.location}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ec4e39]" />
                    <span>{video.category}</span>
                  </div>
                  <h4 className={cn("text-sm lg:text-base font-semibold leading-tight font-serif text-white truncate", isRTL && "font-cairo")}>
                    {video.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-none" ref={mobileScrollRef}>
            <div className="flex gap-4 w-max">
              {content.videos.map((video, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVideo({ src: video.src, title: video.title, poster: video.poster })}
                  className="relative rounded-[20px] overflow-hidden border flex-shrink-0 text-start flex flex-col justify-end group outline-none w-[280px] aspect-[4/3] cursor-pointer"
                  style={{ borderColor: 'var(--c-border)' }}
                  aria-label={`Play video: ${video.title}`}
                >
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="280px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center border-2 border-white/60 bg-black/30 backdrop-blur-sm z-10">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end min-h-[100px] pointer-events-none">
                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-wider text-white/70 font-bold mb-1">
                      <span>{video.location}</span>
                    </div>
                    <h4 className={cn("text-xs font-semibold leading-tight font-serif text-white truncate", isRTL && "font-cairo")}>
                      {video.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 5. FEATURED PROJECT CARD */}
        <div id="featured-masterpiece" ref={featuredRef} className="pt-16 border-t border-[var(--c-border)]/20 mt-10">
          <div className="pb-8">
            <span className={cn("text-[#ec4e39] text-[10px] md:text-xs font-bold uppercase tracking-widest", isRTL && "font-cairo")}>
              {content.featuredTitle}
            </span>
            <h3 className={cn("text-xl md:text-2xl lg:text-3.5xl font-serif text-[var(--c-text)] font-semibold mt-1", isRTL && "font-cairo")}>
              {content.featuredProject.title}
            </h3>
          </div>

          <div className="relative w-full rounded-[24px] lg:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[460px]"
            style={{ border: '1px solid var(--c-border)', backgroundColor: 'var(--c-surface)', boxShadow: 'var(--shadow-xl)' }}>
            {/* Image Block */}
            <div className="w-full lg:w-[55%] relative min-h-[300px] lg:min-h-auto">
              <Image
                src={content.featuredProject.image}
                alt={content.featuredProject.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 95vw"
                priority
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full">
                {content.featuredProject.status}
              </div>
            </div>

            {/* Content Info Block */}
            <div className="w-full lg:w-[45%] p-8 lg:p-12 flex flex-col justify-between gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-wider font-bold text-[var(--c-text)]/40">
                  <span>{content.featuredProject.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-border)]/60" />
                  <span>{content.featuredProject.location}</span>
                </div>
                
                <h4 className={cn("text-2xl font-serif font-bold text-[var(--c-text)] mt-4", isRTL && "font-cairo")}>
                  {content.featuredProject.title}
                </h4>
                
                <div className="text-xs uppercase font-semibold text-[#ec4e39] tracking-wider mt-1">
                  {content.featuredProject.type}
                </div>

                <p className={cn("text-sm text-[var(--c-text)]/70 mt-6 leading-relaxed select-text", isRTL && "font-cairo")}>
                  {content.featuredProject.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--c-border)]/20 flex items-center justify-between">
                <div className="text-[10px] text-[var(--c-text)]/40 uppercase tracking-widest">
                  {isRTL ? "١٩٧٩ - التميز الهندسي" : "ESTABLISHED 1979"}
                </div>
                <a
                  href="#contact"
                  className={cn(
                    "text-xs uppercase font-bold text-[#ec4e39] hover:text-[var(--c-text)] transition-colors duration-300 flex items-center gap-1.5",
                    isRTL && "font-cairo"
                  )}
                >
                  <span>{isRTL ? "طلب استشارة" : "Request Consultation"}</span>
                  <svg className="w-3.5 h-3.5 transform rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM CTA BANNER */}
        <div
          ref={ctaRef}
          className="mt-24 p-8 lg:p-12 rounded-[24px] lg:rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group z-10"
          style={{ border: '1px solid var(--c-border)', backgroundColor: 'var(--c-surface)', boxShadow: 'var(--shadow-lg)' }}
        >
          <div className="flex flex-col gap-1 text-center md:text-start relative z-10">
            <span className={cn("text-[9px] uppercase tracking-widest text-[#ec4e39] font-bold", isRTL && "font-cairo")}>
              {isRTL ? "حلول هندسية مخصصة" : "CUSTOM ENGINEERING"}
            </span>
            <h3 className={cn("text-lg lg:text-xl font-medium text-[var(--c-text)]", isRTL && "font-cairo")}>
              <VariableProximity
                label={content.ctaTitle}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 800, 'opsz' 40"
                containerRef={ctaRef}
                radius={150}
                falloff="linear"
                className="font-medium text-[var(--c-text)] font-sans"
              />
            </h3>
            <p className={cn("text-xs lg:text-sm text-[var(--c-text)]/60 mt-1 max-w-xl", isRTL && "font-cairo")}>
              {content.ctaDesc}
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            <Magnetic>
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center gap-2 bg-[#ec4e39] hover:bg-[#FAF0ED] text-[#FAF0ED] hover:text-[#0b0a0a] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:scale-105 border border-[#ec4e39]",
                  isRTL && "font-cairo"
                )}
              >
                <span>{content.ctaBtn}</span>
                <svg className="w-3.5 h-3.5 transform rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </Magnetic>
          </div>
        </div>

      </div>

      {/* 7. VIDEO PLAYBACK MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#ec4e39] text-white flex items-center justify-center border border-white/10 hover:border-transparent transition-all focus:ring-2 focus:ring-[#ec4e39] outline-none"
              aria-label="Close video"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <div className="relative w-full aspect-video bg-black rounded-[24px] overflow-hidden shadow-2xl border border-white/10">
              <video
                src={activeVideo.src}
                controls
                muted
                preload="metadata"
                playsInline
                className="w-full h-full object-contain"
                poster={activeVideo.poster}
              />
            </div>

            {/* Title */}
            <div className="mt-4 text-white/80 text-sm font-medium tracking-wide text-center px-6">
              {activeVideo.title}
            </div>
          </div>
        </div>
      )}

      {/* 8. INTERACTIVE IMAGE LIGHTBOX MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#ec4e39] text-white flex items-center justify-center border border-white/10 hover:border-transparent transition-all focus:ring-2 focus:ring-[#ec4e39] outline-none"
              aria-label="Close"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Lightbox Image */}
            <div className="relative w-full h-full max-h-[85vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            {/* Title */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-wide text-center px-6 py-2 rounded-full bg-black/50 backdrop-blur-sm">
              {activeImage.title}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
