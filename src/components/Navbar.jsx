import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Globe, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Navbar({ lang, setLang, isDark }) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const data = portfolioData[lang] || portfolioData.en;
  const links = data.nav.links;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
      const sectionIds = links.map((l) => l.id);
      let current = sectionIds[0] || "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
    }
  };

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "ar" : "en";
    setLang(nextLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full px-3 py-3 sm:px-6 sm:py-4 transition-all duration-300">
      <div
        className={`mx-auto flex max-w-[1300px] items-center justify-between rounded-full border px-4 py-2.5 sm:px-6 transition-all duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/90 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-[#0a0f1d]/90 dark:shadow-[#0068f9]/5"
            : "border-slate-200/50 bg-white/70 shadow-sm backdrop-blur-md dark:border-slate-800/50 dark:bg-[#0a0f1d]/60"
        }`}
      >
        {/* Brand Mark */}
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-3 text-start focus:outline-none"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#0068f9] text-sm font-black text-white shadow-md shadow-[#0068f9]/30 transition-transform duration-300 group-hover:scale-105">
            <span>M</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-[#0a0f1d]" />
          </div>

          <div className="hidden md:flex flex-col">
            <span className="text-[12px] font-black tracking-wider text-[#0d1321] dark:text-white leading-tight">
              MOHAMED MAMDOUH
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-[#0068f9] leading-tight uppercase">
              {data.nav.roleSubtitle || (lang === "ar" ? "مطور ويب متكامل (Full-Stack) و 4D BIM" : "FULL-STACK & 4D BIM DEVELOPER")}
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`relative px-3.5 py-1.5 text-[12px] font-bold tracking-wider uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-[#0068f9]"
                    : "text-slate-600 hover:text-[#0068f9] dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {link.name}

                {/* Animated active underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#0068f9] rounded-full shadow-[0_0_8px_#0068f9]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Lang Switcher + Resume + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:border-[#0068f9] hover:text-[#0068f9] dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-[#0068f9] transition-all"
            title={lang === "en" ? "تبديل للغة العربية" : "Switch to English"}
          >
            <Globe className="w-3.5 h-3.5 text-[#0068f9]" />
            <span>{lang === "en" ? "AR" : "EN"}</span>
          </button>

          {/* Resume Quick Link */}
          <a
            href={data.meta.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0068f9] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm shadow-[#0068f9]/30 hover:bg-[#024bb1] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{data.nav.resumeBtn}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden items-center justify-center w-8 h-8 rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 text-slate-700 dark:text-slate-200"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-auto mt-2 max-w-[1300px] rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-[#0b1938]/95 dark:text-white"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                    activeSection === link.id
                      ? "bg-[#0068f9] text-white"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.id && <span>•</span>}
                </button>
              ))}

              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={data.meta.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-[#0068f9] px-4 py-2 text-[12px] font-bold text-white shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>{data.nav.resumeBtn}</span>
                </a>

                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-2 text-[12px] font-bold text-slate-800 dark:text-slate-200"
                >
                  <Globe className="w-4 h-4 text-[#0068f9]" />
                  <span>{lang === "en" ? "العربية" : "English"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
