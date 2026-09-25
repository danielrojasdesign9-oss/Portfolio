import Image from "next/image";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { profileQuery, experienceQuery, toolsQuery } from "@/sanity/lib/queries";
import { getLocaleText, getLocaleContent, Locale } from "@/lib/utils-locale";
import { PortableText } from "@portabletext/react";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from "@carbon/react";
import { Email, LogoLinkedin, LogoGithub } from "@carbon/icons-react";
import Footer from "@/components/Footer";

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

  const email = profile?.email || "hello@danielrojas.design";
  const linkedinUrl = profile?.linkedinUrl || "https://www.linkedin.com/in/danielrojasdesign/";
  const githubUrl = profile?.githubUrl || "https://github.com/danielrojasdesign";

  const t = {
    en: {
      about: "About",
      experience: "Collaborated with",
      philosophy: "Philosophy",
      toolsTitle: "Expertise",
      toolHeader: "Tool",
      categoryHeader: "Category",
      philText: "I believe in design as a system of decisions, not just pixels. My approach integrates AI to empower human creativity and scale solutions that positively impact both business and users.",
      offClock: "Off the Clock",
      connect: "Connect",
    },
    es: {
      about: "Sobre mí",
      experience: "He colaborado con",
      philosophy: "Filosofía",
      toolsTitle: "Especialidad",
      toolHeader: "Herramienta",
      categoryHeader: "Categoría",
      philText: "Creo en el diseño como un sistema de decisiones, no solo píxeles. Mi enfoque integra la IA para potenciar la creatividad humana y escalar soluciones que impacten positivamente tanto al negocio como a los usuarios.",
      offClock: "Cuando no estoy en el trabajo",
      connect: "Conecta",
    },
    jp: {
      about: "について",
      experience: "とのコラボレーション",
      philosophy: "プロフェッショナルな哲学",
      toolsTitle: "スタックと専門知識",
      toolHeader: "ツール",
      categoryHeader: "カテゴリー",
      philText: "デザインは単なるピクセルではなく、一連の意思決定のシステムであると信じています。私の手法はAIを統合し、人間の創造性を高め、ビジネスとユーザーの両方にポジティブな影響を与えるソリューションを拡大します。",
      offClock: "仕事以外の時間",
      connect: "つながる",
    },
  }[locale];

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />

      {/* Page tag */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-[calc(var(--header-height)+2rem)]">
        <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full bg-[var(--color-primary)] text-[var(--color-text-inverse)] mb-8">
          {t.about}
        </span>
      </div>

      {/* True 2-column 50/50 layout */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-0">
        <div className="flex flex-col lg:flex-row items-start gap-0 lg:gap-16">

          {/* COL 1 — Left sticky: Photo + Name + Role + Contact */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24 flex-shrink-0">
            {/* Photo */}
            <div className="relative w-full aspect-square max-h-[60vh] rounded-[6px] overflow-hidden bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] shadow-lg mb-8">
              {profile?.profileImageUrl ? (
                <Image
                  src={profile.profileImageUrl}
                  alt={profile.fullName || "Daniel Rojas"}
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-[var(--color-bg-elevated)] flex items-center justify-center">
                  <span className="text-9xl font-black text-[var(--color-primary)]">DR</span>
                </div>
              )}
            </div>

            {/* Name */}
            <h1 className="font-display text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.85] mb-4 whitespace-nowrap">
              Daniel Rojas
            </h1>

            {/* Role */}
            {roleText && (
              <p className="text-base font-medium text-[var(--color-text-secondary)] leading-relaxed border-l-4 border-[var(--color-primary)] pl-4 mb-8 max-w-sm">
                {roleText}
              </p>
            )}

            {/* Contact links */}
            <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-[var(--color-border-subtle)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] w-full">
                {t.connect}
              </p>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                <Email className="w-5 h-5" />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                <LogoLinkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                <LogoGithub className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* COL 2 — Right scrollable: Bio + Philosophy + Collaborated + Expertise + Off the Clock */}
          <div className="w-full lg:w-1/2 pt-8 lg:pt-0 pb-16 space-y-20">

            {/* Philosophy */}
            <div className="space-y-3 pt-2">
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[var(--color-text-tertiary)]">
                {t.philosophy}
              </p>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text-secondary)] italic leading-relaxed">
                &ldquo;{t.philText}&rdquo;
              </h2>
            </div>

            {/* Bio */}
            {bio && (
              <div className="border-t border-[var(--color-border-subtle)] pt-10">
                <div className="columns-1 md:columns-2 gap-10 space-y-6 [column-rule:1px_solid_var(--cds-border-subtle)] prose prose-sm md:prose-base max-w-none prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed prose-p:mb-0">
                  <PortableText value={bio} />
                </div>
              </div>
            )}

            {/* Collaborated With */}
            {experiences?.length > 0 && (
              <div className="border-t border-[var(--color-border-subtle)] pt-10 space-y-10">
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">
                  {t.experience}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
                  {experiences.map((exp: any, i: number) => (
                    <div key={i} className="space-y-4 group border-l border-[var(--color-border-subtle)] pl-6">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-tertiary)]">
                        {exp.year || "2023"}
                      </span>
                      <div className="relative h-7 w-20 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
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
                        <h3 className="font-display text-base font-black tracking-tighter group-hover:underline underline-offset-4">
                          {exp.name?.[locale] || exp.name?.en || exp.name}
                        </h3>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-tertiary)] italic">
                          {exp.role?.[locale] || exp.role?.en || exp.role || "Product Designer"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Expertise */}
            {allTools?.length > 0 && (
              <div className="border-t border-[var(--color-border-subtle)] pt-10 space-y-8">
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">
                  {t.toolsTitle}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {allTools.map((tool: any, i: number) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-[6px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]">
                      {tool.imageUrl && (
                        <div className="relative h-5 w-5 flex-shrink-0 grayscale">
                          <Image
                            src={tool.imageUrl}
                            alt={tool.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <span className="font-display font-black tracking-tighter text-sm block">
                          {tool.name}
                        </span>
                        <span className="text-[11px] text-[var(--color-text-tertiary)] italic">
                          {getLocaleText(tool.category, locale)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Off the Clock */}
            {profile?.hobbies && profile.hobbies.length > 0 && (
              <div className="border-t border-[var(--color-border-subtle)] pt-10 space-y-8">
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">
                  {t.offClock}
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {profile.hobbies.map((hobby: any, i: number) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-[12px] shadow-sm hover:shadow-md transition-all group"
                    >
                      {hobby.iconUrl && (
                        <div className="relative w-10 h-10 mb-3 grayscale group-hover:grayscale-0 transition-all">
                          <Image
                            src={hobby.iconUrl}
                            alt={getLocaleText(hobby.name, locale)}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] text-center leading-tight">
                        {getLocaleText(hobby.name, locale)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <Footer locale={locale} />
    </main>
  );
}