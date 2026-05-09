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
      experience: "Collaborated with", 
      philosophy: "Philosophy", 
      toolsTitle: "Expertise", 
      toolHeader: "Tool", 
      categoryHeader: "Category", 
      footer: "2026 ALL RIGHTS RESERVED",
      philText: "I believe in design as a system of decisions, not just pixels. My approach integrates AI to empower human creativity and scale solutions that positively impact both business and users."
    },
    es: { 
      about: "Sobre mí", 
      experience: "He colaborado con", 
      philosophy: "Filosofía", 
      toolsTitle: "Especialidad", 
      toolHeader: "Herramienta", 
      categoryHeader: "Categoría", 
      footer: "2026 TODOS LOS DERECHOS RESERVADOS",
      philText: "Creo en el diseño como un sistema de decisiones, no solo píxeles. Mi enfoque integra la IA para potenciar la creatividad humana y escalar soluciones que impacten positivamente tanto al negocio como a los usuarios."
    },
    jp: { 
      about: "について", 
      experience: "とのコラボレーション", 
      philosophy: "プロフェッショナルな哲学", 
      toolsTitle: "スタックと専門知識", 
      toolHeader: "ツール", 
      categoryHeader: "カテゴリー", 
      footer: "2026 全著作権所有",
      philText: "デザインは単なるピクセルではなく、一連の意思決定のシステムであると信じています。私の手法はAIを統合し、人間の創造性を高め、ビジネスとユーザーの両方にポジティブな影響を与えるソリューションを拡大します。"
    }
  }[locale];

  return (
    <main className="min-h-screen bg-[#F9F7F4] text-black selection:bg-black selection:text-white">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-12">
        
        {/* Header */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 border-b border-black/5 pb-10">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.5em] text-black/40 mb-2">{t.about}</p>
            <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] uppercase">Daniel<br />Rojas</h1>
          </div>
          <div className="flex flex-col justify-end lg:pb-4 space-y-6">
            {roleText && (<p className="text-lg md:text-xl font-medium text-black/80 leading-relaxed border-l-4 border-black pl-6 max-w-lg">{roleText}</p>)}
            <div className="flex gap-4">
              {profile?.email && (<a href={`mailto:${profile.email}`} className="text-[9px] font-black uppercase tracking-widest bg-black text-white px-5 py-2.5 rounded-full hover:bg-black/80 transition-all">Email</a>)}
              {profile?.linkedinUrl && (<a href={profile.linkedinUrl} target="_blank" className="text-[9px] font-black uppercase tracking-widest border border-black/10 px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-all">LinkedIn</a>)}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Philosophy - Translated */}
            <div className="space-y-2">
               <p className="text-[8px] font-black uppercase tracking-[0.5em] text-black/20">{t.philosophy}</p>
               <h2 className="text-[13px] md:text-[15px] font-bold tracking-tight text-black italic max-w-xl leading-relaxed opacity-60">
                  "{t.philText}"
               </h2>
            </div>

            {/* BIO in 3 COLUMNS */}
            {bio && (
              <div className="border-t border-black/5 pt-10">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12 [column-rule:1px_solid_rgba(0,0,0,0.05)]">
                  <div className="prose prose-sm md:prose-base max-w-none prose-p:text-black/60 prose-p:leading-relaxed prose-p:mb-0">
                    <PortableText value={bio} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Photo */}
          <aside className="lg:col-span-4">
             <div className="relative aspect-[3.5/4] rounded-[12px] overflow-hidden bg-black/5 group shadow-2xl sticky top-24">
              {profile?.profileImageUrl && (<Image src={profile.profileImageUrl} alt={profile.fullName || "Daniel Rojas"} fill className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" />)}
            </div>
          </aside>
        </div>

        {/* EXPERIENCE GRID */}
        {experiences?.length > 0 && (
          <div className="mt-24 pt-12 border-t border-black/10 space-y-12">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/40">{t.experience}</p>
            
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16">
                {experiences.map((exp: any, i: number) => (
                  <div key={i} className="space-y-6 group border-l border-black/5 pl-8">
                    <div className="flex flex-col gap-2">
                       <div className="text-[10px] font-black uppercase tracking-widest text-black/30 group-hover:text-black transition-colors">
                          {exp.year || "2023"}
                       </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="relative h-8 w-24 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                        {exp.imageUrl ? (
                          <Image src={exp.imageUrl} alt={exp.name} fill className="object-contain object-left" />
                        ) : (
                          <span className="text-[10px] font-black uppercase tracking-widest">{exp.name}</span>
                        )}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-black uppercase tracking-tighter group-hover:underline underline-offset-4 decoration-1">{exp.name}</h3>
                        <p className="text-[8px] font-black uppercase tracking-widest text-black/40 italic leading-none">{exp.role || "Product Designer"}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <footer className="mt-24 pt-8 border-t border-black/10 text-center"><p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30">{t.footer}</p></footer>
      </div>
    </main>
  );
}
