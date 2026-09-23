<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:figma-sync -->
# Figma ↔ Code Sync Protocol (OpenCode = source of truth)

Daniel Rojas porta su portafolio desde Figma hacia el código, y viceversa.
OpenCode es **la única fuente de verdad**: lee Figma, reparte a código y genera specs para volver a dibujar en Figma.

## Roles
- **Figma** = canon de diseño que Daniel edita visualmente.
- **OpenCode** = orquestador con criterio final: decide qué se implementa, cómo se traduce diseño→código y código→spec.
- **Código** = implementación técnica viva (Next.js + Tailwind + Sanity).

## Ciclo de trabajo
1. Daniel cambia algo en Figma.
2. OpenCode lee el cambio usando el MCP de Figma (`figma_get_figma_data`) sobre el archivo `ya5s3QI0I2YII8cV84xSV` ("Proyecto IA Portfolio").
3. OpenCode actualiza el código (`src/`) para reflejar el cambio, con su criterio.
4. OpenCode actualiza el spec en `figma-specs/*.spec.json` y corre `node scripts/figma-sync.mjs`.
5. Daniel corre el plugin "Portfolio Sync by OpenCode" en Figma para redibujar las pantallas `PS:*` desde el spec.

## Archivos
- `figma-plugin/manifest.json` + `code.js` — plugin de Figma spec-driven (dibuja frames `PS:<name>`).
- `figma-specs/*.spec.json` — specs por pantalla (Home, Work, About, Lab, Resources, + vistas).
- `scripts/figma-sync.mjs` — convierte specs → `figma-plugin/spec.js` (requerido por el plugin).
- MCP Figma: token local PAT (gmail), **solo lectura** — no puede escribir en Figma. La escritura se hace vía el plugin.

## Reglas
- Los specs deben reflejar **tokens reales** de `src/styles/design-tokens.css` y el layout real de `src/components/*`.
- Imágenes = placeholders (`[image: ...]`) en el spec; Daniel reemplaza manualmente en Figma.
- Al tocar código o tokens relevantes a UI, regenerar specs (paso 4) para no desincronizar.
- Push a `main`/deploy **solo con aprobación explícita** de Daniel.
<!-- END:figma-sync -->
