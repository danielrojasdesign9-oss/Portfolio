# Design Decisions — Daniel Rojas Portfolio

Registro maestro de decisiones de diseño. Cada cambio se documenta con fecha, qué se hizo, por qué, y aprobación.

---

## 2026-09-20: Design System Completo

### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Midnight** | `#1C0B69` | Primario — headers, CTAs principales, links |
| **Indigo** | `#2D318C` | Secundario — hover states, acentos |
| **Merlot** | `#7F333D` | Acento — alerts, errores, acciones de peligro |
| **Silver Mist** | `#CCCCCC` | Neutro — borders, texto suave, separadores |
| **Onyx** | `#1D1D15` | Texto principal, fondos oscuros |

**Por qué**: Midnight/Indigo dan una sensación técnica y moderna. Merlot agrega calidez y contraste. Silver Mist mantiene la neutralidad sin ser blanco puro.

### Tipografía

| Fuente | Uso | Variable CSS |
|--------|-----|--------------|
| **Space Grotesk** | Headings, display, navegación | `--font-heading` |
| **Crimson Pro** | Body text, párrafos, contenido | `--font-body` |
| **JetBrains Mono** | Código, monospace | `--font-mono` |

**Por qué**: Space Grotesk es geométrica y moderna, ideal para headings. Crimson Pro es serif legible, perfecta para contenido largo. Ambas tienen excellent rendering en web.

### Navegación

| Decisión | Estado |
|----------|--------|
| Eliminar SideNav (hamburger) | ✅ Aprobado |
| Todos los links en header desktop | ✅ Aprobado |
| Links en fila debajo del header en mobile | ✅ Aprobado |
| Agregar Lab al menú | ✅ Aprobado |

**Por qué**: El SideNav era innecesario para un sitio con pocos links. Un solo menú simplifica la UX y reduce la carga cognitiva.

### Hero Section

| Decisión | Estado |
|----------|--------|
| Headline: "Hago que las cosas se sientan bien. Y se vean mejor." | ✅ Aprobado |
| Foto circular | ✅ Aprobado |
| Dos CTAs: "About Me" + "Let's Talk" | ✅ Aprobado |

**Por qué**: El headline comunica el valor directamente. La foto circular es personal y accesible. Dos CTAs dan flexibilidad al usuario.

### Lab

| Decisión | Estado |
|----------|--------|
| Sandbox de experimentos | ✅ Aprobado |
| Visible en navegación | ✅ Aprobado |
| Selector de temas de diseño | ✅ Aprobado |

**Por qué**: Lab es donde experimento con nuevas ideas. Debe ser accesible y visible como parte de mi identidad como explorador técnico.

### Botones

| Patrón | Uso | Componente |
|--------|-----|-----------|
| Navegar a página/sección | Links | `CarbonLinkButton` |
| Acción en la misma página | Botones | `CarbonButton` |

**Por qué**: Unificar patrones reduce inconsistencias visuales y facilita el mantenimiento. Carbon Design System ya provee la accesibilidad.

### Design Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary` | `var(--color-midnight)` | Acciones principales |
| `--color-secondary` | `var(--color-indigo)` | Acciones secundarias |
| `--color-accent` | `var(--color-merlot)` | Acentos, errores |
| `--color-text` | `var(--color-onyx)` | Texto principal |
| `--color-border` | `var(--color-silver-mist)` | Bordes, separadores |

**Por qué**: Tokens semánticos permiten cambiar la paleta completa modificando solo las variables raíz. facilita dark mode y theming futuro.

---

## Template para Nuevas Decisiones

```markdown
## YYYY-MM-DD: [Título]

### [Área de Decisión]
| Decisión | Estado |
|----------|--------|
| [Qué se decidió] | [✅ Aprobado / ⏳ Pendiente] |

**Por qué**: [Razón de la decisión]
```
