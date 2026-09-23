/**
 * Design Systems Registry — Daniel Rojas Portfolio
 * Hot-swap design systems via CSS custom properties
 */

export interface DesignSystemTokens {
  "--color-midnight"?: string;
  "--color-indigo"?: string;
  "--color-merlot"?: string;
  "--color-silver-mist"?: string;
  "--color-onyx"?: string;
  "--color-primary"?: string;
  "--color-primary-hover"?: string;
  "--color-primary-light"?: string;
  "--color-secondary"?: string;
  "--color-accent"?: string;
  "--color-bg-dark"?: string;
  "--font-heading"?: string;
  "--font-body"?: string;
  "--radius-sm"?: string;
  "--radius-md"?: string;
  "--radius-lg"?: string;
  "--radius-xl"?: string;
  "--radius-full"?: string;
  "--shadow-sm"?: string;
  "--shadow-md"?: string;
  "--shadow-lg"?: string;
  "--shadow-xl"?: string;
}

export interface DesignSystem {
  key: string;
  label: string;
  description: string;
  preview: {
    bg: string;
    primary: string;
    secondary: string;
    text: string;
  };
  vars: DesignSystemTokens;
}

export const designSystems: Record<string, DesignSystem> = {
  v1: {
    key: "v1",
    label: "Carbon Blue",
    description: "IBM Plex Sans + Blue Ribbon #0F62FE. Space Grotesk headings. The live PS:Home Daniel identity.",
    preview: { bg: "#FFFFFF", primary: "#0F62FE", secondary: "#393939", text: "#161616" },
    vars: {
      "--color-midnight": "#0F62FE",
      "--color-indigo": "#0043CE",
      "--color-merlot": "#8A3FFC",
      "--color-silver-mist": "#C6C6C6",
      "--color-onyx": "#161616",
      "--color-primary": "#0F62FE",
      "--color-primary-hover": "#0043CE",
      "--color-primary-light": "#D0E2FF",
      "--color-secondary": "#393939",
      "--color-accent": "#8A3FFC",
      "--color-bg-dark": "#161616",
      "--font-heading": "var(--font-sg), 'Space Grotesk', system-ui, sans-serif",
      "--font-body": "var(--font-plex), 'IBM Plex Sans', system-ui, sans-serif",
      "--radius-sm": "4px",
      "--radius-md": "8px",
      "--radius-lg": "12px",
      "--radius-xl": "16px",
      "--radius-full": "9999px",
    },
  },
  v2: {
    key: "v2",
    label: "Warm Editorial",
    description: "Warm terracota + saffron accents. DM Serif Display headlines, Inter body. Editorial warmth.",
    preview: { bg: "#F9F6F1", primary: "#8B3A1E", secondary: "#C47A2B", text: "#2A1F1A" },
    vars: {
      "--color-midnight": "#8B3A1E",
      "--color-indigo": "#C47A2B",
      "--color-merlot": "#5C2D1E",
      "--color-silver-mist": "#D4C5B0",
      "--color-onyx": "#2A1F1A",
      "--color-primary": "#8B3A1E",
      "--color-primary-hover": "#C47A2B",
      "--color-primary-light": "#F5EBE0",
      "--color-secondary": "#C47A2B",
      "--color-accent": "#5C2D1E",
      "--color-bg-dark": "#2A1F1A",
      "--font-heading": "var(--font-editorial), 'Times New Roman', serif",
      "--font-body": "var(--font-ui), system-ui, sans-serif",
      "--radius-sm": "2px",
      "--radius-md": "4px",
      "--radius-lg": "6px",
      "--radius-xl": "8px",
      "--radius-full": "9999px",
    },
  },
  v3: {
    key: "v3",
    label: "Monochrome Studio",
    description: "Pure black & white. Space Grotesk headlines, Inter body. High contrast studio feel.",
    preview: { bg: "#F5F5F5", primary: "#000000", secondary: "#333333", text: "#111111" },
    vars: {
      "--color-midnight": "#000000",
      "--color-indigo": "#333333",
      "--color-merlot": "#666666",
      "--color-silver-mist": "#CCCCCC",
      "--color-onyx": "#111111",
      "--color-primary": "#000000",
      "--color-primary-hover": "#222222",
      "--color-primary-light": "#F0F0F0",
      "--color-secondary": "#333333",
      "--color-accent": "#666666",
      "--color-bg-dark": "#111111",
      "--font-heading": "var(--font-sg), system-ui, sans-serif",
      "--font-body": "var(--font-ui), system-ui, sans-serif",
      "--radius-sm": "0px",
      "--radius-md": "0px",
      "--radius-lg": "2px",
      "--radius-xl": "4px",
      "--radius-full": "9999px",
    },
  },
};

export type SystemKey = keyof typeof designSystems;

/**
 * Tokens that must come from design-tokens.css cascade (light/dark/AAA).
 * Design systems must NOT pin these as inline styles or dark mode breaks.
 */
export const THEME_DEPENDENT_PROPS = [
  "--color-bg",
  "--color-bg-elevated",
  "--color-bg-sunken",
  "--color-text-primary",
  "--color-text-secondary",
  "--color-text-tertiary",
  "--color-text-inverse",
  "--color-border",
  "--color-border-subtle",
  "--color-border-strong",
  "--color-text",
  "--color-layer-hover",
] as const;

export function applyDesignSystem(key: string): void {
  const system = designSystems[key];
  if (!system) return;
  const root = document.documentElement;
  // Always clear theme-dependent inline overrides first
  THEME_DEPENDENT_PROPS.forEach((prop) => root.style.removeProperty(prop));
  Object.entries(system.vars).forEach(([prop, value]) => {
    if (value && !(THEME_DEPENDENT_PROPS as readonly string[]).includes(prop)) {
      root.style.setProperty(prop, value);
    }
  });
  try {
    localStorage.setItem("design-system", key);
  } catch {}
}

export function getStoredSystem(): string {
  try {
    return localStorage.getItem("design-system") || "v1";
  } catch {
    return "v1";
  }
}

/** All custom properties ever managed by any system — used to fully clear inline overrides. */
export function allManagedProps(): string[] {
  const props = new Set<string>(THEME_DEPENDENT_PROPS);
  Object.values(designSystems).forEach((system) => {
    Object.keys(system.vars).forEach((prop) => props.add(prop));
  });
  return Array.from(props);
}

/** Reset to the base identity: clears every inline override so design-tokens.css rules again. */
export function resetDesignSystem(): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  allManagedProps().forEach((prop) => root.style.removeProperty(prop));
  try {
    localStorage.setItem("design-system", "v1");
  } catch {}
}

/** @deprecated Use designSystems */
export const systems = designSystems;
