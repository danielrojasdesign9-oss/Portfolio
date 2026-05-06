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
    <section id="about" className="max-w-7xl mx-auto px-6 py-32 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Foto de Perfil */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-slate-100 dark:bg-white/5 border border-border group">
            {profile.profileImageUrl ? (
              <Image 
                src={profile.profileImageUrl} 
                alt={profile.fullName} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                Añade tu foto en Sanity
              </div>
            )}
          </div>
          {/* Decoración flotante */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -z-10" />
        </motion.div>

        {/* Información y Bio */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col gap-10"
        >
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
              {locale === "es" ? "Sobre Mí" : locale === "jp" ? "私について" : "About Me"}
            </h3>
            <h2 className="text-5xl font-semibold tracking-tight">
              {locale === "es" ? "Diseño con propósito" : locale === "jp" ? "目的と心を持って" : "I design with"} <br /> {locale === "es" ? "y corazón." : locale === "jp" ? "設計します。" : "purpose and heart."}
            </h2>
          </div>

          <div className="prose prose-xl dark:prose-invert prose-p:text-slate-500 dark:prose-p:text-white/60 prose-p:leading-relaxed font-light">
            <PortableText value={bio} />
          </div>

          {/* Resume Download Button */}
          {profile.resumeUrl && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href={`${profile.resumeUrl}?dl=`} 
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 text-indigo-600 dark:text-indigo-300 font-bold hover:bg-indigo-100 dark:hover:bg-white/10 transition-all group w-fit"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {locale === "es" ? "Descargar CV (PDF)" : locale === "jp" ? "履歴書をダウンロード (PDF)" : "Download Resume (PDF)"}
              </a>
            </motion.div>
          )}

          {/* Skills Grid - Untitled UI Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {profile.skills?.map((skill: any, i: number) => (
              <div key={i} className="space-y-4 p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-500">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items?.map((item: string, j: number) => (
                    <span key={j} className="px-3 py-1 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-white/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
