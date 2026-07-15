# UX Patterns - Sift

*Based on validated v2 strategy, competitive analysis, and benchmark research.*

---

## 1. Behavioral Patterns from the Validated Audience

### B1. Synthesis-first, detail-on-demand (MOST CRITICAL)

**Description:** Product managers work under time pressure. They want to see the synthesized picture first - what are the themes, which are biggest - and then drill into evidence only for the themes that matter to their current decision. They do not want to start with raw data and build up to a conclusion; they want to start with the conclusion and verify downward.

**Why this is the entry point:** This matches the PM's job. A PM preparing for a roadmap session needs to say "here are the top 3 customer problems" in 10 minutes, not read 500 feedback items and derive them. The synthesis is the value. The drill-down is the trust mechanism. Reversing the order (force the user to see raw data first) creates cognitive load and undermines the core promise.

**Implication:** The synthesis view is always the primary view. Raw feedback is accessible but never the starting point.

---

### B2. Evidence as a social object

**Description:** The PM does not only use insights for personal decision-making - they use them to persuade stakeholders. The evidence brief (a shareable synthesis with supporting quotes) is a social artifact that travels through the organization independently of the PM. This changes the design requirements: evidence needs to be shareable, readable without Sift context, and citation-complete for an audience that was not present in the analysis session.

**Implication:** Export and share are not secondary features; they are primary use cases. The evidence brief must be designed as a standalone document, not just a screenshot of the tool.

---

### B3. Trust through spot-checking

**Description:** Skeptical PMs earn trust in synthesis tools through spot-checking: they pick a theme they already know is real from their own experience, verify that the tool found it and found the right evidence, and then extend trust to themes they did not already know. The first-session activation moment is exactly this: "yes, this theme is real, I recognize these quotes."

**Implication:** The activation flow must make spot-checking easy. Show the most obvious, prominent theme first, not the most algorithmically novel one. Give the PM an early win.

---

### B4. Context-switching cost aversion

**Description:** PMs work in 3-6 tools simultaneously (Jira, Slack, email, their notes system, Sift, Zoom). Context-switching is expensive. The ideal behavior is to open Sift, get what they need, and return to their primary tool (Jira or Notion) with the evidence. They will not spend an hour in Sift; they will spend 10-15 focused minutes.

**Implication:** Every key view must deliver value within one session of focused use. The synthesis must be readable without knowing the tool's data model. Integration with Jira/Linear is not a nice-to-have for retention - it is the path of least resistance for continued use.

---

### B5. Retrospective synthesis over real-time monitoring

**Description:** Unlike support or CS teams who monitor feedback in real time, PMs work in cycles (sprint planning, quarterly roadmap review, feature discovery sprints). They want to synthesize feedback *for a session*, not track it continuously. The mental model is closer to a report they request than a dashboard they monitor.

**Implication:** The default entry point should be "synthesis on demand" (run synthesis now, for the period I care about) rather than a live dashboard. Notifications should be low-volume and session-oriented ("15 new items since your last synthesis"), not stream-of-consciousness updates.

---

## 2. Five Fundamentally Different UX Patterns

### Pattern A: The Dashboard (monitoring)

**How it works:** A persistent view that updates in real time with key metrics, trend charts, and alert indicators. The user checks the dashboard regularly to maintain situational awareness. Examples: Amplitude analytics dashboard, Datadog operations, PagerDuty alert view.

**Where it is used:** Analytics platforms, monitoring tools, operational systems where continuous awareness is the job.

**When it fits:** The user's primary behavior is monitoring - they need to know when something changes, and they check the view regularly to detect change.

**When it breaks:** When the user's primary behavior is decision-making for a specific moment, not continuous monitoring. Dashboards push information to the user; they do not help the user reach a conclusion for a specific question. A PM preparing for a roadmap session does not benefit from a dashboard showing real-time feedback volume.

---

### Pattern B: The Inbox (processing)

**How it works:** Feedback arrives as a stream of items. The user processes items one by one, triaging, tagging, and routing. The inbox has a clear "done" state when items are processed. Examples: Gmail, Intercom inbox, Linear triage view.

**Where it is used:** High-volume operational tools where processing incoming items is the primary job.

**When it fits:** When volume is manageable, the user wants to see individual items, and processing is the primary task.

**When it breaks:** When feedback volume is high (hundreds or thousands of items per month). The PM cannot process 500 items individually before a planning session. Processing becomes the job instead of deciding. This is the "before state" that Sift is designed to solve.

---

### Pattern C: The Report (synthesis on demand)

**How it works:** The user requests a synthesis for a defined scope (time period, source, segment). The tool runs analysis and produces a structured output: themes, evidence, priorities. The user reviews the report, drills into detail as needed, and acts on the conclusions. Examples: Perplexity AI search results, Dovetail AI summaries, Notion AI queries.

**Where it is used:** Research and intelligence tools where synthesis is the job, not monitoring or processing.

**When it fits:** When the user's behavior is session-oriented (they come with a question and leave with an answer) and the volume of source data is too large to process manually.

**When it breaks:** When the report is a static output with no drill-down. If the user cannot interrogate the conclusions (where did this come from? what was excluded?), the report is a black box and trust fails.

---

### Pattern D: The Canvas (exploration)

**How it works:** A spatial, open-ended interface where the user organizes information by placement and grouping. No imposed structure - the user creates the synthesis by arranging, connecting, and annotating. Examples: Miro, FigJam, Mural, Notion as a freeform workspace.

**Where it is used:** Collaborative workshops, design sprints, early-stage exploration where structure is not yet known.

**When it fits:** When the task is exploration and structure discovery, not synthesis of known categories.

**When it breaks:** For repeatable, scalable synthesis of large feedback volumes. The canvas is a human-labor-intensive tool. It does not scale to 500 feedback items per month and cannot be automated. It also does not produce a consistent, comparable output across sessions.

---

### Pattern E: The Evidence Brief (structured narrative)

**How it works:** A structured document format, somewhere between a report and a canvas. The brief has defined sections (top themes, evidence per theme, open questions, recommended action) but each section contains synthesized content with traceable source links. The brief is designed to be read independently of the tool. Examples: Grain's AI meeting summaries with clip links, Dovetail insight docs, research synthesis documents.

**Where it is used:** Research synthesis, stakeholder communication, decision documentation.

**When it fits:** When the output needs to travel - when the PM needs to share the synthesis with people who are not in the tool and need to trust the conclusions.

**When it breaks:** As a primary work surface. The brief is an output, not a workspace. It is not where the PM does the analysis; it is where the analysis lands.

---

## 3. Pattern Selection

### Primary pattern chosen: The Report (Pattern C) + Evidence Brief output (Pattern E)

**The core experience is a synthesis-on-demand report** - the PM opens Sift, the synthesis of their current feedback is always visible (auto-updated), and they can drill from any theme to its evidence. The output of a session is an evidence brief that can be shared.

**Reason 1 - JTBD alignment:** The PM's job in Sift is to get a defensible answer to "what should we prioritize?" within a planning session. The report pattern serves this: it starts with the conclusion (themes), enables verification (drill-down), and produces a shareable output (brief). The dashboard pattern monitors but does not decide. The inbox pattern processes but does not synthesize. The canvas requires manual labor that defeats the purpose.

**Reason 2 - Competitor gap:** All HARD competitors (Productboard, Canny, Enterpret) present feedback aggregation in dashboard or inbox patterns. None of them nail the report-with-drill-down pattern for the PM's synthesis need. Dovetail comes closest but focuses on research rather than prioritization. The report + brief combination is an open position in the market.

**Reason 3 - Trust mechanism:** The report pattern with inline citations (from the benchmark - Perplexity AI) and progressive drill-down (from the benchmark - Amplitude) enables exactly the trust-building behavior identified in the audience patterns: synthesis-first, then spot-checking, then acting. The dashboard and canvas patterns do not support this progression.

---

### Alternative under condition X: The Inbox (Pattern B)

**Under condition X:** If the target segment shifts toward Customer Success and Support Leads (Segment C from strategy) rather than PMs (Segment A), the inbox pattern becomes the primary pattern. CS/Support teams *do* process feedback individually and *do* want a triage/processing view. The inbox would be appropriate for these users.

**Why it is not chosen now:** The MVP targets Segment A (the PM). Serving the CS/Support inbox use case in the MVP would split focus and dilute the PM synthesis story. The inbox can be added later as a collaboration feature for signal suppliers.

---

### Pattern that does NOT fit: The Canvas (Pattern D)

**Why it does not fit Sift:** The canvas is powerful for exploratory synthesis sessions (design sprints, early-stage product thinking). It is not appropriate for Sift because:

1. **Scale:** Sift processes hundreds to thousands of feedback items. A canvas requires placing each item by hand. It does not scale to the signal volumes that make Sift valuable.

2. **Repeatability:** The PM needs to run the same synthesis repeatedly (weekly, monthly, quarterly). A canvas is a one-time artifact. Sift's value compounds over time - each synthesis builds on previous ones. A canvas does not support this.

3. **The job:** The PM's job is prioritization with evidence, not exploration. The canvas serves exploration (when you don't know what you're looking for). The PM in Sift's context already knows what questions they are asking; they need the evidence to answer them.

4. **Trust:** A canvas synthesis is as trustworthy as the person who built it. Sift's core promise is systematized, consistent synthesis that is trustworthy independently of who ran the session. The canvas pattern would undermine this.
