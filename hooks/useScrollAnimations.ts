"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Shared scroll-animation hook.
 *
 * Attach `ref={addReveal}` to any element, then add one or more CSS
 * animation classes like `reveal-up`, `reveal-left`, `reveal-blur`, etc.
 *
 * The hook uses a *single* IntersectionObserver and triggers once per element.
 * On mobile (≤ 640 px) animations are slightly simplified for perf.
 */
export function useScrollAnimations() {
    const elems = useRef<Set<HTMLElement>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 640;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observerRef.current?.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: isMobile ? 0.05 : 0.12,
                rootMargin: isMobile ? "0px 0px -30px 0px" : "0px 0px -60px 0px",
            }
        );

        elems.current.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    /**
     * Ref-callback — attach to any element you want to animate on scroll.
     * Use with one of the reveal-* CSS classes.
     */
    const addReveal = useCallback((el: HTMLElement | null) => {
        if (!el || elems.current.has(el)) return;
        elems.current.add(el);
        // If observer already exists (effect has run), observe immediately
        observerRef.current?.observe(el);
    }, []);

    return { addReveal };
}
