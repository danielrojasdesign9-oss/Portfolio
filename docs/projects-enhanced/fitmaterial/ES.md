# FitMaterial Materiales

## META
- **Slug:** `fitmaterial-plataforma-materiales-construccion-es`
- **Título:** FitMaterial Materiales
- **Subtítulo:** Digitalizando una industria polvorienta para que los constructores reciban materiales a tiempo, siempre
- **Año:** 2021
- **Categoría:** E-commerce / Herramientas / Distribución
- **Cliente:** FitMaterial
- **Ubicación:** Colombia — Presencial
- **Rol:** Product Designer — Liderando Diseño de Producto para Plataforma de E-commerce de Materiales de Construcción
- **Alcance:** Research, Diseño UX/UI, Design System, Prototipado, Usability Testing
- **Tamaño del equipo:** [VALIDAR]
- **Duración:** [VALIDAR]
- **Estado:** ⏳ PENDING APPROVAL
- **Público:** ❌ NO
- **Destacado:** false

---

## CONTENIDO

### 1. ENMARQUE ESTRATÉGICO

#### Problema
En FitMaterial, el proceso para ordenar materiales de construcción era una pesadilla manual basada en papel:

- **Proceso de pedido manual** — constructores llamaban, enviaban email, o visitaban tiendas; los pedidos se escribían a mano
- **Propenso a errores**: errores en pedidos, retrasos, pedidos perdidos entre traspasos
- **Lento e ineficiente**: sin pedido online, sin catálogos, sin transparencia de precios
- **Caos en supply chain**: niveles de stock desconocidos hasta que era tarde
- **Sin analytics**: FitMaterial no podía ver qué vendía, qué no

Mientras tanto, la construcción es time-critical: una cuadrilla esperando materiales es lo más caro que hay en una obra. El problema real no era "construir una tienda web". Era: **¿cómo tomas un proceso de venta manual basado en confianza y lo haces digital sin perder las relaciones y la confiabilidad que hacen volver a los constructores?**

#### Visión
> **Una plataforma de materiales de construcción que hace ordenar tan confiable como un apretón de manos — pero 10x más rápido.**

Una plataforma online donde constructores navegan catálogos, obtienen precios transparentes, ordenan en minutos y trackean entrega — mientras FitMaterial gana visibilidad en tiempo real de stock y demanda.

#### Métricas de Éxito (definidas antes de diseñar)
| Métrica | Baseline | Target | Fuente | Periodo |
|---------|----------|--------|--------|---------|
| Precisión pedidos | Baja (errores manuales) | Alta (validación digital) | Logs pedidos | Lanzamiento + 3 meses |
| Tiempo para ordenar | Largo (manual) | Corto (online) | Analytics plataforma | Lanzamiento + 3 meses |
| Satisfacción cliente | Moderada | Alta | Encuestas | Lanzamiento + 6 meses |
| Crecimiento ventas | Plano | Incrementado | Datos plataforma/CRM | Lanzamiento + 12 meses |

---

### 2. METODOLOGÍA — CÓMO PIENSO

#### Research & Discovery
**Métodos:** Entrevistas stakeholders (management FitMaterial), Entrevistas usuarios (constructores, procurement), Auditoría proceso pedidos (rastro papel), Análisis competitivo (e-commerce construcción), Usability tests baseline

**Participantes:** [VALIDAR — constructores, personal procurement, equipo FitMaterial]

**Duración:** [VALIDAR]

**Hallazgos Clave:**
1. **La confianza es la moneda** — los constructores volvían al mismo proveedor por años por confiabilidad y relación, no precio. La plataforma debía preservar eso.
2. **"Lo necesito ahora" es la norma** — la construcción es time-critical. Una cuadrilla esperando = dinero quemándose. La velocidad importaba más que nada.
3. **El rastro en papel escondía la verdad** — nadie sabía realmente niveles de stock, estado de pedidos, o qué vendía, hasta que surgía como queja.
4. **Los compradores no siempre son digital-first** — muchos constructores ordenan desde un teléfono en un sitio embarrado a las 6am. El UX tenía que ser indulgente, claro y rápido en pantallas pequeñas.

**Artefactos:** Mapa journey proceso pedido, Auditoría datos stock/pedidos, Matriz features competitiva, Reporte dolores con costo-tiempo

#### Strategy & Framing
**Problem Statement (HMW):**
> ¿Cómo llevamos un negocio de materiales manual y basado en papel al mundo online — mejorando velocidad y precisión sin romper la confianza que mantiene leales a los constructores?

**Principios de Diseño:**
1. **Confiabilidad primero** — pedidos precisos, estado claro, expectativas de entrega realistas
2. **Velocidad para ordenar** — los constructores no tienen tiempo; ordenan en minutos, no llamadas
3. **Transparencia construye confianza** — precios reales, stock real, sin sorpresas
4. **Indulgente por diseño** — quick-order paths para ambientes hostiles (pantallas pequeñas, guantes, madrugadas)
5. **La plataforma sirve a ambos lados** — constructores ganan conveniencia; FitMaterial gana datos y control

**Criterios de Éxito:**
- Pedido online en minutos desde un teléfono
- La validación digital corta errores manuales
- Stock y estado de pedido en tiempo real en ambos lados
- Ventas y visibilidad analytics para FitMaterial

**Constraints & Tradeoffs:**

| Tipo | Descripción | Impacto | Cómo se abordó |
|------|-------------|---------|----------------|
| Negocio | Proceso de venta manual existente y relaciones | Alto | Flujos digital-first que preservan relación |
| Técnica | Integración sistema inventario | Alto | Sync stock real-time; plan migración datos |
| Cultural | Compradores no nativos digitales | Medio | UX indulgente; diseño phone-first |
| Producto | Plataforma sirve dos audiencias | Medio | Dividir flujos por rol (constructor vs. staff) |

#### Design & Iteration
**Exploration:** Intento 1 reflejó el patrón catalog-heavy del e-commerce de consumo — los constructores lo odiaron: demasiado browsing, poco "dame el precio y el camión". Intento 2 se apoyó en quick-order: buscar, precio, ordenar en menos de un minuto.

**Prototyping:** Flujo quick-order, catálogo con claridad precio-por-unidad, tracker estado pedido, vistas stock (comprador + staff), layout mobile-first.

**Testing:** Usability tests con constructores en escenarios de pedido reales; se midió tiempo-para-ordenar y tasa error; iteración en el shortcut quick-order.

**Key Decisions:**

| # | Contexto | Opciones | Decisión | Rationale | Tradeoffs |
|---|----------|----------|----------|-----------|-----------|
| 1 | Modelo pedido | Full browsing catálogo / Shortcut quick-order / Ambos | **Quick-order primero** | Constructores saben qué necesitan; quieren precio + camión | Menos descubrimiento producto |
| 2 | Experiencia teléfono | Desktop-first / Mobile-first / Igual | **Mobile-first** | Los pedidos pasan en obra, en el campo | Más esfuerzo diseño pantallas pequeñas |
| 3 | Display stock | Ocultar stock / Stock real-time / Solo niveles | **Stock real-time (role-scoped)** | Constructores planean llegadas; staff gestiona supply | Requiere integración inventario |
| 4 | Migración | Big-bang / Gradual (piloto) / Paralelo | **Gradual manteniendo canales existentes** | No romper pedidos de confianza existentes | Dos canales a mantener |

**Pivots:**
1. **Catalog-heavy → Quick-order** — Trigger: constructores en tests rechazaron el browsing; sabían lo que querían. Learning: para compradores expertos, velocidad vence descubrimiento.

#### Collaboration & Alignment
**Stakeholders:**
- Management FitMaterial — Cliente, poder de decisión — Approver
- Staff ventas/fulfillment — Dueños proceso existente, operarán la plataforma — Usuarios clave
- Clientes constructores — Ordenar ahora desde el campo — Adopters
- Equipo inventario/logística — Datos stock, entrega — Dependencias

**Alignment Story:**
La tensión más profunda fue relación vs. digitalización. El staff de ventas temía que la plataforma saltara sus relaciones personales con constructores; los constructores temían que un sistema "frío" rompiera la confiabilidad de la que dependían. La resolución: la plataforma aumentó, no reemplazó — el staff obtuvo un dashboard, los constructores mantuvieron a una persona vía chat/teléfono junto al pedido digital. Misma confiabilidad, más rápida y con rastro. Esa decisión de "ambos canales" fue la que mantuvo a todos en la mesa.

**Handoff:** Specs flujo quick-order, Design system mobile-first, Diseños tracker stock/pedido, Diseños dashboard staff, Plan migración.

---

### 3. EJECUCIÓN — QUÉ HICE

| Área | Contribución | Impacto |
|------|-------------|---------|
| **Research** | Auditoría proceso pedidos + entrevistas constructores | Localizó dónde costaba más el proceso manual (tiempo, errores) |
| **Diseño UX/UI** | Plataforma quick-order: buscar, precio, ordenar, trackear | Pedidos en minutos desde un teléfono |
| **Design System** | Sistema mobile-first para una industria real polvorienta | UI consistente, rápida, indulgente |
| **Prototipado** | Testeó flujo quick-order en escenarios de pedido reales | Validó velocidad + precisión antes de construir |
| **Usability Testing** | Constructores en condiciones de campo | Capturó fallas móvil/ambiente-hostil temprano |

---

### 4. RESULTADOS

#### Cuantitativos
- **Menor tiempo para ordenar** vs. proceso manual (teléfono/papel)
- **Menos errores de pedido** a través de validación digital
- **Mayor crecimiento de ventas** desde una compra más fluida
- **Mejor satisfacción cliente** vía encuestas

#### Cualitativos
> "Antes llamaba, esperaba en la línea, y rezaba por el camión. Ahora chequeo y ordeno en dos minutos." — [VALIDAR contexto]

> [VALIDAR — cita]

#### Impacto de Negocio
- FitMaterial ganó visibilidad real-time de stock y demanda
- [VALIDAR — volumen pedidos, scores satisfacción]

#### Métricas de Adopción
- [VALIDAR]

---

### 5. REFLEXIÓN

#### Aprendizajes

| Categoría | Insight | Aplicación Hoy |
|-----------|---------|----------------|
| Product | Usuarios expertos no necesitan descubrimiento — constructores saben qué quieren; dales precio + velocidad | Diseña para el job-to-be-done, no el patrón de browsing |
| Product | Mobile-first para trabajo de campo — la oficina es una cabina de camión o un sitio embarrado | Diseña para el ambiente real |
| Product | La confianza es una feature — la confiabilidad y un humano en el loop mantuvieron la lealtad | Preserva el toque humano en flujos digitalizados |
| Product | Dos audiencias, un sistema — staff y compradores necesitan vistas diferentes de los mismos datos | UX role-scoped sobre datos compartidos |
| Negocio | Digitaliza sin romper ingresos existentes — gradual vence big-bang | Canales paralelos de-rieskean migración |

#### Qué Haría Distinto
1. **Empezar con la tesis quick-order** — El v1 catalog-heavy costó una ronda de iteración que pude haber ahorrado preguntando una cosa temprano: "¿los constructores navegan o ya saben?"
2. **Field-test antes** — Escenarios teléfono-con-guantes se testearon tarde; testear en ambientes hostiles desde el primer prototipo habría moldeado targets y contraste antes.
3. **Dashboard staff en scope del MVP** — El lado staff se lanzó después del lado comprador; ambos debían diseñarse juntos para evitar flujos de datos asimétricos.

---

### 6. TECH STACK

**Core:** React/Next.js, TypeScript, Tailwind CSS

---

### 7. SEO & SHARING

**SEO Title:** FitMaterial: Llevando Online el Pedido de Materiales de Construcción
**SEO Description:** Cómo un proveedor de materiales basado en papel se digitalizó con una plataforma quick-order mobile-first — pedidos más rápidos, menos errores, y visibilidad real de stock.
**Social Image:** Dos frames — la forma vieja (teléfono, papel, botas embarradas) vs. la forma nueva (quick-order de dos minutos desde el teléfono). Headline: "Cuadrilla esperando es dinero quemándose."