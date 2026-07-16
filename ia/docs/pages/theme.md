# IA Node 4.0 - Theme detail - Sift

*Page. Group: pages. One theme: summary, confidence, and its evidence items with inline citations, the middle of the trust chain. Owner of the canonical evidence snippet. Covers 4.0 and the 4.1 low-signal variant. Source of truth for ia/theme.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 5.*
*No em dash. Analysis is English; product UI labels are English.*

## Page

- **Page:** Theme detail · **Type:** page · **Nodes:** 4.0, 4.1 (low-signal variant) · **Index:** noindex (private app)
- **Purpose:** let the PM verify a theme by seeing its evidence, so a ranked theme becomes a trusted theme.
- **Serves:** Main, J1, J3, E1, E2.
- **URL / slug:** `/app/theme/<id>` · **Breadcrumbs:** Synthesis > Theme. This is the one place a breadcrumb earns its keep (the drill path).

## Content blocks (priority, mobile-first)

1. **App header** (Navigation 0.1).
2. **Breadcrumb** Synthesis > Theme (the drill context, page-level, not global nav).
3. **Theme header:** label (customer's language), the confidence indicator (n=X + low-signal badge), a one-line summary, recency, and an Add to brief action.
4. **Evidence items list (n=X):** the canonical evidence snippet, one per item: verbatim excerpt, channel and date, and an inline citation number. Each drills to 5.0 Evidence source.
5. **App footer** (0.2, minimal).

## States (nodes)

- **4.0 default:** a strong theme with a full evidence list.
- **4.1 low-signal / thin-evidence variant:** the confidence indicator shows the low-signal badge, a caution line explains the evidence is thin, and the items are still fully drillable (transparency, not suppression). The PM can still open each quote; nothing is hidden.
- **Loading** (fetching items) and **error** inherit the app patterns; a single unresolvable item is handled by 5.1, not here.

## Components

- **Navigation** (0.1), **Footer** (0.2, app minimal).
- **Confidence indicator** and **Theme card** header treatment (canonical, owned by 2.0), referenced here.
- **OWNS (canonical):** the evidence snippet. See below.

## Filters / facets

A light in-theme filter is optional (by source or recency of the item); MVP shows all items ordered by recency. Filtering here is a fast-follow [?], not day-one.

## Primary CTA

Open an evidence item (drill to 5.0), or Add to brief (to 6.1).

## Adaptive

- **Mobile (360px):** the theme header stacks (label, confidence, summary); each evidence snippet is a full-width card with the citation number inline; the Add to brief action is a sticky bar.
- **Desktop:** the header sits above a single dense column of snippets; Add to brief is in the header.

## SEO and accessibility

- **noindex** (private app), `robots: noindex, follow`, no schema.
- The evidence list is a semantic list; each snippet is a link to 5.0 with an accessible name (source and date).
- The confidence indicator carries text (n and the badge word), not color alone.
- The inline citation is a real link with an accessible label ("evidence item 3"), not a bare superscript.
- Targets at least 44px.

## Canonical component definition (owner: 4.0)

### Evidence snippet (feedback item card)

- **Fields:** a verbatim excerpt (truncated with a clear more affordance), the channel (CSV / Intercom), the date, and an inline citation number that ties the snippet to the theme claim.
- **PII:** author references are scrubbed by default (sitemap.md, E1); the snippet shows the scrubbed form.
- **Behavior:** the snippet links to 5.0 Evidence source (the full item in context). If the source cannot resolve, 5.1 handles it (redacted / unavailable).
- **Referenced by:** 5.0 Evidence source (the expanded form), 6.4 Shared brief (the public quote). Change the snippet here, then walk the references.

## Mockup notes (ia/theme.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the strong theme (4.0) with its evidence snippets and inline citations, and the low-signal variant (4.1) with the badge and the thin-evidence caution. Color, brand, real data arrive at the concept stage (06).
