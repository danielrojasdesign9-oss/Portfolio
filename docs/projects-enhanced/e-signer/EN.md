# E-Signer Digital

## META
- **Slug:** `e-signer-app-documentos-firmas-digitales`
- **Title:** E-Signer Digital
- **Subtitle:** Making high-assurance signing of multiple document types fast, clear, and legally trustworthy
- **Year:** 2021
- **Category:** Legal Tech / Documents / File Management
- **Client:** E-Signer
- **Location:** Colombia — On-site
- **Role:** Product Designer — Cross-Platform Product Design for Secure Digital Document Signing App (iOS, Android, Web)
- **Scope:** Research, Cross-Platform Design (iOS, Android, Web), Motion Design, UX/UI, Design System, Testing
- **Team Size:** [VALIDAR]
- **Duration:** [VALIDAR]
- **Status:** ⏳ PENDING APPROVAL
- **Public:** ✅ YES
- **Featured:** false

---

## CONTENT

### 1. STRATEGIC FRAMING

#### Problem
Digital signing is high-stakes: a signature wrongfully placed is a legal disaster. Yet signing apps treat it like a generic form flow. The issues:

- **Multiple document types** (contracts, invoices, policies, settlements) each with different signing rules and pressure levels
- **Cross-platform inconsistency** — iOS, Android, and Web each felt like different products
- **User anxiety around validity** — people hesitate: "if I sign this wrong, is it legally binding against me?"
- **Friction on the critical step** — the signature act itself, where confidence matters most
- **No guidance through documents** — signers asked to approve what they haven't read or can't find

The real problem wasn't "put a signature field on a PDF." It was: **how do you make a legally momentous act feel safe, obvious, and calm — across three platforms at once?**

#### Vision
> **A signing experience so clear people sign with confidence — on any device, on any document type.**

A cross-platform high-assurance signature flow: every document type got a clear path, every platform got the same mental model, and the signature moment itself got the care it deserved.

#### Success Metrics (defined before design)
| Metric | Baseline | Target | Source | Timeframe |
|--------|----------|--------|--------|-----------|
| Signature flow completion | Low (friction) | High | Funnel analytics | Launch + 3 months |
| Cross-platform consistency | Low (3 products) | High (1 mental model) | Audit + user feedback | Launch + 3 months |
| User error in signing | High | Reduced | Error logs / support | Launch + 6 months |
| User confidence/trust | Uncertain | High | Survey | Launch + 3 months |

---

### 2. METHODOLOGY — HOW I THINK

#### Research & Discovery
**Methods:** User interviews (professionals who sign documents), Usability tests (signing simulations), Cross-platform audit (iOS/Android/Web), Document-type analysis (signing rules per type), Support/error log review, Motion design exploration (appropriate feedback for confirmation states)

**Participants:** [VALIDAR — professionals signing documents daily]

**Duration:** [VALIDAR]

**Key Findings:**
1. **Anxiety is real.** Users worried a "wrong" signature would be legally binding against them. Confidence was a correctness problem, not just a feel-good problem.
2. **Doc types differ in pressure** — a settlement is heavier than an invoice. One-size-fits-all signing ignored this.
3. **Platforms drifted** — iOS, Android, Web each evolved their own logic; users on two devices felt they were learning two products.
4. **The signature itself was under-designed** — it was a field to fill, not a moment to confirm.

**Artifacts:** Document-type pressure map, Cross-platform UX audit, Signing confidence findings, Motion/feedback specs draft

#### Strategy & Framing
**Problem Statement (HMW):**
> How might we make a legally momentous signature feel confident and calm — consistent across iOS, Android, and Web — so users sign the right thing, in the right place, without hesitation?

**Design Principles:**
1. **One mental model, three platforms** — shared flows, localized details
2. **The signature moment is sacred** — full confirmation care at the act
3. **Document type = context** — adapt pressure, warnings, and guidance accordingly
4. **Certainty over speed** — the signature is not a form field to rush
5. **Motion supports meaning** — confirmation states animate, nudges don't

**Success Criteria:**
- Signature completion high across all doc types
- Users can't miss which document they're signing or where
- Same mental model verified on iOS, Android, Web
- Signing error rate down

**Constraints & Tradeoffs:**

| Type | Description | Impact | How Addressed |
|------|-------------|--------|---------------|
| Product | Cross-platform consistency vs. native platform idioms | High | Core flow shared; native ergonomics where they matter |
| Brand | Motion on secure act — appropriate but not frivolous | Medium | Motion design review; confirmation-only animation |
| Technical | Three codebases / platforms | High | Design system as single source of truth |
| Legal | High-stakes correctness | High | Verification of documents, clear signing location |

#### Design & Iteration
**Exploration:** Attempt 1 treated signing as a generic PDF form flow — usable but anxiety-blind. Attempt 2 designed the signature as a distinct, sacred moment: clear document recap, exact signing spot, explicit confirmation, calm feedback.

**Prototyping:** Per-document-type signing flows, Document recap before signature, Signature confirmation moment with motion, Cross-platform core flow.

**Testing:** Signing simulations across iOS/Android/Web; measured completion, hesitation, and error; motion micro-tests on confirmation states.

**Key Decisions:**

| # | Context | Options | Decision | Rationale | Tradeoffs |
|---|---------|---------|----------|-----------|-----------|
| 1 | Platform approach | Native-only logic per platform / One shared mental model / Separate products | **One shared mental model** | Users learn the product once on any device | Native ergonomics where needed |
| 2 | Signature UX | Form-field signature / Sacred confirmation moment / No special treatment | **Sacred confirmation moment** | The act is legally momentous, treat it so | More steps at the finish |
| 3 | Document-type handling | Uniform flow / Pressure-aware flows / Type-aware warnings only | **Pressure-aware flows** | A settlement ≠ an invoice | More flow variants |
| 4 | Motion | None / Decorative / Confirmations only | **Confirmations only** | Marks significance without frivolity | Restrained system |

**Pivots:**
1. **Form field → Sacred moment** — Trigger: interviews revealed signing anxiety (worry it's legally binding). Learning: the signature act needs confidence design, not just efficiency.

#### Collaboration & Alignment
**Stakeholders:**
- E-Signer product team — Platform decisions — Approver
- Engineering (3 platforms) — Build across stacks — Builders
- Legal advisory — Correctness requirements — Gatekeeper
- Professional signers — End users — Adopters

**Alignment Story:**
The tension was platform-purity vs. consistency: each platform team wanted its own logic. Legal added a second tension: everything must be verify-correct first. The resolution was a shared core mental model (single flow, single design system) with native ergonomics on the edges — and the "sacred moment" signature view that satisfied both legal (recap + verification) and users (confidence).

**Handoff:** Design system for 3 platforms, Per-type flow specs, Motion spec for confirmation states, Legal verification checklist.

---

### 3. EXECUTION — WHAT I DID

| Area | Contribution | Impact |
|------|-------------|--------|
| **Research** | Interviews + signing simulations + cross-platform audit | Mapped anxiety and platform drift |
| **Cross-Platform Design** | One shared signing mental model for iOS, Android, Web | Users learned the product once |
| **Document-Type Flows** | Pressure-aware signing flows per document type | Heavier docs = heavier confirmation |
| **Motion Design** | Confirmation animations, calm state feedback | Appropriate sign and significance |
| **UX/UI + Design System** | Full system + specs for 3 platforms | Consistent, buildable design |

---

### 4. RESULTS

#### Quantitative
- **Higher signing completion** across document types
- **Lower signing errors** via clearer confirmation
- **Consistency across platforms** — one experienced mental model

#### Qualitative
> "I no longer hesitate before signing. The app makes it obvious I'm signing the right thing." — [VALIDAR context]

> [VALIDAR — quote]

#### Business Impact
- [VALIDAR — trust, support reduction, legal/error metrics]

---

### 5. REFLECTION

#### Learnings

| Category | Insight | Application Today |
|----------|---------|-------------------|
| Product | High-stakes moments need high-stakes UX — a signature is not a form field | Design the "act," not the field |
| Product | Document type is context — a settlement and an invoice need different care | Adapt friction to stakes |
| Platform | Cross-platform consistency is a product decision, not a dev concern | One mental model, localized details |
| Product | Motion should mean something — confirmations animate, nudges don't | Use motion to mark significance |

#### What I'd Do Differently
1. **Distinguish document types earlier** — The per-type pressure differences surfaced late; a doc-type taxonomy in research week one would have guided tests sooner.
2. **Prototype on all three platforms from the start** — Cross-platform drift was discovered in audit, not prevented; designing the shared core as a single prototype would have caught drift earlier.
3. **Test the signature act with the nervous, not the fluent** — Tests leaned on comfortable users; including legally cautious "non-fluent" signers would have hardened the confidence flow.

---

### 6. TECH STACK

**Core:** iOS (Swift), Android (Kotlin), Web (React/Next.js/TypeScript)

---

### 7. SEO & SHARING

**SEO Title:** E-Signer: A Signature Experience People Trust on Every Platform
**SEO Description:** How a cross-platform signing app made a legally momentous act feel calm and obvious — one mental model across iOS, Android, and Web, with pressure-aware flows per document type.
**Social Image:** Three devices, one signature moment — iOS, Android, Web showing the same confident confirmation state. Headline: "Sign like you mean it."