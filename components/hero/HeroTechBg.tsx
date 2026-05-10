/**
 * Subtle floating symbols + formula fragments (reference portfolio style).
 */
export function HeroTechBg() {
  const glyphs = [
    { t: "θ", x: "8%", y: "22%", s: "text-[2.5rem]" },
    { t: "σ", x: "92%", y: "28%", s: "text-[2rem]" },
    { t: "∫", x: "14%", y: "62%", s: "text-[3rem]" },
    { t: "∇", x: "78%", y: "58%", s: "text-[2.25rem]" },
    { t: "π", x: "52%", y: "88%", s: "text-[1.75rem]" },
    { t: "+", x: "64%", y: "14%", s: "text-xl" },
    { t: "Σ", x: "38%", y: "38%", s: "text-[1.5rem]" },
  ];

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {glyphs.map((g) => (
        <span
          key={g.t + g.x}
          className={`absolute font-serif ${g.s} text-emerald-500/[0.07]`}
          style={{ left: g.x, top: g.y }}
        >
          {g.t}
        </span>
      ))}
      <p className="absolute left-[6%] top-[72%] max-w-[200px] rotate-[-8deg] font-mono text-[0.62rem] leading-snug text-emerald-500/[0.06]">
        f′(x) = lim (Δx→0) Δy/Δx
      </p>
      <p className="absolute right-[8%] top-[42%] max-w-[200px] rotate-[6deg] font-mono text-[0.58rem] leading-snug text-emerald-500/[0.055]">
        loss = −Σ y log ŷ
      </p>
    </div>
  );
}
