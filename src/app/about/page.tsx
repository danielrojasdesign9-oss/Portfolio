import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { profileQuery, experienceQuery, toolsQuery } from "@/sanity/lib/queries";
import { getLocaleText, getLocaleContent, Locale } from "@/lib/utils-locale";
import { PortableText } from "@portabletext/react";
import { ArrowUpRight, Mail, Layout, Rocket, Cpu } from "lucide-react";

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
    en: { about: "About me", experience: "Experience", skills: "Skills", tools: "Stack", footer: "2026 ALL RIGHTS RESERVED" },
    es: { about: "Sobre mí", experience: "Experiencia", skills: "Competencias", tools: "Stack", footer: "2026 TODOS LOS DERECHOS RESERVADOS" },
    jp: { about: "について", experience: "経験", skills: "スキル", tools: "スタック", footer: "2026 全著作権所有" }
  }[locale];

  return (
    <main className="min-h-screen bg-[#F9F7F4] text-black selection:bg-black selection:text-white">
      <Navbar />

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 pt-40 pb-32">

        {/* Restore Original Structure: Photo Prominent */}
        <div className="mb-20">
          <p className="text-[12px] font-black uppercase tracking-[0.5em] text-black/40 mb-4">
            {t.about}
          </p>
          <h1 className="text-6xl sm:text-8xl md:text-[9rem] font-black tracking-tighter leading-[0.82] uppercase">
            Daniel<br />Rojas
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Photo Structure (Original) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="relative aspect-[3/4] rounded-[12px] overflow-hidden bg-black/5 group shadow-2xl">
              {profile?.profileImageUrl && (
                <Image
                  src={profile.profileImageUrl}
                  alt={profile.fullName || "Daniel Rojas"}
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                />
              )}
            </div>

            {/* Experience Icons in Row */}
            {experiences?.length > 0 && (
              <div className="space-y-6 pt-4">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
                  {t.experience}
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                   {experiences.map((exp: any, i: number) => (
                     <div key={i} className="group relative h-8 w-20 opacity-40 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0">
                        {exp.link ? (
                          <a href={exp.link} target="_blank" className="block w-full h-full relative">
                             <Image src={exp.imageUrl} alt={exp.name} fill className="object-contain" />
                          </a>
                        ) : (
                          <Image src={exp.imageUrl} alt={exp.name} fill className="object-contain" />
                        )}
                     </div>
                   ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-16">
            {roleText && (
              <p className="text-2xl md:text-3xl font-medium text-black/80 leading-relaxed border-l-4 border-black pl-8">
                {roleText}
              </p>
            )}

            {bio && (
              <div className="prose prose-xl md:prose-2xl max-w-none prose-p:text-black/80 prose-p:leading-relaxed prose-headings:font-black prose-headings:uppercase prose-headings:text-black">
                <PortableText value={bio} />
              </div>
            )}

            {/* Tools Grid (Logos Only) */}
            {allTools?.length > 0 && (
              <div className="space-y-8 pt-10 border-t border-black/10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
                  {t.tools}
                </p>
                <div className="flex flex-wrap gap-6">
                   {allTools.map((tool: any, i: number) => (
                     <div key={i} className="relative h-10 w-10 grayscale hover:grayscale-0 transition-all">
                        {tool.imageUrl ? (
                          <Image src={tool.imageUrl} alt={tool.name} fill className="object-contain" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-black/5 rounded text-[8px] font-black text-center">{tool.name}</div>
                        )}
                     </div>
                   ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {profile?.skills?.length > 0 && (
              <div className="space-y-10 pt-10 border-t border-black/10">
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
        </div>
      </div>
    </main>
  );
}
