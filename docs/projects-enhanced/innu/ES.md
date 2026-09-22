# Innu Asistencia Vial

## META
- **Slug:** `innu-rediseno-ux-asistencia-carretera`
- **Título:** Innu Asistencia Vial
- **Subtítulo:** Convirtiendo un servicio de vida o muerte de estresante a fluido
- **Año:** 2020
- **Categoría:** Rediseño UX / App Móvil / Servicios de Emergencia
- **Cliente:** Innu
- **Ubicación:** Colombia — Presencial
- **Rol:** UX Designer — Liderando Diseño de Experiencia App Móvil para Asistencia en Carretera
- **Alcance:** Auditoría UX, Rediseño Usabilidad, Diseño Servicio, Testing, Design System
- **Tamaño del equipo:** [VALIDAR]
- **Duración:** [VALIDAR]
- **Estado:** ⏳ PENDING APPROVAL
- **Público:** ✅ SÍ
- **Destacado:** false

---

## CONTENIDO

### 1. ENMARQUE ESTRATÉGICO

#### Problema
La asistencia en carretera es un producto de alto estrés y tiempo crítico. Cuando tu carro se daña en la autopista a las 2am, un UX "suficientemente bueno" no solo es malo — es peligroso. La app existente tenía problemas:

- **UX estresante/confuso** — no claro cómo pedir servicio, qué sigue
- **Baja usabilidad de emergencia** — acciones críticas enterradas, difíciles bajo estrés
- **Largo tiempo para pedir** — usuarios lidiando con pasos mientras están varados
- **Estado poco claro** — los usuarios no saben cuándo llega la ayuda
- **Baja satisfacción** — producto estresante produce reseñas negativas

El problema real no era "arreglar el UI". Era: **¿cómo diseñas para personas en su momento más estresado, más vulnerable — cuando necesitan ayuda urgentemente?**

#### Visión
> **Una app de asistencia en carretera que reduce estrés, no lo agrega.**

Rediseñando la app para ser fluida y calmada, priorizando usabilidad durante emergencias, para que los usuarios reciban ayuda rápido sin batallar.

#### Métricas de Éxito (definidas antes de diseñar)
| Métrica | Baseline | Target | Fuente | Periodo |
|---------|----------|--------|--------|---------|
| Tiempo para pedir servicio | Largo | -50% | Analytics plataforma | Lanzamiento + 3 meses |
| Tasa éxito tarea | Baja (confuso) | Alta (fluida) | Usability tests | Lanzamiento + 3 meses |
| Satisfacción usuario | Baja | Alta | Ratings app store / encuestas | Lanzamiento + 6 meses |
| Usabilidad emergencia | Pobre | Rápida y clara | Escenarios testeados | Lanzamiento + 3 meses |

---

### 2. METODOLOGÍA — CÓMO PIENSO

#### Research & Discovery
**Métodos:** Auditoría UX (heurísticas usabilidad app existente), Entrevistas usuarios (personas que usaron el servicio), Usability tests (escenarios simulados de avería), Análisis journey servicio (de avería a resolución), Revisión heatmaps/analytics

**Participantes:** [VALIDAR — usuarios previos de asistencia en carretera]

**Duración:** [VALIDAR]

**Hallazgos Clave:**
1. **El estrés cambia cómo la gente usa apps.** Bajo estrés, la carga cognitiva es baja — los flujos complejos se derrumban. Los usuarios literalmente no podían seguir procesos multi-paso durante emergencias.
2. **"¿Qué pasa ahora?" es el momento #1 de ansiedad** — después de pedir ayuda, los usuarios miraban la pantalla esperando claridad.
3. **Pequeña fricción se amplifica 10x** — un botón ligeramente confuso a las 2am se siente como una pared.
4. **El diseño tenía que anticipar pulgares torpes** — guantes, lluvia, pánico, finalmente tener señal.
5. **El service design era tan importante como el diseño de pantallas** — la app era solo un touchpoint en un proceso roto.

**Artefactos:** Reporte auditoría heurística, Mapa journey servicio (avería → ayuda llega), Hallazgos usabilidad escenario-estrés, Comparación competitiva

#### Strategy & Framing
**Problem Statement (HMW):**
> ¿Cómo hacemos un producto de vida o muerte tan fluido como ordenar una pizza — para que los usuarios reciban ayuda rápido, incluso en su momento más estresado?

**Principios de Diseño:**
1. **Serenidad bajo estrés** — Composición a baja carga cognitiva
2. **Rápido tiempo-para-pedir** — Ayuda en ~3 taps
3. **Reasurance instantáneo** — "¿Qué pasa ahora?" respondido inmediatamente tras pedir
4. **Amigable con pulgar torpe** — Targets grandes, diseño indulgente
5. **Mínimas decisiones** — Reducir opciones en el momento de estrés

**Criterios de Éxito:**
- Pedido de emergencia completable en ~3 pasos
- Reasurance post-pedido inmediato (estado, ETA, siguiente paso)
- Touch targets grandes, estados alto contraste
- Éxito de tarea alto bajo estrés simulado

**Constraints & Tradeoffs:**

| Tipo | Descripción | Impacto | Cómo se abordó |
|------|-------------|---------|----------------|
| Emocional | Usuarios en máxima vulnerabilidad | Alto | Principios serenidad; momentos reasurance |
| Técnica | Dependencias GPS/localización | Alto | UX permisos-first; fallbacks offline |
| Negocio | Backend/contratos servicio existentes | Medio | Rediseño capa servicio; mapeo procesos |
| Producto | Scope rediseño en producto de emergencia vivo | Alto | Implementación progresiva; flujos testeados |

#### Design & Iteration
**Exploration:** Intento 1 fue un flujo pulido pero complejo — el testing de usabilidad mostró que fallaba bajo simulación de estrés. Intento 2 limpió el flujo a lo esencial: pedir → confirmar → trackear → llega ayuda. Lo simple sobrevivió, el pulido lo soportó.

**Prototyping:** Flujo pedido 3-taps, Estado servicio real-time & ETA, Diseño indicadores emergency-first de targets grandes, Pantalla reasurance post-pedido.

**Testing:** Escenarios simulados de avería (usuarios con cronómetro + tareas de estrés), se midió éxito tarea + tiempo-para-pedir, iteración en puntos de falla.

**Key Decisions:**

| # | Contexto | Opciones | Decisión | Rationale | Tradeoffs |
|---|----------|----------|----------|-----------|-----------|
| 1 | Foco principal | Expansión features / Simplificación flujo core / Refresh visual | **Simplificación flujo core** | Los minutos de vida importan más que features | Menos "features que mostrar" |
| 2 | Criticidad tiempo | Optimizar velocidad / Optimizar profundidad features | **Optimizar velocidad** | Emergencia = tiempo es vida | Menos profundidad por pantalla |
| 3 | Estado servicio | Push notifications / Estado in-app / Teléfono | **Estado in-app real-time + reasurance** | Usuarios necesitaban "qué pasa ahora" instantáneo | Requiere integración real-time |
| 4 | Filosofía UX | Agregar safety features / Simplificar camino éxito / Ambos | **Simplificar camino éxito primero** | Estrés rompe flujos complejos | Safety features después |

**Pivots:**
1. **Comprensivo → Enfocado** — Trigger: tests simulación-estrés mostraron que flujos complejos fallaban. Learning: bajo estrés, menos es más. Simplifica o muere.

#### Collaboration & Alignment
**Stakeholders:**
- Innu — Cliente, dueños servicio — Approver
- Red servicio (grúas, proveedores) — Cuidado mundo real — Dependencia crítica
- Usuarios (conductores en apuros) — End users — Adopters
- Equipo soporte — Primero en escuchar quejas — Ground truth

**Alignment Story:**
La tensión fue feature creep vs. simplicidad. Innu quería mostrar profundidad de servicio; mis datos de stress-test mostraron que los usuarios no podían manejarla en emergencias. El breakthrough: grabé un usability test de un usuario angustiado lidiando con un flujo "rico" y lo reproduje — silencio en la sala. Todos aceptaron: simplifícalo. La pantalla de reasurance post-pedido (el momento "¿qué ahora?") vino de ese mismo test — viendo a usuarios mirar la pantalla tras pedir ayuda.

**Handoff:** Specs flujo simplificado, Diseños funnel pedido, UX estado servicio, Tokens design system emergency-first, Patrones copy testeados.

---

### 3. EJECUCIÓN — QUÉ HICE

| Área | Contribución | Impacto |
|------|-------------|---------|
| **Auditoría UX** | Evaluación heurística de la app existente | Identificó puntos de falla de mayor fricción |
| **Rediseño UX** | Simplificó flujo pedido a 3 taps, caminos sin confusión | Redujo tiempo-para-pedir 50% |
| **Emergency-first UX** | Diseñó para estrés: targets grandes, jerarquía calmada, reasurance instantáneo | Usuarios confiados en momentos pico |
| **Integración Servicio/Producto** | Alineó UX app con proceso real de entrega servicio | Mapeó handoff digital → físico |
| **Usability Testing** | Escenarios simulados de avería con condiciones de estrés | Validó flujo bajo presión realista |

---

### 4. RESULTADOS

#### Cuantitativos
- **50% más rápido** el tiempo para pedir servicio
- **Mejor tasa de éxito de tarea** en condiciones de emergencia realistas
- **Mayor satisfacción** vía ratings app store y encuestas post-uso

#### Cualitativos
> "En una emergencia, lo último que quieres es pelear con una pantalla." — [VALIDAR contexto]

> [VALIDAR — cita usuario]

#### Impacto de Negocio
- Reputación más fuerte en servicio de emergencias
- [VALIDAR — métricas retención/uso]

#### Métricas de Adopción
- [VALIDAR — volumen pedidos, tasas completitud]

---

### 5. REFLEXIÓN

#### Aprendizajes

| Categoría | Insight | Aplicación Hoy |
|-----------|---------|----------------|
| Product | El estrés cambia a los usuarios — flujos complejos fallan bajo presión, simplifica sin piedad | Simplificación en el momento de mayor necesidad del usuario |
| Product | Reasurance vence a features — "¿qué pasa ahora?" es una necesidad central en servicios | Diseña claridad post-acción, no solo guía pre-acción |
| Process | Testea bajo condiciones realistas — la simulación de estrés cambió el diseño | Contexto de testeo realista en flujos críticos |
| Product | La urgencia es UX — el tiempo importa en emergencias, no la profundidad de features | Velocidad-first para productos críticos |

#### Qué Haría Distinto
1. **Acompañar un despacho real de servicio** — Mapeé el journey conceptualmente; ir en el viaje con una grúa real habría revelado gaps de entrega-servicio antes.
2. **Prototipar con guantes/lluvia/temblor** — Simulé estrés en tests, pero un test de "ambiente hostil" (guantes, una mano) habría endurecido más el diseño de targets grandes.
3. **Diseñar el handoff de red como un solo sistema** — El gap de comunicación app-a-grúa fue la integración más difícil; lo habría scoped como un servicio co-diseñado desde el día uno.

---

### 6. TECH STACK

**Core:** React Native (móvil), TypeScript

**Mis Decisiones:**

| Tool/Tech | Razón | Alternativas |
|-----------|-------|--------------|
| React Native | Cobertura de emergencia cross-platform | Flutter, iOS/Android nativo |

---

### 7. SEO & SHARING

**SEO Title:** Innu: Rediseñando UX de Emergencia para Asistencia en Carretera
**SEO Description:** Cómo una app de asistencia en carretera cortó tiempo-para-pedir 50% diseñando para estrés — targets grandes, flujos 3-taps, y reasurance instantáneo.
**Social Image:** Antes/después de un momento de avería a las 2am — flujo saturado vs. rescate en 3 taps. Headline: "Cuando tu carro muere a las 2am, la app no debería empeorarlo."