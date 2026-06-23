import Icon from "./ui/Icon";

export default function FloatingCTA() {
  return (
    <a
      href="#contact"
      className="floating-cta group fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ink/90 px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-gold/70 sm:bottom-6 sm:right-6 sm:px-5"
      aria-label="Start a Jesus Festival in your city"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-ember" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
      </span>
      <span className="hidden sm:inline">Start in your city</span>
      <span className="sm:hidden">Start here</span>
      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
