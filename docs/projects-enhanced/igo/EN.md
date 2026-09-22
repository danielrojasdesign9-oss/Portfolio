# IGO WhatsApp

## META
- **Slug:** `igo-conversational-commerce-whatsapp`
- **Title:** IGO WhatsApp
- **Subtitle:** From idea to paying revenue in 8 weeks, with one radical constraint: no app, no website — commerce living entirely inside the chat
- **Year:** 2026
- **Category:** Conversational Commerce / AI / E-commerce / SaaS
- **Client:** IGO (startup, co-founded)
- **Location:** Remote
- **Role:** Co-founder & CPO — Product, Design, Strategy, Delivery
- **Scope:** Research, Product Strategy, Conversational UI, Platform Architecture, AI Features, Founder-led Delivery
- **Team Size:** 5 (2 co-founders + 3 contractors)
- **Duration:** Jan – May 2026 (~5 months)
- **Status:** ⏳ PENDING APPROVAL
- **Public:** ✅ YES
- **Featured:** false

---

## CONTENT

### 1. STRATEGIC FRAMING

#### Problem
- **Where they sell**: WhatsApp statuses and threads — where customers already are
- **Where it breaks**: customer asks "do you have this in another size, and how do I pay?" — and everything falls apart
- **Fragmented sales**: Product photos in statuses, prices typed by hand, orders lost in chat threads
- **No checkout**: Payment happens via transfer links pasted one by one
- **No catalog**: Merchants hand-type product info in every conversation
- **No follow-up**: Repeat buyers and abandoned chats = lost revenue
- **No data**: Merchants can't tell what sells, what a customer bought, or who to go back to
- **The real problem**: not "build an e-commerce site" — **customers are already inside WhatsApp; give the merchant a full store, inside the chat, with no app to build or ship**

#### Vision
> **Every WhatsApp chat becomes a storefront.**

- **What it is**: AI-driven conversational commerce — catalog, orders, payments, and follow-up managed entirely inside WhatsApp
- **What it removes**: no app for the buyer to install, no website to build

#### Success Metrics (defined before design)
| Metric | Baseline | Target | Source | Timeframe |
|--------|----------|--------|--------|-----------|
| Customer checkout completion | n/a (typing by hand) | 50%+ of asks convert | Platform analytics | MVP + 1 month |
| Merchant onboarding | 15–30 min (manual) | < 5 min on chat | Session logs | MVP |
| Pilot merchants with repeat sales | 0 | 50 recurring clients | Platform data | 5 months |
| MVP cost | n/a | Keep live under $5K/mo | Finances | MVP |

---

### 2. METHODOLOGY — HOW I THINK

#### Research & Discovery
- **Methods:** Merchant interviews (WhatsApp-first sellers), chat thread analysis (real sales conversations), competitor analysis (cart-to-chat solutions), payment provider research (LatAm)
- **Participants:** 15+ merchant pilots + potential merchants
- **Duration:** ~3 weeks (pre-MVP)

**Key Findings:**
1. **Merchants don't want a website.** They tried it; customers wouldn't leave WhatsApp. The store had to live where the conversation was.
2. **The checkout mindset**: buyers in chat are ready to buy but friction kills them — typing card details, copying links, hunting for prices.
3. **Follow-up is the invisible money**: merchants knew repeat buyers existed but couldn't remember or reach them. Data on "who bought what" was the untapped gold.
4. **AI had to feel like an employee, not a chatbot** — merchant-facing intelligence, not a FAQ bot.

- **Artifacts:** merchant pain-point map, real sales-conversation flows, payment-flow landscape, AI feature draft (catalog search, product disambiguation, follow-up)

#### Strategy & Framing
**Problem Statement (HMW):**
> How might we turn a merchant's WhatsApp thread into a full store — catalog, checkout, payment, and follow-up — so the buyer never leaves chat and the merchant never hand-types?

**Design Principles:**
1. **The chat is the product** — every feature works through conversation, not screens
2. **Notion of zero-install** — buyer never downloads anything
3. **AI back office** — the platform does the work, merchant just talks
4. **Speed to value** — pilot merchants live in weeks, not months
5. **Constraint-driven build** — no app, no website, tight budget; discipline creates focus

**Success Criteria:**
- A buyer can browse, ask, pay, and complete order entirely in chat
- Merchant manages everything in one thread without hand-typing product data
- Repeat-buyer follow-up is automated
- Live MVP under $5K/month

**Constraints & Tradeoffs:**

| Type | Description | Impact | How Addressed |
|------|-------------|--------|---------------|
| Technical | No app/site; everything on WhatsApp over an AI agent | Very high | Conversational UI + API integration as the whole product |
| Financial | < $5K live budget, no big raise | High | Lean stack; contractors; founder-led delivery |
| Timeline | ~8 weeks to MVP | High | Strict scope discipline; dangerous-path pruning |
| AI reliability | AI must not lose or mis-sell | High | Product disambiguation flows; human-in-the-loop guards |

#### Design & Iteration
- **Exploration:** MVP with a few pilot merchants, real transactions end-to-end
- **Learned live:** AI had to disambiguate products (color/size conflicts), handle cart edits, split payments
- **Prototyping:** conversational flows (browse → ask → cart → checkout → payment → confirmation), AI catalog search, order & follow-up automation
- **Testing:** live pilots (15+ merchants, real money), weekly iteration from chat transcripts, AI guardrail tuning

**Key Decisions:**

| # | Context | Options | Decision | Rationale | Tradeoffs |
|---|---------|---------|----------|-----------|-----------|
| 1 | Distribution | Web storefront + app / Chat-only / Both | **Chat-only** | Customers never leave WhatsApp; no install | Harder to demo as "screen" |
| 2 | MVP scope | Full suite / Core purchase loop first | **Core purchase loop** | Prove real revenue before breadth | Feature debt on edges |
| 3 | AI role | FAQ chatbot / Merchant back-office AI | **Back-office AI** | Merchant value, not consumer novelty | Heavier build |
| 4 | Payment strategy | One PSP / Multi-PSP / Split options | **Split/merchant-configured** | LatAm payment fragmentation | Integration effort |

**Pivots:**
1. **Lead-gen tool → commerce platform** — Trigger: early conversations showed merchants pasting payment links manually; the real value was the full loop, not just leads. Learning: follow the money flow in the chat, not the initial idea.
2. **AI human-to-human guardrails** — Trigger: first live pilots risked mis-selling on ambiguous attributes. Learning: disambiguation before shipping.

#### Collaboration & Alignment
**Stakeholders:**
- Co-founder — CEO/tech counterpart — Partner & builder
- 3 contractors — Engineering (AI, integrations, QA) — Delivery
- 15+ pilot merchants — First real users, revenue — Adopters
- Payment providers (LatAm) — Enablers/blockers — Dependencies

**Alignment Story:**
- **The constraint**: two co-founders, three contractors — no app, no website, $5K ceiling
- **The rule**: any feature that needed a screen died in review; anything that worked "in the thread" survived — one rule replaced dozens of arguments
- **The vote**: pilot merchants paid real money — 15+ went live, 50 recurring clients by month five

- **Handoff:** conversational flow specs, AI agent behavior guide, payment integration matrix, merchant onboarding playbook

---

### 3. EXECUTION — WHAT I DID

| Area | Contribution | Impact |
|------|-------------|--------|
| **Research** | Merchant interviews + real chat-thread analysis | Understood exactly where sales die in chat |
| **Product Strategy** | Full commerce loop in chat: catalog → checkout → payment → follow-up | A "store inside WhatsApp" |
| **Conversational UI** | Designed all user flows as chat sequences, not screens | Zero-install buyer experience |
| **AI Features** | Catalog search + product disambiguation + automated follow-up | Merchant back office that feels like an employee |
| **Founder Delivery** | Owned roadmap, shipped MVP in ~8 weeks, ran pilots | Real paying use in ~5 months |

---

### 4. RESULTS

#### Quantitative
- **MVP in ~8 weeks**, live under **$5K/month**
- **15+ merchants** piloted; **50 clients** buying on repeat
- **+36% task success** on core purchase flow during iteration
- **-15% onboarding friction** after conversational onboarding pass

#### Qualitative
> [VALIDAR — quote]

> "I sell now without typing prices a thousand times." — [VALIDAR merchant context]

#### Business Impact
- Recurring revenue from pilot cohort; repeat-buyer dataset as the moat
- Proved the model before any raise (bootstrapped to launch)

#### Adoption Metrics
- 15+ pilots, 50 recurring clients, weekly active usage in chat
- [VALIDAR — repeat-buy follow-up response rate]

---

### 5. REFLECTION

#### Learnings

| Category | Insight | Application Today |
|----------|---------|-------------------|
| Product | The chat is the product — meet the user where they are, don't drag them elsewhere | Design distribution-first |
| Founder | Constraints are a feature — $5K budget + 8-week MVP made every decision fast | Use limits to force focus |
| Product | Follow-up is invisible revenue — data on repeat buyers is the moat | Build retention into the core flow, not as a bolt-on |
| AI | AI must disambiguate, not guess — a mis-sold order is worse than no order | Guardrails before autonomy |
| Founder | 5 people can ship real commerce | Small, focused teams beat big ones when scope is disciplined |

#### What I'd Do Differently
1. **Merchant self-serve onboarding from day one** — white-glove onboarding got merchants live, but it didn't scale; conversational self-onboarding came later and worked.
2. **Chat transcript data as product from the start** — the transcripts that improved the AI were obvious gold for analytics; treat them as a feature from day one.
3. **Payment split earlier** — LatAm payment fragmentation was the hardest dependency; scoping multi-PSP into the MVP would have de-risked filings earlier.

---

### 6. TECH STACK

- **Core:** WhatsApp API (Business Platform), Node.js, AI/LLM orchestration (agent + guardrails), payment providers (LatAm), SQL for order/catalog data

**My Decisions:**

| Tool/Tech | Reason | Alternatives |
|-----------|--------|--------------|
| WhatsApp Business API | Where the buyers already are | SMS/Telegram/own app |
| LLM orchestration layer | Merchant back-office intelligence | Rule-based bots (weaker) |
| Lean stack | $5K/mo live ceiling | Larger infra (costlier) |

---

### 7. SEO & SHARING

**SEO Title:** IGO: A WhatsApp Store in 8 Weeks — Conversational Commerce That Sells
**SEO Description:** How a 5-person team built a chat-only commerce platform — catalog, checkout, payments, and follow-up living inside WhatsApp — and reached recurring revenue without a website or app.
**Social Image:** Split frame — merchant's chaotic WhatsApp thread before (hand-typed prices, lost orders) vs. IGO's chat store (catalog, cart, paid receipt). Headline: "Your customer is in WhatsApp. Put the store there."