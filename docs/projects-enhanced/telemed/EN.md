# Telemed Telemedicine

## META
- **Slug:** `telemed-telemedicine-platform`
- **Title:** Telemed Telemedicine
- **Subtitle:** From weeks of waiting to 45-second bookings — a telemedicine platform that closes the follow-up gap
- **Year:** 2026
- **Category:** Telemedicine / Healthtech / B2B SaaS
- **Client:** Personal — Telemed (Salud Total, Sanitas, Ubiquo, BrainCo references)
- **Location:** Colombia — Remote
- **Role:** Product Designer — End-to-end: Research, Clinical Flows, Video UX, Provider Dashboard
- **Scope:** Research, Booking Flow, Triage Integration, Video Consult UX, Follow-up Automation, Provider Dashboard
- **Team Size:** [VALIDAR]
- **Duration:** [VALIDAR]
- **Status:** ⏳ PENDING APPROVAL
- **Public:** ❌ NO — dummy project
- **Featured:** false

---

## CONTENT

### 1. STRATEGIC FRAMING

#### Problem
Colombian healthcare has a scheduling crisis. Patients wait weeks for appointments:

- **21-day average wait** for specialist appointment at major EPS
- **40% no-show rate** — patients forget, can't get time off, or symptoms resolve
- Providers juggle 3+ scheduling systems that don't talk to each other
- Follow-up is broken — patients fall through cracks after consult

The real problem wasn't "build a video app." It was: **how do we get patients from symptom to resolution without losing them in the system?**

#### Vision
> **One platform: book → triage → video consult → follow-up → history. All in one place.**

A unified telemedicine platform where patients book in seconds, AI triage routes to the right specialist, video consult happens in-browser, and follow-up is automated — so nothing falls through cracks.

#### Success Metrics (defined before design)
| Metric | Baseline | Target | Source | Timeframe |
|--------|----------|--------|--------|-----------|
| Booking time | 8 minutes | <60 seconds | Platform analytics | Launch + 3 months |
| No-show rate | 40% | <20% | Appointment logs | Launch + 3 months |
| Follow-up completion | 40% | >70% | Care plan tracking | Launch + 6 months |
| Provider adoption | 0 | 80%+ of pilot doctors active | Usage analytics | Pilot end |

---

### 2. METHODOLOGY — HOW I THINK

#### Research & Discovery
**Methods:** User interviews (patients), Provider shadowing (doctors), Journey mapping (booking → consult → follow-up), Competitive audit (existing telemedicine tools and video platforms), Workflow analysis (EPS scheduling systems)

**Participants:** [VALIDAR — patients + 10+ doctors across Salud Total and independent clinics]

**Duration:** [VALIDAR — ~4 weeks discovery]

**Key Findings:**
1. **The integration wall is real.** EPS and IPS use different systems. Salud Total on one, Sanitas on another, independent clinics on spreadsheets. Universal API impossible — each EPS guards its schedule data like state secrets.
2. **Doctors hate existing video tools.** "I can't see the patient AND write notes at the same time."
3. **Follow-up is where outcomes die.** 60% of patients never did recommended follow-up.
4. **WhatsApp is the communication channel in Colombia.** Email reminders get ignored.
5. **Doctors optimize for speed, not features.** Every extra click = lost patient.

**Artifacts:** Integration wall map (EPS/IPS systems), Patient journey with loss points, Doctor workflow diagram, Competitive video tool matrix, Follow-up gap analysis

#### Strategy & Framing
**Problem Statement (HMW):**
> How might we connect fragmented EPS/IPS systems so patients can book, consult, and follow up — without losing anyone in between?

**Design Principles:**
1. **One platform, not another silo** — The layer on top, not another system
2. **Speed for doctors is safety for patients** — Every click you save a doctor is time saved for a patient
3. **Meet people where they are** — WhatsApp for reminders, browser for video, no app downloads
4. **Follow-up is the product** — The consult is the cost; the follow-up is where value lives
5. **Ugly but working > pretty but dead** — Pragmatic integration over perfect architecture

**Success Criteria:**
- Patient books in under 60 seconds
- Doctor completes consult + notes without leaving split-screen
- Follow-up completion >70%
- EPS integration seams invisible to the patient

**Constraints & Tradeoffs:**

| Type | Description | Impact | How Addressed |
|------|-------------|--------|---------------|
| Integration | EPS/IPs guard schedule data; systems don't interoperate | High | Layer approach: HL7/FHIR sync where API exists, CSV upload where not |
| Regulatory | Healthcare data protection (Habeas Data in Colombia); clinical flows must be sound | Medium | FHIR standards; clinical protocol review; data consent UX |
| Technical | Real-time video in-browser requires robust WebRTC | Medium | WebRTC with fallback to scheduled calls |
| Adoption | Doctors reject tools that slow them down | High | Split-screen notes; preset templates; measured consult time |

#### Design & Iteration
**Exploration:** Started with the "universal scheduler API" dream (Attempt 1). It failed — EPS wouldn't share data. Pivoted to a **layer on top** (Attempt 2): patients book on Telemed, we sync via HL7/FHIR where available, manual CSV upload where not. Ugly but works.

**Prototyping:** Booking flow (12 clicks → 3), Split-screen video consult (patient left, structured notes right), Follow-up automation flow, WhatsApp reminder templates.

**Testing:** Usability tests with [VALIDAR] doctors on video consult; patient booking flow tested with [VALIDAR] end users. Measured: booking completion time, consult flow abandonment, doctor speed.

**Key Decisions:**

| # | Context | Options | Decision | Rationale | Tradeoffs |
|---|---------|---------|----------|-----------|-----------|
| 1 | EPS integration | Universal API / Layer on top / Manual per-EPS | **Layer on top** | EPS won't share data via API uniformly | CSV upload for some EPS; partial automation |
| 2 | Video consult layout | Full-screen video / Split-screen video+notes | **Split-screen** | Doctors said "I can't write notes while seeing patient" | Less video space; far better doctor UX |
| 3 | Reminder channel | Email / SMS / WhatsApp | **WhatsApp** | 3x response rate of email in Colombia | Relies on third-party WhatsApp API |
| 4 | Follow-up mechanism | Manual reminders / Auto-schedule + WhatsApp / None | **Auto-schedule + WhatsApp** | 60% of patients skipped follow-up | Requires care plan data entry |

**Pivots:**
1. **Universal scheduler API → Layer on top** — Trigger: EPS refused to expose schedule data. Learning: in healthcare, interoperability is a people problem (lawyers, not engineers), so design for the seam.
2. **Generic video → Doctor-speed split-screen** — Trigger: doctor feedback "first one that doesn't slow me down." Learning: domain experts optimize for speed, not features.

#### Collaboration & Alignment
**Stakeholders:**
- EPS partners (Salud Total, Sanitas) — Data access, pilot validation — Blocker for integration
- Doctors (pilot group) — End users, clinical credibility — Adopters/validators
- Patients — End users — Adopters
- Engineers — WebRTC, FHIR/HL7 integration — Builders
- ClaraCare team — AI triage engine — Partner

**Alignment Story:**
The universal API was my first instinct — technically clean, architecturally correct. It failed because EPS data access is a legal negotiation, not a technical one. The layer-on-top approach felt dirty to me at first. Then I watched a doctor fight through a broken video tool and realized: seamless UX for patients and speed for doctors matters more than API purity. The doctors validated the split-screen design with the best feedback I got all project: "This is the first one that doesn't slow me down."

**Handoff:** Booking flow specs, Video consult layout guidelines, Follow-up automation flow, WhatsApp template library, EPS integration seams documentation.

---

### 3. EXECUTION — WHAT I DID

| Area | Contribution | Impact |
|------|-------------|--------|
| **Research** | Interviewed patients, shadowed doctors, mapped integration wall across EPS/IPS systems | Identified loss points: booking, consult UX, follow-up |
| **Booking Flow Redesign** | Cut booking from 12 clicks to 3 — calendar + specialist match + confirm | Booking time 8 min → 45 sec |
| **Triage Integration** | Integrated ClaraCare's AI triage directly into booking (symptoms → specialist match) | Patients routed correctly; reduced wrong-specialist bookings |
| **Video Consult UX** | Designed in-browser video with shared notes, prescription writer, referral generator | Doctor adoption: 85% of pilot active weekly |
| **Follow-up Automation** | Post-consult: auto-schedule follow-up, send Rx to pharmacy, generate sick-leave certificate | Follow-up completion 40% → 78% |
| **Provider Dashboard** | Built doctor-side dashboard with schedule, patient history, consult tools | Completed the loop for providers |

---

### 4. RESULTS

#### Quantitative
- **Booking time:** 8 min → 45 seconds
- **No-show rate:** 40% → 18% (with WhatsApp reminders)
- **Follow-up completion:** 40% → 78%
- **Provider adoption:** 85% of pilot doctors active weekly
- **References:** Salud Total, Sanitas, Ubiquo, BrainCo evaluating for 2026 rollout

#### Qualitative
> "This is the first one that doesn't slow me down." — Pilot doctor, on the video consult

> [VALIDAR — patient quote about booking experience]

#### Business Impact
- EPS/IPS pilot traction with major Colombian players evaluating 2026 rollout
- Follow-up automation creates recurring revenue model (care plans)

#### Adoption Metrics
- 85% of pilot doctors active weekly
- [VALIDAR — patient volume metrics]

---

### 5. REFLECTION

#### Learnings

| Category | Insight | Application Today |
|----------|---------|-------------------|
| Process | Interoperability is a people problem — tech is easy, lawyers are hard | Never assume API access; design for the seam from day one |
| Product | Doctors optimize for speed, not features — every extra click is a lost patient | Optimize the critical path for the busiest user |
| Product | WhatsApp > Email > SMS in Colombia — 3x response rate | Match the channel to the culture, not the "best practice" |
| Business | Follow-up is where value lives — consult is cost, follow-up is revenue | Design the recurring loop, not just the one-time transaction |

#### What I'd Do Differently
1. **Negotiate EPS data access before building** — Invested weeks in a universal API that was never going to be granted. Legal intros first.
2. **Prototype the notes experience earlier** — The split-screen insight came from watching doctors, not from asking. Video-shadow more doctors sooner.
3. **Design care plans as a product from the start** — Follow-up automation was bolted on post-consult. It's the real revenue engine and deserved first-class design.

---

### 6. TECH STACK

**Core:** React/Next.js, TypeScript, Tailwind CSS, Carbon Design System

**My Decisions:**

| Tool/Tech | Reason | Alternatives |
|-----------|--------|--------------|
| WebRTC | In-browser video, no app download for patients | Zoom SDK, Twilio Video |
| FHIR/HL7 | Standard healthcare data exchange for EPS integration | Custom APIs, HL7 v2 |

---

### 7. SEO & SHARING

**SEO Title:** Telemed: Telemedicine Platform for Colombian EPS/IPS
**SEO Description:** Designing a telemedicine platform that cut booking from 8 minutes to 45 seconds and lifted follow-up completion from 40% to 78%.
**Social Image:** Split-screen consult (patient left, structured notes right) with headline: "The first video tool that doesn't slow doctors down."