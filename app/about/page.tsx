"use client";

import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { ABOUT_TEXT, SITE_CONFIG } from "@/lib/constants";
import {
    Award,
    BookOpen,
    CheckCircle,
    GraduationCap,
    Target,
} from "lucide-react";

const values = [
    {
        icon: <Target size={24} />,
        title: "Precision",
        desc: "Every number matters. We ensure accuracy in all financial reporting and compliance filings.",
    },
    {
        icon: <Award size={24} />,
        title: "Integrity",
        desc: "Transparent, ethical practices are the cornerstone of every client relationship we build.",
    },
    {
        icon: <BookOpen size={24} />,
        title: "Knowledge",
        desc: "Continuously updated expertise in taxation laws, GST regulations, and compliance standards.",
    },
    {
        icon: <GraduationCap size={24} />,
        title: "Growth",
        desc: "We go beyond compliance to provide insights that drive sustainable business growth.",
    },
];

const qualifications = [
    "Chartered Accountancy (CA)",
    "Global Accounting Certifications",
    "Expert in Direct & Indirect Taxation",
    "GST Practitioner",
    "Business Compliance Specialist",
    "Financial Auditing & Consulting",
];

export default function AboutPage() {
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
                        Get to Know Us
                    </p>
                    <h1
                        ref={addReveal}
                        className="scroll-animate reveal-blur stagger-1 mt-2 text-4xl font-semibold tracking-tight sm:text-5xl"
                    >
                        About {SITE_CONFIG.name}
                    </h1>
                    <p
                        ref={addReveal}
                        className="scroll-animate reveal-up stagger-2 mt-4 max-w-2xl text-lg text-white/70 leading-relaxed"
                    >
                        {SITE_CONFIG.tagline}
                    </p>
                    <div
                        ref={addReveal}
                        className="scroll-animate reveal-left stagger-3 mt-8 h-px w-24 bg-white/20"
                    />
                </div>
            </section>

            {/* Bio */}
            <section className="bg-white dark:bg-slate-950 py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-5">
                        <div
                            ref={addReveal}
                            className="scroll-animate reveal-left lg:col-span-3"
                        >
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                                Professional Background
                            </h2>
                            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                                {ABOUT_TEXT}
                            </p>
                            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                Based in <strong className="text-slate-900 dark:text-white">Chennai</strong>, I work with businesses of all
                                sizes — from startups to established enterprises — helping them
                                navigate the complexities of Indian taxation and corporate
                                compliance with confidence.
                            </p>
                        </div>

                        <div
                            ref={addReveal}
                            className="scroll-animate reveal-right stagger-2 lg:col-span-2"
                        >
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                                    Qualifications & Expertise
                                </h3>
                                <ul className="space-y-3">
                                    {qualifications.map((q, i) => (
                                        <li
                                            key={q}
                                            ref={addReveal}
                                            className={`scroll-animate reveal-up stagger-${i + 1} flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400`}
                                        >
                                            <CheckCircle size={16} className="text-primary dark:text-peach shrink-0" />
                                            {q}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-slate-50 dark:bg-slate-900 py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        ref={addReveal}
                        className="scroll-animate reveal-blur text-center mb-12"
                    >
                        <p className="text-sm font-medium text-primary dark:text-peach uppercase tracking-wider">
                            What Drives Us
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((v, idx) => (
                            <div
                                key={v.title}
                                ref={addReveal}
                                className={`scroll-animate reveal-scale stagger-${idx + 1} group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 text-center shadow-sm hover:shadow-md dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300`}
                            >
                                <div
                                    ref={addReveal}
                                    className={`scroll-animate reveal-rotate stagger-${idx + 2} mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-peach/10 text-primary dark:text-peach group-hover:bg-primary group-hover:text-white dark:group-hover:bg-peach dark:group-hover:text-primary transition-colors duration-300`}
                                >
                                    {v.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{v.title}</h3>
                                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
