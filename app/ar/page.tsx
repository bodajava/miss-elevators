import type { Metadata } from "next";
import AureliaHero from "../components/AureliaHero";
import SideMenu from "../components/SideMenu";
import StickyCursor from "../components/StickyCursor";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import CurvedLoop from "@/components/ui/CurvedLoop";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "مصر العربية للمصاعد | شركة مصاعد في الجيزة ومصر",
  description: "شركة مصاعد رائدة في مصر والجيزة تأسست عام 1979. متخصصون في تركيب وصيانة مصاعد الفلل المنزلية بدون حفر ومصاعد البانوراما الزجاجية بأعلى معايير الأمان.",
  alternates: {
    canonical: "https://misr-elevators.com/ar",
    languages: {
      "en-US": "https://misr-elevators.com",
      "ar-EG": "https://misr-elevators.com/ar",
    },
  },
  openGraph: {
    title: "شركة مصر العربية للمصاعد | مصاعد فلل وبانوراما في مصر",
    description: "شركة مصاعد في الجيزة ومصر. تركيب وصيانة مصاعد الفلل والمصاعد الزجاجية البانورامية الفاخرة بمكونات ألمانية وإيطالية معتمدة.",
    url: "https://misr-elevators.com/ar",
    siteName: "مصر العربية للمصاعد",
    images: [
      {
        url: "https://misr-elevators.com/images/hero-elevator.png",
        width: 1200,
        height: 630,
        alt: "شركة مصر العربية للمصاعد - مصعد بانورامي زجاجي فاخر بمصر",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة مصر العربية للمصاعد | مصاعد فلل وبانوراما في مصر",
    description: "شركة مصاعد في الجيزة ومصر. تركيب وصيانة مصاعد الفلل والمصاعد الزجاجية البانورامية الفاخرة بمكونات ألمانية وإيطالية معتمدة.",
    images: ["https://misr-elevators.com/images/hero-elevator.png"],
  },
};

export default function HomeAr() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://misr-elevators.com/ar/#organization",
        "name": "مصر العربية للمصاعد",
        "url": "https://misr-elevators.com/ar",
        "logo": {
          "@type": "ImageObject",
          "url": "https://misr-elevators.com/images/hero-elevator.png",
          "caption": "مصر العربية للمصاعد"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+20-2-3761-4500",
          "contactType": "customer service",
          "areaServed": "EG",
          "availableLanguage": ["Arabic", "English"]
        },
        "sameAs": [
          "https://www.facebook.com/share/19JhLUey1d/?mibextid=wwXIfr",
          "https://www.instagram.com/arab_egypt_for_elevator?igsh=MXJqcnpoajB0bDlhaA=="
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://misr-elevators.com/ar/#localbusiness",
        "name": "مصر العربية للمصاعد",
        "image": "https://misr-elevators.com/images/hero-elevator.png",
        "telephone": "+20-2-3761-4500",
        "email": "info@arabegypt-elevators.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "١٢ شارع البطل أحمد عبد العزيز، المهندسين",
          "addressLocality": "الجيزة",
          "addressCountry": "EG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.0468984,
          "longitude": 31.2016335
        },
        "url": "https://misr-elevators.com/ar",
        "priceRange": "$$$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "Service",
        "name": "توريد وتركيب مصاعد ركاب",
        "provider": {
          "@id": "https://misr-elevators.com/ar/#organization"
        },
        "areaServed": "EG",
        "description": "توريد وتركيب مصاعد ركاب سكنية وتجارية فاخرة في القاهرة والجيزة بأعلى معايير الأمان."
      },
      {
        "@type": "Service",
        "name": "تصميم مصاعد بانوراما زجاجية",
        "provider": {
          "@id": "https://misr-elevators.com/ar/#organization"
        },
        "areaServed": "EG",
        "description": "مصاعد زجاجية بانورامية دائرية ومربعة مخصصة ذات إطلالة فاخرة وتشطيبات نحاسية وذهبية راقية."
      },
      {
        "@type": "Service",
        "name": "صيانة مصاعد طوارئ ٢٤/٧",
        "provider": {
          "@id": "https://misr-elevators.com/ar/#organization"
        },
        "areaServed": "EG",
        "description": "عقود صيانة دورية شهرية وخدمة طوارئ سريعة لإنقاذ أعطال المصاعد على مدار ٢٤ ساعة طوال أيام الأسبوع."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "كم من الوقت يستغرق تركيب المصعد في مصر؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "عادة يستغرق توريد وتركيب المصعد في مصر من ٤ إلى ٨ أسابيع، ويتوقف ذلك على مدى جاهزية بئر المصعد الإنشائي والمواصفات المطلوبة وتصاريح الاستيراد."
            }
          },
          {
            "@type": "Question",
            "name": "هل توفرون خدمة إنقاذ الأعطال الطارئة في القاهرة والجيزة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، نوفر خدمة طوارئ سريعة على مدار ٢٤ ساعة طوال أيام الأسبوع من خلال مهندسي صيانة معتمدين في كافة مناطق القاهرة والجيزة."
            }
          },
          {
            "@type": "Question",
            "name": "هل ماكينات ومكونات مصاعدكم مستوردة ومعتمدة أوروبياً؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، كافة الماكينات والكنترولات وأجهزة الأمان مستوردة من كبرى الماركات الألمانية والإيطالية المعتمدة وتحمل شهادات الجودة الأوروبية CE ومطابقة لسلامة المصاعد الكود EN 81."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAF0ED] dark:bg-black text-neutral-900 dark:text-[#FAF0ED] transition-colors duration-500 overflow-x-hidden selection:bg-[#ec4e39] selection:text-white">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Sticky Custom Circular Cursor */}
      <StickyCursor />

      {/* Floating Side Menu Drawer (Awwwards Style Toggler) */}
      <SideMenu lang="ar" />

      {/* HERO SECTION WITH EMBEDDED TRANSPARENT GLASS NAV BAR */}
      <AureliaHero lang="ar" />

      {/* CURVED LOOP MARQUEE SEPARATOR */}
      <div className="w-full bg-[var(--c-bg)] py-3 overflow-hidden border-y border-[var(--c-border)]/15">
        <CurvedLoop
          marqueeText="مصر العربية للمصاعد ✦ فخامة التنقل السكني منذ ١٩٧٩ ✦ أمان إيطالي معتمد ✦ ماكينات ألمانية متطورة ✦ مصاعد بانوراما فاخرة ✦"
          speed={1.5}
          curveAmount={80}
          direction="right"
          interactive={true}
          className="text-lg md:text-xl font-bold tracking-widest text-[#ec4e39] font-cairo"
        />
      </div>

      {/* ABOUT SECTION */}
      <AboutSection lang="ar" />

      {/* SERVICES SECTION */}
      <ServicesSection lang="ar" />

      {/* PROJECTS SECTION */}
      <ProjectsSection lang="ar" />

      {/* CONTACT SECTION */}
      <ContactSection lang="ar" />

      {/* FOOTER */}
      <Footer lang="ar" />
    </div>
  );
}
