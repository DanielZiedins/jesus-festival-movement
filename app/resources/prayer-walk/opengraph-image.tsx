import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "How to Prayer Walk Your City";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({ eyebrow: "A simple city resource", title: "How to prayer walk", accent: "your city.", description: "A short, practical way to pray, notice, and take one faithful next step." });
}
