# IA Node 4.0 - Theme detail - Sift

*Page. Group: pages. One theme: summary, confidence, and its evidence items with inline citations, the middle of the trust chain. Owner of the canonical evidence snippet. Covers 4.0 and the 4.1 low-signal variant. Source of truth for ia/theme.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 5.*
*No em dash. Analysis is English; product UI labels are English.*

## Page

- **Page:** Theme detail · **Type:** page · **Nodes:** 4.0, 4.1 (low-signal variant) · **Index:** noindex (private app)
- **Purpose:** let the PM verify a theme by seeing its evidence, so a ranked theme becomes a trusted theme.
- **Serves:** Main, J1, J3, E1, E2.
- **URL / slug:** `/app/theme/<id>` · **Breadcrumbs:** Synthesis > Theme. This is the one place a breadcrumb earns its keep (the drill path).

## Content blocks (priority, mobile-first)

*Composition from `ia/docs/blocks.md`, Type 5 (record detail with evidence). Every block carries a
trace there. Order is mobile-first; density is reasoned from desktop.*

1. **App header** (Navigation 0.1).
2. **Breadcrumb** Synthesis > Theme (the drill context, page-level, not global nav).
3. **Superseded notice band**, when the theme has been merged or its evidence no longer resolves: what
   happened, and where to go instead. Present only in that case, and it is the top block when it is,
   because everything below it would otherwise read as current. Closes the Flow 2
   citation-cannot-resolve guard, which until now had no block anywhere.
4. **Theme header:** label in the customer's language, the confidence indicator (n=X plus the
   low-signal badge), recency, sources, and the single primary action Add to brief.
5. **Evidence denominator, broken down by source:** `42 items from 2 sources: Intercom 30, CSV 12`.
   Diversity is legible before any click, and a theme carried by one loud channel looks different from
   a theme several channels agree on.
6. **Summary with an inline citation on every claim.** Each sentence carries a chip naming the source
   and the count behind it (`Intercom +3`), and the chip is a real link into the items below. An
   uncited summary is exactly the black-box output the primary persona refuses to act on, so this is
   the block the differentiator rests on.
7. **Why these items cluster,** one line: what the items have in common, and what was deliberately
   left out. Not an essay. Without it the clustering is an assertion.
8. **Evidence list controls:** group by source with counts, sort by recency. The question here is
   whether one channel is shouting or several agree, so grouping answers it directly.
9. **Evidence items list:** the canonical evidence snippet, one per item: verbatim excerpt, channel
   and date, and the citation number that ties it back to the claim above. Each drills to 5.0.
10. **Load more, with the remainder** (`Load 36 more items`). Without it the page claims 42 items and
    shows six, which quietly contradicts its own header.
11. **App footer** (0.2, minimal).

**What changed against the first Detail-layer pass:** blocks 3, 5, 6, 7, 8 and 10 are new. Blocks 6
and 7 change the character of the page: the summary stops being something the reader has to believe.
Block 10 is a defect fix, not an addition. Traced in `ia/docs/blocks.md`, Type 5, rows 4, 5, 6, 8, 10
and 13.

## States (nodes)

- **4.0 default:** a strong theme with a full evidence list.
- **4.1 low-signal / thin-evidence variant:** **carries every block 4.0 carries and drops none.** A
  thin theme is labelled, not thinned further: the confidence indicator shows the low-signal badge, a
  caution line explains the evidence is thin, and the items are still fully drillable (transparency,
  not suppression). Two things are specific to this state. The denominator split (block 5) is the
  finding, not a detail: all six items arrived through one channel, and the empty second group is
  rendered with its zero rather than omitted, so the gap is visible instead of assumed. And the list
  closes with a stated end instead of a Load more, because an unterminated list reads as truncated
  and "all of it is here" is the point on a thin theme.
- **Loading:** what the ranked list already knows is drawn as itself, not as a grey bar: the name, the
  confidence indicator, the rank, the denominator. Only the summary and the evidence groups are
  skeletons. The head action stays live, because adding a theme to a brief does not wait on its
  evidence list.
- **Error:** the same known facts stay drawn, so the reader can see which theme failed, and the state
  says the count is unverified until the items open. The head action is absent here, unlike on
  loading: putting a theme into a shared document while its evidence is unreadable would publish a
  claim nobody can check. A single unresolvable item is handled by 5.1, not here.

## Components

- **Navigation** (0.1), **Footer** (0.2, app minimal).
- **Confidence indicator** and **Theme card** header treatment (canonical, owned by 2.0), referenced here.
- **OWNS (canonical):** the evidence snippet. See below.

## Filters / facets

**Group by source with counts, plus sort by recency, are day-one** (block 8, from `blocks.md` Type 5
row 8): the question the PM asks on this page is whether one channel is shouting or several agree, and
grouping answers it directly. Anything richer (free-text filtering inside a theme, filtering by
segment) stays fast-follow [?].

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
- **The citation number is a two-way tie.** It is not decoration on the snippet: the same number is what the summary chip in block 6 points at, so a reader can go claim to item and item back to claim. A snippet whose number appears in no claim is an orphan and means the summary and the evidence have drifted apart.
- **PII:** author references are scrubbed by default (sitemap.md, E1); the snippet shows the scrubbed form.
- **Behavior:** the snippet links to 5.0 Evidence source (the full item in context). If the source cannot resolve, 5.1 handles it (redacted / unavailable).
- **Referenced by:** 5.0 Evidence source (the expanded form), 6.4 Shared brief (the public quote). Change the snippet here, then walk the references.

## Mockup notes (ia/theme.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the strong theme (4.0) with its evidence snippets and inline citations, and the low-signal variant (4.1) with the badge and the thin-evidence caution. Color, brand, real data arrive at the concept stage (06).
