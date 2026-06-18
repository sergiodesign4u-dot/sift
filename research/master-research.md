# Master Research - Sift

*Single source of truth. All facts cited. Unknowns marked [?].*
*Based on validated v2 strategy. Research conducted June 2026.*

---

## 1. Introduction

### Purpose

This document synthesizes all research conducted for the Sift product sprint into a single, authoritative reference. It is the foundation for wireframes, concept, and design system decisions.

### Problem

Product managers at B2B SaaS companies are drowning in scattered customer feedback from support tickets, sales calls, reviews, and interviews. Synthesizing this feedback manually is slow (3-5 hours per planning cycle, [?] exact figure unvalidated), unreliable (each PM does it differently), and produces conclusions that are hard to defend (no traceable evidence chain). The result: roadmap decisions that feel like educated guesses, easily challenged by sales or leadership, and disconnected from the actual customer voice.

### Approach

Research was conducted across 7 phases: product strategy hypotheses, AARRR model, competitive analysis (HARD/SOFT/ASPIRATIONAL competitor groups), trust-in-synthesis benchmark (non-competitor tools), strategy validation against findings, UX pattern selection, and this master synthesis. Competitive data was gathered from live product sites and current pricing pages in June 2026.

### 5 Key Conclusions

1. **The synthesis trust gap is real and undefended.** No direct competitor clearly demonstrates, on public pages, a trustworthy full-chain synthesis (raw signal to theme to evidence to decision) with honest confidence levels. This is Sift's primary differentiator and the most important design problem to solve.

2. **The PM-specific "defend your roadmap" positioning is an open gap.** All HARD competitors (Productboard, Canny, Enterpret) position for broad teams (product + CS + sales + marketing). None own the specific story of the PM who needs to make a confident, defensible prioritization call. The niche is available.

3. **The market is consolidating around AI capture, not AI synthesis.** AI is used primarily for feedback capture and classification (Canny Autopilot, Productboard Spark, Enterpret's adaptive taxonomy). Synthesis that produces a trustworthy position a PM can act on and defend is not the dominant pattern. Sift enters at the right time.

4. **Trust is earned through decomposability and inline citation, not through confidence.** Benchmark research (Amplitude, Perplexity) shows that the presence of verifiability - the ability to drill down, not the act of drilling down - is what creates trust. A synthesis tool that hides its reasoning trains users to distrust it. A tool that shows it earns calibrated trust.

5. **The PLG + evidence-brief viral loop is the right go-to-market.** The shareable evidence brief (a synthesis output that travels independently) is the primary acquisition asset, activation trigger, and referral mechanism simultaneously. Building it well is the single most impactful product investment for early growth.

---

## 2. Strategy

*(Full detail in research/strategy.md v2)*

### Objectives

| # | Objective | Metric | Target |
|---|---|---|---|
| 1 | PMs act on Sift synthesis for roadmap decisions | % citing Sift as primary input | 60% of activated users at 90 days [hypothesis] |
| 2 | Faster prioritization sessions | Avg. time to decision | Under 25 minutes per planning session [hypothesis] |
| 3 | Free-to-paid conversion | Conversion within 60 days of limit | 8-12% [hypothesis] |
| 4 | Team retention and expansion | 12-month NRR | 110%+ [hypothesis] |

### Segments

| Segment | Profile | Priority | JTBD |
|---|---|---|---|
| A - Overloaded PM | PM at B2B SaaS, 28-38, 3-8 years experience, manual synthesis today | **Primary** | When planning sessions come up, want trustworthy traceable synthesis to make a defensible call |
| B - Product Lead | Head/VP Product at scale-up, manages 3-8 PMs, presents to leadership | Secondary | When presenting to leadership, want systematic evidence behind each priority |
| C - Signal Supplier | CS Manager or Support Lead, daily customer contact | Later | When sharing feedback with product, want to see it was heard and used |

### JTBD (Primary)

When I have a roadmap planning session coming up, I want to see a trustworthy synthesis of what customers are saying - with evidence I can trace - so that I can make a confident, defensible prioritization call and not just guess.

### Business Model

Seat-based SaaS subscription with a hard-limited free plan. Free plan: up to 250 feedback items/month, 1 integration, single-user, themes visible but no evidence drill-down. Paid: unlimited signal, full traceability, team features, integrations, shareable briefs. Pricing hypothesis: $30-40/seat/month (Starter), $20-25/seat/month (Growth, 5-20 seats), Enterprise custom. [All pricing is hypothesis, not validated.]

### Riskiest Assumption

PMs will trust Sift's AI synthesis enough to act on a real roadmap decision without re-synthesizing the raw data themselves. See Hypothesis H1 below (Section 7). Failure of this assumption makes the product fail at its core value proposition.

---

## 3. AARRR

*(Full detail in research/aarrr.md)*

### Funnel Summary

| Stage | Primary metric | Target [hypothesis] | MVP decision |
|---|---|---|---|
| Acquisition | Organic/PLG signups/month | 200/month at 6 months | Build shareable evidence brief as acquisition asset |
| Activation | % completing first synthesis (own data) | 40% within 7 days | CSV import + Intercom integration as first connections |
| Retention | Week-4 retention (activated users) | 50% | "New signal since last session" digest as re-engagement hook |
| Revenue | Free-to-paid within 60 days of limit | 10% | Context-specific upgrade prompt at the moment of limit |
| Referral | % signups attributed to referral | 25% at 12 months | Public brief with attribution as viral artifact |

### Key Decisions

The evidence brief is the single most important product artifact for AARRR: it drives acquisition (discovery), referral (sharing), and retention (the PM's team becomes dependent on it). Building it early and building it well is a prerequisite for growth mechanics.

---

## 4. Competitors

*(Full detail in research/competitive-analysis.md)*

### Competitor Matrix

| | Productboard | Canny | Enterpret | Dovetail | Jira Product Discovery |
|---|---|---|---|---|---|
| **Group** | HARD | HARD | HARD | SOFT | SOFT |
| **Audience** | Enterprise, scaling orgs | Mid-market, cross-functional | High-velocity product orgs, enterprise | Design/research teams first, expanding | Atlassian-native PM teams |
| **Foundation** | AI synthesis + roadmap + feedback portal | AI autopilot + public roadmap + changelog | Adaptive taxonomy + 50+ integrations + NL querying | Research repository + AI synthesis + Channels | Jira-integrated discovery + Cycle DNA |
| **Key mechanism** | LLM workflow prompts (Spark), feedback classification | Vote aggregation + Autopilot AI capture | 5-level adaptive taxonomy, self-updating | AI tags + insight docs with source clips | Configurable scoring + Jira backlog link |
| **Trust** | [? behind login] | Vote counts + feedback links visible | Positions as infrastructure, not answer layer | "Build with facts not vibes" - clip-level evidence | [? behind login] |
| **Pricing** | $19-59/maker/mo (Source: productboard.com/pricing) | Free (25 users), Pro $79/mo (Source: canny.io/pricing) | Enterprise, contact sales | Free (1 project), Enterprise custom (Source: dovetail.com/pricing) | Free (3 creators), $10-25/creator/mo (Source: atlassian.com/software/jira/product-discovery/pricing) |

### 3 Common Patterns

1. AI is used for capture and classification, not for producing a trusted synthesis position a PM can defend.
2. Free tiers are designed to create desire, not deliver full value - volume or collaboration limits are the universal conversion lever.
3. Broad multi-team positioning (product + CS + sales + marketing) dilutes the core PM story across all HARD competitors.

### 3 Key Differences

1. Enterpret is infrastructure (the synthesis layer for other tools); Productboard and Canny are PM workflow tools. These are different products in the same market.
2. Canny is the only HARD competitor with a strong customer-facing component (public roadmap, changelog, customer voting). Sift is internal-facing only.
3. Bottom-up PLG (Canny, JPD) vs. top-down enterprise sales (Enterpret) are genuinely different GTM models. Sift's target segment responds best to bottom-up PLG.

### The Gap

**No competitor demonstrates, on a public page or in reviewable pre-login UX, a full transparent synthesis chain from raw signal to decision with honest confidence levels and user-challengeable conclusions.** This is the primary product and positioning gap Sift fills.

---

## 5. Benchmark: Trust in Synthesis

*(Full detail in research/benchmark.md)*

### Scores

| Product | Transparency | Evidence trace | Confidence | Conflict | Inline citation | Density | Override | Memory | Total |
|---|---|---|---|---|---|---|---|---|---|
| Perplexity AI | 3 | 5 | 4 | 3 | 5 | 4 | 2 | 1 | 27/40 |
| Amplitude | 4 | 5 | 3 | 3 | 3 | 4 | 4 | 4 | 30/40 |
| Linear | 2 | 3 | N/A | 2 | 3 | 5 | 5 | 4 | 24/35 |
| Grain | 2 | 5 | 2 | 2 | 4 | 3 | 3 | 3 | 24/40 |
| Notion | 2 | 3 | 1 | 1 | 3 | 3 | 5 | 3 | 21/40 |

### Top 3 Mechanisms to Carry into MVP

1. **Inline numbered citation (Perplexity AI):** Citation marker adjacent to every theme conclusion, showing evidence count. Clicking opens the evidence list. The presence of verifiability creates trust without requiring every audit. (Source: perplexity.ai)

2. **Progressive drill-down from conclusion to raw signal (Amplitude):** Theme - Evidence items (n=X) - Full original text. The chain is accessible without leaving the view. Decomposability is the rational foundation of trust. (Source: amplitude.com)

3. **Honest confidence and sample size display (Perplexity + Amplitude combined):** Every theme shows item count, source diversity, time range, and a confidence indicator. Thin evidence is flagged visibly. Honesty about weak evidence increases trust in strong evidence. (Source: benchmark.md)

### 1 Mechanism That Will NOT Work

**Fully automated synthesis with no visible reasoning** (pattern seen in Canny Autopilot, early Productboard AI). Presents conclusions without showing method. Fails for the skeptical PM who needs to defend conclusions to a stakeholder. One bad synthesis experience destroys trust permanently. Anti-pattern confirmed by benchmark research.

---

## 6. UX Patterns

*(Full detail in research/ux-patterns.md)*

### Pattern Chosen: The Report + Evidence Brief

**Primary pattern:** Synthesis-on-demand report. PM opens Sift, sees the synthesized picture (themes, priorities, evidence counts), drills into any theme for evidence detail, and produces an evidence brief for sharing.

**3 Reasons for this choice:**

1. **JTBD alignment:** The PM's job is to get to a defensible answer within a planning session. The report pattern starts with the conclusion (themes), enables verification (drill-down), and produces a shareable output. Matches the "synthesis-first, detail-on-demand" behavioral pattern exactly.

2. **Competitor gap:** All HARD competitors present feedback aggregation in dashboard or inbox patterns. The report-with-drill-down for PM synthesis is an open pattern in this market. Dovetail comes closest but targets research rather than prioritization.

3. **Trust mechanism fit:** The report pattern with inline citation (Perplexity benchmark) and progressive drill-down (Amplitude benchmark) enables the trust-building progression: synthesis first, spot-check to verify, then act. Dashboard and canvas patterns do not support this.

**Alternative under condition X:** Inbox pattern (Pattern B) if the product shifts to primarily serve CS/support signal suppliers (Segment C). Not appropriate for MVP targeting Segment A.

**Pattern that does not fit:** The Canvas (Pattern D). Does not scale to hundreds of feedback items, not repeatable across sessions, and trust in a canvas depends on the person who built it rather than the system.

---

## 7. Conclusions

### Gaps Table

| Gap | Description | Source | Confidence |
|---|---|---|---|
| Synthesis trust chain | No competitor demonstrates full traceability from raw signal to decision with honest confidence on public pages | competitive-analysis.md, benchmark.md | High |
| PM-specific positioning | "Confident PM defending her roadmap" story is unclaimed by any HARD competitor | competitive-analysis.md | High |
| Honest confidence display | None of the benchmarked direct competitors show sample size and confidence level alongside synthesis conclusions | benchmark.md | High |
| Evidence brief as product | The shareable evidence artifact (quotes + themes + sources) is underbuilt across all competitors | aarrr.md, competitive-analysis.md | Medium |
| Free tier value delivery | Current free tiers across competitors are too restrictive to create genuine "aha" moments; Sift can do better | competitive-analysis.md | Medium |
| Atlassian consolidation risk | JPD + Cycle acquisition could absorb the "good enough" mid-market segment via distribution advantage | competitive-analysis.md | Medium - monitor |

---

### 6 Hypotheses (If / Then / Because)

**H1 - The riskiest assumption [IF THIS FAILS, THE IDEA FAILS]**

**If** we build synthesis that is transparent (method visible), traceable (drill-down to raw signal), and honest about confidence,
**then** skeptical PMs will trust the synthesis enough to act on a real roadmap decision without re-synthesizing the raw data themselves,
**because** the presence of verifiability - knowing you can audit any conclusion - is the psychological mechanism that creates calibrated trust, even when the user does not actually audit every claim. (Mechanism: Perplexity citation pattern - benchmark.md.)

---

**H2 - Activation**

**If** the PM's first synthesis session uses their own real feedback data (not demo data) and surfaces at least one theme they already suspected is real,
**then** they will complete activation (not abandon during onboarding),
**because** confirmation of known intuition with evidence is a lower-friction trust-building experience than discovery of something new. The PM can immediately validate "yes, that is real, these quotes confirm it" and extends trust to unfamiliar themes.

---

**H3 - Evidence brief as viral loop**

**If** every PM can share a synthesis output as a public link (no Sift login required to view),
**then** evidence brief sharing will become the primary organic acquisition channel,
**because** the brief circulates in environments (Notion docs, Slack, Google Slides, email) where the audience is both receptive to PM tools and influential enough to adopt them (Product Leads, VPs, PMs on other teams).

---

**H4 - Conversion timing**

**If** the free-to-paid conversion prompt appears at the specific moment the user is trying to use a gated feature (evidence drill-down, team sharing, or additional integration) rather than at a generic upgrade wall,
**then** the conversion rate will be meaningfully higher than a generic upgrade prompt,
**because** context-specific conversion connects the price to a concrete, immediate benefit rather than an abstract tier upgrade. The user knows exactly what they are buying.

---

**H5 - The positioning gap**

**If** Sift positions specifically for the PM who needs to defend roadmap decisions with evidence (vs. the broader "product + CS + sales + marketing" positioning of competitors),
**then** PMs in the target segment will self-select into Sift over competing tools,
**because** specificity in positioning creates stronger resonance with the exact segment that has the pain, even though it reduces the addressable market on paper. Being the obvious choice for one segment outperforms being a good choice for five.

---

**H6 - Retention through team dependency**

**If** Sift's evidence briefs become a standard output for roadmap reviews (shared with the PM's team, engineering, and leadership),
**then** individual PM retention will become team-level retention (the PM cannot stop using Sift without disrupting the team's shared evidence standard),
**because** shared artifacts create organizational lock-in that individual feature value cannot. The brief is the exit barrier, not the synthesis engine.

---

### Open Questions Table

| Question | Why it matters | How to answer |
|---|---|---|
| What is the exact baseline time PMs spend on manual feedback synthesis today? | Needed to validate Objective 2 (time to decision) and to sharpen the activation and conversion messaging | User interviews (ask PMs to time themselves through a real synthesis session) |
| Does Productboard Spark actually provide evidence traceability, or just AI workflow prompts? | If Spark already solves the trust chain problem, the differentiation argument narrows | Hands-on evaluation of Spark with a real feedback dataset [? behind login for full evaluation] |
| Will Jira Product Discovery absorb the synthesis market through Atlassian's distribution? | If JPD builds credible synthesis post-Cycle acquisition, the "good enough" mid-market shrinks | Monitor JPD product releases quarterly; evaluate when new features ship |
| What is the right free plan limit - items/month or some other constraint? | Wrong limit kills activation (too low) or kills conversion (too high) | A/B test in early beta: compare items/month vs. features/tier limit vs. integrations limit |
| What willingness-to-pay exists at $30-40/seat/month for the primary segment? | Pricing hypothesis is entirely unvalidated | Pricing research: Van Westendorp price sensitivity surveys with target PMs |
| Do PMs want to share evidence briefs externally, or are they primarily internal documents? | Determines whether the brief viral loop actually works | Observe brief sharing behavior in beta: track internal vs. external shares |

---

## 8. Post-Persona Research - June 2026

*All claims verified from live sources fetched in June 2026. Every fact cites a URL.*

### H1 - Riskiest assumption: CONDITIONALLY CONFIRMED (MEDIUM confidence)

H1 as stated: PMs will trust AI synthesis enough to act on a real roadmap decision without re-synthesizing the raw data themselves.

**Evidence attempting to kill it:**

"Most teams are using AI today for content generation and summaries. Far fewer trust it for prioritization or decision support. The reason is skepticism about the outputs." Source: https://aipmtools.org/articles/future-of-ai-product-management

"People are still wary of AI output quality (rightfully so!)." Source: https://blog.ravi-mehta.com/p/building-ai-products-lessons-from (Ravi Mehta, formerly Productboard CPO, describing what they learned building Spark)

"Productboard AI customer feedback analysis works best as a first pass that surfaces signal for human review, not as a replacement for PM judgment." Source: https://www.productboard.com/blog/productboard-spark-ai-customer-feedback-analysis/

These three sources confirm that unconditional H1 (trust any AI synthesis without verification) is NOT the current state. Black-box synthesis is not trusted for decisions.

**Evidence supporting conditional H1 (with transparency mechanisms):**

"Citations make it trustworthy enough to present to execs, and citations make it verifiable when presenting data to stakeholders or executives." Source: https://aipmtools.org/articles/future-of-ai-product-management

"Tools are showing their work, making AI recommendations auditable and trustworthy for stakeholder conversations." Source: https://aipmtools.org/articles/ai-changing-product-management

Productboard Spark positions for direct action: "There is no translation layer, no export step, no 'now what?' moment. The insight arrives already oriented toward action." Source: https://www.productboard.com/blog/productboard-spark-ai-customer-feedback-analysis/

"Understanding the data these tools rely on, sanity-checking outputs, and using simple eval style checks (spot tests, edge cases, benchmarks) before trusting an AI workflow in a critical process is a core competency for modern product managers." Source: https://aipmtools.org/articles/future-of-ai-product-management

**Conclusion:** H1 is conditionally confirmed. With transparency mechanisms (inline citation, evidence count, drill-down to raw signal), PMs DO trust AI synthesis enough to act on it and present it to stakeholders WITHOUT re-synthesizing the entire raw dataset themselves. The act of spot-checking a few themes (not re-synthesizing all of them) is what builds trust, fully consistent with H1 as formulated. The critical failure mode is synthesis without visible reasoning. Sift's design commitment to inline citation, evidence counts, and drill-down is what makes H1 true.

---

### PM pain with feedback volume - CONFIRMED (MEDIUM confidence)

"insights get missed because themes are buried in data that nobody has time to read." Source: https://www.productboard.com/blog/productboard-spark-ai-customer-feedback-analysis/

"A team of three PMs can reasonably review a few hundred feedback items per quarter, but at a few thousand it becomes a part-time job, and at tens of thousands it becomes impossible." Source: https://www.productboard.com/blog/productboard-spark-ai-customer-feedback-analysis/

"One PM reported that summarizing feedback with an AI tool saves them hours every week, replacing the tedious process of reading through hundreds of tickets." Source: https://www.enterpret.com/blog/2025-product-planning-tips

"Product managers spend roughly 30% of their time on data gathering and synthesis." Source: https://aipmtools.org/articles/ai-changing-product-management (attributed to Perspective AI research)

**Conclusion:** The baseline pain (hours spent on manual synthesis) is real and confirmed across multiple independent sources. The exact "3-5 hours per planning cycle" figure in master-research.md Section 1 remains [?] unvalidated but directionally consistent with "hours per week" and "a part-time job at scale." The 3-5 hours figure is plausible but should be confirmed in user interviews.

---

### Trust through spot-checking (behavioral pattern B3) - CONFIRMED (MEDIUM confidence)

"Understanding the data these tools rely on, sanity-checking outputs, and using simple eval style checks (spot tests, edge cases, benchmarks) before trusting an AI workflow in a critical process is a core competency for modern product managers." Source: https://aipmtools.org/articles/future-of-ai-product-management

"Tools are showing their work, making AI recommendations auditable and trustworthy for stakeholder conversations." Source: https://aipmtools.org/articles/ai-changing-product-management

**Conclusion:** The spot-checking pattern is confirmed. PMs do NOT trust AI synthesis blindly. They verify a subset (spot tests) before extending trust to the whole. This directly confirms behavioral pattern B3 from ux-patterns.md and the mechanism described in benchmark.md (the presence of verifiability creates trust).

---

### Synthesis gap at the market level - CONFIRMED (HIGH confidence)

"A tool that makes collection easier but leaves synthesis, validation, and follow-up on your plate has solved the cheap problem and skipped the expensive one." Source: https://aipmtools.org/articles/ai-changing-product-management

Freeman C., Senior PM, Capterra review of Canny (November 2025): "I can understand autopilot's value, but what is the real value of automatically adding 1000s of feature requests into Canny if there's no way of using AI to query or filtering within those posts? I would have rather had some type of AI that could read ticket context and auto-assign tags or teams or categories or add to roadmap." Source: https://www.capterra.com/p/161103/Canny/reviews/

**Conclusion:** The market gap is confirmed at the synthesis layer, not the collection layer. All major competitors solve collection. The PM voice from actual user reviews confirms that collection without synthesis leaves the PM's core problem unsolved. This directly validates Sift's positioning.

---

### Citations and transparency as the trust mechanism - CONFIRMED (MEDIUM confidence)

"Citations make it trustworthy enough to present to execs." Source: https://aipmtools.org/articles/future-of-ai-product-management

This is a direct confirmation of the Perplexity citation pattern (benchmark.md, Mechanism 1) applied to the PM-in-context-of-stakeholder-presentation use case. The mechanism transfers from general AI search to PM product tools.

---

### Baseline time for manual synthesis - UNRESOLVED

No primary source found that confirms a specific hours-per-planning-cycle figure. Data points gathered:

- "Hours every week" saving described (Enterpret 2025 blog) - implies hours is the baseline order of magnitude
- "Organizing research data previously took an entire day" (Enterpret 2025 blog) - research-focused, not planning-cycle-specific
- "30% of PM time on data gathering and synthesis" (Perspective AI - note: vendor source, not primary survey)
- "Two weeks of manual work before quarterly planning" implied (Productboard blog) - plausible but vendor-authored

Verdict: The claim stays [?]. Directional evidence suggests hours to days, not minutes. Exact figure requires user interviews.

---

### Brief sharing: external vs. internal - UNRESOLVED

No data found. Zero sources addressed whether PMs share synthesis outputs externally (to stakeholders outside the company) or only internally (within the team). This remains an open hypothesis that requires beta observation.

---

## 9. Founder Decisions - June 2026

*Three product decisions locked after personas, JTBD, and live re-research. June 2026.*
*Abbreviated here. Full decision text with open questions in research/strategy.md (Sections 5 and 6).*

### H1 Reformulation - Record

H1 was reformulated from unconditional (PMs will trust AI synthesis enough to act) to conditional (when synthesis is transparent and traceable, PMs DO act on AI synthesis without re-synthesizing raw data). This is a live research finding, not a founder decision.

The conditional form is confirmed MEDIUM confidence across four independent sources (live-research.md, F1, F2, F3, F4). The founder decision (D2 below) responds to this reformulation: since transparency is the condition H1 requires, confidence display is mandatory in MVP.

The chain: H1 reformulation (research finding) - transparency is load-bearing (design implication) - confidence display is mandatory in MVP (D2) - day-one scope is item count + low signal badge (D2 scope).

Cite as: master-research.md Section 8 (H1 conditional confirmation). strategy.md Section 5 (H1 reformulation). live-research.md (F1, F2, F3, F4).

---

### D1 - MVP Audience Focus: Segment A Only

**CLOSED.**

MVP scope is Segment A (The Overloaded PM) only. Segment C (The Signal Supplier) is deferred.

Record on Segment C: it is NOT a separate backlog feature. It is a PM retention dependency. The signal supplier needs to see their signal being used or they stop submitting, which degrades the PM's (Segment A) data quality over time. The Segment A transparency design (theme - evidence - source chain) is the prerequisite surface for Segment C's closure loop in the fast follow.

Research basis: strategy.md (Segment C: "Later"). competitive-analysis.md (PLG model: Segment A is the economic buyer in self-serve). jtbd.md (J5: Importance 3 for Segment C, cut from MVP). personas.md (Persona C: Later priority confirmed).

Cross-reference updates: jtbd.md (J5 cut confirmed by D1). personas.md (Persona C note updated with retention dependency framing).

---

### D2 - Honest Confidence Display: Mandatory in MVP

**CLOSED.**

Confidence display is mandatory in MVP. The H1 reformulation makes this a prerequisite, not a feature. Without visible evidence counts and honest thin-evidence signals, the transparency condition that H1 requires does not hold, and the core value proposition fails.

Day-one scope only: item count per theme (n=X) and a "low signal" badge for thin evidence. Source diversity, time range display, and configurable thresholds are v2 scope.

Research basis: H1 conditional confirmation (live-research.md F4, master-research.md Section 8). benchmark.md (Mechanism 3: honest confidence and sample size display). jtbd.md (J3: Know how much to trust a conclusion - D2's day-one scope is what closes J3 at MVP).

Cross-reference updates: jtbd.md (J3 function column scoped to day-one). jtbd.md (critique table H1 row updated with D2 connection).

---

### D3 - First Integration Set: CSV + Intercom

**CLOSED.**

MVP integrations: CSV import and Intercom. Zendesk is the confirmed next integration, using the same abstraction pattern as Intercom, without extending MVP build scope. No timeline committed for Zendesk.

Research basis: personas.md (O2: Segment A tool stack names Intercom and Zendesk as primary sources). master-research.md (AARRR section: "CSV import + Intercom integration as first connections" - now confirmed by founder decision, not hypothesis). aarrr.md (Activation: first synthesis must use real PM data within 20 minutes of signup).

Note: the [?] about CSV vs. native integration preference at activation in personas.md is a separate data question. D3 is a build priority decision made under that uncertainty. Beta behavior will answer the preference question.

Cross-reference updates: personas.md (gaps table: CSV vs. integration row updated to reflect D3 build decision).
