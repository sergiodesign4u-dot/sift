# IA Node 1.0 - Auth (cluster) - Sift

*Page cluster. Group: pages. Platform entry: sign up, log in, reset password. Covers 1.0 to 1.2. No jtbd job (was ORPHAN P1), kept as a platform necessity. Source of truth for ia/auth.html. Follows ia/docs/pages/_template.md. Detail Layer, Step 5.*
*No em dash. Analysis is English; product UI labels are English.*

## Page

- **Page:** Auth · **Type:** page (sign up, log in) plus a state (reset) · **Nodes:** 1.0, 1.1, 1.2 · **Index:** noindex (transactional)
- **Purpose:** get the PM into their workspace with as little friction as possible, and back out safely.
- **Serves:** no jtbd job; a platform and account necessity. The public Shared brief (6.4) is deliberately outside auth.
- **URL / slug:** `/signup`, `/login`, `/reset` · **Breadcrumbs:** none.

## Nodes in this cluster

- **1.0 Sign up:** email or SSO, a short value reminder, and a link to log in. On success it creates a new, empty workspace and lands on 2.1 (Synthesis first-run empty).
- **1.1 Log in:** email or SSO, and a forgot-password link. On success it lands on 2.0 Synthesis.
- **1.2 Forgot / reset password:** three sub-states, request a reset, a sent confirmation, and set a new password. Returns to 1.1.

## Content blocks (priority, mobile-first)

1. **Auth shell:** a centered card on a plain surface. The brand mark, no app navigation (the PM is not in the app yet), a minimal footer with Privacy and Terms.
2. **The form:** email field, primary action, and an SSO option. Sign up adds the value reminder; log in adds the forgot link.
3. **The switch link:** sign up to log in and back.

## Components

- A minimal auth shell (brand mark only), not the app Navigation (0.1). The public marketing Navigation is also not shown here; auth is its own quiet surface.
- Footer (0.2) collapses to a minimal legal line (Privacy, Terms).

## States

- 1.0 default, 1.1 default, 1.2 (request, sent, set-new). Errors are inline and recoverable (invalid email, wrong password, expired reset link). SSO failure returns to the form with a message. No dead-ends.

## Primary CTA

- 1.0: Create workspace (to 2.1). 1.1: Log in (to 2.0). 1.2: Send reset link, then Set password (to 1.1).

## Adaptive

- **Mobile (360px):** the card is full width with comfortable padding; SSO and email stack; the primary action is full width.
- **Desktop:** the card is centered and narrow (a form does not need width); optional value copy sits beside it on sign up.

## SEO and accessibility

- **noindex** (transactional), `robots: noindex, nofollow`, no schema. Auth pages are never indexed.
- Accessibility: labeled inputs, a visible focus ring, errors tied to fields with aria-describedby, the primary action reachable by keyboard, targets at least 44px.
- Password reset never reveals whether an email exists (a neutral sent confirmation), a standard account-safety practice.

## Mockup notes (ia/auth.html)

Black and white, wireframe level, desktop and mobile (360px). Shows sign up (1.0), log in (1.1), and the three reset sub-states (1.2). Color, brand, real icons arrive at the concept stage (06).
