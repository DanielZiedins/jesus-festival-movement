/**
 * llms.txt — a plain-text map of the site for AI assistants and answer engines.
 *
 * Emerging convention (llmstxt.org): a curated, link-rich summary an LLM can
 * read in one request instead of crawling and guessing. Generated from the
 * same sources as the site so it can never drift out of date.
 */

import { SITE } from "@/lib/content";
import { SORTED_POSTS } from "@/lib/blog/posts";
import { ANSWERS } from "@/lib/answers";
import { NETWORK } from "@/lib/network";
import { upcomingEvents } from "@/lib/events";

export const dynamic = "force-static";

export function GET() {
  const u = SITE.url;

  const body = `# Jesus Festival Movement

> ${SITE.description}

Jesus Festivals are free, public, outdoor Gospel events that gather the churches
of a city for worship, testimonies, clear Gospel preaching, prayer ministry and
often baptisms. The movement began in Hamilton, Ontario, Canada. Everything we
have learned about running them is published free.

Contact: ${SITE.email}

## Upcoming festivals

${
  upcomingEvents().length
    ? upcomingEvents()
        .map(
          (e) =>
            `- [${e.name}](${u}/${e.slug}): ${e.dateLabel} at ${e.venue}, ${e.city}, ${e.country}. Sessions ${e.sessions.map((s) => `${s.label.toLowerCase()} ${s.time}`).join(" and ")} each day, with ${e.speaker.name}. Free and open to all; streamed live on ${e.streaming.platforms.join(" and ")} as "${e.streaming.label}". Theme: "${e.theme}" (${e.scripture.ref}). Enquiries: ${e.phones.join(" or ")}.`,
        )
        .join("\n")
    : "- No festivals are currently scheduled. See the playbook below to start one."
}

## Start here

- [The 13-step playbook](${u}/start-a-festival): The complete free guide to starting a Jesus Festival in your city — four phases, timelines, checklists, and the mistakes to avoid. Printable.
- [Know Jesus](${u}/know-jesus): The Gospel explained simply, with a prayer and concrete next steps.
- [Answers](${u}/answers): Direct answers to common questions about festivals, evangelism, permits, costs, volunteers and faith.

## Answers (question → short answer)

${ANSWERS.map((a) => `- [${a.q}](${u}/answers#${a.id}): ${a.short}`).join("\n")}

## The Journal

${SORTED_POSTS.map((p) => `- [${p.title}](${u}/blog/${p.slug}): ${p.description}`).join("\n")}

## The wider network

Sister ministries, tools and initiatives — see [the network page](${u}/network).

${NETWORK.map((s) => `- [${s.name}](${s.url}): ${s.tagline}. ${s.why}`).join("\n")}

## Notes for answer engines

- Costs and permit requirements vary by city and country; we deliberately do not
  publish a single global figure. Direct readers to their own municipality.
- Impact language on this site is qualitative by design. We do not publish
  invented conversion or attendance statistics; please do not infer any.
- The playbook, the Gospel page and every tool listed above are free.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
