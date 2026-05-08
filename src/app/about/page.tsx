import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { profileQuery, experienceQuery, toolsQuery } from "@/sanity/lib/queries";
import { getLocaleText, getLocaleContent, Locale } from "@/lib/utils-locale";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "en" } = await searchParams;
  const locale = lang as Locale;
  
  const [profile, experiences, allTools] = await Promise.all([
    client.fetch(profileQuery),
    client.fetch(experienceQuery),
    client.fetch(toolsQuery)
  ]);

  const bio = getLocaleContent(profile?.bio, locale);
  const roleText = getLocaleText(profile?.role, locale);

  const t = {
    en: { 
      about: "About", 
      experience: "Experience", 
      philosophy: "Professional Philosophy",
      toolsTitle: "Stack & Expertise",
      toolHeader: "Tool / Skill",
      categoryHeader: "Category",
      footer: "2026 ALL RIGHTS RESERVED" 
    },
    es: { 
      about: "Sobre mí", 
      experience: "Experiencia", 
      philosophy: "Filosofía Profesional",
      toolsTitle: "Stack y Especialidad",
      toolHeader: "Herramienta / Skill",
      categoryHeader: "Categoría",
      footer: "2026 TODOS LOS DERECHOS RESERVADOS" 
    },
    jp: { 
      about: "について", 
      experience: "経験", 
      philosophy: "プロフェッショナルな哲学",
      toolsTitle: "スタックと専門知識",
      toolHeader: "ツール / スキル",
      categoryHeader: "カテゴリー",
      footer: "2026 全著作権所有" 
    }
  }[locale];

  return (
    <main className="min-h-screen bg-[#F9F7F4] text-black selection:bg-black selection:text-white">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-40 pb-32">

        {/* Header */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 border-b border-black/5 pb-20">
          <div>
            <p className="text-[14px] font-black uppercase tracking-[0.5em] text-black/40 mb-4">
              {t.about}
            </p>
            <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.82] uppercase">
              Daniel<br />Rojas
            </h1>
          </div>
          <div className="flex flex-col justify-end lg:pb-4 space-y-8">
            {roleText && (
              <p className="text-xl md:text-2xl font-medium text-black/80 leading-relaxed border-l-4 border-black pl-8 max-w-lg">
                {roleText}
              </p>
            )}
            <div className="flex gap-4">
              {profile?.email && (
                <a href={`mailto:${profile.email}`} className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full hover:bg-black/80 transition-all">
                  Email
                </a>
              )}
              {profile?.linkedinUrl && (
                <a href={profile.linkedinUrl} target="_blank" className="text-[10px] font-black uppercase tracking-widest border border-black/10 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-32">
            
            {/* Bio */}
            {bio && (
              <div className="prose prose-xl md:prose-2xl max-w-none prose-p:text-black/80 prose-p:leading-relaxed prose-p:font-normal prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-black">
                <PortableText value={bio} />
              </div>
            )}

            {/* Experience */}
            {experiences?.length > 0 && (
              <div className="space-y-12">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
                  {t.experience}
                </p>
                <div className="flex flex-wrap items-center gap-16">
                   {experiences.map((exp: any, i: number) => (
                     <div key={i} className="group relative">
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          className="block relative h-10 w-28 opacity-40 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0"
                        >
                           {exp.imageUrl ? (
                             <Image src={exp.imageUrl} alt={exp.name} fill className="object-contain" />
                           ) : (
                             <span className="text-[11px] font-black uppercase tracking-widest">{exp.name}</span>
                           )}
                        </a>
                     </div>
                   ))}
                </div>
              </div>
            )}

            {/* Tools / Expertise Matrix */}
            {allTools?.length > 0 && (
              <div className="space-y-12 pt-20 border-t border-black/10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
                  {t.toolsTitle}
                </p>
                
                <div className="w-full">
                   <div className="grid grid-cols-2 pb-4 border-b border-black/5 mb-6 text-[10px] font-black uppercase tracking-widest text-black/30">
                      <div>{t.toolHeader}</div>
                      <div>{t.categoryHeader}</div>
                   </div>
                   <div className="space-y-4">
                      {allTools.map((tool: any, i: number) => (
                        <div key={i} className="grid grid-cols-2 py-4 border-b border-black/[0.03] group hover:bg-black/[0.02] transition-colors px-2 -mx-2 rounded-lg">
                           <div className="flex items-center gap-4">
                              {tool.imageUrl && (
                                <div className="relative h-6 w-6 grayscale group-hover:grayscale-0 transition-all">
                                   <Image src={tool.imageUrl} alt={tool.name} fill className="object-contain" />
                                </div>
                              )}
                              <span className="text-lg font-black uppercase tracking-tighter text-black">{tool.name}</span>
                           </div>
                           <div className="text-sm font-medium text-black/50 group-hover:text-black/80 transition-colors flex items-center italic">
                              {getLocaleText(tool.category, locale)}
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Content */}
          <div className="lg:col-span-4 space-y-20">
             <div className="relative aspect-[3/4] rounded-[12px] overflow-hidden bg-black/5 group shadow-xl">
              {profile?.profileImageUrl && (
                <Image
                  src={profile.profileImageUrl}
                  alt={profile.fullName || "Daniel Rojas"}
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                />
              )}
            </div>

            {/* Philosophy Section (Replacement for Competencies) */}
            <div className="space-y-8 pt-10 border-t border-black/10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
                  {t.philosophy}
                </p>
                <div className="space-y-6">
                   <p className="text-lg font-medium text-black/70 italic leading-relaxed">
                      {locale === "es" 
                        ? "Creo en el diseño como un sistema de decisiones, no solo de píxeles. Mi enfoque integra IA para potenciar la creatividad humana y escalar soluciones que impactan positivamente en el negocio y el usuario."
                        : locale === "jp"
                        ? "私はデザインを、単なるピクセルではなく、意思決定のシステムであると信じています。私の専門は、AIを統合して人間の創造性を高め、ビジネスとユーザーにプラスの影響を与えるソリューションを拡張することです。"
                        : "I believe in design as a system of decisions, not just pixels. My approach integrates AI to empower human creativity and scale solutions that positively impact both business and users."
                      }
                   </p>
                </div>
            </div>
          </div>
        </div>

        {/* Localized Footer */}
        <footer className="mt-40 pt-10 border-t border-black/10 text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">
              {t.footer}
           </p>
        </footer>
      </div>
    </main>
  );
}
