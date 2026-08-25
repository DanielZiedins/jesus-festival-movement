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
  readMinutes: number;
  category: string;
  /** Small label above the title. */
  eyebrow: string;
  keywords: string[];
  body: Block[];
  /** Network site keys surfaced in the "explore next" rail. */
  related: string[];
};
