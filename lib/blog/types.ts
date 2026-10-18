/** Structured blocks rather than raw HTML, so typography stays consistent. */
export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "quote"; text: string; cite?: string }
  | { t: "scripture"; text: string; ref: string }
  | { t: "list"; items: string[]; ordered?: boolean }
  | { t: "callout"; title: string; text: string; href?: string; cta?: string }
  | { t: "steps"; items: { title: string; text: string }[] };

export type Post = {
  slug: string;
  title: string;
  /** Meta description and card blurb. */
  description: string;
  /**
   * Answer-first summary shown in a "short answer" box above the article.
   * Written to stand alone at ~40–60 words so answer engines and featured
   * snippets can quote it without surrounding context.
   */
  tldr?: string;
  /** ISO date. */
  date: string;
  category: string;
  /** Small label above the title. */
  eyebrow: string;
  keywords: string[];
  body: Block[];
  /** Network site keys surfaced in the "explore next" rail. */
  related: string[];
  /**
   * Questions people ask, answered in 40–80 words each. Rendered visibly at
   * the end of the post and mirrored in FAQPage schema and llms-full.txt —
   * the format answer engines quote most readily. Answers are plain text.
   */
  faq?: { q: string; a: string }[];
};

/**
 * Anchor ids for a post's h2s, in order. Blocks and the "In this article"
 * list both use this, so a jump link can never point at a missing id.
 */
export function headingIds(blocks: Block[]): string[] {
  const seen = new Map<string, number>();
  return blocks
    .filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2")
    .map((b) => {
      const base =
        b.text
          .toLowerCase()
          .replace(/<[^>]+>/g, "")
          .replace(/&[a-z]+;/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
          .slice(0, 60) || "section";
      const n = seen.get(base) ?? 0;
      seen.set(base, n + 1);
      return n ? `${base}-${n + 1}` : base;
    });
}
