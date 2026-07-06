"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SideMenuProps {
  lang?: "en" | "ar";
}

const menuItemsEN = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const menuItemsAR = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "الخدمات", href: "#services" },
  { label: "المشاريع", href: "#projects" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function SideMenu({ lang = "en" }: SideMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLDivElement>(null);
  const btnSliderRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const isRTL = lang === "ar";
  const items = isRTL ? menuItemsAR : menuItemsEN;

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (timelineRef.current) {
      if (nextState) {
        navRef.current?.classList.add("nav--visible");
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const menuPanel = menuPanelRef.current;
      const menuBtn = menuBtnRef.current;
      const btnSlider = btnSliderRef.current;
      const nav = navRef.current;

      if (!header || !menuPanel || !menuBtn || !btnSlider || !nav) return;

      const navLinks = header.querySelectorAll(".nav__link");
      const footerLinks = header.querySelectorAll(".nav__footer-link");

      const isMobile = window.innerWidth <= 640;

      let targetWidth: number;
      let targetHeight: number;
      let targetTop: number;
      let targetXOffset: number;
      let targetRadius: number;

      const xOffsetKey = isRTL ? "left" : "right";

      if (isMobile) {
        const headerRect = header.getBoundingClientRect();
        const xAxisPos = isRTL
          ? headerRect.left
          : window.innerWidth - headerRect.right;

        targetWidth = window.innerWidth;
        targetHeight = window.innerHeight;
        targetTop = -headerRect.top;
        targetXOffset = -xAxisPos;
        targetRadius = 0;
      } else {
        targetWidth = 480;
        targetHeight = 650;
        targetTop = -25;
        targetXOffset = -25;
        targetRadius = 25;
      }

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.inOut" },
        onReverseComplete: () => {
          nav.classList.remove("nav--visible");
        },
      });

      tl.to(
        menuPanel,
        {
          width: targetWidth,
          height: targetHeight,
          top: targetTop,
          [xOffsetKey]: targetXOffset,
          borderRadius: targetRadius,
          duration: 0.75,
        },
        0
      );

      tl.to(
        menuBtn,
        {
          borderRadius: targetRadius,
          duration: 0.75,
        },
        0
      );

      tl.to(
        btnSlider,
        {
          top: "-100%",
          duration: 0.5,
        },
        0
      );

      tl.add(() => nav.classList.add("nav--visible"), 0.2);

      tl.set(
        navLinks,
        {
          opacity: 0,
          rotateX: 90,
          y: 80,
          x: isRTL ? 20 : -20,
          transformPerspective: 300,
          transformOrigin: isRTL ? "bottom right" : "bottom left",
        },
        0
      );

      tl.to(
        navLinks,
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          x: 0,
          duration: 0.65,
          ease: "back.out(1.2)",
          stagger: 0.1,
        },
        0.5
      );

      tl.set(
        footerLinks,
        {
          opacity: 0,
          y: 20,
        },
        0
      );

      tl.to(
        footerLinks,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
        },
        0.75
      );

      timelineRef.current = tl;
    }, headerRef);

    return () => {
      try { ctx.revert(); } catch (_) {}
    };
  }, [isRTL]);

  useEffect(() => {
    const handleToggle = () => {
      toggleMenu();
    };
    window.addEventListener("toggle-sidemenu", handleToggle);
    return () => window.removeEventListener("toggle-sidemenu", handleToggle);
  }, [isOpen]);

  return (
    <div
      ref={headerRef}
      className={cn(
        "header z-[999]",
        isRTL
          ? "left-4 top-4 sm:left-12 sm:top-12 right-auto"
          : "right-4 top-4 sm:right-12 sm:top-12 left-auto"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        ref={menuPanelRef}
        className={cn("sm-drawer-menu", isRTL ? "left-0" : "right-0")}
        id="menuPanel"
      >
        <div
          ref={menuBtnRef}
          onClick={toggleMenu}
          className={cn(
            "sm-drawer-menu-btn",
            isRTL ? "left-0" : "right-0"
          )}
          id="menuBtn"
          role="button"
          tabIndex={0}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div ref={btnSliderRef} className="sm-drawer-menu-btn__slider" id="btnSlider">
            <div className="sm-drawer-menu-btn__item">
              <div className="sm-drawer-menu-btn__label">
                <p className={isRTL ? "font-cairo font-semibold" : ""}>
                  {isRTL ? "القائمة" : "Menu"}
                </p>
                <p className={isRTL ? "font-cairo font-semibold" : ""}>
                  {isRTL ? "القائمة" : "Menu"}
                </p>
              </div>
            </div>
            <div className="sm-drawer-menu-btn__item sm-drawer-menu-btn__item--close">
              <div className="sm-drawer-menu-btn__label">
                <p className={isRTL ? "font-cairo font-semibold" : ""}>
                  {isRTL ? "إغلاق" : "Close"}
                </p>
                <p className={isRTL ? "font-cairo font-semibold" : ""}>
                  {isRTL ? "إغلاق" : "Close"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav ref={navRef} className="nav" id="nav">
          {/* Logo in menu */}
          <div className="absolute top-8 left-8 rtl:left-auto rtl:right-8 z-10">
            <div className="w-12 h-12 rounded-[14px] overflow-hidden relative bg-[#0b0a0a] border border-white/10 shadow-lg">
              <Image
                src="/images/logo.jpg"
                alt="Masr Al Arabya Elevators"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
          </div>
          <div className="nav__body" id="navLinks">
            {items.map((item) => (
              <div key={item.label} className="nav__link-wrap">
                <a
                  href={item.href}
                  onClick={toggleMenu}
                  className={cn(
                    "nav__link font-sans font-medium uppercase tracking-tight",
                    isRTL && "font-cairo text-right text-3xl"
                  )}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          <div className="nav__footer" id="footerLinks">
            <a
              href="tel:+20237614500"
              className={cn(
                "nav__footer-link",
                isRTL && "font-cairo text-right"
              )}
            >
              {isRTL ? "اتصل بنا هاتفياً" : "Call Phone"}
            </a>
            <a
              href="https://wa.me/201001234567"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "nav__footer-link",
                isRTL && "font-cairo text-right"
              )}
            >
              {isRTL ? "واتساب" : "WhatsApp"}
            </a>
            <a
              href={isRTL ? "/" : "/ar"}
              className={cn(
                "nav__footer-link font-semibold",
                isRTL && "font-cairo text-right"
              )}
            >
              {isRTL ? "English" : "العربية"}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
