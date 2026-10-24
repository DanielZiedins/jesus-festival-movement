import { SORTED_POSTS } from "@/lib/blog/posts";
import { ANSWERS } from "@/lib/answers";
import { GLOSSARY } from "@/lib/glossary";

/**
 * Everything /search can find, built from the same data the pages render —
 * so a new post, answer or glossary term is searchable the moment it exists.
 */
export type SearchItem = {
  kind: "Guide" | "Answer" | "Glossary" | "Page";
  title: string;
  text: string;
  href: string;
  /** Lowercased text the filter matches against. */
  hay: string;
};

const PAGES: Omit<SearchItem, "hay" | "kind">[] = [
  { title: "Know Jesus", text: "The good news of Jesus explained simply, honest answers to common doubts, and a prayer anyone can pray.", href: "/know-jesus" },
  { title: "Start a Jesus Festival", text: "A prayerful, practical way to begin a Gospel festival in your city, with free tools for your team.", href: "/start-a-jesus-festival" },
  { title: "The 13-step festival playbook", text: "Timelines, checklists and warnings for every stage of planning a Jesus Festival.", href: "/start-a-jesus-festival/playbook" },
  { title: "All Jesus Festivals", text: "Where Jesus Festivals have happened — Hamilton, Niagara and Akuse, Ghana — and what's next.", href: "/festivals" },
  { title: "Prayer walk guide", text: "A short, practical guide to prayer walking your city.", href: "/resources/prayer-walk" },
  { title: "Response team training card", text: "A printable card for altar call and prayer teams: steps, a simple prayer, safeguarding.", href: "/resources/response-team" },
  { title: "About the movement", text: "The story, the people behind it, and what Jesus Festival Movement exists to do.", href: "/about" },
  { title: "Glossary", text: "Plain-language definitions of evangelism and Gospel festival terms.", href: "/glossary" },
  { title: "The network", text: "Sister projects across the Thy Kingdom Network.", href: "/network" },
  { title: "Jesus Festival Shop", text: "Apparel and gear that start conversations about Jesus.", href: "/shop" },
];

const strip = (s: string) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

export function searchIndex(): SearchItem[] {
  const items: SearchItem[] = [
    ...PAGES.map((p) => ({ ...p, kind: "Page" as const })),
    ...SORTED_POSTS.map((p) => ({
      kind: "Guide" as const,
      title: p.title,
      text: p.description,
      href: `/blog/${p.slug}`,
      extra: `${p.keywords.join(" ")} ${p.category} ${(p.faq ?? []).map((f) => f.q).join(" ")}`,
    })),
    ...ANSWERS.map((a) => ({
      kind: "Answer" as const,
      title: a.q,
      text: strip(a.short),
      href: `/answers#${a.id}`,
      extra: "",
    })),
    ...GLOSSARY.map((t) => ({
      kind: "Glossary" as const,
      title: t.term,
      text: t.definition,
      href: `/glossary#${t.id}`,
      extra: "definition meaning what is",
    })),
  ].map((i) => ({
    kind: i.kind,
    title: i.title,
    text: i.text,
    href: i.href,
    hay: `${i.title} ${i.text} ${"extra" in i ? i.extra : ""}`.toLowerCase(),
  }));
  return items;
}
