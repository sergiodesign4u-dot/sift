# Sift

Rules that must hold in the next session. Not a report and not a journal: status lives in `README.md`
plus the `done` flags in `/_nav.js`, and the record of what was decided and why lives in
`docs/decisions.md` (referenced by path, never auto-loaded). Budget: 200 lines. A new rule enters by
replacing or generalizing an existing one, never by being added beside it.

## The product

B2B SaaS that turns scattered customer feedback (support tickets, sales calls, reviews, interviews)
into clear, prioritized product decisions, each traceable back to the real user voices behind it.
Responsive web app; native mobile is out of scope. The defensible advantage is the trusted link from
raw signal to decision: the synthesis is transparent, every conclusion is traceable, and ambiguity is
acknowledged rather than hidden. The emotion to design for is confidence and calm, not overload.

Sources of truth, in this order: `research/docs/research.md` (the synthesis), `personas.md`, `jtbd.md`,
`cjm-as-is.md`, `cjm-to-be.md`, then `ia/docs/`, then `wireframes/docs/`, then `voice/docs/`. Do not
restate them here. If a claim in this file and a claim in a source disagree, the source wins and this
file is wrong.

## How we work

- **Step by step, not autonomously.** One step, then show it and wait. Ask when an input is missing;
  never substitute a median for a source that does not exist.
- **Input gate before Step 1 of any stage.** Check that every named input file actually exists. List
  what is missing as "which file, from which stage, what it was to give, which step hangs without it",
  then wait for the decision.
- **Do not invent.** A number, a date, or an emotion with no source is `[?]`, not a guess. Facts about
  competitors come from a page opened in this session, not from memory.
- **Acceptance is in the browser, not in a table.** Where a stage makes a screen or text on a screen,
  open it, walk every state, narrow to 360px, and only then say it is done. Fixes come as prompts, not
  as hand edits: a hand edit does not survive the next clone.
- **Critique runs on two instruments,** Claude and Codex (plugin `codex`, read-only, stated explicitly
  in the step). Sets are collected independently and deduped afterwards. The critique log carries a
  "who found it" column. Codex owns source-level classes; "breaks at 360" and pixel comparisons stay
  with Claude and a browser. Codex unavailable is a stop and a question, not a quiet single pass.
- **Verify before you fix.** Re-read the line in the file before editing it. A finding that does not
  hold stays in the log marked "withdrawn on verification", with the reason, so it does not come back.
- **Language:** internal markdown and html are English; chat is Ukrainian. **No em dash in any output
  file** (md or html): commas, periods, or a spaced hyphen. The check greps for the character itself,
  so it does not appear in this file either.

## Where a thing is written

| What it is | Where it goes |
|---|---|
| A rule that must hold next session | `CLAUDE.md` (this file), or the zone rules in a stage `docs/` |
| Status: what is done, what is next | the table in `README.md` and `done` in `/_nav.js`, nowhere else |
| A decision: what we did, why, what we rejected | `docs/decisions.md` |

Zone rules keep their own homes and their own visible page: `wireframes/docs/conventions.md`,
`ia/docs/blocks.md`, `voice/docs/voice.md`. This file only points at them.

**Every md gets a visible place on an html page,** named by the same step that creates the md: its own
page, a named section registered in that page's `NAV_SECTIONS`, or a satellite page declaring
`NAV_ACTIVE`. An artifact nobody can see in a browser does not exist for the person deciding.
**Change an md that already has a deployed page and you rebuild the affected section in the same step.**

## Folders and navigation

- A stage owns one folder: deployed html flat in it, markdown under `docs/`. Two folders deliberately
  collect several stages: `research/` (01, 02, 02+) and `design/` (06 and everything after).
- **`index.html` is the product home page; `overview.html` is the hub.** In the repo root `index.html`
  is the project entry page. There is no third meaning of either word.
- **No empty folders ahead of their stage,** and no `.gitkeep`. A stage creates its folder together
  with its first file. The route through the project is shown by the registry, not the file system.
- **The roadmap sidebar is rendered from `/_nav.js`, styled by `/_nav.css`.** A page carries an empty
  `<aside id="sidebar">`, declares `window.NAV_BASE`, optionally `NAV_SECTIONS`, and for pages outside
  the registry `NAV_ACTIVE` plus `NAV_ACTIVE_LABEL`. A page never describes a `nav-*` class itself.
  Adding a page is one line in the registry; a status change is one `done` flag.
- **Per-stage registries keep their own namespace:** `IA_NODES` in `ia/_nav.js`, `WF_CLUSTERS` in
  `wireframes/_nav.js`, later `DESIGN_NAV` and `KIT_NAV`. Hub pages load two registries at once, so a
  local `window.NAV` would silently overwrite the roadmap.
- **The per-stage panel** (wireframes, `design/`, the kit stand) is four blocks top to bottom: header
  with a button to the hub plus a stage badge and one subtitle line; a tree of cluster to screen to
  states; an accordion where only the current node is open; and cross-links out of the artifact at the
  bottom. No thin state strip above the screen.

## Product constraints

- **MVP focus is Segment A, the Overloaded PM** (D1). The MVP spine is the five items in
  `research/docs/cjm-to-be.md`: ingestion (CSV + Intercom), AI synthesis, confidence display, evidence
  drill-down with inline citation, shareable evidence brief. Remove one and the To-Be path breaks.
- **Confidence display is mandatory in MVP** (D2) and its day-one scope is fixed: item count per theme
  (`n=X`) plus a "low signal" badge. Source diversity, time range, and thresholds are v2. This is the
  transparency condition the riskiest assumption requires, not a feature to trade away.
- **CSV + Intercom are the first integrations** (D3); Zendesk follows on the same abstraction.
- **Every node and every block carries `MVP` or `LATER`.** The first round of any stage takes the MVP
  subset only; deferred items are listed in `ia/docs/sitemap.md`, not forgotten. An MVP that was never
  cut is not an MVP.
- **Compliance is day one, not later:** GDPR for EU customers with EU data residency, CCPA for US
  enterprise, SOC 2 Type II planned in year 1. Customer feedback carries PII, so it is **scrubbed by
  default**, and that default is visible in the product (7.2 Data and privacy).
- **Indexation:** only Home (0.0) and Legal (9.x) are indexed with the full A to E SEO block. The whole
  application is noindex. The public Shared brief (6.4) is public to view but noindex: it carries
  customer data.

## Design principles

1. **Show your work.** Every conclusion links to the evidence behind it. Confidence is shown honestly;
   thin evidence is never dressed up as strong signal. The user can always drill down.
2. **Calm under density.** Hierarchy, weight, and whitespace do the work of focus, not color, badges,
   or alerts. The interface handles large volumes without becoming noisy.
3. **Earn trust, do not assume it.** Be transparent about how the synthesis works, acknowledge
   ambiguity, and let the user challenge or override a conclusion.
4. **One decision at a time.** Every view has a clear "what should I do next", not infinite data to
   interpret. On a screen there is exactly one primary action, and the footer does not compete with it.
5. **Traceable or it does not exist.** Any claim in the product must be traceable to its source. If the
   chain breaks, the claim is removed or marked `[?]`.

## Stage rules that bind the stages after them

- **IA composition comes from the block bank** `ia/docs/blocks.md`, built per PAGE TYPE from
  competitors (Playwright, public pages only) and Refero (craft outside the category). A block with no
  trace to a job, a barrier from `cjm-as-is.md`, or an SEO requirement is not taken. A reference is an
  input, never an output: a composition that matches one source one to one is a copy.
- **Navigation is three entries plus account:** Synthesis (2.0, the default landing), Sources (3.0),
  Briefs (6.0). Account sits in a corner menu. Three, not five, is the calm-under-density choice.
  Depth to the main job stays inside a 3 tap budget.
- **Canonical components are defined once and referenced:** confidence indicator, theme card, filter
  and sort control (owner 2.0); evidence snippet (owner 4.0); source-type enum (owner 3.0).
- **Mobile-first responsive, desktop-reasoned density.** One live screen, checked by narrowing the
  browser, never a desktop mock plus a mobile mock. Every block must survive 360px, and that is a hard
  gate. But block ORDER and DENSITY are reasoned from the desktop, because a PM does this work at a
  desk: what drops on mobile is decided by asking what the desktop row can afford to lose, not the
  other way round. A block that only fits by being cut in half at 360 is a block that is wrong at both
  sizes.
- **Wireframes stay grey and are never colored in place.** `wireframes/_wf.css` is the structural
  contract. From stage 06 color lands on copies in `design/`; stage 05 is the last stage that edits
  text in `wireframes/`. A block, page, or state that appears first in a wireframe is an IA defect:
  fix it upstream in IA, then render.
- **States are first class and there are more than four.** Floor: empty, error, loading, success. The
  real set is the States section of the node spec, and each state is its own page. No dead ends.
- **Text ownership after stage 05.** SEO copy (title, description, H1, the block C body) belongs to the
  IA node and is synced back into `ia/docs/pages/`. Interface strings (buttons, labels, state text,
  toasts) belong to `voice/docs/microcopy.md`, which holds unique lines with a "screens" column, not
  one row per occurrence. No product line exists in two editions.
- **Voice in one line each:** earn the claim, do not assert it; speak the customer's words, not the
  product's; calm, not loud; every state names the next move. Forbidden: "Something went wrong",
  "successfully", exclamation marks and emoji, greetings and celebration, hype adjectives, "just" and
  "simply", blaming the reader, filler "please".
- **Values migrate, they are never re-derived.** The CSS value line ran `design/_theme.css` to
  `design/kit/kit.css` by `git mv` and runs on to `design/system/tokens.css`, with the `:root` block
  moved byte for byte and the origin comment kept beside each variable. A value changes only by a
  decision stated out loud as "variable, value, why", never as a side effect of a refactor.
- **A screen is assembled from the kit, and a fix lands in the kit.** From stage 07 the one
  stylesheet a product screen may use is `design/kit/kit.css`: no `style=` attribute, no `<style>`
  block, no appearance written on a page. Missing a component or a variant means adding it to
  `kit.css`, to the stand `design/kit/kit.html` and to `design/kit/docs/inventory.md` FIRST, then using
  it. A value fix goes to a `:root` variable and reaches every screen; a markup fix goes to the
  stand and is copied from there. A fix on one screen is a desync, and a difference written as a
  contextual override (`.foo .btn { font-size: X }`) is an undeclared variant, not a patch.
  Prototype chrome around the screen (`design/_panel.css`, the stands' own frames) is a separate
  layer on the `--pf-*` values and never enters the kit.
