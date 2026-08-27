import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "The Journal — evangelism, unity and reaching your city";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({
    eyebrow: "The Journal",
    title: "Writing for people",
    accent: "who want their city reached.",
    description:
      "Practical and biblical, written by people actually doing this. No filler, no clickbait.",
  });
}
