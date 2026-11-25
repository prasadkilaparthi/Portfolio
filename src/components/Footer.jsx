import React from "react";
import { navigationLinks, personalInfo } from "../assets/Data";
import { ArrowUp, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#06070a] border-t border-white/[0.06] text-neutral-400 relative">
      <div className="align-element">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-accent">
              DP
            </div>
            <div>
              <span className="font-heading font-bold text-white text-sm block">
                {personalInfo.fullName}
              </span>
              <span className="font-mono text-[11px] text-neutral-400">
                Full-Stack Developer • Capgemini
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social & Contact Direct Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${personalInfo.phoneRaw || "+916304213633"}`}
              className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-accent transition-colors"
              title={`Call ${personalInfo.phone}`}
              aria-label="Call Mobile Number"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-emerald-400 transition-colors"
              title={`WhatsApp ${personalInfo.phone}`}
              aria-label="WhatsApp Chat"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-amber-400 transition-colors"
              aria-label="LeetCode"
            >
              <SiLeetcode className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-accent transition-colors ml-2 cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Contact Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Durga Prasad Kilaparthi. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${personalInfo.phoneRaw || "+916304213633"}`}
              className="text-neutral-300 hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-accent" />
              <span>{personalInfo.phone}</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-neutral-300 hover:text-accent transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
