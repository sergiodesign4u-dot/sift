# IA Nodes 8.0 to 8.4 - System and global - Sift

*System pages and global components that belong to no cluster and are easy to forget: 404, 500, maintenance, cookie consent, and toasts. Covers 8.0 to 8.4. Source of truth for ia/system.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 6.*
*No em dash. Analysis is English; product UI labels are English. Cookie rules grounded in EU law (gdpr.eu), not invented.*

## Nodes

- **8.0 404 not found** (page, group pages, HTTP 404 + noindex).
- **8.1 500 server error** (page, group pages).
- **8.2 Maintenance / 503** (page, group pages).
- **8.3 Cookie consent** (component / dialog, group global).
- **8.4 Toast / notification** (component, group global).

*Registered in _nav.js as one system node (8.0) whose file documents all five; 8.3 and 8.4 are global components living in this file.*

## 8.0 - 404 not found

- **Full page,** not a bare message: it carries the header and footer, a short explanation, a search or quick links (Synthesis, Sources, Briefs, Home), and it is **never a dead-end** (never a soft-404 that returns 200).
- **HTTP status 404** and **noindex**. A wrong URL must return a real 404 so crawlers do not index it.
- Serves recovery: get the person back to a real destination in one click.

## 8.1 - 500 server error

- A **minimal, backend-independent template** (it must render even if the app is down): a short apology, a retry, and a contact or status link.
- Not indexed by design (transient). No schema.

## 8.2 - Maintenance / 503

- A minimal planned-downtime template, **HTTP 503 with a Retry-After** header so crawlers come back rather than treating the site as gone.
- A short message and, where known, an expected-back time.

## 8.3 - Cookie consent (grounded in EU law)

Sift serves the EU, so the banner follows GDPR and ePrivacy. Grounded in gdpr.eu:

- **Prior consent:** no non-essential cookies are set before the person consents. Only strictly necessary cookies run without consent, and their purpose is explained.
- **Refuse as easily as accept:** Accept all and Reject all are equally prominent, side by side. The design must not favor acceptance (no hidden or greyed reject).
- **Analytics and marketing are opt-in, off by default:** toggles start off; the person turns them on, they are never pre-checked.
- **Granular categories:** Strictly necessary (always on, no toggle), Analytics (off), Marketing (off), each with a plain-language purpose.
- **Policy link:** a link to the cookie or privacy policy (9.0).
- **Consent is stored** and re-openable later from the footer (0.2, Cookie settings) so the person can change it any time.
- It is a **global component** (a banner, not a page), shown on first visit to the public surface; the private app inherits the same consent.

## 8.4 - Toast / notification

- A transient message (success, error, info) with **aria-live** so it is announced to assistive tech.
- No SEO impact; not a page. Auto-dismiss with a manual close; never carries the only copy of critical information.
- A **global component** available across the app (for example after connecting a source or generating a share link).

## Adaptive

- **Mobile (360px):** 404 / 500 / 503 are single-column with a large tap target back to safety; the cookie banner is a bottom sheet with the two equal actions stacked or side by side; toasts appear bottom, above the tab bar.
- **Desktop:** the error pages center their content; the cookie banner is a bottom bar; toasts appear bottom-right.

## SEO and accessibility

- 8.0 returns **HTTP 404 + noindex**; 8.2 returns **HTTP 503 + Retry-After**; 8.1 is transient and not indexed. None is a soft-404.
- The cookie banner is keyboard operable, the two actions have equal prominence, toggles are labeled; the toast uses aria-live.
- Every recovery link and action is at least 44px.

## Mockup notes (ia/system.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the 404 full page, the 500 and 503 minimal templates, the cookie banner with equal Accept and Reject plus off-by-default toggles, and a toast. Color, brand, real icons arrive at the concept stage (06).
