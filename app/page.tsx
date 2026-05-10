import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AboutTerminal, AboutText } from "@/components/about/AboutTerminal";
import { AgentsGrid } from "@/components/agents/AgentsGrid";
import { SkillsRadarDynamic } from "@/components/skills/SkillsRadarDynamic";
import { ToolsStrip } from "@/components/skills/SkillsRadar";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Certifications } from "@/components/certifications/Certifications";
import { Services } from "@/components/services/Services";
import { Hire } from "@/components/hire/Hire";
import { LiveAgentTerminal } from "@/components/agent/LiveAgentTerminal";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <SectionShell
          id="about"
          className="scroll-mt-[72px] px-6 py-24 md:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle num="01" title="About" />
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
              <AboutText />
              <AboutTerminal />
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="agent-section"
          className="scroll-mt-[72px] px-6 py-24 md:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle num="02" title="Agent capabilities" />
            <AgentsGrid />
          </div>
        </SectionShell>

        <SectionShell
          id="skills"
          className="scroll-mt-[72px] px-6 py-24 md:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle num="03" title="Skills & tools" />
            <SkillsRadarDynamic />
            <ToolsStrip />
          </div>
        </SectionShell>

        <SectionShell
          id="projects"
          className="scroll-mt-[72px] px-6 py-24 md:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle num="04" title="Projects" />
            <ProjectsGrid />
          </div>
        </SectionShell>

        <SectionShell
          id="certifications"
          className="scroll-mt-[72px] px-6 py-24 md:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle num="05" title="Certifications" />
            <Certifications />
          </div>
        </SectionShell>

        <SectionShell
          id="services"
          className="scroll-mt-[72px] px-6 py-24 md:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle num="06" title="Services" />
            <Services />
          </div>
        </SectionShell>

        <SectionShell
          id="hire"
          className="scroll-mt-[72px] px-6 pb-28 pt-12 md:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle num="07" title="Hire me" />
            <Hire />
          </div>
        </SectionShell>

        <LiveAgentTerminal />
        <Footer />
      </main>
    </>
  );
}
