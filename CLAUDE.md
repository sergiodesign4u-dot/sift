# Sift - Product Brief

## Product Overview

**Sift** is a B2B SaaS that turns scattered customer feedback from support tickets, sales calls, product reviews, and user interviews into clear, prioritized product decisions. Every roadmap item is traceable back to the real user voices behind it.

**Platform:** Responsive web app, desktop-first (dense data work tool), scaling down to tablet. Native mobile is out of scope.

**Core differentiator:** Not another feedback collector. Sift's defensible advantage is the trusted link from raw signal to decision. The synthesis is transparent, every conclusion is traceable, and ambiguity is acknowledged rather than hidden. Product teams adopt Sift not because it collects feedback, but because it earns the right to make decisions on their behalf.

**Emotion to design for:** Confidence and calm instead of overload. The PM drowning in scattered signal finds clarity, a defensible footing for prioritization, and the ability to say "this is why we're building this" with evidence behind it.

---

## Jobs to Be Done (JTBD Analysis)

### Candidate jobs generated and scored

| Job candidate | Frequency | Intensity | Willingness to pay | Score |
|---|---|---|---|---|
| Synthesize scattered feedback into themes quickly | High | High | High | 9/10 |
| Defend a roadmap decision to stakeholders with evidence | Medium | Very High | Very High | 9/10 |
| Know which customer problems are most urgent right now | High | High | High | 8/10 |
| Discover unknown patterns across large feedback volumes | Medium | Medium | Medium | 6/10 |
| Share customer insights across the org (support, sales, CS) | Medium | Medium | Medium | 5/10 |
| Stay on top of feedback as it arrives continuously | High | Low | Low | 4/10 |

### Selected jobs

**Primary job:**
When I have a roadmap planning session coming up, I want to see which customer problems have the most signal behind them - with the evidence I can trace and cite - so that I can make a confident, defensible prioritization call and not just guess.

**Secondary job 1:**
When a stakeholder challenges a roadmap decision, I want to quickly pull up the actual user voices and patterns behind it so that I can defend the choice with real evidence rather than opinion.

**Secondary job 2:**
When I receive feedback from multiple sources (support, sales, interviews, reviews), I want to see it synthesized into a coherent picture of customer reality so that I can act on it without spending hours manually reading and tagging.

---

## Target Audience

**Primary user:** Product Manager at a B2B mid-market SaaS company (50-500 employees, 2-10 person product team). 3-8 years of experience. Comfortable with data but not a data analyst. Drowning in scattered signal from multiple tools and channels. Needs to prioritize with confidence and justify decisions to leadership. Uses Jira/Linear for execution, Slack for comms, has feedback sitting in Intercom/Zendesk/Gong but no coherent picture.

**Seniority:** Mid to senior PM, plus product leads and heads of product.

**Confidence/trust level:** Skeptical of AI synthesis at first. Will not trust a tool that gives confident answers without showing its work. Needs to see the underlying evidence and be able to challenge it.

**Primary driver:** Calm, defensible prioritization backed by real evidence. Not more dashboards, not more data - a synthesis they can trust and act on.

**Secondary users:**
- Customer Success and Support leads who supply signal and want to know it is being heard
- Engineering leads who consume roadmap decisions and need to understand the rationale
- VPs of Product who present strategy to leadership and need credible evidence

---

## MVP Feature Scope

*Sharpened by the CJM To-Be map (user-research/docs/cjm-to-be.md). One MVP definition, not two: the five-item spine below is the MVP; features that improve the path but do not break it are moved to Fast-follow. Every MVP item traces to an As-Is barrier the PM actually hits (user-research/docs/cjm-as-is.md).*

**MVP spine (remove any one and the To-Be path breaks):**

1. **Feedback ingestion - CSV + Intercom** - import and normalize the raw signal; PII scrubbed by default. CSV is the zero-friction day-one activation path; Intercom is the named Segment A source. Zendesk and Gong follow the same abstraction. (Closes: scattered, siloed feedback across tools. D3.)
2. **AI synthesis** - cluster feedback into transparent themes with volume, recency, and evidence count; basic ranking by signal. (Closes: hours of manual reading and tagging. The time-saving magnitude rests on a baseline that is still [?] - order of magnitude hours, exact figure pending user interviews.)
3. **Confidence display** - item count per theme (n=X) plus a "low signal" badge for thin evidence. Day-one scope only; source diversity and time range are v2. (Closes: cannot tell a strong theme from a thin one. D2, mandatory - this is the transparency condition the riskiest assumption H1 requires.)
4. **Evidence drill-down + inline citation** - theme, to evidence items (n=X), to raw source text, in-context. Must work live in a meeting, not only in quiet analysis. (Closes: distrust of black-box summaries, and the inability to back a claim under stakeholder challenge. This is the differentiator.)
5. **Shareable evidence brief** - a public link (no login to view) carrying top themes, evidence, source quotes, recommended priority. The go-to-market and referral artifact. (Closes: the rationale does not travel; the PM cannot defend the call with something a stakeholder can read. Kept in MVP; first candidate to move to Fast-follow if a leaner H1-only first test is wanted.)

**Fast-follow (post-MVP, improves the path but does not break it):** multi-factor prioritization scoring (customer segment, revenue impact); "new signal since last session" digest (retention hook; its parent job H-J1 is still unconfirmed); roadmap link (native lightweight or Jira / Linear sync; serves the Product Lead more than the core PM journey).

**Out of scope for MVP:** Custom NLP training, native video recording, in-app surveys, public changelog, white-labeling, offline mode.

---

## Business Model Hypothesis

**Model:** Seat-based SaaS subscription with a free plan.

**Value exchange:** Sift saves PM time (synthesis that would take hours is done in minutes), improves decision quality (evidence-backed roadmaps), and reduces political friction (defensible decisions). Teams pay for the time saved and the confidence gained.

**Free plan hypothesis:**
- Hard limit on signal volume (e.g., 500 feedback items per month ingested)
- Access to basic synthesis (theme clusters visible, but no drill-down to evidence or confidence scoring)
- 1 integration source
- No roadmap linking
- Goal: let the team experience the synthesis output, creating desire for the full traceability and coverage that converts to paid

**Paid plans (hypothesis, not validated):**
- Starter: 1-3 seats, unlimited signal volume, full synthesis with traceability, 3 integrations, no SSO
- Growth: 5-15 seats, all integrations, team collaboration, roadmap sync, usage analytics
- Enterprise: unlimited seats, custom integrations, SSO, audit log, dedicated support, SLA

**Pricing hypothesis:** $30-60/seat/month for Starter, scaling down per seat at Growth. Enterprise custom. Labels are hypotheses - exact numbers require validation with willingness-to-pay research.

**Conversion hypothesis:** Free to paid conversion driven by hitting the signal volume limit at a moment of real prioritization need. The team discovers the synthesis is valuable (free plan) and then hits the wall when they most need full coverage and traceability (paid).

---

## Geo and Compliance Constraints

- **Primary markets:** United States and Europe
- **Interface language:** English
- **Data residency:** EU teams will require data residency in Europe. GDPR compliance is a day-one requirement for European customers, not an afterthought.
- **CCPA:** Required for US enterprise customers.
- **SOC 2 Type II:** Expected by mid-market and enterprise customers. Plan for it in year 1, certify in year 2.
- **PII in feedback:** Customer feedback often contains PII (names, email addresses from support tickets). Sift must handle PII safely - scrub or redact by default, or offer as a configurable option.

---

## Design Principles

1. **Show your work.** Every synthesis conclusion is linked to the evidence behind it. Confidence levels are shown honestly. Thin evidence is never dressed up as strong signal. The user can always drill down.

2. **Calm under density.** Product teams work with large volumes of messy data. The interface must handle density without becoming noisy. Hierarchy, weight, and whitespace do the work of focus - not color, badges, or alerts.

3. **Earn trust, don't assume it.** PMs are skeptical of AI. Sift earns trust incrementally by being transparent about how synthesis works, acknowledging ambiguity, and letting the user challenge or override conclusions.

4. **One decision at a time.** The product should help the user get to a single, concrete decision - not present infinite data for them to interpret. Every view has a clear "what should I do next" orientation.

5. **Traceable or it doesn't exist.** Any claim in the product - a theme, a priority, a recommendation - must be traceable to its source. If the chain breaks, the claim is removed or marked [?].

---

## Tech Stack Hypothesis

**Frontend:** React with TypeScript. Dense data UI with table/grid patterns, accessible, fast rendering.
**Backend:** Node.js or Python (FastAPI). Event-driven architecture for ingestion pipeline.
**AI/ML:** LLM-based synthesis (Anthropic Claude or OpenAI). Embeddings for semantic clustering. Confidence scoring layer on top of raw LLM output.
**Database:** PostgreSQL for structured data, vector database (Pinecone or pgvector) for semantic search over feedback.
**Infrastructure:** AWS or GCP, GDPR-compliant data residency options.
**Integrations:** REST API + webhooks. Zapier/Make for long-tail integrations before native support.

---

## Timeline

| Phase | Scope | Estimated duration |
|---|---|---|
| Research | Competitive analysis, strategy, AARRR, benchmarks, UX patterns, live re-research, personas, JTBD matrix - **Done. Founder decisions D1-D3 locked.** | 1-2 weeks |
| Wireframes (current) | Core flows: ingestion, synthesis view, evidence trace, prioritization | 2-3 weeks |
| Concept | Visual language, brand direction, high-fidelity mockups | 3-4 weeks |
| Design system | Tokens, components, patterns | 2-3 weeks |
| Components | Coded component library | 3-4 weeks |
| Handoff | Dev handoff, annotations, specs | 1-2 weeks |

**Assumption:** Timeline is for design phase only. Engineering build and launch timeline are separate.

---

## Locked Decisions (June 2026)

Three founder decisions locked at end of research phase. Full rationale in research/docs/strategy.md Sections 5-6 and research/docs/research.md Section 9.

- **D1 - MVP focus:** Segment A (Overloaded PM) only. Segment C (Signal Supplier) deferred as a PM retention dependency, not a separate backlog feature. The signal supplier's closure loop depends on Segment A's transparency design being built first.
- **D2 - Confidence display:** Mandatory in MVP. Tied directly to H1 reformulation: transparency is the condition H1 requires. Day-one scope: item count per theme (n=X) plus a "low signal" badge. Source diversity, time range, and thresholds are v2.
- **D3 - First integration set:** CSV + Intercom for MVP. Zendesk follows using the same abstraction pattern. No specific timeline committed for Zendesk.

**User Research + CJM (June 2026):** The User Research phase now has four pages - Personas, JTBD, CJM As-Is, CJM To-Be (CJM is a separate status row). The MVP Feature Scope above is the CJM-sharpened core (one definition, not a fork). Deepest As-Is pain: Phase 6, evidence loses to the stakeholder anecdote (powerlessness, a strong pattern); To-Be inverts it with the live evidence drill-down and the shareable brief.
