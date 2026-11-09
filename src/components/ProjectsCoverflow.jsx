import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Layers,
  Cpu,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function ProjectsCoverflow({ lang }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = portfolioData[lang] || portfolioData.en;
  const projectSection = data.projects;
  const projects = projectSection.items;

  const total = projects.length;
  const activeProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden select-none"
    >
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0068f9] mb-2 block">
            // {projectSection.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0d1321] dark:text-white uppercase leading-none">
            {projectSection.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            {projectSection.subtitle}
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-[#0068f9] hover:bg-[#0068f9] hover:text-white transition-all shadow-sm active:scale-95"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-mono font-bold text-slate-400">
            {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-[#0068f9] hover:bg-[#0068f9] hover:text-white transition-all shadow-sm active:scale-95"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 3D Perspective Coverflow Carousel Container */}
      <div className="relative w-full h-[400px] sm:h-[460px] flex items-center justify-center perspective-1200 overflow-visible mb-12">
        {/* Subtle Hint */}
        <div className="absolute top-0 text-[10px] font-mono tracking-widest text-slate-400 uppercase pointer-events-none">
          {projectSection.swipeHint}
        </div>

        <div
          className="relative w-full h-full flex items-center justify-center transform-style-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {projects.map((proj, idx) => {
            const offset = idx - currentIndex;
            const isCenter = offset === 0;

            // Compute 3D Coverflow transform styles
            let rotateY = 0;
            let scale = 1;
            let translateX = 0;
            let zIndex = 30;
            let opacity = 1;

            if (offset < 0) {
              rotateY = 32;
              scale = 0.82;
              translateX = Math.max(offset * 220, -380);
              zIndex = 20 + offset;
              opacity = Math.abs(offset) === 1 ? 0.7 : 0.25;
            } else if (offset > 0) {
              rotateY = -32;
              scale = 0.82;
              translateX = Math.min(offset * 220, 380);
              zIndex = 20 - offset;
              opacity = offset === 1 ? 0.7 : 0.25;
            }

            return (
              <motion.div
                key={proj.id}
                onClick={() => setCurrentIndex(idx)}
                animate={{
                  rotateY,
                  scale,
                  x: translateX,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 24,
                }}
                className={`absolute w-[300px] sm:w-[380px] h-[340px] sm:h-[380px] rounded-2xl cursor-pointer p-6 flex flex-col justify-between border-2 transition-shadow duration-300 ${
                  isCenter
                    ? "border-[#0068f9] bg-gradient-to-br from-[#0c1b3f] to-[#060e20] text-white shadow-[0_25px_60px_rgba(0,104,249,0.3)]"
                    : "border-slate-300 dark:border-slate-800 bg-[#0f172a] text-slate-300 shadow-lg"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                }}
              >
                {/* Subtle Background Blueprint Mesh */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none rounded-2xl" />

                {/* Card Top Window Bar */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#0068f9] uppercase">
                    {proj.index}
                  </span>
                </div>

                {/* Card Middle: Project Title & Preview Mockup Graphic */}
                <div className="relative z-10 my-auto space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    {proj.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-snug">
                    {proj.title}
                  </h3>

                  {/* High-tech Mockup Telemetry Box */}
                  <div className="rounded-lg bg-black/40 border border-white/10 p-3 space-y-1 font-mono text-[10px]">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>MONITOR:</span>
                      <span className="text-emerald-400 font-bold">ONLINE</span>
                    </div>
                    <div className="text-slate-400 truncate">
                      {proj.mockupData.telemetry1}
                    </div>
                    <div className="text-[#0068f9] font-bold truncate">
                      {proj.mockupData.telemetry2}
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Tech Pills & Action */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate max-w-[200px]">
                    {proj.tech.slice(0, 2).map((t, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="text-[10px] font-bold text-[#0068f9] flex items-center gap-1">
                    {isCenter ? "SELECTED" : "VIEW"}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Synchronized Bordered Project Specification Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1426] p-6 sm:p-10 shadow-xl"
        >
          {/* Panel Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <span className="text-base font-mono font-black text-[#0068f9]">
                [ {activeProject.index} ]
              </span>
              <span className="rounded-full bg-[#0068f9]/10 border border-[#0068f9]/30 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#0068f9]">
                {activeProject.category}
              </span>
            </div>

            <div className="text-xs font-mono text-slate-500 uppercase">
              STATUS: PRODUCTION DEPLOYED
            </div>
          </div>

          {/* Title & Detailed Engineering Description */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#0d1321] dark:text-white uppercase tracking-tight">
                {activeProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {activeProject.summary}
              </p>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {activeProject.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {activeProject.live && activeProject.live !== "#" ? (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0068f9] px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-[#0068f9]/30 hover:bg-[#024bb1] transition-all hover:scale-105 active:scale-95"
                  >
                    <span>{projectSection.viewLiveText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-500 cursor-not-allowed"
                  >
                    <span>PRIVATE CLIENT DEMO</span>
                  </button>
                )}

                {activeProject.github ? (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:border-[#0068f9] hover:text-[#0068f9] transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{projectSection.viewCodeText}</span>
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Lock className="w-3.5 h-3.5" />
                    <span>{projectSection.privateCodeText}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Architectural Highlights & Tech Pills */}
            <div className="lg:col-span-5 space-y-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 p-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0068f9]">
                <Cpu className="w-4 h-4" />
                <span>ARCHITECTURAL HIGHLIGHTS</span>
              </div>

              <div className="space-y-2.5">
                {activeProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#0068f9] shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 text-[11px] font-mono font-bold text-slate-800 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default ProjectsCoverflow;
