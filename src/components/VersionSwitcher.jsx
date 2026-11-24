import React from "react";
import { Sparkles, Building2, Terminal } from "lucide-react";

const VersionSwitcher = ({ currentVersion, onSelectVersion }) => {
  const versions = [
    {
      id: "creative",
      name: "Creative Studio",
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" />,
      badge: "Recruiter-First",
    },
    {
      id: "enterprise",
      name: "Enterprise Deep",
      icon: <Building2 className="w-3.5 h-3.5 text-blue-400" />,
      badge: "Detailed Resume",
    },
    {
      id: "cyber",
      name: "Cyber Dark",
      icon: <Terminal className="w-3.5 h-3.5 text-emerald-400" />,
      badge: "Dev Terminal",
    },
  ];

  return (
    <aside
      aria-label="Portfolio Layout Selector"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-2 py-1.5 rounded-full bg-[#12141c]/95 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center gap-1.5"
    >
      <div className="hidden sm:flex items-center gap-1.5 pl-2.5 pr-1.5 font-mono text-[11px] text-neutral-400 border-r border-white/10">
        <span>Layout:</span>
      </div>

      {versions.map((ver) => {
        const isActive = currentVersion === ver.id;
        return (
          <button
            key={ver.id}
            onClick={() => onSelectVersion(ver.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-white text-neutral-950 font-bold shadow-md scale-105"
                : "text-neutral-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            {ver.icon}
            <span>{ver.name}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default VersionSwitcher;
