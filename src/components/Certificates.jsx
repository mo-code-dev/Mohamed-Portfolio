import { portfolioData } from "../data/portfolioData";

function Certificates({ lang }) {
  const cert = portfolioData[lang].certificates;

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-dock">
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-pure-white px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt shadow-dock-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
            {cert.badge}
          </span>
          <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
            {cert.titleLine1}{" "}
            <span className="text-electric-cobalt">{cert.titleLine2}</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-gray">{cert.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cert.items.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-card border border-hairline bg-pure-white p-6 shadow-dock-subtle transition-all hover:border-powder-blue hover:shadow-dock-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-pill bg-surface-ivory border border-hairline text-2xl">
                    {item.icon}
                  </div>
                  <span className="text-[22px] font-bold text-hairline">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="rounded-pill bg-lavender-mist px-3 py-1 text-[11px] font-semibold text-vivid-violet">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-3 text-[19px] font-semibold text-ink-charcoal">
                  {item.title}
                </h3>

                <p className="mt-1 text-[13px] font-semibold text-electric-cobalt">
                  {item.provider}
                </p>

                <p className="mt-3 text-[14px] leading-[1.56] text-slate-gray">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-hairline pt-4">
                {item.skills.map((sc) => (
                  <span
                    key={sc}
                    className="rounded-pill border border-hairline bg-surface-ivory px-3 py-1 text-[11px] font-medium text-ink-charcoal"
                  >
                    {sc}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
