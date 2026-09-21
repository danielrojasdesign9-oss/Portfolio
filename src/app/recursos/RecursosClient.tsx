"use client";

import { useState } from "react";
import { Search, Tag, Grid, Column, ClickableTile } from "@carbon/react";
import { ArrowUpRight } from "@carbon/icons-react";
import type { Locale } from "@/lib/utils-locale";
import CarbonLinkButton from "@/components/ui/CarbonLinkButton";

const CATEGORIES = ["all", "research", "designops", "producto", "liderazgo"] as const;

const aiColors: Record<string, string> = {
  claude: "#977669",
  chatgpt: "#10a37f",
  gemini: "#4285f4",
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
}

interface RecursosClientProps {
  resources: Resource[];
  t: Record<string, string>;
  locale: Locale;
}

export default function RecursosClient({ resources, t, locale }: RecursosClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = resources.filter((r) => {
    const matchesCategory = activeCategory === "all" || r.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-40 pb-32 px-4 md:px-8 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="mb-16 space-y-4">
        <Tag type="green" size="sm">
          {t.pageTitle}
        </Tag>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]">
          {t.pageSubtitle}
        </h1>
        <p className="text-base md:text-lg font-medium text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          {t.pageDescription}
        </p>
      </div>

      {/* Search + Filters */}
      <div className="mb-12 space-y-6 border-b border-[var(--color-border-subtle)] pb-6">
        <Search
          id="resource-search"
          size="lg"
          placeholder="Search resources..."
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
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[var(--color-primary)] text-[var(--color-text-inverse)]'
                  : 'border border-[var(--color-border-strong)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-sunken)]'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {t[cat] || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Grid */}
      <Grid narrow className="!p-0 mb-32">
        {filtered.map((resource) => (
          <Column key={resource._id} sm={4} md={4} lg={4} className="mb-6">
            <a
              href={resource.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <ClickableTile className="!p-0 !border-0 bg-transparent group h-full">
              <div className="h-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-[6px] p-8 hover:shadow-lg transition-all duration-300 flex flex-col">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-5">
                  <Tag type={resource.type === "free" ? "outline" : "green"} size="sm">
                    {resource.type === "free" ? t.free : t.kit}
                  </Tag>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-black tracking-tighter mb-3 leading-tight">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8 flex-1">
                  {resource.description}
                </p>

                {/* AI Compatibility */}
                {resource.aiCompatibility && resource.aiCompatibility.length > 0 && (
                  <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-2">
                      {t.compatibleWith}
                    </p>
                    <div className="flex gap-2">
                      {resource.aiCompatibility.map((ai) => (
                        <span
                          key={ai}
                          className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-bold text-white"
                          style={{ backgroundColor: aiColors[ai] || "#8a968d" }}
                          title={ai}
                        >
                          {aiInitials[ai] || ai[0].toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-auto">
                  <CarbonLinkButton
                    href={resource.link || "#"}
                    kind="tertiary"
                    size="sm"
                    icon="ArrowUpRight"
                  >
                    {resource.type === "kit" ? t.viewKit : t.viewDetails}
                  </CarbonLinkButton>
                </div>
              </div>
            </ClickableTile>
            </a>
          </Column>
        ))}
      </Grid>

      {/* CTA Section */}
      <section className="bg-[var(--color-bg-dark)] rounded-[6px] p-12 md:p-20 text-center text-[var(--color-text-inverse)] relative overflow-hidden">
        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
            {t.ctaTitle}
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-lg mx-auto" style={{ color: 'var(--color-text-inverse)', opacity: 0.6 }}>
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

      {/* Footer */}
      <footer className="mt-16 text-center">
        <p className="text-[11px] tracking-[0.4em] text-[var(--color-text-tertiary)]">
          © {new Date().getFullYear()} {t.footer}
        </p>
      </footer>
    </div>
  );
}
