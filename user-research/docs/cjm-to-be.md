# CJM To-Be - Sift

**Focus:** Persona A, The Overloaded PM (Alex) x Main Job: *"When I am preparing for a roadmap planning session and I have customer feedback spread across multiple tools I haven't had time to read, I want to feel certain I know what our customers actually need most, with the evidence behind it, so that I can walk into the session with a call I'll stand behind and defend if anyone pushes back."*

*The ideal path: how the same PM does the same job inside Sift.*

*Design rule (To-Be = design): the future must be designed, so "don't invent" does not apply here. It is replaced by tracing: every step and every feature closes a specific As-Is barrier or serves a specific JTBD job, with a link to it. A feature with no parent pain or job is cut. To-Be sharpens the existing MVP core ([lean-ux-canvas.md](../../research/docs/lean-ux-canvas.md) Solutions, [jtbd.md](jtbd.md) matrix, CLAUDE.md MVP), it does not fork a second parallel backlog.*

*Focus persona: [personas.md](personas.md) (Persona A). Main job: [jtbd.md](jtbd.md). As-Is source: [cjm-as-is.md](cjm-as-is.md).*

---

## To-Be Path with Tracing (Step 7)

*The same PM doing the same job, inside Sift. Design rule: every step traces to a concrete As-Is barrier or a JTBD job (the "Closes" column). A step that closes nothing is an orphan and is cut. Target emotions are designed goals contrasted against the As-Is emotion on that phase, not measured. As-Is barriers and growth zones referenced here live in [cjm-as-is.md](cjm-as-is.md).*

| # | Step in the product | Goal (job) | Closes (As-Is barrier / growth zone) | Needed capability | Target emotion (vs As-Is) |
|---|---|---|---|---|---|
| 1 | **Connect the signal (once)** - PM connects CSV import and/or Intercom; feedback ingests and normalizes; PII scrubbed by default | J2 - make sense of the incoming pile | As-Is Phase 2, siloed channels (GZ4) | Ingestion + normalization pipeline (CSV + Intercom MVP; Zendesk, Gong follow same pattern) | "It's all in one place" (vs -4 overwhelm). Table-stakes |
| 2 | **Open to a synthesis already done** - when the session looms, PM opens Sift and sees feedback already clustered into themes with volume, recency, and evidence count; no manual reading or tagging | Main job; J2 | As-Is Phase 1, no POV ready (GZ5) + Phase 3, manual tagging labor (GZ3) | AI theme synthesis, kept current ("new signal since last session" digest) | Prepared, calm (vs -4 dread and -4 exhaustion) |
| 3 | **See how strong each theme is** - each theme shows item count (n=X) and a "low signal" badge when thin; strong themes are visibly distinct from thin ones | J3 - know how much to trust | As-Is Phase 4, cannot gauge evidence strength (GZ2) | Honest confidence display (see diverge/converge below) | Calibrated trust (vs -3 distrust). **Differentiator** |
| 4 | **Spot-check the evidence, then commit** - PM clicks a theme, sees its supporting items (n=X), clicks any item to the raw original text; verifies a theme they already know is real, then trusts the novel ones; sets priority | Main job; J3; E1 - feel I actually understood it | As-Is Phase 4, distrust and re-reading everything (GZ2) | Progressive drill-down (theme, evidence items, raw source) with inline citation | "I understood it, and I can prove it" (vs -3 distrust). **Differentiator** |
| 5 | **Walk in with a brief the room can read** - PM shares an evidence brief (top themes, evidence per theme, source quotes, recommended priority) as a link before the session, so the reasoning is legible without Sift access | S1 - give stakeholders something to engage with; J4; Main job | As-Is Phase 5, rationale does not land (GZ5) | Shareable public evidence brief (no login to view) | It lands, it is legible (vs -3 deflation) |
| 6 | **Defend with one click** - challenged in the room ("my customer said X"), the PM pulls the theme live and shows n=X items and the verbatim quotes on the spot; the anecdote meets traceable evidence | J1 - stakeholder defense; E2 - certain not defensive; S1 | As-Is Phase 6, opinion outweighs unciteable evidence (GZ1) | Live traceable evidence chain (theme, items, verbatim quote), citable in the moment | Grounded, certain (vs -5 powerlessness). **Differentiator, the deepest win** |

**Orphan check:** none. All six steps close a named As-Is barrier and serve a job. All five growth zones are covered: GZ1 to Phase 6, GZ2 to Phases 3 and 4, GZ3 to Phase 2, GZ4 to Phase 1, GZ5 to Phases 2 and 5.

---

### Capability decisions (diverge to converge)

*Only where a barrier has more than one plausible answer. Where the answer is obvious (drill-down, the brief), no options are spun up.*

**Phase 1 - first integration set.** Candidates: (a) native integrations first, (b) CSV import first, (c) email-forwarding inbox. **Chosen: CSV + Intercom (locked as founder decision D3).** CSV gives zero-friction day-one activation (any PM can upload existing feedback and reach a first synthesis within 20 minutes, aarrr.md); Intercom is the source named in the Segment A stack (personas.md O2). Email-forwarding rejected: lower signal quality and messy source attribution, which undermines the traceability the whole product rests on.

**Phase 3 - confidence display.** Candidates: (a) item count n=X plus a "low signal" badge, (b) source diversity and time range, (c) a single numeric confidence score. **Chosen: (a) for MVP (locked as founder decision D2 day-one scope).** Item count and the low-signal badge are the minimum honest signal and are cheap to build. Source diversity and time range are real but are v2. A single opaque confidence score is rejected outright: a confident number with no visible basis is exactly the anti-pattern benchmark.md warns against, and it would undermine trust rather than build it.

---

### To-Be Emotional Curve (projected, designed goal - not measured)

*The contrast overlay for the As-Is curve. Marked explicitly as a designed target so it is never confused with the evidence-backed As-Is line. Same -5 to +5 axis.*

| Phase | As-Is (evidence) | To-Be (target) | Lift |
|---|---|---|---|
| 1 Connect / gather | -4 | +2 | +6 |
| 2 Open to a ready synthesis | -4 | +3 | +7 |
| 3 See theme strength | -3 | +3 | +6 |
| 4 Spot-check and commit | -3 | +4 | +7 |
| 5 Walk in with a brief | -3 | +3 | +6 |
| 6 Defend with one click | **-5** | **+4** | **+9** |

**Shape:** the entirely-negative As-Is trough is designed to invert into a steady positive line, rising to its peak exactly where As-Is hit its floor. **Phase 6 is the largest lift (+9):** the deepest, best-evidenced As-Is pain (powerlessness when evidence loses to the HiPPO) becomes the moment the PM is most in control. That single inversion is the product's core promise, and it is the phase with the strongest As-Is evidence, so the promise is aimed at a real, confirmed pain.

---

## Backlog and MVP Basis (Step 8)

*This is the existing MVP core, sharpened. It is the same list as [lean-ux-canvas.md](../../research/docs/lean-ux-canvas.md) Solutions, the [jtbd.md](jtbd.md) matrix "3 Jobs for the MVP Core," and the CLAUDE.md MVP scope, reordered by priority with a parent and a success signal on each. One list, not a second parallel backlog. Every item has a parent barrier or job (the tracing rule); an item with no parent is not added.*

| # | Feature / capability | Parent (As-Is barrier / job) | Priority | Success signal (hypothesis) |
|---|---|---|---|---|
| 1 | **Feedback ingestion - CSV + Intercom** | As-Is P2 siloed (GZ4); J2 | **MVP** | 40% of signups reach a first synthesis on their own data within 7 days (aarrr.md Activation) |
| 2 | **AI theme synthesis** - transparent clusters with volume, recency, evidence count; basic ranking by signal | As-Is P1 no POV (GZ5) + P3 tagging (GZ3); Main job; J2 | **MVP** | First synthesis in under 20 minutes with at least one theme the PM recognizes as real (aarrr.md Activation) |
| 3 | **Honest confidence display** - item count n=X + "low signal" badge | As-Is P4 cannot gauge strength (GZ2); J3 | **MVP** (D2, mandatory) | Activated users act on the synthesis; leading H1 condition. Objective 1: 60% cite Sift as primary roadmap input at 90 days |
| 4 | **Evidence drill-down + inline citation** - theme, evidence items (n=X), raw source text | As-Is P4 distrust (GZ2) + P6 unciteable evidence (GZ1); Main job; J3; E1 | **MVP** | Activated users open the drill-down at least once in the first session (the trust behavior named in live-research.md) |
| 5 | **Shareable public evidence brief** - no login to view | As-Is P5 does not land (GZ5) + P6 defend (GZ1); S1; J4 | **MVP** | 25% of signups attributed to referral / brief sharing (aarrr.md Referral) |
| 6 | **Prioritization scoring** - multi-factor (customer segment, revenue impact) | Main job (rank and interrogate) | LATER | PM interrogates a ranked list rather than accepting a black-box order (basic volume/recency ranking already ships inside item 2) |
| 7 | **"New signal since last session" digest** | Weak parent: retention loop (aarrr.md) + H-J1 continuous sensing, which jtbd.md marks as an UNCONFIRMED hypothesis job. Not an As-Is barrier. | LATER (held only with this caveat) | Week-4 retention 50% for activated users (aarrr.md Retention) |
| 8 | **Roadmap link** - native lightweight or Jira / Linear sync | J4 (get the team to the same why); the decision-theme-signal chain | LATER | Roadmap items linked back to their themes; serves Segment B more than the core Segment A journey |

**MVP spine = items 1-5.** Remove any one and the To-Be path breaks: no ingestion (no signal), no synthesis (back to manual reading), no confidence display (no trust, H1 fails), no drill-down (the differentiator is gone), no brief (Phases 5-6 have nothing to carry). Items 6-8 improve the path but it holds without them.

---

### Reconciliation with the existing MVP core (sharpen, do not fork)

**Confirmed by the To-Be map** (each maps to a To-Be phase, so each earns its place): ingestion (Phase 1), AI synthesis (Phase 2), confidence display (Phase 3), evidence drill-down (Phases 4 and 6), shareable brief (Phase 5). These five are the existing core spine, unchanged in substance.

**Sharpened by the To-Be map:**
- Ingestion narrowed to **CSV + Intercom** for MVP (D3), not the full 3-5 source list at once.
- Confidence display narrowed to **n=X + low-signal badge** as day-one scope (D2); source diversity and time range are v2.
- Evidence drill-down gains a **new non-functional requirement** surfaced by To-Be Phase 6: it must work **live in a meeting** (fast, in-context, on the spot), not only in a quiet analysis session. This is a genuine addition from the journey, not present in the old flat scope list.
- The trust success signal is made concrete: **"does the activated user open the drill-down at least once"** (from live-research.md), rather than a vague "PM trusts it."

**Demoted to LATER** (they serve a job but sit off this persona's core prep-and-defend journey, so they are not MVP): prioritization multi-factor scoring, the new-signal digest, roadmap link. None is a true orphan - each has a parent job - but none is on the critical To-Be path for the Overloaded PM's main job.

**Orphans / cuts - unchanged and consistent:** the To-Be map produced no feature without a parent, and it confirms the earlier cuts, because they map to no To-Be step: J5 signal-loop / contribution tracker (D1, Segment C), real-time monitoring (anti-pattern per ux-patterns.md), team synthesis reproduction (unconfirmed job). The free/paid split from lean-ux-canvas.md is untouched: the drill-down (item 4) stays the paid differentiator, consistent with gating the trust mechanism as the paid value.

---

## Step 9 - To-Be Critique (record)

*Adversarial check of the To-Be map and backlog: does every feature have a parent, does the backlog sharpen rather than fork the MVP core, and is "MVP" no broader than the riskiest assumption.*

**Parent audit:** every To-Be step and backlog item traces to a parent. Positive result: each of the five MVP-spine items (1-5) has at least one pattern-strength parent, so no MVP feature rests on a single-source signal alone. One weak parent found and flagged: item 7 (new-signal digest) is parented by the retention loop plus H-J1, which jtbd.md marks as an unconfirmed hypothesis job. It stays LATER, held only with that caveat, and does not earn a slot until H-J1 is confirmed.

**Sharpen, not fork - divergences to reconcile:**
- lean-ux-canvas.md lists a "prioritization view" in MVP Solutions. Sharpened here: basic ranking by signal ships inside the AI synthesis item (MVP); multi-factor scoring (segment, revenue) moves to LATER. A narrowing, not a contradiction.
- **CLAUDE.md MVP scope lists 7 features, including roadmap link and full prioritization, as MVP.** This CJM narrows MVP to the 5-item spine and moves roadmap link and multi-factor scoring to LATER. Until CLAUDE.md is updated in Step 11, two MVP definitions coexist. **Action: Step 11 must narrow CLAUDE.md to the 5-item spine so the repo holds one MVP definition (this is the fork risk to close).**
- jtbd.md matrix (3 MVP jobs: Main, J3, S1) is consistent; ingestion and drill-down are the enablers of those jobs, not new scope.

**MVP consistency vs the riskiest assumption (H1):**
- Items 1-4 are the pure H1 test: they are the transparency-and-traceability mechanism H1 requires. Remove any one and the To-Be path is dead.
- **Item 5 (shareable brief) is the one MVP item broader than H1.** It tests H3 (viral loop) and serves S1 (stakeholder engagement), not the PM's own trust. Removing it does not fully break the path - the live drill-down (item 4) already covers the in-room defend (Phase 6, GZ1); the brief adds the before-session share (Phase 5) and the referral loop.
- **Decision (recorded):** keep the brief in MVP. It closes the Phase 5 barrier, it is the go-to-market and referral artifact (aarrr.md), and "evidence as a social object" (ux-patterns.md B2, job S1) is a confirmed behavior. But it is explicitly the **first candidate to move to a fast-follow** if a leaner, H1-only first test is wanted later. This is a conscious scope choice, not an oversight: MVP tests H1 (items 1-4) plus the deepest-pain defend-and-share value (item 5).

**Three questions - status:**
1. Brief in MVP or fast-follow? **Decided: kept in MVP, flagged as first fast-follow candidate** (above).
2. Reconcile CLAUDE.md's 7-feature MVP with the 5-item spine? **Open, actioned for Step 11** (narrow CLAUDE.md to avoid a forked MVP definition).
3. Does item 7 (digest) have a real parent? **Resolved: no confirmed parent; held in LATER with an explicit caveat**, gated on confirming H-J1.

**Orphans cut:** none new. The map confirms the earlier cuts (J5 signal-loop / D1, real-time monitoring / anti-pattern, team synthesis reproduction / unconfirmed), which correctly map to no To-Be step.


