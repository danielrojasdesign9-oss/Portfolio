'use client';

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentLang = searchParams.get("lang") || "en";
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  const t = {
    en: { work: "Work", about: "About", langName: "EN" },
    es: { work: "Proyectos", about: "Sobre mí", langName: "ES" },
    jp: { work: "作品", about: "について", langName: "JP" }
  }[currentLang as 'en' | 'es' | 'jp'] || t.en;

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'jp', label: '日本語' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-8 md:px-10 lg:px-16 flex justify-between items-center pointer-events-none">
        {/* Logo */}
        <Link href={`/?lang=${currentLang}`} className="text-[11px] font-black uppercase tracking-[0.5em] pointer-events-auto hover:opacity-50 transition-opacity">
          Daniel Rojas
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 pointer-events-auto">
          <Link 
            href={`/?lang=${currentLang}`} 
            className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-black ${pathname === '/' ? 'text-black' : 'text-black/30'}`}
          >
            {t.work}
          </Link>
          <Link 
            href={`/about?lang=${currentLang}`} 
            className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-black ${pathname === '/about' ? 'text-black' : 'text-black/30'}`}
          >
            {t.about}
          </Link>
          
          <div className="h-4 w-px bg-black/10 mx-2" />
          
          <div className="flex gap-4">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={`${pathname}?lang=${lang.code}`}
                className={`text-[9px] font-black uppercase tracking-widest transition-all ${currentLang === lang.code ? 'text-black underline underline-offset-4' : 'text-black/20 hover:text-black/50'}`}
              >
                {lang.code}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(true)}
          className="md:hidden p-3 bg-white/80 backdrop-blur-md rounded-full border border-black/5 shadow-sm pointer-events-auto active:scale-90 transition-transform"
        >
          <Menu className="w-5 h-5 text-black" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[110] bg-[#F9F7F4]/98 backdrop-blur-xl animate-in fade-in slide-in-from-right duration-300">
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
                      href={`/?lang=${currentLang}`} 
                      className="text-5xl font-black uppercase tracking-tighter hover:italic transition-all"
                    >
                      {t.work}
                    </Link>
                    <Link 
                      href={`/about?lang=${currentLang}`} 
                      className="text-5xl font-black uppercase tracking-tighter hover:italic transition-all"
                    >
                      {t.about}
                    </Link>
                 </div>
              </div>

              <div className="space-y-6 pt-12 border-t border-black/5">
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 flex items-center gap-3">
                    <Globe className="w-3 h-3" /> Language
                 </p>
                 <div className="flex flex-wrap gap-4">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={`${pathname}?lang=${lang.code}`}
                        className={`text-xl font-black uppercase tracking-tighter px-6 py-3 rounded-full border ${currentLang === lang.code ? 'bg-black text-white border-black' : 'border-black/10 text-black/40'}`}
                      >
                        {lang.label}
                      </Link>
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
