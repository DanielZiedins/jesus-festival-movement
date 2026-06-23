import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { STEPS, SITE } from "@/lib/content";

export default function HowToStart() {
  return (
    <section
      id="how-to-start"
      className="section-pad relative overflow-hidden border-y border-white/5 bg-navy-950/50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(26,17,64,0.7),transparent_60%)]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>The Main Call To Action</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance font-display text-4xl font-bold leading-tight sm:text-5xl">
              How To Start A Jesus Festival{" "}
              <span className="text-gradient-gold">In Your City</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Let&apos;s be honest — it can be a lot of work. It requires prayer,
              unity, sacrifice, leadership, volunteers, permits, planning, and
              faith. But it is <span className="font-semibold text-gold">SO worth it</span>{" "}
              when lives are changed and Jesus is glorified.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="w-full rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-8 py-4 text-base font-semibold text-ink shadow-glow-ember transition-transform hover:scale-105 sm:w-auto"
              >
                Take The Step Of Faith
              </a>
              <a
                href={`mailto:${SITE.email}?subject=Starting%20a%20Jesus%20Festival%20in%20my%20city`}
                className="w-full rounded-full glass px-8 py-4 text-base font-semibold text-white transition-colors hover:text-gold sm:w-auto"
              >
                Start A Jesus Festival In Your City
              </a>
            </div>
          </Reveal>
        </div>

        {/* Roadmap */}
        <ol className="mx-auto mt-20 max-w-4xl">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.05}>
              <li className="group relative flex gap-6 pb-10 last:pb-0">
                {/* connector line */}
                {i !== STEPS.length - 1 && (
                  <span className="absolute left-[27px] top-14 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-gold/40 to-transparent" />
                )}
                <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-gold/30 bg-navy-900 font-display text-lg font-bold text-gold shadow-glow transition-colors group-hover:bg-gold group-hover:text-ink">
                  {s.n}
                </div>
                <div className="flex-1 rounded-2xl glass p-6 transition-colors group-hover:border-gold/20">
                  <h3 className="font-display text-xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-white/65">{s.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
