# IGO WhatsApp

## META
- **Slug:** `igo-commerce-conversacional-whatsapp`
- **Título:** IGO WhatsApp
- **Subtítulo:** De idea a ingresos reales en 8 semanas, con una restricción radical: sin app, sin web — el commerce viviendo entero dentro del chat
- **Año:** 2026
- **Categoría:** Commerce Conversacional / IA / E-commerce / SaaS
- **Cliente:** IGO (startup, co-fundada)
- **Ubicación:** Remoto
- **Rol:** Co-founder & CPO — Product, Design, Strategy, Delivery
- **Alcance:** Research, Estrategia de Producto, UI Conversacional, Arquitectura Plataforma, Features IA, Delivery Founder-led
- **Tamaño del equipo:** 5 (2 co-founders + 3 contractors)
- **Duración:** Enero – Mayo 2026 (~5 meses)
- **Estado:** ⏳ PENDING APPROVAL
- **Público:** ✅ SÍ
- **Destacado:** false

---

## CONTENIDO

### 1. ENMARQUE ESTRATÉGICO

#### Problema
- **Dónde venden**: estados e hilos de WhatsApp — donde ya están sus clientes
- **Dónde se rompe**: el cliente pregunta "¿lo tienes en otra talla, y cómo pago?" — y todo se cae
- **Ventas fragmentadas**: Fotos de productos en estados, precios escritos a mano, pedidos perdidos en hilos de chat
- **Sin checkout**: El pago ocurre vía links de transferencia pegados uno a uno
- **Sin catálogo**: Comercios escriben a mano la info del producto en cada conversación
- **Sin seguimiento**: Compradores recurrentes y chats abandonados = ingresos perdidos
- **Sin datos**: Los comercios no saben qué vende, qué compró un cliente, ni a quién volver
- **El problema real**: no era "construir un e-commerce" — **los clientes ya están en WhatsApp: darle al comercio una tienda completa, dentro del chat, sin construir ni publicar una app**

#### Visión
> **Cada chat de WhatsApp se convierte en un storefront.**

- **Qué es**: commerce conversacional impulsado por IA — catálogo, pedidos, pagos y seguimiento enteramente dentro de WhatsApp
- **Qué quita**: sin app para el comprador, sin website que construir

#### Métricas de Éxito (definidas antes de diseñar)
| Métrica | Baseline | Target | Fuente | Periodo |
|---------|----------|--------|--------|---------|
| Completitud checkout del cliente | n/a (escrito a mano) | 50%+ de solicitudes convierten | Analytics plataforma | MVP + 1 mes |
| Onboarding comercio | 15–30 min (manual) | < 5 min en chat | Logs sesión | MVP |
| Pilotos con ventas recurrentes | 0 | 50 clientes recurrentes | Datos plataforma | 5 meses |
| Costo MVP | n/a | Vivo bajo $5K/mes | Finanzas | MVP |

---

### 2. METODOLOGÍA — CÓMO PIENSO

#### Research & Discovery
- **Métodos:** entrevistas a comercios (vendedores WhatsApp-first), análisis de hilos de chat (conversaciones de ventas reales), análisis de competidores (soluciones cart-to-chat), research de proveedores de pago (LatAm)
- **Participantes:** 15+ comercios piloto + potenciales comercios
- **Duración:** ~3 semanas (pre-MVP)

**Hallazgos Clave:**
1. **Los comercios no quieren un website.** Lo intentaron; los clientes no salían de WhatsApp. La tienda debía vivir donde está la conversación.
2. **El mindset del checkout**: el comprador en chat está listo para comprar pero la fricción lo mata — teclear datos de tarjeta, copiar links, buscar precios.
3. **El seguimiento es el dinero invisible**: los comercios sabían que existían compradores recurrentes pero no podían recordarlos ni alcanzarlos. El dato de "quién compró qué" era el oro sin explotar.
4. **La IA debía sentirse como un empleado, no un chatbot** — inteligencia para el comercio, no un bot de FAQ.

- **Artefactos:** mapa de dolores del comercio, flujos de conversaciones de venta reales, landscape de flujos de pago, borrador de features IA (búsqueda catálogo, desambiguación de productos, seguimiento)

#### Strategy & Framing
**Problem Statement (HMW):**
> ¿Cómo convertimos el hilo de WhatsApp de un comercio en una tienda completa — catálogo, checkout, pago y seguimiento — para que el comprador nunca salga del chat y el comercio nunca escriba a mano?

**Principios de Diseño:**
1. **El chat es el producto** — cada feature funciona a través de conversación, no pantallas
2. **Cero instalación** — el comprador nunca descarga nada
3. **Back office IA** — la plataforma hace el trabajo, el comercio solo conversa
4. **Velocidad al valor** — comercios piloto viven en semanas, no meses
5. **Build con restricción** — sin app, sin web, presupuesto ajustado; la disciplina crea foco

**Criterios de Éxito:**
- Un comprador puede navegar, preguntar, pagar y completar pedido enteramente en chat
- El comercio administra todo en un hilo sin escribir a mano datos de producto
- El seguimiento de compradores recurrentes es automático
- MVP vivo bajo $5K/mes

**Constraints & Tradeoffs:**

| Tipo | Descripción | Impacto | Cómo se abordó |
|------|-------------|---------|----------------|
| Técnica | Sin app/site; todo en WhatsApp sobre un agente IA | Muy alto | UI conversacional + integración API como todo el producto |
| Financiera | Presupuesto vivo < $5K, sin gran raise | Alto | Stack lean; contractors; delivery founder-led |
| Timeline | ~8 semanas al MVP | Alto | Disciplina de scope estricta; poda de caminos peligrosos |
| Confiabilidad IA | La IA no debe perder ni mal-vender | Alto | Flujos desambiguación producto; guardrails human-in-the-loop |

#### Design & Iteration
- **Exploration:** MVP con pocos comercios piloto, transacciones reales end-to-end
- **Aprendido en vivo:** la IA necesitaba desambiguar productos (conflictos color/talla), manejar edición de carrito, pagos divididos
- **Prototyping:** flujos conversacionales (navegar → preguntar → carrito → checkout → pago → confirmación), búsqueda de catálogo IA, automatización de pedidos y seguimiento
- **Testing:** pilotos en vivo (15+ comercios, dinero real), iteración semanal desde transcripciones de chat, tuning de guardrails IA

**Key Decisions:**

| # | Contexto | Opciones | Decisión | Rationale | Tradeoffs |
|---|----------|----------|----------|-----------|-----------|
| 1 | Distribución | Web storefront + app / Solo chat / Ambos | **Solo chat** | Los clientes nunca salen de WhatsApp; sin instalación | Más difícil de mostrar como "pantalla" |
| 2 | Scope MVP | Suite completa / Loop de compra core primero | **Loop de compra core** | Probar ingresos reales antes que amplitud | Debt de features en bordes |
| 3 | Rol IA | Chatbot FAQ / IA back-office del comercio | **Back-office IA** | Valor para el comercio, no novedad consumidor | Build más pesado |
| 4 | Estrategia pago | Un PSP / Multi-PSP / Opciones divididas | **Divididas/configurables** | Fragmentación pagos LatAm | Esfuerzo integración |

**Pivots:**
1. **Herramienta lead-gen → plataforma commerce** — Trigger: conversaciones tempranas mostraron comercios pegando links de pago manualmente; el valor real era el loop completo, no solo leads. Learning: sigue el flujo del dinero en el chat, no la idea inicial.
2. **Guardrails IA humano-a-humano** — Trigger: primeros pilotos en vivo arriesgaron mal-vender por atributos ambiguos. Learning: desambiguar antes de vender.

#### Collaboration & Alignment
**Stakeholders:**
- Co-founder — CEO/contraparte tech — Socio & builder
- 3 contractors — Ingeniería (IA, integraciones, QA) — Delivery
- 15+ comercios piloto — Primeros usuarios reales, ingresos — Adopters
- Proveedores pago (LatAm) — Habilitadores/bloqueadores — Dependencias

**Alignment Story:**
- **La restricción**: dos co-founders, tres contractors — sin app, sin web, techo de $5K
- **La regla**: cualquier feature que necesitara pantalla moría en review; la que funcionaba "en el hilo" sobrevivía — una regla reemplazó decenas de discusiones
- **La vota**: los comercios piloto pagaron con dinero real — 15+ en vivo, 50 clientes recurrentes al mes cinco

- **Handoff:** specs de flujos conversacionales, guía de comportamiento del agente IA, matriz de integraciones de pago, playbook de onboarding de comercios

---

### 3. EJECUCIÓN — QUÉ HICE

| Área | Contribución | Impacto |
|------|-------------|---------|
| **Research** | Entrevistas comercios + análisis hilos de chat reales | Entendí exactamente dónde mueren las ventas en chat |
| **Estrategia Producto** | Loop de commerce completo en chat: catálogo → checkout → pago → seguimiento | Una "tienda dentro de WhatsApp" |
| **UI Conversacional** | Diseñó todos los flujos de usuario como secuencias de chat, no pantallas | Experiencia comprador zero-install |
| **Features IA** | Búsqueda catálogo + desambiguación producto + seguimiento automatizado | Back office comercio que se siente empleado |
| **Delivery Founder** | Dueño del roadmap, shippeó MVP en ~8 semanas, corrió pilotos | Uso real de pago en ~5 meses |

---

### 4. RESULTADOS

#### Cuantitativos
- **MVP en ~8 semanas**, vivo bajo **$5K/mes**
- **15+ comercios** piloto; **50 clientes** comprando recurrente
- **+36% éxito de tarea** en el flujo core de compra durante iteración
- **-15% fricción onboarding** tras el pase de onboarding conversacional

#### Cualitativos
> [VALIDAR — cita]

> "Ahora vendo sin teclear precios mil veces." — [VALIDAR contexto comercio]

#### Impacto de Negocio
- Ingresos recurrentes de la cohorte piloto; dataset compradores recurrentes como el moat
- Probó el modelo antes de cualquier raise (bootstrapped al launch)

#### Métricas de Adopción
- 15+ pilotos, 50 clientes recurrentes, uso activo semanal en chat
- [VALIDAR — tasa respuesta seguimiento comprador-recurrente]

---

### 5. REFLEXIÓN

#### Aprendizajes

| Categoría | Insight | Aplicación Hoy |
|-----------|---------|----------------|
| Product | El chat es el producto — encuentra al usuario donde está, no lo arrastres a otro lado | Diseña distribution-first |
| Founder | Las restricciones son una feature — $5K + MVP 8 semanas volvieron cada decisión rápida | Usa límites para forzar foco |
| Product | El seguimiento es ingreso invisible — el dato de compradores recurrentes es el moat | Construye retención en el flujo core, no como bolt-on |
| IA | La IA debe desambiguar, no adivinar — un pedido mal-vendido es peor que ningún pedido | Guardrails antes que autonomía |
| Founder | 5 personas pueden shippear commerce real | Equipos pequeños enfocados ganan a grandes cuando el scope es disciplinado |

#### Qué Haría Distinto
1. **Onboarding self-serve del comercio desde el día uno** — Onboarding white-glove puso comercios en vivo, pero no escalaba; el self-onboarding conversacional vino después y funcionó.
2. **Datos de transcripción de chat como producto desde el inicio** — Las transcripciones que mejoraron la IA eran oro evidente para analytics; trátalas como feature desde el día uno.
3. **Split de pagos antes** — La fragmentación de pagos LatAm fue la dependencia más difícil; scoping multi-PSP al MVP habría de-riskeado filings antes.

---

### 6. TECH STACK

- **Core:** WhatsApp API (Business Platform), Node.js, orquestación IA/LLM (agente + guardrails), proveedores de pago (LatAm), SQL para datos de pedidos/catálogo

**Mis Decisiones:**

| Tool/Tech | Razón | Alternativas |
|-----------|-------|--------------|
| WhatsApp Business API | Donde ya están los compradores | SMS/Telegram/app propia |
| Capa orquestación LLM | Inteligencia back-office del comercio | Bots basados en reglas (más débiles) |
| Stack lean | Techo $5K/mes vivo | Infra más grande (más costosa) |

---

### 7. SEO & SHARING

**SEO Title:** IGO: Una Tienda en WhatsApp en 8 Semanas — Commerce Conversacional Que Vende
**SEO Description:** Cómo un equipo de 5 construyó una plataforma de commerce solo-chat — catálogo, checkout, pagos y seguimiento viviendo en WhatsApp — y alcanzó ingresos recurrentes sin website ni app.
**Social Image:** Marco dividido — el caótico hilo de un comercio antes (precios a mano, pedidos perdidos) vs. la tienda-chat de IGO (catálogo, carrito, recibo pagado). Headline: "Tu cliente está en WhatsApp. Pon la tienda ahí."