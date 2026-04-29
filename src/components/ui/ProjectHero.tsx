"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

interface ProjectHeroProps {
  badgeText?: string;
  badgeLinkText?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  projectImages?: string[];
}

export function ProjectHero({
  badgeText = "Available for work",
  badgeLinkText = "View my resume",
  titleLine1 = "The ultimate Figma UI kit",
  titleLine2 = "and React component library",
  description = "Untitled UI is the world's largest Figma UI kit and React component library. Kickstart any project with everything you need to design and build.",
  primaryButtonText = "Buy now",
  secondaryButtonText = "Untitled UI React",
  projectImages = [
    "https://framerusercontent.com/images/ahVYlOGVmRQtilp8rIMzHACkLwg.png",
    "https://framerusercontent.com/images/DwhzW74bv65tEhsGQw6W9JwgzA.png",
    "https://framerusercontent.com/images/1vkrffHADoKhflj9Xbw4JYOv2w.png",
    "https://framerusercontent.com/images/YPpJSYy0dpOvyt0XifFVtJp7g.png",
    "https://framerusercontent.com/images/kqk6EZyGDVemBN8MngYvcSHBQY.png",
    "https://framerusercontent.com/images/TJeRMYjMTFXEppFy7LI8JJL6g.png",
  ],
}: ProjectHeroProps) {
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-white overflow-hidden flex flex-col lg:flex-row items-center">
      
      {/* Left Content Column */}
      <div className="w-full lg:w-[45%] z-20 px-6 md:px-12 lg:pl-24 pt-24 lg:pt-0 pb-12 lg:pb-0 flex flex-col gap-6 lg:gap-8 justify-center h-full">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-col gap-6 max-w-xl"
        >
          {/* Badge */}
          <motion.div variants={textVariants}>
            <div className="inline-flex items-center gap-2 pr-3 pl-1.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer group">
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {badgeText}
              </span>
              <span className="text-slate-600 dark:text-white/80 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {badgeLinkText}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={textVariants}
            className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
          >
            {titleLine1} <br />
            {titleLine2}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={textVariants}
            className="text-lg lg:text-xl text-slate-600 dark:text-white/60 leading-relaxed font-light"
          >
            {description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-white font-semibold transition-all shadow-sm">
              <PlayCircle className="w-5 h-5 text-blue-500" />
              {secondaryButtonText}
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all shadow-[0_4px_14px_0_rgb(99,102,241,0.39)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)]">
              {primaryButtonText}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column - 3D Isometric Project Grid */}
      <div className="w-full lg:w-[55%] h-[60vh] lg:h-screen relative perspective-[1200px] overflow-hidden bg-slate-50 dark:bg-transparent">
        
        {/* Gradient Mask for fading out edges */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#f8fafc] dark:from-[#0f172a] via-transparent to-transparent opacity-100 lg:w-32" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#f8fafc] dark:from-[#0f172a] via-transparent to-[#f8fafc] dark:to-[#0f172a] opacity-100" />

        {/* 3D Container */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 55, rotateZ: -35, rotateY: 10, y: 100, x: 50 }}
          animate={{ opacity: 1, rotateX: 55, rotateZ: -35, rotateY: 10, y: 0, x: 50 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-20%] left-[10%] lg:left-[20%] w-[120%] h-[150%] flex gap-8 origin-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Column 1 - Scrolling UP */}
          <motion.div 
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex flex-col gap-8 w-1/3 pt-32"
          >
            {[...projectImages, ...projectImages].map((img, i) => (
              <div key={`col1-${i}`} className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10 bg-white">
                <Image src={img} alt="Project mockup" fill className="object-cover" />
              </div>
            ))}
          </motion.div>

          {/* Column 2 - Scrolling DOWN */}
          <motion.div 
            animate={{ y: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex flex-col gap-8 w-1/3"
          >
            {[...projectImages, ...projectImages].reverse().map((img, i) => (
              <div key={`col2-${i}`} className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10 bg-white">
                <Image src={img} alt="Project mockup" fill className="object-cover" />
              </div>
            ))}
          </motion.div>

          {/* Column 3 - Scrolling UP */}
          <motion.div 
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex flex-col gap-8 w-1/3 pt-64"
          >
            {[...projectImages, ...projectImages].map((img, i) => (
              <div key={`col3-${i}`} className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10 bg-white">
                <Image src={img} alt="Project mockup" fill className="object-cover" />
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
