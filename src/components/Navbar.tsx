"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get("lang") || "en";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    en: { about: "About", work: "Work", contact: "Contact" },
    es: { about: "Sobre mí", work: "Proyectos", contact: "Contacto" },
    jp: { about: "について", work: "作品", contact: "連絡先" }
  }[currentLocale as "en" | "es" | "jp"];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 py-6 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-[#F9F7F4]/90 backdrop-blur-md border-b border-black/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo - Premium Serif/Sans Mix */}
        <Link
          href={`/?lang=${currentLocale}`}
          className="font-black tracking-tighter text-xl text-black uppercase leading-none hover:opacity-70 transition-opacity"
        >
          Daniel Rojas
        </Link>

        {/* Nav Links - Using a Cleaner, High-End Sans (Outfit already global, but applying specific style) */}
        <div className="flex items-center gap-6 md:gap-10 font-medium">
          <Link
            href={`/about?lang=${currentLocale}`}
            className="text-[11px] uppercase tracking-[0.2em] text-black/60 hover:text-black transition-colors"
          >
            {t.about}
          </Link>
          <Link
            href={`/?lang=${currentLocale}#projects`}
            className="text-[11px] uppercase tracking-[0.2em] text-black/60 hover:text-black transition-colors"
          >
            {t.work}
          </Link>
          <Link
            href={`/?lang=${currentLocale}#contact`}
            className="text-[11px] uppercase tracking-[0.2em] text-black/60 hover:text-black transition-colors"
          >
            {t.contact}
          </Link>
        </div>
      </motion.nav>

      {/* Floating Language Selector - Minimalist WhatsApp Style */}
      <div className="fixed bottom-8 right-8 z-[110] flex flex-col gap-2">
        {["en", "es", "jp"].map((lang) => (
          <motion.button
            key={lang}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              params.set("lang", lang);
              router.push(`${pathname}?${params.toString()}`);
            }}
            className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-sm border transition-all ${
              currentLocale === lang
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black/5 hover:border-black/20"
            }`}
          >
            {lang === "en" ? "🇺🇸" : lang === "es" ? "🇪🇸" : "🇯🇵"}
          </motion.button>
        ))}
      </div>
    </>
  );
}
