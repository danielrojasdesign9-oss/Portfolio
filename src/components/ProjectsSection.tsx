"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Grid, CarouselHorizontal, ArrowRight, ChevronLeft, ChevronRight } from "@carbon/icons-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getLocaleText, Locale } from "@/lib/utils-locale";
import { resolveProjectImage, getPexelsFallback } from "@/lib/pexels-images";

type ViewMode = "grid" | "carousel";

/** Normalize raw Sanity categories into a shared set so filters reveal what's common across projects. */
const CATEGORY_ALIASES: Record<string, string> = {
  "ai": "AI Systems",
  "ai systems": "AI Systems",
  "ai system": "AI Systems",
  "ai-assisted": "AI Systems",
  "ai assisted": "AI Systems",
  "artificial intelligence": "AI Systems",
  "fintech": "Fintech",
  "banking": "Fintech",
  "finance": "Fintech",
  "product": "Product",
  "product design": "Product",
  "e-commerce": "E-commerce",
  "ecommerce": "E-commerce",
  "e commerce": "E-commerce",
  "fashion e-commerce": "E-commerce",
  "fashion ecommerce": "E-commerce",
  "fashion": "E-commerce",
  "retail": "E-commerce",
  "telemedicine": "Telemedicine",
  "telehealth": "Telemedicine",
  "health": "Telemedicine",
  "healthcare": "Telemedicine",
  "govtech": "GovTech",
  "gov tech": "GovTech",
  "government": "GovTech",
  "tax": "Tax Information Reporting",
  "tax information reporting": "Tax Information Reporting",
  "tax reporting": "Tax Information Reporting",
  "reporte tributario": "Tax Information Reporting",
  "tributos": "Tax Information Reporting",
  "government / tax reporting / public sector": "Tax Information Reporting",
  "gobierno / reporte tributario / sector público": "Tax Information Reporting",
  "tax information reporting / compliance / b2b saas": "Tax Information Reporting",
  "reporte tributario / cumplimiento / b2b saas": "Tax Information Reporting",
  "政府 / 税務報告 / 公共セクター": "Tax Information Reporting",
  "税務情報報告 / コンプライアンス / B2B SaaS": "Tax Information Reporting",
};

function normalizeCategory(raw: unknown): string {
  const text = typeof raw === "string" ? raw.trim().toLowerCase() : "";
  if (!text) return "";
  if (CATEGORY_ALIASES[text]) return CATEGORY_ALIASES[text];
  return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));
}

interface ProjectsSectionProps {
  projects: any[];
  locale: Locale;
}

function ProjectCard({ project, locale, index }: { project: any; locale: Locale; index: number }) {
  const title = getLocaleText(project.title, locale);
  const categoryText = getLocaleText(project.category, locale);
  const img = resolveProjectImage(project.imageUrl, project.slug) || getPexelsFallback(project.slug || String(index));

  return (
    <Link href={`/work/${project.slug}?lang=${locale}`} className="flex flex-col gap-2 items-start group">
      <div className="aspect-[424/530] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-clip relative rounded-[8px] w-full">
        {img ? (
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-display font-black text-4xl uppercase text-[var(--color-text-tertiary)] tracking-tighter">
            {title.slice(0, 2)}
          </div>
        )}
      </div>
      <div className="flex items-start justify-between pt-3 w-full">
        <span className="font-display font-bold text-[18px] text-[var(--color-text-primary)] tracking-[-0.45px] leading-[28px]">{title}</span>
        <span className="font-bold text-[var(--color-text-tertiary)] text-[11px] tracking-[2.2px] leading-[11px] mt-1" style={{ fontVariationSettings: '"wdth" 100' }}>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="flex items-center justify-between w-full">
        <span className="font-normal text-[var(--color-text-secondary)] text-[12px] leading-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>{categoryText}</span>
        {project.year && (
          <span className="font-bold text-[var(--color-text-tertiary)] text-[11px] tracking-[2.2px] leading-[11px]" style={{ fontVariationSettings: '"wdth" 100' }}>{project.year}</span>
        )}
      </div>
    </Link>
  );
}

function GridView({ filtered, locale, reducedMotion }: { filtered: any[]; locale: Locale; reducedMotion: boolean }) {
  return (
    <motion.div
      key="grid"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: reducedMotion ? 0 : 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6"
    >
      {filtered.map((project: any, i: number) => (
        <motion.div
          key={project._id || `${project.slug}-${i}`}
          data-project-slug={project.slug}
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : Math.min(i * 0.05, 0.4) }}
        >
          <ProjectCard project={project} locale={locale} index={i} />
        </motion.div>
      ))}
    </motion.div>
  );
}

function CarouselView({ filtered, locale, reducedMotion, carouselIndex, setCarouselIndex, handleCarouselPrev, handleCarouselNext, carouselRef }: { filtered: any[]; locale: Locale; reducedMotion: boolean; carouselIndex: number; setCarouselIndex: (i: number) => void; handleCarouselPrev: () => void; handleCarouselNext: () => void; carouselRef: React.RefObject<HTMLDivElement | null> }) {
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const isVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (!isVertical) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY >= 0 ? 320 : -320, behavior: reducedMotion ? "auto" : "smooth" });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [carouselRef, reducedMotion]);

  return (
    <motion.div
      key="carousel"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: reducedMotion ? 0 : 0.3 }}
      className="relative"
    >
      <div
        ref={carouselRef}
        className="flex gap-8 overflow-x-auto overflow-y-hidden overscroll-none snap-x snap-mandatory pb-4"
      >
        {filtered.map((project: any, i: number) => (
          <motion.div
            key={project._id || `${project.slug}-${i}`}
            initial={reducedMotion ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : Math.min(i * 0.05, 0.4) }}
            data-project-slug={project.slug}
            className="flex-shrink-0 snap-center w-72"
          >
            <ProjectCard project={project} locale={locale} index={i} />
          </motion.div>
        ))}
      </div>

      {!reducedMotion && filtered.length > 1 && (
        <>
          <button
            onClick={handleCarouselPrev}
            disabled={carouselIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-10 z-10 p-3 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] hover:border-[var(--color-primary)] transition-all disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleCarouselNext}
            disabled={carouselIndex === filtered.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-10 z-10 p-3 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] hover:border-[var(--color-primary)] transition-all disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <div className="mt-10 flex items-center justify-start gap-2 pb-2">
        {filtered.map((_, i) => (
          <button
            key={i}
            onClick={() => setCarouselIndex(i)}
            aria-label={`Go to project ${i + 1}`}
            aria-current={i === carouselIndex}
            className={`carousel-dot h-2 rounded-full transition-all ${i === carouselIndex ? "bg-[var(--color-primary)] w-6" : "w-2 bg-[var(--color-text-tertiary)] hover:bg-[var(--color-text-secondary)]"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ projects, locale }: ProjectsSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [view, setView] = useState<ViewMode>("grid");
  const [category, setCategory] = useState<string>("all");
  const [mounted, setMounted] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    setMounted(true);
    try {
      const savedView = localStorage.getItem("projects-view");
      if (savedView === "grid" || savedView === "carousel") setView(savedView);
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

  const handleCarouselPrev = () => setCarouselIndex((prev) => Math.max(prev - 1, 0));
  const handleCarouselNext = () => setCarouselIndex((prev) => Math.min(prev + 1, filtered.length - 1));

  const categories = useMemo(() => {
    const seen = new Set<string>();
    projects.forEach((p: any) => {
      const c = normalizeCategory(getLocaleText(p.category, locale));
      if (c) seen.add(c);
    });
    return Array.from(seen).sort();
  }, [projects, locale]);

  const filtered = useMemo(() => {
    if (category === "all") return projects;
    return projects.filter((p: any) => normalizeCategory(getLocaleText(p.category, locale)) === category);
  }, [projects, category, locale]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const children = Array.from(el.children) as HTMLElement[];
        if (!children.length) return;
        const scrollLeft = el.scrollLeft;
        let best = 0;
        let bestDist = Infinity;
        children.forEach((child, i) => {
          const dist = Math.abs(child.offsetLeft - scrollLeft);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        setCarouselIndex((prev) => (prev === best ? prev : best));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, [filtered.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (view !== "carousel" || reducedMotion) return;
      if (e.key === "ArrowRight") handleCarouselNext();
      if (e.key === "ArrowLeft") handleCarouselPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [view, reducedMotion, projects.length, category]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    const child = container.children[carouselIndex] as HTMLElement | undefined;
    if (!child) return;
    container.scrollTo({
      left: child.offsetLeft,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [carouselIndex, reducedMotion, filtered.length]);

  const labels = {
    en: { all: "All projects", grid: "GRID", carousel: "CAROUSEL", filterBy: "Filter by:", result: "projects" },
    es: { all: "Todos", grid: "GRID", carousel: "CARRUSEL", filterBy: "Filtrar por:", result: "proyectos" },
    jp: { all: "すべて", grid: "グリッド", carousel: "カルーセル", filterBy: "フィルター:", result: "件" },
  }[locale as Locale];

  const filterLabels = {
    en: { all: "All projects", "AI Systems": "AI Systems", Fintech: "Fintech", Product: "Product", "E-commerce": "E-commerce", Telemedicine: "Telemedicine", GovTech: "GovTech", "Tax Information Reporting": "Tax Information Reporting" },
    es: { all: "Todos", "AI Systems": "Sistemas AI", Fintech: "Fintech", Product: "Producto", "E-commerce": "E-commerce", Telemedicine: "Telemedicina", GovTech: "GovTech", "Tax Information Reporting": "Reporte de información fiscal" },
    jp: { all: "すべて", "AI Systems": "AIシステム", Fintech: "フィンテック", Product: "プロダクト", "E-commerce": "Eコマース", Telemedicine: "遠隔医療", GovTech: "ガブテック", "Tax Information Reporting": "税務情報報告" },
  }[locale as Locale];

  const renderView = () => {
    switch (view) {
      case "grid":
        return <GridView filtered={filtered} locale={locale} reducedMotion={reducedMotion} />;
      case "carousel":
        return (
          <CarouselView
            filtered={filtered}
            locale={locale}
            reducedMotion={reducedMotion}
            carouselIndex={carouselIndex}
            setCarouselIndex={setCarouselIndex}
            handleCarouselPrev={handleCarouselPrev}
            handleCarouselNext={handleCarouselNext}
            carouselRef={carouselRef}
          />
        );
    }
  };

  return (
    <section id="projects">
      <div className="max-w-[1400px] mx-auto px-8 pt-10 pb-8">
        {/* Section header row */}
        <div className="flex flex-col md:flex-row gap-4 md:items-end md:justify-between mb-6">
          <div className="flex flex-col gap-[15px]">
            <div className="font-bold text-[var(--color-text-secondary)] text-[20px] leading-[33px]" style={{ fontVariationSettings: '"wdth" 100' }}>Selected work</div>
            <h2 className="font-display font-black text-[var(--color-text-primary)]" style={{ fontSize: "72px", letterSpacing: "-3.6px", lineHeight: "63.36px" }}>Projects</h2>
            <p className="font-normal text-[var(--color-text-secondary)] text-[18px] leading-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>Case studies across product, systems, and AI-assisted delivery.</p>
          </div>

          {/* View mode toggle - below text on mobile, beside on desktop */}
          <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] rounded-[12px] flex gap-1 items-center p-[5px] shrink-0 w-full md:w-auto">
            <button
              onClick={() => setView("grid")}
              className={`rounded-[12px] flex gap-2 items-center px-4 py-2 transition-colors ${view === "grid" ? "bg-[var(--color-text-primary)] text-[var(--color-bg)]" : "text-[var(--color-text-primary)]"}`}
            >
              <Grid size={16} />
              <span className={`font-bold text-[11px] tracking-[1.32px] uppercase leading-[11px] ${view === "grid" ? "text-[var(--color-bg)]" : "text-[var(--color-text-primary)]"}`} style={{ fontVariationSettings: '"wdth" 100' }}>{labels.grid}</span>
            </button>
            <button
              onClick={() => setView("carousel")}
              className={`rounded-full flex gap-2 items-center px-4 py-2 transition-colors ${view === "carousel" ? "bg-[var(--color-text-primary)] text-[var(--color-bg)]" : "text-[var(--color-text-primary)]"}`}
            >
              <CarouselHorizontal size={16} />
              <span className={`font-bold text-[11px] tracking-[1.32px] uppercase leading-[11px] ${view === "carousel" ? "text-[var(--color-bg)]" : "text-[var(--color-text-primary)]"}`} style={{ fontVariationSettings: '"wdth" 100' }}>{labels.carousel}</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="border-t border-[var(--color-border)] pt-10 flex flex-wrap gap-x-2 gap-y-3 items-center mb-6">
          <span className="font-normal text-[var(--color-text-secondary)] text-[18px] leading-[28px] mr-2" style={{ fontVariationSettings: '"wdth" 100' }}>{labels.filterBy}</span>
          <button
            onClick={() => setCategory("all")}
            className={`filter-chip border rounded-[8px] h-[29px] flex items-center justify-center px-4 py-2 transition-colors ${category === "all" ? "bg-[var(--color-text-primary)] border-[var(--color-text-primary)] text-[var(--color-bg)]" : "border-[var(--color-border-strong)] bg-transparent text-[var(--color-text-secondary)]"} `}
          >
            <span className="font-bold text-[11px] tracking-[1.32px] uppercase leading-[11px]" style={{ fontVariationSettings: '"wdth" 100' }}>{filterLabels.all}</span>
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`filter-chip border rounded-[8px] h-[29px] flex items-center justify-center px-4 py-2 transition-colors ${category === c ? "bg-[var(--color-text-primary)] border-[var(--color-text-primary)] text-[var(--color-bg)]" : "border-[var(--color-border-strong)] bg-transparent text-[var(--color-text-secondary)]"} `}
            >
              <span className="font-bold text-[11px] tracking-[1.32px] uppercase leading-[11px]" style={{ fontVariationSettings: '"wdth" 100' }}>{filterLabels[c as keyof typeof filterLabels] || c}</span>
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="pt-6">
          <AnimatePresence mode="wait">{renderView()}</AnimatePresence>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-[var(--color-text-tertiary)]">{labels.result} — 0</p>
          )}
        </div>
      </div>
    </section>
  );
}