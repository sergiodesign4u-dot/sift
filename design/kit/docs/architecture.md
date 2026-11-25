# Architecture of the Sift design system

*Stage 08, final as of the Step 9 close-out; Stage 09 Step 1 added the usage rules at the end. The rules of the system, which is what you read first and what
`design/kit/architecture.html` shows. The evidence about the system, the token audit, the census,
the inventory and the coverage, lives in the Verification group and is a different kind of
document: this one says how it is built, those say what was found.*

*Internal document, English. No em dash anywhere in this file.*

---

## Two ladders, and they are not the same ladder

Both use the word "level", which is exactly why they get separated here.

### The ladder of TOKENS: where a value comes from

```
PRIMITIVE          a raw value with no role.  --grey-900: #151A1F
    |              81 of them, 36 colour. Named by what they ARE.
    v
SEMANTIC           a role, pointing at a primitive through var().
                   --bg-surface: var(--grey-900)
                   29 of them: 22 colour roles, 4 state tokens, 1 depth
                   role, 2 component tokens. Named by what they DO, and by
                   which of the three surfaces they paint.
```

Two levels, not three. A component token (`--button-bg`) is a third layer of renaming that buys
no flexibility, so it is introduced **only** where a state lands on no semantic role at all: the
hover of a card and the hover of a list row are one `--bg-hover`, while the hover of a dangerous
button has to darken from `--color-danger` and earns `--button-danger-bg-hover`. Two have been
needed, both at Step 5 and both accepted at Step 6: `--step-current-line` (the ring of the current
phase, a step no line role carries) and `--tier-mark` (the bullet of a tier feature, a fill that
may not borrow a line role). A component token sits in the semantic block, has its light pair
like any role, and says in its comment why no role fitted.

**A component reads colour through SEMANTIC and geometry through PRIMITIVE.** Colour is what a
theme and a rebrand override, so it must go through a role. A radius has nothing to override: a
theme does not change what a corner is.

### The ladder of COMPONENTS: what contains what

```
atoms        contain no other kit component        button, input, tag, rank, icon slot
   |
molecules    contain atoms, contain no molecule    theme card, source row, notice, toolbar
   |
organisms    contain molecules, OR are a shell     app header, dialog, account shell, screen
   |                                               shell
   v
patterns     Stage 09, and not before
```

**Three is the ceiling.** The deepest nesting in this product is a dialog holding a form, and a
form is already an organism, so both stay at level three. Nesting decides the ORDER inside the
level, not a fourth number: inside organisms, the ones that contain no other organism come first.

**The code is ordered by level, never by purpose.** By purpose a button and a login dialog are both
"forms" and end up side by side, though one lives inside the other. The cost is not aesthetic: an
`@import` sorted alphabetically puts `dialog.css` before `field.css`, so the composed thing sits
above its own parts in the cascade and the first contextual fix reaches for `!important`.

**The showcase is read by purpose, and the level travels with it** (2026-11-20). A person looking
for "the thing that filters a list" does not know it is a molecule, so the stand groups components
by category (Actions, Forms, Filtering and navigation, Evidence, Feedback and state, Content and
identity, Overlays, Shell) and shows the level as a chip on the page and a column on
`components.html`. The two orders answer two questions and neither replaces the other: the
category is for finding, the level is for loading.

---

## How a role is named

From the audit and from `DESIGN.md`, never from another system's vocabulary. `--color-primary`
and `--surface-2` are somebody else's names for somebody else's product.

**The prefix carries the SURFACE, and there are three:**

| Prefix | Surface | Threshold |
|---|---|---|
| `--text-*` | ink: text, icon glyph | 4.5:1, or 3:1 from 24px or 19px bold |
| `--bg-*` | fill: page, card, band, badge | 3:1 (WCAG 1.4.11) |
| `--line-*` | line: border, divider, focus ring | 3:1 where the line identifies a control |

One role may not paint two surfaces, even at the same value, because the thresholds differ. This
is not pedantry: a fill role placed on a 12px bold caption passes as a surface at 3:1 and fails
as text at 4.5:1, and a table of text/background pairs never catches it, because nobody declared
it text. The type scale is therefore `--type-*` and not `--text-*`: one prefix, one meaning,
checkable by grep.

**Two roles get two tokens even when the value is identical today.** The test is not the colour,
it is the question "can these two places ever part". `--bg-action` and `--text-evidence` are both
the one cyan; the action is where you act and the citation is where the evidence is, attribute A2
signed them separately, and a rebrand can move one without the other.

**One single use is not yet a role.** A colour that stands in exactly one place stays a primitive
and goes on a list for Step 9, where it is decided whether it is a genuinely unique role that has
simply not repeated yet.

---

## Two folders, and what may cross between them

```
design/system/                    THE CODE. What the product imports.
├── tokens.css                    primitive + semantic + the theme pair + state tokens
├── base.css                      reset, type ground, focus ring, two utilities
├── index.css                     imports tokens first, then components BY LEVEL
└── components/<name>.css         one file per component, colour through semantic only

design/kit/                       THE SHOWCASE. What shows the system to a person.
├── _nav.js  _page.css            the registry of pages, and the stand's own chrome
├── overview.html                 the hub
├── pixel-proof.html              the Verification group: the proof and the critique
├── architecture.html color.html typography.html geometry.html icons.html
├── <name>.html                   one page per component, five blocks
└── docs/*.md                     the sources: audit, census, inventory, this file, backlog,
                                  critique
```

**A product class in the stand, or a stand style inside `design/system/`, is a defect.** The
system has to be detachable whole: `design/system/` is a package that could be lifted into
another repository and still work, and the moment the showcase's furniture is inside it that
stops being true.

---

## Adding a component: five things, and the last two are the ones that get forgotten

1. `design/system/components/<name>.css`
2. `design/kit/<name>.html`, the page, with its five blocks
3. an entry in `design/kit/_nav.js` with its `level` and its `category`: the panel groups by
   purpose and shows the level as a chip (decided 2026-11-20), so the level is a FIELD of the
   entry and must never be left out
4. a row in `design/kit/docs/inventory.md`, with its level
5. an `@import` in `design/system/index.css`, **in the group of its level, not at the end of the
   file**

Four and five matter most for a component added AFTER the build: at the reconciliation of Step
6, on a new screen at Stage 09, during the rollout at Stage 12. Appended at the end of the file
it looks harmless, and that is exactly how the ladder collapses.

---

## How the theme is built

- The product ships dark: `:root` in `tokens.css` IS the dark theme, and `[data-theme="light"]`
  redefines every semantic role and state token, 29 of 29. Not one primitive is redefined.
- **A role or a state token without its pair does not exist.** Write both in the same edit; the
  check is a count of the two blocks, and Codex runs it at every critique.
- The pair is not a mirror. Contrast is measured against the opposite ground, so the light theme
  takes a different step: the hover goes darker, the focus ring a deeper cyan.
- Where a theme lives: the stand's switch in `design/kit/_nav.js` (a key of its own), the
  product's in `design/_nav.js`, with `design/_theme.js` applying the stored choice before the
  first paint (key `sift-theme`). The root roadmap has no theme.
- A theme problem is fixed in the pair in `tokens.css`, never on a screen, and never by a
  component reading a primitive.

---

## Where a fix goes

| What is wrong | Where the fix goes | What it reaches |
|---|---|---|
| A value: a colour, a size, a radius | `tokens.css`, one line | every screen, through `var()` |
| A role: this ink is wrong for this ground | `tokens.css`, the semantic block | every component that reads that role |
| The look of one component | `components/<name>.css` | every place that component stands |
| Markup: a zone is missing | `design/kit/<name>.html`, then copied out | the screens that carry it |
| The look on ONE screen | **nowhere.** That is the desync this whole stage exists to prevent |

A difference written as a contextual override (`.cart-foot .btn { font-size: 15px }`) is not a
patch: it is an undeclared variant. Either it is a variant and it gets a modifier and a row in
the inventory, or it is drift and it folds into the nearest declared form.

---

## The state rules, in one place

- A state is a **token**, never a style. `:hover` reads `--bg-hover`, `:focus-visible` reads
  `--line-focus`, `:disabled` reads `--opacity-disabled`. No component invents a hex for a state.
- `:focus-visible`, never `:focus`. The ring is for the person on the keyboard and in the way of
  the person who clicked.
- A state does not move the element. Hover and active change fill, ink and line; they do not
  shift, resize, transform, or add a border where there was none, because a border on hover moves
  the neighbours by a pixel and that is the jump. The theme card's 2px nudge was the last one,
  removed at Step 9.
- `disabled` dims with `--opacity-disabled` and is never repainted by hand. WCAG exempts an
  inactive control from both contrast floors; nothing else may sit under its floor.
- **Opacity is part of the ink.** Any contrast check multiplies the element's opacity and every
  ancestor's into the colour before it computes a ratio. A walk that read `color` alone passed
  the breadcrumb at 3.44 for two steps (Step 9, S9a); `opacity` on text is a value no role holds,
  so the system does not use it for ink at all.
- **A snapshot is a difference, not an occurrence.** The stand shows the rest state live and
  photographs hover and focus-visible only (`scripts/shoot-states.js`). Pressed, when it equals
  rest, and disabled, which stands live as the real attribute, are a line of text, not a frame.
- The state matrix on a component page copies the real `:hover`, `:active` and `:focus-visible`
  rules onto `data-kit-st` inside an inert table (`_states.js`); at every critique each cell is
  compared with the same element under a real pointer and a real Tab key.
- **Only an interactive component gets states.** A badge, a heading and a divider do not, and
  their pages say so in those words. A hover on a badge is an invented role.

---

## Usage rules

*Stage 09 Step 1. Rules about how many of a component stand on one screen, and next to what, or
where it never appears. Written once here, shown on `design/kit/architecture.html#usage`, and
copied short into a "Limits" sub-point on the page of every component a rule names.*

Three classes of rule exist, and only two of them live here:

- **Substitution** ("not a badge here, a tag") stays the anti-rule on the component's own page,
  because there is something else to take.
- **Composition**: the component is right, its COUNT or its NEIGHBOUR is wrong. Checked by
  counting on the screen.
- **Context**: the component is right in itself and in number, its PLACE is wrong. Checked against
  a list of screens.

Counted on the grey corpus (`wireframes/*.html`, 37 pages), because a rule is a claim about the
whole product and the colour sample is 22 pages of it; cross-checked on the colour pages. A rule
with no source is not taken. A screen that breaks a rule is fixed on the screen, never in the
system.

| # | Rule | Class | Where it was taken from | Components | How to check it at a glance |
|---|---|---|---|---|---|
| R1 | At most one filled `.btn` (any size) visible on a screen; every other real action takes `.btn--ghost`. An action at rest and an action on selection are exclusive in CSS: a ticked theme card shows `.selbar` and hides `.head-action`. On 0.0 Home, a long persuade page, the count is per section | composition | `wireframes/docs/conventions.md:44` (one primary action per screen, design principle 4); `docs/decisions.md:90-95` (two fills on 2.0, caught and fixed in CSS); the counter: 33 of 37 grey pages hold at most one; 2.0 holds by the exclusion, 1.0 reset draws three steps with one fill each, 0.0 holds one fill and one ghost in each of its three sections; 6.3 held two and was fixed on the screen | button, selection bar, screen head, dialog | Count the visible `.btn` that are not `--ghost` or `--bare`: 1 or 0 (per section on 0.0) |
| R2 | One bottom bar per screen: `.selbar` and `.actionbar` never stand on the same screen | composition | the counter: selection bar on 3 grey pages, action bar on 4, both on 0 | selection bar, action bar | Count both: the sum is 1 or 0 |
| R3 | A `.state` never shares a screen with `.toolbar`, `.selbar` or `.actionbar`: nothing to filter, select or save on an empty or failed screen. It may stand under a `.notice` (8.2) | composition | the counter: state on 8 grey pages, with any of the three on 0, with a notice on 8.2 only | empty and error state, toolbar, selection bar, action bar | If `.state` is on the screen, none of the three is |
| R4 | At most one `.notice` on a screen | composition | the counter: notice on 7 grey pages, never two | notice band | Count `.notice`: 1 or 0 |
| R5 | A `.notice--warn` or `.notice--error` never sits on a raised surface (`.dialog`, or anything on `--bg-raised`) | composition | `design/kit/docs/backlog.md`, the Stage 08 Step 7 measurement: the ink on its own wash over `--bg-raised` is 4.44 (warning, light), 4.36 and 4.30 (danger, dark and light), under 4.5; the counter: a notice inside a dialog on 0 pages | notice band, dialog | No `.notice--warn` or `.notice--error` inside `.dialog` |
| R6 | Exactly one `h1` on a screen, and it names the screen. A state title is an `h2` (`.state-t`), except on 8.0, 8.1 and 8.2, where the state is the screen and its title is the `h1` | composition | `wireframes/docs/conventions.md:41`; the counter: 37 of 37 grey pages | screen head, empty and error state | Count `h1`: exactly 1 |
| R7 | A theme never shows without its confidence: every theme row and every theme head carries `.conf` (`n=X`, and `.badge-low` when the signal is thin) | composition | decision D2 in `CLAUDE.md` (confidence display is mandatory in MVP); the counter: `.conf` on all 9 grey pages that show a theme | theme card, confidence indicator | Every `.theme` has a `.conf` inside |
| R8 | `.appbar` and `.bottomtabs` only inside the signed-in app, and always together; `.public-bar` only on the public pages (0.0, 1.0, 6.4, 8.1, 8.2, 9.x). The two never meet | context | the counter: app bar and bottom tabs on the same 27 grey pages, the public bar on the other 10, both on 0; `CLAUDE.md` (three entries plus account; the public and indexed pages) | app header, bottom tabs, public bar | The screen is on the app list or on the public list, never on both |
| R9 | At most one `.steps` (phase strip) on a screen. Where it stands on the screen is not settled and is not part of the rule: it is a backlog row | composition | the counter: 6 grey pages, never two | phase strip | Count `.steps`: 1 or 0 |

**What a count of one did not make a rule.** The toolbar (one filter per list is what the Filtered
list pattern already says), the breadcrumb, the screen head and the main head (one by the build of
the shell), the dialog (2 pages, under the threshold) and the auth card (one screen, 1.0, in three
states). Their maximum is one on every page and none of them is a rule.

**Checked by name on the first screen built from the system** (Step 5, "held / broken") and then
on every batch of the rollout.
