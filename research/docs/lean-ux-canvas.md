# Lean UX Canvas v2 - Sift

*Framework by Jeff Gothelf, Lean UX Canvas v2. Populated from research conducted June 2026.*
*Product: Sift - feedback synthesis to defensible decision.*

*This is the one-sheet strategy. Fuller detail lives in [strategy.md](strategy.md) (objectives, segments, business model, founder decisions) and [research.md](research.md) (Section 2). All facts cite their source; unknowns are marked [?].*

---

## 1. Business Problem

Product teams at B2B mid-market SaaS companies cannot make confident, evidence-backed roadmap decisions. Customer feedback is scattered across 3-7 disconnected tools (Intercom, Zendesk, Gong, reviews, notes), synthesis is manual and unreliable (each PM does it differently), and every prioritization call can be challenged by sales or leadership with no traceable evidence to counter it.

The competitive gap sharpens the problem: no HARD competitor (Productboard, Canny, Enterpret) demonstrates a trustworthy full-chain synthesis, from raw signal to decision, with honest confidence levels on their public pages. AI is used for capture and classification, not for a synthesis a PM can defend. (Source: [competitors.md](competitors.md), [benchmark.md](benchmark.md))

---

## 2. Business Outcomes

*Measurable goals. All targets are hypotheses until validated with real usage data.*

| Outcome | Metric | Target (hypothesis) |
|---|---|---|
| PMs act on the synthesis | % of activated users citing Sift as primary input for their most recent roadmap change | 60% within 90 days |
| Faster prioritization | Avg. time from session start to "roadmap item updated or briefed" | Under 25 minutes |
| Commercially viable conversion | Free-to-paid within 60 days of hitting the volume limit | 8-12% |
| Teams stay and expand | 12-month net revenue retention | 110%+ |

Full objective rationale: [strategy.md](strategy.md) Section 1.

---

## 3. Users

**Primary - The Overloaded PM (Segment A):** Product Manager at a B2B mid-market SaaS company (50-500 employees, 2-10 person product team), 28-38, 3-8 years experience. Comfortable with data but not a data analyst. Lives in Jira or Linear for execution; feedback sits in Intercom, Zendesk, and Gong with no coherent picture. Drowning in scattered signal, needs defensible prioritization.

**Secondary - The Evidence-Hungry Product Lead (Segment B):** Head or VP of Product at a scale-up (100-500 employees) managing 3-8 PMs. Presents roadmap to leadership and needs a consistent evidence standard across the team.

**Later - The Signal Supplier (Segment C):** CS Manager or Support Lead with daily customer contact. Deferred from MVP as a PM retention dependency, not a separate feature. (Founder decision D1, [strategy.md](strategy.md) Section 6)

Full segment detail: [strategy.md](strategy.md) Section 2, [personas.md](../../user-research/docs/personas.md).

---

## 4. User Outcomes and Benefits

*What the user wants to achieve, in JTBD language.*

- Finish a prioritization session in under 25 minutes with defensible evidence, not guesswork.
- Say "Sift shows this is the top priority" in a stakeholder meeting and mean it, with the evidence one click away.
- Close the loop with sales: here is the traceable evidence behind why we are building this, not an opinion.
- Trust the synthesis enough to act, because any conclusion can be audited down to the raw feedback item.

Primary JTBD: *When I have a roadmap planning session coming up, I want to see a trustworthy synthesis of what customers are saying, with evidence I can trace, so that I can make a confident, defensible prioritization call and not just guess.* ([jtbd.md](../../user-research/docs/jtbd.md))

---

## 5. Solutions (MVP Scope)

Feedback ingestion from a first integration set (CSV import + Intercom for MVP; Zendesk, Gong, reviews follow the same abstraction pattern). AI synthesis into transparent theme clusters with evidence counts. Full drill-down: theme, evidence items (n=X), raw source text, with no navigation away from context. Honest confidence display (sample size visible, thin evidence flagged with a "low signal" badge). Prioritization view with interrogable, scoreable themes. Shareable public evidence brief as the go-to-market artifact.

- **Free:** up to 250 feedback items/month, 1 integration, theme clusters visible (no evidence drill-down), single-user.
- **Paid:** unlimited signal, full synthesis with traceability, confidence scoring, 3+ integrations, team workspace, roadmap linking, shareable briefs.

First integration set locked to CSV + Intercom (founder decision D3). Full scope and pricing hypothesis: [strategy.md](strategy.md) Sections 3 and 6.

---

## 6. Hypotheses

*Format: We believe [outcome] will be achieved if [user] attains [benefit] with [feature]. Full "if / then / because" set in [research.md](research.md) Section 7.*

- **H1 (riskiest):** We believe skeptical PMs will trust the synthesis enough to act on a real roadmap decision without re-synthesizing raw data, if the synthesis is transparent (method visible), traceable (drill-down to raw signal), and honest about confidence (inline citation + evidence counts + drill-down).
- **H2 (activation):** We believe PMs will complete activation if their first synthesis uses their own real data and surfaces at least one theme they already suspected was real.
- **H3 (viral loop):** We believe evidence-brief sharing will become the primary organic acquisition channel if every PM can share a synthesis output as a public link with no login required to view.
- **H4 (conversion):** We believe conversion will exceed a generic upgrade wall if the upgrade prompt appears at the moment the user tries to use a gated feature, referencing that specific benefit.
- **H5 (positioning):** We believe target-segment PMs will self-select into Sift if it positions specifically for the PM defending a roadmap, rather than the broad "product + CS + sales + marketing" positioning of competitors.
- **H6 (retention):** We believe individual retention will become team-level retention if evidence briefs become a standard output for roadmap reviews shared across the team.

---

## 7. Riskiest Assumption

PMs will trust Sift's AI synthesis enough to act on a real roadmap decision without re-synthesizing the raw data themselves.

This is the single assumption on which the idea stands or falls. If it is false, PMs always re-check the raw data, Sift becomes another source they process manually, and the core time-saving value proposition fails. The product survives as a better aggregator but not as the decision-confidence tool it needs to be.

This is a value risk, not a feasibility risk: the question is whether the user will trust and act, not whether the synthesis can be built. It maps to H1 above.

**Research status:** conditionally confirmed (MEDIUM confidence). Live research (June 2026) showed unconditional trust does not hold (PMs are wary of black-box AI for decisions), but with transparency mechanisms in place PMs do act on synthesis and present it to stakeholders without re-synthesizing everything. The condition is transparency. This is why confidence display is mandatory in the MVP (founder decision D2). Full reformulation: [strategy.md](strategy.md) Section 5, [research.md](research.md) Section 8, [live-research.md](live-research.md) F1-F4.

---

## 8. Smallest Test (First Test)

Show a PM their own feedback synthesized into 3-5 themes with evidence counts and a working drill-down. Ask: *"Would you present this in a roadmap review without auditing the raw data first?"*

A "yes" validates H1. A "no, I'd re-read everything" refutes it.

**Target:** 6 out of 10 PMs in prototype interviews say yes. Cheaper still as a first probe: a clickable prototype of the synthesis view (no live ingestion) put in front of 5 target PMs to test whether the transparency affordances alone earn the "yes". Track whether they open the drill-down at least once before answering, the behavioral signal that the spot-checking trust loop is active. (Mechanism basis: [benchmark.md](benchmark.md), [ux-patterns.md](ux-patterns.md) B3)
