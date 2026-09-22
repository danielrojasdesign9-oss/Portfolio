# Figma Make Brief — Daniel Rojas Portfolio Redesign

## Contexto
Rediseño completo del portfolio en rama `design-system/v2` (preview: `https://portfolio-ai-preview.vercel.app`). Stack: Next.js 16, React 19, Tailwind 4, Carbon Design System, framer-motion, Sanity CMS.

**Identidad visual definida:**
- **Tipografía:** Space Grotesk (headings), Crimson Pro (body)
- **Paleta (primarios):**
  - Midnight `#1C0B69` (primary)
  - Indigo `#2D318C` (primary-hover)
  - Merlot `#7F333D` (accent)
  - Silver Mist `#CCCCCC` (neutral/border)
  - Onyx `#1D1D15` (text)
- **Light/Dark mode** + **AA/AAA toggle** (opt-in)
- **Motion tokens** (spring, reduced-motion)

---

## Pantallas requeridas en Figma Make

### 1. Home / Hero (`/`)
- **Estado actual:** Hero con foto circular (placeholder "DR"), headline "I make things feel good. And look better.", 2 CTAs (About Me, Let's Talk).
- **Necesario:** Refinar layout, spacing, responsive breakpoints. Foto real (por ahora placeholder).
- **Entregable:** Frame 1440px + 375px mobile.

### 2. Projects Section (`/#projects` en home + `/work` page)
- **3 vistas implementadas en código:**
  - **Grid:** Cards 3-col desktop, 2-col tablet, 1-col mobile. Aspect 4:5. Hover scale + overlay.
  - **Revista (Magazine):** Editorial alternating layout (imagen 8/12 cols, meta 4/12 cols), índice 01/07 gigante (opacity 5%), títulos display 4xl-5xl, CTA "View case".
  - **Carrusel (Carousel):** Horizontal scroll snap-x, cards 520-640px max-w, navegación arrows + dots + wheel scroll + keyboard arrows. Badge "01/07".
- **Toolbar:** Category filter pills (URL-synced `?category=`), View toggle segmented (Grid/Revista/Carrusel).
- **Entregable:** 3 frames desktop + mobile para cada vista. Componentes reutilizables: `ProjectCard`, `ProjectMagazineRow`, `ProjectCarouselCard`, `Toolbar`.

### 3. Project Detail (`/work/[slug]`)
- **Estructura actual:**
  - `ProjectCover`: Hero tipográfico gigante (año tag, category, título 9rem-11rem), scroll indicator.
  - Sidebar sticky: Back link, Client/Role/Year, "01 de 07" progress.
  - Main: Problem intro (italic), Hero image (16:10), Product Vision (rocket icon), PortableText content, Figma embed, Gallery dinámico, Paginación secuencial (prev/next cards + 01/07 + arrows).
- **Navegación teclado:** ArrowLeft/ArrowRight entre proyectos.
- **Entregable:** Frame desktop (1440px) completo + mobile breakdown. Componentes: `ProjectCover`, `ProjectSidebar`, `ProjectGallery`, `SequentialNav`.

### 4. About (`/about`)
- **Secciones:** Header (nombre, role, Email/LinkedIn), Philosophy quote, Bio (2-col), Experience grid (4-col logos + roles), Expertise matrix (StructuredList), Off-the-clock hobbies grid.
- **Entregable:** Frame desktop + mobile.

### 5. Lab (`/lab`, `/lab/fitmaterial`, `/lab/claracare`)
- **Lab principal:** Design system switcher (select), preview cards (Card, CTA, Glass).
- **FitMaterial:** Range input (cm) → talla recomendada + confianza.
- **ClaraCare:** Cuestionario triaje stepper (Sí/No), estado urgente (rojo).
- **Entregable:** 3 frames.

### 6. Recursos (`/recursos`)
- **Grid de recursos:** Search input (Carbon), Category filter pills, Resource cards (badge free/kit, title, desc, AI compatibility badges, CTA).
- **CTA section:** Dark background, headline, description, button.
- **Entregable:** Frame desktop + mobile.

### 7. Navbar (componente global)
- **Desktop:** 6 items (Home, Work, About, Lab, Recursos, Contact) distribuidos: 3 izquierda, logo centrado, 3 derecha + Theme/Lang/AAA toggles.
- **Mobile:** Hamburger → slide-in drawer (spring), nav links, lang buttons, theme/AAA en drawer.
- **Estados:** Scroll hide/show, scrolled background blur, active underline animation.
- **Entregable:** Componente `Navbar` con variants (default, scrolled, mobile-open).

### 8. Footer (componente global)
- Minimal: copyright + "ALL RIGHTS RESERVED" (trilingüe).
- **Entregable:** Componente `Footer`.

---

## Design System en Figma (Variables)

| Categoría | Variables |
|-----------|-----------|
| **Color** | `color-midnight`, `color-indigo`, `color-merlot`, `color-silver-mist`, `color-onyx`, `color-bg`, `color-bg-elevated`, `color-bg-sunken`, `color-text-primary`, `color-text-secondary`, `color-text-tertiary`, `color-border`, `color-border-subtle`, `color-primary`, `color-primary-hover`, `color-accent`, `color-success`, `color-warning`, `color-error` |
| **Dark mode** | Versiones `-dark` de bg/text/border |
| **AAA** | `color-text-primary-aaa`, `color-text-secondary-aaa`, `color-border-aaa` (activadas con `data-aaa="true"`) |
| **Tipografía** | `font-heading` (Space Grotesk), `font-body` (Crimson Pro), escala `text-xs` a `text-8xl`, weights, line-heights, letter-spacing |
| **Espaciado** | `space-0` a `space-32` |
| **Radio** | `radius-sm` a `radius-full` |
| **Sombras** | `shadow-sm` a `shadow-xl` |
| **Motion** | `motion-duration-fast/base/slow`, `motion-easing-standard/spring` |
| **Z-index** | `z-base` a `z-toast` |

---

## Componentes a crear en Figma (con variants)

| Componente | Variants / Props |
|------------|------------------|
| `Button` | kind: primary/secondary/tertiary/ghost/danger, size: sm/md/lg/xl, icon: leading/trailing |
| `Tag` | type: green/outline/red, size: sm/md |
| `Card` | elevation: 1/2/3, padding: sm/md/lg |
| `ProjectCard` (Grid view) | image, title, category, year, index |
| `ProjectMagazineRow` (Revista) | image, title, category, year, index, reversed (boolean) |
| `ProjectCarouselCard` | image, title, category, year, index, total |
| `Toolbar` | categories[], viewMode, onCategoryChange, onViewChange |
| `SequentialNav` | currentIndex, total, prevTitle, nextTitle, onPrev, onNext |
| `Navbar` | items[], logo, actions[], mobileDrawer |
| `Footer` | locale |

---

## Accesibilidad (requisitos)

- **WCAG AA mínimo** — contraste 4.5:1 texto normal, 3:1 large text
- **WCAG AAA opt-in** — contraste 7:1 / 4.5:1 (toggle en navbar)
- **Focus visible** — outline 2px `color-primary`, offset 2px
- **Skip link** — primer tab salta a main
- **Reduced motion** — respeta `prefers-reduced-motion`
- **ARIA** — labels, roles, aria-pressed, aria-current en navegación

---

## Motion / Animaciones

| Elemento | Especificación |
|----------|----------------|
| Navbar scroll hide | `y: -100%` → `0`, 300ms, ease `[0.4,0,0.2,1]` |
| Navbar scrolled bg | `background: 88% → 96%`, `box-shadow` |
| Mobile drawer | Spring `damping: 25, stiffness: 300`, `x: 100% → 0` |
| Active underline | `width: 0 → 100%`, `transform: translateX(-50%)` |
| ProjectCard hover | `scale: 1.05`, `overlay: 0% → 20%` |
| Carousel scroll | `scroll-snap-x`, wheel → `scrollBy(300px)`, keyboard arrows |
| Sequential nav | `opacity 0 → 1`, `y: 40 → 0` staggered |
| Theme toggle | Cycle: Light → Dark → System (icons Sun/Moon/Contrast) |

---

## Entregables esperados

1. **Archivo Figma Make** con todas las pantallas arriba + design system variables + componentes con variants.
2. **Prototipo navegable** (links entre Home → Work → Project Detail → sequential nav).
3. **Especificaciones de handoff** (inspect panel listo para dev: spacing, colors, typography, motion).
4. **Export assets** (SVGs para icons, placeholders para imágenes de proyectos).

---

## Timeline sugerido

| Fase | Duración | Entregable |
|------|----------|------------|
| Design System setup (variables, primitives) | 1 día | Color, type, spacing, shadows en Figma |
| Component library (Button, Tag, Card, Toolbar, Navbar, Footer) | 1.5 días | Variants documentados |
| Pantallas principales (Home, Work, Project Detail, About, Recursos, Lab) | 2 días | Frames desktop + mobile |
| Prototipo + QA visual | 0.5 días | Links funcionando, revisión AA/AAA |
| Export & handoff | 0.5 días | Assets, specs |

**Total estimado: 5 días**

---

## Notas para el diseñador

- **No inventes contenido** — usa los textos reales del código (trilingües EN/ES/JP en `lib/utils-locale`).
- **Imágenes de proyectos** — placeholders Pexels (ver `lib/pexels-images.ts`). El cliente proveerá finales.
- **Carbon Design System** — usa componentes Carbon como base (Button, Tag, Search, StructuredList, ClickableTile) pero con nuestro theming (colores, tipografía, radius).
- **Responsive breakpoints:** 1440px (desktop), 1024px (tablet), 768px (mobile-lg), 375px (mobile).
- **Dark mode** — todos los frames en light + dark.
- **AAA mode** — frames con `data-aaa="true"` para verificar contraste mejorado.

---

## Referencias visuales

- **Grid/Revista/Carrusel:** `https://portfolio-ai-preview.vercel.app/work` (3 vistas en toolbar)
- **Project Detail:** `https://portfolio-ai-preview.vercel.app/work/tir?lang=en`
- **Navbar + Mobile:** Resize viewport < 768px
- **Sequential nav:** ArrowLeft/ArrowRight en project detail

---

## Contacto

Para dudas durante el diseño: revisar código en `src/components/` y `src/app/` en la rama `design-system/v2`.