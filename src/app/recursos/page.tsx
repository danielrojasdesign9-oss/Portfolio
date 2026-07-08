import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { resourcesQuery } from "@/sanity/lib/queries";
import { getLocaleText, type Locale } from "@/lib/utils-locale";
import { getRecursosT } from "@/lib/utils-recursos";
import { Suspense } from "react";
import RecursosClient from "./RecursosClient";

export const revalidate = 60;

export default async function RecursosPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "en" } = await searchParams;
  const locale = lang as Locale;
  const t = getRecursosT(locale);

  const resources = await client.fetch(resourcesQuery);

  const resourcesWithLocale = resources.map((r: Record<string, unknown>) => ({
    ...r,
    title: getLocaleText(r.title, locale),
    description: getLocaleText(r.description, locale),
  }));

  return (
    <main className="min-h-screen bg-[#F9F7F4] text-black selection:bg-black selection:text-white">
      <Navbar />
      <Suspense fallback={<div className="pt-48 text-center">Loading...</div>}>
        <RecursosClient resources={resourcesWithLocale} t={t} locale={locale} />
      </Suspense>
    </main>
  );
}
