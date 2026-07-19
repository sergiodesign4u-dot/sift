# Wireframes - Conventions (the grey contract) - Sift

*Stage 04. The single contract every wireframe screen and every subagent follows. It INHERITS from the detail IA (stage 03), it does not start from zero. A wireframe invents nothing: text, components, states, and flows all come from ia/docs/sitemap.md, ia/docs/flows.md, ia/docs/pages/*.md, and user-research/docs/jtbd.md. If a block, page, or state appears here first, that is an IA defect: fix it upstream in IA, then render.*

*No em dash in any output file (md or html). Use commas, periods, or a spaced hyphen. Internal docs are English; the html wireframes carry product copy (English) pulled verbatim from the A to E blocks of the IA nodes.*

---

## 1. Inheritance first (reference, do not reinvent)

- **CSS and tokens: one shared stylesheet, `wireframes/_wf.css`.** It inherits the black-and-white tokens of the IA pages (`ia/*.html`): the same grey (`--w-*` set), the same left sidebar, the same shell. It is the ONE source of wireframe appearance. Every screen links it; per-screen specifics stay inline in the screen file. Do not start a new style. `_wf.css` stays grey and is the structural contract; stage 06 lays color on COPIES of the screens in `ui-visual/`, never on this file.
- **Text: from the A to E block of each node.** Every IA node carries ready product copy (H1, headings, body). Pull it verbatim. No lorem ipsum, no "Heading 1" placeholders.
- **Components: from the IA nodes.** Header (0.1), footer (0.2), theme card, confidence indicator, filter control, evidence snippet, source-type enum are already documented as IA nodes. Include a component once and reuse it; never re-draw the header on each screen.
- **States and flows: from the IA spec and `ia/docs/flows.md`.** The state set of a screen is the States section of its node spec, not a guess.
- **Viewports:** mobile 360 and desktop for every screen.

## 2. The grey contract (structure, not appearance)

- The **product screen** is pure grey, built on the `--w-*` tokens. No color, no brand, no chosen font, no icon art, no shadow, no photography, no finished UI. Those are stages 06 to 08. If appearance creeps into a screen, return it to grey.
- Color (the accent) appears **only in the process chrome** (roadmap sidebar, top bar, state bar), never inside a product screen. The chrome matches the IA and research pages so the deliverable lives in the same site.
- Icons are placeholder blocks (`--w-fill`), never real glyphs. Images are grey boxes. Text is real text, never baked into an image.

## 3. Markup (semantic HTML)

- Use real semantic elements: `header`, `nav`, `main`, `section`, `article`, `ul`/`li`, `form`, `label`, `input`, `button`, `a`. Not a pile of `div`.
- Buttons and fields are real `button` and `input` elements. A navigation action is a real `<a href>` to the target screen file.
- Exactly one `H1` per screen (the node H1 from its A to E block). Headings follow the block order.
- Every interactive target is at least 44px. Controls are labeled.

## 4. File naming

- Latin names, taken from `ia/docs/sitemap.md`. See `wireframes/docs/screens.md` for the locked list.
- The base file is the success state: `wireframes/<screen>.html`.
- Each real state is its own page: `wireframes/<screen>-<state>.html` (`-empty`, `-error`, `-loading`, and domain or role states such as `-low-signal`, `-redacted`, `-thin-warning`).
- Globals (header, footer, state bar) come from `_nav.js`, injected into placeholders. Do not duplicate them in each file.

## 5. States are first class, and there are more than four

- Each state is a SEPARATE page, so the prototype can navigate between them.
- Floor: empty, error, loading, success (success is the base page). The real set is the States section of the node spec: role states (guest, logged-in, role), domain states (no sources, thin evidence, source unavailable), and transit states (generating link). Success is not added everywhere by default. A state not in the node spec is not drawn.
- Every state has a visible exit, checked against `ia/docs/flows.md`. No dead ends: empty routes to an action, error offers retry or a way out, loading transitions to success. The one legitimate terminal dead end in the flows (a systematically broken evidence trail, no usable feedback anywhere, being caught without the brief) is preserved honestly, not smoothed over.

## 6. Viewports: mobile first, two per screen

- Every screen is shown in a desktop frame (01) and a mobile 360 frame (02), the same 01 desktop / 02 mobile split already used in the IA specs.
- Block order is reasoned from the 360 mobile view first.
- The app markup uses `@container` queries (not viewport `@media`), so the same markup collapses inside the 360 frame and expands inside the wide frame. The `.wf-frame` wrapper carries `container-type: inline-size`. Breakpoint: 600px of frame width (below is mobile, bottom tabs; above is desktop, top tabs).

## 7. Navigation is flow first

- One source: `wireframes/_nav.js` (the registry of screens, states, and flows, plus the render of globals added in Step 5).
- `wireframes/index.html` "All screens" is the flow-first index and the coverage map (built vs spec).
- Each screen carries a thin state bar (current screen and state, links to sibling states and the flow entry).
- No permanent product rail that fights each screen layout. The roadmap sidebar is the process chrome; the state bar is the prototype chrome.

## 8. SEO layout validation (layer 2, a check, not an invention)

- IA already defined the SEO structure (layer 1: slug, H1/H2, breadcrumbs, schema, indexation). Here we only validate layout: every block from the A to E set has a visible place and the right priority, there is exactly one H1, and breadcrumbs, SEO text, and any FAQ are not hidden.
- Indexation is inherited: only Home (0.0) and Legal (9.x) are indexed; the whole app is noindex; the public Shared brief (6.4) is public to view but noindex. A wireframe does not change this.
- If a required block has no place, that is an IA hole: fix the IA node, then render.

## 9. Deferred to later stages (do not add now)

Color, chosen font, shadows, real icons, images, finished UI, motion. Those are stages 06 (concept) to 08 (components). The wireframe adds nothing on top of the IA structure.

## 10. The etalon locks the concrete components

The concrete grey markup of the canonical components (theme card, confidence indicator, filter control on 2.0; evidence snippet on 4.0) is locked when the etalon (2.0 Synthesis view) is built in Step 4, and the reusable classes are added to `_wf.css` there. Later screens compose those classes; they do not re-invent the component.

---

## Inherited grey tokens (quick reference, defined in `_wf.css`)

- Screen background `--w-bg #0e0e11`, raised surface `--w-surface #131318`, bars `--w-bar #141418`.
- Lines `--w-line #262630`, control outline `--w-line-2 #33333f`.
- Text `--w-ink #cfcfd6`, secondary `--w-ink-2 #9a9aa6`, hint `--w-ink-3 #6b6b78`.
- Placeholder block `--w-fill #2a2a33`, skeleton `--w-skel #1b1b21`.
- Process chrome (accent, sidebar, state bar) uses the IA tokens `--accent #7c6af7`, `--bg*`, `--text*`. Never inside a product screen.
