"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface GraduationButtonProps {
  experimentName: string;
  componentCode: string;
  componentName: string;
  targetPath: string;
  tokens?: Record<string, string>;
  className?: string;
}

export function GraduationButton({
  experimentName,
  componentCode,
  componentName,
  targetPath,
  tokens,
  className = "",
}: GraduationButtonProps) {
  const [status, setStatus] = useState<"idle" | "copying" | "success" | "error">("idle");

  const handleGraduate = useCallback(async () => {
    setStatus("copying");
    try {
      const fullCode = tokens
        ? `/* Tokens:\n${Object.entries(tokens)
            .map(([k, v]) => ` *   ${k}: ${v}`)
            .join("\n")}\n */\n\n${componentCode}`
        : componentCode;

      await navigator.clipboard.writeText(fullCode);
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }, [componentCode, tokens]);

  const statusConfig = {
    idle: { label: "Graduate to Production", icon: "→" },
    copying: { label: "Copying...", icon: "⟳" },
    success: { label: "Copied! Paste at target path", icon: "✓" },
    error: { label: "Failed - try again", icon: "✗" },
  };

  const current = statusConfig[status];

  return (
    <motion.button
      className={`lab-graduate ${className}`}
      onClick={handleGraduate}
      disabled={status === "copying"}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <span className="lab-graduate__icon">{current.icon}</span>
      <span className="lab-graduate__label">{current.label}</span>
      <style jsx>{`
        .lab-graduate {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-6);
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--weight-semibold);
          color: var(--color-text-inverse);
          background: var(--color-primary);
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .lab-graduate:hover:not(:disabled) {
          background: var(--color-primary-hover);
          transform: translateY(-1px);
        }
        .lab-graduate:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .lab-graduate.success {
          background: var(--color-success);
        }
        .lab-graduate.error {
          background: var(--color-error);
        }
        .lab-graduate__icon {
          font-size: var(--text-base);
        }
      `}</style>
    </motion.button>
  );
}