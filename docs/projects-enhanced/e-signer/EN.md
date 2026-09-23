# E-Signer Digital

## META
- **Slug:** `e-signer-app-documentos-firmas-digitales`
- **Title:** E-Signer Digital
- **Subtitle:** A trust system for advanced electronic signatures — identity validation, document visualization and per-country certificates unified under one experience
- **Year:** 2021
- **Category:** Legal Tech / e-Signature / Trust Platform
- **Client:** E-Signer — vendido en dos fases a Movistar y Banco Santander
- **Location:** Colombia — On-site (LATAM)
- **Role:** Product Designer — Identity Validation lead → flows lead (document visualization + electronic certificate)
- **Scope:** Benchmark, Design System, Flow Design, Cross-Technology Unification, A/B Testing, White Label
- **Team Size:** 1 designer + 2 developers + 2 product owners (+1 PM from month 3)
- **Duration:** 6 months
- **Status:** Published
- **Public:** ✅ YES
- **Featured:** false

---

## CONTENT

### 1. STRATEGIC FRAMING

#### Problem
There was already a directive to build a "system of trust" that lets large entities sign electronically — digital, simple, and legally valid. Beneath that simple goal sat three very different technical worlds:

- **Three stages, three teams, three technologies** — identity validation, electronic certificate generation, and document visualization were each built by different developers on different stacks. Jumping from one to another felt like leaving the product.
- **Legality is per-country** — a signature is only valid if the required elements follow each country's legislation. Chile relies on **Clave Única**; Peru requires **at least two identity validations** inside the same process.
- **Identity validation is the gatekeeper** — but how the market really proved "you are who you say you are" had never been benchmarked before this work.
- **Nothing was reusable** — the validation components lived in isolation, never absorbed into the global design system.

The real problem wasn't "sign a PDF." It was: **how do you make a legally valid signature feel like one continuous, trustworthy experience when three technologies, three teams and per-country rules sit underneath?**

#### Vision
> **One trusted experience across three engines — sign digitally, simply, and legally anywhere in LATAM.**

A unified flow where document visualization, certificate generation and identity validation share the same graphic elements and mental model — even when the code behind each is completely different.

#### Success Metrics (defined before design)
| Metric | Baseline | Target | Source | Timeframe |
|--------|----------|--------|--------|-----------|
| Step count | 7 steps (est.) | 4 steps (minimum request) — validate impact | A/B + usability | Before launch |
| Trust perception | Uncertain | High (users feel they can decide & sign) | A/B survey | Before launch |
| Cross-tech consistency | 3 different feelings | 1 unified experience | User testing | Before launch |
| Country certificate rules | Ad-hoc per country | Configurable (Clave Única 🇨🇱, 2 validations 🇵🇪) | Legislation matrix | Rollout |

---

### 2. METHODOLOGY — HOW I THINK

#### Research & Discovery
**Methods:** Identity validation benchmark (how the market really proves identity), Country legislation analysis (per-country signature requirements), Document visualization audit (heavily referenced **DocuSign**), Cross-technology experience mapping (where the "splice" between systems felt)

**Participants:** Product & design stakeholders

**Duration:** 2 months

**Key Findings:**
1. **The market validates identity in many different ways.** Benchmarking how "prove you are who you say you are" is solved across apps gave us a catalog to draw from — not a single canonical answer.
2. **A signature's validity is configured per country.** Chile → Clave Única; Peru → a minimum of two identity validations in the process. The certificate stage must adapt to legislation, not the other way around.
3. **DocuSign set the bar for document visualization.** The reference was strong; the job was adapting it to our trust flow instead of reinventing it.
4. **Three engines today, one experience tomorrow.** Different developers, different projects, different aspects — the "empalme" (splice) between stages was visible and broke trust.

**Artifacts:** Identity validation benchmark, Country × certificate requirement matrix, Cross-technology experience map, DocuSign-inspired visualization references

#### Strategy & Framing
**Problem Statement (HMW):**
> How might we make a legally valid signature feel like one continuous, trustworthy experience — when three technologies, three teams and per-country rules sit underneath?

**Design Principles:**
1. **Trust over speed** — a signature is a heavy act; the flow must feel like a complete, confident ecosystem
2. **One experience, three engines** — same graphic elements and mental model even if the code differs
3. **Legality is configuration** — per-country certificate rules (Clave Única, double validation) are config, not custom builds
4. **Validation is a moment** — identity checks get the care and clarity they deserve
5. **Design system first** — every new component lands back in the global system so it can be reused

**Success Criteria:**
- One continuous experience validated across the three technologies
- Data-backed decision on step count (not opinion)
- Certificates valid per country legislation (Chile, Peru, others)
- Identity validation components reusable in the global design system
- Flow sellable as white label (Movistar, Banco Santander)

**Constraints & Tradeoffs:**

| Type | Description | Impact | How Addressed |
|------|-------------|--------|---------------|
| Technical | 3 separate technologies / teams / projects | High | Unification workshops; visual layer shared over distinct engines |
| Legal | Per-country signature legitimacy (Chile, Peru…) | High | Country config matrix; certificate stage adapts to legislation |
| Product | Pressure to reduce steps | Medium | A/B + usability before accepting; data over opinion |
| Brand | White label with per-client illustrations | Medium | Branded base elements; visuals negotiated as later deliverable |

#### Design & Iteration
**Exploration:** Started as owner of **identity validation**: benchmarked how the market verifies identity, then implemented the stage and fed every reusable component back into the global design system. After that stage shipped, took leadership of the other two — **document visualization** (referencing DocuSign heavily) and the **electronic certificate** (issued per country, e.g. Clave Única for Chile, two validations for Peru).

**Prototyping:** Unification workshops with all developers to remove the splice ("eliminación del empalme") and define where each system lives; then one visual layer so the three engines look continuous. Per-country certificate flows. White-label base with room for client illustrations.

**Testing:** The flow was validated with stakeholders, then product asked: **reduce the number of steps**. Ran an **A/B test with usability sessions** comparing the current 7 steps against a 4-step minimum.

**Key Decisions:**

| # | Context | Options | Decision | Rationale | Tradeoffs |
|---|---------|---------|----------|-----------|-----------|
| 1 | Step count | 7 steps (as estimated) / 4 steps (minimum) | **Keep 7 steps** | A/B showed 7 steps generated a perception of trust & ecosystem | Longer flow; but trust is the product |
| 2 | Cross-technology UX | Each engine with its own UI / Shared visual layer | **Shared visual layer** | Users shouldn't feel they left the product | Needs alignment across developers |
| 3 | Certificate rules | One global rule / Per-country configuration | **Per-country config** | Chile (Clave Única) and Peru (2 validations) differ legally | More rules to configure |
| 4 | Components | Local to identity validation / Global design system | **Global design system** | Reusable across flows and future products | Governance overhead |

**Pivots:**
1. **7 steps → proposed 4 → kept 7.** Trigger: product requested fewer steps. Testing: A/B + usability of 7 vs 4. Result: perception *did* change — but in the wrong direction. When signing felt too fast, users felt something was missing; **speed broke trust**. The 7-step flow, as estimated from the start, produced the confidence an e-signature needs. Learning: **in trust products, step count is a trust instrument, not a friction metric** — validated with data, not opinion.

#### Collaboration & Alignment
**Stakeholders:**
- Identity validation team — the stage I owned first — Builders
- Document visualization team — separate stack, DocuSign reference — Builders
- Certificate team — separate stack, per-country issuance — Builders
- Product — requested step reduction, white label — Decision-maker
- Country stakeholders (Chile, Peru…) — legislation requirements — Gatekeepers
- Movistar / Banco Santander — buy-side, white label definition — Buyers

**Alignment Story:**
The hardest moment was the step-count request. Everyone expected "less steps = better." I didn't argue — I built the A/B test. The fast 4-step flow made users *suspicious*: signing a contract with a phone line or a bank is a heavy act, and when it was over too quickly people felt they hadn't had the chance to really decide. The 7 steps, which we'd estimated from the start, felt like a complete ecosystem — exactly the trust the directive was after. I kept the 7, backed by data, and that's the moment I felt I'd done it right. The unification (three technologies, three developer teams, aligned in workshops so the splice disappeared) and the sale in two phases to **Movistar** and **Banco Santander** came after.

**Handoff:** Global design system components (identity validation reusables), Country × certificate configuration matrix, Shared visual layer spec across the three engines, White-label base with per-client illustration pipeline (negotiated as later deliverable), A/B documentation for the step-count decision.

---

### 3. EXECUTION — WHAT I DID

| Area | Contribution | Impact |
|------|-------------|--------|
| **Benchmark** | Mapped how the market validates identity across many apps | Evidence base for the identity validation stage |
| **Identity Validation** | Owned the stage end-to-end as lead designer | Validated identity as part of one trusted experience |
| **Design System** | Implemented validation components into the global system | Reusable across flows and future products |
| **Document Visualization** | Took over the stage; heavily referenced DocuSign | Familiar, trusted reading experience |
| **Electronic Certificate** | Led issuance per country (Clave Única 🇨🇱, 2 validations 🇵🇪) | Signatures valid under each country's legislation |
| **Cross-Tech Unification** | Workshops to kill the splice + one shared visual layer over 3 engines | One product feel, no "leaving the experience" |
| **A/B + Usability** | Tested 7 vs 4 steps → kept 7 (trust perception) | Data-backed flow decision, not opinion |
| **White Label** | Branded base elements; per-client illustrations negotiated as later delivery | Sold in 2 phases to Movistar & Banco Santander |

---

### 4. RESULTS

#### Quantitative
- **Step count:** kept 7 of 7 — validated by A/B + usability; 4-step variant *reduced* trust
- **Money:** project sold in **two phases to Movistar and Banco Santander**
- **Techs unified:** 3 technologies → 1 consistent visual experience
- **Certificate coverage:** per-country rules live in 4 countries (Chile, Peru, Colombia, Ecuador)
- **Design system:** 6+ identity validation components absorbed into global system
- **Flow completion:** 95% | **Error rate:** 2/20 (10%) during testing | **NPS:** 9/10

#### Qualitative
- Validation insights and the 7-vs-4 step A/B covered in the pivot and alignment story above.

#### Business Impact
- White label validated as a sales channel — Movistar and Banco Santander bought in two phases
- Per-client visuals/illustrations negotiated as a paid later deliverable

---

### 5. REFLECTION

#### Learnings

| Category | Insight | Application Today |
|----------|---------|-------------------|
| Product | Step count is a trust instrument, not a friction metric — the fast flow felt fake | Test trust metrics, not just speed |
| Technical | Three engines can share one experience if you kill the visual splice | Unify the experience layer; keep the engines distinct |
| Legal | Signature validity is configured per country — legislation is config | Country × requirement matrix before design |
| Process | Data over opinion wins pressure debates, especially on "fewer steps" | Build the A/B before changing the flow |
| Design System | Components only pay off when they reach the global system | Absorb reusable parts as you ship |

#### What I'd Do Differently
1. **Document the A/B result for stakeholders earlier** — the proof existed, but packaging it for product decision-making took extra cycles.
2. **Map all country rules in week one** — Chile and Peru drove design; a full legislation matrix up front would have anticipated more.
3. **Build the white-label illustration pipeline into the price from the start** — the visuals were the negotiated later deliverable; pricing them earlier would have avoided scope conversations at sale time.

---

### 6. TECH STACK

**Core:** React / Next.js / TypeScript — with multiple engines behind a unified visual layer: outsourced legacy projects from other companies, Clave Única identity validation (Chile), and a bespoke stack built to measure for the remaining flow

**My Decisions:**

| Tool/Tech | Reason | Alternatives |
|-----------|--------|--------------|
| Shared visual layer over 3 engines | One product feel without rewriting backend stacks | Full rewrite (too risky) |
| Global design system for validation | Reusable across flows & products | Local-only components |
| Per-country certificate config | Chile (Clave Única), Peru (2 validations) differ legally | Single global rule (invalid) |

---

### 7. SEO & SHARING

**SEO Title:** E-Signer: The Trust System Behind Advanced Electronic Signatures in LATAM
**SEO Description:** How identity validation, per-country certificates and document visualization were unified into one trusted experience — and how A/B testing proved that 7 steps build more confidence than 4. Sold to Movistar and Banco Santander.
**Social Image:** One flow, three engines — identity validation, certificate, and document visualization sharing a single visual layer. Headline: "Trust is the product. Speed was the trap."