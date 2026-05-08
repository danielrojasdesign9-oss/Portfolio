"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getLocaleText, Locale } from "@/lib/utils-locale";

interface HorizontalProjectsProps {
  projects: any[];
  locale: Locale;
}

export default function HorizontalProjects({ projects, locale }: any) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 100}%`]
  );

  return (
    <motion.section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        height: `${projects.length * 100}vh`,
        backgroundColor: "var(--color-midnight-canvas)",
      }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center">
        
        {/* Subtle Light Atmosphere */}
        <div className="absolute inset-0 opacity-40 blur-[120px] scale-150 pointer-events-none" style={{ background: "var(--gradient-deep-ocean)" }} />

        {/* Display Text: Subtle in Light Mode */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[20vw] font-black uppercase tracking-[-0.08em] text-black/[0.03] whitespace-nowrap leading-none select-none">
            Daniel Rojas
          </h2>
        </div>

        <motion.div style={{ x }} className="flex h-full items-center">
          {projects.map((project: any, i: number) => (
            <ProjectCard key={project._id} project={project} index={i} locale={locale} scrollYProgress={scrollYProgress} totalProjects={projects.length} />
          ))}
        </motion.div>
      </div>

      {/* Progress Bar: Dark in Light Mode */}
      <div className="absolute bottom-12 left-12 right-12 flex items-center gap-6 z-50">
        <span className="text-[10px] font-black text-black/20">01</span>
        <div className="flex-1 h-[1px] bg-black/5 relative overflow-hidden">
          <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-0 bg-black origin-left" />
        </div>
        <span className="text-[10px] font-black text-black/20">0{projects.length}</span>
      </div>
    </motion.section>
  );
}

function ProjectCard({ project, index, locale, scrollYProgress, totalProjects }: any) {
  const start = index / totalProjects;
  const end = (index + 1) / totalProjects;
  
  const objectPosition = useTransform(
    scrollYProgress,
    [start, end],
    ["100% 0%", "0% 0%"]
  );

  return (
    <div className="relative w-screen h-full flex-shrink-0 flex items-center justify-center px-6">
      <Link href={`/work/${project.slug}?lang=${locale}`} className="block w-[40vw] max-w-[500px] group relative h-[55vh]">
        <div className="relative w-full h-full overflow-hidden rounded-[8px] border border-black/5 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.04)]">
          <motion.img 
            src={project.imageUrl} 
            alt={getLocaleText(project.title, locale)} 
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
            style={{ objectPosition }}
          />
          
          {/* Subtle Gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/40">
                {getLocaleText(project.category, locale)}
              </p>
              <h3 className="text-4xl font-black uppercase tracking-tighter text-black leading-none">
                {getLocaleText(project.title, locale)}
              </h3>
            </div>
          </div>
        </div>
        
        {/* Floating project number: Subtle Dark */}
        <div className="absolute -top-8 -right-8 text-[8vw] font-black text-black/[0.04] select-none pointer-events-none leading-none">
          0{index + 1}
        </div>
      </Link>
    </div>
  );
}
