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

1. **Feedback ingestion** - connect 3-5 core sources (Intercom, Zendesk, Gong, app store reviews, manual import). Pull in and normalize the raw signal.
2. **AI synthesis** - cluster feedback into themes automatically. Show volume, trend, and representative quotes per theme. Make the synthesis transparent: what went in, how themes were formed.
3. **Evidence tracing** - every theme links back to the specific feedback items that support it. Every roadmap item links to the themes behind it. Full chain: decision - theme - signal.
4. **Prioritization view** - score themes by volume, recency, customer segment, and revenue impact. Give the PM a ranked list they can interrogate, not a black-box ranking.
5. **Confidence display** - honest handling of thin evidence. If a theme has 3 data points, say so. Show confidence level alongside every synthesis.
6. **Roadmap link** - connect themes to roadmap items (native lightweight roadmap or Jira/Linear sync). Enable the traceable link from decision to signal.
7. **Sharing** - shareable evidence briefs for stakeholders. "Here is what our customers are saying, here is why we're building this."

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
| Research (current) | Competitive analysis, strategy, AARRR, benchmarks, UX patterns | 1-2 weeks |
| Wireframes | Core flows: ingestion, synthesis view, evidence trace, prioritization | 2-3 weeks |
| Concept | Visual language, brand direction, high-fidelity mockups | 3-4 weeks |
| Design system | Tokens, components, patterns | 2-3 weeks |
| Components | Coded component library | 3-4 weeks |
| Handoff | Dev handoff, annotations, specs | 1-2 weeks |

**Assumption:** Timeline is for design phase only. Engineering build and launch timeline are separate.
