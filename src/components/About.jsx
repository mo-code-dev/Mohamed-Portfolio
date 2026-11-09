import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Sparkles,
  Layers,
  TrendingUp,
  Globe,
  CheckCircle2,
} from "lucide-react";
import AboutIdCard from "./AboutIdCard";
import { portfolioData } from "../data/portfolioData";

export function About({ lang }) {
  const data = portfolioData[lang] || portfolioData.en;
  const meta = data.meta;

  const pillars = [
    {
      icon: Layers,
      title: lang === "ar" ? "معمارية نظيفة وتطوير متكامل (Full-Stack)" : "Clean Full-Stack Architecture",
      desc:
        lang === "ar"
          ? "هيكلة متكاملة لمكونات Next.js وواجهات Node.js/Express وقواعد بيانات MongoDB الصارمة المصممة للأداء العالي."
          : "Next.js component trees, Node.js & Express REST APIs, MongoDB schemas, and modular engines engineered for long-term scalability.",
    },
    {
      icon: TrendingUp,
      title: lang === "ar" ? "فهم مالي وتجاري عميق" : "Business & Financial Acumen",
      desc:
        lang === "ar"
          ? "خلفية أكاديمية في المحاسبة (الشعبة الإنجليزية) وخبرة في التوظيف والعمليات، تمنح فهماً عميقاً لمنطق ERP قبل كتابة الكود."
          : "Degree in Accounting (English Section) combined with HR talent acquisition and financial operations experience.",
    },
    {
      icon: Globe,
      title: lang === "ar" ? "تكافؤ ثنائي اللغة (RTL / LTR)" : "Bilingual Parity (RTL / LTR)",
      desc:
        lang === "ar"
          ? "بناء واجهات عربية أصيلة بتخطيط وتيبوغرافي دقيق دون أي تشوه أو اعوجاج، وتكافؤ كامل مع الإنجليزية."
          : "Native right-to-left Arabic and left-to-right English interfaces with pixel-perfect typographic symmetry.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto border-t border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0068f9] block mb-2">
          // {lang === "ar" ? "03 / الهوية والمنهج" : "03 / IDENTITY & PHILOSOPHY"}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0d1321] dark:text-white uppercase">
          {lang === "ar" ? "عن المطور والمعمارية." : "ENGINEERING & BACKGROUND."}
        </h2>
      </div>

      {/* Split Grid: 3D Flip Card on Left, Story & Pillars on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: 3D Flippable Developer ID Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <AboutIdCard data={data} lang={lang} />

          {/* Quick Caption below Card */}
          <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400 font-mono">
            {lang === "ar"
              ? "بطاقة الهوية التفاعلية • انقر للتدوير وقراءة القياسات التقنية"
              : "INTERACTIVE DEVELOPER ID CARD • TAP TO INSPECT TELEMETRY"}
          </p>
        </div>

        {/* Right Column: Editorial Narrative & Pillars */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Manifesto */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-[#0d1321] dark:text-white leading-snug">
              {lang === "ar"
                ? "بناء البرمجيات بعقلية تجارية ومالية صلبة ودقة معمارية فائقة."
                : "Bridging technical software architecture with real-world enterprise operations."}
            </h3>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === "ar"
                ? "لا أكتب الكود بمعزل عن الهدف التجاري؛ هدفي صياغة منتجات رقمية منظمة، قابلة للصيانة والتوسع، تحل مشكلات واقعية تبدأ من تحليل المتطلبات وحتى الإنتاج الفعلي. بفضل دراستي المحاسبية باللغة الإنجليزية وخبرتي العملية في العمليات المالية والتوظيف، أمتلك قدرة فريدة على فهم دورات حياة الأعمال المعقدة ونمذجتها برمجياً بأعلى كفاءة."
                : "I don't just write code in isolation—my focus is engineering scalable, maintainable digital products that solve genuine business bottlenecks from requirements modeling to deployment. With an academic degree in Accounting (English Section) and professional hands-on experience in Financial Operations and HR Talent Acquisition, I bridge complex commercial workflows directly into clean TypeScript systems."}
            </p>
          </div>

          {/* 3 Engineering Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-[#0068f9] transition-colors"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0068f9]/10 text-[#0068f9] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0d1321] dark:text-white mb-1.5 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Actions & Resume Link */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={meta.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0068f9] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-[#0068f9]/30 hover:bg-[#024bb1] transition-all hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === "ar" ? "تحميل السيرة الذاتية (PDF)" : "DOWNLOAD FULL RESUME (PDF)"}</span>
            </a>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>{lang === "ar" ? "محدث لشهر نوفمبر 2026" : "UPDATED FOR NOVEMBER 2026"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
