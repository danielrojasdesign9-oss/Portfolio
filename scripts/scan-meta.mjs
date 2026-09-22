import fs from 'fs'
import path from 'path'

const base = 'docs/projects-enhanced'
const langs = {}
for (const proj of fs.readdirSync(base)) {
  for (const lang of ['EN', 'ES', 'JA']) {
    const f = path.join(base, proj, lang + '.md')
    if (!fs.existsSync(f)) continue
    const lines = fs.readFileSync(f, 'utf8').split(/\r?\n/)
    let inMeta = false
    for (const line of lines) {
      if (line.trim().match(/^## /)) { inMeta = true; continue }
      if (inMeta && line.trim() === '---') break
      const m = inMeta && line.match(/^-\s+\*\*([^*]+):\*\*\s*(.*)$/)
      if (m) { langs[lang] = langs[lang] || new Set(); langs[lang].add(m[1].trim()) }
    }
  }
}
for (const l of Object.keys(langs)) console.log(l + ':\n  ' + [...langs[l]].join('\n  '))