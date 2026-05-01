"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectHeroProps {
  badgeText?: string;
  badgeLinkText?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  projects?: Array<{ slug: string; imageUrl: string; title: string }>;
}

export function ProjectHero({
  badgeText = "Available for work",
  badgeLinkText = "View my resume",
  titleLine1 = "Product Designer",
  titleLine2 = "& Design Systems",
  description = "I design to transform behaviors, solve complex problems, and build impactful experiences. Focused on accessible, sustainable, and universal solutions.",
  primaryButtonText = "View Work",
  secondaryButtonText = "Storybook",
  projects = [],
}: ProjectHeroProps) {
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Si no hay proyectos pasados por prop, usamos placeholders (aunque en el home le pasaremos los reales)
  const displayProjects = projects.length > 0 ? projects : [
    { slug: "#", imageUrl: "https://framerusercontent.com/images/ahVYlOGVmRQtilp8rIMzHACkLwg.png", title: "Project" },
    { slug: "#", imageUrl: "https://framerusercontent.com/images/DwhzW74bv65tEhsGQw6W9JwgzA.png", title: "Project" },
    { slug: "#", imageUrl: "https://framerusercontent.com/images/1vkrffHADoKhflj9Xbw4JYOv2w.png", title: "Project" }
  ];

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white overflow-hidden flex flex-col lg:flex-row items-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Left Content Column */}
      <div className="w-full lg:w-[45%] z-20 px-6 md:px-12 lg:pl-24 pt-24 lg:pt-0 pb-12 lg:pb-0 flex flex-col gap-6 lg:gap-8 justify-center h-full">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-col gap-6 max-w-xl"
        >
          <motion.div variants={textVariants}>
            <div className="inline-flex items-center gap-2 pr-3 pl-1.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer group">
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {badgeText}
              </span>
              <span className="text-slate-600 dark:text-white/80 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {badgeLinkText}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-6xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] lg:leading-[0.85]"
          >
            {titleLine1} <br />
            <span className="text-indigo-500">{titleLine2}</span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-lg lg:text-xl text-slate-600 dark:text-white/60 leading-relaxed font-light max-w-md"
          >
            {description}
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="#projects" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-xl">
              {primaryButtonText}
            </Link>
            <a 
              href="http://localhost:6007" 
              target="_blank" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-white font-bold transition-all group"
            >
              <ExternalLink className="w-4 h-4 text-indigo-500 group-hover:rotate-12 transition-transform" />
              {secondaryButtonText}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column - INTERACTIVE 3D Isometric Project Grid */}
      <div className="w-full lg:w-[55%] h-[60vh] lg:h-screen relative perspective-[1500px] overflow-hidden">
        
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-[#0f172a] via-transparent to-transparent opacity-100 lg:w-48" />

        <motion.div 
          initial={{ opacity: 0, rotateX: 50, rotateZ: -30, rotateY: 5, y: 100 }}
          animate={{ opacity: 1, rotateX: 50, rotateZ: -30, rotateY: 5, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-10%] left-[15%] w-[120%] h-[140%] flex gap-6 lg:gap-10 origin-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Column 1 - Scrolling UP */}
          <motion.div 
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex flex-col gap-6 lg:gap-10 w-1/3 pt-32"
          >
            {[...displayProjects, ...displayProjects, ...displayProjects].map((project, i) => (
              <Link 
                key={`col1-${i}`} 
                href={project.slug !== "#" ? `/work/${project.slug}` : "#"}
                className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-white group hover:scale-[1.05] transition-transform duration-500 ease-out cursor-pointer"
              >
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/20 transition-colors duration-500" />
              </Link>
            ))}
          </motion.div>

          {/* Column 2 - Scrolling DOWN */}
          <motion.div 
            animate={{ y: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="flex flex-col gap-6 lg:gap-10 w-1/3"
          >
            {[...displayProjects, ...displayProjects, ...displayProjects].reverse().map((project, i) => (
              <Link 
                key={`col2-${i}`} 
                href={project.slug !== "#" ? `/work/${project.slug}` : "#"}
                className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-white group hover:scale-[1.05] transition-transform duration-500 ease-out cursor-pointer"
              >
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/20 transition-colors duration-500" />
              </Link>
            ))}
          </motion.div>

          {/* Column 3 - Scrolling UP */}
          <motion.div 
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex flex-col gap-6 lg:gap-10 w-1/3 pt-64"
          >
            {[...displayProjects, ...displayProjects, ...displayProjects].map((project, i) => (
              <Link 
                key={`col3-${i}`} 
                href={project.slug !== "#" ? `/work/${project.slug}` : "#"}
                className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-white group hover:scale-[1.05] transition-transform duration-500 ease-out cursor-pointer"
              >
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/20 transition-colors duration-500" />
              </Link>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
