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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#F9F7F4]"
    >
      <motion.div style={{ y, opacity, scale }} className="relative z-10 w-full max-w-[1200px]">
        {/* Category Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.6em] text-black/30 mb-8"
        >
          {category}
        </motion.p>

        {/* Massive Title - Increased Size */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase text-black"
        >
          {title}
          <span className="block md:inline md:ml-6 text-black/10"> — {year}</span>
        </motion.h1>
      </motion.div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-black/[0.01] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-black/10" />
      </motion.div>
    </section>
  );
}
