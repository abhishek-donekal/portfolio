"use client";

import { useEffect, useRef, useState } from "react";

function StatCell({ target, label }: { target: number; label: string }) {
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

  return (
    <div
      ref={cellRef}
      className="flex flex-1 flex-col border-white/[0.06] bg-white/[0.02] px-6 py-4 text-center first:border-r md:border-x md:px-8"
    >
      <div className="font-display text-2xl font-bold tracking-tight text-white md:text-[1.6rem]">
        {v}
        {v >= target ? "+" : ""}
      </div>
      <div className="mt-1 text-[0.65rem] font-medium uppercase tracking-widest text-zinc-500">
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
    <div className="flex justify-center overflow-hidden rounded-xl border border-white/10">
      {stats.map((s) => (
        <StatCell key={s.label} target={s.target} label={s.label} />
      ))}
    </div>
  );
}
