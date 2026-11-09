import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";

export function SpringPullCord({ isDark, onToggleTheme, lang }) {
  const [isPulling, setIsPulling] = useState(false);
  const [justToggled, setJustToggled] = useState(false);
  const controls = useAnimation();
  const pullThreshold = 40;

  const pullLabel = lang === "ar" ? "اسحب للتبديل" : "PULL TO SWITCH";
  const currentMode = isDark 
    ? (lang === "ar" ? "الوضع الداكن" : "DARK") 
    : (lang === "ar" ? "الوضع الفاتح" : "LIGHT");

  const handleDragEnd = async (_, info) => {
    setIsPulling(false);
    if (info.offset.y > pullThreshold || info.velocity.y > 200) {
      triggerToggle();
    }
  };

  const triggerToggle = () => {
    setJustToggled(true);
    onToggleTheme();
    setTimeout(() => setJustToggled(false), 900);
  };

  const handleClick = async () => {
    // Play satisfying mechanical spring pull animation
    setIsPulling(true);
    await controls.start({
      y: [0, 60, -12, 6, 0],
      transition: {
        duration: 0.65,
        times: [0, 0.35, 0.65, 0.85, 1],
        ease: "easeInOut",
      },
    });
    setIsPulling(false);
    triggerToggle();
  };

  return (
    <div
      className={`fixed top-0 z-50 flex flex-col items-center select-none ${
        lang === "ar" ? "left-6 sm:left-14" : "right-6 sm:right-14"
      }`}
      aria-label="Theme toggle spring pull cord"
    >
      {/* Anchoring Ceiling Bracket */}
      <div className="flex flex-col items-center">
        <div className="h-1.5 w-6 rounded-b-md bg-[#0068f9] shadow-sm shadow-[#0068f9]/50" />
        <div className="h-1 w-2 bg-slate-400 dark:bg-slate-600" />
      </div>

      {/* Draggable Spring Cord Group */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 85 }}
        dragElastic={0.45}
        onDragStart={() => setIsPulling(true)}
        onDragEnd={handleDragEnd}
        animate={controls}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        className="group flex flex-col items-center cursor-grab active:cursor-grabbing transition-transform"
        style={{ touchAction: "none" }}
      >
        {/* Dynamic Braided String */}
        <div className="relative w-0.5 h-16 sm:h-20 bg-gradient-to-b from-slate-400 via-[#0068f9] to-slate-400 dark:from-slate-600 dark:via-[#0068f9] dark:to-slate-300">
          {/* Subtle glowing bead on the cord */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0068f9] ring-2 ring-[#0068f9]/30 shadow-[0_0_8px_#0068f9]" />
        </div>

        {/* Tactile Handle / Pull Pendant */}
        <motion.div
          animate={
            isPulling
              ? { scale: 1.08, rotate: [0, -3, 3, 0] }
              : { rotate: [0, 1.2, -1.2, 0] }
          }
          transition={
            isPulling
              ? { duration: 0.2 }
              : { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }
          className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${
            isDark
              ? "bg-[#0b1938]/95 border-[#0068f9]/40 text-white shadow-[#0068f9]/20"
              : "bg-white/95 border-slate-300/80 text-[#0d1321] shadow-slate-900/10"
          } ${justToggled ? "ring-4 ring-[#0068f9] shadow-[0_0_25px_#0068f9]" : ""}`}
        >
          {/* Light/Dark Icon */}
          <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#0068f9] text-white shadow-sm">
            {isDark ? (
              <Moon className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Sun className="w-3.5 h-3.5 fill-current animate-[spin_12s_linear_infinite]" />
            )}
          </div>

          {/* Editorial Pull Label */}
          <div className="flex flex-col text-start">
            <span className="text-[9px] font-black uppercase tracking-wider text-[#0068f9] leading-tight">
              {pullLabel}
            </span>
            <span className="text-[10px] font-bold tracking-tight opacity-90 leading-tight">
              {currentMode}
            </span>
          </div>

          {/* Flash indicator on pull trigger */}
          {justToggled && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-full bg-[#0068f9]/30 pointer-events-none"
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SpringPullCord;
