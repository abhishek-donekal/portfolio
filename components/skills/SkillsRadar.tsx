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
            stroke="#0ea5e9"
            strokeWidth={1.5}
            fill="#0ea5e9"
            fillOpacity={0.28}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ToolsStrip() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-2.5">
      {TOOLS.map((t) => (
        <span
          key={t}
          className="rounded-md border border-white/12 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.72rem] font-medium text-zinc-400 transition hover:border-accent-violet/30 hover:text-zinc-200"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
