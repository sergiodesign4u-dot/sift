# IA - Sitemap (Basic Layer) - Sift

*Concept layer of Information Architecture. Built step by step from the finished personas.md and jtbd.md.*
*Contents grow across the stage: Entities (Step 1), Concept-sitemap (Step 2), Navigation (Step 3), Trace matrix (Step 5).*
*Rule: every screen serves a job from jtbd.md. Structure is derived from jobs, not copied from a competitor menu.*

---

## 1. Entities

*Objects the person deals with to close their jobs, not screens. Each core entity traces to a job in jtbd.md. An object with no job goes to "Under question". An assumed part is marked [?]. Nothing is invented beyond what the jobs require.*

### Core entities (each traces to a job)

#### E1 - Feedback item
The raw signal, the atomic unit.

- **Parts:** verbatim source text; channel (CSV / Intercom [/ Zendesk / Gong / review, same abstraction]); date received; customer or author reference, PII-scrubbed by default; account or segment [?]; source reference.
- **Job that spawns it:** J2 (make sense of the incoming pile) and the Main job (it is the evidence base). Anchors the "traceable or it doesn't exist" principle: the ground truth every claim resolves to.
- **Related to:** belongs to one Source; clustered into one or more Themes; quoted inside an Evidence brief.

#### E2 - Source / Integration
Where signal enters (D3).

- **Parts:** type (CSV import batch / Intercom connection [/ Zendesk, Gong later]); connection or import status; last sync date; item count; PII-scrub setting.
- **Job that spawns it:** J2 (get the pile in); grounded by D3 (CSV + Intercom for MVP).
- **Related to:** produces many Feedback items; lives in one Workspace. Note: CSV is a one-off batch, Intercom is a live connection; both are modeled as Source ("batch" is an attribute, not a separate entity).

#### E3 - Theme
The synthesis cluster, the unit of "the picture".

- **Parts:** label in the customer's language (a trust trigger, not marketing language); summary; member feedback items; volume (n); recency (latest signal date); signal rank; Confidence indicator = item count (n=X) + low-signal badge (D2, mandatory); [v2: source diversity, time range].
- **Job that spawns it:** Main (the synthesized picture), J2 (coherent picture), J3 (how much to trust).
- **Related to:** aggregates many Feedback items (the drill-down chain is the differentiator); carries one Confidence indicator; selectable into a brief; ordered by Prioritization.
- **Note:** Confidence is a computed attribute of the Theme, elevated to a first-class display object by D2 (the transparency condition H1 requires). It is not a standalone entity, it has no life apart from its Theme.

#### E4 - Evidence citation
The traceable link, the differentiator.

- **What it is:** the materialized relationship Theme claim to supporting Feedback item(s), surfaced inline (numbered citation adjacent to a claim; drill from theme to items n=X to raw source text).
- **Job that spawns it:** E2 / J1 (defend with the actual customer voice); the "show your work" principle.
- **Related to:** connects a Theme (or a brief claim) to Feedback items. Modeled as a relationship, not a stored object, but named because it is the product surface, and it appears in both the synthesis drill-down and inside the brief.

#### E5 - Prioritization
The ranked call the PM commits to.

- **Parts:** ordered set of Themes; rank; rationale (why this priority); the planning cycle or date. [MVP is "basic ranking by signal"; multi-factor scoring is fast-follow.]
- **Job that spawns it:** Main (make a confident, defensible call), J1 (defend it later).
- **Related to:** orders Themes; its recommendation is carried into an Evidence brief.
- **Note:** in MVP the durable artifact of the decision is the brief's "recommended priority". A separate persisted Decision record beyond the brief is [?] (not job-backed for the single PM yet).

#### E6 - Evidence brief
The shareable artifact (GTM + referral).

- **Parts:** title; selected top Themes; per-theme evidence with source quotes (citations); recommended priority; public share link (no login to view); created date; author.
- **Job that spawns it:** S1 (give stakeholders something to engage with), J1 (defend under challenge), J4 (align the team on the "why").
- **Related to:** selects several Themes; embeds Feedback-item quotes via citations; carries the Prioritization recommendation; belongs to a Workspace.
- **Note:** kept in MVP; flagged first fast-follow candidate (CJM To-Be).

#### E7 - Workspace / Account
Thin container in MVP.

- **Parts:** the PM owner (seat); connected Sources; the Feedback corpus; generated Themes; saved Briefs; plan or limits (free vs paid). Multiple seats or team members [?], fast-follow.
- **Job that spawns it:** the seat-based business model + S2 (shared standard, Persona B). But S2 is Persona B / secondary; under D1 (PM-only MVP) the Workspace is single-PM and thin.
- **Related to:** holds Sources, Themes, Briefs.
- **Note:** modeled minimally. Team, collaboration, and the consistency standard (S2, J4) are fast-follow, do not bake a team object into the MVP concept.

### Under question (no confirmed MVP job, or deferred)

- **Synthesis run / Report scope [?]** - the "request a report for a session" model (pattern B5) suggests a scoped-synthesis object (time range + sources produce this set of Themes). But MVP may just show current Themes over the whole corpus. Resolve at Step 4 (flows).
- **Planning session / cycle [?]** - the Main job is anchored to "a session coming up", but the product need not model the session as an object in MVP.
- **Roadmap item link (Jira / Linear)** - fast-follow, not MVP. Serves the Product Lead more than the core PM journey. Out.
- **Signal-supplier contribution / closure loop (J5)** - deferred by D1 (Segment C is a PM retention dependency, not an MVP object). The Segment A evidence chain is its future surface. Out of MVP.
- **New-signal digest** - fast-follow; parent job H-J1 is unconfirmed. Out of MVP.
- **Manual tag / label** - deliberately absent. Manual tagging is the As-Is pain (cjm-as-is.md); Sift replaces it with automatic Themes. Re-adding a manual tag object would rebuild the barrier. Noted so it is not silently introduced.

### Relationship map

```
Workspace
  └─< Source
        └─< Feedback item >──(clustered into)──< Theme (has Confidence indicator)
                                                   │
                              (cited by) Evidence citation ──> raw Feedback item
Theme ──< Prioritization (ranked)
Theme + Feedback-item quotes ──> Evidence brief (public share link)
```

**Count:** 7 core entities, 6 under-question, 0 invented. Every core entity stands on a jtbd.md job. Deliberately absent from the MVP concept: manual tag, roadmap link, team object.

---

## 2. Concept-sitemap

*Screens grouped by the person's intent, not by site sections. Each screen carries the job it serves (jtbd.md code). [ORPHAN] marks a screen with no job. No states (empty / error / loading) here, those live in the flows (Step 4). No page contents or cards here, those are the detail layer (b). Depth is kept minimal. Cluster names are human, verb-first, and trace the CJM To-Be arc.*

### Cluster A - Bring the signal in
*Intent: my feedback is scattered across tools; get it in, cleaned, and let me see what is in the pile.*

- **A1 - Sources** - list of connected sources with status, item counts, last sync, PII-scrub state. Primary (Alex). Job: J2 (know the pile is in and where from).
- **A2 - Connect / import source** - CSV upload (with column mapping) or Intercom connection. Primary. Job: J2. (D3 sets the MVP source pair, CSV + Intercom.)

### Cluster B - See what customers are saying
*Intent: show me the coherent picture first, ranked, so I know what matters most.*

- **B1 - Synthesis view** - ranked Themes, each with label, volume (n=X), recency, and the confidence indicator + low-signal badge. The main-job landing surface. Primary. Job: Main, J2, J3, E1.
- **B2 - Theme detail** - one Theme: summary, confidence, and the list of its evidence items (n=X) with snippets and inline citations. Primary. Job: Main, J1, J3, E1, E2.

### Cluster C - Trace the evidence
*Intent: let me verify a theme by seeing the actual customer voice, live if challenged.*

- **C1 - Evidence source** - a single raw Feedback item in context (full verbatim text, channel, date), reached from a citation or an item in B2. The theme to items (n=X) to raw-source chain ends here. Primary. Job: Main, J1, J3, E1, E2 (spot-check to trust, defend with the actual voice, feel certain when questioned).

### Cluster D - Decide and defend
*Intent: turn the picture into a call, and give stakeholders something they can read and challenge.*

- **D1 - Build evidence brief** - select top Themes, state recommended priority + rationale, generate the public share link. This is where the prioritization call is captured. Primary (Alex), secondary (Morgan). Job: Main (the call), S1, J4.
- **D2 - Shared brief (public)** - read-only public view, no login: top themes, evidence, source quotes, recommended priority. The audience is the stakeholder. Secondary / anonymous viewer. Job: S1, J1, J4, E2.

### Platform screens (no user job - [ORPHAN])
*Flagged honestly, not dressed up. Left for Step 6 (orphans) to resolve: keep minimal / attach to a job / backlog.*

- **P1 - Auth (sign up / log in)** - [ORPHAN] vs jtbd. Platform necessity. The public brief (D2) is deliberately outside auth (no login to view).
- **P2 - Settings / Workspace** - [ORPHAN] vs jtbd. Holds plan and limits (conversion) and the PII-scrub default (GDPR day-one). Not a user job; a platform and compliance necessity. Keep thin.

### Persona coverage
- **Primary** (Alex, the Overloaded PM): A1, A2, B1, B2, C1, D1.
- **Secondary** (Morgan / stakeholder, mostly anonymous viewer): D2.
- **Platform, no persona job:** P1, P2 [ORPHAN].

### Depth to the main job (full check at Step 3)
- Alex lands on B1 (Synthesis view) at tap 1, then B2 Theme detail (tap 2), then C1 raw evidence (tap 3). Within 3 taps.
- Build the call: B1 to D1 (tap 2).

### Jobs deliberately NOT given an MVP screen (not silent holes)
- **S2** (shared evidence standard, Persona B) - the team standard is fast-follow; served weakly by D2 as a viewer, no dedicated screen.
- **J5** (close the signal loop, Segment C) - deferred by D1; no MVP screen. Its future surface is the Segment A evidence chain (B and C).

These will appear in the trace matrix (Step 5) as intentionally deferred, not accidental gaps. Flows (Step 4) may reveal a missing screen (for example a first-run path that forces A2); any new screen is added here with its job tag then.

---

## 3. Navigation

*How the person moves between the concept-sitemap screens. Global navigation is the primary persona's shortest path to the main job, not "what to put in a menu". Structure is derived from the intent clusters, not a competitor's nav bar.*

### Global navigation (3 cluster entries + account)

Three primary entries, one per top-level intent cluster. Cluster C (Trace the evidence) is not a global entry: it is reached by drilling down from a theme, so it is contextual, not a destination.

1. **Synthesis** (to B1) - the default landing and home. Job behind it: Main (see the ranked picture of what customers need most) + J2 + J3. This is why the PM opens Sift; synthesis-first, per behavioral pattern B1.
2. **Sources** (to A1) - manage and add signal inputs. Job: J2 (get the pile in and know its provenance). Setup-heavy during activation, occasional afterward.
3. **Briefs** (to the brief list and D1) - the shareable artifacts. Job: S1 + J1 + J4 (package the call, defend it, align the team).

Plus, in a corner (avatar menu), not a primary tab:

- **Account / Settings** (to P2) - [ORPHAN] vs jtbd. Platform: plan and limits, the PII-scrub default, sign out. Deliberately low-prominence.

Order reads input to understanding to output (Sources, Synthesis, Briefs), but the DEFAULT landing is Synthesis (the value surface), not Sources. On first run with no sources, an empty state on Synthesis routes the PM to Connect a source (A2); that routing is a flow state (Step 4), not a nav item.

Three entries, not five, is a deliberate calm-under-density choice (Design Principle 2). A global feedback search is [?] and, if added, is fast-follow, not day-one nav.

### Depth to the main job (primary persona, Alex)

The first screen after auth is the Synthesis view (B1), which is itself the main-job surface. So the ranked, trustable picture is at tap 0.

- Main-job view (ranked themes + confidence): tap 0 (it is home).
- Full trust chain to raw evidence, needed to defend: B1 to B2 to C1 = 2 taps.
- Capture the defensible call (brief): B1 to D1 = 1 tap.

Deepest necessary path for the main job is 2 taps (to raw source). Within the 3-tap budget, no restructure needed. The synthesis-first landing is what keeps the count at 0 for the core view; every trust and decision action sits one or two taps from it.

### Global / contextual / deep

- **Global (always visible):** the three primary entries (Synthesis, Sources, Briefs) and the account corner. Persist across the app.
- **Contextual (appears inside a flow):** Theme detail (B2, from a theme in B1); Evidence source (C1, from a citation or item in B2), the whole drill-down chain is contextual; Connect / import (A2, from Sources or the first-run empty state); Build brief (D1, reachable both from Briefs and as a "create brief" action on the Synthesis view after selecting themes).
- **Deep (rare):** Settings / Workspace (P2, in the account menu); Auth (P1, once); source disconnect or re-import (inside Sources); brief delete or manage (inside Briefs).
- **Outside the app nav:** the public Shared brief (D2) is a standalone page reached by its share link, no login and no global nav (anonymous stakeholder viewer). Required by "no login to view".

*Consistent with Design Principle 4 (one decision at a time): Synthesis is the single focal surface, Sources and Briefs are the before and after, and nothing competes with the ranked picture for attention on landing.*

---

## 4. Trace matrix

*Rows: every job from jtbd.md (main, related J1 to J5, emotional E1 to E2, social S1 to S2). The two hypothesis jobs H-J1 and H-J2 are excluded, per the jtbd.md rule not to use unconfirmed jobs in the matrix. Columns: every screen from the concept-sitemap. A check means the screen really participates in closing that job. An empty row or column is a defect to resolve, not a silent gap.*

| Job | A1 Sources | A2 Connect | B1 Synthesis | B2 Theme | C1 Evidence | D1 Build brief | D2 Shared brief | P1 Auth | P2 Settings |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **Main** - defensible synthesis for planning | | | X | X | X | X | | | |
| **J1** - stakeholder defense | | | | X | X | | X | | |
| **J2** - make sense of the incoming pile | X | X | X | | | | | | |
| **J3** - know how much to trust | | | X | X | X | | | | |
| **J4** - get the team to the same why | | | | | | X | X | | |
| **J5** - close the signal loop (deferred, D1) | | | | | | | | | |
| **E1** - feel I actually understood it | | | X | X | X | | | | |
| **E2** - feel certain when questioned | | | | X | X | | X | | |
| **S1** - stakeholders can engage with it | | | | | | X | X | | |
| **S2** - shared evidence standard (deferred, fast-follow) | | | | | | | | | |

### Orphan screens (columns with no check)

- **P1 - Auth** and **P2 - Settings / Workspace.** Both were already flagged [ORPHAN] in the concept-sitemap: they close no jtbd job. **Resolution: keep, do not delete.** They are platform and compliance necessities (Auth to enter the app; Settings to hold the plan and the PII-scrub default that GDPR requires day-one), not user jobs. They are attached to a platform requirement rather than a job, and kept minimal and low-prominence. No user-facing screen is an orphan.

### Orphan jobs (rows with no check)

- **J5 - close the signal loop (Segment C).** **Resolution: out of MVP, deferred by D1.** Not a hole: the Segment C closure loop is a PM retention dependency, and its future surface is the Segment A evidence chain (B and C) we are building now. It enters as a thin layer in the fast-follow, not as a missing MVP screen.
- **S2 - shared evidence standard (Persona B).** **Resolution: out of MVP, fast-follow.** The team standard needs a team workspace (E7 note: the MVP Workspace is single-PM under D1). Served indirectly once a team adopts the same brief format (D2), but no MVP screen closes the team-standard job itself. Deliberate scope, consistent with the concept-sitemap deferred-jobs note.

### Concept-sitemap versus flows reconciliation

The flows (Step 4) introduced no screen that is absent from the concept-sitemap: every flow node is one of A1, A2, B1, B2, C1, D1, D2, or a state / real-world touchpoint. So the concept-sitemap needs no addition from the flows, and section 2 stands unchanged.

### Result

No accidental orphans. The two empty columns (P1, P2) are known platform screens, kept for platform and compliance reasons. The two empty rows (J5, S2) are known deferred jobs (Segment C and Persona B), out of the MVP by D1 and the fast-follow line. Restricting the matrix to the MVP surface (screens A1 to D2, jobs Main and J1 to J4, E1, E2, S1) leaves no empty row and no empty column: every MVP screen closes at least one MVP job, and every MVP job reaches at least one screen.

*Consistency (Step 7): the screen job-tags in section 2 and in concept-map.html are reconciled to this matrix, so the concept-sitemap, the schema, and the matrix now agree on which jobs each screen serves.*

