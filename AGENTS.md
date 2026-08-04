# AGENTS.md

The rules of this repository live in **`CLAUDE.md`** at the root. Read it first: without it a
finding here will be a median opinion, not a defect of this project.

## What this repository is

Sift is a **product design pipeline**, not an application. Nothing here executes. The material is
markdown sources under `<stage>/docs/` plus the html pages that make them visible, built stage by
stage: research, user research and CJM, information architecture, wireframes, voice, concept, and
the visual half under `design/`. It is checked textually.

## Hard rules

1. **Audit is read-only.** Findings come back as a list, each with a `file:line` proof. Edits are
   made by the repository owner after an explicit go. Do not edit files unless asked in plain words.
2. **A finding without proof is not a finding.** Every claim quotes a line that really exists in the
   file. If it does not survive a re-read, it is not submitted.
3. **General advice is noise.** "Add examples", "structure it better", "consider automating" are not
   wanted. Only falsifiable discrepancies: a quote that contradicts another quote, a promise with no
   executor, a step number that does not match its heading, a link that does not resolve.
4. **Deliberate decisions of this project are not defects.** The list below is decided, not
   overlooked. When in doubt, read `CLAUDE.md` and `docs/decisions.md`; the reason is there.
   - **Wireframes are grey on purpose** and are never colored in place. From stage 06 the color goes
     on copies in `design/`; `wireframes/` stays the structural source of truth.
   - **`index.html` is the product home page, `overview.html` is the hub.** In the repo root
     `index.html` is the project entry point. There is no third meaning.
   - **The roadmap sidebar is rendered, not written.** Every page carries an empty
     `<aside id="sidebar">` and the registry `/_nav.js` draws it. A page that describes `nav-*`
     classes itself is a defect; a page that has no sidebar markup is not.
   - **Status lives in exactly two places:** `done` in `/_nav.js` and the table in `README.md`.
     Status inside `CLAUDE.md` is a defect, not an omission.
   - **Per-stage registries keep their own namespace** (`IA_NODES`, `WF_CLUSTERS`, and later
     `DESIGN_NAV`, `KIT_NAV`), because hub pages load two registries at once.
   - **`[?]` is an answer.** A number or an emotion with no source is marked, not invented.
5. **No em dash in any output file** (md or html). Commas, periods, or a spaced hyphen. This is an
   anti-AI-tell rule and it applies to the whole repository.
6. **Internal markdown is English.** Product copy embedded in markdown (the A to E SEO text in
   `ia/docs/pages/*.md`, the dictionary and examples in `voice/docs/*.md`, render labels in the
   registries) is the language of the product, also English here.
