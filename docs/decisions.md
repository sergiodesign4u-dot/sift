# Decisions

What was decided, why, and what was rejected. This file is **never auto-loaded**: it is referenced by
path, read on demand, and it exists so `CLAUDE.md` can stay a short list of rules instead of a stack
of history. One entry per decision, newest at the bottom of its section.

No em dash in output files.

---

## Founder decisions (research phase, June 2026)

Full rationale in `research/docs/strategy.md` Sections 5-6 and `research/docs/research.md` Section 9.

**D1 - MVP focus: Segment A (Overloaded PM) only.**
Segment C (Signal Supplier) is deferred as a PM retention dependency, not as a separate backlog
feature: the signal supplier's closure loop depends on Segment A's transparency design existing first.
Rejected: building for both segments at once, which would have split the transparency work.

**D2 - Confidence display: mandatory in MVP.**
Tied directly to the H1 reformulation: transparency is the condition H1 requires, so shipping the
synthesis without it would test nothing. Day-one scope is deliberately small: item count per theme
(n=X) plus a "low signal" badge. Source diversity, time range, and thresholds are v2.
Rejected: a single confidence score, because a score hides the count it was computed from.

**D3 - First integration set: CSV + Intercom.**
CSV is the zero-friction day-one activation path, Intercom is the named Segment A source. Zendesk
follows on the same abstraction, with no timeline committed. Rejected: starting with Zendesk or Gong,
which are heavier integrations that would delay the first real synthesis.

---

## Structure and process decisions

**Migration to the current pipeline structure (August 2026).**
The project was built on the earlier layout of the course and is being brought onto the current one.
What changed and why:

- **One navigation registry.** Every page used to carry its own inline roadmap sidebar. Activating a
  single stage meant editing 23 files by hand, and the root entry page still drifted (it claimed
  "3 of 12 complete" while five stages were done). Now `/_nav.js` holds the 12 stages and their
  `done` flags, `/_nav.css` holds the look, and each page carries an empty `<aside id="sidebar">`
  plus `NAV_BASE`. Adding a page is one line; flipping a status is one flag.
  Rejected: keeping the inline sidebars and adding a linter, which would have policed the symptom.
- **`research/` collects stages 01, 02 and 02+.** `user-research/` was a separate folder; its files
  are read and edited together with `research.md` (CJM Step 4 edits `personas.md`, Voice Step 2 edits
  `research.md`), so they live together now.
- **`design/` is the roof of the visual half.** `concept/` and `ui-visual/` at the root became
  `design/concept/` and `design/`. The value line runs `_theme.css` to `kit/kit.css` to
  `system/tokens.css` without a folder move later, so stages 07 to 12 add shelves to one package
  instead of relocating it.
- **`index.html` means the product home page, `overview.html` means the hub.** The wireframe hub was
  called `index.html` while the marketing home was `home.html`, so one word had two meanings in
  neighbouring folders and "open index" stopped being an answer.
- **Empty stage folders removed** (`animation/`, `design-system/`, `handoff/`, `responsive/`,
  `tokens-components/`, plus every `.gitkeep`). A folder is created by its own stage together with
  its first file. The route through the project is shown by the registry, not by the file system.
- **`AGENTS.md` added at the root.** Critique now runs on two instruments (Claude and Codex), and
  without this file Codex does not know that the grey wireframes are grey on purpose, so it returns
  noise instead of findings.

**Wireframes reopened, and the fix is upstream (August 2026).**
The grey prototype was structurally thin: the etalon 2.0 Synthesis was a header, three filter chips,
a heading, a list of six rows, and an action bar. The cause is not the wireframe stage. The page
composition in `ia/docs/pages/*.md` had no origin rule: the node template said "content blocks: 1, 2,
3" and never said where the list came from, and a model with no source returns the median of
everything it has seen (hero, filter, cards, pagination). So the missing artifact is the block bank
`ia/docs/blocks.md` (IA Detail layer, Step 4): composition per PAGE TYPE, sourced from competitors
(Playwright, public pages only) and from Refero (craft outside the category), with every block traced
to a job from `jtbd.md`, a barrier from `cjm-as-is.md`, or an SEO requirement, and every block carrying
an MVP or LATER label.
Rejected: thickening the wireframes directly. It is faster, but the composition would again come from
nowhere, and stages 07 and 08 would inherit the same median with a component inventory built on it.

**Platform stance resolved: mobile-first responsive, desktop-reasoned density (August 2026).**
The old `CLAUDE.md` contradicted itself: the overview said "desktop-first (dense data work tool)" and
the IA section said "mobile-first, mobile is the priority". Both claims had been live for months while
39 IA nodes and 39 wireframe pages were built 360-first. The contradiction was the signal that the file
had grown past the point where its own rules could be checked against each other.
Resolved: the responsive stance stays mobile-first and 360px stays a hard acceptance gate, because that
is what is built and rebuilding it would cost the largest stage twice. But block ORDER and DENSITY are
reasoned from the desktop, because the primary persona does this work at a desk in a planning session.
Rejected: flipping to desktop-first, which would have invalidated every existing node; and leaving the
contradiction in place, which is what let a thin composition pass review twice.

**Etalon 2.0 rebuilt on the block bank (August 2026).**
The first block-bank type produced seven blocks the node did not have. Rather than research the other
seven types first, the etalon was rebuilt immediately and accepted in the browser at 1440px and 360px.
Reason: a defect caught on the etalon is fixed once, and a defect carried into the other types is paid
for on every screen. Two real defects were caught this way and would have propagated: two primary
actions on one screen (the head action and the selection bar were both visible), and the confidence
pill with its low-signal badge squeezing the theme label to three lines at 360. The first is now solved
structurally, in CSS and without script: the selection bar appears only when a theme is selected and
the head action disappears while it is up, so the prototype demonstrates both states on a click and can
never show two primaries. The second drops the pill to its own grid row under the body at 360.
Rejected: keeping the permanently visible action bar of the first pass, which is what created the
double-primary in the first place.

**Revoking a share link moves from fast-follow to MVP (August 2026).**
The Detail-layer node marked it `[?] fast-follow`: "a share revoke [?] is a fast-follow". The block
bank overturned it while working Type 6, and the argument is not about features. The shared brief is a
public URL, viewable with no login, carrying customer feedback. A public link over customer data with
no off switch is a compliance hole, not a missing convenience, and it sits badly beside a product whose
PII stance is scrub-by-default from day one. The cost is one control in a dialog that already exists.
Rejected: leaving it in fast-follow, which would have shipped an MVP that can publish customer quotes
and cannot unpublish them.

**Concept (stage 06) parked, not discarded (August 2026).**
The brand plates, the three layout directions, and the first color pass on Synthesis were produced
before the wireframe rebuild was decided. Color copies mirror the grey structure, so they would have
to be rebuilt anyway once the grey screens change. The material moved to `design/` unchanged: values
in `_theme.css` migrate byte for byte and are never re-derived, because a re-derived value looks
identical and quietly breaks the link between the look and the data about people.
Rejected: finishing 06 first, which would have meant building every color screen twice.

**An empty state is a group inside its screen, not a screen of its own (August 2026).**
The block bank's Type 3 row 2 puts connected sources and available sources on one screen. The
consequence for states is larger than it looks: 3.4 and 6.5 stop being separate designs and become
the list screen with an empty first group. The old 3.4 was a corridor, an explanation and a button
that led to a chooser holding the same three options one navigation later. The empty state now IS
the chooser. The rule generalizes: a state keeps the blocks of its screen and fills them with what
that state can honestly say, including zero. What a state may drop is a block that would have to
lie, which is why the filter toolbar is absent from 2.1 and 2.2: its facets carry counts, and the
counts do not exist yet.
Rejected: keeping full-canvas empty screens, which read as calm and cost an activation step.

**A sync error is a row, not a takeover (August 2026).**
3.5 was a full-canvas failure page with the h1 "Intercom sync failed". One of two sources failing is
not the screen failing: the other source is healthy, its items are still counted, and the corpus is
still readable. Blanking the list overstated the failure and hid the half that still worked. 3.5 is
now the sources list with the failed row carrying its own status, its own explanation and the retry,
and the scope line carrying the consequence a PM actually needs, that the corpus has not moved since
the last successful sync. The one primary action sits on the row that failed.
Rejected: the takeover, and also a toast, which would have said less and disappeared.

**The thin-theme warning fires on the ranking, not on the inclusion (August 2026).**
6.2 used to interrupt because a low-signal theme was in the brief. That is not worth an interruption:
Sift's own stance is that thin evidence is labelled and kept, not hidden. What is worth an
interruption is a thin theme ranked ABOVE themes with several times its evidence, because the order
is the recommendation and that is the claim the PM will have to defend in the room. The state now
shows the thin theme at position 2 with its `n` and its badge travelling with the row, and the
notice names the consequence in the shared artifact rather than blocking the action.
Rejected: blocking generation, and silently reordering, both of which take the decision off the
person who has to defend it.

**Two canonical-data contradictions fixed, found by reading screens against each other.**
T5 "Wants Salesforce integration" was "Intercom only" on 2.0 and listed a CSV item on 4.1; six of six
are Intercom, and that single-channel concentration is what makes the theme thin, so the item was
wrong and the card was right. The brief was "Q3 planning ..." in the composer and "Q3 roadmap ..." in
the document it produces; one artifact cannot carry two names along one chain, so all four screens now
carry the recorded title. Neither was found by looking for defects: both surfaced from writing the
denominator down, which is the argument for the scope line in one line.

**The prototype chrome becomes one panel, and the top bar is removed (August 2026).**
Every screen carried a thin top bar (hub button, node name, a row of state chips) above a left rail
that listed the same states under the current node. Two editions of one control: a reviewer had to
learn which one to trust, and the two could disagree the moment one was edited. The chrome is now the
single stage panel the rules already describe, four blocks top to bottom: header with the hub button,
the stage badge and one line naming the current node and state; the tree of cluster to screen to
states; the current node opened while the others stay collapsed; and the links out of the prototype
at the bottom, to the IA node, the block bank, voice, and the roadmap. Below 900px the panel folds
into its own header rather than turning back into a strip.
This also closed a gap between the rules and the build: CLAUDE.md already said "no thin state strip
above the screen", and the prototype had one. Rejected: keeping the bar for the state chips, which
would have kept the duplication for a convenience the tree already provides.

**The 44px target rule was enforced, and its exceptions were named rather than averaged (August 2026).**
Measuring the rendered box found that not one interactive control met the 44px minimum that
`conventions.md` and every IA node claimed: buttons 37, tabs 33, chips 27, the remove control 15. The
rule had been written and never enforced, which is worse than not having it, because the document
asserted an accessibility property the build did not have. Controls, tabs, chips, fields, row actions
and lists of links now meet it. Three things sit below it on purpose and are named on the rule: a
native checkbox at the 24px AA floor, because a 44px checkbox would double the height of every row in
a ranked list; inline links and the citation chip inside running text, which the same reasoning
exempts; and the avatar, which reads at 26px and is hit at 44 through an overlay.
Rejected: quietly lowering the number in the document to match the build, which would have turned a
defect into a standard.

**Critique on two instruments, and the record says which found what (August 2026).**
Round 2 ran Claude in a browser and Codex read-only over the source, sets collected independently.
The split was not ceremony. Two high findings were only visible in the rendered box: a secondary-action
class used without its base, so every ghost button in the prototype was an underlined inline link, and
the target-size failure above. Four were only visible in the source: two composer screens with no `h1`
at all, because the title input looks like a heading; a public brief counting 89 items against the
whole corpus while naming a 30-day window; component CSS pasted into three auth and three legal
screens; and eight interface strings that existed on screens and in no inventory. One finding was
raised by both, from opposite directions, and that is recorded rather than deduped away.
Rejected: a single pass. On this evidence it would have missed half the round either way.

**The free plan is 250 feedback items a month, and the canonical workspace is not on it (August 2026).**
Four values existed in the repo: 250 in `research/docs/strategy.md`, 500 in the pricing block on 0.0,
5,000 on the account screen, against a demo corpus of 3,750. `strategy.md` is the only one that sets a
value with a reason attached, and it is a research-stage source, so it wins: 250 is enough for a first
synthesis to be real, while a mid-market team generates 500 to 2,000 items a month, which is where the
conversion moment comes from. The 500 was a stale v1 number and the 5,000 was invented at the wireframe
stage.

The number turned out to be the smaller half. The canonical Northwind workspace has two sources,
evidence drill-down and a public shared brief, and `strategy.md` puts all three behind the paywall, so
it was never a free workspace. The screen had to invent a limit because it had put the scenario on the
wrong plan, and every screen in the prototype demonstrates paid capability. 7.1 now shows Growth, with
the seat meter as the metered dimension and the free plan stated beside it as the reference a
conversion surface needs.
Rejected: raising the limit to 5,000 so the demo corpus would fit. That would have bent the business
model to make one screen consistent, which is the wrong direction for a source to travel.

**3.1 Connect chooser is folded into 3.0 (August 2026).**
The block bank had already named the two options and the stronger read: keep the chooser as a safe
extra tap, or fold it and let each available source card lead straight to its own connect flow, which
takes a screen out of the activation path. It left the choice with the owner, because deleting an IA
node is not a wireframe decision. Folded. The chooser rendered the same three options that 3.0 already
renders since Type 3 block 2 put connected and available sources on one screen, so keeping it meant two
editions of one control, the same defect just removed from the prototype chrome. 3.0 takes ownership of
the source-type enum, 2.1 routes to 3.0 instead, the breadcrumbs on 3.2 and 3.3 lose their middle
crumb, and "Back to chooser" becomes "Back to sources". The node count goes from 39 to 38.
Rejected: keeping it as the enum's home. An enum needs an owner, not a screen; the owner moved and the
screen did not need to survive for it.

**Layout Direction 3 keeps its ledger and defers its split pane (August 2026).**
Concept Step 5 chose Direction 3, "Split evidence": a ranked ledger on the left and a standing
evidence pane on the right, so the drill happens without leaving the view. The choice was made when
the theme card carried no quote, and the split was how A2, evidence on the surface, was going to be
honoured. The block bank then delivered A2 inside one column: a representative verbatim on every
card plus the scope line stating the denominator. The premise moved, so the decision was re-read
rather than executed on autopilot.
The ledger is kept and is what the etalon is. The right-hand pane is deferred to LATER, for two
reasons that are not about taste: it is a structural change to node 2.0, and structure belongs to
IA and the wireframes rather than to a colour copy, which owns the visual layer only; and it has to
fold back into one column at 360, which is where the etalon does most of its arguing.
Rejected: building the split in the colour copy anyway, which would have made `design/` and
`wireframes/` disagree about what screen 2.0 is and cost the grey contract its reversibility.

**The shared brief counts against the corpus, not against a 30-day window (August 2026).**
Fixing the earlier 3,750-against-2,904 contradiction on 6.4 by moving the lede to 2,904 made the
lede disagree with the sources block on the same page. The right denominator is the corpus: the
theme counts are corpus-wide (4.0 says theme 1 was first seen 5 weeks ago, outside any 30-day
window), so the brief now says 89 of 3,750 and its metadata names what it actually covers.
Left open and written where it was found: 2.0 says its themes are counted "from 2,904 of 3,750
items in the last 30 days" while 4.0 counts a theme over the whole corpus. Whether the date filter
narrows the ranking or only the list is an IA question, and it is recorded on the screen rather
than settled by a colour copy.

**Concept audit, and the one finding kept rather than fixed (August 2026).**
Step 8 ran `/impeccable audit` plus a browser pass that measured contrast, target size, focus,
landmarks and overflow on every colour page at 1440 and 360. Two P1s, both design-system drift
between the grey contract and the colour copy rather than fresh mistakes: not one control in the
colour layer met the 44px floor the grey wireframes had just been fixed to meet, and the colour
layer had no designed focus state at all, only the browser's default ring, which on a dark surface
is barely a ring. Both fixed, with the same three named exceptions the grey contract carries.

The finding kept is the font. The detector flags Inter as an overused face, and it is right about
the pattern: every wave of generated interface converges on it, which is exactly the model reflex
this stage exists to catch. It is kept anyway, and the argument is written down rather than
assumed. Inter is signed to A5 and to the named taste (Vercel, Linear), it is self-hostable on
GitHub Pages, and the pairing carries its contrast on the mono half, where the counts and citations
live and where the trust surface actually is. Recorded as a challenge answered, not a warning
waved away, and it is revisited when fonts become tokens at Stage 07.
Rejected: swapping the face to score better against a detector. A face chosen to avoid a warning is
as unowned as a face chosen by reflex.
