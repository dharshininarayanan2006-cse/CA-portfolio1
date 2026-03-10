import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Services | ${SITE_CONFIG.name}`,
    description:
        "Comprehensive tax, GST, auditing, business registration, and accounting services in Chennai.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
