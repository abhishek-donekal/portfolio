"use client";

import type { ReactNode } from "react";
import { ArrowRight, Github, Linkedin, Mail, Mouse } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  CONTACT,
  HERO_STATS,
  HERO_INTRO,
  HERO_ROLE_BADGE,
  SITE,
} from "@/lib/constants";
import { HeroTechBg } from "./HeroTechBg";
import { ProfileOrb } from "./ProfileOrb";
import { StatCounters } from "./StatCounters";
import { Typewriter } from "./Typewriter";

const SOCIAL_RING: Record<
  "github" | "linkedin" | "email",
  string
> = {
  github:
    "hover:border-emerald-400/55 hover:text-emerald-300 hover:shadow-emerald-500/15",
  linkedin:
    "hover:border-sky-400/55 hover:text-sky-300 hover:shadow-sky-500/15",
  email:
    "hover:border-amber-400/55 hover:text-amber-300 hover:shadow-amber-500/15",
};

function SocialChip({
  href,
  label,
  children,
  network,
}: {
  href: string;
  label: string;
  children: ReactNode;
  network: keyof typeof SOCIAL_RING;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-zinc-900/90 text-zinc-300 shadow-sm transition hover:shadow-md ${SOCIAL_RING[network]}`}
    >
      {children}
    </a>
  );
}

export function Hero() {
  const first = SITE.name.split(" ")[0] ?? SITE.name;
  const rest = SITE.name.split(" ").slice(1).join(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-midnight px-5 pb-28 pt-[4.5rem] md:px-10 md:pb-32 md:pt-[5.25rem]"
    >
      <div className="hero-backdrop pointer-events-none absolute inset-0 z-0" aria-hidden />
      <HeroTechBg />

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_85%_65%_at_50%_45%,transparent_10%,rgba(5,5,12,0.62)_56%,rgb(5,5,8)_92%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-midnight"
        aria-hidden
      />

      <div className="relative z-[10] mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        {/* Left column */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-6 inline-flex max-w-full flex-wrap justify-center gap-x-1 rounded-full border border-transparent bg-gradient-to-r from-emerald-500/20 via-violet-500/20 to-cyan-500/20 bg-clip-padding px-[1px] py-[1px] font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] md:text-[0.72rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-sm">
            <span className="rounded-full bg-zinc-950/90 px-[calc(1rem-1px)] py-[calc(0.5rem-1px)] text-[0.68rem] text-zinc-200 md:text-[0.72rem]">
              <span className="bg-gradient-to-r from-emerald-300 via-violet-200 to-cyan-300 bg-clip-text text-transparent">
                {HERO_ROLE_BADGE}
              </span>
            </span>
          </span>

          <h1 className="font-display font-bold tracking-tight text-white">
            <span className="block text-[clamp(1.35rem,4vw,1.85rem)] text-white">
              Hi, I&apos;m
            </span>
            <span className="mt-2 block text-[clamp(2.35rem,7.5vw,4rem)] leading-[1.05]">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
                {first}
              </span>
              {rest ? (
                <>
                  <br />
                  <span className="bg-gradient-to-r from-violet-400 via-amber-300 to-pink-400 bg-clip-text text-transparent">
                    {rest}
                  </span>
                </>
              ) : null}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-[0.95rem] leading-relaxed text-zinc-400 md:text-[1.05rem] lg:mx-0">
            {HERO_INTRO}
          </p>

          <div className="mt-4 min-h-[1.5rem] bg-gradient-to-r from-emerald-400/90 via-cyan-400/80 to-violet-400/90 bg-clip-text font-mono text-[0.8rem] font-medium text-transparent md:text-[0.85rem]">
            <Typewriter />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_-6px_rgba(34,211,153,0.45),0_0_28px_-10px_rgba(34,211,238,0.2)] transition hover:from-emerald-500 hover:to-cyan-500"
            >
              View projects
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </MagneticButton>
            <MagneticButton
              href="#hire"
              className="rounded-xl border border-white/22 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400/55 hover:bg-violet-950/35 hover:text-violet-50"
            >
              Contact me
            </MagneticButton>
          </div>

          <div className="mt-10 w-full max-w-lg lg:max-w-none">
            <StatCounters stats={[...HERO_STATS]} />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <SocialChip href={CONTACT.github} label="GitHub" network="github">
              <Github className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </SocialChip>
            <SocialChip href={CONTACT.linkedin} label="LinkedIn" network="linkedin">
              <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </SocialChip>
            <SocialChip href={CONTACT.gmailCompose} label="Email" network="email">
              <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </SocialChip>
          </div>

          <p className="mt-8 font-mono text-[0.7rem] text-zinc-600">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline decoration-violet-500/40 underline-offset-4 transition hover:text-amber-300 hover:decoration-amber-400/50"
            >
              Download résumé (PDF)
            </a>
          </p>
        </div>

        {/* Right column — portrait */}
        <div className="relative flex justify-center lg:justify-end lg:pr-4">
          <ProfileOrb />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-[10] flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-600">
        <Mouse className="h-8 w-8 opacity-70" strokeWidth={1.25} aria-hidden />
        <span className="text-[0.65rem] uppercase tracking-[0.22em]">Scroll</span>
      </div>
    </section>
  );
}
