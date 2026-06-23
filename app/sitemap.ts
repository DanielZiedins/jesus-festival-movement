import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    "",
    "#story",
    "#vision",
    "#commission",
    "#model",
    "#festivals",
    "#how-to-start",
    "#map",
    "#testimonies",
    "#partnership",
    "#contact",
  ];

  return sections.map((s) => ({
    url: `${SITE.url}/${s}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: s === "" ? 1 : 0.7,
  }));
}
