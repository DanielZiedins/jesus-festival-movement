import Icon from "../ui/Icon";
import type { Block } from "@/lib/blog/types";

/**
 * Renders authored post blocks.
 *
 * `text` may contain inline markup (<strong>, <em>, <a>), so it's injected as
 * HTML. This is safe here because every string comes from lib/blog/posts.ts —
 * author-controlled source, never user input. Do not feed this user content.
 */

function Html({ html, className }: { html: string; className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2":
            return (
              <h2
                key={i}
                className="!mt-14 scroll-mt-28 font-display text-2xl font-bold leading-tight text-white sm:text-3xl"
              >
                {b.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                className="!mt-10 font-display text-xl font-bold text-white"
              >
                {b.text}
              </h3>
            );

          case "p":
            return (
              <p key={i} className="text-lg leading-relaxed text-white/75">
                <Html html={b.text} />
              </p>
            );

          case "scripture":
            return (
              <figure
                key={i}
                className="!my-10 rounded-2xl border border-gold/25 bg-gold/[0.06] p-6 sm:p-7"
              >
                <blockquote className="font-display text-xl leading-snug text-white sm:text-2xl">
                  &ldquo;{b.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                  {b.ref}
                </figcaption>
              </figure>
            );

          case "quote":
            return (
              <figure key={i} className="!my-10 border-l-2 border-ember/60 pl-6">
                <blockquote className="font-display text-xl leading-snug text-white/90">
                  {b.text}
                </blockquote>
                {b.cite && (
                  <figcaption className="mt-3 text-sm text-white/50">
                    — {b.cite}
                  </figcaption>
                )}
              </figure>
            );

          case "list":
            return b.ordered ? (
              <ol key={i} className="space-y-3 pl-1">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3.5 text-lg text-white/75">
                    <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-lg border border-gold/30 text-xs font-bold text-gold">
                      {j + 1}
                    </span>
                    <Html html={item} className="leading-relaxed" />
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="space-y-3 pl-1">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3.5 text-lg text-white/75">
                    <Icon
                      name="check"
                      className="mt-1.5 h-4 w-4 flex-none text-gold"
                      strokeWidth={2.4}
                    />
                    <Html html={item} className="leading-relaxed" />
                  </li>
                ))}
              </ul>
            );

          case "steps":
            return (
              <div key={i} className="!my-10 space-y-4">
                {b.items.map((s, j) => (
                  <div
                    key={j}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-bold text-gold">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 leading-relaxed text-white/70">
                      <Html html={s.text} />
                    </p>
                  </div>
                ))}
              </div>
            );

          case "callout":
            return (
              <aside
                key={i}
                className="!my-10 overflow-hidden rounded-2xl border border-ember/25 bg-gradient-to-br from-ember-500/[0.09] to-transparent p-6 sm:p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-400">
                  {b.title}
                </p>
                <p className="mt-3 leading-relaxed text-white/80">
                  <Html html={b.text} />
                </p>
                {b.href && (
                  <a
                    href={b.href}
                    {...(b.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-6 py-3 text-sm font-bold text-ink transition-transform hover:scale-105"
                  >
                    {b.cta ?? "Learn more"}
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                )}
              </aside>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
