"use client";

import { useState, useRef, useEffect, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LabCanvas, LabVariant, LabControls, LabSpec, GraduationButton } from "@/components/lab";

const hoverVariants = {
  "lift-glow": {
    hover: { y: -8, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  },
  "magnetic": {
    hover: { scale: 1.03, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)", transition: { type: "spring", stiffness: 300, damping: 20 } },
    tap: { scale: 0.97, transition: { duration: 0.1 } },
  },
  "tilt-3d": {
    hover: { rotateX: 5, rotateY: -5, scale: 1.02, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)", transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } },
    tap: { rotateX: 0, rotateY: 0, scale: 0.98, transition: { duration: 0.1 } },
  },
  "border-glow": {
    hover: { y: -4, boxShadow: "0 0 0 1px var(--color-primary), 0 20px 40px -10px var(--color-primary-light)", borderColor: "var(--color-primary)", transition: { duration: 0.2 } },
    tap: { scale: 0.99, transition: { duration: 0.1 } },
  },
  "image-zoom": {
    hover: { y: -6, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  },
  "content-reveal": {
    hover: { y: -4, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  },
} as const;

type HoverVariantKey = keyof typeof hoverVariants;

const variantDescriptions: Record<HoverVariantKey, string> = {
  "lift-glow": "Classic lift + shadow deepening. Safe, professional, always works.",
  "magnetic": "Spring-based scale with strong pull. Feels alive and responsive.",
  "tilt-3d": "3D rotation on hover. Playful, shows depth. Best for hero cards.",
  "border-glow": "Primary color border + glow ring. Strong brand reinforcement.",
  "image-zoom": "Subtle lift + image zoom inside. Editorial, magazine feel.",
  "content-reveal": "Minimal lift, reveals hidden content (tags, metrics). Info-dense.",
};

function InteractiveCard({
  variant,
  hoverScale,
  hoverLift,
  hoverDuration,
  tapScale,
  tapDuration,
  enableImageZoom,
  enableContentReveal,
  enableBorderGlow,
  reducedMotion,
}: {
  variant: HoverVariantKey;
  hoverScale: number;
  hoverLift: number;
  hoverDuration: number;
  tapScale: number;
  tapDuration: number;
  enableImageZoom: boolean;
  enableContentReveal: boolean;
  enableBorderGlow: boolean;
  reducedMotion: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const cardVariants = hoverVariants[variant];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!reducedMotion && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const tiltX = variant === "tilt-3d" && !reducedMotion ? mousePos.y * -10 : 0;
  const tiltY = variant === "tilt-3d" && !reducedMotion ? mousePos.x * 10 : 0;

  return (
    <div className="interactive-card">
      <motion.div
        ref={cardRef}
        className="interactive-card__inner"
        variants={cardVariants}
        whileHover={reducedMotion ? undefined : { y: -hoverLift, scale: hoverScale, transition: { duration: hoverDuration, ease: [0.4, 0, 0.2, 1] } }}
        whileTap={reducedMotion ? undefined : { scale: tapScale, transition: { duration: tapDuration } }}
        animate={isPlaying && !reducedMotion ? cardVariants.hover : undefined}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); handleMouseLeave(); }}
      >
      <div className="card__image-wrapper">
        <motion.div
          className="card__image"
          style={{ transform: enableImageZoom && isHovered && !reducedMotion ? "scale(1.08)" : "scale(1)" }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        />
        {enableContentReveal && (
          <motion.div
            className="card__overlay"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered && !reducedMotion ? 1 : 0, y: isHovered && !reducedMotion ? 0 : 20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="card__metrics">
              <span className="card__metric">
                <span className="card__metric-value">24</span>
                <span className="card__metric-label">Days</span>
              </span>
              <span className="card__metric">
                <span className="card__metric-value">3</span>
                <span className="card__metric-label">Iterations</span>
              </span>
              <span className="card__metric">
                <span className="card__metric-value">98%</span>
                <span className="card__metric-label">Satisfaction</span>
              </span>
            </div>
            <div className="card__tags">
              <span className="card__tag">Design System</span>
              <span className="card__tag">React</span>
              <span className="card__tag">Motion</span>
            </div>
          </motion.div>
        )}
      </div>
      <div className="card__content">
        <span className="card__category">Case Study</span>
        <h3 className="card__title">ClaraCare — AI Triage</h3>
        <p className="card__desc">Conversational AI for emergency triage. Reduced wait times by 40%.</p>
        <div className="card__footer">
          <span className="card__link">View Project →</span>
        </div>
      </div>
      </motion.div>
      <button className="interactive-card__play" onClick={() => setIsPlaying((playing) => !playing)}>
        {isPlaying ? "Pause effect" : "Play effect"}
      </button>
      <style jsx>{`
        .interactive-card {
          width: 360px;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          cursor: pointer;
          transform-style: preserve-3d;
          perspective: 1000px;
          padding: var(--space-4);
        }
        .interactive-card:hover {
          border-color: var(--color-border-strong);
        }
        .interactive-card__play {
          display: block;
          width: calc(100% - var(--space-6));
          margin: 0 var(--space-3) var(--space-3);
          padding: var(--space-3) var(--space-4);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          background: var(--color-primary);
          color: var(--color-text-inverse);
          cursor: pointer;
          font: inherit;
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--weight-medium);
          transition: background var(--transition-fast);
        }
        .interactive-card__play:hover {
          background: var(--color-primary-hover);
        }
        .card__image-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
          border-radius: var(--radius-md);
        }
        .card__image {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--color-midnight), var(--color-indigo), var(--color-merlot));
          transform-origin: center;
        }
        .card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,0.85));
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: var(--space-3);
        }
        .card__metrics {
          display: flex;
          justify-content: space-between;
          gap: var(--space-4);
        }
        .card__metric {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .card__metric-value {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--weight-bold);
          color: var(--color-text-inverse);
        }
        .card__metric-label {
          font-size: var(--text-xs);
          color: var(--color-text-inverse);
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: var(--tracking-wide);
        }
        .card__tags {
          display: flex;
          gap: var(--space-2);
          flex-wrap: wrap;
        }
        .card__tag {
          font-size: var(--text-xs);
          font-weight: var(--weight-medium);
          padding: var(--space-1) var(--space-2);
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: var(--radius-sm);
          color: var(--color-text-inverse);
          backdrop-filter: blur(8px);
        }
        .card__content {
          padding: var(--space-5) var(--space-2);
        }
        .card__category {
          display: block;
          font-size: var(--text-xs);
          font-weight: var(--weight-semibold);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wider);
          color: var(--color-primary);
          margin-bottom: var(--space-2);
        }
        .card__title {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--weight-bold);
          color: var(--color-text-primary);
          margin-bottom: var(--space-2);
        }
        .card__desc {
          font-size: var(--text-sm);
          line-height: 1.5;
          color: var(--color-text-secondary);
          margin-bottom: var(--space-4);
        }
        .card__footer {
          padding-top: var(--space-3);
          border-top: 1px solid var(--color-border-subtle);
        }
        .card__link {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--weight-semibold);
          color: var(--color-primary);
          display: inline-flex;
          align-items: center;
          gap: var(--space-1);
        }
      `}</style>
    </div>
  );
}

function CardsLabContent() {
  const [activeVariant, setActiveVariant] = useState<HoverVariantKey>("lift-glow");
  const [hoverScale, setHoverScale] = useState(1.02);
  const [hoverLift, setHoverLift] = useState(8);
  const [hoverDuration, setHoverDuration] = useState(0.2);
  const [tapScale, setTapScale] = useState(0.98);
  const [tapDuration, setTapDuration] = useState(0.1);
  const [enableImageZoom, setEnableImageZoom] = useState(true);
  const [enableContentReveal, setEnableContentReveal] = useState(false);
  const [enableBorderGlow, setEnableBorderGlow] = useState(false);
  const reducedMotion = useReducedMotion();

  const controls = {
    hoverScale,
    hoverLift,
    hoverDuration,
    tapScale,
    tapDuration,
    enableImageZoom,
    enableContentReveal,
    enableBorderGlow,
  };

  const handleControlChange = (key: string, value: string | number | boolean) => {
    switch (key) {
      case "hoverScale": setHoverScale(value as number); break;
      case "hoverLift": setHoverLift(value as number); break;
      case "hoverDuration": setHoverDuration(value as number); break;
      case "tapScale": setTapScale(value as number); break;
      case "tapDuration": setTapDuration(value as number); break;
      case "enableImageZoom": setEnableImageZoom(value as boolean); break;
      case "enableContentReveal": setEnableContentReveal(value as boolean); break;
      case "enableBorderGlow": setEnableBorderGlow(value as boolean); break;
    }
  };

  const presets = {
    "subtle": { hoverScale: 1.01, hoverLift: 4, hoverDuration: 0.15, tapScale: 0.99, tapDuration: 0.08, enableImageZoom: false, enableContentReveal: false, enableBorderGlow: false },
    "balanced": { hoverScale: 1.02, hoverLift: 8, hoverDuration: 0.2, tapScale: 0.98, tapDuration: 0.1, enableImageZoom: true, enableContentReveal: false, enableBorderGlow: false },
    "expressive": { hoverScale: 1.03, hoverLift: 12, hoverDuration: 0.3, tapScale: 0.97, tapDuration: 0.1, enableImageZoom: true, enableContentReveal: true, enableBorderGlow: true },
    "magnetic": { hoverScale: 1.04, hoverLift: 6, hoverDuration: 0.25, tapScale: 0.96, tapDuration: 0.1, enableImageZoom: true, enableContentReveal: false, enableBorderGlow: true },
  };

  const specs = [
    {
      name: "Hover State",
      description: variantDescriptions[activeVariant],
      duration: `${hoverDuration}s`,
      easing: "ease-out / spring",
      properties: ["y", "scale", "boxShadow", "rotateX", "rotateY"],
      code: `whileHover={${JSON.stringify(hoverVariants[activeVariant].hover, null, 2).replace(/\n/g, "\n")}}`,
    },
    {
      name: "Tap/Press State",
      description: "Immediate scale down for tactile feedback",
      duration: `${tapDuration}s`,
      easing: "ease-out",
      properties: ["scale"],
      code: `whileTap={{ scale: ${tapScale}, transition: { duration: ${tapDuration} } }}`,
    },
    {
      name: "Image Zoom",
      description: enableImageZoom ? "Inner image scales on hover" : "Disabled",
      duration: "0.4s",
      easing: "ease-out",
      properties: ["transform: scale"],
      code: enableImageZoom ? `<motion.div
  className="card__image"
  animate={{ scale: isHovered ? 1.08 : 1 }}
  transition={{ duration: 0.4 }}
/>` : "// Disabled",
    },
    {
      name: "Content Reveal",
      description: enableContentReveal ? "Overlay with metrics/tags appears" : "Disabled",
      duration: "0.2s",
      easing: "ease-out",
      properties: ["opacity", "y"],
      code: enableContentReveal ? `<motion.div
  className="card__overlay"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
/>` : "// Disabled",
    },
  ];

  const componentCode = `import { motion, useRef, useState } from "react";

const hoverVariants = {
  ${activeVariant}: ${JSON.stringify(hoverVariants[activeVariant], null, 2).replace(/\n/g, "\n  ")},
};

export function ProjectCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      variants={hoverVariants.${activeVariant}}
      whileHover={${JSON.stringify(hoverVariants[activeVariant].hover, null, 2)}}
      whileTap={${JSON.stringify(hoverVariants[activeVariant].tap, null, 2)}}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (rect) setMousePos({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card__image-wrapper">
        <motion.div
          className="card__image"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.4 }}
        />
        {${enableContentReveal} && (
          <motion.div
            className="card__overlay"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card__metrics">...</div>
            <div className="card__tags">...</div>
          </motion.div>
        )}
      </div>
      <div className="card__content">...</div>
    </motion.div>
  );
}`;

  return (
    <div className="lab-page">
      <div className="lab-page__header">
        <h1 className="lab-page__title">Card Micro-interactions</h1>
        <p className="lab-page__desc">
          Test hover, press, and reveal behaviors for project cards. Hover, click, and drag on each card to feel the response.
          Each variant has a distinct personality — choose what matches your brand voice.
        </p>
      </div>

      <div className="lab-page__grid">
        <div className="lab-page__main">
          <LabCanvas className="lab-canvas--cards">
            {(Object.keys(hoverVariants) as HoverVariantKey[]).map((v) => (
              <LabVariant key={v} title={v} description={variantDescriptions[v]} isActive={v === activeVariant}>
                <InteractiveCard
                  variant={v}
                  hoverScale={hoverScale}
                  hoverLift={hoverLift}
                  hoverDuration={hoverDuration}
                  tapScale={tapScale}
                  tapDuration={tapDuration}
                  enableImageZoom={enableImageZoom}
                  enableContentReveal={enableContentReveal}
                  enableBorderGlow={enableBorderGlow}
                  reducedMotion={reducedMotion ?? false}
                />
              </LabVariant>
            ))}
          </LabCanvas>

          <div className="lab-page__actions">
            <GraduationButton
              experimentName="Card Interactions"
              componentName="ProjectCard"
              targetPath="src/components/ProjectCard.tsx"
              componentCode={componentCode}
              tokens={{
                "--motion-duration-fast": "150ms",
                "--motion-duration-base": "200ms",
                "--motion-easing-standard": "cubic-bezier(0.4, 0, 0.2, 1)",
                "--motion-easing-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            />
          </div>
        </div>

        <aside className="lab-page__sidebar">
          <LabControls
            controls={{
              hoverScale: { label: "Hover Scale", type: "range", min: 1, max: 1.08, step: 0.005, defaultValue: 1.02 },
              hoverLift: { label: "Hover Lift (px)", type: "range", min: 0, max: 20, step: 1, defaultValue: 8 },
              hoverDuration: { label: "Hover Duration (s)", type: "range", min: 0.1, max: 0.5, step: 0.05, defaultValue: 0.2 },
              tapScale: { label: "Tap Scale", type: "range", min: 0.9, max: 1, step: 0.005, defaultValue: 0.98 },
              tapDuration: { label: "Tap Duration (s)", type: "range", min: 0.05, max: 0.2, step: 0.01, defaultValue: 0.1 },
              enableImageZoom: { label: "Image Zoom on Hover", type: "checkbox", defaultValue: true },
              enableContentReveal: { label: "Content Reveal Overlay", type: "checkbox", defaultValue: false },
              enableBorderGlow: { label: "Border Glow", type: "checkbox", defaultValue: false },
            }}
            values={controls}
            onChange={handleControlChange}
            presets={presets}
          />

          <LabSpec specs={specs} />
        </aside>
      </div>

      <style jsx>{`
        .lab-page {
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
          max-width: 1440px;
          margin: 0 auto;
          padding: var(--space-10) var(--space-6) var(--space-16);
        }
        .lab-page__header {
          margin-bottom: var(--space-4);
        }
        .lab-page__title {
          font-family: var(--font-heading);
          font-size: var(--text-4xl);
          font-weight: var(--weight-bold);
          letter-spacing: -0.03em;
          margin-bottom: var(--space-2);
        }
        .lab-page__desc {
          font-size: var(--text-lg);
          color: var(--color-text-secondary);
          max-width: 700px;
        }
        .lab-page__grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: var(--space-8);
          align-items: start;
        }
        @media (max-width: 900px) {
          .lab-page { padding-inline: var(--space-4); }
          .lab-page__grid { grid-template-columns: 1fr; }
        }
        .lab-canvas--cards .lab-canvas__inner {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-6);
          justify-content: center;
        }
        .lab-page__actions {
          margin-top: var(--space-6);
          padding-top: var(--space-6);
          border-top: 1px solid var(--color-border-subtle);
        }
        .lab-page__sidebar {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }
      `}</style>
    </div>
  );
}

export default function CardsLab() {
  return <CardsLabContent />;
}