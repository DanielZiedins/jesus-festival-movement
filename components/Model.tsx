import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";
import { MODEL } from "@/lib/content";

export default function Model() {
  return (
    <section
      id="model"
      className="section-pad relative overflow-hidden border-y border-white/5 bg-navy-950/40"
    >
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>The Festival Model</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Jesus At The Center Of{" "}
              <span className="text-gradient-gold">Everything.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Every Jesus Festival is built around eight Spirit-led pillars —
              designed to glorify Jesus, reach the lost, and leave a movement
              behind.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODEL.map((m, i) => (
            <Reveal key={m.title} delay={(i % 4) * 0.05}>
              <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500/20 to-ember-500/20 text-gold transition-colors group-hover:from-gold-500 group-hover:to-ember-500 group-hover:text-ink">
                  <Icon name={m.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
