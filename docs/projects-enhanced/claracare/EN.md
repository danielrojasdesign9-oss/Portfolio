# ClaraCare Triage

## META
- **Slug:** `claracare-ai-triage-eps`
- **Title:** ClaraCare Triage
- **Subtitle:** AI triage that feels like a competent nurse, not a chatbot — cutting waits from 4 hours to 12 minutes without a single missed emergency
- **Year:** 2026
- **Category:** Healthtech / AI / Medical UX
- **Client:** Personal — Telemed / Salud Total collaboration
- **Location:** Colombia — Remote
- **Role:** Product Designer — Research, Clinical Flows, AI Safety UX
- **Scope:** Clinical Research, Safety-First Flow Design, Explainable AI, Doctor Dashboard, Pilot
- **Team Size:** [VALIDAR]
- **Duration:** [VALIDAR — 6-month pilot included]
- **Status:** ⏳ PENDING APPROVAL
- **Public:** ❌ NO
- **Featured:** false

---

## CONTENT

### 1. STRATEGIC FRAMING

#### Problem
Colombian EPS (health insurers) are overwhelmed. Patients wait hours for a 5-minute consult:

- **4-hour average wait** for triage at major EPS
- **30% no-show rate** because patients give up waiting
- Doctors burn out on repetitive "is this urgent?" questions
- No standardized triage protocol — each nurse decides differently

The real problem wasn't "make triage faster." It was: **how do you speed up a clinical decision without making it less safe — when a mistake isn't a bug, it's a life?**

#### Vision
> **AI triage that feels like a competent nurse, not a chatbot.**

A system that asks the right questions, flags emergencies instantly, and routes patients to the right specialist — reducing wait times from hours to minutes, while never letting the AI decide "not urgent" alone.

#### Success Metrics (defined before design)
| Metric | Baseline | Target | Source | Timeframe |
|--------|----------|--------|--------|-----------|
| Triage wait time | 4 hours | < 15 min | EPS records | Pilot (6 months) |
| No-show rate | 30% | Single digits | EPS records | Pilot |
| Doctor time per consult | Full read-through | AI pre-summary cuts it | Clinician tracking | Pilot |
| Missed emergencies | n/a | Zero | Clinical review | Pilot |

---

### 2. METHODOLOGY — HOW I THINK

#### Research & Discovery
**Methods:** Clinical shadowing (triage nurses, 2 weeks at Salud Total), Decision-point mapping, Clinical review sessions, Regulatory research (INVIMA)

**Participants:** Triage nurses, doctors, clinical reviewers

**Duration:** 2 weeks shadowing + ongoing clinical review

**Key Findings:**
1. **The liability wall is real** — medical AI in Colombia requires INVIMA approval. "Move fast and break things" doesn't apply when breaking means misdiagnosis.
2. **Nurses are the workflow** — any tool that adds clicks dies, no matter how good the model.
3. **Pure symptom-checker chatbots fail clinically** — too many false negatives on pediatric cases (validated by Attempt 1 failing review).
4. **Trust is earned in output format** — nurses distrusted "Diagnosis: X" but accepted "Patient reports A, B, C. Matches protocol for Y."

**Artifacts:** Nurse decision-point map, Escalation path spec, Clinical review protocol, Output-format trust findings

#### Strategy & Framing
**Problem Statement (HMW):**
> How might we cut triage wait from hours to minutes while guaranteeing that no emergency is ever missed — and get clinicians to trust it?

**Design Principles:**
1. **Safety first, always** — AI never says "not urgent" without human review
2. **Explainability > accuracy** — show *why*, not just "trust me"
3. **Workflow integration wins** — fit the existing nurse flow, add zero friction
4. **Escalate uncertainty** — false positive costs 30 seconds; false negative costs a life
5. **Structured intake, human review** — validated questionnaires in, triage level + specialist + red flags out, nurse confirms in 30 seconds

**Success Criteria:**
- Every "non-urgent" recommendation has a human review gate
- Every output includes symptoms matched, red flags, and confidence
- Nurses complete review within the existing flow (no added clicks)
- Zero missed emergencies in pilot

**Constraints & Tradeoffs:**

| Type | Description | Impact | How Addressed |
|------|-------------|--------|---------------|
| Regulatory | INVIMA requires human-in-the-loop | High | Escalation gates as a feature |
| Clinical | False negatives in pediatrics | High | Hybrid model; validated questionnaires; review |
| Workflow | Nurses' existing process | High | Design fits the flow, not the other way |
| Trust | Clinicians reject AI output | High | Explainable output format |

#### Design & Iteration
**Exploration:** Attempt 1 was a pure symptom-checker chatbot (Ada Health style). Failed clinical review — too many false negatives on pediatric cases.

**Prototyping:** Hybrid intake flow, Escalation path design, Explainable output format, Doctor dashboard (pre-summary + history).

**Testing:** Clinical review sessions, nurse shadowing of the tool, pilot with 2,000 patients over 6 months.

**Key Decisions:**

| # | Context | Options | Decision | Rationale | Tradeoffs |
|---|---------|---------|----------|-----------|-----------|
| 1 | Triage model | Pure symptom-checker / Hybrid (structured intake + human review) / Human-only | **Hybrid** | Pure chatbot failed clinical review | Human review adds 30s |
| 2 | AI output | "Diagnosis: X" / Checklist-style protocol match | **Checklist-style protocol match** | Nurses trust "smart checklist," reject "diagnosis" | Less "AI-sounding" |
| 3 | Escalation | AI decides "not urgent" alone / Always human review on "not urgent" | **Always human review on "not urgent"** | False negative costs a life | Some false positives |
| 4 | Workflow fit | New tool flow / Fit existing nurse flow | **Fit existing flow** | Extra clicks kill good models | Integration effort |

**Pivots:**
1. **Symptom-checker → Hybrid** — Trigger: clinical review failed the pure chatbot (pediatric false negatives). Learning: in diagnosis-adjacent AI, structure + human review beats autonomy.
2. **"Diagnosis: X" → "Smart checklist"** — Trigger: nurses rejected AI ("AI doesn't know my patients"). Learning: trust follows explainable output, not confidence claims. Adoption went 0% → 80%.

#### Collaboration & Alignment
**Stakeholders:**
- Triage nurses — Daily users — Adopters
- Doctors — Receiving end — Key users
- Salud Total / Telemed — Clinical + data partner — Partner
- Clinical reviewers / INVIMA — Approval — Gatekeeper

**Alignment Story:**
The nurses had the real veto. They rejected the AI initially — "AI doesn't know my patients." The breakthrough was changing the output from "Diagnosis: X" to "Patient reports A, B, C. Matches protocol for Y. Red flags: none. Suggested: Pediatrics." Nurses looked at it and said: "Oh, that's just a smart checklist." The framing didn't change the intelligence — it changed the trust. Adoption went from 0% to 80% in the pilot, and zero emergencies were missed across 6 months and 2,000 patients.

**Handoff:** Triage flow specs, Escalation path logic, Explainable output template, Doctor dashboard designs, Clinical review protocol.

---

### 3. EXECUTION — WHAT I DID

| Area | Contribution | Impact |
|------|-------------|--------|
| **Clinical Research** | Shadowed triage nurses at Salud Total for 2 weeks — mapped every decision point | Built the flow on real clinical reality |
| **Safety-First Flow** | Escalation paths where AI *never* decides "not urgent" without human review | Zero missed emergencies |
| **Explainable AI** | Every recommendation shows *why* — symptoms matched, red flags checked, confidence | Clinicians trust the output |
| **Doctor Dashboard** | The receiving end — AI summary + patient history before opening consult | 15 min saved per consult |
| **Pilot** | 2,000 patients, 6 months | 4h → 12min wait; no-show 30% → 8% |

---

### 4. RESULTS

#### Quantitative
- **Wait time: 4 hours → 12 minutes** (pilot, n=2,000 patients)
- **No-show rate: 30% → 8%**
- **Doctor time saved: 15 min/consult** (AI pre-summary)
- **Zero missed emergencies** in 6-month pilot
- **Nurse adoption: 0% → 80%** after output-format change

#### Qualitative
> "Oh, that's just a smart checklist." — Triage nurse, turning from skeptic to user

> [VALIDAR — additional clinician quote]

#### Business Impact
- [VALIDAR — EPS cost/latency metrics, patient satisfaction]

#### Adoption Metrics
- 80% nurse adoption in pilot; 2,000 patients triaged

---

### 5. REFLECTION

#### Learnings

| Category | Insight | Application Today |
|----------|---------|-------------------|
| Product | Explainability > accuracy — clinicians trust "here's why" over "trust me, I'm 95% accurate" | Always surface the reasoning |
| Safety | Never let AI say "fine" — false positive costs 30s, false negative costs a life | Escalate uncertainty by default |
| Product | Workflow integration > model performance — a good model that adds clicks is useless | Design into the existing flow |
| Regulatory | Colombian law is strict — INVIMA mandates human-in-the-loop for diagnostic-adjacent AI | Treat compliance as a design constraint, not an obstacle |

#### What I'd Do Differently
1. **Prototype the output format before the model** — The "smart checklist" trust moment was a pivot; testing output framing with nurses earlier would have saved a round.
2. **Include doctors in the first shadowing week** — I shadowed nurses (correctly), but the doctor-dashboard side was designed second; a joint session from day one would have aligned the handoff sooner.
3. **Measure patient-reported outcomes** — Wait and no-show are operational; capturing patient confidence and experience would have strengthened the case.

---

### 6. TECH STACK

**Core:** React/Next.js, TypeScript, Tailwind CSS, Carbon Design System, FHIR integration for medical records

**My Decisions:**

| Tool/Tech | Reason | Alternatives |
|-----------|--------|--------------|
| FHIR integration | Medical records standards-compliant | Proprietary EHR formats |

---

### 7. SEO & SHARING

**SEO Title:** ClaraCare: AI Triage That Cuts Waits 20x Without a Single Missed Emergency
**SEO Description:** How a safety-first, explainable AI triage flow took Colombian EPS triage from 4 hours to 12 minutes — zero missed emergencies in 2,000 patients, and nurses adopting at 80%.
**Social Image:** Before/after — a waiting room clock showing 4 hours vs. the same patient triaged in 12 minutes. Headline: "Fast on the outside, safe on the inside."