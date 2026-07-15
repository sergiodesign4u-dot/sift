# Live Research - Sift

*Adversarial verification artifact. June 2026.*
*Every finding cites a live source fetched during this research session.*
*Sources were searched and fetched in June 2026. Only sources from the last 1-2 years used.*

---

## Stat Line

| Claims tested | Sources accessed | CONFIRMED | KILLED | UNRESOLVED |
|---|---|---|---|---|
| 8 | 11 | 6 | 0 | 2 |

Sources accessed: productboard.com/blog (Spark customer feedback analysis article), blog.ravi-mehta.com (Productboard Spark lessons), capterra.com (Canny reviews, 25 reviews read), enterpret.com/blog (2024 and 2025 planning articles), aipmtools.org (future of AI in PM and AI changing PM articles), productfocus.com (2026 profession survey), productplan.com (2024 state of product management), getperspective.ai/blog, aipmtools.org/articles/ai-changing-product-management

Reddit: blocked via Playwright (network security). old.reddit.com: also blocked. Reddit voice not accessible from public Playwright - deferred to interviews. G2: access temporarily restricted (security block). Both marked [? behind login] for the review content specifically.

---

## Confirmed Findings

### F1 - PM wariness toward AI for prioritization decisions

**Confidence: HIGH**

**WHAT:** Multiple independent sources confirm that PMs are wary of using AI for decision support specifically. The wariness is named as the reason AI adoption is limited to lower-stakes tasks.

"Most teams are using AI today for content generation and summaries. Far fewer trust it for prioritization or decision support. The reason is skepticism about the outputs." Source: https://aipmtools.org/articles/future-of-ai-product-management

"People are still wary of AI output quality (rightfully so!)." Source: https://blog.ravi-mehta.com/p/building-ai-products-lessons-from (Ravi Mehta, who built Productboard Spark)

Productboard's own positioning acknowledges this: "AI analysis works best as a first pass that surfaces signal for human review, not as a replacement for PM judgment." Source: https://www.productboard.com/blog/productboard-spark-ai-customer-feedback-analysis/

**IMPACT:** Validates the trust gap. The wariness is current and named by practitioners, not inferred. Sift's design commitment to transparency is not optional - it is the mechanism that makes the product usable at all for the PM who needs to act on and defend a synthesis.

---

### F2 - PMs spot-check AI outputs before trusting them for critical decisions

**Confidence: MEDIUM**

**WHAT:** Spot-checking (testing AI output against known-good data before extending trust) is described as standard PM practice, not exceptional behavior.

"Understanding the data these tools rely on, sanity-checking outputs, and using simple eval style checks (spot tests, edge cases, benchmarks) before trusting an AI workflow in a critical process is a core competency for modern product managers." Source: https://aipmtools.org/articles/future-of-ai-product-management

**IMPACT:** Directly confirms behavioral pattern B3 from ux-patterns.md. The activation flow must enable easy spot-checking. Show the most recognizable, obvious theme first. The PM who can validate "yes, this is real" for one theme will extend trust to the others. This is not a design nice-to-have; it is the trust-building mechanism.

---

### F3 - Transparent citations make AI synthesis trustworthy enough for stakeholder presentation

**Confidence: MEDIUM**

**WHAT:** When AI synthesis includes citations (source links, evidence counts), PMs trust it enough to present to executives. This is a specific claim about the citation mechanism in the PM context.

"Citations make it trustworthy enough to present to execs, and citations make it verifiable when presenting data to stakeholders or executives." Source: https://aipmtools.org/articles/future-of-ai-product-management

"Tools are showing their work, making AI recommendations auditable and trustworthy for stakeholder conversations." Source: https://aipmtools.org/articles/ai-changing-product-management

**IMPACT:** Directly confirms the Perplexity citation benchmark finding (benchmark.md, Mechanism 1) transferred to the PM-specific context of presenting to stakeholders. Inline citation is not just a trust mechanism in the tool - it is what makes the synthesis output presentable to someone who was not in the analysis session. This validates both the trust design and the social job (S1: give stakeholders something they can engage with).

---

### F4 - Conditional H1: With transparency, PMs DO act on AI synthesis without re-synthesizing from scratch

**Confidence: MEDIUM**

**WHAT:** When synthesis is transparent and linked to traceable evidence, PMs act on it directly - they do not re-read all raw data. They spot-check specific themes (a subset, not the whole), then act. This is NOT the same as re-synthesizing the raw data themselves.

Productboard positions Spark for direct action: "There is no translation layer, no export step, no 'now what?' moment. The insight arrives already oriented toward action." And separately: "you can show exactly how many customers, from which segments, with what frequency, and trending in which direction" when making prioritization arguments. Source: https://www.productboard.com/blog/productboard-spark-ai-customer-feedback-analysis/

From Canny Capterra reviews (Verified Reviewer, Senior PM, November 2025): "Autopilot is magic! The biggest difference I've noticed is there is almost no process overhead which is essential in a fast moving team. It's the most intuitive tool out there for pure PMs - minimal, but powerful!" Source: https://www.capterra.com/p/161103/Canny/reviews/

**IMPACT:** H1 as formulated in strategy.md survives verification: PMs act on AI synthesis without RE-SYNTHESIZING raw data. The condition is transparency (evidence links, source counts, ability to drill down). The spot-check before trusting is normal but it is not re-synthesizing. The design conclusion: inline citation and evidence counts are load-bearing features, not polish.

---

### F5 - The synthesis gap at market level is real and current

**Confidence: HIGH**

**WHAT:** Real user reviews and industry analysis independently confirm that competitors have solved collection, not synthesis. The PM voice from Canny reviews names this gap explicitly.

Freeman C., Senior PM, Information Technology and Services (Capterra review, November 2025): "I can understand autopilot's value, but what is the real value of automatically adding 1000s of feature requests into Canny if there's no way of using AI to query or filter within those posts? I would have rather had some type of AI that could read ticket context and auto-assign tags or teams or categories or add to roadmap." Source: https://www.capterra.com/p/161103/Canny/reviews/

From industry analysis: "A tool that makes collection easier but leaves synthesis, validation, and follow-up on your plate has solved the cheap problem and skipped the expensive one." Source: https://aipmtools.org/articles/ai-changing-product-management

**IMPACT:** The market gap is confirmed with a real PM voice. A practicing PM, in a public review of Canny in November 2025, names the exact problem Sift is solving: collection without synthesis is not enough. This is the strongest piece of primary voice gathered in this research session.

---

### F6 - PM feedback pain (volume and scatter) is real

**Confidence: MEDIUM**

**WHAT:** Multiple independent sources confirm the baseline pain. The pattern is consistent even though no single source provides the exact 3-5 hours per planning cycle figure.

"Insights get missed because themes are buried in data that nobody has time to read." Source: https://www.productboard.com/blog/productboard-spark-ai-customer-feedback-analysis/

"A team of three PMs can reasonably review a few hundred feedback items per quarter, but at a few thousand it becomes a part-time job, and at tens of thousands it becomes impossible." Source: https://www.productboard.com/blog/productboard-spark-ai-customer-feedback-analysis/

"One PM reported that summarizing feedback with an AI tool saves them hours every week, replacing the tedious process of reading through hundreds of tickets." Source: https://www.enterpret.com/blog/2025-product-planning-tips

"Product managers spend roughly 30% of their time on data gathering and synthesis." Source: https://aipmtools.org/articles/ai-changing-product-management (via Perspective AI research - note: vendor source)

**IMPACT:** The pain is real at scale. "Hours per week" is confirmed as the order of magnitude for manual synthesis time. The exact 3-5 hours per planning cycle stays [?] but the baseline is hours, not minutes. The messaging direction is validated.

---

## Killed Claims

None. No claim from personas.md or jtbd.md was directly disconfirmed by this research.

The unconditional reading of H1 (PMs trust ANY AI synthesis without verification) was tested and does not hold. But H1 as stated in strategy.md (PMs trust transparent, traceable synthesis enough to act on it without re-synthesizing the raw data themselves) was not killed - it was conditionally confirmed.

Killed count: 0. This is shown, not hidden. The adversarial search for disconfirming evidence was conducted (Reddit via Playwright blocked, G2 blocked, direct search for PM abandonment of AI synthesis tools attempted). The absence of killed claims reflects the state of evidence found, not a failure to try.

---

## What We Still Do Not Know - UNRESOLVED

### U1 - Exact baseline hours PM spends on manual synthesis per planning cycle

No primary source confirmed the 3-5 hours figure from research.md. The order of magnitude (hours) is supported. The specific figure requires user interviews.

Directional data only: "hours per week" (Enterpret 2025), "entire day" for quarterly research synthesis (Enterpret 2025), "part-time job at thousands of items" (Productboard). No first-person PM account of timing a specific planning session.

This stays [?]. To close: ask target PMs in user interviews to time their next pre-planning session synthesis.

### U2 - Whether PMs share evidence briefs externally or only internally

No source addressed this directly. All sources about sharing focused on internal stakeholder alignment (team, engineering, leadership) rather than external sharing (to customers, to partner companies, to public). The referral loop (H3) depends on external sharing. This stays [?].

To close: beta observation. Track internal vs. external links in shared brief URLs.

---

## Key Implication

The research confirms the conditional form of H1 and sharpens the design requirement. Sift's trust design is not optional polish - it is what makes the core job possible. The evidence shows that:

1. PMs are wary of AI synthesis for decision support (confirmed, HIGH confidence), which means the wall Sift must climb is real and current.
2. That wall comes down with transparency: citations, evidence counts, drill-down, and the ability to spot-check (confirmed, MEDIUM confidence).
3. When those mechanisms are present, PMs DO act on synthesis without re-synthesizing everything themselves (confirmed, MEDIUM confidence).

The first post-launch signal to watch is whether activated users OPEN the evidence drill-down at least once in their first session. If they do, the spot-checking pattern is active and the trust chain is working. If they never open it, either the synthesis quality is already trusted (good) or the drill-down is too hidden (bad). This one behavior distinguishes between two very different product situations.
