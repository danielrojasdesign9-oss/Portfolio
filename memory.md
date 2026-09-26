# Memory — estado y decisiones

_Ultima actualizacion: 2026-09-26 (lotes 2 y 3)._ 

## Estado actual

- Todo el desarrollo se rama de `main`; diseño histórico preservado en `disenos-anteriores` (checkpoint `2ec03d3`) y lote UI en `checkpoint/2026-09-26-ui-batch` (`30d4c3e`).
- Foto de perfil (`profileImage` → "Foto de Perfil") integrada en el hero; fix SSR de `Navbar.isActive()` (guard `typeof window`) resolvió el 500 del home.
- **Lote UI** (`30d4c3e`): tipografía DS en el home, radio botones 12px, iconos con contraste light/dark, Download CV (hero+about), `projectQuery` limpia, campo `liveUrl`, `.md` de contexto.
- **Limpieza** (`33fb74c`, `06b00b3`): tmp scripts, docs obsoletos, CSS Balsa, `Data/`+`Design/` ~76MB. NO borrados (no aprobados): `storybook-static/`, `coverage/`, `.balsa/`.
- **Lote 2 — commiteado y validado en producción** (`c8c0da4` + `3289ec1`): foto hero 480×480, carrusel con `translateX` (sin scroll/dots, paso 320px = card 288+gap 32), DS v3 **"Acid Pop"** (violeta `#7C3AED`, tinta `#101210`, lima `#C6F135` preview, radii 8/16/24/32), botones por tokens, AAA +4px (`[data-aaa="true"]`), Prev/Next centrados, Paycool link+iframe, LabBackLink ×4, specs Figma sincronizados (`figma-sync`).
- **Lote 3 — implementado y validado en local (pendiente commit/push)**:
  - **T1 i18n botones**: `copy` en/es/jp en HeroSection (Hablemos/Sobre mí/Descargar CV/Conecta) + contactLinks Email localizado; ContactSection `emailBtn` (Email/Correo/メール); about (`downloadCv`, `emailLabel`); work (`visitLive`, `client`, `role`, `year`); Footer derechos © localizados.
  - **T2 swipe móvil**: listeners **nativos** (`useEffect` + `ref` en `motion.div`) con umbral 40px y `|dx|>|dy|` → `handleCarouselPrev/Next`. Validado: `0 → -320 → 0`.
  - **T3 footer mobile**: inner div `flex-col md:flex-row items-start md:items-center gap-6 md:gap-12` (izquierda en mobile).
  - **T4 hero foto**: 480 → **420×420** (wrapper, `sizes` y `home.spec.json` actualizado).
  - **T5 Prev/Next**: label+título en **una sola línea** (`flex items-baseline gap-2`, ambos `text-lg font-black`, título `truncate`), misma altura (h=28) verificado.
  - **T6 campo `aboutImage`**: schema `profileType` + `aboutImageUrl` en query + fallback en about (`aboutImageUrl || profileImageUrl`).
- Validación siempre en prod local (`next start -p 3100`) — **en dev los clics cuelgan la página** (artefacto dev-only). Playwright con CDP `Input.dispatchTouchEvent` para touch.

## Decisiones tomadas

1. Los `.md` de contexto viven en la **raíz**, enlazados desde `AGENTS.md`.
2. Proyectos con deploy → solo link "Visit live site" (`liveUrl`); Figma embed como fallback.
3. Tipografía del home = **Design System activo**.
4. Imágenes/captions: Daniel en Figma/Sanity.
5. `resources` es dato local (`src/lib/recursos-data.ts`); schema `resource` sin usar.
6. **DS v3 "Acid Pop"**: primary debe ser oscuro (violeta) porque `--color-text-inverse` es blanco en light (`THEME_DEPENDENT_PROPS`); lima solo como accent/preview.
7. **Radius botones** (`globals.css` sin capa + `!important`): `button,[role=button],.cds--btn` → `--radius-lg`; `.filter-chip` → `--radius-md`; `<a>`-botones llevan `rounded-[var(--radius-lg)]` manual (no los cubre la regla).
8. **Footer/carbon**: `carbon-theme.css:748-773` fuerza footer row+space-between ≥768px → el footer paginación de `work/[slug]` lleva `flex flex-col items-stretch gap-8` (utilities > carbon).
9. **`motion.div` de framer-motion no dispara `onTouchStart/End` de React** (props no reenviadas) → usar listeners nativos vía `ref`+`useEffect`.
10. `html.scroll-smooth` rompe tests con `scrollIntoView` (rect a mitad de animación) → usar `behavior:"instant"` + esperar.

## Pendientes

- [ ] **Commit + push del lote 3** (esperando aprobación de Daniel) y validación en `portfolio-daniel-rojas-design.vercel.app`.
- [ ] Ingresar `liveUrl` de proyectos en Sanity Studio (campo desplegado).
- [ ] Reubicar/renombrar ~28 assets en Sanity (esperando 4 preguntas) y borrar imagen Paycool slide 4.
- [ ] Rotar token Figma expuesto (`figd_...`).
- [ ] `myRole` largo (solo Studio); copy de Innu; imagen Fashion DTC.
- [ ] `revalidate = 0` en `work/[slug]` → subir a 60 antes de producción estable.
- [ ] Desplegar Studio para publicar el campo `aboutImage` (query ya lo lee).
- [ ] **Jev para validar copy hero + CTAs** (alcance elegido por Daniel) — ver propuesta en el chat.
- [ ] Deprecar (pendientes de aprobación): `storybook-static/`, `coverage/`, `.balsa/`, `Cambios Figma make/`, `claracare/`, `fitmaterial-ai/`, `scripts/audit-gallery.mjs`.

## Errores conocidos / trampas

- PowerShell: sin `&&`, sin heredoc; encadenar comandos por separado.
- `text-black` en botones/iconos = invisible en dark; usar `--color-text-primary`.
- Cookie de tema aplicada por `Footer` y `Navbar` (no ThemeProvider global).
- Playwright: rutas con corchetes `work\[slug]` rompen `Select-String -Path` (usar Read).
- Validar SIEMPRE en build de prod; el dev server cuelga con clics reales.
