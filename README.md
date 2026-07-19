# Sift

B2B SaaS that turns scattered customer feedback into clear, prioritized product decisions. Every roadmap item is traceable back to the real user voices behind it.

**Live pages:**
- Home (project hub): [https://sergiodesign4u-dot.github.io/sift/](https://sergiodesign4u-dot.github.io/sift/)
- Foundation Research: [https://sergiodesign4u-dot.github.io/sift/research/research.html](https://sergiodesign4u-dot.github.io/sift/research/research.html)
- User Research - Personas: [https://sergiodesign4u-dot.github.io/sift/user-research/personas.html](https://sergiodesign4u-dot.github.io/sift/user-research/personas.html)
- User Research - JTBD: [https://sergiodesign4u-dot.github.io/sift/user-research/jtbd.html](https://sergiodesign4u-dot.github.io/sift/user-research/jtbd.html)
- User Research - CJM As-Is: [https://sergiodesign4u-dot.github.io/sift/user-research/cjm-as-is.html](https://sergiodesign4u-dot.github.io/sift/user-research/cjm-as-is.html)
- User Research - CJM To-Be: [https://sergiodesign4u-dot.github.io/sift/user-research/cjm-to-be.html](https://sergiodesign4u-dot.github.io/sift/user-research/cjm-to-be.html)
- Information Architecture - User Flows: [https://sergiodesign4u-dot.github.io/sift/ia/flows.html](https://sergiodesign4u-dot.github.io/sift/ia/flows.html)
- Information Architecture - Concept Map: [https://sergiodesign4u-dot.github.io/sift/ia/concept-map.html](https://sergiodesign4u-dot.github.io/sift/ia/concept-map.html)
- Information Architecture - Site Map: [https://sergiodesign4u-dot.github.io/sift/ia/sitemap.html](https://sergiodesign4u-dot.github.io/sift/ia/sitemap.html)
- Information Architecture - Structure (node hub): [https://sergiodesign4u-dot.github.io/sift/ia/structure.html](https://sergiodesign4u-dot.github.io/sift/ia/structure.html)
- Wireframes - All screens (clickable prototype): [https://sergiodesign4u-dot.github.io/sift/wireframes/index.html](https://sergiodesign4u-dot.github.io/sift/wireframes/index.html)
- Voice - How Sift speaks: [https://sergiodesign4u-dot.github.io/sift/voice/voice.html](https://sergiodesign4u-dot.github.io/sift/voice/voice.html)

---

## Project Status

| Phase | Status |
|---|---|
| Foundation Research | Done (competitors, benchmark, Lean UX Canvas, strategy, AARRR, UX patterns, master synthesis, live re-research, quality check, founder decisions D1-D3 locked) |
| User Research (Personas + JTBD) | Done (three personas, JTBD hierarchy + matrix) |
| CJM (As-Is + To-Be) | Done (As-Is journey from mined VOC with emotional curve, To-Be traced path, sharpened MVP backlog) |
| Information Architecture | Done (Basic Layer: entities, concept-sitemap, navigation, user flows, trace matrix. Detail Layer: per-page IA for all 39 nodes across 10 clusters, SEO ahead, black-and-white wireframes, a site-map tree and a node hub) |
| Wireframes | Done (the whole product as a grey responsive clickable prototype: 17 screens / 39 pages across 10 clusters, page rail + per-screen state switcher, every flow linked, audited by four read-only subagents) |
| Voice | Done (voice.md: 4 principles, dictionary, forbidden list, microcopy rules; all 17 screens rewritten to the voice by an eight-agent fanout, reconciled and audited; voice.html deployed) |
| Concept | Next |
| UI + Visual | Not started |
| Tokens + Components | Not started |
| Design System | Not started |
| Responsive | Not started |
| Animation | Not started |
| Handoff | Not started |

---

## Repository Structure

```
CLAUDE.md            Product brief (read by Claude in every prompt)
README.md            This living index
index.html           Project hub / landing, deployed at the site root
research/
  research.html      Foundation Research, deployed page
  docs/              All research markdown - the source of truth
  screens/           Captured competitor and benchmark screens
user-research/
  personas.html      User Research: personas, deployed page
  jtbd.html          User Research: JTBD, deployed page
  cjm-as-is.html     User Research: CJM As-Is, deployed page
  cjm-to-be.html     User Research: CJM To-Be, deployed page
  docs/              User Research markdown: personas, JTBD, CJM As-Is + To-Be
ia/
  flows.html         IA Basic Layer: user flows (Mermaid)
  concept-map.html   IA Basic Layer: concept-sitemap, navigation, trace matrix
  sitemap.html       IA Detail Layer: site-map tree (Mermaid) of the 10 clusters
  structure.html     IA Detail Layer: node hub, a chip for every node
  _nav.js            IA Detail Layer: single node registry feeding the hub chips
  navigation.html footer.html home.html synthesis.html sources.html
  theme.html evidence.html briefs.html auth.html account.html
  system.html legal.html   IA Detail Layer: one black-and-white wireframe per node
  docs/
    sitemap.md       IA source: entities, the detailed node map (39 nodes), navigation, trace matrix
    flows.md         IA source: five user flows
    pages/           IA Detail Layer: one markdown source per node + the page template
wireframes/          Grey responsive clickable prototype of the whole product, deployed
  index.html         All screens: walk by flow + coverage map (17 built, 0 in spec)
  _wf.css            Shared grey stylesheet (inherits the IA B/W tokens); stays the structural contract
  _nav.js            Single registry (nodes, states, flows) + the prototype chrome (top bar, page rail, state switcher)
  <screen>.html      One base page per screen + <screen>-<state>.html per real state
  docs/              screens.md (screen x state matrix), conventions.md (grey contract), critique.md (audit log)
voice/               Voice: how Sift speaks, deployed
  voice.html         Voice visualization (principles, dictionary, forbidden, microcopy)
  docs/              voice.md (the rulebook), microcopy.md (text inventory + was / now log)
concept/             Visual language and high-fidelity mockups (skeleton)
ui-visual/           UI and visual design (skeleton)
tokens-components/   Design tokens and coded components (skeleton)
design-system/       Design system documentation (skeleton)
responsive/          Responsive behavior (skeleton)
animation/           Motion and animation (skeleton)
handoff/             Dev handoff specs and annotations (skeleton)
```

Convention: each stage owns one folder holding both its deployed HTML page(s) and its raw markdown under `docs/`. The project hub `index.html` sits at the repo root so the GitHub Pages site root is a real landing page. Stage pages live under their stage folder (for example `research/research.html`, `user-research/personas.html`), and cross-links between pages use relative paths.

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

---

## User Research Documents (`user-research/docs/`)

- [personas.md](user-research/docs/personas.md) - People observations and three personas (Overloaded PM, Product Lead, Signal Supplier)
- [jtbd.md](user-research/docs/jtbd.md) - JTBD job hierarchy, matrix, and the 3 MVP-core jobs
- [cjm-as-is.md](user-research/docs/cjm-as-is.md) - As-Is journey of the Overloaded PM: 6 phases, emotions and barriers from mined voice-of-customer (19 verbatim quotes, marked signal / pattern), the emotional curve, and 5 growth zones
- [cjm-to-be.md](user-research/docs/cjm-to-be.md) - To-Be journey: each step traced to an As-Is barrier or job, the projected emotional curve, and the sharpened MVP backlog

**Main CJM conclusion:** the deepest As-Is pain is Phase 6, defending the roadmap when a stakeholder's anecdote outweighs the PM's unciteable evidence ("evidence is nothing in the face of a hippo", sentiment -5, a strong pattern). To-Be inverts exactly that point (the largest lift, -5 to +4) with a live, traceable evidence chain (theme, to items, to verbatim quote) plus a shareable evidence brief.

---

## Information Architecture Documents (`ia/docs/`)

- [sitemap.md](ia/docs/sitemap.md) - The IA data source: 7 core entities traced to jobs, the detailed node map (10 clusters, 39 nodes `X.Y` with type, group, index, includes, transitions), the navigation model with depth to the main job in taps, and the job trace matrix. The node map is the data behind sitemap.html (tree) and structure.html (hub).
- [flows.md](ia/docs/flows.md) - Five user flows (Mermaid) for the primary and related jobs, each traced to a CJM To-Be phase, with decision points, empty / error / loading states, and color by outcome
- [pages/](ia/docs/pages/) - Detail Layer: one markdown source per node (navigation, footer, home, synthesis, sources, theme, evidence, briefs, auth, account, system, legal) plus the per-page template. Each has a black-and-white wireframe under `ia/`.

**Main IA conclusion:** the structure is derived from the jobs, not a competitor menu. The main-job surface (Synthesis view) is home at tap 0; the full trust chain to raw evidence is 2 taps; capturing the defensible call is 1 tap. No user-facing screen is an orphan. SEO ahead: only Home and Legal are indexed (full A-E block); the whole app is noindex, and the public Shared brief is public to view but noindex (customer data).
