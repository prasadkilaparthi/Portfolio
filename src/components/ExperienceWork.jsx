import React from "react";
import { enterpriseProjects, professionalExperience } from "../assets/Data";
import { Building2, Calendar, CheckCircle2, Layers, Briefcase } from "lucide-react";

const ExperienceWork = () => {
  return (
    <section id="work" className="py-20 border-t border-white/[0.08] bg-dark-950">
      <div className="align-element">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Career Track & Client Engagements
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Enterprise Experience & Platforms
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-mono">
            High-volume transactional systems and scalable B2B applications delivered in production.
          </p>
        </div>

        {/* Primary Employment Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-dark-900 border border-white/[0.08] mb-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.06]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-indigo-400" />
                <h3 className="text-xl font-bold text-white">
                  Capgemini Technology Services
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-indigo-400 font-mono font-medium">
                Full Stack Developer — React.js & .NET / C#
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neutral-300 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              <span>Apr 2023 – Present</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-4">
            Delivering end-to-end B2B enterprise features across React.js frontends and ASP.NET Core MVC backends. Architecting versioned RESTful and GraphQL APIs with custom middleware, optimizing AG Grid data virtualizations, and enforcing 95%+ test coverage in Azure DevOps CI/CD pipelines.
          </p>

          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
            {["React.js", "C#", ".NET Core", "ASP.NET Core MVC", "AG Grid Enterprise", "GraphQL", "SQL Server", "Azure DevOps"].map((t) => (
              <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-850 text-neutral-300 border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Production Client Platforms Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Client Engagements & Platforms</span>
          </h3>

          <div className="grid lg:grid-cols-3 gap-6">
            {enterpriseProjects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.06] text-xs font-mono">
                    <span className="text-indigo-400 font-semibold flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {project.client}
                    </span>
                    <span className="text-neutral-400">{project.period}</span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">
                    {project.title}
                  </h4>

                  <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-5 text-xs text-neutral-300 font-light">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-850 text-neutral-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceWork;
