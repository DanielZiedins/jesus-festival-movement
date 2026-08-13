import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "How to Start a Jesus Festival in Your City";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({ eyebrow: "Free practical field guide", title: "How to start a", accent: "Jesus Festival.", description: "Prayerful, practical first steps for serving a city and building for lasting fruit." });
}
