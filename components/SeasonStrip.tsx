import Icon from "./ui/Icon";
import { CHRISTMAS_SEASON, inChristmasSeason } from "@/lib/season";

/** Homepage strip for the Advent/Christmas season; renders nothing otherwise. */
export default function SeasonStrip() {
  if (!inChristmasSeason()) return null;
  return (
    <section aria-labelledby="home-season-heading" className="section-pad !py-14">
      <div className="container-x">
        <div className="rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/[.08] via-white/[.02] to-ember/[.06] p-6 sm:p-8">
          <h2 id="home-season-heading" className="font-display text-2xl font-bold text-white sm:text-3xl">
            This season:{" "}
            <span className="text-gradient-gold">Advent &amp; Christmas</span>
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            One of the few seasons when people who never think about church are open to it. Pray, then invite.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CHRISTMAS_SEASON.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-gold/40"
                >
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gold-400">{item.label}</span>
                    <span className="mt-1 block font-semibold leading-snug text-white">{item.title}</span>
                  </span>
                  <Icon name="arrow" className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
