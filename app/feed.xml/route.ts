import { SITE } from "@/lib/content";
import { SORTED_POSTS } from "@/lib/blog/posts";
import { upcomingEvents } from "@/lib/events";

export const dynamic = "force-static";

/** Fallback for the hand-listed pages, which have no authored date. */
const sitePagesPublishedAt = "Wed, 12 Aug 2026 00:00:00 GMT";

function escapeXml(value: string) {
  const entities: Record<string, string> = { "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" };
  return value.replace(/[<>&'\"]/g, (character) => entities[character] ?? character);
}

/** RFC 822 date at noon UTC, from a YYYY-MM-DD string. */
function rfc822(isoDate: string) {
  return new Date(`${isoDate}T12:00:00Z`).toUTCString();
}

type Entry = { title: string; path: string; description: string; pubDate: string };

export function GET() {
  const entries: Entry[] = [];

  // Upcoming festivals first — announced as of their listing.
  for (const e of upcomingEvents()) {
    entries.push({
      title: `${e.name} — ${e.dateLabel}`,
      path: `/${e.slug}`,
      description: `${e.theme}. ${e.venue}, ${e.city}, ${e.country}. Sessions at ${e.sessions.map((s) => s.time).join(" and ")} each day with ${e.speaker.name}. Free and open to all.`,
      pubDate: sitePagesPublishedAt,
    });
  }

  // Journal posts carry their real publication dates.
  for (const post of SORTED_POSTS) {
    entries.push({
      title: post.title,
      path: `/blog/${post.slug}`,
      description: post.description,
      pubDate: rfc822(post.date),
    });
  }

  entries.push(
    {
      title: "How to Start a Jesus Festival in Your City",
      path: "/start-a-jesus-festival",
      description: "A prayerful, practical guide for gathering local believers, serving a city, and building for lasting Gospel fruit.",
      pubDate: sitePagesPublishedAt,
    },
    {
      title: "Kingdom Shop is open",
      path: "/stories/kingdom-shop",
      description: "The heart behind Kingdom Shop and the Jesus Festival faith-forward apparel collection.",
      pubDate: sitePagesPublishedAt,
    },
    {
      title: "About Jesus Festival Movement",
      path: "/about",
      description: "Learn the purpose, origin, and city-serving vision of Jesus Festival Movement.",
      pubDate: sitePagesPublishedAt,
    },
  );

  // lastBuildDate = the newest item in the feed, not a hardcoded constant.
  const lastBuild = entries
    .map((e) => new Date(e.pubDate).getTime())
    .reduce((a, b) => Math.max(a, b), 0);

  const items = entries
    .map(
      (e) =>
        `<item><title>${escapeXml(e.title)}</title><link>${SITE.url}${e.path}</link><guid isPermaLink="true">${SITE.url}${e.path}</guid><description>${escapeXml(e.description)}</description><pubDate>${e.pubDate}</pubDate></item>`,
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE.name}</title><link>${SITE.url}</link><description>${escapeXml(SITE.description)}</description><language>en-ca</language><lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>${items}</channel></rss>`,
    {
      headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=0, s-maxage=86400" },
    },
  );
}
