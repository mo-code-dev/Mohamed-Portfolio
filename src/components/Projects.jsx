import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Eye, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function SantoPreview({ liveUrl, openLabel }) {
  return (
    <div className="relative overflow-hidden rounded-card border border-hairline bg-[#f9f5ec] shadow-dock-lg">
      {/* Browser Bar */}
      <div className="flex items-center justify-between border-b border-[#d9d0c4] bg-[#fcf8ef] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="rounded-pill border border-[#d9d0c4] bg-[#fef9ef] px-4 py-0.5 text-[11px] font-medium text-slate-gray">
          santo-construction-platform.vercel.app
        </div>
        <div className="h-4 w-4 rounded-full bg-[#ead7cc]" />
      </div>

      {/* Dashboard Preview */}
      <div className="grid grid-cols-[90px_1fr] bg-[#fef9ef] text-left" dir="ltr">
        <div className="border-r border-[#d9d0c4] bg-[#fbf5e9] p-3">
          <div className="mb-4 flex items-center gap-2">
            <div className="grid h-6 w-6 place-items-center rounded-md bg-[#b05a36] text-[10px] font-bold text-white">
              S
            </div>
            <span className="text-[11px] font-bold text-[#2a2b2f]">Santo</span>
          </div>
          <div className="space-y-1.5">
            {["Overview", "Projects", "Field", "Tasks", "Accounting", "HR"].map(
              (item, idx) => (
                <div
                  key={item}
                  className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                    idx === 0
                      ? "bg-[#ead7cc] text-[#b05a36]"
                      : "text-slate-gray"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[8px] font-bold uppercase tracking-wider text-[#b05a36]">
                Construction Operations
              </div>
              <div className="text-[15px] font-bold text-[#2a2b2f]">
                Enterprise Control Center
              </div>
            </div>
            <span className="rounded-pill bg-[#b05a36] px-3 py-1 text-[9px] font-semibold text-white">
              RTL / LTR Ready
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              ["Active", "12"],
              ["At Risk", "3"],
              ["Progress", "68%"],
              ["Modules", "10+"],
            ].map(([label, val]) => (
              <div
                key={label}
                className="rounded-lg border border-[#d9d0c4] bg-[#f5eee1] p-2"
              >
                <div className="text-[8px] text-slate-gray">{label}</div>
                <div className="mt-0.5 text-[13px] font-bold text-[#2a2b2f]">
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-ink-charcoal/0 opacity-0 transition-all duration-300 hover:bg-ink-charcoal/25 hover:opacity-100">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-pill bg-pure-white px-5 py-2.5 text-[13px] font-semibold text-ink-charcoal shadow-dock-lg"
        >
          <Eye className="h-4 w-4 text-electric-cobalt" />
          {openLabel}
        </a>
      </div>
    </div>
  );
}

function Projects({ lang }) {
  const p = portfolioData[lang].projects;
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? p.items
      : p.items.filter((item) => item.type === filter);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline bg-surface-ivory"
    >
      <div className="mx-auto max-w-dock">
        {/* Header & Filter Pills */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
              {p.badge}
            </span>
            <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
              {p.titleLine1}{" "}
              <span className="text-electric-cobalt">{p.titleLine2}</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[16px] text-slate-gray">
              {p.subtitle}
            </p>
          </div>

          {/* Dock Pill Filter Bar */}
          <div className="inline-flex self-start rounded-pill border border-hairline bg-pure-white p-1.5 shadow-dock-subtle">
            {p.filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-pill px-4 py-2 text-[13px] font-semibold transition-all ${
                  filter === f
                    ? "bg-electric-cobalt text-pure-white"
                    : "text-ink-charcoal hover:text-electric-cobalt"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (All 9 Projects) */}
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => {
            const isSanto = project.title === "Santo";
            return (
              <motion.article
                layout
                key={project.id}
                className={`flex flex-col justify-between rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle transition-all hover:border-powder-blue hover:shadow-dock-lg sm:p-7 ${
                  isSanto ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  {isSanto && (
                    <div className="mb-6">
                      <SantoPreview
                        liveUrl={project.live}
                        openLabel={p.openLiveProduct}
                      />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-pill bg-lavender-mist text-electric-cobalt">
                        <Layers className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[12px] font-bold uppercase tracking-wider text-electric-cobalt">
                            {project.category}
                          </span>
                          {project.isNew && (
                            <span className="rounded-pill bg-forest/10 px-2.5 py-0.5 text-[11px] font-bold text-forest">
                              NEW
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 text-[24px] font-semibold text-ink-charcoal">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <span className="rounded-pill border border-hairline bg-surface-ivory px-3 py-1 text-[12px] font-medium text-slate-gray">
                      {project.type}
                    </span>
                  </div>

                  <p className="mt-4 text-[15px] leading-[1.6] text-slate-gray">
                    {project.description}
                  </p>

                  {isSanto && project.santoMeta && (
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {project.santoMeta.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-[12px] border border-hairline bg-surface-ivory p-3.5"
                        >
                          <p className="text-[11px] font-semibold uppercase text-slate-gray">
                            {m.label}
                          </p>
                          <p className="mt-1 text-[14px] font-semibold text-ink-charcoal">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-pill border border-hairline bg-surface-ivory px-3 py-1 text-[12px] font-medium text-ink-charcoal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-5">
                  <div>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-2 text-[13px] font-medium text-ink-charcoal transition-colors hover:border-electric-cobalt hover:text-electric-cobalt"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center rounded-pill border border-hairline bg-surface-ivory px-4 py-2 text-[12px] font-medium text-steel-gray">
                        {p.privateRepoLabel}
                      </span>
                    )}
                  </div>

                  {project.live && project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-pill bg-electric-cobalt px-5 py-2 text-[13px] font-medium text-pure-white transition-colors hover:bg-deep-cobalt"
                    >
                      {p.liveDemoLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-pill border border-hairline bg-surface-ivory px-4 py-2 text-[13px] font-medium text-steel-gray">
                      {p.liveDemoLabel}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
