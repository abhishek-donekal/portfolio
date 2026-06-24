import { Briefcase } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => (
        <article
          key={s.name}
          className="glass-panel rounded-xl border-gray-200 p-5 transition hover:border-violet-300 hover:shadow-glow"
        >
          <div className="glass-inner flex gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-accent-violet">
              <Briefcase className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="font-display text-[0.95rem] font-semibold text-gray-900">
                {s.name}
              </h3>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-gray-500">
                {s.desc}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
