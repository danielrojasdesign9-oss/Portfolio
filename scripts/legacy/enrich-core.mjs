import { createClient } from '@sanity/client'
const c = createClient({ projectId:'n0k6o0ax', dataset:'production', apiVersion:'2024-04-29', token:process.env.SANITY_WRITE_TOKEN, useCdn:false })
const b = (t,style='normal')=>[{_type:'block',style,children:[{_type:'span',text:t}]}]
const h2 = t=>b(t,'h2')

for(const id of ['project-fitmaterial-ai','project-claracare']){
  const doc = await c.getDocument(id)
  const extra = id==='project-fitmaterial-ai'
    ? [...h2('Matriz de problemas'),...b('P1 bracketing calzado [1][10] → FitLens con confianza y holgura. P6 color [22][35] → muestra calibrada. P7 inspección [29][32] → NO en MVP, solo material. P5 tacto [15][19] → escalas estimadas marcadas.'),...h2('Core — Insights'),...b('SizeFlags solo pequeño/grande; diversidad corporal ↑diagnóstico pero ↓intención [2]; lenidad devolución heterogénea [8][9]. Diseño: 1 talla recomendada, alternativa explícita, explicación de reglas.'),...h2('Iteraciones'),...b('v1 reglas deterministas → v2 escalas material → v3 inventario/soporte. Validación: A/B por pedido, margen neto post-devolución, comprensión explicación.'),...h2('Pantallas MVP'),...b('Perfil, catálogo calzado KOAJ, FitLens con zonas pie/tobillo, comparador M vs L, Material Studio, feedback poscompra, panel marca.')]
    : [...h2('Árbol problemas'),...b('Exactitud 86.9% Mayo [1] pero 74% rural [2]; brecha digital 70+ solo 28% autónomo [8]; triaje subtriaje 40% emergencias omitidas [13][14]; interoperabilidad mixta [20]; burnout EHR [23].'),...h2('Core — 3 oportunidades'),...b('1 Interfaz adaptativa segura, 2 Copiloto síntesis con procedencia, 3 Triaje auditable con escalamiento visible. Todas con supervisión humana y trazabilidad.'),...h2('Iteraciones'),...b('v1 cuestionario 1 pregunta/pantalla respiratorio → v2 señales alarma stop → v3 IA resume con fallback JSON + FHIR mock + auditoría.'),...h2('Pantallas MVP'),...b('Welcome con disclaimer, selector rol/idioma/a11y, preguntas progresivas, pantalla urgente, resumen editable, panel profesional con procedencia y discrepancias.')]
  const content = { en:[...(doc.content?.en||[]),...extra], es:[...(doc.content?.es||[]),...extra], jp:[...(doc.content?.jp||[]),...extra] }
  await c.patch(id).set({content}).commit()
  console.log('enriched core',id)
}
