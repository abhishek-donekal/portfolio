import { MagneticButton } from "@/components/ui/MagneticButton";
import { CONTACT } from "@/lib/constants";

export function Hire() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl border-violet-200 p-8 text-center shadow-[0_0_60px_-24px_rgba(167,139,250,0.2)] md:p-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_58%_at_45%_-15%,rgba(167,139,250,0.08),transparent_52%),radial-gradient(ellipse_55%_50%_at_90%_100%,rgba(34,211,238,0.06),transparent_48%),radial-gradient(ellipse_40%_40%_at_10%_85%,rgba(251,191,36,0.05),transparent_45%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-2xl">
        <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-violet-600">
          Available for opportunities
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Let&apos;s build intelligent systems together
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-gray-600">
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
            className="rounded-[10px] border border-gray-200 bg-gray-50 px-7 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
          >
            LinkedIn
          </MagneticButton>
          <MagneticButton
            href={`tel:${CONTACT.phoneTel}`}
            className="rounded-[10px] border border-gray-200 bg-transparent px-7 py-3 text-sm font-semibold text-gray-500 transition hover:border-gray-400 hover:text-gray-900"
          >
            Call {CONTACT.phoneDisplay}
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
