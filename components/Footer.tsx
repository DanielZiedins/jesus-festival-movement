import { SITE } from "@/lib/content";
import BrandMark from "./BrandMark";

const EXPLORE = [
  ["The movement", "#movement"],
  ["Hamilton to the nations", "#journey"],
  ["The festival", "#festival"],
  ["The Great Commission", "#commission"],
  ["Bring it to your city", "#contact"],
] as const;

const FAMILY = [
  ["JesusFestival.ca", "https://JesusFestival.ca"],
  ["JesusFestivalNiagara.com", "https://JesusFestivalNiagara.com"],
  ["LoveOnTheWorld.com", "https://LoveOnTheWorld.com"],
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#03050b] py-14 sm:py-20">
      <div className="absolute bottom-0 left-1/2 h-64 w-[55rem] -translate-x-1/2 rounded-full bg-ember/[.05] blur-[100px]" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_.8fr_.8fr]">
          <div>
            <BrandMark full className="w-40 sm:w-52" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/48">{SITE.tagline}</p>
            <a href={`mailto:${SITE.email}`} className="mt-5 inline-block font-bold text-gold hover:underline">{SITE.email}</a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-white/30">Explore</p>
            <ul className="mt-5 space-y-3">
              {EXPLORE.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-sm font-medium text-white/55 transition hover:text-white">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-white/30">The family</p>
            <ul className="mt-5 space-y-3">
              {FAMILY.map(([label, href]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/55 transition hover:text-gold">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/[.08] pt-7 text-xs text-white/30 sm:flex-row sm:items-end">
          <div>
            <p>© {new Date().getFullYear()} Jesus Festival Movement. To the glory of Jesus Christ.</p>
            <p className="mt-2 text-[0.68rem] text-white/32">
              Made with <span aria-label="love" role="img" className="inline-block animate-pulse text-ember-400">❤️</span> by:{" "}
              <a
                href="https://www.danielziedins.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/52 underline decoration-gold/35 underline-offset-4 transition hover:text-gold"
              >
                Daniel Ziedins
              </a>
            </p>
          </div>
          <p className="font-medium text-white/42">From Hamilton, Ontario → to the nations.</p>
        </div>
      </div>
    </footer>
  );
}
