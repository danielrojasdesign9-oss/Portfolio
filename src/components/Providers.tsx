"use client";

import { GlobalTheme } from "@carbon/react";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <GlobalTheme theme="white">{children}</GlobalTheme>
    </ThemeProvider>
  );
}