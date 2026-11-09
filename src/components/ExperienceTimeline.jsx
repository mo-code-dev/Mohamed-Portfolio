import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function ExperienceTimeline({ lang }) {
  const data = portfolioData[lang] || portfolioData.en;
  const experience = data.experience;

  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto border-t border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Editorial Header */}
      <div className="mb-16">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0068f9] mb-2 block">
          // {experience.badge}
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0d1321] dark:text-white uppercase leading-none">
          {experience.title}
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
          {experience.subtitle}
        </p>
      </div>

      {/* Chronological Milestone Rows */}
      <div className="space-y-8">
        {experience.timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0c1424] p-6 sm:p-8 hover:border-[#0068f9] dark:hover:border-[#0068f9] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#0068f9]/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Date & Location */}
              <div className="lg:col-span-3 space-y-2">
                <div className="inline-flex items-center gap-1.5 font-mono text-sm sm:text-base font-black text-[#0068f9]">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <div className="pt-2">
                  <span className="inline-block rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Right Column: Role Title, Organization & Engineering Description */}
              <div className="lg:col-span-9 space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0d1321] dark:text-white uppercase tracking-tight">
                    {item.role}
                  </h3>
                  <span className="text-xs sm:text-sm font-bold text-[#0068f9]">
                    {item.organization}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Tech & Competency Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {item.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 px-2.5 py-0.5 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
