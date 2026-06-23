import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";
import { FESTIVALS } from "@/lib/content";

export default function Festivals() {
  return (
    <section id="festivals" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(245,196,81,0.07),transparent_50%)]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Where It's Happening</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Hamilton{" "}
              <span className="text-gradient-gold">&amp;</span> Niagara
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Two cities. One Gospel. The vision is already on the move — and
              it&apos;s only the beginning.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {FESTIVALS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full overflow-hidden rounded-3xl glass-strong p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 sm:p-10"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-gold-500/20 to-ember-500/10 blur-3xl transition-opacity group-hover:opacity-150" />
                <div className="relative">
                  <span className="inline-flex rounded-full bg-ember-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ember-400">
                    {f.tag}
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-bold text-white">
                    {f.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold-400">
                    {f.city}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-white/70">
                    {f.blurb}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 font-semibold text-gold transition-transform group-hover:gap-3">
                    {f.display}
                    <Icon
                      name="arrow"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
