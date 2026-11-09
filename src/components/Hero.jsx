import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles, FileDown } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Hero({ lang }) {
  const data = portfolioData[lang] || portfolioData.en;
  const hero = data.hero;
  const meta = data.meta;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
    }
  };

  const isAr = lang === "ar";

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto overflow-hidden select-none"
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Main Split Hero: Content (Left) & Portrait with Giant Watermark (Right) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center my-auto py-6 lg:py-10">
        
        {/* ================= LEFT COLUMN: EDITORIAL CONTENT & BIO ================= */}
        <motion.div
          initial={{ opacity: 0, x: isAr ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 z-20 flex flex-col items-start text-start"
        >
          {/* Greeting in Stylish Script */}
          <div className="mb-1">
            <span
              className="text-2xl sm:text-3xl lg:text-4xl font-serif italic font-normal text-[#0068f9] tracking-normal"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {isAr ? "مرحباً، أنا" : "Hi, I'm"}
            </span>
          </div>

          {/* Massive Bold First Name / Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#0d1321] dark:text-white leading-[0.95] uppercase">
            {isAr ? "محمد ممدوح" : "MOHAMED"}
          </h1>

          {/* Role & Affiliation */}
          <div className="mt-3 space-y-1">
            <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0d1321] dark:text-slate-100">
              {isAr
                ? "مطور ويب متكامل (Full-Stack) و 4D BIM"
                : "FULL STACK & 4D BIM DEVELOPER"}
            </p>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0068f9]">
              {isAr
                ? "MERN STACK • NODE.JS • EXPRESS • MONGODB • NEXT.JS"
                : "MERN STACK • NODE.JS • EXPRESS • MONGODB • NEXT.JS"}
            </p>
          </div>

          {/* Italic Catchphrase */}
          <p className="mt-3 text-sm sm:text-base font-serif italic text-slate-600 dark:text-slate-300">
            {isAr
              ? "بناء وتطوير تجارب رقمية وتطبيقات متكاملة عالية الأداء."
              : "Building innovative digital experiences."}
          </p>

          {/* Bio Paragraph */}
          <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
            {isAr
              ? "مطور ويب متكامل (Full-Stack) متخصص في بناء واجهات برمجة تطبيقات Node.js و Express، ونمذجة قواعد بيانات MongoDB، وهندسة واجهات Next.js المتطورة ومحركات WebGL 60 FPS، مع ربط منطق الأعمال بدقة معمارية عالية."
              : "I'm a Full-Stack & 4D BIM Developer passionate about high-throughput Node.js & Express REST APIs, MongoDB database modeling, Next.js web applications, and monotonic 60 FPS WebGL simulation engines."}
          </p>

          {/* Action Buttons Matching the Reference Screenshot */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            {/* Primary Action Button (Solid Electric Cobalt Pill) */}
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#0068f9] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-[#0068f9]/30 hover:bg-[#024bb1] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{isAr ? "تصفح أعمالي" : "EXPLORE MY WORK"}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Secondary Action Button (Bordered Pill linking to Resume) */}
            <a
              href={meta.resumeUrl}
              target="_blank"
              download
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0d1321] dark:text-slate-200 hover:border-[#0068f9] hover:text-[#0068f9] transition-all shadow-sm active:scale-[0.98]"
            >
              <span>{isAr ? "تحميل السيرة الذاتية" : "GET MY RESUME"}</span>
              <FileDown className="w-4 h-4 text-[#0068f9]" />
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: GIANT WATERMARK TEXT + PERSON PHOTO ================= */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[520px] lg:min-h-[580px] overflow-visible">
          
          {/* GIANT TYPOGRAPHIC WATERMARK TEXT IN BACKGROUND */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center lg:items-end text-center lg:text-end select-none pointer-events-none z-0"
            aria-hidden="true"
          >
            <span className="font-black uppercase tracking-tighter text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] leading-[0.85] text-slate-200/70 dark:text-slate-800/40 opacity-70 dark:opacity-40">
              FULL STACK
            </span>
            <span className="font-black uppercase tracking-tighter text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] leading-[0.85] text-slate-200/70 dark:text-slate-800/40 opacity-70 dark:opacity-40">
              DEVELOPER
            </span>
          </div>

          {/* SOFT AMBIENT BLUE RADIAL GLOW BEHIND THE PHOTO */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#0068f9]/20 dark:bg-[#0068f9]/30 blur-3xl pointer-events-none z-0" />

          {/* THE PORTRAIT CUTOUT PHOTO */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[470px] flex justify-center items-end"
          >
            <div className="relative group">
              <img
                src={meta.avatarUrl}
                alt={meta.name}
                className="w-full h-auto max-h-[500px] sm:max-h-[560px] lg:max-h-[620px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,104,249,0.22)] dark:drop-shadow-[0_25px_50px_rgba(0,104,249,0.35)] transition-transform duration-500 hover:scale-[1.01]"
              />

              {/* Floating verified badge at the bottom-right corner of the portrait */}
              <div
                className={`absolute bottom-6 ${
                  isAr ? "left-2" : "right-2"
                } rounded-full bg-white/90 dark:bg-[#0b1938]/90 border border-slate-200 dark:border-[#0068f9]/40 px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-2`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {isAr ? "متاح للعمل" : "AVAILABLE FOR ROLES"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bottom Engineering Stats Ticker Bar */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
        {hero.stats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60"
          >
            <div>
              <span className="text-xs font-bold text-[#0d1321] dark:text-white block">
                {stat.label}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                {stat.hint}
              </span>
            </div>
            <span className="text-base sm:text-lg font-black text-[#0068f9] font-mono">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
