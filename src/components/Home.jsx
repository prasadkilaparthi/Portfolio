import React from "react";
import { personalInfo } from "../assets/Data";
import { 
  ArrowUpRight, 
  Terminal, 
  Code2, 
  Cpu, 
  Database, 
  FileText, 
  Download, 
  CheckCircle2, 
  Sparkles,
  Layers
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] lg:min-h-[84vh] flex items-center pt-20 pb-8 lg:pt-24 lg:pb-12 overflow-hidden"
    >
      {/* Dynamic Background: Responsive Portrait Layer tailored for BOTH Mobile & Desktop */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Studio Portrait: Centered at [68%_10%] on mobile; shifted comfortably to right on desktop */}
        <img
          src={personalInfo.profilePhoto}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[68%_10%] sm:object-[70%_15%] lg:object-[82%_22%] opacity-40 sm:opacity-55 lg:opacity-75 filter contrast-110 brightness-100"
        />

        {/* Adaptive Gradient Masks:
            - Mobile: Vertical dark gradient from top to bottom ensuring text is 100% readable while portrait glows through.
            - Desktop: Horizontal directional gradient (dark on left text, crystal clear on right portrait).
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/50 via-[#08090d]/85 to-[#08090d] lg:hidden" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/75 to-transparent" />

        {/* Top & Bottom Bleeds */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08090d] via-[#08090d]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#08090d] via-[#08090d]/80 to-transparent" />

        {/* Subtle Ambient Accent Glows */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[140px]" />
      </div>

      <div className="align-element relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col justify-center">
          
          {/* Mobile-Only Dedicated High-Res Portrait Card (Visible on mobile & tablet, hidden on desktop) */}
          <div className="flex items-center gap-4 mb-6 lg:hidden animate-float-3d">
            <div className="relative shrink-0">
              {/* Outer Glowing 3D Halo */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-accent via-emerald-400 to-sky-400 rounded-2xl blur-sm opacity-70 animate-pulse-halo" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-dark-900">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-[67%_18%]"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-accent border-2 border-dark-950" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full card-3d-glass text-xs font-mono text-slate-300 shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span>{personalInfo.status}</span>
              </div>
              <div className="font-mono text-xs text-3d-lime font-bold mt-1.5 flex items-center gap-1.5">
                <span>Capgemini</span>
                <span>•</span>
                <span>{personalInfo.experienceYears} Yrs Exp</span>
              </div>
            </div>
          </div>

          {/* Desktop-Only Status Pill */}
          <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-3d-glass w-fit mb-5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-xs text-slate-300 font-medium">
              {personalInfo.status}
            </span>
          </div>

          {/* Main Greeting & 3D Dimensional Headline (Zero flat white font) */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight leading-[1.16]">
            <span className="text-3d-chrome">Hi, I'm </span>
            <span className="text-3d-lime">Durga Prasad Kilaparthi</span>.
            <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
              <span className="text-3d-chrome">
                Architecting Resilient{" "}
              </span>
              <span className="text-3d-emerald">
                Full-Stack Systems.
              </span>
            </span>
          </h1>

          {/* Editorial Subtitle with 3D Translucent Color Accents (Zero flat white) */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-300/95 leading-relaxed max-w-2xl font-light drop-shadow-sm">
            Full-Stack Developer with{" "}
            <span className="text-3d-lime font-bold underline decoration-accent/60 underline-offset-4">
              {personalInfo.experienceYears} years of experience
            </span>{" "}
            at <span className="text-3d-cyan font-bold">Capgemini</span> specializing in building high-performance frontend interfaces with{" "}
            <span className="text-3d-cyan font-bold">React.js</span>, scalable backend services with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-indigo-400 font-bold drop-shadow-sm">.NET Core</span>, and robust <span className="text-3d-emerald font-bold">SQL Server</span> database architectures.
          </p>

          {/* Primary & Secondary Action CTAs with 3D Tactile Styling */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-b from-[#d9f99d] to-[#a3e635] text-neutral-950 font-bold text-sm shadow-[0_8px_25px_rgba(190,242,100,0.5),inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-2px_0_rgba(77,124,15,0.8)] hover:brightness-110 active:translate-y-0.5 transition-all duration-200"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl card-3d-glass hover:bg-white/10 text-slate-200 hover:text-white font-bold text-sm transition-all duration-300 active:translate-y-0.5"
            >
              <span>Let's Connect</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_#bef264]" />
            </a>

            {/* CV Action Buttons */}
            <div className="flex items-center gap-2 ml-0 sm:ml-1">
              <a
                href={personalInfo.cv.view}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl card-3d-glass hover:bg-white/10 text-slate-300 hover:text-accent transition-colors"
                title="View Resume in Browser"
                aria-label="View Resume"
              >
                <FileText className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.cv.download}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl card-3d-glass hover:bg-white/10 text-slate-300 hover:text-accent transition-colors"
                title="Download Resume PDF"
                aria-label="Download Resume"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 3D Extruded Metrics & Highlights Grid (Zero flat white font) */}
          <div className="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-xl perspective-1000">
            <div className="p-3.5 rounded-xl card-3d-glass card-3d-interactive animate-float-3d hover:border-accent/50 cursor-default">
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-3d-lime">
                {personalInfo.experienceYears}
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                Capgemini Experience
              </div>
            </div>

            <div className="p-3.5 rounded-xl card-3d-glass card-3d-interactive animate-float-3d-delay-1 hover:border-sky-400/50 cursor-default">
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-3d-cyan">
                40%
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                Over-Fetch Reduced
              </div>
            </div>

            <div className="p-3.5 rounded-xl card-3d-glass card-3d-interactive animate-float-3d-delay-2 hover:border-slate-300/50 col-span-2 sm:col-span-1 cursor-default">
              <div className="font-mono text-base sm:text-lg font-extrabold text-3d-chrome truncate">
                HP & ADAPT
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                Client Platforms
              </div>
            </div>
          </div>

          {/* Social Proof & 3D Pill Highlights */}
          <div className="mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Profiles:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg card-3d-glass hover:text-sky-400 hover:bg-white/10 text-slate-300 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg card-3d-glass hover:text-emerald-400 hover:bg-white/10 text-slate-300 transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg card-3d-glass hover:text-amber-400 hover:bg-white/10 text-slate-300 transition-all"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Tech Highlights Badge */}
            <div className="flex items-center gap-2.5 font-mono text-xs text-slate-300">
              <span className="flex items-center gap-1 text-3d-cyan font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>React.js</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>.NET Core</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-3d-emerald font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>SQL Server</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;