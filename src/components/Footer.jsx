import { ArrowUp, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Footer({ lang }) {
  const data = portfolioData[lang] || portfolioData.en;
  const meta = data.meta;
  const footer = data.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#070b16]/70 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Rights */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0068f9] text-[10px] font-black text-white">
              M
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-[#0d1321] dark:text-white">
              {meta.name} • {meta.role}
            </span>
          </div>

          <p className="mt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
            {footer.rights}
          </p>
          <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
            {footer.builtWith}
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#0068f9] transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#0068f9] transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${meta.email}`}
              className="text-slate-500 hover:text-[#0068f9] transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:border-[#0068f9] hover:text-[#0068f9] transition-all shadow-sm active:scale-95"
          >
            <span>{footer.toTop}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
