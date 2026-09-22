"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Globe, Contrast } from "@carbon/icons-react";
import { useState, useRef, useEffect } from "react";
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

export default function Footer({ locale }: FooterProps) {
  const router = typeof window !== "undefined" ? require("next/navigation").useRouter() : null;
  const searchParams = typeof window !== "undefined" ? require("next/navigation").useSearchParams() : null;
  const { aaaLevel, setAAALevel } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const setLang = (code: string) => {
    if (!router || !searchParams) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", code);
    router.push(`${window.location.pathname}?${params.toString()}`);
    setLangOpen(false);
  };

  const handleAAAToggle = () => {
    setAAALevel(aaaLevel === "AA" ? "AAA" : "AA");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="py-10 px-4 md:px-8 border-t border-[var(--color-border-subtle)] mt-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] tracking-[0.4em] text-[var(--color-text-tertiary)]">
            © {new Date().getFullYear()} {footerText[locale] || footerText.en}
          </p>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="lang-selector" ref={langRef}>
              <button
                className="lang-selector__trigger"
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Select language"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <Globe className="w-4 h-4" />
                <span>{locale.toUpperCase()}</span>
              </button>
              <div className={`lang-selector__dropdown ${langOpen ? "open" : ""}`} role="listbox">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    className={`lang-selector__option ${locale === l.code ? "active" : ""}`}
                    onClick={() => setLang(l.code)}
                    role="option"
                    aria-selected={locale === l.code}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* AAA Toggle */}
            <button
              className="aaa-toggle"
              onClick={() => setAAALevel(aaaLevel === "AA" ? "AAA" : "AA")}
              aria-label={`Accessibility level: ${aaaLevel}. Click to toggle.`}
              aria-pressed={aaaLevel === "AAA"}
            >
              <Contrast className="w-4 h-4" />
              <span>AA{aaaLevel === "AAA" ? "A" : ""}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}