import { createClient } from '@sanity/client'
const c = createClient({ projectId: 'n0k6o0ax', dataset: 'production', apiVersion: '2024-04-29', token: process.env.SANITY_WRITE_TOKEN, useCdn:false })
const research = JSON.parse(await import('fs').then(fs=>fs.readFileSync('docs/research.json','utf8')))
const outcomes = {
  paycool: { goal: 'Gamified savings ↑ engagement en millennials (paper UI Scholarhub). Diseño: misiones, niveles, recompensas → autonomía financiera.', vision: 'Ahorrar jugando.' },
  silin: { goal: 'Co-design gov tax (GOV.UK MTD) + portal usability. Diseño: wizard por pasos, autollenado, validación inline → menos fricción Estado-contribuyente.', vision: 'Impuestos sin dolor.' },
  innu: { goal: 'Innovation Quotient + WueCampus. Diseño: radar de cultura, métricas y playbook por dimensión.', vision: 'Medir para innovar.' },
  linklight: { goal: 'Technoference PMC5681450. Diseño: modo foco familiar, límites de uso, reporte para especialistas.', vision: 'Tecnología que acerca.' },
  es: { slug:'e-signer', goal: 'Firma avanzada LATAM (Docublock/BorderPilot). Diseño: flujo unificado viewer→certificado→identidad por país.', vision: 'De análogo a digital, legal.' },
  tir: { goal: 'IRS 1099 2026. Diseño: bulk edit, validación de tickets, diff antes/después → menos errores reportables.', vision: 'Reportes sin error.' },
  igo: { goal: 'WhatsApp Commerce $45B LATAM. Diseño: catálogo conversacional, checkout en chat, handoff humano.', vision: 'Conversar para vender.' },
}
for(const [k,v] of Object.entries(research)){
  const target = k==='es' ? 'e-signer' : k==='igo' ? 'igo-chatbot' : k==='igo-chatbot' ? 'igo-chatbot' : k
  const slugMap = {paycool:'paycool', silin:'silin', innu:'innu', linklight:'linklight', es:'e-signer', tir:'tir', igo:'igo-chatbot'}
  const idMap = {paycool:'project-paycool', silin:'project-silin', innu:'project-innu', linklight:'project-linklight', 'e-signer':'project-e-signer', tir:'project-tir', 'igo-chatbot':'project-igo-chatbot'}
  const slug = slugMap[k] || k
  const id = idMap[slug]
  const o = outcomes[k] || {}
  const gallery = v.map((r,i)=>({ _key:`paper-${i}`, _type:'object', titleEn:r.title.slice(0,60), titleEs:r.title.slice(0,60), titleJp:r.title.slice(0,60), descriptionEn:`${r.snippet} — ${r.url}`, descriptionEs:`${r.snippet} — ${r.url}`, images: [] }))
  try{
    await c.createOrReplace({ _id:id, _type:'project', slug:{_type:'slug',current:slug}, title:{en:slug,es:slug,jp:slug}, public:true, year:'2020', category:{en:'Research',es:'Research',jp:'Research'}, ...o })
  }catch(e){console.log('patch',k,e.message)}
  console.log('enriched',k)
}
console.log('done')
