import type { Metadata } from "next";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Electric Elevators | Masr Al Arabya Elevators Egypt",
  description: "German & Italian electric traction elevators for commercial and residential buildings. Energy-efficient VVVF drives, EN 81 safety certified. Installations across Cairo, Giza & Egypt.",
  alternates: {
    canonical: "https://misr-elevators.com/services/electric-elevators",
    languages: {
      "en-US": "https://misr-elevators.com/services/electric-elevators",
      "ar-EG": "https://misr-elevators.com/ar/services/electric-elevators",
    },
  },
  openGraph: {
    title: "Electric Elevators | Masr Al Arabya Elevators",
    description: "Premium electric traction elevators for buildings, offices, and commercial spaces across Egypt.",
    url: "https://misr-elevators.com/services/electric-elevators",
    images: [{ url: "https://misr-elevators.com/images/logo.jpg", width: 1200, height: 630, alt: "Electric Elevator by Masr Al Arabya Elevators" }],
  },
};

export default function Page() {
  return <ServicePage lang="en" serviceKey="electric" />;
}
