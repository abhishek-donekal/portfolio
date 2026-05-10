"use client";

import {
  Bot,
  Briefcase,
  Cpu,
  FileText,
  Globe,
  Github,
  Heart,
  Home,
  Monitor,
  Zap,
  ExternalLink,
} from "lucide-react";
import type { ProjectItem } from "@/lib/constants";

const icons = {
  zap: Zap,
  globe: Globe,
  heart: Heart,
  cpu: Cpu,
  bot: Bot,
  "file-text": FileText,
  home: Home,
  briefcase: Briefcase,
  monitor: Monitor,
} as const;

const tagClass: Record<
  ProjectItem["tags"][number]["variant"],
  string
> = {
  default: "border-white/15 bg-black/35 text-zinc-400",
  accent: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
  violet: "border-accent-violet/30 bg-accent-violet/10 text-accent-violetMuted",
};

const linkClass = {
  github: "border-white/15 text-zinc-300 hover:border-white/25 hover:text-white",
  live: "border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/15",
} as const;

export function ProjectCard({ project }: { project: ProjectItem }) {
  const Icon =
    icons[project.icon as keyof typeof icons] ?? Zap;

  return (
    <article className="glass-panel scan-hover group rounded-xl border-white/10 transition-shadow duration-300 hover:shadow-glow">
      <div className="glass-inner flex h-full flex-col p-6 md:p-7">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.04] text-accent-violet drop-shadow-[0_0_14px_rgba(14,165,233,0.35)] transition group-hover:scale-[1.03]">
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </div>
          {project.live ? (
            <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-emerald-300/95">
              Live
            </span>
          ) : null}
        </div>

        <h3 className="font-display text-lg font-semibold tracking-tight text-white transition group-hover:text-zinc-50 md:text-xl">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-zinc-400">
          {project.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded border px-2 py-0.5 font-mono text-[0.66rem] font-medium ${tagClass[tag.variant]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-[10px] border px-3 py-2 font-mono text-[0.72rem] font-semibold uppercase tracking-wide transition ${linkClass[link.variant]}`}
            >
              {link.variant === "github" ? (
                <Github className="h-3.5 w-3.5" strokeWidth={2} />
              ) : (
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
