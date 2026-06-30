import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/ui/Icon";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Your Faithful Yes Matters",
  description: "Your Jesus Festival Movement message has been received. We will be in touch as soon as possible.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

const nextSteps = [
  ["We will pray", "Your city and the stirring you shared will be carried with care."],
  ["We will read", "A real person from our team will thoughtfully review your message."],
  ["We will reach out", "We will contact you as soon as possible to discern the next step together."],
] as const;

const firstWeek = [
  ["Day 1", "Pray and write one sentence that explains why this gathering should exist in your city."],
  ["Days 2-3", "Walk one or two possible parks. Notice people, transit, parking, washrooms, power, safety, and nearby neighbours."],
  ["Days 4-5", "Invite two or three humble, trustworthy believers to pray and discern with you."],
  ["Days 6-7", "Contact your city permit office and schedule your first 45-minute prayer meeting."],
] as const;

const guideTracks = [
  {
    number: "01",
    icon: "pray",
    title: "Discern the ground",
    description: "Begin with prayer, then test the vision in the real places where people already gather.",
    points: [
      "Pray for timing, location, purpose, and the people who should carry it.",
      "Walk possible parks and score accessibility, visibility, transit, parking, washrooms, power, weather shelter, and neighbour impact.",
      "Ask the city about availability, permits, insurance, sound, food, tents, inflatables, baptisms, fees, and approval timelines.",
      "Start with the smallest faithful version that can genuinely serve people well.",
    ],
  },
  {
    number: "02",
    icon: "hands",
    title: "Build the core team",
    description: "Do not carry the whole festival alone. Build around character, clarity, and local relationships.",
    points: [
      "Identify leaders for prayer, city/site, program, people, operations, and communication.",
      "Invite local churches and worship teams personally, with Jesus and the Gospel at the centre.",
      "Give every task one owner, one deadline, and one clear definition of done.",
      "Screen and train volunteers before they represent the festival publicly, especially in children’s or vulnerable-person roles.",
    ],
  },
  {
    number: "03",
    icon: "shield",
    title: "Prepare for people",
    description: "Operational excellence is hospitality. Plan for real families, real weather, and real needs.",
    points: [
      "Map stage, sound, prayer, baptisms, kids, food, first aid, washrooms, exits, parking, and accessible routes.",
      "Confirm security, overnight equipment protection, first aid, sanitation, food safety, insurance, and emergency plans.",
      "Build a clear program flow: welcome, worship, Gospel, response, and connection.",
      "Use free food, kids activities, and practical service as genuine community blessing—not as pressure or manipulation.",
    ],
  },
  {
    number: "04",
    icon: "sprout",
    title: "Build for fruit that remains",
    description: "The festival is a launchpad. Decide how prayer, outreach, and discipleship continue when the stage comes down.",
    points: [
      "Begin prayer walks and personal invitations weeks before festival day.",
      "Give volunteers one relational goal: lovingly connect with one or two people.",
      "Capture contact information with consent and assign every response to a trained follow-up leader.",
      "Reach out within 48 hours with prayer, a clear next step, and a healthy local church connection.",
    ],
  },
] as const;

const guidePath = "/resources/basics-how-to-start-a-jesus-festival.pdf";

export default function ThankYouPage() {
  return (
    <main id="main" className="relative min-h-screen overflow-hidden bg-[#050812]">
      <div className="star-field absolute inset-0" />
      <div className="hero-rays absolute inset-0" />
      <div className="absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 bg-gold/[.04] shadow-[0_0_180px_rgba(244,196,92,.09)]" />
      <div className="grain" />

      <div className="container-x relative z-10 flex min-h-screen flex-col py-8 sm:py-10">
        <BrandMark priority className="w-fit" />

        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center py-16 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/25 bg-gradient-to-br from-gold/20 to-ember/10 text-gold shadow-glow">
            <Icon name="check" className="h-9 w-9" />
          </div>
          <p className="mt-8 text-xs font-bold uppercase tracking-[.3em] text-gold">Message received</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold uppercase leading-[.84] tracking-[-.065em] text-white sm:text-7xl lg:text-8xl">
            Your faithful yes
            <span className="block text-gradient-gold">matters.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
            Thank you for taking this step. We received your message, and we will contact you as soon as possible. What God begins with a whisper can become an invitation for an entire city.
          </p>

          <div className="mt-12 grid w-full gap-4 text-left md:grid-cols-3">
            {nextSteps.map(([title, description], index) => (
              <div key={title} className="rounded-[1.6rem] border border-white/10 bg-white/[.045] p-6 backdrop-blur-xl">
                <span className="font-display text-sm font-bold text-gold">0{index + 1}</span>
                <h2 className="mt-3 font-display text-xl font-bold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/52">{description}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-12 max-w-2xl border-y border-white/10 py-7 font-display text-xl font-semibold italic leading-relaxed text-white/76 sm:text-2xl">
            “For who hath despised the day of small things?”
            <cite className="mt-3 block font-sans text-xs not-italic uppercase tracking-[.24em] text-gold">Zechariah 4:10</cite>
          </blockquote>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#starter-guide" className="button-primary">Open your head start <Icon name="arrow" className="h-4 w-4 rotate-90" /></a>
            <a href={`mailto:${SITE.email}`} className="button-secondary">Email us directly</a>
          </div>
        </div>
      </div>

      <section id="starter-guide" className="relative z-10 border-t border-white/10 bg-[#070b16]/92 py-20 sm:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.28em] text-gold">Your head start is ready</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[.9] tracking-[-.055em] text-white sm:text-6xl">
                You do not have to
                <span className="block text-gradient-gold">wait to begin.</span>
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/62">
                While our team prepares to reach out, you can begin praying, walking possible locations, gathering a few trusted people, and opening the first city conversation. This guide turns lessons from Jesus Festival Hamilton into a practical path for your first faithful steps.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={guidePath} download className="button-primary group">
                  Download the free PDF
                  <Icon name="download" className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                </a>
                <a href="#first-week" className="button-secondary">Start with this week <span aria-hidden="true">↓</span></a>
              </div>
              <p className="mt-4 text-xs text-white/35">10 pages · practical checklists · 30/60/90-day plan · free to use with your team</p>
            </div>

            <a
              href={guidePath}
              download
              aria-label="Download Basics: How to Start a Jesus Festival"
              className="group relative mx-auto block w-full max-w-md"
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/18 to-ember/10 blur-2xl transition duration-500 group-hover:scale-105 group-hover:opacity-90" />
              <div className="relative aspect-[.77] overflow-hidden rounded-[2rem] border border-gold/25 bg-[#050812] p-8 shadow-[0_42px_100px_rgba(0,0,0,.55)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/20 bg-gold/[.07]" />
                <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-ember/[.09] blur-xl" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <Image src="/jesus-festival-movement-mark.png" alt="" width={1050} height={1050} className="h-16 w-16 object-contain" />
                    <span className="font-display text-sm font-bold leading-tight text-white">Jesus Festival<span className="mt-1 block text-[.58rem] uppercase tracking-[.22em] text-gold">Movement</span></span>
                  </div>
                  <div className="my-auto">
                    <p className="text-xs font-bold uppercase tracking-[.28em] text-gold">Practical field guide</p>
                    <p className="mt-5 font-display text-5xl font-bold uppercase leading-[.83] tracking-[-.06em] text-white sm:text-6xl">Basics</p>
                    <p className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-white">How to start a</p>
                    <p className="mt-1 font-display text-4xl font-bold uppercase leading-none text-gradient-gold">Jesus Festival</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-5 text-[.65rem] font-bold uppercase tracking-[.2em] text-white/42">
                    <span>One faithful step</span>
                    <span className="text-gold">PDF ↓</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="first-week" className="relative z-10 py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-ember-400">Do this before we call</p>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[.92] tracking-[-.05em] text-white sm:text-6xl">Your first seven days.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/58">The goal is not a finished festival plan. The goal is prayer, clarity, a few faithful people, and one real next step.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {firstWeek.map(([day, action], index) => (
              <article key={day} className="group rounded-[1.6rem] border border-white/10 bg-white/[.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/25 hover:bg-white/[.055]">
                <span className="font-display text-4xl font-bold text-white/12 transition group-hover:text-gold/30">0{index + 1}</span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[.2em] text-gold">{day}</p>
                <p className="mt-3 leading-relaxed text-white/62">{action}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-[#0b1122]/75 py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-gold">The starter roadmap</p>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[.92] tracking-[-.05em] text-white sm:text-6xl">Four tracks to move forward wisely.</h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {guideTracks.map((track) => (
              <article key={track.number} className="rounded-[2rem] border border-white/10 bg-[#070b16]/88 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[.08] text-gold">
                    <Icon name={track.icon} className="h-6 w-6" />
                  </div>
                  <span className="font-display text-4xl font-bold text-white/[.08]">{track.number}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl">{track.title}</h3>
                <p className="mt-3 leading-relaxed text-white/52">{track.description}</p>
                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {track.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-white/62">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-4xl rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.09] via-white/[.035] to-ember/[.07] p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:p-12">
            <Icon name="calendar" className="mx-auto h-9 w-9 text-gold" />
            <p className="mt-6 text-xs font-bold uppercase tracking-[.28em] text-gold">Your next 45 minutes</p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">Schedule the first prayer meeting.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/58">
              Worship and pray for ten minutes. Share the burden. Name possible locations and local relationships. Choose three actions with owners and dates. Then pray over the people your city has not reached yet.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={guidePath} download className="button-primary">Download the complete guide <Icon name="download" className="h-5 w-5" /></a>
              <Link href="/" className="button-secondary">Return to the movement <Icon name="arrow" className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
