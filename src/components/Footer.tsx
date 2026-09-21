import type { Locale } from "@/lib/utils-locale";

interface FooterProps {
  locale: Locale;
}

const footerText = {
  en: "2026 ALL RIGHTS RESERVED",
  es: "2026 TODOS LOS DERECHOS RESERVADOS",
  jp: "2026 全著作権所有",
};

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="py-10 px-4 md:px-8 border-t border-[var(--color-border-subtle)] mt-24">
      <p className="text-[11px] tracking-[0.4em] text-[var(--color-text-tertiary)] text-center">
        © {new Date().getFullYear()} {footerText[locale] || footerText.en}
      </p>
    </footer>
  );
}
