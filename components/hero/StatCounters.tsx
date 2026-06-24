"use client";

import { useEffect, useRef, useState } from "react";

const STRIP_COLORS = [
  "border-t-emerald-500/65",
  "border-t-violet-500/65",
  "border-t-amber-500/65",
];

const LABEL_TINT = [
  "text-emerald-600",
  "text-violet-500",
  "text-amber-500",
];

function StatCell({
  target,
  label,
  index,
}: {
  target: number;
  label: string;
  index: number;
}) {
  const [v, setV] = useState(0);
  const done = useRef(false);
  const cellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cellRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting || done.current) return;
        done.current = true;
        let cur = 0;
        const step = Math.ceil(target / 40);
        const id = setInterval(() => {
          cur += step;
          if (cur >= target) {
            setV(target);
            clearInterval(id);
          } else setV(cur);
        }, 40);
      },
      { threshold: 0.45 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const strip = STRIP_COLORS[index % STRIP_COLORS.length] ?? STRIP_COLORS[0];
  const labelClass = LABEL_TINT[index % LABEL_TINT.length] ?? "text-gray-500";

  return (
    <div
      ref={cellRef}
      className={`flex flex-1 flex-col bg-white px-6 py-4 text-center md:px-8 ${strip} border-t-2`}
    >
      <div className="font-display text-2xl font-bold tracking-tight text-gray-900 md:text-[1.6rem]">
        {v}
        {v >= target ? "+" : ""}
      </div>
      <div
        className={`mt-1 text-[0.65rem] font-medium uppercase tracking-widest ${labelClass}`}
      >
        {label}
      </div>
    </div>
  );
}

export function StatCounters({
  stats,
}: {
  stats: { target: number; label: string }[];
}) {
  return (
    <div className="flex justify-center divide-x divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-emerald-500/[0.04] via-violet-500/[0.03] to-amber-500/[0.04] shadow-sm">
      {stats.map((s, i) => (
        <StatCell key={s.label} target={s.target} label={s.label} index={i} />
      ))}
    </div>
  );
}
