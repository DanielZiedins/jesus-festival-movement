import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "The Thy Kingdom Network — ministries, tools and initiatives";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({
    eyebrow: "The Network",
    title: "One family of work,",
    accent: "one purpose.",
    description:
      "Gospel festivals, free evangelism tools, local and global outreach, and Kingdom-minded business.",
  });
}
