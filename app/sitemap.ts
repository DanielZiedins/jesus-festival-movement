import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { POSTS } from "@/lib/blog/posts";
import { upcomingEvents } from "@/lib/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: SITE.url, priority: 1, changeFrequency: "weekly", lastModified: now },
    {
      url: `${SITE.url}/start-a-festival`,
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: now,
    },
    {
      url: `${SITE.url}/know-jesus`,
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: now,
    },
    // Upcoming festivals rank highest — they're time-sensitive.
    ...upcomingEvents().map((e) => ({
      url: `${SITE.url}/${e.slug}`,
      priority: 1 as const,
      changeFrequency: "weekly" as const,
      lastModified: now,
    })),
    {
      url: `${SITE.url}/answers`,
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: now,
    },
    {
      url: `${SITE.url}/blog`,
      priority: 0.8,
      changeFrequency: "weekly",
      lastModified: now,
    },
    {
      url: `${SITE.url}/about`,
      priority: 0.7,
      changeFrequency: "yearly",
      lastModified: now,
    },
    {
      url: `${SITE.url}/network`,
      priority: 0.7,
      changeFrequency: "monthly",
      lastModified: now,
    },
  ];

  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(`${p.date}T12:00:00Z`),
  }));

  return [...pages, ...posts];
}
