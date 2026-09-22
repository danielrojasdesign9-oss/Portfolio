# Linklight Asertiva

## META
- **Slug:** `linklight-comunicacion-asertiva`
- **Título:** Linklight Asertiva
- **Subtítulo:** Un entrenador personal de comunicación que te ayuda a decir lo que piensas — sin ser un idiota
- **Año:** 2022
- **Categoría:** Habilidades de Comunicación / Auto-mejora
- **Cliente:** Proyecto Personal
- **Ubicación:** Remoto
- **Rol:** Product Designer & Developer — Herramienta de auto-mejora para comunicación asertiva usando marcos DEAR MAN y CNV
- **Alcance:** Research, Traducción de Marcos, UI No Juzgante, Escenarios de Práctica, Seguimiento de Progreso
- **Tamaño del equipo:** 1 (solo)
- **Duración:** [VALIDAR]
- **Estado:** ⏳ PENDING APPROVAL
- **Público:** ✅ SÍ
- **Destacado:** false

---

## CONTENIDO

### 1. ENMARQUE ESTRATÉGICO

#### Problema
Era terrible para expresarme. Solía:
- **Agresivo**: Decía lo que quería, pero lastimaba a otros en el proceso
- **Pasivo**: Esconder mis necesidades, luego resentirme con otros por no leer mi mente
- **Pasivo-agresivo**: Lo peor de ambos mundos — resentido Y hiriente

**El problema central**: No tenía un marco para la comunicación. Lo improvisaba cada vez, y se notaba.

El problema real no era "aprender a hablar mejor". Era: **¿cómo practicas tener conversaciones difíciles de forma segura, sin daño en el mundo real?**

#### Visión
> **Un entrenador personal de comunicación que te ayuda a decir lo que piensas sin ser un idiota.**

Una app construida en dos marcos comprobados — DEAR MAN (para conseguir lo que quieres) y CNV (para expresar sentimientos sin culpa) — que convierte la teoría abstracta de comunicación en práctica accionable.

#### Métricas de Éxito (definidas antes de diseñar)
| Métrica | Baseline | Target | Fuente | Periodo |
|---------|----------|--------|--------|---------|
| Conversaciones con pareja | Peleas | Discusiones reales | Observación personal | Continuo |
| Comprensión marcos | Académica/abstracta | Accesible | Feedback usuarios | Lanzamiento + 3 meses |
| Uso práctica segura | Ninguna | Sesiones regulares | Analytics app | Lanzamiento + 3 meses |
| Auto-conciencia (reconocer patrones) | Baja | Mejorada | Profundidad prompts reflexión | Continuo |

---

### 2. METODOLOGÍA — CÓMO PIENSO

#### Research & Discovery
**Métodos:** Documentación dolor personal (fallos conversación), Revisión literatura (DEAR MAN de DBT, CNV de Rosenberg), Comparación marcos, Auditorías auto-reflexión

**Participantes:** Yo + [VALIDAR — early testers]

**Duración:** [VALIDAR]

**Hallazgos Clave:**
1. **Seguía arruinando conversaciones con mi pareja.** Decía algo, veía el dolor en su cara, y pensaba "eso no es lo que quise decir."
2. **DEAR MAN y CNV son los marcos más prácticos** — de DBT y Rosenberg respectivamente. Conceptos académicos, pero extremadamente accionables si se traducen bien.
3. **El desafío de diseño**: ¿Cómo haces que la práctica de comunicación se sienta segura, no vergonzosa?
4. **La gente aprende mejor cuando no se siente evaluada.** Puntajes ("sacaste 3/10 en empatía") crean defensividad, no crecimiento.

**Artefactos:** Log personal fallos conversación, Matriz comparación marcos, Principios UX no juzgante, Borrador biblioteca escenarios práctica

#### Strategy & Framing
**Problem Statement (HMW):**
> ¿Cómo convertimos la teoría abstracta de comunicación en un espacio de práctica seguro y sin juicio — para que la gente construya habilidades de comunicación asertiva sin consecuencias reales?

**Principios de Diseño:**
1. **No juzgar es poderoso** — Sin puntajes, sin bueno/malo. Reflexión sobre evaluación.
2. **Los marcos hacen la comunicación menos aterradora** — Estructura vence improvisación
3. **Seguridad primero** — Practicar sin daño real
4. **El progreso no es lineal** — Algunos días son mejores; está bien
5. **Diseñar desde el dolor** — Resuelve tu propio problema primero

**Criterios de Éxito:**
- Usuarios reconocen sus patrones de comunicación (auto-conciencia)
- La práctica se siente segura, no vergonzosa
- DEAR MAN/CNV entendibles para no académicos
- Personal: conversaciones con pareja pasan de peleas a discusiones

**Constraints & Tradeoffs:**

| Tipo | Descripción | Impacto | Cómo se abordó |
|------|-------------|---------|----------------|
| Personal | Tema altamente sensible/personal | Alto | Tono no juzgante; sin puntajes; prompts reflexión |
| Técnica | Restricciones scope proyecto solo | Medio | Local storage; features acotados |
| Producto | Marcos abstractos → práctica accionable | Alto | Traducción paso a paso; escenarios realistas |
| Emocional | La práctica puede provocar incomodidad | Medio | Framing seguro; privacidad opcional; sin presión |

#### Design & Iteration
**Exploration:** Leí todos los libros de comunicación asertiva. DEAR MAN y CNV sobresalieron. El desafío era la traducción: convertir marcos académicos en pasos que no se sientan tarea.

**Prototyping:** Pasos guiados DEAR MAN (Describe, Express, Assert, Reinforce, Mindful, Appear confident, Negotiate), Prompts reflexión CNV (Observación, Sentimiento, Necesidad, Petición), Escenarios práctica con ramas, Indicadores progreso sutiles.

**Testing:** Auto-testing + [VALIDAR — grupo pequeño de prueba]. Medido: ¿la práctica se sintió segura? ¿Los usuarios reconocieron patrones? ¿Los pasos se sintieron accionables?

**Key Decisions:**

| # | Contexto | Opciones | Decisión | Rationale | Tradeoffs |
|---|----------|----------|----------|-----------|-----------|
| 1 | Enfoque marco | Solo DEAR MAN / Solo CNV / Ambos | **Ambos** | DEAR MAN para conseguir deseos; CNV para expresar sentimientos sin culpa | Más contenido a diseñar; toolkit más rico |
| 2 | Modelo feedback | Puntajes/evaluación / Prompts reflexión / Ambos | **Prompts reflexión** | Puntajes crean defensividad; reflexión crea entendimiento | Progreso menos "medible" |
| 3 | Formato práctica | Simulaciones chatbot / Walkthroughs escenario / Libre | **Walkthroughs escenario** | Realistas, seguros, estructurados | Menos realista que chatbot |
| 4 | Display progreso | Notas/levels / Indicadores sutiles / Oculto | **Indicadores sutiles** | Anima sin presión | Progreso menos explícito |

**Pivots:**
1. **Evaluación → Reflexión** — Trigger: el instinto de puntuar empatía se sintió mal; testing confirmó que los puntajes crean defensividad. Learning: en dominios sensibles, entender vence medir.

#### Collaboration & Alignment
**Stakeholders:**
- Yo (usuario primario) — Diseñador, developer, usuario
- Pareja — Stakeholder implícito, validador mundo real
- Early testers — Feedback, validación

**Alignment Story:**
Proyecto solo nacido del dolor personal — conversaciones fallidas repetidas con mi pareja. Los marcos eran el salvavidas. La decisión más dura fue remover los puntajes. Cada instinto pedía "progreso = número". Pero cada vez que imaginaba "sacaste 4/10 en asertividad" me daba vergüenza ajena — y el testing confirmó que otros sentían lo mismo. Prompts de reflexión, no puntajes, se volvieron la mecánica central. La medida de éxito no era una gráfica subiendo; era mi pareja y yo teniendo discusiones reales donde ambos nos sentíamos escuchados.

**Handoff:** Guías traducción marcos, Biblioteca escenarios, Sistema prompts reflexión, Specs indicadores progreso.

---

### 3. EJECUCIÓN — QUÉ HICE

| Área | Contribución | Impacto |
|------|-------------|---------|
| **Research** | Log dolor personal, revisión profunda literatura DEAR MAN (DBT) y CNV (Rosenberg) | Seleccionó los dos marcos más prácticos |
| **Traducción de Marcos** | Convirtió DEAR MAN y CNV de conceptos académicos en pasos simples y accionables | Accesibilidad marcos para no académicos |
| **UI No Juzgante** | Diseñó la experiencia para ser educativa, no evaluativa — sin puntajes bueno/malo | Práctica segura; usuarios aprenden sin defensividad |
| **Escenarios de Práctica** | Creó escenarios realistas de conversación para práctica segura | Práctica sin consecuencias reales |
| **Seguimiento de Progreso** | Construyó indicadores sutiles de progreso que animan sin presión | Motivación sin presión |

---

### 4. RESULTADOS

#### Cuantitativos
- [VALIDAR — métricas uso]
- Accesibilidad marcos validada por testers

#### Cualitativos
> "Mis conversaciones con mi pareja pasaron de peleas a discusiones reales." — Yo, usuario primario

> [VALIDAR — cita early tester]

#### Impacto de Negocio
- Personal: mejora significativa en comunicación real
- [VALIDAR]

#### Métricas de Adopción
- [VALIDAR]

---

### 5. REFLEXIÓN

#### Aprendizajes

| Categoría | Insight | Aplicación Hoy |
|-----------|---------|----------------|
| Process | Diseñar desde el dolor — los mejores proyectos resuelven TU problema primero | Empieza con el problema que conoces a fondo |
| Product | No juzgar es poderoso — la gente aprende mejor cuando no se siente evaluada | Remueve evaluación de experiencias de aprendizaje |
| Product | Los marcos ayudan — la estructura hace la comunicación menos aterradora | Traducir marcos expertos a pasos crea usuarios confiados |
| Product | El progreso no es lineal — algunos días son mejores | Diseña para el bamboleo, no solo tendencias hacia arriba |
| Carrera | Los proyectos personales importan — te empujan a aprender lo que nunca explorarías en el trabajo | Sigue creando cosas para ti |

#### Qué Haría Distinto
1. **Reclutar testers antes** — Validar la decisión sin-puntajes habría llegado antes con un grupo pequeño de feedback.
2. **Agregar un diario estructurado de auto-reflexión** — Prompts de reflexión dentro de escenarios fueron útiles; faltaba un diario conectando patrones entre prácticas.
3. **Publicar el editor de escenarios** — Usuarios (incluyéndome) topamos con los límites de escenarios pre-escritos. Dejar a los usuarios importar sus propias situaciones reales habría hecho la herramienta más durable.

---

### 6. TECH STACK

**Core:** React/Next.js, TypeScript, Tailwind CSS

**Mis Decisiones:**

| Tool/Tech | Razón | Alternativas |
|-----------|-------|--------------|
| Almacenamiento local | Datos personales privados, sin backend | Backend, Supabase |

---

### 7. SEO & SHARING

**SEO Title:** Linklight: Práctica de Comunicación Asertiva Sin Juicio
**SEO Description:** Convirtiendo marcos de comunicación DEAR MAN y CNV en un espacio seguro de práctica — sin puntajes, sin conferencias, solo reflexión y crecimiento.
**Social Image:** Dos paneles — "evaluación" (notas, juicio) vs. "reflexión" (prompts, entendimiento). Headline: "No puntúas conversaciones. Aprendes de ellas."