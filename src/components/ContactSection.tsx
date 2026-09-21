"use client";

import { motion } from "framer-motion";
import { Email, LogoLinkedin, Chat } from "@carbon/icons-react";
import { Locale } from "@/lib/utils-locale";
import CarbonLinkButton from "@/components/ui/CarbonLinkButton";

interface ContactSectionProps {
  locale: Locale;
  profile?: any;
}

export default function ContactSection({ locale, profile }: ContactSectionProps) {
  const email = profile?.email || "hello@danielrojas.design";
  const linkedinUrl = profile?.linkedinUrl || "https://www.linkedin.com/in/danielrojasdesign/";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573174446641";

  const whatsappMessage = {
    es: "Hola Daniel, vi tu portafolio y me gustaría hablar sobre una oportunidad profesional...",
    en: "Hi Daniel, I saw your portfolio and would like to discuss a professional opportunity...",
    jp: "ダニエルさん、こんにちは。ポートフォリオを拝見しました。お仕事の件で相談させてください...",
  }[locale as Locale];

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage || "")}`;

  return (
    <section id="contact" className="max-w-[1400px] mx-auto px-4 md:px-8 py-24">
      <div className="bg-[var(--color-bg-dark)] rounded-[14px] p-10 md:p-20 text-center text-[var(--color-text-inverse)] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-10"
        >
          <div className="space-y-4">
            <p className="text-[12px] font-bold tracking-[0.4em] text-white/50">
              {locale === "es"
                ? "TRABAJEMOS JUNTOS"
                : locale === "jp"
                ? "一緒に働きましょう"
                : "LET'S WORK TOGETHER"}
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">
              {locale === "es" ? "Hablemos" : locale === "jp" ? "話しましょう" : "Let's talk"}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <CarbonLinkButton
              href={`mailto:${email}`}
              kind="tertiary"
              size="lg"
              icon="Email"
              className="w-full md:w-auto"
            >
              Email
            </CarbonLinkButton>

            <CarbonLinkButton
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              kind="tertiary"
              size="lg"
              icon="LogoLinkedin"
              className="w-full md:w-auto"
            >
              LinkedIn
            </CarbonLinkButton>

            <CarbonLinkButton
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              kind="primary"
              size="lg"
              icon="Chat"
              className="w-full md:w-auto"
            >
              WhatsApp
            </CarbonLinkButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
