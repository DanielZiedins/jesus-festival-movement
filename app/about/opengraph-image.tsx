import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "About Jesus Festival Movement";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({ eyebrow: "About the movement", title: "Cities lifting up", accent: "the name of Jesus.", description: "A Christ-centred movement from Hamilton, Ontario to the nations." });
}
