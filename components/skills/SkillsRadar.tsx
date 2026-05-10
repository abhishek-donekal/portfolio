"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { SKILL_RADAR, TOOLS } from "@/lib/constants";

export function SkillsRadar() {
  return (
    <div className="glass-panel mx-auto h-[min(380px,52vw)] w-full max-w-xl p-4 md:h-[400px] md:p-6">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="52%" outerRadius="78%" data={[...SKILL_RADAR]}>
          <PolarGrid stroke="rgba(255,255,255,0.08)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#a1a1aa", fontSize: 11 }}
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={38}
            domain={[0, 100]}
            tick={{ fill: "#52525b", fontSize: 9 }}
            tickCount={5}
            stroke="rgba(255,255,255,0.06)"
          />
          <Radar
            name="Proficiency"
            dataKey="value"
            stroke="#a78bfa"
            strokeWidth={1.75}
            fill="#8b5cf6"
            fillOpacity={0.32}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

const TOOL_RING = [
  "hover:border-emerald-400/45 hover:bg-emerald-500/10 hover:text-emerald-200",
  "hover:border-cyan-400/45 hover:bg-cyan-500/10 hover:text-cyan-200",
  "hover:border-violet-400/45 hover:bg-violet-500/10 hover:text-violet-200",
  "hover:border-amber-400/45 hover:bg-amber-500/10 hover:text-amber-200",
  "hover:border-rose-400/45 hover:bg-rose-500/10 hover:text-rose-200",
];

export function ToolsStrip() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-2.5">
      {TOOLS.map((t, i) => (
        <span
          key={t}
          className={`rounded-md border border-white/12 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.72rem] font-medium text-zinc-400 transition ${TOOL_RING[i % TOOL_RING.length]}`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
