# Plan de Orquestación Multiagente — Portfolio AI

> Documento operativo para OpenCode.
>
> Proyecto: Portfolio AI de Daniel Rojas  
> Rama base actual: `carbon`  
> Stack: Next.js 16.2.4, React 19, Tailwind 4, Carbon v1.116.0, Sanity, i18n EN/ES/JP  
> Última actualización: 2026-09-21

---

## 1. Objetivo general

Coordinar el rediseño y la evolución del portfolio mediante varios agentes especializados, evitando trabajo duplicado, conflictos de código y publicaciones accidentales.

El resultado esperado es un portfolio con:

- Contenido humano, específico y anti-AI.
- Sanity Studio correctamente estructurado y localizado.
- Navegación refinada con animaciones sutiles.
- Proyectos explorables en dos modos: secuencial y grilla.
- Filtros de proyectos por categoría.
- Contacto reformulado.
- Responsive design sólido.
- Accesibilidad mediante teclado y soporte para `prefers-reduced-motion`.
- Código mantenible, tipado y validado.
- Cero publicaciones externas sin aprobación explícita del usuario.

---

## 2. Principio de autoridad

OpenCode es el **orquestador local de ejecución**, pero no es la autoridad final de publicación.

La autoridad de decisión queda distribuida así:

```text
OpenCode coordina.
Cursor implementa mejoras técnicas.
Figma Make explora y construye propuestas visuales.
Antigravity revisa y supervisa.
Manus dirige, sintetiza y controla calidad.
El usuario aprueba contenido, Sanity y publicación.
```

Ningún agente puede interpretar una tarea local como permiso para publicar en GitHub, modificar producción en Sanity o desplegar el sitio.

---

## 3. Roles de los agentes

### 3.1 OpenCode — coordinador y responsable de contenido/Sanity

OpenCode debe:

- Leer la documentación del proyecto antes de modificar archivos.
- Crear y priorizar subtareas.
- Asignar tareas a Cursor, Figma Make y Antigravity cuando estén disponibles.
- Refinar el contenido de proyectos.
- Mantener la voz humana y anti-AI.
- Actualizar el esquema, queries y documentación relacionada con Sanity.
- Preparar cambios locales y commits descriptivos.
- Coordinar validaciones de build y pruebas.
- Registrar decisiones relevantes.
- Presentar un resumen de cambios, riesgos y pendientes antes de solicitar aprobación.

OpenCode no debe:

- Ejecutar `git push`.
- Ejecutar escrituras en Sanity Production sin aprobación explícita.
- Publicar o desplegar.
- Borrar datos, ramas o documentos sin autorización.
- Reescribir una decisión de diseño aprobada sin documentar el motivo.
- Modificar código de Cursor sin revisar primero el alcance del cambio.

### 3.2 Cursor — implementación técnica

Cursor debe encargarse de:

- Estructura de componentes.
- Animaciones y transiciones.
- Performance de renderizado.
- Accesibilidad técnica.
- Responsive behavior.
- Toggle entre vista secuencial y grilla.
- Filtros por categorías.
- Navegación de proyectos.
- Estados de carga, error y vacío.
- Corrección de bugs encontrados durante la revisión.

Cursor no debe:

- Cambiar contenido editorial sin solicitarlo a OpenCode.
- Cambiar el esquema Sanity sin coordinarlo con OpenCode.
- Ejecutar `git push`.
- Modificar decisiones de marca sin registrarlas.
- Introducir una librería nueva sin justificar peso, mantenimiento y compatibilidad.

### 3.3 Figma Make — exploración visual y pantallas faltantes

Figma Make debe usarse cuando falte una dirección visual clara o una pantalla completa.

Pantallas prioritarias:

- Vista general de proyectos.
- Vista secuencial de proyectos.
- Vista grilla de proyectos.
- Filtros de proyectos.
- Página de detalle de proyecto.
- Nueva sección de contacto.
- Estados responsive de navegación.
- Estados vacíos, carga y error.

Cada propuesta debe entregar, cuando sea posible:

- Jerarquía visual.
- Layout desktop y mobile.
- Estados de interacción.
- Transiciones previstas.
- Componentes reutilizables.
- Medidas y espaciado.
- Assets exportables.
- Notas para implementación en Next.js y Carbon.

Figma Make no debe considerarse la fuente definitiva del código. La implementación final debe ser revisada y adaptada al stack existente.

### 3.4 Antigravity — revisión independiente

Antigravity debe actuar como revisor, no como dueño principal de la implementación.

Debe revisar:

- Bugs funcionales.
- Regresiones.
- Errores de TypeScript.
- Problemas de accesibilidad.
- Responsive design.
- Performance.
- Consistencia con `DESIGN_DECISIONS.md`.
- Consistencia con Carbon y los design tokens.
- Correcta localización EN/ES/JP.
- Navegación de proyectos.
- Animaciones excesivas o poco accesibles.
- Riesgos de publicación o escritura accidental.

El resultado de Antigravity debe clasificarse como:

```text
CRÍTICO       Bloquea build, navegación, datos o seguridad.
IMPORTANTE    Debe corregirse antes de revisión humana.
MENOR         Puede resolverse después sin bloquear la fase.
SUGERENCIA    Mejora opcional.
```

---

## 4. Reglas de Git, Sanity y publicación

### 4.1 Git

Trabajar siempre con ramas de tarea. Ejemplos:

```text
carbon/sanity-content
carbon/sanity-schema
carbon/cursor-interactions
carbon/project-views
carbon/contact-redesign
carbon/figma-screens
carbon/review-fixes
```

Reglas:

1. No trabajar directamente en `main`.
2. No hacer `git push`.
3. No abrir un pull request automáticamente.
4. No borrar ramas sin aprobación.
5. Los commits deben ser pequeños y descriptivos.
6. Antes de cada commit, revisar `git diff`.
7. Separar cambios de contenido, esquema, UI y pruebas.
8. Reportar siempre la rama actual y el estado del árbol de trabajo.

Antes de cualquier acción externa, detenerse y mostrar:

```text
Acción propuesta:
Archivos afectados:
Datos que cambiarían:
Destino:
Riesgos:
Rollback disponible:
Aprobación requerida: sí
```

### 4.2 Sanity

No escribir en Sanity Production hasta que el usuario apruebe explícitamente.

Antes de solicitar aprobación:

- Validar el esquema.
- Revisar queries.
- Generar un resumen de documentos afectados.
- Confirmar que los nuevos proyectos tengan `public: false` por defecto.
- Confirmar que las traducciones EN/ES/JP estén completas o claramente marcadas.
- Preparar un plan de rollback o exportación.

La secuencia permitida es:

```text
Editar localmente
→ Validar schema
→ Generar diff o payload
→ Revisar en Studio/local
→ Mostrar resumen al usuario
→ Esperar aprobación explícita
→ Ejecutar escritura en Sanity
```

### 4.3 Prohibiciones absolutas

No ejecutar sin aprobación:

```bash
git push
npx sanity dataset import ...
npx sanity dataset delete ...
node scripts/seed-personal-projects.mjs
```

Tampoco realizar publicaciones, despliegues, cambios de ownership o modificaciones destructivas.

---

## 5. Documentación que OpenCode debe leer primero

Antes de implementar cualquier cambio, leer completos:

```text
docs/HANDOFF.md
docs/DESIGN_DECISIONS.md
docs/MATRIZ_PROYECTOS.md
docs/CARBON_PORTFOLIO.md
```

También revisar según el área:

```text
docs/projects/*.md
src/sanity/schemaTypes/projectType.ts
src/sanity/schemaTypes/experienceType.ts
src/sanity/schemaTypes/profileType.ts
src/sanity/schemaTypes/resourceType.ts
src/sanity/lib/queries.ts
src/app/work/[slug]/page.tsx
src/lib/dummy-projects.ts
src/lib/utils-locale.ts
src/components/Navbar.tsx
src/app/page.tsx
src/components/ContactSection.tsx
```

No crear documentación adicional si existe un documento apropiado que pueda actualizarse. Si se necesita crear un documento nuevo, solicitar autorización primero.

---

## 6. Estado conocido del proyecto

Según `docs/HANDOFF.md`:

- La rama actual es `carbon`.
- El rediseño visual base ya está avanzado.
- La infraestructura Carbon y los design tokens están implementados.
- La navbar base ya existe.
- El hero, Lab, recursos, botones, contacto y footer ya existen.
- La verificación visual previa fue exitosa en las rutas existentes.
- La migración de Gallery en Sanity está incompleta.
- El build no debe ejecutarse antes de completar la migración Gallery.
- Hay cuatro proyectos dummy pendientes de mejorar.
- Igo necesita pulido final.
- No se debe publicar a GitHub ni escribir en Sanity hasta aprobación.

---

## 7. Plan de producción por fases

### Fase 0 — Preparación y diagnóstico

Responsable principal: OpenCode  
Revisión: Antigravity si está disponible

Tareas:

- Confirmar rama y estado de Git.
- Leer la documentación obligatoria.
- Identificar archivos modificados previamente.
- Confirmar qué agentes están disponibles.
- Crear el tablero de subtareas.
- Separar tareas de contenido, Sanity, UI, implementación y QA.
- No editar todavía hasta producir un diagnóstico breve.

Salida esperada:

```text
- Estado actual.
- Riesgos.
- Dependencias.
- Orden recomendado.
- Lista de archivos que se modificarán.
```

### Fase 1 — Completar migración Gallery de Sanity

Responsable: OpenCode

La tarea prioritaria es terminar la Fase 1.1 documentada en `HANDOFF.md`.

Revisar y completar:

- `src/sanity/schemaTypes/projectType.ts`
- `src/sanity/lib/queries.ts`
- `src/app/work/[slug]/page.tsx`
- `src/lib/dummy-projects.ts`
- Datos existentes en Sanity, pero solo preparar la migración localmente hasta aprobación.

Criterios de aceptación:

- No quedan accesos legacy a `titleEn`, `titleEs` o `titleJp` donde deben usarse campos localizados.
- Gallery funciona con EN/ES/JP.
- Los dummies no rompen el tipado.
- El fallback de locale está documentado.
- `npx sanity schema validate` pasa, si está disponible.
- Solo después de completar esta fase se ejecuta el build.

### Fase 2 — Completar estructura de Sanity

Responsable: OpenCode

Continuar en este orden:

1. Localizar `experience.name` y `experience.role`.
2. Agregar `experience.order`.
3. Agregar SEO a project.
4. Agregar SEO a profile.
5. Agregar `publishDate` a project.
6. Agregar tecnologías como referencias.
7. Normalizar categorías de recursos.
8. Agregar `generateStaticParams` en `/work/[slug]`.
9. Unificar sorting por `publishDate desc`.

Cada subfase debe:

- Modificar el mínimo de archivos.
- Actualizar queries y consumidores.
- Añadir o actualizar tipos.
- Validar antes de continuar.
- Registrar cambios en el resumen de trabajo.

### Fase 3 — Refinar contenido

Responsable: OpenCode con el skill `storyteller`

Prioridad:

1. Pulir `docs/projects/igo.md`.
2. Revisar los otros seis proyectos publicados.
3. Mejorar `fitmaterial.md`.
4. Mejorar `claracare.md`.
5. Mejorar `telemed.md`.
6. Mejorar `fashion-dtc.md`.

Cada proyecto debe conservar:

- Hook inicial.
- Problema real o explícitamente declarado como ficticio.
- Contexto y restricciones.
- Intentos fallidos.
- Decisiones de diseño.
- Rol personal.
- Métricas reales, estimadas o declaradas como hipótesis.
- Aprendizajes.
- Diferencia entre hechos, estimaciones y propuestas.

No inventar clientes, métricas, resultados o validaciones. Si un proyecto es dummy, indicarlo con claridad en la documentación interna y en la presentación pública correspondiente.

### Fase 4 — Reformular contacto

Responsable de definición: OpenCode  
Propuesta visual: Figma Make  
Implementación: Cursor  
Revisión: Antigravity

Objetivo:

- Hacer que el contacto sea más directo, humano y orientado a iniciar una conversación.
- Evitar un formulario genérico sin contexto.
- Mantener un CTA claro.
- Ofrecer WhatsApp y email si las decisiones actuales lo permiten.
- Mantener accesibilidad y buen comportamiento móvil.

La propuesta debe incluir:

- Headline.
- Texto breve de posicionamiento.
- Qué tipo de proyectos acepta Daniel.
- CTA principal.
- CTA alternativo.
- Estados de interacción.
- Mensaje de error y éxito si existe formulario.
- Tratamiento de privacidad y datos si se capturan datos.

No implementar envío real de datos sin confirmar previamente el destino y el mecanismo de privacidad.

### Fase 5 — Nueva experiencia de proyectos

Responsable de propuesta visual: Figma Make  
Responsable de implementación: Cursor  
Coordinación: OpenCode  
Revisión: Antigravity

Se deben implementar dos modos:

#### Modo secuencial

Inspiración conceptual: `https://mengto.com`

Características deseadas:

- Un proyecto destacado a la vez.
- Navegación anterior/siguiente.
- Indicador de posición, por ejemplo `01 / 07`.
- Animación de transición entre proyectos.
- Soporte para mouse, teclado, touch y swipe.
- Información de título, categoría y año visible.
- Soporte para `prefers-reduced-motion`.
- Estado estable si JavaScript tarda en cargar.

#### Modo grilla

Características deseadas:

- Cards o tiles visualmente consistentes.
- Cambio de modo visible y comprensible.
- Orden estable.
- Hover enriquecido sin ocultar información esencial.
- Responsive desktop/tablet/mobile.
- Acceso por teclado.

#### Filtros

Inspiración conceptual: `https://bureaunine.framer.website/work`

Categorías iniciales posibles:

```text
All
Product Design
UX/UI
Strategy
Development
Research
```

Las categorías definitivas deben conciliarse con el modelo Sanity. No duplicar taxonomías sin necesidad.

Requisitos:

- Filtro `All`.
- Estado activo claramente visible.
- Accesibilidad mediante teclado.
- URL compartible cuando sea razonable.
- Estado vacío comprensible.
- Transición que no desoriente.
- No depender exclusivamente del color.

### Fase 6 — Refinar navbar y animaciones

Responsable de implementación: Cursor  
Dirección: OpenCode + usuario  
Revisión: Antigravity

Inspiración conceptual: `https://ethanclark.framer.ai`

Tomar como referencia:

- Navbar limpio.
- Jerarquía clara.
- Proyectos destacados.
- Revelado progresivo.
- Hover y motion con propósito.
- Transiciones refinadas, no decorativas.

No copiar literalmente el sitio de referencia. Mantener:

- Midnight `#1C0B69`.
- Indigo `#2D318C`.
- Merlot `#7F333D`.
- Silver Mist `#CCCCCC`.
- Onyx `#1D1D15`.
- Space Grotesk para headings.
- Crimson Pro para cuerpo.
- Carbon como base de componentes y accesibilidad.

Requisitos técnicos:

- Animaciones cancelables.
- `prefers-reduced-motion`.
- No bloquear la navegación.
- No causar layout shift innecesario.
- No animar grandes cantidades de DOM sin necesidad.
- No cargar imágenes pesadas antes de ser necesarias.

---

## 8. Protocolo de delegación

OpenCode debe delegar una tarea solo cuando tenga:

- Objetivo claro.
- Archivos o área definida.
- Restricciones explícitas.
- Criterios de aceptación.
- Dependencias identificadas.
- Salida esperada.

Formato recomendado:

```markdown
## Tarea: [nombre]

### Objetivo
[Qué debe conseguirse]

### Contexto
[Qué existe actualmente]

### Alcance
[Archivos o componentes permitidos]

### Fuera de alcance
[Qué no debe tocarse]

### Restricciones
[Stack, diseño, accesibilidad, Git, Sanity]

### Criterios de aceptación
- [ ] ...
- [ ] ...

### Verificación
[Comandos o revisión visual esperada]

### Salida
[Resumen, diff, riesgos y pendientes]
```

No asignar dos agentes para editar simultáneamente el mismo archivo.

---

## 9. Protocolo de revisión

Después de cada fase:

1. OpenCode revisa el diff.
2. Se ejecutan validaciones específicas.
3. Antigravity realiza revisión independiente.
4. OpenCode clasifica los hallazgos.
5. Cursor corrige los hallazgos técnicos.
6. OpenCode actualiza documentación si una decisión cambió.
7. Se prepara un resumen para el usuario.

Formato del resumen:

```markdown
## Resumen de fase

### Completado
- ...

### Archivos modificados
- ...

### Validaciones
- Build: pendiente / OK / falló
- TypeScript: pendiente / OK / falló
- Tests: pendiente / OK / falló
- Revisión visual: pendiente / OK / falló
- Accesibilidad: pendiente / OK / falló

### Hallazgos de Antigravity
- Críticos: ...
- Importantes: ...
- Menores: ...

### Decisiones que requieren al usuario
- ...

### Acciones externas bloqueadas
- Git push: bloqueado
- Sanity Production: bloqueado
- Deploy: bloqueado
```

---

## 10. Criterios de calidad global

### Código

- TypeScript estricto y sin errores nuevos.
- Componentes reutilizables.
- Sin duplicación innecesaria.
- Server y Client Components correctamente separados.
- Sin dependencias nuevas no justificadas.
- Imports limpios.
- Sin secretos en el repositorio.

### Diseño

- Coherencia con design tokens.
- Carbon usado como base, no como estética predeterminada.
- Buen contraste.
- Jerarquía visual clara.
- No depender exclusivamente del hover.
- Responsive en los tamaños principales.

### Accesibilidad

- Navegación por teclado.
- Foco visible.
- Labels y nombres accesibles.
- Semántica correcta.
- Contraste suficiente.
- Soporte para reduced motion.
- Estados de error comprensibles.

### Performance

- Imágenes optimizadas.
- No cargar todas las galerías innecesariamente.
- Evitar animaciones costosas.
- No introducir layout shift.
- Revisar bundle si se agregan librerías.

### Contenido

- Voz humana.
- No afirmar datos inventados.
- Diferenciar hechos, estimaciones y objetivos.
- Mantener consistencia EN/ES/JP.
- Evitar frases genéricas de marketing.

---

## 11. Orden inmediato de ejecución

Comenzar en este orden exacto:

### Tarea 1 — Diagnóstico

- Leer documentación obligatoria.
- Confirmar rama.
- Confirmar estado de Git.
- Enumerar archivos modificados.
- Presentar riesgos y plan de subtareas.
- No ejecutar cambios todavía.

### Tarea 2 — Fase 1.1 de Gallery

- Completar migración localizada.
- Actualizar `work/[slug]/page.tsx`.
- Actualizar `dummy-projects.ts`.
- Actualizar consumidores y tipos necesarios.
- Validar schema.
- Ejecutar build únicamente después de completar la migración.

### Tarea 3 — Revisión independiente

Solicitar revisión de Antigravity sobre:

- Compatibilidad de locale.
- TypeScript.
- Sanity queries.
- Regresión en detalle de proyecto.
- Dummies.

### Tarea 4 — Contenido

- Pulir Igo.
- Preparar diagnóstico de los cuatro dummies.
- No publicar contenido.

### Tarea 5 — Diseño de experiencia de proyectos

- Preparar brief para Figma Make.
- Proponer vista secuencial, grilla y filtros.
- No implementar antes de acordar la dirección visual.

### Tarea 6 — Implementación

- Delegar a Cursor la implementación aprobada.
- Separar navbar, vistas, filtros y contacto en tareas independientes.

### Tarea 7 — QA y aprobación

- Solicitar auditoría de Antigravity.
- Corregir bloqueantes.
- Ejecutar validaciones finales.
- Presentar cambios al usuario.
- Esperar aprobación antes de GitHub, Sanity o deploy.

---

## 12. Estado de aprobación

Usar estas etiquetas en los documentos y reportes:

```text
[LOCAL]       Cambio solamente local.
[REVISIÓN]    Listo para revisión técnica o visual.
[USUARIO]     Requiere decisión del usuario.
[APROBADO]    El usuario aprobó el cambio.
[BLOQUEADO]   No ejecutar todavía.
[PUBLICADO]   Solo usar después de confirmación y acción externa realizada.
```

Por defecto, todo cambio nuevo empieza como `[LOCAL]`.

---

## 13. Regla final

La producción puede avanzar de forma autónoma en local, pero las acciones externas permanecen bloqueadas.

OpenCode debe detenerse y solicitar aprobación explícita antes de:

- Hacer push.
- Crear o fusionar cambios remotos.
- Escribir en Sanity Production.
- Publicar o desplegar.
- Borrar datos.
- Modificar permisos, credenciales o configuración de producción.

El objetivo no es solo terminar rápido, sino mantener un proceso reversible, trazable y bajo control del usuario.
