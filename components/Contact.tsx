import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";
import { SITE } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden section-pad">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(255,107,53,0.2),transparent_55%)]" />
      <div className="aurora opacity-60" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Take The Step Of Faith</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
              We Would Love To Help —{" "}
              <span className="text-gradient-gold">
                However We Can, For God&apos;s Glory.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-2xl text-lg text-white/75">
              Whether you&apos;re dreaming of a festival in your city, want to
              join the movement, or simply want to connect — reach out. Take the
              step of faith.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href={`mailto:${SITE.email}?subject=Connecting%20with%20the%20Jesus%20Festival%20Movement`}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-8 py-4 text-lg font-bold text-ink shadow-glow-ember transition-transform hover:scale-105"
            >
              <Icon name="mail" className="h-5 w-5" />
              {SITE.email}
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-14 max-w-2xl rounded-3xl glass-strong p-8 sm:p-10">
              <p className="text-balance font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
                Be encouraged. Take the step of faith. It may be a lot of work,
                but when lives are changed, cities are impacted, and Jesus is
                glorified —{" "}
                <span className="text-gradient-gold">it is SO worth it.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
