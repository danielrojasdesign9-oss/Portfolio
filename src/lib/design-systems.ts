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
    label: "Midnight Classic",
    description: "Deep navy + Indigo + Merlot. Space Grotesk headings, Crimson Pro body. The original system.",
    preview: { bg: "#FAFAFA", primary: "#1C0B69", secondary: "#2D318C", text: "#1D1D15" },
    vars: {
      "--color-midnight": "#1C0B69",
      "--color-indigo": "#2D318C",
      "--color-merlot": "#7F333D",
      "--color-silver-mist": "#CCCCCC",
      "--color-onyx": "#1D1D15",
      "--color-primary": "#1C0B69",
      "--color-primary-hover": "#2D318C",
      "--color-primary-light": "#E8E0F0",
      "--color-secondary": "#2D318C",
      "--color-accent": "#7F333D",
      "--font-heading": "var(--font-sg), system-ui, sans-serif",
      "--font-body": "var(--font-cp), Georgia, serif",
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

/** @deprecated Use designSystems */
export const systems = designSystems;
