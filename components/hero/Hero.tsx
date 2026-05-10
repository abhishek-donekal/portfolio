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

function SocialChip({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-zinc-900/90 text-zinc-300 shadow-sm transition hover:border-emerald-500/35 hover:text-emerald-300"
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
      className="relative min-h-screen overflow-hidden bg-[#050806] px-5 pb-28 pt-[4.5rem] md:px-10 md:pb-32 md:pt-[5.25rem]"
    >
      <div className="hero-backdrop pointer-events-none absolute inset-0 z-0" aria-hidden />
      <HeroTechBg />

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_85%_65%_at_50%_45%,transparent_10%,rgba(5,8,6,0.65)_58%,#050806_92%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-[#050806]"
        aria-hidden
      />

      <div className="relative z-[10] mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        {/* Left column */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-6 inline-flex max-w-full flex-wrap justify-center gap-x-1 rounded-full border border-emerald-500/35 bg-emerald-950/35 px-4 py-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-emerald-100/85 md:text-[0.72rem]">
            {HERO_ROLE_BADGE}
          </span>

          <h1 className="font-display font-bold tracking-tight text-white">
            <span className="block text-[clamp(1.35rem,4vw,1.85rem)] text-white">
              Hi, I&apos;m
            </span>
            <span className="mt-2 block text-[clamp(2.35rem,7.5vw,4rem)] leading-[1.05]">
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                {first}
              </span>
              {rest ? (
                <>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                    {rest}
                  </span>
                </>
              ) : null}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-[0.95rem] leading-relaxed text-zinc-400 md:text-[1.05rem] lg:mx-0">
            {HERO_INTRO}
          </p>

          <div className="mt-4 min-h-[1.5rem] font-mono text-[0.8rem] font-medium text-emerald-500/75 md:text-[0.85rem]">
            <Typewriter />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_-8px_rgba(34,197,94,0.55)] transition hover:bg-emerald-500"
            >
              View projects
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </MagneticButton>
            <MagneticButton
              href="#hire"
              className="rounded-xl border border-white/22 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/45 hover:bg-emerald-950/25"
            >
              Contact me
            </MagneticButton>
          </div>

          <div className="mt-10 w-full max-w-lg lg:max-w-none">
            <StatCounters stats={[...HERO_STATS]} />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <SocialChip href={CONTACT.github} label="GitHub">
              <Github className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </SocialChip>
            <SocialChip href={CONTACT.linkedin} label="LinkedIn">
              <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </SocialChip>
            <SocialChip href={CONTACT.gmailCompose} label="Email">
              <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </SocialChip>
          </div>

          <p className="mt-8 font-mono text-[0.7rem] text-zinc-600">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600/80 underline decoration-emerald-700/40 underline-offset-4 transition hover:text-emerald-400"
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
