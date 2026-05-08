"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 15, stiffness: 400, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  if (pathname?.startsWith("/studio")) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[9999] flex items-center justify-center opacity-0 md:opacity-100"
      style={{
        x: x,
        y: y,
        translateX: "-50%",
        translateY: "-50%",
        scale: isHovered ? 3 : 1,
        mixBlendMode: "multiply",
      }}
    >
      {/* Central Precision Dot (only visible when expanded) */}
      {isHovered && <div className="w-[1px] h-[1px] bg-black rounded-full" />}
    </motion.div>
  );
}
