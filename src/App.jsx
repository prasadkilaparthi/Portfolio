import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#08090d] text-neutral-100 min-h-screen flex flex-col font-sans selection:bg-accent selection:text-neutral-950 overflow-x-hidden">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
