# Fashion DTC

## META
- **Slug:** `fashion-dtc-ecommerce-es`
- **Título:** Fashion DTC
- **Subtítulo:** Un storefront de moda que habla el lenguaje de la marca — energía editorial, disciplina de conversión
- **Año:** 2021
- **Categoría:** E-commerce / Moda / Direct-to-Consumer
- **Cliente:** [VALIDAR — marca de moda]
- **Ubicación:** Remoto
- **Rol:** Diseñador UX/UI — E-commerce de Moda & Rediseño de Plataforma
- **Alcance:** Diseño UX/UI, Design System, Prototipado, Testing, Handoff Diseño
- **Tamaño del equipo:** [VALIDAR]
- **Duración:** [VALIDAR]
- **Estado:** ⏳ PENDING APPROVAL
- **Público:** ❌ NO
- **Destacado:** false

---

## CONTENIDO

### 1. ENMARQUE ESTRATÉGICO

#### Problema
El e-commerce de moda vive o muere en el momento en que un shopper pasa de "me encanta esto" a "¿dónde está el botón de comprar?" La plataforma tenía problemas:

- **Diseño genérico, basado en template** — el storefront no se sentía como la marca; la identidad se perdía en defaults de e-commerce
- **Fricción de browse-a-compra** — demasiados pasos entre inspiración y checkout
- **Sobrecarga de catálogo** — shoppers abrumados; sin camino inteligente del deseo al producto
- **Colapso mobile-first** — los layouts "lookbook" de desktop fallaban en teléfonos donde ocurre la mayoría de las compras
- **Tensión marca vs. conversión** — cuanto más "moda" se veía, menos convertía

El problema real no era "páginas de producto más bonitas". Era: **¿cómo haces una experiencia de compra que se sienta como la marca y aún así convierta como máquina?**

#### Visión
> **Un storefront que se siente editorial, pero convierte con disciplina.**

E-commerce de moda donde cada pantalla lleva energía de marca — mientras el camino de inspiración a compra se mantiene corto, claro y mobile-perfecto.

#### Métricas de Éxito (definidas antes de diseñar)
| Métrica | Baseline | Target | Fuente | Periodo |
|---------|----------|--------|--------|---------|
| Conversión móvil | Baja (layouts desktop) | Mejorada significativamente | Analytics | Lanzamiento + 3 meses |
| Pasos browse-a-cart | Demasiados | Reducidos | Funnel analytics | Lanzamiento + 3 meses |
| Percepción marca ("on-brand") | Genérica | Reconociblemente branded | Encuestas usuarios | Lanzamiento + 3 meses |
| Tasa retorno | n/a | Estable/menor (mejor entendimiento producto) | Datos pedidos | Lanzamiento + 6 meses |

---

### 2. METODOLOGÍA — CÓMO PIENSO

#### Research & Discovery
**Métodos:** Auditoría marca (identidad, tono), Auditoría UX (storefront existente), Entrevistas shoppers, Análisis competitivo (DTC premium fashion), Review funnel analytics, Usability testing

**Participantes:** [VALIDAR — shoppers, stakeholders marca]

**Duración:** [VALIDAR]

**Hallazgos Clave:**
1. **Los shoppers compran el mood primero, el producto después.** La energía del sitio igualaba al producto — cuando se sentía genérico, la confianza caía.
2. **El móvil era la puerta de entrada, pero el diseño era desktop-first.** Los layouts lookbook colapsaban en stacks confusos en teléfonos.
3. **El botón de compra tenía un problema de visibilidad.** En diseños "de moda", los CTAs quedaban enterrados bajo el styling editorial.
4. **Profundidad de catálogo sin guía = abandono.** Demasiadas opciones sin camino = parálisis de decisión.

**Artefactos:** Auditoría estilo marca, Mapa journey shopper, Análisis caída funnel, Notas workshop principios de diseño

#### Strategy & Framing
**Problem Statement (HMW):**
> ¿Cómo construimos un storefront de moda que lleve energía de marca en cada pantalla mientras mantiene el camino del deseo al checkout corto y obvio?

**Principios de Diseño:**
1. **Energía editorial, disciplina de conversión** — la belleza sirve a la compra
2. **El móvil es la verdad** — diseña para el teléfono primero
3. **Muestra el camino del deseo** — ruta clara y guiada de inspiración a producto
4. **El CTA siempre gana la jerarquía** — el botón de compra nunca se esconde
5. **Marca, no template** — cada superficie lleva identidad

**Criterios de Éxito:**
- Checkout alcanzado desde cualquier pantalla de producto en ≤ 2 taps
- Conversión móvil mejorada vs. baseline
- Shoppers califican la experiencia como "on-brand"
- Menor caída en funnel

**Constraints & Tradeoffs:**

| Tipo | Descripción | Impacto | Cómo se abordó |
|------|-------------|---------|----------------|
| Marca | Estándares editoriales vs. patrones conversión | Alto | Layouts híbridos: módulos editoriales sobre espina de conversión |
| Negocio | Restricciones plataforma existente | Medio | Rediseño progresivo dentro de la plataforma |
| Producto | Amplitud catálogo vs. foco | Medio | Caminos colección curada; defaults smart |
| Deadline | Presión handoff diseño-a-dev | Medio | Design system ajustado + specs documentadas |

#### Design & Iteration
**Exploration:** Intento 1 fue lookbook puramente editorial — hermoso, pero el funnel analytics mostró caída en páginas de producto (CTA escondido). Intento 2 unió fotografía editorial con una capa de conversión siempre visible.

**Prototyping:** Flujo lookbook-a-shop, PDP mobile-first con CTA sticky, Caminos colección con intención, Checkout de pasos reducidos.

**Testing:** Usability tests (browse → cart → checkout), A/B en colocación CTA, validación mobile-first.

**Key Decisions:**

| # | Contexto | Opciones | Decisión | Rationale | Tradeoffs |
|---|----------|----------|----------|-----------|-----------|
| 1 | Enfoque visual | Puro editorial / Pura conversión / Híbrido | **Híbrido** | Energía marca + espina conversión | Más complejo de mantener |
| 2 | Estrategia móvil | Responsive desktop / Mobile-first | **Mobile-first** | La mayoría llega por teléfono | Desktop necesita segundo pase |
| 3 | Estilo CTA | CTA minimalista fashion / CTA sticky siempre visible | **CTA sticky siempre visible** | El botón de compra nunca esconde | Menos "minimal" |
| 4 | Presentación catálogo | Grid completo / Caminos curados / Ambos | **Caminos curados + grid completo** | Guía reduce parálisis | Esfuerzo curación |

**Pivots:**
1. **Puro editorial → Híbrido** — Trigger: caída de funnel en páginas de producto. Learning: la belleza editorial nunca debe pelear contra la compra.

#### Collaboration & Alignment
**Stakeholders:**
- Marca (marketing/creative) — Dueña identidad — Guardarraíles creativos
- Equipo e-commerce — Targets conversión — Dueños negocio
- Ingeniería — Restricciones plataforma — Builders
- Shoppers — End users — Adopters

**Alignment Story:**
Marketing quería "una revista". El lead de e-commerce quería "conversión a toda costa". Ambos lados trataban el objetivo del otro como el enemigo. La resolución fue una espina híbrida: fotografía editorial y storytelling en la parte alta del journey, disciplina de conversión (CTA sticky, pasos reducidos, jerarquía clara) en la parte baja. Un solo lenguaje visual, dos trabajos — y el funnel analytics probó que ambos podían vivir en la misma pantalla.

**Handoff:** Design system mobile-first, Specs PDP/PLP/checkout, Guías jerarquía CTA, Biblioteca módulos editoriales para marketing.

---

### 3. EJECUCIÓN — QUÉ HICE

| Área | Contribución | Impacto |
|------|-------------|---------|
| **Diseño UX/UI** | Storefront híbrido editorial + conversión | Reconocimiento marca + mejora conversión móvil |
| **Design System** | Sistema de moda mobile-first | Identidad consistente entre pantallas |
| **Prototipado** | Flujos lookbook-a-shop y sticky-CTA | Validó la tesis híbrida pre-build |
| **Testing** | Usabilidad browse/cart/checkout + A/B CTA | Capturó el problema de visibilidad CTA temprano |
| **Handoff Diseño** | Specs documentadas + biblioteca módulos | Implementación dev más rápida y limpia |

---

### 4. RESULTADOS

#### Cuantitativos
- **Conversión móvil mejorada** vs. baseline era-desktop
- **Menos pasos browse-a-cart** en el funnel
- Shoppers calificaron la experiencia como **"on-brand"**

#### Cualitativos
> [VALIDAR — cita shopper]

> "Por fin se siente como comprar la marca, no un template con el logo de la marca encima." — [VALIDAR contexto]

#### Impacto de Negocio
- [VALIDAR — ventas, tasa retorno, métricas percepción marca]

#### Métricas de Adopción
- [VALIDAR — conversión funnel, share móvil]

---

### 5. REFLEXIÓN

#### Aprendizajes

| Categoría | Insight | Aplicación Hoy |
|-----------|---------|----------------|
| Product | Editorial y conversión no son enemigos — layouts híbridos sirven a ambos | Diseña la "espina" (conversión) y la "piel" (marca) juntas |
| Product | La visibilidad CTA vence al styling siempre — el minimalismo fashion pierde ventas | Nunca dejes que la jerarquía entierre el botón de compra |
| Process | El funnel analytics impulsó el pivot — el reporte de caída zanjó una discusión creativa | Lleva datos a los reviews creativos |
| Product | Mobile-first es la única verdad en retail | Phone-first, siempre |

#### Qué Haría Distinto
1. **Kickoff creativo+analytics conjunto** — Marketing y el equipo e-commerce se alinearon tarde; un dashboard de funnel compartido desde el día uno habría evitado el framing "revista vs. máquina".
2. **A/B los módulos editoriales antes** — El híbrido se validó tarde; testear módulos por separado (hero, lookbook, PDP) nos habría dicho qué elementos de marca convierten.
3. **Curar el catálogo con merchandising** — Los caminos curados llegaron tras el launch; curación guiada por merchandising desde el inicio habría reducido caída inicial.

---

### 6. TECH STACK

**Core:** React/Next.js, TypeScript, Tailwind CSS

---

### 7. SEO & SHARING

**SEO Title:** Fashion DTC: Energía Editorial con Disciplina de Conversión
**SEO Description:** Cómo un storefront de moda se volvió revista y máquina a la vez — diseño mobile-first, CTAs sticky, y un híbrido que subió conversión sin matar la marca.
**Social Image:** Split — spread de lookbook editorial vs. la misma pantalla con un CTA sticky claro. Headline: "El botón de compra nunca se esconde."