import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { SORTED_POSTS } from "@/lib/blog/posts";
import { upcomingEvents } from "@/lib/events";

export default function sitemap(): MetadataRoute.Sitemap {
  // Keep this tied to a real content release, rather than reporting every crawl as a new edit.
  const lastModified = new Date("2026-08-12T00:00:00.000Z");

  // Upcoming festivals rank top — they're time-sensitive.
  const festivals: MetadataRoute.Sitemap = upcomingEvents().map((e) => ({
    url: `${SITE.url}/${e.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
  }));

  const posts: MetadataRoute.Sitemap = SORTED_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T12:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...festivals,
    { url: SITE.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/start-a-jesus-festival`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/start-a-jesus-festival/playbook`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/shop`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/stories/kingdom-shop`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/answers`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/know-jesus`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/network`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    ...posts,
  ];
}
