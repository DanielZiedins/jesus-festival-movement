import Reveal from "./ui/Reveal";

type Props = { quote: string; reference: string };

export default function ScriptureQuote({ quote, reference }: Props) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,196,81,0.08),transparent_70%)]" />
      <div className="container-x relative text-center">
        <Reveal>
          <span className="font-display text-6xl text-gold/30">“</span>
          <p className="mx-auto -mt-6 max-w-4xl text-balance font-display text-2xl font-medium leading-snug text-white sm:text-4xl">
            {quote}
          </p>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-ember-400">
            {reference}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
