"use client";

import { ThemeProvider } from "@/hooks/useTheme";

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
