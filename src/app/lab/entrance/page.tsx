"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LabCanvas, LabVariant, LabControls, LabSpec, GraduationButton } from "@/components/lab";

const variants = {
  "spring-stagger": {
    container: { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } },
    photo: { hidden: { scale: 0.9, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20, duration: 0.8 } } },
    text: { hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } },
    cta: { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } },
  },
  "ease-out-expo": {
    container: { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } },
    photo: { hidden: { scale: 0.95, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } },
    text: { hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } },
    cta: { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } },
  },
  "quick-snap": {
    container: { hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } },
    photo: { hidden: { scale: 0.9, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } } },
    text: { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } } },
    cta: { hidden: { y: 15, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } } },
  },
  "dramatic-reveal": {
    container: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } },
    photo: { hidden: { scale: 0.8, opacity: 0, rotateX: -15 }, show: { scale: 1, opacity: 1, rotateX: 0, transition: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] } } },
    text: { hidden: { y: 60, opacity: 0, filter: "blur(10px)" }, show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1] } } },
    cta: { hidden: { y: 30, opacity: 0, scale: 0.9 }, show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] } } },
  },
} as const;

type VariantKey = keyof typeof variants;

const variantDescriptions: Record<VariantKey, string> = {
  "spring-stagger": "Natural spring physics with gentle overshoot. Feels organic and alive.",
  "ease-out-expo": "Expo ease-out — fast start, graceful deceleration. Premium, Apple-like feel.",
  "quick-snap": "Snappy, minimal delays. Efficient and confident. Good for returning visitors.",
  "dramatic-reveal": "3D rotation + blur reveal. High drama, memorable first impression.",
};

function HeroDemo({ variantKey, reducedMotion }: { variantKey: VariantKey; reducedMotion: boolean }) {
  const variant = variants[variantKey];
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!reducedMotion) {
      setHasAnimated(false);
      const timer = setTimeout(() => setHasAnimated(true), 50);
      return () => clearTimeout(timer);
    }
    setHasAnimated(true);
  }, [variantKey, reducedMotion]);

  return (
    <motion.div
      className="hero-demo"
      variants={variant}
      initial={reducedMotion || !hasAnimated ? "hidden" : "show"}
      animate={reducedMotion || !hasAnimated ? "hidden" : "show"}
      custom={0}
    >
      <motion.div className="hero-demo__photo" variants={variant} custom={0} />
      <motion.div className="hero-demo__content" variants={variant} custom={0}>
        <motion.span className="hero-demo__tag" variants={variant} custom={0}>
          Product Designer
        </motion.span>
        <motion.h1 className="hero-demo__headline" variants={variant} custom={0}>
          I make human experiences feel memorable, intuitive, and visually striking.
        </motion.h1>
        <motion.p className="hero-demo__desc" variants={variant} custom={0}>
          Building AI-driven ecosystems that scale. Focus on the why: human-centric strategy.
        </motion.p>
        <motion.div className="hero-demo__ctas" variants={variant} custom={0}>
          <motion.button className="hero-demo__btn hero-demo__btn--primary" variants={variant} custom={0}>
            About Me
          </motion.button>
          <motion.button className="hero-demo__btn hero-demo__btn--secondary" variants={variant} custom={0}>
            Let's Talk
          </motion.button>
        </motion.div>
      </motion.div>
      <style jsx>{`
        .hero-demo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-8);
          text-align: center;
        }
        .hero-demo__photo {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-midnight), var(--color-indigo), var(--color-merlot));
          border: 4px solid var(--color-primary);
          box-shadow: var(--shadow-xl), 0 0 0 4px var(--color-bg), 0 0 40px var(--color-primary-light);
        }
        .hero-demo__content {
          max-width: 480px;
        }
        .hero-demo__tag {
          display: inline-block;
          padding: var(--space-1) var(--space-3);
          font-size: var(--text-xs);
          font-weight: var(--weight-semibold);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wider);
          background: var(--color-primary-light);
          color: var(--color-primary);
          border-radius: var(--radius-full);
          margin-bottom: var(--space-4);
        }
        .hero-demo__headline {
          font-family: var(--font-heading);
          font-size: var(--text-3xl);
          font-weight: var(--weight-bold);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--color-text-primary);
          margin-bottom: var(--space-4);
        }
        .hero-demo__desc {
          font-size: var(--text-base);
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: var(--space-6);
        }
        .hero-demo__ctas {
          display: flex;
          gap: var(--space-3);
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-demo__btn {
          padding: var(--space-3) var(--space-6);
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--weight-semibold);
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .hero-demo__btn--primary {
          background: var(--color-primary);
          color: var(--color-text-inverse);
        }
        .hero-demo__btn--primary:hover {
          background: var(--color-primary-hover);
        }
        .hero-demo__btn--secondary {
          background: transparent;
          color: var(--color-text-primary);
          border: 2px solid var(--color-border);
        }
        .hero-demo__btn--secondary:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
      `}</style>
    </motion.div>
  );
}

function EntranceLabContent() {
  const [activeVariant, setActiveVariant] = useState<VariantKey>("spring-stagger");
  const reducedMotion = useReducedMotion() ?? false;
  const [controls, setControls] = useState({
    stagger: 0.08,
    photoDuration: 0.8,
    textDuration: 0.5,
    ctaDuration: 0.4,
    photoEasing: "spring",
    textEasing: "spring",
  });

  const handleControlChange = (key: string, value: string | number | boolean) => {
    setControls((prev) => ({ ...prev, [key]: value }));
  };

  const presets = {
    "spring-stagger": { stagger: 0.08, photoDuration: 0.8, textDuration: 0.5, ctaDuration: 0.4, photoEasing: "spring", textEasing: "spring" },
    "ease-out-expo": { stagger: 0.06, photoDuration: 0.9, textDuration: 0.7, ctaDuration: 0.6, photoEasing: "expo-out", textEasing: "expo-out" },
    "quick-snap": { stagger: 0.04, photoDuration: 0.4, textDuration: 0.35, ctaDuration: 0.3, photoEasing: "ease-out", textEasing: "ease-out" },
    "dramatic-reveal": { stagger: 0.12, photoDuration: 1.2, textDuration: 0.9, ctaDuration: 0.7, photoEasing: "spring-bounce", textEasing: "spring-bounce" },
  };

  const specs = [
    {
      name: "Container",
      description: "Orchestrates child stagger timing",
      duration: `${controls.stagger * 1000}ms stagger`,
      easing: "N/A",
      stagger: `${controls.stagger}s`,
      properties: ["staggerChildren", "delayChildren"],
      code: `container: { 
  hidden: {}, 
  show: { 
    transition: { 
      staggerChildren: ${controls.stagger}, 
      delayChildren: 0.1 
    } 
  } 
}`,
    },
    {
      name: "Photo",
      description: "Scale + fade entrance with spring",
      duration: `${controls.photoDuration}s`,
      easing: controls.photoEasing as string,
      properties: ["scale", "opacity"],
      code: `photo: { 
  hidden: { scale: 0.9, opacity: 0 }, 
  show: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 20 
    } 
  } 
}`,
    },
    {
      name: "Text Elements",
      description: "Slide up + fade with spring",
      duration: `${controls.textDuration}s`,
      easing: controls.textEasing as string,
      properties: ["y", "opacity"],
      code: `text: { 
  hidden: { y: 30, opacity: 0 }, 
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  } 
}`,
    },
  ];

  const componentCode = `import { motion } from "framer-motion";

const heroVariants = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: ${controls.stagger},
        delayChildren: 0.1,
      },
    },
  },
  photo: {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  },
  text: {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  },
  cta: {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  },
};

export function Hero() {
  return (
    <motion.div variants={heroVariants} initial="hidden" animate="show">
      <motion.div className="hero-photo" variants={heroVariants} />
      <motion.div className="hero-content" variants={heroVariants}>
        <motion.span className="hero-tag" variants={heroVariants}>Product Designer</motion.span>
        <motion.h1 className="hero-headline" variants={heroVariants}>
          I make human experiences feel memorable, intuitive, and visually striking.
        </motion.h1>
        <motion.p className="hero-desc" variants={heroVariants}>
          Building AI-driven ecosystems that scale.
        </motion.p>
        <motion.div className="hero-ctas" variants={heroVariants}>
          <motion.button className="btn-primary" variants={heroVariants}>About Me</motion.button>
          <motion.button className="btn-secondary" variants={heroVariants}>Let's Talk</motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}`;

  return (
    <div className="lab-page">
      <div className="lab-page__header">
        <h1 className="lab-page__title">Hero Entrance Choreography</h1>
        <p className="lab-page__desc">
          Test different entrance animations for the hero section. The first impression sets the "skin" of your product.
          Click "Restart" to replay any variant.
        </p>
      </div>

      <div className="lab-page__grid">
        <div className="lab-page__main">
          <LabCanvas>
            <LabVariant
              title={activeVariant}
              description={variantDescriptions[activeVariant]}
              isActive
            >
              <HeroDemo variantKey={activeVariant} reducedMotion={reducedMotion ?? false} />
            </LabVariant>

            {(Object.keys(variants) as VariantKey[]).map((v) => (
              <LabVariant key={v} title={v} description={variantDescriptions[v]}>
                <HeroDemo variantKey={v} reducedMotion={reducedMotion ?? false} />
              </LabVariant>
            ))}
          </LabCanvas>

          <div className="lab-page__actions">
            <button
              className="lab-page__restart"
              onClick={() => {
                setActiveVariant(activeVariant);
              }}
            >
              Restart Animation
            </button>
            <GraduationButton
              experimentName="Hero Entrance"
              componentName="Hero"
              targetPath="src/components/Hero.tsx"
              componentCode={componentCode}
              tokens={{
                "--motion-duration-base": "300ms",
                "--motion-easing-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
                "--motion-stagger-base": "80ms",
              }}
            />
          </div>
        </div>

        <aside className="lab-page__sidebar">
          <LabControls
            controls={{
              stagger: { label: "Stagger Delay", type: "range", min: 0, max: 0.3, step: 0.01, defaultValue: 0.08 },
              photoDuration: { label: "Photo Duration (s)", type: "range", min: 0.2, max: 2, step: 0.1, defaultValue: 0.8 },
              textDuration: { label: "Text Duration (s)", type: "range", min: 0.2, max: 1.5, step: 0.1, defaultValue: 0.5 },
              ctaDuration: { label: "CTA Duration (s)", type: "range", min: 0.2, max: 1.5, step: 0.1, defaultValue: 0.4 },
              photoEasing: {
                label: "Photo Easing",
                type: "select",
                options: [
                  { value: "spring", label: "Spring (bounce)" },
                  { value: "expo-out", label: "Expo Out" },
                  { value: "ease-out", label: "Ease Out" },
                  { value: "spring-bounce", label: "Spring Bounce" },
                ],
                defaultValue: "spring",
              },
              textEasing: {
                label: "Text Easing",
                type: "select",
                options: [
                  { value: "spring", label: "Spring (bounce)" },
                  { value: "expo-out", label: "Expo Out" },
                  { value: "ease-out", label: "Ease Out" },
                  { value: "spring-bounce", label: "Spring Bounce" },
                ],
                defaultValue: "spring",
              },
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
        .lab-page__actions {
          display: flex;
          gap: var(--space-4);
          margin-top: var(--space-6);
          padding-top: var(--space-6);
          border-top: 1px solid var(--color-border-subtle);
        }
        .lab-page__restart {
          padding: var(--space-3) var(--space-6);
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--weight-medium);
          color: var(--color-text-primary);
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .lab-page__restart:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
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

export default function EntranceLab() {
  return <EntranceLabContent />;
}