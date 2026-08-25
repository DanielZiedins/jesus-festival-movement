/**
 * RSS 2.0 feed for The Journal. Feed readers, newsletter aggregators and a
 * number of AI crawlers still discover content this way.
 */

import { SITE } from "@/lib/content";
import { SORTED_POSTS } from "@/lib/blog/posts";
import type { Block } from "@/lib/blog/types";

export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Flatten authored blocks into readable HTML for full-text readers. */
function bodyHtml(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.t) {
        case "h2":
          return `<h2>${esc(b.text)}</h2>`;
        case "h3":
          return `<h3>${esc(b.text)}</h3>`;
        case "p":
          return `<p>${b.text}</p>`;
        case "quote":
          return `<blockquote><p>${esc(b.text)}</p></blockquote>`;
        case "scripture":
          return `<blockquote><p><em>&ldquo;${esc(b.text)}&rdquo;</em><br><strong>${esc(b.ref)}</strong></p></blockquote>`;
        case "list":
          return `<ul>${b.items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
        case "steps":
          return `<ol>${b.items.map((i) => `<li><strong>${esc(i.title)}</strong> — ${i.text}</li>`).join("")}</ol>`;
        case "callout":
          return `<p><strong>${esc(b.title)}</strong> — ${b.text}${
            b.href ? ` <a href="${esc(b.href.startsWith("http") ? b.href : SITE.url + b.href)}">${esc(b.cta ?? "Read more")}</a>` : ""
          }</p>`;
        default:
          return "";
      }
    })
    .join("\n");
}

export function GET() {
  const now = new Date().toUTCString();

  const items = SORTED_POSTS.map((p) => {
    const url = `${SITE.url}/blog/${p.slug}`;
    return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.description)}</description>
      <content:encoded><![CDATA[${bodyHtml(p.body)}]]></content:encoded>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>The Journal — Jesus Festival Movement</title>
    <link>${SITE.url}/blog</link>
    <description>Practical, biblical writing on evangelism, church unity, follow-up and reaching your city.</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
