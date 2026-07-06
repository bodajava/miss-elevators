import type { Metadata } from "next";
import { Raleway, Cairo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Masr Al Arabya Elevators | Premium Elevator Company in Egypt Since 1979",
    template: "%s | Masr Al Arabya Elevators",
  },
  description: "Egypt's premier elevator company since 1979. We design, install, and maintain luxury villa elevators, panoramic glass lifts, hydraulic elevators, and commercial passenger elevators across Cairo, Giza & Egypt. EN 81 & CE certified.",
  keywords: [
    "elevator company Egypt",
    "luxury elevators Egypt",
    "panoramic elevators Egypt",
    "hydraulic elevators Egypt",
    "villa elevators Egypt",
    "commercial elevators Egypt",
    "elevator installation Cairo",
    "elevator maintenance Giza",
    "Masr Al Arabya Elevators",
    "مصاعد مصر",
    "مصاعد بانوراما",
    "مصاعد هيدروليك",
    "مصاعد كهربائية",
    "شركة مصاعد مصر",
    "مصاعد فلل",
  ],
  authors: [{ name: "Masr Al Arabya Elevators" }],
  creator: "Masr Al Arabya Elevators",
  publisher: "Masr Al Arabya Elevators",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://misr-elevators.com",
    languages: {
      "en-US": "https://misr-elevators.com",
      "ar-EG": "https://misr-elevators.com/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Masr Al Arabya Elevators",
    title: "Masr Al Arabya Elevators | Luxury Elevators & Lifts in Egypt",
    description: "Egypt's leading elevator company since 1979. German & Italian engineered panoramic glass lifts, hydraulic home elevators, and commercial passenger elevators. EN 81 certified safety.",
    url: "https://misr-elevators.com",
    images: [
      {
        url: "https://misr-elevators.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Masr Al Arabya Elevators - Premium Elevator Installation Egypt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masr Al Arabya Elevators | Luxury Lifts in Egypt",
    description: "Egypt's leading elevator company since 1979. Premium panoramic, hydraulic & passenger elevators. EN 81 certified.",
    images: ["https://misr-elevators.com/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  category: "engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth",
        raleway.variable,
        cairo.variable
      )}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var active = saved || system;
                  if (active === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#0b0a0a]">
        {children}
      </body>
    </html>
  );
}