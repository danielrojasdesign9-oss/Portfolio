# E-Signer Digital

## META
- **Slug:** `e-signer-app-documentos-firmas-digitales`
- **Título:** E-Signer Digital
- **Subtítulo:** Un sistema de confianza para firma electrónica avanzada — validación de identidad, visualización de documentos y certificado por país, unificados en una sola experiencia
- **Año:** 2021
- **Categoría:** Legal Tech / Firma Electrónica / Plataforma de Confianza
- **Cliente:** E-Signer — vendido en dos fases a Movistar y Banco Santander
- **Ubicación:** Colombia — Presencial (LATAM)
- **Rol:** Product Designer — Líder de validación de identidad → líder de flujos (visualización de documentos + certificado electrónico)
- **Alcance:** Benchmark, Sistema de Diseño, Diseño de Flujo, Unificación Multi-Tecnología, Testeo A/B, White Label
- **Tamaño del equipo:** 1 diseñador + 2 desarrolladores + 2 product owners (+1 PM desde el mes 3)
- **Duración:** 6 meses
- **Estado:** Publicado
- **Público:** ✅ SÍ
- **Destacado:** false

---

## CONTENIDO

### 1. ENMARQUE ESTRATÉGICO

#### Problema
Ya existía una directiva para construir un "sistema de confianza" que permitiera a entidades grandes firmar electrónicamente — digital, simple y legalmente válido. Debajo de esa meta simple estaban tres mundos técnicos muy distintos:

- **Tres etapas, tres equipos, tres tecnologías** — validación de identidad, generación de certificado electrónico y visualización de documentos estaban construidas por desarrolladores distintos en stacks distintos. Pasar de una a otra se sentía como salirse del producto.
- **La legalidad es por país** — una firma solo es válida si usa los elementos que exige la legislación de cada país. Chile depende de la **Clave Única**; Perú exige **al menos dos validaciones de identidad** dentro del mismo proceso.
- **La validación de identidad es el guardián** — pero cómo probaba realmente el mercado "eres quien dices ser" nunca se había benchmarkeado antes de este trabajo.
- **Nada era reutilizable** — los componentes de validación vivían aislados, nunca absorbidos por el sistema de diseño global.

El problema real no era "firmar un PDF". Era: **¿cómo haces que una firma legalmente válida se sienta como una experiencia continua y de confianza cuando debajo hay tres tecnologías, tres equipos y reglas distintas por país?**

#### Visión
> **Una experiencia de confianza sobre tres motores — firma digital, simple y legal en cualquier lugar de LATAM.**

Un flujo unificado donde la visualización de documentos, la generación de certificado y la validación de identidad comparten los mismos elementos gráficos y el mismo modelo mental — aunque el código detrás de cada uno sea completamente distinto.

#### Métricas de Éxito (definidas antes de diseñar)
| Métrica | Línea base | Objetivo | Fuente | Plazo |
|---------|-----------|----------|--------|-------|
| Número de pasos | 7 pasos (est.) | 4 pasos (mínimo pedido) — validar impacto | A/B + usabilidad | Antes del lanzamiento |
| Percepción de confianza | Incierto | Alta (el usuario siente que puede decidir y firmar) | Encuesta del A/B | Antes del lanzamiento |
| Consistencia multi-tecnología | 3 sensaciones distintas | 1 experiencia unificada | Testeo con usuarios | Antes del lanzamiento |
| Reglas de certificado por país | Ad-hoc por país | Configurables (Clave Única 🇨🇱, 2 validaciones 🇵🇪) | Matriz legislativa | Rollout |

---

### 2. METODOLOGÍA — CÓMO PIENSO

#### Research & Discovery
**Métodos:** Benchmark de validación de identidad (cómo prueba el mercado quién eres), Análisis de legislación por país (requisitos de firma), Auditoría de visualización de documentos (referencia fuerte a **DocuSign**), Mapeo de experiencia multi-tecnología (dónde se sentía el "empalme")

**Participantes:** Stakeholders de producto y diseño

**Duración:** 2 meses

**Hallazgos clave:**
1. **El mercado valida identidad de muchas maneras distintas.** Hacer benchmark de cómo "demuestras quién eres" en distintas apps nos dio un catálogo para tomar decisiones — no había una única respuesta canónica.
2. **La validez de una firma se configura por país.** Chile → Clave Única; Perú → mínimo dos validaciones de identidad en el proceso. La etapa de certificado debe adaptarse a la legislación, no al revés.
3. **DocuSign marcó la referencia para la visualización de documentos.** El referente era fuerte; el trabajo era adaptarlo a nuestro flujo de confianza, no reinventarlo.
4. **Tres motores hoy, una experiencia mañana.** Desarrolladores distintos, proyectos distintos, aspectos distintos — el "empalme" entre etapas era visible y rompía la confianza.

**Artefactos:** Benchmark de validación de identidad, Matriz país × requisito de certificado, Mapa de experiencia multi-tecnología, Referencias de visualización inspiradas en DocuSign

#### Estrategia y Enmarque
**Enunciado del Problema (HMW):**
> ¿Cómo hacemos que una firma legalmente válida se sienta como una experiencia continua y de confianza — cuando debajo hay tres tecnologías, tres equipos y reglas distintas por país?

**Principios de Diseño:**
1. **Confianza sobre velocidad** — una firma es un acto pesado; el flujo debe sentirse como un ecosistema completo y seguro
2. **Una experiencia, tres motores** — mismos elementos gráficos y modelo mental aunque el código sea distinto
3. **La legalidad es configuración** — reglas de certificado por país (Clave Única, doble validación) son config, no builds a medida
4. **La validación es un momento** — los checks de identidad reciben el cuidado y la claridad que merecen
5. **Sistema de diseño primero** — cada componente nuevo vuelve al sistema global para poder reutilizarse

**Criterios de Éxito:**
- Una experiencia continua validada sobre las tres tecnologías
- Decisión de número de pasos basada en datos (no en opinión)
- Certificados válidos según la legislación de cada país (Chile, Perú, otros)
- Componentes de validación de identidad reutilizables en el sistema global
- Flujo vendible como white label (Movistar, Banco Santander)

**Restricciones y Compromisos:**

| Tipo | Descripción | Impacto | Cómo se abordó |
|------|-------------|---------|----------------|
| Técnico | 3 tecnologías / equipos / proyectos separados | Alto | Workshops de unificación; capa visual compartida sobre motores distintos |
| Legal | Legitimidad de firma por país (Chile, Perú…) | Alto | Matriz de configuración por país; la etapa de certificado se adapta a la legislación |
| Producto | Presión por reducir pasos | Medio | A/B + usabilidad antes de aceptar; datos sobre opinión |
| Marca | White label con ilustraciones por cliente | Medio | Elementos base con marca; ilustraciones negociadas como entrega posterior |

#### Diseño e Iteración
**Exploración:** Entré como dueño de la **validación de identidad**: benchmarkeé cómo el mercado verifica identidad, implementé la etapa y devolví cada componente reutilizable al sistema de diseño global. Terminada esa etapa, tomé el liderazgo de las otras dos — la **visualización de documentos** (con referencia fuerte a DocuSign) y el **certificado electrónico** (emitido por país, p. ej. Clave Única para Chile, dos validaciones para Perú).

**Prototipado:** Workshops de unificación con todos los desarrolladores para eliminar el empalme y definir dónde vive cada sistema; luego una capa visual única para que los tres motores se vieran continuos. Flujos de certificado por país. Base white label con espacio para ilustraciones del cliente.

**Testeo:** El flujo se validó con stakeholders y luego producto pidió: **reducir el número de pasos**. Corrí un **test A/B con sesiones de usabilidad** comparando los 7 pasos actuales contra un mínimo de 4.

**Decisiones Clave:**

| # | Contexto | Opciones | Decisión | Justificación | Compromisos |
|---|---------|----------|----------|---------------|-------------|
| 1 | Número de pasos | 7 pasos (estimados) / 4 pasos (mínimo) | **Mantener 7 pasos** | El A/B mostró que los 7 pasos generaban percepción de confianza y ecosistema | Flujo más largo; pero la confianza es el producto |
| 2 | UX multi-tecnología | Cada motor con su UI / Capa visual compartida | **Capa visual compartida** | El usuario no debe sentir que se salió del producto | Requiere alineación entre desarrolladores |
| 3 | Reglas de certificado | Una regla global / Configuración por país | **Configuración por país** | Chile (Clave Única) y Perú (2 validaciones) difieren legalmente | Más reglas por configurar |
| 4 | Componentes | Locales a validación / Sistema de diseño global | **Sistema de diseño global** | Reutilizables en flujos y productos futuros | Overhead de gobierno |

**Pivots:**
1. **7 pasos → se propuso 4 → se mantuvieron 7.** Trigger: producto pidió menos pasos. Testeo: A/B + usabilidad de 7 vs 4. Resultado: la percepción *sí* cambió — pero en la dirección equivocada. Cuando firmar se sentía demasiado rápido, los usuarios sentían que faltaba algo; **la velocidad rompía la confianza**. El flujo de 7 pasos, estimado desde el inicio, produjo la confianza que una firma electrónica necesita. Aprendizaje: **en productos de confianza, el número de pasos es un instrumento de confianza, no una métrica de fricción** — validado con datos, no con opinión.

#### Colaboración y Alineación
**Stakeholders:**
- Equipo de validación de identidad — la etapa que yo lideré primero — Builders
- Equipo de visualización de documentos — stack distinto, referencia DocuSign — Builders
- Equipo de certificado — stack distinto, emisión por país — Builders
- Producto — pidió reducción de pasos, white label — Decision-maker
- Stakeholders por país (Chile, Perú…) — requisitos legislativos — Gatekeepers
- Movistar / Banco Santander — lado comprador, definición del white label — Compradores

**Historia de Alineación:**
El momento más difícil fue el pedido de reducir pasos. Todos esperaban "menos pasos = mejor". No discutí — construí el test A/B. El flujo rápido de 4 pasos volvía a los usuarios *sospechosos*: firmar un contrato con una línea telefónica o un banco es un acto pesado, y cuando terminaba demasiado rápido la gente sentía que no había tenido la oportunidad de decidir de verdad. Los 7 pasos, que habíamos estimado desde el inicio, se sentían como un ecosistema completo — exactamente la confianza que buscaba la directiva. Mantuve los 7, respaldado por datos, y ese fue el momento en el que sentí que lo había hecho como debía. Después vino la unificación (tres tecnologías, tres equipos de desarrollo, alineados en workshops para que el empalme desapareciera) y la venta en dos fases a **Movistar** y **Banco Santander**.

**Handoff:** Componentes del sistema de diseño global (reutilizables de validación de identidad), Matriz de configuración país × certificado, Spec de capa visual compartida sobre los tres motores, Base white label con pipeline de ilustraciones por cliente (negociado como entrega posterior), Documentación del A/B para la decisión de pasos.

---

### 3. EJECUCIÓN — LO QUE HICE

| Área | Contribución | Impacto |
|------|--------------|---------|
| **Benchmark** | Mapeé cómo valida identidad el mercado en muchas apps | Base de evidencia para la etapa de validación |
| **Validación de Identidad** | Lideré la etapa end-to-end como diseñador a cargo | Identidad validada como parte de una experiencia de confianza |
| **Sistema de Diseño** | Implementé los componentes de validación en el sistema global | Reutilizables en flujos y productos futuros |
| **Visualización de Documentos** | Tomé la etapa; referencia fuerte a DocuSign | Experiencia de lectura familiar y confiable |
| **Certificado Electrónico** | Lideré la emisión por país (Clave Única 🇨🇱, 2 validaciones 🇵🇪) | Firmas válidas según la legislación de cada país |
| **Unificación Multi-Tecnología** | Workshops para matar el empalme + capa visual compartida sobre 3 motores | Sensación de un solo producto, sin "salirse de la experiencia" |
| **A/B + Usabilidad** | Probé 7 vs 4 pasos → mantuve 7 (percepción de confianza) | Decisión de flujo basada en datos, no en opinión |
| **White Label** | Elementos base con marca; ilustraciones por cliente negociadas como entrega posterior | Vendido en 2 fases a Movistar y Banco Santander |

---

### 4. RESULTADOS

#### Cuantitativos
- **Número de pasos:** mantuve 7 de 7 — validado por A/B + usabilidad; la variante de 4 pasos *reducía* la confianza
- **Dinero:** proyecto vendido en **dos fases a Movistar y Banco Santander**
- **Tecnologías unificadas:** 3 tecnologías → 1 experiencia visual consistente
- **Cobertura de certificado:** reglas por país en vivo en 4 países (Chile, Perú, Colombia, Ecuador)
- **Sistema de diseño:** 6+ componentes de validación absorbidos al sistema global
- **Completitud del flujo:** 95% | **Tasa de error:** 2/20 (10%) durante testing | **NPS:** 9/10

#### Cualitativos
- Los insights de validación y el A/B de 7 vs 4 pasos están en el pivot y la historia de alineación.

#### Impacto de Negocio
- White label validado como canal de venta — Movistar y Banco Santander compraron en dos fases
- Visuales/ilustraciones por cliente negociados como entregable pago posterior

---

### 5. REFLEXIÓN

#### Aprendizajes

| Categoría | Insight | Aplicación Hoy |
|-----------|---------|----------------|
| Producto | El número de pasos es un instrumento de confianza, no de fricción — el flujo rápido se sentía falso | Probar métricas de confianza, no solo de velocidad |
| Técnico | Tres motores pueden compartir una experiencia si matas el empalme visual | Unificar la capa de experiencia; mantener los motores distintos |
| Legal | La validez de la firma se configura por país — la legislación es config | Matriz país × requisito antes de diseñar |
| Proceso | Los datos ganan las discusiones de presión, sobre todo con "menos pasos" | Construir el A/B antes de cambiar el flujo |
| Sistema de Diseño | Los componentes solo rinden si llegan al sistema global | Absorber piezas reutilizables al entregar |

#### Qué haría distinto
1. **Documentar el resultado del A/B para stakeholders antes** — la prueba existía, pero empaquetarla para la toma de decisión de producto costó ciclos extra.
2. **Mapear todas las reglas por país en la semana uno** — Chile y Perú guiaron el diseño; una matriz legislativa completa desde el inicio habría anticipado más.
3. **Incluir el pipeline de ilustraciones white label en el precio desde el inicio** — los visuales eran el entregable negociado; cotizarlos antes habría evitado conversaciones de alcance a la hora de vender.

---

### 6. TECH STACK

**Core:** React / Next.js / TypeScript — con múltiples motores tras una capa visual unificada: proyectos legados tercerizados de otras empresas, validación de identidad con Clave Única (Chile) y un stack a la medida para el resto del flujo

**Mis Decisiones:**

| Herramienta/Tech | Razón | Alternativas |
|------------------|-------|--------------|
| Capa visual compartida sobre 3 motores | Sensación de un solo producto sin reescribir stacks backend | Rewrite completo (muy riesgoso) |
| Sistema de diseño global para validación | Reutilizable en flujos y productos | Componentes solo locales |
| Config de certificado por país | Chile (Clave Única), Perú (2 validaciones) difieren legalmente | Regla global única (inválida) |

---

### 7. SEO & SHARING

**SEO Title:** E-Signer: El sistema de confianza detrás de la firma electrónica avanzada en LATAM
**SEO Description:** Cómo se unificaron validación de identidad, certificados por país y visualización de documentos en una sola experiencia de confianza — y cómo el test A/B probó que 7 pasos generan más confianza que 4. Vendido a Movistar y Banco Santander.
**Social Image:** Un flujo, tres motores — validación de identidad, certificado y visualización compartiendo una sola capa visual. Titular: "La confianza es el producto. La velocidad, la trampa."