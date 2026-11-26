# Token audit - Sift

*Stage 08 Step 1. The facts, in two halves. This half is read out of the code: where every
variable is used and what role it is carrying in each place. The other half, the census of how
each control actually renders, is `census.md`.*

*Two instruments, per CLAUDE.md. The counts below were produced twice and independently: by a
script over `design/kit/kit.css` and the colour screens (Claude), and by Codex reading the same
files read-only. Where the two disagreed the file was opened and the result named, never voted
on. The disagreements are recorded at the end.*

*Internal document, English. No em dash anywhere in this file.*

---

## The numbers that go into the summary block on the pixel-proof page (Step 9)

| Fact | Now, before the split |
|---|--:|
| Variables declared in `:root` | 30 |
| of them product language | 23 |
| of them prototype chrome (`--pf-*`), which does not belong here | 7 |
| Variables carrying an origin comment | 23 |
| Variables with no origin anywhere, neither here nor in `DESIGN.md` | 7 |
| Colour literals written inside a class in the product layer | 0 |
| Geometry declarations carrying a literal px | 566 |
| of them a `border-radius` duplicating an existing variable | 3 |
| Component classes declared in `kit.css` | 233 |
| Distinct radii rendered across the product | 4 |
| Distinct font sizes rendered on a control | 10 |

---

## Every variable, its value, its uses and its origin

| Variable | Value | Product rules | Chrome uses | Origin | Role it carries |
|---|---|--:|--:|---|---|
| `--canvas` | `#0B0E11` | 9 | 5 | plate B pixel | page ground, the deepest surface; also the ink ON the accent (button label, checkmark) |
| `--surface` | `#151A1F` | 28 | 2 | plate B pixel | card, panel, bar, and the hover ground of every row |
| `--elevated` | `#1E252B` | 9 | 1 | plate B pixel | a surface that sits above another one: active tab, dialog, checkbox field, avatar |
| `--line` | `#262D34` | 60 | 3 | plate B pixel | every hairline: border, divider, rule. One value, 61 rules |
| `--porcelain` | `#EAEEF2` | 68 | 9 | plate B pixel | primary ink, and the mark |
| `--ash` | `#868F99` | 95 | 8 | plate B pixel | secondary ink: metadata, quote, placeholder, every recessed label |
| `--cyan` | `#33C4CC` | 10 | 3 | plate B pixel | the one accent: primary action, focus ring, selected row, active tab, citation |
| `--amber` | `#D9A441` | 4 | 2 | attribute A3 | low signal and warning, as information and never as an alarm |
| `--red` | `#E5484D` | 2 | 1 | attribute A3 | blocking failure only. Two rules, and both name the next move beside it |
| `--font-ui` | `"Inter",-apple-system,BlinkMacSystemFont,system-ui,sans-serif` | 4 | 0 | taste | every face a person reads |
| `--font-mono` | `"IBM Plex Mono",ui-monospace,Menlo,monospace` | 40 | 32 | attribute A2 | every number and every piece of provenance |
| `--r` | `6px` | 16 | 2 | matched to character | anything a hand acts on |
| `--r-sm` | `4px` | 8 | 1 | matched to character | a mark or a control that sits inside text |
| `--ease` | `cubic-bezier(0.22,1,0.36,1)` | 10 | 0 | technical decision | the one curve, on every transition |
| `--line-2` | `#3a444c` | 14 | 1 | was a literal in 4 classes | the second, brighter hairline: control outline and hover border |
| `--cyan-wash` | `rgba(51,196,204,0.10)` | 2 | 2 | was a literal in  | the accent as a surface |
| `--cyan-edge` | `rgba(51,196,204,0.30)` | 3 | 1 | was a literal in  | the accent as an edge |
| `--amber-wash` | `rgba(217,164,65,0.10)` | 3 | 2 | was a literal in  | low signal as a surface |
| `--amber-edge` | `rgba(217,164,65,0.32)` | 2 | 2 | was a literal in  | low signal as an edge |
| `--red-wash` | `rgba(229,72,77,0.10)` | 1 | 1 | NEW | failure as a surface |
| `--red-edge` | `rgba(229,72,77,0.32)` | 0 | 1 | NEW | failure as an edge |
| `--shadow` | `0 2px 4px rgba(0,0,0,0.4)` | 2 | 1 | was a literal in  | the one depth: a surface that floats above the screen |
| `--r-lg` | `12px` | 3 | 2 | was a literal in  | a sheet: the frame, the dialog, the auth card |
| `--pf-bg` | `#0c0c0e` | 0 | 1 | **none** | prototype chrome, not product language |
| `--pf-bg-3` | `#17171c` | 0 | 12 | **none** | prototype chrome, not product language |
| `--pf-border-light` | `#1e1e28` | 0 | 25 | **none** | prototype chrome, not product language |
| `--pf-text` | `#e8e8ec` | 0 | 20 | **none** | prototype chrome, not product language |
| `--pf-text-3` | `#66667a` | 0 | 44 | **none** | prototype chrome, not product language |
| `--pf-accent` | `#7c6af7` | 0 | 11 | **none** | prototype chrome, not product language |
| `--pf-accent-glow` | `rgba(124,106,247,0.12)` | 0 | 1 | **none** | prototype chrome, not product language |

---

## The four kinds of finding

### 1. Drift: one role written with two values

**One live case, and it is not a colour.** `--line-2` was itself the fix for the only colour
drift this kit had (`#333c44` in one rule against `#3a444c` in four), consolidated at Stage 07
Step 3. Nothing has drifted since: the product layer contains zero colour literals, so a value
cannot disagree with itself.

The drift that IS live was invisible in the file and came out of the browser, so it is written up
in `census.md`: **a `.btn--ghost` or a `.chip` rendered as a `<button>` falls back to Arial**,
because those two classes never declare `font-family` and a button does not inherit it. The same
class on an `<a>` renders in Inter. One component, two typefaces, decided by the tag.

### 2. One variable carrying several roles

Three, and all three are deliberate today and become separate semantic roles at Step 3:

- **`--canvas`** is the page ground AND the ink that sits on the accent (the label of a filled
  button, the checkmark inside a checked box). Two roles, opposite surfaces. They can never be
  allowed to move together: a theme that lightens the page must not lighten the text on a button.
- **`--surface`** is the ground of a card AND the hover ground of a row. Today one value; the
  moment a hover needs to be a step lighter than a card they part.
- **`--cyan`** is the primary action, the focus ring, the selected row and the citation marker.
  The action and the focus ring are the same claim ("this is where you act"), but the citation is
  a different one ("this is evidence"), and A2 signed it separately.

### 3. Values written past the variables

- **Three, exactly.** `border-radius: 4px` on `.check`, `.skelrow .skel-box` and `.skel`, where
  `--r-sm: 4px` exists. Every other radius in the file already goes through a variable.
- Codex reported a much longer list by matching on the VALUE rather than the property: every
  `gap: 4px`, `margin: 6px` and `padding: 12px` in the file. Those are not the same finding. A
  `gap` of 6px is not a radius that forgot its variable, and turning spacing into radius tokens
  would be a category error. **Narrowed on verification, with the three real cases named above.**
- No product colour hex and no font name is written inside a class. Both instruments agree.

### 4. Variables with no origin

Seven, and they are the same seven: `--pf-bg`, `--pf-bg-3`, `--pf-border-light`, `--pf-text`,
`--pf-text-3`, `--pf-accent`, `--pf-accent-glow`. They have no origin because they are **not
product language**: they are the portfolio chrome, declared in `kit.css` since Stage 06 and read
only by `design/_panel.css` and the two stands. Every one of the 23 product variables carries its
origin.

**This is the finding, not the missing comments.** A token file that the product imports should
not be where the portfolio's furniture keeps its colours. At Step 3 the seven move into
`design/_panel.css`, which is the file that uses them, and `tokens.css` starts life with product
values only. The Step 6 critique of Stage 07 already removed the chrome RULES from the kit; this
removes the chrome VALUES.

### Orphans

`--red-edge` is used by no product rule. It is the edge half of the failure pair, and its wash
half is used by `.notice--error`. Two ways out at Step 3: give the pair its second use (a failed
state that needs an edge), or drop it and keep failure to one surface. Named rather than kept
quietly, because an empty role is noise that real roles drown in.

Codex reported no orphans at all, because it counted the kit stand, where `--red-edge` paints its
own swatch. Both counts are right at their own scope, and the one that matters is the product's:
**a variable that only the page documenting it uses is not yet a role.**

---

## Where the two instruments disagreed

| Fact | Script | Codex | Checked in the file |
|---|---|---|---|
| Uses of `--cyan` | 11 product rules | 14 including the stand and the panel | Both right at their own scope. This table counts product rules and chrome uses in separate columns for exactly that reason |
| Orphan variables | 8, counting the seven chrome ones | none | The chrome variables are used, by chrome. Recorded as the chrome finding above, not as orphans |
| Values past the variables | 3 radii | 60 plus, matched by value | Narrowed to the 3 that are actually a radius. See above |
| Variables without an origin | 7 | 7 | Agreed |
| Colour literals in a class | 0 | 0 | Agreed |

---

## CHANGES OF APPEARANCE, NAMED

*The only three legal sources of a visual change in this stage. The pixel comparison at Step 8
checks every difference against these lists: a difference with no line here is a defect, and it
is fixed in `tokens.css` or in the component file, never on a screen.*

### Consolidated drift (Step 3)

*Decided at Step 2, executed at Step 3. Three lines, and every one of them was found by an
instrument rather than by reading.*

| Variable or class | Was | Becomes | Why |
|---|---|---|---|
| `.btn--ghost`, `.chip`, `.check` | no `font-family` declared, so a `<button>` fell back to Arial while the same class on an `<a>` rendered in Inter | `font-family: inherit` on the shared control base | One component may not have two typefaces decided by its tag. 8 ghost buttons and 9 chips on 7 screens rendered in the wrong face, and the stylesheet showed nothing. Measured, not read |
| `.check`, `.skelrow .skel-box`, `.skel` | `border-radius: 4px` | `border-radius: var(--radius-sm)` | The value is identical, so nothing moves visually. It is the last place in the file where a radius was written past its variable, and Step 8 audits exactly this |
| `--red-edge` | declared, used by no product rule | used by `.notice--error`, which today draws its edge from `--red` at full strength | The failure pair gets its second half, and the error band stops being the one notice whose edge is a different construction from the warning band's. Alternative considered and rejected: dropping the variable, which would leave the two bands built differently for no reason |

**Nothing else changes value.** The three lines above are the entire licence this stage has to
alter a pixel, and the comparison at Step 8 will hold every difference against them.

### Foundations review (Step 4)

*Two measurements taken while `tokens.css` was being written. Both are inherited from Stage 06,
both are recorded here as PROPOSALS with the numbers, and neither is applied until the review at
Step 4: this stage's licence to move a pixel is narrow on purpose.*

| Role | Measured | Threshold | Proposal |
|---|---|---|---|
| `--text-danger` (dark) | 4.94 on `--bg-page`, **4.47** on `--bg-surface`, **3.96** on `--bg-raised` | 4.5:1, ink | Split the primitive: `--red-400` stays the FILL and the LINE, and a new `--red-300 #EB6266` carries the INK. Measured 5.96 / 5.40 / 4.78, so it clears on all three grounds. The fill keeps its exact value, so the error band does not move; only the two lines of small red text change. **This is what the surface axis is for:** the ink role exists, so the fix is one word in one declaration instead of a repaint |
| `--line-control` (both themes) | **1.95 / 1.76** dark, **3.01 / 2.83** light | 3:1, WCAG 1.4.11 non-text | Raise to `#647280` in the dark theme (3.93 on page, 3.55 on surface, 3.14 on raised) and `#78838F` in the light one. This one IS visible: every input, chip and outlined button gets a brighter boundary. The alternative is to declare the boundary decorative, which it is not: an input on this product has a fill 1.19:1 from the page, so the border is the only thing that identifies it as a field |

**Both accepted at the review and applied.** The named change, in the format the pixel
comparison at Step 8 reads:

| Variable | Was | Became | Why |
|---|---|---|---|
| `--text-danger` (dark) | `var(--red-400)` #E5484D, 4.47 on a card and 3.96 on a raised surface | `var(--red-300)` #EB6266, 5.96 / 5.40 / 4.78 | The ink threshold is 4.5 and it failed on two of the three grounds it can land on. **The fill did not move:** `--bg-danger` and `--line-danger` still read `--red-400`, so the error band is the same band and only two lines of small red text changed |
| `--line-control` (dark) | `var(--grey-700)` #3A444C, 1.76 on a card | `var(--grey-600)` #647280, 3.93 / 3.55 / 3.14 | WCAG 1.4.11 asks 3:1 of anything that identifies a control. An input on this product sits 1.19:1 off the page, so its border is the only thing saying it is a field. This one is visible on every input, chip and outlined button, and that is the point |
| `--line-control` (light) | `var(--grey-350)` #8A96A3, 3.01 / 2.83 | `var(--grey-450)` #7E8A97, 3.52 / 3.30 / 3.10 | Passed on one ground and missed on the other. Same decision, same reason |

**One more, applied late at Step 7 under the same rule.** The theme stress test found the one
control boundary that the Step 4 review had not reached. Accepted by the owner on 2026-11-24.

| Class | Was | Became | Why |
|---|---|---|---|
| `.avatar` border | `var(--line-hairline)`, 1.26 dark and 1.20 light in the app bar | `var(--line-control)`, 3.55 dark and 3.30 light | The avatar is a control, the only way to Account, identified by its disc and its edge alone. WCAG 1.4.11 asks 3:1 of that edge and the hairline is decorative. Visible on all 27 app-bar screens as a brighter ring; `.acct-id-avatar` (a span on 7.0, not a control) keeps the hairline |

Two new primitives came in with them, `--grey-600` and `--red-300`, plus the light pair
`--grey-450`. They are steps the plate ramp did not have, and they exist because a threshold
asked for them rather than because a taste did.

### A deviation from the pipeline's letter, stated rather than smuggled

The pack asks for `:root` plus `[data-theme="dark"]`. This product is a dark instrument by
decision (Stage 06, attribute A1), so `:root` carries **dark** and the pair is
`[data-theme="light"]`. Writing `:root` as light would put a theme nobody ships in the position
of the default and make every component's base declaration a description of a theme rather than
of the product. The mechanism is unchanged and so is the proof it exists for: only semantic roles
are redefined, no primitive is touched, and Step 7 stress-tests the pair exactly as written.

### Moved onto system classes (Step 6)

*The second measurement (`census.md`, "Measurement after the system") rendered every colour screen
with `kit.css` replaced by `design/system/index.css`. Every row below is either a class the screen
now wears from the system instead of from `kit.css`, or a value that changed while doing it.
Format: class or variable, was, became, why.*

**Moved with no change of appearance.** The value is identical; only the file that declares it
moved. Step 8 should find no pixel difference from any of these.

| Class or variable | Was | Became | Why |
|---|---|---|---|
| `.acct-card-t`, `.acct-card-d` on 7.0 | a local name, `kit.css:619-620` | `.cardrow-t`, `.cardrow-d`, the two zones of the list row link in `cardrow.css`; renamed on `design/account.html` (3 rows) | The inventory gives the list row link exactly these zones, a title and a line. A local name for a component's own zones is a desync |
| `.ic` base rule | `kit.css:73` only | `base.css` | The system sized icons but never drew them: with `kit.css` gone, 40 of 40 icons measured on 6 screens rendered as filled black shapes |
| `.list` | `kit.css:143` only | `base.css` | The list reset; worn 14 times on 11 screens |
| 31 one-off classes (`mk-trust*`, `mk-footer`, `mk-foot-*`, `linkrow`, `reason`, `listnote`, `src-drop*`, `src-file`, `src-map*`, `src-review`, `src-sample`, `src-inc`) and the layout pieces `.summary`, `.titlerow`, `.block` | `kit.css` only | `design/system/one-off.css`, its own group after the organisms in `index.css` | One screen each, so not components; but a screen links one stylesheet, and they would have vanished with `kit.css` |
| `.src-map` | declared nowhere | `one-off.css`, `display: block` | Step 2 decided to declare the base of a modifier that was used without one; it was never done |
| `--line-2` as a decorative rule (`.mk-trust-item`, `.reason`) | `#3A444C` through `--line-2` | `--line-strong` (`--grey-700`, light `--grey-350`), a new decorative role | Mapping it to `--line-control` would have brightened two rules that identify nothing, by a Step 4 decision that was for controls |
| `.notice--warn`, `.rowalert` left rule | solid `--amber` | `--line-warning-strong` (`--amber-400`, light `--amber-700`), a new role | The system had mapped it to the 32 percent edge; this restores the drawn value. Owner's decision at Step 6 |
| `.appframe` and its twins | `screen-shell.css` | `design/kit/_page.css` | A stand style in a component file is a defect by the stage rule. Worn by kit pages only |
| `--pf-*` (7 chrome values) | `kit.css:60-61` | `design/_panel.css` | Step 2 decided "moved, not deleted"; not product language |

**Reverted to kit.css, byte for byte.** The atom round of 2026-08 changed these without a decision.
None was approved, so each one goes back. Step 8 should find no difference here.

| Class | Had drifted to | Back to |
|---|---|---|
| `body` | line-height 1.6 (`--leading-body`) | 1.5 |
| `.btn`, `.btn--bare` | a 1px border | no border; only `.btn--ghost` draws one |
| `.btn`, `.btn--ghost`, `.btn--bare` | gap 6px | 7px |
| `.btn--bare` | weight 500, padding 12px 8px | weight 400, padding 13px 8px |
| `.btn--icon` | font-size 14px (inherited), gap normal | 15px, gap 0 |
| `.rank`, `.field-label`, `.link--action` | 12.5px | 12px |
| `.link--action` | 4px side padding | none |
| `.chip-count` | 11px | 11.5px |
| `.drag` | 14px (inherited) | 13px |
| `textarea.input` | line-height 1.45 | 1.55 |
| `.group-t--section` | margin-top 26px | 24px |
| `.group-t` at 820 and below | rule missing | `padding: 14px 16px 6px`, and 0 on the two other forms |

**Changes of appearance, named here.**

| Variable or class | Was | Becomes | Why |
|---|---|---|---|
| The Step 4 `--line-control` row, corrected | "was #3A444C" for every input, chip and outlined button | **The outlined button and the chip at rest were `--line` #262D34 (the hairline), not #3A444C.** They now read `--line-control` #647280 | The Step 4 decision named the right intent (every control boundary at 3:1) and the wrong "was" for two of the three controls. 24 outlined buttons and 10 chips on the colour screens |
| `.chip.is-on` border | `--line-2` #3A444C | `--line-hover` #868F99 | Its rest boundary rose to #647280 at Step 4. The on state has to stay one step above its own off state, and `--line-hover` is that step. 6 chips |
| `button, input, select, textarea` | `font-family: inherit` only, the Step 3 row | `font: inherit; letter-spacing: inherit; color: inherit` | The same rule as the Step 3 row, finished: a control's type is decided by its class and not by its tag. Measured effect: tracking -0.011em on control labels (widths 1 to 5px narrower or wider), and line height inherited, so the bare button is 44.75px tall instead of 44px |
| `--line-danger` | the 32 percent edge, the Step 3 "consolidated drift" row | solid `--red-400`, light `--red-700`, as `kit.css` drew it | **The Step 3 row is withdrawn.** It rested on the belief that the warning band already used the soft edge; it did not. Both bands are solid again, built the same way |
| `.citechip:hover` | ink on the 30 percent edge: 1.82:1 dark, 1.73:1 light | `--bg-action` ground, `--text-on-action` ink: 9.13 / 6.27 | A measured AA failure, carried from `kit.css:387`. A hover state, so the rest pixels do not move |
| `.toolbar-row` (new zone) on 4.0, 4.1, 6.1, 6.2 | chips in `.toolbar-full`, hidden at 820 and below with no compact twin | chips in `.toolbar-row`, wrapping at every width | At 360 the evidence controls vanished. The grey draws them at every width (`wireframes/theme.html:81`). Visible at 820 and below only |

### Held against the product (Step 8)

*The pixel proof, `design/kit/pixel-proof.html`: the 22 colour screens rendered from commit
`2aa7baa` (the product as Step 1 measured it, on `kit.css`) and again on `design/system/index.css`,
dark, at 360 and 1440, cropped to the product canvas. Each difference was assigned to a line above
by a computed-style comparison of every element.*

**Every difference has a line.** 42 of 44 pairs differ, 6.4 Shared brief is identical at both
widths, and six lines account for all of it: `--line-control` dark (Step 4), the corrected
outlined-button and chip row, `.chip.is-on`, the control font inheritance and `.toolbar-row`
(Step 6), and the avatar edge (applied at Step 7). None is left without a line.

**The reach of the Step 4 `--line-control` row, named.** Besides inputs, selects and checkboxes it
moves three rings that are not controls but are declared identifying in their own files: the done
step of the phase strip (`phase-strip.css`), the numbered circle on 0.0 (`step-card.css`) and the
drop zone edge on 3.2 (`one-off.css`). Visible on 0.0, 2.2 and 3.2.

**Lines with no visible difference on the sample.** `--text-danger` (dark): no sample screen
carries small red ink at rest; the change shows on the frozen `kit.html` field error. `--line-control`
(light): the proof runs in the shipped theme by construction. Every Step 3 and Step 6 line that
promised no change showed none.


### Fixed at the critique (Step 9)

*A fourth source, stated rather than smuggled. The three lists above are the stage's legal sources
of a visual change up to the pixel proof. The Step 9 critique found defects that only a change of
appearance could close, and each one is written here as "variable or class, was, now, why", held
against the product by the same instrument as Step 8: the after frames of the touched screens were
re-taken, and every other screen came back at 0 differing pixels.*

| Code | Variable or class | Was | Now | Why |
|---|---|---|---|---|
| S9a | `.breadcrumb span`, the current page | `--text-secondary` at `opacity: 0.7`: 3.44 dark, 3.13 light on the page | `--text-secondary` as it is: 5.90 dark, 6.03 light; carries `aria-current="page"` | Under the 4.5 ink floor in both themes. Found by `/impeccable audit`; the Step 7 and Step 8 walks read the colour and never multiplied the element's opacity |
| S9b | `.step-sep`, the phase strip separator | `--text-secondary` at `opacity: 0.7` | `--text-secondary` | A colour no role holds. Decorative and `aria-hidden`, so no floor, dropped with S9a |
| S9c | `.theme:hover .theme-drill` | the drill moved 2px right with a transform | the drill changes its ink only | Owner decision at Step 9: a state does not move the element. Hover only: no frame at rest changes |
| S9d | "Add themes" on 6.1 and 6.2 | `.chip`, a facet that ran an action | `.btn--ghost`: primary ink, the ghost button's label size and padding, same 44px height | Owner decision at Step 9: a chip filters the view and never acts; the chip page forbade what the screen did. A markup change on two screens, copied from the toolbar page |

**Deleted with no change of appearance.** `--red-a32` and `--red-a35`: the 32 and 35 percent danger
edge had no consumer since Step 6 put the error band back to a solid rule; only their swatches on
`color.html` showed them. And, found by the second Codex pass, `--leading-snug`: no product rule
has read it since Step 6 put the textarea back to 1.55; the stand keeps 1.45 as its own literal.
84 primitives became 81, 38 colour primitives became 36.

**Held against the product.** Re-taken on 22 screens at 360 and 1440: 22 frames changed and 22 did
not. S9a shows on 3.2 and the four 4.0 and 4.1 pages (283 to 618 pixels, rows 68 to 120). S9b shows on
2.1, 2.2, 3.2, 6.1, 6.2 and 6.3 (22 or 23 pixels each, the two separators). S9d shows on 6.1 and
6.2 (4,015 pixels with S9b). Every other page: 0. S9c has no frame by construction. The light
illustrations on the pixel proof were re-taken for the same reason.

### Stage 10 Step 2: the scale in rem, three steps fluid, and the width tokens

*A deliberate change of values, one rule for the whole pipeline: a value never changes silently.
The asymmetric promise of Stage 10: at 360 the product moves by 0 pixels, and on a wider screen
every difference is explained by a row here or in `design/kit/docs/responsive.md`.*

| Variable or class | Was | Now | Why |
|---|---|---|---|
| `--type-3xl` | `36px`, and `.mk-h1` switched to `27px` below 820 | `clamp(1.6875rem, 1.3897rem + 1.3235vw, 2.25rem)`, 27 to 36px | a font size never switches at a point: the jump happens while somebody drags the window. Low end = what 360 showed |
| `--type-2xl` | `29px`, and `.pub-h1` switched to `24px` below 820 | `clamp(1.5rem, 1.3345rem + 0.7352vw, 1.8125rem)`, 24 to 29px | the same |
| `--type-xl` | `22px` | `clamp(1.375rem, 1.3088rem + 0.2941vw, 1.5rem)`, 22 to 24px | a screen H1 at 22px on a 1440 window reads small against a page that grew; two pixels only, because an instrument's headline is calm. Readers: `.h1`, `.mk-h2`, the title input, `.tier-price` |
| `--type-lead` | new; `.mk-lead` was `16px`, and `14.5px` below 820 | `clamp(0.90625rem, 0.8566rem + 0.2205vw, 1rem)` | the switch removed; read once, 0.0 |
| `--type-legal` | new; `.legal-prose` was `14.5px`, and `--type-base` below 820 | `clamp(0.875rem, 0.8584rem + 0.0735vw, 0.90625rem)` | the switch removed; read once, 9.x (grey only, no colour frame) |
| `--type-lg` to `--type-3xs` | px | the same values in rem (17px = 1.0625rem and so on) | rem follows the reader's own font size; at the default 16px nothing moves |
| `--bp-shell-wide` | none; 820px literal in 17 rules | `37.5rem` | the register of the one breakpoint. Read by the shell at Step 3 |
| `--container-page` | none | `65rem` | the page frame. Read at Step 3 |
| `--container-text` | none (`--measure-prose` 92ch held 98 to 122 characters) | `52ch`, 70 characters a line measured | the measure of continuous text. Read at Step 4, where `--measure-prose` retires |
| `--gutter-page` | none; 16, 18 and 22px at 360 | `clamp(1rem, 0.8014rem + 0.8823vw, 1.375rem)` | proposed one left edge; the owner decides at the Step 2 review |
| `--grid-col-min`, `--grid-gap` | none | `15rem`, `var(--space-4)` | the grid, from the source card grid. Read at Step 4 |

All the clamps grow from 22.5rem (360px) to 65rem (1040px), the page container: the type grows
while the page grows. Each middle term carries a rem addend (WCAG 1.4.4). Two `@media` rules went
with the switches (legal-doc.css, marketing-shell.css); public-doc.css lost one declaration.
17 width queries in the product became 15.

**Held against the product.** 24 colour screens at 360, 1024 and 1440 against commit `4536c96`:
at 360, 24 of 24 frames differ by 0 pixels, and the computed sizes equal Stage 08 exactly. At 1024
and 1440, every changed frame starts changing at the glyphs of its H1 (the screen H1 at 23.95 and
24px instead of 22, the frame 3px taller); 0.0 changes in its first line, lead and section titles;
6.4 changes at 1024 only (28.88px instead of 29) and is 0 at 1440; 6.3 and its loading state are 0
at both, because a dialog title reads `--type-lg`, which stays fixed. 29 of 72 frames: 0.
