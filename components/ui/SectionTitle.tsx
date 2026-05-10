import type { SectionAccent } from "@/lib/section-accents";

const STYLES: Record<
  SectionAccent,
  { num: string; lineFrom: string; lineVia?: string }
> = {
  emerald: {
    num: "text-emerald-400",
    lineFrom: "from-emerald-500/70",
    lineVia: "via-cyan-500/25",
  },
  cyan: {
    num: "text-cyan-400",
    lineFrom: "from-cyan-500/65",
    lineVia: "via-blue-500/20",
  },
  violet: {
    num: "text-violet-400",
    lineFrom: "from-violet-500/65",
    lineVia: "via-fuchsia-500/25",
  },
  amber: {
    num: "text-amber-400",
    lineFrom: "from-amber-500/70",
    lineVia: "via-orange-500/25",
  },
  rose: {
    num: "text-rose-400",
    lineFrom: "from-rose-500/65",
    lineVia: "via-pink-500/20",
  },
  sky: {
    num: "text-sky-400",
    lineFrom: "from-sky-500/65",
    lineVia: "via-indigo-500/25",
  },
};

export function SectionTitle({
  num,
  title,
  accent = "emerald",
}: {
  num: string;
  title: string;
  accent?: SectionAccent;
}) {
  const s = STYLES[accent];
  return (
    <div className="mb-9 flex items-center gap-4">
      <span
        className={`font-mono text-[0.72rem] font-semibold uppercase tracking-[0.15em] ${s.num}`}
      >
        {num}
      </span>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-white md:text-[clamp(1.35rem,2.8vw,1.85rem)]">
        {title}
      </h2>
      <div
        className={`h-px min-w-[2rem] flex-1 bg-gradient-to-r ${s.lineFrom} ${s.lineVia ?? ""} to-white/[0.06]`}
      />
    </div>
  );
}
