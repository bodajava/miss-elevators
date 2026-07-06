import type { Metadata } from "next";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "مصاعد طعام وخدمات | شركة مصر العربية للمصاعد",
  description: "مصاعد طعام وخدمات مدمجة للمطاعم والفنادق والمطابخ والفيلات. كبائن ستانلس ستيل، معتمدة EN 81-3. تصميم مخصص لمشروعات الضيافة في مصر.",
  alternates: {
    canonical: "https://misr-elevators.com/ar/services/food-elevators",
    languages: {
      "en-US": "https://misr-elevators.com/services/food-elevators",
      "ar-EG": "https://misr-elevators.com/ar/services/food-elevators",
    },
  },
  openGraph: {
    title: "مصاعد طعام وخدمات | شركة مصر العربية للمصاعد",
    description: "مصاعد طعام وخدمات للمطاعم والفنادق والمطابخ في مصر.",
    url: "https://misr-elevators.com/ar/services/food-elevators",
    images: [{ url: "https://misr-elevators.com/images/hero-elevator.png", width: 1200, height: 630, alt: "مصعد طعام من شركة مصر العربية للمصاعد" }],
  },
};

export default function Page() {
  return <ServicePage lang="ar" serviceKey="food" />;
}
