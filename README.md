# Sift

B2B SaaS that turns scattered customer feedback into clear, prioritized product decisions. Every roadmap item is traceable back to the real user voices behind it.

**Live pages:**
- Foundation Research: [https://sergiodesign4u-dot.github.io/sift/research.html](https://sergiodesign4u-dot.github.io/sift/research.html)
- User Research - Personas: [https://sergiodesign4u-dot.github.io/sift/personas.html](https://sergiodesign4u-dot.github.io/sift/personas.html)
- User Research - JTBD: [https://sergiodesign4u-dot.github.io/sift/jtbd.html](https://sergiodesign4u-dot.github.io/sift/jtbd.html)

---

## Project Status

| Phase | Status |
|---|---|
| Foundation Research | Done (competitors, benchmark, Lean UX Canvas, strategy, AARRR, UX patterns, master synthesis, live re-research, quality check, founder decisions D1-D3 locked) |
| User Research (Personas + JTBD) | Done (three personas, JTBD hierarchy + matrix) |
| CJM (As-Is + To-Be) | Not started |
| Information Architecture (Basic + Detailed) | Not started |
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
research.html        Foundation Research, deployed page
personas.html        User Research: personas, deployed page
jtbd.html            User Research: JTBD, deployed page
research/
  docs/              All research markdown - the source of truth
  screens/           Captured competitor and benchmark screens
user-research/       Formal User Research stage (skeleton)
ia/                  Information Architecture (skeleton)
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

Convention: raw markdown lives in each stage's `docs/`; the deployed HTML pages sit flat at the repo root so the GitHub Pages links stay stable across stages.

---

## Research Documents (`research/docs/`)

- [research.md](research/docs/research.md) - Master synthesis, single source of truth: intro (incl. what research confirmed / refuted / changed vs the brief), strategy, AARRR, competitors, benchmark, patterns, conclusions, live re-research, founder decisions
- [lean-ux-canvas.md](research/docs/lean-ux-canvas.md) - Lean UX Canvas v2 (Jeff Gothelf): the one-sheet strategy, 8 blocks incl. riskiest assumption and smallest test
- [strategy.md](research/docs/strategy.md) - Product strategy: objectives, segments, business model, riskiest assumption, H1 reformulation, locked founder decisions (D1-D3)
- [competitors.md](research/docs/competitors.md) - Competitor landscape: HARD, SOFT, ASPIRATIONAL, plus matrix and gaps
- [benchmark.md](research/docs/benchmark.md) - Trust in synthesis: cross-category best-in-class scores and mechanisms
- [aarrr.md](research/docs/aarrr.md) - AARRR funnel model with one metric and one MVP decision per stage
- [ux-patterns.md](research/docs/ux-patterns.md) - UX pattern selection and rationale
- [personas.md](research/docs/personas.md) - People observations and three personas (Overloaded PM, Product Lead, Signal Supplier)
- [jtbd.md](research/docs/jtbd.md) - JTBD job hierarchy, matrix, and MVP core conclusions
- [live-research.md](research/docs/live-research.md) - Adversarial verification artifact: 8 claims tested, 6 confirmed, 0 killed
- [quality-check.md](research/docs/quality-check.md) - Source audit: every quantitative claim checked against a cited source
