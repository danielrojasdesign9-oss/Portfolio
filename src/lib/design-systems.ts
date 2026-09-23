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
  "--color-bg"?: string;
  "--color-bg-elevated"?: string;
  "--color-bg-sunken"?: string;
  "--color-bg-dark"?: string;
  "--color-text-primary"?: string;
  "--color-text-secondary"?: string;
  "--color-text-tertiary"?: string;
  "--color-text-inverse"?: string;
  "--color-border"?: string;
  "--color-border-subtle"?: string;
  "--color-border-strong"?: string;
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
      "--color-bg": "#FFFFFF",
      "--color-bg-elevated": "#FFFFFF",
      "--color-bg-sunken": "#F0F0F0",
      "--color-bg-dark": "#161616",
      "--color-text-primary": "#161616",
      "--color-text-secondary": "#333333",
      "--color-text-tertiary": "#444444",
      "--color-text-inverse": "#FFFFFF",
      "--color-border": "#C6C6C6",
      "--color-border-subtle": "#E5E5E5",
      "--color-border-strong": "#222222",
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
      "--color-bg": "#F9F6F1",
      "--color-bg-elevated": "#FFFDF8",
      "--color-bg-sunken": "#F1E9DC",
      "--color-bg-dark": "#2A1F1A",
      "--color-text-primary": "#2A1F1A",
      "--color-text-secondary": "#5A4A3E",
      "--color-text-tertiary": "#7A6A5C",
      "--color-text-inverse": "#FFFFFF",
      "--color-border": "#D4C5B0",
      "--color-border-subtle": "#E8DFD2",
      "--color-border-strong": "#2A1F1A",
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
      "--color-bg": "#F5F5F5",
      "--color-bg-elevated": "#FFFFFF",
      "--color-bg-sunken": "#E8E8E8",
      "--color-bg-dark": "#111111",
      "--color-text-primary": "#111111",
      "--color-text-secondary": "#333333",
      "--color-text-tertiary": "#555555",
      "--color-text-inverse": "#FFFFFF",
      "--color-border": "#CCCCCC",
      "--color-border-subtle": "#DDDDDD",
      "--color-border-strong": "#111111",
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

export function applyDesignSystem(key: string): void {
  const system = designSystems[key];
  if (!system) return;
  const root = document.documentElement;
  Object.entries(system.vars).forEach(([prop, value]) => {
    if (value) root.style.setProperty(prop, value);
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
  const props = new Set<string>();
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
