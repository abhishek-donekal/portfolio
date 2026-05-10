import Image from "next/image";
import { Award } from "lucide-react";
import { CERT_ROWS } from "@/lib/constants";

type Cert =
  | (typeof CERT_ROWS.cloud)[number]
  | (typeof CERT_ROWS.row2)[number]
  | (typeof CERT_ROWS.row3)[number]
  | (typeof CERT_ROWS.badges)[number];

function CertCard({ cert }: { cert: Cert }) {
  const compact = "compact" in cert && cert.compact;
  const logoInvert = "logoInvert" in cert && cert.logoInvert;
  const ring =
    cert.variant === "aws"
      ? "border-orange-400/15 shadow-[0_0_40px_-12px_rgba(251,146,60,0.25)]"
      : cert.variant === "gcp"
        ? "border-sky-400/15 shadow-[0_0_40px_-12px_rgba(56,189,248,0.2)]"
        : cert.variant === "azure"
          ? "border-sky-300/15 shadow-[0_0_40px_-12px_rgba(125,211,252,0.18)]"
          : cert.variant === "oracle"
            ? "border-red-400/15 shadow-[0_0_40px_-12px_rgba(248,113,113,0.18)]"
            : cert.variant === "databricks"
              ? "border-amber-400/15 shadow-[0_0_40px_-12px_rgba(251,191,36,0.2)]"
              : cert.variant === "langchain"
                ? "border-emerald-400/15 shadow-[0_0_40px_-12px_rgba(52,211,153,0.18)]"
                : "border-white/10";

  return (
    <article
      className={`glass-panel flex h-full flex-col overflow-hidden rounded-2xl border ${ring} ${
        compact ? "p-5 md:p-6" : "p-6 md:p-8"
      }`}
    >
      <div
        className={`flex gap-5 ${compact ? "flex-col sm:flex-row sm:items-center" : "flex-col sm:flex-row sm:items-start"}`}
      >
        <div
          className={`relative shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] ${
            compact ? "mx-auto h-24 w-24 sm:mx-0" : "h-28 w-28 md:h-32 md:w-32"
          }`}
        >
          <Image
            src={cert.logo}
            alt={cert.alt}
            fill
            className={`object-contain p-2 ${logoInvert ? "invert-[0.92] brightness-110" : ""}`}
            sizes={compact ? "96px" : "128px"}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded border border-white/12 bg-white/[0.04] px-2 py-0.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-zinc-500">
              {cert.badge}
            </span>
          </div>
          <h3
            className={`font-display font-semibold leading-snug text-white ${
              compact ? "text-base md:text-lg" : "text-lg md:text-xl"
            }`}
          >
            {cert.name}
          </h3>
          <p className="mt-1 text-[0.85rem] text-zinc-500">{cert.issuer}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {cert.skills.map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/12 bg-black/35 px-2 py-0.5 font-mono text-[0.66rem] text-zinc-400"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Certifications() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CERT_ROWS.cloud.map((c) => (
          <CertCard key={c.name} cert={c} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CERT_ROWS.row2.map((c) => (
          <CertCard key={c.name} cert={c} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CERT_ROWS.row3.map((c) => (
          <CertCard key={c.name} cert={c} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CERT_ROWS.badges.map((c) => (
          <CertCard key={c.name} cert={c} />
        ))}
      </div>

      <a
        href="https://www.credly.com/users/abhishek-donekal/badges"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto inline-flex items-center gap-2 rounded-[10px] border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[0.78rem] font-semibold text-zinc-300 transition hover:border-accent-violet/35 hover:text-white"
      >
        <Award className="h-4 w-4 text-accent-violet drop-shadow-[0_0_10px_rgba(14,165,233,0.38)]" />
        View all badges on Credly
      </a>
    </div>
  );
}
