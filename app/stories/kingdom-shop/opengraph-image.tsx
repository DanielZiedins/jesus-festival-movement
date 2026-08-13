import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "Kingdom Shop is open";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({ eyebrow: "Kingdom Shop is open", title: "What if what we wear", accent: "could point beyond us?", description: "The heart behind the faith-forward Jesus Festival collection." });
}
