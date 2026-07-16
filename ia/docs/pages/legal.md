# IA Nodes 9.0 to 9.2 - Content / legal - Sift

*The indexed content pages: Privacy, Terms, Security and GDPR. Covers 9.0 to 9.2. These share one template (a template map), not a separate spec each. Surfaced by the footer (0.2). Source of truth for ia/legal.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 6.*
*No em dash. Analysis is English; the ready A-E copy is product copy (English, US / EU market).*

## Reuse decision: one legal template, a template map

Legal pages are near-identical in structure, so they are a template map, not three separate specifications: one shared template plus a table of node to title / H1 / slug / schema. Change the template once; each page fills its own copy. These are the indexed surface (with Home 0.0), so each carries the A-E SEO block.

## Shared legal template

Every legal page (9.0 to 9.2) has:

1. **Marketing Navigation** (0.1, guest variant) and **Footer** (0.2, marketing).
2. **Breadcrumb:** Home > Legal > <page> (a real BreadcrumbList).
3. **H1** (the page title) and a **last-updated date**.
4. **A table of contents** for the sections (anchor links, crawlable).
5. **The content sections** (real headings, real text).
6. **A contact line** for privacy or legal questions.

## Template map (node to page)

| Node | Page | Slug | H1 | schema.org |
|---|---|---|---|---|
| 9.0 | Privacy Policy | `/privacy` | Privacy Policy | WebPage + BreadcrumbList |
| 9.1 | Terms of Service | `/terms` | Terms of Service | WebPage + BreadcrumbList |
| 9.2 | Security and GDPR | `/security` | Security and GDPR | WebPage + BreadcrumbList |

Section outlines (H2 lists):

- **9.0 Privacy:** What we collect · How we use it · PII scrubbing · Cookies · Data residency (EU) · Your rights (GDPR / CCPA) · Contact.
- **9.1 Terms:** Acceptance · The service · Acceptable use · Plans and billing · Liability · Changes · Contact.
- **9.2 Security and GDPR:** Data handling · PII scrubbing by default · Encryption · Data residency (EU) · SOC 2 (planned) · Sub-processors · DPA request · Contact.

## Components

- **Navigation** (0.1, guest) and **Footer** (0.2, marketing). No canonical component is owned here.

## States

- Static content. A slow network degrades to plain text; there is no empty or error state (the content is always present).

## Primary CTA

- None strong; the implicit action is to read and to request a DPA (9.2) or contact privacy (9.0). A soft Start free from the nav.

## Adaptive

- **Mobile (360px):** the table of contents collapses above the content (or into an in-page jump menu); the content is a single readable column; the footer accordions apply (0.2).
- **Desktop:** the table of contents is a sticky left rail beside the content.

## SEO block (A-E, indexed)

Legal pages are indexed. The A-E block is shared; per-page copy comes from the template map.

- **A. Meta tags (per page):** title like `Privacy Policy - Sift` (under 60), a one-line description under 155, canonical to the slug, `robots: index, follow`, hreflang en / en-GB, OG and Twitter.
- **B. Headings:** exactly one H1 (the page title), then the H2 list from the section outline.
- **C. Ready text:** real legal copy (drafted with counsel in production; the wireframe carries representative section text, not lorem). Placeholder specifics (exact retention periods, sub-processor list) are [?] until legal review, not invented.
- **D. Structured data:** `WebPage` plus `BreadcrumbList` (Home > Legal > page). No FAQPage unless a page is genuinely Q and A.
- **E. Checklist:** one H1; crawlable anchor TOC; canonical and hreflang; real text not images; fast, low-CLS; last-updated visible.

## Mockup notes (ia/legal.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the shared legal template rendered as the Privacy page (9.0), with the breadcrumb, the table of contents, the sections, and the last-updated date, plus the template map and the A-E block. Color, brand arrive at the concept stage (06).
