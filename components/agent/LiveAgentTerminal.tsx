"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Bot, RotateCcw, Send } from "lucide-react";

type Line = { id: string; role: "user" | "agent"; text: string };

const PIPELINE_STEPS: { delay: number; text: string }[] = [
  { delay: 320, text: "> Parsing intent…" },
  { delay: 420, text: "> Loading tools: vector_search, rerank…" },
  { delay: 520, text: "> Embedding query (dim=1536)…" },
  { delay: 580, text: "> Accessing vector index (chunk_size≈512, overlap=64)…" },
  { delay: 480, text: "> Retrieving top-k = 5 → rerank → top-3…" },
  { delay: 640, text: "> Grounding answer on retrieved spans…" },
];

function scenarioForQuery(raw: string): {
  chunks: string[];
  answer: string;
} {
  const q = raw.toLowerCase().trim();

  if (/miami|housing|regression|jupyter|dataset/.test(q)) {
    return {
      chunks: [
        '│ doc #1 score=0.82 │ "Miami housing ML — feature engineering on curated CSV; evaluated RMSE across linear vs tree models."',
        '│ doc #2 score=0.76 │ "Notebooks include EDA charts; stakeholder-friendly narrative for non-technical readers."',
      ],
      answer:
        "From the (simulated) corpus: your Miami housing work compares regression approaches on engineered features, with notebooks and charts aimed at stakeholders. See the GitHub repo linked under Projects for the full analysis.",
    };
  }

  if (/rag|pdf|vector|embed|chunk|retriev|langchain|pinecone|chroma|faiss/.test(q)) {
    return {
      chunks: [
        '│ doc #1 score=0.79 │ "Pipeline: split PDFs → chunk → embed → store; query uses similarity search then LLM synthesis."',
        '│ doc #2 score=0.71 │ "Citations: inline chunk ids reduce hallucination when the model stays grounded."',
      ],
      answer:
        "RAG summary (demo): ingest documents, embed chunks, retrieve top-k, then generate an answer grounded on those spans. This UI is a front-end simulation only — the real PDF RAG project is on GitHub (pdf_chatbot). For production you’d wire an API route + vector DB + model keys.",
    };
  }

  if (/homelab|ollama|n8n|nginx|self.host|server|docker/.test(q)) {
    return {
      chunks: [
        '│ doc #1 score=0.74 │ "Homelab: reverse proxy, local LLMs via Ollama, automation with n8n, backups off-site."',
        '│ doc #2 score=0.68 │ "Agent-style monitoring: summarize incidents, alert when services degrade."',
      ],
      answer:
        "Retrieval-style recap: homelab stack centers on nginx, Ollama, and n8n with optional alerting agents. This reply is generated locally in your browser to mimic a grounded answer — no server-side model runs here.",
    };
  }

  if (/hire|job|remote|miami|resume|cv|contact/.test(q)) {
    return {
      chunks: [
        '│ profile │ "AI / data engineering — agents, cloud ML, self-hosted infra."',
        '│ contact │ "Email + LinkedIn in header/footer; resume at /resume.pdf."',
      ],
      answer:
        "Grounded on this site’s content: use Hire me / footer links for email and LinkedIn; CV at `/resume.pdf`. The terminal demo still doesn’t call a live LLM — it’s illustrative.",
    };
  }

  const short =
    raw.length > 120 ? `${raw.slice(0, 117)}…` : raw;
  return {
    chunks: [
      `│ synthetic #1 │ "No keyword match — using generic placeholder passages for query: “${short}”"`,
      '│ synthetic #2 │ "In production, these lines would be real chunk text from your vector store."',
    ],
    answer: `Demo answer for “${short}”: no specific topic matched, so this is a generic grounded-style response. Try keywords like **RAG**, **PDF**, **Miami housing**, or **homelab** to see richer (still simulated) retrieval lines.`,
  };
}

export function LiveAgentTerminal() {
  const titleId = useId();
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const lineSeq = useRef(0);
  const nextLineId = () => {
    lineSeq.current += 1;
    return `agent-line-${lineSeq.current}`;
  };

  const [lines, setLines] = useState<Line[]>(() => [
    {
      id: "agent-line-0",
      role: "agent",
      text: "> Sandbox ready. This is a **browser-only** mock — no API keys, no vector DB. Type a question and press Run to simulate a RAG trace + grounded reply.",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  const clearTimers = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [lines, busy]);

  const pushLine = useCallback((role: Line["role"], text: string) => {
    setLines((prev) => [...prev, { id: nextLineId(), role, text }]);
  }, []);

  const runDemo = useCallback(
    (userText: string) => {
      clearTimers();
      setBusy(true);

      const { chunks, answer } = scenarioForQuery(userText);

      setLines((prev) => {
        const base = prev.filter(
          (l) =>
            !(
              l.role === "agent" &&
              (l.text.includes("Sandbox ready") ||
                l.text.includes("Session cleared") ||
                l.text.includes("Agent idle"))
            ),
        );
        return [...base, { id: nextLineId(), role: "user", text: userText }];
      });

      let t = 0;
      PIPELINE_STEPS.forEach((step) => {
        t += step.delay;
        const id = setTimeout(() => pushLine("agent", step.text), t);
        timeouts.current.push(id);
      });

      const pipelineEnd =
        PIPELINE_STEPS.reduce((acc, s) => acc + s.delay, 0) + 180;

      const idCtxHeader = setTimeout(() => {
        pushLine("agent", "> Retrieved contexts (simulated):");
      }, pipelineEnd);
      timeouts.current.push(idCtxHeader);

      const chunkT = pipelineEnd + 320;
      chunks.forEach((chunk, j) => {
        const idCh = setTimeout(() => pushLine("agent", chunk), chunkT + j * 260);
        timeouts.current.push(idCh);
      });

      const answerStart =
        chunkT + Math.max(0, chunks.length - 1) * 260 + 420;

      const idAnsLabel = setTimeout(() => {
        pushLine("agent", "> Answer:");
      }, answerStart);
      timeouts.current.push(idAnsLabel);

      const idAnsBody = setTimeout(() => {
        pushLine("agent", answer);
        setBusy(false);
      }, answerStart + 140);
      timeouts.current.push(idAnsBody);
    },
    [pushLine],
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q || busy) return;
    runDemo(q);
    setInput("");
  };

  const onReset = () => {
    clearTimers();
    setBusy(false);
    lineSeq.current = 0;
    setLines([
      {
        id: nextLineId(),
        role: "agent",
        text: "> Session cleared. This remains a **client-side** demo — no live RAG backend.",
      },
    ]);
  };

  useEffect(() => () => clearTimers(), []);

  return (
    <section
      id="agent-demo"
      className="scroll-mt-[72px] px-6 pb-24 pt-12 md:px-10"
      aria-labelledby={titleId}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-accent-violet drop-shadow-[0_0_14px_rgba(14,165,233,0.35)]">
              <Bot className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <div>
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent-violetMuted">
                Client-side simulation
              </p>
              <h2
                id={titleId}
                className="font-display text-xl font-bold text-white md:text-2xl"
              >
                RAG-style agent terminal
              </h2>
              <p className="mt-1 max-w-xl text-[0.8rem] leading-relaxed text-zinc-500">
                Mimics retrieve → cite → answer. Not connected to an LLM or database.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onReset}
            disabled={busy}
            className="inline-flex items-center gap-2 rounded-[10px] border border-white/12 px-3 py-2 font-mono text-[0.72rem] font-medium text-zinc-400 transition hover:border-white/20 hover:text-zinc-200 disabled:opacity-40"
          >
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={2} />
            Clear
          </button>
        </div>

        <div className="glass-panel rounded-xl border-white/10">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
            <span className="font-mono text-[0.62rem] uppercase tracking-wider text-zinc-500">
              mock retrieval-agent · no network
            </span>
          </div>

          <div
            ref={scrollRef}
            className="glass-inner max-h-[min(380px,55vh)] space-y-2 overflow-y-auto overflow-x-auto p-5 font-mono text-[0.78rem] leading-relaxed text-zinc-400"
          >
            {lines.map((l) => (
              <div
                key={l.id}
                className={
                  l.role === "user" ? "text-accent-cyan" : "text-zinc-400"
                }
              >
                {l.text.split("**").map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i} className="font-semibold text-zinc-200">
                      {part}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </div>
            ))}
            {busy ? (
              <span className="inline-block h-[1em] w-2 animate-blink bg-accent-violet align-middle" />
            ) : null}
          </div>

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-3 border-t border-white/10 p-4 sm:flex-row sm:items-center"
          >
            <label className="sr-only" htmlFor="agent-input">
              Prompt
            </label>
            <input
              id="agent-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Try: RAG PDF chunks, Miami housing ML, or homelab Ollama…"
              disabled={busy}
              className="min-h-[44px] flex-1 rounded-[10px] border border-white/12 bg-black/40 px-4 py-2 font-mono text-[0.82rem] text-zinc-200 placeholder:text-zinc-600 focus:border-accent-violet/40 focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] bg-accent-violet px-5 py-2 font-mono text-[0.78rem] font-semibold uppercase tracking-wide text-white transition hover:bg-accent-violetMuted disabled:cursor-not-allowed disabled:opacity-45"
            >
              <Send className="h-4 w-4" strokeWidth={2} />
              Run
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
