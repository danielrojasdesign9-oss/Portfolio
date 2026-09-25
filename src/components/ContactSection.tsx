"use client";

import { motion } from "framer-motion";
import { Locale } from "@/lib/utils-locale";
import { Email, LogoLinkedin, Chat } from "@carbon/icons-react";
import React from "react";

interface ContactSectionProps {
  locale: Locale;
  profile?: {
    email?: string;
    linkedinUrl?: string;
  };
}

export default function ContactSection({ locale, profile }: ContactSectionProps) {
  const email = profile?.email || "hello@danielrojas.design";
  const linkedinUrl = profile?.linkedinUrl || "https://www.linkedin.com/in/danielrojasdesign/";
  const whatsappNumber = "573174446641";

  const whatsappMessage = {
    es: "Hola Daniel, vi tu portafolio y me gustaría hablar sobre una oportunidad profesional...",
    en: "Hi Daniel, I saw your portfolio and would like to discuss a professional opportunity...",
    jp: "ダニエルさん、こんにちは。ポートフォリオを拝見しました。お仕事の件で相談させてください...",
  }[locale];

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage || "")}`;

  const copy = {
    en: {
      kicker: "Let's work together",
      title: "Have a brief,\nnot a form.",
      body: "Write directly. I reply to email, LinkedIn, and WhatsApp — no empty inbox theater.",
    },
    es: {
      kicker: "Trabajemos juntos",
      title: "Un brief,\nno un formulario.",
      body: "Escríbeme directo. Respondo por email, LinkedIn y WhatsApp — sin formularios vacíos.",
    },
    jp: {
      kicker: "一緒に働きましょう",
      title: "フォームではなく、\n直接どうぞ。",
      body: "メール、LinkedIn、WhatsAppで直接ご連絡ください。",
    },
  }[locale];

  return (
    <section id="contact" className="max-w-[1400px] mx-auto px-8 pt-16 pb-8 border-t border-[#b8b8b8]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex gap-20 items-start flex-wrap"
      >
        {/* Left */}
        <div className="flex flex-col gap-[23px] shrink-0" style={{ width: "min(448px, 100%)" }}>
          <p className="font-ibm-plex-medium font-medium text-[#333] text-[20px] leading-[33px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            {copy.kicker}
          </p>
          <h2 className="font-display font-black text-black" style={{ fontSize: "72px", letterSpacing: "-3.6px", lineHeight: "64.8px" }}>
            {copy.title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 items-start flex-1 min-w-0">
          <p className="font-ibm-plex-regular text-[#333] text-[18px] leading-[29.7px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            {copy.body}
          </p>
          <div className="flex gap-10 items-center flex-wrap">
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] border border-transparent rounded-[8px] min-h-[48px] flex items-center gap-4 px-4 py-[15px] w-[206px]"
            >
              <Email className="w-4 h-4 shrink-0" />
              <span className="font-ibm-plex-regular text-[14px] text-white tracking-[0.16px] leading-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>Email</span>
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#393939] border border-transparent rounded-[8px] min-h-[48px] flex items-center gap-4 pl-[15px] pr-16 py-[14px] w-[276px]"
            >
              <LogoLinkedin className="w-4 h-4 shrink-0" />
              <span className="font-ibm-plex-regular text-[14px] text-white tracking-[0.16px] leading-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>LinkedIn</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--color-primary)] rounded-[8px] min-h-[48px] flex items-center gap-4 px-4 py-[15px] w-[250px]"
            >
              <Chat className="w-4 h-4 shrink-0 text-[var(--color-primary)]" />
              <span className="font-ibm-plex-regular text-[var(--color-primary)] text-[14px] tracking-[0.16px] leading-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}