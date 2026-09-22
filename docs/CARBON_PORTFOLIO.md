# Carbon Design System en el portafolio

## Enfoque

Carbon v1 (`@carbon/react` + `@carbon/styles`) se usa como **base de componentes, grid y accesibilidad**, no como estética por defecto.

Regla de diseño aplicada: **"never ship the default"**.
- **Un solo acento**: verde `#129a56` (reemplaza el azul IBM `#0f62fe`).
- **2 tipografías**: Raleway (display/títulos) + Noto Sans (UI/cuerpo). Se desactiva IBM Plex en los componentes Carbon.
- Tokens `--cds-*` re-mapeados en `src/styles/carbon-theme.css` (5385 variables → paleta del portafolio).

## Wiring

- `src/app/globals.css`: declara `@layer theme, base, carbon, components, utilities;` e importa Carbon como `@import "...styles.css" layer(carbon)` + `carbon-theme.css layer(carbon)`. Así las utilidades de Tailwind (capa `utilities`) vencen a Carbon, y Carbon vence al preflight base. Sin las capas, el CSS sin `@layer` de Carbon gana por cascada a todo Tailwind.
- `src/components/Providers.tsx`: `"use client"` + `GlobalTheme theme="white"` (los componentes Carbon usan hooks/context, no pueden importarse directo en Server Components).
- `src/components/ui/CarbonLinkButton.tsx`: wrapper cliente que resuelve `renderIcon`/`href` con props serializables (un Server Component no puede pasar componentes a Carbon).

## Componentes Carbon aplicados

| Zona | Componentes Carbon | Estado |
|---|---|---|
| Shell global | `GlobalTheme` | Hecho |
| Navbar / nav | `Header`, `HeaderNavigation`, `HeaderMenuItem`, `HeaderGlobalBar`, `HeaderGlobalAction`, `OverflowMenu`, `OverflowMenuItem`, `SideNav`, `SideNavItems`, `SideNavMenuItem` | Hecho |
| Home hero | `Grid`, `Column`, `Tag`, `CarbonLinkButton` (`Button`) | Hecho |
| Home proyectos | `Grid`, `Column`, `ClickableTile`, `Tag` | Hecho |
| Contacto | `Button` (tertiary/primary), iconos Carbon | Hecho |
| Recursos | `Search`, `Dropdown`/`MultiSelect`, `Tag`, `ClickableTile`, `Pagination` | Pendiente |
| Caso de estudio | `ProgressIndicator`, `Accordion`, `StructuredList`, `Tag`, `Breadcrumb`, `Tabs`, `CodeSnippet`, `InlineNotification` | Pendiente |
| About | `StructuredList`, `ProgressIndicator`, `Tag`, `Grid` | Pendiente |
| Feedback / estados | `InlineNotification`, `ToastNotification`, `Modal`, `Tooltip`, `DefinitionTooltip`, `SkeletonText` | Pendiente |

## Recomendados por tipo de contenido

- **Narrativa de caso (Discovery → Delivery)**: `ProgressIndicator` (vertical) para las 5 fases; `Accordion` para secciones largas (The Challenge, Design Decisions); `StructuredList` para "problema / respuesta / estado" y métricas.
- **Transparencia y confianza (FitMaterial/ClaraCare)**: `Tag` para fuente del dato (declarado / medido / estimado) y zonas de riesgo; `DefinitionTooltip` para explicar `rulesVersion`, `triggeredRules`, `missingData`; `InlineNotification kind="warning"` para la abstención (no prometer certeza).
- **Impacto y validación**: `StructuredList` para la matriz de métricas/guardrails; `Tag` para estado (dentro / fuera / siguiente fase).
- **Recursos**: `Search` + `Dropdown` (filtro por tipo) + `Tag` (GRATIS/KIT) + `ClickableTile` + `Pagination`.
- **Accesibilidad**: Carbon ya aporta foco visible, roles y teclado; mantener contraste AA en el acento verde sobre fondos claros y oscuros.

## Pendiente / decisiones abiertas

1. Convertir `about`, `work/[slug]`, `recursos` y `lab` a componentes Carbon.
2. Definir si se adopta el modo oscuro Carbon (`g100`) como tema alterno del portafolio.
3. Evaluar `@carbon/charts` para los gráficos de impacto (agrega peso; hoy no hay charts).
4. Confirmar tipografía: si se quiere que Carbon sea 100% fiel, habría que volver a IBM Plex (se descartó para preservar la identidad).
