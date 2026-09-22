"use client";

import { motion } from "framer-motion";

interface MotionSpec {
  name: string;
  description: string;
  duration: string;
  easing: string;
  stagger?: string;
  properties: string[];
  cssVariables?: Record<string, string>;
  code: string;
}

interface LabSpecProps {
  specs: MotionSpec[];
  className?: string;
}

export function LabSpec({ specs, className = "" }: LabSpecProps) {
  return (
    <motion.div
      className={`lab-spec ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <h4 className="lab-spec__title">Motion Spec</h4>
      <div className="lab-spec__grid">
        {specs.map((spec) => (
          <div key={spec.name} className="lab-spec__card">
            <div className="lab-spec__card-header">
              <h5 className="lab-spec__card-title">{spec.name}</h5>
              <button
                className="lab-spec__copy"
                onClick={() => navigator.clipboard.writeText(spec.code)}
                aria-label={`Copy ${spec.name} code`}
                title="Copy code"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>
            <p className="lab-spec__card-desc">{spec.description}</p>
            
            <div className="lab-spec__tokens">
              <div className="lab-spec__token-row">
                <span className="lab-spec__token-label">Duration</span>
                <code className="lab-spec__token-value">{spec.duration}</code>
              </div>
              <div className="lab-spec__token-row">
                <span className="lab-spec__token-label">Easing</span>
                <code className="lab-spec__token-value">{spec.easing}</code>
              </div>
              {spec.stagger && (
                <div className="lab-spec__token-row">
                  <span className="lab-spec__token-label">Stagger</span>
                  <code className="lab-spec__token-value">{spec.stagger}</code>
                </div>
              )}
              {spec.cssVariables && Object.entries(spec.cssVariables).map(([key, value]) => (
                <div key={key} className="lab-spec__token-row">
                  <span className="lab-spec__token-label">{key}</span>
                  <code className="lab-spec__token-value">{value}</code>
                </div>
              ))}
            </div>

            <details className="lab-spec__code-block">
              <summary className="lab-spec__code-summary">Show Code</summary>
              <pre className="lab-spec__code"><code>{spec.code}</code></pre>
            </details>
          </div>
        ))}
      </div>

      <style jsx>{`
        .lab-spec {
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
        }
        .lab-spec__title {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--weight-semibold);
          margin-bottom: var(--space-4);
          color: var(--color-text-primary);
        }
        .lab-spec__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-4);
        }
        .lab-spec__card {
          background: var(--color-bg);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: var(--space-4);
        }
        .lab-spec__card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-2);
        }
        .lab-spec__card-title {
          font-family: var(--font-heading);
          font-size: var(--text-base);
          font-weight: var(--weight-semibold);
        }
        .lab-spec__copy {
          padding: var(--space-1);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-text-tertiary);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lab-spec__copy:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .lab-spec__card-desc {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          margin-bottom: var(--space-3);
        }
        .lab-spec__tokens {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          margin-bottom: var(--space-3);
        }
        .lab-spec__token-row {
          display: flex;
          justify-content: space-between;
          font-size: var(--text-xs);
        }
        .lab-spec__token-label {
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wide);
        }
        .lab-spec__token-value {
          font-family: var(--font-mono);
          color: var(--color-primary);
        }
        .lab-spec__code-block {
          border-top: 1px solid var(--color-border-subtle);
          padding-top: var(--space-3);
        }
        .lab-spec__code-summary {
          cursor: pointer;
          font-size: var(--text-xs);
          font-weight: var(--weight-medium);
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wide);
        }
        .lab-spec__code {
          margin-top: var(--space-2);
          padding: var(--space-3);
          background: var(--color-onyx);
          border-radius: var(--radius-sm);
          overflow-x: auto;
          font-size: var(--text-xs);
          line-height: 1.5;
          color: var(--color-silver-mist);
        }
      `}</style>
    </motion.div>
  );
}