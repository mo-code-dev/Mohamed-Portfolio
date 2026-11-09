import { useState, useEffect } from "react";
import SpringPullCord from "./components/SpringPullCord";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StorytellingScroll from "./components/StorytellingScroll";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import SkillsSpotlight from "./components/SkillsSpotlight";
import ProjectsCoverflow from "./components/ProjectsCoverflow";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationCertificates from "./components/EducationCertificates";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "en";
  });

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio_theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return true; // Default to sleek dark canvas
  });

  // Synchronize language and text direction (RTL for Arabic, LTR for English)
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("portfolio_lang", lang);
  }, [lang]);

  // Synchronize Dark / Light mode class on documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-[#0068f9] selection:text-white ${
        isDark
          ? "bg-[#0a0f1d] text-[#f1f5f9]"
          : "bg-[#f8f9fc] text-[#0d1321]"
      }`}
    >
      {/* Interactive Spring-Physics Theme Pull Cord (hanging on top-right) */}
      <SpringPullCord
        isDark={isDark}
        onToggleTheme={toggleTheme}
        lang={lang}
      />

      {/* Sticky Editorial Navbar */}
      <Navbar lang={lang} setLang={setLang} isDark={isDark} />

      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero lang={lang} />

        {/* 2. Pinned Scroll-Scrubbing Storytelling Section (300vh) */}
        <StorytellingScroll lang={lang} />

        {/* 3. Infinite Horizontal Tech Marquee */}
        <TechMarquee lang={lang} />

        {/* 4. About & 3D Flip Developer ID Card */}
        <About lang={lang} />

        {/* 5. Full-Bleed Spotlight Accordion Rows (Skills) */}
        <SkillsSpotlight lang={lang} />

        {/* 6. 3D Perspective Coverflow Carousel & Spec Panel (Projects) */}
        <ProjectsCoverflow lang={lang} />

        {/* 7. Chronological Milestone Journey (Experience) */}
        <ExperienceTimeline lang={lang} />

        {/* 8. Education & Professional Credentials */}
        <EducationCertificates lang={lang} />

        {/* 9. Split Contact Section & Form */}
        <ContactSection lang={lang} />
      </main>

      {/* Editorial Footer */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;
