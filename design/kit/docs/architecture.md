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
patterns     compose components, no style of their own;   grouped list, filtered list
             from three grey screens (Stage 09)
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

## Contributing to the system

*Stage 09 Step 4. One rule: anything new appears in `design/system/` FIRST, and on a screen second.
Never the other way round. Seven kinds of new (the width rule added at Stage 10 Step 4), each with its addresses. A thing with one of its
addresses missing is not ready, and a screen does not use it yet.*

| What is new | Where it goes, in this order | Ready when |
|---|---|---|
| A component | the five things below | all five exist, and its states stand in both themes |
| A usage rule | a row in "Usage rules" on this page, then a "Limits" line on the page of every component it names | "Where it was taken from" is filled: counted on the grey screens, decided in a named file, or caught by a critique on two screens or more |
| A composition | three grey screens first; then the pattern's five things | the colour screens that carry it moved onto it with a pixel proof; on two screens it stays markup, a row in the candidates on `patterns.html` |
| A value | `tokens.css`, at its level | said out loud as "variable, value, why"; a role and a state token arrive with their light pair |
| A block that stands on one screen | `design/system/one-off.css`, its own group after the organisms, and a row in "One-off blocks" on `overview.html`; no page, no registry entry, no inventory row | the owner said "keep"; a second occurrence moves it to `components/` with the five things |
| A behaviour at width | a shared value in `tokens.css`; the brick in its place in the component's file through `@container`; a composition in its pattern's file; the shell in the shell's files through `@media`. **In a screen file: forbidden** | the threshold is measured and listed in "Container thresholds" of `responsive.md`; the placer declares `container-type`; 360 does not move |
| Something on a screen with none of the five above | **nowhere: forbidden** | never. What the system lacks is a row in `backlog.md`, and the screen waits or ships without it |

### A component: five things, and the last two are the ones that get forgotten

1. `design/system/components/<name>.css`, colour through a semantic role, geometry through the
   primitive, every state a token with its pair in `[data-theme="light"]`
2. `design/kit/<name>.html`, the page, with its five blocks: anatomy, variants, when to use it,
   rule and anti-rule, states, each state shown in both themes
3. an entry in `design/kit/_nav.js` with its `level` and its `category`: the panel groups by
   purpose and shows the level as a chip (decided 2026-11-20), so the level is a FIELD of the
   entry and must never be left out
4. a row in `design/kit/docs/inventory.md`, with its level
5. an `@import` in `design/system/index.css`, **in the group of its level, not at the end of the
   file**

Four and five matter most for a component added AFTER the build: at the reconciliation of Stage 08
Step 6, on a new screen at Stage 09, during the rollout at Stage 12. Appended at the end of the
file it looks harmless, and that is exactly how the ladder collapses.

### A usage rule

A row in "Usage rules" below, with every column filled. The column "Where it was taken from" names
one of three sources: the counter on the grey corpus (`wireframes/*.html`, with the numbers), a
decision already written (`wireframes/docs/conventions.md`, `CLAUDE.md`, `docs/decisions.md`, with
the line), or a defect a critique caught on two screens or more. Then the short copy goes into the
"Limits" sub-point of the rule and anti-rule block on the page of every component the rule names,
with a link back here. A rule that lives only in somebody's head or in a chat does not fire the
next time.

### A composition

Counted on the grey corpus, never on the colour sample. On three screens or more it becomes a
pattern, with the same five things one rung up: `design/system/patterns/<name>.css` holding only
the space between its parts (no colour, no look, no new style; a style it needs is a missing
component, built first), `design/kit/<name>.html` with its anatomy, rule, anti-rule and screens,
an entry in PATTERNS in `design/kit/_nav.js`, an `@import` in `index.css` AFTER the components,
and a row in the pattern register of `inventory.md`. A pattern with three grey screens and none in
colour is still taken, and said out loud as waiting for Stage 12. On two screens a composition
stays markup and is listed among the candidates on `patterns.html`.

### A value

`tokens.css`, at its level. A raw value is a primitive and carries its origin comment; a colour
role is semantic, reads a primitive through `var()`, and arrives with its pair in
`[data-theme="light"]` and its contrast measured in both themes. A state token arrives in both
themes in the same edit. Geometry has no semantic level. Nothing changes without "variable, value,
why".

### A block on one screen

A block that occurs on a single screen (a screen in two states counts as one) is not a component:
by the inventory's threshold it gets no page, no state matrix and no catalog entry. It still lives
in the system, in `design/system/one-off.css`, because a screen links one stylesheet and nothing
else; that file is imported in its own group after the organisms. It enters on the owner's "keep",
like anything else, and is listed in "One-off blocks" on `overview.html`. A second occurrence turns
it into a component: it leaves `one-off.css` for `components/` with the five things, and that is
said out loud. Added at Stage 09 Step 6: the reader who built 3.6 from this page found no address
for its Disconnect confirm, which stands on one screen.

### A behaviour at width

*Stage 10 Step 4. The rule of growth for width, and the one Stage 12 is most likely to break: twenty
screens built in parallel would each bring their own media query, and the responsive behaviour
would scatter across twenty files the way inline style did at Stage 04.*

Read top down, and take the first rung that works: **fluid** (`clamp()` with a `rem` term, `%`,
`minmax()` with `auto-fit`, `flex-wrap`), then **container** (a `max-width` in `rem`, a measure in
`ch`), then a **query**. Where the answer lives:

- a value several things share (a measure, a gutter, a grid minimum, the page width): a token in
  `tokens.css`, with its readers named in its comment;
- a brick that rearranges itself: its own file, `@container` with a LOCAL threshold, never a token,
  commented `/* threshold Xrem: below it ... */`. The threshold is the measured width of the PLACE
  where the wide form breaks, plus at least 1rem, rounded up to a whole rem, and above what a 360
  window gives that place, so 360 does not move. It is listed in "Container thresholds" of
  `design/kit/docs/responsive.md`;
- `container-type: inline-size` is declared by **the one who places** the brick (the screen shell,
  a pattern, the public column, the legal document for its contents), never by the brick: a place
  is not a property of a brick. A query with no container above it never matches and raises no
  error, so after every new `@container`, narrow its place in the browser and watch it switch;
- a composition: its pattern's file, one query, reaching every screen it stands on;
- the navigation carrier: the shell's files, `app-header.css` and `bottom-tabs.css`, through
  `@media (min-width: 37.5rem)`, the one point of the product (`--bp-shell-wide`). A media query
  cannot read `var()`, so the literal stands there and the token is its register;
- **a screen file: never.** No `@media`, no `style=`, no `<style>` in `design/*.html`; checked by
  grep, not by eye.

**A new point is the owner's decision**, with an audit row in `responsive.md` saying why the fluid
and the container could not do it, and a name that says what changes, not which device. The
product has one point; two is the ceiling; a third is never added in passing.

### Something new on a screen alone

Forbidden. A product screen links `design/system/index.css` and nothing else: no `style=`, no
`<style>`, no class that is not in the system, no contextual override. The screen is where
the system is used, never where it grows.

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
| R6 | Exactly one `h1` on a screen, and it names the screen. A state title is an `h2` (`.state-t`), except where the state is the whole screen and its title is the `h1`: 8.0, 8.1, 8.2, and 5.1 (the redacted item) | composition | `wireframes/docs/conventions.md:41`; the counter: 37 of 37 grey pages; widened at Stage 09 Step 5, when the first screen built from the system met 5.1, whose grey (`wireframes/evidence-redacted.html`) titles the page with the state | screen head, empty and error state | Count `h1`: exactly 1 |
| R7 | A theme never shows without its confidence: every theme row, every theme head, and every provenance line that names the theme an item supports carries `.conf` (`n=X`, and `.badge-low` when the signal is thin) | composition | decision D2 in `CLAUDE.md` (confidence display is mandatory in MVP); the counter: `.conf` on all 9 grey pages that show a theme; widened at Stage 09 Step 5 by the owner, from `ia/docs/pages/evidence.md:50` (the defend-live surface is "n=X plus the verbatim quote") and the critique of 5.0: a theme named in provenance on 2 grey pages, 5.0 and 5.1, neither with its count | theme card, confidence indicator, provenance list | Every `.theme`, and every provenance line naming a theme, has a `.conf` inside |
| R8 | `.appbar` and `.bottomtabs` only inside the signed-in app, and always together; `.public-bar` only on the public pages (0.0, 1.0, 6.4, 8.1, 8.2, 9.x). The two never meet | context | the counter: app bar and bottom tabs on the same 27 grey pages, the public bar on the other 10, both on 0; `CLAUDE.md` (three entries plus account; the public and indexed pages) | app header, bottom tabs, public bar | The screen is on the app list or on the public list, never on both |
| R9 | At most one `.steps` (phase strip) on a screen. Where it stands on the screen is not settled and is not part of the rule: it is a backlog row | composition | the counter: 6 grey pages, never two | phase strip | Count `.steps`: 1 or 0 |

**What a count of one did not make a rule.** The toolbar (one filter per list is what the Filtered
list pattern already says), the breadcrumb, the screen head and the main head (one by the build of
the shell), the dialog (2 pages, under the threshold) and the auth card (one screen, 1.0, in three
states). Their maximum is one on every page and none of them is a rule.

**Checked by name on the first screen built from the system** (Step 5, "held / broken") and then
on every batch of the rollout.
