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

export default function HorizontalProjects({ projects, locale }: HorizontalProjectsProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transformación para el movimiento horizontal
  // Multiplicamos por la cantidad de proyectos para determinar el recorrido
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}%`]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Scroll Indicator Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>

        <motion.div style={{ x }} className="flex gap-0">
          {projects.map((project, i) => (
            <div 
              key={project._id} 
              className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 md:px-24"
            >
              {/* Título de Fondo Gigante (Editorial Style) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.h2 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  className="text-[25vw] font-black uppercase tracking-tighter text-white whitespace-nowrap leading-none"
                >
                  {getLocaleText(project.title, locale)}
                </motion.h2>
              </div>

              {/* Tarjeta del Proyecto */}
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-5xl aspect-video md:aspect-[21/9] rounded-[40px] overflow-hidden group shadow-2xl border border-white/10"
              >
                <Image 
                  src={project.imageUrl} 
                  alt={getLocaleText(project.title, locale)} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay de información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                      <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm">
                        {getLocaleText(project.category, locale)}
                      </p>
                      <h3 className="text-4xl md:text-6xl font-bold text-white">
                        {getLocaleText(project.title, locale)}
                      </h3>
                    </div>
                    <Link 
                      href={`/work/${project.slug}?lang=${locale}`}
                      className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform"
                    >
                      <ArrowUpRight className="w-8 h-8" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Indicador de número */}
              <div className="absolute bottom-12 left-12 md:left-24">
                <span className="text-white/20 text-8xl md:text-[12rem] font-black leading-none">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
    </section>
  );
}
