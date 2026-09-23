"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Contrast } from "@carbon/icons-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import type { Locale } from "@/lib/utils-locale";

interface FooterProps {
  locale: Locale;
}

const footerText = {
  en: "2026 ALL RIGHTS RESERVED",
  es: "2026 TODOS LOS DERECHOS RESERVADOS",
  jp: "2026 全著作権所有",
};

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
    <footer className="py-10 px-4 md:px-8 border-t border-[var(--color-border-subtle)] mt-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <p className="text-[11px] tracking-[0.4em] text-[var(--color-text-tertiary)] text-center md:text-left">
            © {new Date().getFullYear()} {footerText[locale] || footerText.en}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 md:divide-x md:divide-[var(--color-border-subtle)]">
            {/* Theme Toggle */}
            <div className="flex items-center gap-2 md:pr-6" role="group" aria-label="Theme selection">
              <button
                className={`h-9 w-9 rounded-full border transition-colors flex items-center justify-center ${
                  theme === "light"
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-on-primary)]"
                    : "bg-[var(--color-bg-sunken)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)]"
                }`}
                onClick={() => setTheme("light")}
                aria-pressed={theme === "light"}
                aria-label="Light theme"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                className={`h-9 w-9 rounded-full border transition-colors flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-on-primary)]"
                    : "bg-[var(--color-bg-sunken)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)]"
                }`}
                onClick={() => setTheme("dark")}
                aria-pressed={theme === "dark"}
                aria-label="Dark theme"
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                className={`h-9 w-9 rounded-full border transition-colors flex items-center justify-center ${
                  theme === "system"
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-on-primary)]"
                    : "bg-[var(--color-bg-sunken)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)]"
                }`}
                onClick={() => setTheme("system")}
                aria-pressed={theme === "system"}
                aria-label="System theme"
              >
                <Contrast className="w-4 h-4" />
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2 md:px-6" role="group" aria-label="Language selection">
              {languages.map((l) => (
                <button
                  key={l.code}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    locale === l.code
                      ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-on-primary)]"
                      : "bg-[var(--color-bg-sunken)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)]"
                  }`}
                  onClick={() => setLang(l.code)}
                  aria-pressed={locale === l.code}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* AAA Toggle */}
            <div className="flex items-center gap-2 md:pl-6" role="group" aria-label="Accessibility contrast level">
              <button
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  aaaLevel === "AA"
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-on-primary)]"
                    : "bg-[var(--color-bg-sunken)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)]"
                }`}
                onClick={() => setAAALevel("AA")}
                aria-pressed={aaaLevel === "AA"}
              >
                AA
              </button>
              <button
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  aaaLevel === "AAA"
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-on-primary)]"
                    : "bg-[var(--color-bg-sunken)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)]"
                }`}
                onClick={() => setAAALevel("AAA")}
                aria-pressed={aaaLevel === "AAA"}
              >
                AAA
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer({ locale }: FooterProps) {
  return (
    <Suspense fallback={<footer className="py-10 px-4 md:px-8 border-t border-[var(--color-border-subtle)] mt-24"><div className="max-w-[1400px] mx-auto h-8"></div></footer>}>
      <FooterContent locale={locale} />
    </Suspense>
  );
}