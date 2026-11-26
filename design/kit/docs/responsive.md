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
| `--container-page` | `65rem` (1040px) | the widest the page frame grows; it stops, it does not switch | the one page container the product had, the marketing page | Step 3, the shell |
| `--container-text` | `52ch` | the measure of continuous text | measured at Step 2: in Inter 1ch is about 1.35 characters, 52ch holds 70 characters a line on real product text (67 to 73), inside the 65 to 75 of S5-1; 92ch held 98 to 122 | Step 4; `--measure-prose` (92ch) retires there |
| `--gutter-page` | `clamp(1rem, 0.8014rem + 0.8823vw, 1.375rem)` (16 to 22px) | the gutter of the rules that switched from 22 to 16 at 820; it grows instead | owner's decision at Step 2, option A: 360 keeps its three edges (brand 18, breadcrumb 16, page 22), 0 pixels move; the page and the brand keep their fixed gutters | Step 4, by the owner's decision |
| `--grid-col-min` | `15rem` (240px) | the narrowest a card gets in a grid | the source card grid, 3.0 | Step 4 |
| `--grid-gap` | `var(--space-4)` (10px) | the gap of that grid | the same grid | Step 4 |

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

Empty until Step 4. A container threshold belongs to its component and is not a token, but it is
listed here, so that the check can tell it from a device breakpoint.

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

Empty until Step 4.

## New behaviour

The audit found none (decided at Step 1). Step 5 runs in its short form.

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

## Part A. Census: what adapts today, and how

### Home: `design/system/`, the 17 width queries

Everything sits on one number, 820, which **a viewport** measures. Of 17 rules, only 2 are what a viewport point is for (the shell swap). The other 15 split three ways: a gutter that changes from 22 to 16 (it belongs in a fluid token), a `font-size` switched at the point (forbidden by the stage: it belongs in `clamp()`), and a component rearranging itself (it belongs in `@container`, because the component measures its place, not the screen).

| file:line | what it does below 820 | way | where it must live | verdict | status after Step 2 |
|---|---|---|---|---|---|
| app-header.css:44 | hides the text tabs | point | shell, `@media` (legal here) | stays, the number goes into the register | moved, Step 3: `min-width: 37.5rem`, mobile first |
| bottom-tabs.css:33 | draws the bottom tabs, sticky | point | shell, `@media` | stays, same | moved, Step 3: `min-width: 37.5rem`, mobile first |
| screen-shell.css:48 | a notice in the frame: gutter 22 to 16 | point used as a gutter | a fluid gutter token | moves into a token | waits: Step 4 |
| breadcrumb.css:23 | gutter 22 to 16 | point used as a gutter | a fluid gutter token | moves into a token | waits: Step 4 |
| patterns/grouped-list.css:26 | group heading padding, gutter 16 | point used as a gutter | a fluid gutter token | moves into a token | waits: Step 4 |
| selbar.css:29 | gutter 16; buttons take equal width | point | gutter token + `@container` | moves | waits: Step 4 |
| actionbar.css:19 | wraps; the note takes its own row; buttons equal width | point | `@container` | moves | waits: Step 4 |
| brief-row.css:33 | the actions take their own row | point | `@container` | moves | waits: Step 4 |
| source-row.css:45 | stats and actions take their own rows | point | `@container` | moves | waits: Step 4 |
| screen-head.css:42 | the head action goes full width | point | `@container` | moves | waits: Step 4 |
| theme-card.css:46 | the card becomes a grid, confidence on its own row, the quote clamps to 2 lines | point | `@container` | moves | waits: Step 4 |
| toolbar.css:35 | full filter row swaps to the compact button | point | `@container` | moves | waits: Step 4 |
| account-shell.css:32 | (at 821 and up) the section list becomes a rail beside the content | point | fluid: `flex-wrap` with a minimum width, no point at all | moves into fluid | waits: Step 4 |
| legal-doc.css:28 | `font-size` of the prose 15 to 14 | point on type | `clamp()` in the type scale | moves into the scale | moved, Step 2: --type-legal; the rule is gone |
| marketing-shell.css:27 | `font-size` h1 36 to 27, lead to 14.5 | point on type | `clamp()` | moves into the scale | moved, Step 2: --type-3xl and --type-lead; the rule is gone |
| public-doc.css:65 | gutter 16; `font-size` h1 29 to 24; the confidence loses its margin | point | gutter token + `clamp()` + `@container` | moves | font size moved, Step 2 (--type-2xl); the rest waits: Step 4 |
| one-off.css:112 | footer and list-note gutters; the CSV map goes from 4 columns to 2 | point | gutter token + `@container` declared by the map | moves | waits: Step 4 |

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
