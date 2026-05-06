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
  // Ajustamos el rango para que cada proyecto tenga su "momento" central
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}%`]);

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-[#f8f9fa]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Nombre de Fondo Persistente */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h2 
            style={{ 
              x: useTransform(scrollYProgress, [0, 1], [200, -200]),
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.03, 0.03, 0])
            }}
            className="text-[35vw] font-black uppercase tracking-tighter text-slate-900 whitespace-nowrap leading-none select-none"
          >
            Daniel Rojas
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex gap-0 h-full items-center">
          {projects.map((project, i) => {
            // Calculamos puntos de control seguros para la animación
            const center = i / projects.length;
            const step = 1 / projects.length;
            const start = Math.max(0, center - step / 2);
            const end = Math.min(1, center + step / 2);
            
            return (
              <div 
                key={project._id} 
                className="relative w-screen h-full flex-shrink-0 flex items-center justify-center px-12"
              >
                {/* Carta Pequeña y Elegante */}
                <motion.div 
                  style={{
                    scale: useTransform(scrollYProgress, [start, center, end], [0.9, 1, 0.9]),
                    opacity: useTransform(scrollYProgress, [start, center, end], [0.6, 1, 0.6])
                  }}
                  className="relative z-10 w-full max-w-2xl aspect-[4/5] md:aspect-[3/4] rounded-[32px] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-4 border-white bg-white"
                >
                  <Image 
                    src={project.imageUrl} 
                    alt={getLocaleText(project.title, locale)} 
                    fill 
                    className="object-cover"
                  />
                  
                  {/* Info Overlay minimalista */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-12">
                    <p className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
                      {getLocaleText(project.category, locale)}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6">
                      {getLocaleText(project.title, locale)}
                    </h3>
                    <Link 
                      href={`/work/${project.slug}?lang=${locale}`}
                      className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-indigo-400 transition-colors"
                    >
                      View Case Study <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>

                {/* Número de proyecto discreto */}
                <div className="absolute bottom-12 right-12 md:right-24 font-black text-slate-200 text-6xl">
                  {i + 1}
                </div>
              </div>
            );
          })}
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
