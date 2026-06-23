import { FAQS } from "@/lib/content";
import Eyebrow from "./ui/Eyebrow";

export default function FAQ() {
  return (
    <section id="questions" className="section-pad relative overflow-hidden bg-[#070b16]">
      <div className="absolute left-1/2 top-0 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-gold/[.045] blur-[110px]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <Eyebrow>Questions &amp; next steps</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-[.92] tracking-[-.05em] text-white sm:text-5xl lg:text-6xl">
            Start with
            <span className="block text-gradient-gold">one faithful yes.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/58">
            You do not need a stage, a budget, or every answer. Movements often begin with prayer and a few people willing to obey.
          </p>
        </div>

        <div className="divide-y divide-white/10 rounded-[2rem] border border-white/10 bg-white/[.035] px-6 sm:px-8">
          {FAQS.map((item, index) => (
            <details key={item.question} className="group py-6" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-white marker:content-none sm:text-xl">
                {item.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/20 text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pb-1 pt-4 leading-relaxed text-white/58">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
