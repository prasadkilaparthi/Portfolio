import React from "react";
import { personalInfo } from "../assets/Data";
import { 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Briefcase, 
  Award, 
  MapPin, 
  Calendar, 
  Code2, 
  ArrowUpRight,
  Server,
  Layers
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode, SiReact, SiDotnet } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-12 lg:py-14 relative overflow-hidden bg-dark-900/50 border-t border-b border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="align-element relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_#bef264]" />
              Background & Story
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-3d-chrome tracking-tight">
              About Me
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-md">
            My engineering journey, hands-on client deliverables at Capgemini, and how I build reliable software.
          </p>
        </div>

        {/* Human-Centered 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Conversational, Authentic Personal Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-[15px] leading-relaxed font-light">
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-snug">
              Hello! I'm <span className="text-3d-lime font-extrabold">Durga Prasad Kilaparthi</span>, a full-stack developer who enjoys building fast, maintainable software and solving complex production bottlenecks.
            </p>

            <p>
              Over the last <span className="text-3d-lime font-bold underline decoration-accent/50 underline-offset-4">{personalInfo.experienceYears} years</span> at <span className="text-3d-cyan font-bold">Capgemini</span>, my focus has been on uniting intuitive frontend user interfaces with rock-solid, high-throughput server backends.
            </p>

            <div className="space-y-3 pt-1">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Enterprise Client Deliverables:
              </div>

              {/* HP Technologies: AG Grid & RESTful Web APIs */}
              <div className="p-4 rounded-2xl card-3d-glass card-3d-interactive-subtle hover:border-sky-400/40 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                    <span className="font-bold text-slate-100 text-sm sm:text-base">
                      HP Technologies
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-sky-300 bg-sky-400/10 px-2 py-0.5 rounded border border-sky-400/20">
                    React • AG Grid • REST APIs
                  </span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-slate-300 leading-relaxed font-light">
                  Engineered enterprise data platforms using <span className="text-sky-300 font-medium">AG Grid Enterprise</span> in React with custom row virtualization, pivoting, and formulas across massive datasets. On the server side, developed scalable <span className="text-accent font-semibold">RESTful Web APIs</span> in .NET Core with clean middleware pipelines, input validation, and centralized error handling.
                </p>
              </div>

              {/* ADAPT Platform: HotChocolate GraphQL & .NET Core */}
              <div className="p-4 rounded-2xl card-3d-glass card-3d-interactive-subtle hover:border-emerald-400/40 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    <span className="font-bold text-slate-100 text-sm sm:text-base">
                      ADAPT Platform
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-300 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                    .NET Core • GraphQL
                  </span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-slate-300 leading-relaxed font-light">
                  Developed <span className="text-emerald-300 font-medium">HotChocolate GraphQL</span> APIs on .NET Core for B2B consumers, eliminating API over-fetching by <span className="text-accent font-mono font-bold">40%</span> and significantly accelerating critical endpoint response times.
                </p>
              </div>
            </div>

            <p className="pt-1">
              When I'm not writing components or profiling APIs, I stay sharp through continuous algorithmic problem solving on <a href={personalInfo.social.leetcode} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline font-mono text-xs font-semibold">LeetCode</a>, exploring distributed systems, and refining full-stack performance patterns.
            </p>

            {/* Philosophy Pull-Quote with 3D Bevel */}
            <div className="mt-5 p-4 sm:p-5 rounded-2xl card-3d-glass card-3d-interactive-subtle border-l-4 border-l-accent text-xs sm:text-sm text-slate-200/90 italic font-normal leading-relaxed">
              "I write code with two fundamental rules: zero-warning production builds, and writing it so clearly that my future self won't curse at 2 AM."
            </div>
          </div>

          {/* Right Column: Personal Career Snapshot Card with 3D Depth */}
          <div className="lg:col-span-5 space-y-4 perspective-1000">
            <div className="p-6 rounded-2xl card-3d-glass card-3d-interactive shadow-2xl">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-accent" />
                  <span className="font-mono text-xs uppercase tracking-wider text-3d-chrome font-bold">
                    Career Snapshot
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                  Full-Time
                </span>
              </div>

              {/* At A Glance Items */}
              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 uppercase tracking-wider">Experience</span>
                  <span className="text-3d-lime font-bold text-right">
                    {personalInfo.experienceYears} Years (Apr 2023 – Present)
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 uppercase tracking-wider">Current Role</span>
                  <span className="text-accent font-bold text-right">
                    Full Stack Developer
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 uppercase tracking-wider">Company</span>
                  <span className="text-slate-200 font-semibold text-right">
                    Capgemini Technology Services
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 uppercase tracking-wider">Client Work</span>
                  <span className="text-sky-300 font-semibold text-right">
                    HP Technologies • ADAPT
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 uppercase tracking-wider">Core Tech</span>
                  <span className="text-slate-200 font-semibold text-right">
                    React.js, .NET Core, AG Grid, REST & GraphQL
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 uppercase tracking-wider">Recognition</span>
                  <span className="text-emerald-300 font-semibold text-right">
                    Best Team Player ('25) • Client Appr ('25)
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-400 uppercase tracking-wider">Location</span>
                  <span className="text-slate-200 font-semibold text-right">
                    India (Open to Relocation / Remote)
                  </span>
                </div>
              </div>

              {/* Direct Resume Link CTA */}
              <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href={personalInfo.cv.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-white transition-colors"
                >
                  <span>View Official Resume PDF</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#contact"
                  className="px-3.5 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/10 text-[11px] font-mono text-slate-300 hover:text-white transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;