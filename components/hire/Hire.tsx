import { MagneticButton } from "@/components/ui/MagneticButton";
import { CONTACT } from "@/lib/constants";

export function Hire() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl border-violet-500/25 p-8 text-center shadow-[0_0_60px_-24px_rgba(167,139,250,0.35)] md:p-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_58%_at_45%_-15%,rgba(167,139,250,0.15),transparent_52%),radial-gradient(ellipse_55%_50%_at_90%_100%,rgba(34,211,238,0.1),transparent_48%),radial-gradient(ellipse_40%_40%_at_10%_85%,rgba(251,191,36,0.08),transparent_45%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-2xl">
        <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent-violetMuted">
          Available for opportunities
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
          Let&apos;s build intelligent systems together
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-zinc-400">
          Open to roles in AI engineering, agent orchestration, data platforms,
          and cloud ML — remote, hybrid, or Miami on-site.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton
            href={CONTACT.gmailCompose}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] bg-accent-violet px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-violetMuted"
          >
            Email me
          </MagneticButton>
          <MagneticButton
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] border border-white/15 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
          >
            LinkedIn
          </MagneticButton>
          <MagneticButton
            href={`tel:${CONTACT.phoneTel}`}
            className="rounded-[10px] border border-white/15 bg-transparent px-7 py-3 text-sm font-semibold text-zinc-400 transition hover:border-white/25 hover:text-white"
          >
            Call {CONTACT.phoneDisplay}
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
