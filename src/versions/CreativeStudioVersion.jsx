import React, { useState } from "react";
import { personalInfo, projectsList, technicalSkills, enterpriseProjects, keyAchievements, educationHistory } from "../assets/Data";
import { 
  ArrowUpRight, 
  FileText, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  Building2, 
  Sparkles, 
  Briefcase, 
  Code2, 
  Trophy, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Send, 
  Calendar 
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";

const CreativeStudioVersion = () => {
  const [activeTab, setActiveTab] = useState("enterprise");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      setStatus({ submitting: false, success: false, error: "Please provide a valid email." });
      return;
    }
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
      setTimeout(() => setStatus((p) => ({ ...p, success: false })), 5000);
    } catch {
      setStatus({ submitting: false, success: false, error: "Failed to send message." });
    }
  };

  return (
    <div className="bg-[#0b0c10] text-neutral-100 min-h-screen font-sans selection:bg-amber-400 selection:text-neutral-950 pb-28">
      {/* Subtle Studio Glows */}
      <div className="fixed top-0 left-1/3 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Studio Header */}
      <header className="sticky top-0 z-40 bg-[#0b0c10]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-neutral-950 flex items-center justify-center font-bold text-xs shadow-sm">
              DP
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-white block">
                {personalInfo.fullName}
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                Full Stack Developer · Capgemini
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.cv.view}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 text-neutral-200 border border-white/10 text-xs font-mono transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Resume PDF</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>

            <a
              href="#quick-contact"
              className="px-3.5 py-1.5 rounded-lg bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-semibold transition-colors shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Recruiter Fast-Scan Hero */}
      <section className="pt-12 pb-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#13151f] to-[#0e1017] border border-white/10 shadow-xl relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Portrait & Quick Contact */}
            <div className="md:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative mb-4">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.fullName}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-white/15 shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono font-semibold text-emerald-400">
                  Active in Prod
                </span>
              </div>

              <h2 className="text-xl font-bold text-white">
                {personalInfo.fullName}
              </h2>
              <p className="text-xs font-mono text-amber-400 mt-0.5">
                Full Stack Developer (React & .NET)
              </p>
              <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                <span>Capgemini Technology Services</span>
              </p>

              {/* Direct Copy Badges */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md bg-dark-850 hover:bg-dark-800 border border-white/10 text-[11px] font-mono text-neutral-300 inline-flex items-center gap-1.5 transition-colors"
                  title="Copy Email"
                >
                  <Mail className="w-3 h-3 text-amber-400" />
                  <span>Email</span>
                  {copiedEmail && <Check className="w-3 h-3 text-emerald-400" />}
                </button>

                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded-md bg-dark-850 hover:bg-dark-800 border border-white/10 text-[11px] font-mono text-neutral-300 inline-flex items-center gap-1.5 transition-colors"
                  title="Copy Phone"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>Phone</span>
                  {copiedPhone && <Check className="w-3 h-3 text-emerald-400" />}
                </button>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-dark-850 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-white"
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-sky-400" />
                </a>

                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-dark-850 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-white"
                  title="GitHub"
                >
                  <FaGithub className="w-3.5 h-3.5 text-neutral-200" />
                </a>

                <a
                  href={personalInfo.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-dark-850 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-amber-400"
                  title="LeetCode"
                >
                  <SiLeetcode className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>

            {/* Recruiter Quick Snapshot */}
            <div className="md:col-span-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                Building Enterprise B2B Systems with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">
                  React.js, .NET Core & GraphQL.
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
                Specialist in high-concurrency transactional architectures, large-scale enterprise data grids (<span className="text-white font-medium">AG Grid</span>), and API performance tuning. Proven track record delivering production platforms for clients including <span className="text-white font-medium">HP Technologies</span> and <span className="text-white font-medium">ADAPT</span>.
              </p>

              {/* 4 Crisp Recruiter Metric Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/10 font-mono">
                <div className="p-3 rounded-xl bg-dark-850/80 border border-white/5 text-center">
                  <div className="text-lg font-bold text-amber-400">{personalInfo.experienceYears}</div>
                  <div className="text-[10px] text-neutral-400 uppercase">Production Exp</div>
                </div>
                <div className="p-3 rounded-xl bg-dark-850/80 border border-white/5 text-center">
                  <div className="text-lg font-bold text-white">40%</div>
                  <div className="text-[10px] text-neutral-400 uppercase">Over-fetch Cut</div>
                </div>
                <div className="p-3 rounded-xl bg-dark-850/80 border border-white/5 text-center">
                  <div className="text-lg font-bold text-white">30%</div>
                  <div className="text-[10px] text-neutral-400 uppercase">Render Gain</div>
                </div>
                <div className="p-3 rounded-xl bg-dark-850/80 border border-white/5 text-center">
                  <div className="text-lg font-bold text-white">95%+</div>
                  <div className="text-[10px] text-neutral-400 uppercase">Test Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Navigation Tabs (No Wall-of-Text Fatigue!) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/10 mb-8">
          <button
            onClick={() => setActiveTab("enterprise")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "enterprise"
                ? "bg-amber-400 text-neutral-950 shadow-md font-bold"
                : "bg-dark-850 hover:bg-dark-800 text-neutral-300 border border-white/10"
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Enterprise Client Work (3)</span>
          </button>

          <button
            onClick={() => setActiveTab("skills")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "skills"
                ? "bg-amber-400 text-neutral-950 shadow-md font-bold"
                : "bg-dark-850 hover:bg-dark-800 text-neutral-300 border border-white/10"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Skills Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "projects"
                ? "bg-amber-400 text-neutral-950 shadow-md font-bold"
                : "bg-dark-850 hover:bg-dark-800 text-neutral-300 border border-white/10"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personal Projects (2)</span>
          </button>

          <button
            onClick={() => setActiveTab("achievements")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "achievements"
                ? "bg-amber-400 text-neutral-950 shadow-md font-bold"
                : "bg-dark-850 hover:bg-dark-800 text-neutral-300 border border-white/10"
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Awards & Education</span>
          </button>
        </div>

        {/* Tab 1: Enterprise Client Work */}
        {activeTab === "enterprise" && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-amber-400 mb-0.5">Primary Employment</div>
                <h3 className="text-base font-bold text-white">Full Stack Developer — Capgemini Technology Services</h3>
                <p className="text-xs text-neutral-400 mt-1">Apr 2023 – Present • React.js, C#, .NET Core, SQL Server, AG Grid</p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {personalInfo.experienceYears} Years
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {enterpriseProjects.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-dark-850 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pb-3 mb-3 border-b border-white/5">
                      <span className="text-amber-400 font-semibold">{p.client}</span>
                      <span>{p.period}</span>
                    </div>

                    <h4 className="font-bold text-white text-base mb-2">
                      {p.title}
                    </h4>

                    <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                      {p.description}
                    </p>

                    <div className="space-y-2 text-xs text-neutral-300 font-light mb-4">
                      {p.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1">
                    {p.stack.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-900 text-neutral-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Technical Skills Matrix */}
        {activeTab === "skills" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalSkills.map((category) => (
              <div key={category.category} className="p-5 rounded-2xl bg-dark-850 border border-white/10">
                <h4 className="font-bold text-white text-sm pb-2.5 mb-3 border-b border-white/10 flex items-center justify-between">
                  <span>{category.category}</span>
                  <span className="font-mono text-[10px] text-amber-400">{category.skills.length} skills</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg bg-dark-900 text-neutral-300 border border-white/5 text-xs font-mono hover:border-amber-400/40 hover:text-white transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Personal Projects (Untouched) */}
        {activeTab === "projects" && (
          <div className="grid md:grid-cols-2 gap-6">
            {projectsList.map((p) => (
              <div key={p.id} className="p-5 rounded-2xl bg-dark-850 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="rounded-xl overflow-hidden aspect-[16/9] mb-4 bg-dark-950 border border-white/5">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{p.title}</h4>
                  <p className="text-xs font-mono text-neutral-400 mb-3">{p.subtitle}</p>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-900 text-neutral-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-400 text-neutral-950 font-bold text-xs hover:bg-white transition-colors"
                  >
                    <span>Live App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-dark-900 border border-white/10 text-neutral-300 text-xs font-mono hover:text-white"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Recognitions & Education */}
        {activeTab === "achievements" && (
          <div className="grid md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-3.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Honors & Client Recognition
              </h4>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {keyAchievements.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-dark-850 border border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1.5">
                      <span className="text-amber-400 font-bold">{item.date}</span>
                      <span>{item.organization}</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                    <div className="text-xs text-neutral-300 font-light leading-relaxed">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 space-y-3.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Education
              </h4>
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-dark-850 border border-white/10">
                  <div className="text-xs font-mono text-amber-400 mb-1">{edu.period}</div>
                  <div className="text-sm font-bold text-white mb-1">{edu.degree}</div>
                  <div className="text-xs text-neutral-400 mb-2">{edu.institution}</div>
                  <div className="text-xs text-neutral-300 font-light leading-relaxed pt-2 border-t border-white/5">{edu.details}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Recruiter Quick Contact Section */}
      <section id="quick-contact" className="mt-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-dark-900 border border-white/10 shadow-xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                Fast Contact
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Let's connect directly.
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-6">
                Open for full-stack engineering roles, technical architecture conversations, and high-impact team positions.
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-dark-850 border border-white/5 flex items-center justify-between">
                  <span className="text-neutral-300 truncate mr-2">{personalInfo.email}</span>
                  <button onClick={handleCopyEmail} className="text-amber-400 hover:text-white">
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-dark-850 border border-white/5 flex items-center justify-between">
                  <span className="text-neutral-300">{personalInfo.phone}</span>
                  <button onClick={handleCopyPhone} className="text-amber-400 hover:text-white">
                    {copiedPhone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
                <textarea
                  rows="3"
                  required
                  placeholder="Your message / opportunity details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-400 resize-none"
                />
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-white text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {status.submitting ? <span>Transmitting...</span> : <><span>Transmit Message</span><Send className="w-3.5 h-3.5" /></>}
                </button>
                {status.success && <p className="text-xs text-emerald-400 font-mono text-center">Message delivered to Durga Prasad!</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeStudioVersion;
