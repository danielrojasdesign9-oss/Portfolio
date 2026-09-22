"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface ControlConfig {
  label: string;
  type: "range" | "select" | "checkbox" | "color";
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
  defaultValue: string | number | boolean;
}

interface LabControlsProps {
  controls: Record<string, ControlConfig>;
  values: Record<string, string | number | boolean>;
  onChange: (key: string, value: string | number | boolean) => void;
  presets?: Record<string, Record<string, string | number | boolean>>;
  className?: string;
}

export function LabControls({
  controls,
  values,
  onChange,
  presets,
  className = "",
}: LabControlsProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handlePresetClick = useCallback(
    (presetValues: Record<string, string | number | boolean>) => {
      Object.entries(presetValues).forEach(([key, value]) => {
        onChange(key, value);
      });
    },
    [onChange]
  );

  return (
    <motion.div
      className={`lab-controls ${className}`}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ overflow: "hidden" }}
    >
      <div className="lab-controls__header">
        <h4 className="lab-controls__title">Controls</h4>
        <button
          className="lab-controls__toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Collapse controls" : "Expand controls"}
        >
          {isExpanded ? "−" : "+"}
        </button>
      </div>

      {isExpanded && (
        <div className="lab-controls__content">
          {presets && Object.keys(presets).length > 0 && (
            <div className="lab-controls__presets">
              <span className="lab-controls__presets-label">Presets:</span>
              <div className="lab-controls__preset-buttons">
                {Object.entries(presets).map(([name, presetValues]) => (
                  <button
                    key={name}
                    className="lab-controls__preset-btn"
                    onClick={() => handlePresetClick(presetValues)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="lab-controls__fields">
            {Object.entries(controls).map(([key, config]) => (
              <div key={key} className="lab-controls__field">
                <label htmlFor={`lab-control-${key}`} className="lab-controls__label">
                  {config.label}
                  {config.type === "range" && (
                    <span className="lab-controls__value">
                      {typeof values[key] === "number" ? values[key] : config.defaultValue}
                      {config.step && config.step < 1 ? "" : config.min !== undefined && config.max !== undefined ? "" : ""}
                    </span>
                  )}
                </label>
                {config.type === "range" && (
                  <input
                    id={`lab-control-${key}`}
                    type="range"
                    min={config.min ?? 0}
                    max={config.max ?? 100}
                    step={config.step ?? 1}
                    value={values[key] as number}
                    onChange={(e) => onChange(key, parseFloat(e.target.value))}
                    className="lab-controls__input"
                  />
                )}
                {config.type === "select" && (
                  <select
                    id={`lab-control-${key}`}
                    value={values[key] as string}
                    onChange={(e) => onChange(key, e.target.value)}
                    className="lab-controls__input lab-controls__select"
                  >
                    {config.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}
                {config.type === "checkbox" && (
                  <label className="lab-controls__checkbox-label">
                    <input
                      id={`lab-control-${key}`}
                      type="checkbox"
                      checked={values[key] as boolean}
                      onChange={(e) => onChange(key, e.target.checked)}
                      className="lab-controls__checkbox"
                    />
                    <span className="lab-controls__checkbox-text">Enabled</span>
                  </label>
                )}
                {config.type === "color" && (
                  <input
                    id={`lab-control-${key}`}
                    type="color"
                    value={values[key] as string}
                    onChange={(e) => onChange(key, e.target.value)}
                    className="lab-controls__input lab-controls__color"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .lab-controls {
          position: sticky;
          top: var(--space-6);
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          max-height: calc(100vh - var(--space-12));
          overflow-y: auto;
        }
        .lab-controls__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-4);
          padding-bottom: var(--space-3);
          border-bottom: 1px solid var(--color-border-subtle);
        }
        .lab-controls__title {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--weight-semibold);
        }
        .lab-controls__toggle {
          width: 28px;
          height: 28px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-subtle);
          background: var(--color-bg);
          cursor: pointer;
          font-size: var(--text-lg);
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lab-controls__presets {
          margin-bottom: var(--space-4);
        }
        .lab-controls__presets-label {
          font-size: var(--text-xs);
          font-weight: var(--weight-semibold);
          text-transform: uppercase;
          letter-spacing: var(--tracking-wider);
          color: var(--color-text-tertiary);
          display: block;
          margin-bottom: var(--space-2);
        }
        .lab-controls__preset-buttons {
          display: flex;
          gap: var(--space-2);
          flex-wrap: wrap;
        }
        .lab-controls__preset-btn {
          padding: var(--space-1) var(--space-3);
          font-size: var(--text-xs);
          font-weight: var(--weight-medium);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-sm);
          background: var(--color-bg);
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .lab-controls__preset-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .lab-controls__fields {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        .lab-controls__field {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .lab-controls__label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: var(--text-sm);
          font-weight: var(--weight-medium);
          color: var(--color-text-primary);
        }
        .lab-controls__value {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
        }
        .lab-controls__input {
          width: 100%;
          padding: var(--space-2) var(--space-3);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          background: var(--color-bg);
          color: var(--color-text-primary);
          font-family: var(--font-body);
        }
        .lab-controls__input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px var(--color-primary-light);
        }
        .lab-controls__select {
          cursor: pointer;
        }
        .lab-controls__checkbox-label {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          cursor: pointer;
        }
        .lab-controls__checkbox {
          width: 18px;
          height: 18px;
          accent-color: var(--color-primary);
        }
        .lab-controls__checkbox-text {
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
        }
        .lab-controls__color {
          width: 60px;
          height: 36px;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
        }
      `}</style>
    </motion.div>
  );
}