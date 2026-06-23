export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
      {children}
    </span>
  );
}
