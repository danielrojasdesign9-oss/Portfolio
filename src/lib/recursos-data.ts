/**
 * Recursos data — Daniel Rojas Portfolio
 * Resources curated from real projects with FEMSA, BBVA, Mercado Libre
 */

export interface Resource {
  _id: string;
  title: string;
  description: string;
  category: "research" | "designops" | "producto" | "liderazgo";
  type: "free" | "kit";
  aiCompatibility?: ("claude" | "chatgpt" | "gemini")[];
  link?: string;
  tags?: string[];
}

export const recursosData: Resource[] = [
  // RESEARCH
  {
    _id: "r-001",
    title: "UX Research Prompt Pack",
    description: "30+ prompts for user interviews, affinity mapping, and insight synthesis. Tested in real BBVA and FEMSA projects.",
    category: "research",
    type: "free",
    aiCompatibility: ["claude", "chatgpt", "gemini"],
    link: "https://www.notion.so",
    tags: ["Interviews", "Synthesis", "Insights"],
  },
  {
    _id: "r-002",
    title: "Competitive Analysis Framework",
    description: "Structured methodology for competitive UX audits. Includes heuristic scoring rubric and AI-assisted gap analysis prompts.",
    category: "research",
    type: "kit",
    aiCompatibility: ["claude", "gemini"],
    link: "https://www.notion.so",
    tags: ["Heuristics", "Benchmarking"],
  },
  {
    _id: "r-003",
    title: "Jobs-To-Be-Done Canvas",
    description: "JTBD interview guide + synthesis canvas. Separate decks for B2B and B2C contexts. Used at Mercado Libre for payment flows.",
    category: "research",
    type: "kit",
    aiCompatibility: ["claude", "chatgpt"],
    link: "https://www.figma.com",
    tags: ["JTBD", "Strategy", "Canvas"],
  },
  {
    _id: "r-004",
    title: "Accessibility Audit Checklist",
    description: "WCAG 2.1 AA/AAA checklist with AI prompt templates to generate remediation plans. Includes Carbon DS checks.",
    category: "research",
    type: "free",
    aiCompatibility: ["claude", "chatgpt", "gemini"],
    link: "https://www.notion.so",
    tags: ["A11y", "WCAG", "Audit"],
  },

  // DESIGNOPS
  {
    _id: "d-001",
    title: "Design Token Architecture Guide",
    description: "How to structure semantic tokens from brand primitives. Includes Figma variables setup, CSS custom properties, and multi-theme strategy.",
    category: "designops",
    type: "kit",
    aiCompatibility: ["claude"],
    link: "https://www.notion.so",
    tags: ["Design System", "Tokens", "Figma"],
  },
  {
    _id: "d-002",
    title: "Component Documentation Template",
    description: "Markdown template for documenting components: anatomy, variants, usage do/don'ts, and accessibility notes. Pairs with Storybook.",
    category: "designops",
    type: "free",
    aiCompatibility: ["claude", "chatgpt"],
    link: "https://github.com",
    tags: ["Docs", "Storybook", "Components"],
  },
  {
    _id: "d-003",
    title: "Design Review Process Kit",
    description: "End-to-end design review workflow: async feedback template, critique facilitation guide, and design QA checklist.",
    category: "designops",
    type: "kit",
    aiCompatibility: ["claude", "gemini"],
    link: "https://www.figma.com",
    tags: ["Review", "Process", "QA"],
  },
  {
    _id: "d-004",
    title: "Figma File Organization Standard",
    description: "Naming conventions, page structure, and layer organization for scalable design files. Includes auto-layout best practices.",
    category: "designops",
    type: "free",
    tags: ["Figma", "Organization", "Scale"],
  },

  // PRODUCTO
  {
    _id: "p-001",
    title: "Product Spec Template (AI-powered)",
    description: "PRD template with AI prompts to generate acceptance criteria, edge cases, and error states from a feature brief.",
    category: "producto",
    type: "kit",
    aiCompatibility: ["claude", "chatgpt", "gemini"],
    link: "https://www.notion.so",
    tags: ["PRD", "Specs", "Features"],
  },
  {
    _id: "p-002",
    title: "UX Writing Prompt Library",
    description: "200+ prompts for microcopy: CTAs, error messages, empty states, onboarding flows. Tone-consistent by product category.",
    category: "producto",
    type: "free",
    aiCompatibility: ["claude", "chatgpt"],
    link: "https://www.notion.so",
    tags: ["UX Writing", "Microcopy", "Content"],
  },
  {
    _id: "p-003",
    title: "Conversion Optimization Playbook",
    description: "Principles and tactical patterns for improving conversion in financial and ecommerce products. Based on real FEMSA data.",
    category: "producto",
    type: "kit",
    aiCompatibility: ["claude"],
    link: "https://www.notion.so",
    tags: ["Conversion", "CRO", "Patterns"],
  },

  // LIDERAZGO
  {
    _id: "l-001",
    title: "Design Team Onboarding Kit",
    description: "30-60-90 day plan for design hires, onboarding checklist, and buddy system guide. Adapted from BBVA design org practices.",
    category: "liderazgo",
    type: "kit",
    link: "https://www.notion.so",
    tags: ["Onboarding", "Team", "Management"],
  },
  {
    _id: "l-002",
    title: "Design Critique Facilitation Guide",
    description: "How to run effective, psychologically safe design critiques. Includes question cards, time blocks, and async variants.",
    category: "liderazgo",
    type: "free",
    aiCompatibility: ["claude"],
    link: "https://www.notion.so",
    tags: ["Critique", "Facilitation", "Culture"],
  },
  {
    _id: "l-003",
    title: "Stakeholder Alignment Workshop",
    description: "2-hour workshop format to align cross-functional teams on design direction. Miro template + facilitation deck included.",
    category: "liderazgo",
    type: "kit",
    aiCompatibility: ["chatgpt", "gemini"],
    link: "https://miro.com",
    tags: ["Workshop", "Alignment", "Stakeholders"],
  },
];
