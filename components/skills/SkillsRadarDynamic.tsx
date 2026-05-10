"use client";

import dynamic from "next/dynamic";

/**
 * Recharts measures the DOM — loading only on the client avoids SSR/hydration
 * quirks and blank charts on some deployments.
 */
export const SkillsRadarDynamic = dynamic(
  () =>
    import("@/components/skills/SkillsRadar").then((m) => ({
      default: m.SkillsRadar,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="glass-panel mx-auto flex h-[min(380px,52vw)] w-full max-w-xl items-center justify-center p-4 md:h-[400px]"
        aria-hidden
      >
        <span className="font-mono text-[0.7rem] text-zinc-500">
          Loading chart…
        </span>
      </div>
    ),
  },
);
