"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Locale } from "@/lib/utils-locale";

interface ContactSectionProps {
  locale: Locale;
}

export default function ContactSection({ locale }: ContactSectionProps) {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-32 md:px-12 lg:px-24">
      <div className="bg-slate-900 dark:bg-indigo-600 rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
        
        {/* Glow decoration */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/20 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-12"
        >
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">
              {locale === "es" ? "Trabajemos juntos" : locale === "jp" ? "一緒に働きましょう" : "Let's work together"}
            </h3>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tight">
              {locale === "es" ? "Hablemos." : locale === "jp" ? "話しましょう。" : "Let's talk."}
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              {locale === "es" 
                ? "¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy siempre abierto a nuevas oportunidades y colaboraciones creativas." 
                : locale === "jp"
                ? "プロジェクトの相談や、ただの挨拶でも大歓迎です。新しい機会やクリエイティブなコラボレーションをいつでもお待ちしています。"
                : "Got a project in mind or just want to say hi? I'm always open to new opportunities and creative collaborations."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:hello@danielrojas.design" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white text-slate-900 font-bold transition-all hover:scale-105 active:scale-95 shadow-xl group"
            >
              <Mail className="w-5 h-5 text-indigo-600" />
              {locale === "es" ? "Escríbeme" : locale === "jp" ? "メールを送る" : "Email Me"}
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
            </a>
            <a 
              href="https://www.linkedin.com/in/danielrojasdesign/" 
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-black/20 hover:bg-black/30 border border-white/20 text-white font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Conectemos en LinkedIn
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
