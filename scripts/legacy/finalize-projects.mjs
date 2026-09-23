import { createClient } from '@sanity/client'
const c = createClient({ projectId: 'n0k6o0ax', dataset: 'production', apiVersion: '2024-04-29', token: process.env.SANITY_WRITE_TOKEN, useCdn:false })
const pt = (t) => [{ _type:'block', style:'normal', children:[{ _type:'span', text:t }]}]
const heading = (t) => [{ _type:'block', style:'h2', children:[{ _type:'span', text:t }]}]

await c.createOrReplace({
  _id:'project-fitmaterial-ai', _type:'project',
  slug:{_type:'slug',current:'fitmaterial-ai'},
  title:{en:'FitMaterial AI — KOAJ Calzado',es:'FitMaterial AI — KOAJ Calzado',jp:'FitMaterial AI'},
  category:{en:'FashionTech — DTC',es:'FashionTech — DTC',jp:'FashionTech'},
  year:'2026', client:'KOAJ — DTC Colombiano', location:'Colombia — E-commerce + Inventario/Soporte',
  public:true,
  introText:{en:'The problem: fit and material are unobservable before purchase, driving bracketing and returns.',es:'El problema: talla y material no observables antes de la compra generan bracketing y devoluciones.',jp:'問題'},
  myRole:{en:'Product Designer — Research-through-Design, FitLens, audit trail',es:'Product Designer — Research-through-Design, FitLens, auditoría',jp:'PD'},
  myGoal:{en:'Decide size with evidence + transparent material promise. Rule engine with confidence and risk zones, not certainty.',es:'Decidir talla con evidencia + promesa material transparente. Motor de reglas con confianza y zonas de riesgo.',jp:'目標'},
  productVision:{en:'An explainable size & material copilot that integrates inventory and support signals.',es:'Un copiloto explicable de talla y material que integra inventario y soporte.',jp:'ビジョン'},
  content:{en:[...heading('Discovery'),...pt('Evidence: fit uncertainty > quality for returns [1]; SizeFlags -3.8% on footwear [3]; 31-36% return rate case [10]. KOAJ tables scraped, 8 demo garments.'),...heading('Definition'),...pt('Core value dual: evidencia + promesa. Library: elasticity, drape, weight, transparency. Risk zones by foot/ankle.'),...heading('Development'),...pt('FitLens rule engine + material scales + comparator + FHIR-like inventory trace. White-label for Enterprise / DTC view for KOAJ.'),...heading('Delivery'),...pt('Usability shows confidence calibration; <8min threshold from E-Signer guides streamlining. Next: A/B vs control on single-size orders.')], es:[...heading('Discovery'),...pt('Evidencia: incertidumbre fit > calidad; SizeFlags -3,8% en calzado; tasa 31-36%. Tablas KOAJ + 8 prendas demo.')], jp:[...heading('Discovery'),...pt('Evidence')]},
  figmaEmbedUrl: '',
  gallery: []
})
await c.createOrReplace({
  _id:'project-claracare', _type:'project',
  slug:{_type:'slug',current:'claracare'},
  title:{en:'ClaraCare — Triage & Teleconsult',es:'ClaraCare — Triaje y Teleconsulta',jp:'ClaraCare'},
  category:{en:'HealthTech — Triage',es:'HealthTech — Triaje',jp:'HealthTech'},
  year:'2026', client:'Prototipo académico — Adulto mayor 70+ solo', location:'Colombia — Teleconsulta adaptativa',
  public:true,
  introText:{en:'Preparation for safer teleconsults for 70+ solo users, not diagnosis.',es:'Preparación para teleconsulta segura en 70+ solo, no diagnóstico.',jp:'適応'},
  myRole:{en:'Product Designer — Respiratory triage, a11y, audit, FHIR mock',es:'Product Designer — Triaje respiratorio, accesibilidad, auditoría, FHIR mock',jp:'PD'},
  myGoal:{en:'Stop + urgent action on alarm signals, IA as summarizer with validated JSON fallback, human-in-the-loop, provenance per data point.',es:'Stop + acción urgente ante alarma, IA solo resume con fallback validado, humano en bucle, procedencia por dato.',jp:'目標'},
  productVision:{en:'Auditable, adaptive teleconsult preparation that scales urban to rural.',es:'Preparación auditable y adaptativa que escala de urbano a rural.',jp:'ビジョン'},
  content:{en:[...heading('Discovery'),...pt('86.9% video concordance Mayo [1]; 74% primary care India [2]; triage safety gaps [13-16]; digital divide in 70+ [7][8].'),...heading('Definition'),...pt('Deterministic rules with version, missing-data handling, FHIR mock for EHR.'),...heading('Development'),...pt('One-question-per-screen, listen button, progress, no-sure option, urgent stop screen.'),...heading('Delivery'),...pt('Audit trail: rulesVersion, triggeredRules, missingData, clinician edit. Validation by stratified prospective test.')], es:[...heading('Discovery'),...pt('86,9% concordancia Mayo; 74% India; brechas triaje y edad.')], jp:[...heading('Discovery'),...pt('Evidence')]},
  gallery: []
})
console.log('finalized both')
