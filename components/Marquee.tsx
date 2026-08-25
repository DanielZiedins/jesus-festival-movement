const WORDS = [
  "Gather",
  "Worship",
  "Preach Jesus",
  "Reach The Lost",
  "Baptize",
  "Disciple",
  "Plant Outreach",
  "Multiply",
];

export default function Marquee() {
  const row = WORDS.map((w) => (
    <span key={w} className="mx-6 inline-flex items-center gap-6">
      <span className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-white/25 sm:text-3xl">
        {w}
      </span>
      <span className="text-gold/50" aria-hidden="true">
        ✦
      </span>
    </span>
  ));

  return (
    <div
      className="relative overflow-hidden border-y border-white/5 bg-navy-950/60 py-6"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee whitespace-nowrap motion-reduce:animate-none">
        <div className="flex items-center">{row}</div>
        <div className="flex items-center">{row}</div>
      </div>
    </div>
  );
}
