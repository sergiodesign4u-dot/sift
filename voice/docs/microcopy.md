# Microcopy inventory - Sift wireframes (Voice, Step 1)

This is the full text of the wireframe prototype (Stage 04), collected in one place before
any rewrite. It is the pre-rewrite snapshot: every interface string, by screen, zone, line, and
line type. From Step 6 on, changed rows gain "was" and "now" columns; by the end of the Voice
stage this table is the source of truth, and no string may appear in a screen that is not in this
table.

Scope: product interface text only. The prototype chrome (top bar, left page rail, roadmap
sidebar) is process scaffolding, not product UI, so it is excluded. The product language is
English (US and EU market), so the inventory is in English, the language of the strings.

Nothing here is rewritten yet. The point of one table is to see what the separate screens hide:
the same thing named differently. Those are marked inline and listed in "Divergences" at the end.

## Legend

- **Line type:** brand, nav, tab, h1, subhead, h2 (section head), button, ghost-button, link,
  field-label, placeholder, helper, state-title, state-body, notice, breadcrumb, meta, footer,
  eyebrow, table-label, option.
- **`[DIV-n]`** marks a line that is part of divergence n (see the Divergences section).
- **`[UGC]`** marks user content or synthesis output (customer quotes, theme names, brief titles,
  rationale, profile values, a user's own CSV schema). We do not rewrite these. Voice governs the
  interface around them, not the content inside them.

---

## A. Global chrome (rendered once from `_nav.js`, on every app screen)

| Zone | Line | Type |
|---|---|---|
| App header | SIFT | brand |
| App header nav | Synthesis | tab |
| App header nav | Sources | tab |
| App header nav | Briefs | tab |
| App header | Account (avatar aria-label) | nav |
| Bottom tabs | Synthesis / Sources / Briefs / Account | tab |
| App footer | Sift workspace · signal from CSV and Intercom, PII scrubbed by default | footer `[DIV-1]` `[DIV-6]` |

## B. Pre-login shell text (the light Sift bar and footer on public screens)

These are not one shared string; each public screen sets its own tagline and footer. That is the
problem: the value line and the product one-liner change from screen to screen. `[DIV-8]`

| Screen | Zone | Line | Type |
|---|---|---|---|
| Auth (log in / signup / reset) | Public bar | Feedback synthesis for product teams | subhead `[DIV-8]` |
| Home | Public bar | Turn customer feedback into decisions you can defend | subhead `[DIV-8]` |
| 500 / Maintenance | Public bar | Customer feedback, synthesized | subhead `[DIV-8]` |
| Shared brief | Public bar | Shared evidence brief · read-only | subhead |
| Privacy / Terms / Security | Public bar | Legal · Privacy Policy / Terms of Service / Security and GDPR | subhead |
| Auth (all) | Footer | Sift · Privacy · Terms | footer |
| 500 | Footer | Sift · customer feedback synthesis · we are looking into it | footer `[DIV-8]` |
| Maintenance | Footer | Sift · customer feedback synthesis · back soon | footer `[DIV-8]` |
| Legal (all) | Footer | Sift · Privacy · Terms · Security and GDPR · Home | footer |
| Shared brief | Footer | Shared with Sift · sift.app · read-only, no login required · PII scrubbed | footer |

---

## 0 Home + shell

### 0.0 Home (marketing landing) - `home.html`

| Zone | Line | Type |
|---|---|---|
| Hero | For product teams drowning in scattered signal | eyebrow |
| Hero | Turn scattered customer feedback into decisions you can defend. | h1 |
| Hero | Sift reads your support tickets, sales calls, reviews, and interviews, and gives you a ranked, evidence-backed picture of what customers need most, with every claim traceable to the quote behind it. | lead |
| Hero | Start free | button `[DIV-7]` |
| Hero | Log in | ghost-button `[DIV-7]` |
| Hero | Free plan, no card required. Start with a CSV export or connect Intercom. | helper |
| How it works | How Sift works | h2 |
| How it works | Three steps from scattered signal to a call you can stand behind. It mirrors the path you take inside the app. | subhead |
| How it works | Connect a source | h3 `[DIV-3]` |
| How it works | Import a CSV export or connect Intercom. Feedback is normalized on the way in, and PII is scrubbed by default. | body `[DIV-6]` |
| How it works | See ranked themes with confidence | h3 |
| How it works | Sift clusters the feedback into themes and shows how strong each one is, so you can tell a real pattern from a thin one. | body |
| How it works | Trace every claim to evidence | h3 |
| How it works | Open any theme to read the exact customer quotes behind it. If a claim cannot be traced, it is marked, not dressed up. | body |
| Trust strip | Built to be trusted, not taken on faith | h2 |
| Trust strip | Sift handles sensitive feedback, so the same signal shows up here and in the footer. | subhead |
| Trust strip | Transparency / Traceability / PII scrubbed by default | h3 x3 `[DIV-6]` |
| Trust strip | (three trust paragraphs) | body x3 |
| Pricing | Pricing | h2 |
| Pricing | Start free with a monthly signal limit. Upgrade when you need full coverage and traceability. Plan names, limits, and prices are early hypotheses, not final. | subhead `[DIV-1]` |
| Pricing | Free / Starter / Growth / Enterprise | tier-name x4 |
| Pricing | $0 / $30 to $60 per seat / month / Custom per seat, scales down / Custom | tier-price |
| Pricing | Up to 500 feedback items per month | feature `[DIV-1]` |
| Pricing | Theme clusters, basic synthesis / 1 integration source / ... | feature `[DIV-2]` |
| Pricing | Start free | button `[DIV-7]` |
| Pricing | See plans and limits | ghost-button |
| Footer | Turn scattered customer feedback into decisions you can defend. | footer-tag |
| Footer | Product / Legal (column heads); Start free, Log in, Privacy policy, Terms of service, Security and GDPR | footer-links |
| Footer | Sift · signal from CSV and Intercom, PII scrubbed by default · GDPR-ready, EU data residency | footer-legal `[DIV-1]` |

---

## 1 Auth - `auth.html`, `auth-signup.html`, `auth-reset.html`

| Screen | Zone | Line | Type |
|---|---|---|---|
| Log in | Card | Log in | h1 `[DIV-7]` |
| Log in | Card | Turn scattered customer feedback into clear, prioritized decisions, with the evidence to defend every call. | value |
| Log in | Field | Work email | field-label |
| Log in | Field | alex@northwind.io | placeholder `[UGC]` |
| Log in | Field | Password / Forgot password | field-label / link |
| Log in | Field | Your password | placeholder |
| Log in | Button | Log in | button `[DIV-7]` |
| Log in | Divider | or | helper |
| Log in | Button | Continue with SSO | ghost-button |
| Log in | Switch | New to Sift? Sign up | link `[DIV-7]` |
| Sign up | Card | Create your account | h1 `[DIV-7]` |
| Sign up | Card | Sift turns support tickets, sales calls, reviews, and interviews into themes you can trace back to the customer voices behind them. See which problems have the most signal. | value |
| Sign up | Field | Work email / alex@northwind.io | field-label / placeholder `[UGC]` |
| Sign up | Field | Create a password / At least 8 characters | field-label / placeholder |
| Sign up | Button | Create workspace | button `[DIV-7]` |
| Sign up | Button | Continue with SSO | ghost-button |
| Sign up | Switch | Already have an account? Log in | link `[DIV-7]` |
| Reset | Card | Reset password | h1 |
| Reset | Card | Enter the email on your account and we will send a link to set a new password. | value |
| Reset | Step | Step 1 · Request a reset | eyebrow |
| Reset | Field | Work email / alex@northwind.io | field-label / placeholder `[UGC]` |
| Reset | Button | Send reset link | button |
| Reset | Step | Step 2 · Reset link sent | eyebrow |
| Reset | Card | Check your inbox | h2 |
| Reset | Body | If an account exists for that email, we have sent a link to reset your password. Open it to continue. The link expires in 30 minutes. | body |
| Reset | Step | Step 3 · Set a new password | eyebrow |
| Reset | Card | Choose a new password | h2 |
| Reset | Field | New password / At least 8 characters | field-label / placeholder |
| Reset | Field | Confirm new password / Re-enter your new password | field-label / placeholder |
| Reset | Button | Set new password | button |
| Reset | Switch | Back to log in | link |

---

## 2 Synthesis - `synthesis.html` (+ empty / loading / error)

| Screen | Zone | Line | Type |
|---|---|---|---|
| Synthesis | Toolbar | Source: all / Last 30 days / Confidence: all | filter-chip |
| Synthesis | Toolbar | Sort: signal rank | sort-label `[DIV-1]` |
| Synthesis | Toolbar (compact) | Filter / signal rank | chip / sort-label |
| Synthesis | Head | Synthesis | h1 |
| Synthesis | Head | Your feedback, clustered into ranked themes. Open one to trace the evidence behind it. | subhead `[DIV-1]` |
| Synthesis | Theme card | Onboarding is confusing / Slow export on large accounts / ... (6 themes) | theme-label `[UGC]` |
| Synthesis | Theme card | CSV, Intercom · latest signal 2 days ago (meta per card) | meta `[DIV-1]` |
| Synthesis | Theme card | n=42 / n=28 / n=19 / n=14 / n=6 / n=4 | confidence |
| Synthesis | Theme card | low signal (on n=6, n=4) | badge |
| Synthesis | Action bar | 1 theme selected | helper |
| Synthesis | Action bar | Set priority | ghost-button `[DIV-12]` |
| Synthesis | Action bar | Build brief | button `[DIV-5]` |
| Empty (2.1) | State | No sources connected yet | state-title `[DIV-11]` |
| Empty (2.1) | State | Connect a source to see your first synthesis. Sift clusters your feedback into ranked themes, each with the evidence behind it. Your data is PII scrubbed by default. | state-body `[DIV-6]` |
| Empty (2.1) | State | Connect a source | button `[DIV-3]` |
| Loading (2.2) | Head | Synthesis | h1 |
| Loading (2.2) | Head | Synthesizing your feedback. Ingesting, scrubbing PII, and clustering into themes. | subhead `[DIV-6]` |
| Error (2.3) | State | Synthesis failed | state-title |
| Error (2.3) | State | We could not build the picture this time. Your sources are still connected, so nothing is lost. Try again, or check your sources. | state-body |
| Error (2.3) | State | Go to Sources | ghost-button |
| Error (2.3) | State | Retry | button `[DIV-4]` |

---

## 3 Sources / ingestion - `sources.html` (+ empty / manage / sync-error / connect / connect-csv / connect-intercom)

| Screen | Zone | Line | Type |
|---|---|---|---|
| Sources | Toolbar | Status: all / Type: all | filter-chip |
| Sources | Toolbar | Add source | button `[DIV-3]` |
| Sources | Head | Sources | h1 |
| Sources | Head | 2 sources connected, 3,750 items in. Every source is PII scrubbed by default. | subhead `[DIV-1]` `[DIV-6]` |
| Sources | Row | CSV import / Batch import | source-name / type `[DIV-2]` |
| Sources | Row | Intercom / Live connection | source-name / type `[DIV-2]` |
| Sources | Row labels | Status / Items / Imported / Last sync / PII scrub | table-label `[DIV-1]` |
| Sources | Row values | Imported / Synced / 840 / 2,910 / 2 days ago / On | value |
| Sources | Row | Manage | link/button |
| Empty (3.4) | State | No sources connected | state-title `[DIV-11]` |
| Empty (3.4) | State | Connect a source to bring your feedback in. Sift normalizes it, scrubs PII by default, then clusters it into ranked themes with the evidence behind each one. | state-body `[DIV-6]` |
| Empty (3.4) | State | Connect a source | button `[DIV-3]` |
| Connect (3.1) | Head | Connect a source | h1 `[DIV-3]` |
| Connect (3.1) | Head | Pick where your feedback lives. Sift normalizes and clusters it after it comes in. | subhead |
| Connect (3.1) | Card | CSV upload / Upload a file. A one-off import batch, mapped to Sift fields. | source-name / method |
| Connect (3.1) | Card | Intercom / Connect with OAuth. A live connection that syncs new conversations. | source-name / method `[DIV-2]` |
| Connect (3.1) | Card | Zendesk / Gong · Later · Same connection pattern as Intercom. Coming later. | source-name / method |
| Connect (3.1) | Notice | PII is scrubbed by default on every source. Names and email addresses in your feedback are redacted before synthesis. You can review this in Data and privacy. | notice `[DIV-6]` |
| Connect (3.1) | Action | Back to sources | ghost-button |
| CSV (3.2) | Head | Import a CSV | h1 |
| CSV (3.2) | Head | Upload your file, then map each column to a Sift field. PII is scrubbed on the way in. | subhead `[DIV-6]` |
| CSV (3.2) | Drop | Drop your CSV here / or choose a file from your computer / Choose file | drop-title / drop-sub / button |
| CSV (3.2) | File | feedback-export.csv, 840 rows, 5 columns detected. | helper `[UGC]` |
| CSV (3.2) | Section | Map columns | h2 |
| CSV (3.2) | Map head | Source column / Sift field | table-label |
| CSV (3.2) | Map rows | customer_message, created_at, channel, email, priority | source-column `[UGC]` |
| CSV (3.2) | Options | Feedback text / Date / Source channel / Contact (PII scrubbed) / Rating / Do not import / Choose a field | option `[DIV-1]` `[DIV-6]` |
| CSV (3.2) | Notice | 1 column is not mapped. "priority" has no Sift field yet. Map it or set it to Do not import before you import. | notice |
| CSV (3.2) | Action | 1 column unmapped / Back to chooser / Import 840 items | helper / ghost-button / button `[DIV-1]` |
| Intercom (3.3) | Head | Connect Intercom | h1 |
| Intercom (3.3) | Head | Authorize Sift to read your Intercom conversations. Feedback is normalized and PII scrubbed on the way in. | subhead `[DIV-6]` |
| Intercom (3.3) | Notice | Authorization failed. Intercom did not confirm access, so nothing was connected. Check that you approved the request in the Intercom window, then try again. | notice |
| Intercom (3.3) | Panel | Authorize Sift / When you continue, Intercom opens its approval window. Sift will be allowed to: | h2 / body |
| Intercom (3.3) | Scopes | Read conversations and their tags / Sync new conversations as they arrive / Scrub names and email addresses before synthesis | list `[DIV-6]` |
| Intercom (3.3) | Action | Retry authorization | button `[DIV-4]` |
| Intercom (3.3) | Action | Back to chooser | ghost-button |
| Sync-error (3.5) | Head | Intercom sync failed | h1 |
| Sync-error (3.5) | Head | Sift could not reach Intercom on the last sync, so new feedback since 2 days ago has not come in. The source may be unavailable, or the connection may need reauthorizing. | subhead `[DIV-2]` |
| Sync-error (3.5) | Notice | Affected themes: 3 themes cite Intercom evidence, including "Onboarding is confusing" and "Slow export on large accounts". Existing citations still resolve, only new signal is paused until the sync recovers. | notice `[UGC]` |
| Sync-error (3.5) | Action | Last successful sync 2 days ago / Manage source / Retry sync | helper / ghost-button / button `[DIV-4]` |
| Manage (3.6) | Head | Manage Intercom | h1 |
| Manage (3.6) | Head | Live connection, synced 2 days ago. PII is scrubbed by default. | subhead `[DIV-2]` `[DIV-6]` |
| Manage (3.6) | Section | Source detail | h2 |
| Manage (3.6) | Detail labels | Type / Status / Items / Last sync / PII scrub | table-label `[DIV-1]` |
| Manage (3.6) | Detail values | Live connection, OAuth / Synced / 2,910 / 2 days ago / On, default | value `[DIV-2]` |
| Manage (3.6) | Section | Re-import | h2 |
| Manage (3.6) | Body | Pull the history from Intercom again. Existing items are de-duplicated and PII is scrubbed on the way in. | body `[DIV-6]` |
| Manage (3.6) | Button | Re-import from Intercom | ghost-button |
| Manage (3.6) | Section | Disconnect | h2 |
| Manage (3.6) | Body | Disconnecting stops the live sync and removes the connection. Imported feedback and existing citations stay, but no new signal comes in. | body `[DIV-2]` |
| Manage (3.6) | Buttons | Cancel / Disconnect Intercom | ghost-button / button |

---

## 4 Theme detail - `theme.html` (+ low-signal / loading / error)

| Screen | Zone | Line | Type |
|---|---|---|---|
| Theme | Breadcrumb | Synthesis › Onboarding is confusing | breadcrumb `[UGC]` |
| Theme | Head | Onboarding is confusing | h1 `[UGC]` |
| Theme | Head meta | n=42 · latest signal 2 days ago · CSV, Intercom | meta `[DIV-1]` |
| Theme | Head | New users cannot tell what to do first. The setup steps, the empty first-run screen, and the initial import are the most cited points of friction. | subhead `[UGC]` |
| Theme | Head | Add to brief | button `[DIV-5]` |
| Theme | Section | Evidence · 42 items | h2 `[DIV-1]` |
| Theme | Snippet | (6 verbatim customer quotes) | quote `[UGC]` |
| Theme | Snippet meta | 1 · Intercom · 2 days ago · Customer, mid-market | meta `[UGC]` |
| Low-signal (4.1) | Head | Wants Salesforce integration / n=6 · low signal | h1 / meta `[UGC]` |
| Low-signal (4.1) | Notice | Thin evidence. Six mentions is a weak signal, not a confirmed pattern. Treat it as a lead to watch, not a decision. The items are still fully open below. | notice `[DIV-1]` |
| Low-signal (4.1) | Section | Evidence · 6 items | h2 `[DIV-1]` |
| Loading | Section | Evidence · loading | h2 |
| Error | State | Could not load this theme | state-title |
| Error | State | The evidence for this theme did not come back this time. Nothing is lost. Try again, or go back to the ranked themes. | state-body |
| Error | State | Back to Synthesis / Retry | ghost-button / button `[DIV-4]` |

---

## 5 Evidence source - `evidence.html` (+ redacted)

| Screen | Zone | Line | Type |
|---|---|---|---|
| Evidence | Breadcrumb | Synthesis › Onboarding is confusing › Evidence | breadcrumb `[UGC]` |
| Evidence | Head | Feedback item | h1 `[DIV-1]` |
| Evidence | Head | The raw customer voice behind "Onboarding is confusing", in context. | subhead `[UGC]` |
| Evidence | Raw meta | 1 · Intercom · 2 days ago · Customer, mid-market | meta `[UGC]` |
| Evidence | Raw quote | (the full verbatim item) | quote `[UGC]` |
| Evidence | Section | Provenance | h2 |
| Evidence | Provenance | Source: Intercom connection · synced 2 days ago | list `[DIV-2]` |
| Evidence | Provenance | Author: redacted (PII scrubbed by default) · segment: mid-market | list `[DIV-6]` |
| Evidence | Provenance | Supports theme: Onboarding is confusing · citation 1 | list |
| Evidence | Action | Back to theme / Copy quote | ghost-button / button |
| Redacted (5.1) | Raw meta | Intercom · 9 days ago | meta |
| Redacted (5.1) | Head | This item cannot be shown | state-title |
| Redacted (5.1) | Body | The raw quote was scrubbed beyond display to protect personal data, so it is not available. Rather than show a broken or fabricated quote, Sift flags it. The theme still stands on its other evidence. | state-body `[DIV-6]` |
| Redacted (5.1) | Section | Affected citation | h2 |
| Redacted (5.1) | List | Theme: Onboarding is confusing · citation 7 is flagged as unresolved | list |
| Redacted (5.1) | List | Reason: PII scrubbed beyond display (GDPR) | list `[DIV-6]` |
| Redacted (5.1) | List | Source: Intercom connection · synced 9 days ago | list `[DIV-2]` |
| Redacted (5.1) | Action | Back to theme | button |

---

## 6 Decide and defend / Briefs - `briefs.html` (+ empty / build-brief / thin-warning / share-link / share-link-loading / shared-brief)

| Screen | Zone | Line | Type |
|---|---|---|---|
| Briefs | Head | Briefs | h1 `[DIV-10]` |
| Briefs | Head | Saved briefs package your themes, evidence, and a recommended priority into a link a stakeholder can read and challenge without a Sift seat. | subhead |
| Briefs | Head | New brief | button `[DIV-5]` |
| Briefs | Row | Q3 roadmap: what customers need most / 3 themes · shared 2 days ago | brief-title / meta `[UGC]` |
| Briefs | Row | Onboarding deep-dive / 1 theme · created 1 week ago | brief-title / meta `[UGC]` |
| Briefs | Status | Shared / Draft | badge |
| Briefs | Actions | View / Edit | ghost-button |
| Empty (6.5) | State | No briefs yet | state-title |
| Empty (6.5) | State | A brief packages your top themes, their evidence, and a recommended priority into a link a stakeholder can read and challenge without a Sift seat. Build one before your next roadmap session. | state-body |
| Empty (6.5) | State | Build first brief | button `[DIV-5]` |
| Build (6.1) | Head | Build evidence brief | h1 `[DIV-5]` `[DIV-10]` |
| Build (6.1) | Head | Pick the themes to include, set a recommended priority, then generate a link your stakeholders can read without a login. | subhead |
| Build (6.1) | Section | Select themes | h2 |
| Build (6.1) | Theme rows | (canonical theme cards) | theme-label `[UGC]` |
| Build (6.1) | Section | Recommended priority | h2 `[DIV-12]` |
| Build (6.1) | Priority list | 1 Onboarding is confusing n=42 ... | list `[UGC]` |
| Build (6.1) | Field | Rationale (why this order) | field-label |
| Build (6.1) | Field | Onboarding blocks activation for every new account, so it leads. Export and billing are high volume but affect existing users, so they follow. | textarea `[UGC]` |
| Build (6.1) | Action | 3 themes selected / Save draft / Generate share link | helper / ghost-button / button |
| Thin-warning (6.2) | Notice | One selected theme is low signal. Label it, do not hide it. A stakeholder should see it is a weak signal, not a confirmed pattern. You can still include it. | notice |
| Thin-warning (6.2) | Theme meta | CSV · latest signal 12 days ago · flagged low signal | meta `[UGC]` |
| Thin-warning (6.2) | Action | 3 themes selected · 1 low signal / Review selection / Label and generate link | helper / ghost-button / button `[DIV-5]` |
| Share-link (6.3) | Dialog | Share link ready | h1 |
| Share-link (6.3) | Dialog | Anyone with this link can read the brief. No login needed to view, and the data is PII scrubbed like everywhere else. | body `[DIV-6]` |
| Share-link (6.3) | Field | https://sift.app/b/7fq2-k9xa | value `[UGC]` |
| Share-link (6.3) | Action | Copy / Done / Preview brief | button / ghost-button / button |
| Share-link loading | Dialog | Generating share link | h1 |
| Share-link loading | Dialog | Publishing the brief and creating a public link. This takes a moment. | body |
| Share-link loading | Action | Continue | button |
| Shared brief (6.4) | Bar | Shared evidence brief · read-only | subhead `[DIV-10]` |
| Shared brief (6.4) | Head | Evidence brief · no login required | eyebrow |
| Shared brief (6.4) | Head | Q3 roadmap: what customers need most | h1 `[UGC]` |
| Shared brief (6.4) | Head | Built from 3,750 feedback items across CSV and Intercom, PII scrubbed. Prepared by the product team. Every theme below links back to the customer voices behind it. | subhead `[DIV-1]` `[DIV-6]` |
| Shared brief (6.4) | Section | Recommended priority | h2 `[DIV-12]` |
| Shared brief (6.4) | Section | Themes and evidence | h2 |
| Shared brief (6.4) | Theme blocks | (3 theme titles, summaries, and verbatim quotes) | h3 / body / quote `[UGC]` |

---

## 7 Account / settings - `account.html` (+ plan / data / profile)

| Screen | Zone | Line | Type |
|---|---|---|---|
| Account | Head | Account | h1 |
| Account | Head | Your plan, your data controls, and your profile for the Northwind workspace. | subhead `[UGC]` |
| Account | Identity | Alex Rivera / alex@northwind.io · Northwind workspace | id `[UGC]` |
| Account | Nav | Account / Plan and limits / Data and privacy / Profile | nav |
| Account | Card | Plan and limits / Free plan. 3,750 of 5,000 items used this month. Review usage and upgrade. | card-title / body `[DIV-1]` |
| Account | Card | Data and privacy / PII scrub on by default, EU data residency, export or delete your data. | card-title / body `[DIV-6]` |
| Account | Card | Profile / Your name, email, and password. Sign out of this workspace. | card-title / body |
| Plan (7.1) | Head | Plan and limits | h1 |
| Plan (7.1) | Head | Your current plan and this month's signal usage for the Northwind workspace. | subhead `[DIV-1]` `[UGC]` |
| Plan (7.1) | Section | Current plan / Free | h2 / value |
| Plan (7.1) | Body | Basic synthesis with theme clusters, one integration source, up to 5,000 signal items a month. | body `[DIV-1]` `[DIV-2]` |
| Plan (7.1) | Section | Signal volume this month | h2 `[DIV-1]` |
| Plan (7.1) | Meter | 3,750 of 5,000 items this month. 1,250 remaining. | meta `[DIV-1]` |
| Plan (7.1) | Notice | You are close to the free monthly limit. Upgrade to keep every source flowing and unlock full evidence traceability. | notice |
| Plan (7.1) | Action | Free plan / Upgrade plan | helper / button |
| Data (7.2) | Head | Data and privacy | h1 |
| Data (7.2) | Head | How Sift handles the feedback you import, and the controls you have over your data. | subhead |
| Data (7.2) | Section | Privacy | h2 |
| Data (7.2) | Row | Scrub PII by default / Names and email addresses in imported feedback are redacted on ingest. On by default for every source. | row-title / body `[DIV-6]` |
| Data (7.2) | Row | Data residency / Your workspace data is stored in the United States. EU data residency is available for European teams. | row-title / body |
| Data (7.2) | Section | Your data | h2 |
| Data (7.2) | Row | Export data / Download your feedback, themes, and briefs. Meets GDPR and CCPA access requests. | row-title / body |
| Data (7.2) | Row | Delete account / Permanently remove this workspace and all its data. You will be asked to confirm. | row-title / body |
| Data (7.2) | Link | Read how Sift stores and protects your data on the Security and GDPR page. | link |
| Data (7.2) | Buttons | Export data / Delete account / Save data settings | button |
| Profile (7.3) | Head | Profile | h1 |
| Profile (7.3) | Head | Your name, email, and password for the Northwind workspace. | subhead `[UGC]` |
| Profile (7.3) | Fields | Name / Email / Password | field-label |
| Profile (7.3) | Values | Alex Rivera / alex@northwind.io / (password) | value `[UGC]` |
| Profile (7.3) | Actions | Sign out / Save changes | ghost-button / button |

---

## 8 System - `404.html`, `500.html`, `maintenance.html`

| Screen | Zone | Line | Type |
|---|---|---|---|
| 404 (8.0) | State | Page not found | state-title |
| 404 (8.0) | State | The page you are looking for does not exist or has moved. Nothing in your workspace is lost. Head back to your synthesis, or start from home. | state-body |
| 404 (8.0) | State | Home / Go to Synthesis | ghost-button / button |
| 500 (8.1) | State | Something went wrong | state-title `[DIV-9]` |
| 500 (8.1) | State | A server error stopped this from loading. This is on our side, not yours, and your sources and data are safe. Try again in a moment, or contact us if it keeps happening. | state-body |
| 500 (8.1) | State | Contact support / Try again | ghost-button / button `[DIV-4]` |
| Maintenance (8.2) | State | Down for maintenance | state-title |
| Maintenance (8.2) | State | Sift is briefly offline for planned maintenance. Your workspace and data are safe. We expect to be back shortly, please check again in a few minutes. | state-body |
| Maintenance (8.2) | Notice | This is planned downtime. Nothing to do on your end, just retry later. | notice |
| Maintenance (8.2) | State | Try again | ghost-button `[DIV-4]` |

---

## 9 Content / legal - `privacy.html`, `terms.html`, `security.html`

These are long-form legal prose. Inventoried at the heading and intro level; the body paragraphs
are legal content, tuned with counsel, not microcopy the Voice stage rewrites. Voice governs the
headings, the crumb, the intro line, and the related links.

| Screen | Zone | Line | Type |
|---|---|---|---|
| Privacy (9.0) | Crumb | Home › Legal › Privacy Policy | breadcrumb |
| Privacy (9.0) | Head | Privacy Policy / Last updated 19 July 2026 | h1 / meta |
| Privacy (9.0) | Intro | This policy explains what data Sift handles when you turn scattered customer feedback into product decisions, how we protect it, and the rights you have over it. ... | intro |
| Privacy (9.0) | TOC / h2 | Data we handle / PII scrubbing / Cookies / Your rights (GDPR and CCPA) / Contact | h2 `[DIV-6]` |
| Privacy (9.0) | Related | Terms of Service / Security and GDPR / Home | link |
| Terms (9.1) | Head | Terms of Service / Last updated 19 July 2026 | h1 / meta |
| Terms (9.1) | Intro | These terms govern your use of Sift. By creating an account or using the product, you agree to them. ... | intro |
| Terms (9.1) | h2 | The agreement / Acceptable use / Liability / Changes / Contact | h2 |
| Security (9.2) | Head | Security and GDPR / Last updated 19 July 2026 | h1 / meta |
| Security (9.2) | Intro | How Sift protects your data, where it can be stored, and how to put an agreement in place. ... | intro |
| Security (9.2) | h2 | Security posture / SOC 2 (planned, year 2) / Data residency (EU option) / Request a DPA / Contact | h2 |

---

## Divergences (the payload of Step 1)

Where the separate screens say the same thing differently. Step 3 (Dictionary) and Step 4
(Microcopy rules) resolve each of these to one canonical form; the number is the handle.

- **DIV-1. The unit of feedback has four names.** "feedback item" (Evidence h1, Home pricing,
  Shared brief), "signal item" / "signal" (Account plan, Sort: signal rank, appfoot, "signal
  volume"), plain "item" (Sources, CSV import, Build, Evidence count), and "feedback"
  (Synthesis subhead, "bring your feedback in"). Same object, one canonical noun needed.
- **DIV-2. The connectable thing has three names.** "source" (Sources, Connect a source, "every
  source"), "integration" (plan and pricing: "1 integration source", "3 integrations"), and
  "connection" (Manage, "Live connection", "removes the connection"). One canonical term needed,
  with a rule for the customer-facing plan copy.
- **DIV-3. Bring-data-in CTA:** "Connect a source" (Synthesis empty, Sources empty, Connect head,
  Home step) versus "Add source" (Sources toolbar). Same action, two labels.
- **DIV-4. Retry action:** "Retry" (Synthesis error, Theme error), "Try again" (500,
  Maintenance), "Retry sync" (Sources sync-error), "Retry authorization" (Intercom). One base
  verb, qualified by object where needed.
- **DIV-5. Create-a-brief action:** "Build brief" (Synthesis), "New brief" (Briefs list), "Build
  first brief" (Briefs empty), "Add to brief" (Theme), "Build evidence brief" (Build h1), "Label
  and generate link" (thin-warning). Related actions that need a consistent verb and object.
- **DIV-6. The PII action has three verbs:** "scrub" (most places), "redact" (Connect notice,
  Data and privacy, Evidence author), "strip" (Home trust strip). Plus mixed phrasing "PII
  scrubbed" / "PII is scrubbed" / "scrubs PII" / "PII scrub: On". One verb, one canonical phrase.
- **DIV-7. Auth verbs.** Log in: "Log in" (label) is consistent, but the body says "sign you in"
  / "Sign out". Sign up: the h1 is "Create your account", the button is "Create workspace", the
  switch link is "Sign up", the marketing CTA is "Start free". One canonical pair (log in / sign
  up) and a rule for the workspace-creation button.
- **DIV-8. Pre-login value tagline changes per screen:** "Feedback synthesis for product teams"
  (Auth), "Turn customer feedback into decisions you can defend" (Home), "Customer feedback,
  synthesized" (500, Maintenance, and the footer "customer feedback synthesis"). One product
  one-liner needed.
- **DIV-9. AI cliche on 500:** "Something went wrong" is the exact stock phrase the Voice stage
  removes. The body below it is already honest and specific; the title should match.
- **DIV-10. "brief" vs "evidence brief":** the list and nav say "brief" / "Briefs" / "New brief";
  the build screen and the public artifact say "evidence brief" / "Shared evidence brief". Decide
  the canonical noun and where the fuller form is used.
- **DIV-11. Two headings for "no sources":** "No sources connected yet" (Synthesis empty) and "No
  sources connected" (Sources empty). Near-duplicate; align or deliberately differentiate.
- **DIV-12. Priority named two ways:** the Synthesis action is "Set priority" (a verb-action),
  the brief calls it "Recommended priority" (a noun-label). Decide the term and whether the
  Synthesis button keeps the "Set priority" action name.

## User content and synthesis output (do not rewrite) `[UGC]`

Voice governs the interface around these, never the text inside them:

- **Verbatim customer quotes** on Theme, Evidence, and Shared brief (the trust chain rests on
  them being real and unedited).
- **Theme names** (Onboarding is confusing, Slow export on large accounts, ...) and their summary
  sentences: synthesis output, shown as produced.
- **Brief titles** (Q3 roadmap: what customers need most; Onboarding deep-dive): user-named.
- **Rationale** textarea content on Build brief: user-authored.
- **Profile and identity values** (Alex Rivera, alex@northwind.io, Northwind workspace) and the
  sample share URL: user data.
- **A user's own CSV schema** (feedback-export.csv, and the column names customer_message,
  created_at, channel, email, priority): the customer's data, not our labels. The Sift-field
  option names in the mapping dropdown ARE ours and are in scope.

---

## Rewrite log (was / now)

Every line changed while rewriting screens to `voice.md`, accumulated across Steps 6 and 7. This is
the "was / now" record the stage requires. A screen may also carry lines that were already on voice
and were kept as is; those are not logged here, only the changes are.

### Step 6 - etalon: 2.0 Synthesis (base, empty, loading, error)

| Screen | Zone | Was | Now | Rule |
|---|---|---|---|---|
| 2.0 Synthesis | Theme card meta (x6) | latest signal 2 days ago | latest feedback 2 days ago | DIV-1. "signal" is reserved for "low signal" and "signal rank"; recency uses the feedback vocabulary. |
| 2.1 Synthesis empty | State title | No sources connected yet | Nothing to synthesize yet | DIV-11. Fits the Synthesis screen and separates it from the Sources-empty title "No sources connected". |
| 2.3 Synthesis error | Recovery button | Retry | Try again | DIV-4. One recovery label across the product. |

Kept as already on voice (the etalon was written to the grey contract with a level voice): the
subhead "Your feedback, clustered into ranked themes. Open one to trace the evidence behind it.";
the filter chips ("Source: all", "Last 30 days", "Confidence: all", "Sort: signal rank"); the
action bar ("Set priority", "Build brief"); the empty-state body and CTA "Connect a source"; the
whole loading line "Synthesizing your feedback. Ingesting, scrubbing PII, and clustering into
themes."; and the error body "We could not build the picture this time. Your sources are still
connected, so nothing is lost."

Deferred to Step 7 (global chrome, changes every screen so it rolls out with the fanout): the app
footer "Sift workspace · signal from CSV and Intercom, PII scrubbed by default" (DIV-1, "signal" to
"feedback").

### Step 7 - rollout to the remaining screens

Rolled out by eight subagents, one per screen cluster, each writing to `voice.md`, then reconciled
by a grep sweep for cross-screen consistency. Global chrome and a few volume-sense "signal" lines
the cluster agents did not own were fixed in the reconcile.

| Screen | Zone | Was | Now | Rule |
|---|---|---|---|---|
| 0.0 Home | trust strip | Names and email addresses are stripped from feedback | ... are scrubbed from feedback | DIV-6 |
| 0.0 Home | pricing Free | 1 integration source | 1 source | DIV-2 |
| 0.0 Home | pricing Starter | 3 integrations, 1 to 3 seats | 3 sources, 1 to 3 seats | DIV-2 |
| 0.0 Home | pricing Growth | All integrations, 5 to 15 seats | All sources, 5 to 15 seats | DIV-2 |
| 0.0 Home | pricing subhead | a monthly signal limit | a monthly feedback limit | DIV-1 |
| 0.0 Home | pricing Starter feature | Unlimited signal volume | Unlimited feedback volume | DIV-1 |
| 0.0 Home | footer legal | signal from CSV and Intercom | feedback from CSV and Intercom | DIV-1 |
| 1.0 Auth (x3) | public-bar tagline | Feedback synthesis for product teams | Turn customer feedback into decisions you can defend. | DIV-8 |
| 1.0 Auth signup | h1 | Create your account | Create your workspace | DIV-7 |
| 3.0 Sources | toolbar button | Add source | Connect a source | DIV-3 |
| 3.1 Connect | PII notice | ... are redacted before synthesis | ... are scrubbed before synthesis | DIV-6 |
| 3.3 Intercom | authorize button | Retry authorization | Try again | DIV-4 |
| 3.5 Sync error | notice | only new signal is paused | only new feedback is paused | DIV-1 |
| 3.5 Sync error | button | Retry sync | Try again | DIV-4 |
| 3.6 Manage | disconnect warning | but no new signal comes in | but no new feedback comes in | DIV-1 |
| 4.0 Theme (base, low-signal, loading) | header meta | latest signal | latest feedback | DIV-1 |
| 4.0 Theme error | button | Retry | Try again | DIV-4 |
| 5.0 Evidence | provenance author | Author: redacted | Author: not shown | DIV-6 |
| 6.0 Briefs | button | New brief | Build brief | DIV-5 |
| 6.5 Briefs empty | CTA | Build first brief | Build your first brief | DIV-5 |
| 6.1 Build brief (base, thin) | h1 | Build evidence brief | Build a brief | DIV-5, DIV-10 |
| 6.1 Build brief (base, thin) | theme meta | latest signal | latest feedback | DIV-1 |
| 7.0 Account | profile card | Sign out of this workspace | Log out of this workspace | DIV-7 |
| 7.1 Plan | subhead | this month's signal usage | this month's feedback usage | DIV-1 |
| 7.1 Plan | plan body | one integration source ... 5,000 signal items | one source ... 5,000 feedback items | DIV-2, DIV-1 |
| 7.1 Plan | section heading | Signal volume this month | Feedback this month | DIV-1 |
| 7.2 Data and privacy | scrub row | are redacted on ingest | are scrubbed on ingest | DIV-6 |
| 7.3 Profile | button | Sign out | Log out | DIV-7 |
| 8.1 500 | public-bar | Customer feedback, synthesized | Customer feedback synthesis. | DIV-8 |
| 8.1 500 | state title | Something went wrong | Could not load this page | DIV-9 |
| 8.2 Maintenance | public-bar | Customer feedback, synthesized | Customer feedback synthesis. | DIV-8 |
| 8.2 Maintenance | notice | ... on your end, just retry later | ... on your end, check back shortly | Forbidden: minimizer "just" |
| 9.0 Privacy | data-we-handle | This is the raw signal Sift clusters | This is the raw feedback Sift clusters | DIV-1 |
| 9.1 Terms | agreement | the Free plan carries a monthly signal limit | ... a monthly feedback limit | DIV-1 |
| Global chrome (`_nav.js`) | app footer | signal from CSV and Intercom | feedback from CSV and Intercom | DIV-1 |

Kept intentionally:
- "Wants Salesforce integration" (theme name) and the quote "Any plan for a Salesforce
  integration?": user content, the customer's own word for a feature, not our source-type term.
- "just" inside customer quotes on Theme, Evidence, and Shared brief: verbatim, untouched.
- Allowed "signal" uses: "low signal", "signal rank", "weak signal", "strong signal", "most
  signal", "scattered signal" (brand or evidence-strength senses, per the Dictionary).
- The one "Build evidence brief" left is in a source comment (the IA node name 6.1), not visible
  copy.

### Consistency after reconcile (verified by grep)

Zero residual: integration (our sense), redacted, stripped, "Add source", "latest signal",
"Sign out", "Create your account", "Something went wrong", "successfully", the old taglines, and
signal-as-volume. Action labels uniform: "Try again" on all six recover surfaces (no "Retry"),
"Connect a source" everywhere (no "Add source"), "Log out" (no "Sign out"). No em dash anywhere.

### Step 8 - audit fixes

The audit found five items; two were fixed, three accepted with rationale.

| Screen | Zone | Was | Now | Rule |
|---|---|---|---|---|
| 8.2 Maintenance | body | We expect to be back shortly, please check again in a few minutes. | We expect to be back shortly. Check back in a few minutes. | Forbidden: filler "please". |
| 0.0 Home | trust-strip subhead | so the same signal shows up here and in the footer | so the same commitments appear here and in the footer | DIV-1: "signal" used loosely; clarity. |

Accepted (not defects): "Done" on the share-link success dialog and "Continue" on the share-link
loading dialog (idiomatic finish and transit affordances); "Please read them alongside ..." in the
Terms intro (legal register, a genuine ask).
