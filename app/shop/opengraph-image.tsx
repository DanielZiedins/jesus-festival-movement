import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "Jesus Festival Shop";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({ eyebrow: "Kingdom Shop × Jesus Festival", title: "Wear the message.", accent: "Carry the mission.", description: "Faith-forward pieces that point beyond us—to Jesus, His Gospel, and the cities He loves." });
}
