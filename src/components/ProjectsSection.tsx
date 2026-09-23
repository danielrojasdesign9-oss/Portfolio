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

function GridView({ filtered, locale, reducedMotion }: { filtered: any[]; locale: Locale; reducedMotion: boolean }) {
  return (
    <motion.div
      key="grid"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: reducedMotion ? 0 : 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14"
    >
      {filtered.map((project: any, i: number) => {
        const title = getLocaleText(project.title, locale);
        const categoryText = getLocaleText(project.category, locale);
        const img = resolveProjectImage(project.imageUrl, project.slug) || getPexelsFallback(project.slug || String(i));
        return (
          <motion.div
            key={project._id || `${project.slug}-${i}`}
            data-project-slug={project.slug}
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : Math.min(i * 0.05, 0.4) }}
          >
            <Link href={`/work/${project.slug}?lang=${locale}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-[var(--color-bg-sunken)] border border-[var(--color-border-subtle)] mb-5">
                {img ? (
                  <Image
                    src={img}
                    alt={title}
                    fill
                    priority={i < 4}
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
                <h3 className="font-display font-bold text-lg tracking-tight text-[var(--color-text-primary)]">{title}</h3>
                <span className="text-[11px] font-bold tracking-widest text-[var(--color-text-tertiary)] pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-[12px] text-[var(--color-text-secondary)]">{categoryText}</p>
                <span className="text-[11px] font-bold tracking-widest text-[var(--color-text-tertiary)]">{project.year || ""}</span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function CarouselView({ filtered, locale, reducedMotion, carouselIndex, setCarouselIndex, handleCarouselPrev, handleCarouselNext, carouselRef }: { filtered: any[]; locale: Locale; reducedMotion: boolean; carouselIndex: number; setCarouselIndex: (i: number) => void; handleCarouselPrev: () => void; handleCarouselNext: () => void; carouselRef: React.RefObject<HTMLDivElement | null> }) {
  // Native non-passive wheel listener: vertical page scroll is blocked ONLY when
  // the pointer is over the carousel AND the scroll is primarily vertical.
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const isVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (!isVertical) return; // Allow horizontal scroll (trackpad swipe, shift+wheel)
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
        className="flex gap-6 overflow-x-auto overflow-y-hidden overscroll-none snap-x snap-mandatory pb-4"
      >
        {filtered.map((project: any, i: number) => {
          const title = getLocaleText(project.title, locale);
          const categoryText = getLocaleText(project.category, locale);
          const img = resolveProjectImage(project.imageUrl, project.slug) || getPexelsFallback(project.slug || String(i));
          return (
            <motion.div
              key={project._id || `${project.slug}-${i}`}
              initial={reducedMotion ? false : { opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : Math.min(i * 0.05, 0.4) }}
            data-project-slug={project.slug}
            className="flex-shrink-0 snap-center w-full sm:max-w-[520px] lg:max-w-[640px]"
          >
              <Link href={`/work/${project.slug}?lang=${locale}`} className="group block h-full">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-[var(--color-bg-sunken)] border border-[var(--color-border-subtle)] mb-6">
                  {img ? (
                    <Image
                      src={img}
                      alt={title}
                      fill
                      priority={i < 2}
                      sizes="(max-width: 640px) 100vw, 640px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-black text-4xl uppercase text-[var(--color-text-tertiary)] tracking-tighter">
                      {title.slice(0, 2)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[var(--color-midnight)]/0 group-hover:bg-[var(--color-midnight)]/20 transition-colors duration-500" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black tracking-[0.4em] text-[var(--color-primary)]">
                      {String(i + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-bold tracking-widest text-[var(--color-text-tertiary)]">{project.year}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">{title}</h3>
                  <p className="text-[13px] text-[var(--color-text-secondary)]">{categoryText}</p>
                  <div className="inline-flex items-center gap-2 mt-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                    {locale === "es" ? "Ver caso" : locale === "jp" ? "ケースを見る" : "View case"}
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {!reducedMotion && filtered.length > 1 && (
        <>
          <button
            onClick={handleCarouselPrev}
            disabled={carouselIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-10 z-10 p-3 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] hover:border-[var(--color-primary)] transition-all disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleCarouselNext}
            disabled={carouselIndex === filtered.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-10 z-10 p-3 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] hover:border-[var(--color-primary)] transition-all disabled:opacity-30 disabled:pointer-events-none"
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
            className={`h-2 rounded-full transition-all ${i === carouselIndex ? "bg-[var(--color-primary)] w-6" : "w-2 bg-[var(--color-text-tertiary)] hover:bg-[var(--color-text-secondary)]"}`}
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

  // Keep dots in sync with manual scroll (wheel, drag, snap)
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
    en: { all: "All projects", grid: "Grid", carousel: "Carousel", result: "projects" },
    es: { all: "Todos", grid: "Grilla", carousel: "Carrusel", result: "proyectos" },
    jp: { all: "すべて", grid: "グリッド", carousel: "カルーセル", result: "件" },
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
    <div>
      <div className="mb-14 space-y-7">
        <div className="border-b border-[var(--color-border-subtle)] pb-8" role="tablist" aria-label="Filter projects">
          <button
            role="tab"
            aria-selected={category === "all"}
            onClick={() => setCategory("all")}
            className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full border transition-colors ${category === "all" ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)] border-[var(--color-primary)]" : "border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]"}`}
          >
            {labels.all}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full border transition-colors ${category === c ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)] border-[var(--color-primary)]" : "border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex justify-start pt-1 border-b border-[var(--color-border-subtle)] pb-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)]" role="group" aria-label="View mode">
            <button
              onClick={() => setView("grid")}
              aria-pressed={view === "grid"}
              title={labels.grid}
              aria-label={labels.grid}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] transition-colors ${view === "grid" ? "bg-[var(--color-text-primary)] text-[var(--color-bg)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"}`}
            >
              <Grid size={16} />
              {labels.grid}
            </button>
            <button
              onClick={() => setView("carousel")}
              aria-pressed={view === "carousel"}
              title={labels.carousel}
              aria-label={labels.carousel}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] transition-colors ${view === "carousel" ? "bg-[var(--color-text-primary)] text-[var(--color-bg)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"}`}
            >
              <CarouselHorizontal size={16} />
              {labels.carousel}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">{renderView()}</AnimatePresence>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-[var(--color-text-tertiary)]">{labels.result} — 0</p>
      )}
    </div>
  );
}