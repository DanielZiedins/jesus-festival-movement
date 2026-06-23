export default function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] ${dark ? "text-ember-600" : "text-gold-400"}`}>
      <span className={`h-px w-8 bg-gradient-to-r from-transparent ${dark ? "to-ember-600" : "to-gold"}`} />
      {children}
    </span>
  );
}
