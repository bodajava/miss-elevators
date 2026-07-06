"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface AboutSectionProps {
  lang?: "en" | "ar";
}

const copy = {
  en: {
    tagline: "Since 1979",
    sectionNum: "01 / IDENTITY",
    title: "Elevating Egyptian Homes & Businesses for Generations",
    p1: "Arab Egypt Co. for Lifts specializes in supplying, installing, repairing, and maintaining elevator systems across Egypt. From residential buildings and private villas to museums, factories, restaurants, hospitals, and commercial spaces, the company delivers practical vertical mobility solutions built around safety, reliability, and long-term support.",
    p2: "With a large portfolio of completed projects in 2025, including electric, hydraulic, panoramic, and food elevators, the company continues to serve clients who need dependable engineering and responsive maintenance.",
    philosophyTitle: "Engineering Philosophy",
    philosophyText: "We blend German engineering precision with Italian safety components to craft bespoke elevators that feel like architecture in motion. Every lift is a statement of craftsmanship, safety, and silence.",
    solutionsTitle: "Custom Solutions",
    solutions: [
      { name: "Electric Lift Systems", desc: "High-speed traction lifts for luxury towers & residences" },
      { name: "Hydraulic Villa Lifts", desc: "No-pit, low-headroom customized residential lifts" },
      { name: "Panoramic Glass Lifts", desc: "Iconic structural glass elevators with panoramic views" },
      { name: "Food & Service Lifts", desc: "Reliable commercial dumbwaiters and cargo systems" },
    ],
    stats: [
      { value: "1979", label: "Established" },
      { value: "213+", label: "Projects Completed" },
      { value: "04", label: "Tailored Solutions" },
    ],
    trustTitle: "Craftsmanship Standards",
    trustItems: [
      "German Machinery Standards",
      "Italian Certified Components",
      "Certified Installation Procedures",
      "24/7 Priority Support Desk",
      "Full Compliance Certification",
    ],
    badgeText: "47 YEARS OF EXCELLENCE",
  },
  ar: {
    tagline: "منذ ١٩٧٩",
    sectionNum: "٠١ / الهوية والتاريخ",
    title: "نرتقي بالمنازل والشركات المصرية لأجيال متعاقبة",
    p1: "شركة مصر العربية للمصاعد متخصصة في توريد وتركيب وإصلاح وصيانة أنظمة المصاعد في مصر. من المباني السكنية والفيلات الخاصة إلى المتاحف والمصانع والمطاعم والمستشفيات والمشروعات التجارية، تقدم الشركة حلول مصاعد عملية تعتمد على الأمان والجودة والدعم المستمر.",
    p2: "مع سابقة أعمال كبيرة خلال عام ٢٠٢٥ تشمل المصاعد الكهربائية والهيدروليكية والبانورامية ومصاعد الطعام، تواصل الشركة خدمة العملاء الذين يحتاجون إلى هندسة موثوقة وصيانة سريعة.",
    philosophyTitle: "فلسفة الهندسة لدينا",
    philosophyText: "ندمج دقة الهندسة الألمانية مع معايير الأمان الإيطالية لتشكيل مصاعد مخصصة تبدو كأنها عمارة متحركة. كل مصعد هو تجسيد للحرفية والهدوء والأمان المطلق.",
    solutionsTitle: "حلولنا المخصصة",
    solutions: [
      { name: "أنظمة المصاعد الكهربائية", desc: "مصاعد جر فائقة السرعة للأبراج والمنشآت السكنية الفاخرة" },
      { name: "مصاعد الفلل الهيدروليكية", desc: "مصاعد سكنية مخصصة لا تتطلب حفرة عميقة أو مساحة علوية كبيرة" },
      { name: "مصاعد البانوراما الزجاجية", desc: "مصاعد زجاجية أيقونية تمنحك إطلالة بانورامية رائعة" },
      { name: "مصاعد الخدمة والأغذية", desc: "أنظمة مصاعد طعام وبضائع تجارية عالية الاعتمادية" },
    ],
    stats: [
      { value: "١٩٧٩", label: "تأسست" },
      { value: "٢١٣+", label: "مشروع مكتمل" },
      { value: "٠٤", label: "حلول متخصصة" },
    ],
    trustTitle: "معايير الحرفية الفائقة",
    trustItems: [
      "معايير الآلات الألمانية",
      "مكونات إيطالية معتمدة",
      "إجراءات تركيب معتمدة عالمياً",
      "دعم فني ذو أولوية ٢٤/٧",
      "شهادات مطابقة الأمان الكاملة",
    ],
    badgeText: "٤٧ عاماً من التميز الهندسي",
  },
};

const splitTextWords = (text: string, isRTL: boolean) => {
  return text.split(/\s+/).map((word, idx, arr) => (
    <span key={idx} className="inline-block overflow-hidden pb-1">
      <span className="about-word inline-block origin-bottom-left">{word}</span>
      {idx < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
    </span>
  ));
};

export default function AboutSection({ lang = "en" }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const primaryMediaRef = useRef<HTMLDivElement>(null);
  const secondaryMediaRef = useRef<HTMLDivElement>(null);
  const trustSheetRef = useRef<HTMLDivElement>(null);
  const experienceBadgeRef = useRef<HTMLDivElement>(null);

  const statCard1Ref = useRef<HTMLDivElement>(null);
  const statCard2Ref = useRef<HTMLDivElement>(null);
  const statCard3Ref = useRef<HTMLDivElement>(null);

  const isRTL = lang === "ar";
  const content = isRTL ? copy.ar : copy.en;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const aboutWords = section.querySelectorAll(".about-word");
      const paragraphs = section.querySelectorAll(".about-paragraph");

      // ──────────────────────────────────────────────
      // INTRO REVEAL TIMELINE (Triggers immediately on enter)
      // ──────────────────────────────────────────────
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
        .fromTo(aboutWords,
          { opacity: 0, yPercent: 100 },
          { opacity: 1, yPercent: 0, stagger: 0.015, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        )
        .fromTo(paragraphs,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(".about-philosophy",
          { opacity: 0, x: isRTL ? 30 : -30 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.25"
        )
        .fromTo(".solution-item",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(primaryMediaRef.current,
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(secondaryMediaRef.current,
          { opacity: 0, scale: 0.85, x: isRTL ? -25 : 25 },
          { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(experienceBadgeRef.current,
          { opacity: 0, scale: 0.6, rotation: -90 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.5"
        )
        .fromTo([statCard1Ref.current, statCard2Ref.current, statCard3Ref.current],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(trustSheetRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.3"
        );

      // ──────────────────────────────────────────────
      // SCROLL-DRIVEN PARALLAX DEPTH
      // ──────────────────────────────────────────────
      gsap.to(primaryMediaRef.current, {
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(secondaryMediaRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(experienceBadgeRef.current, {
        rotation: 120,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Parallax shifts for floating stats cards
      gsap.to(statCard1Ref.current, {
        yPercent: -12,
        xPercent: isRTL ? 6 : -6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(statCard2Ref.current, {
        yPercent: 10,
        xPercent: isRTL ? -8 : 8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(statCard3Ref.current, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

    }, sectionRef);

    // Clean up all ScrollTriggers on unmount
    return () => {
      try { ctx.revert(); } catch (_) {}
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isRTL]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 md:py-36 lg:py-44 px-4 md:px-8 lg:px-16 bg-[var(--c-bg)] text-[var(--c-text)] overflow-hidden transition-colors duration-500"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-[1400px] mx-auto relative">
        {/* Subtle structural elevator-inspired guidelines */}
        <div className="absolute top-0 bottom-0 left-4 md:left-8 lg:left-12 w-[1px] bg-gradient-to-b from-[var(--c-border)]/20 via-[var(--c-border)]/5 to-transparent pointer-events-none opacity-40" />
        <div className="absolute top-0 bottom-0 right-4 md:right-8 lg:right-12 w-[1px] bg-gradient-to-b from-[var(--c-border)]/20 via-[var(--c-border)]/5 to-transparent pointer-events-none opacity-40" />

        {/* 1. EDITORIAL HEADER SECTION */}
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
            {splitTextWords(content.title, isRTL)}
          </h2>
        </div>

        {/* 2. BODY CONTENT & DUAL MEDIA SHOWCASE */}
        <div style={{ display: "grid" }} className="grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-16 relative z-10">

          {/* LEFT COLUMN: Narrative, Philosophy and Solutions */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="space-y-6 max-w-xl">
              <p className={cn(
                "about-paragraph text-[clamp(0.95rem,1.4vw,1.08rem)] leading-relaxed opacity-80 text-justify select-text",
                isRTL && "font-cairo"
              )}>
                {content.p1}
              </p>
              <p className={cn(
                "about-paragraph text-[clamp(0.95rem,1.4vw,1.08rem)] leading-relaxed opacity-80 text-justify select-text",
                isRTL && "font-cairo"
              )}>
                {content.p2}
              </p>
            </div>

            {/* Quote-style Engineering Philosophy */}
            <div className="about-philosophy mt-12 pl-6 rtl:pl-0 rtl:pr-6 border-l-2 rtl:border-r-2 border-[#ec4e39] max-w-xl">
              <h4 className={cn("text-[10px] uppercase tracking-widest text-[#ec4e39] font-bold select-none", isRTL && "font-cairo")}>
                {content.philosophyTitle}
              </h4>
              <p className={cn(
                "text-sm md:text-base italic text-[var(--c-text)]/75 mt-2 leading-relaxed select-text",
                isRTL && "font-cairo"
              )}>
                "{content.philosophyText}"
              </p>
            </div>

            {/* Custom Interactive Solutions List */}
            <div className="about-solutions mt-16 max-w-xl">
              <h3 className={cn("text-xs uppercase tracking-widest text-[var(--c-text)]/40 font-bold mb-6 select-none", isRTL && "font-cairo")}>
                {content.solutionsTitle}
              </h3>
              <div className="divide-y divide-[var(--c-border)]/20 border-y border-[var(--c-border)]/20">
                {content.solutions.map((sol, index) => (
                  <div
                    key={index}
                    className="solution-item group py-5 flex items-center justify-between transition-all duration-300 hover:bg-[var(--c-card-bg)] hover:px-4 cursor-pointer"
                  >
                    <div className="flex flex-col gap-1 pr-4 rtl:pr-0 rtl:pl-4">
                      <h4 className={cn(
                        "text-base md:text-lg font-medium text-[var(--c-text)] transition-colors duration-300 group-hover:text-[#ec4e39]",
                        isRTL ? "font-cairo" : "font-sans"
                      )}>
                        {sol.name}
                      </h4>
                      <p className={cn(
                        "text-xs md:text-sm text-[var(--c-text)]/50 transition-colors duration-300 group-hover:text-[var(--c-text)]/75",
                        isRTL ? "font-cairo" : "font-sans"
                      )}>
                        {sol.desc}
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[var(--c-border)]/30 group-hover:border-[#ec4e39] group-hover:bg-[#ec4e39] group-hover:text-white transition-all duration-300">
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
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Cinematic Media Showcase, Badges & Floating Cards */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end min-h-[580px] sm:min-h-[700px] lg:min-h-[850px]">
            {/* Structural vertical guides inside the visual area */}
            <div className="absolute top-0 bottom-0 left-12 lg:left-24 w-[1px] bg-gradient-to-b from-[var(--c-border)]/15 via-[var(--c-border)]/5 to-transparent z-0 pointer-events-none" />
            <div className="absolute top-1/4 bottom-0 right-12 lg:right-24 w-[1px] bg-gradient-to-b from-[var(--c-border)]/15 via-[var(--c-border)]/5 to-transparent z-0 pointer-events-none" />

            {/* Structural horizontal guides */}
            <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--c-border)]/10 to-transparent z-0 pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--c-border)]/10 to-transparent z-0 pointer-events-none" />

            <div className="relative w-[85%] lg:w-[90%] aspect-[3/4] z-10 flex items-center justify-center">

              {/* PRIMARY MEDIA CARD */}
              <div
                ref={primaryMediaRef}
                className="relative w-full h-full rounded-[24px] lg:rounded-[32px] overflow-hidden border border-[var(--c-border)]/30 shadow-2xl group"
              >
                <Image
                  src="/images/2026-07-05 06.53.17.jpg"
                  alt={isRTL ? "مصعد بانورامي زجاجي فاخر" : "Premium glass elevator installation"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  priority
                />

                {/* Cinema overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/40 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* TRUST SPEC SHEET PANEL */}
                <div
                  ref={trustSheetRef}
                  className={cn(
                    "absolute bottom-6 z-30 p-5 rounded-xl max-w-[270px] border shadow-2xl select-none",
                    "bg-black/65 backdrop-blur-xl border-white/10 dark:border-white/5",
                    isRTL ? "right-6" : "left-6"
                  )}
                >
                  <h4 className={cn("text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#ec4e39] mb-3", isRTL && "font-cairo")}>
                    {content.trustTitle}
                  </h4>
                  <ul className="space-y-2.5">
                    {content.trustItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ec4e39] shrink-0" />
                        <span className={cn("text-[10.5px] text-white/90 font-medium tracking-wide leading-tight", isRTL && "font-cairo")}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SECONDARY MEDIA CARD (Precision Maintenance Overlay) */}
              <div
                ref={secondaryMediaRef}
                className={cn(
                  "absolute z-20 w-[42%] aspect-[1] rounded-[16px] lg:rounded-[24px] overflow-hidden border-[4px] lg:border-[6px] border-[var(--c-bg)] shadow-2xl transition-colors duration-500",
                  "-bottom-10",
                  isRTL ? "-left-5 lg:-left-12" : "-right-5 lg:-right-12"
                )}
              >
                <Image
                  src="/images/2026-07-05 06.53.43.jpg"
                  alt={isRTL ? "صيانة هندسية دقيقة" : "Precision engineering maintenance"}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 18vw, 36vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* STAMP-STYLE EXPERIENCE ROTATING BADGE */}
              <div
                ref={experienceBadgeRef}
                className={cn(
                  "absolute z-30 flex items-center justify-center select-none",
                  "top-6",
                  isRTL ? "-left-8 lg:-left-16" : "-right-8 lg:-right-16"
                )}
              >
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-full bg-[#ec4e39] text-[#FAF0ED] shadow-2xl group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full animate-[spin_25s_linear_infinite]"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text className={cn("text-[7.5px] fill-current uppercase tracking-[0.12em] font-semibold", isRTL && "font-cairo")}>
                      <textPath href="#circlePath" startOffset="0%">
                        {content.badgeText} • {content.badgeText} •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[12px] lg:text-[13px] font-bold tracking-widest leading-none">1979</span>
                    <span className="text-[5.5px] lg:text-[6px] tracking-widest opacity-60 leading-normal uppercase">EST.</span>
                  </div>
                </div>
              </div>

              {/* FLOATING STATS CARD 1 (Established) */}
              <div
                ref={statCard1Ref}
                className={cn(
                  "absolute z-30 min-w-[130px] lg:min-w-[150px] p-4 rounded-xl shadow-xl border backdrop-blur-xl select-none transition-all duration-300 hover:scale-105",
                  "bg-white/65 dark:bg-neutral-950/65 border-black/10 dark:border-white/10 dark:shadow-[0_15px_30px_rgba(0,0,0,0.6)]",
                  "-top-8",
                  isRTL ? "right-2 lg:right-[-30px]" : "left-2 lg:left-[-30px]"
                )}
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-2xl lg:text-3xl font-extrabold text-[#ec4e39] tracking-tight leading-none">
                    {content.stats[0].value}
                  </span>
                  <span className={cn("text-[9px] uppercase tracking-wider text-[var(--c-text)]/50 font-semibold mt-1", isRTL && "font-cairo")}>
                    {content.stats[0].label}
                  </span>
                </div>
              </div>

              {/* FLOATING STATS CARD 2 (Projects Completed) */}
              <div
                ref={statCard2Ref}
                className={cn(
                  "absolute z-30 min-w-[130px] lg:min-w-[150px] p-4 rounded-xl shadow-xl border backdrop-blur-xl select-none transition-all duration-300 hover:scale-105",
                  "bg-white/65 dark:bg-neutral-950/65 border-black/10 dark:border-white/10 dark:shadow-[0_15px_30px_rgba(0,0,0,0.6)]",
                  "bottom-1/4 lg:bottom-1/3",
                  isRTL ? "left-2 lg:left-[-30px]" : "right-2 lg:right-[-30px]"
                )}
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-2xl lg:text-3xl font-extrabold text-[#ec4e39] tracking-tight leading-none">
                    {content.stats[1].value}
                  </span>
                  <span className={cn("text-[9px] uppercase tracking-wider text-[var(--c-text)]/50 font-semibold mt-1", isRTL && "font-cairo")}>
                    {content.stats[1].label}
                  </span>
                </div>
              </div>

              {/* FLOATING STATS CARD 3 (Customized Solutions) */}
              <div
                ref={statCard3Ref}
                className={cn(
                  "absolute z-30 min-w-[130px] lg:min-w-[150px] p-4 rounded-xl shadow-xl border backdrop-blur-xl select-none transition-all duration-300 hover:scale-105",
                  "bg-white/65 dark:bg-neutral-950/65 border-black/10 dark:border-white/10 dark:shadow-[0_15px_30px_rgba(0,0,0,0.6)]",
                  "-bottom-10 lg:-bottom-16",
                  "left-1/2 -translate-x-1/2 lg:left-1/4 lg:translate-x-0"
                )}
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-2xl lg:text-3xl font-extrabold text-[#ec4e39] tracking-tight leading-none">
                    {content.stats[2].value}
                  </span>
                  <span className={cn("text-[9px] uppercase tracking-wider text-[var(--c-text)]/50 font-semibold mt-1", isRTL && "font-cairo")}>
                    {content.stats[2].label}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
