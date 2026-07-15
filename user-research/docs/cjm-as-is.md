# CJM As-Is - Sift

**Focus:** Persona A, The Overloaded PM (Alex) x Main Job: *"When I am preparing for a roadmap planning session and I have customer feedback spread across multiple tools I haven't had time to read, I want to feel certain I know what our customers actually need most, with the evidence behind it, so that I can walk into the session with a call I'll stand behind and defend if anyone pushes back."*

*The current path: how the Overloaded PM does this job today, without Sift (which does not exist yet).*

*Honesty rule (As-Is = research): every emotion and every barrier stands on a source (review, forum, observed friction). No source, [?], never a drawn-in emotion. Strength of evidence is marked: a single mention is a signal, a repeat across sources is a pattern. As-Is is a mirror, not a cure: no solutions here, they belong to To-Be.*

*Focus persona: [personas.md](personas.md) (Persona A). Main job: [jtbd.md](jtbd.md) (Main Job of the Product).*

---

## As-Is Path - Skeleton (phases, goals, actions, touchpoints)

*Step 3: the bones of the current path only. Phases are derived from the real path of this job, not a generic Awareness-to-Retention funnel. Emotions, barriers, thoughts, and quotes are added in Step 4 (DEEP mining). Where the path is not covered by existing data, the gap is marked [?].*

| # | Phase | Phase goal (job link) | Actions today | Touchpoints / channels | Source |
|---|---|---|---|---|---|
| 1 | **The session looms** | Register that a planning session is coming and that arriving without a defensible view is not an option (Main Job; E2) | Sees the planning session on the calendar; mentally braces; blocks time to "do the feedback review" before the meeting | Calendar; Jira / Linear sprint board | personas O9, O13 (event-driven return); jtbd Main Job; aarrr.md Retention |
| 2 | **Gather the scattered signal** | Get the recent customer feedback in one place to work from (J2 - make sense of the incoming pile) | Opens each source in turn and pulls recent items: support tickets, call recordings, helpdesk, reviews, interview notes; reads across many tabs | Intercom (support), Gong (sales calls), Zendesk (helpdesk), app store reviews, interview docs | personas O2, Persona A Context; jtbd J2 |
| 3 | **Read and tag / cluster** | Turn raw items into themes and spot the real patterns, not just the loudest voices (J2) | Reads each item; tags by theme in a Notion database or Jira epics; hours of reading; tries to hold the emerging picture in memory | Notion database / Jira epics | personas Persona A Context and Pains ("manual synthesis in Notion or Jira"); jtbd J2 |
| 4 | **Synthesize and decide priority** | Reach a confident sense of the top customer problems and judge how strong the evidence is (Main Job; J3 - know how much to trust) | Forms themes from memory; ranks them; decides what goes on the roadmap; privately wonders how solid each conclusion is | Notion / Jira; the PM's own judgement | personas O3, O4, Trust triggers; jtbd Main Job, J3 |
| 5 | **The planning session** | Walk in and present a call worth standing behind (Main Job; E2 - certain, not defensive) | Presents priorities to the team; references "what customers are saying" to justify the ranking | Planning meeting (room / Zoom); slides or the Jira / Linear roadmap | jtbd Main Job ("walk into the session with a call I'll stand behind"); E2 |
| 6 | **Defend under challenge** | Hold the position with real evidence when pushed, not opinion (J1 - stakeholder defense; S1) | A stakeholder pushes back ("my customer said X"); Alex tries to recall where they saw the signal; often "I think I saw this in several tickets"; may back down or scramble back to the source | The meeting; scrambling back into Intercom / Notion mid-conversation | jtbd J1, S1; personas O4 (roadmap challenged by sales); E2 |

**Notes on coverage (to resolve in Step 4 mining):**
- Phase 3 - the exact tool split (how many PMs tag in Notion vs Jira vs a spreadsheet, and how long it actually takes) is [?] - the *activity* is sourced, the *distribution and duration* are not.
- Phases 5-6 - the in-room dynamics (how the challenge actually plays out, what a PM feels presenting) are sourced only from the job statement and the "roadmap challenged by sales" pain; the lived texture is [?] until mining.
- Single-focus note: Segment B (Product Lead) runs a lighter variant of Phases 4-6 (aggregating the team's syntheses, presenting to the board), not a fundamentally different path - one line, no separate map.

---

## As-Is Emotion and Barrier Layer (Step 4 - DEEP mining, June 2026)

*Every emotion and barrier below stands on a real, verbatim public quote with its source URL. Strength is marked: signal = single mention; pattern = the same pain echoed across 2+ independent sources. Screenshots of the source pages are in research/screens/ as durable evidence. Mining method and full source list: [live-research.md](live-research.md) is the trust-question record; this layer is the journey-question record.*

*Mining note: Reddit is accessible via old.reddit.com in a live browser (the prior session's block was on www.reddit.com only). Quotes are copied exactly; where a source is a tool review it is labeled tool-specific vs general workflow. G2 was not needed - Capterra plus r/ProductManagement gave pattern-strength coverage.*

---

### Phase 1 - The session looms

- **Thoughts / questions:** "What priorities do I have from product?" "Am I doing enough? Am I focusing on the right thing?" "Is project A more important than project B?"
- **Emotion:** Negative, intensity **4** (anticipatory anxiety, self-doubt, dread of being caught out). **Strength: signal** (one very strong, fresh first-person post).
- **Barrier:** No synthesized point of view ready when planning arrives; fear that admitting this looks like incompetence, so the PM does not even ask for help.
- **Type:** General workflow.
- **Quote** (u/lefarche, GPM at a Series C AI SaaS startup):
  > "I was working on roadmap items (discovery, PRD, planning, etc.), then came the Spring Planning and EM asked me 'what priorities you've from product?' I drew blank and felt I should be on top of every sprint and should have product priorities clearly aligned so I can get product work done. But I didn't have any."
  > "Asking for help openly feels like I'm showing the company I don't know my shit."
  - Source: https://old.reddit.com/r/ProductManagement/comments/1uvzmka/overwhelmed_cant_decide_if_its_my_skills_or_lack/ . Screenshot: research/screens/reddit-overwhelmed-drew-blank-planning.png

### Phase 2 - Gather the scattered signal

- **Thoughts / questions:** "The information is all over the place and completely siloed." "There's gotta be a good way to get through the noise."
- **Emotion:** Negative, intensity **4** (overwhelm, fatigue). **Strength: pattern** (two independent Reddit PMs naming the same siloed-tools pain, corroborated by a Productboard reviewer).
- **Barrier:** Feedback is siloed across many disconnected channels; volume and noise make collection cumbersome before any thinking starts.
- **Type:** General workflow.
- **Quotes:**
  > "when it comes down to qualitative data, the information is all over the place, and completely siloed. I try to leverage data from zendesk tickets, user interviews and transcripts, feedback widget pop ups, sitting in sales calls, even whatsapp groups with the field teams etc. By having so many different channels where customer feedback is collected, it can be cumbersome to take all of this qualitative data and synthesize it."
  - u/Mysterious-West3175. Source: https://old.reddit.com/r/ProductManagement/comments/1fcy20k/overloaded_with_qualitative_data/ . Screenshot: research/screens/reddit-overloaded-qualitative-data.png
  > "This shit sucks. Man, there's so many random people sending BS feedback to our email and other feedback channels, there's gotta be a good way to get through the noise."
  - u/Little-Clothes-4574. Source: https://old.reddit.com/r/ProductManagement/comments/1klawf2/analyzing_customer_feedback_at_scale/ . Screenshot: research/screens/reddit-analyzing-feedback-at-scale.png
  > "I receive a lot of different input across many channels. With Product Board, I can use my Chrome extension and send everything there. Once a week a specific time is designated to search across all input and find the most valuable insights."
  - Productboard reviewer (tool-specific, same reality framed positively). Source: https://www.capterra.com/p/160651/productboard/reviews/ . Screenshot: research/screens/capterra-productboard-1.png

### Phase 3 - Read and tag / cluster

- **Thoughts / questions:** "This is wayyyy too much for a human to go through." "I get sick of sifting through stuff."
- **Emotion:** Negative, intensity **4** (tedium, exhaustion, "waste of time"). **Strength: pattern** (Capterra and Reddit, independent).
- **Barrier:** Manual reading and tagging is hours of low-leverage labor; volume exceeds human capacity; the output is often not even usable afterward.
- **Type:** Mixed (general workflow + one Dovetail-specific).
- **Quotes:**
  > "This process is often incredibly messy, tedious and highly intensive (in terms of labor). You're often living in sticky note hell and it's even more challenging to do this as a remote team."
  - Sherif M., "Distinguished Product Manager," describing the general manual workflow before any tool. Source: https://www.capterra.com/p/174077/Dovetail/reviews/ . Screenshot: research/screens/capterra-dovetail-tagging.png
  > "I spent 8+ hours 'tagging' nearly 20 research interviews, come to find out I can't generate any meaningful reports with the data I just transcribed and tagged. No easy way to show who answered what. In all, an entire waste of time and money."
  - Andrew E., 1.0 star (Dovetail-specific, but the 8+ hours of tagging labor is the general pain). Source: https://www.capterra.com/p/174077/Dovetail/reviews/ . Screenshot: research/screens/capterra-dovetail-tagging.png
  > "wayyyy too much for a human to go through." ... "There's so many random requests that I get sick of sifting through stuff."
  - u/Little-Clothes-4574. Source: https://old.reddit.com/r/ProductManagement/comments/1klawf2/analyzing_customer_feedback_at_scale/ . Screenshot: research/screens/reddit-analyzing-feedback-at-scale.png

### Phase 4 - Synthesize and decide priority

- **Thoughts / questions:** "Any system that summarizes feedback will gloss over the key insights." "Plenty of things get missed." The goal named by a peer: "speak more confidently and feel more comfortable in your decisions."
- **Emotion:** Neutral-to-negative, intensity **3** (unease, low trust in the synthesis, fear of missing the real signal). **Strength: signal** (multiple corroborating voices within one thread).
- **Barrier:** Summarizing flattens nuance; you cannot review everything so things get missed; hard to know whether the theme you land on is actually strong evidence. This is exactly the J3 "how much to trust a conclusion" gap, observed in the wild.
- **Type:** General workflow.
- **Quotes:**
  > "The devil is in the details. Any system that will summarize feedback will gloss over the key insights coming from customers."
  - u/miokk. Source: https://old.reddit.com/r/ProductManagement/comments/1klawf2/analyzing_customer_feedback_at_scale/
  > "half the time our team isn't consistently reviewing all the transcripts so plenty of things get missed just from our laziness."
  - u/kashin-k0ji. Source: same thread. Screenshot: research/screens/reddit-analyzing-feedback-at-scale.png
  > "pick out the themes so you can bring those up to your team and stakeholders. you will be able to speak more confidently and feel more comfortable in your decisions over time."
  - u/drteacherman (names the phase goal: confidence). Source: https://old.reddit.com/r/ProductManagement/comments/1fcy20k/overloaded_with_qualitative_data/ . Screenshot: research/screens/reddit-overloaded-qualitative-data.png

### Phase 5 - The planning session

- **Thoughts / questions:** "They were uninterested." "They just did not understand anything I was saying."
- **Emotion:** Negative, intensity **3** (deflation, frustration, not landing). **Strength: signal**.
- **Barrier:** The prioritization rationale does not translate to the room; the audience questions or disengages; the PM cannot make the reasoning stick.
- **Type:** General workflow.
- **Quotes** (u/TheLionMessiah):
  > "I tried to explain some really basic stuff.. RICE, GIST, Kano. They were uninterested."
  > "I presented a Now/Next/Later roadmap and explicitly state 'This does not correspond with a literal timeline.' The next question I got was 'Okay, but when is Next?'"
  > "I really don't know how to communicate to them that we need to be able to pivot. They just did not understand anything I was saying."
  - Source: https://old.reddit.com/r/ProductManagement/comments/1jb6dmo/presented_roadmap_prioritization_to_the_dev_team/ . Screenshot: research/screens/reddit-presented-roadmap-went-over-heads.png

### Phase 6 - Defend under challenge

- **Thoughts / questions:** "Customer says x but we believe y is better, with no data and no evidence." "Evidence is nothing in the face of a hippo."
- **Emotion:** Negative, intensity **5** (powerlessness, resignation, "evidence does not win"). **Strength: strong pattern** (4+ independent voices in one thread, plus a second thread, plus a PM blog).
- **Barrier:** Stakeholder or executive opinion outweighs the evidence; the "my customer said X" anecdote trumps synthesized data; the PM has no leverage even when the data is on their side. This is the deepest point of the As-Is curve and the sharpest argument for Sift.
- **Type:** General workflow (Reddit) plus a labeled PM blog corroboration.
- **Quotes** (thread "Why is collecting, managing, and taking action on customer feedback a challenge?"):
  > "Because usually stakeholder agendas and egos are more heavily weighted than feedback from users"
  - u/thegooseass (28 points)
  > "This ends up being one of the hardest things to manage - customer says x but we believe y is better ... With no data and no evidence. You need to have success metrics and show why this doesn't work to make better data-driven decision"
  - u/OkExpression8287
  > "Evidence is nothing in the face of a hippo."
  - u/Facelotion
  > "Executive leadership thinks their gut fEeLiNgS are more accurate than quantitative data."
  - u/plot_twist7
  - Source (all four): https://old.reddit.com/r/ProductManagement/comments/1gf3f9g/why_is_collecting_managing_and_taking_action_on/ . Screenshot: research/screens/reddit-feedback-challenge-hippo.png
  > "I'm a Junior PM. Almost broke down today due to getting into so many conflicts this week with multiple other PMs/stakeholders." ... "This is my first time dealing with so many conflicting opinions coming at me in all directions."
  - u/yesqueen777 (corroborating second thread, emotional intensity). Source: https://old.reddit.com/r/ProductManagement/comments/1aypb87/how_to_deal_with_so_many_diff_opinions_and/ . Screenshot: research/screens/reddit-conflicting-stakeholder-opinions.png
  - Blog corroboration (labeled: PM blog, not a user voice): "It can be difficult to say 'no' to a HiPPO, especially if the executive, investor, or another stakeholder behind it is of particularly high-authority." Source: https://www.productplan.com/learn/defend-product-roadmap

---

### Coverage and honesty summary (Step 4)

- 19 verbatim quotes, 10 public pages read (Capterra x2, r/ProductManagement x7, ProductPlan blog x1; Gleap vendor blog read but not used). 8 screenshots saved as evidence.
- Every phase now stands on a real quote. No phase is left on a drawn-in emotion.
- Strength honestly split: Phases 2, 3, 6 are patterns; Phases 1, 4, 5 are signals (one strong voice with partial corroboration) and are marked as the weaker points to firm up (Phase 6 is the strongest and deepest, and is where the MVP argument is safest).
- Still [?]: an exact baseline duration for the manual synthesis per planning cycle (Phase 3 gives "8+ hours" for 20 interviews, tool-specific, not a per-cycle figure). The order of magnitude (hours) holds; the precise number stays [?] pending interviews.

---

## Emotional Curve (Step 5)

*Sentiment by phase on a -5 (worst) to +5 (best) axis. Each point rests on a Step 4 emotion that has a real source. Point weight encodes evidence strength: a pattern-backed point is full weight; a signal-backed point is lighter (this drives a thinner line / smaller dot in the html so a single mention is never shown as strong as a confirmed pattern). No point sits on a [?] - every phase has a sourced emotion, so nothing is interpolated.*

| Phase | Sentiment | Evidence strength | Curve weight | Note |
|---|---|---|---|---|
| 1 The session looms | -4 | signal | light | Anticipatory dread; one strong first-person post |
| 2 Gather the scattered signal | -4 | pattern | full | Siloed channels, overwhelm |
| 3 Read and tag / cluster | -4 | pattern | full | Manual tagging labor, "waste of time" |
| 4 Synthesize and decide | -3 | signal | light | Least-negative plateau; distrust of the summary |
| 5 The planning session | -3 | signal | light | Rationale does not land in the room |
| 6 Defend under challenge | **-5** | **pattern (strong)** | full | **The floor.** Evidence loses to the HiPPO |

**Shape:** a flat, entirely-negative trough. The journey opens at -4, never rises above -3, and drops to its floor of -5 at the end.

- **Bottom (deepest negative): Phase 6** - defending the call under stakeholder challenge. Strongest evidence (4+ voices, pattern) and lowest sentiment. This is the single most important place to win.
- **Peaks: none.** There is no positive point in the As-Is journey. Even the "confidence" a peer describes in Phase 4 ("speak more confidently over time") is aspirational, not an experience the current path delivers. The absence of any relief is itself the finding: today's path is negative end to end.
- **Weakest-evidence points: Phases 1, 4, 5** (signals). They are drawn lighter and are the first candidates for firming up in interviews; no MVP argument should rest on them alone.

---

## Growth Zones (Step 5)

*Three to five places where today's experience hurts most and where Sift can win. Each is tied to a Step 4 barrier and, where one exists, a gap from research/docs/research.md or competitors.md. Zones backed by a pattern are prioritized over single signals. No solution is written here - that is Step 7. This is where it hurts and where the opening is, not how we fill it. "Differentiator vs table-stakes" is flagged because pattern-strength in the mining is not the same as a competitive opening.*

**GZ1 - Evidence that actually outweighs the anecdote (from Phase 6).** *Priority 1. Differentiator.*
Today the "my customer said X" anecdote plus executive ego beats synthesized data, because the PM's evidence is unciteable ("I think I saw this in several tickets"). The opening is the PM's total lack of leverage in the room even when the data is on their side. Barrier: Phase 6 (strong pattern, -5, the floor). Research gap: no competitor owns the PM "defend your roadmap with evidence" story (competitors.md O14; research.md gap "PM-specific positioning"); jobs J1, S1, E2. This is the deepest trough and the clearest unclaimed position - the safest ground for the MVP.

**GZ2 - Trust the synthesis without re-reading everything (from Phase 4).** *Priority 2. Differentiator.*
PMs distrust black-box summaries: "any system will gloss over the key insights", "things get missed". The opening is calibrated trust - being able to tell a strong theme from a thin one and to spot-check rather than re-read. Barrier: Phase 4 (signal in the wild, but backed by the strongest research gap). Research gap: J3 "know how much to trust a conclusion" is the clearest unclosed gap across all five competitors (jtbd matrix; research.md gap "honest confidence display"); this is also the riskiest assumption H1. Signal-strength in mining, pattern-strength in research - high priority.

**GZ3 - Kill the hours of manual tagging (from Phase 3).** *Priority 3. Partly table-stakes.*
"Sticky note hell", "8+ hours tagging", "wayyyy too much for a human to go through." The opening is the low-leverage manual labor between raw signal and a usable picture. Barrier: Phase 3 (pattern). Research: MVP AI synthesis; Objective 2 (time to decision); the core time-saving value. Note: competitors already auto-classify, so the win here is doing it with traceability intact, not the automation alone.

**GZ4 - One home for siloed signal (from Phase 2).** *Priority 4. Table-stakes.*
Feedback lives "all over the place, completely siloed" across Zendesk, Gong, interviews, widgets, WhatsApp, email; collection is cumbersome before any thinking starts. The opening is the fragmentation itself. Barrier: Phase 2 (pattern). Research: MVP ingestion (CSV + Intercom first, D3); aarrr Activation. Necessary but not differentiating - every competitor aggregates; this is the price of entry, not the edge.

**GZ5 - Walk in ready, and make the reasoning land (from Phases 1 and 5).** *Priority 5. Supporting.*
"I drew blank" when asked for priorities; "they did not understand anything I was saying." The opening is arriving with a synthesized point of view and a form of it the room can engage with. Barrier: Phases 1 and 5 (signals). Research: S1 (give stakeholders something to engage with); the shareable evidence brief. Lowest priority - rests on single signals - but it is the same evidence-brief artifact that GZ1 needs, so it comes largely for free.

*Ordering logic: GZ1 and GZ2 are both deepest-pain and unclaimed-position, so they lead. GZ3 and GZ4 are real pattern pains but partly served by competitors, so they are necessary table-stakes rather than the edge. GZ5 supports GZ1 through the same artifact. To-Be (Step 7) must close GZ1-GZ4 for the path to hold; GZ5 improves it.*



