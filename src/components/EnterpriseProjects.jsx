import React from "react";
import { enterpriseProjects } from "../assets/Data";
import { Building2, Calendar, CheckCircle2, Layers } from "lucide-react";

const EnterpriseProjects = () => {
  return (
    <section id="enterprise" className="py-20 border-t border-white/[0.08] bg-dark-900/60">
      <div className="align-element">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="text-xs font-mono text-brand-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Production Platforms
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Enterprise Client Engagements
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-mono">
            High-volume distributed solutions engineered for tier-1 enterprise clients.
          </p>
        </div>

        {/* Enterprise Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {enterpriseProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-dark-850 border border-white/[0.08] hover:border-brand-500/40 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Client & Period Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-brand-400 font-semibold">
                    <Building2 className="w-3.5 h-3.5" />
                    {project.client}
                  </span>
                  <span className="text-neutral-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6 text-xs text-neutral-300 font-light">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Pills */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-800 text-neutral-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseProjects;
