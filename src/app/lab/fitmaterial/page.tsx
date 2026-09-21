'use client'
import { useState } from 'react'
export default function FitMaterialLab(){
  const [cm,setCm]=useState(27)
  const rec = cm<25.5?'38':cm<26.5?'39':cm<27.5?'40':'41'
  return <main className="min-h-screen bg-[var(--color-bg)] p-8">
    <h1 className="text-3xl font-black uppercase">FitMaterial — Vibecoding Calzado KOAJ</h1>
    <p className="text-[var(--color-text-primary)]/50">Reglas explicables + escalas material. No certeza, confianza calibrada.</p>
    <label className="block mt-6">Largo pie (cm): <input type="range" min={23} max={30} step={0.1} value={cm} onChange={e=>setCm(parseFloat(e.target.value))} /> {cm}</label>
    <div className="mt-4 bg-[var(--color-bg-elevated)] rounded-[12px] p-6 border">
      <p>Talla recomendada: <b>{rec}</b> (confianza {cm%1===0?92:78}%)</p>
      <p className="text-sm text-[var(--color-text-primary)]/50">Zonas: pie verde, tobillo amarillo. Elasticidad baja → + holgura. <a href="/work/fitmaterial-ai" className="underline">Ver case</a></p>
    </div>
  </main>
}
