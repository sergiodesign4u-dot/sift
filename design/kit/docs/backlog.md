# Backlog - Sift design system

*Stage 08 Steps 6, 7 and 9, and Stage 09 Steps 1 and 2. What the reconciliation of the system with the product, the theme stress
test, and the Step 9 critique and dry run over the still-grey screens, and the Stage 09 usage rules decided NOT to fill in now, with the reason and the stage that closes it. One row per item, in the format the stage asks
for: what is missing, where it shows, why it is deferred, who closes it. Closed by Stage 09 Step 1 and removed: the selection trigger (narrowed to `.theme .check:checked`) and the warning band on a raised surface (usage rule R5); both are in `docs/decisions.md`. Closed by the owner on 2026-11-26 and removed: the avatar stays 28px, and the action bar keeps its alignment at the start; both in `docs/decisions.md`, Stage 09 Step 2. Shown on
`design/kit/overview.html`, section "Backlog"; the Stage 09 Step 5 section at the end is shown on
`design/kit/why.html`, section "System backlog".*

*Internal document, English. No em dash anywhere in this file.*

| What is missing | Where it shows | Why it is deferred | Who closes it |
|---|---|---|---|
| The provenance list in colour on 3.6 | 3.6, grey | The component exists (`provlist.css`, built at Step 6 from the grey anatomy). 5.0 and 5.1 wear it since Stage 09 Step 5; painting 3.6 is the rollout's job | Stage 12 |
| The label/value gap in the provenance list | 3.6 (`<b>Type</b> Live connection`) | The grey draws only a word space; nothing to copy, so the page marks it `[?]` | Stage 12, when 3.6 is painted |
| Whether the links in the provenance list wear `.link` | 5.0, 5.1 | The grey draws a bare `<a>` in primary ink with the browser's underline; `.link` would remove the underline, which the grey never asked for | Stage 12 |
| `.notice--error` on its screen | 3.4 Connect Intercom, "Authorization failed" (`wireframes/connect-intercom.html:50`) | The grey draws the failure as a plain notice with no tone | Stage 12 puts the modifier on |
| `.field-err` drawn on a screen | 1.0 Log in, 1.2 Reset (`wireframes/auth.html:21`, `auth-reset.html:20` name "errors on the field") | The state is named in the node but no grey page draws it | Stage 12, as a state page of 1.0 and 1.2 |
| Whether `.redacted` is used | 5.1 Evidence redacted | The inventory gives the snippet a redacted form; the grey 5.1 shows the redacted case as a notice plus a reason line, not as a mark in the meta line | Stage 12 decides; if 5.1 keeps the notice, the mark is deleted then |
| The breakpoint: 600 or 820 | the app header, the bottom tabs, the toolbar, the account shell | The grey contract switches at a 600px CANVAS (a container query on the stand); the colour layer at an 820px VIEWPORT. Both are written down, neither is wrong for its layer, and naming the breakpoints by what changes is that stage's first step | Stage 10, Responsive |
| 3.6 is not a dialog | 3.6 Source manage | The inventory lists the dialog as standing on 6.3 and 3.6; the grey 3.6 draws its confirmation as a block on the page | Stage 12 decides the form; the inventory row is corrected then |
| "Primary" and "Sections" | the `aria-label` of the app header's nav and the bottom tabs: "Primary" on the four 2.0 screens and in the grey, "Sections" on the other 16 colour screens | Two names for one navigation; an interface string, and those belong to `voice/docs/microcopy.md` | Stage 12, through microcopy |
| `.legal-crumb` against `.breadcrumb` | 9.0, 9.1, 9.2 (grey) | Two classes for one job; the legal one is grey only | Stage 12, when 9.x is painted |
| Where the phase strip stands on a screen | under the app bar on 2.1, 2.2, 6.1 and 6.3, under the breadcrumb on 3.2 (colour) | Stage 09 Step 1: usage rule R9 holds the count (one per screen); the placement differs from screen to screen and no rule fixes it yet | Stage 12, before the next screen with a phase strip is painted |
| The rename map rows for the grey | 31 + 23 screens in `wireframes/` | `wireframes/` is never edited after Stage 05; the map is the input of the rollout. Step 6 added one row (`.acct-card-*` to `.cardrow-*`) | Stage 12 |
| The plan summary: plan name (`acct-plan-name`) and the account row's description zone used as a bare paragraph | 7.1 Plan and limits (`wireframes/account-plan.html:59-60,96`) | Step 9 dry run: no component, no inventory row; never put to the component or one-off question | Stage 12, before 7.1 is painted |
| The limits list: label against used/limit (`acct-limits`, `acct-limit-*`) | 7.1 (`account-plan.html:63-84`) | Step 9 dry run: neither a component nor a one-off. One-off on one screen, or a form of the provenance list | Stage 12, before 7.1 |
| The usage meter and its label: not in `one-off.css`; no near-limit or over-limit form, which IA names (`ia/docs/pages/account.md:38-39`) | 7.1 (`account-plan.html:87-88`) | Step 9 dry run: listed as a one-off in the Stage 07 inventory, declared nowhere in the system | Stage 12, with the 7.1 state pages |
| The panel action row ("Compare plans", "Add seats" beside the meter) | 7.1 (`account-plan.html:90-93`) | Step 9 dry run: `.actionbar` is a screen's closing row; this one sits mid-panel. Fold or declare | Stage 12; Stage 09 if the action bar gains a placement axis |
| 7.1 strings with no microcopy row: the plan body, "This month", "Seats", "Free plan, for reference", the five limit labels, the meter label | 7.1 | Step 9 dry run: the August rebuild delta logged values and actions, not these lines | Stage 12, through microcopy |
| Auth error strings: invalid email, wrong password, expired reset link, SSO failure | 1.0 log in and reset (`ia/docs/pages/auth.md:32`) | Step 9 dry run: the form exists (`.field-err`), the copy does not; `field.html` carries a `[?]` | Stage 12, through microcopy, with the `.field-err` row above |
| A form-level message inside the auth card (SSO failure, expired link); the danger band on `--bg-surface` is unmeasured | 1.0, all three states | Step 9 dry run: not a field error; `.notice--error` in the card or another form is undecided | Stage 12, with the 1.0 error states; contrast measured then |
| The auth page title: the system has only `.auth-h2`, the grey has an `h1` and a step title | 1.0, all three states | Step 9 dry run and the reader: a copied 1.0 would have no `h1`. A title form for the card, or `.h1` from the screen head | Stage 12, before 1.0 is painted |
| The legal document title size | 9.0, 9.1, 9.2 (`wireframes/security.html:41`, 24px in grey) | Step 9 dry run: `legal-doc.css` declares no title; a value, so a decision | Stage 12, when 9.x is painted |
| The app footer has no form with links; IA asks for the full marketing footer on 9.x | 1.0 and 9.x public footers | Step 9 dry run: `app-footer` is one non-interactive line. The target size of a footer link is undecided | Stage 12 (the variant), Stage 09 (the 44px rule for it) |
| Legal strings with no rows: the 9.1 and 9.2 crumbs, "On this page", the short TOC labels, "More:" and the 9.1 and 9.2 related links | 9.x | Step 9 dry run | Stage 12, through microcopy |
| The 10px micro step: group headings, tags, source stat labels, account section titles, bottom tab labels; the cite chip at 10.5px | every app screen; the bottom tabs are the most seen | Step 9, `/impeccable audit`: under the detector's 11px floor for functional text. Not a WCAG threshold: the micro step was decided at Stage 07, uppercase and tracked. Owner: backlog | Stage 10, fluid type at 360 |
| Line measure past about 80 characters at 1440 | the warning band on 6.2 (about 165), the notice on 5.1 (about 170), `.reason` (120), the method note and lede on 6.4 (109, 92) | Step 9, `/impeccable audit`. The measure is a container question, not a token | Stage 10, container and line measure |
| One word alone on the last line | 0.0 trust list and a section heading, 3.2 file line | Step 9, `/impeccable audit`, advisory: `text-wrap: pretty` or `balance` as a system rule | Stage 10 |
| A sticky contents rail on desktop | 9.x | Step 9: IA asks for a sticky left rail; grey and system draw one in-flow box | Stage 10 |
| 404, 500 and maintenance: do they take `.state` unchanged | 8.0, 8.1, 8.2, grey only | Step 9, the reader: the state page says "grey only" and nothing more | Stage 12, when they are painted |
| May the theme card stand on a second screen | 6.1, 6.4 (the IA claim, `inventory.md`, Findings) | Step 9, the reader: the page calls 2.0 "the declared exception" and the owner question from Step 2 is still open | the owner, at Stage 09 |
| "Sign out" in IA, "Log out" in microcopy | 7.3 (`ia/docs/pages/account.md:48`) | Step 9: microcopy owns the string, the IA page is synced to it | Stage 12, through microcopy |
| `microcopy.md` is per-screen rows plus a was/now log, not the unique-lines table with a "screens" column that `CLAUDE.md` describes | `voice/docs/microcopy.md` | Step 9: either the rule or the file changes. The rollout is its first heavy reader | Stage 12, before the first string is placed |
| SOC 2 Type II: planned in year 1 or year 2 | 9.2 heading, `ia/docs/pages/footer.md:16`, `microcopy.md:384` say year 2; `CLAUDE.md` says year 1 | Step 9: a fact about the company, with no source in `research/`. Not verified | the owner |

## Stage 09 Step 5: what the first screen built from the system could not find

*5.0 Evidence source and its state 5.1, assembled from `design/system/index.css` alone, with no
style on the screen and nothing added to the system on the way. What was missing is listed here
and NOT drawn in by hand; the screen shows what the existing parts make of it. Found by the
assembly and by `/impeccable critique` (two isolated assessments, a design review and the
detector). Columns as Stage 09 asks: what is missing, what it was needed for, the level of the
system that closes it, the priority. What to close and when is the owner's call.*

| # | What is missing | What it was needed for | Level | Priority |
|---|---|---|---|---|
| S5-1 | A raw item: one feedback item standing alone in full, meta above the quote with its own gap, the quote at a reading step larger than a list row, a leading hairline, a measure of about 65 to 75 characters. Not a link and no hover | 5.0, and the meta line of 5.1. Assembled from the snippet's parts (`.snippet-meta`, `.snippet-quote`) without the strip, the meta lands 0px above the quote, and the quote is 13.5px under a 22px generic title: the customer's words are smaller than "Feedback item" on the one screen whose job is the quote (`ia/docs/pages/evidence.md:50`, "readable in a meeting") | component (molecule: a new one, or a non-link form of the snippet) | **closed 2026-11-26 by the owner:** the raw item, `components/rawitem.css` and `kit/rawitem.html`, five things; 5.0 and 5.1 moved onto it |
| S5-2 | A done state for a copy action, announced in a live region, and its string ("Copied", or "Quote copied with its citation"); and what is copied: the quote alone, or the quote with source, date, segment and a link back | "Copy quote" on 5.0 changes nothing visible; "Copy" on 6.3 has the same gap. A bare quote pasted into a slide breaks "traceable or it does not exist" the moment it leaves Sift | component state (button), microcopy, IA (the payload in `ia/docs/pages/evidence.md`) | **closed 2026-11-26 by the owner:** the done form on `kit/button.html` (content, no new style), "Quote copied" and "Link copied" in `microcopy.md`, the payload (quote plus its chain) in `ia/docs/pages/evidence.md` and `ia/evidence.html`, a status region on 5.0 |
| S5-3 | The theme's confidence where 5.0 names the theme: a provenance line form "theme link plus `.conf`", and its string ("Supports theme: Onboarding is confusing, n=42 · citation 1") | the IA's defend-live surface is "n=X plus the verbatim quote" (`ia/docs/pages/evidence.md:50`); the screen has the quote and no n=X, so the count must be remembered from 4.0. Usage rule R7 covers only `.theme` rows and heads, so it did not catch this; whether R7 widens to any theme named as a claim is a decision on D2's reach | component content form (provenance list), microcopy; the owner for R7 | **closed 2026-11-26 by the owner:** R7 widened to provenance lines; the provenance list's prose form carries `.conf` (no new style); the two lines in `microcopy.md`; 5.0 and 5.1 show n=42 |
| S5-4 | An unresolved form of the citation marker and of the snippet, and its string | 5.1 says citation 7 "is flagged as unresolved" and "Sift flags it", but the flag shows nowhere: on 5.1 the marker is the same cyan as a resolved one, and 4.0 has no unresolved mark. Also "the theme still stands on its other evidence" could be a count ("its other 41 items") | component state (citation, snippet), microcopy | medium |
| S5-5 | The breadcrumb's narrow form: a back chevron plus the theme name at 360 | `ia/docs/pages/evidence.md:37` asks for it; the breadcrumb has one form, and the three-level chain fits at 360 today only because the theme name is short | component variant (breadcrumb) | medium, Stage 10 |
| S5-6 | One edition of the 5.0 author line | `microcopy.md:255` reads "Author: redacted", its own rewrite log at `:500` reads "Author: not shown"; the screen follows the grey and the log. Two editions of one line | microcopy | low, Stage 12 |

**Not rows, and why.** The closing actions were first put in a plain block on the claim that no
component existed; `.actionbar` is that component, so it was an assembly error and was fixed on
the screen. 5.1's `h1` is the state's title, which usage rule R6 forbade outside 8.0 to 8.2: the
rule was too narrow and was widened in `architecture.md` (5.1 is a screen whose whole content is
the state). The 10px section label and the 5.1 notice's line length are already rows above (the
micro step, the line measure). The theme named four times on 5.0 and the missing previous / next
item are structure, owned by IA and the grey, and are left to the owner as questions.
