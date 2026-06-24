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
    <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 md:grid-cols-2 lg:grid-cols-3">
      {AGENTS.map((a) => {
        const Icon = icons[a.icon as keyof typeof icons];
        return (
          <article
            key={a.title}
            className="glass-panel group border-0 bg-surface p-8 transition-colors hover:bg-surface-2"
          >
            <div className="glass-inner">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] border border-gray-200 bg-gray-50 text-accent-violet">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-display text-[0.95rem] font-semibold text-gray-900">
                {a.title}
              </h3>
              <p className="mb-4 text-[0.83rem] leading-relaxed text-gray-600">
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
                          ? "border-cyan-400/30 bg-cyan-50 text-cyan-700"
                          : "border-gray-200 bg-gray-100 text-gray-500"
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
