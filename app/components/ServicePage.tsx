"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import StickyCursor from "./StickyCursor";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import { ChevronLeft, Check, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ServicePageProps {
  lang?: "en" | "ar";
  serviceKey: "electric" | "hydraulic" | "panoramic" | "food";
}

const content = {
  en: {
    electric: {
      title: "Electric Elevators",
      subtitle: "Reliable vertical transit for commercial & residential buildings",
      description: "Our electric traction elevators combine German and Italian engineering with precision installation. Designed for medium to high-rise buildings, they deliver smooth, quiet, and energy-efficient performance.",
      heroImage: "/images/2026-07-05 07.13.17.jpg",
      features: [
        "German & Italian traction machines",
        "Energy-efficient VVVF drives",
        "Smooth acceleration & deceleration",
        "Quiet operation < 50 dB",
        "Load capacity up to 2500 kg",
        "Custom cabin finishes",
      ],
      specs: [
        { label: "Max Travel", value: "Up to 60m" },
        { label: "Max Speed", value: "2.5 m/s" },
        { label: "Capacity", value: "630 – 2500 kg" },
        { label: "Power", value: "3-Phase, 380V" },
        { label: "Safety", value: "EN 81-20/50" },
      ],
      backLabel: "Back to Services",
      ctaTitle: "Need an Electric Elevator?",
      ctaDesc: "Get a free consultation and quote for your project.",
      ctaButton: "Contact Us",
    },
    hydraulic: {
      title: "Hydraulic Elevators",
      subtitle: "Smooth, robust lifting for villas & low-rise buildings",
      description: "Ideal for low-rise buildings and private villas, our hydraulic elevators offer smooth operation, high reliability, and require no overhead machine room — perfect for existing structures.",
      heroImage: "/images/2026-07-05 07.13.17.jpg",
      features: [
        "No overhead machine room required",
        "Smooth & quiet hydraulic operation",
        "Ideal for 2–6 floor buildings",
        "Load capacity up to 1000 kg",
        "Emergency manual lowering",
        "Minimal structural impact",
      ],
      specs: [
        { label: "Max Travel", value: "Up to 20m" },
        { label: "Max Speed", value: "1.0 m/s" },
        { label: "Capacity", value: "320 – 1000 kg" },
        { label: "Power", value: "Single/3-Phase" },
        { label: "Safety", value: "EN 81-2" },
      ],
      backLabel: "Back to Services",
      ctaTitle: "Looking for a Hydraulic Elevator?",
      ctaDesc: "Get a free site survey and quotation.",
      ctaButton: "Contact Us",
    },
    panoramic: {
      title: "Panoramic Elevators",
      subtitle: "Luxury glass elevators that transform your space",
      description: "Make a statement with our panoramic glass elevators. Designed for luxury villas, hotels, malls, and premium commercial spaces, these elevators combine breathtaking views with world-class German engineering.",
      heroImage: "/images/2026-07-05 07.13.17.jpg",
      features: [
        "Full-height tempered glass panels",
        "Custom round or rectangular designs",
        "LED ambient lighting systems",
        "German traction or hydraulic options",
        "Capacity up to 1000 kg",
        "Architectural finish integration",
      ],
      specs: [
        { label: "Max Travel", value: "Up to 40m" },
        { label: "Max Speed", value: "1.5 m/s" },
        { label: "Capacity", value: "320 – 1000 kg" },
        { label: "Glass Type", value: "Tempered Laminated" },
        { label: "Safety", value: "EN 81-20/50" },
      ],
      backLabel: "Back to Services",
      ctaTitle: "Design Your Panoramic Elevator",
      ctaDesc: "Schedule a design consultation today.",
      ctaButton: "Contact Us",
    },
    food: {
      title: "Food & Service Elevators",
      subtitle: "Compact vertical transport for hospitality & kitchens",
      description: "Streamline your operations with our compact service elevators. Perfect for restaurants, hotels, kitchens, and villas, they safely transport food, goods, and light cargo between floors.",
      heroImage: "/images/2026-07-05 07.13.17.jpg",
      features: [
        "Compact footprint — fits tight spaces",
        "Stainless steel interior options",
        "Load capacity up to 500 kg",
        "Quiet & reliable operation",
        "Easy to clean & maintain",
        "Custom tray & shelf configurations",
      ],
      specs: [
        { label: "Max Travel", value: "Up to 15m" },
        { label: "Max Speed", value: "0.5 m/s" },
        { label: "Capacity", value: "50 – 500 kg" },
        { label: "Cabin Material", value: "Stainless Steel" },
        { label: "Safety", value: "EN 81-3" },
      ],
      backLabel: "Back to Services",
      ctaTitle: "Need a Service Elevator?",
      ctaDesc: "Get a custom design and quote for your space.",
      ctaButton: "Contact Us",
    },
  },
  ar: {
    electric: {
      title: "مصاعد كهربائية",
      subtitle: "نقل رأسي موثوق للمباني التجارية والسكنية",
      description: "تجمع مصاعدنا الكهربائية بين الهندسة الألمانية والإيطالية والتركيب الدقيق. صُممت للمباني متوسطة وعالية الارتفاع، وتتميز بأداء سلس وهادئ وموفر للطاقة.",
      heroImage: "/images/2026-07-05 07.13.17.jpg",
      features: [
        "ماكينات جر ألمانية وإيطالية",
        "محركات VVVF موفرة للطاقة",
        "تسارع وتباطؤ سلس",
        "تشغيل هادئ أقل من 50 ديسيبل",
        "سعة تحميل تصل إلى 2500 كجم",
        "تشطيبات كابينة مخصصة",
      ],
      specs: [
        { label: "أقصى ارتفاع", value: "حتى 60 متر" },
        { label: "أقصى سرعة", value: "2.5 م/ث" },
        { label: "السعة", value: "630 – 2500 كجم" },
        { label: "الطاقة", value: "ثلاثي الأطوار، 380 فولت" },
        { label: "الأمان", value: "EN 81-20/50" },
      ],
      backLabel: "العودة للخدمات",
      ctaTitle: "تحتاج مصعد كهربائي؟",
      ctaDesc: "احصل على استشارة مجانية وعرض سعر لمشروعك.",
      ctaButton: "تواصل معنا",
    },
    hydraulic: {
      title: "مصاعد هيدروليك",
      subtitle: "رفع سلس وقوي للفيلات والمباني منخفضة الارتفاع",
      description: "مناسبة للمباني منخفضة الارتفاع والفيلات الخاصة، توفر مصاعدنا الهيدروليكية تشغيلاً سلساً وموثوقية عالية دون الحاجة إلى غرفة ماكينة علوية — مثالية للمباني القائمة.",
      heroImage: "/images/2026-07-05 07.13.17.jpg",
      features: [
        "لا حاجة لغرفة ماكينة علوية",
        "تشغيل هيدروليك سلس وهادئ",
        "مناسب للمباني من 2 إلى 6 طوابق",
        "سعة تحميل تصل إلى 1000 كجم",
        "خفض يدوي للطوارئ",
        "تأثير هيكلي ضئيل",
      ],
      specs: [
        { label: "أقصى ارتفاع", value: "حتى 20 متر" },
        { label: "أقصى سرعة", value: "1.0 م/ث" },
        { label: "السعة", value: "320 – 1000 كجم" },
        { label: "الطاقة", value: "أحادي/ثلاثي أطوار" },
        { label: "الأمان", value: "EN 81-2" },
      ],
      backLabel: "العودة للخدمات",
      ctaTitle: "تبحث عن مصعد هيدروليك؟",
      ctaDesc: "احصل على معاينة مجانية للموقع وعرض سعر.",
      ctaButton: "تواصل معنا",
    },
    panoramic: {
      title: "مصاعد بانوراما",
      subtitle: "مصاعد زجاجية فاخرة تحول مساحتك",
      description: "أضف لمسة جمالية مع مصاعدنا البانورامية الزجاجية. صُممت للفلل الفاخرة والفنادق والمولات والمساحات التجارية الراقية، وتجمع بين الإطلالات الخلابة والهندسة الألمانية العالمية.",
      heroImage: "/images/2026-07-05 07.13.17.jpg",
      features: [
        "ألواح زجاجية مقسّى بارتفاع كامل",
        "تصاميم دائرية أو مستطيلة مخصصة",
        "أنظمة إضاءة LED محيطة",
        "خيارات جر ألمانية أو هيدروليكية",
        "سعة تصل إلى 1000 كجم",
        "تكامل مع التشطيبات المعمارية",
      ],
      specs: [
        { label: "أقصى ارتفاع", value: "حتى 40 متر" },
        { label: "أقصى سرعة", value: "1.5 م/ث" },
        { label: "السعة", value: "320 – 1000 كجم" },
        { label: "نوع الزجاج", value: "مقسّى مصفح" },
        { label: "الأمان", value: "EN 81-20/50" },
      ],
      backLabel: "العودة للخدمات",
      ctaTitle: "صمم مصعدك البانورامي",
      ctaDesc: "احجز استشارة تصميم اليوم.",
      ctaButton: "تواصل معنا",
    },
    food: {
      title: "مصاعد طعام وخدمات",
      subtitle: "نقل رأسي مضغوط للضيافة والمطابخ",
      description: "بسّط عملياتك مع مصاعد الخدمات المدمجة لدينا. مثالية للمطاعم والفنادق والمطابخ والفيلات، وتنقل الطعام والبضائع والحمولات الخفيفة بأمان بين الطوابق.",
      heroImage: "/images/2026-07-05 07.13.17.jpg",
      features: [
        "بصمة مدمجة — تناسب المساحات الضيقة",
        "خيارات داخلية من الستانلس ستيل",
        "سعة تحميل تصل إلى 500 كجم",
        "تشغيل هادئ وموثوق",
        "سهل التنظيف والصيانة",
        "تكوينات أرفف وصوانٍ مخصصة",
      ],
      specs: [
        { label: "أقصى ارتفاع", value: "حتى 15 متر" },
        { label: "أقصى سرعة", value: "0.5 م/ث" },
        { label: "السعة", value: "50 – 500 كجم" },
        { label: "مادة الكابينة", value: "ستانلس ستيل" },
        { label: "الأمان", value: "EN 81-3" },
      ],
      backLabel: "العودة للخدمات",
      ctaTitle: "تحتاج مصعد خدمات؟",
      ctaDesc: "احصل على تصميم مخصص وعرض سعر لمساحتك.",
      ctaButton: "تواصل معنا",
    },
  },
};

export default function ServicePage({ lang = "en", serviceKey }: ServicePageProps) {
  const isRTL = lang === "ar";
  const t = content[lang][serviceKey];
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      if (!hero) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const heroTitle = hero.querySelector(".hero-title");
      const heroSub = hero.querySelector(".hero-subtitle");
      const heroDesc = hero.querySelector(".hero-desc");

      if (heroTitle) {
        tl.fromTo(heroTitle,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
        );
      }
      if (heroSub) {
        tl.fromTo(heroSub,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );
      }
      if (heroDesc) {
        tl.fromTo(heroDesc,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
      }

      const featureItems = featuresRef.current?.querySelectorAll(".feature-item");
      if (featureItems?.length) {
        gsap.fromTo(featureItems,
          { opacity: 0, x: isRTL ? -20 : 20 },
          { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const specItems = specsRef.current?.querySelectorAll(".spec-item");
      if (specItems?.length) {
        gsap.fromTo(specItems,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.4, ease: "power2.out",
            scrollTrigger: {
              trigger: specsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      try { ctx.revert(); } catch (_) {}
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isRTL, serviceKey]);

  const backHref = lang === "ar" ? "/ar#services" : "/#services";

  return (
    <>
      <StickyCursor />
      <SideMenu lang={lang} />
      <main dir={isRTL ? "rtl" : "ltr"} className="w-full" style={{ backgroundColor: 'var(--c-bg)', color: 'var(--c-text)' }}>

        {/* Back Navigation */}
        <div className="relative z-20 max-w-[1200px] mx-auto px-4 md:px-8 pt-8">
          <Link
            href={backHref}
            className={cn(
              "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest transition-all duration-300 hover:gap-3 group",
              isRTL && "font-cairo flex-row-reverse"
            )}
            style={{ color: 'var(--c-text-secondary)' }}
          >
            <ChevronLeft className={cn("w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1", isRTL && "rotate-180")} />
            <span>{t.backLabel}</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative w-full px-4 md:px-8 lg:px-16 pt-8 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className={cn("flex flex-col lg:flex-row gap-12 lg:gap-20 items-center", isRTL && "lg:flex-row-reverse")}>
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[#ec4e39] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">{isRTL ? "الخدمة" : "SERVICE"}</span>
                <h1 className={cn(
                  "hero-title font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight mb-5",
                  isRTL && "font-cairo font-bold"
                )}>
                  {t.title}
                </h1>
                <p className={cn("hero-subtitle text-base md:text-lg lg:text-xl mb-4", isRTL && "font-cairo")} style={{ color: 'var(--c-gold)' }}>
                  {t.subtitle}
                </p>
                <p className={cn("hero-desc text-sm md:text-base leading-relaxed max-w-xl", isRTL && "font-cairo")} style={{ color: 'var(--c-text-secondary)' }}>
                  {t.description}
                </p>
              </div>
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative w-full aspect-[4/3] rounded-[24px] lg:rounded-[32px] overflow-hidden">
                  <Image
                    src={t.heroImage}
                    alt={t.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    priority
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--c-overlay) 0%, transparent 50%)' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
          <div style={{ borderTop: '1px solid var(--c-border)' }} />
        </div>

        {/* Features & Specs */}
        <section className="relative w-full px-4 md:px-8 lg:px-16 py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto">
            <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16", isRTL && "lg:direction-rtl")}>
              {/* Features */}
              <div ref={featuresRef}>
                <h2 className={cn(
                  "text-xl md:text-2xl font-medium mb-8",
                  isRTL && "font-cairo"
                )}>
                  {isRTL ? "المميزات" : "Features & Benefits"}
                </h2>
                <ul className="space-y-4">
                  {t.features.map((feature, idx) => (
                    <li key={idx} className="feature-item flex items-start gap-3 text-sm md:text-base" style={{ color: 'var(--c-text-secondary)' }}>
                      <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#ec4e39' }}>
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span className={cn(isRTL && "font-cairo")}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <div ref={specsRef}>
                <h2 className={cn(
                  "text-xl md:text-2xl font-medium mb-8",
                  isRTL && "font-cairo"
                )}>
                  {isRTL ? "المواصفات" : "Technical Specifications"}
                </h2>
                <div className="rounded-[20px] overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
                  <table className="w-full">
                    <tbody>
                      {t.specs.map((spec, idx) => (
                        <tr key={idx} className="spec-item" style={{
                          borderBottom: idx < t.specs.length - 1 ? '1px solid var(--c-border)' : 'none',
                        }}>
                          <td className={cn(
                            "py-4 px-5 text-xs font-bold uppercase tracking-widest w-2/5",
                            isRTL && "font-cairo"
                          )} style={{ color: 'var(--c-text-secondary)' }}>
                            {spec.label}
                          </td>
                          <td className={cn(
                            "py-4 px-5 text-sm font-medium",
                            isRTL && "font-cairo"
                          )}>
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="relative w-full px-4 md:px-8 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-[24px] lg:rounded-[32px] p-10 md:p-14 lg:p-16 text-center" style={{
              border: '1px solid var(--c-border)',
              background: 'var(--gradient-warm)',
            }}>
              <h2 className={cn(
                "text-2xl md:text-3xl lg:text-4xl font-medium mb-3",
                isRTL && "font-cairo font-bold"
              )}>
                {t.ctaTitle}
              </h2>
              <p className={cn("text-sm md:text-base mb-8", isRTL && "font-cairo")} style={{ color: 'var(--c-text-secondary)' }}>
                {t.ctaDesc}
              </p>
              <a
                href={lang === "ar" ? "/ar#contact" : "#contact"}
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
                <span>{t.ctaButton}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        <ContactSection lang={lang} />
      </main >
      <Footer lang={lang} />
    </>
  );
}
