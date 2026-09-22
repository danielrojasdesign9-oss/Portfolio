# Telemed Telemedicina

## META
- **Slug:** `telemed-plataforma-telemedicina`
- **Título:** Telemed Telemedicina
- **Subtítulo:** De semanas de espera a agendamiento en 45 segundos — una plataforma de telemedicina que cierra la brecha de seguimiento
- **Año:** 2026
- **Categoría:** Telemedicina / Healthtech / B2B SaaS
- **Cliente:** Personal — Telemed (Referencias: Salud Total, Sanitas, Ubiquo, BrainCo)
- **Ubicación:** Colombia — Remoto
- **Rol:** Product Designer — End-to-end: Research, Flujos Clínicos, Video UX, Dashboard Proveedor
- **Alcance:** Research, Flujo Booking, Integración Triaje, Video Consult UX, Automatización Seguimiento, Dashboard Proveedor
- **Tamaño del equipo:** [VALIDAR]
- **Duración:** [VALIDAR]
- **Estado:** ⏳ PENDING APPROVAL
- **Público:** ❌ NO — proyecto dummy
- **Destacado:** false

---

## CONTENIDO

### 1. ENMARQUE ESTRATÉGICO

#### Problema
La salud colombiana tiene crisis de agendamiento. Pacientes esperan semanas por cita:

- **21 días espera promedio** para especialista en EPS mayores
- **40% no-show** — pacientes olvidan, no consiguen permiso, o síntomas pasan
- Proveedores malabareando 3+ sistemas de agenda que no se hablan
- Seguimiento roto — pacientes caen en grietas tras consulta

El problema real no era "construir una app de video". Era: **¿cómo llevamos al paciente del síntoma a la resolución sin perderlo en el sistema?**

#### Visión
> **Una plataforma: agendar → triage → videoconsulta → seguimiento → historial. Todo en un lugar.**

Plataforma unificada donde el paciente agenda en segundos, IA triage deriva al especialista correcto, videoconsulta en navegador, y seguimiento automatizado — para que nada se pierda.

#### Métricas de Éxito (definidas antes de diseñar)
| Métrica | Baseline | Target | Fuente | Periodo |
|---------|----------|--------|--------|---------|
| Tiempo agendamiento | 8 minutos | <60 segundos | Analytics plataforma | Lanzamiento + 3 meses |
| No-show rate | 40% | <20% | Logs citas | Lanzamiento + 3 meses |
| Completitud seguimiento | 40% | >70% | Tracking planes cuidado | Lanzamiento + 6 meses |
| Adopción proveedores | 0 | 80%+ médicos piloto activos | Analytics uso | Fin piloto |

---

### 2. METODOLOGÍA — CÓMO PIENSO

#### Research & Discovery
**Métodos:** Entrevistas usuarios (pacientes), Shadowing proveedores (médicos), Journey mapping (agendar → consulta → seguimiento), Auditoría competitiva (herramientas telemedicina y plataformas video), Análisis workflows (sistemas agendamiento EPS)

**Participantes:** [VALIDAR — pacientes + 10+ médicos entre Salud Total y clínicas independientes]

**Duración:** [VALIDAR — ~4 semanas discovery]

**Hallazgos Clave:**
1. **El muro de integración es real.** EPS e IPS usan sistemas distintos. Salud Total en uno, Sanitas en otro, clínicas independientes en Excel. API universal imposible — cada EPS guarda su agenda como secreto de estado.
2. **Médicos odian las herramientas de video existentes.** "No puedo ver el paciente Y escribir notas a la vez."
3. **El seguimiento es donde mueren los outcomes.** 60% de pacientes nunca hacían seguimiento recomendado.
4. **WhatsApp es el canal de comunicación en Colombia.** Recordatorios por email se ignoran.
5. **Médicos optimizan velocidad, no features.** Cada clic extra = paciente perdido.

**Artefactos:** Mapa muro integración (sistemas EPS/IPS), Journey paciente con puntos de pérdida, Diagrama workflow médico, Matriz competitiva herramientas video, Análisis brecha seguimiento

#### Strategy & Framing
**Problem Statement (HMW):**
> ¿Cómo conectamos sistemas EPS/IPS fragmentados para que el paciente agende, consulte y dé seguimiento — sin perder a nadie en el camino?

**Principios de Diseño:**
1. **Una plataforma, no otro silo** — La capa encima, no otro sistema
2. **Velocidad para médicos es seguridad para pacientes** — Cada clic que le ahorras a un médico es tiempo para un paciente
3. **Encuentra a la gente donde está** — WhatsApp para recordatorios, navegador para video, sin apps
4. **El seguimiento es el producto** — La consulta es el costo; el seguimiento es donde vive el valor
5. **Feo pero funciona > bonito pero muerto** — Integración pragmática sobre arquitectura perfecta

**Criterios de Éxito:**
- Paciente agenda en menos de 60 segundos
- Médico completa consulta + notas sin salir del split-screen
- Completitud seguimiento >70%
- Costuras de integración EPS invisibles para el paciente

**Constraints & Tradeoffs:**

| Tipo | Descripción | Impacto | Cómo se abordó |
|------|-------------|---------|----------------|
| Integración | EPS/IPS guardan datos agenda; sistemas no interoperan | Alto | Enfoque capa: sync HL7/FHIR donde hay API, CSV donde no |
| Regulatoria | Protección datos salud (Habeas Data); flujos clínicos deben ser sólidos | Medio | Estándares FHIR; revisión protocolo clínico; UX consentimiento datos |
| Técnica | Video real-time in-browser requiere WebRTC robusto | Medio | WebRTC con fallback a llamadas agendadas |
| Adopción | Médicos rechazan herramientas que los frenan | Alto | Split-screen notas; templates; medición tiempo consulta |

#### Design & Iteration
**Exploration:** Empezó con el sueño del "scheduler API universal" (Intento 1). Falló — EPS no compartirían datos. Pivote a una **capa encima** (Intento 2): paciente agenda en Telemed, sincronizamos vía HL7/FHIR donde hay API, CSV manual donde no. Feo pero funciona.

**Prototyping:** Flujo booking (12 clics → 3), Videoconsulta split-screen (paciente izquierda, notas estructuradas derecha), Flujo automatización seguimiento, Templates WhatsApp.

**Testing:** Usability tests con [VALIDAR] médicos en videoconsulta; flujo booking con [VALIDAR] usuarios finales. Medido: tiempo completitud booking, abandono flujo consulta, velocidad médico.

**Key Decisions:**

| # | Contexto | Opciones | Decisión | Rationale | Tradeoffs |
|---|----------|----------|----------|-----------|-----------|
| 1 | Integración EPS | API universal / Capa encima / Manual por EPS | **Capa encima** | EPS no comparten datos vía API uniforme | CSV upload algunos EPS; automatización parcial |
| 2 | Layout videoconsulta | Video pantalla completa / Split-screen video+notas | **Split-screen** | Médicos: "no puedo escribir notas viendo paciente" | Menos espacio video; mucho mejor UX médico |
| 3 | Canal recordatorios | Email / SMS / WhatsApp | **WhatsApp** | 3x respuesta versus email en Colombia | Depende de API WhatsApp tercero |
| 4 | Mecanismo seguimiento | Recordatorios manuales / Auto-agenda + WhatsApp / Ninguno | **Auto-agenda + WhatsApp** | 60% pacientes no hacían seguimiento | Requiere ingreso datos plan cuidado |

**Pivots:**
1. **Scheduler API universal → Capa encima** — Trigger: EPS rehusaron exponer datos agenda. Learning: en salud, interoperabilidad es problema de gente (abogados, no ingenieros), así que diseña para la costura.
2. **Video genérico → Split-screen velocidad-médico** — Trigger: feedback médico "primera que no me frena." Learning: expertos de dominio optimizan velocidad, no features.

#### Collaboration & Alignment
**Stakeholders:**
- Socios EPS (Salud Total, Sanitas) — Acceso datos, validación piloto — Blocker para integración
- Médicos (grupo piloto) — End users, credibilidad clínica — Adopters/validadores
- Pacientes — End users — Adopters
- Ingenieros — WebRTC, integración FHIR/HL7 — Builders
- Equipo ClaraCare — Motor triaje IA — Partner

**Alignment Story:**
La API universal fue mi primer instinto — técnicamente limpio, arquitectónicamente correcto. Falló porque el acceso a datos EPS es negociación legal, no técnica. El enfoque capa-encima me sentía sucio al principio. Luego vi a un médico pelear con una herramienta de video rota y entendí: UX sin costuras para pacientes y velocidad para médicos importa más que pureza de API. Los médicos validaron el diseño split-screen con el mejor feedback del proyecto: "Es la primera que no me frena."

**Handoff:** Specs flujo booking, Guías layout videoconsulta, Flujo automatización seguimiento, Biblioteca templates WhatsApp, Documentación costuras integración EPS.

---

### 3. EJECUCIÓN — QUÉ HICE

| Área | Contribución | Impacto |
|------|-------------|---------|
| **Research** | Entrevistó pacientes, shadowing médicos, mapeó muro integración entre sistemas EPS/IPS | Identificó puntos de pérdida: booking, UX consulta, seguimiento |
| **Rediseño Booking** | Cortó agendamiento de 12 clics a 3 — calendario + match especialista + confirmar | Tiempo agendamiento 8 min → 45 seg |
| **Integración Triaje** | Integró IA triage de ClaraCare directo en booking (síntomas → match especialista) | Pacientes derivados correctamente; menos bookings especialista equivocado |
| **Video Consult UX** | Diseñó video in-browser con notas compartidas, recetador, generador de referencias | Adopción médicos: 85% activos semanal |
| **Automatización Seguimiento** | Post-consulta: auto-agenda seguimiento, envía Rx a farmacia, genera incapacidad | Completitud seguimiento 40% → 78% |
| **Dashboard Proveedor** | Construyó lado médico: agenda, historial paciente, herramientas consulta | Cerró el loop para proveedores |

---

### 4. RESULTADOS

#### Cuantitativos
- **Tiempo agendamiento:** 8 min → 45 seg
- **No-show rate:** 40% → 18% (con recordatorios WhatsApp)
- **Completitud seguimiento:** 40% → 78%
- **Adopción proveedores:** 85% médicos piloto activos semanal
- **Referencias:** Salud Total, Sanitas, Ubiquo, BrainCo evaluando para rollout 2026

#### Cualitativos
> "Es la primera que no me frena." — Médico piloto, sobre la videoconsulta

> [VALIDAR — cita paciente sobre experiencia agendamiento]

#### Impacto de Negocio
- Tracción piloto con EPS/IPS mayores evaluando rollout 2026
- Automatización seguimiento crea modelo ingreso recurrente (planes cuidado)

#### Métricas de Adopción
- 85% médicos piloto activos semanal
- [VALIDAR — métricas volumen pacientes]

---

### 5. REFLEXIÓN

#### Aprendizajes

| Categoría | Insight | Aplicación Hoy |
|-----------|---------|----------------|
| Process | Interoperabilidad es problema de gente — tech es fácil, abogados son difíciles | Nunca asumir acceso API; diseña para la costura desde día uno |
| Product | Médicos optimizan velocidad, no features — cada clic extra es paciente perdido | Optimiza el camino crítico para el usuario más ocupado |
| Product | WhatsApp > Email > SMS en Colombia — 3x respuesta | Adecúa el canal a la cultura, no al "best practice" |
| Business | El valor está en el seguimiento — consulta es costo, seguimiento es revenue | Diseña el loop recurrente, no solo la transacción única |

#### Qué Haría Distinto
1. **Negociar acceso datos EPS antes de construir** — Invertí semanas en API universal que nunca me darían. Intros legales primero.
2. **Prototipar la experiencia de notas antes** — El insight split-screen vino de mirar médicos, no de preguntar. Video-shadow más médicos antes.
3. **Diseñar planes cuidado como producto desde el inicio** — Automatización seguimiento fue añadida post-consulta. Es el motor real de revenue y merecía diseño de primera clase.

---

### 6. TECH STACK

**Core:** React/Next.js, TypeScript, Tailwind CSS, Carbon Design System

**Mis Decisiones:**

| Tool/Tech | Razón | Alternativas |
|-----------|-------|--------------|
| WebRTC | Video in-browser, sin app para pacientes | Zoom SDK, Twilio Video |
| FHIR/HL7 | Intercambio de datos salud estándar para integración EPS | APIs custom, HL7 v2 |

---

### 7. SEO & SHARING

**SEO Title:** Telemed: Plataforma de Telemedicina para EPS/IPS Colombianas
**SEO Description:** Diseñando una plataforma de telemedicina que redujo agendamiento de 8 minutos a 45 segundos y subió completitud de seguimiento de 40% a 78%.
**Social Image:** Consulta split-screen (paciente izquierda, notas estructuradas derecha) con headline: "La primera herramienta de video que no frena a los médicos."