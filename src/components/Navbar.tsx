"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Header,
  HeaderNavigation,
  HeaderMenuItem,
  OverflowMenu,
  OverflowMenuItem,
} from "@carbon/react";
import { Earth } from "@carbon/icons-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get("lang") || "en";

  useEffect(() => {
    // Close any open menus on route change
  }, [pathname, searchParams]);

  const translations = {
    en: { about: "About", work: "Work", lab: "Lab", recursos: "Resources", contact: "Contact" },
    es: { about: "Sobre mí", work: "Proyectos", lab: "Lab", recursos: "Recursos", contact: "Contacto" },
    jp: { about: "について", work: "作品", lab: "Lab", recursos: "リソース", contact: "連絡先" },
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

  return (
    <>
      <Header aria-label="Daniel Rojas" className="portfolio-header">
        <Link
          href={`/?lang=${currentLocale}`}
          className="cds--header__name portfolio-header__name"
        >
          Daniel Rojas
        </Link>

        <HeaderNavigation aria-label="Main navigation" className="portfolio-header__nav">
          <HeaderMenuItem href={`/?lang=${currentLocale}#projects`}>
            {t.work}
          </HeaderMenuItem>
          <HeaderMenuItem href={`/about?lang=${currentLocale}`} isActive={pathname === "/about"}>
            {t.about}
          </HeaderMenuItem>
          <HeaderMenuItem href={`/lab?lang=${currentLocale}`} isActive={pathname.startsWith("/lab")}>
            {t.lab}
          </HeaderMenuItem>
          <HeaderMenuItem href={`/recursos?lang=${currentLocale}`} isActive={pathname === "/recursos"}>
            {t.recursos}
          </HeaderMenuItem>
        </HeaderNavigation>

        <div className="cds--header__global portfolio-header__global">
          <OverflowMenu
            aria-label="Language"
            renderIcon={Earth}
            iconDescription="Language"
            className="portfolio-header__lang"
          >
            {languages.map((l) => (
              <OverflowMenuItem
                key={l.code}
                itemText={l.label}
                onClick={() => setLang(l.code)}
              />
            ))}
          </OverflowMenu>
        </div>
      </Header>

      {/* Mobile nav: links in a row below header */}
      <nav className="portfolio-mobile-nav" aria-label="Mobile navigation">
        <Link href={`/?lang=${currentLocale}#projects`} className="portfolio-mobile-nav__link">
          {t.work}
        </Link>
        <Link href={`/about?lang=${currentLocale}`} className="portfolio-mobile-nav__link">
          {t.about}
        </Link>
        <Link href={`/lab?lang=${currentLocale}`} className="portfolio-mobile-nav__link">
          {t.lab}
        </Link>
        <Link href={`/recursos?lang=${currentLocale}`} className="portfolio-mobile-nav__link">
          {t.recursos}
        </Link>
        <Link href={`/?lang=${currentLocale}#contact`} className="portfolio-mobile-nav__link">
          {t.contact}
        </Link>
      </nav>
    </>
  );
}
