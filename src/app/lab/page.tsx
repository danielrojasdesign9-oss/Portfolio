'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { designSystems, applyDesignSystem, getStoredSystem, resetDesignSystem } from '@/lib/design-systems';
import type { DesignSystem } from '@/lib/design-systems';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckmarkFilled } from '@carbon/icons-react';

const labStrings = {
  en: {
    loading: 'Loading...',
    badge: 'Lab',
    title: 'Design System\nSwitcher',
    subtitle: 'Hot-swap the complete visual language of the portfolio in real time. Changes persist across sessions.',
    reset: 'Reset',
    tokenDocs: 'Token docs',
    activeBadge: 'Active',
    activeTokens: 'Active tokens',
    applied: (name: string) => `Applied: ${name}`,
    resetToast: 'Reset: base identity',
    applyAria: (label: string) => `Apply design system: ${label}`,
    primary: 'Primary',
    secondary: 'Secondary',
    accent: 'Accent',
    neutral: 'Neutral',
    dark: 'Dark',
  },
  es: {
    loading: 'Cargando...',
    badge: 'Lab',
    title: 'Switcher de\nDesign System',
    subtitle: 'Cambia en tiempo real el lenguaje visual completo del portafolio. Los cambios persisten entre sesiones.',
    reset: 'Reset',
    tokenDocs: 'Docs de tokens',
    activeBadge: 'Activo',
    activeTokens: 'Tokens activos',
    applied: (name: string) => `Aplicado: ${name}`,
    resetToast: 'Reset: identidad base',
    applyAria: (label: string) => `Aplicar design system: ${label}`,
    primary: 'Primario',
    secondary: 'Secundario',
    accent: 'Acento',
    neutral: 'Neutro',
    dark: 'Oscuro',
  },
  jp: {
    loading: '読み込み中...',
    badge: 'Lab',
    title: 'デザインシステム\nスイッチャー',
    subtitle: 'ポートフォリオのビジュアル言語をリアルタイムで切り替え。変更はセッション間で保持されます。',
    reset: 'リセット',
    tokenDocs: 'トークンドキュメント',
    activeBadge: 'アクティブ',
    activeTokens: 'アクティブトークン',
    applied: (name: string) => `適用: ${name}`,
    resetToast: 'リセット: ベースアイデンティティ',
    applyAria: (label: string) => `デザインシステムを適用: ${label}`,
    primary: 'プライマリ',
    secondary: 'セカンダリ',
    accent: 'アクセント',
    neutral: 'ニュートラル',
    dark: 'ダーク',
  },
} as const;

type LabLocale = keyof typeof labStrings;
type LabLabels = (typeof labStrings)[LabLocale];
function isLabLocale(v: string | null): v is LabLocale {
  return v === 'en' || v === 'es' || v === 'jp';
}

function SystemCard({
  system,
  isActive,
  onSelect,
  labels,
}: {
  system: DesignSystem;
  isActive: boolean;
  onSelect: () => void;
  labels: LabLabels;
}) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative w-full text-left rounded-[8px] overflow-hidden border-2 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 ${
        isActive
          ? 'border-[var(--color-primary)] shadow-xl'
          : 'border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] shadow-sm hover:shadow-md'
      }`}
      aria-pressed={isActive}
      aria-label={labels.applyAria(system.label)}
    >
      {/* Preview swatch */}
      <div
        className="h-28 w-full relative overflow-hidden"
        style={{ background: system.preview.bg }}
      >
        {/* Fake UI preview */}
        <div className="absolute inset-0 p-4 flex flex-col gap-3">
          {/* Fake navbar */}
          <div className="flex items-center gap-2">
            <div
              className="h-2 w-16 rounded-full"
              style={{ background: system.preview.primary, opacity: 0.9 }}
            />
            <div
              className="h-1.5 w-8 rounded-full ml-auto"
              style={{ background: system.preview.text, opacity: 0.2 }}
            />
            <div
              className="h-1.5 w-8 rounded-full"
              style={{ background: system.preview.text, opacity: 0.2 }}
            />
          </div>
          {/* Fake hero */}
          <div className="flex flex-col gap-2 mt-1">
            <div
              className="h-5 w-3/4 rounded"
              style={{ background: system.preview.text, opacity: 0.85 }}
            />
            <div
              className="h-3 w-1/2 rounded"
              style={{ background: system.preview.text, opacity: 0.3 }}
            />
          </div>
          {/* Fake CTA button */}
          <div
            className="h-6 w-20 rounded-[4px] mt-auto"
            style={{ background: system.preview.primary }}
          />
        </div>

        {/* Active badge */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center shadow-md"
            style={{ background: system.preview.primary }}
          >
            <CheckmarkFilled size={16} className="text-white" />
          </motion.div>
        )}
      </div>

      {/* Card info */}
      <div className="p-5 bg-[var(--color-bg-elevated)]">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-display font-black tracking-tighter text-base text-[var(--color-text-primary)]">
            {system.label}
          </span>
          {isActive && (
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] rounded-full bg-[var(--color-primary)] text-[var(--color-text-inverse)]">
              {labels.activeBadge}
            </span>
          )}
        </div>
        <p className="text-[12px] text-[var(--color-text-secondary)] leading-relaxed">
          {system.description}
        </p>

        {/* Color swatches */}
        <div className="flex gap-1.5 mt-4">
          <div
            className="w-5 h-5 rounded-full border border-black/10"
            style={{ background: system.vars['--color-midnight'] || system.preview.primary }}
            title={labels.primary}
          />
          <div
            className="w-5 h-5 rounded-full border border-black/10"
            style={{ background: system.vars['--color-indigo'] || system.preview.secondary }}
            title={labels.secondary}
          />
          <div
            className="w-5 h-5 rounded-full border border-black/10"
            style={{ background: system.vars['--color-merlot'] || '#7F333D' }}
            title={labels.accent}
          />
          <div
            className="w-5 h-5 rounded-full border border-black/10"
            style={{ background: system.vars['--color-silver-mist'] || '#C6C6C6' }}
            title={labels.neutral}
          />
          <div
            className="w-5 h-5 rounded-full border border-black/10"
            style={{ background: system.vars['--color-onyx'] || '#161616' }}
            title={labels.dark}
          />
        </div>
      </div>
    </motion.button>
  );
}

function LabContent() {
  const searchParams = useSearchParams();
  const rawLang = searchParams.get('lang');
  const locale: LabLocale = isLabLocale(rawLang) ? rawLang : 'en';
  const labels = labStrings[locale];

  const [activeSystem, setActiveSystem] = useState<string>('v1');
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const stored = getStoredSystem();
    setActiveSystem(stored);
    setMounted(true);
  }, []);

  const handleSelect = (key: string) => {
    setActiveSystem(key);
    applyDesignSystem(key);
    const name = designSystems[key]?.label ?? key;
    setToast(labels.applied(name));
    setTimeout(() => setToast(null), 2500);
  };

  const handleReset = () => {
    resetDesignSystem();
    setActiveSystem('v1');
    setToast(labels.resetToast);
    setTimeout(() => setToast(null), 2500);
  };

  const withLang = (path: string) => `${path}?lang=${locale}`;

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-32 pb-24">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full bg-[var(--color-primary)] text-[var(--color-text-inverse)] mb-6">
            {labels.badge}
          </span>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-6 whitespace-pre-line">
            {labels.title}
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
            {labels.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              {labels.reset}
            </button>
            <a href={withLang('/lab/design-system')} className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-primary)] underline underline-offset-4">
              {labels.tokenDocs}
            </a>
            <a href={withLang('/lab/reveal')} className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
              Reveal
            </a>
            <a href={withLang('/lab/cards')} className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
              Cards
            </a>
            <a href={withLang('/lab/entrance')} className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
              Entrance
            </a>
          </div>
        </div>

        {/* Switcher Grid */}
        {mounted && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {Object.values(designSystems).map((system) => (
              <SystemCard
                key={system.key}
                system={system}
                isActive={activeSystem === system.key}
                onSelect={() => handleSelect(system.key)}
                labels={labels}
              />
            ))}
          </div>
        )}

        {/* Token preview */}
        {mounted && (
          <div className="border-t border-[var(--color-border-subtle)] pt-16 space-y-8">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">
              {labels.activeTokens} — {designSystems[activeSystem]?.label}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(designSystems[activeSystem]?.vars ?? {}).map(([token, value]) => (
                <div
                  key={token}
                  className="flex items-center gap-3 p-3 rounded-[6px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]"
                >
                  {token.startsWith('--color') && value && (
                    <div
                      className="w-5 h-5 rounded-full flex-shrink-0 border border-black/10"
                      style={{ background: value.startsWith('#') || value.startsWith('rgb') ? value : undefined }}
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <code className="text-[10px] font-bold text-[var(--color-text-tertiary)] block truncate">{token}</code>
                    <code className="text-[11px] text-[var(--color-text-secondary)] block truncate">{value}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-[12px] font-bold uppercase tracking-[0.12em] shadow-xl"
            role="status"
            aria-live="polite"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer locale={locale} />
    </main>
  );
}

export default function Lab() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">...</div>}>
      <LabContent />
    </Suspense>
  );
}
