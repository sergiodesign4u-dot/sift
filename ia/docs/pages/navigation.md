# IA Node 0.1 - Navigation (header + account menu + mobile tabs) - Sift

*Global element. Present on every page except the public Shared brief (6.4), which is standalone. Group: global. Source of truth for ia/navigation.html. Detail Layer, Step 2.*
*No em dash. Product UI labels are English (US / EU market). Mockups are wireframe level, black and white.*

## Purpose

The shell that carries the primary persona (Alex, the Overloaded PM) to the main job in the fewest taps. It changes shape by auth state: a marketing header for the guest, an app navigation for the logged-in PM. It is the main plane of internal linking, and it carries no H1 (a global component is not a page).

## Pattern research (grounded, not from the head)

- **Keep primary navigation visible, not hidden.** A hidden menu is "out of sight, out of mind" (NN/g); a tool a PM returns to constantly should keep its destinations on screen. Sift keeps Synthesis, Sources, and Briefs visible, not behind a hamburger, in the app.
- **Few top-level items.** More than 5 will not fit a tab or navigation bar at an optimum touch-target size (NN/g). Sift uses 3 app destinations plus an account corner, and 4 mobile tabs.
- **Icon plus label.** Labels accompany icons as a best practice (NN/g); Sift mobile tabs are icon and text, never icon-only.
- **Touch target minimum 44 x 44.** Apple HIG hit target and WCAG 2.5.5 (Target Size). Sift tap targets are at least 44px.
- **Bottom bar on mobile, top bar on desktop.** The tab bar sits at the bottom on mobile for thumb reach, with a thin top bar for brand and account; desktop uses one top header.
- Sources: NN/g "Mobile Navigation Patterns"; Apple HIG "Tab Bars" (44pt hit target); WCAG 2.5.5 "Target Size". [Material 3 navigation-bar page is JS-rendered and could not be fetched; the numbers above rest on the NN/g article and the documented 44px standard, not on a guess.]

## State matrix

Rows are navigation zones; columns are the auth state by device. A cell says what the zone shows.

| Zone | Guest, desktop | Guest, mobile | Logged-in, desktop | Logged-in, mobile |
|---|---|---|---|---|
| Brand | Sift logo, left, to 0.0 Home | Sift logo, top bar | Sift logo, to 2.0 Synthesis | Sift logo, thin top bar, to 2.0 |
| Primary destinations | none (marketing) | none | Synthesis / Sources / Briefs, top header | bottom tabs: Synthesis, Sources, Briefs, Account |
| Marketing links | Product, Pricing, Security | inside the menu sheet | none | none |
| Auth / account | Log in (text) + Sign up (button) | Log in + menu toggle | account avatar corner (opens menu) | Account is the 4th bottom tab |
| Utility | none | menu (hamburger) toggle | none (no global feedback search in MVP) | none |

Transitional states (both devices unless noted):

- **Account menu open** (logged-in): dropdown from the avatar with Settings (to 7.0), Plan and limits (to 7.1), Sign out (to 0.0).
- **Menu sheet open** (guest, mobile): full-height sheet with the marketing links plus Log in and Sign up.
- **Scrolled:** navigation is sticky and persists; the mobile bottom tabs are always visible (they never scroll away).
- **Active destination:** exactly one active per surface, marked with aria-current and, in the wireframe, a bold label with an indicator bar (color comes at the concept stage).

## Anatomy

| Element | Behavior | Leads to node |
|---|---|---|
| Brand logo | click | 2.0 Synthesis (app) or 0.0 Home (guest) |
| Synthesis (tab) | click; active on the Synthesis surface | 2.0 |
| Sources (tab) | click | 3.0 |
| Briefs (tab) | click | 6.0 |
| Account (avatar desktop / tab mobile) | desktop opens the menu; mobile opens the account shell | 7.0 and the menu |
| Account menu: Settings | click | 7.0 |
| Account menu: Plan and limits | click | 7.1 |
| Account menu: Sign out | click | 0.0 Home |
| Log in (guest) | click | 1.1 |
| Sign up (guest) | click | 1.0 |
| Pricing / Product / Security (guest) | click | 0.0 sections and 9.2 Security |

## Transitions

- App header and mobile tabs reach every primary cluster: 2.0 Synthesis, 3.0 Sources, 6.0 Briefs, and 7.0 Account.
- The guest header reaches the auth cluster (1.0, 1.1) and the marketing and legal surfaces (0.0 sections, 9.2).
- The public Shared brief (6.4) renders none of this: it is a standalone page with no app chrome, reached by its share link.

## SEO and accessibility

- **No H1 here.** A global component does not own the page heading; each page node sets its own H1.
- **Main internal-linking plane.** Destinations are crawlable `<a>` links; the marketing header links to Product, Pricing, and Security, which is where indexable pages benefit.
- **Semantics.** A `<nav>` landmark with an aria-label; `aria-current="page"` on the active destination; the mobile tab bar is a `<nav>` with visible text labels, not icon-only.
- **Targets.** Every tap target is at least 44px; icon plus label on mobile tabs.
- **Breadcrumbs** are not part of the global nav. Where a drill path needs them (for example Theme detail to Evidence source), they are page-level and defined on those nodes.

## Mockup notes (ia/navigation.html)

Black and white, wireframe level. Desktop: the app header (brand left, the three destinations, account avatar right) with an account-menu-open variant, and the guest marketing header. Mobile (360px base): the app thin top bar plus a four-tab bottom bar (icon and label), and the guest top bar with an open menu sheet. Color, brand, and real icons arrive at the concept stage (06).
