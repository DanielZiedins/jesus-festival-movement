import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  full?: boolean;
  priority?: boolean;
  className?: string;
};

export default function BrandMark({ full = false, priority = false, className = "" }: BrandMarkProps) {
  if (full) {
    return (
      <Link
        href="/"
        aria-label="Jesus Festival Movement home"
        className={`brand-full-logo group relative inline-flex ${className}`}
      >
        <span className="brand-full-logo-aura" aria-hidden="true" />
        <Image
          src="/jesus-festival-movement-logo.png"
          alt=""
          width={2000}
          height={2000}
          priority={priority}
          sizes="(max-width: 640px) 160px, 220px"
          className="relative h-auto w-full object-contain drop-shadow-[0_16px_34px_rgba(244,196,92,.14)] transition duration-500 group-hover:scale-[1.035]"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="Jesus Festival Movement home"
      className={`brand-mark-link group inline-flex items-center gap-3 ${className}`}
    >
      <span className="brand-mark-emblem relative flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16">
        <span className="brand-mark-aura" aria-hidden="true" />
        <Image
          src="/jesus-festival-movement-mark.png"
          alt=""
          width={1050}
          height={1050}
          priority={priority}
          sizes="64px"
          className="brand-mark-image relative h-full w-full object-contain drop-shadow-[0_8px_18px_rgba(244,196,92,.2)]"
        />
      </span>
      <span className="font-display text-[0.94rem] font-bold leading-[1.02] tracking-[-0.02em] text-white sm:text-base">
          Jesus Festival
          <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-gold-400 sm:text-[0.68rem]">
            Movement
          </span>
      </span>
    </Link>
  );
}
