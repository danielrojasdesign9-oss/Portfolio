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
    <section className="relative min-h-[calc(100svh-var(--header-height))] flex items-center justify-center px-4 md:px-8 pt-[calc(var(--header-height)+1.5rem)]">
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 py-12 md:py-20"
        >
          <motion.div variants={item} className="flex-shrink-0 relative w-full md:w-1/2">
            <div className="relative aspect-square max-w-[480px] mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-midnight)] via-[var(--color-indigo)] to-[var(--color-merlot)] rounded-full opacity-10 blur-2xl" />
              <motion.div
                initial={reduced ? false : { clipPath: "circle(0% at 50% 50%)" }}
                animate={{ clipPath: "circle(75% at 50% 50%)" }}
                transition={{ duration: reduced ? 0 : 1.1, ease }}
                className="relative aspect-square overflow-hidden rounded-full border-[3px] border-[var(--color-primary)] shadow-2xl ring-4 ring-[var(--color-bg)]"
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
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5" aria-hidden>
                <div className="w-5 h-5 rounded-full bg-[var(--color-midnight)]" />
                <div className="w-5 h-5 rounded-full bg-[var(--color-indigo)]" />
                <div className="w-5 h-5 rounded-full bg-[var(--color-merlot)]" />
                <div className="w-5 h-5 rounded-full bg-[var(--color-silver-mist)] border border-[var(--color-border-subtle)]" />
                <div className="w-5 h-5 rounded-full bg-[var(--color-onyx)]" />
              </div>
            </div>
          </motion.div>

          <div className="flex-1 text-center md:w-1/2 max-w-2xl mx-auto md:mx-0 md:text-left">
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

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-16">
              <CarbonLinkButton href={`/about?lang=${locale}`} icon="ArrowRight" kind="primary" size="lg">
                {locale === "es" ? "Conóceme más" : locale === "jp" ? "私について" : "About Me"}
              </CarbonLinkButton>
              <CarbonLinkButton href={`/?lang=${locale}#contact`} kind="secondary" size="lg">
                {locale === "es" ? "Hablemos" : locale === "jp" ? "お問い合わせ" : "Let's Talk"}
              </CarbonLinkButton>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-8 border-t border-[var(--color-border-subtle)]"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] self-center">
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
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-tertiary)]"
        animate={reduced ? undefined : { y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[9px] font-bold uppercase tracking-widest">
          {locale === "es" ? "Desplázate" : locale === "jp" ? "スクロール" : "Scroll"}
        </span>
        <div className="w-px h-10 bg-current" />
      </motion.div>
    </section>
  );
}
