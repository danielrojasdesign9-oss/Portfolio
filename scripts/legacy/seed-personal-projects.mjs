import { createClient } from '@sanity/client'
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'n0k6o0ax',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-04-29',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})
if (!process.env.SANITY_WRITE_TOKEN) { console.error('Missing SANITY_WRITE_TOKEN'); process.exit(1) }

const projects = [
  {
    _id: 'project-telemed',
    _type: 'project',
    title: { en: 'Telemed — Care at home', es: 'Telemed — Atención en casa', jp: 'Telemed — 在宅ケア' },
    slug: { _type: 'slug', current: 'telemed' },
    public: true, year: '2026', client: 'Personal', category: { en: 'Telemedicine', es: 'Telemedicina', jp: '遠隔医療' },
    location: 'Remote — Colombia',
    introText: { en: 'Video consults, triage and follow-up for EPS/IPS. Booking + history in one place.', es: 'Videoconsultas, triaje y seguimiento para EPS/IPS. Agenda + historial en un solo lugar.', jp: 'EPS/IPS向けビデオ診療、トリアージ、フォローアップ。' },
    myRole: { en: 'Product Designer — Research, Flows, UI', es: 'Product Designer — Research, Flujos, UI', jp: 'プロダクトデザイナー' },
    myGoal: { en: 'Reduce no-shows and time to first consult. Inspiration: Salud Total, Sanitas, Ubiquo, BrainCo, DoctorHelp.', es: 'Reducir ausencias y tiempo a primera consulta. Referencias: Salud Total, Sanitas, Ubiquo, BrainCo.', jp: '無断キャンセル削減' },
    productVision: { en: 'Trustworthy, accessible telehealth that scales from urban to rural.', es: 'Telesalud confiable y accesible que escala de lo urbano a lo rural.', jp: '信頼できる遠隔医療' },
  },
  {
    _id: 'project-fashion-dtc',
    _type: 'project',
    title: { en: 'Fashion DTC — Textile Reviews', es: 'Fashion DTC — Revisión de textiles', jp: 'Fashion DTC — テキスタイルレビュー' },
    slug: { _type: 'slug', current: 'fashion-dtc' },
    public: true, year: '2026', client: 'Personal', category: { en: 'Fashion E-commerce', es: 'E-commerce Moda', jp: 'ファッションEC' },
    location: 'Colombia — DTC',
    introText: { en: 'DTC fashion with textile verification: composition, origin, care and reviews by fabric.', es: 'Moda DTC con verificación textil: composición, origen, cuidados y reseñas por tela.', jp: 'テキスタイル検証付きDTC' },
    myRole: { en: 'Product Designer — Catalog, textile cards, reviews', es: 'Product Designer — Catálogo, fichas textiles, reseñas', jp: 'プロダクトデザイナー' },
    myGoal: { en: 'Higher confidence in fabric quality; fewer returns. Sources mapped: Falabella, Dafiti, Koaj, Zara CO, Leonisa.', es: 'Más confianza en calidad textil; menos devoluciones. Fuentes mapeadas: Falabella, Dafiti, Koaj, Zara CO, Leonisa.', jp: '返品削減' },
    productVision: { en: 'Transparent textiles: what you buy is what you wear.', es: 'Textiles transparentes: lo que compras es lo que vistes.', jp: '透明なテキスタイル' },
  },
]
for (const p of projects) {
  await client.createOrReplace(p)
  console.log('upserted', p.slug.current)
}
