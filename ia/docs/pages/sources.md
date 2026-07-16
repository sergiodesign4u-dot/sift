# IA Node 3.0 - Sources / ingestion (cluster) - Sift

*Page cluster. Group: pages. The ingestion surface: get the pile in, cleaned, and let the PM see what is in it and where from. Covers nodes 3.0 to 3.6. Owner of the canonical source-type enum. Source of truth for ia/sources.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 5.*
*No em dash. Analysis is English; product UI labels are English. Grounded in D3 (CSV + Intercom for MVP), not invented.*

## Page

- **Page:** Sources / ingestion · **Type:** page (with sub-flows and states) · **Nodes:** 3.0 to 3.6 · **Index:** noindex (private app)
- **Purpose:** connect and manage signal inputs, and show their provenance, so the PM trusts that the pile is in and where it came from.
- **Serves:** J2, grounded by D3.
- **URL / slug:** `/app/sources` · **Breadcrumbs:** none (a primary destination).

## Nodes in this cluster

- **3.0 Sources (list):** connected sources with type, status, item count, last sync, and PII-scrub state; an Add source action.
- **3.1 Connect / import (chooser):** the source-type chooser (canonical enum) plus the PII-scrub default note. Owner of the source-type enum.
- **3.2 CSV upload + column mapping:** file drop, a column-mapping step, an unmapped-column error, then normalize and PII-scrub loading. Traces Flow 1 (CSV branch).
- **3.3 Intercom connect (OAuth):** authorize, an auth-failed error, then sync loading. Traces Flow 1 (Intercom branch).
- **3.4 Sources: empty (none connected):** one explanation and a Connect CTA.
- **3.5 Source: sync error / unavailable:** sync failed or a source unavailable, with the affected-themes note and retry. Ties to the citation-cannot-resolve guard (Flow 2).
- **3.6 Source: manage (disconnect / re-import):** source detail with re-import and a disconnect confirm.

## Content blocks (priority, mobile-first)

1. **App header** (Navigation 0.1, Sources active).
2. **Sources list** with a light filter (status, type) and an Add source button.
3. **Connect chooser** (opened by Add source): the source-type cards.
4. **The import sub-flow** (CSV or Intercom), with its steps, errors, and loading.
5. **App footer** (0.2, minimal).

## Components

- **Navigation** (0.1, app). **Footer** (0.2, app minimal).
- **Filter / sort control** (canonical, owned by 2.0): a lighter variant here, status and type.
- **OWNS (canonical):** the **source-type enum**. See below.

## States

- Populated list (default), 3.4 empty, 3.5 sync error / unavailable, plus the recoverable errors inside the flows (unmapped columns in 3.2, auth failed in 3.3) and the loading state during normalize and cluster. Recoveries loop back into the connect step; the only true dead-end (no usable feedback anywhere) lives in Flow 1, not on a screen.

## Primary CTA

Add source (opens 3.1), or Connect within the chosen sub-flow.

## Adaptive

- **Mobile (360px):** the source list becomes stacked cards; the chooser is a full-height sheet; the column-mapping step scrolls vertically with one mapping per row; bottom tabs carry the destinations.
- **Desktop:** the list is a table-like set of rows; the chooser is a centered panel; the mapping step is a two-column map.

## SEO and accessibility

- **noindex** (private app), `robots: noindex, follow`, no schema.
- Accessibility: the source list is a semantic list; status is not color-only (a word plus an icon); the mapping step labels every column control; the disconnect confirm is a focus-trapped dialog; targets at least 44px.

## Canonical component definition (owner: 3.1)

### Source-type enum

- **Values (MVP):** CSV (a one-off import batch) and Intercom (a live connection). **Later, same abstraction:** Zendesk and Gong. Grounded in D3; no other source is invented.
- **Each value carries:** a label, a connect method (upload vs OAuth), a status model (batch imported vs live synced), and the PII-scrub default (on).
- **Referenced by:** 3.0 Sources (the rows), the Home marketing copy, and any future integration surface. Change the enum here, then walk the references.
- **Note:** CSV is modeled as a Source with a batch attribute, not a separate entity (sitemap.md, section 1, E2).

## Mockup notes (ia/sources.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the Sources list, the Connect chooser, the CSV mapping step with its unmapped-column error, the Intercom OAuth step with its auth-failed error, and the empty, sync-error, and manage states. Color, brand, real icons arrive at the concept stage (06).
