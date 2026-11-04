import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "Advent Prayer Guide For Your City — Jesus Festival Movement";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({ eyebrow: "A printable prayer resource", title: "Advent prayer guide", accent: "for your city.", description: "Four weeks of Hope, Peace, Joy and Love — praying for your city toward Christmas." });
}
