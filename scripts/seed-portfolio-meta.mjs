// pnpm seed:portfolio -> crea/actualiza project portfolio-meta en Sanity con traducciones en/es/jp
// Requiere: NEXT_PUBLIC_SANITY_PROJECT_ID + SANITY_API_TOKEN (write)
import {createClient} from '@sanity/client'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'n0k6o0ax'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
if(!token){ console.error('Falta SANITY_API_TOKEN'); process.exit(1)}
const client = createClient({projectId,dataset,apiVersion:'2024-04-29',token, useCdn:false})

const block = (text) => [{_type:'block', style:'normal', children:[{_type:'span', text}]}]

const doc = {
  _id: 'portfolio-meta',
  _type: 'project',
  title: { en:'Portfolio System — Inception', es:'Sistema Portfolio — Inception', jp:'ポートフォリオシステム — インセプション' },
  slug: { _type:'slug', current:'portfolio-meta' },
  public: true, year:'2026', client:'Personal', location:'Remote',
  category: { en:'DesignOps / System', es:'DesignOps / Sistema', jp:'デザインオプス' },
  introText: {
    en:'Meta-project documenting the creation of this portfolio with Sanity CMS and Storybook.',
    es:'Meta-proyecto que documenta la creación de este portfolio con Sanity CMS y Storybook.',
    jp:'Sanity CMSとStorybookで本ポートフォリオを構築した過程を記録するメタプロジェクト。'
  },
  myRole: { en:'Product Designer & Engineer', es:'Diseñador de Producto & Ingeniero', jp:'プロダクトデザイナー＆エンジニア' },
  myGoal: {
    en:'Demonstrate end-to-end system thinking: CMS modeling, i18n, visual testing and automated screenshots.',
    es:'Demostrar pensamiento sistémico end-to-end: modelado CMS, i18n, testing visual y capturas automatizadas.',
    jp:'CMSモデリング、i18n、ビジュアルテスト、自動スクリーンショットまでのシステム思考を示す。'
  },
  productVision: {
    en:'A portfolio that documents itself — every story, query and screenshot is part of the case study.',
    es:'Un portfolio que se documenta a sí mismo — cada story, query y captura es parte del caso.',
    jp:'自分自身を記録するポートフォリオ — すべてのストーリーとクエリがケーススタディ。'
  },
  content: {
    en: block('Built with Next 16, Sanity v5, Storybook 10. Automated Playwright captures in public/screenshots/portfolio-meta/. Chromatic for visual regression. GROQ queries with locale projections.'),
    es: block('Construido con Next 16, Sanity v5, Storybook 10. Capturas automatizadas con Playwright en public/screenshots/portfolio-meta/. Chromatic para regresión visual. Queries GROQ con proyecciones i18n.'),
    jp: block('Next 16、Sanity v5、Storybook 10で構築。Playwrightで自動キャプチャ、Chromaticでビジュアルリグレッション、GROQでi18n対応。')
  },
  gallery: [
    {titleEn:'Home — Project Grid', titleEs:'Home — Grilla de Proyectos', titleJp:'ホーム — プロジェクト一覧', subtitleEn:'GROQ + ISR', subtitleEs:'GROQ + ISR', subtitleJp:'GROQ+ISR', descriptionEn:'Grid fed by projectsQuery', descriptionEs:'Grilla alimentada por projectsQuery', descriptionJp:'projectsQueryによるグリッド'},
    {titleEn:'Sanity Studio', titleEs:'Sanity Studio', titleJp:'Sanity Studio', subtitleEn:'Schema & Vision', subtitleEs:'Esquema y Vision', subtitleJp:'スキーマ＆Vision', descriptionEn:'projectType with locale fields', descriptionEs:'projectType con campos i18n', descriptionJp:'locale対応のprojectType'},
    {titleEn:'Storybook', titleEs:'Storybook', titleJp:'Storybook', subtitleEn:'Chromatic + a11y', subtitleEs:'Chromatic + a11y', subtitleJp:'Chromatic+a11y', descriptionEn:'Stories for UI components', descriptionEs:'Stories para componentes UI', descriptionJp:'UIコンポーネントのStories'},
  ]
}

await client.createOrReplace(doc)
console.log('Seeded portfolio-meta -> /work/portfolio-meta')
