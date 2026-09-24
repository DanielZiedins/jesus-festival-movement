import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { SORTED_POSTS } from "@/lib/blog/posts";
import { EVENTS, eventPhase } from "@/lib/events";

// Re-evaluate daily so festival priority steps down after the event without a deploy.
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  // Keep this tied to a real content release, rather than reporting every crawl as a new edit.
  const lastModified = new Date("2026-09-23T00:00:00.000Z");

  // Every festival page stays listed for good — "when was the Akuse festival"
  // is a real query long after the event. Upcoming/live ones rank top and are
  // re-crawled often; held ones settle to an evergreen record.
  const festivals: MetadataRoute.Sitemap = EVENTS.map((e) => {
    const ended = eventPhase(e) === "ended";
    return {
      url: `${SITE.url}/${e.slug}`,
      lastModified: ended ? new Date(`${e.endDate}T20:00:00Z`) : lastModified,
      changeFrequency: ended ? "yearly" : "daily",
      priority: ended ? 0.8 : 1,
    };
  });

  const posts: MetadataRoute.Sitemap = SORTED_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T12:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...festivals,
    { url: SITE.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/festivals`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/start-a-jesus-festival`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/start-a-jesus-festival/playbook`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/resources/prayer-walk`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/shop`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/stories/kingdom-shop`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/answers`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/know-jesus`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/network`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    ...posts,
  ];
}
