import React from "react";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <article className="group rounded-3xl bg-dark-850/80 border border-white/[0.08] hover:border-accent/40 card-3d-interactive overflow-hidden shadow-2xl backdrop-blur-xl">
      <div className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
        {/* Visual / Screenshot Column */}
        <div className={`lg:col-span-7 ${isEven ? "" : "lg:col-start-6"} relative overflow-hidden bg-dark-950 p-4 sm:p-6`}>
          {/* Mock Window Top Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-neutral-500 font-mono text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-neutral-400 truncate max-w-[200px]">
                {project.url.replace("https://", "")}
              </span>
            </div>
            <span className="text-accent text-[10px] uppercase font-bold tracking-wider">
              {project.metrics}
            </span>
          </div>

          {/* Project Screenshot Frame with 3D Depth */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-dark-900 border border-white/5 group-hover:border-accent/30 transition-all duration-500">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        </div>

        {/* Narrative & Details Column */}
        <div className={`lg:col-span-5 ${isEven ? "" : "lg:col-start-1"} p-6 sm:p-8 lg:py-10 flex flex-col justify-between`}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Project
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="font-mono text-xs text-neutral-400 mb-4">
              {project.subtitle}
            </p>

            <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
              {project.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-2 mb-6 font-mono text-xs text-neutral-300">
              {project.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-dark-800 border border-white/[0.08] font-mono text-[11px] text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-neutral-950 font-bold text-xs sm:text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(190,242,100,0.3)] transition-all duration-200"
            >
              <span>Live Website</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-neutral-300 hover:text-white border border-white/10 font-mono text-xs sm:text-sm transition-all duration-200"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
