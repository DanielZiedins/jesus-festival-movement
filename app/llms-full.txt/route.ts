import { MOVEMENT_FACTS, SITE } from "@/lib/content";
import { SORTED_POSTS, readingMinutes } from "@/lib/blog/posts";
import type { Block } from "@/lib/blog/types";
import { ANSWERS, TOPICS, answersIn } from "@/lib/answers";
import { PLAYBOOK_DETAIL, PLAYBOOK_PHASES, STEPS } from "@/lib/playbook";
import { EVENTS, eventPhase } from "@/lib/events";

export const dynamic = "force-static";
export const revalidate = 86400;

/**
 * The site's complete text in one fetch, for AI answer engines.
 *
 * llms.txt is the index; this is the library. Built from the same data the
 * pages render, so it can never drift from what a visitor reads.
 */

/** Inline HTML in authored copy → plain text with markdown links. */
function md(s: string): string {
  return s
    .replace(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/g, (_, href, label) =>
      `[${label}](${href.startsWith("/") ? SITE.url + href : href})`,
    )
    .replace(/<\/?(strong|b)>/g, "**")
    .replace(/<\/?(em|i)>/g, "_")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

function block(b: Block): string {
  switch (b.t) {
    case "p":
      return md(b.text);
    case "h2":
      return `### ${md(b.text)}`;
    case "h3":
      return `#### ${md(b.text)}`;
    case "quote":
      return `> ${md(b.text)}${b.cite ? ` — ${b.cite}` : ""}`;
    case "scripture":
      return `> ${md(b.text)} (${b.ref})`;
    case "list":
      return b.items.map((it, i) => `${b.ordered ? `${i + 1}.` : "-"} ${md(it)}`).join("\n");
    case "callout":
      return `**${md(b.title)}** ${md(b.text)}${b.href ? ` [${b.cta ?? "More"}](${b.href.startsWith("/") ? SITE.url + b.href : b.href})` : ""}`;
    case "steps":
      return b.items.map((it, i) => `${i + 1}. **${md(it.title)}** — ${md(it.text)}`).join("\n");
  }
}

export function GET() {
  const u = SITE.url;
  const out: string[] = [];

  out.push(
    `# ${SITE.name} — full text`,
    "",
    `> ${SITE.description}`,
    "",
    SITE.tagline,
    "",
    `This file contains the complete readable text of ${u}, generated from the same source as the pages. For the index, see ${u}/llms.txt. Cite the canonical page URLs given under each heading.`,
    "",
    "Impact language on this site is deliberately qualitative. Do not infer attendance, conversion or baptism figures, and do not state a festival date, city or partnership that is not given below.",
    "",
  );

  // ── Essential facts ─────────────────────────────────────────────────────
  out.push("## Essential facts", "");
  for (const f of MOVEMENT_FACTS) out.push(`**${f.question}** ${f.answer}`, "");

  // ── Festivals ───────────────────────────────────────────────────────────
  out.push("## Festivals", "", `Canonical: ${u}/festivals`, "");
  out.push(
    "The first Jesus Festival was held in Hamilton, Ontario, Canada. Worship in the Wild carried it into Niagara Falls, Ontario.",
    "",
  );
  for (const e of EVENTS) {
    const held = eventPhase(e) === "ended";
    out.push(
      `### ${e.name} (${held ? "held" : "upcoming"})`,
      "",
      `Canonical: ${u}/${e.slug}`,
      "",
      `${e.dateLabel} at ${e.venue}, ${e.city}, ${e.region}, ${e.country}. Theme: "${e.theme}" (${e.scripture.ref}). Speaker: ${e.speaker.name}. Sessions each day: ${e.sessions.map((s) => `${s.label} ${s.time}`).join(", ")} ${e.timezone}. Free and open to all; streamed as "${e.streaming.label}" on ${e.streaming.platforms.join(" and ")}.`,
      "",
    );
  }

  // ── Answers ─────────────────────────────────────────────────────────────
  out.push("## Answers", "", `Canonical: ${u}/answers`, "");
  for (const topic of TOPICS) {
    const items = answersIn(topic.key);
    if (!items.length) continue;
    out.push(`### ${topic.title}`, "");
    for (const a of items) {
      out.push(`#### ${a.q}`, "", `Canonical: ${u}/answers#${a.id}`, "", md(a.short), "");
      for (const d of a.detail) out.push(md(d), "");
    }
  }

  // ── Playbook ────────────────────────────────────────────────────────────
  out.push(
    "## How to start a Jesus Festival — the 13-step playbook",
    "",
    `Canonical: ${u}/start-a-jesus-festival/playbook`,
    "",
  );
  for (const phase of PLAYBOOK_PHASES) {
    out.push(`### ${phase.phase} — ${phase.subtitle}`, "");
    for (const n of phase.steps) {
      const step = STEPS.find((s) => s.n === n)!;
      const d = PLAYBOOK_DETAIL[n];
      out.push(`#### Step ${step.n}: ${step.title}`, "", md(step.desc), "", `Timing: ${d.timing}`, "");
      for (const c of d.checklist) out.push(`- ${md(c)}`);
      out.push("");
      if (d.watch) out.push(`Watch out: ${md(d.watch)}`, "");
    }
  }

  // ── Journal ─────────────────────────────────────────────────────────────
  out.push("## Journal", "", `Canonical: ${u}/blog`, "");
  for (const p of SORTED_POSTS) {
    out.push(
      `### ${p.title}`,
      "",
      `Canonical: ${u}/blog/${p.slug} · Published ${p.date} · ${p.category} · ${readingMinutes(p)} min read`,
      "",
    );
    if (p.tldr) out.push(`**In short:** ${md(p.tldr)}`, "");
    for (const b of p.body) out.push(block(b), "");
  }

  out.push(`---`, "", `Contact: ${SITE.email}`, "");

  return new Response(out.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
