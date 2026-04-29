"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  badgeText?: string;
  badgeLinkText?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export function HeroSection({
  badgeText = "New feature",
  badgeLinkText = "Check out the new dashboard",
  titleLine1 = "Beautiful analytics to grow",
  titleLine2 = "smarter",
  description = "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
  primaryButtonText = "Sign up",
  secondaryButtonText = "Demo",
}: HeroSectionProps) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
      },
    },
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 md:px-8">
      {/* Glow Background - Untitled UI Signature */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-3 pr-3 pl-1 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer group">
            <span className="px-2 py-0.5 rounded-full bg-white text-black text-xs font-semibold">
              {badgeText}
            </span>
            <span className="text-white/80 group-hover:text-white transition-colors">
              {badgeLinkText}
            </span>
            <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-tight"
        >
          {titleLine1} <br />
          <span className="text-white/40">{titleLine2}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed font-light"
        >
          {description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-all hover:scale-[1.02] active:scale-95">
            <PlayCircle className="w-5 h-5 text-white/70" />
            {secondaryButtonText}
          </button>
          <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white text-black hover:bg-white/90 font-medium transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            {primaryButtonText}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
