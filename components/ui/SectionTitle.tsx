import type { SectionAccent } from "@/lib/section-accents";

const STYLES: Record<
  SectionAccent,
  { num: string; lineFrom: string; lineVia?: string }
> = {
  emerald: {
    num: "text-emerald-500",
    lineFrom: "from-emerald-500/50",
    lineVia: "via-cyan-500/20",
  },
  cyan: {
    num: "text-cyan-600",
    lineFrom: "from-cyan-500/50",
    lineVia: "via-blue-500/15",
  },
  violet: {
    num: "text-violet-500",
    lineFrom: "from-violet-500/50",
    lineVia: "via-fuchsia-500/20",
  },
  amber: {
    num: "text-amber-500",
    lineFrom: "from-amber-500/55",
    lineVia: "via-orange-500/20",
  },
  rose: {
    num: "text-rose-500",
    lineFrom: "from-rose-500/50",
    lineVia: "via-pink-500/15",
  },
  sky: {
    num: "text-sky-500",
    lineFrom: "from-sky-500/50",
    lineVia: "via-indigo-500/20",
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
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-gray-900 md:text-[clamp(1.35rem,2.8vw,1.85rem)]">
        {title}
      </h2>
      <div
        className={`h-px min-w-[2rem] flex-1 bg-gradient-to-r ${s.lineFrom} ${s.lineVia ?? ""} to-transparent`}
      />
    </div>
  );
}
