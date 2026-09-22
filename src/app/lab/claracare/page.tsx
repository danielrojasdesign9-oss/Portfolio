'use client'
import { useState, Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function ClaraLabContent(){
  const [q,setQ]=useState(0)
  const qs=['¿Fiebre >38.5°C?', '¿Dificultad respiratoria?', '¿Dolor torácico?']
  const [ars,setArs]=useState<string[]>([])
  const urgent = ars.includes('¿Dificultad respiratoria?')
  return <main id="main-content" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
    <Navbar />
    <div className="p-8 max-w-[1400px] mx-auto">
      <h1 className="text-3xl font-black uppercase">ClaraCare — Vibecoding Triaje</h1>
      {urgent ? <div className="bg-red-600 text-white p-6 rounded-[12px] mt-4">Acción urgente: busca atención inmediata. Stop cuestionario.</div> :
      <div className="bg-[var(--color-bg-elevated)] p-6 rounded-[12px] mt-4 border border-[var(--color-border-subtle)]">
        <p>{qs[q]}</p>
        <button onClick={()=>{setArs([...ars,qs[q]]); setQ(Math.min(q+1,qs.length-1))}} className="mt-4 bg-[var(--color-text-primary)] text-white rounded-full px-6 py-2">Sí</button>
        <button onClick={()=>setQ(Math.min(q+1,qs.length-1))} className="ml-2 border border-[var(--color-border-subtle)] rounded-full px-6 py-2">No / No estoy seguro</button>
      </div>}
      <p className="text-sm text-[var(--color-text-primary)]/50 mt-4">Reglas transparentes v1, IA solo resume. <a href="/work/claracare" className="underline">Ver case</a></p>
    </div>
    <Footer locale="en" />
  </main>
}

export default function ClaraLab(){
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ClaraLabContent />
    </Suspense>
  )
}
