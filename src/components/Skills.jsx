import React, { useState } from "react";
import { skillCategories } from "../assets/Data";
import SkillCard from "./SkillCard";
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Sparkles, 
  Zap, 
  Layers, 
  Workflow, 
  ArrowUpRight 
} from "lucide-react";
import { SiReact, SiDotnet, SiGraphql } from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryIcons = {
    "Frontend & Data Grids": <Code2 className="w-4 h-4 text-sky-400" />,
    "Backend & Systems": <Server className="w-4 h-4 text-purple-400" />,
    "API & Enterprise Data": <Database className="w-4 h-4 text-accent" />,
    "Testing & DevOps": <Wrench className="w-4 h-4 text-emerald-400" />,
  };

  // 3 Primary Production Pillars
  const coreSpecialties = [
    {
      title: "Enterprise Frontend & AG Grid",
      badge: "Production Focus",
      icon: <SiReact className="w-6 h-6 text-sky-400" />,
      tagline: "High-Volume Data Virtualization in React",
      description: "Engineered complex operational data grids for HP Technologies with custom row virtualization, pivoting, debounce search, and column-level formulas handling 10,000+ live records seamlessly.",
      tech: ["React.js", "AG Grid Enterprise", "Redux Toolkit", "Tailwind CSS"],
      accentBorder: "hover:border-sky-400/40"
    },
    {
      title: "Backend Services & REST APIs",
      badge: "Backend Engineering",
      icon: <SiDotnet className="w-6 h-6 text-purple-400" />,
      tagline: "Scalable .NET Core Web APIs",
      description: "Developed and maintained versioned RESTful Web APIs on .NET Core with Clean Architecture, Repository Pattern, custom middleware pipelines, fluent validation, and centralized error handling.",
      tech: ["C#", ".NET Core", "ASP.NET MVC", "Entity Framework", "Clean Architecture"],
      accentBorder: "hover:border-purple-400/40"
    },
    {
      title: "Data Layer & Modern APIs",
      badge: "High Performance",
      icon: <SiGraphql className="w-6 h-6 text-accent" />,
      tagline: "40% Over-Fetch Reduction via GraphQL",
      description: "Designed HotChocolate GraphQL APIs for the ADAPT B2B platform, cutting payload over-fetching by 40% and accelerating critical client endpoint response times by 25%.",
      tech: ["GraphQL (HotChocolate)", "SQL Server", "PostgreSQL", "Swagger"],
      accentBorder: "hover:border-accent/40"
    }
  ];

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeCategory);

  const totalSkillsCount = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <section id="skills" className="py-10 sm:py-12 lg:py-14 relative overflow-hidden bg-dark-950">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -right-36 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="align-element relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_#bef264]" />
              Technical Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-3d-chrome tracking-tight">
              Skills & Technologies
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-md">
            Frontend, backend, database, and testing tools I use daily to build production applications.
          </p>
        </div>

        {/* 1. Core Specialties: 3 Featured Production Pillars */}
        <div className="mb-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400 mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Primary Engineering Pillars</span>
          </div>

          <div className="grid md:grid-cols-3 gap-5 perspective-1000">
            {coreSpecialties.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl card-3d-glass card-3d-interactive ${item.accentBorder} flex flex-col justify-between group cursor-default`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-dark-900/90 border border-white/10 shadow-md group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(190,242,100,0.25)] transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[11px] text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs text-slate-400 mt-1 mb-3">
                    {item.tagline}
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-dark-950/80 border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Interactive Full Skills Matrix with Category Filters */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-2 gap-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>Full Technology Matrix ({totalSkillsCount} Tools)</span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeCategory === "All"
                    ? "bg-accent text-neutral-950 font-bold shadow-[0_0_15px_rgba(190,242,100,0.3)]"
                    : "bg-dark-900 hover:bg-dark-850 text-slate-300 border border-white/[0.08]"
                }`}
              >
                All ({totalSkillsCount})
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.category
                      ? "bg-accent text-neutral-950 font-bold shadow-[0_0_15px_rgba(190,242,100,0.3)]"
                      : "bg-dark-900 hover:bg-dark-850 text-slate-300 border border-white/[0.08]"
                  }`}
                >
                  {categoryIcons[cat.category]}
                  <span>{cat.category.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Matrix Grid */}
          <div className="space-y-8">
            {filteredCategories.map((group) => (
              <div
                key={group.category}
                className="p-5 sm:p-7 rounded-3xl card-3d-glass"
              >
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-dark-900 border border-white/10">
                      {categoryIcons[group.category]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-100 text-base">
                        {group.category}
                      </h4>
                      <p className="text-xs text-slate-400 font-light mt-0.5 hidden sm:block">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                    {group.skills.length} Skills
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {group.skills.map((skill, sIdx) => (
                    <SkillCard key={sIdx} skill={skill} />
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

export default Skills;