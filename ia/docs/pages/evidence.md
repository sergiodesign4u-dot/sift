# IA Node 5.0 - Evidence source - Sift

*Page. Group: pages. A single raw feedback item in context, the end of the theme to items to raw-quote chain. The differentiator, the surface used to defend live under challenge. Covers 5.0 and the 5.1 redacted / unavailable state. Source of truth for ia/evidence.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 5.*
*No em dash. Analysis is English; product UI labels are English.*

## Page

- **Page:** Evidence source · **Type:** page · **Nodes:** 5.0, 5.1 (redacted / unavailable) · **Index:** noindex (private app)
- **Purpose:** show the exact customer voice behind a theme, in context, so the PM can trust it and defend it live.
- **Serves:** Main, J1, J3, E1, E2. This is where the As-Is Phase 6 dead-end (evidence loses to the anecdote) inverts.
- **URL / slug:** `/app/evidence/<id>` · **Breadcrumbs:** Synthesis > Theme > Evidence. The full drill path.

## Content blocks (priority, mobile-first)

1. **App header** (Navigation 0.1).
2. **Breadcrumb** Synthesis > Theme > Evidence (the whole chain, so the PM never loses the trail).
3. **Raw item:** the full verbatim text (not truncated here, unlike the snippet), the channel and date, the scrubbed author reference, and which source it came from (the import batch or connection).
4. **Provenance and links:** which theme(s) this item supports, with the citation number, and a back-to-theme action. This closes the chain and makes it defensible.
5. **App footer** (0.2, minimal).

## States (nodes)

- **5.0 default:** the full item in context.
- **5.1 redacted (PII) / unavailable:** the item was PII-scrubbed beyond display, or its source was removed or cannot resolve. Shows an honest notice (why: PII / source removed), the affected-citation note, and back to theme. This is the traceability guard from Flow 2: rather than showing a broken or fabricated quote, Sift admits the item cannot be shown and flags the theme. Honesty over a false citation.

## Components

- **Navigation** (0.1), **Footer** (0.2, app minimal).
- **Evidence snippet** (canonical, owned by 4.0): this page is its expanded, in-context form. It does not re-define the snippet, it renders the full item.

## Primary CTA

Back to theme (to 4.0), or copy the quote for a brief.

## Adaptive

- **Mobile (360px):** the verbatim text is the top block, full width; provenance and the back action stack below; the breadcrumb collapses to a back chevron plus the theme name.
- **Desktop:** the verbatim text sits in a readable column; provenance in a side panel or below.

## SEO and accessibility

- **noindex** (private app), `robots: noindex, follow`, no schema. Customer verbatim data must never be indexed.
- The verbatim text is real text, selectable and copyable (needed to quote it in a meeting).
- The redaction notice (5.1) is announced (aria-live is not needed, it is static, but it is a clear labeled region), not a silent blank.
- The back-to-theme and citation links have accessible names; targets at least 44px.

## Notes

- **The chain ends here.** theme (4.0) to items (n=X) to this raw source. There is no deeper node; this is the ground truth every claim resolves to (sitemap.md, E1, the traceable-or-it-does-not-exist principle).
- **Defend-live surface.** In Flow 3 (defend under challenge), this is what the PM pulls up on the spot: n=X plus the verbatim quote. The design must make it fast to reach and readable in a meeting.

## Mockup notes (ia/evidence.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the full raw item in context (5.0) and the redacted / unavailable state (5.1) with its honest notice. Color, brand, real data arrive at the concept stage (06).
