import React from "react";
import { keyAchievements, educationHistory } from "../assets/Data";
import { Award, GraduationCap, Calendar, CheckCircle2, Trophy } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 border-t border-white/[0.08] bg-dark-900/60">
      <div className="align-element">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="text-xs font-mono text-brand-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Impact & Honors
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Achievements & Education
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-mono">
            Formal client appreciation, engineering honors, and academic foundation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Key Achievements */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Recognitions & Enterprise Milestones</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {keyAchievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-dark-850 border border-white/[0.08] hover:border-amber-400/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-xs font-mono">
                      <span className="text-amber-400 font-semibold">{item.date}</span>
                      <span className="text-neutral-400">{item.organization}</span>
                    </div>

                    <h4 className="font-bold text-white text-sm mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-neutral-300 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-400" />
              <span>Academic Background</span>
            </h3>

            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-850 border border-white/[0.08] shadow-sm"
              >
                <div className="text-xs font-mono text-brand-400 mb-2">
                  {edu.period}
                </div>
                <h4 className="font-bold text-white text-base mb-1">
                  {edu.degree}
                </h4>
                <p className="text-xs text-neutral-300 font-medium mb-3">
                  {edu.institution}
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed font-light pt-3 border-t border-white/[0.06]">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
