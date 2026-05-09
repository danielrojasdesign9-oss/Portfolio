'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface GalleryImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function GalleryImage({ src, alt, caption }: GalleryImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="space-y-4 group cursor-zoom-in" onClick={() => setIsOpen(true)}>
        {/* Contenedor optimizado: sin padding y con altura adaptable para reducir bordes blancos */}
        <div className="relative w-full aspect-[16/9] md:aspect-video rounded-[8px] overflow-hidden border border-black/5 shadow-lg bg-white">
          <Image 
            src={src} 
            alt={alt} 
            fill 
            className="object-contain transition-all duration-700 group-hover:scale-[1.02]" 
            sizes="(max-width: 1100px) 100vw, 800px"
          />
          {/* Overlay de interacción */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <div className="bg-white/90 p-2.5 rounded-full shadow-xl scale-75 group-hover:scale-100 transition-transform">
                <ZoomIn className="w-4 h-4 text-black/60" />
             </div>
          </div>
        </div>
        
        {caption && (
          <div className="border-l-2 border-black/5 pl-4 max-w-2xl py-1">
            <p className="text-[13px] font-medium text-black/50 leading-relaxed italic whitespace-pre-line">{caption}</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal con renderizado de alta calidad */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[999] bg-white/98 backdrop-blur-xl flex items-center justify-center p-2 md:p-10 animate-in fade-in zoom-in-95 duration-300"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors z-50"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
          >
            <X className="w-6 h-6 text-black/40" />
          </button>
          
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-full max-w-[95vw] max-h-[90vh]">
              <Image 
                src={src} 
                alt={alt} 
                fill 
                className="object-contain select-none"
                style={{ imageRendering: 'auto' }} // Mantiene la nitidez original
                quality={100}
                priority
              />
            </div>
            {caption && (
               <p className="mt-4 text-black/30 font-black uppercase tracking-[0.3em] text-[9px] bg-black/[0.02] px-4 py-2 rounded-full">
                  {caption}
               </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
