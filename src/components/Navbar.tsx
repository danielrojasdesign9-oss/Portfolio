"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sun, Moon, Contrast, Close, Menu, Settings } from "@carbon/icons-react";
import { useTheme } from "@/components/ThemeProvider";
import SettingsToast from "@/components/SettingsToast";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get("lang") || "en";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hash, setHash] = useState<string>("");
  const [toast, setToast] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const { theme, setTheme, aaaLevel, setAAALevel } = useTheme();

  const translations = {
    en: { home: "Home", about: "About", work: "Work", lab: "Lab", recursos: "Resources", contact: "Contact", settings: "Settings", theme: "Theme", language: "Language", contrast: "Contrast", contrastOn: "Contrast: AAA", contrastOff: "Contrast: AA" },
    es: { home: "Inicio", about: "Sobre mí", work: "Proyectos", lab: "Lab", recursos: "Recursos", contact: "Contacto", settings: "Ajustes", theme: "Tema", language: "Idioma", contrast: "Contraste", contrastOn: "Contraste: AAA", contrastOff: "Contraste: AA" },
    jp: { home: "ホーム", about: "について", work: "作品", lab: "Lab", recursos: "リソース", contact: "連絡先", settings: "設定", theme: "テーマ", language: "言語", contrast: "コントラスト", contrastOn: "コントラスト: AAA", contrastOff: "コントラスト: AA" },
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

  const handleMenuClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleThemeChange = (value: "light" | "dark" | "system") => {
    setTheme(value);
  };

  const handleAAALevel = (level: "AA" | "AAA") => {
    setAAALevel(level);
    setToast(level === "AAA" ? t.contrastOn : t.contrastOff);
    window.setTimeout(() => setToast(null), 2200);
  };

  const handleAAAToggle = () => {
    handleAAALevel(aaaLevel === "AA" ? "AAA" : "AA");
  };

  const navItems = [
    { href: `/?lang=${currentLocale}`, label: t.home, key: "home", exact: true },
    { href: `/?lang=${currentLocale}#projects`, label: t.work, key: "work", hash: "projects" },
    { href: `/about?lang=${currentLocale}`, label: t.about, key: "about", exact: true },
    { href: `/lab?lang=${currentLocale}`, label: t.lab, key: "lab", startsWith: true },
    // { href: `/recursos?lang=${currentLocale}`, label: t.recursos, key: "recursos", exact: true },
    { href: `/?lang=${currentLocale}#contact`, label: t.contact, key: "contact", hash: "contact" },
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.key === "home") {
      return pathname === "/" && hash !== "#contact" && hash !== "#projects";
    }
    if (item.hash) {
      return pathname === "/" && hash === `#${item.hash}`;
    }
    if (item.exact) return pathname === item.href.split("?")[0];
    if (item.startsWith) return pathname.startsWith(item.href.split("?")[0]);
    return pathname === item.href.split("?")[0];
  };

  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastScrollY ? "down" : "up";

      if (currentY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentY > 100 && direction === "down") {
        setIsHidden(true);
      } else if (direction === "up") {
        setIsHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, reducedMotion]);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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


  // Mobile drawer focus trap + Escape key
  useEffect(() => {
    if (!isMobileOpen) return;

    const drawer = drawerRef.current;
    if (!drawer) return;

    // Save previously focused element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Get all focusable elements in drawer
    const focusableElements = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Focus first element
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsMobileOpen(false);
        return;
      }

      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab: going backwards
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          // Tab: going forwards
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
      // Restore focus to previously active element
      previousActiveElement.current?.focus();
    };
  }, [isMobileOpen]);

  return (
    <>
    <motion.div
      ref={headerRef}
      className="portfolio-header-shell"
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
        <header
          aria-label="Daniel Rojas"
          className={`portfolio-header ${isScrolled ? "scrolled" : ""}`}
        >
          {/* Left nav items */}
          <nav className="portfolio-header__nav portfolio-header__nav--left" aria-label="Main navigation">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`portfolio-header__menu-item ${isActive(item) ? "active" : ""}`}
                aria-current={isActive(item) ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Centered logo */}
          <Link
            href={`/?lang=${currentLocale}`}
            className="portfolio-header__name portfolio-header__name--center"
          >
            Daniel Rojas
          </Link>

          {/* Right nav items + settings macro menu */}
          <nav className="portfolio-header__nav portfolio-header__nav--right" aria-label="Main navigation">
            <div className="portfolio-header__nav-items">
              {navItems.slice(3).map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`portfolio-header__menu-item ${isActive(item) ? "active" : ""}`}
                  aria-current={isActive(item) ? "page" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Settings Macro Menu - horizontal inline */}
            <div className="portfolio-header__settings-macro" ref={settingsRef}>
              <button
                className="portfolio-header__settings-trigger"
                onClick={handleSettingsClick}
                aria-label={t.settings}
                aria-expanded={isSettingsOpen}
                aria-haspopup="dialog"
              >
                <Settings className="w-5 h-5" />
              </button>

              {/* Settings Popover - horizontal layout */}
              <AnimatePresence>
              {isSettingsOpen && (
                <motion.div
                  className="portfolio-header__settings-popover"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2, ease: [0.4, 0, 0.2, 1] }}
                  role="dialog"
                  aria-label={t.settings}
                >
                  <div className="portfolio-header__settings-row">
                    {/* Theme Toggle */}
                    <div className="portfolio-header__setting-item">
                      <span className="portfolio-header__setting-label">{t.theme}</span>
                      <div className="portfolio-header__setting-control">
                        <button
                          className={`portfolio-header__theme-btn ${theme === "light" ? "active" : ""}`}
                          onClick={() => handleThemeChange("light")}
                          aria-label="Light theme"
                          aria-pressed={theme === "light"}
                        >
                          <Sun className="w-4 h-4" />
                        </button>
                        <button
                          className={`portfolio-header__theme-btn ${theme === "dark" ? "active" : ""}`}
                          onClick={() => handleThemeChange("dark")}
                          aria-label="Dark theme"
                          aria-pressed={theme === "dark"}
                        >
                          <Moon className="w-4 h-4" />
                        </button>
                        <button
                          className={`portfolio-header__theme-btn ${theme === "system" ? "active" : ""}`}
                          onClick={() => handleThemeChange("system")}
                          aria-label="System theme"
                          aria-pressed={theme === "system"}
                        >
                          <Contrast className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="portfolio-header__settings-divider" />

                    {/* Language Selector */}
                    <div className="portfolio-header__setting-item">
                      <span className="portfolio-header__setting-label">{t.language}</span>
                      <div className="portfolio-header__setting-control">
                        {languages.map((l) => (
                          <button
                            key={l.code}
                            className={`portfolio-header__lang-btn ${currentLocale === l.code ? "active" : ""}`}
                            onClick={() => setLang(l.code)}
                            aria-label={l.label}
                            aria-pressed={currentLocale === l.code}
                          >
                            {l.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="portfolio-header__settings-divider" />

                    {/* AAA Toggle */}
                    <div className="portfolio-header__setting-item">
                      <span className="portfolio-header__setting-label">{t.contrast}</span>
                      <div className="portfolio-header__setting-control">
                        <button
                          className={`portfolio-header__aaa-btn ${aaaLevel === "AA" ? "active" : ""}`}
                          onClick={() => handleAAALevel("AA")}
                          aria-label={`Contrast: AA`}
                          aria-pressed={aaaLevel === "AA"}
                        >
                          AA
                        </button>
                        <button
                          className={`portfolio-header__aaa-btn ${aaaLevel === "AAA" ? "active" : ""}`}
                          onClick={() => handleAAALevel("AAA")}
                          aria-label={`Contrast: AAA`}
                          aria-pressed={aaaLevel === "AAA"}
                        >
                          AAA
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>

            <button
              className="portfolio-header__mobile-toggle"
              onClick={handleMenuClick}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <Close /> : <Menu />}
            </button>
          </nav>
        </header>
      </motion.div>

      {/* Mobile Drawer */}
      <motion.aside
        ref={drawerRef}
        className="portfolio-mobile-drawer"
        initial={{ x: "100%" }}
        animate={{ x: isMobileOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        aria-label="Mobile navigation"
      >
        <div className="portfolio-mobile-drawer__header">
          <Link
            href={`/?lang=${currentLocale}`}
            className="portfolio-mobile-drawer__name"
            onClick={() => setIsMobileOpen(false)}
          >
            Daniel Rojas
          </Link>
          <button
            className="portfolio-mobile-drawer__close"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          >
            <Close />
          </button>
        </div>
        <nav className="portfolio-mobile-drawer__nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`portfolio-mobile-drawer__link ${isActive(item) ? "active" : ""}`}
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="portfolio-mobile-drawer__lang">
            {languages.map((l) => (
              <button
                key={l.code}
                className={`portfolio-mobile-drawer__lang-btn ${currentLocale === l.code ? "active" : ""}`}
                onClick={() => setLang(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
          <div className="portfolio-mobile-drawer__settings">
            <button
              className="theme-toggle"
              onClick={() => handleThemeChange(
                theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
              )}
              aria-label={`Current theme: ${theme}. Click to cycle.`}
            >
              {theme === "light" && <Sun />}
              {theme === "dark" && <Moon />}
              {theme === "system" && <Contrast />}
            </button>
            <button
              className="aaa-toggle"
              onClick={handleAAAToggle}
              aria-label={`Accessibility level: ${aaaLevel}. Click to toggle.`}
              aria-pressed={aaaLevel === "AAA"}
            >
              <Contrast />
              <span>AA{aaaLevel === "AAA" ? "A" : ""}</span>
            </button>
          </div>
        </nav>
      </motion.aside>

      {/* Backdrop */}
      {isMobileOpen && (
        <motion.div
          className="portfolio-mobile-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <SettingsToast message={toast} />
    </>
  );
}