# Control census - Sift

*Stage 08 Step 1, part B. Not read out of the code: measured in a browser with
`getComputedStyle` on every control of every colour screen, at two viewports. The file says what
a class declares; this says what the pixel actually is, and the difference between the two is
where the drift lives.*

*Internal document, English. No em dash anywhere in this file.*

---

## Measurement before the system (Step 1)

**Corpus.** 22 colour screens (all of `design/*.html` except the hub), each at **360px and
1440px**. The 360 is measured and not intended: `document.documentElement.clientWidth === 360` was
asserted on every page before anything was read, and `scrollWidth > clientWidth` was taken beside
it as the horizontal-scroll flag. Both viewports are walked because four controls in this product
exist in one width only: the header tabs and the full filter row above 820px, the bottom tabs and
the compact filter below it.

**What counts as a control.** `a[href]`, `button`, `input`, `select`, `textarea`, `label`,
`[role=button]`, `[onclick]`, or an element introducing `cursor: pointer` that its parent does not
have. The last clause is what catches a div pretending to be a button; there are none in this
product.

**What was taken.** For each control: font size, weight and family, all four paddings, radius,
border width and colour, background, text colour, transform and box-shadow, plus its rendered
box. Everything was captured first and folded afterwards, so that no property could be lost to
the key it was grouped by.

**478 controls captured** across the two viewports.

---

## 1. Drift inside a family

*More than one value on one property is a candidate for drift, not a variant, until the axis in
`inventory.md` that produces it is named. The table names the axis for every row.*

| Family | Controls | Property | Values | The axis, or the defect |
|---|--:|---|---|---|
| `btab` | 80 | bc | rgb(134, 143, 153) x60, rgb(51, 196, 204) x20 | same, and border-color here is currentColor, not a drawn border |
| `btab` | 80 | col | rgb(134, 143, 153) x60, rgb(51, 196, 204) x20 | rest against active. Declared state axis |
| `(unclassed <a>)` | 72 | fs | 13.5px x42, 12.5px x12, 12px x10 | unclassified, see below |
| `(unclassed <a>)` | 72 | fw | 400 x64, 590 x8 | unclassified, see below |
| `(unclassed <a>)` | 72 | pad | 0px 12px 0px 12px x42, 0px 0px 0px 0px x30 | unclassified, see below |
| `(unclassed <a>)` | 72 | r | 6px x42, 0px x30 | unclassified, see below |
| `(unclassed <a>)` | 72 | bc | rgb(134, 143, 153) x62, rgb(234, 238, 242) x10 | unclassified, see below |
| `(unclassed <a>)` | 72 | col | rgb(134, 143, 153) x62, rgb(234, 238, 242) x10 | unclassified, see below |
| `btn--ghost` | 52 | fs | 13.5px x46, 15px x6 | medium against large. Declared size axis (.btn--lg) |
| `btn--ghost` | 52 | pad | 0px 16px 0px 16px x46, 0px 22px 0px 22px x6 | medium against large |
| `btn--ghost` | 52 | ff | Inter x44, Arial x8 | **DEFECT. 8 of 52 render in Arial.** .btn--ghost never declares font-family, and a button does not inherit one. The same class on an <a> renders in Inter |
| `check` | 24 | bc | rgb(58, 68, 76) x14, rgb(51, 196, 204) x10 | unchecked against checked |
| `check` | 24 | bg | rgb(30, 37, 43) x14, rgb(51, 196, 204) x10 | unchecked against checked. Declared state axis |
| `input` | 20 | fs | 12.5px x12, 22px x4, 13.5px x4 | base against .input--dense against .input--title. Declared variants |
| `input` | 20 | fw | 400 x16, 590 x4 | .input--title carries the heading weight, by declaration |
| `input` | 20 | pad | 9px 32px 9px 10px x10, 11px 12px 11px 12px x6, 2px 0px 6px 0px x4 | the same three variants |
| `input` | 20 | r | 6px x16, 0px x4 | same |
| `input` | 20 | bc | rgb(58, 68, 76) x16, rgb(234, 238, 242) x4 | same |
| `input` | 20 | bg | rgb(21, 26, 31) x16, rgba(0, 0, 0, 0) x4 | .input--title is borderless and groundless by declaration |
| `input` | 20 | ff | Inter x18, IBM Plex Mono x2 | .input--mono, declared at the Stage 07 critique |
| `acct-nav-link` | 12 | bc | rgb(134, 143, 153) x10, rgb(234, 238, 242) x2 | rest against current |
| `acct-nav-link` | 12 | bg | rgba(0, 0, 0, 0) x10, rgb(11, 14, 17) x2 | rest against current. Declared state axis |
| `acct-nav-link` | 12 | col | rgb(134, 143, 153) x10, rgb(234, 238, 242) x2 | rest against current |
| `chip` | 12 | bc | rgb(38, 45, 52) x8, rgb(58, 68, 76) x4 | off against on |
| `chip` | 12 | bg | rgb(21, 26, 31) x8, rgb(30, 37, 43) x4 | off against on. Declared state axis |
| `chip` | 12 | col | rgb(134, 143, 153) x8, rgb(234, 238, 242) x4 | off against on |

**Everything above is a declared axis except one row, and that row is the whole reason this
census is taken in a browser.** `.btn--ghost` and `.chip` are complete declarations rather than
modifiers of `.btn`, and neither sets `font-family`. On an `<a>` the font is inherited from the
body and the control looks right; on a `<button>` the user agent's own default wins and the
control renders in Arial. Reading the stylesheet shows nothing. The count: 8 ghost buttons and 9
chips, on 7 screens.

The same clause reaches the checkbox, where it is invisible: an `<input type=checkbox>` has no
text, so its Arial does not render. It is fixed at the same time and for the same reason.

**Transform and box-shadow: one value each, across all 478 controls.** Nothing in this product
moves or lifts on interaction, which is the calm the language signed up for, and it is worth
recording as a measured fact before Stage 11 starts adding motion.

---

## 2. One job, several forms

| Job | Forms measured | Verdict |
|---|---|---|
| Primary action | `.btn` on 36 controls, one size, one padding, one radius, one ground | One form. Nothing to consolidate |
| Secondary action | `.btn--ghost` on 52, two sizes by the declared axis, plus the Arial defect above | One form plus one declared size. The typeface is a defect, not a form |
| A text action | `.link--action` on 2 (Clear filters) | One form, folded at Stage 07 from the old `.clear` |
| Bare action | `.btn--bare` on 4 (Load more) | One form |
| Row that opens something | `.snippet` 24, `.cardrow` 6, `.theme-main` 12, `.brief-title` 4 | **Four classes for one job**, and they are four components by anatomy rather than four forms of one: the evidence snippet is a quote, the card row is a title and a line, the theme main is a label plus a quote plus provenance, the brief title is a title with a widened hit area. Kept apart, and the reason recorded so it is not re-opened at Step 2 |
| Icon-only action | `.btn--icon` on 14 | One form |

---

## 3. Control without a form

*The VARIANTS column of `design/kit/docs/inventory.md` was read from all 38 wireframes. This is
that column minus what is actually drawn on the seven painted screens. Long by construction: the
colour layer is a sample of 7 screens plus 2 seeds out of a product of 38.*

| Component | Form declared in the inventory | Drawn in colour? |
|---|---|---|
| Button | disabled | No. The kit declares `[disabled]`, and no screen carries one. **Kept**: the state is real and Step 5 has to show it |
| Text input | error, focus | Error is drawn on 3.2. Focus is a state and cannot be drawn at rest; Step 5 shows it as a snapshot |
| Field label | visually hidden | Drawn on 6.1 |
| Filter chip | on | Drawn on 2.0 and 4.0 |
| Confidence | low signal | Drawn on 2.0, 4.1, 6.2 |
| Citation marker | static, linked | Both drawn, on 6.4 and 4.0 |
| Status tag | alert | Drawn on 3.5 |
| Avatar | 40px on the identity block | Drawn on 7.0 |
| Icon slot | 4 sizes | 3 of 4 drawn. The 17px numbered circle of the phase strip is drawn; the 26px marketing one is drawn on 0.0 |
| Theme card | hover, selected, clamped quote | Selected and clamped are drawn. Hover is a state, snapshot at Step 5 |
| Source row | syncing, failed | Both drawn on 3.0 and 3.5 |
| Evidence snippet | redacted | **Not drawn.** 5.1 is not in the sample. The class exists in the kit |
| Auth card | form, value, sent | **Not drawn.** 1.x is not in the sample. All three classes exist in the kit |
| Legal document | the whole organism | **Not drawn.** 9.x is not in the sample. The classes exist in the kit |
| Dialog | confirm with a destructive action apart | Drawn on 6.3, and 3.6 is not in the sample |
| Marketing page shell | the whole organism | Drawn on 0.0 |

**Nothing here is a defect.** Every undrawn form has a class in the kit already, because the kit
was built from the inventory of the whole product and not from the painted sample. What the list
is for is Step 5: each of these has to appear on its component page, or the next person to build
that screen will invent the form again.

**Verified before it was believed.** A control that is hidden by a state rather than absent is
not a finding. Every row above was checked against `kit.css`: all of them are declared. Nothing
was withdrawn.


---

## Measurement after the system (Step 6)

**The same instrument, the second time.** The same 22 colour screens at 360 and 1440, the same
definition of a control, the same properties. One difference in the setup: every screen was
rendered twice, A as shipped on `kit.css` and B with `kit.css` replaced by
`design/system/index.css`. The prototype panel was excluded from both. B is "after the system": the
product as it will look at Step 8 once `kit.css` is deleted, measured before that happens. The
script is `census2.js`, kept beside the Step 6 report (scratchpad); its rows are copied here.

**478 visible controls, the same count as Step 1.** 0 horizontal scroll at 360 under the system
alone, 0 console errors.

### The numbers, before and after

| | Step 1 (kit.css) | Step 6, first pass (system alone, before the fixes) | Step 6, after the fixes |
|---|--:|--:|--:|
| Control families (first class) | not recorded `[?]` | 23 | 23 |
| Rows with more than one value on one property | 26 | 28 | 27 |
| Rows that are a defect rather than a declared axis | 1 (Arial on a `<button>`) | 1 + the missing one-offs | **0** |
| Classes worn on a screen and declared nowhere in the system | n/a | 31 | **0** |
| Icons drawn as a stroke | 145 of 145 | 0 of 145 (40 of 40 measured on 6 screens rendered filled) | 145 of 145 (40 of 40 measured) |
| "Control without a form" rows still open | 16 listed, all closed at Step 2 | 1 (the provenance list) | **0** |

**Folded:** the one defect row of Step 1 is closed: no control renders in Arial. The new rows are
the large size of the filled button on 0.0 (a declared axis; Step 1 recorded `.btn` as 36 controls
of one size and the measurement now finds 42 with 6 large ones, and why Step 1 missed them is
`[?]`, because its script is not in the repo) and four sizes on the unclassed links instead of
three (the trust links on 0.0 at 14px, which Step 1's row does not list). Every remaining
multi-value row is a declared axis, as at Step 1.

### The three lists, as found (before any change)

**1. Missing in the system.**
- The `.ic` base rule: 145 icons.
- `.list`: 14 uses.
- The provenance list, a component with no colour form.
- 31 one-off classes on 0.0, 3.2, 4.0, 4.1 and 6.3.
- `.summary`, `.titlerow` and `.block`.
- `.src-map`, declared nowhere at all.

**All closed at Step 6**, see `tokens-audit.md`, "Moved onto system classes (Step 6)".

**2. Screens drawing past the system.** 0 `style=`, 0 `<style>` and 0 old names on the 22 screens.
The rename map was already executed for the colour layer at Stage 07; its rows stand for Stage 12
over `wireframes/`. One local name was found and moved: `.acct-card-t/-d` became
`.cardrow-t/-d`. The contextual rules inside one-offs (`.src-drop .iconslot`, `.src-map-row .input`
and the like) are layout on a block's own children and moved with their blocks.

**3. Classes nobody wears.** Counted in two corpora: the colour sample, then `wireframes/`.

| Class | Sample | wireframes/ | Verdict |
|---|--:|---|---|
| Auth card, 8 classes | 0 | 1.0, 1.1, 1.2 | waits for the rollout |
| `.field` | 0 | 10, on 4 screens | waits for the rollout |
| `.form` | 0 | 5 forms, on 4 screens | waits for the rollout |
| Legal document and Legal TOC | 0 | 9.0, 9.1, 9.2 | waits for the rollout |
| `.field-label-row` | 0 | 1 (1.0) | waits for the rollout |
| `.u-full` | 0 | 6 (the auth buttons) | waits for the rollout |
| `.notice--error` | 0 | 1, drawn as a plain notice on 3.4 | waits; backlog |
| `.field-err` | 0 | 0 drawn; named in the states of 1.0 and 1.2 | waits; backlog |
| `.link--muted` | 0 | 0 by class; **26 by form**: the inventory's 88 unclassed links include the footer and legal columns in secondary ink | waits for the rollout. **Withdrawn on verification:** the Step 6 report proposed deleting it on a class grep; `link.html` and the inventory count the form, not the class |
| `.redacted` | 0 | 0 | kept; backlog: 5.1 draws the redacted case as a notice, and Stage 12 decides whether the mark is used |
| `.appframe` | 0 product | stand only | moved to `design/kit/_page.css` |

### Found by the same measurement

The toolbar on 4.0, 4.1, 6.1 and 6.2 at 360. The evidence chips sat in `.toolbar-full`, which hides
at 820 and below, and these screens have no compact twin, so at 360 the controls vanished: on
4.0 the toolbar was 33.75px tall with nothing but a heading and the sort note. The grey draws them at
every width. Closed at Step 6 with the row form `.toolbar-row`.

After the fixes, the only differences B shows against A on any element are named in
`tokens-audit.md`:
- the Step 4 control boundary, with its corrected "was";
- the chip's on border;
- the control font inheritance;
- the citation chip hover;
- the toolbar row at 820 and below.

Two more differences show in the computed style, and neither has a pixel.
- The avatar's `color` goes from the user agent's link blue to the page ink (`a { color: inherit }`
  in `base.css`). The avatar has no text.
- The sort note's auto margin follows the width of the chips beside it.
