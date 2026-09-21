'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface GalleryImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function GalleryImage({ src, alt, caption }: GalleryImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="space-y-4 group cursor-zoom-in"
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(true); }}
        role="button"
        tabIndex={0}
        aria-label={`Open fullscreen: ${alt}`}
      >
        {/* Contenedor optimizado: sin padding y con altura adaptable para reducir bordes blancos */}
        <div className="relative w-full aspect-[16/9] md:aspect-video rounded-[8px] overflow-hidden border border-[var(--color-text-primary)]/5 shadow-lg bg-[var(--color-bg-elevated)]">
          <Image 
            src={src} 
            alt={alt} 
            fill 
            className="object-contain transition-all duration-700 group-hover:scale-[1.02]" 
            sizes="(max-width: 1100px) 100vw, 800px"
          />
          {/* Overlay de interacción */}
          <div className="absolute inset-0 bg-[var(--color-text-primary)]/0 group-hover:bg-[var(--color-text-primary)]/[0.02] transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <div className="bg-[var(--color-bg-elevated)]/90 p-2.5 rounded-full shadow-xl scale-75 group-hover:scale-100 transition-transform">
                <ZoomIn className="w-4 h-4 text-[var(--color-text-primary)]/60" />
             </div>
          </div>
        </div>
        
        {caption && (
          <div className="border-l-2 border-[var(--color-text-primary)]/5 pl-4 max-w-2xl py-1">
            <p className="text-[13px] font-medium text-[var(--color-text-primary)]/50 leading-relaxed italic whitespace-pre-line">{caption}</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal con renderizado de alta calidad */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[999] bg-[var(--color-bg-elevated)]/98 backdrop-blur-xl flex items-center justify-center p-2 md:p-10 animate-in fade-in zoom-in-95 duration-300"
          onClick={() => setIsOpen(false)}
        >
          <button
            ref={closeRef}
            className="absolute top-6 right-6 p-2 hover:bg-[var(--color-text-primary)]/5 rounded-full transition-colors z-50"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6 text-[var(--color-text-primary)]/40" />
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
               <p className="mt-4 text-[var(--color-text-primary)]/30 font-black uppercase tracking-[0.3em] text-[9px] bg-[var(--color-text-primary)]/[0.02] px-4 py-2 rounded-full">
                  {caption}
               </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
