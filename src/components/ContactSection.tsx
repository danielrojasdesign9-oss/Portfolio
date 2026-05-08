"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import { Locale } from "@/lib/utils-locale";

interface ContactSectionProps {
  locale: Locale;
  profile?: any;
}

export default function ContactSection({ locale, profile }: ContactSectionProps) {
  const email = profile?.email || "hello@danielrojas.design";
  const linkedinUrl = profile?.linkedinUrl || "https://www.linkedin.com/in/danielrojasdesign/";
  const whatsappNumber = "573174446641";

  const whatsappMessage = {
    es: "Hola Daniel, vi tu portafolio y me gustaría hablar sobre una oportunidad profesional...",
    en: "Hi Daniel, I saw your portfolio and would like to discuss a professional opportunity...",
    jp: "ダニエルさん、こんにちは。ポートフォリオを拝見しました。お仕事の件で相談させてください..."
  }[locale as Locale];

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage || "")}`;

  return (
    <section id="contact" className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-32">
      <div className="bg-black rounded-[24px] p-12 md:p-24 text-center text-white relative overflow-hidden">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-14"
        >
          <div className="space-y-6">
            <p className="text-[12px] font-black uppercase tracking-[0.5em] text-white/50">
              {locale === "es" ? "TRABAJEMOS JUNTOS" : locale === "jp" ? "一緒に働きましょう" : "LET'S WORK TOGETHER"}
            </p>
            <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] uppercase text-white">
              {locale === "es" ? "Hablemos" : locale === "jp" ? "話しましょう" : "Let's talk"}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Email Button */}
            <a
              href={`mailto:${email}`}
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black uppercase tracking-widest text-[11px] transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <Mail className="w-4 h-4" />
              {locale === "es" ? "Email" : locale === "jp" ? "メール" : "Email"}
            </a>

            {/* LinkedIn Button */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#0077B5] text-white font-black uppercase tracking-widest text-[11px] transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* WhatsApp Button - Recruiter Mode */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-white font-black uppercase tracking-widest text-[11px] transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
