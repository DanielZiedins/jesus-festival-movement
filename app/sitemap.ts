import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  // Keep this tied to a real content release, rather than reporting every crawl as a new edit.
  const lastModified = new Date("2026-08-12T00:00:00.000Z");
  return [
    { url: SITE.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/start-a-jesus-festival`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/shop`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/stories/kingdom-shop`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
