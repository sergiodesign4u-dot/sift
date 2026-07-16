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

---

## Project Status

| Phase | Status |
|---|---|
| Foundation Research | Done (competitors, benchmark, Lean UX Canvas, strategy, AARRR, UX patterns, master synthesis, live re-research, quality check, founder decisions D1-D3 locked) |
| User Research (Personas + JTBD) | Done (three personas, JTBD hierarchy + matrix) |
| CJM (As-Is + To-Be) | Done (As-Is journey from mined VOC with emotional curve, To-Be traced path, sharpened MVP backlog) |
| Information Architecture | In progress (Basic Layer done: entities, concept-sitemap, navigation, user flows, trace matrix; Detail Layer next) |
| Wireframes | Not started |
| Voice | Not started |
| Concept | Not started |
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
  flows.html         IA: user flows (Mermaid), deployed page
  concept-map.html   IA: concept-sitemap, navigation, and trace matrix, deployed page
  docs/              IA markdown: sitemap (entities, concept-sitemap, navigation, trace matrix) + flows
wireframes/          Core flow wireframes (skeleton)
voice/               Voice and tone (skeleton)
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

- [sitemap.md](ia/docs/sitemap.md) - Basic Layer concept: 7 core entities traced to jobs, the concept-sitemap (screens grouped by intent, clusters A to D plus platform orphans), the navigation model with depth to the main job in taps, and the job trace matrix
- [flows.md](ia/docs/flows.md) - Five user flows (Mermaid) for the primary and related jobs, each traced to a CJM To-Be phase, with decision points, empty / error / loading states, and color by outcome

**Main IA conclusion:** the concept-sitemap is derived from the jobs, not a competitor menu. The main-job surface (Synthesis view) is home at tap 0; the full trust chain to raw evidence is 2 taps; capturing the defensible call is 1 tap. No user-facing screen is an orphan, and two jobs (J5 Segment C, S2 Persona B) are deliberately deferred, not accidental gaps.
