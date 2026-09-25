"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Email, LogoLinkedin, LogoGithub, ArrowRight } from "@carbon/icons-react";
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

const contactLinks = [
  { href: `mailto:danielrojasdesign9@gmail.com`, icon: Email, label: "Email" },
  { href: "https://www.linkedin.com/in/danielrojas010/", icon: LogoLinkedin, label: "LinkedIn", external: true },
  { href: "https://github.com/danielrojasdesign", icon: LogoGithub, label: "GitHub", external: true },
];

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
          className="flex gap-20 md:gap-16 items-start"
        >
          {/* Left: photo + social links */}
          <motion.div variants={item} className="flex flex-col justify-between shrink-0" style={{ width: "min(700px, 45%)" }}>
            <div className="relative overflow-hidden rounded-[8px]" style={{ height: "515px" }}>
              {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt={fullName}
                  fill
                  className="absolute"
                  style={{ height: "150%", left: "4.24%", top: "-25.09%", width: "95.76%", maxWidth: "none", objectFit: "cover" }}
                  priority
                />
              ) : (
                <div className="w-full h-full bg-[var(--color-bg-elevated)] flex items-center justify-center">
                  <span className="text-7xl md:text-9xl font-black text-[var(--color-primary)]">DR</span>
                </div>
              )}
            </div>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-x-10 items-center justify-end mt-6"
            >
              <span className="font-ibm-plex-bold font-bold text-[#444] text-[11px] tracking-[1.65px] uppercase leading-[16.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                Connect
              </span>

              <div className="flex gap-10 items-center">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex gap-2 items-center"
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="font-ibm-plex-medium font-medium text-[#333] text-[14px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: headline + description + CTAs */}
          <motion.div variants={item} className="flex flex-col gap-10 flex-1 min-w-0">
            <motion.div variants={item} className="flex flex-col gap-10">
              <h1 className="font-display font-black text-black" style={{ fontSize: "76px", letterSpacing: "-3.8px", lineHeight: "69.92px" }}>
                {headline.split(" ").map((word, i) => (
                  <span key={i}>{word}</span>
                )).reduce((acc, word, i) => {
                  if (i === 0) return [word];
                  const last = acc[acc.length - 1];
                  if (typeof last === "string" && last.endsWith("<br />")) {
                    acc[acc.length - 1] = last + " " + word;
                  } else {
                    acc.push(<br key={`br-${i}`} />, word);
                  }
                  return acc;
                }, [] as React.ReactNode[])}
              </h1>
              <p className="font-ibm-plex-medium font-medium text-[#333]" style={{ fontSize: "20px", lineHeight: "33px", maxWidth: "576px", fontVariationSettings: '"wdth" 100' }}>
                {description}
              </p>
            </motion.div>

            <motion.div variants={item} className="flex gap-4 items-start">
              <a
                href={`/?lang=${locale}#contact`}
                className="relative bg-[#393939] border border-transparent rounded-[8px] min-h-[48px] flex items-center pl-4 pr-[63px] py-[14px] shrink-0"
              >
                <span className="font-ibm-plex-regular text-[14px] text-white tracking-[0.16px] leading-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>Let&apos;s Talk</span>
                <ArrowRight className="absolute right-4 size-4" style={{ top: "14.99px" }} />
              </a>
              <a
                href={`/about?lang=${locale}`}
                className="relative bg-[var(--color-primary)] border border-transparent rounded-[8px] min-h-[48px] flex items-center pl-4 pr-[63px] py-[14px] shrink-0"
              >
                <span className="font-ibm-plex-regular text-[14px] text-white tracking-[0.16px] leading-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>About Me</span>
                <ArrowRight className="absolute right-4 size-4" style={{ top: "14.99px" }} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}