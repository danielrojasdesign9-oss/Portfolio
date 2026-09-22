# Matriz de Proyectos — Portfolio AI

## Objetivo
Entender cualquier proyecto hecho con OpenCode/otras tools, mapearlo, capturar, conciliar texto y generar el doc Sanity `project` listo para `/work/[slug]`.

## Metodología recomendada: **PIPE** (Parse → Inspect → Map → Produce → Expose)
Tecnología: **Sanity CMS + Next.js + Playwright captures + Markdown matriz**

| Fase | Acción | Output |
|------|--------|--------|
| **P Parse** | Leer repo: `package.json`, `src/`, `.env`, README, rutas | `docs/matriz/{slug}/00-parse.json` |
| **I Inspect** | Mapear arquitectura: stack, flujos, entidades, APIs | `01-inspect.md` + diagrama Mermaid |
| **M Map** | Conciliar con `projectType` (title, category, introText, myRole, myGoal, productVision, content, gallery) | `02-map.json` |
| **P Produce** | Capturas Playwright (`scripts/capture.mjs`) + redactar `content` (PortableText) y `gallery` (titleEn/Es/Jp + images) | imágenes en `public/matriz/{slug}/` |
| **E Expose** | Seed Sanity (`scripts/seed-personal-projects.mjs`) + `npm run build` verify | `https://.../work/{slug}` |

## Estructura por proyecto
```
docs/matriz/{slug}/
  00-parse.json       # stack, routes, env
  01-inspect.md       # arquitectura + Mermaid
  02-map.json         # mapeo a projectType
  03-content.md       # borrador PortableText
public/matriz/{slug}/ # capturas
```

## Campos Sanity `project` (src/sanity/schemaTypes/projectType.ts)
- `title` (localeString), `slug`, `year`, `client`, `category` (localeString), `location`
- `introText`, `myRole`, `myGoal`, `productVision` (localeText/String)
- `content` (localeContent), `gallery[]` { titleEn/Es/Jp, subtitle, description, images[] {caption}}
- `previewImage/mainImage`, `figmaEmbedUrl`

## Uso
1. `npm run build` verifica
2. Capturas: `npm run capture` (Playwright ya en deps)
3. Seed: `SANITY_WRITE_TOKEN=xxx node scripts/seed-personal-projects.mjs` (requiere token con create)
4. Revisar en Studio: http://localhost:3001/studio → Project → {slug}
5. Ver en web: http://localhost:3001/work/{slug}?lang=es

## Estado actual
- Localhost: **http://localhost:3001** (build → start, Turbopack deshabilitado para Windows)
- Proyectos en matriz: `telemed` (Telemed — Atención en casa), `fashion-dtc` (Fashion DTC — Revisión de textiles) — seeds en `scripts/seed-personal-projects.mjs:1`
- Para ver contenido sin token: abrir Studio local y crearlos manual con esos slugs, o dame `SANITY_WRITE_TOKEN` y los subo.

## Revisión de contenido existente
- Sanity: `src/sanity/lib/client.ts:4` usa `projectId=n0k6o0ax`, `dataset=production`. Consulta: `*[_type=="project"]` en Vision (`/studio` → Vision).
- Local sin token: no puedo escribir; lectura sí: `npm run build` ya lista rutas, pero datos vienen de Sanity cloud.
