"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/utils-locale";

const CATEGORIES = ["all", "research", "designops", "producto", "liderazgo"] as const;

const aiColors: Record<string, string> = {
  claude: "bg-[#977669]",
  chatgpt: "bg-[#10a37f]",
  gemini: "bg-[#4285f4]",
};

const aiInitials: Record<string, string> = {
  claude: "C",
  chatgpt: "G",
  gemini: "Ge",
};

interface Resource {
  _id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  aiCompatibility?: string[];
  link?: string;
  slug?: string;
  previewImageUrl?: string;
}

interface RecursosClientProps {
  resources: Resource[];
  t: Record<string, string>;
  locale: Locale;
}

export default function RecursosClient({ resources, t, locale }: RecursosClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? resources
    : resources.filter((r) => r.category === activeCategory);

  return (
    <div className="pt-40 pb-32 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="mb-16 space-y-4">
        <p className="text-[14px] font-black uppercase tracking-[0.5em] text-black/30">
          {t.pageTitle}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase text-black">
          {t.pageSubtitle}
        </h1>
        <p className="text-base md:text-lg font-medium text-black/50 max-w-2xl leading-relaxed">
          {t.pageDescription}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-black/5 pb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-[11px] font-black uppercase tracking-[0.2em] px-5 py-3 rounded-full border transition-all duration-300 ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "bg-transparent text-black/40 border-black/10 hover:border-black/30 hover:text-black/70"
            }`}
          >
            {t[cat] || cat}
          </button>
        ))}
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
        {filtered.map((resource, i) => (
          <motion.div
            key={resource._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="group relative bg-white border border-black/5 rounded-[16px] p-8 hover:shadow-lg hover:border-black/10 transition-all duration-500 flex flex-col"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-5">
              <span
                className={`text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${
                  resource.type === "free"
                    ? "bg-black/5 text-black/60 border border-black/10"
                    : "bg-black text-white"
                }`}
              >
                {resource.type === "free" ? t.free : t.kit}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-black uppercase tracking-tighter mb-3 leading-tight">
              {resource.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-black/50 leading-relaxed mb-8 flex-1">
              {resource.description}
            </p>

            {/* AI Compatibility */}
            {resource.aiCompatibility && resource.aiCompatibility.length > 0 && (
              <div className="mb-6">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-black/30 mb-2">
                  {t.compatibleWith}
                </p>
                <div className="flex gap-2">
                  {resource.aiCompatibility.map((ai) => (
                    <span
                      key={ai}
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-black text-white ${aiColors[ai] || "bg-black/30"}`}
                      title={ai}
                    >
                      {aiInitials[ai] || ai[0].toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <a
              href={resource.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-black border border-black/10 px-6 py-3.5 rounded-full hover:bg-black hover:text-white transition-all duration-300 self-start"
            >
              {resource.type === "kit" ? t.viewKit : t.viewDetails}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-black rounded-[24px] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-8 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] uppercase">
            {t.ctaTitle}
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            {t.ctaDescription}
          </p>
          <a
            href={`/about?lang=${locale}`}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black uppercase tracking-widest text-[11px] transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            {t.ctaButton}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20">
          © {new Date().getFullYear()} {t.footer}
        </p>
      </footer>
    </div>
  );
}
