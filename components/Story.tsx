import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

export default function Story() {
  return (
    <section id="story" className="section-pad relative overflow-hidden">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <Eyebrow>The Origin Story</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              It Began As One{" "}
              <span className="text-gradient-gold">Step Of Faith</span> In
              Hamilton, Ontario.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-white/70">
              <p>
                What began as a local step of faith in Hamilton, Ontario, Canada
                has become a vision to see cities, regions, and nations impacted
                by the Gospel of Jesus Christ.
              </p>
              <p>
                We have seen real fruit — lives changed, people encountering
                Jesus, baptisms, salvations, worship, unity, outreach, and
                lasting Kingdom impact. From the very beginning, our hearts have
                been big on evangelism.
              </p>
              <p className="font-medium text-white">
                The heart was never just to host festivals or events. The heart
                is to see every event become a movement that carries forward
                long after the stage is taken down.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Visual: glowing origin marker */}
        <Reveal delay={0.15}>
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 rounded-[2rem] glass-strong" />
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,107,53,0.25),transparent_60%)]" />
              {/* concentric ripples from Hamilton */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30"
                    style={{
                      width: 90 + i * 80,
                      height: 90 + i * 80,
                    }}
                  />
                ))}
                <span className="relative flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-ember" />
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-br from-gold-400 to-ember-500 shadow-glow-ember" />
                </span>
              </div>
              <div className="absolute bottom-7 left-7">
                <p className="font-display text-2xl font-bold text-white">
                  Hamilton, ON
                </p>
                <p className="text-sm text-gold-400">Where the fire was lit</p>
              </div>
              <div className="absolute right-7 top-7 rounded-full glass px-3 py-1.5 text-xs font-semibold tracking-wide text-white/80">
                43.2557° N, 79.8711° W
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
