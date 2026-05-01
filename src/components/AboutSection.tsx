"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

interface AboutSectionProps {
  profile: {
    fullName: string;
    role: string;
    bio: any;
    skills: Array<{ category: string; items: string[] }>;
    profileImageUrl?: string;
  };
}

export default function AboutSection({ profile }: AboutSectionProps) {
  if (!profile) return null;

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
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">About Me</h3>
            <h2 className="text-5xl font-semibold tracking-tight">I design with <br /> purpose and heart.</h2>
          </div>

          <div className="prose prose-xl dark:prose-invert prose-p:text-slate-500 dark:prose-p:text-white/60 prose-p:leading-relaxed font-light">
            <PortableText value={profile.bio} />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
            {profile.skills?.map((skillGroup, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items?.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-white/70">
                      {skill}
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
