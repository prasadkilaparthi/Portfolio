import React, { useState } from "react";
import emailjs from "emailjs-com";
import { personalInfo } from "../assets/Data";
import { 
  Mail, 
  Send, 
  ArrowUpRight, 
  Copy, 
  Check, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      setStatus({ submitting: false, success: false, error: "Please enter a valid email address." });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await emailjs.send(
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

      if (response.status === 200) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 6000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        submitting: false,
        success: false,
        error: "Message delivery encountered an error. Please connect via LinkedIn or email.",
      });
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-12 lg:py-14 relative overflow-hidden bg-dark-900/80 border-t border-white/[0.06]">
      {/* Ambient Radial Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="align-element relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Direct Communication
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-3d-chrome tracking-tight">
              Get In Touch
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-md">
            Let's discuss full-stack developer opportunities, software projects, or engineering roles.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start perspective-1000">
          {/* Left Column: Direct Links & Narrative with 3D Depth */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-dark-850/90 border border-white/[0.08] card-3d-interactive shadow-2xl">
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Let's build something remarkable.
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                Whether you have an upcoming project, are looking to expand your engineering team, or want to discuss full-stack solutions with React and .NET, my inbox is always open.
              </p>

              {/* Status Indicator with Witty Note */}
              <div className="p-4 rounded-2xl bg-dark-900 border border-white/[0.06] mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                  <div>
                    <div className="text-xs font-mono text-neutral-300 font-medium">
                      Available for New Roles
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                      Response time: Faster than a cold .NET startup ⚡
                    </div>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-accent">Active</span>
              </div>

              {/* Copy Email Button */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-dark-800 hover:bg-dark-700 border border-white/[0.08] text-neutral-200 transition-all font-mono text-xs group cursor-pointer"
                >
                  <span className="flex items-center gap-2 text-neutral-300 truncate">
                    <Mail className="w-4 h-4 text-accent shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-accent font-semibold ml-2 shrink-0">
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-accent" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-dark-900/50 hover:bg-dark-800 border border-white/[0.04] hover:border-white/10 text-neutral-300 hover:text-white transition-all text-xs font-mono"
                >
                  <span className="flex items-center gap-2.5">
                    <FaLinkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>

                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-dark-900/50 hover:bg-dark-800 border border-white/[0.04] hover:border-white/10 text-neutral-300 hover:text-white transition-all text-xs font-mono"
                >
                  <span className="flex items-center gap-2.5">
                    <FaGithub className="w-4 h-4 text-neutral-200" />
                    <span>GitHub Repositories</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>

                <a
                  href={personalInfo.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-dark-900/50 hover:bg-dark-800 border border-white/[0.04] hover:border-white/10 text-neutral-300 hover:text-white transition-all text-xs font-mono"
                >
                  <span className="flex items-center gap-2.5">
                    <SiLeetcode className="w-4 h-4 text-amber-400" />
                    <span>LeetCode Profile</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-dark-850/90 border border-white/[0.08] card-3d-interactive-subtle shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Direct delivery to {personalInfo.fullName}
                  </p>
                </div>
                <span className="font-mono text-xs text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20">
                  EmailJS Active
                </span>
              </div>

              {/* Status Alert Messages */}
              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent directly to {personalInfo.fullName}.</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs text-neutral-300 mb-2 uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs text-neutral-300 mb-2 uppercase tracking-wider"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-neutral-300 mb-2 uppercase tracking-wider"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, timeline, or engineering opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-accent hover:bg-white text-neutral-950 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(190,242,100,0.3)] disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
                >
                  {status.submitting ? (
                    <>
                      <span className="h-4 w-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
