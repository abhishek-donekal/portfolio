import {
  BarChart2,
  Bot,
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Database,
  Globe,
  Headphones,
  Megaphone,
  Search,
  Server,
  Shield,
  Smartphone,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/constants";

const icons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  bot: Bot,
  megaphone: Megaphone,
  brain: Brain,
  workflow: Workflow,
  globe: Globe,
  zap: Zap,
  smartphone: Smartphone,
  code: Code2,
  cloud: Cloud,
  server: Server,
  database: Database,
  shield: Shield,
  "bar-chart": BarChart2,
  briefcase: Briefcase,
  search: Search,
  headphones: Headphones,
  "trending-up": TrendingUp,
};

const categoryStyle: Record<string, { border: string; iconBg: string; iconText: string; badge: string; badgeText: string; dot: string }> = {
  ai:       { border: "border-violet-200 hover:border-violet-300", iconBg: "bg-violet-50",  iconText: "text-violet-600", badge: "bg-violet-50  border-violet-200", badgeText: "text-violet-600", dot: "bg-violet-500" },
  web:      { border: "border-cyan-200   hover:border-cyan-300",   iconBg: "bg-cyan-50",    iconText: "text-cyan-700",   badge: "bg-cyan-50    border-cyan-200",   badgeText: "text-cyan-700",   dot: "bg-cyan-500"   },
  infra:    { border: "border-emerald-200 hover:border-emerald-300", iconBg: "bg-emerald-50", iconText: "text-emerald-700", badge: "bg-emerald-50 border-emerald-200", badgeText: "text-emerald-700", dot: "bg-emerald-500" },
  business: { border: "border-amber-200  hover:border-amber-300",  iconBg: "bg-amber-50",   iconText: "text-amber-700",  badge: "bg-amber-50   border-amber-200",  badgeText: "text-amber-700",  dot: "bg-amber-500"  },
};

export function Services() {
  return (
    <div className="flex flex-col gap-14">
      {SERVICE_CATEGORIES.map((cat) => {
        const style = categoryStyle[cat.key];
        return (
          <div key={cat.key}>
            {/* Category header */}
            <div className="mb-6 flex items-center gap-3">
              <span className={`h-2 w-2 rounded-full ${style.dot}`} />
              <span className={`rounded-full border px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-widest ${style.badge} ${style.badgeText}`}>
                {cat.label}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cat.items.map((s) => {
                const Icon = icons[s.icon] ?? Bot;
                return (
                  <article
                    key={s.name}
                    className={`glass-panel rounded-xl border p-5 transition-all duration-200 hover:shadow-md ${style.border}`}
                  >
                    <div className="glass-inner flex flex-col gap-3">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${style.border} ${style.iconBg} ${style.iconText}`}>
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <div>
                        <h3 className="font-display text-[0.9rem] font-semibold leading-snug text-gray-900">
                          {s.name}
                        </h3>
                        <p className="mt-1.5 text-[0.8rem] leading-relaxed text-gray-500">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
