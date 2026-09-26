# Context — stack y arquitectura

## Stack

- **Next.js 16** (App Router, Server Components, `next dev` en puerto 3000; leer `node_modules/next/dist/docs/` antes de asumir APIs).
- **Tailwind CSS 4** + tokens de diseño en `src/styles/design-tokens.css` (`--color-*`, `--radius-*`, `--font-*`).
- **Sanity** (CMS): projectId `n0k6o0ax`, dataset `production`, apiVersion `2024-04-29`; token de escritura en `.env.local` (`SANITY_WRITE_TOKEN`).
- **Carbon Design System** (`@carbon/icons-react`, `CarbonLinkButton`).
- **Framer Motion**, **Vitest** + **Playwright** (config en `vitest.config.ts`).

## Estructura clave

```
src/
  app/            # rutas: / (home), /about, /work/[slug], /lab, /recursos, /contact
  components/     # Navbar, HeroSection, ProjectsSection, ContactSection, Footer, ...
  sanity/         # schemaTypes/, lib/queries.ts, lib/client.ts
  styles/         # design-tokens.css, carbon-theme.css
figma-specs/      # specs por pantalla (PS:*) para el plugin de Figma
scripts/          # figma-sync.mjs, tareas puntuales
```

## Convenciones

- Tipografía del **Design System** en todo el home: `font-sans` / `font-display` + pesos `font-normal|medium|bold|black`. No usar `font-ibm-plex*` (eliminadas de `globals.css`).
- Radios: botones **12px** (unidad del proyecto); filtros **8px** (`.filter-chip`); dots de carousel circulares (`.carousel-dot`); tarjetas **8px**.
- Colores siempre vía tokens (`--color-text-primary`, `--color-text-link`, `--color-on-primary`, `--color-bg-*`) para que funcionen en light **y** dark. `text-black`/`text-white` solo cuando el fondo lo garantiza.
- Queries Sanity: mantener limpias — solo pedir campos que se usan (ver auditoría `scripts/audit-sanity.mjs`).
- `revalidate = 0` en `work/[slug]`; `revalidate = 60` en home/about.

## Comandos

```powershell
npm run dev              # dev :3000
npm run build            # build de producción
npm run lint             # eslint
npm run test             # vitest
node scripts/figma-sync.mjs   # specs -> figma-plugin/spec.js
```
