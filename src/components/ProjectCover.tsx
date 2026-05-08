"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface ProjectCoverProps {
  title: string;
  category: string;
  year: string;
}

export default function ProjectCover({ title, category, year }: ProjectCoverProps) {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F9F7F4]">
      {/* Subtle warm atmosphere */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(200,230,210,0.5) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(210,220,255,0.4) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1078px] w-full px-6 flex flex-col items-center text-center gap-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] font-black uppercase tracking-[0.6em] text-black/30"
        >
          {category} — {year}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.82] uppercase text-black"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <ArrowLeft className="w-5 h-5 text-black/30 rotate-[-90deg] animate-bounce" />
        </motion.div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none select-none">
        <span className="text-[22vw] font-black uppercase tracking-tighter leading-none text-black/[0.025]">
          {title}
        </span>
      </div>
    </header>
  );
}
