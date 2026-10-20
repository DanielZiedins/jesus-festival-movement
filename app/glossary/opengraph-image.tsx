import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "Glossary — Jesus Festival Movement";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({ eyebrow: "Glossary", title: "The words,", accent: "defined plainly.", description: "Gospel, evangelism, discipleship, revival, oikos, altar call and more." });
}
