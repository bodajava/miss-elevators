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
  title: {
    default: "مصر العربية للمصاعد | شركة مصاعد فاخرة في مصر منذ ١٩٧٩",
    template: "%s | مصر العربية للمصاعد",
  },
  description: "شركة مصر العربية للمصاعد — خبراء تركيب وتوريد وصيانة المصاعد الفاخرة في مصر منذ ١٩٧٩. مصاعد فلل منزلية، مصاعد بانوراما زجاجية، مصاعد هيدروليك، مصاعد كهربائية تجارية. معتمدة EN 81 وCE.",
  keywords: [
    "مصاعد مصر",
    "مصاعد بانوراما",
    "مصاعد هيدروليك",
    "مصاعد كهربائية",
    "شركة مصاعد مصر",
    "مصاعد فلل",
    "مصاعد منزلية",
    "تركيب مصاعد",
    "صيانة مصاعد",
    "مصاعد القاهرة",
    "مصاعد الجيزة",
    "elevator company Egypt",
    "luxury elevators Egypt",
  ],
  alternates: {
    canonical: "https://misr-elevators.com/ar",
    languages: {
      "en-US": "https://misr-elevators.com",
      "ar-EG": "https://misr-elevators.com/ar",
    },
  },
  openGraph: {
    title: "مصر العربية للمصاعد | مصاعد فلل وبانوراما وهيدروليك في مصر",
    description: "شركة مصاعد رائدة في مصر والجيزة منذ ١٩٧٩. تركيب وصيانة مصاعد الفلل والمصاعد الزجاجية البانورامية والمصاعد الهيدروليكية والكهربائية بمكونات ألمانية وإيطالية معتمدة.",
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
    title: "مصر العربية للمصاعد | مصاعد فلل وبانوراما في مصر",
    description: "شركة مصاعد رائدة في مصر منذ ١٩٧٩. مصاعد فلل وبانوراما ومصاعد هيدروليك بمكونات ألمانية وإيطالية معتمدة.",
    images: ["https://misr-elevators.com/images/hero-elevator.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
        "alternateName": "شركة مصر العربية للمصاعد",
        "url": "https://misr-elevators.com/ar",
        "logo": {
          "@type": "ImageObject",
          "url": "https://misr-elevators.com/images/hero-elevator.png",
          "caption": "مصر العربية للمصاعد - شركة مصاعد فاخرة في مصر"
        },
        "foundingDate": "1979",
        "description": "شركة رائدة في توريد وتركيب وصيانة المصاعد الفاخرة في مصر منذ ١٩٧٩.",
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
          "addressRegion": "محافظة الجيزة",
          "postalCode": "12655",
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
        },
        "areaServed": [
          { "@type": "City", "name": "القاهرة" },
          { "@type": "City", "name": "الجيزة" },
          { "@type": "City", "name": "الإسكندرية" },
          { "@type": "Country", "name": "مصر" }
        ]
      },
      {
        "@type": "Service",
        "name": "توريد وتركيب مصاعد كهربائية",
        "provider": { "@id": "https://misr-elevators.com/ar/#organization" },
        "areaServed": "EG",
        "description": "مصاعد كهربائية بأحدث التقنيات الألمانية والإيطالية للمباني التجارية والسكنية في مصر."
      },
      {
        "@type": "Service",
        "name": "توريد وتركيب مصاعد هيدروليك",
        "provider": { "@id": "https://misr-elevators.com/ar/#organization" },
        "areaServed": "EG",
        "description": "مصاعد هيدروليك ناعمة للفيلات والمباني منخفضة الارتفاع بدون حاجة لغرفة ماكينة."
      },
      {
        "@type": "Service",
        "name": "تصميم وتصنيع مصاعد بانوراما زجاجية",
        "provider": { "@id": "https://misr-elevators.com/ar/#organization" },
        "areaServed": "EG",
        "description": "مصاعد زجاجية بانورامية دائرية ومربعة مخصصة ذات إطلالة فاخرة وتشطيبات نحاسية وذهبية بهندسة ألمانية."
      },
      {
        "@type": "Service",
        "name": "توريد مصاعد طعام وخدمات",
        "provider": { "@id": "https://misr-elevators.com/ar/#organization" },
        "areaServed": "EG",
        "description": "مصاعد خدمة مدمجة للمطاعم والفنادق والمطابخ بتصميم من الستانلس ستيل."
      },
      {
        "@type": "Service",
        "name": "صيانة مصاعد طوارئ ٢٤/٧ وإنقاذ",
        "provider": { "@id": "https://misr-elevators.com/ar/#organization" },
        "areaServed": "EG",
        "description": "خدمة طوارئ سريعة لإنقاذ أعطال المصاعد على مدار ٢٤ ساعة وعقود صيانة دورية في القاهرة والجيزة."
      },
      {
        "@type": "Product",
        "name": "مصعد بانوراما زجاجي فاخر",
        "category": "مصعد",
        "description": "مصعد بانورامي زجاجي فاخر بماكينة جر ألمانية وإضاءة LED محيطة وتشطيبات مخصصة.",
        "brand": { "@type": "Brand", "name": "مصر العربية للمصاعد" },
        "material": ["زجاج مقسّى مصفح", "ستانلس ستيل", "نحاس"]
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
            "name": "كم تكلفة تركيب مصعد في الفيلا في مصر؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تختلف تكلفة مصعد الفيلا في مصر حسب النوع والسعة والتشطيبات. المصاعد الهيدروليكية أقل تكلفة، بينما المصاعد البانورامية الزجاجية المخصصة بماكينات ألمانية تأتي بأسعار متميزة. تواصل مع فريقنا للحصول على عرض سعر دقيق."
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
    <div className="min-h-screen overflow-x-hidden selection:bg-[#ec4e39] selection:text-white" style={{ backgroundColor: 'var(--c-bg)', color: 'var(--c-text)' }}>
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
