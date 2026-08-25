import PointerGlow from "./ui/PointerGlow";
import { SITE } from "@/lib/content";

const words = ["Jesus", "Festival", "Movement"];

/**
 * Server component — the whole hero is HTML on first byte, which matters
 * because the headline is the LCP element. Every animation here is CSS; the
 * only client code in the section is the ~1KB cursor glow.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Cinematic layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,#1a1140_0%,#080a1f_45%,#05060f_100%)]" />
      <div className="aurora" />

      <PointerGlow />

      {/* City lights */}
      <div className="absolute inset-0" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="twinkle absolute rounded-full bg-gold"
            style={
              {
                left: `${(i * 53) % 100}%`,
                top: `${(i * 71) % 100}%`,
                width: (i % 3) + 1,
                height: (i % 3) + 1,
                "--tw-dur": `${3 + (i % 5)}s`,
                "--tw-delay": `${i * 0.15}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Rising embers */}
      <div className="absolute inset-0" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={`ember-${i}`}
            className="ember absolute bottom-0 rounded-full"
            style={
              {
                left: `${(i * 37 + 11) % 100}%`,
                width: (i % 2) + 2,
                height: (i % 2) + 2,
                background: i % 2 ? "#ff8a5b" : "#ffd76e",
                boxShadow: `0 0 8px ${i % 2 ? "#ff8a5b" : "#ffd76e"}`,
                "--ember-rise": `${-(280 + (i % 5) * 90)}px`,
                "--ember-x": `${(i % 2 ? 1 : -1) * (20 + (i % 4) * 14)}px`,
                "--ember-dur": `${7 + (i % 6)}s`,
                "--ember-delay": `${i * 0.9}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Horizon glow */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ember-600/25 via-ember-600/5 to-transparent" />
      <div className="grain" />

      <div className="container-x relative z-10 py-28 text-center">
        <p className="hero-in mx-auto mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gold-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-ember" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          A Global Gospel Movement
        </p>

        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[8rem]">
          {words.map((w, i) => (
            <span
              key={w}
              className={`hero-in block ${
                i === 1 ? "text-shimmer" : "text-white"
              }`}
              style={
                {
                  "--reveal-d": `${0.15 + i * 0.12}s`,
                  "--reveal-y": "40px",
                } as React.CSSProperties
              }
            >
              {w}
            </span>
          ))}
        </h1>

        <p
          className="hero-in mx-auto mt-8 max-w-2xl text-balance text-lg text-white/75 sm:text-xl"
          style={{ "--reveal-d": "0.6s" } as React.CSSProperties}
        >
          {SITE.tagline}
        </p>

        <div
          className="hero-in mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ "--reveal-d": "0.8s" } as React.CSSProperties}
        >
          <a
            href="#join"
            className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-8 py-4 text-base font-semibold text-ink shadow-glow-ember transition-transform hover:scale-105 sm:w-auto"
          >
            <span className="relative z-10">Join The Movement</span>
          </a>
          <a
            href="/start-a-festival"
            className="w-full rounded-full glass px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold/40 hover:text-gold sm:w-auto"
          >
            Start A Festival
          </a>
        </div>

        <p
          className="hero-fade mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/55"
          style={{ "--reveal-d": "1.05s" } as React.CSSProperties}
        >
          Nine free letters on the story, the fruit, and the part{" "}
          <span className="text-white/80">you</span> play in it.
        </p>

        <p
          className="hero-fade mt-10 text-sm font-medium uppercase tracking-[0.2em] text-white/40"
          style={{ "--reveal-d": "1.2s" } as React.CSSProperties}
        >
          Gather · Worship · Preach Jesus · Reach the Lost · Multiply
        </p>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue absolute bottom-7 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
