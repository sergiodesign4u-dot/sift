# IA Node 0.0 - Home (marketing landing) - Sift

*Page. Group: pages. The exemplar page for the Detail Layer (Step 4): it sets the bar every other page follows. Source of truth for ia/home.html. Follows ia/docs/pages/_template.md.*
*No em dash. Analysis is English; the A-E ready copy is product copy (English, US / EU market) and wireframes carry it verbatim.*

## Page

- **Page:** Home (marketing landing) · **Type:** page · **Node:** 0.0
- **Purpose:** turn a first-time visitor into a trial, and return a logged-in PM to the main job in one clear step.
- **Serves:** Acquisition (AARRR); the guest visitor, and the returning PM.
- **URL / slug:** `/` · **Breadcrumbs:** none (root). **Index:** indexed.

## Content blocks (priority, mobile-first)

Block order is reasoned from the 360px view first, then promoted to desktop.

1. **Hero (first screen).** H1 value proposition, one-line subhead, primary CTA, and a secondary link. Carries the state-dependent personal strip (below).
2. **Trust strip.** GDPR-ready, EU data residency, PII scrubbed by default, SOC 2 Type II (planned). The same recurring signal as the footer, because the product handles sensitive feedback.
3. **The problem.** Scattered feedback across Intercom, CSV, calls, and reviews; the roadmap pays for it. Names the pain the persona feels (cjm-as-is Phase 6).
4. **How it works (3 steps).** Connect sources, see synthesized themes with confidence, trace every claim to the raw quote. Mirrors the main flow (Flow 0).
5. **The differentiator.** Traceability shown, not told: theme, to evidence items (n=X), to the verbatim quote. Uses the canonical confidence indicator and theme card (demo, static).
6. **Shareable brief teaser.** A public link the stakeholder can read without a login. The referral artifact.
7. **Pricing teaser.** Free plan plus paid, with a link to the full pricing. The conversion nudge (hits the signal-volume wall later).
8. **Final CTA.** One more Start free, restating the value.
9. **Footer** (marketing context, node 0.2).

## Components (from the library, referenced not re-specified)

- **Navigation** (0.1), guest and logged-in variants.
- **Footer** (0.2), marketing context.
- **Confidence indicator** and **Theme card** (canonical, owned by 2.0) appear as a static demo inside block 5.

## States

- **Guest** (default): primary CTA is Start free, secondary is Log in.
- **Logged-in:** the personal strip greets the PM and swaps the hero CTA to Go to Synthesis (to 2.0); the visitor does not re-read the pitch.
- No empty / loading / error states here (static marketing page). A slow-network state degrades to plain text and the same CTAs.

## Filters / facets

None (not a listing page).

## Primary CTA

- Guest: **Start free** (to 1.0 Sign up).
- Logged-in: **Go to Synthesis** (to 2.0).

## Adaptive

- **Mobile (360px):** single column; hero CTA full width above the fold; the 3 how-it-works steps stack; the traceability demo becomes a vertical chain; trust strip wraps to two rows.
- **Desktop:** hero is two columns (copy left, product still right); how-it-works is a 3-up row; the differentiator is a left-to-right chain.

## SEO block (A-E)

### A. Meta tags (ready copy)

- **title** (50 chars): `Sift - Turn customer feedback into clear decisions`
- **description** (147 chars): `Sift turns scattered customer feedback into ranked, evidence-backed themes. Every roadmap call traces to the real user quote behind it. Start free.`
- **canonical:** `https://sift.app/`
- **hreflang:** en (default), en-GB. [Domain is a placeholder [?] until chosen.]
- **robots:** `index, follow`
- **Open Graph / Twitter:** og:title and twitter:title as the H1; og:description as the meta description; og:image a branded card (produced at the concept stage); og:type website.

### B. Heading structure (one H1, then H2 in block order)

- **H1:** Turn scattered customer feedback into decisions you can defend.
- **H2:** Your signal is scattered. Your roadmap pays for it. (block 3)
- **H2:** How Sift works (block 4)
- **H2:** Every theme traces to the quote behind it (block 5)
- **H2:** Share a brief the room can read (block 6)
- **H2:** Pricing (block 7)
- **H2:** Start with your own feedback (block 8)

### C. Ready SEO text (real copy, not a placeholder)

- **Hero subhead:** Sift reads your support tickets, sales calls, reviews, and interviews, and gives you a ranked, evidence-backed picture of what customers need most, with every claim traceable to the quote behind it.
- **Problem:** Feedback lives in Intercom, CSV exports, call recordings, and app-store reviews. Reading and tagging it by hand takes hours, and the roadmap still comes down to whoever spoke loudest in the room.
- **How it works:** Connect a source (CSV or Intercom). Sift clusters the feedback into themes and shows how strong each one is. Open any theme to read the exact customer quotes behind it.
- **Differentiator:** No black box. Each theme shows its evidence count (n=X) and a low-signal badge when the evidence is thin, and drills down to the verbatim source. If a claim cannot be traced, it is marked, not dressed up.
- **Brief:** Build an evidence brief and share a public link. Stakeholders read the themes, the evidence, and the recommended priority without a login and without a Sift seat.
- **Pricing:** Start free with a monthly signal limit. Upgrade when you need full coverage and traceability. [Exact query volumes [?] until production.]

### D. Structured data

- `SoftwareApplication` (name Sift, applicationCategory BusinessApplication, offers with a free tier), plus `Organization` for the brand. `BreadcrumbList` not needed at the root.

### E. Optimization checklist

- Exactly one H1 (the hero).
- LCP is the hero heading and CTA, kept text-based for a fast first paint.
- All destinations are crawlable `<a>` (nav and footer are the two linking planes).
- canonical set; hreflang en / en-GB.
- Value copy is real text, never baked into an image.
- Core Web Vitals in mind: no layout shift from the hero, images lazy-loaded below the fold.

## Mockup notes (ia/home.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the block order, the guest and logged-in hero variants, and the traceability demo. The H1 and H2 labels in the wireframe are the ready copy above, so the wireframe stage renders them verbatim. Color, brand, and imagery arrive at the concept stage (06).
