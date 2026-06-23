import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";

export default function Partnership() {
  return (
    <section id="partnership" className="relative overflow-hidden border-y border-white/10 bg-[#0b1730] py-10 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(125,211,252,.12),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(244,196,92,.1),transparent_30%)]" />
      <div className="container-x relative">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-sky-300/25 bg-sky-300/[.08] text-sky-200 shadow-[0_0_60px_rgba(125,211,252,.13)]">
              <Icon name="globe" className="h-9 w-9" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-sky-200/70">In partnership with</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Love on The World</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-white/58">
                A Great Commission movement helping believers live on mission through evangelism, outreach, discipleship, prayer, healing, unity, and a heart for cities and nations.
              </p>
            </div>
            <a
              href="https://LoveOnTheWorld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 font-bold text-white transition hover:border-sky-200/50 hover:bg-white/5"
            >
              Visit the movement
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
