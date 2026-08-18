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

*(empty until Step 4)*

### Moved onto system classes (Step 6)

*(empty until Step 6)*

