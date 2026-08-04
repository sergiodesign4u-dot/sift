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
| Concept | In progress, parked (brand plates, three layout directions, a first color pass on Synthesis). Resumes when the grey screens are final |
| UI + Visual | Not started |
| Tokens + Components | Not started |
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
  _theme.css         The shared color layer; inline styles on the pages are not allowed
  synthesis*.html    First color copies of the wireframe screens, seeded by stage 06
  concept/           How the language was found
    directions.html  Three layout directions of one brand
    concept.html     The stand of the chosen language
    docs/            concept.md, references.md
    assets/          Brand plates
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
