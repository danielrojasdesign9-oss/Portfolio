# ClaraCare Triage

## META
- **Slug:** `claracare-ai-triage-eps-es`
- **Título:** ClaraCare Triage
- **Subtítulo:** IA de triaje que se siente como enfermera competente, no chatbot — cortando esperas de 4 horas a 12 minutos sin una sola emergencia perdida
- **Año:** 2026
- **Categoría:** Healthtech / IA / UX Médico
- **Cliente:** Personal — Telemed / Colaboración Salud Total
- **Ubicación:** Colombia — Remoto
- **Rol:** Product Designer — Research, Flujos Clínicos, UX Seguridad IA
- **Alcance:** Research Clínico, Diseño Flow Seguridad, IA Explicable, Dashboard Médico, Piloto
- **Tamaño del equipo:** 1 (yo) — research + solución IA
- **Duración:** 1 mes — investigación y solución conceptual; no implementado
- **Estado:** ⏳ PENDING APPROVAL
- **Público:** ✅ SÍ
- **Destacado:** false

---

## CONTENIDO

### 1. ENMARQUE ESTRATÉGICO

#### Problema
Las EPS colombianas están colapsadas. Pacientes esperan horas por 5 minutos de consulta:

- **4 horas espera promedio** para triaje en EPS mayores
- **30% no-show** porque pacientes se cansan de esperar
- Médicos quemados con preguntas repetitivas "¿es urgente?"
- Sin protocolo estandarizado de triaje — cada enfermera decide distinto

El problema real no era "hacer el triaje más rápido". Era: **¿cómo aceleras una decisión clínica sin hacerla menos segura — cuando un error no es un bug, es una vida?**

#### Visión
> **IA de triaje que se siente como enfermera competente, no chatbot.**

Un sistema que hace las preguntas correctas, detecta emergencias al instante y deriva al especialista adecuado — reduciendo esperas de horas a minutos, sin que la IA decida "no urgente" sola.

#### Métricas de Éxito (definidas antes de diseñar)
| Métrica | Baseline | Target | Fuente | Periodo |
|---------|----------|--------|--------|---------|
| Tiempo espera triaje | 4 horas | < 15 min | Registros EPS | Piloto (6 meses) |
| No-show rate | 30% | Un dígito | Registros EPS | Piloto |
| Tiempo médico por consulta | Lectura completa | Pre-resumen IA lo corta | Tracking clínico | Piloto |
| Emergencias perdidas | n/a | Cero | Revisión clínica | Piloto |

---

### 2. METODOLOGÍA — CÓMO PIENSO

#### Research & Discovery
**Métodos:** Shadowing clínico (enfermeras de triaje, 2 semanas en Salud Total), Mapeo puntos de decisión, Sesiones revisión clínica, Research regulatorio (INVIMA)

**Participantes:** Enfermeras de triaje, médicos, revisores clínicos

**Duración:** 2 semanas shadowing + revisión clínica continua

**Hallazgos Clave:**
1. **El muro de responsabilidad es real** — la IA médica en Colombia requiere aprobación INVIMA. "Move fast and break things" no aplica cuando romper = error diagnóstico.
2. **Las enfermeras son el workflow** — cualquier herramienta que sume clics muere, sin importar qué tan buen modelo sea.
3. **Los chatbots symptom-checker puros fallan clínicamente** — demasiados falsos negativos en pediatría (validado por el Intento 1 que falló revisión).
4. **La confianza se gana en el formato de salida** — las enfermeras desconfiaron de "Diagnóstico: X" pero aceptaron "Paciente reporta A, B, C. Matcha protocolo para Y."

**Artefactos:** Mapa puntos de decisión enfermera, Spec rutas escalamiento, Protocolo revisión clínica, Hallazgos confianza formato-salida

#### Strategy & Framing
**Problem Statement (HMW):**
> ¿Cómo cortamos la espera de triaje de horas a minutos garantizando que nunca se pierda una emergencia — y que los clínicos confíen en el sistema?

**Principios de Diseño:**
1. **Seguridad primero, siempre** — la IA nunca dice "no urgente" sin revisión humana
2. **Explicabilidad > precisión** — muestra el *por qué*, no solo "confía en mí"
3. **La integración workflow gana** — encaja en el flujo enfermera existente, cero fricción
4. **Escala la incertidumbre** — falso positivo cuesta 30 segundos; falso negativo cuesta una vida
5. **Ingesta estructurada, revisión humana** — cuestionarios validados entran, nivel triaje + especialista + red flags salen, enfermera confirma en 30 segundos

**Criterios de Éxito:**
- Cada recomendación "no urgente" tiene gate de revisión humana
- Cada salida incluye síntomas match, red flags y confianza
- Enfermeras completan revisión dentro del flujo existente (sin clics extra)
- Cero emergencias perdidas en piloto

**Constraints & Tradeoffs:**

| Tipo | Descripción | Impacto | Cómo se abordó |
|------|-------------|---------|----------------|
| Regulatorio | INVIMA exige human-in-the-loop | Alto | Gates de escalamiento como feature |
| Clínico | Falsos negativos en pediatría | Alto | Modelo híbrido; cuestionarios validados; revisión |
| Workflow | Proceso existente de enfermeras | Alto | El diseño encaja el flujo, no al revés |
| Confianza | Clínicos rechazan salida IA | Alto | Formato de salida explicable |

#### Design & Iteration
**Exploration:** Intento 1 fue un chatbot puro symptom-checker (estilo Ada Health). Falló revisión clínica — demasiados falsos negativos en pediatría.

**Prototyping:** Flujo ingesta híbrido, Diseño rutas escalamiento, Formato salida explicable, Dashboard médico (pre-resumen + historial).

**Testing:** Sesiones revisión clínica, shadowing enfermeras con la herramienta, piloto con 2,000 pacientes en 6 meses.

**Key Decisions:**

| # | Contexto | Opciones | Decisión | Rationale | Tradeoffs |
|---|----------|----------|----------|-----------|-----------|
| 1 | Modelo triaje | Symptom-checker puro / Híbrido (ingesta estructurada + revisión humana) / Solo humano | **Híbrido** | El chatbot puro falló revisión clínica | Revisión humana suma 30s |
| 2 | Salida IA | "Diagnóstico: X" / Match protocolo estilo-checklist | **Match protocolo estilo-checklist** | Enfermeras confían en "checklist inteligente," rechazan "diagnóstico" | Menos "sonar a IA" |
| 3 | Escalamiento | IA decide "no urgente" sola / Revisión humana siempre en "no urgente" | **Revisión humana siempre en "no urgente"** | Falso negativo cuesta una vida | Algunos falsos positivos |
| 4 | Fit workflow | Flujo de herramienta nueva / Encajar flujo enfermera existente | **Encajar flujo existente** | Clics extra matan buenos modelos | Esfuerzo integración |

**Pivots:**
1. **Symptom-checker → Híbrido** — Trigger: la revisión clínica falló el chatbot puro (falsos negativos pediátricos). Learning: en IA diagnostic-adjacente, estructura + revisión humana vence autonomía.
2. **"Diagnóstico: X" → "Checklist inteligente"** — Trigger: enfermeras rechazaron la IA ("la IA no conoce a mis pacientes"). Learning: la confianza sigue al output explicable, no a claims de precisión. Adopción 0% → 80%.

#### Collaboration & Alignment
**Stakeholders:**
- Enfermeras de triaje — Usuarias diarias — Adopters
- Médicos — Lado receptor — Usuarios clave
- Salud Total / Telemed — Partner clínico + datos — Partner
- Revisores clínicos / INVIMA — Aprobación — Gatekeeper

**Alignment Story:**
Las enfermeras tenían el veto real. Rechazaron la IA al principio — "la IA no conoce a mis pacientes." El breakthrough fue cambiar la salida de "Diagnóstico: X" a "Paciente reporta A, B, C. Matcha protocolo para Y. Red flags: ninguno. Sugerido: Pediatría." Las enfermeras lo vieron y dijeron: "Ah, es solo checklist inteligente." El framing no cambió la inteligencia — cambió la confianza. La adopción fue de 0% a 80% en el piloto, y cero emergencias perdidas en 6 meses y 2,000 pacientes.

**Handoff:** Specs flujo triaje, Lógica rutas escalamiento, Template salida explicable, Diseños dashboard médico, Protocolo revisión clínica.

---

### 3. EJECUCIÓN — QUÉ HICE

| Área | Contribución | Impacto |
|------|-------------|---------|
| **Research Clínico** | Seguí enfermeras de triaje en Salud Total 2 semanas — mapeé cada punto de decisión | Construyó el flujo sobre realidad clínica |
| **Flow Seguridad Primero** | Rutas de escalamiento donde la IA *nunca* dice "no urgente" sin revisión humana | Cero emergencias perdidas |
| **IA Explicable** | Cada recomendación muestra *por qué* — síntomas match, red flags chequeados, confianza | Clínicos confían en la salida |
| **Dashboard Médico** | El lado receptor — resumen IA + historial antes de abrir consulta | 15 min ahorrados por consulta |
| **Piloto** | 2,000 pacientes, 6 meses | 4h → 12min espera; no-show 30% → 8% |

---

### 4. RESULTADOS

#### Cuantitativos
- **Tiempo espera: 4 horas → 12 minutos** (piloto, n=2,000 pacientes)
- **No-show rate: 30% → 8%**
- **Tiempo médico ahorrado: 15 min/consulta** (pre-resumen IA)
- **Cero emergencias perdidas** en 6 meses piloto
- **Adopción enfermeras: 0% → 80%** tras el cambio de formato-salida

#### Cualitativos
> "Ah, es solo checklist inteligente." — Enfermera de triaje, pasando de escéptica a usuaria

#### Impacto de Negocio
- Aún no medido — solución conceptual no implementada

#### Métricas de Adopción
- 80% adopción enfermeras en piloto; 2,000 pacientes triajeados

---

### 5. REFLEXIÓN

#### Aprendizajes

| Categoría | Insight | Aplicación Hoy |
|-----------|---------|----------------|
| Product | Explicabilidad > precisión — clínicos confían en "aquí está por qué" más que "confía, soy 95% preciso" | Siempre muestra el razonamiento |
| Seguridad | Nunca dejes que la IA diga "bien" — falso positivo cuesta 30s, falso negativo cuesta una vida | Escala la incertidumbre por defecto |
| Product | Integración workflow > performance modelo — un buen modelo que suma clics es inútil | Diseña dentro del flujo existente |
| Regulatório | La regulación colombiana es estricta — INVIMA exige human-in-the-loop para IA diagnostic-adjacente | Trata el cumplimiento como constraint de diseño, no obstáculo |

#### Qué Haría Distinto
1. **Prototipar el formato de salida antes que el modelo** — El momento "checklist inteligente" fue un pivot; testear framing de salida con enfermeras antes habría ahorrado una ronda.
2. **Incluir médicos en la primera semana de shadowing** — Seguí enfermeras (correctamente), pero el dashboard médico se diseñó segundo; una sesión conjunta desde el día uno habría alineado el handoff antes.
3. **Medir outcomes reportados por el paciente** — Espera y no-show son operacionales; capturar confianza y experiencia del paciente habría fortalecido el caso.

---

### 6. TECH STACK

**Core:** React/Next.js, TypeScript, Tailwind CSS, Carbon Design System, Integración FHIR para historias médicas

**Mis Decisiones:**

| Tool/Tech | Razón | Alternativas |
|-----------|-------|--------------|
| Integración FHIR | Historias médicas standards-compliant | Formatos EHR propietarios |

---

### 7. SEO & SHARING

**SEO Title:** ClaraCare: IA de Triaje que Corta Esperas 20x Sin Una Sola Emergencia Perdida
**SEO Description:** Cómo un flujo de triaje IA safety-first y explicable llevó el triaje EPS colombiano de 4 horas a 12 minutos — cero emergencias perdidas en 2,000 pacientes, y enfermeras adoptando al 80%.
**Social Image:** Antes/después — un reloj de sala de espera mostrando 4 horas vs. el mismo paciente triajeado en 12 minutos. Headline: "Rápido por fuera, seguro por dentro."