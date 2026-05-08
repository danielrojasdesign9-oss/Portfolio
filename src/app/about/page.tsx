import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { profileQuery, experienceQuery, toolsQuery } from "@/sanity/lib/queries";
import { getLocaleText, getLocaleContent, Locale } from "@/lib/utils-locale";
import { PortableText } from "@portabletext/react";
import { ArrowUpRight, Mail } from "lucide-react";

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
    en: { about: "About", experience: "Experience", skills: "Skills", tools: "Stack", footer: "2026 ALL RIGHTS RESERVED" },
    es: { about: "Sobre mí", experience: "Experiencia", skills: "Competencias", tools: "Stack", footer: "2026 TODOS LOS DERECHOS RESERVADOS" },
    jp: { about: "について", experience: "経験", skills: "スキル", tools: "スタック", footer: "2026 全著作権所有" }
  }[locale];

  return (
    <main className="min-h-screen bg-[#F9F7F4] text-black selection:bg-black selection:text-white">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-40 pb-32">

        {/* Header: Name + Info in 2 Columns */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 border-b border-black/5 pb-20">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.5em] text-black/40 mb-4">
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

            {/* Experience: Single Row, Uniform Hover */}
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

            {/* Skills: Localized */}
            {profile?.skills?.length > 0 && (
              <div className="space-y-12 pt-20 border-t border-black/10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
                  {t.skills}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  {profile.skills.map((skill: any, i: number) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-black">
                        {getLocaleText(skill.category, locale)}
                      </h4>
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {skill.items?.map((itemObj: any, j: number) => (
                          <span key={j} className="text-xl text-black/70 font-semibold italic">
                            {getLocaleText(itemObj, locale)}{j < skill.items.length - 1 ? " /" : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Content (Photo + Tools) */}
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

            {/* Tools: Just Logos, No Effects */}
            {allTools?.length > 0 && (
              <div className="space-y-8">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
                  {t.tools}
                </p>
                <div className="flex flex-wrap gap-6">
                   {allTools.map((tool: any, i: number) => (
                     <div key={i} className="relative h-12 w-12 grayscale">
                        {tool.imageUrl ? (
                          <Image src={tool.imageUrl} alt={tool.name} fill className="object-contain" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-black/5 rounded-md">
                             <span className="text-[8px] font-black uppercase text-center p-1">{tool.name}</span>
                          </div>
                        )}
                     </div>
                   ))}
                </div>
              </div>
            )}
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
