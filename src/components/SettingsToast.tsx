"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function SettingsToast({ message }: { message: string | null }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[var(--z-toast)] px-6 py-3 rounded-full bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-[12px] font-bold uppercase tracking-[0.12em] shadow-xl"
          role="status"
          aria-live="polite"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
