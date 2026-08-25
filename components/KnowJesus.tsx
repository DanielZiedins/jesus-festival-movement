import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { SITE } from "@/lib/content";

const GOSPEL = [
  {
    title: "God Loves You",
    text: "You were created on purpose, for a purpose — to know God. He loves you more than you can imagine.",
    ref: "John 3:16",
  },
  {
    title: "Sin Separates Us",
    text: "All of us have fallen short. Sin separates us from God, and no amount of effort can bridge that gap on our own.",
    ref: "Romans 3:23",
  },
  {
    title: "Jesus Made A Way",
    text: "Jesus Christ — God's Son — died on the cross for your sins and rose from the dead. He paid the price you couldn't pay.",
    ref: "Romans 5:8",
  },
  {
    title: "Respond In Faith",
    text: "Turn from sin, believe in Jesus, and confess Him as Lord. He will forgive you, make you new, and never leave you.",
    ref: "Romans 10:9",
  },
];

export default function KnowJesus() {
  return (
    <section
      id="know-jesus"
      className="section-pad relative overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,196,81,0.1),transparent_55%)]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>New To Jesus?</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
              This Whole Movement Exists So You Can{" "}
              <span className="text-gradient-gold">Know Jesus.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Before it&apos;s a festival, before it&apos;s a movement — it&apos;s
              an invitation. Here is the good news in four simple steps.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GOSPEL.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                <span className="font-display text-4xl font-bold text-gold/20 transition-colors group-hover:text-gold/40">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {g.text}
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gold-400">
                  {g.ref}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl glass-strong p-8 text-center sm:p-10">
            <p className="font-display text-2xl font-bold text-white">
              Ready to follow Jesus?
            </p>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/70">
              You can pray right where you are:{" "}
              <span className="italic text-white/85">
                &ldquo;Jesus, I believe You died for me and rose again. Forgive
                my sins. I turn to You. Be my Lord and Savior. Fill me with Your
                Spirit. Amen.&rdquo;
              </span>
            </p>
            <p className="mt-4 text-white/70">
              If you prayed that and meant it — welcome to the family. Tell us,
              so we can celebrate with you and help you take your next steps.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${SITE.email}?subject=I%20just%20decided%20to%20follow%20Jesus`}
                className="w-full rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-8 py-4 text-base font-bold text-ink shadow-glow-ember transition-transform hover:scale-105 sm:w-auto"
              >
                I Just Followed Jesus — Tell Us!
              </a>
              <a
                href="/know-jesus"
                className="w-full rounded-full glass px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold/40 hover:text-gold sm:w-auto"
              >
                Read More &amp; Next Steps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
