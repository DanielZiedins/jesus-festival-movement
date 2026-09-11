import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "Jesus Festivals — where they are, and how to bring one to your city";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({
    eyebrow: "The Festivals",
    title: "Cities lifting up",
    accent: "one name.",
    description:
      "Where the next Jesus Festivals are happening, the ones already held, and how to bring one to your city.",
  });
}
