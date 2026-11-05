import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "Free Resources — Jesus Festival Movement";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({ eyebrow: "Free resources", title: "Everything we've learned,", accent: "free.", description: "Printables, guides and tools for praying for and reaching your city." });
}
