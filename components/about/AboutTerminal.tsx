"use client";

import { useEffect, useState } from "react";
import { ABOUT_CHIPS } from "@/lib/constants";

const TERMINAL_LINES = [
  { type: "prompt" as const, text: "cat profile.json" },
  { type: "out" as const, text: "{" },
  { type: "out" as const, text: '  "name": "Abhishek Donekal",' },
  { type: "out" as const, text: '  "role": "AI Agents Engineer",' },
  { type: "out" as const, text: '  "location": "Miami, FL",' },
  { type: "out" as const, text: '  "company": "Carnival Cruise Line",' },
  { type: "out" as const, text: '  "education": "FIU",' },
  { type: "out" as const, text: '  "open_to_work": true' },
  { type: "out" as const, text: "}" },
  { type: "spacer" as const },
  { type: "prompt" as const, text: "echo $STACK" },
  { type: "out" as const, text: "Python · AWS · Databricks · TensorFlow" },
  { type: "out" as const, text: "Flask · Django · n8n · Ollama · nginx" },
  { type: "spacer" as const },
  { type: "comment" as const, text: "# open to on-site · hybrid · remote" },
];

export function AboutTerminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= TERMINAL_LINES.length) return;
    const delay = visible === 0 ? 120 : 220;
    const t = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="glass-panel rounded-xl border-white/10">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        <span className="ml-auto font-mono text-[0.62rem] uppercase tracking-wider text-zinc-500">
          abhishek@agent-env ~ zsh
        </span>
      </div>
      <div className="glass-inner space-y-1.5 p-5 font-mono text-[0.78rem] leading-relaxed text-zinc-400 md:text-[0.8rem] md:leading-loose">
        {TERMINAL_LINES.slice(0, visible).map((line, i) => {
          if (line.type === "spacer") return <div key={i} className="h-3" />;
          if (line.type === "prompt")
            return (
              <div key={i}>
                <span className="text-accent-violetMuted">➜ </span>
                <span className="text-emerald-400/90">{line.text}</span>
              </div>
            );
          if (line.type === "comment")
            return (
              <div key={i} className="text-zinc-600">
                {line.text}
              </div>
            );
          return (
            <div key={i} className={line.text.startsWith(" ") ? "pl-4" : ""}>
              {line.text}
            </div>
          );
        })}
        {visible >= TERMINAL_LINES.length && (
          <span className="inline-block h-[1em] w-2 animate-blink bg-accent-violet align-middle" />
        )}
      </div>
    </div>
  );
}

export function AboutText() {
  return (
    <div className="flex flex-col gap-4 text-[0.97rem] leading-relaxed text-zinc-400">
      <p>
        I&apos;m a{" "}
        <strong className="font-semibold text-white">
          Python Developer &amp; AI Engineer
        </strong>{" "}
        specialising in designing and deploying intelligent agent systems,
        generative AI solutions, and end-to-end data engineering pipelines.
      </p>
      <p>
        At{" "}
        <strong className="font-semibold text-white">Carnival Cruise Line</strong>{" "}
        and previously at{" "}
        <strong className="font-semibold text-white">
          Qualex Consulting Services
        </strong>
        , I&apos;ve integrated AWS, Databricks, and cutting-edge LLMs to deliver
        enterprise-grade AI products that operate at scale.
      </p>
      <p>
        Beyond enterprise work, I run a{" "}
        <strong className="font-medium text-accent-violetMuted">
          self-hosted home server
        </strong>{" "}
        — deploying AI models, automation workflows, and multiple web apps entirely
        from my own hardware.
      </p>
      <div className="flex flex-wrap gap-2 pt-1">
        {ABOUT_CHIPS.map((c) => (
          <span
            key={c}
            className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1 text-[0.75rem] font-medium text-zinc-400"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
