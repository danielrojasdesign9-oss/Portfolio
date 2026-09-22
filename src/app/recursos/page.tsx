import Navbar from "@/components/Navbar";
import { getRecursosT } from "@/lib/utils-recursos";
import { type Locale } from "@/lib/utils-locale";
import { Suspense } from "react";
import RecursosClient from "./RecursosClient";

export const revalidate = 60;

export default async function RecursosPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "en" } = await searchParams;
  const locale: Locale = (['en', 'es', 'jp'] as const).includes(lang as Locale) ? (lang as Locale) : 'en';
  const t = getRecursosT(locale);

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />
      <Suspense fallback={<div className="pt-48 text-center">Loading...</div>}>
        <RecursosClient t={t} locale={locale} />
      </Suspense>
    </main>
  );
}
