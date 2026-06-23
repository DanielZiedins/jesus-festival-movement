import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";
import Image from "next/image";

const OUTCOMES = [
  ["Gather", "the Church"],
  ["Reach", "the lost"],
  ["Continue", "the mission"],
] as const;

export default function Story() {
  return (
    <section id="movement" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_35%,rgba(233,95,50,.12),transparent_29%)]" />
      <div className="container-x relative">
        <div className="grid items-start gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>The movement</Eyebrow>
              <h2 className="mt-6 max-w-xl font-display text-5xl font-bold uppercase leading-[.91] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
                More than a festival.
                <span className="block text-gradient-gold">A movement that remains.</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/66">
                Jesus Festival gathers the Church, celebrates Jesus publicly, proclaims the Gospel clearly, and creates space for people to respond. But the stage is only the beginning.
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/66">
                The vision is lasting fruit in every city: salvations, baptisms, unity, discipleship, and ongoing evangelism groups still reaching people long after the festival ends.
              </p>
              <a
                href="https://JesusFestival.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-gold"
              >
                Discover Jesus Festival Hamilton
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.08}>
              <div className="movement-collage relative min-h-[34rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-navy-950 sm:min-h-[42rem]">
                <Image
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=86"
                  alt="People worshipping together at an outdoor gathering"
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,16,.12),rgba(4,7,16,.45)_45%,rgba(4,7,16,.95))]" />
                <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[.66rem] font-bold uppercase tracking-[.22em] text-white/75 backdrop-blur-md sm:left-8 sm:top-8">
                  Hamilton, Ontario
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                  <blockquote className="max-w-xl text-balance font-display text-2xl font-semibold leading-tight text-white sm:text-4xl">
                    “Every gathering is a seed — planted in worship, watered through outreach, multiplied through discipleship.”
                  </blockquote>
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {OUTCOMES.map(([verb, object]) => (
                      <div key={verb} className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                        <p className="font-display text-xl font-bold text-gold">{verb}</p>
                        <p className="mt-0.5 text-sm text-white/55">{object}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-20 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] md:grid-cols-3">
            {[
              ["01", "Jesus at the center", "Not a brand, personality, or performance — Jesus."],
              ["02", "The Gospel made clear", "A loving, public invitation to repent, believe, and follow."],
              ["03", "Local fruit that lasts", "Unity and outreach that belong to the city, not to a touring event."],
            ].map(([number, title, text]) => (
              <article key={number} className="group border-b border-white/10 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-9">
                <span className="font-display text-sm font-bold text-ember-400">{number}</span>
                <h3 className="mt-7 font-display text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-relaxed text-white/56">{text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
