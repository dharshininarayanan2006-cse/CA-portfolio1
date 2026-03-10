"use client";

import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "sticky top-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm"
                    : "bg-white dark:bg-slate-950 border-b border-slate-200/40 dark:border-slate-800/40"
            )}
        >
            <nav className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* ─── Left: Brand ─── */}
                <Link href="/" className="flex items-center gap-3" id="brand-logo">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                        VK
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg">
                        {SITE_CONFIG.name}
                    </span>
                </Link>

                {/* ─── Center: Nav links ─── */}
                <ul className="hidden sm:flex items-center gap-6 md:gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                id={`nav-${link.label.toLowerCase()}`}
                                className={clsx(
                                    "text-sm font-medium transition-colors duration-200",
                                    pathname === link.href
                                        ? "text-primary dark:text-peach"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* ─── Right: Theme toggle + CTA + Mobile toggle ─── */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Link
                        href="/contact"
                        id="nav-cta-btn"
                        className="hidden sm:inline-flex items-center rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium bg-primary text-white hover:bg-primary/90 dark:bg-peach dark:text-primary dark:hover:bg-peach/90 transition-all duration-200 shadow-sm"
                    >
                        Contact Me
                    </Link>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="sm:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        id="mobile-menu-btn"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* ─── Mobile Menu ─── */}
            <div
                className={clsx(
                    "sm:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800",
                    mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-t-0"
                )}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
                    <ul className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={clsx(
                                        "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                        pathname === link.href
                                            ? "bg-primary/5 dark:bg-peach/10 text-primary dark:text-peach font-semibold"
                                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="mt-2">
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold bg-primary text-white dark:bg-peach dark:text-primary"
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
