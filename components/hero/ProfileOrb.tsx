"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

const initials = SITE.name
  .split(/\s+/)
  .filter(Boolean)
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

/**
 * Plain <img> from `/public` avoids Next/Image edge cases when assets are optional.
 * Cyborg avatar art is composed center-weighted — neutral crop.
 */
export function ProfileOrb() {
  const [showPhoto, setShowPhoto] = useState(true);

  return (
    <div className="relative mx-auto w-full max-w-[min(100%,380px)]">
      <span
        className="pointer-events-none absolute -left-2 top-[18%] font-mono text-[2rem] text-emerald-500/[0.12] md:text-[2.25rem]"
        aria-hidden
      >
        {"{}"}
      </span>
      <span
        className="pointer-events-none absolute -right-1 top-[12%] font-mono text-[1.35rem] text-emerald-500/[0.15]"
        aria-hidden
      >
        &lt;/&gt;
      </span>
      <span
        className="pointer-events-none absolute bottom-[28%] left-[-4%] font-mono text-[1.25rem] text-emerald-500/[0.11]"
        aria-hidden
      >
        λ
      </span>
      <span
        className="pointer-events-none absolute bottom-[20%] right-[-2%] font-mono text-[1.5rem] text-emerald-500/[0.12]"
        aria-hidden
      >
        ∑
      </span>

      <div className="relative mx-auto aspect-square w-[88%] md:w-full">
        <div
          className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-emerald-400/55 via-green-600/35 to-emerald-950/80 blur-[1px]"
          aria-hidden
        />
        <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-emerald-400/65 bg-zinc-950 shadow-[0_0_56px_-14px_rgba(52,211,153,0.45)]">
          {showPhoto ? (
            // Optional local asset; <img> avoids Next/Image 404 edge cases in dev
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/profile.png"
              alt={`${SITE.name} — AI engineer avatar`}
              className="h-full w-full object-cover object-center"
              onError={() => setShowPhoto(false)}
            />
          ) : (
            <div className="flex h-full min-h-[260px] w-full items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-black md:min-h-[300px]">
              <span className="font-display text-[clamp(3.25rem,11vw,4.75rem)] font-bold tracking-tight text-emerald-400/95">
                {initials}
              </span>
            </div>
          )}
        </div>

        <div className="absolute -bottom-1 right-[10%] flex items-center gap-2 rounded-full border border-emerald-500/25 bg-black/85 px-3 py-1.5 shadow-lg backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-emerald-100/95">
            Open to work
          </span>
        </div>
      </div>
    </div>
  );
}
