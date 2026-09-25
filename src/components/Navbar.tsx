"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Settings } from "@carbon/icons-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get("lang") || "en";
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, setTheme, aaaLevel, setAAALevel } = useTheme();

  const translations = {
    en: { home: "Home", about: "About", work: "Work", lab: "Lab", resources: "Resources", contact: "Contact", settings: "Settings" },
    es: { home: "Inicio", about: "Sobre mí", work: "Proyectos", lab: "Lab", resources: "Recursos", contact: "Contacto", settings: "Ajustes" },
    jp: { home: "ホーム", about: "について", work: "作品", lab: "Lab", resources: "リソース", contact: "連絡先", settings: "設定" },
  };
  const t = translations[currentLocale as "en" | "es" | "jp"] || translations.en;

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "jp", label: "日本語" },
  ];

  const setLang = (code: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", code);
    router.push(`${pathname}?${params.toString()}`);
  };

  const navItemsLeft = [
    { href: `/?lang=${currentLocale}`, label: t.home, key: "home" },
    { href: `/?lang=${currentLocale}#projects`, label: t.work, key: "work" },
    { href: `/about?lang=${currentLocale}`, label: t.about, key: "about" },
  ];

  const navItemsRight = [
    { href: `/lab?lang=${currentLocale}`, label: t.lab, key: "lab" },
    { href: `/recursos?lang=${currentLocale}`, label: t.resources, key: "resources" },
    { href: `/?lang=${currentLocale}#contact`, label: t.contact, key: "contact" },
  ];

  const isActive = (href: string) => {
    const cleanHref = href.split("?")[0];
    if (cleanHref === "/") {
      return pathname === "/" && !window.location.hash;
    }
    if (cleanHref === "/about") return pathname === "/about";
    if (cleanHref === "/lab") return pathname.startsWith("/lab");
    if (cleanHref === "/recursos") return pathname === "/recursos";
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-[6px] bg-[rgba(255,255,255,0.96)] border-b border-[rgba(0,0,0,0.05)] ${isScrolled ? "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" : ""}`}
      aria-label="Main navigation"
    >
      <div className="h-full max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Left nav */}
        <nav className="flex gap-12 items-center" aria-label="Primary navigation">
          {navItemsLeft.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`relative py-[3px] px-0 font-ibm-plex text-[16px] text-black tracking-[1.28px] uppercase leading-none transition-colors ${isActive(item.href) ? "font-bold" : "font-regular"} hover:text-[var(--color-primary)]`}
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-black rounded-[2px]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Center name */}
        <Link
          href={`/?lang=${currentLocale}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-ibm-plex-bold font-bold text-[16px] text-black tracking-[1.28px] uppercase leading-none"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Daniel Rojas
        </Link>

        {/* Right nav + settings */}
        <div className="flex gap-5 items-center">
          <nav className="flex gap-5 items-center" aria-label="Secondary navigation">
            {navItemsRight.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`font-ibm-plex text-[16px] text-black tracking-[1.28px] uppercase leading-none transition-colors ${isActive(item.href) ? "font-bold" : "font-regular"} hover:text-[var(--color-primary)]`}
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="bg-[#f0f0f0] border border-[#666] flex items-center justify-center size-10 rounded-full"
            aria-label={t.settings}
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}