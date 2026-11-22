# Backlog - Sift design system

*Stage 08 Step 6. What the reconciliation of the system with the product decided NOT to fill in
now, with the reason and the stage that closes it. One row per item, in the format the stage asks
for: what is missing, where it shows, why it is deferred, who closes it. Shown on
`design/kit/overview.html`, section "Backlog".*

*Internal document, English. No em dash anywhere in this file.*

| What is missing | Where it shows | Why it is deferred | Who closes it |
|---|---|---|---|
| The provenance list in colour | 5.0, 5.1, 3.6, all grey | The component exists (`provlist.css`, built at Step 6 from the grey anatomy); no colour screen wears it, and painting a screen is the rollout's job | Stage 12 |
| The label/value gap in the provenance list | 3.6 (`<b>Type</b> Live connection`) | The grey draws only a word space; nothing to copy, so the page marks it `[?]` | Stage 12, when 3.6 is painted |
| Whether the links in the provenance list wear `.link` | 5.0, 5.1 | The grey draws a bare `<a>` in primary ink with the browser's underline; `.link` would remove the underline, which the grey never asked for | Stage 12 |
| `.notice--error` on its screen | 3.4 Connect Intercom, "Authorization failed" (`wireframes/connect-intercom.html:50`) | The grey draws the failure as a plain notice with no tone | Stage 12 puts the modifier on |
| `.field-err` drawn on a screen | 1.0 Log in, 1.2 Reset (`wireframes/auth.html:21`, `auth-reset.html:20` name "errors on the field") | The state is named in the node but no grey page draws it | Stage 12, as a state page of 1.0 and 1.2 |
| Whether `.redacted` is used | 5.1 Evidence redacted | The inventory gives the snippet a redacted form; the grey 5.1 shows the redacted case as a notice plus a reason line, not as a mark in the meta line | Stage 12 decides; if 5.1 keeps the notice, the mark is deleted then |
| The breakpoint: 600 or 820 | the app header, the bottom tabs, the toolbar, the account shell | The grey contract switches at a 600px CANVAS (a container query on the stand); the colour layer at an 820px VIEWPORT. Both are written down, neither is wrong for its layer, and naming the breakpoints by what changes is that stage's first step | Stage 10, Responsive |
| 3.6 is not a dialog | 3.6 Source manage | The inventory lists the dialog as standing on 6.3 and 3.6; the grey 3.6 draws its confirmation as a block on the page | Stage 12 decides the form; the inventory row is corrected then |
| The selection trigger reads any checked box | `.app:has(.check:checked)` in `screen-shell.css` | Today only theme cards carry a `.check` on a screen that has a selection bar; a second kind of checkbox on such a screen would hide its head action by mistake | Stage 09, when the selection pattern is written |
| "Primary" and "Sections" | the `aria-label` of the app header's nav and the bottom tabs: "Primary" on the four 2.0 screens and in the grey, "Sections" on the other 16 colour screens | Two names for one navigation; an interface string, and those belong to `voice/docs/microcopy.md` | Stage 12, through microcopy |
| The avatar's size: 26 or 28px | the app bar, 27 screens | The grey draws 26px (`wireframes/_wf.css:146`) and the inventory says 26; `kit.css:93` and `avatar.css` draw 28px. A value, so it changes only by a decision, and the colour layer has carried 28 since Stage 07 | Stage 09, with the owner |
| `.legal-crumb` against `.breadcrumb` | 9.0, 9.1, 9.2 (grey) | Two classes for one job; the legal one is grey only | Stage 12, when 9.x is painted |
| The action bar has no `justify-content` | 3.2, 3.3, 3.6, 6.1 | Measured identical to `kit.css`; whether the buttons should sit at the end is a design question, not a migration | Stage 09 |
| The rename map rows for the grey | 31 + 23 screens in `wireframes/` | `wireframes/` is never edited after Stage 05; the map is the input of the rollout. Step 6 added one row (`.acct-card-*` to `.cardrow-*`) | Stage 12 |
