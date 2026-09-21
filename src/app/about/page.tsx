import Image from "next/image";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { profileQuery, experienceQuery, toolsQuery } from "@/sanity/lib/queries";
import { getLocaleText, getLocaleContent, Locale } from "@/lib/utils-locale";
import { PortableText } from "@portabletext/react";
import {
  Grid,
  Column,
  Tag,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from "@carbon/react";
import CarbonLinkButton from "@/components/ui/CarbonLinkButton";

export const revalidate = 60;

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "en" } = await searchParams;
  const locale: Locale = (['en', 'es', 'jp'] as const).includes(lang as Locale) ? (lang as Locale) : 'en';

  const [profile, experiences, allTools] = await Promise.all([
    client.fetch(profileQuery).catch(() => null),
    client.fetch(experienceQuery).catch(() => []),
    client.fetch(toolsQuery).catch(() => []),
  ]);

  const bio = getLocaleContent(profile?.bio, locale);
  const roleText = getLocaleText(profile?.role, locale);

  const t = {
    en: {
      about: "About",
      experience: "Collaborated with",
      philosophy: "Philosophy",
      toolsTitle: "Expertise",
      toolHeader: "Tool",
      categoryHeader: "Category",
      footer: "2026 ALL RIGHTS RESERVED",
      philText:
        "I believe in design as a system of decisions, not just pixels. My approach integrates AI to empower human creativity and scale solutions that positively impact both business and users.",
      offClock: "Off the Clock",
    },
    es: {
      about: "Sobre mí",
      experience: "He colaborado con",
      philosophy: "Filosofía",
      toolsTitle: "Especialidad",
      toolHeader: "Herramienta",
      categoryHeader: "Categoría",
      footer: "2026 TODOS LOS DERECHOS RESERVADOS",
      philText:
        "Creo en el diseño como un sistema de decisiones, no solo píxeles. Mi enfoque integra la IA para potenciar la creatividad humana y escalar soluciones que impacten positivamente tanto al negocio como a los usuarios.",
      offClock: "Cuando no estoy en el trabajo",
    },
    jp: {
      about: "について",
      experience: "とのコラボレーション",
      philosophy: "プロフェッショナルな哲学",
      toolsTitle: "スタックと専門知識",
      toolHeader: "ツール",
      categoryHeader: "カテゴリー",
      footer: "2026 全著作権所有",
      philText:
        "デザインは単なるピクセルではなく、一連の意思決定のシステムであると信じています。私の手法はAIを統合し、人間の創造性を高め、ビジネスとユーザーの両方にポジティブな影響を与えるソリューションを拡大します。",
      offClock: "仕事以外の時間",
    },
  }[locale];

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-24 pb-12">
        {/* Header */}
        <header className="border-b border-[var(--color-border-subtle)] pb-10 mb-16">
          <Grid narrow className="!p-0">
            <Column sm={4} md={6} lg={10}>
              <Tag type="green" size="sm" className="mb-4">
                {t.about}
              </Tag>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]">
                Daniel
                <br />
                Rojas
              </h1>
            </Column>
            <Column sm={4} md={6} lg={6} className="lg:pt-20">
              {roleText && (
                <p className="text-lg md:text-xl font-medium text-[var(--color-text-secondary)] leading-relaxed border-l-4 border-[var(--color-primary)] pl-6 max-w-lg mb-8">
                  {roleText}
                </p>
              )}
              <div className="flex gap-4">
                <CarbonLinkButton
                  href={`mailto:${profile?.email || "#"}`}
                  kind="primary"
                  size="sm"
                >
                  Email
                </CarbonLinkButton>
                {profile?.linkedinUrl && (
                  <CarbonLinkButton
                    href={profile.linkedinUrl}
                    kind="tertiary"
                    size="sm"
                    icon="Launch"
                  >
                    LinkedIn
                  </CarbonLinkButton>
                )}
              </div>
            </Column>
          </Grid>
        </header>

        <Grid narrow className="!p-0 items-start gap-y-12">
          {/* Left content */}
          <Column sm={4} md={8} lg={8}>
            {/* Philosophy */}
            <div className="space-y-2 mb-12">
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[var(--color-text-tertiary)]">
                {t.philosophy}
              </p>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text-secondary)] italic max-w-xl leading-relaxed">
                &quot;{t.philText}&quot;
              </h2>
            </div>

            {/* Bio */}
            {bio && (
              <div className="border-t border-[var(--color-border-subtle)] pt-10">
                <div className="columns-1 md:columns-2 lg:columns-2 gap-12 space-y-8 [column-rule:1px_solid_var(--cds-border-subtle)] prose prose-sm md:prose-base max-w-none prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed prose-p:mb-0">
                  <PortableText value={bio} />
                </div>
              </div>
            )}
          </Column>

          {/* Right: photo */}
          <Column sm={4} md={8} lg={4}>
            <div className="relative aspect-[3.5/4] rounded-[6px] overflow-hidden bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] shadow-lg sticky top-24">
              {profile?.profileImageUrl && (
                <Image
                  src={profile.profileImageUrl}
                  alt={profile.fullName || "Daniel Rojas"}
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                />
              )}
            </div>
          </Column>
        </Grid>

        {/* Experience */}
        {experiences?.length > 0 && (
          <div className="mt-24 pt-12 border-t border-[var(--color-border-subtle)] space-y-12">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">
              {t.experience}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16">
              {experiences.map((exp: any, i: number) => (
                <div key={i} className="space-y-6 group border-l border-[var(--color-border-subtle)] pl-8">
                  <div className="flex flex-col gap-2">
                    <Tag type="outline" size="sm">
                      {exp.year || "2023"}
                    </Tag>
                  </div>

                  <div className="space-y-3">
                    <div className="relative h-8 w-24 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                      {exp.imageUrl ? (
                        <Image
                          src={exp.imageUrl}
                          alt={exp.name?.en || exp.name}
                          fill
                          className="object-contain object-left"
                        />
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          {exp.name?.en || exp.name}
                        </span>
                      )}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display text-lg font-black tracking-tighter group-hover:underline underline-offset-4">
                        {exp.name?.[locale] || exp.name?.en || exp.name}
                      </h3>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-tertiary)] italic leading-none">
                        {exp.role?.[locale] || exp.role?.en || exp.role || "Product Designer"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expertise Matrix */}
        {allTools?.length > 0 && (
          <div className="mt-24 space-y-10 pt-12 border-t border-[var(--color-border-subtle)]">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">
              {t.toolsTitle}
            </p>
            <StructuredListWrapper>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head>{t.toolHeader}</StructuredListCell>
                  <StructuredListCell head>{t.categoryHeader}</StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
                {allTools.map((tool: any, i: number) => (
                  <StructuredListRow key={i}>
                    <StructuredListCell className="flex items-center gap-3">
                      {tool.imageUrl && (
                        <div className="relative h-4 w-4 grayscale">
                          <Image
                            src={tool.imageUrl}
                            alt={tool.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="font-display font-black tracking-tighter">
                        {tool.name}
                      </span>
                    </StructuredListCell>
                    <StructuredListCell className="italic text-[var(--color-text-secondary)]">
                      {getLocaleText(tool.category, locale)}
                    </StructuredListCell>
                  </StructuredListRow>
                ))}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        )}

        {/* Off the Clock */}
        {profile?.hobbies && profile.hobbies.length > 0 && (
          <div className="mt-24 space-y-10 pt-12 border-t border-[var(--color-border-subtle)]">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">
              {t.offClock}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {profile.hobbies.map((hobby: any, i: number) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-6 bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-[16px] shadow-sm hover:shadow-md transition-all group"
                >
                  {hobby.iconUrl && (
                    <div className="relative w-12 h-12 mb-4 grayscale group-hover:grayscale-0 transition-all">
                      <Image
                        src={hobby.iconUrl}
                        alt={getLocaleText(hobby.name, locale)}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <span className="text-[11px] font-black uppercase tracking-widest text-[var(--color-text-secondary)] group-hover:text-[var(--cds-text-primary)] text-center">
                    {getLocaleText(hobby.name, locale)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="mt-24 pt-8 border-t border-[var(--color-border-subtle)] text-center">
          <p className="text-[11px] tracking-[0.4em] text-[var(--color-text-tertiary)]">
            {t.footer}
          </p>
        </footer>
      </div>
    </main>
  );
}