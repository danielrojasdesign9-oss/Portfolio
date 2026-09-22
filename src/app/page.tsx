import Image from "next/image";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { projectsQuery, profileQuery } from "@/sanity/lib/queries";
import { getLocaleText, Locale } from "@/lib/utils-locale";
import { dummyProjects } from "@/lib/dummy-projects";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { Grid, Column, Tag } from "@carbon/react";
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

  const heroHeadline = {
    en: "I make human experiences feel memorable, intuitive, and visually striking.",
    es: "Hago que las experiencias humanas se sientan memorables, intuitivas y que luzcan llamativas.",
    jp: "人間の体験を記憶に残り、直感的で、視覚的に印象的なものにします。"
  }[locale];

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
    <main id="main-content" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />

      <section className="pt-40 md:pt-48 pb-28 px-4 md:px-8 max-w-[1400px] mx-auto border-b border-[var(--color-border-subtle)]">
        <Grid narrow className="!p-0">
          <Column sm={4} md={8} lg={12}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
              {/* Photo circular - use profile image if available */}
              <div className="flex-shrink-0 relative">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-xl ring-4 ring-[var(--color-bg)]">
                  {profile?.profileImageUrl ? (
                    <Image
                      src={profile.profileImageUrl}
                      alt={profile.fullName || "Daniel Rojas"}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--color-bg-elevated)] flex items-center justify-center">
                      <span className="text-5xl md:text-6xl font-black text-[var(--color-primary)]">DR</span>
                    </div>
                  )}
                </div>
                {/* Brand color indicator dots */}
                <div className="absolute -bottom-2 -right-2 flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-[var(--color-midnight)]" title="Midnight" />
                  <div className="w-4 h-4 rounded-full bg-[var(--color-indigo)]" title="Indigo" />
                  <div className="w-4 h-4 rounded-full bg-[var(--color-merlot)]" title="Merlot" />
                  <div className="w-4 h-4 rounded-full bg-[var(--color-silver-mist)] border border-[var(--color-border-subtle)]" title="Silver Mist" />
                  <div className="w-4 h-4 rounded-full bg-[var(--color-onyx)]" title="Onyx" />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-center md:text-left">
                <Tag type="green" size="sm" className="mb-6">
                  {role}
                </Tag>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
                  {heroHeadline}
                </h1>
                <p className="text-lg md:text-xl font-medium text-[var(--color-text-secondary)] leading-snug max-w-xl mb-10">
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
        <Grid narrow className="!p-0 mb-14">
          <Column sm={4} md={8} lg={12}>
            <div className="flex items-end justify-between">
              <div>
                <Tag type="green" size="sm" className="mb-4">
                  {locale === "es" ? "Proyectos" : locale === "jp" ? "作品" : "Selected Projects"}
                </Tag>
                <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                  {locale === "es" ? "Trabajo" : locale === "jp" ? "仕事" : "Work"}
                </h2>
              </div>
            </div>
          </Column>
        </Grid>
        <ProjectsSection projects={projects} locale={locale} />
      </section>

      <ContactSection locale={locale} profile={profile} />

      <Footer locale={locale} />
    </main>
  );
}
