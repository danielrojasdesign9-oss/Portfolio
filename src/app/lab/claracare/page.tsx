'use client'
import { useState } from 'react'
export default function ClaraLab(){
  const [q,setQ]=useState(0)
  const qs=['¿Fiebre >38.5°C?', '¿Dificultad respiratoria?', '¿Dolor torácico?']
  const [ars,setArs]=useState<string[]>([])
  const urgent = ars.includes('¿Dificultad respiratoria?')
  return <main className="min-h-screen bg-[var(--color-bg)] p-8">
    <h1 className="text-3xl font-black uppercase">ClaraCare — Vibecoding Triaje</h1>
    {urgent ? <div className="bg-red-600 text-white p-6 rounded-[12px] mt-4">Acción urgente: busca atención inmediata. Stop cuestionario.</div> :
    <div className="bg-[var(--color-bg-elevated)] p-6 rounded-[12px] mt-4 border">
      <p>{qs[q]}</p>
      <button onClick={()=>{setArs([...ars,qs[q]]); setQ(Math.min(q+1,qs.length-1))}} className="mt-4 bg-[var(--color-text-primary)] text-white rounded-full px-6 py-2">Sí</button>
      <button onClick={()=>setQ(Math.min(q+1,qs.length-1))} className="ml-2 border rounded-full px-6 py-2">No / No estoy seguro</button>
    </div>}
    <p className="text-sm text-[var(--color-text-primary)]/50 mt-4">Reglas transparentes v1, IA solo resume. <a href="/work/claracare" className="underline">Ver case</a></p>
  </main>
}
