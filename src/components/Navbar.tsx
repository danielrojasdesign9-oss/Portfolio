"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Globe } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get("lang") || "en";

  const setLocale = (locale: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", locale);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl"
    >
      <div className="bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10">
        
        {/* Logo/Name */}
        <Link href={`/?lang=${currentLocale}`} className="font-bold tracking-tighter text-xl text-white">
          DR<span className="text-indigo-500">.</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <Link href={`/#projects?lang=${currentLocale}`} className="hover:text-white transition-colors">Projects</Link>
          <Link href={`/#about?lang=${currentLocale}`} className="hover:text-white transition-colors">About</Link>
          <Link href={`/#contact?lang=${currentLocale}`} className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Lang & Action */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-full p-1">
            {["en", "es", "jp"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                  currentLocale === lang 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
