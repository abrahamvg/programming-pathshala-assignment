"use client";

import { useThemeStore } from "@/providers/ThemeProvider";

export default function WrappingComponent ({ children }: { children: React.ReactNode }) {
    const { theme } = useThemeStore((state) => state);
    return <div className={theme}>{children}</div>;
  };
  