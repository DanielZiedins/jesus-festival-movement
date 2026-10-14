import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "Response Team Training Card — Jesus Festival Movement";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({ eyebrow: "A printable team resource", title: "Response team", accent: "training card.", description: "What to do when someone comes forward: one page, ready to print." });
}
