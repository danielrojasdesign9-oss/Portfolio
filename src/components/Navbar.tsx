"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Settings, Menu, Close, Sun, Moon, Contrast } from "@carbon/icons-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get("lang") || "en";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

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
    setIsMobileOpen(false);
    setIsSettingsOpen(false);
  };

  // Desktop nav items - Home and Resources hidden
  const navItemsDesktopLeft = [
    { href: `/?lang=${currentLocale}#projects`, label: t.work, key: "work" },
    { href: `/about?lang=${currentLocale}`, label: t.about, key: "about" },
  ];

  const navItemsDesktopRight = [
    { href: `/lab?lang=${currentLocale}`, label: t.lab, key: "lab" },
    { href: `/?lang=${currentLocale}#contact`, label: t.contact, key: "contact" },
  ];

  // Mobile drawer items
  const navItemsMobile = [
    { href: `/?lang=${currentLocale}`, label: t.home, key: "home" },
    { href: `/?lang=${currentLocale}#projects`, label: t.work, key: "work" },
    { href: `/about?lang=${currentLocale}`, label: t.about, key: "about" },
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

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleMenuClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close settings popover on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsSettingsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Mobile drawer focus trap
  useEffect(() => {
    if (!isMobileOpen) return;

    const drawer = drawerRef.current;
    if (!drawer) return;

    previousActiveElement.current = document.activeElement as HTMLElement;

    const focusableElements = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsMobileOpen(false);
        return;
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousActiveElement.current?.focus();
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.div
        className="portfolio-header-shell"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <header
          className={`fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-[6px] bg-[rgba(255,255,255,0.96)] border-b border-[rgba(0,0,0,0.05)] ${isScrolled ? "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" : ""}`}
          aria-label="Main navigation"
        >
          <div className="h-full max-w-[1400px] mx-auto px-6 flex items-center justify-between relative">
            {/* Left nav - desktop */}
            <nav className="hidden md:flex gap-12 items-center" aria-label="Primary navigation">
              {navItemsDesktopLeft.map((item) => (
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

            {/* Right section: desktop settings + mobile hamburger (on RIGHT) */}
            <div className="flex items-center gap-5 w-full md:w-auto justify-end md:justify-start">
              {/* Right nav - desktop */}
              <nav className="hidden md:flex gap-5 items-center" aria-label="Secondary navigation">
                {navItemsDesktopRight.map((item) => (
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

              {/* Desktop Settings Popover */}
              <div className="hidden md:block relative" ref={settingsRef}>
                <button
                  className="bg-[#f0f0f0] border border-[#666] flex items-center justify-center size-10 rounded-full"
                  onClick={handleSettingsClick}
                  aria-label={t.settings}
                  aria-expanded={isSettingsOpen}
                  aria-haspopup="dialog"
                >
                  <Settings className="w-5 h-5" />
                </button>

                <AnimatePresence>
                  {isSettingsOpen && (
                    <motion.div
                      className="absolute right-0 top-full mt-3 w-[460px] bg-white border border-[#222] rounded-[12px] shadow-xl p-5 z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      role="dialog"
                      aria-label={t.settings}
                    >
                      <div className="flex flex-col gap-5">
                        {/* Theme */}
                        <div>
                          <span className="font-ibm-plex-bold font-bold text-[#444] text-[11px] tracking-[1.28px] uppercase leading-none block mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>Theme</span>
                          <div className="flex gap-2">
                            <button
                              className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${theme === "light" ? "bg-black border-black text-white" : "bg-[#f0f0f0] border-[#666] text-black"} `}
                              onClick={() => setTheme("light")}
                              aria-label="Light theme"
                              aria-pressed={theme === "light"}
                            >
                              <Sun className="w-4 h-4" />
                            </button>
                            <button
                              className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${theme === "dark" ? "bg-black border-black text-white" : "bg-[#f0f0f0] border-[#666] text-black"} `}
                              onClick={() => setTheme("dark")}
                              aria-label="Dark theme"
                              aria-pressed={theme === "dark"}
                            >
                              <Moon className="w-4 h-4" />
                            </button>
                            <button
                              className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${theme === "system" ? "bg-black border-black text-white" : "bg-[#f0f0f0] border-[#666] text-black"} `}
                              onClick={() => setTheme("system")}
                              aria-label="System theme"
                              aria-pressed={theme === "system"}
                            >
                              <Contrast className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="border-t border-[#b8b8b8] pt-3" />

                        {/* Language */}
                        <div>
                          <span className="font-ibm-plex-bold font-bold text-[#444] text-[11px] tracking-[1.28px] uppercase leading-none block mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>Language</span>
                          <div className="flex gap-2 flex-wrap">
                            {languages.map((l) => (
                              <button
                                key={l.code}
                                className={`flex items-center justify-center px-4 py-[6px] rounded-full ${currentLocale === l.code ? "bg-black text-white" : "bg-[#f0f0f0] border border-[#666] text-[#111]"} `}
                                onClick={() => setLang(l.code)}
                                aria-label={l.label}
                                aria-pressed={currentLocale === l.code}
                              >
                                <span className="font-ibm-plex-medium font-medium text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>{l.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-[#b8b8b8] pt-3" />

                        {/* Accessibility */}
                        <div>
                          <span className="font-ibm-plex-bold font-bold text-[#444] text-[11px] tracking-[1.28px] uppercase leading-none block mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>Contrast</span>
                          <div className="flex gap-2">
                            <button
                              className={`flex items-center justify-center px-4 py-[6px] rounded-full ${aaaLevel === "AA" ? "bg-black text-white" : "bg-[#f0f0f0] border border-[#666] text-[#111]"} `}
                              onClick={() => setAAALevel("AA")}
                              aria-label="Contrast: AA"
                              aria-pressed={aaaLevel === "AA"}
                            >
                              <span className="font-ibm-plex-medium font-medium text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>AA</span>
                            </button>
                            <button
                              className={`flex items-center justify-center px-4 py-[6px] rounded-full ${aaaLevel === "AAA" ? "bg-black text-white" : "bg-[#f0f0f0] border border-[#666] text-[#111]"} `}
                              onClick={() => setAAALevel("AAA")}
                              aria-label="Contrast: AAA"
                              aria-pressed={aaaLevel === "AAA"}
                            >
                              <span className="font-ibm-plex-medium font-medium text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>AAA</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile menu toggle - explicitly on the right */}
              <button
                className="md:hidden bg-[#f0f0f0] border border-[#666] flex items-center justify-center size-10 rounded-full ml-auto"
                onClick={handleMenuClick}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <Close className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.3)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.aside
        ref={drawerRef}
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[320px] bg-white border-l border-[#b8b8b8] md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: isMobileOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-[#b8b8b8]">
            <Link
              href={`/?lang=${currentLocale}`}
              className="font-ibm-plex-bold font-bold text-[20px] text-black tracking-[1.6px] uppercase"
              style={{ fontVariationSettings: '"wdth" 100' }}
              onClick={() => setIsMobileOpen(false)}
            >
              Daniel Rojas
            </Link>
            <button
              className="p-2"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <Close className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 p-5 space-y-4 overflow-y-auto" aria-label="Mobile navigation">
            {navItemsMobile.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`flex items-center py-4 px-5 rounded-[8px] font-ibm-plex text-[14px] text-black tracking-[1.12px] uppercase transition-colors ${isActive(item.href) ? "bg-black text-white font-bold" : "text-black hover:bg-[#f0f0f0] font-regular"} `}
                style={{ fontVariationSettings: '"wdth" 100' }}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#b8b8b8] space-y-4">
              {/* Theme */}
              <div>
                <span className="font-ibm-plex-bold font-bold text-[#444] text-[11px] tracking-[1.28px] uppercase leading-none block mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>Theme</span>
                <div className="flex gap-2">
                  <button
                    className={`flex-1 flex items-center justify-center py-2 rounded-full border transition-colors ${theme === "light" ? "bg-black border-black text-white" : "bg-[#f0f0f0] border-[#666] text-black"} `}
                    onClick={() => setTheme("light")}
                    aria-label="Light theme"
                    aria-pressed={theme === "light"}
                  >
                    <Sun className="w-4 h-4" />
                  </button>
                  <button
                    className={`flex-1 flex items-center justify-center py-2 rounded-full border transition-colors ${theme === "dark" ? "bg-black border-black text-white" : "bg-[#f0f0f0] border-[#666] text-black"} `}
                    onClick={() => setTheme("dark")}
                    aria-label="Dark theme"
                    aria-pressed={theme === "dark"}
                  >
                    <Moon className="w-4 h-4" />
                  </button>
                  <button
                    className={`flex-1 flex items-center justify-center py-2 rounded-full border transition-colors ${theme === "system" ? "bg-black border-black text-white" : "bg-[#f0f0f0] border-[#666] text-black"} `}
                    onClick={() => setTheme("system")}
                    aria-label="System theme"
                    aria-pressed={theme === "system"}
                  >
                    <Contrast className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="border-t border-[#b8b8b8] pt-4" />

              {/* Language */}
              <div>
                <span className="font-ibm-plex-bold font-bold text-[#444] text-[11px] tracking-[1.28px] uppercase leading-none block mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>Language</span>
                <div className="flex flex-col gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      className={`w-full flex items-center justify-center px-4 py-[10px] rounded-[8px] ${currentLocale === l.code ? "bg-black text-white" : "bg-[#f0f0f0] border border-[#666] text-[#111]"} `}
                      onClick={() => setLang(l.code)}
                      aria-label={l.label}
                      aria-pressed={currentLocale === l.code}
                    >
                      <span className="font-ibm-plex-medium font-medium text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>{l.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#b8b8b8] pt-4" />

              {/* Accessibility */}
              <div>
                <span className="font-ibm-plex-bold font-bold text-[#444] text-[11px] tracking-[1.28px] uppercase leading-none block mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>Contrast</span>
                <div className="flex gap-2">
                  <button
                    className={`flex-1 flex items-center justify-center px-4 py-[10px] rounded-[8px] ${aaaLevel === "AA" ? "bg-black text-white" : "bg-[#f0f0f0] border border-[#666] text-[#111]"} `}
                    onClick={() => setAAALevel("AA")}
                    aria-label="Contrast: AA"
                    aria-pressed={aaaLevel === "AA"}
                  >
                    <span className="font-ibm-plex-medium font-medium text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>AA</span>
                  </button>
                  <button
                    className={`flex-1 flex items-center justify-center px-4 py-[10px] rounded-[8px] ${aaaLevel === "AAA" ? "bg-black text-white" : "bg-[#f0f0f0] border border-[#666] text-[#111]"} `}
                    onClick={() => setAAALevel("AAA")}
                    aria-label="Contrast: AAA"
                    aria-pressed={aaaLevel === "AAA"}
                  >
                    <span className="font-ibm-plex-medium font-medium text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>AAA</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </motion.aside>
    </>
  );
}