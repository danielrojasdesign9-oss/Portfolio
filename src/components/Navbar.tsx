"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  Header,
  HeaderNavigation,
  HeaderMenuItem,
  OverflowMenu,
  OverflowMenuItem,
} from "@carbon/react";
import { Earth, Close, Menu, Sun, Moon, Contrast, Globe } from "@carbon/icons-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get("lang") || "en";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [langOpen, setLangOpen] = useState(false);
  const [hash, setHash] = useState<string>("");
  const reducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme, aaaLevel, setAAALevel, resolvedTheme } = useTheme();

  const { scrollY } = useScroll({
    target: headerRef,
  });

  const translations = {
    en: { home: "Home", about: "About", work: "Work", lab: "Lab", recursos: "Resources", contact: "Contact" },
    es: { home: "Inicio", about: "Sobre mí", work: "Proyectos", lab: "Lab", recursos: "Recursos", contact: "Contacto" },
    jp: { home: "ホーム", about: "について", work: "作品", lab: "Lab", recursos: "リソース", contact: "連絡先" },
  };
  const t = translations[currentLocale as "en" | "es" | "jp"] || translations.en;

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "jp", label: "日本語" },
  ];

  const themes: { value: "light" | "dark" | "system"; label: string; icon: React.ReactNode }[] = [
    { value: "light", label: "Light", icon: <Sun /> },
    { value: "dark", label: "Dark", icon: <Moon /> },
    { value: "system", label: "System", icon: <Contrast /> },
  ];

  const setLang = (code: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", code);
    router.push(`${pathname}?${params.toString()}`);
    setIsMobileOpen(false);
    setLangOpen(false);
  };

  const handleMenuClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleLangClick = () => {
    setLangOpen(!langOpen);
  };

  const handleThemeChange = (value: "light" | "dark" | "system") => {
    setTheme(value);
  };

  const handleAAAToggle = () => {
    setAAALevel(aaaLevel === "AA" ? "AAA" : "AA");
  };

  const navItems = [
    { href: `/?lang=${currentLocale}`, label: t.home, key: "home", exact: true },
    { href: `/?lang=${currentLocale}#projects`, label: t.work, key: "work", hash: "projects" },
    { href: `/about?lang=${currentLocale}`, label: t.about, key: "about", exact: true },
    { href: `/lab?lang=${currentLocale}`, label: t.lab, key: "lab", startsWith: true },
    { href: `/recursos?lang=${currentLocale}`, label: t.recursos, key: "recursos", exact: true },
    { href: `/?lang=${currentLocale}#contact`, label: t.contact, key: "contact", hash: "contact" },
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.key === "home") {
      return pathname === "/" && !["#projects", "#contact"].includes(hash);
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
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const yTransform = useTransform(scrollY, [0, 50], [0, -100]);

  return (
    <>
      <motion.div
        ref={headerRef}
        className="portfolio-header"
        style={{ y: reducedMotion ? 0 : yTransform }}
        initial={{ y: -100 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <Header
          aria-label="Daniel Rojas"
          className={`portfolio-header ${isScrolled ? "scrolled" : ""}`}
        >
          <Link
            href={`/?lang=${currentLocale}`}
            className="cds--header__name portfolio-header__name"
          >
            Daniel Rojas
          </Link>

          <HeaderNavigation aria-label="Main navigation" className="portfolio-header__nav">
            {navItems.map((item) => (
              <HeaderMenuItem
                key={item.key}
                href={item.href}
                isActive={isActive(item)}
                className="portfolio-header__menu-item"
              >
                {item.label}
              </HeaderMenuItem>
            ))}
          </HeaderNavigation>

          <div className="cds--header__global portfolio-header__global">
            {/* Theme Toggle */}
            <div className="portfolio-header__theme">
              <button
                className="theme-toggle"
                onClick={() => handleThemeChange(
                  theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
                )}
                aria-label={`Current theme: ${theme}. Click to cycle.`}
                title={`Theme: ${theme}`}
              >
                {theme === "light" && <Sun />}
                {theme === "dark" && <Moon />}
                {theme === "system" && <Contrast />}
              </button>
            </div>

            {/* Language Selector (Pinned) */}
            <div className="lang-selector" ref={langRef}>
              <button
                className="lang-selector__trigger"
                onClick={handleLangClick}
                aria-label="Select language"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <Globe />
                <span>{currentLocale.toUpperCase()}</span>
              </button>
              <div className={`lang-selector__dropdown ${langOpen ? "open" : ""}`} role="listbox">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    className={`lang-selector__option ${currentLocale === l.code ? "active" : ""}`}
                    onClick={() => setLang(l.code)}
                    role="option"
                    aria-selected={currentLocale === l.code}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* AAA Toggle */}
            <button
              className="aaa-toggle"
              onClick={handleAAAToggle}
              aria-label={`Accessibility level: ${aaaLevel}. Click to toggle.`}
              aria-pressed={aaaLevel === "AAA"}
            >
              <Contrast />
              <span>AA{aaaLevel === "AAA" ? "A" : ""}</span>
            </button>

            <button
              className="portfolio-header__mobile-toggle"
              onClick={handleMenuClick}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </Header>
      </motion.div>

      {/* Mobile Drawer */}
      <motion.aside
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
    </>
  );
}