import type { Metadata } from "next";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Food & Service Elevators | Masr Al Arabya Elevators Egypt",
  description: "Compact service elevators for restaurants, hotels, kitchens, and villas. Stainless steel cabins, EN 81-3 certified. Custom designs for hospitality projects across Egypt.",
  alternates: {
    canonical: "https://misr-elevators.com/services/food-elevators",
    languages: {
      "en-US": "https://misr-elevators.com/services/food-elevators",
      "ar-EG": "https://misr-elevators.com/ar/services/food-elevators",
    },
  },
  openGraph: {
    title: "Food & Service Elevators | Masr Al Arabya Elevators",
    description: "Compact food and service elevators for restaurants, hotels, kitchens, and hospitality projects across Egypt.",
    url: "https://misr-elevators.com/services/food-elevators",
    images: [{ url: "https://misr-elevators.com/images/logo.jpg", width: 1200, height: 630, alt: "Food Service Elevator by Masr Al Arabya Elevators" }],
  },
};

export default function Page() {
  return <ServicePage lang="en" serviceKey="food" />;
}
