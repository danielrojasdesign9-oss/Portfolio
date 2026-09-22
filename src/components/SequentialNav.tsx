"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface SequentialNavProps {
  prevSlug?: string;
  nextSlug?: string;
  locale: string;
}

export default function SequentialNav({ prevSlug, nextSlug, locale }: SequentialNavProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (reducedMotion || !mounted) return;
      if (e.key === "ArrowLeft" && prevSlug) {
        window.location.href = `/work/${prevSlug}?lang=${locale}`;
      }
      if (e.key === "ArrowRight" && nextSlug) {
        window.location.href = `/work/${nextSlug}?lang=${locale}`;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlug, nextSlug, locale, reducedMotion, mounted]);

  return null;
}