"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Grid, ListNumbered, ArrowRight, Filter } from "@carbon/icons-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getLocaleText, Locale } from "@/lib/utils-locale";
import { resolveProjectImage, getPexelsFallback } from "@/lib/pexels-images";

type ViewMode = "grid" | "revista";

interface ProjectsSectionProps {
  projects: any[];
  locale: Locale;
}

export default function ProjectsSection({ projects, locale }: ProjectsSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [view, setView] = useState<ViewMode>("grid");
  const [category, setCategory] = useState<string>("all");
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    try {
      const savedView = localStorage.getItem("projects-view");
      if (savedView === "grid" || savedView === "revista") setView(savedView);
      const urlCategory = searchParams.get("category");
      if (urlCategory) setCategory(urlCategory);
    } catch {}
  }, [searchParams]);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem("projects-view", view);
    } catch {}
  }, [view, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [category, searchParams, mounted]);

  const categories = useMemo(() => {
    const seen = new Set<string>();
    projects.forEach((p: any) => {
      const c = getLocaleText(p.category, locale)?.trim();
      if (c) seen.add(c);
    });
    return Array.from(seen);
  }, [projects, locale]);

  const filtered = useMemo(() => {
    if (category === "all") return projects;
    return projects.filter((p: any) => getLocaleText(p.category, locale) === category);
  }, [projects, category, locale]);

  const labels = {
    en: { all: "All projects", grid: "Grid", revista: "Revista", result: "projects" },
    es: { all: "Todos", grid: "Grilla", revista: "Revista", result: "proyectos" },
    jp: { all: "すべて", grid: "グリッド", revista: "レビスタ", result: "件" },
  }[locale as Locale];

  const handleCategoryChange = (c: string) => {
    setCategory(c);
  };

  const handleViewChange = (v: ViewMode) => {
    setView(v);
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-14 border-b border-[var(--color-border-subtle)] pb-8">
        {/* Category filter */}
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects">
          <button
            role="tab"
            aria-selected={category === "all"}
            onClick={() => handleCategoryChange("all")}
            className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full border transition-colors ${
              category === "all"
                ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)] border-[var(--color-primary)]"
                : "border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]"
            }`}
          >
            {labels.all}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              onClick={() => handleCategoryChange(c)}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full border transition-colors ${
                category === c
                  ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)] border-[var(--color-primary)]"
                  : "border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div
          className="inline-flex items-center gap-1 p-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)]"
          role="group"
          aria-label="View mode"
        >
          <button
            onClick={() => handleViewChange("grid")}
            aria-pressed={view === "grid"}
            title={labels.grid}
            aria-label={labels.grid}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] transition-colors ${
              view === "grid"
                ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)]"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            <Grid size={16} />
            {labels.grid}
          </button>
          <button
            onClick={() => handleViewChange("revista")}
            aria-pressed={view === "revista"}
            title={labels.revista}
            aria-label={labels.revista}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] transition-colors ${
              view === "revista"
                ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)]"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            <ListNumbered size={16} />
            {labels.revista}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: reducedMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {filtered.map((project: any, i: number) => {
              const title = getLocaleText(project.title, locale);
              const categoryText = getLocaleText(project.category, locale);
              const img = resolveProjectImage(project.imageUrl, project.slug);
              return (
                <motion.div
                  key={project._id || `${project.slug}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : i * 0.05 }}
                >
                  <Link
                    href={`/work/${project.slug}?lang=${locale}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] mb-5">
                      {img ? (
                        <Image
                          src={img}
                          alt={title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-display font-black text-4xl uppercase text-[var(--color-text-tertiary)] tracking-tighter">
                          {title.slice(0, 2)}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[var(--color-midnight)]/0 group-hover:bg-[var(--color-midnight)]/20 transition-colors duration-500" />
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-display font-bold text-lg tracking-tight text-[var(--color-text-primary)]">
                        {title}
                      </h3>
                      <span className="text-[11px] font-bold tracking-widest text-[var(--color-text-tertiary)] pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-[12px] text-[var(--color-text-secondary)]">{categoryText}</p>
                      <span className="text-[11px] font-bold tracking-widest text-[var(--color-text-tertiary)]">
                        {project.year}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="revista"
            initial={{ opacity: reducedMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
            className="space-y-24"
          >
            {filtered.map((project: any, i: number) => {
              const title = getLocaleText(project.title, locale);
              const categoryText = getLocaleText(project.category, locale);
              const img = resolveProjectImage(project.imageUrl, project.slug) || getPexelsFallback(project.slug);
              const reversed = i % 2 === 1;
              return (
                <motion.article
                  key={project._id || `${project.slug}-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reducedMotion ? 0 : 0.6 }}
                  className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Index */}
                  <span className="hidden lg:block absolute -top-6 left-0 font-display text-[9rem] font-black leading-none text-[var(--color-text-primary)]/[0.05] select-none pointer-events-none tracking-tighter">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Image */}
                  <div className="lg:col-span-8 relative overflow-hidden rounded-[6px] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)]">
                    <Link href={`/work/${project.slug}?lang=${locale}`} className="group block relative aspect-[16/10]">
                      {img ? (
                        <Image
                          src={img}
                          alt={title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-display font-black text-6xl uppercase text-[var(--color-text-tertiary)] tracking-tighter">
                          {title.slice(0, 2)}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[var(--color-midnight)]/0 group-hover:bg-[var(--color-midnight)]/20 transition-colors duration-500" />
                    </Link>
                  </div>

                  {/* Meta */}
                  <div className={`lg:col-span-4 ${reversed ? "lg:order-1" : ""}`}>
                    <div className="space-y-4 lg:-mx-6">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-black tracking-[0.4em] text-[var(--color-primary)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-[var(--color-border-subtle)]" />
                        <span className="text-[11px] font-bold tracking-widest text-[var(--color-text-tertiary)]">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                        {categoryText}
                      </p>
                      <Link href={`/work/${project.slug}?lang=${locale}`} className="group block">
                        <h3 className="font-display text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                          {title}
                        </h3>
                        <span className="inline-flex items-center gap-2 mt-6 text-[12px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                          {locale === "es" ? "Ver caso" : locale === "jp" ? "ケースを見る" : "View case"}
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-[var(--color-text-tertiary)]">
          {labels.result} — 0
        </p>
      )}
    </div>
  );
}