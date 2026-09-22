"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LabCanvasProps {
  children: ReactNode;
  className?: string;
}

export function LabCanvas({ children, className = "" }: LabCanvasProps) {
  return (
    <motion.div
      className={`lab-canvas ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="lab-canvas__inner">{children}</div>
      <style jsx>{`
        .lab-canvas {
          position: relative;
          min-height: 400px;
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          background: var(--color-bg-elevated);
          overflow: hidden;
        }
        .lab-canvas__inner {
          padding: var(--space-8);
        }
      `}</style>
    </motion.div>
  );
}

export function LabVariant({
  title,
  description,
  children,
  isActive = false,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  isActive?: boolean;
}) {
  return (
    <motion.div
      className="lab-variant"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="lab-variant__header">
        <h3 className="lab-variant__title">{title}</h3>
        {isActive && <span className="lab-variant__badge">ACTIVE</span>}
      </div>
      {description && <p className="lab-variant__desc">{description}</p>}
      <div className="lab-variant__demo">{children}</div>
      <style jsx>{`
        .lab-variant {
          margin-bottom: var(--space-10);
        }
        .lab-variant__header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-3);
        }
        .lab-variant__title {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--weight-semibold);
          color: var(--color-text-primary);
        }
        .lab-variant__badge {
          font-size: var(--text-xs);
          font-weight: var(--weight-bold);
          padding: var(--space-1) var(--space-2);
          background: var(--color-primary);
          color: var(--color-text-inverse);
          border-radius: var(--radius-sm);
        }
        .lab-variant__desc {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--space-4);
        }
        .lab-variant__demo {
          min-height: 200px;
        }
      `}</style>
    </motion.div>
  );
}