"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Email, LogoLinkedin, LogoGithub } from "@carbon/icons-react";
import CarbonLinkButton from "@/components/ui/CarbonLinkButton";
import type { Locale } from "@/lib/utils-locale";

interface HeroSectionProps {
  locale: Locale;
  headline: string;
  description: string;
  profileImageUrl?: string | null;
  fullName?: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection({
  locale,
  headline,
  description,
  profileImageUrl,
  fullName = "Daniel Rojas",
  email,
  linkedinUrl,
  githubUrl,
}: HeroSectionProps) {
  const reduced = useReducedMotion();
  const contactLinks = [
    { href: `mailto:${email}`, icon: Email, label: locale === "es" ? "Email" : locale === "jp" ? "メール" : "Email" },
    { href: linkedinUrl, icon: LogoLinkedin, label: "LinkedIn", external: true },
    { href: githubUrl, icon: LogoGithub, label: "GitHub", external: true },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: reduced ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.7, ease } },
  };

  return (
    <section className="relative flex items-start justify-center px-4 md:px-8 pt-[calc(var(--header-height)+1.5rem)] pb-8 md:pb-12">
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-start justify-start gap-10 md:gap-16 pt-4 md:pt-8"
        >
          <motion.div variants={item} className="flex-shrink-0 relative w-full md:w-1/2 max-w-[480px] md:max-w-[560px] mx-auto md:mx-0">
            <div className="relative aspect-square max-w-[480px] mx-auto md:max-w-none">
              <motion.div
                initial={reduced ? false : { clipPath: "inset(8% 8% 8% 8% round 8px)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0% round 8px)" }}
                transition={{ duration: reduced ? 0 : 1.1, ease }}
                className="relative aspect-square overflow-hidden rounded-[8px] border-[3px] border-[var(--color-primary)] shadow-2xl shadow-[inset_0_18px_36px_-16px_rgba(0,0,0,0.45)]"
              >
                {profileImageUrl ? (
                  <Image
                    src={profileImageUrl}
                    alt={fullName}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--color-bg-elevated)] flex items-center justify-center">
                    <span className="text-7xl md:text-9xl font-black text-[var(--color-primary)]">DR</span>
                  </div>
                )}
              </motion.div>
            </div>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3 mt-8 max-w-[480px] ml-auto mr-0 md:max-w-none"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)]">
                {locale === "es" ? "Conecta conmigo" : locale === "jp" ? "つながる" : "Connect"}
              </p>
              <div className="flex items-center gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="flex-1 text-center md:w-1/2 max-w-2xl mx-auto md:mx-0 md:text-left self-stretch md:self-start">
            <motion.h1
              variants={item}
              className="font-display text-[2.75rem] md:text-6xl lg:text-[4.75rem] font-black tracking-tighter leading-[0.92] mb-8 text-balance"
            >
              {headline}
            </motion.h1>
            <motion.p
              variants={item}
              className="text-lg md:text-xl font-medium text-[var(--color-text-secondary)] leading-relaxed mb-12 max-w-xl mx-auto md:mx-0"
            >
              {description}
            </motion.p>

            <motion.div variants={item} className="flex flex-row flex-wrap gap-4 justify-center md:justify-start">
              <CarbonLinkButton href={`/about?lang=${locale}`} icon="ArrowRight" kind="primary" size="lg">
                {locale === "es" ? "Conóceme más" : locale === "jp" ? "私について" : "About Me"}
              </CarbonLinkButton>
              <CarbonLinkButton href={`/?lang=${locale}#contact`} kind="secondary" size="lg">
                {locale === "es" ? "Hablemos" : locale === "jp" ? "お問い合わせ" : "Let's Talk"}
              </CarbonLinkButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
