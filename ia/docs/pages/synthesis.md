# IA Node 2.0 - Synthesis view (app home) - Sift

*Page. Group: pages. The tap-0 main-job surface, and the owner of the canonical confidence indicator, theme card, and filter control. Source of truth for ia/synthesis.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 5.*
*No em dash. Analysis is English; product UI labels are English (US / EU market).*

## Page

- **Page:** Synthesis view · **Type:** page · **Node:** 2.0 · **Index:** noindex (private app)
- **Purpose:** the ranked, trustable picture of what customers need most, so the PM opens Sift and sees the decision surface first.
- **Serves:** Main, J2, J3, E1.
- **URL / slug:** `/app` (default landing after login) · **Breadcrumbs:** none (app home).

## Content blocks (priority, mobile-first)

*Composition from `ia/docs/blocks.md`, Type 2 (ranked decision list). Every block below carries a
trace there. Block order is mobile-first; density is reasoned from desktop, because that is where the
PM does the work.*

1. **App header** (Navigation 0.1, logged-in variant; Synthesis active).
2. **Page head:** H1 plus one line that names the next move, not the page. At rest the single primary
   action **Build brief** sits in this row (right on desktop, under the line on mobile).
3. **Scope line:** the result count and its denominator, `12 themes from 3,750 feedback items across
   2 sources`. This is the honesty anchor for everything below it: a ranking with no denominator
   cannot be checked. It restates itself when a filter narrows the list.
4. **Filter and sort bar** (canonical filter / sort control): facets carry counts, an active facet is
   visibly on, and a clear-all appears only while something is filtered. Sort names its default.
5. **Ranked theme list:** the canonical theme card, one per theme, in signal-rank order. The card
   carries an explicit rank number, the theme label, one representative verbatim quote, the sources
   that fed it plus recency, the confidence indicator, a select control, and a drill affordance.
6. **Load more, with the remaining count** (`Load 12 more`). The denominator stays visible as the
   list grows.
7. **Selection action bar:** appears only when at least one theme is selected, and carries the count
   selected, Set priority, and Build brief (to 6.1). While it is up, the head action in block 2 is
   hidden, so the screen never shows two primary actions. On mobile it sits above the bottom tabs.
8. **App footer** (0.2, minimal).

**What changed against the first Detail-layer pass (and why):** blocks 3, 6 and the counts in 4 are
new; blocks 5 and 7 changed shape. The first pass listed header, filter, list, actions, footer, which
is the median composition of any list page and is what made the wireframe thin. The two blocks that
change the character of the screen are the scope line (block 3) and the representative quote on the
card (block 5): together they turn a list of labels into evidence at a glance with a stated
denominator. Traced in `ia/docs/blocks.md` rows 4, 5, 6, 8, 10, 17, 19.

## States (each a node in the map)

Every state keeps blocks 1 and 2 (app header, screen head) and keeps block 3, the scope line, in
the form that state can honestly fill. The screen is always identifiable, and the denominator is
always stated, including when it is zero. What the states drop is the filter toolbar: its facets
carry counts (block 4), and a control that cannot state its counts is a control that lies.

- **Populated** (default): the ranked theme list.
- **2.1 First-run empty (no sources):** scope line at zero ("0 themes from 0 feedback items"), a
  three-step activation strip naming what will happen (connect, scrub and cluster, ranked themes),
  one explanation and one CTA, Connect a source (to 3.0, which carries the available sources as its own group). This is the activation fork (Flow 1). The
  step strip answers the As-Is barrier that ingestion is a black box, before the user commits to it.
- **2.2 Loading / synthesizing:** the scope line states what is already known (the item count and the
  source count) and what is not (the themes). The step strip carries the phase, ingest already
  ticked. Skeleton rows are shaped like the real theme card, label, quote, provenance, so the
  skeleton is a promise the screen keeps (Flow 0, Flow 1).
- **2.3 Error:** synthesis failed; retry (to 2.2) or go to Sources (3.0). Never a dead-end. The scope
  line states what is still true and links to it: the last complete synthesis did not disappear
  because this run failed, and design principle 3 makes that a thing to say rather than to imply.

## Components

- **Navigation** (0.1, logged-in). **Footer** (0.2, app minimal).
- **OWNS (canonical, defined here, referenced elsewhere):** Confidence indicator, Theme card, Filter / sort control. See the canonical definitions below.

## Filters / facets

The canonical filter control: filter by source (CSV / Intercom), recency (last 7 / 30 / 90 days), and confidence (all / strong only). Sort by signal rank (default), volume (n), or recency. This is a page-level control, not a facet system; it is reused, lightly, on 3.0 Sources.

## Primary CTA

Open a theme (drill to 4.0), or Build brief (to 6.1) after selecting themes.

## Adaptive

- **Mobile (360px):** the filter bar collapses to a single Filter button opening a sheet, and the
  button carries the active-facet count so the narrowing stays visible. The scope line stays, because
  it is the honesty anchor and it is one short line. Theme cards stack full width; the rank number and
  the confidence indicator stay on the card; the representative quote clamps to two lines. The
  selection bar rises above the bottom tabs. Bottom tabs carry the primary destinations.
- **Desktop:** the filter row is inline with its counts and the clear-all; the scope line sits between
  the head and the row. Cards stay a single dense column (not a grid: the eye compares ranks down one
  axis), with the quote on its own line and provenance and confidence aligned right. The head keeps
  the Build brief action at rest.

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

- **Fields, in reading order:** select control, **rank number** (explicit, so the ranking claim is
  quotable and re-checkable), theme label in the customer's language, **one representative verbatim
  quote** from the cluster, provenance line (which sources fed it, plus the latest feedback date),
  the confidence indicator (`n=X` plus the low-signal badge), and a drill affordance.
- **Why the quote is on the card:** the trust chain starts before the click. Competitors put the body
  of a single post there; a theme is not a post, so ours carries a quote that stands for the cluster.
  This is the block that separates a list of labels from evidence at a glance
  (`ia/docs/blocks.md`, Type 2, row 10).
- **Provenance is which sources, not who:** thin-but-broad and loud-but-narrow must look different at
  a glance. A theme with only one source says so rather than leaving the field blank.
- **Behavior:** the whole card links to 4.0 Theme detail; the select control adds it to a brief.
- **Referenced by:** 6.1 (selection list), 6.4 (shared brief).

### Filter / sort control

- **Filters:** source, recency, confidence. Each facet **carries its count** (`Source: all (3,750)`,
  `Intercom (2,910)`), because a filter that hides how much it excludes is dishonest, and the source
  counts double as a coverage signal no competitor shows.
- **Active state is visible:** a facet that is on reads its value rather than "all", and a clear-all
  appears beside the row only while something is filtered. Without this, a narrowed list reads as the
  whole truth (`ia/docs/blocks.md`, Type 2, row 5).
- **Sort:** signal rank (default, and the default is named on the control), volume, recency. The sort
  label says what it ranks by; a vague word like "trending" would hide its formula.
- **Behavior:** filters narrow the list in place and the scope line restates itself; an empty filtered
  result shows a recover-by-loosening message, not a dead-end.
- **Referenced by:** 3.0 Sources (a lighter variant, status and type filters).

## Mockup notes (ia/synthesis.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the populated list with theme cards and confidence indicators, the filter bar, and the three states (empty, loading, error). Color, brand, and real data arrive later.
