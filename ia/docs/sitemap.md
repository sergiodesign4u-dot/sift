# IA - Sitemap - Sift

*Information Architecture data source. Basic Layer (concept) built from personas.md and jtbd.md; the Detail Layer expands it into the node map in section 2.*
*Contents: Entities (section 1), Detailed node map (section 2, Detail Layer), Navigation (section 3), Trace matrix (section 4).*
*Rule: every screen serves a job from jtbd.md. Structure is derived from jobs, not copied from a competitor menu. The node map is the data behind sitemap.html (site-map tree) and structure.html (hub chips, via _nav.js).*

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

## 2. Detailed node map (Detail Layer)

*The Detail Layer expands the concept-sitemap into a node map: the four intent clusters (A to D) plus the platform screens grow into ten flow-clusters (0 to 9), and every screen, state, dialog, and system page becomes a numbered node X.Y. This section is the DATA source: from it the site-map tree (sitemap.html) and the Structure hub chips (structure.html, via _nav.js) are built. It replaces the earlier concept-sitemap list (one list, not two side by side). Cards are deliberately light here (type, group, index, short INCLUDES, transitions); the full per-page specification lives in ia/docs/pages/ (Steps 4 to 6).*

**Node card fields:** NUMBER X.Y (X = cluster, Y = node), NAME, TYPE (page | dialog | state | flow | section | global element | component), GROUP (`global` | `pages`, the value used in _nav.js and the hub sections), INDEX (indexed | noindex), INCLUDES (blocks on the node), TRANSITIONS (arrows out, with the flow they trace), SERVES (persona / job).

**How the concept clusters (a) map here:** B (See what customers say) to clusters 2 Synthesis + 4 Theme detail; C (Trace evidence) to 5 Evidence; A (Bring signal in) to 3 Sources; D (Decide and defend) to 6 Briefs; P1 Auth to 1; P2 Settings to 7. New structural clusters, surfaced by the Detail Layer and the SEO-ahead stance: 0 Home + shell, 8 System, 9 Legal.

**Indexation stance (SEO ahead, adapted for a B2B tool):** Sift is mostly a private, authed tool, so the indexed surface is small: only the marketing Home (0.0) and the legal pages (9.x). The whole application (clusters 1 to 7) is noindex, and the public Shared brief (6.4) is public to view but noindex because it carries customer data. There are no city or category landing pages (that is a marketplace pattern, not this product) and no global feedback search node in MVP (deferred at the Basic Layer).

---

### Cluster 0 - Home + global shell

#### 0.0 - Home (marketing landing)
- Type: page · Group: pages · Index: indexed
- INCLUDES: hero (value proposition + primary CTA), how-it-works, trust strip, pricing teaser, footer link block.
- TRANSITIONS: -> 1.0 Sign up, -> 1.1 Log in; a logged-in visitor -> 2.0 Synthesis (Flow 0 entry).
- Serves: Acquisition (AARRR), the guest visitor. The only public app-adjacent surface besides legal.

#### 0.1 - Navigation (header + account menu + mobile tabs)
- Type: global element · Group: global · Index: n/a (inherited, no H1)
- INCLUDES: brand, primary entries (Synthesis / Sources / Briefs), account corner; mobile bottom tabs. State matrix by auth and role, detailed in Step 2.
- TRANSITIONS: -> every primary cluster. The main internal-linking plane.
- Serves: all personas; the shortest path to the main job.

#### 0.2 - Footer
- Type: global element · Group: global · Index: n/a (inherited)
- INCLUDES: trust strip, service / legal link columns, SEO link block, bottom row (copyright, socials). Detailed in Step 3.
- TRANSITIONS: -> 9.x legal, -> support, -> marketing sections. The second internal-linking plane.
- Serves: trust and crawlable internal linking.

---

### Cluster 1 - Auth (was P1)

#### 1.0 - Sign up
- Type: page · Group: pages · Index: noindex
- INCLUDES: email / SSO form, value reminder, link to log in.
- TRANSITIONS: -> 2.1 Synthesis first-run empty (new workspace); -> 1.1 Log in.
- Serves: platform entry. No jtbd job (was ORPHAN P1), kept as a necessity.

#### 1.1 - Log in
- Type: page · Group: pages · Index: noindex
- INCLUDES: email / SSO form, forgot-password link.
- TRANSITIONS: -> 2.0 Synthesis; -> 1.2 Forgot / reset.
- Serves: return entry.

#### 1.2 - Forgot / reset password
- Type: state · Group: pages · Index: noindex
- INCLUDES: request-reset form, sent confirmation, set-new-password.
- TRANSITIONS: -> 1.1 Log in.
- Serves: account recovery.

---

### Cluster 2 - Synthesis (app home, main job · was B1)

#### 2.0 - Synthesis view
- Type: page · Group: pages · Index: noindex
- INCLUDES: ranked themes (label, volume n=X, recency), confidence indicator + low-signal badge, priority action, create-brief action.
- TRANSITIONS: -> 4.0 Theme detail (Flow 0); -> 6.1 Build brief (1 tap); first run or stale -> 2.1 empty or 3.1 Connect.
- Serves: Main, J2, J3, E1. The tap-0 main-job surface. (was B1)

#### 2.1 - Synthesis: first-run empty (no sources)
- Type: state · Group: pages
- INCLUDES: empty explanation, single CTA to connect a source.
- TRANSITIONS: -> 3.1 Connect / import (Flow 1).
- Serves: activation; routes the PM to the first source.

#### 2.2 - Synthesis: loading / synthesizing
- Type: state · Group: pages
- INCLUDES: progress for ingest + cluster, skeleton themes.
- TRANSITIONS: -> 2.0 populated on completion.
- Serves: honest wait state (Flow 0, Flow 1).

#### 2.3 - Synthesis: error
- Type: state · Group: pages
- INCLUDES: synthesis-failed message, retry, contact.
- TRANSITIONS: -> retry 2.2; -> 3.0 Sources.
- Serves: failure recovery, never a dead-end.

---

### Cluster 3 - Sources / ingestion (was A1, A2)

#### 3.0 - Sources (list)
- Type: page · Group: pages · Index: noindex
- INCLUDES: connected sources with status, item counts, last sync, PII-scrub state; add-source action.
- TRANSITIONS: -> 3.1 Connect; -> 3.6 manage; empty -> 3.4.
- Serves: J2. (was A1)

#### 3.1 - Connect / import source (chooser)
- Type: page · Group: pages
- INCLUDES: source-type chooser (CSV / Intercom, Zendesk later), PII-scrub default note.
- TRANSITIONS: -> 3.2 CSV, -> 3.3 Intercom.
- Serves: J2, D3. (was A2)

#### 3.2 - CSV upload + column mapping
- Type: flow · Group: pages
- INCLUDES: file drop, column-mapping step, unmapped-column error, normalize + PII-scrub loading.
- TRANSITIONS: error -> re-map; success -> 2.2 synthesizing (Flow 1).
- Serves: J2, the zero-friction day-one path.

#### 3.3 - Intercom connect (OAuth)
- Type: flow · Group: pages
- INCLUDES: authorize step, auth-failed error, sync loading.
- TRANSITIONS: error -> retry; success -> 2.2 synthesizing (Flow 1).
- Serves: J2, the named Segment A live source.

#### 3.4 - Sources: empty (none connected)
- Type: state · Group: pages
- INCLUDES: empty explanation, connect CTA.
- TRANSITIONS: -> 3.1 Connect.
- Serves: activation.

#### 3.5 - Source: sync error / unavailable
- Type: state · Group: pages
- INCLUDES: sync-failed / source-unavailable message, affected-themes note, retry.
- TRANSITIONS: -> retry; -> 3.6 manage. Ties to the citation-cannot-resolve guard (Flow 2).
- Serves: J3 traceability honesty.

#### 3.6 - Source: manage (disconnect / re-import)
- Type: dialog · Group: pages
- INCLUDES: source detail, re-import, disconnect confirm.
- TRANSITIONS: -> 3.0 Sources.
- Serves: source housekeeping.

---

### Cluster 4 - Theme detail (was B2)

#### 4.0 - Theme detail
- Type: page · Group: pages · Index: noindex
- INCLUDES: theme summary, confidence (n=X), evidence-item list with snippets and inline citations, priority action.
- TRANSITIONS: -> 5.0 Evidence source (Flow 0, Flow 2); -> 6.1 add to brief.
- Serves: Main, J1, J3, E1, E2. (was B2)

#### 4.1 - Theme: low-signal / thin-evidence variant
- Type: state · Group: pages
- INCLUDES: low-signal badge, thin-evidence caution, still-drillable items.
- TRANSITIONS: -> 5.0; -> discard back to 2.0.
- Serves: J3, honest confidence (D2 mandatory).

---

### Cluster 5 - Evidence trace (was C1)

#### 5.0 - Evidence source (raw feedback item in context)
- Type: page · Group: pages · Index: noindex
- INCLUDES: full verbatim text, channel, date, PII-scrubbed author ref, back-to-theme.
- TRANSITIONS: -> back 4.0. The theme to items (n=X) to raw chain ends here.
- Serves: Main, J1, J3, E1, E2. The differentiator. (was C1)

#### 5.1 - Evidence: item redacted (PII) / unavailable
- Type: state · Group: pages
- INCLUDES: redacted or unavailable notice, why (PII / source removed), affected-citation note.
- TRANSITIONS: -> back 4.0.
- Serves: GDPR honesty and the traceability guard (Flow 2).

---

### Cluster 6 - Decide and defend / briefs (was D1, D2)

#### 6.0 - Briefs (list)
- Type: page · Group: pages · Index: noindex
- INCLUDES: saved briefs with title, date, share status; new-brief action.
- TRANSITIONS: -> 6.1 Build; empty -> 6.5.
- Serves: J1, S1, J4.

#### 6.1 - Build evidence brief
- Type: page · Group: pages · Index: noindex
- INCLUDES: theme selection, recommended priority + rationale, thin-theme warning, generate-link action.
- TRANSITIONS: thin -> 6.2 warning; generate -> 6.3 link (Flow 4).
- Serves: Main (the call), S1, J4. (was D1)

#### 6.2 - Brief: thin-theme warning
- Type: state · Group: pages
- INCLUDES: which themes are low-signal, label-do-not-hide prompt.
- TRANSITIONS: -> back to 6.1.
- Serves: honest confidence in the shared artifact (Flow 4).

#### 6.3 - Brief: share-link generated
- Type: dialog · Group: pages
- INCLUDES: public link, copy action, link-generation loading, access note (no login to view).
- TRANSITIONS: -> 6.4 Shared brief (preview).
- Serves: S1, the referral artifact.

#### 6.4 - Shared brief (public, no login)
- Type: page · Group: pages · Index: noindex (customer data)
- INCLUDES: top themes, evidence, source quotes, recommended priority; read-only, no app nav.
- TRANSITIONS: standalone; reached by the share link only.
- Serves: S1, J1, J4, E2; the stakeholder / anonymous viewer. (was D2)

#### 6.5 - Briefs: empty
- Type: state · Group: pages
- INCLUDES: empty explanation, build-first-brief CTA.
- TRANSITIONS: -> 6.1 Build.
- Serves: onboarding to the output step.

---

### Cluster 7 - Account / settings (was P2)

#### 7.0 - Account / settings shell
- Type: page · Group: pages · Index: noindex
- INCLUDES: section nav mirroring the account areas; one shell, not N pages.
- TRANSITIONS: -> 7.1, 7.2, 7.3.
- Serves: platform. No jtbd job (was ORPHAN P2), kept thin.

#### 7.1 - Plan and limits (billing)
- Type: section · Group: pages
- INCLUDES: current plan, signal-volume usage vs limit, upgrade. The free-to-paid conversion surface.
- TRANSITIONS: -> upgrade / billing.
- Serves: business model (seat-based, volume limit).

#### 7.2 - Data and privacy
- Type: section · Group: pages
- INCLUDES: PII-scrub default toggle, data-residency note, export / delete (GDPR / CCPA).
- TRANSITIONS: -> 9.2 Security / GDPR.
- Serves: compliance day-one (GDPR).

#### 7.3 - Profile / sign out
- Type: section · Group: pages
- INCLUDES: name, email, password, sign out.
- TRANSITIONS: sign out -> 0.0 Home.
- Serves: account basics.

---

### Cluster 8 - System and global (built in Step 6)

#### 8.0 - 404 not found
- Type: page · Group: pages · Index: 404 + noindex
- INCLUDES: full page with header / footer, search or quick links, never a soft-404.
- TRANSITIONS: -> 2.0 Synthesis, -> 0.0 Home.
- Serves: no-dead-end recovery.

#### 8.1 - 500 server error
- Type: page · Group: pages
- INCLUDES: minimal backend-independent template, retry, contact.
- TRANSITIONS: -> retry.
- Serves: failure honesty.

#### 8.2 - Maintenance (503)
- Type: page · Group: pages
- INCLUDES: minimal template, 503 + Retry-After.
- TRANSITIONS: -> retry later.
- Serves: planned downtime.

#### 8.3 - Cookie consent
- Type: component / dialog · Group: global
- INCLUDES: prior-consent banner (EU law), accept / reject equally easy, link to policy; analytics / marketing opt-in off by default. Grounded in law at Step 6.
- TRANSITIONS: -> 9.0 Privacy.
- Serves: GDPR / ePrivacy compliance.

#### 8.4 - Toast / notification
- Type: component · Group: global
- INCLUDES: transient success / error / info messages, aria-live; no SEO impact.
- TRANSITIONS: n/a.
- Serves: system feedback across the app.

---

### Cluster 9 - Content / legal (surfaced by the footer, Step 3)

#### 9.0 - Privacy policy
- Type: page · Group: pages · Index: indexed
- INCLUDES: data handling, PII, cookies, rights. Template map with 9.1 and 9.2.
- TRANSITIONS: -> footer, -> 8.3 cookie.
- Serves: compliance, trust.

#### 9.1 - Terms of service
- Type: page · Group: pages · Index: indexed
- INCLUDES: terms, acceptable use, liability.
- TRANSITIONS: -> footer.
- Serves: compliance.

#### 9.2 - Security / GDPR / DPA
- Type: page · Group: pages · Index: indexed
- INCLUDES: security posture, SOC 2 plan, data residency, DPA request.
- TRANSITIONS: -> footer, -> 7.2 data settings.
- Serves: mid-market / enterprise trust.

---

### Coverage, personas, deferred jobs

- **Every concept-sitemap screen is represented:** A1 -> 3.0, A2 -> 3.1, B1 -> 2.0, B2 -> 4.0, C1 -> 5.0, D1 -> 6.1, D2 -> 6.4, P1 -> cluster 1, P2 -> cluster 7. States, dialogs, system, and legal are added as their own nodes, as the flows require.
- **Primary persona (Alex):** clusters 2, 3, 4, 5, 6 and account. **Secondary (Morgan / stakeholder):** 6.4 Shared brief. **Guest / anonymous:** 0.0 Home, 6.4.
- **Deliberately deferred, not holes:** J5 (close the signal loop, Segment C, deferred by D1) and S2 (shared evidence standard, Persona B, fast-follow) get no MVP node; served indirectly by the Segment A evidence chain and by the shared brief. No global feedback search in MVP.
- **Count:** 10 clusters, 39 nodes (4 global elements, 35 pages / states / dialogs / sections). The map grows discover-as-you-go; new nodes are registered here and in _nav.js.

### Canonical components (Step 3 discovery, defined once and referenced)

Discovery pass over the node map and the entity inventory (section 1). **Beyond the header (0.1) and footer (0.2), Sift has no standalone global structural node.** There is no catalog or taxonomy tree (the product has no catalog), no marketplace-scale facet system, and no world-scale value list (the closest, the source-type enum, is tiny). What Sift has is a small set of canonical components, each defined once with its owner page and referenced everywhere else, never re-specified per page:

- **Confidence indicator** (n=X plus low-signal badge). The differentiator, D2 mandatory, the transparency condition H1 requires. Owner: 2.0 Synthesis view (Step 4). Referenced by 4.0, 4.1, 6.1, 6.4.
- **Theme card** (label, volume n=X, recency, confidence indicator). Owner: 2.0 Synthesis view (Step 4). Referenced by 6.1 selection and 6.4 shared brief.
- **Evidence item / feedback snippet** (verbatim excerpt, channel, date, citation). Owner: 4.0 Theme detail (Step 5). Referenced by 5.0 and 6.4.
- **Filter / sort control** (by source, recency, confidence). A page-level control, not a facet system. Owner: 2.0 Synthesis view (Step 4). Reused on 3.0 Sources.
- **Source-type enum** (CSV, Intercom; Zendesk and Gong later, same abstraction, D3). Owner: 3.1 Connect / import (Step 5). Referenced by 3.0.
- **Modal / dialog shell** (shared UI pattern). The concrete dialogs are already nodes (3.1 connect, 3.6 manage, 6.3 share-link, 8.3 cookie consent), so there is no separate global node; the shared shell is a component-stage concern.

Rule: change a canonical component in its owner page, then walk its reference list above. This is the single-canonical-component record the Step 7 audit checks.

**Gate:** global and structural nodes are exhausted (only 0.1 header and 0.2 footer stand alone). Proceed to pages, starting with Home (Step 4).

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

