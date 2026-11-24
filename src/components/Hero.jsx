import React, { useState } from "react";
import { personalInfo } from "../assets/Data";
import { 
  ArrowUpRight, 
  FileText, 
  Download, 
  Mail, 
  Phone, 
  Building2, 
  Check, 
  Copy, 
  Sparkles 
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="overview" className="pt-28 pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="align-element relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Identity & Fast Actions */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Status Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-dark-850 text-neutral-300 border border-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Full Stack Developer</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-neutral-300 bg-dark-850 border border-white/10">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Capgemini Technology Services</span>
              </span>
            </div>

            {/* High-Impact Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-[1.2]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">{personalInfo.fullName}</span>.
              <span className="block mt-2 text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-neutral-300">
                Engineering Scalable Enterprise Platforms with React.js & .NET Core.
              </span>
            </h1>

            {/* Concise Recruiter Summary (No Wall of Text!) */}
            <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-light">
              Full-Stack Developer with <span className="text-white font-medium underline decoration-indigo-400/50 underline-offset-4">{personalInfo.experienceYears} years of production experience</span> at Capgemini. Specializing in high-throughput RESTful and GraphQL APIs, enterprise AG Grid data systems, and performance tuning for tier-1 clients including HP Technologies and ADAPT.
            </p>

            {/* 1-Click Recruiter Action Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href={personalInfo.cv.view}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.cv.download}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
                title="Download Resume"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>

              {/* Direct Copy Badges */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono transition-colors cursor-pointer"
                title="Copy Email"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span className="truncate max-w-[150px] sm:max-w-none">{personalInfo.email}</span>
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" /> : <Copy className="w-3.5 h-3.5 text-neutral-400 ml-1" />}
              </button>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono transition-colors cursor-pointer"
                title="Copy Phone"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.phone}</span>
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" /> : <Copy className="w-3.5 h-3.5 text-neutral-400 ml-1" />}
              </button>
            </div>

            {/* Quick Profile Links */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-4 text-xs font-mono text-neutral-400">
              <span>Profiles:</span>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                <FaLinkedin className="w-3.5 h-3.5 text-sky-400" /> LinkedIn
              </a>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <FaGithub className="w-3.5 h-3.5" /> GitHub
              </a>
              <a href={personalInfo.social.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <SiLeetcode className="w-3.5 h-3.5 text-amber-400" /> LeetCode
              </a>
            </div>
          </div>

          {/* Right Column: Portrait Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl bg-dark-900 border border-white/10 p-4 shadow-xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/4.3] bg-dark-950 mb-3 border border-white/5">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <h3 className="font-bold text-white text-base">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs text-indigo-400 font-mono mt-0.5">
                  Full Stack Developer · Capgemini
                </p>
                <div className="mt-2.5 pt-2.5 border-t border-white/[0.08] text-xs font-mono text-neutral-400 flex items-center justify-between">
                  <span>Core Stack:</span>
                  <span className="text-white">React.js · C# · .NET</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Instant Impact Metrics Grid (From Resume) */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {personalInfo.impactMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-indigo-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-300 font-mono mb-1">
                {metric.value}
              </div>
              <div className="font-bold text-white text-xs sm:text-sm mb-1">
                {metric.label}
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-light">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
