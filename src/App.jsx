import React, { useEffect, useState } from "react";
import BrowserTabBar from "./components/BrowserTabBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import StatusBar from "./components/StatusBar.jsx";
import { sections } from "./data/resumeData.js";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <BrowserTabBar active={active} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <StatusBar />
    </div>
  );
}
