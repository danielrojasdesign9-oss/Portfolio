"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { designSystems } from "@/lib/design-systems";

const palette = [
  { name: "Midnight", token: "--color-midnight", hex: "#1C0B69" },
  { name: "Indigo", token: "--color-indigo", hex: "#2D318C" },
  { name: "Merlot", token: "--color-merlot", hex: "#7F333D" },
  { name: "Silver Mist", token: "--color-silver-mist", hex: "#CCCCCC" },
  { name: "Onyx", token: "--color-onyx", hex: "#1D1D15" },
];

const typeScale = [
  { label: "Display", className: "text-6xl md:text-8xl font-black tracking-tighter", sample: "Daniel Rojas" },
  { label: "Heading", className: "text-3xl md:text-4xl font-bold tracking-tight", sample: "Selected work" },
  { label: "Body", className: "text-lg font-medium leading-relaxed", sample: "I make human experiences feel memorable, intuitive, and visually striking." },
  { label: "Label", className: "text-[11px] font-bold uppercase tracking-[0.2em]", sample: "Product Designer" },
];

const spacing = [4, 8, 12, 16, 24, 32, 48, 64];

function DesignSystemDocs() {
  const lang = useSearchParams().get("lang") || "en";
  const systems = Object.values(designSystems);

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-32 pb-24 space-y-24">
        <header className="max-w-3xl">
          <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full bg-[var(--color-primary)] text-[var(--color-text-inverse)] mb-6">
            Lab
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-6">
            Design system
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Midnight, Indigo, Merlot, Silver Mist, Onyx. Space Grotesk for structure, Crimson Pro for reading.
            Hot-swap systems live in the{" "}
            <Link href={`/lab?lang=${lang}`} className="text-[var(--color-primary)] underline underline-offset-4">
              Lab switcher
            </Link>
            .
          </p>
        </header>

        <section className="space-y-8">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">Palette</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {palette.map((c) => (
              <div key={c.token} className="border border-[var(--color-border-subtle)] rounded-[6px] overflow-hidden">
                <div className="h-28" style={{ background: `var(${c.token})` }} />
                <div className="p-4 space-y-1">
                  <p className="font-display font-bold">{c.name}</p>
                  <code className="text-[11px] text-[var(--color-text-tertiary)] block">{c.token}</code>
                  <code className="text-[11px] text-[var(--color-text-secondary)] block">{c.hex}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">Type</h2>
          <div className="space-y-10">
            {typeScale.map((row) => (
              <div key={row.label} className="border-t border-[var(--color-border-subtle)] pt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-tertiary)] mb-3">{row.label}</p>
                <p className={`font-display ${row.className}`}>{row.sample}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">Spacing — 4px base</h2>
          <div className="space-y-3">
            {spacing.map((n) => (
              <div key={n} className="flex items-center gap-4">
                <span className="w-10 text-[11px] font-mono text-[var(--color-text-tertiary)]">{n}</span>
                <div className="h-4 bg-[var(--color-primary)]" style={{ width: n }} />
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {systems.map((s) => (
              <div key={s.key} className="p-5 border border-[var(--color-border-subtle)] rounded-[6px] space-y-2">
                <p className="font-display font-black">{s.label}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">{s.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer locale={lang === "es" || lang === "jp" ? lang : "en"} />
    </main>
  );
}

export default function DesignSystemPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <DesignSystemDocs />
    </Suspense>
  );
}
