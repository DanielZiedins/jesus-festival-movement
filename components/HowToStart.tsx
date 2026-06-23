import { SIMPLE_STEPS } from "@/lib/content";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";

export default function HowToStart() {
  return (
    <section id="how-to-start" className="section-pad relative overflow-hidden bg-[#f1e9da] text-ink">
      <div className="absolute -right-36 -top-36 h-96 w-96 rounded-full border border-ember/20" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-ember/20" />
      <div className="container-x relative">
        <div className="grid items-start gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
          <Reveal>
            <Eyebrow dark>Bring Jesus Festival to your city</Eyebrow>
            <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[.88] tracking-[-.06em] text-ink sm:text-6xl lg:text-7xl">
              You do not need to have it
              <span className="block text-ember-600">all figured out.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/68">
              If God is stirring your heart, take the first step. We would love to help you discern, plan, prepare, build local unity, and shape a Jesus Festival expression for your city.
            </p>
            <div className="mt-8 rounded-[1.6rem] border border-ink/10 bg-white/55 p-6 backdrop-blur-sm">
              <p className="font-display text-xl font-bold text-ink">What we can help you navigate</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Vision and prayer", "Local church unity", "Event planning", "Evangelism training", "Festival launch", "Ongoing outreach"].map((item) => (
                  <span key={item} className="flex items-center gap-2.5 text-sm font-semibold text-ink/68">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ember text-[.65rem] text-white">✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {SIMPLE_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <article className={`group relative min-h-[15rem] overflow-hidden rounded-[1.8rem] border p-7 transition duration-500 hover:-translate-y-1 sm:p-8 ${
                  index === 2
                    ? "border-ember bg-ember text-white shadow-[0_24px_70px_rgba(233,95,50,.25)]"
                    : "border-ink/10 bg-white/58 text-ink"
                }`}>
                  <span className={`font-display text-sm font-bold ${index === 2 ? "text-white/60" : "text-ember-600"}`}>{step.number}</span>
                  <h3 className="mt-8 font-display text-2xl font-bold">{step.title}</h3>
                  <p className={`mt-3 leading-relaxed ${index === 2 ? "text-white/75" : "text-ink/60"}`}>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-ink/15 pt-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-ember-600">Your next step is simple</p>
              <p className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Reach out to us. We will help you take the next step.
              </p>
            </div>
            <a href="#contact" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-ink px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-ember-600">
              Start the conversation
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
