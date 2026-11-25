# Critique log - Sift design system

*The stage critique of the design system, one section per stage, newest last. Stage 07's critique
predates this file and stays where it was shown: `design/overview.html`, section "Critique, and what
it changed". This file starts at Stage 08. Shown on `design/kit/pixel-proof.html`, sections
"Critique by class" and "The stage contract".*

*Internal document, English. No em dash anywhere in this file.*

---

## Stage 08, Step 9: the system, its pages and the colour screens

### How it was collected

Five sets, collected independently, then merged. Two rows were taken as one when they name the
same file and the same defect; the "who found it" column then lists both.

| Set | What it read | Result |
|---|---|---|
| Codex, read-only (`codex exec -s read-only`) | the full taxonomy of the pack minus Claude's four classes, over `design/system/`, `design/kit/`, `design/*.html`, `wireframes/` for structural desync | 3 findings of 27 classes; 24 classes came back empty and were named as checked |
| The reader, a clean-context subagent | the real question of the next stage: place the chip (atom), the theme card (molecule) and the state block (organism) on a new screen, from the artifact alone | 19 "could not understand", 1 misread. Not a formal run |
| Claude, four own classes | page against screen (14 components, computed at 1440 and 360), page format (50 pages), state snapshots (26 frames re-taken, md5), colour singletons (8 roles with one rule) | 9 findings |
| `/impeccable audit` | the detector over the 22 colour screens at 1440 and 360 and over `design/system/` | 6 product rules after the prototype chrome (`ds-*`) was excluded: 97 of 174 hits |
| The dry run over still-grey screens | 4 densest families of 15 grey-only pages, on paper, against the inventory, the system and `microcopy.md` | 20 holes: 7 already in the backlog, 13 new |

### The defect table

Verdicts: **fixed**, **owner** (decided by the owner on 2026-11-25, "go and do everything", which
took every recommendation below), **backlog** (a row in `backlog.md` with the stage that closes it),
**withdrawn on verification** (with the reason, so it does not come back).

| # | Class | File, element | What was wrong | Who found it | Verdict |
|---|---|---|---|---|---|
| A1 | Contrast, ink | `breadcrumb.css:16`, the current page | `opacity: 0.7` over `--text-secondary`: 3.44 dark, 3.13 light, under 4.5; no `aria-current` | impeccable | **fixed**: opacity dropped, 5.90 / 6.03; `aria-current="page"` on 5 screens and the page. Line S9a |
| A2 | Value past the tokens | `phase-strip.css:27`, `.step-sep` | the same `opacity: 0.7`, a colour no role holds | Claude | **fixed**. Line S9b |
| A3 | State that moves the element | `theme-card.css:44`, the drill | `translateX(2px)` on hover | Codex, reader | **owner: removed**. Line S9c |
| A4 | Primitive with no consumer | `tokens.css:88, 96` | `--red-a32`, `--red-a35`, read by nothing since Step 6 | Claude (Codex: 0 in this class) | **fixed**: both deleted with their swatches on `color.html` |
| A5 | Usage count in a token comment | `tokens.css:171, 179` | `--text-danger` said 2 rules in one comment and 3 in the other; it has 1 and 0 on the colour sample | Claude | **fixed**: both comments recounted, sample and grey named apart |
| A6 | Markup off the component page | `theme-error.html:90`, `briefs-empty.html:76`, `sources-empty.html:95` | `span.state-ic` where the page copies `div` | reader | **fixed**: `div`, as on the page. No pixel moved |
| A7 | Old path | `synthesis.html:25` | the head comment pointed at `design/_theme.css` | Codex | **fixed** |
| A8 | Off-ramp literals | 8 declarations in 6 component files | 16, 27, 15.5, 24, 19, 15, 18px and a 1px radius are off the documented ramp; each page declares them kept byte for byte | impeccable (Codex: 0) | **fixed in `DESIGN.md` only**: listed as declared literals. No value moved |
| A9 | Readability floor | the 10px micro step, the 10.5px cite chip | under the detector's 11px floor; not a WCAG threshold | impeccable | **owner: backlog, Stage 10** |
| A10 | Line measure | the warning band, `.reason`, the 6.4 method note and lede | wider than about 80 characters at 1440 | impeccable | **backlog, Stage 10** |
| A11 | Stragglers | 0.0 trust list and a heading, 3.2 file line | one word alone on the last line | impeccable | **backlog, Stage 10** |
| A12 | Side tab | `notice.css:21` | flagged as a thick coloured side border | impeccable | **withdrawn on verification**: an IDENTIFYING line role decided at Step 6 (`--line-warning-strong`, `--line-danger` in `tokens.css`) |
| A13 | Overused font | Inter | flagged as a common face | impeccable | **withdrawn on verification**: the brand face from the Stage 06 plate |
| A14 | Old path | `screen-shell.html`, `snippet.html`, `selbar.html`, `skeleton-card.html`, `theme-card.html`, the "Sources" notes | cited the comments "in `design/kit/kit.css`", deleted at Step 8 | Claude, while fixing | **fixed**: pointed at the component file the comments moved to |
| A15 | Page against code | `color.html`, the `--black-a40` swatch | carried the origin of the next group ("light pairs") | Claude, while fixing | **fixed**: the label moved to `--cyan-a12`, where `tokens.css` puts it |
| A16 | Node numbers | `pixel-proof.html` | "6.1 Build brief, thin evidence" and "6.2 Share link"; the screens list says 6.2 is the thin-theme warning and 6.3 the share link | Claude, while fixing | **fixed** |
| B1 | Misread (the reader) | `inventory.md`, the Stage 07 tables | the grey census read as the live spec (chip radius 22px, icon slot 40px, avatar 26px, low signal as a state) | reader | **fixed**: a "superseded" note above each of the four Stage 07 tables |
| B2 | Stale statement | `theme-card.html:238` | "`ul.list` is not in the system [?]"; `base.css:56` declares it | reader | **fixed** |
| B3 | Stale statement | `auth-card.html:61` and its Copy this | "the field wrapper is not in the system"; the copy markup had no `.form`, no `.field` | dry run, reader | **fixed**: hero and copy use `.form` and `.field`; the missing title form is a backlog row |
| B4 | Usage data | Where it stands on chip, confidence, public doc; `chip.css:4` | chip: grey count presented as colour; confidence: "9 screens" listed 7; public doc: "one screen" while 0.0 wears two of its parts | Claude, reader | **fixed**, colour and grey named apart; `confidence.css`, `chip.css`, `public-doc.css` headers too |
| B5 | Usage data | `inventory.md`, 7.x screens column | input, account row, form field, notice, action bar and the meter named the wrong 7.x screen | dry run | **fixed**, each with "corrected at Step 9" |
| B6 | List without idle control | `inventory.md`, one-off list | the provenance list still listed as a one-off | Codex | **fixed**: struck, pointed at `provlist` |
| B7 | Snapshots proving sameness | `button.html`, `input.html` | 6 frames byte-identical to rest (button pressed and disabled, input disabled, both themes) | Claude | **fixed**: 6 frames and files removed, a line of text each; `shoot-states.js` takes hover and focus only |
| B8 | Page format, anti-rule | `legal-toc.html`, When not | "take the product navigation" named no component | Claude | **fixed**: app header, bottom tabs, breadcrumb |
| B9 | Page against code | `chip.html:46, 73` | the disabled specimen counted 12; disabled means nothing behind the facet | reader | **fixed**: 0. The four chip frames were re-taken |
| B10 | Form not on its page | `chip.html` | the compact "Filter N" chip was missing | reader | **fixed**: Other forms, with the rule (it counts filters applied) |
| B11 | Not understood | `chip.html` | which facet takes a glyph | reader | **fixed**: source type and confidence take one, time and grouping do not |
| B12 | Not understood | `chip.css:2` | the Reads line listed colour only | reader | **fixed** |
| B13 | Not understood | `theme-card.html` | `--bg-hover` equals `--bg-surface`: the row's hover is invisible on a card | reader | **fixed**: a rule of use, the list sits on `--bg-page` |
| B14 | Not understood | `state.html` | h1 or h2, and the order of two exits | reader | **fixed**: h2 under a screen h1; the way out first as ghost, the next move last as fill |
| B15 | Not understood | `state.html`, 3.0 empty | the inline block has no exit of its own | reader | **owner: the rule** "the inline form may hand its exit to the list below", on the page and in `state.css` |
| B16 | Rule against product | `chip.html` against 6.1 and 6.2 | "Add themes" was a chip that ran an action | reader | **owner: `.btn--ghost`** on both screens and the toolbar page. Line S9d |
| B17 | Not understood | `state.html` | whether 404, 500 and maintenance take `.state` | reader | **backlog, Stage 12** |
| B18 | Not understood | `theme-card.html` | may the theme card stand on a second screen | reader | **owner, still open**: backlog row, Stage 09 |
| D1 to D11 | Dry run holes | 7.1, 1.0, 9.x | 11 holes the system cannot answer yet (plan summary, limits list, meter forms, panel action row, auth title, form-level message, legal title, footer with links, three microcopy gaps) | dry run | **backlog**, 11 rows, Stage 12 (two touch Stage 09) |
| E1 | Fact | SOC 2 Type II year | year 1 in `CLAUDE.md`, year 2 in IA, microcopy and on 9.2; no source in `research/` | dry run | **owner**: not verified, a backlog row |
| E2 | String | "Sign out" in IA, "Log out" in microcopy | 7.3 | dry run | **backlog, Stage 12** |
| E3 | Rule against file | `microcopy.md` format | per-screen rows, not the unique-lines table `CLAUDE.md` describes | dry run | **owner: backlog, Stage 12** |
| E4 | IA against system | 9.x contents rail | IA asks for a sticky rail; one in-flow box is drawn | dry run | **backlog, Stage 10** |

**Withdrawn or empty, said out loud.** Codex checked 27 classes and 24 came back empty, among
them: no hex, pixel colour or font name in a class; no component reading a colour primitive; 29
semantic and state tokens in `:root` and 29 in the light block, none without a pair; no screen with
its own style; the `@import` order matches the inventory's levels; `wireframes/` unchanged. Page
against screen: 14 components measured at 1440 and 360, all match their pages. Page format: all 50
pages carry the same block set in the same order, the card format accepted at Step 5. Colour
singletons: 8 roles with one rule; the failure trio waits for Stage 12 screens, the focus ring is
one rule for the whole product, and the hover fill, the sheet shadow, the phase ring and the tier
mark are each one component's own role with a stated reason. Only A4 and A5 needed a change.

### By class

| Class | Found | Who found it | Fixed | Withdrawn | Deferred or owner |
|---|--:|---|--:|--:|--:|
| Contrast (ink, with opacity) | 1 | impeccable | 1 | 0 | 0 |
| Value past the tokens | 1 | Claude | 1 | 0 | 0 |
| State that moves the element | 1 | Codex, reader | 1 | 0 | 0 |
| Token comment and orphan primitive | 2 | Claude | 2 | 0 | 0 |
| Markup off the component page | 1 | reader | 1 | 0 | 0 |
| Old path | 2 | Codex; Claude | 2 | 0 | 0 |
| Off-ramp literals | 1 | impeccable | 1 (documented) | 0 | 0 |
| Readability, measure, stragglers | 3 | impeccable | 0 | 0 | 3 (Stage 10) |
| Detector false positives | 2 | impeccable | 0 | 2 | 0 |
| Page against code, node numbers | 3 | reader; Claude | 3 | 0 | 0 |
| Misread | 1 | reader | 1 | 0 | 0 |
| Could not understand | 10 | reader | 7 | 0 | 3 (B15 decided, B17, B18) |
| Usage data | 2 | Claude, reader; dry run | 2 | 0 | 0 |
| List without idle control | 1 | Codex | 1 | 0 | 0 |
| Snapshots proving sameness | 1 | Claude | 1 | 0 | 0 |
| Page format | 1 | Claude | 1 | 0 | 0 |
| Dry run holes | 11 | dry run | 0 | 0 | 11 |
| Outside the stage | 4 | dry run | 0 | 0 | 4 |

**What the "who found it" column says.** Every class that lives in a FILE was found by Codex or by
Claude reading. The one real accessibility failure was found by neither: it sat in an `opacity`
declaration, and every walk of Steps 7 and 8 read `color` and never multiplied the element's
opacity into the ink. A rendered detector caught it. The instrument now multiplies the opacity of
the element and of every ancestor into the ink (rule recorded in `architecture.md`, "The state
rules, in one place"): run over the product as it stood before the fix it finds those 20 failures
(5 pages, 2 widths, 2 themes), and over the fixed product 0 of 3,198 text nodes, the lowest at
4.73. The reader found what no checker can: decisions written nowhere. 10 of its 19 rows were rules
the pages never stated.

### The second pass, after the fixes

Codex, read-only, the same prompt, scoped to the 39 files the fixes touched (plus the files needed
to prove a finding), with one instruction added: multiply every opacity into the ink before a
ratio. 27 classes, 12 findings in 7 classes. The token pairs again: 0 one-sided, 28 against 28 (the
opacity token counted apart). Each finding was re-read in the file before a verdict.

| # | Class | Where | What | Verdict |
|---|---|---|---|---|
| C1 | Primitive with no consumer | `tokens.css:122`, `--leading-snug` | no product rule reads it; the textarea that did went back to 1.55 at Step 6 | **fixed**: deleted. The stand's two uses keep 1.45 as a literal in `_page.css`; the type page's two samples take `--leading-tight`; the leading demo shows the three steps left. Missed by the first pass of both instruments: Claude's orphan check read colour primitives only |
| C2 | Surface of a role | `checkbox.css:26` | `--bg-action` read by `border-color` on a checked box | **withdrawn on verification**: the border takes the fill's colour so the checked box reads as one filled square; there is no separate line to identify |
| C3 | Surface of a role | `account-shell.css:20` | `--bg-action` read by `border-left-color` on the current account section | **withdrawn on verification**: the 2px selection strip is a fill by the surface rule written in `theme-card.css`, whichever property draws it; 9.13 / 6.27 clears both floors |
| C4 | Geometry as a literal | `state.css:22`, `phase-strip.css:20` | 40px, 20px; 9px, 11px | **withdrawn on verification**: declared on their pages ("Literals kept", "Kept as literals because no exact step exists"); the first pass returned 0 here for that reason |
| C5 | Geometry as a literal | `theme-card.css:34`, `public-doc.css:18` | grid tracks, 13px; 34px 24px 44px | **withdrawn on verification**: the same, declared on both pages |
| C6 to C8 | Contrast | `button.css:102`, `input.css:29` | disabled button, outlined button and input under 4.5 and 3 after `--opacity-disabled` | **withdrawn on verification**: WCAG exempts an inactive control from both floors (1.4.3, 1.4.11). The token comment now says so, with its 4 rules |
| C9, C10 | Old path | 6 colour screens' head comments | "takes every class from `design/kit/kit.css`" | **fixed**: the sweep found 8 screens, all now name `design/system/index.css` with the date the kit went |
| C11 | Old path | `inventory.md:275`, `screen-shell.html:282` | `design/_theme.css` named | **withdrawn on verification**: both are dated history ("became", a change row), true as written |
| C12 | Token comment | `tokens.css`, `--opacity-disabled`, `--shadow-sheet` | no usage count | **fixed**: 4 rules for the opacity; the shadow comment said "the frame and the dialog", and the frame turned out to be the stand's `.appframe`, so it now says one rule in the system and one on the stand |

**Claude's own classes, again.** The contrast walk with the opacity multiply: 0 of 3,198 text nodes
under their floor (the lowest 4.73), against 20 failures on the commit before. The state matrix
against a real pointer and Tab key: 154 cells, 354 comparisons, 0 differences, the theme card's
hover included. Snapshots: the 4 chip frames changed (B9), the other 16 byte-identical. The 22 colour
screens re-taken: 11 pages changed exactly where the S9 lines say, 11 at 0 pixels.

### The stage contract, as a checklist

*The third instrument, a separate table: it checks steps and gates, not artifacts. Both instruments
above read what exists, so a step that never happened is invisible to them.*

| Contract line | Answer | Where it is, or why not |
|---|---|---|
| Entry gate before Step 1: every named input exists | done | Stage 08 Step 1: `kit.css`, `kit.html`, `shell.html`, `inventory.md`, `DESIGN.md`, `personas.md`, the screens, `microcopy.md`, `design/visuals/` |
| One step, show, wait; a gate after every level of components | done | Steps 1 to 9 each shown and accepted in chat; atoms, molecules, organisms in three rounds |
| `tokens-audit.md`: usage table, four kinds of finding, origin count, role candidates, file split, three named lists | done | `design/kit/docs/tokens-audit.md`; a fourth list for Step 9, stated as a deviation |
| `census.md`: both measurements, computed, two viewports | done | "Measurement before the system (Step 1)" and "after the system (Step 6)"; 0 control-without-a-form rows open |
| Consolidation: a row per component, axes as a matrix, the rename map, row counts before and after | done | `inventory.md`, Stage 08 Step 2: 248 class rows became 63; the map executed at Step 6 |
| `tokens.css`: two levels, a pair for every role and state token, no new values, names from the audit | done | 81 primitives, 29 semantic and state declarations, 29 in the light block, 0 without a pair |
| Components in files; colour only through semantic; geometry from primitives; no hex, pixel colour or font name | done | `design/system/components/`, 50 files; the Codex class is empty |
| Level order in four places, matching | done, with one stated deviation | consolidation, rounds and `@import` follow the level; the stand's panel groups by PURPOSE with the level as a chip, decided 2026-11-20 (`docs/decisions.md`, "The showcase is read by purpose, the code is loaded by level") |
| Clean folders: nothing of the stand in `design/system/`, no product CSS in `design/kit/` | done | the Codex class is empty |
| Foundations accepted BEFORE components, each review edit a line | done | Step 4; "Foundations review (Step 4)" in `tokens-audit.md` |
| Five blocks on every component page, in a fixed order | done, with one stated deviation | the card format accepted at Step 5 (Overview, Technical, History tabs); all 50 pages carry the same set |
| No invented state, no faked state class, `focus-visible`, snapshots re-taken, frames no more than named differences | done | the matrix: 154 cells against a real pointer, 0 differences; 20 frames after B7, each a named difference; the 4 chip frames re-taken after B9, the other 16 byte-identical |
| The five-piece rule for every component | done | 50 of 50: css, page, registry entry, inventory row with level, `@import` in its group |
| Reconciliation in three lists, two numbers on the idle list | done | `inventory.md`, Step 6 close-out; `census.md`, "The three lists" |
| `backlog.md` started; everything deferred is a row | done | 35 rows, 20 of them from Step 9 |
| Coverage: every token on a foundation page, every icon on `icons.html` | done | the Codex class is empty after A4 removed the two orphans |
| The inventory not shortened; one-offs re-counted over `wireframes/` | done | Stage 08 Step 2, "The one-off list, re-counted across the whole product" |
| `overview.html` hub: panel, cards with live thumbnails, an inventory section | done, with one stated deviation | the inventory is the "All components" page (`components.html`), a table of all 50 with level and screens, the panel's second line; the hub carries the one-off list and the backlog |
| The theme stress-tested twice, adjacency fixed in the pair, escapes named | done | Step 7 on the showcase, Step 8 on the screens; `color.html#stress`; no escape from Step 5 (0 components read a colour primitive) |
| The light theme decision, and what "no" would remove | done | `DESIGN.md`, "Two themes"; the product keeps the switch |
| The pixel proof, every difference explained | done | `pixel-proof.html`: 44 pairs, 9 named lines that show after Step 9 (S9c is hover only), 0 unexplained, 0 unverified |
| `kit.css` deleted, no reference left; `kit.html` and `shell.html` on the system | done | Step 8; the one stale comment left (A7) fixed here |
| The legacy of Stage 07 not a second source of truth | done | `kit.html` frozen; `shell.html` identical to the header and tab pages except the avatar line (S7) |
| The `@import` chain opens locally; `base.css` never edited for the stand | done | both local servers; the Codex isolation class is empty |
| The coverage map on `design/overview.html` shows which screens are still grey | done | the hub's coverage map, Step 8 |
| The dry run: numbers, holes in the backlog | done | 4 families on 6 pages, 20 holes, 13 new, in `backlog.md` |
| `wireframes/` unchanged | done | `git diff` over the stage on `wireframes/`: empty |
| `pixel-proof.html` registered as its own group "Verification", with the critique summary, token numbers, consolidation, both census measurements, theme line, dry run line | **not done until Step 9** | it sat under "Overview" from Step 8; this step moved it to its own last group and added the blocks |
| `/impeccable audit` run, findings verified before fixing, the taxonomy run again on touched files | done | this section and the second pass above |
| `architecture.md` and `architecture.html`, `DESIGN.md` updated | done | Step 9 close-out |
| `CLAUDE.md` "Tokens" rule replaced, not added; budget counted | done | Step 9 close-out; the add and delete table is shown in chat |
| `design/system/CLAUDE.md` started, ten lines at most, with the pair rule | done | Step 9 close-out |
| README status Done, the rest of the product waits for Stage 12 | done | Step 9 close-out |
| Root `/_nav.js`: `done` on the child, `wip` left on the group | done, nothing to change | `done:true` since Step 4; `wip` stays until Stage 11 |

**One row was "not done" when the checklist was run,** the pixel proof's group, and it was closed in
this step. Three rows are "done with a stated deviation", each decided earlier in the stage and
recorded in `docs/decisions.md`. What was compared: each line of the pack's "Input and output", its
gates and its "Done when", against a file, a commit or a measurement named in the right column.
