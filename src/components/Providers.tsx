"use client";

import { GlobalTheme } from "@carbon/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <GlobalTheme theme="white">{children}</GlobalTheme>;
}
