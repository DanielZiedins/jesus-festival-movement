import { SITE, FESTIVALS } from "@/lib/content";

const NAV = [
  { href: "#story", label: "Origin Story" },
  { href: "#vision", label: "The Vision" },
  { href: "#commission", label: "Great Commission" },
  { href: "#model", label: "Festival Model" },
  { href: "#how-to-start", label: "Start A Festival" },
  { href: "#map", label: "Global Map" },
  { href: "#testimonies", label: "Testimonies" },
  { href: "#partnership", label: "Partnership" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink py-16">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-ember-500 text-lg font-bold text-ink">
                ✝
              </span>
              <span className="font-display text-lg font-bold text-white">
                Jesus Festival<span className="text-gold"> Movement</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              {SITE.tagline}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-block font-semibold text-gold hover:underline"
            >
              {SITE.email}
            </a>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-white/65 transition-colors hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
              The Family
            </p>
            <ul className="mt-4 space-y-2.5">
              {FESTIVALS.map((f) => (
                <li key={f.url}>
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/65 transition-colors hover:text-gold"
                  >
                    {f.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://LoveOnTheWorld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 transition-colors hover:text-gold"
                >
                  LoveOnTheWorld.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Jesus Festival Movement. To the glory of
            Jesus Christ.
          </p>
          <p className="font-medium text-white/50">
            “Go therefore and make disciples of all nations.” — Matthew 28:19
          </p>
        </div>
      </div>
    </footer>
  );
}
