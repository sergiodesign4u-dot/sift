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

**Stage 07 Step 1: the product DESIGN.md is formed from code, and four divergences are settled
out loud (August 2026).**
`/impeccable document` read `design/_theme.css`, the four colour pages of the etalon and the
contrast screen, plus the Stage 06 draft `DESIGN-artifacts.md`, and produced the root `DESIGN.md`
with a sidecar at `.impeccable/design.json`. Brand decisions were expanded with code values, never
rewritten. The North Star was joined from two commitments that already existed rather than invented:
the plate name "Command center" plus the product's own claim from `CLAUDE.md`, giving "The Command
Center That Shows Its Work". The impeccable reference asks the user for metaphor, colour character
and elevation philosophy at this point; those questions were not asked, because every answer was
already written in `concept.md` and `DESIGN-artifacts.md`, and the stage forbids rewriting brand.

Four divergences between the mockups and the documents were shown as a table before anything was
edited, because once `concept.md` is aligned to the mockup nobody can see the disagreement again.
All four resolved in favour of the code, and in every case the source line turned out to support the
code rather than the document:

- **A4 promised a volume bar on every ranked row; the mockups have none.** The source line asks for
  "visible sample size and evidence count per theme" and its own example is textual
  (`personas.md:256`). The bar was an invention of the Stage 06 visual-translation step. Dropped
  rather than built: rank and `n=X` already encode volume twice, and a third encoding of one
  quantity is decoration, which A1 forbids. `--bar-track` and `--bar-fill` removed from
  `_theme.css` before the migration, so no dead token travels into the kit.
- **A2 promised a side panel opening onto the source.** The Layout section had already recorded the
  deferral in August; the attribute line had not caught up. The data asks for the presence of a
  drill, not a panel (`personas.md:103`, `:257`), and the representative quote on the row now
  delivers evidence before the click in one column.
- **The brand said "error is Red"; the error screen is drawn entirely in neutrals.** The draft rule
  is narrowed rather than the screen repainted: Red means a failure that blocks or destroys, not a
  recoverable run failure where the previous result survives. The screen's own copy says the sources
  are still connected and nothing was lost, so red would overstate the failure, and overstating is
  the same defect as understating. `DESIGN-artifacts.md` is left untouched as the first source.
- **Font weight 600 was in use at three product sites against a brand declaring 400 / 500 / 590.**
  Folded to 590. Invisible at 11px, so 600 bought nothing but a fourth weight, and 590 is a number
  somebody chose while 600 is the number a reflex reaches for.

Rejected: aligning `concept.md` to the mockups silently, which is what makes this class of drift
permanent. Rejected: keeping the two bar tokens through the byte-for-byte migration and cleaning
them up later, which would have put dead values in front of the Stage 08 token audit.

**Our variable names deviate from the course convention, deliberately (August 2026).**
The course base names the Stage 06 convention as `--color-*` / `--radius-*` / `--space-*` /
`--font-*` / `--size-*`. Ours are `--canvas`, `--surface`, `--cyan`, `--r`, `--font-ui`. Kept.
They name the role rather than the value, every one of them is signed in the palette table of
`DESIGN-artifacts.md`, and the same course text forbids renaming what migrates, because Stage 08
audits these exact names and a rename breaks the origin comment that justifies the role. Renaming
would cut the line `plate B pixel` to `DESIGN-artifacts.md` to `kit.css` that the whole stage exists
to protect. Origin comments were moved beside each variable in `_theme.css` before the migration,
which is what the course actually requires and what Stage 06 had left in prose instead.
Rejected: renaming at the migration to match the course letter, at the cost of the course's own
stronger rule.

## The kit grew out of the colour layer, it was not written from the language again (August 2026)

Stage 07 Step 3. `design/_theme.css` became `design/kit/kit.css` by `git mv`, with the `:root`
block moved byte for byte, no variable renamed and every origin comment left beside its value.
The file no longer exists on disk under its old name, which is the check that the move was a
move: a copy would have left two sources for the same values, and the second one would have
started drifting the first time somebody edited "the theme".

Rejected: deriving the kit's values from the two painted screens, which is what a component
extractor does by default. The values were already written down explicitly at Stage 06 from the
approved brand plate, and re-reading them off rendered pixels risks a drift on every pass while
buying nothing. It would also cut the line `plate B pixel` to `DESIGN-artifacts.md` to
`kit.css` to `tokens.css`, and that line is what separates a system derived from data about
people from a tidy stylesheet.

**The extract ran only after the source was checked, and the source was clean.** All 38 grey
screens: zero `INLINE:` markers left over from the Stage 04 consolidation, zero `style="..."`
attributes anywhere, zero colour literals inside the four screen-local `<style>` blocks (all
colour goes through `--w-*`), and zero selectors declared in two files at once. Had any of that
been open, the extract would have built the kit out of the drift and the damage would have
surfaced two stages later as a token audit full of near-duplicates.

**Nine values entered `:root` and every one of them is marked PENDING rather than merged.** Six
already existed in the file as literals written inside a class at Stage 06: one hairline was
`#333c44` in one rule and `#3a444c` in four others, `--gunmetal` was referenced by the checkbox
and never declared anywhere, and the cyan and amber wash and edge pairs sat inline on the
citation and the low-signal badge. Two are new, `--red-wash` and `--red-edge`, built exactly
like the amber pair: `--red` was declared at Stage 06 and used by no rule at all, while the
product has failures that block and destroy and they need a surface. One, `--r-lg`, is the frame
radius, so a dialog can be the same material as the frame it floats over.

Rejected: adding them quietly because each is defensible on its own. The rule that a new value
is named out loud is the only thing standing between a kit and a palette of forty greys, and
"it was already in the file as a literal" is a reason to declare it, not a reason to skip the
declaration.

**Geometry stays as literals inside classes, and that is a decision.** Font sizes, paddings and
the type scale are not tokenized here. Naming them is the primitive and semantic token split,
which is Stage 08, and roles named before the components have stood on real screens are half
wrong. Recorded rather than left implicit.

**The Button family closed from four undeclared overrides to six declared forms.** Three
emphases by two sizes, plus an icon-only content variant. Width left the size axis entirely and
became the layout utility `.u-full`, because `100%` against `auto` is a layout decision and not
a property of the control. "Clear filters" folded into the Inline text link rather than becoming
a fourth button emphasis: it is a text action with a control's target, and the inline link is
the atom the product's 88 unclassed links needed anyway.

**One defect was caught in the browser and not in the file.** The account shell's row layout was
first written as a container query, copying the grey contract, where the canvas declares
`container-type`. Nothing in the colour layer declares a container, so the rule would never have
fired and four account screens would have shipped as a single column at every width. The colour
layer states its widths as media queries throughout, and this one now does too.

## This product carries no photography, and the set is empty on purpose (August 2026)

Stage 07 Step 4. The composition of the image set is read from the Photo column of
`design/kit/docs/inventory.md`, and that column says No on all fifty rows. Behind it is a mechanical
read: the entire grey product, 38 files, holds not one `img`, `figure`, `picture` or background
image. `concept.md:150` already stated the rule and its reason, and the reason is specific to
what Sift is: no avatars of invented people, because feedback authors are PII-scrubbed, so a
face would be a lie. A product whose promise is that every claim traces to a real customer
cannot decorate itself with fake ones.

Photography was allowed in exactly one place, the marketing hero on 0.0 (`concept.md:151`), and
the wireframe of 0.0 has no image block. Adding one in a colour copy is a structural change, and
structure belongs to the frozen `wireframes/`.

Two options were put up and the second was taken: (a) go upstream, add a hero image block to IA
node 0.0 and to `wireframes/index.html`, then generate a frame; (b) record that this product
carries no photography, and hold the prompt ready. **(b), because it is the reversible one:** it
costs one markdown file to undo, while (a) costs an edit to a frozen folder and a block that no
job, barrier or SEO requirement has asked for. `design/visuals/README.md` holds the decision and
the one prompt, pinned to the palette of `DESIGN.md` (blacks at `--canvas` so a frame sits down
into the interface, one cyan highlight under two percent of the frame), so that if 0.0 ever
gains the block the image arrives in the right colorimetry instead of being improvised.

Magnific was checked and is available (Premium+, credits in the account), and it was not run,
because there is nothing to fill. The one stock Unsplash link on the concept stand stays where
it is: it sits on a stand that is arguing about imagery, not inside the product.

Rejected: generating a hero anyway, on the theory that a marketing page needs a picture. An
asset with nowhere to go is a file that will be dropped into the first slot somebody invents for
it, which is how a rule about imagery quietly becomes a habit of decorating.

## The kit was proved on the seed screens before anything new was built (August 2026)

Stage 07 Step 5, first move. The two Stage 06 screens and their states were re-pointed from
`_theme.css` to `kit/kit.css` and their folded classes replaced (`clear` to `link--action`,
`loadmore` to a bare button inside `list-foot`). The values are the same bytes, so the only
possible source of a visual difference is the class replacement, which is exactly what the
comparison is for.

**Result: four of the five screens are pixel identical, zero differences, at 360 and at 1440,
measured on the product frame with motion frozen.** The etalon differs by exactly one pixel of
total height, at the load-more row and nowhere else: everything below it realigns with zero
differences at 1440 and 73 antialiasing pixels at 360, where the label now centres in a 45px box
instead of a 44px one. The pixel is real and it is the intended consequence of the fold: the
control is 44px, which is the target floor, and the divider now belongs to the list rather than
being drawn inside the button. Named rather than absorbed.

The comparison paid for itself twice, and both defects were invisible in the file:

- **The Field label atom, named `.label`, collided with the colour-proof bar's `.label`** and
  added 6px to all five screens. Renamed `.field-label`. The general lesson is recorded in the
  kit: a flat kit shares one stylesheet with the chrome around it, so an atom name has to be
  specific enough to survive that, and Stage 08 would have inherited the collision.
- **`.list-foot` was a block holding an inline-flex button,** so the line box added a pixel under
  the list. It is a flex container now.

Rejected: comparing the full page rather than the product frame. The page carries the roadmap
sidebar, which legitimately changed when the kit stand was registered, and the fixed portfolio
bar, whose backdrop blur repaints differently at a one pixel scroll offset. Both would have
shown up as "the kit changed the screen" when neither is the kit.

## The colour stage got its own two-part navigation, and its screens stopped being exhibits (August 2026)

Stage 07 Step 5. The same shape the wireframe stage has, for the same reason, and in its own
namespace: `design/_nav.js` declares `window.DESIGN_NAV` and renders a design-only panel into
each screen, `design/overview.html` is the hub and is the one page of the stage that carries the
roadmap sidebar from the root `/_nav.js`. The namespaces have to be separate because the hub
loads both registries at once, and a second `window.NAV` would silently overwrite the roadmap.
The panel's chrome lives in `design/_panel.css` rather than in `kit.css`, so that Stage 08, which
audits `kit.css` line by line, never has to decide whether a panel rule is a product token in
disguise.

**The two seed screens stopped being framed exhibits.** They arrived from Stage 06 inside a
`.page` with a `.appframe`, a portfolio top bar, the roadmap sidebar and a proof bar of state
links, which is what a screen looks like when it is standing on a stand. A Stage 07 screen is a
copy of a wireframe, and a wireframe is a real screen that fills its canvas. So `.app` entered
the kit as the screen shell, `.appframe` was kept and labelled as the stand edition of the same
organism, and the four blocks of chrome around the seeds were replaced by the one panel. The
proof bar went with them: it carried the same states as the panel's tree, and two editions of one
navigation is the defect the wireframe stage already fixed once.

Rejected: keeping the frame on the seeds and dropping it on new screens. Two kinds of screen in
one folder is how a reviewer learns to distrust the folder.

**The registry gained a `wip` flag.** With the hub registered, both of the stage's pages exist and
the roadmap would have called UI + Visual done, two steps before the stage closes, moving the
"Next" badge onto Tokens. `wip: true` holds the stage at partial while its pages are real and
clickable. Status still lives in exactly two places, the README table and the `done` flags; this
is the flag that lets the second one tell the truth mid-stage.

**Screens still in grey are in the panel and on the map, and they link to their grey originals.**
Hiding them would make a map of what is finished, which is not a map. The coverage map counts
both halves out loud, and the panel dims a grey entry rather than disabling it.

**The first sample screen, 3.0 Sources with its two states, needed two components the inventory
did not have, and both went into the kit before they went onto the screen.** `.group-t`, the
heading that names a group inside a list, which the Step 2 census had counted inside its screens
without giving it a row, and `.app` above. That order is the whole point of the kit: something
missing goes in first and is used second, or the screen quietly becomes the source of truth.

**One judgement call on the failed source row.** The icon slot keeps the channel's own icon and
does not switch to an alert mark. The row already says it three times, in the dashed amber tag,
in the alert line under the name and in the warning band above the list; a fourth signal would
cost the reader the one thing the slot is for, which is knowing at a glance which source this is.

## The critique ran on three instruments, and the two that measure found what reading cannot (August 2026)

Stage 07 Step 6. A browser walking every screen at a measured 360 and at 1440, a scripted audit
of contrast and target size over all 23 pages, and Codex reading the source read-only. Nine
findings fixed, one withdrawn on verification.

The split of labour turned out to be exact, and it is the argument for keeping both instruments:
**every defect the browser found was invisible in the file, and every defect Codex found was
invisible on the screen.** An `svg` with no width is 300x150 by specification, and the drag handle
that took 300px of a 316px row looks like a perfectly ordinary line of markup. A class named
`.lbl` that the kit never declared renders exactly like the text around it. Neither instrument
would have found the other's list.

Fixed from the browser and the script: the 300px icon; the `.label` collision that added 6px to
five screens; the line box under `.list-foot`; three controls under the 44px floor (a breadcrumb
link at 15px, a mapping select at 40px, a heading link at 17px). Contrast came back clean once
the audit composited alpha properly, which is worth stating because the first pass reported five
false failures by treating a 10 percent wash as an opaque fill.

Fixed from Codex: `.lbl`, used by four seed screens and declared nowhere in the kit, which is the
"assembled past the kit" class exactly; two contextual overrides of the input, promoted to the
declared variants `.input--mono` and `.input--dense`; the portfolio bar and the Stage 06 proof
bar, which were chrome declared inside the product kit and which no page rendered any more once
the screens moved onto the stage panel; one duplicated selector and one leftover class from the
etalon that preceded the wireframe rebuild.

**Withdrawn on verification:** six product classes reported as unused, `auth-value` and the five
`legal-*`. They are the auth and the legal screens, which are in the inventory and not in the
sample. The kit is built for the whole product by this stage's own rule, so a class that is
ahead of its screen is the intended state. Recorded in `design/kit/docs/inventory.md` with the reason,
so the finding does not come back next time somebody greps for dead CSS.

Rejected: fixing the contextual overrides by leaving them and adding a comment. A comment does
not stop the next one, and six overrides one pixel apart is how a kit ends up with two buttons
and six sizes. Promoting them to variants puts them in the inventory, where Stage 08 counts them.

## The showcase is read by purpose, the code is loaded by level (November 2026)

Stage 08 Step 5, between the atom round and the molecule round. The owner (2026-11-20): the AMA
Energy lab and the Global Design System file are what a design system should look like on a
project, adapt this one to that form and carry on.

**What was taken from them, and what was not.** Taken: the structure. A stand with its own panel
(the way out first, a title with a count, a filter), components grouped by CATEGORY rather than by
level, an "All components" table, and a component page read as a card: crumbs, a head with chips
(file, usage, status), three tabs. Overview is for the person placing the component (a live
specimen, the variant by state matrix, other forms, properties, when and when not, do and do not,
where it stands); Technical for the person changing it (anatomy, axes with counts, tokens,
snapshots, markup); History for every change with the record it came from. Not taken: their look.
The stand stays on Sift's own tokens, Inter and the dark ground; AMA's condensed red headings are
AMA's brand, and a showcase of this system painted in another product's language would show the
wrong system.

**The level did not stop mattering, it moved.** `index.css` still imports atoms, then molecules,
then organisms, and the rule against ordering the CODE by purpose stands for the reason it was
written (`dialog.css` above `field.css` in the cascade). The stand groups by purpose because a
person looking for "the thing that filters a list" does not know it is a molecule. The level is a
chip on every page and a column in the table. `docs/architecture.md` was rewritten from "grouping
by purpose is forbidden" to the two orders, and its page with it.

**The state matrix is derived, not drawn.** `design/kit/_states.js` copies every `:hover`,
`:active` and `:focus-visible` rule of `design/system/` onto an attribute that exists only inside
an inert matrix (`.btn:hover` to `.btn[data-kit-st~="hover"]`): same declarations, same
specificity. It is the Global Design System's `capture --matrix` and the AMA lab's
`lab-states.tsx`, moved to a static page. The stage rule against faking a state with a class the
product does not wear is about painting by hand; this paints nothing. Checked the day it was
written: on the Button page the forced hover and focus of fill and outline matched a real pointer
and a real Tab key in background, border, colour, outline and opacity, in both themes, with zero
differences. The snapshots stay on the Technical tab as the measured counterpart.

**Corrected on 2026-11-21, when the other 16 atom pages were laid on it.** The first version
appended the twins in one style block at the end of the document, and the sweep over all pages
caught what that costs: a twin then outranks every later rule of equal weight, so the forced
hover of a checked checkbox showed the hover border although `.check:checked`, which follows
`.check:hover`, wins on a real pointer. The twins are now inserted directly after their original,
in the same sheet or `@media` block, so they keep its place in the cascade as well as its
specificity. And "Pressed" in the matrix is `hover active`, not `active` alone: a real press is
always a hover too, and the filled button's pressed border is its hover border. After both
fixes, 45 forced cells on 8 pages were compared with a real pointer and a real Tab key in both
themes, 90 comparisons over background, border, colour, outline, shadow, decoration and opacity:
zero differences. The comparison script disables transitions and smooth scrolling first; without
that it measures the animation, not the state.

**One stand value changed:** `--kit-accent` in the light theme, `#7C6AF7` to `#6250E6`, because the
first gave 3.99:1 on the light page under the small mono headings and crumbs it inks (5.51 now).
Stand chrome only; no product token moved.

**One gap found and left for Step 6:** the base rule of the icon glyph, `.ic` (stroke, fill, line
caps), still lives only in `kit/kit.css`. The system has no file for it, so the stand pages draw
their glyphs with an inline style exactly as the Stage 08 pages did before. It belongs to list 1
of the reconciliation (product to system).

Rejected: separate files per tab (`button-tech.html`, `button-history.html`), as the AMA lab does
with its routes. Fifty-one components would make a hundred and fifty-three files for one
component's worth of content; one page with three panels and an address that keeps the tab
(`#tech`, `#history`) does the same work. Rejected: re-laying all seventeen atom pages in the same
step as the template. The template is shown and accepted first, and only then copied sixteen times.

## The molecules entered the system (2026-11-21)

Stage 08 Step 5, round 2, after the owner accepted the atom level. Twenty molecules from the
Level 2 table of `design/kit/docs/inventory.md`, each closed in one pass: `components/<name>.css`
in the molecules group of `index.css`, its page in the card format, its catalog entry in
`design/kit/_nav.js` and its row in the register. Five agents wrote the files in parallel from one
brief with one colour mapping, so twenty files could not invent twenty readings of `--line-2`.

**The rules came out of `kit.css`, not out of the language again.** Every literal with an exact
primitive took it; every literal without one (12px, 15px, 1.55, 78ch) stayed byte for byte,
because values migrate and are never rounded to the nearest step. Measured: the twenty files
loaded over `kit.css` on all 22 colour screens at 1440 and 360 change no property of any molecule
element, except the four listed below. Every forced cell of the molecule matrices (46 cells, 216
element comparisons, both themes) matches a real pointer and a real Tab key.

**Two component tokens, the first in the system, both PENDING the owner.** `--step-current-line`
(the ring of the current phase, drawn in `--porcelain`, which no line role carries) and
`--tier-mark` (the square bullet of a tier feature, drawn in `--line-2`, which became a line role a
fill may not borrow). Both keep the exact dark value and get a light pair.

**Four visible differences, each waiting for a decision:**
- `.notice--warn` and `.rowalert` draw their left rule in solid `--amber`. The system has no role
  for that: `--line-warning` is the 32 percent edge, and the Step 3 decision that gave the error
  band `--red-edge` assumed the warning band already used the amber edge. It did not. Mapped to
  `--line-warning` for now, marked PENDING in both files.
- `.step.is-done .step-n` and `.mk-step-n` draw their circle in `--line-2`, mapped to
  `--line-control`, which the Step 4 review moved from #3A444C to #647280. The circles brighten
  with it.

**Left out on purpose:** the rules that tie a molecule to the screen shell (`.app:has(.check:checked)
.selbar`, `.app > .notice` and their `.appframe` twins) go with the shell in round 3. `.list`,
`.summary`, `.titlerow` and `.block` belong to no molecule of the inventory, and `.provlist` has no
colour form yet: all five go to Step 6, list 1.

**Found while measuring, and older than this round:** the same comparison over the atoms shows
differences the atom round of 2026-08-19 never named: `body` line-height 1.5 became 1.6 in
`base.css`, the filled and bare buttons gained a 1px border, every button's gap went from 7px to
6px, the bare button's weight went from 400 to 500 and its padding from 13px to 12px, and four
type sizes moved to the nearest step (rank, field label and the action link 12 to 12.5, chip count
11.5 to 11), the action link gained 4px of side padding, the section group heading's top margin
went from 24px to 26px, and the group heading lost its 360 rule (`padding: 14px 16px 6px` in
`kit.css`, absent from `group-heading.css`). Step 8 will fail on every one of them unless each is named or reverted. Recorded
here, not fixed: it is a decision about accepted work.

## The organisms entered the system (2026-11-21)

Stage 08 Step 5, round 3, on the owner's "делаем дальше" after the molecules were committed. Twelve
organisms from the Level 3 table of the inventory, by the same brief and the same colour mapping as
the molecules, each with its css in the organisms group of `index.css` (the ones that contain no
other organism first, the screen shell last), its page, its catalog entry and its register row.
49 of 51 components are in the system now; the provenance list waits for Step 6.

**The screen shell owns every rule that ties a molecule to the frame.** The selection trigger
(`.app:has(.check:checked)` shows `.selbar` and hides `.head-action`), the notice gutter and the
centring of a lone state or dialog were left out of the molecules on purpose and now live in
`screen-shell.css`, with their `.appframe` twins for stands. Measured on the stand: ticking a theme
in the live frame shows the selection bar and hides "Build brief" at 1440 and at 360.

**Measured the same way as the molecules:** the twelve files over `kit.css` on all 22 colour
screens at 1440 and 360 change no property of any organism element. The only differences are on
0.0, where loading the system after `kit.css` lets `.appfoot` override the one-off `.mk-footer`:
an artefact of the comparison order, and a reminder that the one-offs need a home after the
organisms at Step 6. Every forced matrix cell (24 cells, both themes) matches a real pointer and
Tab key; all twelve pages pass at 360 and 1440 in both themes with no horizontal scroll, no console
error and no text under AA.

**Two more colours PENDING the owner:** `--text-accent`, the accent as ink for the brand mark and
the current bottom tab (two uses, so a role if accepted, kept apart from `--text-evidence`, which A2
reserves for the citation); and the account nav's hover and current ground, which goes darker than
its own surface, so no state token carries it (`--bg-page` for now).

**`.pubfoot` was placed by the lead.** Two agents read it as each other's; it stands only under the
shared brief, so it is in `public-doc.css`.

**For Step 6, found by this round:** the inventory says the header and the bottom tabs switch at
600px, `kit.css` switches at 820; the selection trigger reads any checked box on the screen, not only
a theme (harmless today, a trap for a future screen with a settings box and a head action); the 2.0
screens label their navs "Primary" where the other screens say "Sections"; 3.6 draws its confirm
inline, not as a dialog; no colour screen uses `.form`; the account nav "below 600px" is 820 in the
rule; `.acct-id-avatar` repeats the avatar at 40px.

## Step 6: the system reconciled with the product (2026-11-21)

Stage 08 Step 6. The second measurement rendered all 22 colour screens at 360 and 1440 twice: once
as shipped on `kit.css`, once with `kit.css` replaced by `design/system/index.css`. That second
render IS Step 8 seen in advance. The owner saw the three lists on a report page before any change
and answered "как ти рекомендуешь, делай все что нужно": every recommendation was taken, and the
decisions left open since the molecule round were closed with it.

**What the measurement found.** With `kit.css` gone the product lost:
- every icon: the system sized `.ic` and never drew it, so 40 of 40 measured icons rendered as
  filled black shapes;
- the list reset;
- 31 one-off classes, together with `.summary`, `.titlerow` and `.block`;
- `.src-map`, which was declared nowhere at all.

On the screens it found no `style=`, no `<style>` and no old names, and one local name for a
component's own zones (`.acct-card-t/-d`). It also found the August atom drift, still unnamed.

**What was done.**
- **`.ic` and `.list` went to `base.css`.** The 136 inline stroke styles on the kit pages were
  removed with them, because the base rule now draws every icon.
- **`one-off.css`** holds the blocks that stand on one screen. It is imported in its own group
  after the organisms, so a one-off wins the tie with the component it rides on without a raised
  specificity. **Rejected:** a stylesheet per screen, which breaks "one stylesheet per screen", and
  promoting the blocks to components, which the inventory's threshold forbids.
- **The provenance list** was built as the 50th component (`provlist.css` and its page). Its
  anatomy comes from `wireframes/_wf.css:310-313` and its colour from the role mapping. No colour
  screen wears it yet.
- **`.cardrow-t` and `.cardrow-d`** are the list row link's two zones; 7.0 is renamed.
- **`.appframe` moved to `design/kit/_page.css`**, because a stand style in a component file is a
  defect. **The `--pf-*` chrome values moved to `design/_panel.css`**, as Step 2 decided.
- **The August atom drift was reverted byte for byte**, not named. None of it was ever decided, and
  "a value changes only by a decision stated out loud" leaves no other reading. The full list is in
  `tokens-audit.md`.
- **The bands are solid again.**
  - New role `--line-warning-strong`, read by the warning band and the failed source row.
  - `--line-danger` back to solid red. The Step 3 row that softened it rested on the belief that
    the warning band was already soft; it was not, so the row is withdrawn.
  - **Rejected:** keeping both bands soft, which would repaint a band the product draws.
- **New decorative role `--line-strong`** (`--grey-700`) for the two rules in one-offs that
  `kit.css` drew in `--line-2`. Mapping them to `--line-control` would have brightened two rules
  that identify nothing.
- **Accepted:**
  - `--text-accent`, as a role;
  - the component tokens `--step-current-line` and `--tier-mark`;
  - the account nav's darker hover on `--bg-page`;
  - the brighter step circles. Those circles are exactly the Step 4 `--line-control` change.
- **Fixed AA failures:**
  - the citation chip hover, which was ink on the 30 percent edge at 1.82:1; it now sits on the
    action ground;
  - the `--bg-action` swatch on `color.html`.
- **Named in `tokens-audit.md`**, because each one follows a decision already taken:
  - the corrected "was" of the Step 4 boundary for the outlined button and the chip, which were
    hairline and not `#3A444C`;
  - the chip's on border moving one step up to `--line-hover`;
  - the full control font inheritance.
- **A defect found while verifying:** on 4.0, 4.1, 6.1 and 6.2 the evidence chips sat in the
  filter's full row, which hides at 820 and below with no compact twin, so at 360 they vanished.
  The row form `.toolbar-row` keeps them at every width, as the grey draws them.
- **The duplicate `.acct-id-avatar`** in `account-shell.css` was removed; the atom owns it.
- **The inventory was corrected:**
  - the selection bar counts were swapped;
  - there are four tiers, not three;
  - there are 50 components, not 51. Step 5 folded three atoms into two and the register added
    Group heading and Screen shell.

**Withdrawn on verification:** deleting `.link--muted`. The Step 6 report proposed it from a class
grep that found nothing. But the form is counted in the inventory's 88 unclassed links: 26 in the
footers and the legal columns are muted. So it waits for the rollout, like the auth card and the
legal document.

**Deferred, with the stage that closes each:** `design/kit/docs/backlog.md`.

**Measured after the change.** With `kit.css` replaced, the differences against the shipped product
are only the named ones. The numbers are in `census.md`, "Measurement after the system (Step 6)".

**Critique on two instruments, collected independently.** Nine mechanical classes were checked by
Claude's script and by Codex (read-only):
- a colour literal in a component;
- a primitive read directly;
- an `@import` missing or out of its level;
- a page or catalog entry missing;
- a role with no light pair;
- an undeclared variable;
- a base rule declared in two files;
- a "Reads:" header out of step with the file;
- an em dash.

| Finding | Who found it | State |
|---|---|---|
| `.acct-id-avatar` declared in both `avatar.css` and `account-shell.css` | Claude, while verifying the backlog, before Codex ran | fixed: the atom owns it |
| "Reads:" headers of `account-shell.css` (`--bg-raised`, left over from the duplicate), `cardrow.css` (the two new zones) and `screen-head.css` (`--text-primary`, unused) | Codex | fixed |
| The other seven classes | both | none found |

## Step 7: the theme pair stress-tested (2026-11-24)

Stage 08 Step 7. In this project the shipped theme is dark (`:root`) and the pair is light
(`[data-theme="light"]`), so the stress test runs on the light pair; the mechanism is the one the
step names. The pair itself was written at Step 3 and every state token was born paired at Step 5;
this step creates no pairs and looks at NEIGHBOURHOOD, which no single component can show.

**The walk.** One script (Claude's instrument) rendered every page in both themes at 1440 and 360
and measured, per element and per theme: text against its composited ground, every own fill
against the ground below it, every border against that ground, and every control edge. Corpus:
57 stand pages, the two frozen stands (`kit.html`, `shell.html`) and all 22 colour screens, the
last three groups with `kit.css` replaced by `design/system/index.css`, so the product was tested
on the system it moves to at Step 8. First pass on the screens switched the theme after load and
caught the app-bar tabs mid-transition (0.15s); withdrawn on verification, and the screens were
re-walked with the theme set and transitions settled.

**What it found.**
- **No pair value had to move.** No text under its floor in either theme on the system. No two
  surfaces that part in one theme and merge in the other. No element count difference between the
  themes, no horizontal scroll, no console error.
- **The light ladder is half as steep.** Page to surface 1.06 against 1.11, surface to raised 1.07
  against 1.13. Every surface on a step also carries the hairline (1.28 against 1.39), so nothing
  merges. Three tone-only marks are the weakest places in light: the current app-bar tab (1.07,
  also carried by its ink), the skeleton (1.06, a wait, not a control) and the avatar.
- **The avatar's edge is under 3:1 in BOTH themes**, 1.26 dark and 1.20 light in the app bar. It
  is a control (the only way to Account) identified by a disc and a hairline. The value is not
  wrong for the pair; the role is wrong for a control, the same reasoning that moved inputs to
  `--line-control` at the Step 4 review. It went to the owner because the fix changes the shipped
  dark look on 27 screens. **Decided 2026-11-24: the 28px `.avatar` reads `--line-control`**, 3.55
  dark and 3.30 light in the app bar. The 40px `.acct-id-avatar` keeps the hairline: it is a span
  on 7.0, not a control. Recorded in `tokens-audit.md` as a Step 4 rule applied late, so the Step 8
  pixel proof explains the brighter ring on every app-bar screen.
- **Two placements are forbidden by measurement.** Ink on its own wash over `--bg-raised`: warning
  4.44 in light, danger 4.36 dark and 4.30 light. No screen puts a band on a raised surface today;
  the rule goes to the backlog for Stage 09.
- **`--text-danger` and `--line-danger` are one value in light** (`--red-700`) and two in dark. Not
  a defect: the ink and the rule of the same band, never two components that must be told apart.
- **Three ratios in comments were wrong** and are corrected: `--text-primary` light reads 19.35,
  not 18.50 (`tokens.css`, `color.html`); `--text-evidence` light reads 6.27, not 4.97.

**Escapees from earlier steps.** None in the component files: no component reads a primitive, no
role is paired in one theme only (both instruments agree). Two escapees outside them:
- **The stand painted its theme late.** `_nav.js` loads at the end of `<body>`; with the light
  theme chosen and the script held back 1.5 s, the page showed its full text on the dark ground.
  Step 4 checked that the switch worked, not WHEN it applied. Fixed with `design/kit/_theme.js`,
  loaded in the head of the 57 pages; measured again, the page is light while the script is still
  loading.
- **The state snapshots were stale.** `scripts/shoot-states.js` photographed `#live`, which the
  card format of Step 5 (2026-11-20) removed, so the frames on five pages were the August ones, of
  a layout that no longer exists, and the input focus frame had no ring. Step 5 replaced the
  scene and never re-ran the script. The script now photographs `.kit-hero`, reaches focus by
  Tab until the control itself holds it, and reports a state frame that equals rest. All 26
  frames re-taken; the filled button's pressed frame equals its rest by decision ("the press reads
  as a return").
- **The snippet page drew bullets** in its live hero (`<ul>` without `.list`, after the reset
  moved to `.list` at Step 6). Fixed on the page.

**Component files changed for the theme: none.** Header lines only: `checkbox.css`, `chip.css` and
`input.css` now list `--opacity-disabled`, which they read.

**What happens on "no".** If the light theme is not kept as a product feature, only the switch in
`design/_nav.js` (Step 8) goes. The light block in `tokens.css`, the two-theme table in `DESIGN.md`,
both themes on `design/kit/color.html` and the stand's switch stay: the pair is the only proof that
the semantic level is overridden separately from the primitives.

**Critique on two instruments, collected independently.** Claude walked the browser (neighbourhood,
contrast, separation, the late theme, the snapshots). Codex (read-only) checked the source: pair
parity, collapse between roles, primitive and literal reads, separation that rests on a shadow,
and the "Reads:" headers.

| Finding | Who found it | State |
|---|---|---|
| The light ladder half as steep; three tone-only marks are the weakest places | Claude | recorded, no value moved |
| The avatar edge under 3:1 in both themes | Claude | fixed by the owner's decision: `.avatar` reads `--line-control` |
| Ink on its own wash over a raised surface under 4.5 | Claude | rule to the backlog, Stage 09 |
| The stand applies its theme after the first paint | Claude | fixed, `_theme.js` |
| The state snapshots stale since 2026-11-20, focus frame without a ring | Claude | fixed, script repointed, 26 frames re-taken |
| Bullets in the snippet hero | Claude | fixed |
| Three wrong ratios in comments | Claude | fixed |
| `--text-danger` and `--line-danger` merge in light | Codex | verified, not a defect (one band) |
| `opacity: 0.7` literals in `breadcrumb.css` and `phase-strip.css` | Codex | kept: decorative separators, moved byte for byte from `kit.css:212` and `kit.css:457`; not a theme value |
| `opacity: 1` in `base.css` | Codex | kept: it resets the browser's placeholder opacity, not a state |
| "Reads:" of `checkbox.css`, `chip.css`, `input.css` miss `--opacity-disabled` | Codex | fixed |
| "Reads:" of `app-header.css` lists `--text-evidence`, `source-row.css` `--line-warning`, `tier-card.css` `--line-control` | Codex | withdrawn on verification: the names occur in prose ("Not --text-evidence"), or as the prefix of `--line-warning-strong`, not in the Reads line |
| The stand's theme button edge at 1.26 | Claude | withdrawn on verification: a text button, identified by its word |
| The frozen `kit.html` footer links read 2.58 in light | Claude | not touched: frozen stand chrome with its own literals, not the system |
| Pair parity, primitive reads, shadow-only separation | both | none found |

## Step 8: the sample moved onto the system, with the pixel proof (2026-11-24)

**What moved.** All 22 colour screens in `design/` (every state is its own page) and the hub
`design/overview.html` now link `system/index.css` instead of `kit/kit.css`. The two frozen Stage
07 stands, `kit.html` and `shell.html`, link `../system/index.css`. `design/kit/kit.css` is deleted;
git keeps it (`git show 1cd80a7:design/kit/kit.css`). No screen markup changed beyond the link: the
Step 6 rename map had already been executed.

**The before frames.** Step 1 measured computed styles and kept no frames, and today's files with
kit.css are not "before" either: Step 6 changed both. So the before frames were rendered from
commit `2aa7baa`, the product exactly as Step 1 measured it, served from a scratch worktree. Dark
(the shipped theme), full page, motion off, at 360 and 1440, cropped to the product canvas; 92
frames committed under `design/kit/screens/proof/` (13 MB). The stage panel was compared
separately: its one difference is the new theme switch.

**What it found.** Element counts equal on all 44 pairs. 42 pairs differ, 6.4 Shared brief is
identical. A pixel comparison located each difference and a computed-style comparison of every
element named it; every one is a line of `tokens-audit.md` (six lines, table on
`design/kit/pixel-proof.html`), none is a defect. Two things looked unexplained and were not:
on 7.2 at 360 the row text rewraps because the outlined buttons beside it are 3px wider (the
control font inheritance), and the footer of 2.0 and 4.0 sits 0.75px lower because the load-more
row above it is that much taller (the same line). The reverse check: two lines have no visible
difference on the sample, `--text-danger` dark (no carrier; it shows on the frozen kit) and
`--line-control` light (another theme). The reach of the Step 4 row to three non-control rings,
each declared identifying in its own file, is now named in the audit.

**The frozen stands.** "Frozen" was kept as "the exhibit does not change", and the link switch the
pack requires was made. Their own chrome, swatches and inline exhibits read 20 Stage 07 variable
names and 7 portfolio values that only kit.css declared. Rewriting the exhibit onto system names
would have changed a frozen artifact; instead each name was copied byte for byte into kit.html's
own `<style>` block, with a comment saying why, and `.appframe` (moved to `_page.css` at Step 6)
was repeated in both stands, because `_page.css` also styles `.kit-*` classes that kit.html names
differently. shell.html is now identical to before except the avatar ring. kit.html has no theme
switch, so its chrome stays dark-only; light is reachable there only by forcing the attribute.

**The prototype chrome.** `.ds-canvas` read `--canvas` and the hub legend and tile hover read
`--cyan`, `--cyan-wash` and `--porcelain`, all kit.css names that would have resolved to nothing.
The canvas now reads `--bg-page` (the product's ground, same pixel in dark, and the light theme
reaches it); the hub chrome reads the primitives that hold the same values, because chrome is not
a component and is not themed. On the hub, an unstyled prose link that rendered browser blue now
takes the colour of its sentence (`base.css`, `a { color: inherit }`).

**The product theme switch.** A button in the screen panel, beside "All screens", rendered by
`design/_nav.js` and drawn in `_panel.css` on the portfolio values. `design/_theme.js` in the head
of the 22 screens applies the stored choice before the first paint: with light stored and the
panel script held back 1.5 s, the screen was already light. Its own key, `sift-theme`, not the
stand's: two surfaces, two switches, and a "no" removes the product's three pieces without
touching the stand. Measured: it toggles, labels itself, survives a reload and a change of screen,
is reached by Tab and works with Enter.

**The theme walk on the product.** All 22 screens at 1440 and 360 in both themes, every element,
the Step 7 instrument. No text under its floor (lowest in light: the low-signal badge, 5.00), no
surfaces that part in one theme and merge in the other, no control edge under 3:1, equal element
counts, no horizontal scroll, no console error. Nothing in the dark pair had to be pulled apart,
so no change goes to the Step 9 summary from here.

**Statements that the deletion made false, corrected.** The rule in `CLAUDE.md` now names
`design/system/index.css` as the one stylesheet and the system's five places for a new component.
Also: `screen-head.css` and `screen-head.html` (the selection rule lives in `screen-shell.css`),
`input.html` (the open `[?]` about `.field-err`: it is in `field.css`), the input entry in
`design/kit/_nav.js`, `skeleton.html` (three places: `.skelcard` and `.skelrow` are in
`skeleton-card.css`), `dialog.html` (`.u-apart` is in `base.css`), `_panel.css`, and the hub and the
coverage map, which now say "assembled from the system" and link the system and the proof.

**Critique on two instruments, collected independently.**

| Finding | Who found it | State |
|---|---|---|
| Every pixel difference on 44 pairs belongs to a named line | Claude | verified, table on the proof page |
| The frozen stands lose their chrome values and `.appframe` with kit.css | Claude | fixed in their own `<style>` blocks |
| `.ds-canvas` and the hub legend read kit.css names | Claude | fixed: `--bg-page`, and primitives for the chrome |
| The theme switch placed on its own line under the badge at 1440 | Claude | fixed: beside "All screens" |
| No file loads kit.css; no class or variable left unresolved; every screen has the head script and the panel mount; no style on a screen | Codex | none found |
| `.skelcard`/`.skelrow` "declared in kit.css, not in the system" (skeleton.html, three places) | Codex | fixed |
| "The rule is in kit.css" (dialog.html) | Codex | fixed |
| `.field-err` "not declared in design/system/" (input.html) and "error is still in kit.css only" (_nav.js) | Claude | fixed |
| 19 other present-tense mentions ("kit.css states no reason", "kit.css switches at 820px", "as kit.css states it") | Codex | withdrawn on verification: provenance, they describe what the source said, not where a rule lives now |
| Present-tense kit.css mentions in `kit.html` and `shell.html` | Codex | not touched: frozen exhibit text |

