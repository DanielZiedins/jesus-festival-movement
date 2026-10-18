import type { MetadataRoute } from "next";
import { PAGE_UPDATED, SITE } from "@/lib/content";
import { SORTED_POSTS } from "@/lib/blog/posts";
import { EVENTS, eventPhase } from "@/lib/events";

// Re-evaluate daily so festival priority steps down after the event without a deploy.
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  // Fallback only. Pages report their own last content change (PAGE_UPDATED),
  // never the build clock — a lastmod that changes every crawl gets ignored.
  const lastModified = new Date("2026-09-23T00:00:00.000Z");
  const at = (path: string) =>
    PAGE_UPDATED[path] ? new Date(`${PAGE_UPDATED[path]}T12:00:00Z`) : lastModified;
  const newestPost = SORTED_POSTS.map((p) => p.updated ?? p.date).sort().at(-1)!;

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
    lastModified: new Date(`${p.updated ?? p.date}T12:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...festivals,
    { url: SITE.url, lastModified: at("/"), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/festivals`, lastModified: at("/festivals"), changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE.url}/about`, lastModified: at("/about"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/start-a-jesus-festival`, lastModified: at("/start-a-jesus-festival"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/start-a-jesus-festival/playbook`, lastModified: at("/start-a-jesus-festival/playbook"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/resources/prayer-walk`, lastModified: at("/resources/prayer-walk"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/resources/response-team`, lastModified: at("/resources/response-team"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/shop`, lastModified: at("/shop"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/stories/kingdom-shop`, lastModified: at("/stories/kingdom-shop"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/answers`, lastModified: at("/answers"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/know-jesus`, lastModified: at("/know-jesus"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/blog`, lastModified: new Date(`${newestPost}T12:00:00Z`), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/network`, lastModified: at("/network"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/privacy`, lastModified: at("/privacy"), changeFrequency: "yearly", priority: 0.3 },
    ...posts,
  ];
}
