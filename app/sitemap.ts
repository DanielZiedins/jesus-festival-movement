import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/shop`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/stories/kingdom-shop`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
