import React, { useState } from "react";
import { personalInfo, projectsList, technicalSkills } from "../assets/Data";
import { 
  ArrowUpRight, 
  Terminal, 
  Code2, 
  FileText, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  Copy, 
  Check, 
  Send 
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";

const CyberVersion = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    try {
      await emailjs.send(
        personalInfo.emailjs.serviceId,
        personalInfo.emailjs.templateId,
        {
          to_name: personalInfo.fullName,
          from_name: formData.name,
          message: formData.message,
          reply_to: formData.email,
        },
        personalInfo.emailjs.publicKey
      );
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({ submitting: false, success: false, error: "Failed to send message." });
    }
  };

  return (
    <div className="bg-[#08090d] text-neutral-100 min-h-screen font-sans selection:bg-[#bef264] selection:text-neutral-950 pb-20">
      {/* Cyber Header */}
      <header className="sticky top-0 z-40 bg-[#08090d]/85 backdrop-blur-xl border-b border-white/[0.08] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-neutral-900 border border-[#bef264]/40 flex items-center justify-center font-mono font-bold text-xs text-[#bef264]">
              DP
            </div>
            <span className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
              {personalInfo.fullName}
              <span className="h-1.5 w-1.5 rounded-full bg-[#bef264] animate-pulse" />
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.cv.view}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white"
            >
              Resume PDF
            </a>
            <a
              href="#cyber-contact"
              className="px-3.5 py-1.5 rounded-lg bg-[#bef264] text-neutral-950 font-bold text-xs hover:bg-white transition-colors"
            >
              Connect
            </a>
          </div>
        </div>
      </header>

      {/* Cyber Hero */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-xs font-mono text-[#bef264] mb-4">
              <span className="h-2 w-2 rounded-full bg-[#bef264] animate-ping" />
              <span>{personalInfo.experienceYears} Years Full-Stack Experience</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Hi, I'm <span className="text-[#bef264]">{personalInfo.fullName}</span>.
              <span className="block mt-2 text-2xl sm:text-3xl font-bold text-neutral-300">
                Architecting Modern Full-Stack Systems.
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-xl font-light leading-relaxed">
              Full-Stack Developer at <span className="text-white font-medium">Capgemini</span> specializing in React.js frontend engineering, scalable .NET backends, and enterprise AG Grid platforms.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#cyber-projects"
                className="px-5 py-2.5 rounded-xl bg-[#bef264] text-neutral-950 font-bold text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(190,242,100,0.3)]"
              >
                Explore Projects
              </a>
              <a
                href="#cyber-contact"
                className="px-4 py-2.5 rounded-xl bg-neutral-900 text-neutral-200 border border-white/10 text-xs font-medium hover:bg-neutral-800"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* IDE Terminal Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-neutral-900 border border-white/10 p-5 shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2">durga_prasad.config.ts</span>
                </div>
                <span className="text-[#bef264]">active</span>
              </div>

              <div className="p-3 rounded-xl bg-neutral-950 font-mono text-xs space-y-1 text-neutral-300">
                <p><span className="text-purple-400">const</span> engineer = &#123;</p>
                <p className="pl-4">name: <span className="text-[#bef264]">'{personalInfo.fullName}'</span>,</p>
                <p className="pl-4">company: <span className="text-sky-300">'Capgemini'</span>,</p>
                <p className="pl-4">experience: <span className="text-amber-300">'{personalInfo.experienceYears} Years'</span>,</p>
                <p className="pl-4">coreStack: ['React.js', '.NET Core', 'GraphQL'],</p>
                <p className="pl-4">ready: <span className="text-[#bef264]">true</span></p>
                <p>&#125;;</p>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-center font-mono">
                <div className="p-2 rounded bg-neutral-950">
                  <div className="text-sm font-bold text-[#bef264]">{personalInfo.experienceYears}</div>
                  <div className="text-[10px] text-neutral-400">Years Exp</div>
                </div>
                <div className="p-2 rounded bg-neutral-950">
                  <div className="text-sm font-bold text-white">40%</div>
                  <div className="text-[10px] text-neutral-400">Over-fetch Cut</div>
                </div>
                <div className="p-2 rounded bg-neutral-950">
                  <div className="text-sm font-bold text-white">95%+</div>
                  <div className="text-[10px] text-neutral-400">Test Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Projects */}
      <section id="cyber-projects" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Personal Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projectsList.map((p) => (
            <div key={p.id} className="p-5 rounded-2xl bg-neutral-900 border border-white/10 flex flex-col justify-between">
              <div>
                <img src={p.image} alt={p.title} className="w-full h-44 object-cover rounded-xl mb-4" />
                <h3 className="font-bold text-white text-lg">{p.title}</h3>
                <p className="text-xs text-neutral-400 mt-1 mb-3">{p.description}</p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-[#bef264] text-neutral-950 font-bold text-xs">
                  Live App
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-mono">
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cyber Contact */}
      <section id="cyber-contact" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 border-t border-white/10">
        <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Connect with Durga Prasad</h2>
          <p className="text-xs text-neutral-400 mb-6">Open for new roles and technical collaboration.</p>
          <button onClick={handleCopy} className="px-4 py-2.5 rounded-xl bg-neutral-800 border border-white/10 text-xs font-mono text-neutral-200 inline-flex items-center gap-2 mb-6">
            <Mail className="w-4 h-4 text-[#bef264]" />
            <span>{personalInfo.email}</span>
            {copied ? <Check className="w-3.5 h-3.5 text-[#bef264]" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
          </button>
        </div>
      </section>
    </div>
  );
};

export default CyberVersion;
