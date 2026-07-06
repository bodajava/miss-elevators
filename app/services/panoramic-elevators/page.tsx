import type { Metadata } from "next";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Panoramic Glass Elevators | Masr Al Arabya Elevators Egypt",
  description: "Luxury panoramic glass elevators for villas, hotels, malls, and premium interiors. Custom round or rectangular designs with German engineering. Egypt's premier glass lift specialist.",
  alternates: {
    canonical: "https://misr-elevators.com/services/panoramic-elevators",
    languages: {
      "en-US": "https://misr-elevators.com/services/panoramic-elevators",
      "ar-EG": "https://misr-elevators.com/ar/services/panoramic-elevators",
    },
  },
  openGraph: {
    title: "Panoramic Glass Elevators | Masr Al Arabya Elevators",
    description: "Premium panoramic glass elevators designed for luxury villas, hotels, and commercial spaces in Egypt.",
    url: "https://misr-elevators.com/services/panoramic-elevators",
    images: [{ url: "https://misr-elevators.com/images/logo.jpg", width: 1200, height: 630, alt: "Panoramic Glass Elevator by Masr Al Arabya Elevators" }],
  },
};

export default function Page() {
  return <ServicePage lang="en" serviceKey="panoramic" />;
}
