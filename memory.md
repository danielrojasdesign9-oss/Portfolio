# Memory — estado y decisiones

_Última actualización: 2026-09-26._

## Estado actual

- Todo el desarrollo se rama de `main`; diseño histórico preservado en `disenos-anteriores` (checkpoint `2ec03d3`) y lote UI en `checkpoint/2026-09-26-ui-batch` (`30d4c3e`).
- Foto de perfil (`profileImage` → "Foto de Perfil") integrada en el hero; fix SSR de `Navbar.isActive()` (guard `typeof window`) resolvió el 500 del home.
- **Lote UI commiteado y pusheado a `main`** (`30d4c3e`): tipografía DS en el home, radio botones 12px (filtros 8px, dots full), iconos con contraste light/dark por tokens, contacto en fila con `gap` 12, botón **Download CV** (hero + about), query `projectQuery` limpia, campo **`liveUrl`** en schema con sección "Visit live site", `context.md`/`memory.md`/`skills.md` + índice en `AGENTS.md`.
- **Limpieza aplicada** (`33fb74c`, `06b00b3`): borrados tmp scripts, docs obsoletos (CLAUDE.md, PENDING_CHANGES.md, install.sh, server.log), CSS Balsa sin usar, y assets grandes trackeados (bundle 38MB, `Data/`, `Design/` ~76MB). NO borrados (no aprobados): `storybook-static/`, `coverage/`, `.balsa/`.

## Decisiones tomadas

1. Los `.md` de contexto (`agents`, `context`, `memory`, `skills`) viven en la **raíz**, enlazados desde `AGENTS.md`.
2. Los proyectos con deploy en Vercel muestran **solo botón/link** "Visit live site" (`liveUrl` en Sanity); Figma embed queda como fallback.
3. Tipografía del home = **Design System activo** (no IBM Plex de la referencia Figma Make).
4. Imágenes y captions: las gestiona Daniel en Figma/Sanity.
5. `resources` es dato local (`src/lib/recursos-data.ts`); el schema/query `resource` de Sanity está sin usar.

## Pendientes

- [ ] Ingresar `liveUrl` de los 2 proyectos en Sanity Studio (campo ya desplegado).
- [ ] Reubicar/renombrar ~28 assets en Sanity (esperando 4 preguntas) y borrar imagen Paycool slide 4.
- [ ] Rotar token Figma expuesto (`figd_...`).
- [ ] `myRole` largo (solo Studio); copy de Innu (roadside vs cultura); imagen Fashion DTC.
- [ ] `revalidate = 0` en `work/[slug]` → subir a 60 antes de producción estable.
- [ ] Deprecar (pendientes de aprobación): `storybook-static/`, `coverage/`, `.balsa/`, `Cambios Figma make/`, `claracare/`, `fitmaterial-ai/`, `scripts/audit-gallery.mjs`.

## Errores conocidos / trampas

- PowerShell: sin `&&`, sin heredoc; encadenar comandos por separado.
- `text-black` en botones/iconos = invisible en dark; usar `--color-text-primary` / flip `bg-text-primary` + `text-bg`.
- Cookie/setting de tema aplicado por `Footer` y `Navbar` (no por un ThemeProvider global).
