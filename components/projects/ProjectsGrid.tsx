"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 lg:grid-cols-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.07, delayChildren: 0.06 },
        },
      }}
    >
      {PROJECTS.map((p) => (
        <motion.div
          key={p.name}
          variants={{
            hidden: { opacity: 0, y: 22 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <ProjectCard project={p} />
        </motion.div>
      ))}
    </motion.div>
  );
}
