import type { Metadata } from "next";
import AureliaHero from "./components/AureliaHero";
import SideMenu from "./components/SideMenu";
import StickyCursor from "./components/StickyCursor";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import CurvedLoop from "@/components/ui/CurvedLoop";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Masr Al Arabya Elevators | Premium Elevator Company in Egypt",
  description: "Elevating luxury since 1979. Premier elevator company in Giza & Egypt specializing in customized villa elevators, panoramic glass lifts, and 24/7 maintenance.",
  alternates: {
    canonical: "https://misr-elevators.com",
    languages: {
      "en-US": "https://misr-elevators.com",
      "ar-EG": "https://misr-elevators.com/ar",
    },
  },
  openGraph: {
    title: "Masr Al Arabya Elevators | Premium Lifts in Egypt",
    description: "Leading elevator company in Giza & Egypt. Custom panoramic glass lifts, luxury home villa elevators, and European certified components.",
    url: "https://misr-elevators.com",
    siteName: "Masr Al Arabya Elevators",
    images: [
      {
        url: "https://misr-elevators.com/images/hero-elevator.png",
        width: 1200,
        height: 630,
        alt: "Masr Al Arabya Elevators - Premium Glass Elevator Egypt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masr Al Arabya Elevators | Premium Lifts in Egypt",
    description: "Leading elevator company in Giza & Egypt. Custom panoramic glass lifts, luxury home villa elevators, and European certified components.",
    images: ["https://misr-elevators.com/images/hero-elevator.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://misr-elevators.com/#organization",
        "name": "Masr Al Arabya Elevators",
        "url": "https://misr-elevators.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://misr-elevators.com/images/hero-elevator.png",
          "caption": "Masr Al Arabya Elevators"
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
        "@id": "https://misr-elevators.com/#localbusiness",
        "name": "Masr Al Arabya Elevators",
        "image": "https://misr-elevators.com/images/hero-elevator.png",
        "telephone": "+20-2-3761-4500",
        "email": "info@arabegypt-elevators.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12 El-Batal Ahmed Abdel Aziz St, Mohandessin",
          "addressLocality": "Giza",
          "addressCountry": "EG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.0468984,
          "longitude": 31.2016335
        },
        "url": "https://misr-elevators.com",
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
        "name": "Passenger Elevator Installation & Supply",
        "provider": {
          "@id": "https://misr-elevators.com/#organization"
        },
        "areaServed": "EG",
        "description": "Premium passenger elevator design, supply, and installation across Cairo and Giza."
      },
      {
        "@type": "Service",
        "name": "Panoramic Glass Lift Custom Design",
        "provider": {
          "@id": "https://misr-elevators.com/#organization"
        },
        "areaServed": "EG",
        "description": "High-end luxury circular glass panoramic elevators with custom finishes."
      },
      {
        "@type": "Service",
        "name": "24/7 Emergency Elevator Maintenance & Repair",
        "provider": {
          "@id": "https://misr-elevators.com/#organization"
        },
        "areaServed": "EG",
        "description": "Emergency elevator breakdown rescue and monthly maintenance contracts."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to install an elevator in Egypt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically, elevator supply and installation in Egypt takes 4 to 8 weeks, depending on shaft construction, customization requirements, and import approvals."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide emergency breakdown rescue in Cairo and Giza?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our certified maintenance engineers provide 24/7 emergency breakdown rescue and priority repairs throughout Cairo and Giza."
            }
          },
          {
            "@type": "Question",
            "name": "Are your elevator machinery imports European certified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our elevator motors, gearboxes, and safety gears are imported from top German and Italian manufacturers, carrying full CE quality markings and EN 81 safety compliance."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Sticky Custom Circular Cursor */}
      <StickyCursor />

      {/* Floating Side Menu Drawer (Awwwards Style Toggler) */}
      <SideMenu lang="en" />

      {/* HERO SECTION WITH EMBEDDED TRANSPARENT GLASS NAV BAR */}
      <AureliaHero lang="en" />

      {/* CURVED LOOP MARQUEE SEPARATOR */}
      <div className="w-full bg-[var(--c-bg)] py-3 overflow-hidden border-y border-[var(--c-border)]/15">
        <CurvedLoop
          marqueeText="MASR AL ARABYA ELEVATORS ✦ LUXURY RESIDENTIAL TRANSIT SINCE 1979 ✦ CERTIFIED EUROPEAN SAFETY ✦ HIGH-END PANORAMIC SHAFTS ✦"
          speed={1.2}
          curveAmount={60}
          direction="left"
          interactive={true}
          className="text-lg md:text-xl font-bold tracking-widest text-[#ec4e39] font-sans"
        />
      </div>

      {/* ABOUT SECTION */}
      <AboutSection lang="en" />

      {/* SERVICES SECTION */}
      <ServicesSection lang="en" />

      {/* PROJECTS SECTION */}
      <ProjectsSection lang="en" />

      {/* CONTACT SECTION */}
      <ContactSection lang="en" />

      {/* FOOTER */}
      <Footer lang="en" />
    </>
  );
}