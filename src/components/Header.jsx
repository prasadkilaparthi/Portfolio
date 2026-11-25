import React, { useState, useEffect } from "react";
import { navigationLinks, personalInfo } from "../assets/Data";
import { Menu, X, ArrowUpRight, FileDown, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navigationLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090d]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="align-element flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
          aria-label="Durga Prasad Kilaparthi Home"
        >
          <div className="h-9 w-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-accent group-hover:border-accent/50 transition-colors">
            DP
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
              {personalInfo.fullName}
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            </span>
            <span className="font-mono text-[11px] text-neutral-400 tracking-wider uppercase">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-dark-850/80 border border-white/[0.08] backdrop-blur-md">
          {navigationLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-neutral-950 font-semibold bg-accent shadow-[0_0_15px_rgba(190,242,100,0.3)]"
                    : "text-neutral-300 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={`tel:${personalInfo.phoneRaw || "+916304213633"}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-2 rounded-lg text-neutral-300 hover:text-white bg-dark-800/80 hover:bg-dark-700 border border-white/[0.08] hover:border-accent/30 transition-all"
            title="Call +91 6304213633"
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span className="hidden xl:inline">{personalInfo.phone}</span>
          </a>

          <a
            href={personalInfo.cv.view}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-lg text-neutral-300 hover:text-white bg-dark-800/80 hover:bg-dark-700 border border-white/[0.08] transition-all"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-accent text-neutral-950 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-200"
          >
            <span>Connect</span>
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-dark-800 border border-white/10 text-neutral-200 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-5 rounded-2xl bg-[#0e1017] border border-white/10 shadow-2xl backdrop-blur-2xl">
          <nav className="flex flex-col gap-2">
            {navigationLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-accent text-neutral-950 font-semibold"
                      : "text-neutral-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${personalInfo.phoneRaw || "+916304213633"}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono rounded-lg bg-dark-800 border border-white/10 text-neutral-200 hover:border-accent/40"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call: {personalInfo.phone}</span>
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-300 hover:bg-emerald-900/40"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: {personalInfo.phone}</span>
            </a>
            <a
              href={personalInfo.cv.view}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono rounded-lg bg-dark-800 border border-white/10 text-neutral-200"
            >
              <FileDown className="w-4 h-4 text-accent" />
              <span>View Curriculum Vitae</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-lg bg-accent text-neutral-950 hover:bg-white"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
