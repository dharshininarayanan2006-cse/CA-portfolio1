"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    /** The target number (e.g. 500, 100, 10) */
    end: number;
    /** Optional suffix (e.g. "+", "%") */
    suffix?: string;
    /** Animation duration in ms — defaults to 1800 */
    duration?: number;
    /** Extra classes for the wrapper span */
    className?: string;
}

/**
 * Animates a number from 0 → `end` using an ease-out curve.
 * Triggers only once when the element scrolls into view.
 */
export default function CountUp({
    end,
    suffix = "",
    duration = 1800,
    className = "",
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(0);
    const hasRun = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasRun.current) {
                    hasRun.current = true;
                    observer.disconnect();

                    const start = performance.now();
                    const step = (now: number) => {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        // ease-out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setValue(Math.round(eased * end));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref} className={className}>
            {value}
            {suffix}
        </span>
    );
}
