import React from "react";
import { projectsList } from "../assets/Data";
import ProjectCard from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects" className="py-10 sm:py-12 lg:py-14 relative overflow-hidden bg-dark-900/40 border-t border-b border-white/[0.06]">
      {/* Background Glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="align-element relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Work & Applications
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-3d-chrome tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-md">
            Full-stack and frontend applications built to solve practical workflows with clean, responsive UX.
          </p>
        </div>

        {/* Project Showcase List */}
        <div className="space-y-6">
          {projectsList.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Repositories Link Out with 3D Depth */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-dark-850/60 border border-white/[0.07] card-3d-interactive-subtle flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-dark-800 border border-white/10 hidden sm:block">
              <FaGithub className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-white">
                Looking for more code repositories?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Explore experiments, algorithms, and full-stack modules on my GitHub profile.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/prasadkilaparthi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-white border border-white/10 font-mono text-xs uppercase tracking-wider hover:border-accent/40 transition-all shrink-0"
          >
            <FaGithub className="w-4 h-4" />
            <span>Visit GitHub Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
