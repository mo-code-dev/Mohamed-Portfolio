import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Education({ lang }) {
  const edu = portfolioData[lang].education;

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline bg-surface-ivory"
    >
      <div className="mx-auto max-w-dock">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
            {edu.badge}
          </span>
          <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
            {edu.titleLine1}{" "}
            <span className="text-electric-cobalt">{edu.titleLine2}</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-gray">{edu.subtitle}</p>
        </div>

        <div className="overflow-hidden rounded-card border border-hairline bg-pure-white shadow-dock-lg">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left Accent Panel */}
            <div className="bg-ink-charcoal p-8 text-pure-white sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-pill bg-electric-cobalt text-pure-white">
                <GraduationCap className="h-7 w-7" />
              </div>
              <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-powder-blue">
                {edu.period}
              </p>
              <h3 className="mt-2 text-[32px] font-semibold leading-tight">
                {edu.degreeTitle}
              </h3>
              <p className="mt-2 text-[17px] text-powder-blue">
                {edu.department}
              </p>
              <span className="mt-6 inline-flex rounded-pill bg-white/10 px-4 py-2 text-[13px] font-semibold text-pure-white">
                {edu.gradeBadge}
              </span>
            </div>

            {/* Right Details */}
            <div className="p-8 sm:p-10">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-gray">
                {edu.universityLabel}
              </p>
              <h3 className="mt-1 text-[24px] font-semibold text-ink-charcoal">
                {edu.universityName}
              </h3>
              <p className="mt-1 text-[15px] font-medium text-electric-cobalt">
                {edu.facultyName}
              </p>

              <div className="my-6 h-px bg-hairline" />

              <div className="grid gap-4 sm:grid-cols-2">
                {edu.details.map((d) => (
                  <div
                    key={d.label}
                    className="rounded-[12px] border border-hairline bg-surface-ivory p-4"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-gray">
                      {d.label}
                    </p>
                    <p className="mt-1 text-[16px] font-semibold text-ink-charcoal">
                      {d.value}
                    </p>
                    <p className="text-[13px] text-slate-gray">{d.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[12px] bg-lavender-mist p-4 text-[14px] leading-[1.6] text-ink-charcoal">
                {edu.statement}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
