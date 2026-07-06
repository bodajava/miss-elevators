"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

interface ServicesSectionProps {
  lang?: "en" | "ar";
}

const copy = {
  en: {
    tagline: "Our Services",
    sectionNum: "02 / SOLUTIONS & SUPPORT",
    title: "Complete Elevator Solutions",
    description: "From custom architectural design and supply to certified installation and proactive 24/7 maintenance, we deliver lifetime engineering support for passenger and service lifts.",
    featuredLabel: "FEATURED SERVICE",
    featuredTitle: "Supply & Installation",
    featuredDesc: "Professional elevator supply and installation for residential, commercial, and private projects.",
    featuredSpecs: [
      "Custom Architectural CAD Planning",
      "German & Italian Lift Machinery",
      "Certified Safety Inspections",
      "Structural Steel Shaft Construction",
    ],
    services: [
      {
        num: "01",
        title: "Maintenance",
        desc: "Scheduled and emergency maintenance to keep elevators safe, stable, and reliable.",
      },
      {
        num: "02",
        title: "Repair",
        desc: "Fast repair for electrical, mechanical, hydraulic, and control system issues.",
      },
      {
        num: "03",
        title: "Electric Elevators",
        desc: "Reliable electric elevator systems for buildings, offices, and commercial spaces.",
      },
      {
        num: "04",
        title: "Hydraulic Elevators",
        desc: "Smooth hydraulic elevator solutions for villas, low-rise buildings, and special-use spaces.",
      },
      {
        num: "05",
        title: "Panoramic Elevators",
        desc: "Luxury glass panoramic elevators designed for villas, malls, hotels, and premium interiors.",
      },
      {
        num: "06",
        title: "Food Elevators",
        desc: "Compact service elevators for restaurants, kitchens, villas, and hospitality projects.",
      },
    ],
    ctaTag: "INQUIRIES",
    ctaText: "Need a custom elevator solution?",
    ctaButton: "Contact Us",
  },
  ar: {
    tagline: "خدماتنا",
    sectionNum: "٠٢ / الحلول والدعم",
    title: "حلول متكاملة للمصاعد",
    description: "من التصميم الهندسي المخصص والتوريد إلى التركيب المعتمد والصيانة الوقائية على مدار الساعة، نقدم دعماً هندسياً شاملاً طوال عمر مصاعد الركاب والخدمات.",
    featuredLabel: "الخدمة الأبرز",
    featuredTitle: "التوريد والتركيب",
    featuredDesc: "توريد وتركيب مصاعد احترافية للمباني السكنية والتجارية والمشروعات الخاصة.",
    featuredSpecs: [
      "تخطيط هندسي مخصص ثنائي وثلاثي الأبعاد",
      "ماكينات مصاعد ألمانية وإيطالية بالكامل",
      "فحوصات واختبارات أمان معتمدة",
      "تأسيس وتشييد هياكل الآبار الفولاذية",
    ],
    services: [
      {
        num: "٠١",
        title: "صيانة",
        desc: "صيانة دورية وطارئة للحفاظ على أمان واستقرار وكفاءة المصاعد.",
      },
      {
        num: "٠٢",
        title: "إصلاح",
        desc: "إصلاح سريع لأعطال الكهرباء والميكانيكا والهيدروليك وأنظمة التحكم.",
      },
      {
        num: "٠٣",
        title: "مصاعد كهربائية",
        desc: "أنظمة مصاعد كهربائية موثوقة للمباني والمكاتب والمساحات التجارية.",
      },
      {
        num: "٠٤",
        title: "مصاعد هيدروليك",
        desc: "حلول مصاعد هيدروليك ناعمة للفيلات والمباني قليلة الارتفاع والاستخدامات الخاصة.",
      },
      {
        num: "٠٥",
        title: "مصاعد بانوراما",
        desc: "مصاعد زجاجية فاخرة للفيلات والمولات والفنادق والتصميمات الداخلية الراقية.",
      },
      {
        num: "٠٦",
        title: "مصاعد طعام",
        desc: "مصاعد خدمة صغيرة للمطاعم والمطابخ والفيلات ومشروعات الضيافة.",
      },
    ],
    ctaTag: "الاستفسارات",
    ctaText: "تحتاج حل مصعد مخصص لمشروعك؟",
    ctaButton: "تواصل معنا",
  },
};

const splitTextWords = (text: string, isRTL: boolean) => {
  return text.split(/\s+/).map((word, idx, arr) => (
    <span key={idx} className="inline-block overflow-hidden pb-1">
      <span className="services-word inline-block origin-bottom-left">{word}</span>
      {idx < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
    </span>
  ));
};

export default function ServicesSection({ lang = "en" }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuredCardRef = useRef<HTMLDivElement>(null);
  const ctaBannerRef = useRef<HTMLDivElement>(null);

  const isRTL = lang === "ar";
  const content = isRTL ? copy.ar : copy.en;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const words = section.querySelectorAll(".services-word");
      const serviceCards = section.querySelectorAll(".service-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(taglineRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      )
        .fromTo(words,
          { opacity: 0, yPercent: 100 },
          { opacity: 1, yPercent: 0, stagger: 0.015, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(descriptionRef.current,
          { opacity: 0, y: 20 },
          { opacity: 0.7, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(featuredCardRef.current,
          { opacity: 0, scale: 0.96, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(serviceCards,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(ctaBannerRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );

    }, sectionRef);

    return () => {
      try { ctx.revert(); } catch (_) {}
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isRTL]);

    // Service page routes
  const serviceRoutes: Record<string, Record<string, string>> = {
    "Electric Elevators": { en: "/services/electric-elevators", ar: "/ar/services/electric-elevators" },
    "Hydraulic Elevators": { en: "/services/hydraulic-elevators", ar: "/ar/services/hydraulic-elevators" },
    "Panoramic Elevators": { en: "/services/panoramic-elevators", ar: "/ar/services/panoramic-elevators" },
    "Food Elevators": { en: "/services/food-elevators", ar: "/ar/services/food-elevators" },
  };

  const getServiceLink = (title: string): string | null => {
    const routes = serviceRoutes[title];
    return routes ? routes[lang] : null;
  };

  const shouldNavigate = (title: string): boolean => {
    return title in serviceRoutes;
  };

  // Helper to render customized architectural vector icons matching elevator guide theme
  const renderIcon = (index: number) => {
    switch (index) {
      case 0: // Maintenance: target & circles
        return (
          <svg className="w-6 h-6 text-[#ec4e39]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        );
      case 1: // Repair: mechanical crossed structural lines
        return (
          <svg className="w-6 h-6 text-[#ec4e39]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4 20L20 4M20 20L4 4" strokeDasharray="2 2" />
            <circle cx="12" cy="12" r="4" className="fill-[#0b0a0a]" />
            <path strokeLinecap="round" d="M12 8v8M8 12h8" />
          </svg>
        );
      case 2: // Electric: elevator car guide rail traction lines
        return (
          <svg className="w-6 h-6 text-[#ec4e39]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M6 3v18M18 3v18" strokeOpacity="0.4" />
            <rect x="8" y="7" width="8" height="10" rx="1" />
            <path d="M12 3v4M12 17v4" strokeDasharray="2 2" />
          </svg>
        );
      case 3: // Hydraulic: piston vertical force indicator
        return (
          <svg className="w-6 h-6 text-[#ec4e39]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="10" y="8" width="4" height="13" rx="1" fill="currentColor" fillOpacity="0.1" />
            <path strokeLinecap="round" d="M12 8V2m-3 3l3-3 3 3" />
            <line x1="6" y1="21" x2="18" y2="21" strokeLinecap="round" />
          </svg>
        );
      case 4: // Panoramic: rounded viewing cabin lines
        return (
          <svg className="w-6 h-6 text-[#ec4e39]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M5 20h14M12 4v16" strokeDasharray="3 3" />
            <path strokeLinecap="round" d="M6 7c0-3.3 2.7-6 6-6s6 2.7 6 6v10H6V7Z" />
            <line x1="9" y1="12" x2="15" y2="12" />
          </svg>
        );
      case 5: // Food & Cargo: nested dumbwaiter container
        return (
          <svg className="w-6 h-6 text-[#ec4e39]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="5" y="5" width="14" height="14" rx="2" />
            <line x1="5" y1="12" x2="19" y2="12" strokeDasharray="2 2" />
            <rect x="8" y="7" width="8" height="3" rx="0.5" strokeOpacity="0.6" />
            <rect x="8" y="14" width="8" height="3" rx="0.5" strokeOpacity="0.6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-24 md:py-36 lg:py-44 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: 'var(--c-bg)', color: 'var(--c-text)' }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background architectural structural wire decoration */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-8 md:left-16 w-[1px] bg-gradient-to-b from-[#c5a880]/30 via-[#c5a880]/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-8 md:right-16 w-[1px] bg-gradient-to-b from-[#c5a880]/30 via-[#c5a880]/10 to-transparent" />
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/15 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/15 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* HEADER SECTION */}
        <div className="pb-12 border-b relative z-10" style={{ borderColor: 'var(--c-border)' }}>
          <span
            ref={taglineRef}
            className={cn(
              "inline-block uppercase tracking-[0.25em] text-xs md:text-sm font-semibold select-none",
              "text-[#ec4e39]",
              isRTL && "font-cairo"
            )}
          >
            {content.tagline}
          </span>
          <span className={cn("text-[10px] md:text-xs tracking-wider mt-1.5 block select-none", isRTL && "font-cairo")} style={{ color: 'var(--c-text-tertiary)' }}>
            {content.sectionNum}
          </span>
          <h2
            ref={titleRef}
            className={cn(
              "font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-[1.05] max-w-4xl tracking-tight mt-6",
              isRTL && "font-cairo font-bold leading-tight"
            )}
            style={{ color: 'var(--c-text)' }}
          >
            {splitTextWords(content.title, isRTL)}
          </h2>
          <p
            ref={descriptionRef}
            className={cn(
              "text-sm md:text-base lg:text-lg max-w-2xl mt-6 leading-relaxed select-text",
              isRTL && "font-cairo"
            )}
            style={{ color: 'var(--c-text-secondary)' }}
          >
            {content.description}
          </p>
        </div>

        {/* SERVICES CONTENT BENTO GRID */}
        <div style={{ display: "grid" }} className="grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-16 relative z-10 items-stretch">

          {/* LEFT: FEATURED SERVICE CARD */}
          <div className="lg:col-span-5 flex flex-col h-full">
              <div
                ref={featuredCardRef}
                className="relative w-full flex-1 min-h-[480px] lg:min-h-full rounded-[24px] lg:rounded-[32px] overflow-hidden flex flex-col justify-end p-8 lg:p-10 group"
                style={{ border: '1px solid var(--c-border)', boxShadow: 'var(--shadow-lg)' }}
              >
              {/* Featured service card image background */}
              <Image
                src="/images/2026-07-05 07.13.17.jpg"
                alt={isRTL ? "توريد وتركيب مصاعد معتمد" : "Certified elevator supply & installation"}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(min-width: 1024px) 35vw, 90vw"
              />
              {/* Dramatic overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a0a] via-[#0b0a0a]/40 to-black/35 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 w-full">
                <span className={cn("text-[#ec4e39] text-[10px] md:text-xs font-bold uppercase tracking-widest", isRTL && "font-cairo")}>
                  {content.featuredLabel}
                </span>
                <h3 className={cn("text-2xl lg:text-3.5xl font-serif text-white font-semibold mt-2 leading-none", isRTL && "font-cairo")}>
                  {content.featuredTitle}
                </h3>
                <p className={cn("text-xs lg:text-sm text-white/75 mt-3 leading-relaxed max-w-md", isRTL && "font-cairo")}>
                  {content.featuredDesc}
                </p>

                {/* Micro spec sheets inside featured card */}
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  {content.featuredSpecs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ec4e39]" />
                      <span className={cn("text-[11px] lg:text-xs text-white/80 font-medium", isRTL && "font-cairo")}>
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Animated Arrow Button */}
                <div className="mt-8 flex items-center gap-2 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300">
                  <span className={cn("text-[10px] lg:text-xs font-bold tracking-widest uppercase text-white", isRTL && "font-cairo")}>
                    {isRTL ? "استكشف خدمات التركيب" : "Explore Installation"}
                  </span>
                  <svg className="w-4 h-4 text-[#ec4e39]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SUPPORTING SERVICES GRID */}
          <div style={{ display: "grid" }} className="lg:col-span-7 grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {content.services.map((ser, idx) => {
              const link = getServiceLink(ser.title);
              const cardContent = (
                <div
                  className={cn(
                    "service-card glass-panel p-6 lg:p-8 rounded-[20px] lg:rounded-[24px] flex flex-col justify-between min-h-[220px] transition-all duration-500 group relative overflow-hidden cursor-pointer",
                    "hover:-translate-y-1.5"
                  )}
                  style={{
                    border: '1px solid var(--c-border)',
                    transition: 'all 0.4s cubic-bezier(0.76, 0, 0.24, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--c-accent)';
                    e.currentTarget.style.backgroundColor = 'var(--c-surface-hover)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--c-border)';
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  {/* Thin lines acting as guides on card edges */}
                  <div className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r from-[#ec4e39] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-[1px] h-8 bg-gradient-to-b from-[#ec4e39] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest transition-colors duration-300" style={{ color: 'var(--c-text-tertiary)' }}>
                        {ser.num}
                      </span>
                      <div className="transition-transform duration-300 group-hover:scale-105">
                        {renderIcon(idx)}
                      </div>
                    </div>

                    <h3 className={cn(
                      "text-lg lg:text-xl font-medium mt-6 transition-colors duration-300",
                      isRTL ? "font-cairo" : "font-sans"
                    )}>
                      {ser.title}
                    </h3>
                    <p className={cn(
                      "text-xs lg:text-sm leading-relaxed mt-2.5 transition-colors duration-300",
                      isRTL ? "font-cairo" : "font-sans"
                    )} style={{ color: 'var(--c-text-secondary)' }}>
                      {ser.desc}
                    </p>
                  </div>

                  <div className="w-full flex items-center justify-end pt-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
                      style={{ border: '1px solid var(--c-border)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#ec4e39';
                        e.currentTarget.style.backgroundColor = '#ec4e39';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--c-border)';
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.color = '';
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className={cn(
                          "w-3.5 h-3.5 transform transition-transform duration-300",
                          isRTL ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"
                        )}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              );

              if (link) {
                return (
                  <Link key={idx} href={link} className="block">
                    {cardContent}
                  </Link>
                );
              }

              return (
                <a key={idx} href="#contact" className="block">
                  {cardContent}
                </a>
              );
            })}
          </div>

        </div>

        {/* CTA BANNER ROW */}
        <div
          ref={ctaBannerRef}
          className="mt-20 py-10 px-6 md:px-14 rounded-[28px] flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10"
          style={{ border: '1px solid var(--c-border)', background: 'var(--gradient-warm)' }}
        >
          <div className="flex flex-col gap-1 text-center sm:text-start">
            <span className={cn("text-[9px] uppercase tracking-widest font-bold", isRTL && "font-cairo")} style={{ color: '#ec4e39' }}>
              {content.ctaTag}
            </span>
            <h3 className={cn("text-lg lg:text-xl font-medium", isRTL && "font-cairo")} style={{ color: 'var(--c-text)' }}>
              {content.ctaText}
            </h3>
          </div>

          <div className="shrink-0">
            <Magnetic>
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105",
                  isRTL && "font-cairo"
                )}
                style={{
                  backgroundColor: '#ec4e39',
                  color: '#FAF0ED',
                  boxShadow: '0 8px 30px rgba(236, 78, 57, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FAF0ED';
                  e.currentTarget.style.color = '#0b0a0a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ec4e39';
                  e.currentTarget.style.color = '#FAF0ED';
                }}
              >
                <span>{content.ctaButton}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </Magnetic>
          </div>
        </div>

      </div>
    </section>
  );
}
