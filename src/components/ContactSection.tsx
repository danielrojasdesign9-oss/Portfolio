"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
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
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">Let's work together</h3>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tight">Hablemos.</h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy siempre abierto a nuevas oportunidades y colaboraciones creativas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:hello@danielrojas.design" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white text-slate-900 font-bold transition-all hover:scale-105 active:scale-95 shadow-xl group"
            >
              <Mail className="w-5 h-5 text-indigo-600" />
              Escríbeme por Correo
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
            </a>
            <a 
              href="https://www.linkedin.com/in/danielrojasdesign/" 
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-black/20 hover:bg-black/30 border border-white/20 text-white font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <Linkedin className="w-5 h-5" />
              Conectemos en LinkedIn
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
