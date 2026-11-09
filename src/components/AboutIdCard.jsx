import { useState } from "react";
import { motion } from "framer-motion";
import {
  RotateCw,
  MapPin,
  Cpu,
  ShieldCheck,
  ExternalLink,
  Github,
  Mail,
  QrCode,
  Radio,
  Sparkles,
} from "lucide-react";

export function AboutIdCard({ data, lang }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardData = data.idCard;
  const meta = data.meta;

  return (
    <div className="relative w-full max-w-[390px] mx-auto perspective-1200 select-none">
      {/* Floating Action Badge */}
      <div className="flex justify-center mb-3">
        <button
          type="button"
          onClick={() => setIsFlipped(!isFlipped)}
          className="group inline-flex items-center gap-2 rounded-full border border-[#0068f9]/50 bg-[#0068f9]/10 px-3.5 py-1 text-[11px] font-black tracking-wider text-[#0068f9] shadow-sm hover:bg-[#0068f9] hover:text-white transition-all duration-300"
        >
          <RotateCw className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-180" />
          <span>{cardData.tapPrompt}</span>
        </button>
      </div>

      {/* Lanyard Top Strap / Clip Hook */}
      <div className="flex flex-col items-center mb-[-8px] z-10 relative">
        <div className="h-5 w-8 rounded-t-sm bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-600 dark:to-slate-800 shadow-sm" />
        <div className="h-2 w-12 rounded-full bg-slate-300 dark:bg-slate-700 border border-slate-400/50" />
        <div className="h-2 w-4 bg-[#0068f9] rounded-b-sm" />
      </div>

      {/* 3D Flippable Container */}
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-full aspect-[1/1.55] cursor-pointer transform-style-3d shadow-2xl rounded-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ==================== FRONT FACE ==================== */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-b from-[#0b1938] via-[#09142e] to-[#060e20] p-6 text-white border-2 border-[#0068f9]/40 shadow-[0_20px_50px_rgba(0,104,249,0.25)] flex flex-col justify-between overflow-hidden backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Subtle Grid Watermark Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Holographic Top Banner */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 pulse-glow" />
              <span className="text-[10px] font-black tracking-widest text-[#0068f9] uppercase">
                {cardData.title}
              </span>
            </div>
            <span className="text-[9px] font-mono text-slate-400">
              {cardData.cardId}
            </span>
          </div>

          {/* Photo & Identity Section */}
          <div className="relative z-10 flex flex-col items-center text-center mt-2">
            {/* Lanyard Slot Cutout */}
            <div className="h-2 w-14 rounded-full bg-black/60 border border-white/20 mb-4" />

            {/* Avatar with Neon Holographic Ring */}
            <div className="relative mb-3">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#0068f9] p-1 bg-gradient-to-tr from-[#0068f9] via-white/20 to-transparent shadow-[0_0_20px_rgba(0,104,249,0.5)]">
                <img
                  src={meta.avatarUrl}
                  alt={meta.name}
                  className="w-full h-full object-cover object-top rounded-full bg-slate-800"
                />
              </div>

              {/* Verified Badge */}
              <div
                className="absolute bottom-0 right-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#0068f9] text-white border-2 border-[#0b1938] shadow"
                title="Verified 4D Engineer"
              >
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-xl font-black tracking-tight text-white uppercase">
              {meta.name}
            </h3>

            {/* Role Pill */}
            <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0068f9]/20 border border-[#0068f9]/40 text-[#3b82f6] text-[11px] font-bold uppercase tracking-wider">
              <Cpu className="w-3 h-3 text-[#0068f9]" />
              <span>{meta.role}</span>
            </div>
          </div>

          {/* Core Specs Grid */}
          <div className="relative z-10 space-y-2 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400 uppercase tracking-wider text-[9px] font-bold">
                {cardData.locationLabel}
              </span>
              <span className="font-semibold text-white flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#0068f9]" />
                {meta.location}
              </span>
            </div>

            <div className="flex flex-col text-[11px] text-start border-t border-white/5 pt-1.5">
              <span className="text-slate-400 uppercase tracking-wider text-[9px] font-bold mb-0.5">
                {cardData.specializationLabel}
              </span>
              <span className="font-bold text-xs text-white leading-snug">
                {meta.subRole}
              </span>
            </div>
          </div>

          {/* Barcode & Security Hologram */}
          <div className="relative z-10 pt-2 flex items-center justify-between border-t border-white/10">
            {/* Faux Barcode */}
            <div className="flex items-end gap-[2px] h-6">
              {[4, 2, 6, 3, 5, 2, 7, 3, 4, 2, 6, 4, 3, 5, 2, 6, 3, 4, 5, 2, 6].map(
                (h, idx) => (
                  <div
                    key={idx}
                    className="w-[2px] bg-slate-400/80 rounded-sm"
                    style={{ height: `${h * 3}px` }}
                  />
                )
              )}
            </div>

            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
              SECURE BIM-4D
            </span>
          </div>
        </div>

        {/* ==================== BACK FACE ==================== */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-b from-[#060e20] via-[#0b1938] to-[#040914] p-6 text-white border-2 border-[#0068f9]/50 shadow-[0_20px_50px_rgba(0,104,249,0.3)] flex flex-col justify-between overflow-hidden rotate-y-180 backface-hidden"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Subtle Grid Watermark Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          {/* Back Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] font-black tracking-widest text-[#0068f9] uppercase flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
              {cardData.specsTitle}
            </span>
            <span className="text-[9px] font-mono text-slate-400">
              SYS-TELEMETRY
            </span>
          </div>

          {/* Telemetry rows */}
          <div className="relative z-10 space-y-2 my-auto">
            {cardData.specs.map((spec, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-white/5 border border-white/5 px-2.5 py-1.5 text-start"
              >
                <span className="text-[10px] font-medium text-slate-300">
                  {spec.name}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#0068f9]">
                  {spec.val}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Connect Actions */}
          <div className="relative z-10 pt-2 border-t border-white/10 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-[#0068f9] px-2 py-1.5 text-[10px] font-bold text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>

              <a
                href={`mailto:${meta.email}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-[#0068f9] px-2 py-1.5 text-[10px] font-bold text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL</span>
              </a>
            </div>

            <p className="text-center text-[9px] text-slate-400 font-mono tracking-wider">
              {cardData.backPrompt}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutIdCard;
