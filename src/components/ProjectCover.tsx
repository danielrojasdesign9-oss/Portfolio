"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectCoverProps {
  title: string;
  category: string;
  year: string;
}

export default function ProjectCover({ title, category, year }: ProjectCoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] md:min-h-[100vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#F9F7F4]"
    >
      {/* Background Opacity Text (Restored) */}
      <motion.div 
        style={{ x: bgTextX }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none whitespace-nowrap"
      >
        <span className="text-[20vw] font-black uppercase text-black/[0.02] leading-none">
          {title} {title}
        </span>
      </motion.div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 w-full max-w-[1200px]">
        {/* Date / Year Tag (Top) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 rounded-full border border-black/20 text-[10px] font-black uppercase tracking-[0.4em] text-black mb-10"
        >
          {year}
        </motion.div>

        {/* Category */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[12px] font-black uppercase tracking-[0.6em] text-black/40 mb-6"
        >
          {category}
        </motion.p>

        {/* Massive Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter leading-[0.8] uppercase text-black"
        >
          {title}
        </motion.h1>
      </motion.div>
      
      {/* Scroll Indicator (Arrow/Line Restored) */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] font-black uppercase tracking-widest text-black/30">Scroll</span>
        <div className="w-px h-16 bg-black" />
      </motion.div>
    </section>
  );
}
