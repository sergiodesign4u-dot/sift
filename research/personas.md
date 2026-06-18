# Personas - Sift

*People observations first. Personas grow visibly from them below.*
*Every block cites its source. Where data is missing: [?].*
*Research conducted June 2026. Live re-research in Step 6.*

---

## Part 1 - People Observations from Research

These observations are pulled directly from the six research files. Each one cites where it came from. Nothing is invented here. Gaps are called out as [?].

---

### O1. Three audience segments are defined and confirmed

Three segments are carried forward from strategy and confirmed against competitive research. They are not invented here.

| Segment | Label | Age | Priority |
|---|---|---|---|
| A | The Overloaded PM | 28-38 | Primary |
| B | The Evidence-Hungry Product Lead | 35-45 | Secondary |
| C | The Signal Supplier | 26-35 | Later |

Source: strategy.md, Sections 2 (Audience Segments). Age ranges are inferred from typical career progression and the strategy document - not validated with census or survey data.

---

### O2. The primary user profile

PM at a B2B mid-market SaaS company, 50-500 employees, 2-10 person product team. 3-8 years experience. Comfortable with data but not a data analyst. Feedback sits in Intercom, Zendesk, Gong, but there is no coherent picture of it. Lives in Jira or Linear for execution. Drowning in scattered signal from multiple tools with no synthesis layer.

Source: strategy.md, Segment A profile.

---

### O3. What the primary user is trying to do (their stated motivation)

Ship things that matter to customers. Feel confident, not just defensible. Stop spending hours before every planning session manually reading and tagging scattered feedback.

Source: strategy.md, Segment A motivation. The "3-5 hours per planning cycle" figure appears in master-research.md Section 1 (Problem) but is flagged there as [? exact figure unvalidated].

---

### O4. What hurts most today

Synthesis is scattered, manual, and unreliable. The roadmap gets challenged by sales ("my customer said X") and the PM cannot easily disprove it with evidence. Prioritization feels like educated guessing dressed up as data. Every PM synthesizes feedback differently - no consistent evidence standard within a team.

Source: strategy.md, Segment A pain; strategy.md, Segment B pain.

---

### O5. Behavioral pattern - synthesis first, detail on demand

PMs work under time pressure. They want to see the synthesized picture first (what are the themes, which are the biggest) and then drill into evidence only for the themes that matter to their current decision. They do not want to start with raw data and build upward. The synthesis is the value. The drill-down is the trust mechanism.

Source: ux-patterns.md, Pattern B1 (marked MOST CRITICAL).

---

### O6. Behavioral pattern - evidence as a social object

The PM does not use insights only for personal decision-making. They use them to persuade stakeholders. The evidence brief (a shareable synthesis with supporting quotes) is a social artifact that travels through the organization independently of the PM. Evidence needs to be shareable and readable without Sift context, for an audience that was not present in the analysis session.

Source: ux-patterns.md, Pattern B2.

---

### O7. Behavioral pattern - trust through spot-checking

Skeptical PMs earn trust in synthesis tools through spot-checking: they pick a theme they already know is real, verify that the tool found it with the right evidence, and then extend trust to themes they did not already know. The activation moment is exactly this: "yes, this theme is real, I recognize these quotes."

Source: ux-patterns.md, Pattern B3. Supported by aarrr.md (Activation: "confirmation of intuition with evidence, not discovery of something unknown"). CONFIRMED by live research (June 2026): "Understanding the data these tools rely on, sanity-checking outputs, and using simple eval style checks (spot tests, edge cases, benchmarks) before trusting an AI workflow in a critical process is a core competency for modern product managers." (https://aipmtools.org/articles/future-of-ai-product-management). The [?] on this behavioral pattern is removed.

---

### O8. Behavioral pattern - context-switching cost aversion

PMs work in 3-6 tools simultaneously (Jira, Slack, email, notes, Sift, Zoom). Context-switching is expensive. The expected session in Sift is 10-15 focused minutes, not an hour. Integration with Jira or Linear is not a nice-to-have - it is the path of least resistance for continued use.

Source: ux-patterns.md, Pattern B4.

---

### O9. Behavioral pattern - retrospective synthesis, not real-time monitoring

PMs work in cycles (sprint planning, quarterly roadmap review, feature sprints). They want to synthesize feedback for a session, not monitor it continuously. The mental model is closer to a report they request than a dashboard they watch.

Source: ux-patterns.md, Pattern B5.

---

### O10. The trust gap and what creates it

PMs are skeptical of AI synthesis. They have been burned by tools that give confident answers without showing reasoning. The benchmark research establishes three mechanisms that create trust:

1. Inline numbered citation adjacent to every claim (Perplexity AI pattern). The presence of the citation, not the reading of it, is the trust signal.
2. Progressive drill-down from conclusion to raw signal (Amplitude pattern). Decomposability is the rational foundation of trust.
3. Honest confidence and sample size display. A tool that admits "this is based on 3 data points" earns trust when it says "this is based on 200 data points."

The anti-pattern: fully automated synthesis with no visible reasoning. One bad synthesis experience destroys trust permanently.

The critical insight: "The PM does not need to verify every conclusion - they need to know they can verify any conclusion. The presence of the drill-down is the trust signal, not the act of drilling down." (benchmark.md, Mechanism 1)

Source: benchmark.md, Mechanisms 1-3 and Anti-pattern section. Confirmed by competitive-analysis.md (trust mechanism gap across all HARD competitors).

---

### O11. The riskiest assumption about people - H1

PMs will trust Sift's AI synthesis enough to act on a real roadmap decision without re-synthesizing the raw data themselves. If this is false, Sift becomes another data source they process manually rather than a synthesis they act on. The core time-saving value proposition fails.

UPDATED (live research, June 2026): H1 is conditionally confirmed (MEDIUM confidence). When synthesis is transparent and traceable (inline citations, evidence counts, drill-down to source), PMs DO act on AI synthesis without re-synthesizing the raw data. They spot-check (verify a subset), then act. Without transparency, H1 fails: black-box synthesis is not trusted for decisions. Sift's transparency design is what makes H1 true, not an optional feature.

Source: master-research.md, Hypothesis H1. strategy.md, Section 4 (Riskiest Assumption). Live research: https://aipmtools.org/articles/future-of-ai-product-management, https://blog.ravi-mehta.com/p/building-ai-products-lessons-from, https://www.productboard.com/blog/productboard-spark-ai-customer-feedback-analysis/, https://www.capterra.com/p/161103/Canny/reviews/ (live-research.md, F4).

---

### O12. Activation behavior

The activation moment is "I see a theme I already suspected and now I have the evidence for it." Confirmation of known intuition with evidence is a lower-friction trust-building experience than discovery of something new. The biggest activation barrier is integration setup friction, not synthesis quality. If the PM cannot reach a synthesis output with their own data within 20 minutes, they leave.

Source: aarrr.md, Activation section.

---

### O13. Retention behavior

The PM returns when something happens: an upcoming planning meeting, a stakeholder challenge, new signal arriving. Retention is event-driven, not calendar-driven. Collaboration (sharing evidence briefs with the team) drives retention more than solo use. Once the team depends on Sift outputs, the individual PM cannot stop without disrupting the team.

Source: aarrr.md, Retention section.

---

### O14. No competitor owns the PM-specific evidence story

All HARD competitors (Productboard, Canny, Enterpret) position for broad teams: product + CS + sales + marketing. None own the specific story of the PM who needs to make a confident, defensible prioritization call. The positioning gap is confirmed across all five competitors studied.

Source: competitive-analysis.md, Section Analysis (3 Common Patterns, Pattern 3; and What is Missing).

---

### O15. The Signal Supplier's situation and pain

CS Manager or Support Lead with daily customer contact. Insights shared with product do not visibly influence decisions. Closure is missing: the CS lead shares feedback but never learns whether it was heard and used. Canny partially addresses this through public roadmaps and changelogs.

The economic buyer is the PM, not the CS lead. The CS lead is a source of signal, not a buyer of synthesis.

Source: strategy.md, Segment C. competitive-analysis.md (Canny analysis, customer-facing components).

---

### O16. The Product Lead's situation and how it differs from the PM

Head of Product or VP of Product managing 3-8 PMs. The pain is systemic rather than personal: every PM synthesizes feedback differently, there is no consistent evidence standard, and leadership presentations rely on anecdotes rather than systematic signal. The Atlassian-native Product Lead is a harder acquisition target post-Cycle acquisition.

Source: strategy.md, Segment B (including v1 to v2 update on Atlassian risk).

---

### What we do NOT know about people

These are genuine gaps - not guesses, not hypotheses presented as facts. They are documented here so that Step 6 re-research can target them.

| Gap | Why it matters | Where to look |
|---|---|---|
| [?] Exact time PMs spend on manual synthesis per planning cycle | Validates Objective 2 and sharpens "time to decision" messaging | User interviews; time-motion studies in PM communities |
| H1 conditionally confirmed (MEDIUM, live research June 2026) | H1 is true WHEN transparency mechanisms are present (citations, evidence counts, drill-down). Without transparency, H1 fails. This conditional confirmation is the basis for D2: mandatory confidence display in MVP. | Full evidence: live-research.md (F1, F2, F3, F4). Reformulation in strategy.md Section 5 and master-research.md Section 8. |
| [?] Whether PMs in this segment search actively for tools or wait for peer recommendations | Determines acquisition channel priority | PM community surveys, AARRR activation data once live |
| [?] Which PM communities (Lenny's, Mind the Product, Product School) have highest density of Segment A | Determines where to launch and where content goes | Community member counts, engagement data (where accessible publicly) |
| Integration build order: CSV + Intercom for MVP (D3, strategy.md June 2026) | Build order determined by founder decision. PM preference data at activation is a separate open question for beta. | Beta observation: track whether PMs use CSV or Intercom first, and whether activation rate differs. |
| [?] What percentage of PMs have feedback already centralized vs. spread across 3+ tools | Determines how hard the activation path is | PM surveys in the research community |
| [?] Whether PMs share evidence briefs externally or only internally | Determines whether the referral viral loop (H3) activates | Beta sharing behavior; ask directly in onboarding survey |
| [?] Real quotes from target PMs about AI synthesis tools - in their own words | Grounding for personas, trust language, and positioning copy | Reddit, G2 reviews, forums (Step 6 re-research) |
| [?] Why PMs abandon tools like Productboard and Canny - is it trust failure or workflow fit? | Determines whether the trust gap is the real churn driver | G2/Capterra reviews with low ratings; competitor review analysis |
| [?] Age ranges for Segments A and B (28-38, 35-45) | Low-stakes for design; matters for marketing imagery and tone | LinkedIn demographic data, PM association surveys |

---

## Part 2 - Personas

*Three personas, one per segment. Each grows from the observations above.*
*Primary persona first. Diverge-then-converge trace at the end of this section.*

---

### Why The Overloaded PM is Primary

Three options were considered for primary persona:

**Option A - The Overloaded PM (Segment A).** The person who does the work, holds the subscription, and makes the trust decision. If the PM does not trust the synthesis, the product fails. The economic buyer in self-serve PLG is the PM who tries the tool and converts, not their manager. The riskiest assumption (H1) is a PM trust question - it cannot be resolved without making the PM the focus.

**Option B - The Evidence-Hungry Product Lead (Segment B).** Manages a team, presents to leadership, could see high willingness-to-pay. But the Product Lead does not do the synthesis work themselves. They consume the output. Making them primary would mean designing for a consumer of evidence rather than the person who generates it. They are also a harder PLG acquisition target (less likely to try a new tool without team consensus, more Atlassian-dependent per the Cycle acquisition note in strategy.md).

**Option C - The Signal Supplier (Segment C).** Provides the raw signal but does not make the prioritization decision. Not the economic buyer. Strategy.md explicitly sets this segment as "Later."

**Chosen: Option A.** The PM is the economic buyer in PLG, the person who does the synthesis work, and the person whose trust must be earned. The product fails without their trust and cannot sell without their adoption. The other two segments are downstream of the PM's decision to use the product.

This is consistent with strategy.md (Segment A: Primary). No change is made to the strategy.

Source for choice: strategy.md (Segment A analysis), competitive-analysis.md (bottom-up PLG model), master-research.md (H1 as riskiest assumption).

---

### Persona A - The Overloaded PM

**Priority: Primary**

---

**Context**

Alex is a Product Manager at a B2B SaaS company with 150 employees and a four-person product team. Age is estimated 28-38 based on 3-8 years of PM experience (strategy.md, Segment A) [? not validated with census or cohort data]. They own two product areas and manage a backlog of 40+ active items. Feedback arrives from Intercom (support tickets), Gong (sales call recordings), Zendesk (helpdesk), app store reviews, and occasional user interviews. None of these tools talk to each other. Before each sprint planning session, Alex spends time manually reading through the sources, tagging items by theme in a Notion database or Jira epics, and trying to form a picture of what customers actually want.

That picture changes every time, because every PM has their own method. Alex's synthesis is not reproducible by a colleague.

Source: strategy.md (Segment A profile, pain, motivation), master-research.md (Section 1, Problem).

---

**Jobs**

Primary: When I have a roadmap planning session coming up, I want to see a trustworthy synthesis of what customers are saying - with evidence I can trace - so that I can make a confident, defensible prioritization call and not just guess.

Secondary: When a stakeholder challenges a roadmap decision, I want to quickly pull the underlying evidence so that I can defend the choice with real customer voices rather than my opinion.

Source: strategy.md, Segment A JTBD (primary and secondary). Consistent with master-research.md Section 2 (Selected jobs from CLAUDE.md).

---

**Pains**

*Today's way of doing it:*

Manual synthesis in Notion or Jira. Hours of reading across tools, tagging items, trying to spot patterns. The result is a synthesis that is not traceable back to source items (Alex typed up themes from memory), not reproducible by the team (each PM does it differently), and hard to defend when challenged ("I think I saw this in several support tickets" is not evidence).

*With competitors:*

- **Productboard:** Feature-rich but complex to set up. Feedback portal requires customer-facing involvement. AI synthesis (Spark) positions around workflow prompts (write a PRD, summarize) rather than traceable evidence. Trust mechanism unclear from public materials - what is behind the AI output? [? behind login for full evaluation]. High price point ($19-59/maker/month).
- **Canny:** Vote-based prioritization visible per feature request. Autopilot AI captures and classifies. But Canny is customer-facing (public roadmap, changelog), which is a different problem than internal PM synthesis. The PM who uses Canny is also managing customer expectations publicly - that is a larger workflow change.
- **Enterpret:** Enterprise infrastructure, contact sales, not self-serve. Not accessible to a PM at a 150-person company without a procurement process.
- **Dovetail:** Research-oriented (interviews, recordings, insight docs). Useful for qualitative research but positioned as a research repository, not a synthesis-to-decision tool for PMs in sprint planning.
- **Jira Product Discovery:** Attractive if already in Atlassian ecosystem. Scoring and backlog integration strong. But feedback ingestion and AI synthesis are weaker than purpose-built tools - it solves the roadmap organization problem more than the synthesis-from-raw-signal problem.
- **Notion DIY system:** Maximum flexibility, zero cost. But the synthesis happens in Alex's head, with Notion as storage. Requires manual maintenance to keep the evidence chain intact. When Alex leaves, the system collapses. Trust in the Notion system is trust in Alex, not in a reproducible process.

Source: competitive-analysis.md (all competitor sections), benchmark.md (Notion as DIY alternative).

---

**Trust triggers**

What would make Alex trust an AI synthesis:

1. Their own data, not demo data. The first synthesis must use Alex's actual feedback. A demo synthesis on fictional customers proves nothing.
2. A theme they already know is real, found and supported with the right quotes. Confirmation of intuition before asking Alex to trust novel conclusions.
3. Visible sample size and evidence count per theme. "Based on 47 feedback items from Intercom and Zendesk over the last 30 days" is trustworthy. "Based on feedback" is not.
4. The ability to drill down to the raw source. Even if Alex does not click through on every theme, knowing they can is what creates permission to act on the synthesis.
5. Honest admission when evidence is thin. A theme with 3 data points flagged as "low volume" is more trustworthy than a theme confidently presented on 3 data points.

What would make Alex stop trusting it:

1. One synthesis conclusion that is clearly wrong - a theme they know is fictional, or quotes that do not match the theme label. Trust destroyed permanently.
2. Confident presentation with no visible reasoning. "AI identified this as a top priority" with no evidence count or drill-down. The experience that Canny Autopilot and early Productboard AI features created - confident outputs with hidden reasoning.
3. A synthesis that seems to reflect the product's language rather than the customer's language. If the themes sound like they were written by a marketing team, not derived from real tickets, Alex will not trust them.

Source: benchmark.md (Mechanisms 1-3, Anti-pattern). ux-patterns.md (B3, trust through spot-checking). strategy.md, Riskiest Assumption (H1).

---

**Mood quote**

[? No real sourced quote was gathered in the research phase. The behavioral patterns are supported by ux-patterns.md and aarrr.md but the actual PM voice has not been captured from a primary source yet. Step 6 re-research will attempt to find real quotes from Reddit, G2, or PM forums. The quote below is illustrative, not a sourced quote.]

Illustrative (not a sourced quote): "I spend more time organizing feedback than thinking about what to do with it. By the time I've synthesized everything, the planning session has started."

---

### Persona B - The Evidence-Hungry Product Lead

**Priority: Secondary**

---

**Context**

Morgan is a Head of Product or VP of Product at a scale-up with 200 employees, managing a team of four PMs. Age estimated 35-45 based on seniority level (strategy.md, Segment B) [? not validated]. Responsible for product strategy and presents the roadmap to the board or leadership team quarterly. Each PM on Morgan's team synthesizes feedback differently, and when Morgan assembles their quarterly strategy presentation, they are aggregating summaries of summaries - not traceable back to customer signal.

When leadership challenges a priority ("Why aren't we solving X? That's what I hear from every customer"), Morgan cannot point to systematic evidence across the team's work. The answer is anecdote ("I believe our research shows...") rather than data.

Source: strategy.md, Segment B profile and pain.

---

**Jobs**

Primary: When I present the roadmap to leadership, I want to show systematic customer evidence behind each priority so that the strategy feels grounded and not opinion-based.

Secondary: When I manage my PM team's synthesis work, I want a consistent standard for how evidence is gathered and structured so that I can aggregate across the team's work rather than reconcile four different approaches.

Source: strategy.md, Segment B JTBD. Second job is a hypothesis - not stated in strategy.md but implied by the "no consistent evidence standard" pain.

---

**Pains**

- Every PM synthesizes feedback differently. No consistent evidence standard. Cannot aggregate across the team without translating between individual systems.
- Relies on anecdotes rather than systematic signal when presenting to leadership. Vulnerable to challenge.
- Atlassian-native organizations may default to Jira Product Discovery for this use case, especially post-Cycle acquisition. Morgan at an Atlassian-heavy org is a harder target.
- Productboard is the most likely current tool (enterprise-adjacent, broad audience) but the AI synthesis trust mechanism is unclear from public materials.

Source: strategy.md, Segment B pain and v2 update (Atlassian risk). competitive-analysis.md (Productboard audience profile).

---

**Trust triggers**

What would make Morgan trust the output:

1. Consistency across the team. If all four PMs use the same synthesis tool and the same evidence standard, Morgan can aggregate their work with confidence.
2. A traceable link from the board presentation back to the customer voices that support each priority. "Here is the evidence brief - click any theme to see the source quotes" is a stronger position than "the team did research."
3. Evidence that the PM team is trusting the tool themselves - not just using it as a reporting layer.

What would make Morgan stop trusting it:

1. A synthesis the PMs on her team question or override. If the team does not trust the output, the output is not useful to Morgan.
2. Over-confidence in thin evidence. If the tool presents a priority backed by 3 quotes with the same visual weight as one backed by 300, Morgan will not trust the confidence display.

Source: strategy.md, Segment B. Observations O10 and O7 (trust through decomposability, spot-checking at team level). [? Morgan-specific trust triggers are a hypothesis - no primary source for this persona's trust behaviors was gathered in research.]

---

**Mood quote**

[? No real sourced quote was gathered. Illustrative, not a sourced quote.]

Illustrative (not a sourced quote): "Every quarter I tell the board 'customers are saying X' and every quarter I'm one sharp question away from not being able to back it up."

---

### Persona C - The Signal Supplier

**Priority: Later**

---

**Context**

Jordan is a Customer Success Manager or Support Lead at the same company where Alex works. Age estimated 26-35 (strategy.md, Segment C) [? not validated]. Jordan speaks to customers daily - support tickets, onboarding calls, check-ins. Jordan sees patterns that product does not see (common complaints, feature requests from multiple accounts, recurring confusion in the same flow). Jordan logs these in Intercom or shares them in Slack, but they do not visibly move the roadmap. Jordan has no closure loop: they share the feedback, and it disappears into a black box.

Canny partially addresses this through customer-facing public roadmaps and changelogs. Jordan's organization does not use Canny.

Source: strategy.md, Segment C profile and JTBD. competitive-analysis.md (Canny customer-facing components, CS/support use case).

---

**Jobs**

Primary: When I share customer feedback with the product team, I want to see whether it influenced a decision so that I can close the loop with the customer and feel the signal was heard.

Source: strategy.md, Segment C JTBD.

---

**Pains**

- Feedback submitted into the void. No visibility into whether it reached product.
- Cannot tell customers whether their request was heard, prioritized, or deprioritized - and why.
- Not the economic buyer. Cannot adopt Sift unilaterally. Adoption depends on Alex (Segment A) using the tool and making the signal supply channel visible.

Source: strategy.md, Segment C. competitive-analysis.md (Canny as the closest existing solution for the closure-loop use case).

---

**Trust triggers**

What would make Jordan use the signal supply channel:

1. Evidence that feedback was actually read and incorporated into a synthesis theme - not just ingested.
2. A visible loop: "your 5 tickets about onboarding confusion contributed to the Onboarding Friction theme, which is ranked priority 2 this quarter."

What is the risk:

Jordan's trust is less about AI synthesis skepticism and more about whether the product-team-facing tool gives them visibility at all. If Sift is internal-only (no CS/support view), Jordan never sees the loop close.

[? Jordan-specific trust behaviors are a hypothesis - no primary source was gathered in research. This is the least-developed persona because the research confirms CS/support as a later priority, not a day-1 user.]

D1 (June 2026): Segment C is out of MVP scope. Record: Jordan is NOT a separate backlog feature. Jordan is a PM retention dependency. If the signal supplier does not see their signal being used, they stop submitting, which degrades Alex's (Segment A) data quality over time. The transparency design for Segment A (theme - evidence - source chain) is the prerequisite surface for Jordan's closure loop in the fast follow. Build Segment A's traceability well, and the closure loop for Jordan is a thin layer on top.

Source: strategy.md, Segment C (Later priority). ux-patterns.md (Inbox pattern alternative for CS/support users). D1 (strategy.md Section 6, master-research.md Section 9).

---

**Mood quote**

[? No real sourced quote was gathered. Illustrative, not a sourced quote.]

Illustrative (not a sourced quote): "I send a dozen pieces of customer feedback to product every week. I have no idea what happens to any of them."
