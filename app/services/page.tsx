"use client";

import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { SERVICES } from "@/lib/constants";
import {
    ArrowRight,
    Building2,
    Calculator,
    CheckCircle,
    FileText,
    Receipt,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
    receipt: <Receipt size={28} />,
    "file-text": <FileText size={28} />,
    "building-2": <Building2 size={28} />,
    calculator: <Calculator size={28} />,
};

export default function ServicesPage() {
    const { addReveal } = useScrollAnimations();

    return (
        <>
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p
                        ref={addReveal}
                        className="scroll-animate reveal-blur text-sm font-medium uppercase tracking-wider text-white/60"
                    >
                        What We Do
                    </p>
                    <h1
                        ref={addReveal}
                        className="scroll-animate reveal-blur stagger-1 mt-2 text-4xl font-semibold tracking-tight sm:text-5xl"
                    >
                        Our Services
                    </h1>
                    <p
                        ref={addReveal}
                        className="scroll-animate reveal-up stagger-2 mt-4 max-w-2xl text-lg text-white/70 leading-relaxed"
                    >
                        From tax filings to business registrations, we provide end‑to‑end
                        financial solutions to help your business stay compliant and grow.
                    </p>
                    <div
                        ref={addReveal}
                        className="scroll-animate reveal-left stagger-3 mt-8 h-px w-24 bg-white/20"
                    />
                </div>
            </section>

            {/* Service Cards */}
            <section className="bg-white dark:bg-slate-950 py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2">
                        {SERVICES.map((svc, idx) => (
                            <div
                                key={svc.category}
                                ref={addReveal}
                                className={`scroll-animate ${idx % 2 === 0 ? "reveal-left" : "reveal-right"} stagger-${idx + 1} group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-lg dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300`}
                            >
                                <div
                                    ref={addReveal}
                                    className={`scroll-animate reveal-rotate stagger-${idx + 2} mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-peach/10 text-primary dark:text-peach group-hover:bg-primary group-hover:text-white dark:group-hover:bg-peach dark:group-hover:text-primary transition-colors duration-300`}
                                >
                                    {iconMap[svc.icon]}
                                </div>
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    {svc.category}
                                </h2>
                                <ul className="mt-4 space-y-2.5">
                                    {svc.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400"
                                        >
                                            <CheckCircle size={16} className="text-primary dark:text-peach shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-50 dark:bg-slate-900 py-16 md:py-24 lg:py-28">
                <div
                    ref={addReveal}
                    className="scroll-animate reveal-blur mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center"
                >
                    <h2 className="text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
                        Need a Custom Solution?
                    </h2>
                    <p className="mt-3 text-slate-500 dark:text-slate-400 leading-relaxed">
                        Every business is unique. Reach out to discuss your specific
                        requirements and we&apos;ll craft a tailored service package.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-white hover:bg-primary/90 dark:bg-peach dark:text-primary dark:hover:bg-peach/90 px-8 py-3.5 text-sm font-semibold shadow-sm transition-all duration-200"
                    >
                        Get in Touch <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </>
    );
}
