import type { Metadata } from "next";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "مصاعد هيدروليك | شركة مصر العربية للمصاعد",
  description: "مصاعد هيدروليك ناعمة للفيلات والمباني منخفضة الارتفاع. لا حاجة لغرفة ماكينة علوية، معتمدة EN 81-2. تركيب وتوريد في جميع أنحاء مصر.",
  alternates: {
    canonical: "https://misr-elevators.com/ar/services/hydraulic-elevators",
    languages: {
      "en-US": "https://misr-elevators.com/services/hydraulic-elevators",
      "ar-EG": "https://misr-elevators.com/ar/services/hydraulic-elevators",
    },
  },
  openGraph: {
    title: "مصاعد هيدروليك | شركة مصر العربية للمصاعد",
    description: "مصاعد هيدروليك للفيلات والمباني منخفضة الارتفاع في مصر.",
    url: "https://misr-elevators.com/ar/services/hydraulic-elevators",
    images: [{ url: "https://misr-elevators.com/images/logo.jpg", width: 1200, height: 630, alt: "مصعد هيدروليك من شركة مصر العربية للمصاعد" }],
  },
};

export default function Page() {
  return <ServicePage lang="ar" serviceKey="hydraulic" />;
}
