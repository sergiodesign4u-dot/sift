# Component inventory - Sift

*Stage 07 Step 2. The component list of the WHOLE product, read out of `wireframes/*.html` and
`ia/docs/sitemap.md`, not invented and not narrowed to the screens we are about to paint. Stage 08
reads three things from here: the **level** column (order of the CSS split, order of `@import`,
stand groups, assembly rounds), the **variants** column (the axis matrix on each component page),
and the **control without a family** list (the brief for the rollout).*

*Internal document, English. No em dash anywhere in this file.*

---

## How this was read

**Corpus.** 37 product screens (`wireframes/*.html` minus `overview.html`, which is the hub and is
prototype chrome, not product) plus the global shell, which is not in the markup at all: the app
header, the bottom tabs and the app footer are injected by `wireframes/_nav.js` into the 27 screens
that carry a `data-wf` mount point. Reading the HTML alone would have missed all three, and they are
the most-used organisms in the product.

**Method, and what each half can prove.**

1. **Mechanical class census over the markup.** Every `class="..."` in all 37 files, with the
   `<style>` blocks stripped so a CSS selector is never counted as a usage. 248 distinct classes,
   124 of them on two or more screens. This half is exhaustive and exact, and it is what the
   "component = two or more occurrences" threshold is measured against.
2. **Control census in a browser at two viewports** (360px and 1440px), `synthesis.html` as the
   carrier, because it is the only screen holding all four viewport-conditional controls. A control
   is `a` / `button` / `input` / `select` / `textarea` / `label` / `[role=button]` / `[onclick]`, or
   an element introducing `cursor: pointer` that its parent does not have. Computed style, not
   declared rule.

**Where the second half was narrowed, and why that is safe.** The reason the course walks every
screen in both widths is that some controls exist in one width only. In this product that set is
closed and readable from the stylesheet: `wireframes/_wf.css` puts exactly four classes behind a
container query, `.wf-navtabs` / `.wf-tab` and `.wf-filter-full` (canvas 600px and up) against
`.wf-bottomtabs` / `.wf-btab` and `.wf-filter-compact` (below 600px). All four live on the etalon,
so both widths were walked there rather than 37 times. Everything else in the product renders
identically at both widths, which the container-query block proves by omission. This is a narrowing
of the walk, stated out loud, not a narrowing of the list: the class census behind it covers 100%
of the product.

**The `cursor: pointer` clause found nothing extra.** Every declaration of `cursor: pointer` in the
grey layer sits on an element that is already a `button`, an `a` or an `input`. There are no div
controls in this product.

---

## Level 1 - Atoms

*Contains no other kit component.*

| Component | Level | Variants (axes x values, occurrences / screens) | Screens | States | Photo |
|---|:--:|---|---|---|:--:|
| **Button** | 1 | **Emphasis:** fill 25 occ / 22 scr (`wf-btn`) · outline 30 occ / 21 scr (`wf-btn--ghost`) · bare 3 occ / 3 scr (`wf-clear`, `wf-loadmore`). **Content:** label only 55 occ · icon only 13 occ (`wf-remove` 7, `wf-theme-drill` 6). **Size:** medium 58 occ (44px, 12px) · large 11 occ (13px, marketing CTA rows on 0.0 only). Width is not an axis: full-width `wf-auth-btn` and the mobile head action are the same button. | 30 screens | rest, hover, focus, disabled `[?]` (no disabled button exists in the grey layer) | No |
| **Text input** | 1 | **Type:** text 2 · email 4 · password 4 · title-inline 2 (`wf-titleinput`, borderless with a dashed underline). All 44px min-height. | 1.0, 1.1, 1.2, 3.2, 6.1, 6.2, 7.0, 7.1 | rest, focus, error (`wf-notice` beside the field on 3.2) | No |
| **Textarea** | 1 | one form, `resize: vertical` | 6.1, 6.2 | rest, focus | No |
| **Select** | 1 | one form. Present once, in the CSV column mapping | 3.2 | rest, focus | No |
| **Checkbox** | 1 | one form, 24px, native with `accent-color` | 2.0, 7.2 | unchecked, checked | No |
| **Field label** | 1 | **Content:** label only 10 occ · label plus a trailing link 2 occ (`wf-label-row` with "Forgot?") · visually hidden 2 occ (`wf-vh`) | 1.0, 1.1, 1.2, 3.2, 6.1, 6.2 | rest | No |
| **Filter chip** | 1 | **State:** off 8 occ / 5 scr · on 4 occ / 3 scr (`is-on`, reads its value instead of "all"). **Content:** label plus count 9 occ (`wf-chip-count`) · label only 3 occ. Pill radius 22px, 44px tall | 2.0, 3.0, 4.0, 5.0, 6.0 | off, on | No |
| **Confidence indicator** | 1 | **Content:** count only 6 occ · count plus low-signal badge 3 occ. Canonical, owner 2.0. Not colour-only: the count and the badge word carry the meaning | 9 screens (2.0, 4.0, 4.1, 6.1, 6.2, 6.4, 0.0) | strong, low signal | No |
| **Low-signal badge** | 1 | one form, uppercase micro tag | 4.1, 6.2, 6.4 | present or absent | No |
| **Citation marker** | 1 | **Behaviour:** static index 6 occ (`wf-cite`, inside the public document) · linked chip 6 occ (`wf-citechip`, resolves into the evidence list on 4.0) | 4.0, 4.1, 5.0, 5.1, 6.4 | rest, hover (linked only) | No |
| **Status tag** | 1 | **Merged from three classes with identical anatomy** (`src-status`, `brief-status`, `wf-draft`): a micro uppercase outlined tag carrying one word of state. **Value:** source status 6 occ · brief status 3 occ · draft marker 2 occ. **Emphasis:** normal · alert 1 occ (`is-alert`, dashed border, so a failed source cannot read as a healthy one) | 3.0, 3.4, 3.5, 3.6, 6.0, 6.1, 6.2 | normal, alert | No |
| **Rank number** | 1 | one form, tabular numerals | 2.0, 6.1, 6.2, 6.4 | rest | No |
| **Avatar** | 1 | **Size:** 26px in the app bar 27 occ · 40px on the account identity block 1 occ. The small one reads at 26px and is hit at 44px through a transparent `::after` overlay | 27 screens plus 7.0 | rest | **No, by decision** |
| **Icon slot** | 1 | **Size / shape:** 40px rounded square in a state block 8 occ (`wf-state-ic`) · 34px source row 2 occ (`src-ic`) · 28px source card 3 occ (`src-card-ic`) · 20px bottom tab 27 occ (`.ico`) · 17px numbered circle in a phase strip 6 occ (`wf-step-n`) · 26px numbered circle on the home steps 4 occ (`mk-step-n`) | 34 screens | rest, current (numbered circle only) | No |
| **Scope line** | 1 | one form: prose in secondary ink with its numbers bold and tabular. Owner 2.0, referenced by 3.0 and 6.1 | 13 screens | populated, zero, filtered, stale (3.5) | No |
| **Skeleton bar** | 1 | **Width:** a 55% · b 32% · c 78% | 2.2, 4.2 | animating | No |
| **Inline text link** | 1 | The family for the 88 unclassed `<a>` elements. **Context:** app footer 18 · legal body 15 · legal TOC 15 · breadcrumb 11 · legal related 10 · marketing footer 5 · marketing trust 4 · auth switch 3 · legal crumb 3 · provenance list 2 · account section link 1 · scope line 1 | 18 screens | rest, hover | No |
| **Drag handle** | 1 | one form, `cursor: grab` | 6.1, 6.2 | rest, grab | No |
| **List row link** | 1 | one form (`wf-card`): a full-width row that is itself the link, with a bottom rule and a surface hover. Declared in `_wf.css`, used on 7.0 today, and the rollout will need it | 7.0 | rest, hover | No |

---

## Level 2 - Molecules

*Contains atoms, contains no molecules.*

| Component | Level | Variants (axes x values, occurrences / screens) | Screens | States | Photo |
|---|:--:|---|---|---|:--:|
| **Theme card (ranked row)** | 2 | one form. Zones in reading order: checkbox, rank, label, representative quote, provenance, confidence, drill. At 360 it becomes a grid and the confidence pill takes its own row; reading order is unchanged. **Declared exception, see Findings 1:** it stands on one screen, and it enters the kit anyway | 2.0 | rest, hover, selected, low-signal, clamped quote (360) | No |
| **Evidence snippet** | 2 | **Content:** quote plus meta 12 occ · quote plus meta plus citation index. Canonical, owner 4.0 | 4.0, 4.1 | rest, hover, redacted (5.1) | No |
| **Source row** | 2 | **Emphasis:** healthy 5 occ · failed 1 occ (alert status, dashed, plus a row-level alert line and its own retry). **Content:** with stats 6 occ · with row actions 1 occ | 3.0, 3.5, 3.6 | connected, syncing, failed | No |
| **Source card (available)** | 2 | **State:** connectable 6 occ · not yet available 3 occ (`src-card-note` says so rather than hiding it) | 3.0, 3.4, 3.5 | available, unavailable | No |
| **Saved brief row** | 2 | **Value:** shared 2 occ · draft 1 occ. Zones: title, meta, status, actions. A managed object, deliberately not a variant of the composer row | 6.0 | shared, draft | No |
| **Composer brief row** | 2 | one form. Zones: drag handle, label, meta, remove. Different zones from the theme card and from the saved row, so a third component and not a variant | 6.1, 6.2 | rest, hover, dragging `[?]` | No |
| **Account row** | 2 | **Content:** text only 1 occ · with a checkbox 1 occ (`acct-check`) | 7.1, 7.2 | rest, checked | No |
| **Form field** | 2 | label plus input, optional trailing link, optional error | 1.0, 1.1, 1.2, 3.2, 6.1 | rest, focus, error | No |
| **Notice band** | 2 | **Placement:** inside a padded main 4 occ · in the screen frame with its own gutter 3 occ (`wf-app > .wf-notice`) | 3.5, 4.1, 6.2, 3.2, 7.3, 5.1, 2.3 | information, warning | No |
| **Screen head** | 2 | **Content:** H1 plus sub 15 occ · plus the one primary action 5 occ (`wf-head-action`, hidden while the selection bar is up) · plus the scope line 13 occ | 15 screens | rest, action hidden | No |
| **Toolbar (filter and sort)** | 2 | **Viewport:** full row with chips, clear and sort (canvas 600px and up) · compact single Filter button carrying the active count (below 600px). Canonical, owner 2.0, lighter variant on 3.0 | 2.0, 3.0, 4.0, 5.0, 6.0, 6.1 | at rest, filtered (clear appears) | No |
| **Selection bar** | 2 | **Trigger:** appears on `:has(.wf-check:checked)` 2 occ · always present on the composer 1 occ (`wf-selbar--static`, the artifact IS the selection) | 2.0, 6.1, 6.2 | hidden, present | No |
| **Action bar** | 2 | **Alignment:** right-aligned 3 occ · with a note pushed left 1 occ (`wf-actionbar-note`) | 3.2, 3.3, 3.6, 6.1 | rest | No |
| **Phase strip** | 2 | **Step state:** upcoming · current (`is-current`) · done. Three phases, named before the user commits, because the As-Is barrier is that ingestion is a black box | 2.1, 2.2, 3.2, 3.3, 6.1, 6.2 | per-step: upcoming, current, done | No |
| **Breadcrumb** | 2 | one form | 9 screens | rest | No |
| **Skeleton card** | 2 | **Shape:** generic rows 1 occ · shaped like the real theme card 1 occ, so the wait promises what arrives | 2.2, 4.2 | animating | No |
| **Legal TOC** | 2 | one form, wrapping link list in a bordered box | 9.0, 9.1, 9.2 | rest | No |
| **Auth card** | 2 | **Content:** form card 3 occ · value card 3 occ (`wf-auth-value`) · sent confirmation 1 occ (`wf-auth-sent`) | 1.0, 1.1, 1.2 | rest, submitted | No |
| **Marketing tier card** | 2 | **Value:** three tiers, one per plan | 0.0 | rest | No |
| **Marketing step card** | 2 | numbered circle, title, description, and a confidence indicator as the proof | 0.0 | rest | No |

---

## Level 3 - Organisms

*Contains molecules, or is a screen shell. Ordered so that organisms containing no other organism
come first, then the ones that do. That order is the `@import` order Stage 08 inherits.*

| Component | Level | Variants (axes x values, occurrences / screens) | Screens | States | Photo |
|---|:--:|---|---|---|:--:|
| **App header** | 3 | **Viewport:** with text tabs (600px and up) · brand and avatar only (below 600px). Canonical global 0.1. Injected from `_nav.js`, never typed into a page | 27 screens | per tab: rest, hover, active | No |
| **Bottom tabs** | 3 | one form, four destinations (Synthesis, Sources, Briefs, Account). Below 600px only. Canonical global 0.1 | 27 screens | per tab: rest, active | No |
| **App footer** | 3 | one form, one line. Canonical global 0.2 | 27 screens | rest | No |
| **Public bar** | 3 | **Content:** brand plus read-only tag 1 occ · brand plus product links 9 occ (marketing and legal) | 10 screens | rest | No |
| **Empty / error state block** | 3 | **Placement:** takes the canvas, centred 6 occ (`wf-state`) · sits inline as an empty first group in a populated list, left aligned 2 occ (`wf-state--inline`, screens 3.4 and 6.5). **Content:** always icon, title, one explanation, and at least one exit | 8 screens | empty, error, first run | No |
| **Form** | 3 | **Purpose:** auth 3 occ · connect 2 occ · settings 2 occ · composer 2 occ | 9 screens | rest, submitting `[?]`, error | No |
| **Dialog** | 3 | **Content:** link row plus actions 1 occ (6.3) · confirm with a destructive action held apart 1 occ (`wf-action-apart`, 3.6) | 6.3, 3.6 | rest, generating (6.3 loading) | No |
| **Legal document** | 3 | one form: crumb, H1, meta, TOC, prose, related | 9.0, 9.1, 9.2 | rest | No |
| **Account shell** | 3 | one form: side nav plus panel; the nav collapses above the panel below 600px | 7.0, 7.1, 7.2, 7.3 | per nav item: rest, current | No |
| **Public document (shared brief)** | 3 | one form: eyebrow, H1, lede, meta, key takeaways, rationale, themes, citations, sources, method | 6.4 | rest | No |
| **Marketing page shell** | 3 | one form: hero, steps, trust, pricing, footer link block | 0.0 | rest | **See Findings 4** |

---

## One-off (`Разове`) - not taken into the kit

Single occurrence, no form-control exception, no canonical status.

| Block | Where | Why it stays out |
|---|---|---|
| Usage meter (`acct-meter`) | 7.3 Plan | One screen, and the screen argues that a fraction beats a bar. If a second meter ever appears it comes back as a component |
| CSV column mapping grid (`src-map`) | 3.2 | One screen, and its four-column-to-two-column reflow is specific to mapping |
| File drop zone (`src-drop`) | 3.2 | One screen |
| CSV review summary (`src-review`) | 3.2 | One screen |
| OAuth scope list (`src-scopes`) | 3.3 | One screen |
| Disconnect confirm body (`src-confirm`) | 3.6 | One screen. The dialog around it IS a component; this is its content |
| Link row (`wf-linkrow`) | 6.3 | One screen. Input plus copy button, and it is the only place a value is copied |
| Reason line (`wf-reason`) | 4.0 | One screen. Explains why items cluster |
| Raw quote (`wf-raw-quote`) | 5.0 | One screen. The expanded verbatim at document scale |
| Provenance list (`wf-prov-list`) | 5.0, 5.1 | Two screens, but it is the same screen in two states, so one place |
| Marketing trust list (`mk-trust`) | 0.0 | One screen |
| Marketing footer block (`mk-footer`) | 0.0 | One screen. The app footer is the component; this is the marketing edition |
| List-closing note (`wf-listnote`) | 4.1 | One screen. Closes a list that has no "load more" |

---

## Cross-check 1: one job, several forms

*The same job carried by different classes or different emphases. This is not a variant, it is an
inconsistency, and it costs the product's coherence more than any colour decision. Every row here is
closed in the kit at Step 3, not carried into it.*

| Job | Forms found | Verdict |
|---|---|---|
| Secondary action, outlined | `wf-btn--ghost` (30 occ) and `src-manage` (4 occ). `src-manage` re-declares 44px min-height, a 1px `--w-line-2` border, 5px radius and 12px type, and differs from the ghost button in one property: horizontal padding 14px against 16px | **Fold `src-manage` into the ghost button.** It is a duplicate declaration, not a variant. The 2px of padding is not a decision anybody made |
| Primary action, full width | `wf-btn` plus `wf-auth-btn`, where the modifier resets padding from `0 16px` to `12px 14px` | **Fold to the medium button.** Width is a layout decision and is not on the size axis; the padding reset is drift and changes nothing visible except the height |
| Primary and secondary action on the marketing page | `.mk-cta .wf-btn` at 13px / `11px 20px` and `.mk-pricing-cta .wf-btn` at 13px / `10px 18px`, both contextual overrides written on the page rather than declared as variants | **Declare one large size** (13px) and point both rows at it. Two overrides one pixel apart is the exact shape the census exists to catch: on the screen each looks deliberate, in the table they are one variant written twice |
| Load more | `wf-loadmore` declares its own 44px, font family, background and cursor rather than composing with the bare button | **Fold into the bare button**, size large. The bottom border belongs to the list, not to the control |

**Result: the Button family carries three emphases and two sizes, six declared forms.** Before the
census it carried two declared forms and four undeclared overrides on top of them.

## Cross-check 2: control without a family

*A control that exists in the grey product and belongs to no family. Each one either gets a family
or moves to One-off with a reason. Stage 08 reads this list before the rollout.*

| Control | Occurrences | Resolution |
|---|---|---|
| Unclassed `<a>` in prose, footers, TOCs and breadcrumbs | 88 occ / 18 scr | **Given a family: Inline text link** (level 1). It was the largest single group of controls in the product and had no declaration anywhere, which is why the colour layer has no rule for it either |
| `wf-theme-main` | 6 occ / 1 scr | Family: the block link zone of the Theme card. Not a standalone control |
| `wf-card` | 3 occ / 1 scr | Family: generic list row link. Declared in `_wf.css`, used on 7.0 only. **Kept as an atom-level link row**, because the rollout will need it |
| `brief-title` | 2 occ / 1 scr | Family: the title zone of the Saved brief row, with its hit area widened by `::after` |
| `acct-nav-home` and `acct-nav-link` | 13 occ / 4 scr | Family: the Account shell nav |
| `wf-auth-forgot` | 1 occ / 1 scr | Family: Field label, content variant "label plus trailing link" |
| `label.acct-row` | 1 occ / 1 scr | Family: Account row, content variant "with a checkbox". The whole row is the label, which is correct and worth keeping |

**Nothing is left unresolved.** Every control in the grey product now belongs to a declared family.

---

## Findings

**1. The theme card stands on one screen, and it enters the kit anyway.** The rule is two or more
occurrences. `wf-theme` is on 2.0 alone. It is taken because the threshold exists to keep one-offs
out of the system, and this is not a one-off: it is the etalon's signature row, the owner of the
canonical confidence indicator layout, and the component the whole visual language was derived from
at Stage 06. Called out rather than smuggled in.

**2. IA says the theme card renders on 6.1 and 6.4; the wireframes render different components
there.** `wireframes/docs/screens.md` lists "Theme card. Owner 2.0. Rendered on 6.1 selection, 6.4",
and `ia/docs/pages/synthesis.md` says the same. In the built product 6.1 carries the Composer brief
row (drag handle and remove, no quote) and 6.4 carries a document section. `_wf.css` argues the case
in a comment: the zones differ, so they are different components, not variants. The wireframes are
right and the IA line is stale. **This is an upstream text fix in `ia/docs/pages/synthesis.md` and
`wireframes/docs/screens.md`, not a component decision**, and it is left for your call because it
edits a frozen folder's documentation.

**3. The mobile bottom tab is 29px tall, and the cause is a one-word CSS bug.** Measured in the
browser at 360px: `.wf-btab` renders at 29.4px against a contract that claims a 44px floor with
three named exceptions, and the bottom tab is not one of them. The cause is exact:
`.wf-btab .ico` is a `<span>` with `width: 20px; height: 20px` and no `display` change, so as an
inline box it ignores both and renders at zero height. The primary mobile navigation of the whole
product has been 15px short of the floor since it was built, on 27 screens, and no single-viewport
read could have found it. **`wireframes/` is frozen, so the grey artifact keeps the defect on
record; the kit must not inherit it.** The colour layer already puts a real `<svg>` with
`display: block` inside `.btab .ico`, so it is likely already correct in colour, and that is
verified at Step 5 rather than assumed.

**4. The product needs no photography, and the one place that wanted it has no slot.** There is not
a single `<img>`, `<figure>`, `<picture>` or `background-image` in the entire grey product, and the
Photo column above is "No" on every row. `design/concept/docs/concept.md` says app surfaces carry no
decorative photography by decision (the evidence is text; a face would be a lie because feedback
authors are PII-scrubbed) and that photography appears in exactly one place, the marketing Home hero
on 0.0. **But the wireframe of 0.0 has no image block.** So Step 4 has nothing to generate unless
node 0.0 gains a hero image block, and adding one in a colour copy would be a structural change,
which the contract forbids. Two honest options, and the decision is yours:
(a) go upstream, add the hero image block to the IA node 0.0 and to `wireframes/index.html`, then
generate one image; (b) accept that this product carries no photography at all, record it, and let
Step 4 produce only `design/visuals/README.md` stating the decision and the one prompt that would be
used if a hero is ever added. The Avatar row is a related and smaller case: it is a monochrome
placeholder disc today, and it stays that way by the same rule.

**5. Level 3 has no fourth-level candidate.** The deepest nesting in the product is Dialog holding a
Form, and Form is itself level 3. Per the ceiling rule both stay at level 3, and the nesting drives
order inside the level rather than a fourth number. Nothing in the product needed splitting into two
rows for being in two levels at once.

---

## Totals

- **50 components** enter the kit: 19 atoms, 20 molecules, 11 organisms.
- **13 blocks** stay in One-off.
- **6 form-control primitives** are in by the stated exception rather than by the threshold: text
  input, textarea, select, checkbox, field label, form. Radio and toggle do not exist in this
  product and are not invented.
- **Four contextual overrides of the button** were found and folded, leaving six declared forms.
- **88 unclassed links** were given a family that the product never had.

---

## Step 3 close-out: what the kit did with this table

*Added when `kit.css` was built, so the table and the file cannot drift apart. The stand that
makes both visible is `design/kit/kit.html`.*

**The values moved, they were not re-derived.** `design/_theme.css` became `design/kit/kit.css`
by `git mv`, `:root` byte for byte, every origin comment in place. `_theme.css` no longer exists
on disk, which is the check that the move was a move and not a copy: two files would have meant
two sources of the same values.

**Class names lost the `wf-` prefix and kept everything else.** The colour layer had already
made that choice at Stage 06 (`.btn`, `.chip`, `.theme`), so the 35 screens that arrived here
joined the API that was already running rather than starting a second one.

**Cross-check 1 is closed, all four rows.**

| Job | Verdict at Step 2 | What the kit did |
|---|---|---|
| Secondary action, outlined | fold `src-manage` into the ghost button | `src-manage` is gone. The source row uses `.btn--ghost` |
| Primary action, full width | fold `wf-auth-btn` into the medium button | Width left the size axis and became the layout utility `.u-full` |
| Marketing primary and secondary | declare one large size | `.btn--lg`, and both marketing rows point at it |
| Load more | fold into the bare button | `.btn--bare`. The rule under it moved to the list, as `.list-foot` |
| (not in the table) "Clear filters" | was a fourth control shape | Folded into the Inline text link as `.link--action`: it is a text action, not a button |

**The Button family is now six declared forms and nothing else:** fill, outline and bare, each at
medium and at large, plus the icon-only content variant. No contextual override of a button
exists anywhere in `kit.css`.

**Nine values entered `:root` in a block marked PENDING, and none of them silently.** Six were
already in the file as literals written inside a class at Stage 06: one hairline appeared as
`#333c44` in one rule and `#3a444c` in four others, and `--gunmetal` was referenced by the
checkbox without ever having been declared. Two are new (`--red-wash`, `--red-edge`), built the
same way as the amber pair, because `--red` was declared at Stage 06 and used by no rule at all
while the product has failures that block. One is `--r-lg`, the frame radius, so the dialog is
the same material as the frame. The list is on the stand for the decision; nothing here changed
an existing value.

**Geometry is still written inside classes** (font sizes, paddings, the type scale). That is how
the file arrived and it is not fixed here: naming those values is the primitive and semantic
split, which is Stage 08. Said out loud so it reads as a decision and not an oversight.

**Finding 3 does not travel into the kit.** The mobile bottom tab measures 54px in the kit
against 29px in the grey layer, because the colour tab holds a real `svg` with `display: block`.
Verified in the browser at 360px rather than assumed.

**One defect found while building, and fixed.** The account shell's row layout was first written
as a container query, copying the grey contract. Nothing in the colour layer declares
`container-type`, so the rule would never have fired and four screens would have shipped as a
column at every width. The whole colour layer states its widths as media queries, and this one
now does too.

**Two kit defects the pixel comparison caught on the seed screens (Step 5, first move).** Both
were invisible in the file and obvious the moment the same screen was measured twice.

- **The Field label atom was called `.label` and collided with the colour-proof bar's own
  `.label`,** adding 6px to every one of the five seed screens. A flat kit shares one stylesheet
  with the chrome around it, so an atom name has to be specific enough to survive that. Renamed
  to `.field-label` and `.field-label-row`, which is the name that pairs with `.field` and
  `.field-err` anyway.
- **`.list-foot` was a block, and the bare button inside it is an inline-flex box,** so it sat on
  a line box whose descender space added a pixel under the list. `.list-foot` is now a flex
  container.

**Two components entered the kit at Step 5, each because a screen needed it and neither
invented ahead of time.** Both were added to `kit.css`, to the stand and to this table before
they were used on a screen, which is the rule that keeps the kit ahead of the screens rather
than behind them.

| Component | Level | Class | Screens | Why it was missing |
|---|:--:|---|---|---|
| **List group heading** | 1 | `.group-t` | 3.0, 3.4, 3.5, 4.0 | The Step 2 class census counted it inside its screens and never gave it a row. It names a group inside a flush list, and it stands on four |
| **Screen shell** | 3 | `.app`, and `.appframe` for a stand | 27 | Stage 06 built its two screens as framed exhibits on a stand, so the only shell in the colour layer had a border, a radius and a shadow. A screen that IS the page needs the same organism without them |

**What screen two of the sample, 3.2 Import a CSV, added to the kit.** The form screen, and the
only place in the product where a person types, chooses and confirms, so it is where the input,
the select, the checkbox, the phase strip, the notice and the action bar stand together at once.

| Added | What and why |
|---|---|
| `.group-t--section` | The same heading over a block rather than over a list, so it aligns with the block and not with the rows. Two forms of one atom, not two atoms. It is what the grey layer called `wf-evi-title`, on 3.2 and 4.0 |
| `.select` | A wrapper carrying the chevron. A select with its native chrome removed and nothing put back is a text field that happens to open a menu, and nobody can tell which one it is. Drawn from the placeholder's ink, so it costs no colour literal and no request, and it is on a wrapper because a select cannot carry a pseudo-element |
| `.step-n .ic` | A finished phase carries a mark instead of its number. The number is a position in a sequence, and once the step is behind you the position stops being the useful fact |
| `.src-drop`, `.src-map*`, `.src-review` | The three One-off blocks of 3.2, declared in `kit.css` because the kit is the only stylesheet a screen may use, and classified as one-off here so Stage 08 does not promote them. Classification and storage are different questions |
| 360 rules for both of the above | The mapping grid becomes two lines per row (column and field on one, the customer's own sample on its own) and the action bar puts its note on its own line with the two buttons sharing the next. Both are layout on a container's own children, not undeclared variants: no size, colour or weight is touched |

**Saturation watch.** Screen one added two components, screen two added one variant, one
affordance and three declared one-offs. Still adding, so the sample is not saturated yet.

**What screen three, 4.0 Theme detail with three states, added to the kit.** The screen the
product exists for: a claim, and under it every item the claim was made from.

| Added | What and why |
|---|---|
| `.head-meta` | The meta row of a detail head: confidence, recency, rank. Everything the ranked row already said, restated where the decision is actually made |
| `.summary` | The synthesis itself, at reading size in primary ink, because this paragraph IS the product's claim. The only accent in it sits on the citation chips, which is the one thing a sceptical reader clicks (A2) |
| `.group-t--inline` | The third and last declared form of the group heading: list, block, toolbar. Inside a toolbar the toolbar owns the rhythm and the heading adds none |
| `.reason`, `.listnote` | Two more one-off blocks, declared and classified. The first explains why the items are one theme and names what was left out, which is the half that makes it checkable; the second closes a list that has no "load more" |

**What screens four to seven added.** 6.1 Build brief with its thin-theme state, 6.0 Briefs with
its empty state, 6.3 Share-link with its generating state, 7.0 Account with 7.2 Data and privacy,
and 0.0 Home.

| Added | What and why |
|---|---|
| `.titlerow` | The name of an artifact typed where it will be read, with the marker beside it saying it has not been shared |
| `.block` | A block inside a main that otherwise holds rows: a rule above it rather than a card around it, because a card would claim it is a different kind of thing |
| `.selbar--static` | The declared trigger variant of the selection bar. On the composer it is always present: nothing is being selected, the artifact IS the selection |
| `.acct-card-t`, `.acct-card-d`, `.acct-seclink` | The account hub's row-link contents and the one line pointing out of the settings into the document that explains them |
| `.public-main--wide` | The public document at marketing measure. A shared brief is prose at 720px; a landing page carries rows of cards |
| `.linkrow`, `.mk-trust*`, `.mk-footer*` | Three more one-off blocks, declared and classified |
| `.drag .ic` | **A defect, found in the browser and not in the file.** An `svg` with no width is 300x150 by specification, so the drag handle took 300px of a 316px row and pushed the whole composer off a 360 screen. Every other icon slot in the kit sized its own `.ic`; this one was the gap. Afterwards every icon in the product was measured: none renders over 40px |

**Saturation.** Screen four added three, screens five to seven added one each plus one-offs, and
screen seven (Home) added one measure. The curve is flattening but it never reached zero, which
is what the rule asks to watch: the sample is done because it has covered the inventory, not
because the kit stopped growing.

---

## Step 6 close-out: the critique, and the totals

Three instruments, independent, deduped afterwards. The browser and the scripted audit own what
only renders; Codex (read-only) owns what only reading catches. The full log with a "found by"
column is on `design/overview.html`.

**Nine findings fixed, one withdrawn on verification.** The withdrawn one: Codex reported six
product classes declared and used by no screen (`auth-value`, the five `legal-*`). They are the
auth and legal screens, which are in this inventory and not in the sample. The kit is built for
the WHOLE product by the rule of this stage, so a class ahead of its screen is the intended
state, and a kit that only covered the painted screens is exactly what this inventory exists to
prevent. Kept, with the reason recorded here so the finding does not come back.

**The three defects worth remembering, because none was visible in the file:**

1. An `svg` with no width is 300x150 by specification. The drag handle took 300px of a 316px row
   and pushed the composer off a 360 screen. Every other icon slot in the kit sized its own icon.
2. A flat kit shares one stylesheet with the chrome around it, so `.label` as an atom name
   collided with the proof bar's `.label` and added 6px to five screens.
3. An inline-flex button in a block parent sits on a line box, and the line box's descender space
   added a pixel under the list.

## Final totals

- **50 components** entered the kit from the census, and **13 more classes** were added while the
  sample was assembled: 6 components and variants (`group-t` with three forms, `app`, `head-meta`,
  `summary`, `titlerow`, `block`, `selbar--static`, `select`, `input--mono`, `input--dense`,
  `field-label`, `acct-card-*`, `public-main--wide`), and **7 declared one-off blocks**.
- **23 pages in colour** across 10 nodes: the 2 seeded at Stage 06 and the 7 screens of the sample
  with their states. **Every one carries zero inline styles and zero style blocks**, measured in
  the browser.
- **Contrast:** no text on any screen falls below AA, measured against its composited background.
- **Targets:** no control under the 44px floor outside the three named exceptions (the 24px
  checkbox, an inline link in running text, the citation chip).
- **Coverage:** all three levels, both heaviest layouts, a form, a list, a document, an empty
  state, an error state and a loading state. The rest of the product stays grey and the map on
  `design/overview.html` says so.
