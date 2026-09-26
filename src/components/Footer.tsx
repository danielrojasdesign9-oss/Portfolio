"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Contrast } from "@carbon/icons-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import type { Locale } from "@/lib/utils-locale";

interface FooterProps {
  locale: Locale;
}

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "jp", label: "日本語" },
];

function FooterContent({ locale }: FooterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme, setTheme, aaaLevel, setAAALevel } = useTheme();

  const setLang = (code: string) => {
    if (!router || !searchParams) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", code);
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <footer className="border-t border-[#b8b8b8] py-10">
      <div className="max-w-[1400px] mx-auto px-8 flex items-center gap-12 flex-wrap">
        <p
          className="text-[var(--color-text-tertiary)] text-[11px] tracking-[4.4px] leading-[16.5px] uppercase flex-1 min-w-[200px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          © 2024 2026 ALL RIGHTS RESERVED
        </p>

        <div className="flex gap-6 items-center flex-wrap">
          {/* Theme */}
          <div className="flex gap-2 items-center pr-6 border-r border-[#b8b8b8]">
            <button
              className={`flex items-center justify-center p-2 rounded-full ${theme === "light" ? "bg-[var(--color-text-primary)]" : "text-[var(--color-text-primary)]"}`}
              onClick={() => setTheme("light")}
              aria-label="Light theme"
              aria-pressed={theme === "light"}
            >
              <Sun className={`w-4 h-4 ${theme === "light" ? "text-[var(--color-bg)]" : "text-[var(--color-text-primary)]"}`} />
            </button>
            <button
              className={`flex items-center justify-center p-2 rounded-full ${theme === "dark" ? "bg-[var(--color-text-primary)]" : "text-[var(--color-text-primary)]"}`}
              onClick={() => setTheme("dark")}
              aria-label="Dark theme"
              aria-pressed={theme === "dark"}
            >
              <Moon className={`w-4 h-4 ${theme === "dark" ? "text-[var(--color-bg)]" : "text-[var(--color-text-primary)]"}`} />
            </button>
            <button
              className={`flex items-center justify-center p-2 rounded-full ${theme === "system" ? "bg-[var(--color-text-primary)]" : "text-[var(--color-text-primary)]"}`}
              onClick={() => setTheme("system")}
              aria-label="System theme"
              aria-pressed={theme === "system"}
            >
              <Contrast className={`w-4 h-4 ${theme === "system" ? "text-[var(--color-bg)]" : "text-[var(--color-text-primary)]"}`} />
            </button>
          </div>

          {/* Language */}
          <div className="flex gap-2 items-center px-6 border-r border-[#b8b8b8]">
            {languages.map((l) => (
              <button
                key={l.code}
                className={`flex items-center justify-center px-4 py-[6px] rounded-full ${locale === l.code ? "bg-[var(--color-text-primary)] text-[var(--color-bg)]" : "text-[var(--color-text-primary)]"} `}
                onClick={() => setLang(l.code)}
                aria-label={l.label}
                aria-pressed={locale === l.code}
              >
                <span className="font-medium text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>{l.label}</span>
              </button>
            ))}
          </div>

          {/* Accessibility level */}
          <div className="flex gap-2 items-center pl-6">
            <button
              className={`flex items-center justify-center px-4 py-[6px] rounded-full ${aaaLevel === "AA" ? "bg-[var(--color-text-primary)] text-[var(--color-bg)]" : "text-[var(--color-text-primary)]"} `}
              onClick={() => setAAALevel("AA")}
              aria-label="Contrast: AA"
              aria-pressed={aaaLevel === "AA"}
            >
              <span className="font-medium text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>AA</span>
            </button>
            <button
              className={`flex items-center justify-center px-4 py-[6px] rounded-full ${aaaLevel === "AAA" ? "bg-[var(--color-text-primary)] text-[var(--color-bg)]" : "text-[var(--color-text-primary)]"} `}
              onClick={() => setAAALevel("AAA")}
              aria-label="Contrast: AAA"
              aria-pressed={aaaLevel === "AAA"}
            >
              <span className="font-medium text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>AAA</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer({ locale }: FooterProps) {
  return (
    <Suspense fallback={<footer className="border-t border-[#b8b8b8] py-10"><div className="max-w-[1400px] mx-auto px-8 h-8"></div></footer>}>
      <FooterContent locale={locale} />
    </Suspense>
  );
}