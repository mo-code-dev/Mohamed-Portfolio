import { portfolioData } from "../data/portfolioData";

export function TechMarquee({ lang }) {
  const data = portfolioData[lang] || portfolioData.en;
  const items = data.marqueeTech || [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "JWT Auth",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Three.js / WebGL",
    "4D BIM Engines",
    "Git",
    "GitHub",
    "Postman",
  ];

  // Duplicate items array for seamless infinite looping
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden border-y border-slate-200/90 dark:border-slate-800/90 bg-white/60 dark:bg-[#070b16]/70 py-4 backdrop-blur-md select-none"
      aria-label="Core technologies marquee ticker"
    >
      {/* Edge Gradient Mask for Smooth Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#f8f9fc] dark:from-[#0a0f1d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#f8f9fc] dark:from-[#0a0f1d] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {duplicatedItems.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-6 px-4 group cursor-default"
          >
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 transition-colors duration-200 group-hover:text-[#0068f9]">
              {tech}
            </span>

            {/* Glowing Blue Dot Separator */}
            <span className="flex h-2 w-2 rounded-full bg-[#0068f9] shadow-[0_0_8px_#0068f9] ring-2 ring-[#0068f9]/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
