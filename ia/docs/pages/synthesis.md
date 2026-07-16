# IA Node 2.0 - Synthesis view (app home) - Sift

*Page. Group: pages. The tap-0 main-job surface, and the owner of the canonical confidence indicator, theme card, and filter control. Source of truth for ia/synthesis.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 5.*
*No em dash. Analysis is English; product UI labels are English (US / EU market).*

## Page

- **Page:** Synthesis view · **Type:** page · **Node:** 2.0 · **Index:** noindex (private app)
- **Purpose:** the ranked, trustable picture of what customers need most, so the PM opens Sift and sees the decision surface first.
- **Serves:** Main, J2, J3, E1.
- **URL / slug:** `/app` (default landing after login) · **Breadcrumbs:** none (app home).

## Content blocks (priority, mobile-first)

1. **App header** (Navigation 0.1, logged-in variant; Synthesis active).
2. **Filter / sort bar** (canonical filter control): source, recency, confidence; sort by signal rank (default), volume, or recency.
3. **Ranked theme list:** the canonical theme card, one per theme, ordered by signal rank. Each carries the confidence indicator.
4. **Selection and priority actions:** select themes, set priority, and Build brief (to 6.1). A create-brief action lives here so the call is one tap from the picture.
5. **App footer** (0.2, minimal).

## States (each a node in the map)

- **Populated** (default): the ranked theme list.
- **2.1 First-run empty (no sources):** a single explanation and one CTA, Connect a source (to 3.1). This is the activation fork (Flow 1).
- **2.2 Loading / synthesizing:** skeleton theme cards while ingest and cluster run (Flow 0, Flow 1). Honest wait, not a spinner with no context.
- **2.3 Error:** synthesis failed; retry (to 2.2) or go to Sources (3.0). Never a dead-end.

## Components

- **Navigation** (0.1, logged-in). **Footer** (0.2, app minimal).
- **OWNS (canonical, defined here, referenced elsewhere):** Confidence indicator, Theme card, Filter / sort control. See the canonical definitions below.

## Filters / facets

The canonical filter control: filter by source (CSV / Intercom), recency (last 7 / 30 / 90 days), and confidence (all / strong only). Sort by signal rank (default), volume (n), or recency. This is a page-level control, not a facet system; it is reused, lightly, on 3.0 Sources.

## Primary CTA

Open a theme (drill to 4.0), or Build brief (to 6.1) after selecting themes.

## Adaptive

- **Mobile (360px):** the filter bar collapses to a single Filter button opening a sheet; theme cards stack full width; the confidence indicator stays inline on the card; bottom tabs (Navigation) carry the primary destinations.
- **Desktop:** filter bar inline above the list; theme cards in a single dense column with more metadata visible; a persistent Build brief action.

## SEO and accessibility

- **noindex** (private app), `robots: noindex, follow`. No schema.
- Accessibility: the theme list is a semantic list; each card is a link to 4.0 with an accessible name; the confidence indicator is not color-only (it carries the count text and a badge word); filter controls are labeled; targets at least 44px.

## Canonical component definitions (owner: 2.0)

### Confidence indicator (D2 mandatory, the differentiator condition)

- **What it shows:** the evidence count `n=X`, plus a `low signal` badge when the evidence is thin. Day-one scope only; source diversity and time range are v2 (D2).
- **Not color-only:** the count and the badge word carry the meaning, so it survives grayscale and colorblindness.
- **States:** strong (n above the threshold, no badge), low signal (badge shown), and [?] thin threshold value pending (a v2 tuning question, marked [?] not invented).
- **Referenced by:** 4.0 Theme detail, 4.1 low-signal variant, 6.1 Build brief, 6.4 Shared brief.

### Theme card

- **Fields:** theme label (in the customer's language), volume `n=X`, recency (latest signal date), the confidence indicator, and a drill affordance.
- **Behavior:** the whole card links to 4.0 Theme detail; a select control adds it to a brief.
- **Referenced by:** 6.1 (selection list), 6.4 (shared brief).

### Filter / sort control

- **Filters:** source, recency, confidence. **Sort:** signal rank (default), volume, recency.
- **Behavior:** filters narrow the list in place; an empty filtered result shows a recover-by-loosening message, not a dead-end.
- **Referenced by:** 3.0 Sources (a lighter variant, status and type filters).

## Mockup notes (ia/synthesis.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the populated list with theme cards and confidence indicators, the filter bar, and the three states (empty, loading, error). Color, brand, and real data arrive later.
