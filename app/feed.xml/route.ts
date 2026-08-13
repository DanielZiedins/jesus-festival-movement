import { SITE } from "@/lib/content";

export const dynamic = "force-static";

const publishedAt = "Wed, 12 Aug 2026 00:00:00 GMT";

function escapeXml(value: string) {
  const entities: Record<string, string> = { "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" };
  return value.replace(/[<>&'\"]/g, (character) => entities[character] ?? character);
}

export function GET() {
  const entries = [
    ["How to Start a Jesus Festival in Your City", "/start-a-jesus-festival", "A prayerful, practical guide for gathering local believers, serving a city, and building for lasting Gospel fruit."],
    ["Kingdom Shop is open", "/stories/kingdom-shop", "The heart behind Kingdom Shop and the Jesus Festival faith-forward apparel collection."],
    ["About Jesus Festival Movement", "/about", "Learn the purpose, origin, and city-serving vision of Jesus Festival Movement."],
  ];
  const items = entries.map(([title, path, description]) => `<item><title>${escapeXml(title)}</title><link>${SITE.url}${path}</link><guid isPermaLink="true">${SITE.url}${path}</guid><description>${escapeXml(description)}</description><pubDate>${publishedAt}</pubDate></item>`).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE.name}</title><link>${SITE.url}</link><description>${escapeXml(SITE.description)}</description><language>en-ca</language><lastBuildDate>${publishedAt}</lastBuildDate>${items}</channel></rss>`, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=0, s-maxage=86400" },
  });
}
