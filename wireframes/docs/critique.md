# Wireframes - Critique log (Step 9) - Sift

*Stage 04 close-out. A parallel read-only audit of all 39 wireframe pages by four auditor
subagents, each given the allowed grey palette, the intentional placeholder textures, a defect
taxonomy, and conventions.md / screens.md / sitemap.md / flows.md. Findings were consolidated into
one table, shown, then fixed. No em dash.*

## Method

Four auditors split the 39 pages: Flow 0 spine (10), Briefs + Sources (14), Auth + Account + System
(10), Home + Legal + hub (5). Taxonomy used: appearance-leak, placeholder-text, missing-state,
dead-end, zone-no-action, off-map, data-desync, and other (em dash / more than one h1 / broken link).

## Result

Clean overall: no dead ends, no missing states, no broken internal links, no em dashes, no
appearance leaks, and canonical data consistent across screens (CSV 840, Intercom 2,910, total 3,750;
theme n = 42 / 28 / 19 / 14 / 6 / 4, last two low signal). Two fixes, two accepted notes. No HIGH.

| # | File | Severity | Type | Finding | Resolution |
|---|---|---|---|---|---|
| 1 | evidence.html | med | one-h1 | The base evidence page had no h1 (a blockquote plus an orphan h2 "Provenance"), inconsistent with its redacted sibling which does carry an h1. | FIXED. Added the node H1 "Feedback item" with a one-line context sub above the raw item, so the page has exactly one h1 and Provenance nests under it. |
| 2 | evidence-redacted.html | low | wording | The honesty notice cited PII scrubbing while the provenance list also said the item was "removed at author request", showing two different causes at once on a trust surface. | FIXED. The provenance source line now reads "synced 9 days ago"; the single stated cause is PII scrubbed beyond display. |
| 3 | briefs.html | low | data-reuse | Editing the 1-theme "Onboarding deep-dive" draft opens build-brief.html, which shows the 3-theme Q3 scenario. | ACCEPTED. Intentional single-build-page reuse in the wireframe; a real build would load the selected brief's own themes. Not a broken link. |
| 4 | home.html | low | completeness | The landing renders the core blocks (hero, how-it-works, trust strip, pricing, footer) and omits some home.md marketing blocks (problem, differentiator, brief teaser, final CTA, logged-in hero variant). | ACCEPTED. Deliberate wireframe simplification; the structural layout is validated and no block is invented. Full block set is a concept-stage (06) refinement, not an IA hole. |

## Not flagged (legit, for the record)

- Grey placeholder textures (wf-fill blocks, wf-state-ic, wf-skel skeleton bars, dashed file-drop and
  spec tiles, list-marker and step-number squares) stand in for avatars, icons, and images on purpose.
- The accent color appears only in the process chrome (top bar, rail, roadmap sidebar), never inside a
  product screen.
- Text glyphs rsaquo (drill and breadcrumb chevrons) and larr (back arrow) are characters styled in the
  grey tokens, part of the etalon locked in _wf.css, not icon leaks.
- accent-color #6b6b78 on the checkbox equals the --w-ink-3 grey token.
- maintenance "Try again" pointing at itself is the specified 503 retry-later behaviour, a real action,
  not a dead end.

## Close-out

17 screens, 39 pages, coverage 17 built and 0 in spec. All flows walkable, all states carry a visible
exit. Stage 04 done.
