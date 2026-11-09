import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function EducationCertificates({ lang }) {
  const data = portfolioData[lang] || portfolioData.en;
  const edu = data.education;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto border-t border-slate-200/80 dark:border-slate-800/80">
      {/* Editorial Header */}
      <div className="mb-12">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0068f9] mb-2 block">
          // {edu.badge}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0d1321] dark:text-white uppercase leading-none">
          {edu.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Academic Degree Card */}
        <div className="lg:col-span-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1424] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0068f9]/10 text-[#0068f9] mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0068f9] font-bold">
              ACADEMIC FOUNDATION
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-[#0d1321] dark:text-white mt-1 uppercase leading-snug">
              {edu.degree.title}
            </h3>

            <p className="text-xs font-mono font-bold text-slate-500 mt-1">
              {edu.degree.institution} • {edu.degree.period}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {edu.degree.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-mono text-emerald-500">
            <CheckCircle2 className="w-4 h-4" />
            <span>ENGLISH COMMERCE CURRICULUM</span>
          </div>
        </div>

        {/* Certifications List */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          {edu.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1424] p-5 sm:p-6 hover:border-[#0068f9] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-[#0068f9]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0d1321] dark:text-white uppercase leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {cert.issuer}
                  </p>
                  <p className="text-xs font-mono text-[#0068f9] font-semibold mt-1">
                    {cert.highlight}
                  </p>
                </div>
              </div>

              <span className="self-start sm:self-center font-mono text-xs font-bold text-slate-400 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationCertificates;
