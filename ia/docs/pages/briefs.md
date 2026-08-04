# IA Node 6.0 - Decide and defend / Briefs (cluster) - Sift

*Page cluster. Group: pages. The output artifact: capture the call and give stakeholders something to read and challenge. Covers 6.0 to 6.5. Includes the one public surface (6.4), which is public to view but noindex. Source of truth for ia/briefs.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 5.*
*No em dash. Analysis is English; product UI labels are English.*

## Page

- **Page:** Decide and defend / Briefs · **Type:** page (with a build flow, a dialog, a public view, and states) · **Nodes:** 6.0 to 6.5 · **Index:** noindex (see the per-node note below)
- **Purpose:** turn the trusted picture into a prioritization call, and package it so a stakeholder can read and challenge it without a Sift seat.
- **Serves:** Main (the call), S1, J1, J4.
- **URL / slug:** `/app/briefs` (list and build); the public brief is `/b/<token>`.

## Nodes in this cluster

- **6.0 Briefs (list):** saved briefs with title, date, and share status; a New brief action.
- **6.1 Build evidence brief (D1):** select themes (the canonical theme card), state a recommended priority and rationale, then generate the share link.
- **6.2 Brief: thin-theme warning:** if a selected theme is low-signal, label it, do not hide it. Honest confidence in the shared artifact.
- **6.3 Brief: share-link generated:** a dialog with the public link, a copy action, the link-generation loading, and the access note (no login to view).
- **6.4 Shared brief (public, no login) (D2):** the read-only public view: top themes, evidence, source quotes, recommended priority. The stakeholder and referral surface. **Standalone: no app navigation.**
- **6.5 Briefs: empty:** one explanation and a Build first brief CTA.

## Indexation per node (important)

- 6.0, 6.1, 6.2, 6.3, 6.5 are the private app: **noindex**, no schema.
- **6.4 Shared brief is public to view but noindex** (`robots: noindex, nofollow`). It is reachable by anyone with the link, but it carries customer verbatim data, so it must never be indexed. Public access and search indexing are different things; this node is the clearest example in the product.

## Content blocks (priority, mobile-first)

*6.1, 6.2 and 6.3 take their composition from `ia/docs/blocks.md`, Type 6 (artifact composer). 6.0 and
6.5 belong to Type 3 and 6.4 to Type 7, both still to be done.*

1. **App header** (Navigation 0.1) on 6.0 to 6.3, 6.5. **6.4 has no app header** (standalone public page with only a light Sift mark).
2. **6.0 list** of briefs, or the 6.5 empty state.
3. **6.1 build**, in order:
   a. **Stage indicator**: Build, Share, What they see. The PM builds this before a meeting and has to
      see how many steps are left.
   b. **Brief title with a draft marker.** A brief with no name is one nobody finds again in 6.0, and
      the draft dot says out loud that nothing has been shared yet.
   c. **Ordered list of the selected themes, reorderable.** The order IS the recommended priority, so
      it is editable and pre-filled by signal rank. Each row keeps its `n=X` and its low-signal badge
      while it moves, so a thin theme cannot be quietly promoted without the promoter seeing it is thin.
   d. **The PM's rationale, in its own field,** visually separate from the evidence, so a reader can
      always tell the claim from what supports it.
   e. **Thin-theme warning (6.2)** before publishing: which themes are thin, and label rather than drop.
   f. **Preview** of 6.4 exactly as the stakeholder will see it, then the Generate link action.
4. **6.3 dialog:** a plain sentence naming the consequence (anyone with the link can read it without
   logging in, and it contains scrubbed customer feedback), the link shown in full, Copy, and
   **Disable link**.
5. **6.4 public view:** brief title, recommended priority, each theme with its confidence and a few evidence quotes, a light Sift mark, no app nav.
6. **App footer** (0.2) on the private pages; 6.4 has only a minimal public line.

**Deliberately not built: an editor for the content of a brief item.** Every composer source has one.
We do not, because the brief carries each theme as the synthesis produced it; a rewritten quote would
break the chain the whole product rests on (Design principle 5). What the PM adds goes in block 3d.

## Components

- **Navigation** (0.1) and **Footer** (0.2) on the private pages only.
- **Theme card**, **Confidence indicator** (canonical, owned by 2.0) in selection and in the public view.
- **Evidence snippet** (canonical, owned by 4.0) as the public quote in 6.4.

## States

- **6.0 populated and 6.5 empty are one screen** with the groups filled or not (`blocks.md` Type 3,
  row 2), the same rule that joins 3.0 and 3.4. A saved brief is a managed object with a lifecycle,
  so the list splits into Shared and Drafts: that split already exists in the data and it decides
  what the row's one action is, Open for a shared brief and Continue for a draft. The scope line says
  what the briefs were built from, because a list of documents with no denominator lets a brief from
  a month ago read as current.
- **6.5 empty** is the only state where the head action moves. On 3.4 the available-sources group
  carries the action, so the head can stay empty; here there is no second group, so the single action
  sits in the empty block and the head does not repeat it. Two "Build brief" buttons on one screen
  would be two primary actions in the same second.
- **6.1 building**; **6.2 thin-theme warning** is 6.1 with a notice and nothing removed, and the
  notice fires on the thing worth interrupting for: not that a thin theme is in the brief, but that
  it has been ranked above themes with several times its evidence. It is recoverable (label and
  continue) and the row keeps its `n` and its low-signal badge at whatever position it is dragged to,
  so a thin theme cannot be quietly promoted. **6.3 generating link** (loading) then generated. An
  ignored public brief is not a dead-end (Flow 4 hands off to defend live).
- **Changed decision: revoking a share link moves from fast-follow to MVP.** The first pass marked it
  `[?] fast-follow`. The block bank (Type 6, row 11) overturns that, and the reason is not a feature
  argument: the shared brief is a public URL over customer feedback, so a link with no off switch is a
  compliance hole rather than a missing nicety. It is the same stance as PII-scrub-by-default, and it
  costs one control in the dialog that already exists. Recorded in `docs/decisions.md`.

## Primary CTA

- 6.0: Build brief, in the screen head. 6.1: Generate share link. 6.4: none (read-only); the implicit action is that the stakeholder reads and is convinced.

## Adaptive

- **Mobile (360px):** the build screen stacks selection over priority; the public brief 6.4 is a single readable column, which matters because stakeholders often open the link on a phone.
- **Desktop:** build is selection plus a priority panel; 6.4 is a centered readable column.

## SEO and accessibility

- Private nodes: **noindex**, no schema.
- **6.4 Shared brief: noindex, nofollow**, but it IS a public URL, so it must be fast, readable, and self-explanatory without any Sift chrome. It carries a light Sift mark (referral), not the app nav. Accessible: semantic headings per theme, the confidence indicator as text, quotes as real text, targets at least 44px.
- No login wall on 6.4 (the whole point); the token in the URL is the access control, and the content is PII-scrubbed like everywhere else.

## Mockup notes (ia/briefs.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the briefs list (6.0), the build screen with theme selection and the thin-theme warning (6.1, 6.2), the share-link dialog (6.3), and the standalone public brief with no app nav (6.4). Color, brand, real data arrive at the concept stage (06).
