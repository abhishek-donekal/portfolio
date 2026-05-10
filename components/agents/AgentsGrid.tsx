import {
  Brain,
  Cloud,
  Globe,
  Microscope,
  Server,
  Zap,
} from "lucide-react";
import { AGENTS } from "@/lib/constants";

const icons = {
  brain: Brain,
  zap: Zap,
  cloud: Cloud,
  microscope: Microscope,
  globe: Globe,
  server: Server,
} as const;

export function AgentsGrid() {
  return (
    <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
      {AGENTS.map((a) => {
        const Icon = icons[a.icon as keyof typeof icons];
        return (
          <article
            key={a.title}
            className="glass-panel group border-0 bg-surface p-8 transition-colors hover:bg-surface-2"
          >
            <div className="glass-inner">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.04] text-accent-violet drop-shadow-[0_0_12px_rgba(14,165,233,0.35)]">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-display text-[0.95rem] font-semibold text-white">
                {a.title}
              </h3>
              <p className="mb-4 text-[0.83rem] leading-relaxed text-zinc-400">
                {a.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((tag, idx) => {
                  const accent =
                    (a.tagAccent as readonly number[] | undefined)?.includes(
                      idx,
                    ) ?? false;
                  return (
                    <span
                      key={tag}
                      className={`rounded border px-2 py-0.5 font-mono text-[0.68rem] font-medium ${
                        accent
                          ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                          : "border-white/15 bg-black/30 text-zinc-400"
                      }`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
