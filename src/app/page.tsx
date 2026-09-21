import Image from "next/image";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { projectsQuery, profileQuery } from "@/sanity/lib/queries";
import { getLocaleText, Locale } from "@/lib/utils-locale";
import { dummyProjects } from "@/lib/dummy-projects";
import ContactSection from "@/components/ContactSection";
import { Grid, Column, Tag, ClickableTile } from "@carbon/react";
import CarbonLinkButton from "@/components/ui/CarbonLinkButton";

export const revalidate = 60;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "en" } = await searchParams;
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

  const heroDescription = profile?.homeDescription
    ? getLocaleText(profile.homeDescription, locale)
    : locale === "es"
    ? "Arquitectando sistemas de productos impulsados por IA que escalan el impacto. Redefiniendo experiencias a través de interfaces conversacionales y desarrollo asistido por IA."
    : locale === "jp"
    ? "インパクトを拡大するAI駆動の製品システムを構築。対話型インターフェースとAI支援開発を通じて製品体験を再定義します。"
    : "Building AI-driven ecosystems that scale. I believe in using technology to handle the how, so we can focus on the why: human-centric strategy and projects with social purpose.";

  const role = profile?.role
    ? getLocaleText(profile.role, locale)
    : locale === "es"
    ? "Diseñador de Producto"
    : locale === "jp"
    ? "プロダクトデザイナー"
    : "Product Designer";

  return (
    <main className="min-h-screen bg-[var(--cds-background)] text-[var(--cds-text-primary)]">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-24 px-4 md:px-8 max-w-[1400px] mx-auto border-b border-[var(--color-border-subtle)]">
        <Grid narrow className="!p-0">
          <Column sm={4} md={8} lg={12}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Photo circular */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-lg">
                  <div className="w-full h-full bg-[var(--color-bg-elevated)] flex items-center justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">DR</span>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-center md:text-left">
                <Tag type="green" size="sm" className="mb-6">
                  {role}
                </Tag>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
                  {locale === "es"
                    ? "Hago que las cosas se sientan bien. Y se vean mejor."
                    : locale === "jp"
                    ? "ものがうまく感じるように。そして、もっと良く見えるように。"
                    : "I make things feel good. And look better."}
                </h1>
                <p className="text-lg md:text-xl font-medium text-[var(--color-text-secondary)] leading-snug max-w-md mb-8">
                  {heroDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <CarbonLinkButton
                    href={`/about?lang=${locale}`}
                    icon="ArrowRight"
                    kind="primary"
                    size="lg"
                  >
                    {locale === "es" ? "Conóceme más" : locale === "jp" ? "私について" : "About Me"}
                  </CarbonLinkButton>
                  <CarbonLinkButton
                    href={`/?lang=${locale}#contact`}
                    kind="secondary"
                    size="lg"
                  >
                    {locale === "es" ? "Hablemos" : locale === "jp" ? "お問い合わせ" : "Let's Talk"}
                  </CarbonLinkButton>
                </div>
              </div>
            </div>
          </Column>
        </Grid>
      </section>

      <section id="projects" className="px-4 md:px-8 py-24 max-w-[1400px] mx-auto">
        <Grid narrow className="!p-0">
          {projects.map((project: any) => {
            const title = getLocaleText(project.title, locale);
            const category = getLocaleText(project.category, locale);
            return (
              <Column key={project._id} sm={4} md={4} lg={5} className="mb-8">
                <ClickableTile
                  href={`/work/${project.slug}?lang=${locale}`}
                  className="!p-0 !border-0 bg-transparent group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] mb-4">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--color-text-tertiary)]">
                        No image
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <h2 className="font-display font-bold text-lg tracking-tight">{title}</h2>
                    <Tag type="outline" size="sm">
                      {project.year}
                    </Tag>
                  </div>
                  <p className="text-[12px] text-[var(--color-text-secondary)] mt-1">{category}</p>
                </ClickableTile>
              </Column>
            );
          })}
        </Grid>
      </section>

      <ContactSection locale={locale} profile={profile} />

      <footer className="py-10 px-4 md:px-8 border-t border-[var(--color-border-subtle)] text-center">
        <p className="text-[11px] tracking-[0.3em] text-[var(--color-text-tertiary)]">
          © {new Date().getFullYear()}{" "}
          {locale === "es"
            ? "TODOS LOS DERECHOS RESERVADOS"
            : locale === "jp"
            ? "全著作権所有"
            : "ALL RIGHTS RESERVED"}
        </p>
      </footer>
    </main>
  );
}
