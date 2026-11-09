import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Layers, Box, Cpu, ArrowDownRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function StorytellingScroll({ lang }) {
  const containerRef = useRef(null);
  const data = portfolioData[lang] || portfolioData.en;
  const story = data.introStory;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage 1 Opacity & Translation (0.0 to 0.35)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.28, 0.36], [0.8, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.28, 0.36], [20, 0, 0, -40]);
  const scale1 = useTransform(scrollYProgress, [0, 0.1, 0.28, 0.36], [0.95, 1, 1, 0.95]);

  // Stage 2 Opacity & Translation (0.34 to 0.70)
  const opacity2 = useTransform(scrollYProgress, [0.34, 0.44, 0.60, 0.70], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.34, 0.44, 0.60, 0.70], [40, 0, 0, -40]);
  const scale2 = useTransform(scrollYProgress, [0.34, 0.44, 0.60, 0.70], [0.95, 1, 1, 0.95]);

  // Stage 3 Opacity & Translation (0.68 to 1.0)
  const opacity3 = useTransform(scrollYProgress, [0.68, 0.78, 0.95, 1.0], [0, 1, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.68, 0.78, 0.95, 1.0], [40, 0, 0, 0]);
  const scale3 = useTransform(scrollYProgress, [0.68, 0.78, 0.95, 1.0], [0.95, 1, 1, 1]);

  // Parallax for floating preview cards
  const card1Y = useTransform(scrollYProgress, [0, 1], [180, -220]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [260, -180]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [320, -140]);

  // Parallax for 3D cobalt gradient orbs
  const orb1Y = useTransform(scrollYProgress, [0, 1], [100, -280]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [250, -150]);
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

  // Bottom progress bar width
  const progressScaleX = scrollYProgress;

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative h-[300vh] w-full bg-slate-50 dark:bg-[#080d19] transition-colors"
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between px-4 sm:px-8 py-8">
        {/* Subtle Background Mesh & Floating 3D Orbs */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {/* 3D Gradient Cobalt Sphere 1 (Top-Left) */}
        <motion.div
          style={{ y: orb1Y, scale: orb1Scale }}
          className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-[#0068f9]/30 via-[#0068f9]/15 to-transparent blur-3xl pointer-events-none"
        />

        {/* 3D Gradient Cobalt Sphere 2 (Bottom-Right) */}
        <motion.div
          style={{ y: orb2Y }}
          className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-[#6736eb]/20 via-[#0068f9]/25 to-transparent blur-3xl pointer-events-none"
        />

        {/* Top Header of the Sticky Section */}
        <div className="relative z-20 flex items-center justify-between max-w-[1300px] w-full mx-auto border-b border-slate-200/80 dark:border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0068f9] uppercase">
              {story.sectionBadge}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-xs font-black tracking-tight text-[#0d1321] dark:text-white uppercase">
              {story.heading}
            </span>
          </div>

          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest hidden sm:block">
            {lang === "ar" ? "محاكاة التمرير 300vh" : "PINNED SCROLL-SCRUBBING ENGINE"}
          </div>
        </div>

        {/* Center Kinetic Typography & Morphing Stages Container */}
        <div className="relative z-20 my-auto w-full max-w-4xl mx-auto flex items-center justify-center min-h-[380px]">
          {/* ================= STAGE 1: IMAGINE ================= */}
          <motion.div
            style={{ opacity: opacity1, y: y1, scale: scale1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0068f9] uppercase mb-2">
              {story.stages[0].index}
            </span>
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-[#0d1321] dark:text-white uppercase leading-none drop-shadow-sm">
              {story.stages[0].verb}
            </h2>
            <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl font-medium leading-relaxed">
              {story.stages[0].description}
            </p>
          </motion.div>

          {/* ================= STAGE 2: ENGINEER ================= */}
          <motion.div
            style={{ opacity: opacity2, y: y2, scale: scale2 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
          >
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0068f9] uppercase mb-2">
              {story.stages[1].index}
            </span>
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0068f9] via-[#0074dd] to-[#6736eb] uppercase leading-none drop-shadow-sm">
              {story.stages[1].verb}
            </h2>
            <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl font-medium leading-relaxed">
              {story.stages[1].description}
            </p>
          </motion.div>

          {/* ================= STAGE 3: BUILD ================= */}
          <motion.div
            style={{ opacity: opacity3, y: y3, scale: scale3 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
          >
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0068f9] uppercase mb-2">
              {story.stages[2].index}
            </span>
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-[#0d1321] dark:text-white uppercase leading-none drop-shadow-sm">
              {story.stages[2].verb}
            </h2>
            <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl font-medium leading-relaxed">
              {story.stages[2].description}
            </p>
          </motion.div>
        </div>

        {/* Multi-Layer Parallax Floating UI Cards around the Center Text */}
        {/* Card 1: Planeeva 4D BIM (Left) */}
        <motion.div
          style={{ y: card1Y }}
          className="absolute left-4 sm:left-12 lg:left-24 top-1/3 -rotate-6 z-10 hidden md:block pointer-events-none select-none"
        >
          <div className="w-64 rounded-xl border border-white/10 bg-[#0b1938]/90 p-4 shadow-2xl backdrop-blur-xl text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-mono font-bold text-[#0068f9] uppercase">
                4D BIM ENGINE
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <h4 className="text-xs font-black">Planeeva 4D BIM</h4>
            <p className="text-[10px] text-slate-400 mt-1">
              Synchronized 4-Tower Crane Kinematics
            </p>
            <div className="mt-3 flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2">
              <span className="text-slate-400">TELEMETRY:</span>
              <span className="text-[#0068f9] font-bold">60 FPS // RAF</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Alpha Real Estate (Right) */}
        <motion.div
          style={{ y: card2Y }}
          className="absolute right-4 sm:right-12 lg:right-24 top-1/4 rotate-6 z-10 hidden md:block pointer-events-none select-none"
        >
          <div className="w-64 rounded-xl border border-white/10 bg-[#0f172a]/90 p-4 shadow-2xl backdrop-blur-xl text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase">
                LUXURY PROPTECH
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <h4 className="text-xs font-black">Alpha Real Estate</h4>
            <p className="text-[10px] text-slate-400 mt-1">
              Sheikh Zayed & New Cairo Multi-Filter
            </p>
            <div className="mt-3 flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2">
              <span className="text-slate-400">LATENCY:</span>
              <span className="text-emerald-400 font-bold">&lt; 15MS</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Backend & Full-Stack Systems (Bottom-Left) */}
        <motion.div
          style={{ y: card3Y }}
          className="absolute left-8 lg:left-32 bottom-20 -rotate-3 z-10 hidden lg:block pointer-events-none select-none"
        >
          <div className="w-60 rounded-xl border border-white/10 bg-[#060e20]/90 p-3.5 shadow-2xl backdrop-blur-xl text-white">
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#0068f9] mb-1">
              <Cpu className="w-3 h-3" />
              <span>BACKEND & REST APIS</span>
            </div>
            <div className="text-[11px] font-black">Node.js • Express • MongoDB</div>
            <div className="text-[9px] text-slate-400 mt-0.5">JWT Auth & High-Density Schemas</div>
          </div>
        </motion.div>

        {/* Bottom Scroll Progress Bar */}
        <div className="relative z-20 w-full max-w-[1300px] mx-auto pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            <span>{story.scrollPromptLeft}</span>
            <span>{story.scrollPromptRight}</span>
          </div>

          {/* Progress Bar Track */}
          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              style={{
                scaleX: progressScaleX,
                transformOrigin: lang === "ar" ? "right" : "left",
              }}
              className="h-full w-full bg-[#0068f9] rounded-full shadow-[0_0_12px_#0068f9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorytellingScroll;
