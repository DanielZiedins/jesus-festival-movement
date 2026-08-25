import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";
import JoinForm from "./JoinForm";
import { LETTERS } from "@/lib/letters";

export default function JoinMovement() {
  return (
    <section
      id="join"
      className="relative overflow-hidden border-y border-gold/15 section-pad"
    >
      {/* Deliberately the brightest moment on the page */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,#241436_0%,#0b0a26_45%,#05060f_100%)]" />
      <div className="aurora opacity-80" />
      <div className="grain" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Play Your Part</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
              We All Play A Role In{" "}
              <span className="text-gradient-gold">
                What The Lord Is Doing.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              The Great Commission was never handed to a few professionals. It
              was given to the Church — to ordinary people who say yes. Join us
              and we&apos;ll send you{" "}
              <span className="font-semibold text-white">
                nine letters
              </span>{" "}
              carrying the story, the fruit, the mission, and the specific ways
              you can step in.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* What you actually receive */}
          <div>
            <Reveal delay={0.12}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                What lands in your inbox
              </p>
            </Reveal>
            <ol className="mt-7 space-y-3">
              {LETTERS.map((l, i) => (
                <Reveal key={l.n} delay={0.15 + i * 0.04}>
                  <li className="group flex gap-4 rounded-2xl border border-white/8 bg-white/[0.035] p-4 transition-colors hover:border-gold/25 hover:bg-white/[0.06]">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-gold/25 bg-navy-900 font-display text-sm font-bold text-gold">
                      {l.n}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2.5">
                        <h3 className="font-display font-bold text-white">
                          {l.title}
                        </h3>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                          {l.when}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">
                        {l.blurb}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* The box itself */}
          <Reveal delay={0.18}>
            <div className="relative overflow-hidden rounded-3xl glass-strong p-7 shadow-glow sm:p-9 lg:sticky lg:top-28">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gold-500/15 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-ember" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ember" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                    Join The Movement
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Step in. Start with your{" "}
                  <span className="text-gradient-gold">own city.</span>
                </h3>
                <p className="mt-3.5 leading-relaxed text-white/70">
                  Free, always. Written by people who are actually doing this —
                  not a marketing team.
                </p>

                <div className="mt-7">
                  <JoinForm source="join-section" withName />
                </div>

                <ul className="mt-7 space-y-2.5 border-t border-white/10 pt-6">
                  {[
                    "Real updates on what God is doing",
                    "Practical help to reach your own city",
                    "Prayer points you can actually use",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-white/65"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 flex-none text-gold"
                        strokeWidth={2.4}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
