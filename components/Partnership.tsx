import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";

export default function Partnership() {
  return (
    <section id="partnership" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,107,53,0.08),transparent_55%)]" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Partnership</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                In Partnership With{" "}
                <span className="text-gradient-gold">Love On The World</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Love on The World carries a heart for evangelism, outreach,
                discipleship, and mobilizing believers to share the Gospel in
                cities and nations. Together, we&apos;re labouring for the same
                vision — that Jesus would be lifted up and the lost would be
                reached, everywhere.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="https://LoveOnTheWorld.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold text-white transition-colors hover:text-gold"
              >
                Visit LoveOnTheWorld.com
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl glass-strong p-10 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(245,196,81,0.12),transparent_60%)]" />
              <div className="relative">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-ember-500 text-ink shadow-glow-ember">
                  <Icon name="globe" className="h-10 w-10" />
                </div>
                <p className="mt-6 font-display text-2xl font-bold text-white">
                  Love On The World
                </p>
                <p className="mt-3 text-white/65">
                  Evangelism · Outreach · Discipleship · Mobilization
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {["8.3B", "2.6B", "2.3B"].map((n, i) => (
                    <div key={i} className="rounded-xl bg-white/5 p-3">
                      <p className="font-display text-lg font-bold text-gold">
                        {n}
                      </p>
                      <p className="text-[10px] uppercase tracking-wide text-white/50">
                        {["People", "Believers", "Unreached"][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
