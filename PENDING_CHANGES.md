# Pendiente de Implementar — Daniel Rojas Portfolio

## Estado Actual
- **Rama**: `design-system/v2`
- **Último pase visual**: 2026-09-22 — capa de forma, motion y pendientes de estructura

---

## Completado

- [x] Navbar tipografía Space Grotesk, fixed 64px, hide on scroll, settings Theme | Language | Contrast
- [x] Contraste AA/AAA con persistencia, tokens más visibles y toast
- [x] Menú móvil: hamburger visible (ya no se oculta con el nav)
- [x] Hero 50/50, foto, headline, CTAs, contact links, motion de entrada
- [x] Home: `#projects`, Contacto editorial, Footer
- [x] Work index `/work` + 3 vistas (default Revista), filtros URL, carousel keys
- [x] Revista: hero full-bleed + spread 7/5 + grilla asimétrica
- [x] About 2 columnas sticky
- [x] Design system switcher (3 sistemas) + docs `/lab/design-system` + fuentes next/font
- [x] Recursos library
- [x] Contacto por Email / LinkedIn / WhatsApp (sin formulario vacío)
- [x] Tax: categoría unificada a “Tax information reporting” en Data JSON (Sanity production no tocado)

## Aún no (a propósito)

- Formulario de contacto con `/api/contact` — se reemplazó por canales reales
- Rename de categorías en Sanity production (regla: no tocar Sanity prod)
- Load more / infinite scroll en Work

## Próximas capas de forma (propuesta)

1. Cursor editorial en revista (número de caso que sigue el hover)
2. Transición de página clip-path al entrar a un caso
3. Parallax suave solo en covers de caso (ya hay un poco en ProjectCover)
4. Sound-off microinteractions en Lab, no en el resto del sitio
