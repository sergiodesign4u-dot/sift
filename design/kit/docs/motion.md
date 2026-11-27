# Motion - Sift

*Stage 11 (Animation). How the product moves, and why each movement exists. Motion lands on states
that already exist (Stage 08); it never creates one. Every movement does one of three jobs:
CONNECTION (where did this come from), STATUS (is it still working), RESPONSE (was my action taken).
A moment with none of the three is not here, and has no animation.*

*Visible place: `design/kit/motion.html`, the fourth child of the Design System group, built at
Step 2. Until then this file is read here and on the Step 1 review page.*

*Internal document, English. No em dash anywhere in this file.*

Sections, in the order the stage fills them:

1. The census: what moved before Stage 11 (Step 1)
2. The moment inventory (Step 1)
3. Character references, table C (Step 1)
4. The register of durations and curves (Step 2)
5. Tone, cross-document moves, the viewport point (Step 4)
6. What the token override does not reach (Step 5)
7. Screen to moments, the slice for Stage 12 (Step 6)

Screens are named by their IA node, as in `wireframes/_nav.js`.

---

## 1. The census: what moved before Stage 11

Two halves, measured on 2026-11-27. **Source:** grep for `transition`, `animation`, `@keyframes`,
`scroll-behavior` and any `ms` / `s` value over four corpora. **Output:** Playwright computed style
(`transitionProperty`, `transitionDuration`, `transitionTimingFunction`, `animationName`,
`animationDuration`, `animationIterationCount`) on every element of all 25 colour pages and all 66
stand pages, at 360 (`clientWidth === 360`, confirmed) and at 1280, once normally and once with
`prefers-reduced-motion: reduce` emulated. 1950 moving element-states in the first pass.

### The numbers

| What | Count |
|---|---|
| Different durations | **3**: 150 ms (16 property slots), 120 ms (6), a 1.4 s infinite loop (1) |
| Different curves | **2**: the token `--ease` `cubic-bezier(0.22,1,0.36,1)`, and the browser default `ease` where a rule omitted the curve (3 slots) |
| Transitions on a layout property (width, height, top, left, margin, padding) | **0** |
| `transition: all` written | **0** |
| Transitions on `transform` or `opacity` | **0**. All 14 transitions animate paint: colour, background, border colour |
| Transitions on `box-shadow` or `filter` | **0** |
| Elements still moving under reduce | **0 of 1950**, only because of the safety net in `base.css` (below) |
| Elements obeying a token override | **0**: no motion token exists yet |
| Motion in `design/*.html` screens | **0** rules, 0 `<style>` blocks. Nothing to cut |
| Motion in the stand (`design/kit/*.html`, `_page.css`, `design/_panel.css`) | **0** rules |
| Motion in `wireframes/` | **0** rules. Frozen, read only |

### Source, line by line

| file:line | What moves | Property | Duration | Curve | Verdict |
|---|---|---|---|---|---|
| `tokens.css:223` | the one curve | - | - | `--ease` 0.22,1,0.36,1 | stays; the base of the curve set at Step 2 |
| `base.css:17` | anchor jumps | `scroll-behavior: smooth` | browser | browser | stays: it carries the eye from a citation chip to its evidence on 4.0 (moment C4); already `auto` under reduce |
| `base.css:72-78` | **the safety net, placed first** (Stage 08): `*, *::before, *::after { transition: none !important; animation: none !important }` under reduce | all | - | - | comes out at Step 2, replaced by the token override; may return LAST at Step 5, only after the reduce audit passes without it |
| `button.css:38`, `:87` | Button hover and press; icon button | background-color, border-color, color; color | 150 | `--ease` | literal to token |
| `input.css:25` | Input hover and focus | border-color | 150 | `--ease` | literal to token |
| `checkbox.css:23` | Checkbox hover and checked | background-color, border-color | 150 | `--ease` | literal to token |
| `chip.css:29` | Chip hover and on | color, border-color, background-color | 150 | `--ease` | literal to token |
| `citation.css:36` | Citation hover | background-color, color | 150 | `--ease` | literal to token |
| `theme-card.css:40`, `:49` | row hover; drill arrow | `background` shorthand; color | **120**; 150 | `--ease` | literal to token; shorthand to `background-color` |
| `cardrow.css:16` | row hover | background-color | **120** | `--ease` | literal to token |
| `snippet.css:21` | row hover | `background` | **120** | `--ease` | literal to token; shorthand |
| `source-row.css:32` | row hover | `background` | **120** | `--ease` | literal to token; shorthand |
| `brief-row.css:26` | row hover | `background` | **120** | `--ease` | literal to token; shorthand |
| `account-shell.css:22` | nav link hover | color; `background` | 150; **120** | **`ease`**; `--ease` | two durations and two curves on one element |
| `app-header.css:45` | tab hover | color, background | 150, 150 | **`ease`** (omitted) | curve drift; literal to token |
| `skeleton.css:22`, `:27` | the shimmer loop | `background-position` (paint) | 1.4 s, infinite | `--ease`: an ease-out on a loop, so the cycle is uneven | STATUS stays; property and curve decided at Step 5; static under reduce |
| `/_nav.css:78`, `:142`, `:174` | the roadmap sidebar | color, background | 150 | `ease` | prototype chrome, not product; outside the product's motion rules |

### Output, grouped by role

The same job carries two numbers. This is the drift a file-by-file read does not show.

| Role | Components | Duration | Curve | Verdict |
|---|---|---|---|---|
| RESPONSE, hover tint of a control | Button, Chip, Citation, Checkbox, App header tab | 150 | `--ease`; the header tab `ease` | **drift**: one job, 120 and 150, two curves |
| RESPONSE, hover tint of a row | Theme card, Snippet, Source row, Brief row, List row link, Account nav (background) | 120 | `--ease` | (the same drift as the row above) |
| RESPONSE, hover ink of text | Icon button, Theme drill, Account nav (color), Chip, Citation | 150 | `--ease`; the account nav `ease` | curve drift on one element |
| RESPONSE, field border | Input, textarea, select | 150 | `--ease` | consistent |
| STATUS, loop | Skeleton bar on 2.2, 4.2, 6.3 and their kit pages | 1.4 s, infinite | `--ease` | uneven cycle, paint property |
| none: the state exists, the transition does not | Inline text link, Breadcrumb, Legal TOC, Legal document links | 0 | - | **a component nobody named**: four declared hovers with no transition |

---

## 2. The moment inventory

Two corpora, because the three jobs come from different places. **B1**, the screen corpus (the 37
grey screens in `wireframes/` plus `ia/docs/flows.md`), gives CONNECTION and STATUS: events on the
path. **B2**, the state register (all 51 components and 2 patterns of `inventory.md`, each state
checked against its css), gives RESPONSE: a flow map never names the hover of a button. The level
column is what Step 3 sorts by. "Dur." is the duration the job asks for, not a number.

### B1. In-document moments

| # | Screen | Event | Job | Owner | Level | Dur. | State |
|---|---|---|---|---|---|---|---|
| C1 | 2.0 | a theme is checked: the selection bar appears, the head action leaves | CONNECTION | Selection bar, triggered in Screen shell | 2 + 3 | base | exists: `.app:has(.theme .check:checked) .selbar`, display none to flex |
| C2 | 2.0, narrow | the compact "Filter" button opens a filter panel | CONNECTION | Toolbar (compact) | 2 | slow | **STATE NEEDED**: the open panel (A11-1) |
| C3 | 2.0, 4.0 | "Load 6 more themes": rows arrive below | CONNECTION | the "Load more" foot, a candidate pattern | pattern | base | **STATE NEEDED**: appended rows, a busy foot (A11-2) |
| C4 | 4.0, 4.1 | a citation chip lands on its evidence row on the same page | CONNECTION | Citation, Evidence snippet as target | 1 + 2 | base | partial: the scroll exists (`scroll-behavior: smooth`), the "arrived" form of the row does not (A11-3) |
| C5 | 6.1, 6.2 | "Generate share link" opens the 6.3 dialog over the brief | CONNECTION | Dialog | 3 | slow | **STATE NEEDED**: the dialog over its underlay; today 6.3 is its own page (A11-4) |
| C6 | 6.1, 6.2 | "Add themes" opens a theme picker | CONNECTION | none in the register | - | slow | **STATE NEEDED**: the picker in any form (A11-5) |
| C7 | 6.2 | a thin theme placed high: the warning band appears | CONNECTION | Notice band | 2 | base | partial: the after exists, the before does not (A11-6) |
| C8 | 3.6 | "Disconnect Intercom": the inline confirm opens from the button | CONNECTION | `.src-confirm`, one-off (B-08) | one-off | base | **STATE NEEDED**: the collapsed form (A11-7) |
| C9 | 7.2 | "Delete account" asks to confirm | CONNECTION | Dialog or inline, undecided (S6-2) | 3 | base | **STATE NEEDED**: the confirm (A11-8) |
| S1 | 2.2 | skeleton cards while 3,750 items are clustered, far above 300 ms | STATUS | Skeleton card and bar | 2 + 1 | loop | exists |
| S2 | 2.2 | the phase strip: done, current, upcoming | STATUS | Phase strip | 2 | base | exists (per-step states) |
| S3 | 4.2 | skeletons while 42 items and their citations open | STATUS | Skeleton card and bar | 2 + 1 | loop | exists |
| S4 | 6.3 | "Generating share link" gives way to the live link | STATUS | Dialog, generating form | 3 | base | exists, as two pages |
| S5 | 3.0, 3.5 | the Intercom row "Syncing", resolving to "Sync failed" | STATUS | Source row, Status tag, Notice band | 2 | base | partial: syncing and failed exist, "Synced" is not drawn (A11-12) |
| S6 | 3.6 | "Re-import from Intercom" runs | STATUS | Button, busy | 1 | base | **STATE NEEDED** (A11-9) |
| S7 | 3.3 | waiting for the Intercom approval window | STATUS | Button, busy, or a waiting block | 1 | base | **STATE NEEDED** (A11-9) |
| S8 | 3.2 | uploading and parsing 840 rows | STATUS | the file drop, one-off | one-off | base | **STATE NEEDED**: uploading (A11-10) |
| S9 | 7.2 | "Export data" prepares the download; its length is `[?]` | STATUS | Button, busy | 1 | base | **STATE NEEDED** (A11-9) |

"Copy quote" to "Quote copied" was found on the screens too; it is R3 under Button below, because
its done form already exists in the system (`kit/button.html:143`, Stage 09).

Rejected, with the reason: the theme quote unclamp (no expand control, the whole row is a link); a
dialog scrim (no underlay anywhere); a toast (none exists; the done forms are button labels); the
FAQ on 0.0 (a static list); "Disable link" on 6.3 (no state or confirm drawn, an open question);
remove and reorder in the composer (no job; dragging is A11-11); chip toggles and CSV mapping
(an instant recompute; the chip's `on` is its own RESPONSE); the sort control (a plain label); the
seat meter fill (decoration); scroll reveal or hero motion on 0.0 (no job); the tab switch and the
37.5rem swap (below).

### B1. Moves between documents

Every screen is its own html document, so an ordinary `transition` reaches none of these. 26 moves
in the five flows; a job is nameable on 9. The fork (do not animate, `@view-transition`, or a flow
of its own) is Step 4. Theme loading and theme error carry no node number of their own in the
wireframe registry; they are named by file.

| # | From | To | Flow | Job if it could move |
|---|---|---|---|---|
| X1 | 2.0, a row | 4.0 | 0, 2 | CONNECTION: the row becomes the theme header |
| X2 | 4.0, a snippet | 5.0 | 0, 2, 3 | CONNECTION: the snippet becomes the raw item |
| X3 | 5.0, "Back to theme" | 4.0 | 0, 2 | CONNECTION, reverse |
| X4 | 3.0 and 3.5, "Manage" | 3.6, and back | 1 | CONNECTION: the row becomes its detail |
| X5 | 6.1, "Generate share link" | 6.3 generating | 0, 4 | CONNECTION (the same moment as C5) |
| X6 | 6.3 generating | 6.3 generated | 0, 4 | STATUS resolving (S4) |
| X7 | 3.2 "Import", 3.3 and 2.3 "Try again" | 2.2 | 1, 2 | STATUS begins |
| X8 | 2.2 | 2.0, 2.3 or 2.1 | 0, 1 | STATUS resolves; no link in the grey, by flow only |
| X9 | `theme-error` "Try again" to `theme-loading`; `theme-loading` to 4.0 or `theme-error`; 3.5 "Try again" to 3.0 | | 1, 2 | STATUS begins or resolves |
| X10 to X26 | the shell tabs; 0.0 to auth and the app; 1.0 and 1.1 into the app; 6.0 and 6.1 back and forth; 6.1 and 6.3 to 6.4; 2.1 to 3.4; 3.0 to 3.2 and 3.3; 2.3 to its older version; 1.2 to itself; 404, 500, maintenance; log out | | | none named |

### B1. The viewport point

The 37.5rem shell swap moves the sections between the header and the bottom tabs. No surface exists
on wide that is missing on narrow: no right panel, no split view; the account rail and the legal
TOC each have a stacked form. The default holds: **no motion on the point**.

### B2. The state register: RESPONSE, every component

| Level | Component | Declared states (css) | Moment | Moves today | Verdict |
|---|---|---|---|---|---|
| 1 | Button | hover, active, focus (global), disabled, done form | R1 hover, R2 press, R3 "Copy" to "Quote copied" | 150 | RESPONSE x3 |
| 1 | Input | hover, focus-visible, error, disabled | R4 hover, R5 focus border | 150 | RESPONSE x2 |
| 1 | Checkbox | hover, checked, disabled | R6 hover, R7 check | 150 | RESPONSE x2 |
| 1 | Filter chip | hover, on, disabled | R8 hover, R9 on | 150 | RESPONSE x2 |
| 1 | Citation marker | hover (the linked form) | R10 hover | 150 | RESPONSE |
| 1 | Inline text link | hover | R11 hover | **0** | RESPONSE, a gap |
| 1 | List row link | hover | R12 hover | 120 | RESPONSE |
| 1 | Skeleton bar | the shimmer | (S1, S3) | 1.4 s loop | STATUS |
| 1 | Drag handle | the cursor only | dragging | 0 | **STATE NEEDED** (A11-11) |
| 1 | Avatar | focus-visible; hover deliberately empty | - | 0 | does not move: the focus ring is the global one |
| 1 | Field label, Confidence, Status tag, Rank, Icon slot, Scope line, Group heading | none, not interactive | - | 0 | do not move (7) |
| 2 | Theme card | hover, selected, drill hover | R13 row hover, R14 select | 120, 150 | RESPONSE x2, and the C1 trigger |
| 2 | Evidence snippet | hover | R15 hover | 120 | RESPONSE, and the C4 target |
| 2 | Source row | hover, failed | R16 hover | 120 | RESPONSE, and S5 |
| 2 | Saved brief row | row hover, title hover | R17 hover | 120 | RESPONSE |
| 2 | Breadcrumb | hover | R18 hover | **0** | RESPONSE, a gap |
| 2 | Legal TOC | hover | R19 hover | **0** | RESPONSE, a gap |
| 2 | Selection bar, Notice band, Phase strip, Skeleton card, Toolbar | hidden or present; tones; per step; none; compact | C1, C7, S2, S1 and S3, C2 | 0, loop | owners of B1 moments, no RESPONSE of their own |
| 2 | Composer brief row | dragging `[?]` | drag | 0 | **STATE NEEDED** (A11-11) |
| 2 | Screen head | the action hides with the selection | (C1) | 0 | part of C1 |
| 2 | Provenance list, Raw item, Source card, Account row, Form field, Action bar, Auth card, Tier card, Step card | none of their own | - | 0 | do not move (9); the form field's error line arrives with a new document |
| 3 | App header | tab hover, current | R20 tab hover | 150, `ease` | RESPONSE |
| 3 | Account shell | nav hover, current | R21 nav hover | 150 and 120, two curves | RESPONSE |
| 3 | Legal document | crumb and related links hover | R22 hover | **0** | RESPONSE, a gap |
| 3 | Dialog | the generating form | (S4, C5) | 0 | owner of B1 moments |
| 3 | Screen shell | the selection trigger | (C1) | 0 | owner of C1 |
| 3 | Form | submitting `[?]` | submit | 0 | **STATE NEEDED**: Button busy (A11-9) |
| 3 | Bottom tabs, App footer, Public bar, Empty or error state, Public document, Marketing shell | current only, or none | - | 0 | do not move (6): a tap leaves the document |
| pattern | Grouped list, Filtered list | none of their own | - | 0 | no transition of their own (2): a chip re-filters in place with no named job |
| base | the focus ring | `:focus-visible`, global | R23 focus | instant | RESPONSE; stays instant, which is "not slower than fast" |

### The estimate

| Count | Number |
|---|---|
| Moments | **41**: CONNECTION 9, STATUS 9, RESPONSE 23 |
| By corpus | B1 18, B2 23 |
| By owner | components 36 (C1's trigger sits in Screen shell, itself a component), base 1 (the focus ring), one-off 2 (C8, S8), candidate pattern 1 (C3), no owner 1 (C6); registered patterns 0 |
| STATE NEEDED | **12** moments plus **3 partial** (C4, C7, S5), asking for **12 states**: rows A11-1 to A11-12 in `backlog.md` (the owner's decision, 2026-11-28: none is drawn at this stage) |
| Atoms, 17 | 9 with a row (7 move today, Inline link is a gap, Drag is STATE NEEDED); 8 do not move, each with its reason |
| Molecules, 22 | 13 with a row; 9 do not move |
| Organisms, 12 | 6 with a row; 6 do not move |
| Patterns, 2 | 0 with a row, said aloud: neither has a transition of its own |
| Per component | at most 3 (Button). Nothing reads as decoration |
| The slow duration | every appearance of a large element (C2, C5, C6) is STATE NEEDED. With those states unbuilt, no existing moment reads a slow duration: Step 2 closes with two durations, not three, unless the owner decides otherwise |

---

## 3. Character references, table C

At most three moments, each already named in the inventory, and only where the job does not settle
the character. A reference gives the curve, the amplitude, the direction and the order of
appearance; **never the duration** (it is derived from the job and the census) and never a new row
in the inventory.

**Sources, 2026-11-28.** motionsites (MCP) was unavailable: the free plan had used 3 of 3 prompts
through the integration. The owner's decision, 2026-11-28: work on the live benchmark alone. The
benchmark is the one `research/docs/research.md` names (section 5, `benchmark.md`): Perplexity and
Amplitude. Perplexity's public pages were opened in Playwright and measured; Amplitude's product is
behind a login and its public pages are a marketing site, a different product context, so nothing
was taken from them.

| Moment | Job | Source | What is taken | What it gives the job | Tone (`voice.md`) |
|---|---|---|---|---|---|
| S1, S3: the skeleton loop | STATUS | perplexity.ai, a public Discover article while it loads (`/discover/top/...`), computed style and `@keyframes` | the loop on a **linear** curve; the sweep moved by `transform: translate` on a track, not by `background-position`; under reduce the page runs **0** animations (measured) | an even cycle reads as "still working" with no hitch at the turn; `transform` keeps the loop off the paint of every bar | Loading: "a wait stays silent (a skeleton)". A low, even sweep with no bounce agrees. Not taken: its 1200 ms |
| C4: a citation lands on its evidence | CONNECTION | perplexity.ai, the same article: hovering an inline citation chip opens its source preview (`scaleAndFadeIn`), plus the `slide...AndFadeIn` family on the page | arrival as **opacity 0 to 1 plus a small amplitude**: scale 0.95 to 1, or a 5px offset toward the source; a strong ease-out entry, `cubic-bezier(0.16,1,0.3,1)`, which does not overshoot | the evidence arrives from the claim that named it, small enough to read as "this one", not as travel. It is the benchmark's own trust mechanism (inline citation, `benchmark.md:153`). It feeds the enter curve and `--move-sm` at Step 2; the arrived form itself waits for A11-3 | Calm, not loud: a 5% scale, no spring. Agrees. Not taken: its 150 ms |
| C1: the selection bar appears | CONNECTION | none | nothing | the public pages of both benchmarks have no multi-select and no bar that answers a selection; the character comes from the job at Step 4 (the bar rises from the edge it lives on, a short distance) | - |

Two moments, not three, and that is the answer: C1 has no public source. Measured and not used:
the Perplexity and Amplitude home pages (many durations, `transition: all` on Amplitude), because
they were not one of the named moments.
