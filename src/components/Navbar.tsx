'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get("lang") || "en";
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  const translations = {
    en: { about: "About", work: "Work", contact: "Contact", langName: "EN" },
    es: { about: "Sobre mí", work: "Proyectos", contact: "Contacto", langName: "ES" },
    jp: { about: "について", work: "作品", contact: "連絡先", langName: "JP" }
  };
  
  const t = translations[currentLocale as "en" | "es" | "jp"] || translations.en;

  const languages = [
    { code: 'en', label: 'English', emoji: '🇺🇸' },
    { code: 'es', label: 'Español', emoji: '🇪🇸' },
    { code: 'jp', label: '日本語', emoji: '🇯🇵' }
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 py-6 flex items-center justify-between transition-all duration-500 pointer-events-none ${
          scrolled
            ? "bg-[#F9F7F4]/90 backdrop-blur-md border-b border-black/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo - Restored Original Typography */}
        <Link
          href={`/?lang=${currentLocale}`}
          className="font-black tracking-tighter text-xl text-black uppercase leading-none pointer-events-auto hover:opacity-70 transition-opacity"
        >
          Daniel Rojas
        </Link>

        {/* Desktop Menu - Restored Original Links */}
        <div className="hidden md:flex items-center gap-6 md:gap-10 font-black pointer-events-auto">
          <Link
            href={`/about?lang=${currentLocale}`}
            className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${pathname === '/about' ? 'text-black' : 'text-black/60 hover:text-black'}`}
          >
            {t.about}
          </Link>
          <Link
            href={`/?lang=${currentLocale}#projects`}
            className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${pathname === '/' ? 'text-black' : 'text-black/60 hover:text-black'}`}
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

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(true)}
          className={`md:hidden p-3 rounded-full border shadow-sm pointer-events-auto active:scale-90 transition-all ${
            scrolled ? "bg-transparent border-transparent" : "bg-white/80 backdrop-blur-md border-black/5"
          }`}
        >
          <Menu className="w-5 h-5 text-black" />
        </button>
      </motion.nav>

      {/* Floating Language Selector - Desktop Only (Restored) */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-[110] flex-col gap-2">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              params.set("lang", lang.code);
              router.push(`${pathname}?${params.toString()}`);
            }}
            className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-sm border transition-all ${
              currentLocale === lang.code
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black/5 hover:border-black/20"
            }`}
          >
            {lang.emoji}
          </motion.button>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[120] bg-[#F9F7F4]/98 backdrop-blur-xl animate-in fade-in slide-in-from-right duration-300 md:hidden">
          <div className="h-full flex flex-col px-10 pt-32 pb-12">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-3 hover:bg-black/5 rounded-full transition-colors"
            >
              <X className="w-8 h-8 text-black" />
            </button>

            <div className="space-y-12 flex-1">
              <div className="space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20">Menu</p>
                 <div className="flex flex-col gap-6">
                    <Link 
                      href={`/?lang=${currentLocale}#projects`}
                      className="text-3xl font-black uppercase tracking-tighter hover:italic transition-all text-black/80"
                    >
                      {t.work}
                    </Link>
                    <Link 
                      href={`/about?lang=${currentLocale}`} 
                      className="text-3xl font-black uppercase tracking-tighter hover:italic transition-all text-black/80"
                    >
                      {t.about}
                    </Link>
                    <Link 
                      href={`/?lang=${currentLocale}#contact`} 
                      className="text-3xl font-black uppercase tracking-tighter hover:italic transition-all text-black/80"
                    >
                      {t.contact}
                    </Link>
                 </div>
              </div>

              {/* Language Selector in Mobile Menu */}
              <div className="space-y-4 pt-8 border-t border-black/5">
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 flex items-center gap-2">
                    <Globe className="w-3 h-3" /> Language
                 </p>
                 <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          const params = new URLSearchParams(searchParams.toString());
                          params.set("lang", lang.code);
                          router.push(`${pathname}?${params.toString()}`);
                        }}
                        className={`text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${currentLocale === lang.code ? 'bg-black/5 text-black border-black/10' : 'bg-transparent border-transparent text-black/40 hover:text-black/60'}`}
                      >
                        {lang.emoji} {lang.code.toUpperCase()}
                      </button>
                    ))}
                 </div>
              </div>
            </div>

            <footer className="pt-12 text-center">
               <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/20">© 2026 DANIEL ROJAS</p>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
