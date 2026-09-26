"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Email, LogoLinkedin, LogoGithub, ArrowRight, Download } from "@carbon/icons-react";
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
  resumeUrl?: string | null;
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
  resumeUrl,
}: HeroSectionProps) {
  const reduced = useReducedMotion();

  const contactLinks = [
    { href: `mailto:${email}`, icon: Email, label: "Email" },
    { href: linkedinUrl, icon: LogoLinkedin, label: "LinkedIn", external: true },
    { href: githubUrl, icon: LogoGithub, label: "GitHub", external: true },
    ...(resumeUrl ? [{ href: resumeUrl, icon: Download, label: "Download CV", external: true }] : []),
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
          className="flex flex-col md:flex-row gap-10 md:gap-16 items-start"
        >
          {/* Left: photo + social links */}
          <motion.div variants={item} className="flex flex-col justify-between shrink-0 w-full md:w-1/2 max-w-[480px]">
            <div className="relative aspect-square max-w-[480px] mx-auto md:max-w-none rounded-[8px] overflow-hidden">
              {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt={fullName}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              ) : (
                <div className="w-full h-full bg-[var(--color-bg-elevated)] flex items-center justify-center">
                  <span className="text-7xl md:text-9xl font-black text-[var(--color-primary)]">DR</span>
                </div>
              )}
            </div>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-x-6 gap-y-3 mt-6 justify-center md:justify-end"
            >
              <span className="font-bold text-[var(--color-text-tertiary)] text-[11px] tracking-[1.65px] uppercase leading-[16.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                Connect
              </span>
              <div className="flex flex-wrap gap-6 items-center justify-center md:justify-end">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex gap-2 items-center"
                  >
                    <link.icon className="w-5 h-5 text-[var(--color-text-secondary)]" />
                    <span className="font-medium text-[var(--color-text-secondary)] text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: headline + description + CTAs */}
          <motion.div variants={item} className="flex flex-col gap-10 flex-1 min-w-0 w-full">
            <motion.div variants={item} className="flex flex-col gap-6">
              <h1 className="font-display font-black text-[var(--color-text-primary)] text-balance" style={{ fontSize: "clamp(48px, 8vw, 76px)", letterSpacing: "-0.05em", lineHeight: "0.92" }}>
                {headline}
              </h1>
              <p className="font-medium text-[var(--color-text-secondary)] max-w-[576px]" style={{ fontSize: "clamp(18px, 2.5vw, 20px)", lineHeight: "1.65", fontVariationSettings: '"wdth" 100' }}>
                {description}
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={`/?lang=${locale}#contact`}
                className="relative bg-[#393939] border border-transparent rounded-[12px] min-h-[48px] flex items-center pl-6 pr-12 py-[14px] shrink-0 w-full sm:w-auto text-center"
              >
                <span className="text-[14px] text-white tracking-[0.16px] leading-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>Let&apos;s Talk</span>
                <ArrowRight className="absolute right-4 size-4 text-white" style={{ top: "14.99px" }} />
              </a>
              <a
                href={`/about?lang=${locale}`}
                className="relative bg-[var(--color-primary)] border border-transparent rounded-[12px] min-h-[48px] flex items-center pl-6 pr-12 py-[14px] shrink-0 w-full sm:w-auto text-center"
              >
                <span className="text-[14px] text-white tracking-[0.16px] leading-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>About Me</span>
                <ArrowRight className="absolute right-4 size-4 text-white" style={{ top: "14.99px" }} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}