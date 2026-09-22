import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { projectsQuery, profileQuery } from "@/sanity/lib/queries";
import { getLocaleText, Locale } from "@/lib/utils-locale";
import { dummyProjects } from "@/lib/dummy-projects";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export const revalidate = 60;

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "jp" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang?: string }> }): Promise<Metadata> {
  const { lang = "en" } = await params;
  const locale = (['en', 'es', 'jp'] as const).includes(lang as Locale) ? (lang as Locale) : 'en';
  const titles = { en: "Work | Daniel Rojas", es: "Proyectos | Daniel Rojas", jp: "作品 | Daniel Rojas" };
  return { title: titles[locale] };
}

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; category?: string }>;
}) {
  const { lang = "en", category } = await searchParams;
  const locale: Locale = (['en', 'es', 'jp'] as const).includes(lang as Locale) ? (lang as Locale) : 'en';

  const [sanityProjects, profile] = await Promise.all([
    client.fetch(projectsQuery).catch(() => []),
    client.fetch(profileQuery).catch(() => null),
  ]);
  const projects = [
    ...(sanityProjects || []),
    ...dummyProjects.filter(
      (d) => !(sanityProjects || []).some((s: any) => s.slug === d.slug)
    ),
  ];

  const t = {
    en: { work: "Work", description: "Selected projects and case studies." },
    es: { work: "Proyectos", description: "Proyectos y casos de estudio seleccionados." },
    jp: { work: "作品", description: "選抜されたプロジェクトとケーススタディ。" },
  }[locale];

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-16 px-4 md:px-8 max-w-[1400px] mx-auto border-b border-[var(--color-border-subtle)]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[12px] font-bold tracking-[0.4em] text-[var(--color-primary)] mb-4">
              {t.work}
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-6">
              {t.work}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl">
              {t.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 max-w-[1400px] mx-auto">
        <ProjectsSection projects={projects} locale={locale} />
      </section>
    </main>
  );
}