import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function SkillsSpotlight({ lang }) {
  const [activeRow, setActiveRow] = useState("01");
  const data = portfolioData[lang] || portfolioData.en;
  const skillsData = data.skills;

  return (
    <section
      id="skills"
      className="relative py-24 border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Swiss Editorial Header */}
        <div className="flex flex-col max-w-3xl">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0068f9] mb-2 block">
            // {skillsData.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0d1321] dark:text-white uppercase leading-none">
            {skillsData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {skillsData.subtitle}
          </p>
        </div>
      </div>

      {/* Full-Bleed Interactive Spotlight Accordion Rows */}
      <div className="w-full border-t border-b border-slate-200 dark:border-slate-800">
        {skillsData.items.map((item) => {
          const isActive = activeRow === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveRow(item.id)}
              onClick={() => setActiveRow(item.id)}
              className={`relative w-full border-b border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#0068f9] text-white shadow-xl shadow-[#0068f9]/20"
                  : "bg-transparent text-slate-800 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-900/40"
              }`}
            >
              {/* Row Inner Container */}
              <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Left Column: Number + Category Title */}
                  <div className="lg:col-span-5 flex items-start sm:items-center gap-4">
                    <span
                      className={`text-2xl sm:text-3xl font-mono font-black ${
                        isActive
                          ? "text-white/80"
                          : "text-slate-400 dark:text-slate-600"
                      }`}
                    >
                      {item.id}
                    </span>

                    <div>
                      <h3
                        className={`text-lg sm:text-2xl font-black uppercase tracking-tight ${
                          isActive
                            ? "text-white"
                            : "text-[#0d1321] dark:text-white"
                        }`}
                      >
                        {item.category.replace(/^[0-9]+\s*/, "")}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm mt-1 max-w-md ${
                          isActive
                            ? "text-white/90"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {item.headline}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: White Tech Badge Pills (Revealed on active / visible) */}
                  <div className="lg:col-span-7 flex flex-wrap items-center gap-2 justify-start lg:justify-end">
                    {item.tech.map((pill, idx) => (
                      <span
                        key={idx}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
                          isActive
                            ? "bg-white text-[#0068f9] shadow-md shadow-black/10 scale-105"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        }`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Architectural Details when Active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-6 pt-6 border-t border-white/20"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {item.points.map((pt, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-start gap-2 bg-white/10 rounded-xl p-3 border border-white/20 backdrop-blur-sm"
                          >
                            <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                            <span className="text-xs text-white leading-relaxed font-medium">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSpotlight;
