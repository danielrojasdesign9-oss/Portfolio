"use client";

import { motion } from "framer-motion";
import { Locale } from "@/lib/utils-locale";
import CarbonLinkButton from "@/components/ui/CarbonLinkButton";

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
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573174446641";

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
    <section id="contact" className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 scroll-mt-[var(--header-height)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end border-t border-[var(--color-border-subtle)] pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xl font-medium text-[var(--color-text-secondary)]">
            {copy.kicker}
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] whitespace-pre-line">
            {copy.title}
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-md leading-relaxed">{copy.body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 min-w-0"
        >
          <CarbonLinkButton href={`mailto:${email}`} kind="primary" size="lg" icon="Email" className="w-full sm:w-auto sm:flex-1 lg:w-full xl:w-auto xl:flex-1 min-w-0 rounded-[var(--radius-md)]">
            Email
          </CarbonLinkButton>
          <CarbonLinkButton
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            kind="secondary"
            size="lg"
            icon="LogoLinkedin"
            className="w-full sm:w-auto sm:flex-1 lg:w-full xl:w-auto xl:flex-1 min-w-0 rounded-[var(--radius-md)]"
          >
            LinkedIn
          </CarbonLinkButton>
          <CarbonLinkButton
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            kind="tertiary"
            size="lg"
            icon="Chat"
            className="w-full sm:w-auto sm:flex-1 lg:w-full xl:w-auto xl:flex-1 min-w-0 pr-2 rounded-[var(--radius-md)]"
          >
            WhatsApp
          </CarbonLinkButton>
        </motion.div>
      </div>
    </section>
  );
}
