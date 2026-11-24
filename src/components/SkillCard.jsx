import React from "react";
import {
  SiReact,
  SiDotnet,
  SiGraphql,
  SiCsharp,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiPlaywright,
  SiPostgresql,
  SiSwagger,
  SiJest,
  SiGit
} from "react-icons/si";
import { FaDatabase, FaServer, FaCode, FaLayerGroup, FaShieldHalved } from "react-icons/fa6";

const getSkillIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes("react")) return <SiReact className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("ag grid")) return <FaLayerGroup className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("redux")) return <SiRedux className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("javascript")) return <SiJavascript className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("tailwind")) return <SiTailwindcss className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("c#") || n.includes(".net")) return <SiDotnet className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("graphql")) return <SiGraphql className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("sql") || n.includes("database") || n.includes("postgres")) return <FaDatabase className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("playwright")) return <SiPlaywright className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("git")) return <SiGit className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("swagger")) return <SiSwagger className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("jest") || n.includes("unit") || n.includes("test")) return <FaShieldHalved className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />;
  if (n.includes("rest") || n.includes("api")) return <FaServer className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />;
  return <FaCode className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />;
};

const SkillCard = ({ skill }) => {
  return (
    <div className="group p-4 sm:p-4.5 rounded-2xl card-3d-glass card-3d-interactive-subtle hover:border-accent/40 flex flex-col justify-between cursor-default">
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-dark-900/90 border border-white/10 group-hover:border-accent/30 group-hover:scale-110 transition-all duration-300 shadow-sm">
              {getSkillIcon(skill.name)}
            </div>
            <h4 className="font-bold text-slate-100 text-sm group-hover:text-accent transition-colors">
              {skill.name}
            </h4>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-dark-950/80 border border-white/10 text-slate-400 group-hover:text-slate-300">
            {skill.level}
          </span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed font-light mt-1 pl-0.5">
          {skill.desc}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;