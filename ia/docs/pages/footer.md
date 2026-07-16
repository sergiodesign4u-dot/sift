# IA Node 0.2 - Footer - Sift

*Global element. Group: global. The second plane of internal linking (after the header). Source of truth for ia/footer.html. Detail Layer, Step 3.*
*No em dash. Product UI labels are English. Mockups are wireframe level, black and white.*

## Purpose

The footer carries trust and crawlable internal links. Like the navigation, it has two contexts by surface, not one footer everywhere:

- **Marketing footer** (full): on the public surface (0.0 Home, 9.x Legal). Trust strip, link columns, an SEO internal-link block, and a bottom row. This is the second internal-linking plane and the place indexable pages benefit.
- **App footer** (minimal): inside the authed app (Synthesis, Sources, Briefs, Account). A single thin line, copyright plus Privacy, Terms, Status. The app is noindex, so it needs no SEO link block, and a dense footer would compete with the dense data work (Design Principle 2, calm under density).
- **Absent** on the public Shared brief (6.4): standalone, only a light copyright line, no site footer.

## Structure (marketing footer)

1. **Trust strip** (above the footer, recurring on every marketing page). Sift handles sensitive customer feedback with PII, so the recurring trust signal is about data safety, not shipping or returns: GDPR-ready, EU data residency, PII scrubbed by default, SOC 2 Type II (planned year 2). Grounded in the compliance section of the brief, not invented.
2. **Link columns:**
   - **Product:** Synthesis (2.0), Sources (3.0), Briefs (6.0), Pricing (0.0 section).
   - **Resources:** Security and GDPR (9.2), Status [?] (external status page), Docs / Help [?] (support surface).
   - **Legal:** Privacy (9.0), Terms (9.1), Security and GDPR (9.2), Cookie settings (opens 8.3).
   - **Company** [?]: About, Contact. Marketing-site surface, see the scope note below.
3. **SEO internal-link block:** the second crawlable-link plane. For a B2B tool this is modest (a small set of solution or use-case pages), not a marketplace long tail. Structure is fixed here; the exact link list is [?] pending keyword research, and it points at the marketing surface (see scope note). Links are real crawlable `<a>`, not script-driven.
4. **Bottom row:** copyright, compliance badges (GDPR, SOC 2 in progress) where honest, and social links.

## Scope note (honest boundary, not a silent gap)

Sift is mostly a private, authed tool. The indexed surface modeled in this IA is only the marketing Home (0.0) and the legal pages (9.x). A full marketing site (About, Careers, Blog, Docs, Help, Status, per-use-case landing pages) is a separate marketing-site concern and is deliberately OUT of this app-IA scope. The footer shows representative links to it, marked [?], so the wireframe is realistic, but only Home and Legal are modeled as nodes. This is a stated boundary so the Step 7 audit does not read it as an accidental unregistered direction. There is no marketplace-style city or category landing grid, because this product has none.

## Directions the footer promises, and their nodes

- Privacy -> 9.0 (exists). Terms -> 9.1 (exists). Security and GDPR -> 9.2 (exists). Cookie settings -> 8.3 (exists, opens the consent manager).
- Product links -> existing app nodes (2.0, 3.0, 6.0). Pricing -> 0.0 marketing section.
- Status, Docs / Help, About, Contact, and the SEO block targets -> marketing surface, [?], out of scope per the note above. No new node is invented for them.

No new sitemap.md node is required by the footer: every modeled direction already exists, and the rest are an explicit out-of-scope boundary.

## State matrix

| Zone | Marketing, desktop | Marketing, mobile | App, desktop | App, mobile |
|---|---|---|---|---|
| Trust strip | full (4 signals) | stacked | none (shown in-app elsewhere) | none |
| Link columns | 4 columns | accordions (collapsed, in DOM) | none | none |
| SEO link block | full row | accordion (collapsed, in DOM) | none | none |
| Bottom row | copyright + badges + social | stacked | thin line: copyright, Privacy, Terms, Status | thin line, wraps |

Mobile note: the link columns and the SEO block collapse into accordions. They are collapsed visually but present and crawlable in the DOM (never injected on expand), so the second internal-linking plane still works for crawlers on mobile.

## Anatomy

| Element | Behavior | Leads to |
|---|---|---|
| Trust strip item | static, non-link (or to 9.2) | 9.2 Security and GDPR |
| Product: Synthesis / Sources / Briefs | click | 2.0 / 3.0 / 6.0 |
| Product: Pricing | click | 0.0 (marketing section) |
| Legal: Privacy / Terms / Security | click | 9.0 / 9.1 / 9.2 |
| Legal: Cookie settings | click, opens the consent manager | 8.3 |
| Resources: Status / Docs / Help | click | marketing surface [?] |
| SEO block link | click, crawlable | marketing surface [?] |
| Social / badges | click | external |

## SEO and accessibility

- **No H1** (global component). Uses the `contentinfo` (footer) landmark.
- **Second internal-linking plane:** all footer links are crawlable `<a>`; on mobile the accordions keep the links in the DOM while collapsed.
- **Accordions** are keyboard operable, with aria-expanded; targets at least 44px.
- **App footer** is minimal and inside a noindex surface, so it carries no schema and no SEO link block.
- **Cookie settings** reopens the consent manager (8.3) so a user can change consent at any time, an EU-law expectation.

## Mockup notes (ia/footer.html)

Black and white, wireframe level. Desktop: the marketing footer (trust strip, four columns, SEO link row, bottom row) and the minimal app footer line. Mobile (360px): the marketing footer with the columns and SEO block as collapsed accordions, and the thin app footer. Color, brand, and real icons arrive at the concept stage (06).
