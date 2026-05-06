"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getLocaleText, getLocaleContent, Locale } from "@/lib/utils-locale";

interface AboutSectionProps {
  profile: any;
  locale: Locale;
}

export default function AboutSection({ profile, locale }: AboutSectionProps) {
  if (!profile) return null;

  const bio = getLocaleContent(profile.bio, locale);

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32 md:px-12 lg:px-24 bg-white rounded-[64px] my-32 shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        
        {/* Foto de Perfil & CV */}
        <div className="lg:col-span-5 space-y-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-slate-50 border border-slate-100 group"
          >
            {profile.profileImageUrl ? (
              <Image 
                src={profile.profileImageUrl} 
                alt={profile.fullName} 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-300 font-medium italic">
                Upload your photo in Sanity
              </div>
            )}
          </motion.div>

          {profile.resumeUrl && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-indigo-600 text-white space-y-4 shadow-xl shadow-indigo-200"
            >
              <h4 className="text-xl font-bold">Curriculum Vitae</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                {locale === "es" ? "Descarga mi perfil profesional completo para conocer más sobre mi trayectoria." : "Download my professional profile to learn more about my background."}
              </p>
              <a 
                href={`${profile.resumeUrl}?dl=`} 
                target="_blank"
                className="inline-flex items-center gap-3 w-full justify-center py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-indigo-50 transition-colors"
              >
                Download PDF
              </a>
            </motion.div>
          )}
        </div>

        {/* Biografía & Skills */}
        <div className="lg:col-span-7 space-y-16">
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-500">About Me</h3>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-slate-900">
              Daniel <br /> Rojas<span className="text-indigo-500">.</span>
            </h2>
          </div>

          <div className="prose prose-2xl dark:prose-invert prose-p:text-slate-600 prose-p:leading-relaxed font-light">
            <PortableText value={bio} />
          </div>

          {/* Experience/Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {profile.skills?.map((skill: any, i: number) => (
              <div key={i} className="space-y-4 border-t border-slate-100 pt-8">
                <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-500">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items?.map((item: string, j: number) => (
                    <span key={j} className="text-lg text-slate-600 font-medium">
                      {item}{j < skill.items.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
