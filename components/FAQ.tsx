import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";
import { FAQS } from "@/lib/content";

/**
 * Server component built on native `<details name>` — the browser handles the
 * accordion behaviour, the answers are always present in the DOM for crawlers
 * and answer engines, and the section ships no JavaScript at all.
 */
export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-pad relative overflow-hidden bg-navy-950/40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_100%,rgba(16,26,74,0.6),transparent_60%)]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Questions &amp; Answers</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Everything You Want To{" "}
              <span className="text-gradient-gold">Ask First</span>
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details
                name="jfm-faq"
                open={i === 0}
                className="accordion group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors open:border-gold/30 open:bg-white/[0.05]"
              >
                <summary className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <h3 className="font-display text-base font-bold text-white sm:text-lg">
                    {f.q}
                  </h3>
                  <span
                    className="accordion-plus flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/15 text-xl leading-none text-gold transition-transform duration-300"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-white/70">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 flex flex-col items-center justify-center gap-x-6 gap-y-3 text-center text-base text-white/60 sm:flex-row">
            <a
              href="/answers"
              className="inline-flex items-center gap-2 font-semibold text-gold hover:underline"
            >
              Read all the answers
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <span className="hidden text-white/20 sm:inline">·</span>
            <a
              href="#contact"
              className="font-semibold text-white/70 hover:text-gold"
            >
              Or ask us something new
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
