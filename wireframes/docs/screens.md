# Wireframes - Screen x State Matrix - Sift

*Stage 04 order sheet for the wireframe stage. Rows are screens, columns are states. A checkmark means the state is real for that screen (it exists as a node in ia/docs/sitemap.md or in the States section of the node spec). A blank hyphen means the scenario does not produce that state, so we do not draw it. Nothing here is invented: every screen, job, flow position, and state is inherited from ia/docs/sitemap.md, ia/docs/flows.md, ia/docs/pages/*.md, and user-research/docs/jtbd.md. A missing block is an IA fix, not a wireframe addition.*

*No em dash. Internal doc language is English; the HTML wireframes carry product copy (English) pulled verbatim from the A to E blocks of each IA node.*

## Locked choices (etalon + first flow)

- **ETALON: 2.0 Synthesis view** (`synthesis.html`). The workhorse with maximum reuse. It owns three canonical components (confidence indicator, theme card, filter / sort control) that render on 4.0, 4.1, 6.1, and 6.4, and it establishes the app shell (logged-in header, minimal footer, state bar) and the four-state floor pattern that every app screen inherits. Chosen for reuse, not for being first in the flow.
- **FIRST FLOW: Flow 0, the main job spine** (2.0 -> 4.0 -> 5.0 -> 6.1 -> 6.3 -> 6.4). The flow that reuses the etalon the most (theme card, confidence indicator, and evidence snippet run end to end) and the primary persona's (Alex) path to the main job. Assembled first, end to end.

## Scope of this matrix

Flow 0 (main job) screens only. The other flows (Flow 1 Sources / ingestion, Flow 2 trust drill, Flow 3 defend live, Flow 4 share) and the platform clusters (Auth, Account, System, Legal, Home) are rolled out in Step 8 by subagent fanout, and tracked in index.html coverage. Screens adjacent to Flow 0 but owned by another cluster are listed under "Adjacent, deferred" below.

## Screens (main flow)

| Node | Screen | Slug | Serves (jtbd) | Flow position | Viewports |
|---|---|---|---|---|---|
| 2.0 | Synthesis view | `/app` | Main, J2, J3, E1 | Flow 0 start (tap 0); Flow 1 activation entry | mobile 360 + desktop |
| 4.0 | Theme detail | `/app/theme/<id>` | Main, J1, J3, E1, E2 | Flow 0 step 2; Flow 2 trust | mobile 360 + desktop |
| 5.0 | Evidence source | `/app/evidence/<id>` | Main, J1, J3, E1, E2 | Flow 0 step 3 (chain end); Flow 3 defend surface | mobile 360 + desktop |
| 6.1 | Build evidence brief | `/app/briefs` (build) | Main, S1, J4 | Flow 0 step 4 (1 tap from 2.0); Flow 4 | mobile 360 + desktop |
| 6.3 | Brief: share-link (dialog) | `/app/briefs` (dialog) | S1 | Flow 0 step 5; Flow 4 | mobile 360 + desktop |
| 6.4 | Shared brief (public) | `/b/<token>` | S1, J1, J4, E2 | Flow 0 end (public, no login); Flow 4 consume | mobile 360 + desktop |

## State matrix

Floor states are empty / error / loading / success (success is the base page). Domain and transit states come from the States section of each node spec, with their sitemap node number.

| Screen | base (success) | empty | loading | error | domain / transit states (IA node) |
|---|:--:|:--:|:--:|:--:|---|
| 2.0 Synthesis view | ✓ | ✓ | ✓ | ✓ | empty = first-run, no sources (2.1); loading = synthesizing (2.2); error (2.3) |
| 4.0 Theme detail | ✓ | - | ✓ | ✓ | low-signal / thin-evidence variant (4.1) |
| 5.0 Evidence source | ✓ | - | - | - | redacted (PII) / unavailable (5.1), which folds in the error case |
| 6.1 Build brief | ✓ | - | - | - | thin-theme warning (6.2) |
| 6.3 Share-link dialog | ✓ | - | ✓ | - | base = link generated; loading = generating the public link |
| 6.4 Shared brief (public) | ✓ | - | - | - | none in IA (standalone public view, reached by token only) |

Notes:
- 2.0 is the only screen carrying the full four-state floor; its empty is the first-run activation fork (2.1 -> 3.1 Connect a source).
- 4.0 has no empty: a theme always has at least one evidence item by definition. Its loading and error inherit the generic app patterns (theme.md). A single unresolvable item is 5.1, not a 4.0 state.
- 5.0 gives only 5.0 and 5.1 in IA. The "unavailable / cannot resolve" case is folded into 5.1 (the traceability guard, Flow 2), so there is no separate error node, and no loading node is specified; we do not invent one.
- 6.1 link-generation loading lives in the 6.3 dialog, not on 6.1.
- 6.4 has no extra state in IA. An expired or invalid token is not a specified node; if the wireframes surface it, it routes to 8.0 (404), which is an IA fix, not a new brief state.

## Pages to create (files, first flow)

Base file = success state; one file per real state. Latin names from ia/docs/sitemap.md. Globals (header, footer, state bar) come from _nav.js, not duplicated.

- 2.0: `synthesis.html` (base) · `synthesis-empty.html` · `synthesis-loading.html` · `synthesis-error.html`
- 4.0: `theme.html` (base) · `theme-low-signal.html` · `theme-loading.html` · `theme-error.html`
- 5.0: `evidence.html` (base) · `evidence-redacted.html`
- 6.1: `build-brief.html` (base) · `build-brief-thin-warning.html`
- 6.3: `share-link.html` (base = generated) · `share-link-loading.html`
- 6.4: `shared-brief.html` (base)

Total for the first flow: 15 pages across 6 screens.

## Adjacent, deferred (owned by another cluster, built later)

These touch Flow 0 but belong to a different cluster; they are built in Step 6 / Step 8 with their own cluster, not here.

- 3.1 Connect / import source (chooser): the first-run fork target from 2.0-empty (2.1 -> 3.1). Sources cluster, Flow 1.
- 6.0 Briefs list · 6.5 Briefs empty: the briefs-list entry to 6.1. Briefs cluster; built with the briefs pages.

## Canonical components (owners, inherited from IA, never re-specified in a wireframe)

- Confidence indicator (n=X + low-signal badge). Owner 2.0. Rendered on 4.0, 4.1, 6.1, 6.4.
- Theme card (label, volume n=X, recency, confidence indicator). Owner 2.0. Rendered on 6.1 selection, 6.4.
- Filter / sort control (source, recency, confidence; sort by rank / volume / recency). Owner 2.0. Reused lightly on 3.0.
- Evidence snippet (verbatim excerpt, channel, date, inline citation). Owner 4.0. Rendered on 5.0 (expanded) and 6.4 (public quote).
- Source-type enum (CSV, Intercom). Owner 3.1. (Flow 1, later.)
