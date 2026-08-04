# IA Node 3.0 - Sources / ingestion (cluster) - Sift

*Page cluster. Group: pages. The ingestion surface: get the pile in, cleaned, and let the PM see what is in it and where from. Covers nodes 3.0 to 3.6. Owner of the canonical source-type enum. Source of truth for ia/sources.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 5.*
*No em dash. Analysis is English; product UI labels are English. Grounded in D3 (CSV + Intercom for MVP), not invented.*

## Page

- **Page:** Sources / ingestion · **Type:** page (with sub-flows and states) · **Nodes:** 3.0 to 3.6 · **Index:** noindex (private app)
- **Purpose:** connect and manage signal inputs, and show their provenance, so the PM trusts that the pile is in and where it came from.
- **Serves:** J2, grounded by D3.
- **URL / slug:** `/app/sources` · **Breadcrumbs:** none (a primary destination).

## Nodes in this cluster

- **3.0 Sources (list):** connected sources with type, status, item count, last sync and PII-scrub state, AND the sources still available to connect, each with its method. Owner of the source-type enum since 3.1 was folded in.
- **3.2 CSV upload + column mapping:** file drop, a column-mapping step, an unmapped-column error, then normalize and PII-scrub loading. Traces Flow 1 (CSV branch).
- **3.3 Intercom connect (OAuth):** authorize, an auth-failed error, then sync loading. Traces Flow 1 (Intercom branch).
- **3.4 Sources: empty (none connected):** the same screen with the connected group at zero, so the explanation sits in the flow of the list and the available sources are already on screen.
- **3.5 Source: sync error / unavailable:** sync failed or a source unavailable, with the affected-themes note and retry. Ties to the citation-cannot-resolve guard (Flow 2).
- **3.6 Source: manage (disconnect / re-import):** source detail with re-import and a disconnect confirm.

## Content blocks (priority, mobile-first)

1. **App header** (Navigation 0.1, Sources active).
2. **Screen head with the scope line:** how many sources are connected and how many items are in,
   because that corpus is what every theme on Synthesis is counted from.
3. **Connected group:** one row per source with status, items, last sync and scrub state, and one
   Manage entry.
4. **Available to connect:** the source-type cards, each leading straight to its own flow, with
   availability stated per source so "not connectable yet" is said rather than hidden.
5. **The import sub-flow** (CSV or Intercom), with its steps, errors, and loading.
6. **App footer** (0.2, minimal).

## Components

- **Navigation** (0.1, app). **Footer** (0.2, app minimal).
- **Filter / sort control** (canonical, owned by 2.0): a lighter variant here, status and type.
- **OWNS (canonical):** the **source-type enum**. See below.

## States

**3.0, 3.4 and 3.5 are one screen with different groups filled** (`blocks.md` Type 3, row 2). The
connected sources and the ones still available to connect sit on the same screen, so the empty state
is not a separate design and the next action is never one navigation away.

- **Populated list** (default): the Connected group with its rows, then Available to connect.
- **3.4 empty:** the same screen with Connected at 0. The explanation sits in the flow of the list
  rather than taking the canvas, and the single primary action is on the CSV card, because CSV is the
  path that does not wait on anyone else (D3, and the As-Is barrier that a PM cannot get an admin to
  authorize an integration before they know the product works).
- **3.5 sync error / unavailable:** the same screen with the failed source carrying its own status,
  its own explanation and the retry. One source failing is not the screen failing, and blanking the
  list would overstate the failure and hide the half that still works. The scope line carries the
  consequence a PM actually needs: the corpus has not moved since the last successful sync, so
  today's ranking is counted from two-day-old data.
- Plus the recoverable errors inside the flows (unmapped columns in 3.2, auth failed in 3.3) and the loading state during normalize and cluster. Recoveries loop back into the connect step; the only true dead-end (no usable feedback anywhere) lives in Flow 1, not on a screen.

## Primary CTA

Connect a source, and it is the card of the source being connected, not a head button that opens a
chooser. With block 2 in place the chooser is on the screen already, so a head-level "Add source"
would be a second route to the same three options. **3.1 was folded into this node in August 2026**
for the same reason: it was a screen between the user and the source on the activation path, showing
the options 3.0 already shows. Each available card leads straight to its connect flow, and this node
owns the source-type enum.

## Adaptive

- **Mobile (360px):** the source rows stack, the available-source cards become one column, and the column-mapping step scrolls vertically with one mapping per row; bottom tabs carry the destinations.
- **Desktop:** the connected group is a table-like set of rows, the available cards sit in a grid beside each other, and the mapping step is a four-column map with the sample from the file.

## SEO and accessibility

- **noindex** (private app), `robots: noindex, follow`, no schema.
- Accessibility: the source list is a semantic list; status is not color-only (a word plus an icon); the mapping step labels every column control; the disconnect confirm is a focus-trapped dialog; targets at least 44px.

## Canonical component definition (owner: 3.0)

### Source-type enum

- **Values (MVP):** CSV (a one-off import batch) and Intercom (a live connection). **Later, same abstraction:** Zendesk and Gong. Grounded in D3; no other source is invented.
- **Each value carries:** a label, a connect method (upload vs OAuth), a status model (batch imported vs live synced), and the PII-scrub default (on).
- **Referenced by:** 3.0 Sources (the rows), the Home marketing copy, and any future integration surface. Change the enum here, then walk the references.
- **Note:** CSV is modeled as a Source with a batch attribute, not a separate entity (sitemap.md, section 1, E2).

## Mockup notes (ia/sources.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the Sources list with both groups, the CSV mapping step with its unmapped-column error, the Intercom OAuth step with its auth-failed error, and the empty, sync-error, and manage states. Color, brand, real icons arrive at the concept stage (06).
