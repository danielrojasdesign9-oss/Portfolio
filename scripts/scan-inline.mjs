import fs from 'fs'
import path from 'path'

const base = 'docs/projects-enhanced'
let links = 0, code = 0, numbered = 0, boldStart = 0
for (const proj of fs.readdirSync(base)) {
  for (const lang of ['EN', 'ES', 'JA']) {
    const f = path.join(base, proj, lang + '.md')
    if (!fs.existsSync(f)) continue
    const text = fs.readFileSync(f, 'utf8')
    links += (text.match(/\]\(http/g) || []).length
    code += (text.match(/[`]/g) || []).length
    numbered += (text.match(/^\s*\d+\.\s/mg) || []).length
    boldStart += (text.match(/^\*\*/gm) || []).length
  }
}
console.log({ links, code, numbered, boldStart })