"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";
import ThemeToggle from "./ThemeToggle";
import RotatingText from "@/components/ui/RotatingText";

interface AureliaHeroProps {
  lang?: "en" | "ar";
}

const copy = {
  en: {
    contact: "Get in Touch",
    wordmark: "MASR ARABYA",
    tag: "PREMIUM ELEVATORS",
    title: "Elegant Lifts for Modern Villas",
    sub: "Bespoke vertical transport solutions engineered with German machinery and Italian safety standards",
    explore: "Explore",
  },
  ar: {
    contact: "تواصل معنا",
    wordmark: "مصر العربية",
    tag: "حلول المصاعد الفاخرة",
    title: "مصاعد فاخرة للفلل الحديثة",
    sub: "حلول تنقل عمودي مخصصة بمكونات ألمانية وإيطالية مطابقة لأعلى المعايير في مصر",
    explore: "استكشف",
  },
};

export default function AureliaHero({ lang = "en" }: AureliaHeroProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const halfTopRef = useRef<HTMLSpanElement>(null);
  const halfBottomRef = useRef<HTMLSpanElement>(null);
  const loaderTitleRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isRTL = lang === "ar";
  const content = isRTL ? copy.ar : copy.en;

  // React helper to split text into words wrapped in spans
  const splitTextWords = (text: string) => {
    return text.split(/\s+/).map((word, idx, arr) => (
      <span key={idx} className="inline-block overflow-hidden">
        <span className="hero-word inline-block">{word}</span>
        {idx < arr.length - 1 && <span className="hero-space inline-block">&nbsp;</span>}
      </span>
    ));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const loader = loaderRef.current;
      const halfTop = halfTopRef.current;
      const halfBottom = halfBottomRef.current;
      const title = loaderTitleRef.current;
      const video = videoRef.current;
      const shell = shellRef.current;
      const heroWords = containerRef.current?.querySelectorAll(".hero-word");

      if (!loader || !halfTop || !halfBottom || !title || !video || !shell || !heroWords) return;

      // ──────────────────────────────────────────────
      // INITIAL STATES — GSAP owns anything it animates.
      // ──────────────────────────────────────────────
      gsap.set(title, { opacity: 0, letterSpacing: "0.3em" });
      gsap.set(video, { scale: 1.15 });
      gsap.set(shell, { opacity: 0 });
      gsap.set(heroWords, { yPercent: 100 });

      // ──────────────────────────────────────────────
      // MAIN TIMELINE
      // ──────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Title fade in
      tl.to(title, {
        opacity: 1,
        duration: 0.6,
        delay: 0.3,
      });

      // 2. Letter-spacing snap
      tl.to(
        title,
        {
          letterSpacing: "0.05em",
          duration: 0.7,
          ease: "power3.inOut",
        },
        "+=0.3"
      );

      // 3. PEEL — top half slides up, bottom half slides down.
      tl.to(
        halfTop,
        {
          yPercent: -100,
          duration: 1.3,
          ease: "power3.inOut",
        },
        "+=0.2"
      );

      tl.to(
        halfBottom,
        {
          yPercent: 100,
          duration: 1.3,
          ease: "power3.inOut",
        },
        "<"
      );

      // 4. Title fades + scales down as the peel pulls away
      tl.to(
        title,
        {
          opacity: 0,
          scale: 0.96,
          duration: 0.5,
          ease: "power2.in",
        },
        "<0.15"
      );

      // 5. Video zoom settles 1.15 → 1 during the peel
      tl.to(
        video,
        {
          scale: 1,
          duration: 1.4,
          ease: "expo.out",
        },
        "<"
      );

      // 6. Hide loader once bars are off-screen
      tl.set(loader, { display: "none" }, "+=0.05");

      // 7. Shell (header + hero) fades in
      tl.to(
        shell,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

      // 8. Hero words rise inside the parent's overflow:hidden
      tl.to(
        heroWords,
        {
          yPercent: 0,
          duration: 0.7,
          stagger: 0.05,
          ease: "power3.out",
        },
        "<0.1"
      );

      // ──────────────────────────────────────────────
      // SCROLL SHRINK — pin hero, scale down, round corners
      // ──────────────────────────────────────────────
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const el = containerRef.current;
        if (!el) return;
        gsap.to(el, {
          scale: 0.85,
          borderRadius: 24,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        const el = containerRef.current;
        if (!el) return;
        gsap.to(el, {
          scale: 0.92,
          borderRadius: 16,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, containerRef);

    return () => {
      try { ctx.revert(); } catch (_) {}
    };
  }, []);

  const handleMenuClick = () => {
    window.dispatchEvent(new CustomEvent("toggle-sidemenu"));
  };

  return (
    <div ref={containerRef} id="home" className="relative w-full h-screen overflow-hidden select-none bg-black">
      {/* ===== LOADER ===== */}
      <div ref={loaderRef} className="loader" id="js-loader">
        <span ref={halfTopRef} className="half half--top" id="js-half-top"></span>
        <span ref={halfBottomRef} className="half half--bottom" id="js-half-bottom"></span>

        <div ref={loaderTitleRef} className="loader__title" id="js-title">
          {isRTL ? (
            <>
              <span className="loader__word font-cairo">مصر</span>
              <span className="loader__dot"></span>
              <span className="loader__word font-cairo">العربية</span>
            </>
          ) : (
            <>
              <span className="loader__word">MASR</span>
              <span className="loader__dot"></span>
              <span className="loader__word">ARABYA</span>
            </>
          )}
        </div>
      </div>

      {/* ===== STAGE ===== */}
      <div className="stage">
        <div className="frame" id="js-frame">
          <video
            ref={videoRef}
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            className="w-full h-full object-cover"
          >
            <source src="https://de-puydt.b-cdn.net/de-puydt-moodfilm-compressed.mp4" type="video/mp4" />
          </video>
        </div>

        <div ref={shellRef} className="shell" id="js-shell" dir={isRTL ? "rtl" : "ltr"}>
          <header className="w-full flex items-center justify-between py-6 px-4 md:px-12 z-50">
            {/* Contact Link, Language, Theme switcher */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <a href="#contact" className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#FAF0ED] hover:text-[#ec4e39] transition-colors">
                {content.contact}
              </a>
              <span className="hidden sm:inline-block text-white/20 text-xs">|</span>
              <Link
                href={isRTL ? "/" : "/ar"}
                className="text-xs font-semibold text-[#ec4e39] hover:text-white transition-colors"
              >
                {isRTL ? "EN" : "العربية"}
              </Link>
              <span className="text-white/20 text-xs">|</span>
              <ThemeToggle />
            </div>

            {/* Center Logo */}
            <Link href="#home" className="absolute left-1/2 -translate-x-1/2 top-4 md:top-6 z-10 flex flex-col items-center shrink-0 select-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 40 40" aria-hidden="true" className="text-[#ec4e39] md:w-9 md:h-9 hover:rotate-12 transition-transform">
                <path fill="currentColor" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z" />
                <path fill="currentColor" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              <p className={cn("tracking-wider text-[10px] md:text-sm mt-1 text-[#FAF0ED] uppercase hidden min-[360px]:block", isRTL ? "font-cairo" : "font-sans")}>{content.wordmark}</p>
              <span className={cn("text-[6px] md:text-[8px] tracking-widest text-neutral-400 hidden md:block", isRTL ? "font-cairo" : "font-sans")}>{content.tag}</span>
            </Link>

            {/* Invisible spacer matching the Awwwards pill button width to balance the flex logo centering */}
            <div className="w-10 md:w-[130px] shrink-0" />
          </header>

          <div className="hero">
            <p className={cn("hero__title font-serif flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3", isRTL && "font-cairo font-semibold")} data-hero dir={isRTL ? "rtl" : "ltr"}>
              {splitTextWords(isRTL ? "مصاعد فاخرة لـ" : "Elegant Lifts for")}
              <span className="inline-block overflow-hidden relative">
                <span className="hero-word inline-block text-[#ec4e39] dark:text-[#ec4e39]">
                  <RotatingText
                    texts={
                      isRTL
                        ? ["الفلل الحديثة", "القصور الراقية", "المنازل الفخمة", "المباني الذكية"]
                        : ["Modern Villas", "Luxury Estates", "Private Penthouses", "Bespoke Mansions"]
                    }
                    mainClassName="overflow-hidden justify-center py-0.5 text-[#ec4e39]"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.015}
                    splitLevelClassName="overflow-hidden pb-0.5"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2500}
                    splitBy="words"
                    elementLevelClassName={cn(isRTL ? "font-cairo font-bold" : "font-serif font-bold")}
                  />
                </span>
              </span>
            </p>
            <span className={cn("hero__sub font-sans", isRTL && "font-cairo")} data-hero>
              {splitTextWords(content.sub)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
