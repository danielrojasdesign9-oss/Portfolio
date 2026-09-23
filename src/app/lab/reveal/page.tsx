"use client";

import { useState, useEffect, useRef, type CSSProperties } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { LabCanvas, LabVariant, LabControls, LabSpec, GraduationButton } from "@/components/lab";

const revealVariants = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  },
  "fade-up-spring": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  },
  "scale-fade": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
  },
  "slide-rotate": {
    hidden: { opacity: 0, x: -60, rotate: -5 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  },
  "blur-reveal": {
    hidden: { opacity: 0, filter: "blur(20px)", y: 30 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  },
  "stagger-children": {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  },
} as const;

type RevealVariantKey = keyof typeof revealVariants;

const variantDescriptions: Record<RevealVariantKey, string> = {
  "fade-up": "Classic fade up with expo ease-out. Clean, professional, never distracts.",
  "fade-up-spring": "Spring physics for organic feel. Subtle overshoot adds life.",
  "scale-fade": "Scale from 0.9 + fade. Feels like cards materializing. Modern and crisp.",
  "slide-rotate": "Horizontal slide with slight rotation. Dynamic, editorial personality.",
  "blur-reveal": "Blur to sharp focus. Cinematic, draws eye to content. High drama.",
  "stagger-children": "Container staggers children. Use for grids with inner elements.",
};

const mockProjects = [
  { id: 1, title: "ClaraCare", category: "Healthcare AI", color: "midnight" },
  { id: 2, title: "FitMaterial", category: "Footwear Tech", color: "indigo" },
  { id: 3, title: "KOAJ Design System", category: "Design Systems", color: "merlot" },
  { id: 4, title: "Balsa UI", category: "Component Library", color: "silver-mist" },
  { id: 5, title: "VoicePrint", category: "Voice AI", color: "onyx" },
  { id: 6, title: "Carbon Design", category: "Enterprise", color: "midnight" },
];

const colorMap: Record<string, string> = {
  midnight: "var(--color-midnight)",
  indigo: "var(--color-indigo)",
  merlot: "var(--color-merlot)",
  "silver-mist": "var(--color-silver-mist)",
  onyx: "var(--color-onyx)",
};

function ProjectCard({
  project,
  index,
  variant,
  stagger,
  viewportMargin,
  once,
  play,
}: {
  project: (typeof mockProjects)[0];
  index: number;
  variant: RevealVariantKey;
  stagger: number;
  viewportMargin: string;
  once: boolean;
  play: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: viewportMargin as unknown as "-100px", amount: 0.1 });
  const reducedMotion = useReducedMotion();

  const cardVariants = revealVariants[variant];
  const containerVariants = revealVariants["stagger-children"];

  if (variant === "stagger-children") {
    return (
      <motion.div
        ref={ref}
        className="project-card"
        style={{ "--card-color": colorMap[project.color] } as CSSProperties}
        variants={containerVariants}
        initial="hidden"
        animate={isInView || reducedMotion || play ? "visible" : "hidden"}
        custom={index}
        transition={{ staggerChildren: stagger }}
      >
        <motion.div className="project-card__image" variants={cardVariants} />
        <motion.div className="project-card__content" variants={cardVariants}>
          <motion.span className="project-card__category" variants={cardVariants}>{project.category}</motion.span>
          <motion.h3 className="project-card__title" variants={cardVariants}>{project.title}</motion.h3>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="project-card"
      style={{ "--card-color": colorMap[project.color] } as CSSProperties}
      variants={cardVariants}
      initial="hidden"
      animate={isInView || reducedMotion || play ? "visible" : "hidden"}
      transition={{ delay: index * stagger }}
    >
      <div className="project-card__image" />
      <div className="project-card__content">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
      </div>
    </motion.div>
  );
}

function RevealDemo({
  variant,
  stagger,
  viewportMargin,
  once,
  reducedMotion,
}: {
  variant: RevealVariantKey;
  stagger: number;
  viewportMargin: string;
  once: boolean;
  reducedMotion: boolean;
}) {
  const [trigger, setTrigger] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleRestart = () => {
    setIsPlaying(false);
    setTrigger((t) => t + 1);
    requestAnimationFrame(() => setIsPlaying(true));
  };

  return (
    <div className="reveal-demo">
      <div className="reveal-demo__controls">
        <button onClick={handleRestart} className="reveal-demo__restart">
          {isPlaying ? "Replay effect ↻" : "Play effect →"}
        </button>
        <span className="reveal-demo__hint">
          {once ? "Once only — refresh page to replay" : "Re-triggers on scroll"}
        </span>
      </div>

      <div className="reveal-demo__spacer-top" />

      <motion.div
        className="reveal-demo__grid"
        key={trigger}
        variants={revealVariants["stagger-children"]}
        initial="hidden"
        animate={reducedMotion || isPlaying ? "visible" : "hidden"}
        custom={0}
      >
        {mockProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            variant={variant}
            stagger={stagger}
            viewportMargin={viewportMargin}
            once={once}
            play={isPlaying}
          />
        ))}
      </motion.div>

      <div className="reveal-demo__spacer-bottom" />

      <style jsx>{`
        .reveal-demo {
          padding: var(--space-6) var(--space-4);
          max-width: 1000px;
          margin: 0 auto;
        }
        .reveal-demo__controls {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          margin-bottom: var(--space-8);
          padding: var(--space-4) var(--space-6);
          background: var(--color-bg-elevated);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
        }
        .reveal-demo__restart {
          padding: var(--space-3) var(--space-5);
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--weight-medium);
          color: var(--color-text-inverse);
          background: var(--color-primary);
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .reveal-demo__restart:hover {
          background: var(--color-primary-hover);
        }
        .reveal-demo__hint {
          font-size: var(--text-xs);
          color: var(--color-text-tertiary);
        }
        .reveal-demo__spacer-top,
        .reveal-demo__spacer-bottom {
          height: 150px;
        }
        .reveal-demo__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .project-card {
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: box-shadow var(--transition-base);
        }
        .project-card:hover {
          box-shadow: var(--shadow-xl);
        }
        .project-card__image {
          height: 160px;
          background: linear-gradient(135deg, var(--card-color), color-mix(in oklab, var(--card-color) 70%, black));
          position: relative;
        }
        .project-card__image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3));
        }
        .project-card__content {
          padding: var(--space-4);
        }
        .project-card__category {
          display: block;
          font-size: var(--text-xs);
          font-weight: var(--weight-semibold);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wider);
          color: var(--card-color);
          margin-bottom: var(--space-1);
        }
        .project-card__title {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--weight-bold);
          color: var(--color-text-primary);
        }
      `}</style>
    </div>
  );
}

function RevealLabContent() {
  const [activeVariant, setActiveVariant] = useState<RevealVariantKey>("fade-up");
  const [stagger, setStagger] = useState(0.1);
  const [viewportMargin, setViewportMargin] = useState("-100px");
  const [once, setOnce] = useState(true);
  const reducedMotion = useReducedMotion();

  const controls = {
    stagger,
    viewportMargin,
    once,
  };

  const handleControlChange = (key: string, value: string | number | boolean) => {
    if (key === "stagger") setStagger(value as number);
    else if (key === "viewportMargin") setViewportMargin(value as string);
    else if (key === "once") setOnce(value as boolean);
  };

  const presets = {
    "conservative": { stagger: 0.15, viewportMargin: "-50px", once: true },
    "balanced": { stagger: 0.1, viewportMargin: "-100px", once: true },
    "eager": { stagger: 0.06, viewportMargin: "-200px", once: false },
    "dramatic": { stagger: 0.2, viewportMargin: "-150px", once: true },
  };

  const specs = [
    {
      name: "Intersection Observer",
      description: "Triggers when element enters viewport",
      duration: "N/A",
      easing: "N/A",
      properties: ["rootMargin", "threshold", "once"],
      code: `const ref = useRef<HTMLDivElement>(null);
const isInView = useInView(ref, {
  once: ${once},
  margin: "${viewportMargin}",
  amount: 0.1,
});`,
    },
    {
      name: "Reveal Variant",
      description: variantDescriptions[activeVariant],
      duration: "0.5-0.8s",
      easing: activeVariant.includes("spring") ? "spring" : "expo-out",
      stagger: `${stagger}s`,
      properties: Object.keys(revealVariants[activeVariant].hidden),
      code: `${activeVariant}: {
  hidden: ${JSON.stringify(revealVariants[activeVariant].hidden, null, 2)},
  visible: ${JSON.stringify(revealVariants[activeVariant].visible, null, 2)},
}`,
    },
    {
      name: "Container Stagger",
      description: "Orchestrates children with delay",
      duration: `${stagger * 1000}ms per child`,
      easing: "N/A",
      stagger: `${stagger}s`,
      properties: ["staggerChildren", "delayChildren"],
      code: `staggerChildren: ${stagger},
delayChildren: 0.1,
transition: { staggerChildren, delayChildren }`,
    },
  ];

  const componentCode = `import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const revealVariants = {
  ${activeVariant}: ${JSON.stringify(revealVariants[activeVariant], null, 2).replace(/\n/g, "\n  ")},
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: ${stagger}, delayChildren: 0.1 },
    },
  },
};

export function ProjectGrid({ projects }) {
  return (
    <motion.div
      variants={revealVariants.staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: ${once}, margin: "${viewportMargin}" }}
    >
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          className="project-card"
          variants={revealVariants.${activeVariant}}
          custom={index}
        >
          <div className="card-image" style={{ background: project.gradient }} />
          <div className="card-content">
            <span className="card-category">{project.category}</span>
            <h3 className="card-title">{project.title}</h3>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}`;

  return (
    <div className="lab-page">
      <div className="lab-page__header">
        <h1 className="lab-page__title">Scroll-Reveal Stagger</h1>
        <p className="lab-page__desc">
          Test scroll-triggered reveal animations for project grids. Scroll down to see cards animate in.
          Adjust stagger, trigger point, and whether animation runs once or re-triggers.
        </p>
      </div>

      <div className="lab-page__grid">
        <div className="lab-page__main">
          <LabCanvas>
            {(Object.keys(revealVariants).filter((k) => k !== "stagger-children") as RevealVariantKey[]).map((v) => (
              <LabVariant key={v} title={v} description={variantDescriptions[v]} isActive={v === activeVariant}>
                <RevealDemo
                  variant={v}
                  stagger={stagger}
                  viewportMargin={viewportMargin}
                  once={once}
                  reducedMotion={reducedMotion ?? false}
                />
              </LabVariant>
            ))}
          </LabCanvas>

          <div className="lab-page__actions">
            <GraduationButton
              experimentName="Scroll Reveal"
              componentName="ProjectGrid"
              targetPath="src/components/ProjectGrid.tsx"
              componentCode={componentCode}
              tokens={{
                "--motion-duration-base": "500ms",
                "--motion-easing-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
                "--motion-stagger-base": "100ms",
              }}
            />
          </div>
        </div>

        <aside className="lab-page__sidebar">
          <LabControls
            controls={{
              stagger: { label: "Stagger Delay (s)", type: "range", min: 0, max: 0.3, step: 0.01, defaultValue: 0.1 },
              viewportMargin: {
                label: "Trigger Margin",
                type: "select",
                options: [
                  { value: "-50px", label: "Early (-50px)" },
                  { value: "-100px", label: "Balanced (-100px)" },
                  { value: "-150px", label: "Late (-150px)" },
                  { value: "-200px", label: "Eager (-200px)" },
                ],
                defaultValue: "-100px",
              },
              once: { label: "Animate Once Only", type: "checkbox", defaultValue: true },
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

export default function RevealLab() {
  return <RevealLabContent />;
}