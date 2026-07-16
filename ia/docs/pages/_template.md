# Per-page IA template - Sift Detail Layer

*The shape every ia/docs/pages/<name>.md follows, so all pages read the same and nothing is invented inside a wireframe. Detail Layer, Step 4. No em dash. Analysis and field labels are English; ready product copy in the A-E SEO block is in the product language (English for Sift, US / EU market).*

## Page template (fields in order)

- **Page:** <name> · **Type:** page | dialog | state · **Node:** X.Y
- **Purpose:** one line · **Serves job(s):** <codes from jtbd.md, or Acquisition / platform>
- **URL / slug** · **Breadcrumbs:** A > B > C (or none for a root)
- **Content blocks (priority, mobile-first):** 1 (first screen) -> 2 -> ... Block order is reasoned from the 360px mobile view first.
- **Components (from the library) + variants:** Navigation(role), Footer(context), and any canonical component from sitemap.md (confidence indicator, theme card, evidence snippet, filter control, source-type enum). Reference them, never re-specify.
- **States:** guest | logged-in | role | empty | loading | error | ... (each significant state is its own node in the map)
- **Filters / facets:** for listing pages only
- **Primary CTA:** the one clear next step
- **Adaptive:** mobile stack -> desktop notes
- **SEO block A-E** (below) on every indexed page; private / transactional zones are noindex with no schema

## SEO block (A-E, every indexed page)

- **A. Meta tags, ready copy:** title <= 60 chars, description <= 155 chars, canonical, hreflang (en, and en-GB / eu where relevant), robots, OG and Twitter.
- **B. Heading structure:** exactly one H1, then the H2 list in block order.
- **C. Ready SEO text:** real copy, not "fill later". Final query volumes stay [?] until production.
- **D. Structured data:** the schema.org type for the page (for example SoftwareApplication, Organization, FAQPage, BreadcrumbList).
- **E. Optimization checklist:** one H1; LCP target; crawlable `<a>`; canonical plus hreflang; text is real text, not baked into images; Core Web Vitals in mind.

## noindex rule

Private and transactional zones (Auth, Synthesis app, Sources, Theme, Evidence, Briefs, Account, the public Shared brief that carries customer data) are noindex and carry no schema. Only the marketing Home (0.0) and the legal pages (9.x) are indexed. See sitemap.md, section 2, indexation stance.
