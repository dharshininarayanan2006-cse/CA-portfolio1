"use client";

import CountUp from "@/components/animations/CountUp";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { SERVICES } from "@/lib/constants";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle,
  FileText,
  GitBranch,
  Receipt,
  Send,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  receipt: <Receipt size={22} />,
  "file-text": <FileText size={22} />,
  "building-2": <Building2 size={22} />,
  calculator: <Calculator size={22} />,
};

const serviceCards = [
  {
    title: "Direct Tax",
    subtitle: "Tax Filing & Compliance",
    icon: <Receipt size={26} />,
    headerBg: "bg-primary",
    headerBgDark: "dark:bg-primary",
    textWhite: true,
    features: ["Income Tax Filings", "TDS Return Filing", "Tax Audit", "Professional Certifications"],
    highlighted: false,
  },
  {
    title: "Business Registrations",
    subtitle: "Incorporation & Filings",
    icon: <Building2 size={26} />,
    headerBg: "bg-peach",
    headerBgDark: "dark:bg-peach/20",
    textWhite: false,
    features: ["Company Incorporation", "Company Annual Filings", "MSME Registration", "IEC Registration", "Professional Tax Registration"],
    highlighted: true,
  },
  {
    title: "Accounting",
    subtitle: "Books & Payroll",
    icon: <Calculator size={26} />,
    headerBg: "bg-soft-blue",
    headerBgDark: "dark:bg-soft-blue/20",
    textWhite: false,
    features: ["Bookkeeping (Tally)", "Financial Statements", "Payroll Management", "GST Registration & Filings"],
    highlighted: false,
  },
];

const heroWords = "All financial clarity in one firm".split(" ");

export default function Home() {
  const { addReveal } = useScrollAnimations();

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center bg-white dark:bg-slate-950">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ─── Left: Content ─── */}
            <div className="flex flex-col gap-7 lg:gap-8 max-w-xl">
              <p
                ref={addReveal}
                className="scroll-animate reveal-blur text-sm font-medium text-primary dark:text-peach uppercase tracking-wide"
              >
                Trusted Chartered Accountant in Chennai
              </p>

              <h1 className="text-[32px] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white max-w-[24ch] lg:max-w-[26ch]">
                {heroWords.map((word, i) => (
                  <span
                    key={i}
                    ref={addReveal}
                    className={`scroll-animate hero-word word-delay-${i + 1}`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p
                ref={addReveal}
                className="scroll-animate reveal-up stagger-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-[48ch]"
              >
                Expert chartered accountancy that manages your finances, automates compliance workflows, and helps your business grow with complete transparency.
              </p>

              <div
                ref={addReveal}
                className="scroll-animate reveal-up stagger-4 flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-primary text-white hover:bg-primary/90 dark:bg-peach dark:text-primary dark:hover:bg-peach/90 transition-all duration-200 shadow-sm"
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>

              <div
                ref={addReveal}
                className="scroll-animate reveal-up stagger-5 hidden sm:flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200/80 dark:border-slate-700/80"
              >
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                  <span className="text-primary dark:text-peach"><Shield size={16} /></span>
                  <CountUp end={100} suffix="%" className="font-semibold text-slate-700 dark:text-slate-200" /> Compliance
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                  <span className="text-primary dark:text-peach"><TrendingUp size={16} /></span>
                  <CountUp end={10} suffix="+" className="font-semibold text-slate-700 dark:text-slate-200" /> Years
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                  <span className="text-primary dark:text-peach"><Users size={16} /></span>
                  <CountUp end={500} suffix="+" className="font-semibold text-slate-700 dark:text-slate-200" /> Clients
                </div>
              </div>
            </div>

            {/* ─── Right: Visual ─── */}
            <div className="hidden lg:block">
              <div
                ref={addReveal}
                className="scroll-animate reveal-scale stagger-2 relative w-full aspect-[4/3] rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-xl shadow-slate-200/60 dark:shadow-black/30"
              >
                <Image
                  src="/images/professional.png"
                  alt="Professional at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile stat row */}
            <div className="grid grid-cols-3 gap-3 sm:hidden">
              {[
                { stat: 500, suffix: "+", label: "Clients", bg: "bg-peach dark:bg-peach/15" },
                { stat: 100, suffix: "%", label: "Compliance", bg: "bg-soft-blue dark:bg-soft-blue/15" },
                { stat: 10, suffix: "+", label: "Years", bg: "bg-peach dark:bg-peach/15" },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  ref={addReveal}
                  className={`scroll-animate reveal-up stagger-${idx + 1} ${item.bg} rounded-[1rem] p-3 sm:p-4 text-center`}
                >
                  <p className="text-2xl font-bold text-primary dark:text-peach">
                    <CountUp end={item.stat} suffix={item.suffix} />
                  </p>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURE SHOWCASE
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-28 bg-white dark:bg-slate-950" id="showcase">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              ref={addReveal}
              className="scroll-animate reveal-left flex flex-col gap-6 max-w-xl"
            >
              <p className="text-sm font-medium text-primary dark:text-peach uppercase tracking-wide">
                Features at a Glance
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Professional services, simplified
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-[48ch]">
                From tax filings to company registrations, we handle every aspect of your financial compliance with precision, timeliness, and complete transparency.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: <Shield size={16} />, text: "Compliance" },
                  { icon: <TrendingUp size={16} />, text: "Growth" },
                  { icon: <Users size={16} />, text: "Support" },
                ].map((item) => (
                  <span
                    key={item.text}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-peach bg-slate-50 dark:bg-slate-800 rounded-full px-4 py-2 border border-slate-100 dark:border-slate-700"
                  >
                    {item.icon}
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Dashboard mock */}
            <div ref={addReveal} className="scroll-animate reveal-right">
              <div className="animate-float rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-black/30 overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 bg-primary">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="flex-1 text-center text-[11px] text-white/50 font-medium">service-dashboard</span>
                </div>
                <div className="p-5 bg-slate-50/50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white">
                      <Briefcase size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Service Dashboard</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">4 active services</p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {SERVICES.map((svc, i) => (
                      <div key={svc.category} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                        <div className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 text-primary dark:text-peach ${i % 2 === 0 ? "bg-peach dark:bg-peach/15" : "bg-soft-blue dark:bg-soft-blue/15"}`}>
                          {iconMap[svc.icon]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{svc.category}</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">{svc.items.length} services</p>
                        </div>
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full shrink-0">
                          <GitBranch size={10} />
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — Cards
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-28 bg-slate-50 dark:bg-slate-900" id="services-preview">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={addReveal}
            className="scroll-animate reveal-blur text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Our professional services
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Comprehensive financial solutions tailored to your business. Choose the service that fits your requirements.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card, idx) => (
              <div
                key={card.title}
                ref={addReveal}
                className={`scroll-animate reveal-scale stagger-${idx + 1} group rounded-2xl bg-white dark:bg-slate-800 overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-300 ${card.highlighted ? "ring-2 ring-primary/20 dark:ring-peach/20 shadow-lg" : ""}`}
              >
                <div className={`${card.headerBg} ${card.headerBgDark} p-5 sm:p-6 pb-6 sm:pb-7`}>
                  {card.highlighted && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white dark:bg-slate-900 text-primary dark:text-peach px-3 py-1 rounded-full mb-3">
                      Popular
                    </span>
                  )}
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-3 ${card.textWhite ? "bg-white/20 text-white" : "bg-white/60 dark:bg-white/10 text-primary dark:text-peach"}`}>
                    {card.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${card.textWhite ? "text-white" : "text-slate-900 dark:text-white"}`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm mt-1 ${card.textWhite ? "text-white/70" : "text-slate-600 dark:text-slate-300"}`}>
                    {card.subtitle}
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  <ul className="space-y-3">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle size={16} className="text-primary dark:text-peach shrink-0 mt-0.5" />
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className={`mt-7 flex items-center justify-center rounded-full py-3 text-sm font-semibold transition-all duration-200 ${card.highlighted
                      ? "bg-primary text-white hover:bg-primary/90 dark:bg-peach dark:text-primary dark:hover:bg-peach/90 shadow-sm"
                      : "border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                  >
                    {card.highlighted ? "Get Started" : "Learn More"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT CTA
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-28 bg-white dark:bg-slate-950" id="contact-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={addReveal}
            className="scroll-animate reveal-scale relative overflow-hidden rounded-2xl md:rounded-3xl bg-primary px-5 py-10 sm:px-8 sm:py-14 md:px-14 md:py-16"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-peach/15 blur-[80px] -mt-20 -mr-20 animate-blob-pulse pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-soft-blue/15 blur-[60px] -mb-16 -ml-16 animate-blob-pulse pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-[28px] leading-[1.1] sm:text-4xl font-semibold text-white tracking-tight">
                  Have a project in mind?
                </h2>
                <p className="mt-4 text-base text-white/60 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Write to us, we will respond promptly. Book a free consultation and let us simplify your compliance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="w-full sm:w-72 rounded-full bg-white/10 border border-white/15 px-5 py-3 sm:px-6 sm:py-3.5 text-sm text-white placeholder:text-white/30 font-medium outline-none focus:bg-white/15 focus:border-white/30 transition-all duration-200"
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-peach px-7 py-3.5 text-sm font-semibold text-primary hover:bg-peach/90 transition-all duration-200 shadow-sm shrink-0"
                >
                  <Send size={14} />
                  Send
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
