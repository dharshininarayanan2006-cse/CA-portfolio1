import { ABOUT_TEXT, SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `About | ${SITE_CONFIG.name}`,
    description: ABOUT_TEXT.slice(0, 155),
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
