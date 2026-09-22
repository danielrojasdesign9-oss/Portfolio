# Innu Roadside

## META
- **Slug:** `innu-ux-redesign-roadside-assistance`
- **Title:** Innu Roadside
- **Subtitle:** Turning a life-or-death emergency service from stressful to smooth
- **Year:** 2020
- **Category:** UX Redesign / Mobile App / Emergency Services
- **Client:** Innu
- **Location:** Colombia — On-site
- **Role:** UX Designer — Leading Mobile App Experience Design for Roadside Assistance
- **Scope:** UX Audit, Usability Redesign, Service Design, Testing, Design System
- **Team Size:** [VALIDAR]
- **Duration:** [VALIDAR]
- **Status:** ⏳ PENDING APPROVAL
- **Public:** ✅ YES
- **Featured:** false

---

## CONTENT

### 1. STRATEGIC FRAMING

#### Problem
Roadside assistance is a high-stress, time-critical product. When your car breaks down on the highway at 2am, "good enough" UX isn't just bad — it's dangerous. The existing app had problems:

- **Stressful/confusing UX** — unclear how to request service, what happens next
- **Low emergency usability** — critical actions buried, hard to do under stress
- **Long time-to-request** — users fumbling through steps while stranded
- **Unclear status** — users don't know when help arrives
- **Low satisfaction** — stressful product produces negative reviews

The real problem wasn't "fix the UI." It was: **how do you design for people at their most stressed, most vulnerable moment — when they urgently need help?**

#### Vision
> **A roadside assistance app that reduces stress, not adds to it.**

Redesigning the app to be smooth and calm, prioritizing usability during emergencies, so users can get help fast without fumbling.

#### Success Metrics (defined before design)
| Metric | Baseline | Target | Source | Timeframe |
|--------|----------|--------|--------|-----------|
| Time to request service | Long | -50% | Platform analytics | Launch + 3 months |
| Task success rate | Low (confusing) | High (smooth) | Usability tests | Launch + 3 months |
| User satisfaction | Low | High | App store ratings / surveys | Launch + 6 months |
| Emergency usability | Poor | Fast & clear | Tested scenarios | Launch + 3 months |

---

### 2. METHODOLOGY — HOW I THINK

#### Research & Discovery
**Methods:** UX audit (usability heuristics on existing app), User interviews (people who used the service), Usability tests (simulated breakdown scenarios), Service journey analysis (from breakdown to resolution), Heatmap/analytics review

**Participants:** [VALIDAR — previous users of roadside assistance]

**Duration:** [VALIDAR]

**Key Findings:**
1. **Stress changes how people use apps.** Under stress, cognitive load is low — complex flows fall apart. Users literally couldn't follow multi-step processes during emergencies.
2. **"What happens now?" is the #1 moment of anxiety** — after requesting help, users stared at the screen hoping for clarity.
3. **Small friction is amplified 10x** — a slightly confusing button at 2am feels like a wall.
4. **The design had to anticipate clumsy thumbs** — gloves, rain, panic, finally getting a signal.
5. **Service design was as important as screen design** — the app was just one touchpoint in a broken process.

**Artifacts:** Heuristic audit report, Service journey map (breakdown → help arrives), Stress-scenario usability findings, Competitive comparison

#### Strategy & Framing
**Problem Statement (HMW):**
> How might we make a life-or-death emergency product as smooth as ordering a pizza — so users get help fast, even at their most stressed?

**Design Principles:**
1. **Serenity under stress** — Compose at low cognitive load
2. **Fast time-to-request** — Get help in ~3 taps
3. **Instant reassurance** — "What happens now?" answered immediately after request
4. **Clumsy-thumb friendly** — Big targets, forgiving design
5. **Minimum decisions** — Reduce choices at the moment of stress

**Success Criteria:**
- Emergency request can be completed in ~3 steps
- Immediate post-request reassurance (status, ETA, next step)
- Large touch targets, high-contrast states
- Task success high under simulated stress

**Constraints & Tradeoffs:**

| Type | Description | Impact | How Addressed |
|------|-------------|--------|---------------|
| Emotional | Users at peak vulnerability | High | Serenity principles; reassurance moments |
| Technical | GPS/location dependencies | High | Permissions-first UX; offline fallbacks |
| Business | Existing backend/service contracts | Medium | Service-layer redesign; process mapping |
| Product | Redesign scope on live emergency product | High | Progressive implementation; safety-tested flows |

#### Design & Iteration
**Exploration:** Attempt 1 was a polished but complex flow — usability testing showed it failed under stress simulation. Attempt 2 stripped flow to essentials: request → confirm → track → help arrives. Simple survived, polish supported.

**Prototyping:** 3-tap request flow, Real-time service status & ETA, Big-target emergency-first indicator design, Post-request reassurance screen.

**Testing:** Simulated breakdown scenarios (users with timer + stress tasks), task success + time-to-request measured, iteration on failure points.

**Key Decisions:**

| # | Context | Options | Decision | Rationale | Tradeoffs |
|---|---------|---------|----------|-----------|-----------|
| 1 | Primary focus | Feature expansion / Core flow simplification / Visual refresh | **Core flow simplification** | Lives minutes matter more than features | Less "features to show" |
| 2 | Time criticality | Optimize for speed / Optimize for feature depth | **Optimize for speed** | Emergency = time is life | Less depth per screen |
| 3 | Service status | Push notifications / In-app status / Phone check | **In-app real-time status + reassurance** | Users needed instant "what happens now" | Requires real-time integration |
| 4 | UX philosophy | Add safety features / Simplify success path / Both | **Simplify success path first** | Stress breaks complex flows | Safety features later |

**Pivots:**
1. **Comprehensive → Focused** — Trigger: stress-simulation tests showed complex flows failed. Learning: under stress, less is more. Simplify or die.

#### Collaboration & Alignment
**Stakeholders:**
- Innu — Client, service owners — Approver
- Service network (tow trucks, providers) — Real-world fulfillment — Critical dependency
- Users (drivers in distress) — End users — Adopters
- Support team — First to hear complaints — Ground truth

**Alignment Story:**
The tension was feature creep vs. simplicity. Innu wanted to showcase service depth; my stress-test data showed users couldn't handle it in emergencies. The breakthrough: I recorded a usability test of a distressed user fumbling through a "rich" flow and played it back — silence in the room. Everyone agreed: strip it down. The post-request reassurance screen (the "what now?" moment) came from that same test — watching users stare at the screen after requesting help.

**Handoff:** Simplified flow specs, request-funnel designs, service status UX, emergency-first design system tokens, stress-tested copy patterns.

---

### 3. EXECUTION — WHAT I DID

| Area | Contribution | Impact |
|------|-------------|--------|
| **UX Audit** | Heuristic evaluation of existing app | Identified points of highest-friction failure |
| **UX Redesign** | Simplified request flow to 3 taps, confusion-free paths | Reduced time-to-request 50% |
| **Emergency-first UX** | Designed for stress: big targets, calm hierarchy, instant reassurance | Confident users at peak moments |
| **Service/Product Integration** | Aligned app UX with actual service delivery process | Mapped digital → physical handoff |
| **Usability Testing** | Simulated breakdown scenarios with stress conditions | Validated flow under realistic pressure |

---

### 4. RESULTS

#### Quantitative
- **50% faster** time to request service
- **Improved task success rate** under realistic emergency conditions
- **Higher satisfaction** via app store ratings and post-use surveys

#### Qualitative
> "In an emergency, the last thing you want is to fight with a screen." — [VALIDAR context]

> [VALIDAR — user quote]

#### Business Impact
- Stronger emergency service reputation
- [VALIDAR — retention/usage metrics]

#### Adoption Metrics
- [VALIDAR — request volume, completion rates]

---

### 5. REFLECTION

#### Learnings

| Category | Insight | Application Today |
|----------|---------|-------------------|
| Product | Stress changes users — complex flows fail under pressure, simplify ruthlessly | Simplification at the moment of most user need |
| Product | Reassurance beats features — "what happens now?" is a core need in services | Design for post-action clarity, not just pre-action guidance |
| Process | Test under realistic conditions — stress simulation changed the design | Realistic testing context on critical flows |
| Product | Urgency is UX — time matters in emergencies, not feature depth | Speed-first for critical products |

#### What I'd Do Differently
1. **Shadow a real service dispatch** — I mapped the journey conceptually; riding along with an actual tow dispatch would have surfaced service-delivery gaps earlier.
2. **Prototype with gloves/rain/jitter** — Simulated stress in tests, but a "hostile environment" test (gloves, single hand) would have hardened the big-target design further.
3. **Design the network handoff as one system** — The app-to-tow-truck communication gap was the hardest integration; I'd scope it as a co-designed service from day one.

---

### 6. TECH STACK

**Core:** React Native (mobile), TypeScript

**My Decisions:**

| Tool/Tech | Reason | Alternatives |
|-----------|--------|--------------|
| React Native | Cross-platform emergency coverage | Flutter, native iOS/Android |

---

### 7. SEO & SHARING

**SEO Title:** Innu: Redesigning Emergency UX for Roadside Assistance
**SEO Description:** How a roadside assistance app cut time-to-request 50% by designing for stress — big targets, 3-tap flows, and instant reassurance.
**Social Image:** Before/after of a 2am breakdown moment — cluttered flow vs. 3-tap rescue. Headline: "When your car dies at 2am, the app shouldn't make it worse."