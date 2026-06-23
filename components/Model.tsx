import { FESTIVAL_ELEMENTS } from "@/lib/content";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";
import Image from "next/image";

export default function Model() {
  return (
    <section id="festival" className="section-pad relative overflow-hidden bg-[#070b16]">
      <div className="absolute inset-x-0 top-0 h-[32rem] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?auto=format&fit=crop&w=2000&q=82"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[.13] grayscale"
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(7,11,22,.05),#070b16)]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>One gathering. Many expressions.</Eyebrow>
            <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[.9] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
              What a Jesus Festival
              <span className="block text-gradient-gold">can look like.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/62">
              Every city is different. The expression can change, but the heart remains: Jesus at the center, the Gospel made clear, and people equipped to live on mission.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FESTIVAL_ELEMENTS.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 0.05}>
              <article className="element-card group relative h-full min-h-[17rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink/65 p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-gold/35 sm:p-7">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-gold/[.07] blur-3xl transition group-hover:bg-ember/[.14]" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[.08] text-gold transition group-hover:bg-gold group-hover:text-ink">
                      <Icon name={item.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-display text-xs font-bold text-white/24">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-auto pt-10">
                    <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{item.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-6 grid items-center gap-7 overflow-hidden rounded-[2rem] border border-gold/15 bg-[linear-gradient(120deg,rgba(244,196,92,.09),rgba(233,95,50,.04))] p-7 sm:p-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">The festival is a launchpad, not the finish line.</p>
              <p className="mt-3 max-w-3xl leading-relaxed text-white/58">
                We want every gathering to strengthen local believers, connect new disciples, and help outreach continue week after week.
              </p>
            </div>
            <a href="#how-to-start" className="button-secondary shrink-0">See the first step <span>↓</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
