# FitMaterial Materials

## META
- **Slug:** `fitmaterial-plataforma-materiales-construccion`
- **Title:** FitMaterial Materials
- **Subtitle:** Digitizing a dusty industry so builders get materials on time, every time
- **Year:** 2021
- **Category:** E-commerce / Herramientas / Distribución
- **Client:** FitMaterial
- **Location:** Colombia — On-site
- **Role:** Product Designer — Leading Product Design for Construction Materials E-Commerce Platform
- **Scope:** Research, UX/UI Design, Design System, Prototyping, Usability Testing
- **Team Size:** [VALIDAR]
- **Duration:** [VALIDAR]
- **Status:** ⏳ PENDING APPROVAL
- **Public:** ❌ NO
- **Featured:** false

---

## CONTENT

### 1. STRATEGIC FRAMING

#### Problem
At FitMaterial, the process for ordering construction materials was a manual, paper-based nightmare:

- **Manual ordering process** — builders called, emailed, or visited stores; orders were written down
- **Error-prone**: mistakes in orders, delays, lost orders between handoffs
- **Slow & inefficient**: no online ordering, no catalogs, no price transparency
- **Supply chain chaos**: stock levels unknown until it was too late
- **No analytics**: FitMaterial couldn't see what was selling, what wasn't

Meanwhile, construction is time-critical: a crew waiting for materials is the most expensive thing on a site. The real problem wasn't "build a webstore." It was: **how do you take a manual, trust-based sales process and make it digital without losing the relationships and reliability that keep builders coming back?**

#### Vision
> **A construction materials platform that makes ordering as reliable as a handshake — but 10x faster.**

An online platform where builders browse catalogs, get transparent pricing, order in minutes, and track delivery — while FitMaterial gets real-time visibility into stock and demand.

#### Success Metrics (defined before design)
| Metric | Baseline | Target | Source | Timeframe |
|--------|----------|--------|--------|-----------|
| Order accuracy | Low (manual errors) | High (digital validation) | Order logs | Launch + 3 months |
| Time to order | Long (manual) | Short (online) | Platform analytics | Launch + 3 months |
| Customer satisfaction | Moderate | High | Surveys | Launch + 6 months |
| Sales growth | Flat | Increased | Platform/CRM data | Launch + 12 months |

---

### 2. METHODOLOGY — HOW I THINK

#### Research & Discovery
**Methods:** Stakeholder interviews (FitMaterial management), User interviews (builders, procurement), Order process audit (paper trail), Competitive analysis (construction e-commerce), Usability baseline tests

**Participants:** [VALIDAR — builders, procurement staff, FitMaterial team]

**Duration:** [VALIDAR]

**Key Findings:**
1. **Trust is the currency** — builders came back to the same supplier for years because of reliability and relationship, not price. The platform had to preserve that.
2. **"I need it now" is the norm** — construction is time-critical. A crew waiting = money burning. Speed mattered more than anything.
3. **The paper trail hid the truth** — nobody actually knew stock levels, order status, or what was selling until it surfaced as a complaint.
4. **Buyers aren't always digital-first** — many builders order from a phone in a muddy site at 6am. The UX had to be forgiving, clear, and fast on small screens.

**Artifacts:** Order-process journey map, Stock/order data audit, Competitive feature matrix, Pain-point report with time-costs

#### Strategy & Framing
**Problem Statement (HMW):**
> How might we bring a manual, paper-based materials business online — improving speed and accuracy without breaking the trust that keeps builders loyal?

**Design Principles:**
1. **Reliability first** — accurate orders, clear status, on-time expectation setting
2. **Speed to order** — builders are time-poor; order in minutes, not phone calls
3. **Transparency builds trust** — real pricing, real stock, no surprises
4. **Forgiving by design** — quick-order paths for rough environments (small screens, gloves, early mornings)
5. **The platform serves both sides** — builders get convenience; FitMaterial gets data and control

**Success Criteria:**
- Order placed online in minutes from a phone
- Digital validation cuts manual errors
- Real-time stock and order status on both sides
- Sales and analytics visibility for FitMaterial

**Constraints & Tradeoffs:**

| Type | Description | Impact | How Addressed |
|------|-------------|--------|---------------|
| Business | Existing manual sales process and relationships | High | Digital-first, relationship-preserving flows |
| Technical | Inventory system integration | High | Real-time stock sync; data migration plan |
| Cultural | Non-digital-native buyers | Medium | Forgiving UX; phone-first design |
| Product | Platform serves two audiences | Medium | Divide flows by role (builder vs. staff) |

#### Design & Iteration
**Exploration:** Attempt 1 mirrored the catalog-heavy pattern of consumer e-commerce — builders hated it: too much browsing, not enough "give me the price and the truck." Attempt 2 leaned into quick-order: search, price, order in under a minute.

**Prototyping:** Quick-order flow, product catalog with unit-pricing clarity, order status tracker, stock views (buyer + staff), mobile-first layout.

**Testing:** Usability tests with builders on real order scenarios; measured time-to-order and error rate; iteration on the quick-order shortcut.

**Key Decisions:**

| # | Context | Options | Decision | Rationale | Tradeoffs |
|---|---------|---------|----------|-----------|-----------|
| 1 | Order model | Full catalog browsing / Quick-order shortcut / Both | **Quick-order first** | Builders know what they need; they want price + truck | Less product discovery |
| 2 | Phone experience | Desktop-first / Mobile-first / Equal | **Mobile-first** | Orders happen on site, in the field | More design effort on small screens |
| 3 | Stock display | Hide stock / Show real-time stock / Show levels only | **Real-time stock (role-scoped)** | Builders plan arrivals; staff manage supply | Requires inventory integration |
| 4 | Migration | Big-bang / Gradual (pilot) / Parallel | **Gradual with existing channels kept** | Don't break existing trust-based orders | Two channels to maintain |

**Pivots:**
1. **Catalog-heavy → Quick-order** — Trigger: builders in tests rejected browsing; they knew what they wanted. Learning: for expert buyers, speed beats discovery.

#### Collaboration & Alignment
**Stakeholders:**
- FitMaterial management — Client, decision power — Approver
- Sales/fulfillment staff — Existing process owners, will operate the platform — Key users
- Builder customers — Order now from the field — Adopters
- Inventory/logistics team — Stock data, delivery — Dependencies

**Alignment Story:**
The deepest tension was relationship vs. digitization. Sales staff feared the platform would bypass their personal relationships with builders; builders feared a "cold" system would break the reliability they depended on. The resolution: the platform augmented, not replaced — staff got a dashboard, builders kept a person via chat/telephone alongside digital ordering. Same reliability, faster and with a paper trail. That "both channels" decision was the one that kept everyone at the table.

**Handoff:** Quick-order flow specs, Mobile-first design system, Stock/order tracker designs, Staff dashboard designs, Migration plan.

---

### 3. EXECUTION — WHAT I DID

| Area | Contribution | Impact |
|------|-------------|--------|
| **Research** | Order-process audit + builder interviews | Located where manual process cost the most (time, errors) |
| **UX/UI Design** | Quick-order platform: search, price, order, track | Orders in minutes from a phone |
| **Design System** | Mobile-first system for a dusty-but-real industry | Consistent, fast, forgiving UI |
| **Prototyping** | Tested quick-order flow on real order scenarios | Validated speed + accuracy before build |
| **Usability Testing** | Builders in field conditions | Caught mobile/rough-environment failures early |

---

### 4. RESULTS

#### Quantitative
- **Faster time to order** vs. manual process (phone/paper)
- **Fewer order errors** through digital validation
- **Increased sales growth** from smoother buying
- **Improved customer satisfaction** via surveys

#### Qualitative
> "I used to call, wait on hold, and hope the truck came. Now I check and order in two minutes." — [VALIDAR context]

> [VALIDAR — quote]

#### Business Impact
- FitMaterial gained real-time visibility into stock and demand
- [VALIDAR — order volume, satisfaction scores]

#### Adoption Metrics
- [VALIDAR]

---

### 5. REFLECTION

#### Learnings

| Category | Insight | Application Today |
|----------|---------|-------------------|
| Product | Expert users don't need discovery — builders know what they want; give them price + speed | Design for the job to be done, not the browsing pattern |
| Product | Mobile-first for field work — the office is a truck cab or a mud site | Design for the real environment |
| Product | Trust is a feature — reliability and a human in the loop kept loyalty alive | Preserve human touch in digitized flows |
| Product | Two audiences, one system — staff and buyers need different views of the same data | Role-scoped UX on shared data |
| Business | Digitize without breaking existing revenue — gradual beats big-bang | Parallel channels de-risk migration |

#### What I'd Do Differently
1. **Start with the quick-order thesis** — The catalog-heavy v1 cost a round of iteration I could have saved by asking one early question: "do builders browse or do they know?"
2. **Field-test earlier** — Phone-in-gloves scenarios were tested late; testing in rough environments from the first prototype would have shaped targets and contrast sooner.
3. **Staff dashboard in MVP scope** — The staff side launched after the buyer side; both needed to be designed together to avoid asymmetric data flows.

---

### 6. TECH STACK

**Core:** React/Next.js, TypeScript, Tailwind CSS

---

### 7. SEO & SHARING

**SEO Title:** FitMaterial: Bringing Construction Materials Ordering Online
**SEO Description:** How a paper-based materials supplier went digital with a quick-order, mobile-first platform — faster orders, fewer errors, and real stock visibility.
**Social Image:** Two frames — the old way (phone, paper, muddy boots) vs. the new way (two-minute quick-order from a phone). Headline: "Crew waiting is money burning."