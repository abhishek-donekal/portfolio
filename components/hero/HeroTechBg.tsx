/**
 * Subtle floating symbols + formula fragments (multi-hue aurora accents).
 */
export function HeroTechBg() {
  const glyphs = [
    { t: "θ", x: "8%", y: "22%", s: "text-[2.5rem]", c: "text-emerald-500/[0.1]" },
    { t: "σ", x: "92%", y: "28%", s: "text-[2rem]", c: "text-violet-500/[0.11]" },
    { t: "∫", x: "14%", y: "62%", s: "text-[3rem]", c: "text-cyan-500/[0.09]" },
    { t: "∇", x: "78%", y: "58%", s: "text-[2.25rem]", c: "text-amber-500/[0.09]" },
    { t: "π", x: "52%", y: "88%", s: "text-[1.75rem]", c: "text-rose-500/[0.09]" },
    { t: "+", x: "64%", y: "14%", s: "text-xl", c: "text-sky-500/[0.1]" },
    { t: "Σ", x: "38%", y: "38%", s: "text-[1.5rem]", c: "text-fuchsia-500/[0.085]" },
  ];

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {glyphs.map((g) => (
        <span
          key={g.t + g.x}
          className={`absolute font-serif ${g.s} ${g.c}`}
          style={{ left: g.x, top: g.y }}
        >
          {g.t}
        </span>
      ))}
      <p className="absolute left-[6%] top-[72%] max-w-[200px] rotate-[-8deg] font-mono text-[0.62rem] leading-snug text-cyan-500/[0.08]">
        f′(x) = lim (Δx→0) Δy/Δx
      </p>
      <p className="absolute right-[8%] top-[42%] max-w-[200px] rotate-[6deg] font-mono text-[0.58rem] leading-snug text-violet-400/[0.075]">
        loss = −Σ y log ŷ
      </p>
    </div>
  );
}
