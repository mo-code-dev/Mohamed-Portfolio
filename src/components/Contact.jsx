import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Contact({ lang }) {
  const data = portfolioData[lang];
  const c = data.contact;

  const getIcon = (type) => {
    if (type === "email") return <Mail className="h-5 w-5" />;
    if (type === "whatsapp") return <Phone className="h-5 w-5" />;
    return <MapPin className="h-5 w-5" />;
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-hairline bg-pure-white"
    >
      <div className="mx-auto max-w-dock">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-surface-ivory px-4 py-1.5 text-[13px] font-semibold text-electric-cobalt">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cobalt" />
            {c.badge}
          </span>
          <h2 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-charcoal sm:text-[48px]">
            {c.titleLine1}{" "}
            <span className="text-electric-cobalt">{c.titleLine2}</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-gray">{c.subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Contact Cards (Email + Both WhatsApp Numbers + Location) */}
          <div className="space-y-4">
            {c.items.map((item) => (
              <a
                key={`${item.title}-${item.value}`}
                href={item.href}
                target={item.type === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center justify-between rounded-card border border-hairline bg-surface-ivory p-5 transition-all hover:border-electric-cobalt hover:bg-pure-white hover:shadow-dock-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-pill bg-electric-cobalt text-pure-white">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-gray">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[16px] font-semibold text-ink-charcoal">
                      {item.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-gray" />
              </a>
            ))}
          </div>

          {/* Dock Signature Diagonal Blue Gradient CTA Banner */}
          <div className="flex flex-col justify-between rounded-card border border-powder-blue bg-gradient-to-br from-canvas-cream via-[#c8dcf5] to-electric-cobalt p-8 sm:p-10">
            <div>
              <span className="inline-flex rounded-pill bg-pure-white px-4 py-1.5 text-[12px] font-semibold text-electric-cobalt shadow-dock-subtle">
                {c.ctaCard.badge}
              </span>
              <h3 className="mt-6 text-[32px] font-semibold leading-[1.15] text-ink-charcoal sm:text-[38px]">
                {c.ctaCard.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-ink-charcoal/85">
                {c.ctaCard.description}
              </p>
            </div>

            <div className="mt-10">
              <a
                href={`mailto:${data.meta.email}`}
                className="inline-flex items-center gap-2 rounded-pill bg-electric-cobalt px-7 py-3.5 text-[15px] font-medium text-pure-white shadow-dock-lg transition-colors hover:bg-deep-cobalt"
              >
                {c.ctaCard.buttonText}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-[13px] font-medium text-ink-charcoal/80">
                {c.ctaCard.stackNote}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 text-[13px] text-slate-gray sm:flex-row">
          <p>© {new Date().getFullYear()} {data.meta.name}.</p>
          <div className="flex gap-6">
            <a
              href={data.meta.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink-charcoal hover:text-electric-cobalt"
            >
              GitHub
            </a>
            <a
              href={data.meta.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink-charcoal hover:text-electric-cobalt"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
