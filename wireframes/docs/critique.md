# Wireframes - Critique log - Sift

*Stage 04. Two rounds are recorded here. Round 1 (July) closed the first build. Round 2 (August)
closed the rebuild on the block bank, and was run on two instruments as the project requires: Claude
with a real browser, and Codex read-only over the source. The sets were collected independently and
deduped afterwards, so the "Who found it" column is part of the record and not decoration. No em dash.*

---

# Round 2, August 2026: the rebuild on the block bank

## Method, and what each instrument was allowed to see

- **Claude, in a browser.** All 38 screens loaded at 1440 and at 360, plus a programmatic sweep:
  horizontal overflow in either direction, computed height of every interactive target inside the
  product screen, `h1` count per page, and `aria-current` on the active item of each navigation.
  Pixel questions and "breaks at 360" belong to this instrument and only to it.
- **Codex, read-only.** No edits, no writes. Given `conventions.md`, `ia/docs/blocks.md`,
  `voice/docs/microcopy.md` and `CLAUDE.md`, and asked for what is provable by reading files:
  contract violations, dead ends, canonical-data contradictions across files, uninventoried strings,
  forbidden words, source-level accessibility, dead CSS, and registry bugs. Every row had to cite
  `file:line` or be discarded.
- **Overlap was expected and is reported.** One finding was raised by both instruments, which is the
  point of running two: it was already fixed by the time the second one reported it, and that is
  recorded rather than hidden.

## Findings

| # | Who found it | File | Severity | Type | Finding | Resolution |
|---|---|---|---|---|---|---|
| 1 | Claude (browser) | 16 controls across 13 files | high | contract, appearance | `class="wf-btn--ghost"` used without the base `wf-btn`. The modifier only overrides color, background and border, so the base padding, radius, display and `text-decoration: none` never applied. Computed: `padding 0`, `border-radius 0`, `text-decoration: underline`. Every secondary action in the prototype was rendering as an underlined inline link. | FIXED. All 16 given the base class. |
| 2 | Claude (browser) | `_wf.css` and every screen | high | accessibility | **Not one interactive target met the 44px minimum that conventions.md and every IA node claim.** Measured: buttons 37, top tabs 33, chips 27, fields 32, load-more 41, account nav 41, drill chevron 29, remove 15, checkbox 16. The rule had been written and never enforced. | FIXED in `_wf.css` on the shared classes. Buttons, tabs, chips, fields, row actions, icon actions and link lists now meet 44. Three exceptions kept and NAMED in conventions.md section 5: native checkboxes at the 24px AA floor, inline links and the citation chip in running text, and the avatar which reads at 26 and is hit at 44 through an overlay. |
| 3 | Claude (browser), then Codex | `account*.html` (4 files) | med | contract, shared CSS | The `acct-*` settings-shell component was defined inline in all four account screens, byte identical in three of them. | FIXED. Moved to `_wf.css` with the owner named. Found first in the browser pass, reported independently by Codex the same round. |
| 4 | Codex | `build-brief.html:52`, `build-brief-thin-warning.html:57` | high | contract, accessibility | Neither composer screen had an `h1`. The visible title is an `<input>` carrying the PM's own brief name. | FIXED. A visually hidden `h1` "Build a brief" names the screen; the input keeps its role, because the brief title is user content and must not double as the screen heading. |
| 5 | Codex | `shared-brief.html:36` | high | canonical data | The public brief said 89 of "the 3,750 feedback items we received in the last 30 days". The synthesis says 2,904 of 3,750 are in that window. The same corpus and the same window carried two values, on the one artifact a stakeholder is meant to check. | FIXED. Now "89 of the 2,904 feedback items from the last 30 days". |
| 6 | Codex | `_nav.js:281` | med | accessibility | The bottom tabs never emitted `aria-current`; the desktop tabs did. Two responsive editions of one navigation told a screen reader different things. | FIXED, and the rule now says so in conventions.md section 5. |
| 7 | Codex | `auth*.html` (3 files), `privacy` / `terms` / `security.html` (3 files) | med | contract, shared CSS | The `wf-auth-*` and `legal-*` components were each defined inline in three screens. | FIXED. Both moved to `_wf.css` with owners named. Six inline blocks removed. |
| 8 | Codex | 15 files (evidence, share-link, shared-brief, account, legal, system) | med | contract, provenance | Opening comments named the node and the source document but not the block-bank type, the blocks taken, or what was deliberately absent. The rendered composition could not be audited against `blocks.md`. | FIXED on 21 files: the 15 reported, plus the three connect screens and three auth screens found while fixing. Every screen file now opens with its type, its blocks row by row, and its named absences. |
| 9 | Codex | 8 strings across 5 screens | med | text ownership | "Clear filters", "Load 6 more themes", "Group by source", "Load 36 more items", "Choose a different file", "Disable link", "Compare plans" and "Upgrade to unlock evidence" appeared on screens and were in no inventory. | FIXED. Added to `voice/docs/microcopy.md` in a named section, each checked against `voice.md` rather than transcribed. |
| 10 | Codex | `_wf.css:259, 309` | low | dead CSS | `.wf-theme-meta`, `.wf-prio` and `.wf-prio-n` had no owner. Their only user was the pre-rebuild 6.2, which was a checkbox list plus a parallel priority list. | FIXED. Removed. |
| 11 | Codex | `_nav.js:13` | low | residue | The registry header still documented `#wf-topbar` and a top-bar state switcher after the top bar was removed. | FIXED. |

## Clean

- **Dead ends and navigation.** Every local `href` resolves (533 links checked), every registered
  state file exists, every screen is registered, and the retry self-links are stated recovery actions.
- **Em dash.** Zero across every html, css, js and md file in the repo.
- **Forbidden words.** No "Something went wrong", no "successfully", no exclamation marks, no emoji,
  no greetings, no "just" or "simply" outside a customer verbatim.
- **Overflow.** No element extends past the viewport in either direction, on any of the 38 screens, at
  1440 or at 360.
- **One h1 per page.** Verified programmatically across all 38 after finding 4 was fixed.
- **Registry integrity.** No file or state-key mismatch, no render path that throws.
- **Inline appearance.** No `style=` attribute anywhere in the stage. The six `<style>` blocks that
  remain are single-screen structure, which the contract allows.

## What each instrument caught that the other could not

Worth recording, because it is the argument for the rule.

- **Only the browser could find 1 and 2.** Both are computed-style defects. In the source a
  `class="wf-btn--ghost"` looks like a button and `padding: 9px 14px` looks like a target; you have to
  measure the rendered box to learn that neither is true.
- **Only a source reader could find 4, 5, 8, 9, 10 and 11.** A missing `h1` is invisible on screen,
  because the title input looks like a heading. The 3,750 against 2,904 contradiction is only visible
  by holding two files side by side. Missing provenance comments, uninventoried strings, dead CSS and
  a stale header comment do not render at all.
- **One finding, 3, was raised by both,** from opposite directions: the browser pass noticed four
  account screens carrying the same inline block, and Codex proved it from the file contents.

---

# Round 1, July 2026: the first build

*A parallel read-only audit of all 39 wireframe pages by four auditor subagents, each given the allowed
grey palette, the intentional placeholder textures, a defect taxonomy, and conventions.md / screens.md
/ sitemap.md / flows.md.*

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
| 4 | index.html | low | completeness | The landing renders the core blocks (hero, how-it-works, trust strip, pricing, footer) and omits some home.md marketing blocks (problem, differentiator, brief teaser, final CTA, logged-in hero variant). | ACCEPTED at the time. Superseded in Round 2: the composition now traces to blocks.md Type 1 and its absences are named in the file. |

## Not flagged (legit, for the record)

- Grey placeholder textures (wf-fill blocks, wf-state-ic, wf-skel skeleton bars, dashed file-drop and
  spec tiles, list-marker and step-number squares) stand in for avatars, icons, and images on purpose.
- The accent color appears only in the process chrome, never inside a product screen.
- Text glyphs rsaquo (drill and breadcrumb chevrons) and larr (back arrow) are characters styled in the
  grey tokens, part of the etalon locked in _wf.css, not icon leaks.
- accent-color #6b6b78 on the checkbox equals the --w-ink-3 grey token.
- maintenance "Try again" pointing at itself is the specified 503 retry-later behaviour, a real action,
  not a dead end.

## Note on Round 1 in hindsight

Round 1 called the set "clean overall" and found no HIGH. Round 2 found three. The difference is not
diligence: Round 1 audited screens against a contract that did not yet require composition to have an
origin, and it had no instrument that measured the rendered box. A critique is only as sharp as the
contract it reads against, and only as complete as its instruments.
