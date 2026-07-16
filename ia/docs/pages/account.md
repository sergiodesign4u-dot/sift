# IA Node 7.0 - Account / settings (cluster) - Sift

*Page cluster. Group: pages. One shell with sections, not N pages: plan and limits, data and privacy, profile. Covers 7.0 to 7.3. No jtbd job (was ORPHAN P2), kept thin as a platform and compliance necessity. Source of truth for ia/account.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 5.*
*No em dash. Analysis is English; product UI labels are English.*

## Page

- **Page:** Account / settings · **Type:** page shell with sections · **Nodes:** 7.0 (shell), 7.1, 7.2, 7.3 · **Index:** noindex (private app)
- **Purpose:** hold the plan and limits (conversion), the PII-scrub default and data controls (compliance), and the profile, at low prominence.
- **Serves:** no jtbd job; the business model (7.1) and compliance (7.2) live here. Kept thin under D1 (single-PM workspace).
- **URL / slug:** `/app/settings` with section anchors or sub-routes · **Breadcrumbs:** none (reached from the account corner).

## One shell, not N pages (reuse decision)

Account is a single shell with a section list that mirrors the account areas, not four separate pages. New sections slot into the same shell. This follows the template's private-multi-section-zone rule and keeps the surface calm and low-prominence.

## Nodes / sections

- **7.0 Shell:** the frame, a section list (Plan and limits, Data and privacy, Profile) and the content area.
- **7.1 Plan and limits (billing):** current plan, the signal-volume usage against the limit, and upgrade. **The free-to-paid conversion surface**: the PM hits the volume wall here, at a moment of real need (aarrr conversion hypothesis).
- **7.2 Data and privacy:** the PII-scrub default toggle (on by default), the data-residency note (EU), and export or delete of data (GDPR and CCPA). Links to 9.2 Security and GDPR.
- **7.3 Profile / sign out:** name, email, password, and sign out (to 0.0).

## Content blocks (priority, mobile-first)

1. **App header** (Navigation 0.1); the account corner brought the PM here.
2. **Section list** (Plan and limits, Data and privacy, Profile).
3. **The active section content.**
4. **App footer** (0.2, minimal).

## Components

- **Navigation** (0.1), **Footer** (0.2, app minimal).
- No canonical component is owned here; this is a thin platform surface.

## States

- Free plan (shows the usage bar and the upgrade path) versus paid (shows the plan and billing). Near-limit and over-limit are emphasis states on 7.1 (the conversion moment). Toggles on 7.2 have on and off. Nothing here is a dead-end.

## Primary CTA

- 7.1: Upgrade (the conversion action). 7.2: Save data settings. 7.3: Sign out.

## Adaptive

- **Mobile (360px):** the section list becomes a top list; tapping a section opens its content full width (a master-detail pattern); the usage bar stays legible.
- **Desktop:** the section list is a left rail beside the content.

## SEO and accessibility

- **noindex** (private app), `robots: noindex, follow`, no schema.
- The usage bar is not color-only (a number plus a label, "480 of 500 items this month"); toggles have labels and states; the destructive delete-data action has a confirm; targets at least 44px.
- Data export and delete are reachable by keyboard and clearly labeled (a compliance and trust expectation).

## Mockup notes (ia/account.html)

Black and white, wireframe level, desktop and mobile (360px). Shows the shell with the three sections: plan and limits with the usage bar near the free limit (7.1), data and privacy with the PII-scrub toggle (7.2), and profile with sign out (7.3). Color, brand, real data arrive at the concept stage (06).
