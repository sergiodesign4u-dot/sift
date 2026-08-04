# IA - Block bank by page type - Sift

*Detail layer, Step 4. This file is the SOURCE of what a page is made of. Before it existed, the node
template said "content blocks: 1, 2, 3" and named no origin, so the composition was the median of
everything a model has seen: hero, filter, cards, pagination. Every block below traces to a job from
`research/docs/jtbd.md`, a barrier from `research/docs/cjm-as-is.md`, or an SEO requirement. A block
with no trace is not taken, and the reason is written down.*

*Built per PAGE TYPE, not per node: 39 nodes are 12 types. A reference is an input, never an output.
No composition here matches one source one to one; if it did, it would be a copy.*

*Visible place: section "Block bank by type" on `ia/structure.html`, registered in its `NAV_SECTIONS`.*

*Internal analysis is English. No em dash in output files.*

---

## Method, and which half of the sources was available

Two sources answer two different questions, and one of them is not enough in either direction.

| Source | Answers | How it was taken |
|---|---|---|
| **Competitors** (`research/docs/competitors.md`) | what they actually sell and what holds a person **inside our category** | Playwright, public and pre-login pages only, opened in this session |
| **Refero** (MCP) | how a page of **this type** is built in best-in-class **outside the category** | `refero_search_screens` to `refero_get_screen` to `refero_get_similar_screens`, searched by page type and job, not by industry |

**Sift is a product behind a login, and so are its competitors.** Productboard and Jira Product Discovery
already carry `[? behind login]` in `competitors.md`. Checked live in this session: Fibery's public
feedback site (`crowd.fibery.io`) now redirects to a login, and Productboard portals are unique-slug
links that are not publicly discoverable. So for the in-app types the domain half is thin by fact, not
by laziness. Where that happens it is named on the type, and the replacement is stated: our own barriers
from `cjm-as-is.md` and jobs from `jtbd.md`. On those types the column "where we are better" holds the
barrier the block works on, not a comparison with a competitor.

A marketing landing page of a competitor is never used as a stand-in for an in-app screen. It is a
different page type and its composition is about something else.

---

## Type 2 - Ranked decision list (the app home)

**Nodes:** 2.0 Synthesis view, 2.1 first-run empty, 2.2 loading, 2.3 error. **4 nodes, 4 MVP.**
**Why this type first:** it is the etalon. It owns the confidence indicator, the theme card, and the
filter and sort control, and 4.0, 4.1, 6.1 and 6.4 render them again.

**Sources opened for this type (2026-08-04):**

| Ref | Source | What it is | Link |
|---|---|---|---|
| C1 | Canny, public feedback board | in-category, a real public ranked feedback list | `feedback.canny.io/feature-requests`, screen `research/screens/canny-public-board-full.png` |
| C2 | Aha!, Big Ideas public portal | in-category, a denser public ideas list with facets | `big.ideas.aha.io`, screen `research/screens/aha-public-ideas-portal.png` |
| R1 | Fibery, Feedback-driven prioritization | craft: a real in-app prioritization table with an evidence count column | Refero `b5f660ee-8ef4-4223-bf91-87c76ca7dba8` |
| R2 | Rox, accounts table | craft: dense enterprise table, selection and bulk action, count in the column header | Refero `df108933-4e31-414d-b14f-45fa577899f0` |
| R3 | Zendesk, knowledge list | craft: left facet filters, bulk select, save the filtered view | Refero `9fd2574a-d98d-4e40-87e0-c247a823eddc` |

Both domain sources are public boards, that is, the OUTWARD face of a feedback tool. The inward face,
the PM's own working list, is behind a login in all five competitors. That is stated here rather than
patched with a marketing page.

### Blocks

| # | Source | Block | Take / Skip / Differently | Traces to | Scope | Where we are better, and how |
|---|---|---|---|---|---|---|
| 1 | C1, C2, R1, R2 | App header and primary nav | **Take** | navigation model, 3 entries plus account | MVP | Three entries, not five. Sources and Briefs sit beside Synthesis, so the whole loop is one tap wide |
| 2 | C1, C2, R1 | Page title plus one line of purpose | **Take** | Design principle 4, one decision at a time | MVP | Their line describes the board ("Let us know which features would help"). Ours names the next move: open a theme to trace the evidence behind it |
| 3 | C2, R2, R3 | Search over the list | **Skip for MVP** | no MVP job traces to it | Later | With themes in the tens, filter and sort cover it. Search earns its place when the list stops fitting a screen, and global feedback search was already deferred at the base layer |
| 4 | C2, R3 | Faceted filter **with a count on each facet** | **Take** | J3 which problems are most urgent; As-Is barrier "cannot tell a strong theme from a thin one" | MVP | We have the facets (source, recency, confidence) but no counts. A filter that hides how much it excludes is dishonest. Source counts (CSV 840, Intercom 2,910) also show coverage, which no competitor shows at all |
| 5 | R1, R2 | Active-filter state indicator | **Take** | Design principle 1, show your work | MVP | The current three chips never say whether they are on, so a filtered list reads as the whole truth. The chip carries its value and a clear-all sits beside it |
| 6 | R2 | Result count and scope line | **Take** | As-Is barrier: a ranked list with no denominator cannot be checked | MVP | Ours reads "12 themes from 3,750 feedback items". Nobody shows the denominator, so nobody can tell what the ranking is a ranking OF |
| 7 | C1, C2, R1 | Sort control with the default named | **Take** | primary job, defensible prioritization | MVP | Their default is "Trending", a word that hides its formula. Ours is "signal rank" and the ranking rule is nameable |
| 8 | R1 | Explicit rank number in the row | **Take** | primary job: which problems have the most signal | MVP | Our order is currently implicit. A number makes the ranking claim explicit, quotable in a meeting, and re-checkable |
| 9 | C1, C2, R1 | Theme label in the customer's language | **Take** | Voice principle 2 | MVP | Their row is one person's post title. Ours is the cluster's plain-language name, and it is the customer's words, not the product's |
| 10 | C1, C2 | Excerpt under the row title | **Differently** | primary job; As-Is barrier "distrust of black-box summaries" | MVP | They excerpt the body of a single post. We show one representative verbatim quote from the cluster, so the trust chain starts before the click. This is the largest structural gain over the current bare label list |
| 11 | C2 | Row metadata: provenance and recency | **Take** | J3, source diversity as an honesty signal | MVP | They show one author and a date. We show WHICH sources contributed and the latest feedback date, so thin-but-broad and loud-but-narrow look different at a glance |
| 12 | R1, C1, C2 | Evidence count as a first-class column | **Take** | D2 mandatory, the transparency condition H1 requires | MVP | Theirs is a vote count: the popularity of whoever showed up. Ours is n=X evidence items and it is the entry to the trust chain, one click to the items |
| 13 | own | Low-signal badge on the row | **Take** | D2; As-Is barrier "thin evidence dressed as strong signal" | MVP | No competitor marks its own thin data. Aha! gives "1 vote" and "43 votes" the same visual weight, so the reader has to do the honesty themselves |
| 14 | C1, C2 | Delivery-status badge per row | **Skip for MVP** | traces only to the roadmap link, which is fast-follow | Later | The row already carries a confidence signal. A second badge competes with it, and Design principle 2 puts weight in hierarchy, not badges |
| 15 | C2 | Pinned or promoted section above the list | **Skip for MVP** | closest analogue is "new signal since last session", named fast-follow | Later | Promoting by hand contradicts "the ranking is the claim". If anything is lifted above the list later, it is new signal, and it says why it is there |
| 16 | C1 | Inline capture composer at the top | **Skip** | traces to nothing in `jtbd.md` | out of scope | Sift ingests from sources, it does not collect submissions. This is the clearest case of a reference being an input, not an output: copying it would make Sift a feedback board |
| 17 | R2 | Multi-select plus a bulk action bar | **Differently** | primary job; 6.1 Build brief is one tap from the picture | MVP | Ours is permanently visible today. Take the appears-on-selection bar instead, so at rest the screen has exactly one primary action (Design principle 4) and the mobile view keeps its footer |
| 18 | C1, C2, R1 | One primary action at rest | **Take** | Design principle 4; `conventions.md` one primary action per screen | MVP | Theirs is Add an idea, that is, more input. Ours is Build brief, that is, the decision. The screen exists to end in a call, not to collect more |
| 19 | C1, C2 | Pagination or load more | **Differently** | real workspaces hold more themes than one screen | MVP | C1 gives a bare "Load More", C2 numbered pages. Ours carries the remaining count ("Load 12 more"), so the denominator stays visible while the list grows |
| 20 | R1, R2, R3 | Saved views | **Skip for MVP** | no MVP job traces to it | Later | A saved view is a second ranking, and the MVP claim is that the default ranking is the trustable one. Revisit when a team, not one PM, works the list |
| 21 | C1, C2, R1 | Per-row drill affordance | **Take** | Main job, trust chain 2.0 to 4.0 to 5.0 | MVP | The whole row is the target, and the chevron only names the direction |
| 22 | R2 | An empty cell says why it is empty | **Take as a rule** | Voice principle 4, every state names the next move | MVP | Rox writes "Ready to run" where a value is missing. Ours: a theme with no source diversity yet says so, instead of showing a blank |

### What this changes in node 2.0

Blocks 4, 5, 6, 8, 10, 17 and 19 are new against the current `ia/docs/pages/synthesis.md`, which carries
five blocks: header, filter bar, theme list, selection actions, footer. Block 10 (a representative
verbatim quote on the row) and block 6 (the count and scope line) are the two that change the character
of the screen: the list stops being a set of labels and starts being evidence at a glance with a stated
denominator.

### States, from the same sources (Type 2)

- **2.1 first-run empty:** neither domain source has a true empty state (a public board is never empty).
  Craft source R2 gives the pattern: say what is missing and name the one action. Ours routes to 3.0
  Sources, which carries the available sources as a group of its own. Traces: the activation fork in Flow 1.
- **2.2 loading:** C1 and C2 have none; R1 has none. Ours is an honest wait, naming the two phases
  (ingest, cluster) rather than a spinner. Traces: Voice principle 4 and the As-Is barrier about
  black-box processing.
- **2.3 error:** same, no source. Ours names the failure, offers Try again, and offers Sources as the
  way out, so it is never a dead end.

---

## Type 5 - Record detail with evidence

**Nodes:** 4.0 Theme detail, 4.1 low-signal variant. **2 nodes, 2 MVP.**
**Why this type second:** it is the next rung of the trust chain (2.0 to 4.0 to 5.0), it renders the
theme card and the confidence indicator that the etalon just locked, and it owns the evidence snippet
that 5.0 and 6.4 render again. It is also the screen the differentiator lives on: this is where a
summary either shows its work or asks to be believed.

**Sources opened for this type (2026-08-04):**

| Ref | Source | What it is | Link |
|---|---|---|---|
| C3 | Canny, public post detail | in-category, a feedback record with its supporters and a merged-in source post | `feedback.canny.io/feature-requests/p/show-whether-a-canny-post-is-linked-to-a-jira-issue`, screen `research/screens/canny-post-detail.png` |
| C4 | Aha!, public idea detail | in-category, a record with a fielded meta panel, related records, counted tabs and a merged notice | `big.ideas.aha.io/ideas/A-I-16172`, screen `research/screens/aha-idea-detail.png` |
| R4 | Parallel, deep research with a citation panel | craft: a claim carries an inline citation chip, and the panel shows the source plus the REASONING behind the conclusion | Refero `bb40b82c-4f98-41c2-bbbf-6fdb143a1612` |
| R5 | Perplexity, answer with citations | craft, and already the named trust benchmark in `research/docs/benchmark.md`: "Reviewed 17 sources" plus a source-named chip on every claim | Refero `05d19bdd-e649-4586-95dd-b12502b03c5e` |

The domain half is public here (both in-category records are public pages), so this type has both
halves and does not run on the fallback.

### Blocks

| # | Source | Block | Take / Skip / Differently | Traces to | Scope | Where we are better, and how |
|---|---|---|---|---|---|---|
| 1 | C4 | Breadcrumb back to the ranked list | **Take** | Flow 0 return path, no dead ends | MVP | Already present. Kept because the detail is reached mid-decision and the way back must not be the browser button |
| 2 | all | Record title, the theme label | **Take** | Voice principle 2 | MVP | Their title is one person's post title; ours is the cluster's name in the customer's language |
| 3 | C4 | Header meta: confidence, recency, sources | **Differently** | J3; D2 | MVP | C4 gives a fielded panel of workflow metadata (status, category, author, date). Ours repeats exactly what the list row promised (n=X, recency, sources), so the reader can see they landed on the right theme without re-reading |
| 4 | R5, C4 | Denominator line, broken down by source | **Differently** | As-Is barrier "cannot tell a strong theme from a thin one" | MVP | R5 says "Reviewed 17 sources", C4 counts its tabs. Ours reads `42 items from 2 sources: Intercom 30, CSV 12`, so source diversity is legible before any click. Nobody breaks the number down, and diversity is the part that separates a real pattern from one loud account |
| 5 | R4, R5 | **Inline citation on every claim of the summary** | **Differently** | As-Is barrier "distrust of black-box summaries"; H1; Design principles 1 and 5 | MVP | **The largest gain on this page.** Today our summary is one uncited paragraph, which is exactly the black-box summary the persona refuses to act on. R4 uses a numbered chip, R5 a domain name. Ours names the SOURCE and the count (`Intercom +3`), so a claim shows both where it came from and how broadly, without opening anything |
| 6 | R4 | Why these items cluster, one line | **Take** | H1; Design principle 3, earn trust by being transparent about how the synthesis works | MVP | R4 has a Reasoning block explaining why the evidence supports the conclusion. No competitor explains why a cluster is a cluster; Canny's merge just asserts it. One line, not an essay: what the items have in common and what was excluded |
| 7 | all | Evidence list heading with its count | **Take** | D2 | MVP | Present already. It is the promise the list below has to keep |
| 8 | C3, C4 | Sort and group over the evidence list | **Differently** | J3; source diversity | MVP | C3 sorts an activity feed by date; C4 splits into counted tabs. Ours groups by SOURCE with counts and sorts by recency, because the question a PM asks here is "is this one channel shouting or several agreeing" |
| 9 | C3, existing | Evidence snippet rows: verbatim, citation number, provenance | **Take** | Main job; the differentiator | MVP | C3 buries the one real source quote inside an activity feed between comments and reactions. Ours is a first-class list, and it is the whole point of the page |
| 10 | C1, C2 pattern | Load more on the evidence list, with the remainder | **Take** | same barrier as row 4 | MVP | Today the page shows 6 of 42 items and offers no way to the rest, which quietly contradicts the `n=42` above it. A real defect, found by reading the block against its own denominator |
| 11 | C3 | Panel of people behind the number | **Skip** | contradicts the PII-scrub default and D3 | out of scope | C3 shows voter avatars and "+33". Our provenance is the source and the segment, never the person: PII is scrubbed by default, and that is a day-one compliance stance, not a setting |
| 12 | C4 | Related records list | **Skip for MVP** | no MVP job traces to it | Later | Browsing sideways is a discovery feature. The MVP claim is that the ranked list already put the right thing in front of you |
| 13 | C4 | **Merged or superseded notice band** | **Take** | Flow 2 citation-cannot-resolve guard; D2; GDPR item removal | MVP | A find. C4 puts a band at the top saying this record has been merged and where to go instead. Our flows already have the guard, but no block carried it on 4.0. It gives 4.1 and 5.1 a home and keeps a broken chain honest rather than silent |
| 14 | C3 | Comment composer and activity feed | **Skip** | traces to nothing in `jtbd.md` | out of scope | Sift reads feedback, it does not host a discussion about it. Same reason the inline composer was skipped on Type 2 |
| 15 | C3, C4 | Delivery-status badge | **Skip for MVP** | roadmap link is fast-follow | Later | Consistent with Type 2 row 14 |
| 16 | all | One primary action, Add to brief | **Take** | Main job; 6.1 is one tap from the evidence | MVP | Theirs is Vote, that is, more input. Ours carries the theme into the decision |
| 17 | R4 | Source in a side panel instead of a page | **Skip for MVP** | would duplicate 5.0 | Later | R4 keeps the reader in context, which the CJM says matters in a live meeting. But 5.0 must stay an addressable page: the shared brief links into it and it is the end of the chain. A panel would be a second implementation of the same rung. Revisit once the brief flow is real |
| 18 | own | Low-signal treatment on the detail | **Take** | D2; As-Is barrier "thin evidence dressed as strong signal" | MVP | The badge on the list has to survive the drill: 4.1 says what thin means here and still lets the reader open every item |

### What this changes in nodes 4.0 and 4.1

New against the current pass: rows 4, 5, 6, 8, 10 and 13. Rows 5 and 6 are the ones that change the
character of the page, and they are the ones that make the differentiator real: an AI summary with a
citation on every claim plus one line of reasoning stops being something the reader has to believe.
Row 10 is a defect fix, not an addition: the page claims 42 items and shows six.

### States, from the same sources (Type 5)

- **4.1 low-signal:** no source has a thin-evidence state, because none of them admits its data can be
  thin. Ours keeps every block and adds the caution plus what would make the theme trustworthy.
- **loading and error:** no source has either. Ours follows the Type 2 rule: name the wait, name the
  failure, always offer the way back to 2.0.

---

## Type 6 - Artifact composer

**Nodes:** 6.1 Build brief, 6.2 thin-theme warning, 6.3 share-link. **3 nodes, 3 MVP.**
**Why this type third:** it is the end of the main flow, the screen where a decision becomes a document
someone else will read, and the place the primary persona's deepest As-Is pain is answered (Phase 6,
evidence losing to the stakeholder anecdote, sentiment -5).

**Sources for this type (2026-08-04):**

| Ref | Source | What it is | Link |
|---|---|---|---|
| D1 | Dovetail, sharing documentation | in-category but **documentation, not an observed screen**: public project access, viewing in presentation mode without an account, a report laid out newspaper-style with excerpts and publish dates | `dovetail.com/blog/how-to-collaborate-on-reports/`, `docs.dovetail.com/academy/intro-to-docs` |
| R6 | Wynde, test builder | craft: stage tabs in the header, an ordered list with drag handles, a preview affordance, one Publish | Refero `880a1838-0c5c-4223-9c12-8c40565c6562` |
| R7 | Supercut, share dialog | craft: mode switch, a plain sentence naming the consequence, the link, Copy, **Disable link**, toast | Refero `e23e0414-5e62-406c-bfc8-70bef7b0edf3` |
| R8 | ElevenLabs, Asana, Runey, Aboard share modals | craft family: access role, permission toggles, copy plus toast | Refero `740e8baf-5117-417d-ba6b-e050a079866a`, `7aabdc06-6bae-4497-b88f-f97151e010b0`, `d8d5cfbf-ac5e-4b2d-97af-bcbe4f3bfc49` |

**The domain half is not available as an observed screen, and this is the fallback case.** A brief
composer is behind a login in all five competitors; Canny and Aha! have no composition step at all,
they publish the raw board. Dovetail has the closest feature but its shared reports are unique links
that are not publicly discoverable, so D1 is its own documentation, dated and named, not a page opened
in a browser. It is marked as documentation everywhere it is used, and it is not treated as a screen.
The craft half carries this type, and the column "where we are better" holds the barrier a block works
on rather than a comparison.

### Blocks

| # | Source | Block | Take / Skip / Differently | Traces to | Scope | Where we are better, and how |
|---|---|---|---|---|---|---|
| 1 | R6 | Stage indicator across the artifact steps | **Take** | Design principle 4; As-Is Phase 6, the brief is made under time pressure before a meeting | MVP | R6 names its stages after its tooling (Build, Invite respondents, Report). Ours names them after the outcome: Build, Share, What they see. The PM can tell how many steps are left before the meeting starts |
| 2 | R6, D1 | Artifact title plus a draft marker | **Take** | J4; 6.0 Briefs list needs a title a person recognises later | MVP | A brief with no name is a brief nobody finds again in 6.0. The draft dot says out loud that nothing has been shared yet |
| 3 | R6 | Ordered list of the selected themes, reorderable | **Differently** | Main job, the defensible call; recommended priority | MVP | **The order IS the recommendation**, so it is editable and pre-filled by signal rank. Each row keeps its n=X and low-signal badge while it moves, so the PM cannot quietly promote a thin theme without seeing that it is thin. R6 reorders survey questions; here the reordering is the decision |
| 4 | R6 | Per-item editor for the item's own content | **Skip, deliberately** | contradicts Design principle 5, traceable or it does not exist | out of scope | **The strongest refusal on this page.** We do not let the author rewrite the evidence. The brief carries each theme as the synthesis produced it; a rewritten quote would break the exact chain the product is built on. What the PM adds goes in their own field, block 5 |
| 5 | own | The PM's rationale, in its own field | **Take** | J1, defend the decision under challenge; As-Is Phase 6 | MVP | Kept visually separate from the evidence so a reader can always tell the claim from what supports it. Nobody else separates them, because nobody else is carrying evidence into the artifact in the first place |
| 6 | own, D2 | Thin-theme warning before publishing (6.2) | **Take** | D2; "label, do not hide" | MVP | No source warns you that the artifact you are about to send leans on thin data. Ours names which themes are thin and offers to label them in the brief rather than drop them, because dropping them would be the dishonest fix |
| 7 | R6 | Preview before publishing | **Take** | trust; the artifact is read by someone else | MVP | R6 has a preview eye. Ours previews 6.4 exactly as the stakeholder will see it, including the confidence badges. You do not send a link you have not read |
| 8 | R7 | Share mode switch, team versus public | **Skip for MVP** | MVP has one mode: a public link, no login to view | Later | A mode switch implies a team permission model the MVP does not have. Adding the control before the model exists would be a promise the product cannot keep |
| 9 | R7 | **A plain sentence naming the consequence** | **Differently** | GDPR and the PII stance; D2; Voice principle 1 | MVP | R7 says "Anyone with this link can view the stack without signing in". Ours has to say more, because the artifact carries customer quotes: anyone with the link can read it without logging in, and it contains scrubbed customer feedback. Their sentence protects the product; ours protects the customer |
| 10 | R7, R8 | The link, readable, plus Copy | **Take** | S1, the referral artifact | MVP | Shown in full rather than truncated to an ellipsis: a link a person cannot read is a link they cannot check before pasting it into a room |
| 11 | R7 | **Disable the link** | **Take. A find.** | GDPR data removal; the traceability guard in Flow 2 | MVP | Our IA had no revoke anywhere. A public link over customer feedback with no off switch is a compliance hole, not a missing nicety. R7 has the control and it is the one block here worth taking wholesale |
| 12 | R8 | Access-role dropdown, viewer or editor | **Skip** | no MVP job; the shared brief is read-only by definition | out of scope | A brief that a reader can edit is no longer evidence |
| 13 | R7, R8 | Confirmation after copying | **Differently** | Voice: forbidden words | MVP | R7's toast reads "Public link enabled successfully". "Successfully" is on our forbidden list, and it says nothing. Ours states what is now true: the link is live and anyone with it can read the brief |
| 14 | R8 | Invite by email | **Skip for MVP** | sharing in MVP is by link | Later | The link already travels; email would be a second delivery path with its own consent questions |

### What this changes in nodes 6.1, 6.2 and 6.3

New: the stage indicator, the draft-marked title, reorder as an explicit act, the separated rationale
field, the preview, the consequence sentence, and the revoke control. Blocks 4 and 11 are the two that
matter most and they pull in opposite directions, which is the point: block 4 is a capability we refuse
because it would break traceability, block 11 is a capability we add because its absence would break a
promise to the customer.

### States, from the same sources (Type 6)

- **6.2 thin-theme warning:** own, no source has it. It interrupts before publishing, not after.
- **6.3 generating:** R7 and R8 all show the link already made; the transit state is ours, and it says
  what is being made rather than spinning.

---

## Type 7 - Public read-only document

**Nodes:** 6.4 Shared brief. **1 node, 1 MVP.**
**Why this type matters out of proportion to its size:** it is the only screen a stakeholder ever sees,
it is where the deepest As-Is pain is answered (Phase 6, evidence losing to the anecdote, sentiment -5,
a strong pattern), and `research/docs/research.md` names it simultaneously the acquisition asset, the
retention hook and the referral artifact. One node, three jobs.

**Sources opened for this type (2026-08-04):**

| Ref | Source | What it is | Link |
|---|---|---|---|
| C5 | Canny, public changelog | in-category, a published read-only artifact produced from feedback | `feedback.canny.io/changelog`, screen `research/screens/canny-public-changelog.png` |
| C6 | Linear, Now | the aspirational benchmark named in `research/docs/benchmark.md`, a published dated stream | `linear.app/changelog`, screen `research/screens/linear-public-changelog.png` |
| R9 | MWM, market intelligence article | craft, and the closest thing found to our artifact: a claim-led analysis with inline citations, a key-takeaways box, a metadata panel, a numbered citations block quoting each source, and a full source list | Refero `17945dc3-b5e9-429a-8ec3-9c53c50b4108` |

The domain half is public for this type, which is the exception among the app types: the OUTPUT of a
feedback tool is meant to be seen. Note the limit honestly: Refero returned share dialogs and
dashboards for "public read-only document" rather than published artifacts, so the craft half rests on
one screen (R9) rather than three or five. R9 earns it, because it is the whole pattern in one page.

### Blocks

| # | Source | Block | Take / Skip / Differently | Traces to | Scope | Where we are better, and how |
|---|---|---|---|---|---|---|
| 1 | C5, C6 | Vendor chrome on the artifact | **Differently** | AARRR acquisition; Design principle 2 | MVP | C5 and C6 put the full marketing nav plus Log in and Sign up on the artifact. Ours keeps one quiet Sift mark and a read-only tag. A brief that looks like an advert argues against its own evidence, and this brief has to survive a sceptical room |
| 2 | R9, C6 | Title plus a lede that states the claim with its numbers | **Take** | Main job, the defensible call | MVP | The reader gets the claim and its size in one paragraph, before deciding whether to read on |
| 3 | R9 | Metadata panel: who prepared it, when, over what window, from which sources, reading time | **Take** | J1; D2 | MVP | A brief read three weeks later is a different claim. Dating it and naming its window is what makes it citable back rather than a screenshot with no provenance. R9 has the panel; no in-category artifact does |
| 4 | R9 | Key takeaways box at the top | **Take** | As-Is Phase 6: the stakeholder reads for half a minute before the meeting | MVP | The artifact must work for a reader who will not scroll. Ours is the recommended order plus the one number behind each line |
| 5 | existing, own | Recommended priority with n=X and the low-signal badge kept | **Take** | D2; "label, do not hide" | MVP | **The badge survives publication.** No public artifact anywhere in the sources admits its own thin data. Ours carries the low-signal badge into the room, which is the whole argument for trusting the rest of it |
| 6 | R9 | Claim sections with inline numbered citations | **Differently** | the differentiator; As-Is barrier "distrust of black-box summaries" | MVP | Same trust chain as 4.0, but for a reader with no app access: the citation resolves inside the document instead of linking into a product they cannot open |
| 7 | R9 | Citations block at the end, each quoting its source | **Take** | Main job; J1 | MVP | This is what a stakeholder cannot argue with. R9 quotes the source text under each numbered citation; ours quotes the customer verbatim with its channel and date |
| 8 | R9 | Source list with counts | **Differently** | J3, coverage | MVP | R9 lists domains. Ours lists CSV 840 and Intercom 2,910 of 3,750 in the window, which is a coverage statement rather than a bibliography: it says what the brief could and could not have seen |
| 9 | own | One line on how the brief was made | **Take** | H1; Design principle 3 | MVP | Clustered from N items, personal details scrubbed, thin themes labelled. The reader is being asked to trust a synthesis, so the method gets one honest line rather than silence |
| 10 | own | The PM's rationale, attributed and separated | **Take** | J1 | MVP | Same rule as 6.1: the reader can always tell the claim from the evidence, and can see which is the author's judgement |
| 11 | R9 | In-page section navigation in a rail | **Skip for MVP** | three themes do not need navigation | Later | Earns its place when a brief carries enough themes to stop fitting a screen |
| 12 | R9 | Author bio card, telemetry panel | **Skip** | no job traces to them | out of scope | The author is not the point; the evidence is |
| 13 | C5 | Search and filters inside the artifact | **Skip** | this is one brief, not a feed | out of scope | C5 is a stream of entries. A brief is a single argument, and a filter over an argument is a way to lose it |
| 14 | C5, C6 | Subscribe and RSS | **Skip for MVP** | one-off artifact | Later | Meaningful only if a brief becomes a recurring publication, which is the fast-follow digest, not this |

### What this changes in node 6.4

New: the metadata panel, key takeaways, inline numbered citations, the citations block, the source list
with counts, the method line, and the attributed rationale. Row 5 is not new but it is the one to
defend: the low-signal badge survives into the public artifact, and every source we looked at would
have dropped it.

### States, from the same sources (Type 7)

- 6.4 has one state in MVP: the read-only document. A revoked link (Type 6 row 11) lands the reader on
  a plain page saying the link is no longer active, with no content and no leak of what it held.
- **Where row 5 is actually demonstrated.** The base 6.4 carries three strong themes, to stay
  consistent with the brief built on 6.1, so the low-signal badge does not appear on it. The claim that
  the badge survives publication is demonstrated on the thin path: 6.2 warns, the PM labels rather than
  drops, and the resulting brief carries the badge. Said here so the claim is not taken as proven by a
  screen that does not show it.

---

## Type 4 - Import and connect wizard

**Nodes:** 3.2 CSV upload and mapping, 3.3 Intercom OAuth, 3.5 sync error, 3.6 manage. (3.1, the chooser, was folded into 3.0 in August 2026.)
**5 nodes, 5 MVP.**
**Why this type:** without it the product is empty. `2.1 first-run empty` routes here, so this is the
activation path, and D3 names CSV as the zero-friction day-one route.

**Sources for this type (2026-08-04):**

| Ref | Source | What it is | Link |
|---|---|---|---|
| C7 | Canny, integrations catalog | in-category but a **marketing catalog, not an in-app chooser**, and used only for one structural lesson: each card says what connecting will DO | `canny.io/integrations`, screen `research/screens/canny-integrations-catalog.png` |
| R10 | Resend, contact import | craft, and the closest match found to 3.2: a three-step stepper with a completed state, and a mapping table carrying **sample data from the uploaded file** plus an include toggle per column | Refero `ee49a361-7117-457e-bb74-e45cdde7f0f0` (map step), `e9b8cb59-c916-4f7f-a327-2fcc0131cc88` (upload confirmed) |
| R11 | Rox, CSV upload modal | craft: a drop zone that states the required columns up front and keeps Next disabled until the file is valid | Refero `26624d8c-6e31-4ebd-870d-2cf0d33c397b` |

**The domain half is again unavailable as an observed screen.** Import and connect flows sit behind a
login everywhere. C7 is a marketing catalog and is labelled as one: it is not treated as a substitute
for an in-app chooser, and exactly one lesson is taken from it. The rest of the type runs on craft plus
our own barriers, as on Types 4 and 6.

### Blocks

| # | Source | Block | Take / Skip / Differently | Traces to | Scope | Where we are better, and how |
|---|---|---|---|---|---|---|
| 1 | R10 | Step indicator with a completed state | **Take** | Design principle 4; the As-Is barrier that ingestion is a black box | MVP | Our CSV screen had no steps at all, so the user could not tell that a review was still coming. R10 marks the finished step with a check, which is the cheap half of the honesty |
| 2 | existing | Breadcrumb back to Sources | **Take** | no dead ends | MVP | Kept |
| 3 | C7 | Chooser cards that say what connecting DOES | **Differently** | J2; D3 | MVP | C7 writes its cards about its own features ("push posts to Jira"). Ours says what Sift will read, roughly how much of it, and that personal details are scrubbed on the way in: the sentence is about the user's data, not our feature list |
| 4 | R11 | Drop zone naming the required columns, Next disabled until valid | **Take** | J2, the zero-friction day-one path | MVP | Failing at the drop zone is cheap; failing after 840 rows are read is not |
| 5 | existing | File summary after upload | **Take** | J2 | MVP | Name, rows, columns detected. Kept |
| 6 | R10 | **Mapping table with a SAMPLE DATA column** | **Take** | J2; the As-Is barrier of an import that goes silently wrong | MVP | **The biggest gap on this screen.** Today you map `customer_message` blind. R10 shows two real values beside each column, so the mapping can be verified without opening the file. A silently wrong import poisons every theme downstream, and it is invisible until synthesis looks wrong |
| 7 | R10 | Include or do not import, per column | **Differently** | PII-scrub default; GDPR day one | MVP | R10 uses it for tidiness. For us it is the place where the privacy stance stops being a setting the user is told about and becomes an action they take and can see: `email` off means no contact data is read at all |
| 8 | R10 | Review before committing | **Take** | 840 rows is not undoable in the reader's head | MVP | What will be imported, how many rows, which column is skipped, and what gets scrubbed, all before the button. No in-category source has this because none of them exposes the import at all |
| 9 | existing | Honest wait during normalize and scrub | **Take** | Voice principle 4 | MVP | Names the two phases rather than spinning, same rule as 2.2 |
| 10 | own | OAuth step that states the scope before the redirect | **Take** | D3; GDPR | MVP | We name what Sift will read (conversations, not contacts) on our page, before the user leaves it. Consent given after a redirect is consent given to somebody else's wording |
| 11 | existing | Sync error naming the affected themes | **Take** | Flow 2 citation-cannot-resolve guard | MVP | Not "sync failed" but which themes lose evidence while the source is down. The error is about the user's picture, not about our pipeline |
| 12 | existing | Manage and disconnect, with the consequence stated | **Differently** | GDPR; D2 | MVP | Disconnecting has to say what happens to the items already ingested, otherwise the user is guessing about their own data |
| 13 | C7 | Integrations grouped by category | **Skip for MVP** | two sources need no grouping | Later | Grouping earns its place at roughly eight sources |
| 14 | C7 | Request an integration, long tail | **Skip for MVP** | no MVP job | Later | Zapier and Make cover the long tail before native support, per the tech stack note |

### What this changes in node 3.2

New: the step indicator, the sample-data column, the per-column import toggle, and the review block.
Row 6 is the one that matters: it converts a mapping the user has to trust into a mapping the user can
check, and it is cheap. Row 8 is the same argument one step later.

### States, from the same sources (Type 4)

- **3.5 sync error:** kept from the existing spec and sharpened by row 11.
- **unmapped column:** the notice stays, reworded so it names both ways out (choose a field, or turn
  Import off) rather than only the one.

---

## Type 3 - Managed object list with status

**Nodes:** 3.0 Sources, 3.4 Sources empty, 6.0 Briefs list, 6.5 Briefs empty. **4 nodes, 4 MVP.**
**Why this type:** two of its four nodes are empty states, and both are activation-critical: `2.1` routes
to the sources path, and `6.5` is the onboarding to the output step.

**Sources for this type (2026-08-04):**

| Ref | Source | What it is | Link |
|---|---|---|---|
| R12 | Rox, integrations | craft, and the closest match: **CURRENT** and **NOT CONNECTED** as two groups on one screen, status badges including a transitional one, a live stat line per card, and availability that differs per source | Refero `23ce82d9-2935-452b-8580-9106aba2c9ff` |
| R13 | Linear, integrations | craft: the same two-group idea with search, from the aspirational benchmark | Refero `96e23c30-3b59-4b4b-8ebc-9eee3b76b69f` |
| C7 | Canny, integrations catalog | from Type 4: the card says what connecting DOES | `canny.io/integrations` |

Domain half unavailable as an observed screen again: the sources list and the briefs list are both
behind a login everywhere. Craft plus our own barriers, as on Types 4, 6 and the rest of the app.

### Blocks

| # | Source | Block | Take / Skip / Differently | Traces to | Scope | Where we are better, and how |
|---|---|---|---|---|---|---|
| 1 | existing | Scope line: sources connected and items in | **Take** | same barrier as the 2.0 denominator | MVP | Already present and it is the right block: it is the number the synthesis denominator is built from, said at its origin |
| 2 | R12, R13 | **Connected and available as two groups on one screen** | **Take** | J2; activation | MVP | **The structural find.** Today you must leave the list to discover what else you could connect. With both groups on one screen the empty state stops being a separate design and becomes the same screen with an empty first group |
| 3 | R12 | Status badge including a transitional state | **Take** | Voice principle 4; Flow 1 | MVP | We have connected and error; R12 also has "Connecting". A source mid-sync currently looks identical to one that finished, which is exactly when a user asks why the numbers moved |
| 4 | R12, existing | Per-source stat line: items, last sync, scrub state | **Take** | J3; PII stance | MVP | Kept. Ours already carries the scrub state per source, which R12 has no equivalent of because it has no such promise to keep |
| 5 | C7, R12 | The card says what connecting will DO | **Differently** | J2; D3 | MVP | Their sentence is about the integration's features. Ours says what Sift will read from that source and what it will not |
| 6 | R12 | **Availability that differs per source, stated** | **Take** | D3 | MVP | R12 shows "Contact Rox" where self-serve is not available. Ours says Zendesk is not connectable yet, rather than hiding it: D3 committed to the abstraction with no timeline, and an honest "not yet" manages the expectation instead of letting the list imply the set is complete |
| 7 | existing | Filter by status and type | **Skip for MVP** | two connected sources need no filter | Later | Kept as Later, consistent with the search decision on Type 2: a control earns its place when the list stops fitting a screen |
| 8 | R12 | Per-item settings and delete on the card | **Differently** | GDPR; 3.6 | MVP | Ours is one Manage entry rather than two icons, because disconnecting has consequences for already-ingested items and those belong on a screen with room to state them (Type 4 row 12) |
| 9 | own | Empty state that names the one action | **Take** | activation, Flow 1; Voice principle 4 | MVP | With block 2 in place, 3.4 and 6.5 stop being separate layouts: the same screen renders with an empty connected group and the available group already visible, so the next action is on screen rather than one navigation away |

### The open question this type raised, and how it was answered

Block 2 made **3.1 Connect chooser** redundant: 3.0 already lists what is available, so the chooser
added a screen between the user and the source. This bank named the two options and the stronger read,
and left the decision with the owner, because deleting an IA node is not a wireframe decision.

**Answered, August 2026: folded.** Each available card leads straight to its own connect flow (3.2 or
3.3), 3.0 takes ownership of the source-type enum, and the activation path is one screen shorter.
The argument that decided it is the one already written above: activation is where users are lost, and
the chooser cost a screen there to show what the previous screen had just shown.

### States, from the same sources (Type 3)

- **3.4 and 6.5** become the same screen with an empty first group, not separate designs. Their copy
  still names the one action, and that copy is the whole point of the state.

---

## Type 1 - Marketing landing

**Nodes:** 0.0 Home. **1 node, 1 MVP.**
**Why it is its own type:** it is one of only two indexed surfaces in the whole product (the other is
Legal, 9.x), so it is the only page where the A to E SEO block does real work. Everything else is
noindex.

**Sources opened live in this session (2026-08-04):**

| Ref | Source | H1 | Notes |
|---|---|---|---|
| C8 | Enterpret | "Customer intelligence infrastructure for teams building with AI" | hero, then a **problem block second**, then transformation, coverage, capability, social proof, **FAQ**, final CTA. 17 H2s. Closest to our positioning |
| C9 | Dovetail | "Build with facts, not vibes" | hero, audience switcher, platform claim, "The best [] never guess", final CTA. Title "Dovetail \| Customer Intelligence Platform". **The only one of the three shipping schema: Organization + WebSite** |
| C10 | Canny | "AI-powered customer feedback platform" | outcome, logo strip, AI capability, audience segments, platform, integrations, testimonials, final CTA, "More ways to use Canny" (internal linking). Title is keyword-stuffed. **No schema at all** |

Older captures of the same set from the research stage are in `research/screens/` (`dovetail-homepage.png`,
`canny-homepage.png`, `productboard-homepage.png`, `enterpret-homepage.png`); the composition above was
re-read live rather than taken from them.

### Blocks

| # | Source | Block | Take / Skip / Differently | Traces to | Scope | Where we are better, and how |
|---|---|---|---|---|---|---|
| 1 | all | Hero: H1 stating the category and the claim, plus a lede and one primary CTA | **Take** | acquisition (AARRR) | MVP | Present. All three lead with a category claim; ours leads with the outcome the PM is buying, which is a decision they can defend |
| 2 | C8 | **Problem block, second** | **Take** | As-Is Phase 6, the deepest pain; H1 | MVP | **The gap.** Our home goes straight from hero to how-it-works. C8 names the problem before any feature, and the problem is exactly where our positioning lives: the PM whose evidence loses to a stakeholder's anecdote. A visitor who does not recognise the problem will not read the mechanism |
| 3 | existing | How it works, three steps | **Take** | J2, main job | MVP | Present, and it mirrors the real in-app path rather than inventing a marketing narrative |
| 4 | C10, C9 | Logo strip or social proof high on the page | **Skip for MVP** | nothing to show yet, and inventing it is out of the question | Later | A logo strip with no logos is the worst block on any page. Ours earns it or it is absent |
| 5 | own | **A real shared brief, linked as a live example** | **Take. The strongest block we can have and they cannot.** | S1; the brief is named in `research.md` as the acquisition asset | MVP | 6.4 is a public, read-only, no-login page. So the landing can hand a visitor the actual artifact, with real confidence badges and citations. No competitor can do this: their public artifact is a board of raw posts, not an evidence document. It is the product demonstrating its own claim instead of asserting it |
| 6 | existing | Trust commitments | **Take** | Design principle 3; GDPR | MVP | Present. Kept high, because the objection here is "can I trust an AI summary" and it arrives before pricing |
| 7 | existing | Pricing teaser | **Take** | business model; conversion | MVP | Present, and it keeps the honest note that plan names and prices are hypotheses |
| 8 | C8 | **FAQ block** | **Take** | objection handling; SEO (block E) | MVP | Two of three have no FAQ, and C8 has one but ships no FAQPage schema for it. Ours handles the real objections (how is confidence computed, what happens to PII, what if the evidence is thin) and is the one place FAQPage schema can be earned honestly |
| 9 | C10 | Internal linking block near the foot | **Differently** | SEO block D; crawlability | MVP | C10 links to more of its own marketing. Ours links to the indexed pages that actually exist: the legal set (9.x) and the example brief. A link block that points at noindex app pages would be padding |
| 10 | all | Final CTA repeated | **Take** | conversion | MVP | Present in the footer band |
| 11 | C9 | Audience switcher ("Dovetail for [role]") | **Skip for MVP** | D1: Segment A only | Later | We deliberately build for one persona. A role switcher would advertise a breadth we chose not to have |
| 12 | C10 | Integrations showcase | **Skip for MVP** | two sources, and one of them is a CSV | Later | A showcase of two is a weakness, not a feature. The Sources page states the set honestly instead |

### SEO decisions (block A to E, the only place they bite)

- **Title:** brand plus category, clean, in C9's pattern rather than C10's keyword-stuffed one. A page
  whose claim is honesty cannot open with a stuffed title.
- **H1:** exactly one, stating category and claim together. **H2:** one per section, and the section
  headings above are the outline.
- **Schema:** `Organization` and `WebSite`, which is all we can honestly assert, plus `FAQPage` on
  block 8 because the questions are real. Note the finding: of the three, only C9 ships schema at all,
  and none ships FAQPage even where an FAQ exists.
- **Indexation:** indexed. This page and 9.x are the entire indexed surface; the app is noindex and
  the public shared brief is public to view but noindex because it carries customer data.
- **Internal linking:** block 9 plus the footer. No marketplace-style landing grid: that is a pattern
  for catalogues, and this product has none.

---

## Type 8 - Settings shell and sections

**Nodes:** 7.0 shell, 7.1 plan and limits, 7.2 data and privacy, 7.3 profile. **4 nodes, 4 MVP.**
**Why this type:** 7.1 is the free-to-paid conversion surface named in the business model, and 7.2 is
where the day-one GDPR stance has to be visible rather than promised.

**Sources for this type (2026-08-04):**

| Ref | Source | What it is | Link |
|---|---|---|---|
| R14 | Resend, settings usage | craft: a settings shell as a tab row, content grouped by product area, each area carrying its own plan badge and Upgrade, and every limit expressed as a **used / limit fraction** with "Unlimited" stated as a value | Refero `b7845b1d-04dd-4e4b-9c46-a64e0f103925` |
| R15 | Rox, billing and usage | craft: current plan, cost, renewal date, a live usage meter, plan comparison and a limits table in one console | Refero `c794140c-de8b-46c4-8128-b3a652ea7461` |
| C11 | Competitor pricing pages | in-category but **public marketing pages, not the in-app plan screen**, and used only for how the category meters its free tier (Canny: 25 tracked users; Dovetail: 1 channel, 1 project) | `research/docs/competitors.md`, screens `canny-pricing.png`, `dovetail-pricing.png`, `productboard-pricing.png` |

Domain half unavailable as an observed in-app screen, as everywhere behind the login. C11 is labelled a
marketing page and is not used as a substitute for 7.1.

### Blocks

| # | Source | Block | Take / Skip / Differently | Traces to | Scope | Where we are better, and how |
|---|---|---|---|---|---|---|
| 1 | R14, existing | Settings shell as one page with section navigation | **Take** | 7.0: one shell, not N pages | MVP | Present. R14 uses a tab row, ours a side list; both are one shell, and the IA already chose the thin version |
| 2 | R14 | Limit expressed as **used / limit**, not a bar alone | **Differently** | Voice principle 1, let the number carry the weight; D2 | MVP | A bar shows a proportion; a fraction shows the facts. Ours keeps the bar as the glance and puts `3,750 of 5,000` beside it, so the reader can do arithmetic rather than estimate |
| 3 | R14 | "Unlimited" stated as a value, in the same column | **Take** | honesty about what is and is not metered | MVP | Cheap and it removes a question. Which dimensions are NOT metered is as useful as which are |
| 4 | R14 | Upgrade sits beside the thing that is limited | **Take** | AARRR: `aarrr.md` already asks for a context-specific upgrade, not a generic wall | MVP | The research says it in as many words: surface the feature the user was trying to use, not a generic upgrade message. R14 does it structurally by putting Upgrade inside the metered area |
| 5 | R15 | Plan, price and renewal date together | **Take** | business model | MVP | Ours adds nothing clever here; it just has to be complete, because a plan screen that hides the renewal date generates a support ticket |
| 6 | existing | Approaching-limit notice | **Take** | AARRR conversion | MVP | Present, and `aarrr.md` calls for it to be visible and non-punitive |
| 7 | R15 | Plan comparison table inside the app | **Skip for MVP** | Pricing lives on 0.0 and the plans page | Later | Two places to compare plans is two places to keep in sync |
| 8 | own | Data and privacy: scrub default, residency, export and delete | **Take** | GDPR and CCPA day one; D2 | MVP | Nothing in the source set has an equivalent, because none of them made a scrub-by-default promise that has to be visible somewhere |

### Finding: the free-plan limit contradicts itself in four places

Reading block 2 against its own number surfaced a live defect, not a design question:

| Where | Number |
|---|---|
| `research/docs/strategy.md` line 103 | up to **250** feedback items per month |
| `wireframes/index.html`, pricing block | up to **500** feedback items per month |
| `wireframes/account-plan.html`, 7.1 | up to **5,000** items a month, meter reads `3,750 of 5,000` |
| the canonical demo corpus used on every screen | **3,750** items |

`voice/docs/microcopy.md` line 326 already carries `[DIV-1] [DIV-2]` against this line, so the Voice
stage saw the divergence and it was never resolved. Two consequences, both real: whichever number is
right, at least two shipped screens state a different one; and at 250 or 500 the canonical demo
workspace is permanently over the free limit, so every screen is quietly showing a state the copy says
cannot exist.

This is a business-model number, not a design decision, so it is **not resolved here**. Until the owner
picks one, 7.1 carries `[?]` on the limit rather than an invented figure, per the rule that a number
without a source is marked, not guessed.

---

# Light pass: four types where a full round would buy nothing

*These four were named in the estimate as a light pass. The justification is written per type rather
than assumed, because "we did less here" is a claim that has to be defended.*

## Type 9 - Auth form

**Nodes:** 1.0 Sign up, 1.1 Log in, 1.2 Forgot and reset. **3 nodes, 3 MVP.**

**Why light, honestly:** the domain half is actually available here, since every competitor's log-in
and sign-up pages are public. It is still a light pass, because the composition of a credential form
is close to invariant across the whole web and a round of five references would return the same five
blocks. What differs between products is the copy and the recovery path, and both of those are already
owned: copy by `voice/docs/microcopy.md`, recovery by `ia/docs/flows.md`.

| # | Block | Decision | Traces to | Scope |
|---|---|---|---|---|
| 1 | One credential form, email plus SSO | Take | platform entry | MVP |
| 2 | A single value reminder on sign up, not a pitch | Take | 0.0 already did the selling; repeating it here is friction | MVP |
| 3 | Link between log in and sign up, both directions | Take | no dead ends | MVP |
| 4 | Forgot password as its own addressable state, with the sent confirmation and the set-new-password step | Take | recovery, `flows.md` | MVP |
| 5 | Errors on the field, not only at the top | Take | accessibility; Voice principle 4 | MVP |
| 6 | Social sign-in wall of six providers | Skip | no MVP job; each provider is a data-sharing decision | out of scope |
| 7 | Marketing chrome, nav and footer, on the auth page | Skip | Design principle 4: one thing to do here | MVP |

**Where we are better:** nothing here is a differentiator, and claiming one would be noise. The only
rule that matters is that the reset path is complete and every error names the next move.

## Type 10 - Terminal source record

**Nodes:** 5.0 Evidence source, 5.1 redacted or unavailable. **2 nodes, 2 MVP.**

**Why light:** the composition was already settled by Type 5. This is the last rung of the same chain,
and its whole job is to show one item in context and get out of the way. A reference round would be
looking for decoration on a page whose value is its plainness.

| # | Block | Decision | Traces to | Scope |
|---|---|---|---|---|
| 1 | Back to the theme, always | Take | trust chain, no dead ends | MVP |
| 2 | The full verbatim, unabridged, as the largest thing on the page | Take | the differentiator | MVP |
| 3 | Provenance: source, date, segment, and the citation number that brought you here | Take | J1, J3 | MVP |
| 4 | The claim this item supports, quoted back, with a link up to it | Take | the tie runs both ways (Type 5, evidence snippet) | MVP |
| 5 | 5.1: what happened and why, named | Take | GDPR item removal; Flow 2 guard | MVP |
| 6 | Anything else | Skip | this page is the end of the chain and it earns trust by being plain | MVP |

**Where we are better:** competitors have no equivalent page at all, because their citation is a vote.

## Type 11 - Legal and policy

**Nodes:** 9.0 Privacy, 9.1 Terms, 9.2 Security and GDPR. **3 nodes, 3 MVP.**

**Why light:** the composition is set by law and by what we already promised elsewhere, not by design
taste. The IA already grounded the cookie banner in gdpr.eu at Detail-layer Step 6.

| # | Block | Decision | Traces to | Scope |
|---|---|---|---|---|
| 1 | Last-updated date, at the top | Take | a policy with no date cannot be relied on | MVP |
| 2 | Section navigation in the page | Take | these are long documents and people arrive looking for one clause | MVP |
| 3 | What is collected, what is scrubbed, what is stored where | Take | GDPR, CCPA, and the scrub-by-default promise made on 0.0 and 7.2 | MVP |
| 4 | Rights and how to exercise them, with the actual route | Take | GDPR | MVP |
| 5 | Cross-links between 9.0, 9.1, 9.2 and to 7.2 | Take | SEO block D; the settings screen must reach the policy | MVP |
| 6 | Plain-language summary beside the legal text | Take | Design principle 3, earn trust | MVP |

**Where we are better:** block 6. A policy nobody can read is a promise nobody can check, and this
product's whole claim is that its promises are checkable. **Indexed**, with the full A to E block: this
and 0.0 are the entire indexed surface.

## Type 12 - System page

**Nodes:** 8.0 404, 8.1 500, 8.2 Maintenance. **3 nodes, 3 MVP.**

**Why light:** three pages whose composition is a heading, a sentence and a way out. The decisions
worth recording are technical and editorial, not compositional.

| # | Block | Decision | Traces to | Scope |
|---|---|---|---|---|
| 1 | 404 as a full page with header and footer, never a soft 404 | Take | already in `sitemap.md`; SEO correctness | MVP |
| 2 | Quick links out: Synthesis and Home | Take | no dead ends | MVP |
| 3 | 500 on a backend-independent template | Take | it has to render when the app cannot | MVP |
| 4 | 503 with Retry-After | Take | correct status for planned downtime | MVP |
| 5 | Search on the 404 | Skip | there is no search in MVP; offering one would be a broken promise | Later |
| 6 | Apology copy and mascots | Skip | Voice: forbidden. "Something went wrong" is on the list by name | MVP |

**Where we are better:** the copy. Every one of these names what happened and what to do next, and none
of them says "successfully", apologises, or blames the reader.

---

# Coverage: the bank is closed

| Pass | Types | Nodes |
|---|---|---|
| Full round, competitors plus Refero | 8 (types 1 to 8) | 23 |
| Light pass, convention plus our own barriers | 4 (types 9 to 12) | 11 |
| Global elements, no bank pass: 0.1 Navigation, 0.2 Footer, 8.3 Cookie consent, 8.4 Toast | - | 4 |
| **Total** | **12** | **38** |

Every node in `ia/docs/sitemap.md` is accounted for. The count went from 39 to 38 when 3.1 was folded into 3.0. Two things this bank did NOT do, said plainly:

1. **RESOLVED, August 2026: the free-plan limit is 250 feedback items a month.** `strategy.md` is the
   only place that sets a value with a reason attached, so it wins; the 500 on 0.0 was a stale v1
   number and the 5,000 on 7.1 was invented at the wireframe stage. Finding the number also found the
   defect under it: the canonical workspace has two sources, evidence drill-down and a public shared
   brief, all of which `strategy.md` puts behind the paywall, so it was never a free workspace. 7.1
   now shows it on Growth, with the free plan stated beside it. Recorded in `docs/decisions.md`.
2. **RESOLVED, August 2026: 3.1 is folded into 3.0.** The bank had already named the stronger read
   ("activation is where users are lost"); the owner signed it. Each available source card now leads
   straight to its own connect flow, the source-type enum moves to 3.0, and the activation path loses
   a screen. Recorded in `docs/decisions.md`.

Both are written where they were found rather than carried in someone's head.
