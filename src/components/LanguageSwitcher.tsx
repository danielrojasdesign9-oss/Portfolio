"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function LanguageSwitcher() {
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
    <div className="fixed bottom-10 right-10 z-[100] flex gap-2 p-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
      {["en", "es", "jp"].map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
            currentLocale === lang 
              ? "bg-white text-slate-900" 
              : "text-white hover:bg-white/10"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
