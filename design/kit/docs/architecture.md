# Architecture of the Sift design system

*Stage 08. The rules of the system, which is what you read first and what
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
    |              79 of them. Named by what they ARE.
    v
SEMANTIC           a role, pointing at a primitive through var().
                   --bg-surface: var(--grey-900)
                   20 of them. Named by what they DO, and by which of the
                   three surfaces they paint.
```

Two levels, not three. A component token (`--button-bg`) is a third layer of renaming that buys
no flexibility, so it is introduced **only** where a state lands on no semantic role at all: the
hover of a card and the hover of a list row are one `--bg-hover`, while the hover of a dangerous
button has to darken from `--color-danger` and earns `--button-danger-bg-hover`. Nothing in this
product has needed one yet.

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

**Grouping by purpose is forbidden.** By purpose a button and a login dialog are both "forms" and
end up side by side, though one lives inside the other. The cost is not aesthetic: an `@import`
sorted alphabetically puts `dialog.css` before `field.css`, so the composed thing sits above its
own parts in the cascade and the first contextual fix reaches for `!important`.

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
├── architecture.html color.html typography.html geometry.html icons.html
├── <name>.html                   one page per component, five blocks
└── docs/*.md                     the sources: audit, census, inventory, this file, backlog
```

**A product class in the stand, or a stand style inside `design/system/`, is a defect.** The
system has to be detachable whole: `design/system/` is a package that could be lifted into
another repository and still work, and the moment the showcase's furniture is inside it that
stops being true.

---

## Adding a component: five things, and the last two are the ones that get forgotten

1. `design/system/components/<name>.css`
2. `design/kit/<name>.html`, the page, with its five blocks
3. an entry in `design/kit/_nav.js`, **in the group of its own level**
4. a row in `design/kit/docs/inventory.md`, with its level
5. an `@import` in `design/system/index.css`, **in the group of its level, not at the end of the
   file**

Three and five matter most for a component added AFTER the build: at the reconciliation of Step
6, on a new screen at Stage 09, during the rollout at Stage 12. Appended at the end of the file
it looks harmless, and that is exactly how the ladder collapses.

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
- A state does not move the layout. Hover and active change fill, ink and line; they do not
  shift, resize, or add a border where there was none, because a border on hover moves the
  neighbours by a pixel and that is the jump.
- **Only an interactive component gets states.** A badge, a heading and a divider do not, and
  their pages say so in those words. A hover on a badge is an invented role.
