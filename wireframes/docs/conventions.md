# Wireframes - Conventions (the grey contract) - Sift

*Stage 04. The single contract every wireframe screen follows. It INHERITS from the detail IA (stage 03), it does not start from zero. A wireframe invents nothing: composition, text, components, states, and flows all come from `ia/docs/blocks.md`, `ia/docs/sitemap.md`, `ia/docs/flows.md`, `ia/docs/pages/*.md`, `voice/docs/microcopy.md`, and `research/docs/jtbd.md`. If a block, page, or state appears here first, that is an IA defect: fix it upstream in IA, then render.*

*No em dash in any output file (md or html). Use commas, periods, or a spaced hyphen. Internal docs are English; the html wireframes carry product copy (English), whose owners are named in section 3.*

---

## 1. Composition has an origin, and the origin is the block bank

- **The blocks of a screen come from `ia/docs/blocks.md`,** built per PAGE TYPE from competitors and craft references. 39 nodes are 12 types. A screen that cannot name the bank rows behind its blocks is the median of every list page a model has seen, which is what the first pass of this stage produced.
- **Every screen file opens with a comment naming its type and its blocks,** row by row, and naming what is deliberately ABSENT and why. Absence is a decision and it is the one a reviewer cannot see on the screen.
- **A block with no trace is not drawn.** The trace is a job from `jtbd.md`, a barrier from `cjm-as-is.md`, or an SEO requirement. Where the bank marks a block LATER, it stays out of the MVP screen.
- **A reference is an input, never an output.** A screen that matches one source one to one is a copy.

## 2. Inheritance (reference, do not reinvent)

- **CSS: one shared stylesheet, `wireframes/_wf.css`.** It inherits the black-and-white tokens of the IA pages (the `--w-*` set) and is the ONE source of wireframe appearance. It stays grey and is the structural contract; stage 06 lays color on COPIES in `design/`, never on this file.
- **Where a class lives.** A component rendered on more than one screen belongs in `_wf.css`, named, with the comment saying which screen owns it and which reference it. Only genuinely single-screen structure may sit in a `<style>` block in that screen file, and even then as a named class. **A `style=` attribute is not a home for appearance;** inline is transport, and a copied inline block is where two editions start.
- **Text: owners are fixed** (see section 3). Pull it verbatim. No lorem ipsum, no "Heading 1".
- **Components: from the IA nodes.** Header (0.1), footer (0.2), theme card, confidence indicator, filter control, evidence snippet, source-type enum are already documented. Include a component once and reuse it; never redraw the header on each screen.
- **States and flows: from the States section of the node spec and `ia/docs/flows.md`,** never a guess.

## 3. Text ownership

- **SEO copy** (title, description, H1, the block C body) belongs to the IA node and is synced back into `ia/docs/pages/`.
- **Interface strings** (buttons, labels, state text, notices, scope lines) belong to `voice/docs/microcopy.md`. Change a string on a screen and the same step records it there, in the rewrite log, with was, now, and the rule. No product line exists in two editions.
- **User content** (customer quotes, theme names, brief titles, a rationale) is marked `[UGC]` and is not rewritten. Voice governs the interface around it, not the content inside it.
- **Canonical illustrative data is shared across screens** and listed in the header comment of the screen that owns it. Two screens showing the same object must show the same numbers, the same provenance, and the same name. Reading them against each other is how contradictions are found.

## 4. The grey contract (structure, not appearance)

- The **product screen** is pure grey, built on the `--w-*` tokens. No color, no brand, no chosen font, no icon art, no shadow, no photography, no finished UI. Those are stages 06 to 08. If appearance creeps into a screen, return it to grey.
- Color (the accent) appears **only in the prototype chrome** (the stage panel), never inside a product screen.
- Icons are placeholder blocks (`--w-fill`), never real glyphs. Images are grey boxes. Text is real text, never baked into an image.

## 5. Markup (semantic HTML)

- Use real semantic elements: `header`, `nav`, `main`, `section`, `ul`/`li`, `form`, `label`, `input`, `button`, `a`. Not a pile of `div`.
- Buttons and fields are real `button` and `input`. A navigation action is a real `<a href>` to the target screen file, so the prototype is walkable.
- Exactly one `H1` per screen, and it names the screen, not the state. A state that replaces the screen H1 with its own message hides which screen failed.
- **Every interactive target is at least 44px, and the exceptions are named rather than averaged.** Buttons, tabs, chips, form fields, row actions, icon actions and every link that sits in a LIST of links meet the floor. Three things sit below it on purpose: a native checkbox and the account consent checkbox, at the 24px AA floor, because a 44px checkbox would double the height of every row in a ranked list; the inline citation chip and any link inside running text, which the same reasoning exempts; and the account avatar, which reads at 26px and is hit at 44 through an overlay, so the visual and the target are allowed to differ. Where a target is extended rather than enlarged, the stylesheet says so beside the rule.
- Controls are labeled. The current item in EVERY navigation carries `aria-current`, including the mobile one: two responsive editions of the same nav must not say different things to a screen reader.
- **One primary action per screen** (design principle 4). Where a screen has an action at rest and an action on selection, the two are mutually exclusive in CSS, not by hope.

## 6. States are first class, and there are more than four

- Each state is a SEPARATE page, so the prototype can navigate between them: `wireframes/<screen>-<state>.html`.
- Floor: empty, error, loading, success (success is the base page). The real set is the States section of the node spec: role states, domain states (no sources, thin evidence, source unavailable), transit states (generating link). A state not in the node spec is not drawn.
- **A state keeps the blocks of its screen and fills them with what it can honestly say, including zero.** It does not become a different screen. The screen head stays, so the reader can see WHICH screen is in this state, and the scope line stays, so the denominator is stated even when it is nothing.
- **A state may drop a block only when that block would have to lie.** The filter toolbar is absent from the synthesis empty and loading states because its facets carry counts and the counts do not exist yet. That is the whole test: not "is there room", but "would it be true".
- **An empty state is a group inside its screen, not a screen of its own,** wherever the screen already carries a second group that offers the next action (`blocks.md` Type 3). 3.4 is the sources list with Connected at 0, and 6.5 is the briefs list with its groups at 0. A full-canvas empty that leads to a chooser holding the same options is a corridor.
- **A failure the size of a row is drawn as a row.** One source failing is not the screen failing; blanking the list overstates the failure and hides the half that still works.
- Every state has a visible exit, checked against `ia/docs/flows.md`. No dead ends. The one legitimate terminal dead end in the flows (a systematically broken evidence trail) is preserved honestly, not smoothed over.

## 7. One live screen, checked by narrowing the browser

- **Every screen is ONE responsive screen, not a desktop mock plus a mobile mock.** It fills the browser and collapses as the window narrows. There is no `01 desktop` / `02 mobile` frame pair: two frames drift, and the pair invites a layout that exists at neither size.
- The app markup uses `@container` queries, not viewport `@media`, so the screen responds to the CANVAS it sits in rather than to the window. `.wf-canvas` carries `container-type: inline-size`. Breakpoint: **600px of canvas width** (below is mobile, bottom tabs; above is desktop, top tabs).
- **360px is a hard gate.** Every block must survive it, and the check is programmatic (no element extends past the viewport in either direction), not a glance.
- **Block ORDER and DENSITY are reasoned from the desktop,** because a PM does this work at a desk. What drops on mobile is decided by asking what the desktop row can afford to lose, not the other way round. A block that only fits by being cut in half at 360 is a block that is wrong at both sizes.
- The prototype chrome has its own breakpoint (900px of WINDOW width), because it is not part of the product screen.

## 8. Navigation: one panel, four blocks

- One registry: `wireframes/_nav.js` (`WF_CLUSTERS`, screens, states, flows) plus the render of the chrome and of the in-frame globals. Adding a screen or a state is one entry there and nowhere else.
- **The prototype chrome is ONE panel** rendered into `#wf-rail`, four blocks top to bottom: header with the button to the hub, the stage badge and one subtitle line naming the current node and state; the tree of cluster to screen to states; the current node opened onto its states while the others stay collapsed; cross-links out of the prototype at the bottom (the IA node, the block bank, voice, the roadmap).
- **No thin state strip above the screen.** There used to be a top bar carrying the hub button, the node name and a row of state chips, over a rail that carried the same states again: two editions of one control, and the reviewer had to learn which to trust.
- Below 900px the panel becomes its own header and the tree folds behind a disclosure. It is the same navigation in a second layout; it never becomes a strip that repeats what the tree says.
- `wireframes/overview.html` "All screens" is the flow-first index and the coverage map (built vs spec). It carries the project roadmap sidebar, because the hub belongs to the same site as research and IA.
- The in-frame globals (app header, app footer, bottom tabs) fill `[data-wf]` placeholders from the same registry. They are product, not chrome, and they stay grey.

## 9. SEO layout validation (layer 2, a check, not an invention)

- IA already defined the SEO structure (layer 1: slug, H1/H2, breadcrumbs, schema, indexation). Here we only validate layout: every block from the A to E set has a visible place and the right priority, there is exactly one H1, and breadcrumbs, SEO text, and any FAQ are not hidden.
- Indexation is inherited: only Home (0.0) and Legal (9.x) are indexed; the whole app is noindex; the public Shared brief (6.4) is public to view but noindex. A wireframe does not change this.
- If a required block has no place, that is an IA hole: fix the IA node, then render.

## 10. Deferred to later stages (do not add now)

Color, chosen font, shadows, real icons, images, finished UI, motion. Those are stages 06 (concept) to 08 (components). The wireframe adds nothing on top of the IA structure.

## 11. The etalon locks the concrete components

The concrete grey markup of the canonical components (theme card, confidence indicator, filter control, scope line, selection bar on 2.0; evidence snippet, citation chip, reason line on 4.0; brief row on 6.1; source row and source card on 3.0) is locked when the etalon is built, and the reusable classes are added to `_wf.css` there. Later screens compose those classes; they do not reinvent the component. **A defect on the etalon multiplies,** so the etalon is walked at both sizes before anything is built on it.

## 12. Acceptance

Acceptance happens in the browser, not in a table. For every screen and every state: open it, walk each state, narrow to 360, and confirm programmatically that nothing overflows. Then check the whole set at once: no em dash, no forbidden word, no broken local link, no `style=` attribute carrying appearance, and no string on a screen that is missing from `voice/docs/microcopy.md`. Fixes come as prompts, not as hand edits: a hand edit does not survive the next clone.

---

## Inherited grey tokens (quick reference, defined in `_wf.css`)

- Screen background `--w-bg #0e0e11`, raised surface `--w-surface #131318`, bars `--w-bar #141418`.
- Lines `--w-line #262630`, control outline `--w-line-2 #33333f`.
- Text `--w-ink #cfcfd6`, secondary `--w-ink-2 #9a9aa6`, hint `--w-ink-3 #6b6b78`.
- Placeholder block `--w-fill #2a2a33`, skeleton `--w-skel #1b1b21`.
- Prototype chrome (accent, panel) uses the IA tokens `--accent #7c6af7`, `--bg*`, `--text*`. Never inside a product screen.
