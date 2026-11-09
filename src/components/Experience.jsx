import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Experience({ lang }) {
  const exp = portfolioData[lang].experience;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-dock">
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
            {exp.badge}
          </span>
          <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
            {exp.titleLine1}{" "}
            <span className="text-electric-cobalt">{exp.titleLine2}</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-gray">{exp.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {exp.items.map((item) => (
            <div
              key={item.id}
              className="rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle sm:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-pill bg-electric-cobalt text-pure-white">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-electric-cobalt">
                      {item.type}
                    </span>
                    <h3 className="mt-0.5 text-[20px] font-semibold text-ink-charcoal">
                      {item.role}
                    </h3>
                    <p className="text-[14px] font-medium text-slate-gray">
                      {item.company}
                    </p>
                  </div>
                </div>

                <span className="rounded-pill bg-lavender-mist px-3.5 py-1 text-[12px] font-semibold text-vivid-violet">
                  {item.period}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[13px] text-slate-gray">
                <MapPin className="h-4 w-4 text-electric-cobalt" />
                {item.location}
              </div>

              <p className="mt-4 text-[15px] leading-[1.6] text-slate-gray">
                {item.description}
              </p>

              <div className="mt-5 space-y-2.5 border-t border-hairline pt-4">
                {item.responsibilities.map((r) => (
                  <div key={r} className="flex items-start gap-2.5 text-[14px] text-ink-charcoal">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
