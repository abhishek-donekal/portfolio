"use client";

import {
  Bot,
  Briefcase,
  Building2,
  Calendar,
  Code2,
  Cpu,
  FileText,
  Globe,
  Github,
  Heart,
  Home,
  Monitor,
  Smartphone,
  Zap,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
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
  smartphone: Smartphone,
  calendar: Calendar,
  building: Building2,
  code: Code2,
} as const;

const tagClass: Record<
  ProjectItem["tags"][number]["variant"],
  string
> = {
  default: "border-gray-200 bg-gray-100 text-gray-600",
  accent: "border-cyan-300/50 bg-cyan-50 text-cyan-700",
  violet: "border-violet-300/50 bg-violet-50 text-violet-700",
};

const linkClass = {
  github: "border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900",
  live: "border-accent-cyan/30 bg-cyan-50 text-cyan-700 hover:bg-cyan-100",
} as const;

function completionStyle(pct: number): { bar: string; text: string } {
  if (pct >= 90) return { bar: "from-emerald-500 to-teal-400",   text: "text-emerald-600" };
  if (pct >= 80) return { bar: "from-cyan-500 to-sky-400",       text: "text-cyan-600"    };
  if (pct >= 70) return { bar: "from-violet-500 to-purple-400",  text: "text-violet-600"  };
  if (pct >= 60) return { bar: "from-amber-500 to-orange-400",   text: "text-amber-600"   };
  return           { bar: "from-gray-400 to-gray-300",           text: "text-gray-500"    };
}

export function ProjectCard({ project }: { project: ProjectItem }) {
  const Icon =
    icons[project.icon as keyof typeof icons] ?? Zap;

  return (
    <article className="glass-panel scan-hover group rounded-xl border-gray-200 transition-shadow duration-300 hover:shadow-glow">
      <div className="glass-inner flex h-full flex-col p-6 md:p-7">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-gray-200 bg-gray-50 text-accent-violet transition group-hover:scale-[1.03]">
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </div>
          {project.live ? (
            <span className="rounded-full border border-emerald-400/40 bg-emerald-50 px-2.5 py-0.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-emerald-700">
              Live
            </span>
          ) : null}
        </div>

        <h3 className="font-display text-lg font-semibold tracking-tight text-gray-900 transition group-hover:text-gray-700 md:text-xl">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-gray-600">
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

        {/* Completion bar */}
        {project.completion !== undefined && (() => {
          const { bar, text } = completionStyle(project.completion);
          return (
            <div className="mt-5 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-gray-400">
                  {project.status ?? "Completion"}
                </span>
                <span className={`font-mono text-[0.7rem] font-semibold tabular-nums ${text}`}>
                  {project.completion}%
                </span>
              </div>
              <div className="h-[3px] w-full overflow-hidden rounded-full bg-gray-200">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${bar}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.completion}%` }}
                  transition={{ duration: 1.1, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                />
              </div>
            </div>
          );
        })()}

        <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-200 pt-5">
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
