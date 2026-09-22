"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "@carbon/react";
import { ArrowUpRight, Launch } from "@carbon/icons-react";
import type { Locale } from "@/lib/utils-locale";
import CarbonLinkButton from "@/components/ui/CarbonLinkButton";
import Footer from "@/components/Footer";
import { recursosData } from "@/lib/recursos-data";
import type { Resource } from "@/lib/recursos-data";
import { aiToolNames } from "@/lib/utils-recursos";

const CATEGORIES = ["all", "research", "designops", "producto", "liderazgo"] as const;

const aiColors: Record<string, string> = {
  claude: "#977669",
  chatgpt: "#10a37f",
  gemini: "#4285f4",
};

interface RecursosClientProps {
  t: Record<string, string>;
  locale: Locale;
}

function ResourceCard({ resource, t, locale }: { resource: Resource; t: Record<string, string>; locale: Locale }) {
  const aiNames = aiToolNames[locale] ?? aiToolNames.en;
  const isKit = resource.type === "kit";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={resource.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
        aria-label={`${resource.title} — ${isKit ? t.kit : t.free}`}
      >
        <div className="h-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-[6px] p-7 hover:shadow-lg hover:border-[var(--color-primary)] transition-all duration-300 flex flex-col gap-5">
          {/* Type badge */}
          <div className="flex items-center justify-between">
            <span
              className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] rounded-full transition-colors ${
                isKit
                  ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)]"
                  : "border border-[var(--color-border-strong)] text-[var(--color-text-secondary)]"
              }`}
            >
              {isKit ? t.kit : t.free}
            </span>
            <ArrowUpRight
              size={20}
              className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary)] transition-colors"
            />
          </div>

          {/* Title */}
          <div className="flex-1 space-y-2">
            <h3 className="font-display text-xl font-black tracking-tighter leading-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
              {resource.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {resource.description}
            </p>
          </div>

          {/* Tags */}
          {resource.tags && resource.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-[var(--color-bg-sunken)] text-[var(--color-text-tertiary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* AI Compatibility */}
          {resource.aiCompatibility && resource.aiCompatibility.length > 0 && (
            <div className="border-t border-[var(--color-border-subtle)] pt-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-2">
                {t.compatibleWith}
              </p>
              <div className="flex gap-2 flex-wrap">
                {resource.aiCompatibility.map((ai) => (
                  <span
                    key={ai}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: aiColors[ai] || "#8a968d" }}
                    title={aiNames[ai] || ai}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
                    {aiNames[ai]?.split(" ")[0] || ai}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </a>
    </motion.div>
  );
}

export default function RecursosClient({ t, locale }: RecursosClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return recursosData.filter((r) => {
      const matchesCategory = activeCategory === "all" || r.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        q === "" ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags?.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const counts = useMemo(() => {
    const result: Record<string, number> = { all: recursosData.length };
    CATEGORIES.slice(1).forEach((cat) => {
      result[cat] = recursosData.filter((r) => r.category === cat).length;
    });
    return result;
  }, []);

  return (
    <div className="pt-40 pb-0 px-4 md:px-8 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="mb-16 space-y-4">
        <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full bg-[var(--color-primary)] text-[var(--color-text-inverse)]">
          {t.pageTitle}
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]">
          {t.pageSubtitle}
        </h1>
        <p className="text-base md:text-lg font-medium text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          {t.pageDescription}
        </p>
      </div>

      {/* Search + Filters */}
      <div className="mb-12 space-y-5 border-b border-[var(--color-border-subtle)] pb-8">
        <Search
          id="resource-search"
          size="lg"
          placeholder={locale === "es" ? "Buscar recursos..." : locale === "jp" ? "リソースを検索..." : "Search resources..."}
          labelText="Search resources"
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)]"
                  : "border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
              aria-pressed={activeCategory === cat}
            >
              {t[cat] || cat}
              <span
                className={`text-[9px] font-black ${
                  activeCategory === cat ? "text-white/70" : "text-[var(--color-text-tertiary)]"
                }`}
              >
                {counts[cat]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] mb-8">
        {filtered.length} {t.result || "resources"}
        {searchQuery && ` · "${searchQuery}"`}
      </p>

      {/* Resource Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((resource) => (
            <ResourceCard key={resource._id} resource={resource} t={t} locale={locale} />
          ))}
        </AnimatePresence>
        {filtered.length === 0 && (
          <div className="col-span-full py-24 text-center">
            <p className="text-[var(--color-text-tertiary)] font-bold uppercase tracking-[0.15em] text-[12px]">
              {locale === "es" ? "Sin resultados" : locale === "jp" ? "結果なし" : "No results found"}
            </p>
          </div>
        )}
      </motion.div>

      {/* CTA Section */}
      <section className="bg-[var(--color-bg-dark)] rounded-[6px] p-12 md:p-20 text-center text-[var(--color-text-inverse)] relative overflow-hidden mb-0">
        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
            {t.ctaTitle}
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-lg mx-auto opacity-60">
            {t.ctaDescription}
          </p>
          <CarbonLinkButton
            href={`/about?lang=${locale}`}
            kind="primary"
            size="lg"
          >
            {t.ctaButton}
          </CarbonLinkButton>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
