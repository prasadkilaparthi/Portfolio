import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Experience from "../components/Experience";
import EnterpriseProjects from "../components/EnterpriseProjects";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const EnterpriseVersion = () => {
  return (
    <div className="bg-[#0a0b0e] text-neutral-100 min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Home />
        <Experience />
        <EnterpriseProjects />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default EnterpriseVersion;
