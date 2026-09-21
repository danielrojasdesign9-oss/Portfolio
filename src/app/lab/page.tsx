'use client'
import { useState, useEffect } from 'react'
import { systems, type SystemKey } from '@/lib/design-systems'
import { Grid, Column, Tag } from '@carbon/react'
import CarbonButton from '@/components/ui/CarbonButton'

export default function Lab() {
  const [sys, setSys] = useState<SystemKey>('cream')
  useEffect(() => {
    const v = systems[sys].vars as Record<string,string>
    Object.entries(v).forEach(([k,val])=>document.documentElement.style.setProperty(k,val))
    try { localStorage.setItem('design-system', sys) } catch {}
  }, [sys])
  return (
    <main className="min-h-screen bg-[var(--color-bg)] p-4 md:p-10 max-w-[1400px] mx-auto">
      <Tag type="green" size="sm" className="mb-4">Lab</Tag>
      <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">Lab — Vibe Coding</h1>
      <select value={sys} onChange={e=>setSys(e.target.value as SystemKey)} className="border border-[var(--color-border-subtle)] rounded-[6px] px-4 py-2 bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)]">
        {Object.entries(systems).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}
      </select>
      <Grid narrow className="!p-0 mt-8">
        <Column sm={4} md={4} lg={4}>
          <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-[6px] p-6">Card</div>
        </Column>
        <Column sm={4} md={4} lg={4}>
          <CarbonButton kind="primary" size="lg">CTA</CarbonButton>
        </Column>
        <Column sm={4} md={4} lg={4}>
          <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-[6px] p-6 opacity-80">Glass</div>
        </Column>
      </Grid>
      <p className="mt-6 text-sm text-[var(--color-text-secondary)]">Edita en Figma/Penpot → Pencil import, o cambia vars aquí. Sin créditos, 100% local en localhost:3000/lab</p>
    </main>
  )
}
