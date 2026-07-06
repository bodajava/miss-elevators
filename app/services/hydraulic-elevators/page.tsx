import type { Metadata } from "next";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Hydraulic Elevators | Masr Al Arabya Elevators Egypt",
  description: "Smooth hydraulic elevators for villas and low-rise buildings. No machine room required, EN 81-2 certified. Expert installation across Egypt.",
  alternates: {
    canonical: "https://misr-elevators.com/services/hydraulic-elevators",
    languages: {
      "en-US": "https://misr-elevators.com/services/hydraulic-elevators",
      "ar-EG": "https://misr-elevators.com/ar/services/hydraulic-elevators",
    },
  },
  openGraph: {
    title: "Hydraulic Elevators | Masr Al Arabya Elevators",
    description: "Hydraulic elevator solutions for villas, low-rise buildings, and special-use spaces across Egypt.",
    url: "https://misr-elevators.com/services/hydraulic-elevators",
    images: [{ url: "https://misr-elevators.com/images/hero-elevator.png", width: 1200, height: 630, alt: "Hydraulic Elevator by Masr Al Arabya Elevators" }],
  },
};

export default function Page() {
  return <ServicePage lang="en" serviceKey="hydraulic" />;
}
