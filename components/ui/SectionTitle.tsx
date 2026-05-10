export function SectionTitle({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-9 flex items-center gap-4">
      <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-accent-violet/75">
        {num}
      </span>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-white md:text-[clamp(1.35rem,2.8vw,1.85rem)]">
        {title}
      </h2>
      <div className="h-px min-w-[2rem] flex-1 bg-white/10" />
    </div>
  );
}
