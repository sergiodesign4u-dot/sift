# Responsive - Sift

*Stage 10. How the one layout of the product breathes with width: what it did before this stage
(the census), what every screen should get from a wider window (the audit), who does the adapting
(the component register), and the tokens that carry it. Visible on `design/kit/responsive.html`.
Internal document, English. No em dash anywhere in this file.*

*Census line numbers are as of commit `4536c96`, the close of Stage 09.*

There is no mobile, tablet and desktop version of Sift. There is one layout with ONE named change,
and it has to look intended at 412, 900 and 1440 although nobody drew those widths.

## The ladder: three ways, read top down

| Order | Way | Tools | Take it when |
|---|---|---|---|
| 1 | Fluid | `clamp()`, `%`, `repeat(auto-fit, minmax())`, `flex-wrap` | always first: nothing to switch, works at widths nobody planned |
| 2 | Container | `max-width` in `rem`, a measure in `ch`, `@container` for a component | the content must stop growing (a page, a line of text), or a component must answer its PLACE |
| 3 | Breakpoint | `@media` on the viewport, a literal from the register below | only where the fluid physically cannot work, with an audit row that says why |

A media query asks about the SCREEN, a container query about the PLACE. The shell measures the
viewport; a component measures its container, and the one who PLACES the component declares the
`container-type`, because a place is not a property of a brick. `@media` in a screen file is
forbidden, always.

## The breakpoint register

ONE point, not two. The audit found a single change of behaviour and no screen of new behaviour;
two is a ceiling, not a quota.

| Token | Value | What changes there | Audit row | Why the fluid cannot do it | Applied |
|---|---|---|---|---|---|
| `--bp-shell-wide` | `37.5rem` (600px at the default font size) | the header takes the three sections; below it the bottom tabs carry them | "shell", every signed-in screen | a navigation carrier is either drawn or not: there is no half of a tab bar. The header row (brand, three tabs, avatar) measures 24.1rem (385px), so at 360 it does not fit; 37.5rem is the smallest width of the census above that, and it is the grey contract's 600 (B-07) | Step 3 |

**A media query cannot read `var()`.** It is evaluated before the cascade of custom properties, so
`@media (min-width: var(--bp-shell-wide))` never matches and raises no error. The query carries the
number as a literal; the token is the register and the literal its application, not two sources of
truth. Every `@media` of the product must give exactly the numbers in this table, and Step 6 checks
it by grep. `rem` in a media query is the reader's default font size, so the point moves with it.

The census number it replaces: 820px, the colour layer's viewport query since Stage 07. The owner took
`37.5rem` at the Step 2 review over `51.25rem` (820px), which would have changed nothing on screen.

## Containers, measure, grid, gutter

| Token | Value | What | Origin | Read from |
|---|---|---|---|---|
| `--container-page` | `65rem` (1040px) | the widest the page frame grows; it stops, it does not switch | the one page container the product had, the marketing page | Step 3, the shell; round 3, the wide public column (`.public-main--wide`) |
| `--container-text` | `52ch` | the measure of continuous text | measured at Step 2: in Inter 1ch is about 1.35 characters, 52ch holds 70 characters a line on real product text (67 to 73), inside the 65 to 75 of S5-1; 92ch held 98 to 122 | round 1: the scope line; round 2: the snippet, the raw item, the notice; `--measure-prose` deleted; round 3: the theme summary and reason (88ch until then), the legal prose, the form |
| `--gutter-page` | `clamp(1rem, 0.8014rem + 0.8823vw, 1.375rem)` (16 to 22px) | the gutter of the rules that switched from 22 to 16 at 820; it grows instead | owner's decision at Step 2, option A: 360 keeps its three edges (brand 18, breadcrumb 16, page 22), 0 pixels move; the page and the brand keep their fixed gutters | round 2: the breadcrumb, the static selection bar; round 3: a notice in the frame, the public column's sides (24px above 820 until then), the 0.0 footer. The app footer keeps the page's 22px: on the token it would move at 360 |
| `--grid-col-min` | `15rem` (240px) | the narrowest a card gets in a grid | the source card grid, 3.0 | round 2: `.src-avail`. Not the marketing grids: withdrawn on verification, round 3 |
| `--grid-gap` | `var(--space-4)` (10px) | the gap of that grid | the same grid | round 2: `.src-avail` |

The number of columns is NOT a token: `repeat(auto-fit, minmax(var(--grid-col-min), 1fr))` counts
them. None of these has a theme pair: a width does not change with the theme.

## Fluid type

Both ends of every `clamp()` in `rem`; the middle term carries a `rem` addend, never a bare `vw`
(zoom and the reader's font size, WCAG 1.4.4); the low end is what renders at 360 today; the curve
grows from 22.5rem (360px) to 65rem (1040px) and stops with the page. A font size never switches at
a point. Body sizes stay fixed: readability of body text is the measure's job.

| Token | Was | Now | At 360 / 820 / 1040 and up |
|---|---|---|---|
| `--type-3xl` | 36px, and 27px below 820 (marketing-shell.css) | `clamp(1.6875rem, 1.3897rem + 1.3235vw, 2.25rem)` | 27 / 33.09 / 36 |
| `--type-2xl` | 29px, and 24px below 820 (public-doc.css) | `clamp(1.5rem, 1.3345rem + 0.7352vw, 1.8125rem)` | 24 / 27.38 / 29 |
| `--type-xl` | 22px | `clamp(1.375rem, 1.3088rem + 0.2941vw, 1.5rem)` | 22 / 23.35 / 24 |
| `--type-lead` | new; `.mk-lead` was 16px, and 14.5px below 820 | `clamp(0.90625rem, 0.8566rem + 0.2205vw, 1rem)` | 14.5 / 15.51 / 16 |
| `--type-legal` | new; `.legal-prose` was 14.5px, and 14px below 820 | `clamp(0.875rem, 0.8584rem + 0.0735vw, 0.90625rem)` | 14 / 14.33 / 14.5 |
| the seven fixed steps | px | the same values in `rem` | unchanged |

Measured at Step 2: computed sizes at 360 equal the Stage 08 values exactly, and 24 of 24 screens
at 360 differ from the commit before by 0 pixels.

## Container thresholds (local, not tokens)

A container threshold belongs to its component and is not a token, but it is listed here, so that
the check can tell it from a device breakpoint. Each one is the width of the component's PLACE
where its wide form breaks, measured, plus at least 1rem of margin, rounded up to a whole rem. Every
one sits above what a 360 window gives its place (316px of page column, 328px of public column,
360px of frame), so 360 keeps its narrow forms and moves by 0 pixels. One exception, the owner's:
the breadcrumb's narrow form sits exactly at the 360 frame, so only a narrower window gets it.
Written `<` where the base is the wide form, `>=` where the base is the narrow one (the
account rail and the legal rail are added on top of a column).

| Component | File | Query | Place it reads | Below it | Measured break of the wide form |
|---|---|---|---|---|---|
| theme card | `theme-card.css` | `@container (width < 29rem)` | the page column | the confidence takes its own row under the body; the quote clamps to 2 lines | the label breaks in two under 435px; the label and quote get less room than the narrow form gives at 360 under 457px |
| source row | `source-row.css` | `@container (width < 36rem)` | the page column | the stats and the actions each take a full row; the buttons share theirs | the row wraps under 550px |
| saved brief row | `brief-row.css` | `@container (width < 28rem)` | the page column | the actions take their own row; the buttons share it | the title breaks in two under 430px |
| screen head | `screen-head.css` | `@container (width < 26rem)` | the page column | the one action takes the full width; the meta row tightens | a detail title breaks in two under 395px |
| toolbar | `toolbar.css` | `@container (width < 39rem)` | the page column | one compact Filter button replaces the full row | the full row wraps under 600px |
| action bar | `actionbar.css` | `@container (width < 29rem)` | the page column | the note takes its own line; the buttons share the next | the note breaks in two under 450px |
| selection bar, static | `selbar.css` | `@container (width < 42rem)` | the frame | the buttons share their line | note and buttons wrap under about 650px of frame |
| breadcrumb | `breadcrumb.css` | `@container (width < 22.5rem)` | the frame | a back chevron plus the parent (S5-5) | not a break: the owner's option A, the 360 frame itself, so 360 keeps the full chain |
| account shell | `account-shell.css` | `@container (width >= 35rem)` | the page column | from it, the nav is a 13rem rail beside the panel | beside the rail the panel gets less than the 316px the narrow form gives at 360 under a 542px column |
| public document | `public-doc.css` | `@container (width < 21rem)` | the public column | the confidence follows the theme label | a key row breaks in two under a 320px column |
| legal document, legal TOC | `legal-doc.css`, `legal-toc.css` | `@container (width >= 46rem)` | the public column | from it, the contents are a sticky 13rem rail left of the prose, links in a column | the rail, a 2rem gap and the prose's full 52ch measure need 715.7px |
| 0.0 footer (one-off) | `one-off.css` | `@container (width < 34rem)` | the frame | the gaps and the vertical padding tighten | the columns leave the brand's row under a 520px frame |
| 3.2 column map (one-off) | `one-off.css` | `@container (width < 41rem)` | the page column | the head hides; the row is two lines, the sample on its own | the widest select clips its value under a 636px column |
| grouped list heading, list note (one-off) | `patterns/grouped-list.css`, `one-off.css` | `@container (width < 20rem)` | the grouped list (the note outside it: the page column) | the heading and the note keep 16px at the sides, the rows 8 | not a break: the phone's drift kept for the 360 promise, exactly as wide as a 360 window's 316px place and no wider |

**Who declares the place.** The shell places them, so `screen-shell.css` declares both of its
places: `.appmain` (the page column) and `.app` (the frame, for the static selection bar, which
stands outside the column). `container-type: inline-size` only: their widths come from the
canvas, never from their content. On the stand, `.kit-sec`, `.appframe` and `.kit-width` declare
it (`design/kit/_page.css`), so a specimen answers its own box. Measured at round 2: each of the
seven switches at exactly its threshold, at a 1600 window with the frame narrowed one pixel at a
time, so each answers its place and not the window.
Round 3 adds a third place: `.public-main`, the public column, declares itself in
`public-doc.css` for what it holds (the shared document, the marketing rows, the legal document),
with `width: 100%`, because a flex item centred by auto margins is sized by its content and
inline-size containment takes that to zero. The 3.2 map reads the page column, not `.src-map`:
its head stands outside the map. Measured: the seven of round 3 switch at exactly their numbers
(559/560, 335/336, 735/736, 543/544, 655/656 and 359/360 px of place; the breadcrumb also at
real 340 and 360 windows).

## The shell

**Form A: the entries go into the header.** Chosen by the owner at Step 3 from three answers of
the navigation model (Stage 03a). The entries, their order and their states are the IA's; only
the layout changes.

| Question to the navigation model | Answer | Source |
|---|---|---|
| How many top-level entries | three plus account (avatar wide, 4th tab narrow) | `ia/docs/pages/navigation.md:16, 26, 28` |
| A second level that must stay visible | no; filters are a toolbar inside a screen, the account's section list is a rail inside 7.x (account shell, Step 4) | `ia/docs/sitemap.md:115`, `ia/docs/pages/account.md:53` |
| A screen that takes side space for new behaviour | no; the audit found none | this file, New behaviour |

| What | Below 37.5rem | From 37.5rem | Code |
|---|---|---|---|
| Navigation carrier | bottom tabs: three sections and Account, sticky to the bottom | header text tabs: three sections; Account is the avatar | `bottom-tabs.css`, `app-header.css`, `@media (min-width: 37.5rem)`: the only legal `@media` in a component |
| The hidden carrier | `display: none`, out of the accessibility tree too | same | same |
| Header on scroll | scrolls away | sticky, above the page (`--layer-shell`); restores navigation.md:35, "Scrolled: navigation is sticky and persists", which grey and colour had lost | `app-header.css` |
| Page frame | no breakpoint: grounds full width, content in one centred `--container-page` column; `--frame-inset` = max(0px, (100% - 65rem) / 2), 0 up to 1040px | same | `screen-shell.css`; read by the header, breadcrumb, page, notice, static selection bar, footer |

Rejected: B, a rail (three entries and no persistent second level: a column spent on nothing);
C, no change (the carrier does change, so the one point stays).

Measured at Step 3: one carrier at every width, 410 frames (10 screens, 41 widths from 320 to
1600, 10px steps around 600), 0 failures, measured width equal to the asked one on all; the
header sticky exactly from 600. Tab walk on 2.0: nav stops Synthesis, Sources, Briefs, Account at
360 and Synthesis, Sources, Briefs at 1280, none twice, none invisible; one navigation landmark in
the accessibility tree at each width. At 360, 24 of 24 screens differ by 0 pixels. At 1024 0 of
24 changed (the stand's canvas is 772px, under the 1040 column); at 1440 22 changed by the frame
(the canvas is 1188px, so 74px each side), and 4.1 grew 20px taller because its lines wrap
inside the column. 6.4 and 0.0 have no app frame and did not change. The stand gap of Step 1
(901 to 1072px) is gone: above a 900 window the screen gets at least 649px, past 600.

## Component and pattern behaviour

Rounds bottom up (atoms, molecules, organisms, patterns). Each opens with the full roll call of its
level from Part C and closes with N = M + K.

### Round 1, atoms: N 17 = M 3 + K 14

| Atom | Verdict | Done |
|---|---|---|
| scope line | container | `scope.css` reads `--container-text` (52ch) instead of `--measure-prose` (92ch) |
| skeleton bar | fluid, already | none: percent lengths 64, 52, 30 |
| group heading | through its placer | none here: its 820 rule is in `patterns/grouped-list.css` and is the rows' inner padding (8 to 16), not the page gutter; it moves with the pattern in round 4. The Step 1 verdict "gutter token" is revised on verification |
| button, input, checkbox, field label, filter chip, confidence, citation, status tag, rank, avatar, icon slot, inline link, drag handle, list row link | does not adapt | reasons in the inventory's Width column |

No container threshold among the atoms. Held against Step 3: 360 at 0 pixels on 24 of 24 screens;
at 1024 and 1440 exactly the 13 screens with a scope line changed (26 frames), each from the scope
line down; every other screen 0.

### Round 2, molecules: N 22 = M 17 + K 5

| Molecule | Verdict | Done |
|---|---|---|
| theme card | container query | 820 viewport to `@container (width < 29rem)`, `theme-card.css`. The quote keeps 78ch (below) |
| source row | container query | 820 viewport to `@container (width < 36rem)`, `source-row.css` |
| saved brief row | container query | 820 viewport to `@container (width < 28rem)`, `brief-row.css` |
| screen head | container query | 820 viewport to `@container (width < 26rem)`, `screen-head.css`. The sub keeps 70ch (below) |
| toolbar | container query | 820 viewport to `@container (width < 39rem)`, `toolbar.css` |
| action bar | container query | 820 viewport to `@container (width < 29rem)`, `actionbar.css` |
| selection bar | container query on the frame, plus the gutter token | 820 viewport to `@container (width < 42rem)` read on `.app`; the static bar's gutter to `--gutter-page`, `selbar.css` |
| evidence snippet | container (measure) | `--measure-prose` (92ch) to `--container-text` (52ch), `snippet.css` |
| raw item | container (measure) | the same, `rawitem.css`. `--measure-prose` has no reader left and is deleted from `tokens.css` |
| notice band | container (measure) | `max-width: var(--container-text)`, `notice.css`; it had none |
| breadcrumb | fluid (gutter token) | 22 switching to 16 at 820 becomes `--gutter-page`, `breadcrumb.css`; its `@media` is gone. Its narrow form S5-5 is not built: see below |
| source card | fluid (grid) | `.src-avail` reads `--grid-col-min` and `--grid-gap` (the same 240 and 10px), `source-card.css` |
| auth card | container, already | `400px` to `25rem`, `auth-card.css` |
| phase strip | fluid, already | none: it wraps |
| legal TOC | fluid, already | none: it wraps; the sticky rail of 9.x (B-27) came with the legal document in round 3 |
| tier card, step card | through their placer | none here: the marketing grid places them (marketing shell, done in round 3) |
| provenance list, composer row, account row, form field, skeleton card | does not adapt | reasons in the inventory's Width column |

**Two measures kept, withdrawn on verification.** The census asked whether the nine `ch` measures
are one question. The theme quote (78ch) and the screen head's sub (70ch) were moved onto
`--container-text` and measured: at 52ch the 2.0 sub and the quotes broke into two lines with one
or two words left alone. Each is one sentence of one or two lines, not continuous text, so each
keeps its own measure. The other measures (summary and reason, state, marketing, footer) are
organisms, round 3.

**Not built in round 2, the owner's decision: S5-5** (built in round 3, below), the breadcrumb's narrow form (a back chevron plus the
theme name, `ia/docs/pages/evidence.md:37`). It is a new look at 360 and would move the 360 pixels
the stage promises not to move. Two ways: a threshold under the 360 frame (only windows narrower
than 360 get it), or the variant at 360 with the zero promise broken on the screens with a
breadcrumb, said aloud. **B-26** (`text-wrap: pretty`) likewise changes line breaks at 360 and is
not taken silently.

Held against round 1: 360 at 0 pixels on 24 of 24 screens. At 1024 and 1440, 31 of 48 frames 0;
the 17 that changed, each with its row: the quote of the snippet (4.0, 4.1) and the raw item
(5.0); the notice (3.2, 3.5, 4.1, 5.1, 6.2); at 1024 only, the breadcrumb (3.2, 4.0 and its
states, 5.0, 5.1) and the static bar (6.1), whose gutter is 21.86px at a 1024 window and 22 from
1040.
2.0, 3.0, 6.0, the accounts and the rest are 0 at every width: the wide forms of the seven queried
molecules are unchanged. Width sweep: 15 screens, 50 widths from 320 to 1600 (10px steps between 570
and 760), 750 frames, 0 overflow, one navigation carrier, the header sticky from 600.

### Round 3, organisms: N 12 = M 10 + K 2

| Organism | Verdict | Done |
|---|---|---|
| app header | point | Step 3: the shell swap, `@media (min-width: 37.5rem)`, sticky from it |
| bottom tabs | point | Step 3: the same swap |
| state block | container | `440px` to `27.5rem`, `state.css`; the inline description keeps 60ch (one or two sentences) |
| form | container | `max-width: var(--container-text)`, `form.css`; it had no measure. No colour screen carries `.form`, so it shows on the kit only |
| dialog | container | `460px` to `28.75rem`, `dialog.css` |
| legal document | container + container query | the prose reads `--container-text`; new `.legal-body`: from a 46rem place the contents are a sticky 13rem rail left of the prose, `legal-doc.css` and `legal-toc.css` (B-27, `ia/docs/pages/legal.md:50`). No colour 9.x screen: in the 45rem column the place is 676px and the rail never shows; 9.x takes it by standing in the wide column, which Stage 12 states on the screen |
| account shell | container query | the 821px viewport query to `@container (width >= 35rem)` on the page column; the rail `208px` to `13rem`, `account-shell.css`. The census said a fluid wrap; revised on verification: a wrapping rail grows by its share of the free space beside the panel, so it cannot be 13rem there and full width on its own row at once |
| public document | container + fluid | the column `720px` to `45rem`; padding fluid: sides `--gutter-page` (24 above 820 until then), top 22 to 34px, bottom 34 to 44px between a 360 and a 1040 window, the gutter's span; `.public-main` declares `container-type`; the pill's 820 rule to `@container (width < 21rem)`, `public-doc.css` |
| marketing shell | container + fluid | the wide column `1040px` to `var(--container-page)`; the grid `minmax(220px, 1fr)` to `minmax(min(13.75rem, 100%), 1fr)`, `marketing-shell.css` |
| screen shell | point + container | Step 3: the frame and both places; round 3: a notice in the frame takes `--gutter-page`, its 820 `@media` is gone. The shell now holds no `@media` of its own |
| app footer, public bar | does not adapt | one wrapping line each; their 22px gutters are the page's and the brand's, which stay (Step 2, option A) |

**The one-off file, outside the count** (it is no component): the summary and the reason (4.0,
4.1) from 88ch to `--container-text`; the trust grid `minmax(230px, 1fr)` to `min(14.375rem, 100%)`;
the footer brand's `200px` to `12.5rem`; the 0.0 footer's sides to `--gutter-page` and its 820
rule to `@container (width < 34rem)` on the frame; the 3.2 column map's 820 rule to
`@container (width < 41rem)` on the page column. The list note keeps a reduced `@media (max-width:
820px)`: its 8 to 16px is the grouped list's row padding, like the group heading's, and it moves
with the grouped list in round 4.

**Built, the owner's decision: S5-5, option A.** The breadcrumb's narrow form, a back chevron plus
the parent (`ia/docs/pages/evidence.md:43`), from `@container (width < 22.5rem)` on the frame: the
360 frame itself, so 360 keeps the full chain and its zero pixels and a narrower window collapses
it (5.0 at 340: "‹ Onboarding is confusing"). The separators became `<span class="bc-sep"
aria-hidden="true">` on the 7 screens with a breadcrumb and on the kit, so the form can hide them;
at 360, 1024 and 1440 the change is 0 pixels. **B-26** (`text-wrap: pretty`) stays not taken: it
moves line breaks at 360.

**Withdrawn on verification: the marketing grids on `--grid-col-min`.** The census called 220, 230
and 240 one idea. At 15rem the fourth tier drops to a row of its own at a 1440 window (4 x 240 + 3
gaps is 996px against a 992px column), and the trust grid at 1024. Each grid keeps the minimum its
cards were drawn at, in rem, guarded by `min()`.

Held against round 2: 360 at 0 pixels on 24 of 24 screens. At 1024 and 1440, 40 of 48 frames 0;
the 8 that changed, each with its row: 4.0 and 4.1 (the summary and the reason at 52ch, B-25,
audit rows 4.0, 4.1), 6.4 (the sides 24 to 22px; at 1024 the top and bottom 0.3px short of 34 and
44, the gutter's span), 0.0 (the same sides; at 1024 a 4px wider column rewraps a line and the page
is 22px shorter). The accounts, 3.2, 5.0, the dialogs and the states are 0: their wide forms are
unchanged. At a 640 window, intended: 7.0 and 7.2 take the rail (a 596px column), 6.4 and 0.0 take
the wide padding and footer, 4.0's summary its measure; 3.2's map stays two lines (596 is under
656). At a 340 window the breadcrumb collapses on its 7 screens, rows 69 to 81 only. Width sweep:
17 screens (0.0 and 6.4 added), 54 widths from 320 to 1600 (10px steps between 570 and 760, plus
340, 350, 359, 361), 918 frames, 0 overflow, one navigation carrier where there is navigation, the
header sticky from 600.

### Round 4, patterns: N 2 = M 2 + K 0

| Pattern | Verdict | Done |
|---|---|---|
| grouped list | container query, and it declares the place | `container-type: inline-size` on `.grouped-list`, for the rows it places (source row, brief row) and its heading; the heading's 820 viewport rule to `@container (width < 20rem)`, `patterns/grouped-list.css` |
| filtered list | it declares the place | `container-type: inline-size` on `.filtered-list`, for the toolbar and the list it places (toolbar 39rem, theme card 29rem); the composition has nothing of its own to rearrange, `patterns/filtered-list.css` |

**The heading: a drift kept, not a break.** On a phone the grouped list's heading and the 4.1 list
note stand at 16px inside the list while every row stands at 8; in the wide form they align at 8.
The census called it a gutter (round 1 revised that: it is the rows' padding, not the page's). It
has no break to measure, so the threshold is the 360 promise itself: 20rem, the first whole rem
above the 316px place a 360 window gives. 360 keeps its 16 and 0 pixels; every wider place, a
412 phone included, gets the aligned form. Aligning 360 too is a question for the owner: it moves
360 by 8px on the 8 screens with a grouped list.

**Both patterns are exactly as wide as the page column** on every colour screen (316px at 360,
996px at 1440, measured), so declaring them containers moved no threshold of the rows they hold.
Patterns are two, not zero: Stage 09 took grouped list and filtered list, so step 2 of the pack
runs in its normal form.

Held against round 3: 72 of 72 frames 0 (360, 1024, 1440). At a 412 window, on purpose, the 8
screens with a grouped list change: the headings and the note align with the rows, each heading
2px taller (14 to 16 on top), the page 4px longer; at 640 the same. Width sweep: 17 screens, 54
widths, 918 frames, 0 overflow, one carrier where there is navigation. Switch: 319px of list, 16;
320px, 8, for the heading and both list notes.

**The product's `@media` now: exactly the register.** Two, both `@media (min-width: 37.5rem)`, in
`app-header.css` and `bottom-tabs.css`; 0 in a screen file. Every other width answer is one of
the 16 container queries above (14 rows of thresholds: the legal pair and the heading and note pair share theirs), or a fluid value.

## New behaviour

**The product needs no new behaviour at width.** Step 5 ran in its short form (2026-11-27): no
split view, no new state, no new string in `voice/docs/microcopy.md`, no new pattern. What was
weighed, and why it did not pass (the full rows are in Part B, "New behaviour: the candidates"):

| considered | why it did not pass |
|---|---|
| 4.0 Theme with 5.0 Evidence beside it, the one pair of the main flow | the IA writes 4.0 as one dense column of snippets (`ia/docs/pages/theme.md:88`); the barrier it would lift (`cjm-as-is.md:179`, going back to the source to trust the insight) is already lifted on the phone by the verbatim quote with its citation, one tap from the raw item; a split adds a "nothing selected" state, focus management and history against "one decision at a time". Taking it is an IA change, not a layout decision |
| 2.0 Synthesis with 4.0 beside it | the ranks are compared down one axis on purpose (`synthesis.md:84`); with the row above it would make three panes, a dashboard |
| 3.0 Sources with 3.6 beside it | not the main flow: managing a source is a rare setup task, not a repeated comparison |
| 6.0 Briefs with 6.4 beside it | not the main flow: a brief is opened and shared, not compared |

No pair reaches the threshold of the stage (two pairs, or one pair of the main flow that the IA
allows), so no screen loses its own URL and no surface appears only at a wide width.

## Width gaps from the sweep

Empty until Step 6.

## Decided at Step 1

| Question | Decision |
|---|---|
| New behaviour | none: no split view, one point, Step 5 short; 4.0 stays one dense column as the IA says (`ia/docs/pages/theme.md:88`) |
| 5.0 provenance on a wide screen | below the quote, not a side panel: three short lines would make a near-empty second column |
| The 360 gutter | brought to Step 2 as two options |

## Decided at Step 2

| Question | Decision |
|---|---|
| The breakpoint | `37.5rem` (600px), as recommended; not `51.25rem` |
| The 360 gutter | option A, keep the drift: 360 moves by 0 pixels; `--gutter-page` grows only what switched at 820 |
| The measure and the type | as recommended: `52ch`, the screen H1 22 to 24px |

## Decided at Step 4

| Question | Decision |
|---|---|
| S5-5, the breadcrumb's narrow form | option A, as recommended (2026-11-27): under the 360 frame only, `@container (width < 22.5rem)`; 360 keeps the full chain and its 0 pixels |
| B-26, `text-wrap: pretty` | not taken: it moves line breaks at 360 |

## Part A. Census: what adapts today, and how

### Home: `design/system/`, the 17 width queries

Everything sits on one number, 820, which **a viewport** measures. Of 17 rules, only 2 are what a viewport point is for (the shell swap). The other 15 split three ways: a gutter that changes from 22 to 16 (it belongs in a fluid token), a `font-size` switched at the point (forbidden by the stage: it belongs in `clamp()`), and a component rearranging itself (it belongs in `@container`, because the component measures its place, not the screen).

| file:line | what it does below 820 | way | where it must live | verdict | status |
|---|---|---|---|---|---|
| app-header.css:44 | hides the text tabs | point | shell, `@media` (legal here) | stays, the number goes into the register | moved, Step 3: `min-width: 37.5rem`, mobile first |
| bottom-tabs.css:33 | draws the bottom tabs, sticky | point | shell, `@media` | stays, same | moved, Step 3: `min-width: 37.5rem`, mobile first |
| screen-shell.css:48 | a notice in the frame: gutter 22 to 16 | point used as a gutter | a fluid gutter token | moves into a token | moved, round 3: `--gutter-page`, the rule is gone |
| breadcrumb.css:23 | gutter 22 to 16 | point used as a gutter | a fluid gutter token | moves into a token | moved, round 2: `--gutter-page`, the rule is gone |
| patterns/grouped-list.css:26 | group heading padding, gutter 16 | point used as a gutter | a fluid gutter token | moves into a token | moved, round 4: `@container (width < 20rem)` on the grouped list; not the gutter token, revised on verification (round 1): it is the rows' padding drift |
| selbar.css:29 | gutter 16; buttons take equal width | point | gutter token + `@container` | moves | moved, round 2: `--gutter-page` and `@container (width < 42rem)` on the frame |
| actionbar.css:19 | wraps; the note takes its own row; buttons equal width | point | `@container` | moves | moved, round 2: `@container (width < 29rem)` |
| brief-row.css:33 | the actions take their own row | point | `@container` | moves | moved, round 2: `@container (width < 28rem)` |
| source-row.css:45 | stats and actions take their own rows | point | `@container` | moves | moved, round 2: `@container (width < 36rem)` |
| screen-head.css:42 | the head action goes full width | point | `@container` | moves | moved, round 2: `@container (width < 26rem)` |
| theme-card.css:46 | the card becomes a grid, confidence on its own row, the quote clamps to 2 lines | point | `@container` | moves | moved, round 2: `@container (width < 29rem)` |
| toolbar.css:35 | full filter row swaps to the compact button | point | `@container` | moves | moved, round 2: `@container (width < 39rem)` |
| account-shell.css:32 | (at 821 and up) the section list becomes a rail beside the content | point | fluid: `flex-wrap` with a minimum width, no point at all | moves into fluid | moved, round 3: `@container (width >= 35rem)` on the column (the wrap revised on verification) |
| legal-doc.css:28 | `font-size` of the prose 15 to 14 | point on type | `clamp()` in the type scale | moves into the scale | moved, Step 2: --type-legal; the rule is gone |
| marketing-shell.css:27 | `font-size` h1 36 to 27, lead to 14.5 | point on type | `clamp()` | moves into the scale | moved, Step 2: --type-3xl and --type-lead; the rule is gone |
| public-doc.css:65 | gutter 16; `font-size` h1 29 to 24; the confidence loses its margin | point | gutter token + `clamp()` + `@container` | moves | font size moved, Step 2 (--type-2xl); round 3: sides `--gutter-page`, top and bottom fluid, the pill `@container (width < 21rem)` |
| one-off.css:112 | footer and list-note gutters; the CSV map goes from 4 columns to 2 | point | gutter token + `@container` declared by the map | moves | moved, round 3: the footer `@container (width < 34rem)`, the map `@container (width < 41rem)` on the column; the list note in round 4, `@container (width < 20rem)` |

### Home: the fluid and the container, already there

| what | where | way | verdict |
|---|---|---|---|
| auto-fit / auto-fill grids | marketing tiers `minmax(220px)`, trust list `minmax(230px)` (one-off), source cards `minmax(240px)` | fluid | three numbers for one idea: one token, `--grid-col-min`, in rem |
| `flex-wrap: wrap` | 22 places (phase strip, legal TOC, toolbar, raw item meta and others) | fluid | stays |
| box widths in px | auth card 400, state 440, dialog 460, public doc 720, marketing 1040, account rail 208 | container | stay as containers, move to rem |
| line measures in ch | marketing 20, 58, 60; footer tag 30; state 60; screen head sub 70; theme quote 78; summary and reason 88 (one-off); `--measure-prose` 92 (raw item, scope, snippet) | container | 9 values for one question; the stage gives one or two |
| no page container | `.appmain` has none: `main` is 772, 1188, 1668 px at 1024, 1440, 1920 | missing | the page container is the stage's first container |
| the type scale | 10 fixed steps in px, 10 to 36; 0 `clamp()` | none | goes fluid at Step 2, lower end equal to today |
| skeleton widths | 52%, 30%, 64% | fluid | stays |

### Away from home

| corpus | what is there | verdict |
|---|---|---|
| `design/*.html`, foreign ground | 0 width rules, 0 `@media`, 0 style. The rule "a screen uses only `index.css`" already cleared this corpus at Stage 08 | nothing to move out |
| stand: `_panel.css`, `kit/_page.css`, `kit/*.html`, root `_nav.css` | 12 queries: 900 (panel folds, 3), 820 (stand paddings, 5), 1100 and 1099 (the roadmap sidebar offset, 4); plus 16 auto-fit grids and 24 ch measures of the stand's own | stays in the stand, outside the product rules |
| frozen: `wireframes/_wf.css` | the canvas declares `container-type`; 10 `@container` at 600 and 599 (tabs, filter, paddings, theme card, brief row, account rail); `@media` 900 (panel), 640 (an **empty** rule), 1100 (roadmap) | read-only witness, not touched |

### Five findings from measuring the colour screens now

1. **The wide screen is the phone layout, stretched.** No overflow at any of the 4 widths on any of the 24 screens, but `main` runs the full canvas. Longest lines at 1440: 122 characters (warning band, 4.1), 111 (warning band, 6.2), 98 (raw item quote, 5.0), 92 (6.4 rationale), 89 (theme summary, 4.0). Backlog B-25 already named it.
2. **Exactly one navigation carrier everywhere it should be one.** 22 signed-in screens: the bottom tabs at 360, the header tabs at 1024 and up, never both. 0.0 and 6.4 carry none: the public bar has no app destinations, and the navigation model says so (guest: "Primary destinations: none").
3. **The stand lies between 901 and 1072.** The panel takes 252px from the canvas only above 900, and the product queries read the viewport. At a 901 viewport the screen gets 649px and still shows the wide shell; in the real product a 649px window shows the narrow one. Step 3 and the Step 6 sweep have to measure the canvas, not the window.
4. **Three left edges at 360.** On 5.0 the breadcrumb starts at 16px, the h1 at 22px, the brand at 18px. Above 820 the first two agree at 22. The gutter is two values that disagree on the one width where the pixel promise is zero. Step 2 brings both options openly: a named change at 360, or the drift kept.
5. **Four `font-size` values switch at the point** (marketing h1 and lead, public brief h1, legal prose). The stage forbids that; `clamp()` takes them over.

## Part B. Width audit: all 37 screens of the product

Corpus: `wireframes/*.html` with `screens.md`, read beside `jtbd.md` and `cjm-as-is.md`. A source this pack did not name turned out to be decisive: **every IA page spec carries an "Adaptive" section with a "Desktop" line** (`ia/docs/pages/*.md`). It is an upstream decision, so the audit follows it and does not re-decide it.

| screen | what the person does here | category | how | source |
|---|---|---|---|---|
| 0.0 Home | decides whether Sift is worth a try | wider: grid | hero in two columns, steps 3 up, trust strip: auto-fit; marketing container | home.md:51 |
| 1.0 Log in | gets in | same | the card keeps its width (container) | auth.md:41 "a form does not need width" |
| 1.0 Sign up | creates a workspace | same | same card; the value copy stays inside it (IA: "optional ... beside") | auth.md:41 |
| 1.0 Reset | recovers the password | same | same card | auth.md:41 |
| 2.0 Synthesis | reads the ranked themes (J2, J3) | wider: air | page container; the cards stay one column; filter row inline | synthesis.md:84 "not a grid: the eye compares ranks down one axis" |
| 2.1 Synthesis empty | learns there is no signal yet | same | the state block keeps its width | state.css |
| 2.2 Synthesis loading | waits for the synthesis | wider: air | follows 2.0: same container | a state of 2.0 |
| 2.3 Synthesis error | learns what failed and the next move | same | state block | state.css |
| 3.0 Sources | sees what is connected, adds a source (Flow 1) | wider: grid | rows table-like; the available cards in an auto-fill grid | sources.md:70 |
| 3.2 Import a CSV | maps columns to fields | wider: grid | the four-column map; two columns when narrow (component, `@container`) | sources.md:70 |
| 3.3 Connect Intercom | authorises Intercom | same | a short form and an action bar; form measure | sources.md (no desktop note for 3.3) |
| 3.4 Sources empty | connects the first source | wider: grid | available cards in the grid | sources.md:70 |
| 3.5 Sync error | sees a failed source and fixes it | wider: grid | as 3.0 | sources.md:70 |
| 3.6 Manage a source | changes one source's settings | wider: air | page container, provenance list, action bar | sources.md (no desktop note for 3.6) |
| 4.0 Theme | checks the evidence behind a theme (J3, E1) | wider: air | page container; one dense column of snippets; Add to brief in the head | theme.md:88 "a single dense column of snippets" |
| 4.1 Theme low signal | sees that the evidence is thin | wider: air | as 4.0; the warning band gets the measure (122 characters now) | theme.md:88 |
| 4.2 Theme loading | waits | wider: air | as 4.0 | a state of 4.0 |
| 4.0 Theme error | learns what failed | same | state block | state.css |
| 5.0 Evidence | reads the raw quote, the end of the chain (J3, E2) | wider: air | a readable column for the quote; provenance below | evidence.md:44 "a side panel or below"; below is taken, see question 2 |
| 5.1 Evidence redacted | learns why the item cannot be shown | wider: air | the notice gets the measure (100 characters at 1920 now) | evidence.md:44 |
| 6.0 Briefs | finds a saved brief | wider: air | page container, grouped list | briefs.md (no desktop note for 6.0) |
| 6.1 Build a brief | picks themes and orders them (S1, J4) | wider: grid | selection beside the priority panel; fluid wrap, no point | briefs.md:93 "selection plus a priority panel" |
| 6.2 Build, thin warning | as 6.1, warned about a thin theme | wider: grid | as 6.1 | briefs.md:93 |
| 6.3 Share link | copies the public link | same | the dialog keeps its width | dialog.css |
| 6.3 Share link loading | waits for the link | same | dialog | dialog.css |
| 6.4 Shared brief | a stakeholder reads the call and its evidence (S1, E2) | wider: air | one centred readable column (already 720px) | briefs.md:93 "a centered readable column" |
| 6.5 Briefs empty | learns there is no brief yet | same | state block | state.css |
| 7.0 Account | finds an account section | wider: grid | the section list as a left rail; fluid wrap replaces the 821 query | account.md:53 "a left rail beside the content" |
| 7.0 Profile | edits the profile | wider: grid | as 7.0 | account.md:53 |
| 7.0 Data and privacy | sees and sets PII scrubbing (compliance, day one) | wider: grid | as 7.0 | account.md:53 |
| 7.0 Plan and limits | sees the plan and the seat meter | wider: grid | as 7.0 | account.md:53 |
| 8.0 Not found | gets back to safety | same | state block, centred | system.md:53 "center their content" |
| 8.1 Server error | gets back to safety | same | state block | system.md:53 |
| 8.2 Maintenance | learns when to come back | same | state block | system.md:53 |
| 9.0 Privacy | reads the policy (indexed, SEO) | wider: grid | the contents as a sticky left rail beside a readable column | legal.md:50; backlog B-27 |
| 9.1 Terms | reads the terms | wider: grid | as 9.0 | legal.md:50 |
| 9.2 Security and GDPR | reads the security page | wider: grid | as 9.0 | legal.md:50 |

**The tally: same 13, wider 24 (grid 14, air 10), new behaviour 0.** "Grid" here means two blocks that already exist standing side by side (a rail, a panel, cards); it needs no new state, so it is wider, not new.

### New behaviour: the candidates, and why none is taken

| candidate | for it | against it | verdict |
|---|---|---|---|
| 4.0 Theme with 5.0 Evidence beside it (split view) | a pair of the main flow, Flow 0 steps 2 to 3, with a loop (discard a theme, go back). Barrier, Phase 4: PMs "still need to go back to the source material to really trust the insight" (cjm-as-is.md:179) | the IA decided the desktop form: "a single dense column of snippets" (theme.md:88). The barrier is already met on the phone: the snippet IS the verbatim quote with its citation, and the raw item is one tap away. A split adds a "nothing selected" state, focus management and history, against "one decision at a time" | not taken; it would be an IA change, which is yours to make, not a layout decision |
| 2.0 Synthesis with 4.0 beside it | a pair of the main flow | synthesis.md:84 keeps one column on purpose: ranks compared down one axis. Taken together with the row above it would be three panes, a dashboard | not taken |
| 3.0 Sources with 3.6 beside it | a list and its detail | not the main flow; managing a source is a rare setup task, not repeated comparison | not taken |
| 6.0 Briefs with 6.4 beside it | a list and its detail | not the main flow; a brief is opened, not compared | not taken |

What this means for Step 2, said now and decided at Step 2: the audit names **one** change of behaviour that a viewport causes, the shell swap (header tabs and bottom tabs). Everything else is fluid, a container, or a component measuring its place. Two points are a ceiling, not a quota, so the honest expectation is **one point**, spoken aloud. Step 5 is then the short form.

## Part C. Component register: all 51 components, 2 patterns, the one-off file

Corpus: `inventory.md` and the 51 files. The category is the widest among the screens the component stands on. "Does not adapt" is a verdict with its reason, not a missing row.

| level | component | stands on | widest | verdict |
|---|---|---|---|---|
| atom | button | every screen | grid | does not adapt: width is the placer's decision (`.u-full`, action bar, screen head) |
| atom | input | 8 screens | grid | does not adapt: it fills its field; the form gives the measure |
| atom | checkbox | 2.0, 7.2 | grid | does not adapt: a fixed target |
| atom | field label | 6 screens | grid | does not adapt |
| atom | filter chip | 5 screens | grid | does not adapt: the toolbar wraps the chips |
| atom | confidence | 9 screens | grid | does not adapt: its place is set by the theme card |
| atom | citation | 5 screens | air | does not adapt: an inline mark |
| atom | status tag | 3.0, 3.5, 6.0, 6.1, 6.2 | grid | does not adapt |
| atom | rank | 2.0, 6.1 | grid | does not adapt |
| atom | avatar | 28 screens | grid | does not adapt |
| atom | icon slot | 34 screens | grid | does not adapt |
| atom | scope line | 13 screens | air | **container**: reads `--measure-prose` already |
| atom | skeleton bar | 2.2, 4.2 | air | **fluid**, already (percent widths) |
| atom | inline link | 18 screens | grid | does not adapt |
| atom | drag handle | 6.1, 6.2 | grid | does not adapt |
| atom | list row link | 7.0 | grid | does not adapt: it fills the rail or the column it stands in |
| atom | group heading | 12 screens | grid | **fluid**: its gutter (set by grouped-list) goes to the gutter token |
| molecule | theme card | 2.0, 6.1, 6.4 | grid | **point to container**: the reflow and the 2-line quote move to `@container` |
| molecule | evidence snippet | 4.0, 4.1, 6.4 | air | **container**: measure, already on `--measure-prose` |
| molecule | raw item | 5.0, 5.1 | air | **container**: measure 92ch, where S5-1 asked 65 to 75 (B-25) |
| molecule | provenance list | 5.0, 5.1 | air | does not adapt: short lines, below the quote |
| molecule | source row | 3.0, 3.5 | grid | **point to container** |
| molecule | source card | 3.0, 3.4, 3.5 | grid | **fluid**: auto-fill, the minimum goes to `--grid-col-min` |
| molecule | saved brief row | 6.0 | air | **point to container** |
| molecule | composer row | 6.1, 6.2 | grid | does not adapt: one line with a handle and a remove, fits at 360 |
| molecule | account row | 7.1, 7.2 | grid | does not adapt |
| molecule | form field | 1.0, 3.2, 6.1 | grid | does not adapt: the form gives the width |
| molecule | notice band | 7 screens | air | **container**: it has no measure today, and gives the longest lines (122 at 1440) |
| molecule | screen head | 15 screens | grid | **point to container**: the full-width action |
| molecule | toolbar | 6 screens | grid | **point to container**: full row or compact |
| molecule | selection bar | 2.0, 6.1, 6.2 | grid | **point to container** + gutter token |
| molecule | action bar | 3.2, 3.3, 3.6, 5.0, 6.1 | grid | **point to container** |
| molecule | phase strip | 6 screens | grid | **fluid**, already (wrap) |
| molecule | breadcrumb | 9 screens | air | **fluid**: gutter token; its narrow form (S5-5) is a variant, see the backlog below |
| molecule | skeleton card | 2.2, 4.2, 6.3 | air | does not adapt: the column it stands in gives the width |
| molecule | legal TOC | 9.x | grid | **fluid**: wraps; becomes the rail through the legal document |
| molecule | auth card | 1.0 (3) | same | **container**, already (400px, to rem) |
| molecule | tier card | 0.0 | grid | **fluid**: the marketing grid places it |
| molecule | step card | 0.0 | grid | **fluid**: the marketing grid places it |
| organism | app header | 27 screens | grid | **point**: the shell swap, viewport `@media`, Step 3 |
| organism | bottom tabs | 27 screens | grid | **point**: the same swap |
| organism | app footer | 27 screens | grid | does not adapt: one wrapping line; its gutter follows the token |
| organism | public bar | 10 screens | grid | does not adapt: no destinations to swap; gutter follows the token |
| organism | state block | 8 screens | same | **container**, already (440px and 60ch, to rem) |
| organism | form | 9 screens, grey | grid | **container**: it has no measure today, and on 3.2 and 7.x its fields would run the full column |
| organism | dialog | 6.3 | same | **container**, already (460px, to rem) |
| organism | legal document | 9.x | grid | **fluid**: the sticky rail by wrap; the prose size by `clamp()`, not the point |
| organism | account shell | 7.x | grid | **fluid**: the rail by wrap, the 821 query goes |
| organism | public document | 6.4 | air | **container** (720px) + `clamp()` for the h1 |
| organism | marketing shell | 0.0 | grid | **container + fluid**: 1040px, auto-fit, `clamp()` for h1 and lead |
| organism | screen shell | 27 screens | grid | **point + container**: the page container it lacks, Step 3 |
| pattern | filtered list | 2.0, 4.0, 6.1 | grid | **container**: it places the toolbar, so it declares `container-type` |
| pattern | grouped list | 3.0, 4.0, 6.0 | grid | **fluid**: its 820 rule is a gutter; it declares `container-type` for the rows it places |
| one-off | `one-off.css` | 0.0, 3.2, 4.0, 4.1 | grid | gutter token; the CSV map to `@container`; summary and reason measures |

**The tally.** Atoms 17: 3 adapt, 14 do not. Molecules 22: 17 adapt (7 of them move from the point to `@container`), 5 do not. Organisms 12: 10 adapt, 2 do not. Patterns 2: both adapt. **53 rows, 0 missing**: every file in `components/` and `patterns/` has a verdict.

## What the backlog already hands this stage

| row | what | where it lands |
|---|---|---|
| B-07 | the breakpoint: 600 on the grey canvas, 820 on the colour viewport | Step 2: the register. Part A answers it: one point, named by the change |
| B-25 | line measure past 80 characters at 1440 | Step 2: the measure token; Step 4: notice, raw item, summary |
| B-26 | one word alone on the last line | Step 2 or 4: `text-wrap: pretty` as a base rule, low |
| B-27 | a sticky contents rail on 9.x | Step 4, legal document (audit rows 9.0 to 9.2) |
| S5-5 | the breadcrumb's narrow form, a back chevron plus the theme name | Step 4, as a breadcrumb variant through `@container` |
