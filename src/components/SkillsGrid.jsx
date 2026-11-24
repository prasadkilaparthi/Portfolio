import React from "react";
import { technicalSkills } from "../assets/Data";
import { Code2, Server, Network, Database, ShieldCheck } from "lucide-react";

const SkillsGrid = () => {
  const categoryIcons = [
    <Code2 className="w-4 h-4 text-sky-400" />,
    <Server className="w-4 h-4 text-purple-400" />,
    <Network className="w-4 h-4 text-indigo-400" />,
    <Database className="w-4 h-4 text-emerald-400" />,
    <ShieldCheck className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <section id="skills" className="py-20 border-t border-white/[0.08] bg-dark-900/40">
      <div className="align-element">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Skills & Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-mono">
            Core technologies, design patterns, and engineering toolchains verified in production.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((category, idx) => (
            <div
              key={category.category}
              className={`p-6 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-indigo-500/40 transition-colors shadow-sm ${
                idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-white/[0.06]">
                <div className="p-2 rounded-lg bg-dark-850 border border-white/10">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <h3 className="font-bold text-white text-base">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-dark-850 text-neutral-200 border border-white/[0.06] text-xs font-mono hover:text-white hover:border-indigo-400/40 transition-colors"
                  >
                    {skill}
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

export default SkillsGrid;
