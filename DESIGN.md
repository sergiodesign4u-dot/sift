---
name: Sift
description: A calm dark instrument that turns scattered customer feedback into ranked, traceable product decisions.
colors:
  canvas: "#0B0E11"
  surface: "#151A1F"
  elevated: "#1E252B"
  line: "#262D34"
  porcelain: "#EAEEF2"
  ash: "#868F99"
  cyan: "#33C4CC"
  amber: "#D9A441"
  red: "#E5484D"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "29px"
    fontWeight: 590
    lineHeight: 1.2
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 590
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 590
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.011em"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 590
    lineHeight: 1.4
    letterSpacing: "0.07em"
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "12.5px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "6px"
  lg: "12px"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ash}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "44px"
  chip-on:
    backgroundColor: "{colors.elevated}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "44px"
  checkbox:
    backgroundColor: "{colors.elevated}"
    rounded: "{rounded.sm}"
    size: "24px"
  checkbox-checked:
    backgroundColor: "{colors.cyan}"
    rounded: "{rounded.sm}"
    size: "24px"
  confidence-count:
    textColor: "{colors.porcelain}"
    typography: "{typography.mono}"
  badge-low-signal:
    backgroundColor: "rgba(217,164,65,0.10)"
    textColor: "{colors.amber}"
    rounded: "{rounded.sm}"
    padding: "1px 6px"
  citation-marker:
    backgroundColor: "rgba(51,196,204,0.10)"
    textColor: "{colors.cyan}"
    rounded: "{rounded.sm}"
    padding: "0 4px"
    height: "17px"
  theme-row:
    backgroundColor: "transparent"
    textColor: "{colors.porcelain}"
    padding: "13px 8px"
  theme-row-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.porcelain}"
    padding: "13px 8px"
  app-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.porcelain}"
    padding: "0 18px"
    height: "52px"
---

# Design System: Sift

*Product design language, formed at Stage 07 from the real code of the colored screens in `design/`
(`_theme.css`, `synthesis.html` and its three states, `shared-brief.html`) plus the Stage 06 draft
`DESIGN-artifacts.md`. Brand decisions come from the draft and are not rewritten here, only expanded
with the values the code actually carries. Where code and draft disagree, the disagreement is named
in the Tokens section rather than smoothed over. From Stage 08 the values live in
`design/system/tokens.css`, and this document's token section is read from it.*

*Internal document, English. No em dash anywhere in this file.*

## Overview

**Creative North Star: "The Command Center That Shows Its Work"**

Sift is read at 9pm in a dim room by a product manager who has 40 minutes and 3,750 pieces of
customer feedback. The screen is the only light source in that scene, so the interface recedes and
the signal stands out. That is why the system is dark: not because dark is current, but because the
one scene that fixes the product is a focused session in low light. Depth comes from four steps of
layered neutral tone separated by a hairline, never from a diffuse shadow, and the only saturated
color on a working screen is a single cool cyan spent on the one next action.

The second half of the North Star is the part that cannot be traded away. This product's defensible
claim is that every conclusion is traceable back to the customer voices behind it, so the visual
system is built to show evidence rather than to assert authority. A count sits inside the claim, in
a monospace face, because the number is what carries the weight. A representative customer quote
reaches the eye before the click, set as plain recessed prose rather than dressed as a card. Thin
evidence is marked with a quiet amber tag that reads as information, not as an alarm. A ranking with
no denominator cannot be checked, so the denominator is on the screen even when it is zero.

The system is deliberately unemphatic. It has one accent, three type weights and no more, no
gradient, no illustration, and one contained shadow in the entire product. Confirmed visual
rejections, carried from the Stage 06 anti-references: warm cozy AI (cream, terracotta, blush
gradients, rounded consumer friendliness), and generic corporate SaaS (default blue, stock
gradients, drop shadows, hero illustrations of small people). Both were rejected as the guessable
answer for the category, and anonymity reads as untrustworthy for a tool whose whole job is trust.

**Key Characteristics:**

- Dark by scene, not by fashion: four tonal steps from Canvas to Elevated, hairline separation.
- Exactly one accent, and it is almost never on screen.
- Grotesque plus monospace as a real contrast axis; the mono face is the trust surface.
- Evidence before the click: quote, count, and provenance on the row itself.
- States name the next move; nothing is a dead end.
- Type and whitespace carry hierarchy; color and badges do not.

## Colors

A restrained dark palette of four neutral surface steps, two text tones, and three semantic colors
that only ever appear on their exact semantic.

### Primary

- **Cyan** (`#33C4CC`): the single accent. It marks the one primary next action per view, the
  selected row (as a 2px inset rule on the left edge), the active bottom tab, the keyboard focus
  ring, and the citation marker on the public brief. On a document with no action to spend it on,
  the citation marker is where it lands, because there the citation is the trust surface. It is
  deliberately absent from filter chips, phase steps, and rank numbers: spending it on a filter
  would put the one accent in two places at once and dilute the primary action.

### Secondary

- **Amber** (`#D9A441`): low signal, and nothing else. It carries the `low signal` tag beside a
  thin theme's count, at 10 percent fill and 32 percent border over the surface beneath. Sized and
  toned to read as a fact about the evidence, never as a warning.
- **Red** (`#E5484D`): a failure that **blocks or destroys**, paired with the next move. A failed
  auth, a source that cannot be read, a disconnect confirmation. It is deliberately **not** used for
  a recoverable run failure where the previous result survives: the synthesis-error screen is drawn
  entirely in neutrals, because its own copy says the sources are still connected and nothing was
  lost, and painting that red would overstate the failure. Overstating is the same defect as
  understating, and A3 forbids both. This narrows the Stage 06 draft rule ("error is Red"), which
  was written too broadly; the draft is left untouched as the first source, and the narrowing is
  recorded in `docs/decisions.md`. Red has no live instance in the two seeded screens and gets one
  in the Step 5 sample, on a screen that genuinely blocks.

### Neutral

- **Canvas** (`#0B0E11`): page background and the deepest surface. Also the text color on the
  primary button, where cyan is the fill.
- **Surface** (`#151A1F`): card, panel, app bar, app footer, and the hover state of a ranked row.
  One step up from Canvas.
- **Elevated** (`#1E252B`): raised panel, menus, the active navigation tab, the checkbox field, and
  the chip that is switched on. Two steps up.
- **Line** (`#262D34`): every hairline border and divider in the product. Separation is by tone, so
  this token does more structural work than any other.
- **Porcelain** (`#EAEEF2`): primary text and the wordmark.
- **Ash** (`#868F99`): secondary text, metadata, provenance, inactive navigation, and the customer
  quote. The dimmest tone that is ever allowed to carry text.

### Named Rules

**The One Accent Rule.** Cyan appears on at most one action per view. If a second element wants it,
one of them is not the primary action, and the fix is to decide which, not to add a second accent.

**The Ash Floor Rule.** Ash (`#868F99`) is the dimmest tone that carries text anywhere in the
product, at roughly 5.5:1 on Canvas. Nothing darker gets text on it. A new text-on-background pair
is measured before it ships, not after.

**The Semantic-Only Rule.** Amber means low signal. Red means blocking failure. Neither is ever used
for emphasis, decoration, category coding, or chart series. A color that has learned a second
meaning has lost the first.

### Two themes

The product ships dark. The light theme is the pair the semantic level owes: every role is
redefined under `[data-theme="light"]` in `design/system/tokens.css`, and no primitive is. It was
stress-tested at Stage 08 Step 7 on the whole stand, both frozen stands and all 22 colour screens,
at 1440 and 360. Not one pair value had to move. Ratios below are WCAG contrast against the ground
named; ink owes 4.5:1, a line or fill that identifies a control owes 3:1, a decorative divider
owes nothing.

| Pair | Dark | Light | Floor | Reading |
|---|---|---|---|---|
| `--text-primary` on the page | 16.60 | 19.35 | 4.5 | passes |
| `--text-secondary` on a card | 5.34 | 5.66 | 4.5 | passes; the dimmest ink anywhere |
| `--text-on-action` on `--bg-action` | 9.13 | 6.27 | 4.5 | passes; 10.85 / 8.20 on hover |
| `--text-evidence` on the page | 9.13 | 6.27 | 4.5 | passes |
| `--text-warning` on the page | 8.60 | 5.93 | 4.5 | passes |
| `--text-danger` on a raised surface | 4.78 | 5.18 | 4.5 | passes |
| `--text-warning` on its wash, over a card | 6.59 | 4.72 | 4.5 | passes |
| `--text-warning` on its wash, over a raised surface | 5.77 | 4.44 | 4.5 | fails in light: never placed there |
| `--text-danger` on its wash, over a raised surface | 4.36 | 4.30 | 4.5 | fails in both: never placed there |
| `--line-control` on a raised surface | 3.14 | 3.10 | 3 | passes, at its narrowest |
| `--line-focus` on a raised surface | 7.31 | 5.52 | 3 | passes |
| `--line-warning-strong` / `--line-danger` on the page | 8.60 / 4.94 | 5.93 / 5.88 | 3 | passes |
| `--line-hairline` on the page | 1.39 | 1.28 | none | decorative |
| page to surface / surface to raised | 1.11 / 1.13 | 1.06 / 1.07 | none | a ground; see below |

**The light ladder is half as steep.** Separation in this product is by tone plus the hairline,
and in the light theme each tone step is about half the distance of the dark one. Nothing merges,
because every surface that sits on a step also carries the hairline. The places that rely on tone
alone are the weakest in the light theme: the current app-bar tab (1.07, also carried by its ink),
the skeleton (1.06) and the account avatar's fill (1.07). The avatar is a control, and its edge
read 1.20 light and 1.26 dark on the hairline: a role choice rather than a pair value. It now
reads `--line-control`, 3.30 light and 3.55 dark, like every other control boundary (decided
2026-11-24, `docs/decisions.md` under Stage 08 Step 7).

**Two placements are forbidden by measurement, not by taste.** A warning or an error band never
sits on a raised surface (a dialog, a menu): its ink on its own wash falls under 4.5 there. No
screen does it today.

**If the light theme is not kept as a feature,** only the product's switch goes: the button in
`design/_nav.js`, the file `design/_theme.js` and its `<script>` line in the head of each colour
screen (all three added at Stage 08 Step 8, with their own key `sift-theme`). The
light block in `tokens.css`, this table, both themes on `design/kit/color.html` and the switch on
the stand stay: the pair is the only proof that the semantic level is overridden separately from
the primitives.

## Typography

**Display Font:** Inter (with `-apple-system`, `BlinkMacSystemFont`, `system-ui`, `sans-serif`)
**Body Font:** Inter (same stack)
**Label/Mono Font:** IBM Plex Mono (with `ui-monospace`, `Menlo`, `monospace`)

**Character:** a clean humanist grotesque paired with a true monospace, which is a real contrast axis
rather than two similar sans faces. The grotesque is set tight (negative tracking that grows with
size, from -0.011em at body to -0.022em at display) and never shouts; the mono is reserved for
things that are counted or cited. The pairing is the typographic form of the product's argument: the
prose states the finding, the mono states the evidence.

### Hierarchy

- **Display** (590, 24 to 29px, 1.2, -0.022em): the public brief title, fluid (see Adaptive). The
  largest type anywhere in the product, and it appears on the one surface a stranger opens cold.
- **Headline** (590, 22 to 24px, -0.02em): the app screen H1, fluid. One per screen.
- **Title** (590, 17px to 19px, -0.015em to -0.02em): section headings inside the public brief, and
  the title line of an empty or error state.
- **Body** (400, 14px, 1.5, -0.011em): the base. Theme labels step to 500 weight at the same size.
  Reading measure is capped: continuous text stops at `--container-text` (52ch, about 70 characters
  of Inter); a screen subtitle keeps 70ch and a theme card quote 78ch, both one sentence, by decision.
- **Label** (590, 11px, 0.07em, uppercase): the eyebrow above a section of the public brief, and the
  wordmark. The only uppercase in the product.
- **Mono** (500, 12.5px): counts, ranks, provenance lines, citation numbers, timestamps, and the app
  footer. Sizes step down to 11px for provenance and 10.5px inside a citation marker.

### Named Rules

**The Number Carries The Weight Rule.** Any quantity a user might quote or check is set in IBM Plex
Mono: `n=42`, the rank number, the item counts in a scope line, the citation index. Prose never
carries a number that the reader is expected to verify.

**The Plain Finding Rule.** A theme statement is set in the grotesque at reading size in normal
case, as an editorial finding. Never uppercase, never a colored label chip, never a marketing
headline. The plainness of the type is how "the customer's words, not the product's" reads in a
dark instrument.

## Layout

The product is one column. Two container models exist, and the choice between them is the density
decision:

- **The app frame** (`max-width: 1080px` page, app frame filling it): a bordered, 12px-radius
  container with a 52px bar, a flexible main region padded 20px by 22px, and a footer. Minimum
  height 560px so a sparse state still reads as a screen rather than as a fragment.
- **The reading column** (`max-width: 720px`, centered, padded 34px by 24px): the public brief. No
  app chrome at all, so hierarchy has to come from type and rule alone.

**Density is reasoned from the desktop, order is mobile-first.** A ranked row is a five-column grid
(check, rank, main, confidence, drill) at desktop and a four-column grid with a named-area reflow at
360px, where the confidence pill drops to its own row under the body and the representative quote
clamps to two lines. What drops on mobile is decided by asking what the desktop row can afford to
lose.

**One breakpoint, and it is the shell's.** Until Stage 10 the coloured layer changed everything at
an 820px viewport. Since Stage 10 the one viewport point is `--bp-shell-wide` (37.5rem) and it swaps
the navigation only; every other change of width is a component answering its own place. The whole
model is the section "Adaptive" below.

**Spacing is a scale, in rem.** `--space-1` to `--space-12` (4 to 32px at the default size), the
steps the product measured on real screens since Stage 07. Since Stage 10 the scale and every
spacing literal are rem at the same values, so the air grows with the reader's font size.

**Target floor: 44px.** Every interactive control has a 44px minimum hit height, with three named
exceptions, each written down rather than tolerated: the row checkbox is 24px (the AA floor, because
a 44px checkbox would double the height of every row in a ranked list), the avatar reads at 28px and
is hit at 44px through a transparent `::after` overlay, and the inline citation marker at 17px is a
typographic mark inside prose, not a target.

## Adaptive

*Stage 10. Source: `design/kit/docs/responsive.md`, shown on `design/kit/responsive.html`.*

**One layout that breathes, not three versions.** There is no mobile, tablet or desktop edition:
one layout with one named change, which looks deliberate at 360, 412, 900 and 1440 although nobody
drew those widths. 360 is the base and did not move by a pixel at this stage; every difference on a
wide screen is a row of the width audit.

**Three ways, read top down.** Fluid first (`clamp()` with a rem addend, `%`, `minmax()` with
auto-fit, `flex-wrap`); then the container (a limit and a measure, `--container-page` 65rem and
`--container-text` 52ch); a breakpoint last, only where the fluid physically cannot do the job.
The number of grid columns is not a token: `auto-fit` from `--grid-col-min` counts them.

**One point, named by the change: `--bp-shell-wide`, 37.5rem.** Its origin is the audit row "shell"
(every signed-in screen): the header row of brand, three sections and avatar measures 24.1rem, so at
360 it does not fit, and 37.5rem is the smallest width of the census above that (the grey
contract's 600). From it the header carries the three sections and is sticky; below it the bottom
tabs do. Exactly one carrier at any width, the hidden one out of the accessibility tree too. A
media query cannot read `var()`, so the two queries carry the literal and the token is the register.
The audit found no second change of behaviour, so there is no second point: two is a ceiling.

**A component measures its place, not the window.** Seventeen `@container` queries on fifteen
register rows; whoever places a component declares `container-type` (the shell for the page column
and the frame, the public column, the two patterns). A screen file holds no `@media`, no
`@container`, no `style=`, ever.

**The shell, form A.** Three sections and an account in a corner (IA, Stage 03a): the sections move
into the header from 37.5rem; no rail, because there is no second level that must stay visible.
The page frame centres one 65rem column while the grounds of the header, page and footer run full
width.

**Type and space follow the reader.** Every size and space is rem; the three heading steps and two
reading sizes are fluid from their 360 value; a font size never switches at a point.

**No new behaviour at width.** No split view: no list and detail pair reached the threshold, and
4.0 stays one dense column as the IA asks. Geometry has no theme pair; what exists only wide (the
header sections, the account rail, the legal rail) reads colour roles and was checked in the dark
theme.

## Elevation & Depth

**This system does not use shadows for depth.** Depth is tonal: Canvas, Surface, Elevated, separated
by the Line hairline. A raised element is raised because it is a lighter tone with a border, not
because it casts light.

Exactly one shadow exists in the entire product.

### Shadow Vocabulary

- **Sheet** (`--shadow-sheet`: `0 2px 4px`, black at 40 percent in the dark theme, at 12 percent in
  the light): the dialog, the one component in the system that reads it. Tight, low, and dark. It
  is a containment device, not an elevation cue: the dialog also carries the hairline, and no
  separation rests on the shadow. The stand's frame around a screen (`.appframe` in
  `design/kit/_page.css`) borrows the same role; that frame is prototype chrome, not product.

### Named Rules

**The Tonal Depth Rule.** To raise something, move it one step up the neutral ladder and give it a
Line border. Do not add a shadow. A second shadow in this product is a defect, not a variant.

**The Inset Marker Rule.** State that belongs to a row is drawn as an inset rule on the leading edge
(`box-shadow: inset 2px 0 0` in Cyan for the selected theme), not as a background wash. The row keeps
its density and the marker survives at 360px.

## Shapes

Corners are small and consistent: 4px for marks and controls that sit inside text or inside a row
(citation marker, low-signal badge, checkbox, skeleton bar), 6px for anything a hand acts on
(button, chip, panel), 12px for the one large container that holds the whole product surface. Circles
are reserved for three things only: the avatar, the numbered step in the phase strip, and the icon
disc in an empty or error state.

Borders are a single hairline at 1px in Line, and they are the primary structural device in the
system. Where a border would have to carry meaning rather than structure, it steps up in tone
instead of in weight or hue: the switched-on chip and the completed phase step take a lighter
neutral outline, not a colored one.

Icons are Solar at Linear weight, inlined as SVG, on a 1.6 stroke with round caps and joins, drawn in
`currentColor` so they inherit the text tone they sit beside. There is one icon set in the whole
product; mixing sets is a visual desync.

## Components

### Buttons

- **Shape:** small radius (6px), 44px minimum height, 16px horizontal padding, 7px gap to an icon.
- **Primary:** Cyan fill with Canvas text. One per view. Hover is `filter: brightness(1.08)`, so the
  hover state needs no second token. Icons inside it are 15px.
- **Ghost:** transparent with a Line border and Porcelain text, same geometry as primary. Hover
  lightens the border only. This is the shape every secondary action takes; there is no third button
  emphasis.
- **Focus:** the global `:focus-visible` ring, a 2px Cyan outline at 2px offset with a 4px radius.
  Focus is the keyboard's version of active, so it takes the same color as active, and
  `:focus-visible` keeps it off a mouse click.

### Chips

- **Style:** Surface fill, Line border, Ash text, 6px radius, 44px tall, 12px horizontal padding,
  with the facet count set in mono beside the label.
- **State:** the on-chip steps up to Elevated with a lighter neutral border and Porcelain text,
  including its count. It does not take the accent, by rule.
- **Clear:** a borderless underlined text control at the end of the row, present only while
  something is filtered.

### Cards / Containers

- **Corner Style:** 12px on the app frame, 6px on inner panels.
- **Background:** Canvas for the frame, Surface for panels and the key-takeaways block.
- **Shadow Strategy:** none on inner containers. See Elevation and Depth.
- **Border:** 1px Line on everything.
- **Internal Padding:** 18px by 20px on a panel, 20px by 22px on the app main region.

### Inputs / Fields

- **Checkbox:** 24px square, Elevated fill, 4px radius, neutral outline. Checked state fills Cyan and
  draws a Canvas-colored tick with a rotated border, so the mark needs no icon asset.
- **Focus:** the global ring.
- The rest of the form vocabulary (text field, textarea, select, radio, toggle) exists in the grey
  wireframes and has no colored instance yet. It enters the kit at Stage 07 Step 3 as a primitive,
  not as an invention.

### Navigation

- **Desktop:** a 52px Surface bar carrying the wordmark, three text tabs, and the avatar. A tab is
  Ash at rest, Porcelain on hover, and Porcelain on Elevated when active. Tabs are 44px tall inside
  a 52px bar.
- **Narrow (under 37.5rem, 600px):** the tab row is replaced by a sticky bottom tab bar on Surface with a Line
  top border. The active tab is the one place cyan appears in navigation, on both the icon and the
  label.
- **Public surfaces** carry a bar with the mark and a read-only tag, and no navigation at all.

### The Ranked Theme Row (signature component)

The component the whole product is built around, and the reason the language exists.

A single row carries, in reading order: a select checkbox, a mono rank number, the theme label in
Porcelain at 500 weight, a representative customer quote in Ash behind a leading hairline, a mono
provenance line naming which sources fed it and how recent it is, the confidence indicator (`n=X` in
mono Porcelain, plus the amber low-signal tag when the evidence is thin), and a drill affordance that
shifts 2px on hover.

Three things about it are load-bearing. The quote is on the row because the trust chain starts before
the click. The rank is written as a number because a ranking claim is only quotable if the position
is written down. And the confidence indicator is never color-only: the count and the badge word carry
the meaning, so it survives grayscale and color blindness.

### The Scope Line (signature component)

One line of Ash text under the screen head, with its numbers in mono Porcelain, stating the result
count and its denominator. It restates itself when a filter narrows the list, and it stays in every
state, including when the count is zero, because a ranking with no denominator cannot be checked. In
the error state it states what is still true and links to it.

## Do's and Don'ts

### Do:

- **Do** spend Cyan once per view, on the one primary next action, and let hierarchy carry
  everything else.
- **Do** set every quantity a reader might check in IBM Plex Mono, and keep prose numbers out of the
  trust surface.
- **Do** raise a surface one tonal step and give it a 1px Line border.
- **Do** keep the scope line in every state, including empty and error, and state the denominator
  even when it is zero.
- **Do** put a representative customer quote on the row, recessed in Ash behind a leading hairline.
- **Do** give every state a named next move and a visible exit.
- **Do** hold the 44px target floor, and write down any exception with its reason next to it.
- **Do** measure a new text-on-background pair before shipping it, against the Ash floor.

### Don't:

- **Don't** add a second shadow. There is exactly one in the product and it is on the dialog.
- **Don't** put Cyan on a filter chip, a rank number, a phase step, or a hover state. Those step up a
  tone instead.
- **Don't** use Amber or Red for emphasis, category, or decoration. They mean low signal and blocking
  failure, and nothing else.
- **Don't** set a theme statement in uppercase, in a colored label chip, or as a headline. It is an
  editorial finding in the customer's words.
- **Don't** dress a thin theme to look strong. The difference between strong and thin is weight and a
  quiet tag, never decoration.
- **Don't** introduce a gradient, an illustration, a stock photograph on an app surface, or an avatar
  of an invented person. Feedback authors are PII-scrubbed, so a face would be a lie.
- **Don't** mix icon sets. Solar Linear, inline SVG, `currentColor`, one stroke weight.
- **Don't** write a value directly into a class. Every value belongs to a variable in `:root`.

## Tokens: two levels

Tokens live on two levels in `design/system/tokens.css`. The **primitive** level holds raw values
with no meaning: colour, type, geometry and motion. The **semantic** level holds the colour roles,
each one a `var()` onto a primitive, each one redefined under `[data-theme="light"]`; the product
ships dark, so `:root` carries the dark theme. Geometry has no semantic level by rule, because there
is nothing for a theme to override in a radius: a component reads radius, space and size straight
from the primitive. A component reads colour ONLY through a semantic role. Origins are carried as
the comment beside each token in `tokens.css` has them, shortened to key words, never invented.

### Primitive

**Neutral ramp, dark instrument.**

| Token | Value | Origin |
|---|---|---|
| `--grey-950` | `#0B0E11` | plate B pixel. Was --canvas |
| `--grey-900` | `#151A1F` | plate B pixel. Was --surface |
| `--grey-850` | `#1E252B` | plate B pixel. Was --elevated |
| `--grey-800` | `#262D34` | plate B pixel. Was --line |
| `--grey-700` | `#3A444C` | plate B pixel, recovered from four in-class literals at Stage 07. Was --line-2 |
| `--grey-600` | `#647280` | Step 4 review. The step the plate ramp did not have: --grey-700 reads 1.76 against a card, and a border that identifies a control owes 3:1 |
| `--grey-400` | `#868F99` | plate B pixel. Was --ash |
| `--grey-050` | `#EAEEF2` | plate B pixel. Was --porcelain |

**Light ramp.** New primitives: a theme pair cannot be built from the dark ramp, because a role is
measured against the opposite ground. No semantic meaning is stored here.

| Token | Value | Origin |
|---|---|---|
| `--grey-000` | `#FFFFFF` | light pair of --grey-950 |
| `--grey-025` | `#F6F8FA` | light pair of --grey-900 |
| `--grey-075` | `#EDF1F5` | light pair of --grey-850 |
| `--grey-150` | `#DFE4EA` | light pair of --grey-800 |
| `--grey-450` | `#7E8A97` | Step 4 review. Light pair of --grey-600 |
| `--grey-350` | `#8A96A3` | light pair of --grey-700 |
| `--grey-550` | `#5A646E` | light pair of --grey-400 |

**Hues.** One accent and two signals.

| Token | Value | Origin |
|---|---|---|
| `--cyan-300` | `#5BD3DA` | Step 5. One step up the accent, for the hover of the action in the dark theme |
| `--cyan-400` | `#33C4CC` | plate B pixel. The one accent. Was --cyan |
| `--cyan-700` | `#0B6B70` | light pair: the same accent at a step that holds on white |
| `--cyan-800` | `#08585C` | Step 5. One step down, for the hover of the action in the light theme: a pair is not a mirror |
| `--amber-400` | `#D9A441` | attribute A3. Low signal and warning. Was --amber |
| `--amber-700` | `#8A5A00` | light pair |
| `--red-400` | `#E5484D` | attribute A3. Blocking failure. Was --red. FILL and LINE only |
| `--red-300` | `#EB6266` | Step 4 review. The same signal one step lighter, for INK: --red-400 fails 4.5:1 on two of the three grounds it can land on |
| `--red-700` | `#C0272D` | light pair |

**Alpha washes.** A hue used as a surface or an edge. Each was a literal inside a class until
Stage 07 Step 3 named it.

| Token | Value | Origin |
|---|---|---|
| `--cyan-a10` | `rgba(51,196,204,0.10)` | named at Stage 07 Step 3 |
| `--cyan-a30` | `rgba(51,196,204,0.30)` | named at Stage 07 Step 3 |
| `--amber-a10` | `rgba(217,164,65,0.10)` | named at Stage 07 Step 3 |
| `--amber-a32` | `rgba(217,164,65,0.32)` | named at Stage 07 Step 3 |
| `--red-a10` | `rgba(229,72,77,0.10)` | named at Stage 07 Step 3 |
| `--black-a40` | `rgba(0,0,0,0.40)` | named at Stage 07 Step 3 |
| `--cyan-a12` | `rgba(11,107,112,0.12)` | light pair: the same wash has to be darker to register on a white ground |
| `--cyan-a35` | `rgba(11,107,112,0.35)` | light pair, as above |
| `--amber-a12` | `rgba(138,90,0,0.12)` | light pair, as above |
| `--amber-a35` | `rgba(138,90,0,0.35)` | light pair, as above |
| `--red-a12` | `rgba(192,39,45,0.12)` | light pair, as above |
| `--black-a12` | `rgba(16,20,24,0.12)` | light pair, as above |

**Type.** Two faces, and the scale the product actually renders, measured on the screens. The scale
is `--type-*` and not `--text-*`, because `--text-` means ink and nothing else.

| Token | Value | Origin |
|---|---|---|
| `--font-ui` | `"Inter",-apple-system,BlinkMacSystemFont,system-ui,sans-serif` | taste. Vercel / Geist, Linear; A5 |
| `--font-mono` | `"IBM Plex Mono",ui-monospace,Menlo,monospace` | attribute A2. The count is the trust surface; A4 |
| `--type-3xl` | 36px | the marketing first line, 0.0 only |
| `--type-2xl` | 29px | display: the public document H1 |
| `--type-xl` | 22px | headline: a screen H1 |
| `--type-lg` | 17px | title: a dialog, a section of a document |
| `--type-md` | 15px | reading size on a document |
| `--type-base` | 14px | body |
| `--type-sm` | 13.5px | every control label |
| `--type-xs` | 12.5px | secondary line, metadata |
| `--type-2xs` | 11px | mono provenance, the badge |
| `--type-3xs` | 10px | the micro uppercase label |
| `--weight-regular` | 400 | not stated |
| `--weight-medium` | 500 | not stated |
| `--weight-strong` | 590 | the one strong weight. 600 was folded into it at Stage 07 |
| `--leading-tight` | 1.2 | not stated |
| `--leading-body` | 1.6 | not stated |
| `--leading-loose` | 1.75 | document prose only |
| `--tracking-display` | -0.022em | not stated |
| `--tracking-head` | -0.02em | not stated |
| `--tracking-title` | -0.015em | not stated |
| `--tracking-body` | -0.011em | not stated |
| `--tracking-caps` | 0.07em | the micro uppercase label |

**Geometry.** No semantic level.

| Token | Value | Origin |
|---|---|---|
| `--radius-sm` | 4px | matched to character. A mark or a control that sits inside text |
| `--radius-md` | 6px | matched to character. Anything a hand acts on |
| `--radius-lg` | 12px | matched to character. A sheet: the frame, the dialog, the auth card |
| `--radius-pill` | 50% | the avatar and the numbered circle |
| `--ring-width` | 2px | the keyboard ring's stroke, in `--line-focus` (Stage 09 Step 6: a literal until then) |
| `--ring-offset` | 2px | the gap between a control and its ring |
| `--ring-offset-wide` | 4px | the title input only, so the ring clears its dashed underline |
| `--space-1` | 4px | not stated |
| `--space-2` | 6px | not stated |
| `--space-3` | 8px | not stated |
| `--space-4` | 10px | not stated |
| `--space-5` | 12px | not stated |
| `--space-6` | 14px | not stated |
| `--space-7` | 16px | not stated |
| `--space-8` | 18px | not stated |
| `--space-9` | 22px | not stated |
| `--space-10` | 26px | not stated |
| `--space-12` | 32px | not stated |
| `--size-target` | 44px | the target floor. Three named exceptions, all in conventions.md |
| `--size-check` | 24px | the checkbox, at the AA floor by a named exception |
| `--size-bar` | 52px | the app bar and the public bar |
| `--measure-prose` | 92ch | the longest line the product allows anywhere |

**Motion and shadows.** `tokens.css` carries one motion token and no duration tokens.

| Token | Value | Origin |
|---|---|---|
| `--ease` | `cubic-bezier(0.22,1,0.36,1)` | technical decision. Ease out, restrained |
| `--shadow-dark` | `0 2px 4px var(--black-a40)` | the one depth, on a dark ground |
| `--shadow-light` | `0 2px 4px var(--black-a12)` | its light pair: on white a shadow is a hint, not a hole |

**Stage 07 brand names, still used in prose and in the front matter, and the primitive that holds
each value now.**

| Stage 07 name | Primitive |
|---|---|
| Canvas | `--grey-950` |
| Surface | `--grey-900` |
| Elevated | `--grey-850` |
| Line | `--grey-800` |
| Porcelain | `--grey-050` |
| Ash | `--grey-400` |
| Cyan | `--cyan-400` |
| Amber | `--amber-400` |
| Red | `--red-400` |

### Semantic roles

A role paints exactly one surface, and the prefix says which: `--bg-*` is a fill (3:1, WCAG 1.4.11),
`--text-*` is ink (4.5:1, or 3:1 from 24px and from 19px bold), `--line-*` is a line (3:1 where it
identifies a control or a state, exempt where decorative). The pair is not a mirror: contrast is
measured against the opposite ground, so the light theme takes a different step. Numbers are the
ones the comments in `tokens.css` state; where a comment gives none, the cell says "not stated".
The "uses" column is the count and the examples as the comment gives them.

| Role | Surface | Dark | Light | Uses | Contrast dark / light |
|---|---|---|---|---|---|
| `--bg-page` | fill | `--grey-950` | `--grey-000` | the ground of every screen: all 23 pages | not stated |
| `--bg-surface` | fill | `--grey-900` | `--grey-025` | card, panel, bar, hover ground of a row: 31 rules, 20 screens | 1.11 / 1.06 off `--bg-page`; exempt as a ground, always with `--line-hairline` |
| `--bg-raised` | fill | `--grey-850` | `--grey-075` | a surface above another surface: 10 rules (active tab, dialog, checkbox field, avatar) | 1.25 / 1.14 off `--bg-page`, 1.13 / 1.07 off `--bg-surface` |
| `--bg-action` | fill | `--cyan-400` | `--cyan-700` | the one filled action: 36 controls across 12 screens | 9.13 / 6.27 on page |
| `--bg-evidence` | fill | `--cyan-a10` | `--cyan-a12` | the accent as a surface, under a citation: 2 rules | 1.19 / 1.19 over `--bg-surface` |
| `--bg-warning` | fill | `--amber-a10` | `--amber-a12` | low signal and a recoverable failure: 3 rules (low-signal badge, warning band, alert tag) | 1.18 / 1.18 over `--bg-surface` |
| `--bg-danger` | fill | `--red-a10` | `--red-a12` | a failure that blocks or destroys: 1 rule (the error band) | 1.10 / 1.21 over `--bg-surface` |
| `--text-primary` | ink | `--grey-050` | `--grey-950` | every heading, label and name: 78 rules, all 23 pages | 16.60 / 19.35 on page |
| `--text-secondary` | ink | `--grey-400` | `--grey-550` | metadata, quote, placeholder, every recessed label: 104 rules, all 23 pages | 5.90 / 6.03 |
| `--text-on-action` | ink | `--grey-950` | `--grey-000` | the ink ON the accent: the label of a filled button, the checkmark in a checked box | 9.13 / 6.27 against `--bg-action` |
| `--text-evidence` | ink | `--cyan-400` | `--cyan-700` | the citation marker, and nothing else: 2 rules on 4.0 and 6.4 | 9.13 / 6.27 on page |
| `--text-warning` | ink | `--amber-400` | `--amber-700` | the low-signal word and the alert tag: 4 rules | 8.60 / 5.93 |
| `--text-danger` | ink | `--red-300` | `--red-700` | the field error, and nothing else: 1 rule (field.css) | 5.96 / 5.40 / 4.78 dark on page / surface / raised; 5.88 / 5.53 / 5.18 light |
| `--line-hairline` | line | `--grey-800` | `--grey-150` | decorative. Every divider and card edge: 64 rules, all 23 pages | 1.39 / 1.28 on page, exempt |
| `--line-control` | line | `--grey-600` | `--grey-450` | identifying. Input, chip, outlined button, account avatar: 15 rules | 3.93 / 3.55 / 3.14 dark on page / surface / raised; 3.52 / 3.30 / 3.10 light |
| `--line-focus` | line | `--cyan-400` | `--cyan-700` | identifying. The keyboard ring, every focusable control on all 23 pages | 9.13 / 6.27 |
| `--line-strong` | line | `--grey-700` | `--grey-350` | decorative. A rule one step heavier than the hairline: 2 rules (trust item on 0.0, reason on 4.0 and 4.1) | 1.76 on a card dark, exempt; light not stated |
| `--line-evidence` | line | `--cyan-a30` | `--cyan-a35` | decorative. The edge of a citation chip: 3 rules | 1.87 / 1.71 over `--bg-surface` |
| `--line-warning` | line | `--amber-a32` | `--amber-a35` | decorative. The dashed edge of an alert tag, the edge of the low-signal badge: 2 rules | 1.91 / 1.67 over `--bg-surface` |
| `--line-warning-strong` | line | `--amber-400` | `--amber-700` | identifying. The solid left rule of a warning band and of a failed source row: 2 rules | 8.60 dark on page / 5.93 light on page |
| `--line-danger` | line | `--red-400` | `--red-700` | identifying. The solid left rule of an error band: 1 rule | dark not stated / 5.88 light on page |

### State tokens

A state is a token, never a style. Every state token and every role has a pair in the light block or
it does not exist.

| Token | Dark | Light | Contrast dark / light | Against, and the floor | Reason, from the comment |
|---|---|---|---|---|---|
| `--bg-hover` | `--grey-900` | `--grey-025` | 1.11 / 1.06; 1.00 / 1.00 | off `--bg-page`; off `--bg-surface`. A ground: none owed | a row, a bare button or a card lifting under the pointer. A hover is a whisper and never the only signal; on a card it is carried by the border or the ink |
| `--bg-action-hover` | `--cyan-300` | `--cyan-800` | 9.82 / 7.70; ink 10.85 / 8.20 | the fill on `--bg-surface`, 3; `--text-on-action` on it, 4.5 | the filled action only. Replaces `filter: brightness(1.08)`, the one state that was written as a style. The action lightens on hover in dark and darkens in light: a hover moves away from its ground |
| `--line-hover` | `--grey-400` | `--grey-550` | 5.34 / 5.66 | on a card, 3 | the border of an outlined control under the pointer |
| `--line-focus` | `--cyan-400` | `--cyan-700` | 7.31 / 5.52 | on a raised surface, its narrowest ground, 3 | the keyboard ring on every focusable control. A line role rather than a state token, listed here because focus is the state it draws |
| `--opacity-disabled` | 0.45 | 0.50 | exempt | WCAG 1.4.3 and 1.4.11 exempt an inactive control | not a colour: a control that cannot act is dimmed, never repainted by hand. Light is a touch stronger because 45 percent on white reads as almost gone |

### Depth and component tokens

| Token | Surface | Dark | Light | Reason, from the comment | Contrast dark / light |
|---|---|---|---|---|---|
| `--shadow-sheet` | depth | `--shadow-dark` | `--shadow-light` | a role because a theme has to be able to change it. Two rules use it: the dialog in the system, and the stand's frame `.appframe`, which is chrome. No separation rests on it: both also carry `--line-hairline` | not stated |
| `--step-current-line` | line | `--grey-050` | `--grey-950` | the ring of the current phase in the phase strip: 1 rule, 2.1 and 2.2. No line role carries that step | 16.60 / 19.35 on `--bg-page` |
| `--text-accent` | ink | `--cyan-400` | `--cyan-700` | the accent as ink where it marks "this is the product" or "you are here": 2 rules (brand mark in the app header, current bottom tab). Not `--text-evidence`, which A2 keeps for the citation | 9.13 / 6.27 on `--bg-page` |
| `--tier-mark` | fill | `--grey-700` | `--grey-350` | the square bullet of a tier feature on 0.0: 1 rule, decorative. A fill may not borrow a line role | 1.76 / 2.83 on `--bg-surface`, decorative |

### Declared literals

These values stay off the type ramp and the radius scale on purpose. Each is kept byte for byte from
the flat kit and declared on its component page. No value moves without a decision stated as
"variable, value, why". This list exists so that a detector which reads this document does not flag
them as drift.

| File | Literal | Line |
|---|---|---|
| `design/system/components/marketing-shell.css` | 16px (`.mk-lead`) | 18 |
| `design/system/components/marketing-shell.css` | 27px (`.mk-h1`, narrow) | 28 |
| `design/system/components/public-doc.css` | 15.5px (`.pub-lede`) | 21 |
| `design/system/components/public-doc.css` | 24px (`.pub-h1`, narrow) | 67 |
| `design/system/components/state.css` | 19px (`.state-t`) | 23 |
| `design/system/components/step-card.css` | 15px (`.mk-step-t`) | 15 |
| `design/system/components/theme-card.css` | 18px (`.theme-drill`) | 43 |
| `design/system/components/tier-card.css` | 1px radius (`.tier-feat li::before`) | 19 |

### Resolved at Stage 07 Step 1 (kept here so the decision is not re-litigated)

- `--bar-track` and `--bar-fill` were declared for the volume bar named in attribute A4 and used
  zero times. The bar is dropped and both variables are removed from `design/_theme.css` before it
  moves to the kit, so no dead token travels into the system. Reasoning in
  `design/concept/docs/concept.md`, attribute A4.
- Font weight 600 was in use at three product sites against a brand that declares 400, 500 and 590.
  Folded to 590. The difference is invisible at 11px, so the only thing 600 added was a fourth
  weight, and 590 is the number somebody chose while 600 is the number a reflex reaches for.

### Tokens with no origin (resolved history)

- `#333c44` and `#3a444c`: the two literal neutrals, one real step between Line and Ash that was
  never declared. `tokens-audit.md` records the drift (`#333c44` in one rule against `#3a444c` in
  four) as consolidated at Stage 07. The step is now the declared primitive `--grey-700`
  (`#3A444C`, "recovered from four in-class literals at Stage 07"). It now carries `--line-strong`
  and `--tier-mark`; the control boundary moved to `--grey-600` at the Step 4 review.
- Font weight 600: folded into `--weight-strong` (590), see above.
- `rgba(51,196,204,0.10 / 0.30)` and `rgba(217,164,65,0.10 / 0.32)`: now the named primitives
  `--cyan-a10`, `--cyan-a30`, `--amber-a10` and `--amber-a32`, each with a light pair. The 0.08 cyan
  value has no primitive in `tokens.css`.

### Not product tokens

`--pf-*` (the purple roadmap rail, shared with `research/research.html`) is prototype chrome for the
portfolio site around the product. It lives in `design/_panel.css`, is not part of the product
language, does not enter the component kit, and is excluded from this document on purpose.

## Contributing to the system

The system grows in one direction only: anything new appears in `design/system/` first and on a
screen second, never the other way round. A screen is where the language is used, not where it
grows, so a screen carries no style of its own. There are five ways in, and each has its address:

- **A value** goes into `design/system/tokens.css` at its level: a raw value as a primitive with
  its origin, a colour as a semantic role with its light pair and its contrast measured in both
  themes. A state is a token, never a style, and it arrives in both themes in the same edit. The
  decision is said out loud as "variable, value, why", and from the token it reaches every screen.
- **A component** is five things before its first use: its css in `design/system/components/`, its
  page in `design/kit/` (anatomy, variants, when to use it, rule and anti-rule, states in both
  themes), its registry entry and its inventory row, both with its level, and its `@import` in the
  group of its level in `index.css`, never at the end.
- **A composition** becomes a pattern only when three grey screens already stand that way. It goes
  into `design/system/patterns/`, holds the space between its parts and nothing else, and is
  imported after the components. On two screens it stays markup and waits as a candidate.
- **A block on one screen** is not a component: it goes into `design/system/one-off.css` with no
  page, and a second occurrence makes it a component with the five things.
- **A usage rule** (how many of a component, next to what, where never) is written once in
  `design/kit/docs/architecture.md`, with where it was taken from, and copied short onto the page
  of each component it names.

Anything a screen needs that none of the five covers is not drawn in by hand: it is a row in
`design/kit/docs/backlog.md`, with its level and its priority. The addresses in full:
`design/kit/docs/architecture.md`, "Contributing to the system".

## Sources

- `design/concept/docs/concept.md` (the Designer's taste and the five attributes A1 to A5, each
  attribute naming the data line it was derived from)
- `design/concept/docs/references.md` (base language and borrowed techniques)
- `DESIGN-artifacts.md` (Stage 06 draft: identity, palette with roles, typography, icon language, UI
  tone, verified contrast; the origin column above carries its signatures forward)
- `design/system/tokens.css` (the two-level token source: every value, role, pair and origin comment)
- `design/kit/docs/tokens-audit.md` (the audit and the named changes of appearance)
- `design/_theme.css`, `design/synthesis.html` and its three states, `design/shared-brief.html` (the
  code this document was formed from)
- `voice/docs/voice.md` (tone and forbidden vocabulary, which constrains state copy)
- `research/docs/personas.md`, `research/docs/benchmark.md` (the anxieties and trust mechanisms the
  attributes trace back to)
