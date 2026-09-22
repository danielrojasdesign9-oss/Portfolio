# HANDOFF — Documentación de Procesos Portfolio AI

> Fecha: 2026-09-20 | Rama actual: `carbon` | Autor: Daniel Rojas + Muse Spark
> Propósito: permitir que cualquier agente (humano o IA) retome el trabajo sin perder contexto.

---

## 1. Objetivo del Proyecto

Rediseño completo del portfolio de Daniel Rojas:
- **Identidad visual propia**: Midnight `#1C0B69` / Indigo `#2D318C` / Merlot `#7F333D` / Silver Mist `#CCCCCC` / Onyx `#1D1D15` + Space Grotesk (headings) / Crimson Pro (body)
- **Contenido con voz humana**: anti-AI, primera persona, fracasos y métricas reales (skill `storyteller`)
- **Stack**: Next.js 16.2.4 (usar `npm run build` + `npm start`, Turbopack roto en Windows), React 19, Tailwind 4, Sanity `n0k6o0ax`/`production`, i18n EN/ES/JP, Carbon v1.116.0
- **Regla de oro**: NO publicar a GitHub/Sanity hasta aprobación explícita del usuario

---

## 2. Procesos REALIZADOS ✅

### 2.1 Infraestructura & Config
| Item | Archivo(s) | Estado |
|------|-----------|--------|
| Fix cascada CSS Carbon `@layer carbon` | `src/app/globals.css`, `src/styles/carbon-theme.css` | ✅ |
| Tokens de diseño centralizados | `src/styles/design-tokens.css` | ✅ |
| Fuentes Space Grotesk + Crimson Pro | `src/app/layout.tsx:1-30` | ✅ |
| Balsa palette eliminada | `src/styles/my-design-system-palette.css` eliminado, `ProjectCover.tsx`, `GalleryImage.tsx`, `claracare/page.tsx`, `fitmaterial/page.tsx` migrados a `--color-*` | ✅ |
| Secrets `.env.local` | `SANITY_WRITE_TOKEN`, `NEXT_PUBLIC_WHATSAPP_NUMBER=573174446641` | ✅ |

### 2.2 UI / Componentes
| Item | Archivo(s) | Estado |
|------|-----------|--------|
| Navbar sin SideNav, con Lab, mobile fila debajo header | `src/components/Navbar.tsx` | ✅ |
| Hero headline trilingüe + foto circular | `src/app/page.tsx` | ✅ |
| Lab page | `src/app/lab/page.tsx` | ✅ |
| Recursos enumerados | `src/app/recursos/RecursosClient.tsx` | ✅ |
| Botones unificados `CarbonButton` (acciones) + `CarbonLinkButton` (links) | `src/components/ui/CarbonButton.tsx`, `CarbonLinkButton.tsx` | ✅ |
| ContactSection, Footer, skeletons | `src/components/ContactSection.tsx`, `Footer.tsx`, `src/app/globals.css` | ✅ |
| Verificación visual Playwright 200 en todas rutas + `build-storybook` OK | — | ✅ |

### 2.3 Skills & Sub-agentes
| Item | Archivo | Estado |
|------|---------|--------|
| `security-audit` skill | `.opencode/skills/security-audit/SKILL.md` | ✅ |
| `storyteller` skill | `.opencode/skills/storyteller/SKILL.md` | ✅ |
| `storyteller` agent | `.opencode/agents/storyteller.md` | ✅ |
| `ui-designer`, `code-reviewer`, `test-writer` agents | `.opencode/agents/*.md` | ✅ |

### 2.4 Documentación de Proyectos (trilingüe EN/ES/JP)
Todos en `docs/projects/*.md` con estructura anti-AI (hook, proceso con intentos fallidos, métricas, aprendizajes):

| Doc | Público Sanity | Estado contenido |
|-----|---------------|-----------------|
| `tir.md` (2025 Sovos) | ✅ SI | ✅ Mejorado con hook $50k, D3.js, 2 intentos |
| `e-signer.md` (2024 Banks) | ✅ SI | ✅ Mejorado trust signals, crypto libs |
| `igo.md` (2025 Mottainai) | ✅ SI | ✅ Mejorado WhatsApp API, necesita pulido final |
| `linklight.md` (2022) | ✅ SI | ✅ Mejorado DBT/CNV, historia personal |
| `innu.md` (2021) | ✅ SI | ✅ Mejorado 5 orgs, innovation theater |
| `silin.md` (2023 Gov) | ✅ SI | ✅ Mejorado 50% soporte |
| `paycool.md` (2020 Bancoomeva) | ✅ SI | ✅ Mejorado invisible gamification |
| `fitmaterial.md` (KOAJ dummy) | ❌ NO | ⏳ Base creada, pendiente mejora |
| `claracare.md` (dummy) | ❌ NO | ⏳ Base creada, pendiente mejora |
| `telemed.md` (dummy) | ❌ NO | ⏳ Base creada, pendiente mejora |
| `fashion-dtc.md` (dummy) | ❌ NO | ⏳ Base creada, pendiente mejora |

Workflow aprobación: `docs/projects/*.md` → checkboxes `[ ] EN/ES/JP` → usuario aprueba → push a Sanity con `public:false` por defecto para nuevos.

### 2.5 Archivos de Decisiones
| Archivo | Contenido |
|---------|-----------|
| `docs/DESIGN_DECISIONS.md` | Registro de paleta, tipografía, navbar, lab, etc. |
| `AGENTS.md` | Regla Next.js breaking changes |

---

## 3. Procesos PENDIENTES ⏳

### 3.1 Sanity Studio — Migración de Schema (EN CURSO, incompleta)
**Plan aprobado por usuario: 4 fases. Fase 1.1 iniciada pero NO terminada.**

| Fase | Tarea | Estado | Archivos afectados |
|------|-------|--------|-------------------|
| **1.1** | Gallery `titleEn/Es/Jp` → `localeString`/`localeText` | 🔄 **A MEDIAS** | `projectType.ts` ✅ editado, `queries.ts` ✅ editado, falta `src/app/work/[slug]/page.tsx:175-176` y `src/lib/dummy-projects.ts:18-40` y migración de datos existentes en Sanity |
| **1.2** | Experience `name/role` → `localeString` | ⏳ pendiente | `experienceType.ts`, `queries.ts`, `src/app/about/page.tsx` |
| **1.3** | Agregar `order:number` a experience | ⏳ pendiente | `experienceType.ts`, `queries.ts` |
| **2.1** | SEO `seoTitle`, `seoDescription`, `ogImage` a project | ⏳ pendiente | `projectType.ts` |
| **2.2** | SEO a profile | ⏳ pendiente | `profileType.ts` |
| **2.3** | `publishDate:date` a project (sorting preciso) | ⏳ pendiente | `projectType.ts`, `queries.ts` |
| **3.1** | `technologies: array<ref tool>` a project | ⏳ pendiente | `projectType.ts`, `queries.ts` |
| **3.2** | Unificar `resource.category` a solo inglés (`research/designops/product/leadership`) | ⏳ pendiente | `resourceType.ts` |
| **4.1** | `generateStaticParams` en `/work/[slug]` | ⏳ pendiente | `src/app/work/[slug]/page.tsx` |
| **4.2** | Unificar sorting (`year desc` vs `_createdAt`) a `publishDate desc` | ⏳ pendiente | `queries.ts` |
| **Otros gaps** | `SANITY_WRITE_TOKEN` sin uso, `profileQuery` singleton sin validación, `resource` sin query single | ⏳ documentado, no bloqueante | — |

> ⚠️ **ATENCIÓN AGENTE SIGUIENTE**: No hacer `npm run build` hasta terminar 1.1 — romperá `work/[slug]` si no se actualiza el acceso a `slide.titleEn`.

### 3.2 Proyectos Dummy (no publicados)
Mejorar `fitmaterial.md`, `claracare.md`, `telemed.md`, `fashion-dtc.md` con mismo nivel anti-AI que los 7 publicados, **sin push a Sanity**.

### 3.3 Revisión final de los 7 publicados
Usuario quiere revisar y pulir Igo específicamente + dar feedback al resto antes de push.

### 3.4 Push a Sanity Studio
Solo tras aprobación checkboxes en cada `docs/projects/*.md`.

---

## 4. Por CONSOLIDAR 🔧

| Área | Acción requerida |
|------|-----------------|
| **Build verification** | `npm run build` falla si Fase 1.1 queda a medias — completar migración gallery antes de verificar |
| **DummyProjects en detalle** | `src/app/work/[slug]/page.tsx` solo lee Sanity, no dummies → click dummy = 404. Decidir: ¿soportar dummies en detalle o ocultar cards dummy hasta publicar? |
| **Schema `localeFields.ts`** | `languages` hardcoded `en/es/jp` — si se agrega idioma, tocar 3 lugares. Evaluar plugin `@sanity/document-internationalization` vs custom actual |
| **Design tokens** | `design-tokens.css` y `carbon-theme.css` duplican mapeo `--color-*` → `--cds-*`. Consolidar en un solo source of truth |
| **i18n utils** | `src/lib/utils-locale.ts` fallback `field[locale] || field.en` — documentar comportamiento para gallery nueva |

---

## 5. Guía para Otros Agentes

### 5.1 Cuándo usar cada sub-agente (`Task` tool)
```
subagent_type="explore"        → búsquedas rápidas de archivos, grep, glob
subagent_type="code-reviewer"  → revisar bugs, tipos, security, perf (solo lectura)
subagent_type="ui-designer"    → Carbon/Tailwind, accesibilidad WCAG, responsive
subagent_type="test-writer"    → Vitest + Playwright
subagent_type="storyteller"    → reescribir copy de proyectos anti-AI (StoryBrand/PAS/AIDA)
subagent_type="general"        → multi-step paralelo
```

### 5.2 Skills disponibles (cargar con `skill` tool)
| Skill | Uso |
|-------|-----|
| `security-audit` | Antes de deploy, OWASP Top 10 |
| `storyteller` | Antes de reescribir cualquier `docs/projects/*.md` |
| `balsa-ui` / `balsa-template-design` | Si se toca UI Balsa legacy |
| `ux-audit`, `accessibility` | Auditorías visuales |

### 5.3 Comandos verificados (Windows win32, PowerShell 5.1)
```ps
npm run build          # OK (sin turbopack)
npm run build-storybook # OK
npm start              # tras build
# NO usar: npm run dev --turbopack (roto)

# Sanity
npx sanity schema validate
npx sanity dataset export production
```

### 5.4 Estructura Sanity relevante
```
src/sanity/schemaTypes/
  localeFields.ts  → localeString, localeText, localeContent
  projectType.ts   → title(localeString), slug, public, year, client, category, location, introText, myRole, myGoal, productVision, figmaEmbedUrl, content, previewImage, mainImage, gallery[slide{title,subtitle,description,images[caption]}]
  profileType.ts   → fullName, role, tagline, homeDescription, bio, email, linkedinUrl, resumeUrl, profileImage, hobbies
  experienceType.ts→ name, image, year, role, link  (→ pendiente localizar)
  toolType.ts      → name, category(localeString), logo
  resourceType.ts  → title, slug, description, category(enum), type(enum), aiCompatibility, link, previewImage

src/sanity/lib/queries.ts
  projectsQuery, projectQuery (con next/prev), profileQuery, experienceQuery, toolsQuery, resourcesQuery

src/lib/dummy-projects.ts → 2 dummies (telemed, fashion-dtc) con shape legacy gallery
src/lib/utils-locale.ts   → getLocaleText(), getLocaleContent()
```

### 5.5 Flujo recomendado para agente que retome
1. `read` `docs/HANDOFF.md` (este archivo) + `docs/DESIGN_DECISIONS.md`
2. `read` `src/sanity/schemaTypes/projectType.ts` + `queries.ts` + `src/app/work/[slug]/page.tsx:170-190`
3. Completar **Fase 1.1** (gallery): editar `page.tsx` y `dummy-projects.ts`, luego `npm run build` para validar
4. Continuar Fases 1.2 → 4.2 en orden, un `edit` por fase + build check
5. Mejorar 4 dummies con skill `storyteller`
6. Esperar aprobación usuario antes de cualquier `sanity dataset` write o `git push`

---

## 6. Checklist Rápido para Próximo Agente

- [ ] Terminar Fase 1.1 gallery (page.tsx + dummy-projects.ts + test build)
- [ ] Fases 1.2 y 1.3 (experience)
- [ ] Fases 2.1-2.3 (SEO + publishDate)
- [ ] Fases 3.1-3.2 (technologies + category)
- [ ] Fases 4.1-4.2 (generateStaticParams + sorting)
- [ ] Mejorar 4 dummies (storyteller, sin publicar)
- [ ] Pulir Igo según feedback usuario
- [ ] Build final `npm run build` OK
- [ ] Esperar aprobación para push Sanity

---

## 7. Referencias Rápidas

| Recurso | Path |
|---------|------|
| Design tokens | `src/styles/design-tokens.css` |
| Carbon mapping | `src/styles/carbon-theme.css` |
| Globals | `src/app/globals.css` |
| Layout fonts | `src/app/layout.tsx` |
| Project docs | `docs/projects/*.md` |
| Handoff | `docs/HANDOFF.md` (este archivo) |
| Decisiones | `docs/DESIGN_DECISIONS.md` |
| Sanity config | `sanity.config.ts`, `src/sanity/env.ts` |
| MCP config | `C:\Users\Daniel J\.config\opencode\opencode.json` |

> Regla: leer archivo completo antes de editar. No crear `.md` nuevos sin pedir. Un `in_progress` a la vez en `todowrite`.
