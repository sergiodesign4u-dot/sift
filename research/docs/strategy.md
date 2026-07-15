# Product Strategy - Sift

**v2 - validated against competitive analysis and benchmark research (June 2026)**

---

## Changelog (v1 to v2)

| Section | Status | What changed |
|---|---|---|
| Objectives | CONFIRMED with refinement | Targets adjusted based on competitor conversion data and benchmark tool retention patterns |
| Audience segments | CONFIRMED with sharpening | Segment A validated as primary; Cycle acquisition by Atlassian confirms PM tool consolidation risk in Segment B profile |
| JTBD | CONFIRMED | All competitor research reinforces the "synthesis to defensible decision" job; no competitor owns it clearly |
| Business model | CHALLENGED - adjusted | Free plan limit hypothesis refined upward based on Canny and JPD free tier analysis; 2-tier pricing model observed at Dovetail worth noting |
| Riskiest assumption | CONFIRMED - sharpened | Benchmark research adds specificity: the trust gap is real and none of the benchmarked competitors solve it well |

---

## 1. Product Objectives

| # | Objective | Metric | Target (hypothesis) | Evidence |
|---|---|---|---|---|
| 1 | PMs trust and act on Sift's synthesis for real roadmap decisions | % of active users who cite Sift as primary input for their most recent roadmap change | 60% of activated users within 90 days | Benchmark research shows trust is earned through traceability (Amplitude, Perplexity patterns) not just through quality of output. Achieving this requires the inline citation + drill-down mechanism in MVP. |
| 2 | Teams reach a prioritization decision faster with Sift than without | Avg. time from session start to "roadmap item updated or briefed" | Under 25 minutes for a planning session | Confirmed directional target. PMs spend time in context-switching and manual synthesis today (multiple tools, manual aggregation). [?] Exact baseline TBD from user research. |
| 3 | Free teams convert to paid at a commercially viable rate | Free-to-paid conversion within 60 days of hitting the signal volume limit | 8-12% | Calibrated against Canny's Pro conversion model (free: 25 tracked users, Pro: $79/mo). Canny's public model suggests a volume-gated free plan can convert at meaningful rates in this segment. [?] Sift's exact rate is unvalidated. |
| 4 | Product teams stay and expand | 12-month net revenue retention | 110%+ | Seat expansion is the primary growth mechanic (team grows, more PMs onboard). Consistent with PLG B2B patterns at similar price points. [?] Requires validation with real customer data. |

---

## 2. Audience Segments

### Segment A - The Overloaded PM (Primary - CONFIRMED)

**Age:** 28-38

**Profile:** Product Manager at a B2B mid-market SaaS company (50-500 employees, 2-10 person product team). 3-8 years experience. Not a data analyst but comfortable with data. Lives in Jira or Linear for execution. Feedback sitting in Intercom, Zendesk, Gong, but no coherent picture.

**Motivation:** Ship things that matter to customers. Feel confident, not just defensible. Stop spending 3-5 hours before every planning session manually reading and tagging feedback.

**Pain:** Synthesis is scattered, manual, and unreliable. The roadmap gets challenged by sales ("my customer said X") and the PM cannot easily disprove it with evidence. Prioritization feels like educated guessing dressed up as data.

**JTBD (primary):** When I have a roadmap planning session coming up, I want to see a trustworthy synthesis of what customers are saying - with evidence I can trace - so that I can make a confident, defensible prioritization call.

**JTBD (secondary):** When a stakeholder challenges a roadmap decision, I want to quickly pull the underlying evidence so that I can defend the choice with real customer voices rather than my opinion.

**Priority:** Primary

**Evidence:** Confirmed by competitive research: no HARD competitor clearly owns the "PM who needs to defend their roadmap" story. All competitors (Productboard, Canny, Enterpret) position for broad teams (product + CS + sales + marketing). The PM-specific, evidence-defensible story is an open positioning gap. (Source: competitors.md)

---

### Segment B - The Evidence-Hungry Product Lead (Secondary - CONFIRMED with update)

**Age:** 35-45

**Profile:** Head of Product or VP of Product at a scale-up (100-500 employees). Manages 3-8 PMs. Responsible for product strategy. Presents roadmap to board or leadership.

**Motivation:** Make the org genuinely customer-led, not just claim to be. Create a consistent evidence standard across the PM team. Be able to aggregate across the team's work.

**Pain:** Every PM synthesizes feedback differently. No consistent evidence standard. Relies on anecdotes rather than systematic signal when presenting to leadership.

**JTBD:** When I present the roadmap to leadership, I want to show systematic customer evidence behind each priority so that the strategy feels grounded and not opinion-based.

**Priority:** Secondary

**Update from v1:** The Cycle.app acquisition by Atlassian (September 2025, source: [cycle.app/blog](https://cycle.app/blog/cycle-is-joining-atlassian)) and its integration into Jira Product Discovery is worth watching for this segment. Atlassian-heavy orgs may default to JPD for this use case. The product lead who is already standardized on Atlassian tooling is a harder acquisition target. Sift's best Segment B targets are product leads at non-Atlassian-native orgs.

---

### Segment C - The Signal Supplier (Later - CONFIRMED as later priority)

**Age:** 26-35

**Profile:** Customer Success Manager, Support Lead, or Sales Engineer at the same company. Daily customer conversation. Feels insights are not making it to product.

**JTBD:** When I share customer feedback with the product team, I want to see whether it influenced a decision so that I can close the loop with the customer.

**Priority:** Later

**Evidence:** Confirmed by competitive analysis: Canny serves this segment through public roadmaps and changelogs (the CS/support role can point customers to the roadmap). Sift does not need to replicate this in MVP. The signal supply channel is valuable (CS/support input enriches the synthesis), but the economic buyer is the PM, not the CS lead.

---

## 3. Business Model

**Model type:** Seat-based SaaS subscription with a hard-limited free plan.

**Value exchange:** Time saved on manual synthesis, quality of evidence-backed decisions, reduced political friction from shared evidence.

**Free vs. paid split (v2 - updated):**

V1 hypothesis was a 500 items/month free limit. After reviewing the competitor free tiers:
- Canny free: 25 tracked users (very narrow, creates friction fast)
- JPD free: 3 creators (very narrow, restricts team immediately)
- Dovetail free: 1 channel, 1 project (restrictive, pushes to enterprise quickly)

The pattern across competitors is a free tier designed to be genuinely useful for solo exploration but not for team use. Sift's updated hypothesis: the free limit should be generous enough to get to a real first synthesis (enough signal to make the value real) but restrictive at the team collaboration and advanced evidence tracing layers.

**Updated free vs. paid hypothesis:**

| Free | Paid |
|---|---|
| Up to 250 feedback items/month ingested | Unlimited signal volume |
| Theme clusters visible (theme names and item counts) | Full synthesis: themes + evidence drill-down + confidence scores |
| 1 integration source | 3+ integration sources |
| Single-user workspace | Team workspace with collaboration |
| No roadmap linking | Roadmap link (native or Jira/Linear sync) |
| No sharing or export | Shareable evidence briefs (public link) |
| No segment or cohort filtering | Customer segment filters |

*Note: The free limit was revised downward from v1 (500 to 250 items). Reasoning: 250 items is enough to produce a meaningful first synthesis (enough signal to create "aha"), but the typical mid-market team generates 500-2,000 items/month across channels. The limit is hit quickly once the team is actively using the product, creating the natural conversion moment.*

**Pricing hypothesis (v2 - refined directional, not validated):**
- Starter: ~$30-40/seat/month (billed annually), 1-3 seats
- Growth: ~$20-25/seat/month (billed annually), 5-20 seats, team features
- Enterprise: custom

*Context: Productboard charges $19-59/maker/month; JPD $10-25/creator/month; Dovetail is enterprise-only. Sift is positioned between JPD (low price point, Atlassian-ecosystem tool) and Productboard (higher price, broader platform). [?] Willingness-to-pay research required before setting prices.*

---

## 4. Riskiest Assumption (v2 - CONFIRMED and sharpened)

**The assumption (unchanged from v1):** Product managers will trust Sift's AI synthesis enough to let it influence a real roadmap decision - specifically, they will trust the conclusions without re-synthesizing the raw data themselves.

**Research status: CONFIRMED as the riskiest assumption.**

Benchmark research strengthens this: the gap between "AI synthesis with no visible reasoning" (pattern observed across Canny Autopilot, early Productboard features) and "transparent synthesis with drill-down" (Amplitude, Perplexity benchmark patterns) is large and underexplored by direct competitors. No HARD competitor clearly demonstrates the full trust chain on public pages. (Source: benchmark.md, competitors.md)

**What the research adds to v1:**
- The trust mechanism that works is *decomposability* (Amplitude pattern) + *inline citation* (Perplexity pattern) + *honest confidence display*. These are specific, buildable, and not currently well-executed by competitors.
- The trust failure mode to avoid is *confident synthesis with hidden reasoning* (seen in Canny Autopilot UX). This is the anti-pattern.
- The PM does not need to verify every conclusion - they need to know they *can* verify any conclusion. The presence of the drill-down is the trust signal, not the act of drilling down. (Source: benchmark.md, Mechanism 1 - Perplexity citation pattern)

**If this assumption is false (consequence):** PMs will always feel the need to re-check the raw data. Sift becomes another data source they process manually, not a synthesis they act on. The core time-saving value proposition fails. The product survives as a better data aggregator but not as the decision-confidence tool it needs to be.

**This is Hypothesis H1 in Phase 6 (research.md) - the one whose failure kills the idea.**

---

## 5. H1 Reformulation - June 2026

*From live research conducted June 2026. This is a research finding, not a founder decision. The founder decision (D2 below) responds to it.*

**Original form:** PMs will trust Sift's AI synthesis enough to act on a real roadmap decision without re-synthesizing the raw data themselves.

**Reformulation:** H1 is conditionally confirmed. The condition is transparency.

When synthesis is transparent and traceable (inline citations, evidence counts, drill-down to raw signal), PMs DO act on AI synthesis without re-synthesizing raw data. They spot-check a subset of themes (verify themes they know are real before trusting novel ones), then act. This spot-check is not re-synthesizing - it is trust calibration. Without transparency, H1 fails: black-box synthesis is not trusted for decisions.

Sift's transparency design is what makes H1 true. It is the mechanism, not optional polish.

**Evidence (all confirmed, June 2026):**
- "Citations make it trustworthy enough to present to execs." Source: https://aipmtools.org/articles/future-of-ai-product-management
- "Tools are showing their work, making AI recommendations auditable and trustworthy for stakeholder conversations." Source: https://aipmtools.org/articles/ai-changing-product-management
- "Sanity-checking outputs and using simple eval style checks (spot tests, edge cases, benchmarks) before trusting an AI workflow in a critical process is a core competency for modern product managers." Source: https://aipmtools.org/articles/future-of-ai-product-management
- Productboard Spark positions for direct action: "There is no translation layer, no export step, no 'now what?' moment." Source: https://www.productboard.com/blog/productboard-spark-ai-customer-feedback-analysis/

Full verification record: live-research.md (F1, F2, F3, F4). Full update in research.md Section 8.

---

## 6. Founder Decisions - June 2026

*Three decisions locked after personas, JTBD, and live re-research work. June 2026.*
*Abbreviated rationale here. Full rationale in research.md Section 9.*

### D1 - MVP Audience Focus: Segment A Only

**CLOSED.**

MVP scope is Segment A (The Overloaded PM) only.

Segment C (The Signal Supplier) is deferred. Record: Segment C is NOT a separate backlog feature. It is a PM retention dependency. The signal supplier needs to see their signal being used or they stop submitting, which degrades the PM's (Segment A) data quality over time. The transparency design for Segment A (theme - evidence - source chain) is the natural prerequisite surface for Segment C's closure loop in the fast follow.

Cross-reference: personas.md (Persona C: Later priority confirmed). jtbd.md (J5: Importance 3 for Segment C, cut from MVP by this decision).

### D2 - Honest Confidence Display: Mandatory in MVP

**CLOSED.**

Confidence display is mandatory in MVP. It is not a feature to add later. The H1 reformulation (Section 5 above) makes this non-negotiable: transparency is the condition H1 requires, and confidence display is the primary transparency mechanism.

Day-one scope only: item count per theme (n=X) plus a "low signal" badge for thin evidence. Source diversity, time range display, and configurable thresholds are v2 scope, not MVP blockers.

Cross-reference: jtbd.md (J3: Know how much to trust a conclusion - this function closes J3 at MVP). benchmark.md (Mechanism 3: honest confidence and sample size display). H1 reformulation above.

### D3 - First Integration Set: CSV + Intercom

**CLOSED.**

MVP integrations: CSV import and Intercom. Zendesk follows next using the same abstraction pattern established by the Intercom integration, without extending MVP build scope. No specific timeline committed for Zendesk.

Reasoning: CSV covers the immediate activation path (any PM can upload existing feedback on day one). Intercom is named as the primary tool in the Segment A profile (personas.md O2). Together they enable a real synthesis from real data, which is the activation requirement (aarrr.md: PM must reach a synthesis from their own data within 20 minutes).

Note: the [?] about CSV vs. native integration preference at activation (personas.md gaps table) is a separate data question. This decision is a build priority choice made under that uncertainty. Beta behavior will answer the underlying preference question.

Cross-reference: personas.md (O2: Intercom named in Segment A tool stack). research.md (AARRR section: "CSV import + Intercom integration as first connections" - now confirmed by founder decision).

---

## Open Questions (Strategy Level)

These questions are not resolved by the decisions above. They remain open until beta or user research.

| Question | Status | How to close |
|---|---|---|
| Exact baseline time PMs spend on manual synthesis per planning cycle (U1) | OPEN | User interviews; ask PMs to time a real synthesis session |
| Whether PMs share evidence briefs externally vs. internally (U2) | OPEN | Beta observation: track internal vs. external share link usage |
| Exact threshold for "low signal" badge | OPEN | Design phase decision; configurable in v2 |
| Zendesk integration timeline | OPEN by design | Follows Intercom; no commitment made |
| Willingness to pay at $30-40/seat/month | OPEN | Van Westendorp price sensitivity research with target PMs |
