import React from "react";
import { experienceTimeline, personalInfo } from "../assets/Data";
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  ArrowUpRight 
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience" className="py-10 sm:py-12 lg:py-14 relative overflow-hidden bg-dark-950">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="align-element relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Career & Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-3d-chrome tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-md">
            Professional timeline, enterprise client deliverables at Capgemini, and continuous technical growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Experience Timeline Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2.5 mb-4 text-sm font-mono text-accent uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-6">
              {experienceTimeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node Marker with 3D Pulse */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-dark-950 border-2 border-accent flex items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_12px_#bef264] transition-all duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  </div>

                  {/* Experience Card with 3D Depth */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-dark-850/80 border border-white/[0.08] hover:border-accent/40 card-3d-interactive">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-accent transition-colors">
                        {item.role}
                      </h3>
                      <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-4">
                      <span>{item.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed font-light mb-5">
                      {item.summary}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2.5 font-mono text-xs text-neutral-400 border-t border-white/[0.06] pt-4">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span className="text-neutral-300">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Problem Solving */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5 mb-6 text-sm font-mono text-accent uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Continuous Growth</span>
            </div>

            {/* LeetCode Achievement Card with 3D Depth */}
            <div className="p-6 rounded-2xl bg-dark-850/80 border border-white/[0.08] hover:border-amber-400/40 card-3d-interactive-subtle">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-dark-800 border border-white/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <SiLeetcode className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                  Active Practice
                </span>
              </div>

              <h4 className="font-heading text-lg font-bold text-white mb-2">
                Algorithmic Problem Solving
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                Sharpening algorithmic thinking, data structures, and edge-case optimization through routine LeetCode challenges (so technical rounds don't feel like a personal attack).
              </p>

              <a
                href={personalInfo.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 hover:text-white transition-colors"
              >
                <span>View LeetCode Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Engineering Principles */}
            <div className="p-6 rounded-2xl bg-dark-850/60 border border-white/[0.06] card-3d-interactive-subtle">
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                Core Engineering Mindset
              </h4>
              <ul className="space-y-3 font-mono text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Performance as a core requirement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Modular, testable React components</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Resilient, typed API contracts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Consistent clean architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
