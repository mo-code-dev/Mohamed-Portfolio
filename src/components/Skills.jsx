import { portfolioData } from "../data/portfolioData";

function Skills({ lang }) {
  const s = portfolioData[lang].skills;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline bg-surface-ivory">
      <div className="mx-auto max-w-dock">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
            {s.badge}
          </span>

          <h2 className="mt-5 text-[40px] font-semibold leading-[1.12] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
            {s.titleLine1}{" "}
            <span className="text-electric-cobalt">{s.titleLine2}</span>
          </h2>

          <p className="mt-4 text-[16px] leading-[1.6] text-slate-gray sm:text-[18px]">
            {s.subtitle}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-electric-cobalt">
                {s.techHeader}
              </p>
              <h3 className="mt-1 text-[24px] font-semibold text-ink-charcoal">
                {s.techSubheader}
              </h3>
            </div>
            <span className="text-[13px] font-medium text-slate-gray">
              {s.categoriesCount}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {s.technicalSkills.map((group) => (
              <div
                key={group.number}
                className="rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle transition-all hover:border-powder-blue"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[13px] font-bold text-electric-cobalt">
                      {group.number}
                    </span>
                    <h4 className="mt-1 text-[22px] font-semibold text-ink-charcoal">
                      {group.title}
                    </h4>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-surface-ivory border border-hairline text-electric-cobalt font-bold">
                    +
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-[1.56] text-slate-gray">
                  {group.description}
                </p>

                <div className="my-5 h-px bg-hairline" />

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-pill border border-hairline bg-surface-ivory px-4 py-1.5 text-[13px] font-medium text-ink-charcoal transition-colors hover:border-electric-cobalt hover:text-electric-cobalt"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Skills */}
        <div className="mt-16">
          <div className="mb-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-vivid-violet">
              {s.personalHeader}
            </p>
            <h3 className="mt-1 text-[24px] font-semibold text-ink-charcoal">
              {s.personalSubheader}
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] text-slate-gray">
              {s.personalDescription}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.personalSkills.map((skill, idx) => (
              <div
                key={skill.title}
                className="rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-pill bg-lavender-mist text-vivid-violet font-bold">
                    {skill.icon}
                  </div>
                  <span className="text-[12px] font-semibold text-steel-gray">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="mt-4 text-[18px] font-semibold text-ink-charcoal">
                  {skill.title}
                </h4>
                <p className="mt-2 text-[14px] leading-[1.56] text-slate-gray">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Approach Bar */}
        <div className="mt-12 rounded-card bg-ink-charcoal p-7 text-pure-white sm:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-powder-blue">
                {s.approach.eyebrow}
              </p>
              <h3 className="mt-2 text-[22px] font-semibold">
                {s.approach.title}
              </h3>
              <p className="mt-1 max-w-md text-[14px] text-steel-gray">
                {s.approach.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.approach.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-pill border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium text-pure-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
