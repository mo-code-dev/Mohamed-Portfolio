import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Clock,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function ContactSection({ lang }) {
  const [cairoTime, setCairoTime] = useState("");
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const data = portfolioData[lang] || portfolioData.en;
  const contact = data.contact;

  // Real-time Cairo Time (UTC+2)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format in Africa/Cairo timezone
      const timeStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setCairoTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert(lang === "ar" ? "يرجى ملء جميع الحقول المطلوبة." : "Please fill in all required fields.");
      return;
    }

    setStatus("sending");
    // Simulate high-craft submission feedback
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bold Headings & Direct Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0068f9] mb-2 block">
              // {contact.badge}
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0d1321] dark:text-white uppercase leading-none">
              {contact.title}
            </h2>
            <h3 className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0068f9] to-[#6736eb] uppercase tracking-wide mt-2">
              {contact.headingLine2}
            </h3>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {contact.subtitle}
            </p>
          </div>

          {/* Cairo Local Time Clock Card */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c1424] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#0068f9]" />
              <span className="text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                {contact.cairoTimeLabel}
              </span>
            </div>
            <span className="text-sm font-mono font-bold text-[#0068f9]">
              {cairoTime || "12:00:00 PM"}
            </span>
          </div>

          {/* Contact Methods Cards */}
          <div className="space-y-3">
            {/* Email Card with One-Click Copy */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1424] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0068f9]/10 text-[#0068f9]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                    {contact.emailLabel}
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-bold text-[#0d1321] dark:text-white hover:text-[#0068f9] transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-[#0068f9] hover:text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? contact.copiedEmailText : contact.copyEmailText}</span>
              </button>
            </div>

            {/* WhatsApp Quick Action */}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1424] p-4 flex items-center justify-between hover:border-emerald-500 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                    {contact.whatsappLabel}
                  </span>
                  <span className="text-sm font-bold text-[#0d1321] dark:text-white">
                    {contact.whatsappNumber}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1424] p-3 text-xs font-bold text-[#0d1321] dark:text-white hover:border-[#0068f9] hover:text-[#0068f9] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </a>

              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1424] p-3 text-xs font-bold text-[#0d1321] dark:text-white hover:border-[#0068f9] hover:text-[#0068f9] transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean, Validated Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1426] p-6 sm:p-10 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black text-[#0d1321] dark:text-white uppercase tracking-tight mb-2">
              {contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8">
              {lang === "ar"
                ? "املأ النموذج التالي وسيصل إشعار فوري إلى مكتبي البرمجي."
                : "Fill out the fields below for project inquiries, technical advisory, or engineering proposals."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {contact.form.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder={contact.form.namePlaceholder}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm text-[#0d1321] dark:text-white placeholder-slate-400 focus:border-[#0068f9] focus:outline-none focus:ring-2 focus:ring-[#0068f9]/20 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {contact.form.emailLabel} *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder={contact.form.emailPlaceholder}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm text-[#0d1321] dark:text-white placeholder-slate-400 focus:border-[#0068f9] focus:outline-none focus:ring-2 focus:ring-[#0068f9]/20 transition-all"
                />
              </div>

              {/* Project Scope Selector */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {contact.form.serviceLabel}
                </label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm text-[#0d1321] dark:text-white focus:border-[#0068f9] focus:outline-none focus:ring-2 focus:ring-[#0068f9]/20 transition-all"
                >
                  <option value="">
                    {lang === "ar" ? "اختر نوع المشروع المطلوب..." : "Select project scope..."}
                  </option>
                  {contact.form.serviceOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {contact.form.messageLabel} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={contact.form.messagePlaceholder}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm text-[#0d1321] dark:text-white placeholder-slate-400 focus:border-[#0068f9] focus:outline-none focus:ring-2 focus:ring-[#0068f9]/20 transition-all resize-none"
                />
              </div>

              {/* Status Notice */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-bold"
                  >
                    {contact.form.successMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Full-Width Electric Cobalt Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0068f9] px-6 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-[#0068f9]/30 hover:bg-[#024bb1] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
              >
                <span>
                  {status === "sending"
                    ? contact.form.submitting
                    : contact.form.submitBtn}
                </span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
