import Share from "./Share";
import JoinForm from "./JoinForm";
import { SITE, FESTIVALS } from "@/lib/content";

const PAGES = [
  { href: "/akuse", label: "Jesus Festival Akuse 2026" },
  { href: "/start-a-festival", label: "The Full Playbook" },
  { href: "/know-jesus", label: "Know Jesus" },
  { href: "/answers", label: "Answers" },
  { href: "/blog", label: "The Journal" },
  { href: "/network", label: "The Network" },
  { href: "/about", label: "About Us" },
];

const NAV = [
  { href: "/#story", label: "Origin Story" },
  { href: "/#vision", label: "The Vision" },
  { href: "/#commission", label: "Great Commission" },
  { href: "/#model", label: "Festival Model" },
  { href: "/#map", label: "Global Map" },
  { href: "/#testimonies", label: "Testimonies" },
  { href: "/#partnership", label: "Partnership" },
  { href: "/#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink py-16">
      <div className="container-x">
        {/* Last chance to step in */}
        <div className="mb-14 overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-navy-900/80 to-ink p-8 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Before you go —{" "}
                <span className="text-gradient-gold">
                  come with us.
                </span>
              </p>
              <p className="mt-3 max-w-md leading-relaxed text-white/65">
                Nine letters on the story, the fruit, the mission, and the part
                you play in it. Free, and you can leave any time.
              </p>
            </div>
            <JoinForm source="footer" variant="inline" cta="Join Free" />
          </div>
        </div>

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
              Start Here
            </p>
            <ul className="mt-4 space-y-2.5">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    className="text-sm font-semibold text-gold/90 transition-colors hover:text-gold"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-7 font-display text-sm font-bold uppercase tracking-wider text-white/40">
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
                    {...(f.url.startsWith("http")
                      ? { target: "_blank" as const, rel: "noopener noreferrer" }
                      : {})}
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

        <div className="mt-14 border-t border-white/10 pt-10 text-center">
          <Share
            title="Spread the movement"
            url={SITE.url}
            text="Jesus Festival Movement — raising up Gospel festivals that become lasting movements."
          />
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
