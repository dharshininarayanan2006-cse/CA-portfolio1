"use client";

import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { SITE_CONFIG } from "@/lib/constants";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { addReveal } = useScrollAnimations();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const resData = await response.json();
                throw new Error(resData.error || "Failed to send message");
            }

            setSubmitted(true);
        } catch (err: any) {
            setError(err.message || "An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p
                        ref={addReveal}
                        className="scroll-animate reveal-blur text-sm font-medium uppercase tracking-wider text-white/60"
                    >
                        Reach Out
                    </p>
                    <h1
                        ref={addReveal}
                        className="scroll-animate reveal-blur stagger-1 mt-2 text-4xl font-semibold tracking-tight sm:text-5xl"
                    >
                        Contact Us
                    </h1>
                    <p
                        ref={addReveal}
                        className="scroll-animate reveal-up stagger-2 mt-4 max-w-2xl text-lg text-white/70 leading-relaxed"
                    >
                        Have questions or need professional financial guidance? We&apos;re
                        here to help.
                    </p>
                    <div
                        ref={addReveal}
                        className="scroll-animate reveal-left stagger-3 mt-8 h-px w-24 bg-white/20"
                    />
                </div>
            </section>

            {/* Contact Grid */}
            <section className="bg-white dark:bg-slate-950 py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-5">
                        {/* Left — Info Cards */}
                        <div className="lg:col-span-2 space-y-4">
                            {[
                                {
                                    icon: <MapPin size={20} />,
                                    title: "Visit Us",
                                    content: SITE_CONFIG.address,
                                    href: `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`,
                                },
                                {
                                    icon: <Phone size={20} />,
                                    title: "Call Us",
                                    content: SITE_CONFIG.phone,
                                    href: `tel:${SITE_CONFIG.phone}`,
                                },
                                {
                                    icon: <Mail size={20} />,
                                    title: "Email Us",
                                    content: SITE_CONFIG.email,
                                    href: `mailto:${SITE_CONFIG.email}`,
                                },
                                {
                                    icon: <Clock size={20} />,
                                    title: "Working Hours",
                                    content: "Mon – Sat: 9:30 AM – 6:30 PM",
                                    href: undefined,
                                },
                            ].map((item, idx) => (
                                <a
                                    key={item.title}
                                    ref={addReveal}
                                    href={item.href}
                                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className={`scroll-animate reveal-left stagger-${idx + 1} flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md dark:hover:shadow-black/30 transition-all duration-300 group`}
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 dark:bg-peach/10 text-primary dark:text-peach group-hover:bg-primary group-hover:text-white dark:group-hover:bg-peach dark:group-hover:text-primary transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                                        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{item.content}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Right — Form */}
                        <div
                            ref={addReveal}
                            className="scroll-animate reveal-right lg:col-span-3"
                        >
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm">
                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-peach/10 text-primary dark:text-peach">
                                            <Send size={28} />
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                            Message Sent!
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                                            Thank you for reaching out. We&apos;ll get back to you
                                            within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-6 text-sm font-semibold text-primary dark:text-peach hover:text-primary-light dark:hover:text-peach/80 transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                            Send a Message
                                        </h3>

                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1.5">
                                                    Full Name
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    placeholder="Your name"
                                                    className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-peach/20 focus:border-primary dark:focus:border-peach transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1.5">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    placeholder="you@example.com"
                                                    className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-peach/20 focus:border-primary dark:focus:border-peach transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1.5">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-peach/20 focus:border-primary dark:focus:border-peach transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1.5">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                required
                                                placeholder="How can we help you?"
                                                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-peach/20 focus:border-primary dark:focus:border-peach transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            id="contact-submit"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary text-white hover:bg-primary/90 dark:bg-peach dark:text-primary dark:hover:bg-peach/90 px-6 py-3 text-sm font-semibold shadow-sm transition-all duration-200 sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            <Send size={16} /> {isLoading ? "Sending..." : "Send Message"}
                                        </button>
                                        {error && (
                                            <p className="text-red-500 text-sm mt-2">{error}</p>
                                        )}
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
