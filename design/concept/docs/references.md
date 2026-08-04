# Concept References (Step 1)

*Where Sift's visual language comes from. One base, specific techniques borrowed from others, no clone. Each borrowed technique is bound to a real persona or benchmark line, so Step 2 (attributes) has a spine and every later decision can name its source.*

**Strategic dimension (named by research at Stage 01):** trust in the synthesis. The single most strategically important dimension for Sift (`research/docs/benchmark.md`). The benchmarks below were already named there; this step finds their visual language and pulls the concrete technique, not a general impression.

**Method:** Refero MCP (live). Styles for visual direction, screens for the in-app trust mechanisms. One reference as the base for mood and density, one or two specific details borrowed from others: the radius, where the citation sits, how much color reaches the screen.

**Not decided here:** the actual Sift palette and the dark / light commitment. Linear supplies the mechanism (layered neutrals, one restricted accent, weight through hierarchy), which is expressible dark or light. The palette and the dark / light call belong to Step 3 (brand plates). Nothing below hard-codes a Sift color.

---

## Base reference: Linear

- **Source:** Linear, https://linear.app (Refero style `554b801c-3b31-4086-a7e5-ae613cdd618b`; changelog variant `11d3e58a-87d7-4a9a-bbf5-720f4fd3ffc6`)
- **Why it is the base:** research named Linear the aspirational benchmark for clarity under density, and its design philosophy ("not every element should carry equal visual weight") maps directly onto Sift's Design Principle 2, Calm under density (`research/docs/benchmark.md`, product 3; `CLAUDE.md`, Design Principles).

**Technique taken (the calm-under-density mechanism, concrete):**
- Depth through layered neutral surfaces, not shadows: a near-black or near-white canvas with one and two steps of elevation (observed: `#08090a` canvas, `#0f1011` and `#161718` cards), separation carried by thin borders and tonal shift.
- A single restricted accent, reserved for the primary action only (observed: one lime `#e4f222`, nothing else saturated). This is the answer to "how much color reaches the screen": almost none, and only where the eye must go.
- Weight through hierarchy and compact spacing, not decoration: primary text at full contrast, secondary text receding (`#8a8f98`), 8px element gap, 6px card radius, 4px badge radius. Type does the work (Inter for UI, a mono for data and counts).

**What we take, what we drop:** take the mechanism, restraint, layering, one accent, hierarchy-first. Drop the specific lime hex and the dark-only commitment. Linear's lime is Linear's, not Sift's; picking a palette is Step 3.

**Persona anxiety it removes:** Alex is "comfortable with data but not a data analyst," "drowning in scattered signal," and works in 10 to 15 focused minutes, not an hour (`personas.md` O2, O8). A calm, dense surface lets Alex see the forest and the trees without noise, which is the felt meaning of Design Principle 2.

---

## Borrowed technique 1: inline citation badge and side citation panel

- **Source:** Parallel, Deep Research view, https://platform.parallel.ai (Refero screen `bb40b82c-4f98-41c2-bbbf-6fdb143a1612`). Live analog of the Perplexity inline-citation pattern named in the benchmark (`benchmark.md`, Mechanism 1).
- **The technique (concrete):** a small rounded count badge ("Basis N") sits inside the claim text, directly adjacent to the term, not in a footnote. Clicking opens a narrow right-side panel titled "Citation" with labeled provenance fields and a close X. The reading column stays put; the evidence comes to a side panel.

**How it maps to Sift:** every theme statement in the Synthesis view carries an inline evidence badge ("n=X feedback items") in the claim itself; clicking opens the evidence, then the raw source. The presence of the badge is the trust signal, not the reading of it (`benchmark.md` M1: "the presence of the citation, not the reading of it, is the trust signal").

**Persona anxiety it removes:** Alex stops trusting a tool that shows "confident presentation with no visible reasoning" and needs "the ability to drill down to the raw source" (`personas.md`, Alex trust triggers 4 and stop-trust 2; O10 trust gap and anti-pattern). Serves the secondary job: pull the underlying evidence to defend a decision under challenge (`personas.md`, Alex jobs).

---

## Borrowed technique 2: ranked rows with a volume bar and click-to-drill

- **Source:** Mercury, insights / cash-flow view, https://mercury.com (Refero screen `aed73dd2-8625-4289-8a1b-4e0f8c87a5a3`). Live analog of the Amplitude "metric to evidence" decomposability named in the benchmark (`benchmark.md`, Mechanism 2).
- **The technique (concrete):** compact ranked rows, each row a label plus an inline horizontal volume bar plus a right-aligned count and percent, under a segmented tab header that re-slices the same data (Source / Category). Clicking a row drills into the source detail. Summary first, detail on demand.

**How it maps to Sift:** the Synthesis view is themes ranked by signal; each row is the theme name plus a volume bar plus n=X, and a click opens Theme detail, then evidence, then source, with no navigation away from context.

**Persona anxiety it removes:** Alex wants the synthesized picture first and drills only into the themes that matter to the current decision, "the synthesis is the value, the drill-down is the trust mechanism" (`personas.md` O5; `ux-patterns.md` B1, marked most critical). Wants visible sample size and evidence count per theme (`personas.md`, Alex trust trigger 3).

---

## Borrowed detail 3: a tiny semantic status accent on a monochrome field

- **Source:** shadcn/ui, https://ui.shadcn.com (Refero style `c14c0a94-1037-449e-bf5b-4cb972656ac7`).
- **The technique (concrete):** a monochrome palette dominates; only tiny semantic accents mark status; typography, not color, is the voice.

**How it maps to Sift:** the "low signal" badge is information, not an alarm, a small quiet semantic mark next to n=X, never a loud alert. Confidence is shown by restraint.

**Persona anxiety it removes:** a theme flagged "low volume" is more trustworthy than the same theme presented confidently on thin evidence (`personas.md`, Alex trust trigger 5). Enforces Design Principle 2, weight through hierarchy, not color, badges, or alerts, and the confidence display D2 (n=X plus a low-signal badge).

---

## Structural analog (domain, not visual): Fibery feedback prioritization

- **Source:** Fibery, feedback-driven prioritization and feedback feed, https://fibery.io (Refero screens `b5f660ee-8ef4-4223-bf91-87c76ca7dba8`, `27ae3ced-d83d-4bc0-acb3-386ad6232716`).
- **What is taken:** structure only, not visual style. A hierarchical feedback-to-prioritization table with expandable rows, and feedback cards carrying tag and status metadata, confirm that Sift's theme card plus prioritization table is a real, worked pattern, not an invention. Rows expand to their evidence.
- **Note:** not a visual clone. The visual language stays Linear-based; this reference validates the information architecture only.

---

## Rejected reflexes (found in search, recorded so Step 3 does not drift there)

- **Steep** (https://steep.app, style `0a436b49-8740-4675-afa0-3563b092d555`): warm blush gradients and terracotta on a "warm analytics AI" surface. This is the exact category reflex the stage warns against (warm cream plus terracotta as the first AI answer to "calm"). Reject: it reads soft and consumer, not calm-analyst, and it is guessable from the category.
- **Mode BI** (https://mode.com, style `980966ef-e661-439d-8858-4cefe1e0451a`): neon chartreuse on forest green, theatrical and poster-like. Reject: violates "calm, not loud" (Voice principle 3; Design Principle 2).

---

## Synthesis rule for later steps

One base (Linear's calm-under-density mechanism), three borrowed techniques (inline citation badge, ranked drill-down, quiet status accent), one structural analog (Fibery). No reference copied whole. Each technique above is bound to a real persona or benchmark line, so Step 2 attributes are derived, not invented. The palette and the dark / light call are open, decided at Step 3 on the brand plates.

| Ingredient | Source | Technique | Anxiety removed (source line) |
|---|---|---|---|
| Base language | Linear | layered neutrals, one restricted accent, hierarchy-first | Calm under density; Alex not a data analyst, 10-15 min sessions (O2, O8) |
| Inline citation | Parallel / Perplexity | count badge in the claim, side citation panel | no visible reasoning destroys trust; drill to source (O10, trust trigger 4) |
| Ranked drill-down | Mercury / Amplitude | ranked rows, volume bar, click to drill | synthesis first, detail on demand; visible n=X (O5, trust trigger 3) |
| Quiet status accent | shadcn/ui | tiny semantic mark on monochrome | low-signal as information not alarm (trust trigger 5, D2) |
| Structure only | Fibery | expandable feedback-to-priority rows | validates theme card + prioritization IA |
