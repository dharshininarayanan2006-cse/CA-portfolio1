"use client";

import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();
    const { addReveal } = useScrollAnimations();

    return (
        <footer className="bg-primary text-white" id="footer">
            {/* Gradient top separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14 lg:px-8 lg:py-16">
                <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 md:grid-cols-3">
                    {/* Brand */}
                    <div ref={addReveal} className="scroll-animate reveal-up sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white font-bold text-sm border border-white/10">
                                VK
                            </span>
                            <div>
                                <p className="font-semibold leading-tight tracking-tight">
                                    {SITE_CONFIG.name}
                                </p>
                                <p className="text-[11px] text-white/50 font-medium">
                                    {SITE_CONFIG.role}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed max-w-sm font-normal">
                            {SITE_CONFIG.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div ref={addReveal} className="scroll-animate reveal-up stagger-2">
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-peach font-medium transition-colors"
                                    >
                                        {link.label}
                                        <ArrowUpRight
                                            size={12}
                                            className="opacity-0 -translate-y-0.5 transition-all group-hover:opacity-100"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div ref={addReveal} className="scroll-animate reveal-up stagger-3">
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-5">
                            Get in Touch
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-white/60">
                                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 shrink-0 mt-0.5">
                                    <MapPin size={14} className="text-peach" />
                                </div>
                                <span className="leading-relaxed font-normal">
                                    {SITE_CONFIG.address}
                                </span>
                            </li>
                            <li>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="flex items-center gap-3 text-sm text-white/60 hover:text-peach transition-colors"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 shrink-0">
                                        <Phone size={14} className="text-peach" />
                                    </div>
                                    <span className="font-medium">{SITE_CONFIG.phone}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${SITE_CONFIG.email}`}
                                    className="flex items-center gap-3 text-sm text-white/60 hover:text-peach transition-colors"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 shrink-0">
                                        <Mail size={14} className="text-peach" />
                                    </div>
                                    <span className="font-medium">{SITE_CONFIG.email}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    ref={addReveal}
                    className="scroll-animate reveal-up stagger-4 mt-14 border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
                >
                    <p className="text-xs text-white/30 font-medium">
                        © {year} {SITE_CONFIG.name}. All rights reserved.
                    </p>
                    <p className="text-xs text-white/20 font-medium">
                        Designed with care
                    </p>
                </div>
            </div>
        </footer>
    );
}
