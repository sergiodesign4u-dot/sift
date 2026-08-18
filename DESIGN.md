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
in Token origin rather than smoothed over.*

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

- **Display** (590, 29px, 1.2, -0.022em): the public brief title. Drops to 24px below 820px. The
  largest type anywhere in the product, and it appears on the one surface a stranger opens cold.
- **Headline** (590, 22px, -0.02em): the app screen H1. One per screen.
- **Title** (590, 17px to 19px, -0.015em to -0.02em): section headings inside the public brief, and
  the title line of an empty or error state.
- **Body** (400, 14px, 1.5, -0.011em): the base. Theme labels step to 500 weight at the same size.
  Reading measure is capped: 70ch on a screen subtitle, 78ch on a quote, 92ch on the scope line, and
  the public brief column is capped at 720px rather than by character count.
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

**One breakpoint.** The colored layer changes at `max-width: 820px`, and that single query does all
the work: the desktop navigation tabs are replaced by sticky bottom tabs, the full filter toolbar is
replaced by a compact one, the head action goes full width, and the reading column tightens. The
grey structural layer in `wireframes/` uses a different mechanism (a 600px container query on the
canvas plus a 900px window query for chrome), because there the screen sits inside a device frame.
This is a real difference between the two layers and it is intentional: the colored copies are the
product at full width, not a screen inside a viewer.

**Spacing is not yet a scale.** The code carries no spacing tokens. Padding, gap, and margin are
literals, and there are more than twenty distinct values in use, which is evidence of rhythm rather
than of a system. A `--space-*` scale is introduced at Stage 07 Step 3 as an approved addition, and
this section is rewritten from it at Step 7. Recording the absence is deliberate: an invented scale
here would be a fact nobody measured.

**Target floor: 44px.** Every interactive control has a 44px minimum hit height, with three named
exceptions, each written down rather than tolerated: the row checkbox is 24px (the AA floor, because
a 44px checkbox would double the height of every row in a ranked list), the avatar reads at 28px and
is hit at 44px through a transparent `::after` overlay, and the inline citation marker at 17px is a
typographic mark inside prose, not a target.

## Elevation & Depth

**This system does not use shadows for depth.** Depth is tonal: Canvas, Surface, Elevated, separated
by the Line hairline. A raised element is raised because it is a lighter tone with a border, not
because it casts light.

Exactly one shadow exists in the entire product.

### Shadow Vocabulary

- **App frame containment** (`box-shadow: 0 2px 4px rgba(0,0,0,0.4)`): sits on the app frame only,
  to seat the product surface against the page behind it. Tight, low, and dark. It is a containment
  device, not an elevation cue.

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
- **Mobile (under 820px):** the tab row is replaced by a sticky bottom tab bar on Surface with a Line
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

- **Don't** add a second shadow. There is exactly one in the product and it is on the app frame.
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

## Token origin

Every value carries where it came from, in one word: `attribute <name>` for a decision derived from
an attribute in `design/concept/docs/concept.md`, `taste` for the Designer's named taste,
`technical decision` for a value chosen by implementation constraint, and `plate B pixel` for a value
read off the approved brand plate at Stage 06 and recorded in `DESIGN-artifacts.md`.

| Token | Origin | Traced to |
|---|---|---|
| Canvas | plate B pixel | A1 quiet; base language (Linear layering) |
| Surface | plate B pixel | A1; A4 ranked rows sit on it |
| Elevated | plate B pixel | A1 |
| Line | plate B pixel | A1, depth without shadow |
| Porcelain | plate B pixel | A5, type does the work |
| Ash | plate B pixel | A1, secondary recedes |
| Cyan | plate B pixel | A1 one accent, A2 evidence marker, A4 |
| Amber | attribute A3 | honest about thin, as information |
| Red | attribute A3 | names a failed state, with the next move (Voice Principle 4) |
| Inter (UI, body) | taste | Vercel / Geist, Linear; A5 |
| IBM Plex Mono (data) | attribute A2 | the count is the trust surface; A4; Voice Principle 1 |
| Weight 400 / 500 / 590 | matched to character | DESIGN-artifacts.md Typography |
| Negative tracking, -0.011em to -0.022em | taste | tight but not touching, Identity |
| Uppercase label, 0.07em | technical decision | the one uppercase, to separate document sections |
| Radius 4px (`--r-sm`) | matched to character | marks and controls inside text |
| Radius 6px (`--r`) | matched to character | anything a hand acts on |
| Radius 12px (app frame) | technical decision | container scale, not yet a variable |
| `cubic-bezier(0.22,1,0.36,1)` (`--ease`) | technical decision | ease-out, restrained (UI tone, motion) |
| Durations 0.12s / 0.15s | technical decision | below the threshold where motion is noticed |
| App frame shadow `0 2px 4px rgba(0,0,0,0.4)` | technical decision | containment, not elevation |
| Inset 2px Cyan (selected row) | attribute A1 | active state without a background wash |
| 44px target floor | technical decision | WCAG 2.5.5 / platform floor |
| 24px checkbox | technical decision | AA floor, named exception (row density) |
| Breakpoint 820px | technical decision | where the desktop filter row stops fitting |
| Column caps 70 / 78 / 92ch, 720px | attribute A5 | reading measure for prose evidence |

**Resolved at Stage 07 Step 1 (kept here so the decision is not re-litigated):**

- `--bar-track` and `--bar-fill` were declared for the volume bar named in attribute A4 and used
  zero times. The bar is dropped and both variables are removed from `design/_theme.css` before it
  moves to the kit, so no dead token travels into the system. Reasoning in
  `design/concept/docs/concept.md`, attribute A4.
- Font weight 600 was in use at three product sites against a brand that declares 400, 500 and 590.
  Folded to 590. The difference is invisible at 11px, so the only thing 600 added was a fourth
  weight, and 590 is the number somebody chose while 600 is the number a reflex reaches for.

**Tokens with no origin (candidates for review, not defects):**

- `#333c44` and `#3a444c`. Two literal neutral values used five times between them (chip hover
  border, chip-on border, checkbox border, ghost button hover border, completed phase step border).
  They are one real step between Line and Ash that was never declared. One of them is referenced
  through `var(--gunmetal, #3a444c)`, a variable that does not exist, so the fallback is doing the
  work silently. Fixed at Step 3 by declaring the variable.
- Font weight 600, used at three product sites (the wordmark, and two uppercase section labels).
  `DESIGN-artifacts.md` declares 400, 500, and 590. Recorded in the frontmatter as the label weight
  because that is what the code carries.
- `rgba(51,196,204,0.08 / 0.10 / 0.30)` and `rgba(217,164,65,0.10 / 0.32)`. Accent and amber washes
  and borders, derived from Cyan and Amber but written as literals.

**Not product tokens.** `--pf-*` in `design/_theme.css` (purple roadmap rail, shared with
`research/research.html`) is prototype chrome for the portfolio site around the product. It is not
part of the product language, does not enter the component kit, and is excluded from this document
on purpose.

## Sources

- `design/concept/docs/concept.md` (the Designer's taste and the five attributes A1 to A5, each
  attribute naming the data line it was derived from)
- `design/concept/docs/references.md` (base language and borrowed techniques)
- `DESIGN-artifacts.md` (Stage 06 draft: identity, palette with roles, typography, icon language, UI
  tone, verified contrast; the origin column above carries its signatures forward)
- `design/_theme.css`, `design/synthesis.html` and its three states, `design/shared-brief.html` (the
  code this document was formed from)
- `voice/docs/voice.md` (tone and forbidden vocabulary, which constrains state copy)
- `research/docs/personas.md`, `research/docs/benchmark.md` (the anxieties and trust mechanisms the
  attributes trace back to)
