export const recursosTranslations = {
  en: {
    pageTitle: "Resources",
    pageSubtitle: "Prompts that work in production.",
    pageDescription: "Developed and validated in real projects with FEMSA, BBVA and Mercado Libre. Some are free. Kits go further.",
    all: "All",
    research: "Research",
    designops: "DesignOps",
    producto: "Product",
    liderazgo: "Leadership",
    free: "GRATIS",
    kit: "KIT",
    ctaTitle: "Do you have a complex design problem?",
    ctaDescription: "Tell me your context in 5 quick questions. I'll recommend the next best step: resources, chat, mentorship, workshop or consulting.",
    ctaButton: "Request consultation",
    viewDetails: "View details",
    viewKit: "View kit",
    compatibleWith: "Compatible with",
    footer: "ALL RIGHTS RESERVED",
  },
  es: {
    pageTitle: "Recursos",
    pageSubtitle: "Prompts que funcionan en producción.",
    pageDescription: "Desarrollados y validados en proyectos reales con FEMSA, BBVA y Mercado Libre. Algunos son gratuitos. Los kits van más lejos.",
    all: "Todos",
    research: "Research",
    designops: "DesignOps",
    producto: "Producto",
    liderazgo: "Liderazgo",
    free: "GRATIS",
    kit: "KIT",
    ctaTitle: "¿Tienes un problema de diseño complejo?",
    ctaDescription: "Cuéntame tu contexto en 5 preguntas rápidas. Te recomiendo el siguiente paso adecuado: recursos, chat, mentoría, workshop o consultoría.",
    ctaButton: "Solicitar asesoría",
    viewDetails: "Ver detalles",
    viewKit: "Ver kit",
    compatibleWith: "Compatible con",
    footer: "TODOS LOS DERECHOS RESERVADOS",
  },
  jp: {
    pageTitle: "リソース",
    pageSubtitle: "プロダクションで動作するプロンプト。",
    pageDescription: "FEMSA、BBVA、Mercado Libreの実案件で開発・検証済み。一部は無料。キットはさらに充実。",
    all: "すべて",
    research: "リサーチ",
    designops: "DesignOps",
    producto: "プロダクト",
    liderazgo: "リーダーシップ",
    free: "無料",
    kit: "キット",
    ctaTitle: "複雑なデザインの問題を抱えていませんか？",
    ctaDescription: "5つの簡単な質問で状況をお聞かせください。リソース、チャット、メンタリング、ワークショップ、コンサルティングなど、最適な次のステップをご提案します。",
    ctaButton: "相談をリクエスト",
    viewDetails: "詳細を見る",
    viewKit: "キットを見る",
    compatibleWith: "対応",
    footer: "全著作権所有",
  },
} as const;

export type RecursosLocale = keyof typeof recursosTranslations;

export function getRecursosT(locale: string) {
  return recursosTranslations[locale as RecursosLocale] || recursosTranslations.en;
}

export const categoryLabels = [
  { key: "all", icon: "⊞" },
  { key: "research", icon: "🔬" },
  { key: "designops", icon: "⚙️" },
  { key: "producto", icon: "📦" },
  { key: "liderazgo", icon: "👥" },
] as const;

export const aiToolIcons: Record<string, string> = {
  claude: "/icons/claude.svg",
  chatgpt: "/icons/openai.svg",
  gemini: "/icons/gemini.svg",
};

export const aiToolNames: Record<string, Record<string, string>> = {
  en: { claude: "Claude (Anthropic)", chatgpt: "ChatGPT (OpenAI)", gemini: "Gemini (Google)" },
  es: { claude: "Claude (Anthropic)", chatgpt: "ChatGPT (OpenAI)", gemini: "Gemini (Google)" },
  jp: { claude: "Claude (Anthropic)", chatgpt: "ChatGPT (OpenAI)", gemini: "Gemini (Google)" },
};
