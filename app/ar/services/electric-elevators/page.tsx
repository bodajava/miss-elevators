import type { Metadata } from "next";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "مصاعد كهربائية | شركة مصر العربية للمصاعد",
  description: "مصاعد كهربائية بأحدث التقنيات الألمانية والإيطالية للمباني التجارية والسكنية. محركات VVVF موفرة للطاقة، معتمدة EN 81. تركيب في القاهرة والجيزة ومصر.",
  alternates: {
    canonical: "https://misr-elevators.com/ar/services/electric-elevators",
    languages: {
      "en-US": "https://misr-elevators.com/services/electric-elevators",
      "ar-EG": "https://misr-elevators.com/ar/services/electric-elevators",
    },
  },
  openGraph: {
    title: "مصاعد كهربائية | شركة مصر العربية للمصاعد",
    description: "مصاعد كهربائية فاخرة للمباني والمكاتب والمساحات التجارية في مصر.",
    url: "https://misr-elevators.com/ar/services/electric-elevators",
    images: [{ url: "https://misr-elevators.com/images/logo.jpg", width: 1200, height: 630, alt: "مصعد كهربائي من شركة مصر العربية للمصاعد" }],
  },
};

export default function Page() {
  return <ServicePage lang="ar" serviceKey="electric" />;
}
