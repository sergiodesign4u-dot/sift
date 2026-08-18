# Sift

B2B SaaS that turns scattered customer feedback into clear, prioritized product decisions. Every roadmap item is traceable back to the real user voices behind it.

**Live:** [https://sergiodesign4u-dot.github.io/sift/](https://sergiodesign4u-dot.github.io/sift/) - the project entry page lists every stage and links the ones that are ready. The roadmap sidebar on every page is rendered from the one registry `/_nav.js`, so a new page appears everywhere the moment it is registered there.

---

## Project Status

This table and the `done` flags in `/_nav.js` are the only two places status is written. `CLAUDE.md` holds rules, never status.

| Stage | Status |
|---|---|
| Foundation Research | Done (competitors, benchmark, Lean UX Canvas, strategy, AARRR, UX patterns, master synthesis, live re-research, founder decisions D1-D3 locked) |
| User Research (Personas + JTBD) | Done (three personas, JTBD hierarchy + matrix) |
| CJM (As-Is + To-Be) | Done (As-Is journey from mined VOC with emotional curve, To-Be traced path, sharpened MVP backlog) |
| Information Architecture | Base layer done. Detail layer done for 39 nodes and **reopened** to add the missing block bank (`ia/docs/blocks.md`), the source the page composition never had |
| Wireframes | **Done, rebuilt on the block bank** (17 screens, 38 pages). Composition traces to `ia/docs/blocks.md`; states keep their screen's blocks; one stage panel replaced the top bar plus rail; critique run on two instruments (Claude in a browser, Codex read-only), 11 findings, all fixed |
| Voice | Done (4 principles, dictionary, forbidden list, microcopy rules; every screen rewritten; voice.html deployed). Re-runs over whatever blocks the wireframe rebuild adds |
| Concept | **Done.** Brand plate B chosen and entered into `DESIGN-artifacts.md`; five attributes, each signed to a data line; the etalon and its three states plus the public brief in color in `design/`; the split-evidence direction re-read against the rebuild and deferred with the reason; audited (targets, focus, contrast, overflow) and the before / after on `concept.html` |
| UI + Visual | **Done.** `DESIGN.md` read out of the code; the inventory of the whole product (50 components, 3 levels, 13 one-offs); the kit `design/kit/kit.css` (arrived by `git mv`, `:root` byte for byte) with `shell.html` and the stand `kit.html`; no photography, by a stated decision, with the one prompt held ready; the sample of 7 screens plus the 2 seeds, 23 pages in colour, each assembled from the kit and carrying no style of its own; two-part navigation (`design/_nav.js` panel, `design/overview.html` hub with the honest coverage map); critique on three instruments, 9 findings fixed and 1 withdrawn on verification |
| Tokens + Components | **In progress.** Steps 1 to 4 done. Two tables of facts read and measured in two instruments; consolidation turned 248 class rows into 63 that carry axes, with a rename map for Stage 12; `design/system/tokens.css` in two levels, 82 primitives and 20 roles, every role with a light pair and every ratio measured; `base.css`; and the foundation pages on `design/kit/overview.html`, where the review fixed two contrast failures. Step 5 (components) next |
| Design System | Not started |
| Responsive | Not started |
| Animation | Not started |
| Handoff | Not started |

---

## Repository Structure

```
CLAUDE.md            The project rulebook: rules that must hold next session. No status, no report
AGENTS.md            Entry for the Codex critic: what this repo is and what is deliberate here
README.md            This living index and the one status table
docs/decisions.md    What was decided, why, and what was rejected. Never auto-loaded
index.html           Project entry page, deployed at the site root; renders the roadmap from /_nav.js
_nav.js              THE registry: 12 stages, their pages, and the done flag. Draws every sidebar
_nav.css             The one look of that sidebar; a page links it and describes no nav-* class itself
research/            Stages 01, 02 and 02+ live together, because their files are read and edited together
  research.html      Foundation Research
  personas.html jtbd.html cjm-as-is.html cjm-to-be.html    User Research and CJM
  docs/              research.md, lean-ux-canvas.md, competitors.md, benchmark.md, aarrr.md,
                     ux-patterns.md, strategy.md, live-research.md, quality-check.md,
                     personas.md, jtbd.md, cjm-as-is.md, cjm-to-be.md
  screens/           Captured competitor and benchmark screens
ia/
  flows.html         Base layer: user flows (Mermaid)
  concept-map.html   Base layer: concept-sitemap, navigation, trace matrix
  sitemap.html       Detail layer: the site-map tree of the 10 clusters
  structure.html     Detail layer: node hub, a chip per node
  _nav.js            Detail layer: the node registry feeding the hub chips
  <node>.html        One black-and-white node page per IA node
  docs/              sitemap.md, flows.md, pages/ (one md per node), blocks.md (block bank, in progress)
wireframes/          Grey responsive clickable prototype of the whole product
  index.html         The product home page in grey (node 0.0)
  overview.html      The hub: every screen by flow, plus the coverage map
  _nav.js            The screen registry, the in-frame globals, and the wireframe-only side panel
  _wf.css            Shared grey stylesheet; the structural contract, never colored
  <screen>.html      Base page = success state; <screen>-<state>.html = one page per real state
  docs/              screens.md, conventions.md, critique.md
voice/
  voice.html         Voice: principles, dictionary, forbidden list, microcopy
  docs/              voice.md, microcopy.md
design/              The roof of the whole visual half. Product screens sit flat here, material in subfolders
  synthesis*.html    First color copies of the wireframe screens, seeded by stage 06
  shared-brief.html  The contrast screen: the public read-only document
  system/            THE CODE of the design system. A package that could be lifted out whole
    tokens.css       primitive + semantic + the light pair. Colour through roles, geometry direct
    base.css         reset, type ground, the one focus ring, two layout utilities
  kit/               THE SHOWCASE of the system, and the Stage 07 component kit it grew out of
    overview.html    The hub: foundations, and the state of the stage
    architecture.html color.html typography.html geometry.html icons.html   the foundations
    _nav.js _page.css  the registry of pages and the stand's own chrome, with the theme switch
    docs/            tokens-audit.md, census.md, architecture.md, inventory.md
    kit.css          THE stylesheet: :root plus every component class. Came from _theme.css by git mv
    shell.html       The shell as markup: sprite, app header, bottom tabs, footer, public bar
    kit.html         The stand: tokens, inventory, components, shell
    inventory.md     The component inventory of the whole product, with the level column
  overview.html      The hub: screens by flow, the coverage map, and the way into the kit
  _nav.js            DESIGN_NAV, the colour-stage registry; renders the panel and the hub lists
  _panel.css         The chrome of the colour stage: the screen panel and the hub. Never product
  index.html         0.0 Home, the product home page in colour. The one indexed screen
  <screen>.html      Colour copies, same file names as wireframes/. Assembled from the kit
  screens/           Before and after pairs, two viewports, captured with Playwright
  visuals/           The image set and its prompt. Empty by decision: this product carries no photography
  concept/           How the language was found
    directions.html  Three layout directions of one brand
    concept.html     The stand of the chosen language
    docs/            concept.md, references.md
    assets/          Brand plates
DESIGN.md            The product design language, read out of the code. Every value carries its origin
DESIGN-artifacts.md  Draft design language from the chosen brand plate; every value carries its origin
```

Each stage owns one folder holding its deployed html flat plus its markdown under `docs/`. Two folders deliberately collect several stages: `research/` (01, 02, 02+) and `design/` (06 and everything after), because those files are read and changed together. Empty folders are never created ahead of their stage: the route through the project is shown by the registry, not by the file system.

---

## Research Documents (`research/docs/`)

- [research.md](research/docs/research.md) - Master synthesis, single source of truth: intro (incl. what research confirmed / refuted / changed vs the brief), strategy, AARRR, competitors, benchmark, patterns, conclusions, live re-research, founder decisions
- [lean-ux-canvas.md](research/docs/lean-ux-canvas.md) - Lean UX Canvas v2 (Jeff Gothelf): the one-sheet strategy, 8 blocks incl. riskiest assumption and smallest test
- [strategy.md](research/docs/strategy.md) - Product strategy: objectives, segments, business model, riskiest assumption, H1 reformulation, locked founder decisions (D1-D3)
- [competitors.md](research/docs/competitors.md) - Competitor landscape: HARD, SOFT, ASPIRATIONAL, plus matrix and gaps
- [benchmark.md](research/docs/benchmark.md) - Trust in synthesis: cross-category best-in-class scores and mechanisms
- [aarrr.md](research/docs/aarrr.md) - AARRR funnel model with one metric and one MVP decision per stage
- [ux-patterns.md](research/docs/ux-patterns.md) - UX pattern selection and rationale
- [live-research.md](research/docs/live-research.md) - Adversarial verification artifact: 8 claims tested, 6 confirmed, 0 killed
- [quality-check.md](research/docs/quality-check.md) - Source audit: every quantitative claim checked against a cited source
- [personas.md](research/docs/personas.md) - People observations and three personas (Overloaded PM, Product Lead, Signal Supplier)
- [jtbd.md](research/docs/jtbd.md) - JTBD job hierarchy, matrix, and the 3 MVP-core jobs
- [cjm-as-is.md](research/docs/cjm-as-is.md) - As-Is journey of the Overloaded PM: 6 phases, emotions and barriers from mined voice-of-customer (19 verbatim quotes, marked signal / pattern), the emotional curve, and 5 growth zones
- [cjm-to-be.md](research/docs/cjm-to-be.md) - To-Be journey: each step traced to an As-Is barrier or job, the projected emotional curve, and the sharpened MVP backlog

**Main CJM conclusion:** the deepest As-Is pain is Phase 6, defending the roadmap when a stakeholder's anecdote outweighs the PM's unciteable evidence ("evidence is nothing in the face of a hippo", sentiment -5, a strong pattern). To-Be inverts exactly that point (the largest lift, -5 to +4) with a live, traceable evidence chain (theme, to items, to verbatim quote) plus a shareable evidence brief.

---

## Information Architecture Documents (`ia/docs/`)

- [sitemap.md](ia/docs/sitemap.md) - The IA data source: 7 core entities traced to jobs, the detailed node map (10 clusters, 39 nodes `X.Y` with type, group, index, includes, transitions), the navigation model with depth to the main job in taps, and the job trace matrix. The node map is the data behind sitemap.html (tree) and structure.html (hub).
- [flows.md](ia/docs/flows.md) - Five user flows (Mermaid) for the primary and related jobs, each traced to a CJM To-Be phase, with decision points, empty / error / loading states, and color by outcome
- [pages/](ia/docs/pages/) - Detail Layer: one markdown source per node plus the per-page template. Each has a black-and-white node page under `ia/`.

**Main IA conclusion:** the structure is derived from the jobs, not a competitor menu. The main-job surface (Synthesis view) is home at tap 0; the full trust chain to raw evidence is 2 taps; capturing the defensible call is 1 tap. No user-facing screen is an orphan. SEO ahead: only Home and Legal are indexed (full A-E block); the whole app is noindex, and the public Shared brief is public to view but noindex (customer data).
