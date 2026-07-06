import type { Metadata } from "next";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "مصاعد بانوراما زجاجية | شركة مصر العربية للمصاعد",
  description: "مصاعد بانوراما زجاجية فاخرة للفلل والفنادق والمولات. تصاميم دائرية ومستطيلة مخصصة بهندسة ألمانية. خبراء المصاعد الزجاجية في مصر.",
  alternates: {
    canonical: "https://misr-elevators.com/ar/services/panoramic-elevators",
    languages: {
      "en-US": "https://misr-elevators.com/services/panoramic-elevators",
      "ar-EG": "https://misr-elevators.com/ar/services/panoramic-elevators",
    },
  },
  openGraph: {
    title: "مصاعد بانوراما زجاجية | شركة مصر العربية للمصاعد",
    description: "مصاعد بانوراما زجاجية فاخرة للفلل والفنادق والمساحات التجارية في مصر.",
    url: "https://misr-elevators.com/ar/services/panoramic-elevators",
    images: [{ url: "https://misr-elevators.com/images/logo.jpg", width: 1200, height: 630, alt: "مصعد بانوراما زجاجي من شركة مصر العربية للمصاعد" }],
  },
};

export default function Page() {
  return <ServicePage lang="ar" serviceKey="panoramic" />;
}
