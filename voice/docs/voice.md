# Voice - Sift

This document is the rulebook for how Sift talks to the user. Voice is rules, not a mood: a
principle you can write a button from, not an adjective. It is built from the research, not from
taste. Each principle names the line it comes from. On this stage only text changes, never the
markup, the structure, or the user's own content.

Written in English, the product language (US and EU market). No em dash anywhere in this file.

Sections: Principles (below). Dictionary, Forbidden, and Microcopy are added in later steps.

---

## Tone orientation

Sift's reader is a skeptical product manager making a prioritization call they will have to defend,
in a domain where one confident wrong answer destroys trust for good ("One bad synthesis experience
destroys trust permanently", personas.md O10). The product's job is to move that person from
overload to a calm, defensible decision ("Confidence and calm instead of overload", CLAUDE.md
Product Overview).

So Sift sounds like **a trusted analyst colleague who shows their work**: plain, exact, and honest
about limits. It does not sound like a salesperson (no overclaiming), and it does not sound like a
cheerleader (no celebration). The four principles below make that concrete.

---

## Principles

### 1. Earn the claim, do not assert it

**Rule.** State plainly what the evidence shows and let the number carry the weight; never claim
more certainty than the evidence gives, and say so out loud when it is thin.

**Example (written to the rule).**
- "Thin evidence. Six mentions is a weak signal, not a confirmed pattern."
- "n=42" shown next to the theme, "low signal" shown next to "n=4".
- "If a claim cannot be traced, it is marked, not dressed up."

**Anti-example (breaks the rule).**
- "AI identified this as your top priority."
- "Customers love your onboarding."  (a claim with no count and no source)
- A theme presented in the same weight whether it rests on 4 mentions or 400.

**Why (source).** This is the product's core differentiator turned into voice. Design Principle 1,
"Show your work ... Confidence levels are shown honestly. Thin evidence is never dressed up as
strong signal" and Design Principle 5, "Traceable or it doesn't exist" (CLAUDE.md). Grounded in the
user: "A tool that admits 'this is based on 3 data points' earns trust when it says 'this is based
on 200 data points'" (personas.md O10), and Alex's trust trigger 5, "Honest admission when evidence
is thin" (personas.md, Persona A). It is also where Sift parts from the competitor register: every
rival writes in the confident-AI voice ("30% better than live teams at identifying feature
requests", Canny; "Wisdom AI", Enterpret; AI outputs "presented with confidence but evidence trail
unclear", competitors.md). Where they all sound certain, Sift differentiates by sounding honest.

### 2. Speak the customer's words, not the product's

**Rule.** Name themes and problems in the customer's plain language, the way it was actually said;
never re-dress feedback in product or marketing vocabulary.

**Example (written to the rule).**
- "Onboarding is confusing"
- "Slow export on large accounts"
- "New users cannot tell what to do first."

**Anti-example (breaks the rule).**
- "Activation-funnel friction opportunities"
- "Onboarding experience enhancements"
- "Drive delight in the first-run journey."

**Why (source).** The trust chain breaks the moment the language sounds invented: "A synthesis that
seems to reflect the product's language rather than the customer's language. If the themes sound
like they were written by a marketing team, not derived from real tickets, Alex will not trust
them" (personas.md, Persona A, what makes Alex stop trusting, point 3). This also matches and
sharpens the strongest competitor register worth beating, Dovetail's "Build with facts, not vibes"
(competitors.md): Sift's facts are the customer's own words.

### 3. Calm, not loud

**Rule.** Say it once, in a level voice; carry weight with plain statements and hierarchy, never
with exclamation, celebration, or alarm.

**Example (written to the rule).**
- "Share link ready."
- "Synthesis failed. Your sources are still connected, so nothing is lost."
- "3,750 of 5,000 items this month. 1,250 remaining."

**Anti-example (breaks the rule).**
- "Success! Your brief is live."
- "Oops, something went wrong!"
- "Welcome aboard! Let's get you started."

**Why (source).** Design Principle 2, "Calm under density ... Hierarchy, weight, and whitespace do
the work of focus, not color, badges, or alerts" (CLAUDE.md), and the emotion the product designs
for, "Confidence and calm instead of overload" (CLAUDE.md Product Overview). The reader works in
short focused sessions across many tools ("The expected session in Sift is 10-15 focused minutes",
personas.md O8); loud copy is friction, not delight.

### 4. Every state names the next move

**Rule.** Every screen and every state tells the reader what to do next; an error, an empty, or a
wait names the one action that moves forward, so the reader is never stranded.

**Example (written to the rule).**
- "No sources connected yet. Connect a source to see your first synthesis."  with a
  "Connect a source" action.
- "Synthesis failed ... Try again, or check your sources."  with "Retry" and "Go to Sources".

**Anti-example (breaks the rule).**
- "Something went wrong."  (a full stop with no way out)
- "No data."
- An empty state that explains the emptiness but offers no action.

**Why (source).** Design Principle 4, "One decision at a time ... Every view has a clear 'what
should I do next' orientation" (CLAUDE.md), realized in the IA as the no-dead-end rule ("Visible
exit, no dead end", carried on every state in wireframes/docs and ia/docs/flows.md). It also serves
activation: "If the PM cannot reach a synthesis output with their own data within 20 minutes, they
leave" (personas.md O12), so every state has to point at the next step, not describe a wall.

---

## Dictionary

One concept, one word. The terms are the IA core entities (CLAUDE.md: Feedback item, Source,
Theme, Evidence citation, Prioritization, Evidence brief, Workspace) and the research vocabulary,
not new inventions. This section settles the twelve divergences found in the Step 1 inventory; the
`DIV-n` handle points back to `microcopy.md`.

### Core terms

| Use this | Not this | Why |
|---|---|---|
| **feedback** (the raw material); **feedback item** / **item** (one countable piece) | signal item, a signal (as a count) | The core entity is "Feedback item"; "feedback" is the reader's own word for what they import. Keep the countable unit to one word. (DIV-1) |
| **signal** only in **low signal** and **signal rank** | signal as a count of items; "signal volume" / "signal usage" for feedback | "signal" carries evidence strength, not raw count. "low signal" is the locked confidence badge (D2); "signal rank" is the sort by strength. (DIV-1) |
| **source** | integration, connector | Core entity "Source". You connect sources; the Sources screen lists them. "integration" is our word, not the reader's. (DIV-2) |
| **live connection** and **batch import** (the two source types) | "connection" or "integration" to mean the source itself | These name the two types (Intercom syncs live; CSV is a one-off), not the source. (DIV-2) |
| **connect** (the verb for a source) | add a source | One verb to bring a source in. (DIV-3) |
| **theme** | cluster, topic, tag | Core entity "Theme"; the synthesis output the reader reads. |
| **evidence** (items behind a theme); **feedback item** (one raw item); **citation** (the numbered pointer) | using the three as synonyms | The chain is theme, to evidence items, to one feedback item; a citation is the numbered reference. Keep each to its rung. |
| **brief** (default); **evidence brief** (first mention and the public title) | report, summary, deck | Core entity "Evidence brief". Short form in-app; the full form introduces it and names the public artifact. (DIV-10) |
| **build** (the verb for a brief) | create, generate, make a brief | One verb to make a brief. "generate" stays only for the share link. (DIV-5) |
| **priority** (the noun); **Set priority** (assign it); **Recommended priority** (the brief's ranking) | mixing "priority" with "rank" or "ranking" as the noun | Core entity "Prioritization". "signal rank" is the sort; "priority" is the decision. These name two real things and both keep the one noun. (DIV-12) |
| **workspace** | account (as the team container), org, tenant | Core entity "Workspace". A person signs up and gets a workspace. (DIV-7) |
| **confidence** shown as **n=X** plus **low signal** | score, rating, "AI confidence %" | D2 day-one scope is item count plus the low-signal badge. No invented score. |
| **scrub** / **scrubbed** (PII) | redact, strip, mask, anonymize | "PII scrubbed by default" is the locked product phrase (CLAUDE.md). One verb for the action and its result, including field values (Author: scrubbed). (DIV-6) |
| **Log in** / **Log out** (session); **Sign up** (once, to join); **Start free** (Home CTA only) | Sign in; Sign out for log out; Register | Sessions use log in and log out; acquisition uses sign up; the marketing entry is "Start free". (DIV-7) |
| **Create your workspace** / **Create workspace** (the sign-up action) | Create your account (as the button or h1) | Sign-up creates a workspace, the product's unit. (DIV-7) |
| **Try again** (recover from an error) | Retry, Retry sync, Retry authorization | One recovery label; the screen makes the object obvious. Add an object only if two recoverable actions share a screen. (DIV-4) |
| Tagline: **Turn customer feedback into decisions you can defend.**; terse descriptor: **Customer feedback synthesis.** | "Feedback synthesis for product teams"; "Customer feedback, synthesized" | One value line for public surfaces, one short descriptor for tight footers. (DIV-8) |

### Person and address

- The reader is **you** (second person, direct): "your feedback", "you can review this in Data and
  privacy".
- The product is **Sift**, third person, for what it does: "Sift clusters your feedback". Use **we**
  only for the company and its people, that is support, legal, and planned downtime: "we could not
  build the picture this time", "we expect to be back shortly". Never **I**.
- Sift talks about the reader's data and decisions, not about itself.

### Casing and numbers

- Capitalize the nav destinations as proper section names: **Synthesis, Sources, Briefs, Account**.
  Lowercase the same words as common nouns: "your synthesis", "a source", "a brief".
- Confidence is lowercase **n=42**. Thousands take a comma: **3,750**, **5,000**.
- **PII** is uppercase, as are **CSV, OAuth, SSO, GDPR, CCPA, SOC 2, DPA**. Product names stay as
  given: **Intercom, Zendesk, Gong, Salesforce**.
- Time reads "**2 days ago**"; name the event where it helps ("synced 2 days ago", "imported 2 days
  ago"), but keep the "... ago" form.

---

## Forbidden

What Sift never writes. Without this list the model default returns with every new prompt:
enthusiasm, exclamation marks, emoji, and celebration. Each row gives the fix.

| Never | Was, then should be | Why |
|---|---|---|
| Stock error clichés | "Something went wrong." to "Could not load this page." | Vague and evasive; name what failed, plainly. Principle 1. (DIV-9) |
| "Oops" / "Uh-oh" / "Whoops" | "Oops, something went wrong!" to "Could not load this page." | Jokey on a trust surface where the reader is defending a decision. Principle 3. |
| Greetings and celebration | "Welcome aboard!" / "Success! Your brief is live." to "Your workspace is ready." / "Share link ready." | Sift states the fact and the next step; it does not celebrate. Principle 3. |
| The word "successfully" | "Saved successfully." to "Saved." | If it saved, say so; "successfully" is filler. Principle 3. |
| Exclamation marks in system copy | "Intercom connected!" to "Intercom connected." | Level voice. Principle 3. |
| Emoji in system messages | "Import complete ✅" to "Import complete." | Calm under density; no decoration in copy. Principle 3. |
| Motivational or marketing tone in-app | "Start your journey to better decisions." / "Let's get you started!" to "Connect a source to see your first synthesis." | In-app copy points at the next step; it does not sell. The Home marketing page is the one place a value line lives. Principle 4. |
| Overclaiming the AI | "AI identified your top priority." / "Our AI thinks..." to "Onboarding is confusing. n=42." | Let the evidence make the claim; never assert AI authority. Principle 1. |
| Hype adjectives (powerful, seamless, effortless, delightful, blazing) | "Powerful, seamless synthesis." to "Feedback clustered into ranked themes, each with the evidence behind it." | Specifics earn trust; adjectives ask for it. Principle 1. |
| "just" / "simply" as minimizers | "Just connect a source." to "Connect a source." | Minimizers presume it is easy for the reader. Principle 3. |
| Blaming the reader | "You entered an invalid email." to "Enter a work email." | Say what to fix, not what they did wrong. Principle 4. |
| Filler "please" | "Please try again." to "Try again." | Plain instruction. Keep "please" only when softening a genuinely large ask. Principle 3. |

---

## Microcopy

Rules by element type. Each is checked against the Principles and the Dictionary above, and each
carries one real line from the product (in its post-canon form where the Dictionary changed it).
After this section the document is complete: every product string is written from it.

### Buttons and actions

A button is the verb of the action, and you can see the result in it. No bare "OK", "Submit", or
"Continue" where a specific verb and object fit. The primary button is the verb plus object; the
secondary (ghost) button is the way back or the lesser path.

- Written to the rule: "Connect a source", "Build brief", "Generate share link", "Copy quote".
- Breaks it: "OK", "Submit", "Go", "Continue" as a lone primary action.

### Screen heading (h1) and subhead

The h1 names the place in Dictionary words. The subhead says, in one plain sentence, what you can
do here and why.

- Written to the rule: h1 "Synthesis"; subhead "Your feedback, clustered into ranked themes. Open
  one to trace the evidence behind it."
- Breaks it: "Welcome to your dashboard", "Insights overview".

### Section heading (h2)

Label the block plainly, and carry the count when the block is a set.

- Written to the rule: "Evidence · 42 items", "Select themes", "Recommended priority", "Provenance".

### Form fields (label, placeholder, validation)

The label says what to enter, in the reader's words. The placeholder shows the shape, not an
instruction the reader loses once they type. A validation error says the one thing to fix, never
what the reader did wrong.

- Label written to the rule: "Work email"; placeholder "alex@northwind.io"; hint "At least 8
  characters".
- Validation written to the rule: "Enter a work email."
- Breaks it: "Invalid input", "You entered an invalid email", a placeholder that reads "Type your
  email address here".

### Filter and sort

A filter chip states its current value, not the category alone, so the state reads at a glance.
Sort names the ordering.

- Written to the rule: "Source: all", "Last 30 days", "Confidence: all", "Sort: signal rank".
- Breaks it: a lone "Filter" or "Sort" (allowed only in the compact mobile control, where space
  forces "Filter").

### Confidence and honesty notes

State the strength as a number, and when it is thin, say so plainly right next to it. The honesty
note tells the reader what to do with a weak signal; it never hides it. This is Principle 1 as
microcopy, and it is mandatory (D2), not optional.

- Badge written to the rule: "n=6  low signal".
- Note written to the rule: "Thin evidence. Six mentions is a weak signal, not a confirmed pattern.
  Treat it as a lead to watch, not a decision. The items are still fully open below."

### Empty state

Say why it is empty and give the one action that fills it. An empty is a starting line, not a wall.
The first-run synthesis empty differs from a list empty (DIV-11).

- Written to the rule: title "No sources connected"; body "Connect a source to bring your feedback
  in. Sift normalizes it, scrubs PII by default, then clusters it into ranked themes with the
  evidence behind each one."; action "Connect a source".
- Breaks it: "No data.", an empty that describes the emptiness and offers no action.

### Error state

Say what happened and what to do next. Reassure with a fact (nothing is lost), never with a joke or
an apology. One recovery action, plus a way back.

- Written to the rule: title "Synthesis failed"; body "We could not build the picture this time.
  Your sources are still connected, so nothing is lost. Try again, or check your sources."; actions
  "Try again" and "Go to Sources".
- Breaks it: "Something went wrong", "Oops", "Sorry for the inconvenience", an error with no exit.

### Loading state

A wait stays silent (a skeleton) or says exactly what is running. It never fills the silence with
chatter.

- Written to the rule: "Synthesizing your feedback. Ingesting, scrubbing PII, and clustering into
  themes."
- Breaks it: "Hang tight!", "Almost there!", "Working some magic".

### Success and confirmation

Name the fact and the next step. Do not celebrate, and do not say "successfully".

- Written to the rule: title "Share link ready"; body "Anyone with this link can read the brief. No
  login needed to view, and the data is PII scrubbed like everywhere else."; actions "Copy" and
  "Preview brief".
- Breaks it: "Success!", "Your brief is live", any confirmation with an exclamation mark or emoji.

### Dangerous or irreversible action

Before the action, say what will happen and what cannot be undone. The confirm button names the
specific act, not "Yes" or "Confirm".

- Written to the rule: "Disconnecting stops the live sync and removes the connection. Imported
  feedback and existing citations stay, but no new signal comes in."; confirm "Disconnect Intercom";
  cancel "Cancel".
- Also: "Permanently remove this workspace and all its data. You will be asked to confirm."; button
  "Delete account".
- Breaks it: a confirm button that reads "OK" or "Confirm" with no statement of consequence.

### Notice and guard lines (the trust guards)

When Sift withholds or flags something for honesty (thin evidence, a scrubbed item, a paused sync),
it states the reason and what still holds. The honesty is the point, so the line is plain and
specific.

- Written to the rule (scrubbed): "The raw quote was scrubbed beyond display to protect personal
  data, so it is not available. Rather than show a broken or fabricated quote, Sift flags it. The
  theme still stands on its other evidence."
- Written to the rule (paused sync): "Existing citations still resolve, only new signal is paused
  until the sync recovers."

### Breadcrumb

The trail in Dictionary words, with the current place unlinked.

- Written to the rule: "Synthesis › Onboarding is confusing › Evidence".

### Tone by state (summary)

| State | Tone rule | One line |
|---|---|---|
| Success (base) | State the fact, point at the next step. No celebration. | "Share link ready." |
| Empty | Say why, give the one action. | "No sources connected" plus "Connect a source". |
| Loading | Silent skeleton, or name what runs. No chatter. | "Synthesizing your feedback ..." |
| Error | What happened, what to do, one reassuring fact. No joke, no apology. | "Synthesis failed ... Try again". |
| Low signal / thin | Admit the weakness plainly, keep it open. | "Thin evidence ... a lead to watch, not a decision." |
| Redacted / withheld | Name the reason and what still holds. | "scrubbed beyond display ... the theme still stands". |
| Dangerous | Warn before, name what cannot be undone; confirm verb is the act. | "Disconnect Intercom". |

With this section, `voice.md` is complete. Principles set the register, the Dictionary sets the
words, Forbidden sets the floor, and Microcopy sets the rule for each element and state. From here,
every screen is rewritten from this file.
