# AARRR Model - Sift

*One primary metric and one MVP decision per stage.*

---

## Acquisition

**Channels and mechanics:**

The primary acquisition path is bottom-up, PLG (product-led growth). A PM at a B2B SaaS discovers Sift through:
- Content: long-form articles on evidence-based product management, "how to defend your roadmap" type content. SEO-focused, written for the primary segment.
- Product Hunt / Indie Hackers / community: launch in PM-adjacent communities (Lenny's Newsletter, Product-Led Alliance, Mind the Product Slack).
- Integrations as discovery: listing in Intercom, Zendesk, and Jira/Linear app marketplaces. Teams discover Sift when looking for ways to do more with their existing tools.
- Word of mouth: PMs share the synthesis output with their team or stakeholders. The output artifact circulates, creating organic awareness.

**Discarded channels:** Paid social (too broad, CPL too high for a niche PM tool at early stage). Enterprise sales outbound (too expensive before product-market fit is established). Influencer partnerships (low trust in this category).

**Key hypotheses:**
1. The primary acquisition moment is a PM searching for "how to synthesize customer feedback" or "evidence-based prioritization" - content marketing captures this intent before paid channels.
2. Marketplace listings (Intercom, Zendesk) drive qualified traffic because the PM is already in a tool they need Sift to integrate with.
3. Word-of-mouth starts with the synthesis output artifact - when a PM shares an evidence brief, the recipient asks "what made this?"

**What is unknown:**
- Whether PMs in this segment actively search for tools or wait for peer recommendations.
- Which community channel (Lenny's, Product School, Mind the Product) has the highest PM density that matches our segment.

**Primary metric:** Signups from organic/product-led sources (paid excluded)
**Target (hypothesis):** 200 qualified signups/month within 6 months of launch

**MVP product decision:** Build a public-facing "evidence brief" export that credits Sift. The output becomes the acquisition asset. Every brief shared is a potential acquisition touchpoint.

---

## Activation

**Mechanics:**

Activation is the moment a PM sees their own data synthesized for the first time and thinks "this is useful." It is not just completing onboarding steps - it requires the user to connect at least one data source and see a real synthesis output from their own feedback.

Activation path:
1. Connect one source (Intercom, Zendesk, or CSV import)
2. Run synthesis on their own data (not demo data)
3. See at least one theme with evidence links they recognize as accurate

**Why this matters:** A PM who sees their own data synthesized accurately in the first session is primed to trust the tool. A PM who only sees demo data has not experienced the value.

**Key hypotheses:**
1. The activation moment is "I see a theme that I already suspected and now I have the evidence for it" - confirmation of intuition with evidence, not discovery of something unknown.
2. First-session time to value is critical. If the PM cannot get to a synthesis output with their own data within 20 minutes, they leave.
3. The biggest activation barrier is the integration setup friction, not the synthesis quality. Remove friction first.

**What is unknown:**
- Whether teams will import via CSV (low friction, low signal quality) or native integration (higher friction, higher quality) at first.
- What percentage of PMs already have their feedback centralized vs. spread across multiple tools that require multiple integrations.

**Primary metric:** Percentage of new signups who complete "first synthesis" (own data, at least one recognized theme)
**Target (hypothesis):** 40% of signups complete first synthesis within 7 days

**MVP product decision:** Prioritize CSV import and Intercom integration first. CSV removes the integration barrier entirely. Intercom is the single most common feedback source for the target segment. Get to first synthesis fast, with two options for how to get there.

---

## Retention

**Mechanics:**

Retention is driven by the synthesis becoming a regular part of the PM's workflow - specifically, being used at the start of each prioritization cycle (weekly or bi-weekly sprint planning, monthly roadmap reviews).

Retention patterns:
- Weekly active use: PM checks synthesis before sprint planning
- Monthly deep use: PM prepares an evidence brief for a roadmap review
- Triggered use: PM pulls up synthesis when a stakeholder challenges a decision

Retention risk: The PM runs the synthesis once, trusts the output, adds their themes to the roadmap, and then doesn't come back because they feel "done." Sift must pull them back with new signal.

**Key hypotheses:**
1. Retention is tied to new feedback arriving continuously. If Sift shows "15 new feedback items since your last session, here's what changed," the PM has a reason to return.
2. The PM's single biggest reason to return is an upcoming meeting where they need to defend a decision. Sift should anticipate this by surfacing "here's what's changed in the themes relevant to your current roadmap priorities."
3. Collaboration (sharing evidence briefs with the team) drives retention more than solo use. Once the team depends on Sift outputs, the individual PM cannot stop using it without disrupting the team.

**What is unknown:**
- Whether the PM's natural return cadence (weekly, bi-weekly, monthly) aligns with what a SaaS retention loop requires.
- Whether the signal supply (new feedback arriving) is consistent enough to always have something new to show.

**Primary metric:** Week-4 retention rate (% of activated users still active at week 4)
**Target (hypothesis):** 50% week-4 retention for activated users

**MVP product decision:** Build the "new signal since last session" notification - a single digest that surfaces what has changed since the PM last logged in. This is the primary re-engagement hook. No complex notification system needed - one well-designed summary is enough.

---

## Revenue

**Mechanics:**

Revenue comes from conversion of free teams to paid, driven by hitting the signal volume limit. The free plan is designed to make the value concrete before the wall appears.

Conversion triggers:
1. Signal volume limit hit (primary): The free plan cap (hypothesis: 500 items/month) is reached when the team is actively using the product, creating urgency.
2. Feature desire (secondary): The PM wants to drill down into evidence links or share a brief with a stakeholder - features only in paid. They hit the desire before the volume limit.
3. Team expansion: A CS or sales colleague asks to access the synthesis. Paid plans unlock team seats.

**Discarded conversion mechanics:**
- Time-limited trials (creates pressure, damages trust relationship)
- Feature-gating key synthesis features from day one (prevents the "aha" that drives conversion)

**Key hypotheses:**
1. The signal volume limit is hit at the worst possible moment for the free user - right when they need the full picture for a quarterly roadmap session. This timing creates urgency and willingness to pay.
2. The feature the free user most wants (evidence drill-down and traceability) is exactly the feature most tied to the core value proposition. Gating it is honest - it is the paid tier's primary value.
3. Seat expansion is the primary revenue growth mechanic after initial conversion. A team of 2 PMs grows to 5 PMs as the org grows, and Sift grows with it.

**What is unknown:**
- The right signal volume limit for the free plan. Too low, and it feels punitive. Too high, and it delays conversion.
- Whether teams prefer a per-seat or flat-fee pricing model for the paid tier.

**Primary metric:** Free-to-paid conversion rate (within 60 days of hitting the volume limit)
**Target (hypothesis):** 10% conversion rate within 60 days

**MVP product decision:** The free plan must show a visible, non-punitive progress bar toward the signal volume limit. When the limit is hit, the upgrade flow must surface the specific feature the user was trying to use - not a generic "upgrade" message. "You've hit your free plan limit. Upgrade to see the evidence behind this theme." Context-specific conversion is more effective than generic upgrade walls.

---

## Referral

**Mechanics:**

Referral is primarily product-led. The most effective referral asset is the synthesis output itself.

Referral paths:
1. Evidence brief sharing: A PM shares an evidence brief with their team, leadership, or stakeholders. Recipients see the quality of the synthesis and ask about the tool.
2. "Made with Sift" attribution: Evidence briefs carry a small attribution in the footer when shared externally. Low friction, opt-in removal for paid plans (optional for brand control).
3. Stakeholder curiosity: A VP or engineering lead sees an evidence brief in a roadmap review. They want to know how it was made.
4. Peer recommendation: PM talks about Sift in their PM community channels (Lenny's Newsletter Slack, Product-Led Alliance, etc.). The primary trigger is "Sift saved me from a painful stakeholder conversation."

**Discarded referral mechanics:**
- Classic referral programs with credits (feels transactional, misaligns with the trust-based positioning)
- Testimonial campaigns (too early at MVP stage)

**Key hypotheses:**
1. The evidence brief is the most natural viral loop. It circulates in environments (Google Docs, Notion, Slack, email) where the audience is receptive to product tools.
2. The stakeholder who receives a Sift-powered evidence brief is a potential buyer. They are likely a Head of Product or VP who would adopt Sift for their own team.
3. Community-led referral (PM sharing their workflow in a Slack group or newsletter) drives higher-quality leads than any paid channel.

**What is unknown:**
- Whether PMs will share evidence briefs externally or keep them internal (if internal, the attribution does not generate referral).
- The conversion rate from "brief recipient" to "signed up for Sift."

**Primary metric:** Referred signups as a percentage of total signups
**Target (hypothesis):** 25% of signups attributed to referral within 12 months of launch

**MVP product decision:** Build the shareable evidence brief as a public link (no login required to view). The brief is the product's front door for referred users. It must showcase the synthesis quality clearly on first view - readable, well-formatted, with a clear "made with Sift" context and a call to action to try it themselves.

---

## Summary Metrics Table

| Stage | Primary metric | Target (hypothesis) | MVP decision |
|---|---|---|---|
| Acquisition | Organic/PLG signups/month | 200/month at 6 months | Build shareable evidence brief as acquisition asset |
| Activation | % signups completing first synthesis | 40% within 7 days | CSV import + Intercom integration first |
| Retention | Week-4 retention rate (activated users) | 50% | "New signal since last session" digest |
| Revenue | Free-to-paid conversion (within 60 days) | 10% | Context-specific upgrade prompt at limit |
| Referral | % signups attributed to referral | 25% at 12 months | Public shareable brief with attribution |

*All targets are hypotheses. None have been validated with real user data.*

---

## Key Takeaways

1. **The output is the acquisition asset.** The evidence brief circulates independently. Build it well and build it early - it drives acquisition, referral, and retention.

2. **Activation on real data is non-negotiable.** The first synthesis must use the PM's own feedback, not demo data. Demo data creates a false signal. Real data creates trust.

3. **Retention is event-driven, not calendar-driven.** The PM returns to Sift when something happens - a planning meeting, a stakeholder challenge, new signal arriving. Design for trigger-based re-engagement, not just calendar nudges.

4. **The free-to-paid conversion mechanic must be honest.** The wall should feel like a natural next step ("you've outgrown the free tier"), not a penalty. The upgrade message must reference the specific thing the user was trying to do.
