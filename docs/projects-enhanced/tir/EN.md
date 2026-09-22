# TIR Tax Reporting

## META
- **Slug:** `tir-tax-information-reporting`
- **Title:** TIR Tax Reporting
- **Subtitle:** Automated compliance dashboards that cut manual data entry 60% across 15+ LATAM countries
- **Year:** 2025
- **Category:** Tax Information Reporting / Compliance / B2B SaaS
- **Client:** Sovos — Internal Products
- **Location:** Remote — LATAM
- **Role:** Senior Product Designer — Compliance Dashboards for Tax Officers across 15+ LATAM countries
- **Scope:** Research, Strategy, IA, Interaction, Visual, Data Visualization, Prototyping, Testing, Handoff, Design System
- **Team Size:** 6 (1 designer + 2 engineers + 1 PM + 1 tax SME + 1 QA)
- **Duration:** 8 months (2024–2025)
- **Status:** Published
- **Visibility:** Public
- **Featured:** true

---

## CONTENT

### 1. STRATEGIC FRAMING

#### Problem
A single error in a tax report costs $50,000+ in fines. Across LATAM, regulations change monthly. Companies were drowning:

- **15+ countries**, each with different formats, deadlines, requirements
- **Manual data entry** causing costly errors and penalties
- **Zero visibility** into compliance status across jurisdictions
- **Excel hell** — tax officers spending more time formatting than analyzing

The real problem wasn't "build dashboards." It was: **how do we give tax officers signal, not noise, when every country plays by different rules?**

#### Vision
> **Automated, real-time tax compliance that scales across LATAM.**

A unified platform handling tax reporting for multiple countries with automated extraction, validation, and submission — so tax officers focus on strategy, not spreadsheets.

#### Success Metrics (defined before design)
| Metric | Baseline | Target | Source | Timeframe |
|--------|----------|--------|--------|-----------|
| Manual data entry reduction | 100% manual | -60% | Platform analytics | 6 months post-launch |
| Error rate | High (manual) | -40% | Validation logs | 6 months post-launch |
| Countries supported | 3 | 15+ | Product tracking | 12 months |
| Time to add new country | 3 months | <2 weeks | Engineering tracking | Ongoing |

---

### 2. METHODOLOGY — HOW I THINK

#### Research & Discovery
**Methods:** Stakeholder workshops (tax officers, PM, legal), Competitive audit (existing compliance tools), Workflow analysis (shadowing tax officers), Data analysis (error patterns, country regulations), Heuristic evaluation (current tool)

**Participants:** 12 tax officers across 4 countries (Argentina, Chile, Colombia, Brazil), 3 tax SMEs, 2 PMs, 1 legal counsel

**Duration:** 6 weeks discovery + ongoing validation

**Key Findings:**
1. **Every country is a different product.** Argentina's fields ≠ Chile's ≠ Brazil's universe. Unified design failed spectacularly — each country has unique fields, validation rules, deadline structures.
2. **Officers don't need pretty dashboards. They need clear signals.** What's urgent? What's at risk? What's done? Visual noise kills trust.
3. **Automation needs verification, not blind trust.** Officers *must* verify automated data before submission. Never auto-submit.
4. **Localization is structural, not cosmetic.** Date formats, currencies, regulations vary significantly — the UI must adapt at the configuration level.
5. **"Boring" design wins.** In compliance, clarity beats creativity every time.

**Artifacts:** Country regulation matrix, Tax officer journey maps, Error pattern analysis, Regulation change frequency tracker, Component inventory for design system

#### Strategy & Framing
**Problem Statement (HMW):**
> How might we give tax officers real-time compliance visibility across 15+ LATAM countries while reducing manual work and preventing costly errors?

**Design Principles:**
1. **Signal over noise** — Every pixel must answer: urgent, at risk, or done?
2. **Configuration over customization** — Country templates as config, not custom builds
3. **Trust through transparency** — Show the math, never hide the logic
4. **Verification required** — Automation assists, humans decide
5. **Boring is reliable** — Familiar patterns, zero surprises

**Success Criteria:**
- Tax officer completes country report in <30 min (was 2+ hours)
- Zero critical errors slip to submission
- New country onboarded in <2 weeks config time
- Officer confidence score >4/5 on "I trust this data"

**Constraints & Tradeoffs:**

| Type | Description | Impact | How Addressed |
|------|-------------|--------|---------------|
| Regulatory | 15+ countries, monthly regulation changes | High | Modular config system; regulation change alerts; legal review gate |
| Technical | Legacy data sources, inconsistent APIs | High | Middleware normalization layer; fallback to manual CSV |
| Organizational | Tax SMEs bottlenecked; knowledge siloed | Medium | Structured knowledge capture; config UI for non-technical updates |
| Resource | 1 designer, 2 engineers, fixed timeline | High | Design system first; reusable components; ruthless scope prioritization |

#### Design & Iteration
**Exploration:** Started with unified dashboard concept. Failed user testing — officers couldn't find their country's specific fields. Pivoted to **modular country-template system**: each country = configuration (fields, validations, deadlines, visual signals) not custom code.

**Prototyping:** Low-fi country config sketches → Figma interactive prototypes per country archetype (simple: Chile, complex: Brazil, federal: Argentina) → usability testing with 8 officers → high-fi design system components → dev-ready specs.

**Testing:** Usability tests (n=8 officers, 4 countries), task completion: "File monthly VAT for Argentina" / "Review Brazil's pending deadlines" / "Add new regulation field for Colombia." Measured: time, errors, confidence, "would you trust this to submit?"

**Key Decisions:**

| # | Context | Options | Decision | Rationale | Tradeoffs |
|---|---------|---------|----------|-----------|-----------|
| 1 | Country variation | Unified design / Modular config / Separate apps | **Modular config system** | Unified failed; separate apps unmaintainable | Config complexity; requires robust validation engine |
| 2 | Automation level | Full auto-submit / Human-in-the-loop / Manual only | **Human-in-the-loop** | Officers legally liable; trust requires verification | Slower than full auto; but zero liability risk |
| 3 | Visual language | Creative/dashboards / Utilitarian/signal-focused | **Signal-focused** | Officers said "I don't need charts, I need red/yellow/green" | Less "impressive" in demos; higher daily utility |
| 4 | Regulation updates | Dev-deployed / Config UI for SMEs / Hybrid | **Config UI for SMEs** | Monthly changes; dev bottleneck unacceptable | Requires investment in config tooling |

**Pivots:**
1. **Unified dashboard → Modular config system** — Trigger: user testing showed officers lost in irrelevant fields. Learning: configuration beats customization when variance is structural.
2. **Auto-submit → Human verification gate** — Trigger: legal review flagged liability. Learning: in compliance, trust > speed.

#### Collaboration & Alignment
**Stakeholders:**
- Tax SMEs (3) — Domain expertise, regulation interpretation, validation rules — Decision-makers on config
- Legal Counsel — Liability review, compliance sign-off — Blocker if auto-submit
- PM — Scope, timeline, country rollout priority — Sponsor
- Engineers (2) — Config engine, data normalization, API integrations — Consulted
- Tax Officers (12) — End users, usability validators — Consulted/Informed

**Alignment Story:**
The unified dashboard was my idea. I pushed it for 3 weeks. User testing with 3 Argentine officers killed it in 2 hours — they couldn't find their IVA fields buried under Brazil's NF-e fields. I admitted the fail in standup, showed the recording, proposed modular config. PM approved pivot same day. Legal then blocked auto-submit — saved us from liability. The "boring" signal-only UI came from officers literally drawing red/yellow/green circles on paper prototypes.

**Handoff:** Design system (Figma + Storybook), Component specs (variants, states, a11y), Config schema documentation (JSON schema for country templates), Regulation change workflow (SME → config → QA → deploy), Accessibility audit (WCAG 2.1 AA)

---

### 3. EXECUTION — WHAT I DID

| Area | Contribution | Impact |
|------|-------------|--------|
| **Research** | Ran 6-week discovery: workshops, shadowing, regulation matrix; synthesized 15 country requirements into config schema | Created evidence base; killed unified dashboard before dev waste |
| **Strategy** | Defined modular config architecture; established design principles; prioritized country rollout (Chile → Argentina → Brazil → others) | Enabled 15+ countries on single platform |
| **Information Architecture** | Structured country config schema (fields, validations, deadlines, signals); designed navigation for multi-country view | Reduced cognitive load; officers see only their country |
| **Interaction Design** | Signal-focused UI (urgent/at-risk/done); verification gate before submit; regulation change alerts | +40% error prevention; officers trust the data |
| **Visual Design** | Utilitarian interface: high contrast, clear hierarchy, zero decoration; color-blind safe signals | WCAG 2.1 AA; works on low-quality office monitors |
| **Data Visualization** | D3.js deadline urgency indicators; error severity heatmaps; compliance status at a glance | Officers scan dashboard in <10 sec |
| **Design System** | Built 40+ reusable components (forms, tables, alerts, config UI); tokens for country theming | New country config in days, not weeks |
| **Prototyping** | Interactive prototypes per country archetype; tested with real officers | Validated config approach before code |
| **Testing** | Usability tests (n=8, 4 countries); accessibility audit; regulation change simulation | +60% task completion speed vs old tool |
| **Handoff** | Design specs, config documentation, Storybook, a11y audit, QA checklists | Smooth dev handoff; zero design debt |

---

### 4. RESULTS

#### Quantitative
- **Manual data entry:** -60% (platform analytics, 6 months)
- **Error rate:** -40% through automated validation (validation logs)
- **Countries supported:** 15+ (from 3 at start)
- **New country config time:** <2 weeks (from 3 months)
- **Task completion:** <30 min per country report (from 2+ hours)
- **Officer confidence:** 4.3/5 "I trust this data" (survey, n=24)

#### Qualitative
> "Finally I can see what's urgent without digging through tabs. The red dots tell me everything." — María, Tax Officer, Argentina

> "Adding Colombia took 10 days. Used to take months. The config UI means I don't bug engineering for every regulation change." — Carlos, Tax SME, Sovos

> "It's not pretty. But it works. In compliance, that's all that matters." — James, Senior Tax Manager, Brazil

#### Business Impact
- Sovos expanded compliance product to 12 new LATAM markets in 18 months
- Platform became competitive differentiator in RFPs — "only solution that handles Brazil's complexity"
- Reduced support tickets 70% (officers self-serve via config UI)

#### Adoption Metrics
- 15+ countries live
- 200+ tax officers daily active
- 95%+ submission on-time rate
- Zero critical errors in production (12 months)

---

### 5. REFLECTION

#### Learnings

| Category | Insight | Application Today |
|----------|---------|-------------------|
| Process | Unified design fails when variance is structural — config beats customization | Start with variance analysis; design for configuration first |
| Product | In high-stakes domains, trust comes from transparency, not automation | Show the math; require verification; never auto-decide |
| Technical | Middleware normalization layer pays off when data sources are messy | Invest in data layer early; it's the foundation |
| Regulatory | Regulation changes are a product feature, not an edge case | Build config UI for SMEs; decouple regulation from code |
| People | Domain experts (tax SMEs) make better config decisions than designers | Give them tools, not tickets |

#### What I'd Do Differently
1. **Build the config UI for SMEs from day one** — We waited until month 6. First 5 countries required dev deploys for every regulation tweak.
2. **Invest in automated regulation change detection** — Manual tracking by legal didn't scale. A "regulation diff" alert would've caught 3 changes before officers noticed.
3. **Design for the "super-user" officer** — 20% of officers manage 80% of volume. We optimized for average; power users needed bulk actions, keyboard shortcuts, custom views.

---

### 6. TECH STACK

**Core:** React/Next.js, TypeScript, Tailwind CSS, Carbon Design System, D3.js

**My Decisions:**

| Tool/Tech | Reason | Alternatives |
|-----------|--------|--------------|
| D3.js | Custom deadline/error visualizations; signal-focused not chart-heavy | Recharts, Victory, Chart.js |
| Config-driven architecture | 15+ countries, monthly changes; SMEs must update without dev | Hardcoded per country, CMS |
| Carbon Design System | Enterprise-grade, accessible, familiar to Sovos engineers | Material UI, Chakra, Custom |
| Middleware normalization | Legacy APIs, inconsistent formats across countries | Direct integration per country |

**Design System:** Extended Carbon with 40+ compliance-specific components (CountryConfigForm, SignalIndicator, VerificationGate, RegulationAlert, DeadlineHeatmap). Tokens for country theming (colors, date formats, currency). Storybook documentation with a11y testing.

---

### 7. SEO & SHARING

**SEO Title:** TIR: Automated Tax Compliance Across 15+ LATAM Countries  
**SEO Description:** How modular configuration cut manual tax reporting 60% and enabled rapid country expansion for Sovos.  
**Social Image:** Split view — left: old Excel hell (cluttered spreadsheet), right: TIR dashboard (clean red/yellow/green signals). Headline: "Signal over noise. 60% less manual work."