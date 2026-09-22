import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const env = fs.readFileSync('.env.local', 'utf8')
const get = (k) => { const m = env.match(new RegExp('^' + k + '=(.*)$', 'm')); return m ? m[1].trim() : undefined }

const client = createClient({
  projectId: get('NEXT_PUBLIC_SANITY_PROJECT_ID') || 'n0k6o0ax',
  dataset: get('NEXT_PUBLIC_SANITY_DATASET') || 'production',
  apiVersion: '2024-04-29',
  token: get('SANITY_WRITE_TOKEN') || get('SANITY_API_TOKEN'),
  useCdn: false,
})

const APPLY = process.argv.includes('--apply')
const DUMP_ARG = process.argv.indexOf('--dump')
const DUMP = DUMP_ARG > -1 ? process.argv[DUMP_ARG + 1] : null
const BASE = 'docs/projects-enhanced'

const ID_MAP = {
  paycool: { id: '5bBNxy1w70y1Phfur4Nbhn' },
  tir: { id: '5bBNxy1w70y1Phfur4NngF' },
  silin: { id: 'D5fq4yEoHeTjRvVyemt4mZ' },
  innu: { id: 'D5fq4yEoHeTjRvVyemtKhj' },
  linklight: { id: 'D5fq4yEoHeTjRvVyemtKop' },
  igo: { id: 'WHRc5NKIhsva8iXeVsy2Iq' },
  'e-signer': { id: 'WHRc5NKIhsva8iXeVsy3L6' },
  claracare: { id: 'project-claracare', oldDraft: 'drafts.project-claracare' },
  'fashion-dtc': { id: 'project-fashion-dtc', oldDraft: 'drafts.project-fashion-dtc' },
  fitmaterial: { id: 'project-fitmaterial-ai', oldDraft: 'drafts.project-fitmaterial-ai' },
  telemed: { id: 'project-telemed', oldDraft: 'drafts.project-telemed' },
}

const LANG_FILES = { en: 'EN.md', es: 'ES.md', jp: 'JA.md' }

const key = () => 'k' + crypto.randomBytes(5).toString('hex')

// ---------- Markdown inline -> Portable Text spans ----------
const INLINE_RE = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*\n]+\*)/g
function inline(text) {
  const parts = text.split(INLINE_RE).filter((s) => s !== undefined && s !== '')
  const children = []
  for (const part of parts) {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      children.push({ _type: 'span', _key: key(), marks: ['strong'], text: part.slice(2, -2) })
    } else if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      children.push({ _type: 'span', _key: key(), marks: ['code'], text: part.slice(1, -1) })
    } else if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      children.push({ _type: 'span', _key: key(), marks: ['em'], text: part.slice(1, -1) })
    } else {
      children.push({ _type: 'span', _key: key(), marks: [], text: part.replace(/\*\*/g, '') })
    }
  }
  if (!children.length) children.push({ _type: 'span', _key: key(), marks: [], text: '' })
  return children
}
const block = (style, children, extra = {}) => ({ _type: 'block', _key: key(), style, markDefs: [], children, ...extra })
const para = (text) => block('normal', inline(text))

// ---------- [VALIDAR] handling: strip markers, drop empty lines ----------
const VALIDAR_SPAN = /\[VALIDAR[^\]]*\]/g
function cleanValidarLine(line) {
  if (!line.includes('[VALIDAR]') && !/\[VALIDAR[^\]]*\]/.test(line)) return line
  let s = line.replace(VALIDAR_SPAN, '')
  let prefix = ''
  const m = s.match(/^(>\s*|-\s+|\d+\.\s+)/)
  if (m) { prefix = m[1]; s = s.slice(prefix.length) }
  const lm = s.match(/^\*\*[^*]+:\*\*\s*([\s\S]*)$/)
  if (lm) s = lm[1]
  s = s.replace(/\s*\+\s*(?=[。，、,.])/g, '')
  s = s.replace(/^[\s+—–\-·、,，:：。]+/, '').replace(/[\s+—–\-·、,，:：。]+$/, '').trim()
  const plain = s.replace(/\*\*/g, '').replace(/[`*]/g, '').trim()
  if (plain.length < 3) return null
  return prefix ? prefix + s : s
}
function cleanValidarLines(lines) {
  return lines.map((l) => cleanValidarLine(l)).filter((l) => l !== null)
}

// ---------- Table parsing ----------
function parseTable(lines) {
  const rows = []
  for (const raw of lines) {
    const trimmed = raw.trim()
    if (!trimmed.startsWith('|') || !trimmed.endsWith('|')) continue
    const cells = trimmed.slice(1, -1).split('|').map((c) => c.trim())
    const isSeparator = cells.every((c) => /^:?-+:?$/.test(c))
    if (isSeparator) continue
    rows.push({
      _type: 'tableRow',
      _key: key(),
      cells: cells.map((c) => c.replace(/^(\*\*|\*)|(\*\*|\*)$/g, '').replace(/`/g, '').trim()),
    })
  }
  return rows.length ? { _type: 'portableTable', _key: key(), rows } : null
}

// ---------- META parsing ----------
const META_RE = /^-\s+\*\*([^*]+):\*\*\s*(.*)$/
function parseMeta(lines) {
  const meta = {}
  for (const raw of lines) {
    const m = raw.match(META_RE)
    if (m) {
      let v = m[2].replace(/^`|`$/g, '').replace(VALIDAR_SPAN, '').replace(/[\s:：—–\-·,，。]+$/, '').trim()
      meta[m[1].trim()] = v
    }
  }
  return meta
}

// ---------- Content + vision + SEO ----------
function parseBody(bodyLines, visionHeadingRe, opts) {
  const content = []
  let pendingPara = []
  let pendingList = null // { listItem, level }
  let lastQuoteRun = []
  let vision = null
  let inVision = false
  let seoTitle = null
  let seoDesc = null

  const flushPara = () => {
    if (pendingPara.length) {
      content.push(para(pendingPara.join(' ')))
      pendingPara = []
    }
  }
  const flushList = () => { pendingList = null }

  let i = 0
  const readTable = (startIndex) => {
    const tableLines = [bodyLines[startIndex]]
    let j = startIndex + 1
    while (j < bodyLines.length && bodyLines[j].trim().startsWith('|') && bodyLines[j].trim().endsWith('|')) {
      tableLines.push(bodyLines[j]); j++
    }
    return { table: parseTable(tableLines), next: j }
  }
  const readQuoteRun = (startIndex) => {
    const quoteLines = [bodyLines[startIndex]]
    let j = startIndex + 1
    while (j < bodyLines.length && bodyLines[j].trim().startsWith('>')) {
      quoteLines.push(bodyLines[j]); j++
    }
    return { lines: quoteLines, next: j }
  }

  for (; i < bodyLines.length;) {
    const raw = bodyLines[i]
    const t = raw.trim()

    // Section 7 = SEO boundary: stop body parsing, capture SEO fields
    if (/^### 7\./.test(t)) {
      for (let s = i; s < bodyLines.length; s++) {
        const line = bodyLines[s].trim()
        const mTitle = line.match(/^\*\*SEO\s*(?:Title|タイトル):\*\*\s*(.*)$/)
        const mDesc = line.match(/^\*\*SEO\s*(?:Description|ディスクリプション):\*\*\s*(.*)$/)
        if (mTitle) seoTitle = mTitle[1].trim()
        if (mDesc) seoDesc = mDesc[1].trim()
      }
      break
    }

    if (t === '' || t === '---') { flushPara(); flushList(); i++; continue }

    if (/^### /.test(t)) {
      flushPara(); flushList()
      content.push(block('h3', inline(t.replace(/^### /, ''))))
      i++; continue
    }
    if (/^#### /.test(t)) {
      flushPara(); flushList()
      const text = t.replace(/^#### /, '')
      inVision = visionHeadingRe.test(text)
      content.push(block('h4', inline(text)))
      i++; continue
    }
    if (/^##### /.test(t)) {
      flushPara(); flushList()
      content.push(block('h5', inline(t.replace(/^##### /, ''))))
      i++; continue
    }

    if (t.startsWith('>')) {
      flushPara(); flushList()
      const run = readQuoteRun(i)
      const text = run.lines.map((l) => l.trim().replace(/^>\s*/, '')).join('\n')
      content.push(block('blockquote', inline(text)))
      if (inVision && !vision) vision = text
      inVision = false
      i = run.next; continue
    }

    if (t.startsWith('|')) {
      flushPara(); flushList()
      const run = readTable(i)
      if (run.table) content.push(run.table)
      i = run.next; continue
    }

    if (/^-\s+/.test(t)) {
      flushPara()
      if (!pendingList || pendingList.listItem !== 'bullet') { pendingList = { listItem: 'bullet', level: 1 } }
      content.push(block('normal', inline(t.replace(/^-\s+/, '')), { listItem: 'bullet', level: 1 }))
      i++; continue
    }

    if (/^\d+\.\s+/.test(t)) {
      flushPara()
      if (!pendingList || pendingList.listItem !== 'number') { pendingList = { listItem: 'number', level: 1 } }
      content.push(block('normal', inline(t.replace(/^\d+\.\s+/, '')), { listItem: 'number', level: 1 }))
      i++; continue
    }

    // paragraph line
    pendingPara.push(t)
    i++
  }
  flushPara()

  const seo = {}
  if (seoTitle) seo.title = seoTitle
  if (seoDesc) seo.desc = seoDesc
  return { content, vision, seo }
}

const VISION_RE = { en: /^Vision$/, es: /^Visi[oó]n$/, jp: /^ビジョン$/ }
const SEO_LABELS = { en: 'SEO Title', es: 'SEO Title', jp: 'SEOタイトル' }
const SEO_DESC_LABELS = { en: 'SEO Description', es: 'SEO Description', jp: 'SEOディスクリプション' }

const cleanVision = (v) => (v || '').replace(/\*\*/g, '').trim()

function parseDoc(file, lang) {
  const raw = fs.readFileSync(file, 'utf8')
  const lines = raw.split(/\r?\n/).map((l) => l.replace(/\r$/, ''))
  // META block
  const metaStart = lines.findIndex((l) => l.trim().startsWith('## META'))
  const metaEnd = lines.slice(metaStart + 1).findIndex((l) => l.trim() === '---')
  const metaLines = lines.slice(metaStart + 1, metaStart + 1 + metaEnd)
  const meta = parseMeta(metaLines)

  // CONTENT block
  const contentHeaders = { en: '## CONTENT', es: '## CONTENIDO', jp: '## コンテンツ' }
  const contentStart = lines.findIndex((l) => l.trim() === contentHeaders[lang])
  const bodyLines = cleanValidarLines(lines.slice(contentStart + 1))
  const parsed = parseBody(bodyLines, VISION_RE[lang], {})
  return { meta, ...parsed }
}

const localeStr = (en, es, jp) => ({ _type: 'localeString', en, es, jp })
const localeTxt = (en, es, jp) => ({ _type: 'localeText', en, es, jp })

function parseBoolPublic(v) {
  if (/❌|なし|(^|\s|\-)(NO|No)($|\s|—|－)/.test(v) && !/Público|Public|パブリック/.test(v)) return false
  return /✅|YES|SÍ|あり|Public|Público|パブリック/i.test(v)
}

const PRESERVE_FIELDS = ['publishDate', 'ogImage', 'mainImage', 'previewImage', 'gallery', 'technologies', 'figmaEmbedUrl', 'myGoal']

async function main() {
  const projects = fs.readdirSync(BASE).filter((d) => ID_MAP[d])
  console.log('Modo:', APPLY ? 'APPLY (escritura a Sanity)' : 'DRY-RUN')
  console.log('Proyectos:', projects.join(', '), `(${projects.length})\n`)

  for (const folder of projects) {
    const { id: targetId, oldDraft } = ID_MAP[folder]
    const docs = {}
    let failed = false
    for (const [lang, fileName] of Object.entries(LANG_FILES)) {
      const file = path.join(BASE, folder, fileName)
      if (!fs.existsSync(file)) { console.log(`  ${folder}/${fileName}: FALTA`); failed = true; continue }
      docs[lang] = parseDoc(file, lang)
    }
    if (failed) { console.log(`\n${folder}: SKIP (archivos incompletos)\n`); continue }

    const en = docs.en.meta
    const es = docs.es.meta
    const jp = docs.jp.meta
    const slug = en['Slug'] || ''
    const publicVal = en['Public'] || en['Visibility'] || es['Público'] || es['Visibilidad'] || jp['公開範囲']
    const featuredRaw = en['Featured'] || es['Destacado'] || jp['注目プロジェクト']

    const doc = {
      _id: targetId,
      _type: 'project',
      slug: { _type: 'slug', current: slug },
      title: localeStr(en['Title'], es['Título'], jp['タイトル']),
      subtitle: localeStr(en['Subtitle'], es['Subtítulo'], jp['サブタイトル']),
      year: en['Year'],
      client: en['Client'],
      location: en['Location'],
      category: localeStr(en['Category'], es['Categoría'], jp['カテゴリ']),
      myRole: localeStr(en['Role'], es['Rol'], jp['役割']),
      scope: localeTxt(en['Scope'], es['Alcance'], jp['スコープ']),
      teamSize: localeStr(en['Team Size'], es['Tamaño del equipo'], jp['チーム規模']),
      duration: localeStr(en['Duration'], es['Duración'], jp['期間']),
      status: en['Status'],
      featured: /true/i.test(featuredRaw || ''),
      public: parseBoolPublic(publicVal || ''),
      introText: localeTxt(en['Subtitle'], es['Subtítulo'], jp['サブタイトル']),
      productVision: localeTxt(cleanVision(docs.en.vision), cleanVision(docs.es.vision), cleanVision(docs.jp.vision)),
      seoTitle: localeStr(docs.en.seo.title || '', docs.es.seo.title || '', docs.jp.seo.title || ''),
      seoDescription: localeTxt(docs.en.seo.desc || '', docs.es.seo.desc || '', docs.jp.seo.desc || ''),
      content: { _type: 'localeContent', en: docs.en.content, es: docs.es.content, jp: docs.jp.content },
    }

    // Preserve existing assets/structured fields (published or draft)
    const existing = await client.fetch('*[_id == $id][0]', { id: targetId }).catch(() => null)
    const existingSource = existing || (oldDraft ? await client.fetch('*[_id == $id][0]', { id: oldDraft }).catch(() => null) : null)
    if (existingSource) {
      for (const f of PRESERVE_FIELDS) {
        if (existingSource[f] !== undefined && existingSource[f] !== null && existingSource[f] !== '') doc[f] = existingSource[f]
      }
    }

    const counts = {}
    for (const lang of ['en', 'es', 'jp']) {
      const c = docs[lang].content
      counts[lang] = {
        blocks: c.length,
        headings: c.filter((b) => b.style && b.style.startsWith('h')).length,
        tables: c.filter((b) => b._type === 'portableTable').length,
        bullets: c.filter((b) => b.listItem === 'bullet').length,
        numbered: c.filter((b) => b.listItem === 'number').length,
        quotes: c.filter((b) => b.style === 'blockquote').length,
      }
    }

    if (DUMP) { if (DUMP === folder) { console.log(JSON.stringify(doc, null, 1)); return } }
    console.log(`\n=== ${folder} (${targetId}) ===`)
    console.log('  slug:', doc.slug.current, '| public:', doc.public, '| featured:', doc.featured, '| status:', doc.status)
    console.log('  blocks:', counts.en.blocks, '/', counts.es.blocks, '/', counts.jp.blocks,
      '| tables:', counts.en.tables, '/', counts.es.tables, '/', counts.jp.tables,
      '| bullets:', counts.en.bullets, 'quotes:', counts.en.quotes)
    console.log('  vision:', doc.productVision.en ? doc.productVision.en.slice(0, 70) : '(none)')
    console.log('  seoTitle:', doc.seoTitle.en ? doc.seoTitle.en.slice(0, 70) : '(none)')
    if (oldDraft) console.log('  promote desde draft:', oldDraft)

    if (APPLY) {
      await client.createOrReplace(doc)
      if (oldDraft) {
        await client.delete(oldDraft).catch(() => {})
      }
    }
  }
  console.log('\nDone.', APPLY ? '(aplicado; verificar con probe-sanity)' : '(dry-run: usa --apply para escribir)')
}

main().catch((e) => { console.error(e); process.exit(1) })