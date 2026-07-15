# IA - User Flows (Basic Layer) - Sift

*How the primary persona (Alex, the Overloaded PM) moves through the concept-sitemap screens to close the main job and its related jobs. Each flow traces to the CJM To-Be phases (the route skeleton); As-Is barriers (cjm-as-is.md) appear as decision points and dead-ends, so the flows show where the person can still get stuck, not only the happy path.*

*Every screen-node exists in the concept-sitemap (sitemap.md, section 2). States (empty / error / loading) are separate nodes, not screens. Node labels carry their concept-sitemap code (A1, B2, ...).*

*Critique note (Step 6): the dead-ends were tightened. A single failed theme or an empty source now recovers (discard and continue, or add another source); the terminal red dead-end is reserved for a systematic failure, where the person genuinely cannot reach the goal.*

## Color legend

- **Green (success):** the ends of the happy path (the start and the closed-job finish) and the arrows that lead to a closed job.
- **Red (dead):** a real dead-end, a node with no path to the goal (the As-Is trap, preserved honestly).
- **Gray (neutral):** everything between the ends, including decision diamonds, loading / empty / error states, and recoveries that loop back into the flow.

Colors use the research.html tokens (green #3ecf8e, red #f06060, dark surfaces). Three classDef per diagram: success / dead / neutral. Node color is authoritative; the green arrows (linkStyle) highlight the happy path as a bonus.

---

## Flow 0 - Main job: roadmap-planning synthesis to a defensible call

*Traces To-Be phases 1 to 6. Primary persona. Job: Main (with J2, J3, J1, S1 along the way). The spine that proves the person reaches the outcome.*

```mermaid
flowchart TD
    Start(["Planning session looms"]) --> Open["Synthesis view (B1)"]
    Open --> Ready{"Synthesis ready for this cycle?"}
    Ready -->|no, first run or stale| Connect["Connect / import source (A2)"]
    Connect --> Ingest["Loading: ingest and cluster"]
    Ingest --> Open
    Ready -->|yes| Themes["Ranked themes with confidence (B1)"]
    Themes --> Strong{"Theme strong enough to trust?"}
    Strong -->|low signal| Thin["Low-signal badge: thin evidence"]
    Thin --> Drill["Theme detail: evidence items n=X (B2)"]
    Strong -->|looks strong| Drill
    Drill --> Raw["Evidence source: raw verbatim (C1)"]
    Raw --> Trust{"Evidence backs the theme?"}
    Trust -->|one theme off| Discard["Discard the theme, pick another"]
    Discard --> Themes
    Trust -->|trail systematically broken| Dead["Dead end: synthesis not trustworthy, fall back to manual"]
    Trust -->|yes, verified| Prioritize["Set priority on trusted themes (B1 / D1)"]
    Prioritize --> Brief["Build evidence brief (D1)"]
    Brief --> Share["Loading: generate public link"]
    Share --> Shared["Shared brief link (D2)"]
    Shared --> Session["Planning session: present the call"]
    Session --> Challenge{"Stakeholder pushes back?"}
    Challenge -->|no| Win(["Job closed: defensible call stands"])
    Challenge -->|yes| Defend["Pull theme live: n=X + verbatim quotes (C1 / D2)"]
    Defend --> Grounded(["Job closed: anecdote meets evidence"])

    classDef success fill:#12351f,stroke:#3ecf8e,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#f06060,color:#ffd7d7;
    classDef neutral fill:#17171c,stroke:#3a3a45,color:#c9c9d2;
    class Start,Win,Grounded success;
    class Dead dead;
    class Open,Ready,Connect,Ingest,Themes,Strong,Thin,Drill,Raw,Trust,Discard,Prioritize,Brief,Share,Shared,Session,Challenge,Defend neutral;
    linkStyle 0,1,5,6,9,10,11,15,16,17,18,19,20,21,22,23 stroke:#3ecf8e,stroke-width:2px;
```

**Decisions:** synthesis ready for this cycle (route to ingest if not); theme strong enough to trust (confidence gate, To-Be P3); evidence backs the theme, split into a single theme off (discard and pick another) versus a systematically broken trail (To-Be P4); stakeholder pushes back (To-Be P6).
**States:** Loading during ingest and cluster; Loading during public-link generation; Low-signal badge on thin themes.
**Recovery:** a single theme that fails the spot-check does not end the journey; the PM discards it and picks another, looping back to the ranked themes.
**Dead-end:** the terminal dead-end is reserved for a systematically broken evidence trail, where trust in the whole synthesis collapses and the PM falls back to manual re-reading. That is the one place the To-Be path can still die (H1 fails). A raw source that cannot resolve is shown as an error state in Flow 2.
**Traces:** To-Be P1 (Connect), P2 (Synthesis ready), P3 (confidence gate), P4 (drill, spot-check, set priority), P5 (build and share brief), P6 (defend live). The As-Is P6 dead-end, scrambling back into Intercom mid-conversation, is inverted here into the Defend node.

---

## Flow 1 - Bring the signal in (first-run activation)

*Traces To-Be phases 1 to 2, closes As-Is Phase 2 (siloed channels, GZ4). Primary. The activation path: a first synthesis on the PM own data, from an empty workspace.*

```mermaid
flowchart TD
    Start(["First run: no signal yet"]) --> Sources["Sources: none connected (A1)"]
    Sources --> Pick{"CSV or Intercom?"}
    Pick -->|CSV| Upload["Connect: upload CSV (A2)"]
    Upload --> Map{"Columns map cleanly?"}
    Map -->|no| MapErr["Error: unmapped columns, fix mapping"]
    MapErr --> Upload
    Map -->|yes| Ingesting["Loading: normalize, PII scrub, cluster"]
    Pick -->|Intercom| OAuth["Connect: authorize Intercom (A2)"]
    OAuth --> Auth{"Authorized?"}
    Auth -->|no| AuthErr["Error: auth failed, retry"]
    AuthErr --> OAuth
    Auth -->|yes| Ingesting
    Ingesting --> Enough{"Any usable signal found?"}
    Enough -->|no, empty| Empty["Empty: nothing usable, loosen filters or add a source"]
    Empty --> Sources
    Empty -->|no other source exists| NoData["Dead end: no usable feedback available yet"]
    Enough -->|yes| Synth(["Job closed: signal in one place, synthesis ready (B1)"])

    classDef success fill:#12351f,stroke:#3ecf8e,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#f06060,color:#ffd7d7;
    classDef neutral fill:#17171c,stroke:#3a3a45,color:#c9c9d2;
    class Start,Synth success;
    class NoData dead;
    class Sources,Pick,Upload,Map,MapErr,Ingesting,OAuth,Auth,AuthErr,Enough,Empty neutral;
    linkStyle 0,1,2,3,6,12,16 stroke:#3ecf8e,stroke-width:2px;
```

**Decisions:** CSV or Intercom; columns map cleanly (CSV); authorized (Intercom); any usable signal found.
**States:** empty Sources on first run; Loading during normalize, PII scrub, and cluster; two recoverable Errors (unmapped columns, auth failed) that loop back into the connect step.
**Recovery:** an empty source is not terminal; the PM loosens filters or adds another source, looping back to Sources.
**Dead-end:** the true dead-end is only when no usable feedback exists anywhere yet, so there is nothing to synthesize.
**Traces:** To-Be P1 (connect once, CSV + Intercom, D3), P2 (a synthesis is ready). The green line marks the CSV happy path; the Intercom branch is the symmetric path to the same success.

---

## Flow 2 - Trust the synthesis (confidence and spot-check)

*Traces To-Be phases 3 to 4, closes As-Is Phase 4 (distrust of the summary, GZ2, the second differentiator). Primary.*

```mermaid
flowchart TD
    Start(["A theme catches attention"]) --> Theme["Theme detail: summary + confidence n=X (B2)"]
    Theme --> Conf{"Confidence: strong or low-signal?"}
    Conf -->|low-signal badge| Low["Low signal: treat as weak, do not over-rely"]
    Low --> Decide["Act on trusted themes, skip weak ones"]
    Conf -->|strong n=X| Items["Evidence items list n=X (B2)"]
    Items --> Avail{"Raw source still available?"}
    Avail -->|no| SrcErr["Error: source unavailable, citation cannot resolve, theme flagged"]
    SrcErr --> Decide
    Avail -->|yes| RawItem["Evidence source: raw verbatim in context (C1)"]
    RawItem --> Match{"Do the quotes match the theme label?"}
    Match -->|one theme off| DiscardT["Discard this theme, check another"]
    DiscardT --> Theme
    Match -->|trail systematically broken| Broken["Dead end: evidence trail broken, trust lost"]
    Match -->|yes| Verified["Spot-check passes: the theme is real"]
    Verified --> Decide
    Decide --> Trusted(["Job closed: calibrated trust, acted without re-reading all raw data"])

    classDef success fill:#12351f,stroke:#3ecf8e,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#f06060,color:#ffd7d7;
    classDef neutral fill:#17171c,stroke:#3a3a45,color:#c9c9d2;
    class Start,Trusted success;
    class Broken dead;
    class Theme,Conf,Low,Items,Avail,SrcErr,RawItem,Match,DiscardT,Verified,Decide neutral;
    linkStyle 0,1,4,5,8,9,13,14,15 stroke:#3ecf8e,stroke-width:2px;
```

**Decisions:** confidence strong or low-signal (To-Be P3); raw source still available (traceability guard); do the quotes match the theme label, split into one theme off (discard and check another) versus a systematically broken trail (To-Be P4).
**States:** the low-signal branch is the honest thin-evidence path; a new Error state covers a source that is unavailable and a citation that cannot resolve, in which case the theme is flagged and the PM still reaches a decision on the other themes.
**Recovery:** a single mismatched theme is discarded and the PM checks another.
**Dead-end:** Broken is terminal only for a systematically broken trail, the trust-destruction anti-pattern benchmark.md warns about, kept visible so the design never hides it.
**Traces:** To-Be P3 (confidence) and P4 (spot-check). Closes GZ2: the PM acts without re-reading everything, because the evidence trail is inspectable.

---

## Flow 3 - Defend live under challenge

*Traces To-Be phase 6, closes As-Is Phase 6 (opinion outweighs unciteable evidence, GZ1, the floor at -5, the deepest win). Primary. Job: J1, E2, S1.*

```mermaid
flowchart TD
    Start(["In the room: the call is challenged"]) --> Anecdote["Anecdote lands: my customer said X"]
    Anecdote --> HasBrief{"Brief open or Sift at hand?"}
    HasBrief -->|no, offline or scrambling| Scramble["Dead end: cannot cite, back down or scramble to Intercom"]
    HasBrief -->|yes| Pull["Pull the theme live (C1 / D2)"]
    Pull --> Show["Show n=X items and verbatim quotes on the spot"]
    Show --> Convinced{"Anecdote versus traceable evidence?"}
    Convinced -->|evidence holds| Grounded(["Job closed: grounded and certain, the call stands"])
    Convinced -->|genuine new signal| Capture["Note it as new signal for the next import"]
    Capture --> Reframe(["Job closed: the disagreement is now about evidence, not ego"])

    classDef success fill:#12351f,stroke:#3ecf8e,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#f06060,color:#ffd7d7;
    classDef neutral fill:#17171c,stroke:#3a3a45,color:#c9c9d2;
    class Start,Grounded,Reframe success;
    class Scramble dead;
    class Anecdote,HasBrief,Pull,Show,Convinced,Capture neutral;
    linkStyle 0,1,3,4,5,6 stroke:#3ecf8e,stroke-width:2px;
```

**Decisions:** is the brief open or Sift at hand (the As-Is trap is being caught without it); anecdote versus traceable evidence (evidence holds, or the challenge surfaced a genuine new signal).
**States:** none of loading type here; this flow is a live, in-room interaction.
**Dead-end:** Scramble is the one legitimate terminal here. The PM is offline or without the brief, cannot cite, and backs down. This is the exact As-Is Phase 6 failure (-5), preserved so the design keeps in view what it must prevent (have the brief ready, To-Be P5, so this branch is not taken).
**Traces:** To-Be P6, the +9 inversion. The second success end (Reframe) is honest: sometimes the challenge is right, and the win is that the disagreement moves onto evidence rather than ego. Note: single-item mid-meeting capture is a fast-follow question; for MVP the new signal is simply noted for the next import.

---

## Flow 4 - Share the brief before the session

*Traces To-Be phase 5, closes As-Is Phase 5 (rationale does not land, GZ5). Primary produces, secondary and anonymous stakeholders consume. Job: S1, J4, Main.*

```mermaid
flowchart TD
    Start(["Session is scheduled"]) --> Build["Build evidence brief: pick themes + recommended priority (D1)"]
    Build --> Ready{"Brief has evidence per theme?"}
    Ready -->|no, thin| ThinWarn["Warning: some themes low-signal, label them"]
    ThinWarn --> Build
    Ready -->|yes| Gen["Loading: generate public link"]
    Gen --> Link["Public share link, no login (D2)"]
    Link --> Send["Send link to stakeholders before the session"]
    Send --> Opened{"Did the stakeholder open it?"}
    Opened -->|no or ignored| Fallback(["Not opened: defend live in the session instead (Flow 3)"])
    Opened -->|yes| Read["Stakeholder reads themes, evidence, quotes (D2)"]
    Read --> Landed(["Job closed: reasoning is legible without Sift access"])

    classDef success fill:#12351f,stroke:#3ecf8e,color:#eafff9;
    classDef dead fill:#3a1618,stroke:#f06060,color:#ffd7d7;
    classDef neutral fill:#17171c,stroke:#3a3a45,color:#c9c9d2;
    class Start,Landed success;
    class Build,Ready,ThinWarn,Gen,Link,Send,Opened,Read,Fallback neutral;
    linkStyle 0,1,4,5,6,7,9,10 stroke:#3ecf8e,stroke-width:2px;
```

**Decisions:** does the brief have evidence per theme (route back to add or label thin themes); did the stakeholder open it.
**States:** a recoverable Warning when some themes are low-signal (label them, do not hide them); Loading while the public link generates.
**No hard dead-end:** an ignored brief is not terminal. The PM falls back to defending live in the session (Flow 3), so the person is not stuck. The honest limit is that Sift cannot force a reader to open the brief, but the reasoning still gets its moment in the room.
**Traces:** To-Be P5 (walk in with a brief the room can read), the referral artifact (aarrr.md). GZ5 is supporting, and it reuses the same brief that GZ1 needs, so it comes largely for free.

---

## Coverage and honesty summary

- **No new screens.** Every screen-node above already exists in the concept-sitemap (A1, A2, B1, B2, C1, D1, D2). The flows added no screen, so the Step 5 reconciliation of concept-sitemap versus flows is clean. Real-world touchpoints (the planning session, the room) and states (empty / error / loading) are not screens.
- **States present in every flow that has a happy path:** loading (ingest, link generation), empty (no sources, no usable signal), error (CSV mapping, Intercom auth, and a source that cannot resolve a citation), and low-signal / thin warnings.
- **Recoveries versus dead-ends (tightened in Step 6):** a single failed theme (Flow 0, Flow 2) or an empty source (Flow 1) now recovers rather than terminating. The terminal red dead-ends are the honest catastrophic cases: a systematically broken evidence trail (Flow 0, Flow 2, where H1 fails), no usable feedback anywhere (Flow 1), and being caught in the room without the brief (Flow 3). Flow 4 has no hard dead-end: an ignored brief hands off to the live defend.
- **The deepest inversion (Flow 3 / To-Be P6):** the As-Is floor (-5, evidence loses to the HiPPO) becomes the moment the PM is most in control. That is the product core promise, aimed at the phase with the strongest As-Is evidence.
- **[?] carried forward:** in-meeting single-item capture (Flow 3) is fast-follow, not MVP; the new signal is noted for the next import.
