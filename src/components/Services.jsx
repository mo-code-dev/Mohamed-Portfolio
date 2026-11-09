import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Services({ lang }) {
  const s = portfolioData[lang].services;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = s.items[activeIndex] || s.items[0];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-dock">
        {/* Header */}
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
              {s.badge}
            </span>
            <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
              {s.titleLine1}{" "}
              <span className="text-electric-cobalt">{s.titleLine2}</span>
            </h2>
          </div>
          <p className="text-[16px] leading-[1.6] text-slate-gray sm:text-[18px]">
            {s.subtitle}
          </p>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Selector List */}
          <div className="space-y-3">
            {s.items.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center justify-between rounded-card border p-5 text-start transition-all duration-200 ${
                    isActive
                      ? "border-electric-cobalt bg-pure-white shadow-dock-lg"
                      : "border-hairline bg-surface-ivory hover:bg-pure-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[14px] font-bold ${
                        isActive ? "text-electric-cobalt" : "text-steel-gray"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <p className="text-[17px] font-semibold text-ink-charcoal">
                        {service.shortTitle}
                      </p>
                      <p className="mt-0.5 text-[12px] uppercase tracking-wider text-slate-gray">
                        {service.category}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-pill border transition-colors ${
                      isActive
                        ? "border-electric-cobalt bg-electric-cobalt text-pure-white"
                        : "border-hairline bg-pure-white text-slate-gray"
                    }`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Active Details Card */}
          <div className="relative overflow-hidden rounded-card border border-hairline bg-pure-white p-7 shadow-dock-lg sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-pill bg-lavender-mist px-3.5 py-1 text-[12px] font-semibold text-vivid-violet">
                      {activeService.category}
                    </span>
                    <span className="text-[28px] font-bold text-hairline">
                      {activeService.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[28px] font-semibold leading-[1.2] text-ink-charcoal sm:text-[34px]">
                    {activeService.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[1.6] text-slate-gray">
                    {activeService.description}
                  </p>

                  {/* Checklist Items (Dock Forest Checkmarks) */}
                  <div className="mt-8">
                    <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-gray">
                      {s.includedLabel}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {activeService.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2.5 rounded-[12px] border border-hairline bg-surface-ivory p-3.5 text-[14px] text-ink-charcoal"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-hairline pt-6">
                  <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-gray">
                    {s.techLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeService.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-pill border border-hairline bg-pure-white px-3.5 py-1.5 text-[13px] font-medium text-ink-charcoal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
