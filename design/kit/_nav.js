/*
  design/kit/_nav.js - the ONE registry of the design system showcase, and the renderer of its
  side panel, its crumbs, its component headers, its "All components" table, its hub cards, its
  pager and its theme switch.

  OWN NAMESPACE: window.KIT_NAV. Every page of design/kit/ carries this panel and none renders
  the project roadmap; the panel's first line is the way back to it. A second window.NAV here
  would silently overwrite the roadmap renderer, and the nav-* classes belong to /_nav.js.
  Everything in this file is KIT_NAV and kit-*.

  TWO ORDERS, AND THEY ANSWER TWO DIFFERENT QUESTIONS (decided 2026-11-20, docs/decisions.md,
  "The showcase is read by purpose, the code is loaded by level"):
  - The CODE is ordered by LEVEL. design/system/index.css imports atoms, then molecules, then
    organisms, so the cascade agrees with the anatomy. That rule did not change.
  - The SHOWCASE is read by PURPOSE. A person looking for "the thing that filters a list" does
    not know it is a molecule. Components are grouped by category here, and the level is a
    column and a chip on every page, never lost. Model: the AMA Energy lab and the Global Design
    System file (categories as pages, a card per component).

  To add a component: one entry in COMPONENTS below with its file, title, category, level,
  ONE sentence of purpose taken from its css header, where it stands (from the Step 5 register
  in docs/inventory.md), and `card: true` once its page is in the card format (button.html is
  the template). A component missing here has no page in the panel; that is a bug.

  PAGE SECTIONS (Stage 09 Step 3): a page may declare window.KIT_SECTIONS = [{ id, label }], and
  the panel lists them under the current link, as the roadmap does with NAV_SECTIONS. Its own
  name, because this file owns KIT_* only. A section in the list is a section somebody can find.

  PATTERNS (Stage 09 Step 2): a fixed composition of the components, kept in
  design/system/patterns/ and imported after the organisms. They have their own group in the
  panel, AFTER the components and before Verification, so the panel reads in the order the
  system is built: foundations, atoms, molecules, organisms, patterns. patterns.html opens the
  group the way architecture.html opens Foundations. To add a pattern: one entry in PATTERNS
  with its file, css, title, one sentence of purpose, the components it is built from, its grey
  screens (the count, three or more) and its colour pages (the proof).

  No em dash anywhere in this file.
*/

window.KIT_NAV = {
  overview: [
    { file: 'overview.html',   label: 'System overview' },
    /* Stage 09 Step 3: the guide for a person who did not build the system. It is also the
       door the roadmap registers as the child "System guide" of the Design System group. */
    { file: 'why.html',        label: 'System guide' },
    { file: 'components.html', label: 'All components' },
  ],
  /* The evidence ABOUT the system, not part of it: its own group, last in the panel (Stage 08
     Step 9). The pixel proof carries the stage's critique summary and its numbers. */
  verification: [
    { file: 'pixel-proof.html', label: 'Pixel proof and critique' },
  ],
  /* The page that opens the Patterns group: when to take a pattern and when the components. */
  patternsHub: { file: 'patterns.html', label: 'Pattern or components',
    blurb: 'When a fixed composition is taken whole, when the components are put together by hand, and the candidates waiting for a third screen' },
  patterns: [
    { file: 'grouped-list.html', css: 'patterns/grouped-list.css', title: 'Grouped list',
      purpose: 'A list cut into named groups: a heading that counts its group, then the group, repeated.',
      built: 'Group heading over a list of rows, a grid of source cards, or an inline empty state',
      grey: '3.0, 4.0, 6.0', greyN: 3, colourN: 3, pages: 8 },
    { file: 'filtered-list.html', css: 'patterns/filtered-list.css', title: 'Filtered list',
      purpose: 'A list and the toolbar that narrows or orders it, as one block.',
      built: 'Toolbar over a list of theme rows, a grouped list of snippets, or the rows of a brief',
      grey: '2.0, 4.0, 6.1', greyN: 3, colourN: 3, pages: 6 },
  ],
  foundations: [
    { file: 'architecture.html', label: 'Architecture', blurb: 'Two ladders, three surfaces, how the system grows, where a fix goes, and the usage rules' },
    { file: 'color.html',        label: 'Colour',       blurb: '81 primitives, 22 colour roles, both themes side by side, every ratio measured, the theme stress test' },
    { file: 'typography.html',   label: 'Typography',   blurb: 'Two faces, ten steps, every one on real product text' },
    { file: 'geometry.html',     label: 'Geometry',     blurb: 'Space, radius and target, shown as space, radius and target' },
    { file: 'icons.html',        label: 'Icons',        blurb: 'The whole set, one sheet, at the sizes the product uses' },
  ],

  /* Categories by purpose. All eight are declared now, so a molecule or an organism lands in a
     place that already has a name; a category with no component yet is not drawn. */
  categories: [
    { id: 'actions',   label: 'Actions',                  blurb: 'Where the person acts or travels' },
    { id: 'forms',     label: 'Forms',                    blurb: 'Where the person types, ticks and submits' },
    { id: 'filtering', label: 'Filtering and navigation', blurb: 'Narrowing a list, and moving between places' },
    { id: 'evidence',  label: 'Evidence',                 blurb: 'How a claim shows its work: count, citation, rank, denominator' },
    { id: 'feedback',  label: 'Feedback and state',       blurb: 'What the product says while it waits, fails or changes' },
    { id: 'content',   label: 'Content and identity',     blurb: 'Headings, rows and cards of things, glyph holders and the person' },
    { id: 'overlays',  label: 'Overlays',                 blurb: 'What floats over the screen' },
    { id: 'shell',     label: 'Shell',                    blurb: 'The frame every screen stands in' },
  ],

  components: [
    { file: 'button.html', css: 'button.css', title: 'Button', category: 'actions', level: 1, card: true,
      purpose: 'The control that does something. One filled button per screen, and it is the next move.',
      uses: '128 in the product', screens: 'every screen', states: 'hover, pressed, focus-visible, disabled' },
    { file: 'link.html', css: 'link.css', title: 'Inline text link', category: 'actions', level: 1, card: true,
      purpose: 'A link travels, a button acts. The family for the 88 anchors that had no declaration.',
      uses: '88', screens: '18 screens', states: 'hover, focus-visible' },
    { file: 'cardrow.html', css: 'cardrow.css', title: 'List row link', category: 'actions', level: 1, card: true,
      purpose: 'A row that IS the link. The whole strip is the target.',
      uses: '3', screens: '7.0', states: 'hover, focus-visible' },
    { file: 'drag.html', css: 'drag.css', title: 'Drag handle', category: 'actions', level: 1, card: true,
      purpose: 'The grip of the composer, where the order is the output.',
      uses: '7', screens: '6.1, 6.2', states: 'the cursor only' },

    { file: 'input.html', css: 'input.css', title: 'Input', category: 'forms', level: 1, card: true,
      purpose: 'One component, three elements: text, textarea and select share one zone set.',
      uses: '18 fields', screens: '8 screens', states: 'hover, focus-visible, disabled; the error is the Field message' },
    { file: 'checkbox.html', css: 'checkbox.css', title: 'Checkbox', category: 'forms', level: 1, card: true,
      purpose: '24px by a named exception, because a 44px box would double every ranked row.',
      uses: '11', screens: '2.0, 7.2', states: 'hover, checked, focus-visible, disabled' },
    { file: 'field-label.html', css: 'field-label.css', title: 'Field label', category: 'forms', level: 1, card: true,
      purpose: 'Three content forms, one of which stands exactly once in the product.',
      uses: '14', screens: '6 screens', states: 'none, not interactive' },

    { file: 'chip.html', css: 'chip.css', title: 'Filter chip', category: 'filtering', level: 1, card: true,
      purpose: 'The facet that carries its own count, and does not take the accent.',
      uses: '12', screens: '5 screens', states: 'hover, on, focus-visible, disabled' },

    { file: 'confidence.html', css: 'confidence.css', title: 'Confidence indicator', category: 'evidence', level: 1, card: true,
      purpose: 'Mandatory in MVP. Never colour alone: the count and the word carry it.',
      uses: '24', screens: '9 screens', states: 'none, not interactive' },
    { file: 'citation.html', css: 'citation.css', title: 'Citation marker', category: 'evidence', level: 1, card: true,
      purpose: 'Where the accent goes on a document: the evidence marker.',
      uses: '25 static, 6 linked', screens: '5 screens', states: 'hover and focus on the linked form' },
    { file: 'rank.html', css: 'rank.css', title: 'Rank number', category: 'evidence', level: 1, card: true,
      purpose: 'A ranking claim is quotable only if the position is written down.',
      uses: '16', screens: '4 screens', states: 'none, not interactive' },
    { file: 'scope.html', css: 'scope.css', title: 'Scope line', category: 'evidence', level: 1, card: true,
      purpose: 'The denominator. A ranking with no denominator cannot be checked.',
      uses: '13 screens', screens: '13 screens', states: 'four content states, in words' },

    { file: 'tag.html', css: 'tag.css', title: 'Status tag', category: 'feedback', level: 1, card: true,
      purpose: 'One anatomy, one word of state. Merged from three classes at Stage 07.',
      uses: '8', screens: '7 screens', states: 'none, not interactive' },
    { file: 'skeleton.html', css: 'skeleton.css', title: 'Skeleton bar', category: 'feedback', level: 1, card: true,
      purpose: 'Shaped like what arrives, so the wait promises the right thing.',
      uses: '3 screens', screens: '2.2, 4.2, 6.3', states: 'the shimmer, off under reduced motion' },

    { file: 'avatar.html', css: 'avatar.css', title: 'Avatar', category: 'content', level: 1, card: true,
      purpose: 'A monochrome disc, and it stays one. Reads at 28, hit at 44.',
      uses: '28, 27 in the app bar', screens: '28 screens', states: 'focus-visible' },
    { file: 'iconslot.html', css: 'iconslot.css', title: 'Icon slot', category: 'content', level: 1, card: true,
      purpose: 'One shape at several sizes, and every size sizes its own glyph.',
      uses: '34 screens', screens: '34 screens', states: 'none, not interactive' },
    { file: 'group-heading.html', css: 'group-heading.css', title: 'Group heading', category: 'content', level: 1, card: true,
      purpose: 'Three forms, and the axis is the neighbour rather than the look.',
      uses: '29', screens: '12 screens', states: 'none, not interactive' },

    /* ---- level 2, molecules: round 2 of Step 5, 2026-11-21 ---- */
    { file: 'selbar.html', css: 'selbar.css', title: 'Selection bar', category: 'actions', level: 2, card: true,
      purpose: 'Present only while something is selected, so the screen never shows two primary actions.',
      uses: '3: on selection 1, static 2 (measured)', screens: '2.0, 6.1, 6.2', states: 'none of its own; hidden or present is the shell trigger' },
    { file: 'actionbar.html', css: 'actionbar.css', title: 'Action bar', category: 'actions', level: 2, card: true,
      purpose: 'The row where a screen closes: its actions, and an optional note pushed left.',
      uses: '4: actions only 3, with a note 1', screens: '3.2, 3.3, 3.6, 6.1', states: 'none, not interactive' },

    { file: 'field.html', css: 'field.css', title: 'Form field', category: 'forms', level: 2, card: true,
      purpose: 'A label, a control, an optional trailing link and an optional error line under it.',
      uses: '5 screens', screens: '1.0, 1.1, 1.2, 3.2, 6.1', states: 'error line; hover and focus are the input\'s' },
    { file: 'auth-card.html', css: 'auth-card.css', title: 'Auth card', category: 'forms', level: 2, card: true,
      purpose: 'The sheet of the logged-out screens: the form, the value beside it, the sent confirmation.',
      uses: 'form 3, value 3, sent 1', screens: '1.0, 1.1, 1.2 (grey only)', states: 'none, not interactive' },

    { file: 'toolbar.html', css: 'toolbar.css', title: 'Toolbar (filter and sort)', category: 'filtering', level: 2, card: true,
      purpose: 'Full row above 820, one Filter button with the count below. Canonical, owner 2.0.',
      uses: '6', screens: '2.0, 3.0, 4.0, 5.0, 6.0, 6.1', states: 'at rest, filtered (Clear appears)' },
    { file: 'breadcrumb.html', css: 'breadcrumb.css', title: 'Breadcrumb', category: 'filtering', level: 2, card: true,
      purpose: 'The way back, one line, never the way forward.',
      uses: '9 screens', screens: '9 screens', states: 'hover, focus-visible' },
    { file: 'legal-toc.html', css: 'legal-toc.css', title: 'Legal table of contents', category: 'filtering', level: 2, card: true,
      purpose: 'A wrapping link list in a box, so a long document is navigable from its head.',
      uses: '3', screens: '9.0, 9.1, 9.2 (grey only)', states: 'hover, focus-visible' },

    { file: 'theme-card.html', css: 'theme-card.css', title: 'Theme card (ranked row)', category: 'evidence', level: 2, card: true,
      purpose: 'The ranked row of 2.0: the claim, the quote that stands for it, and its confidence.',
      uses: '6 rows', screens: '2.0', states: 'hover, selected, focus-visible' },
    { file: 'snippet.html', css: 'snippet.css', title: 'Evidence snippet', category: 'evidence', level: 2, card: true,
      purpose: 'The customer\'s words first, in primary ink; everything about them in mono. Owner 4.0.',
      uses: '12', screens: '4.0, 4.1', states: 'hover, focus-visible; redacted is a mark' },
    { file: 'provlist.html', css: 'provlist.css', title: 'Provenance list', category: 'evidence', level: 2, card: true,
      purpose: 'Where one item came from, a line per fact. Promoted from one-off at Step 2, built at Step 6.',
      uses: '3', screens: '5.0, 5.1, 3.6 (colour on 5.0 and 5.1)', states: 'none, not interactive; its links keep their own' },

    { file: 'notice.html', css: 'notice.css', title: 'Notice band', category: 'feedback', level: 2, card: true,
      purpose: 'One statement about the screen, and the tone is the claim: neutral, amber, red.',
      uses: '7: information 5, warning 1, error 1', screens: '7 screens', states: 'none, not interactive' },
    { file: 'phase-strip.html', css: 'phase-strip.css', title: 'Phase strip', category: 'feedback', level: 2, card: true,
      purpose: 'The phases of a process, named before the user commits. Never the accent.',
      uses: '6 screens', screens: '2.1, 2.2, 3.2, 3.3, 6.1, 6.2', states: 'per step: upcoming, current, done' },
    { file: 'skeleton-card.html', css: 'skeleton-card.css', title: 'Skeleton card', category: 'feedback', level: 2, card: true,
      purpose: 'The wait laid out as what arrives: a theme-card row, or a generic stack of bars.',
      uses: '2 shapes', screens: '2.2, 4.2, 6.3', states: 'none, not interactive' },

    { file: 'screen-head.html', css: 'screen-head.css', title: 'Screen head', category: 'content', level: 2, card: true,
      purpose: 'Identity, the one action at rest, and the denominator under it.',
      uses: '15 screens', screens: '15 screens', states: 'none; the action hides while the selection bar is up' },
    { file: 'source-row.html', css: 'source-row.css', title: 'Source row', category: 'content', level: 2, card: true,
      purpose: 'A connected source: name, stats, status. The failed one says what happened and offers the retry.',
      uses: '6: healthy 5, failed 1', screens: '3.0, 3.5, 3.6', states: 'hover; connected, syncing, failed' },
    { file: 'source-card.html', css: 'source-card.css', title: 'Source card (available)', category: 'content', level: 2, card: true,
      purpose: 'What is available but not connected yet. An unavailable one says so on its face.',
      uses: '9: connectable 6, not yet 3', screens: '3.0, 3.4, 3.5', states: 'none, not interactive' },
    { file: 'brief-row.html', css: 'brief-row.css', title: 'Saved brief row', category: 'content', level: 2, card: true,
      purpose: 'A managed object with a status and one way in. Not a variant of the composer row.',
      uses: '3: shared 2, draft 1', screens: '6.0', states: 'row hover, title hover, focus-visible' },
    { file: 'composer-row.html', css: 'composer-row.css', title: 'Composer brief row', category: 'content', level: 2, card: true,
      purpose: 'A theme in the brief being built. The order is the output, so the handle comes first.',
      uses: '[?]', screens: '6.1, 6.2', states: 'none of its own; dragging [?]' },
    { file: 'account-row.html', css: 'account-row.css', title: 'Account row', category: 'content', level: 2, card: true,
      purpose: 'A setting named and explained in one sentence. In its checkbox form the whole row is the label.',
      uses: 'text only 1, with a checkbox 1', screens: '7.1, 7.2', states: 'checked (the checkbox\'s)' },
    { file: 'tier-card.html', css: 'tier-card.css', title: 'Marketing tier card', category: 'content', level: 2, card: true,
      purpose: 'One card per plan on the home page. The price is the number, so it is set in mono.',
      uses: '4 on 0.0 (measured)', screens: '0.0', states: 'none, not interactive' },
    { file: 'step-card.html', css: 'step-card.css', title: 'Marketing step card', category: 'content', level: 2, card: true,
      purpose: 'A numbered promise, with the product\'s own confidence indicator as the proof.',
      uses: '3 on 0.0 (measured)', screens: '0.0', states: 'none, not interactive' },

    /* ---- level 3, organisms: round 3 of Step 5, 2026-11-21 ---- */
    { file: 'form.html', css: 'form.css', title: 'Form', category: 'forms', level: 3, card: true,
      purpose: 'Only the rhythm between fields, labels and buttons, which are components already.',
      uses: '9: auth 3, connect 2, settings 2, composer 2', screens: '9 screens (grey)', states: 'rest; submitting [?]; error is the field\'s line' },
    { file: 'state.html', css: 'state.css', title: 'Empty and error state', category: 'feedback', level: 3, card: true,
      purpose: 'Icon, title, one explanation and an exit: what a view says when it has nothing or failed.',
      uses: '8: centred 6, inline 2', screens: '8 screens', states: 'none, not interactive; empty, error, first run' },
    { file: 'dialog.html', css: 'dialog.css', title: 'Dialog', category: 'overlays', level: 3, card: true,
      purpose: 'The floating sheet for one decision. A destructive action is held apart, never beside the primary.',
      uses: '2', screens: '6.3, 3.6', states: 'rest, generating' },
    { file: 'legal-doc.html', css: 'legal-doc.css', title: 'Legal document', category: 'content', level: 3, card: true,
      purpose: 'A reading column for policy and terms: crumb, H1, meta, contents, prose, related.',
      uses: '3', screens: '9.0, 9.1, 9.2 (grey only)', states: 'links: hover, focus-visible' },
    { file: 'public-doc.html', css: 'public-doc.css', title: 'Public document (shared brief)', category: 'content', level: 3, card: true,
      purpose: 'The read-only brief a person outside the workspace reads: one column, no action in it.',
      uses: '1', screens: '6.4', states: 'none, not interactive' },
    { file: 'screen-shell.html', css: 'screen-shell.css', title: 'Screen shell', category: 'shell', level: 3, card: true,
      purpose: 'The frame a screen stands in: header, main, footer, tabs. It owns the selection trigger.',
      uses: '27 screens', screens: '27 screens', states: 'none of its own; it shows the selection bar on a tick' },
    { file: 'app-header.html', css: 'app-header.css', title: 'App header', category: 'shell', level: 3, card: true,
      purpose: 'Brand, three sections and the account. The text tabs give way to the bottom tabs at 820.',
      uses: '27 screens', screens: 'every signed-in screen', states: 'per tab: rest, hover, current, focus-visible' },
    { file: 'bottom-tabs.html', css: 'bottom-tabs.css', title: 'Bottom tabs', category: 'shell', level: 3, card: true,
      purpose: 'The mobile navigation at 820 and below: the three sections plus Account.',
      uses: '27 screens', screens: 'every signed-in screen, 820 and below', states: 'per tab: rest, current, focus-visible' },
    { file: 'app-footer.html', css: 'app-footer.css', title: 'App footer', category: 'shell', level: 3, card: true,
      purpose: 'One line at the foot of every frame: where you are, and that PII is scrubbed by default.',
      uses: '27 screens', screens: '27 screens', states: 'none, not interactive' },
    { file: 'public-bar.html', css: 'public-bar.css', title: 'Public bar', category: 'shell', level: 3, card: true,
      purpose: 'The top bar of every screen read without signing in: the brand and one line of context.',
      uses: '10 screens', screens: '0.0, 1.x, 6.4, 8.x, 9.x', states: 'none, not interactive' },
    { file: 'account-shell.html', css: 'account-shell.css', title: 'Account shell', category: 'shell', level: 3, card: true,
      purpose: 'Side nav plus panel on the four account screens. The nav sits above the panel when narrow.',
      uses: '4 screens', screens: '7.0, 7.1, 7.2, 7.3', states: 'per nav item: rest, hover, current, focus-visible' },
    { file: 'marketing-shell.html', css: 'marketing-shell.css', title: 'Marketing page shell', category: 'shell', level: 3, card: true,
      purpose: 'The home page column: hero, sections and grids at marketing measure, read before sign-in.',
      uses: '1 screen', screens: '0.0', states: 'none, not interactive' },
  ],

  /* 50 components: Step 2 counted 51, corrected at Step 6 (docs/inventory.md, "Rows after consolidation") */
  total: 50,
};

(function () {
  var K = window.KIT_NAV;
  var LEVEL = { 1: 'Atom', 2: 'Molecule', 3: 'Organism' };
  var WIDE = window.matchMedia('(min-width: 901px)');   /* the panel's own break, as in _page.css */

  function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function here() {
    var p = location.pathname; if (p.charAt(p.length-1) === '/') p += 'index.html';
    return p.split('/').pop();
  }
  function cat(id) { for (var i = 0; i < K.categories.length; i++) if (K.categories[i].id === id) return K.categories[i]; return null; }
  function inCat(id) { return K.components.filter(function (c) { return c.category === id; }); }
  function usedCats() { return K.categories.filter(function (c) { return inCat(c.id).length; }); }
  function usesLine(c) { return c.uses === c.screens ? esc(c.screens) : esc(c.uses) + ' &middot; ' + esc(c.screens); }
  function comp(file) { for (var i = 0; i < K.components.length; i++) if (K.components[i].file === file) return K.components[i]; return null; }
  function pat(file) { for (var i = 0; i < K.patterns.length; i++) if (K.patterns[i].file === file) return K.patterns[i]; return null; }
  function patLine(x) { return x.greyN + ' grey screens, ' + x.colourN + ' in colour &middot; ' + x.pages + ' colour pages'; }

  /* Reading order of the whole stand: overview, foundations, then components category by
     category, then the verification group. The pager walks it. */
  function order() {
    var out = K.overview.concat(K.foundations);
    usedCats().forEach(function (c) { inCat(c.id).forEach(function (x) { out.push({ file: x.file, label: x.title }); }); });
    out.push(K.patternsHub);
    K.patterns.forEach(function (x) { out.push({ file: x.file, label: x.title }); });
    return out.concat(K.verification);
  }

  /* ---- the theme switch ----
     The pair was written into tokens.css at Step 3, and a pair nobody can see is a pair nobody
     checks. It lives on the stand only. The choice is remembered across pages. */
  var KEY = 'sift-kit-theme';
  function stored() { try { return localStorage.getItem(KEY) || 'dark'; } catch (e) { return 'dark'; } }
  function apply(t) {
    if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    var bs = document.querySelectorAll('.kit-theme');
    for (var i = 0; i < bs.length; i++) {
      bs[i].textContent = t === 'light' ? 'Light' : 'Dark';
      bs[i].setAttribute('aria-label', 'Theme: ' + (t === 'light' ? 'light' : 'dark') + '. Switch');
    }
  }
  function toggle() {
    var next = stored() === 'light' ? 'dark' : 'light';
    try { localStorage.setItem(KEY, next); } catch (e) {}
    apply(next);
  }

  /* ---- the side panel ----
     Head (way out, title with the count, filter, theme), then Overview, Foundations and the
     component categories. Only the category you stand in is open; typing in the filter opens
     every category that still has a match. */
  function link(file, label, cur, extra) {
    var isCur = file === cur;
    var h = '<a class="kit-link' + (isCur ? ' is-current' : '') + '" href="' + esc(file) + '"' +
      (isCur ? ' aria-current="page"' : '') + ' data-kit-q="' + esc(label.toLowerCase()) + '">' +
      '<span>' + esc(label) + '</span>' + (extra || '') + '</a>';
    /* the sections of the page you stand on, if it declares them */
    var secs = window.KIT_SECTIONS;
    if (isCur && secs && secs.length) {
      h += '<div class="kit-subs">';
      secs.forEach(function (s) { h += '<a class="kit-sub" href="#' + esc(s.id) + '">' + esc(s.label) + '</a>'; });
      h += '</div>';
    }
    return h;
  }

  function panel() {
    var mount = document.getElementById('kit-panel');
    if (!mount) return;
    var cur = here();

    var h = '<aside class="kit-panel" aria-label="Design system navigation">';
    h += '<div class="kit-panel-head">';
    h += '<a class="kit-panel-out" href="../../index.html"><span aria-hidden="true">&larr;</span> Project roadmap</a>';
    h += '<div class="kit-panel-title"><span>Design system</span><span class="kit-panel-count" title="components built, of the consolidated total">' +
         K.components.length + '/' + K.total + '</span></div>';
    h += '<div class="kit-panel-tools"><label class="vh" for="kit-q">Find in the system</label>' +
         '<input class="kit-q" id="kit-q" type="search" placeholder="Find a component" autocomplete="off">' +
         '<button class="kit-theme" type="button">Dark</button></div>';
    h += '</div>';

    /* On a phone the panel is a block above the page, folded, so the page is the first thing
       read and not the fifth screen down; from 901px it is a column and always open. */
    h += '<details class="kit-panel-tree"' + (WIDE.matches ? ' open' : '') + '><summary class="kit-panel-toggle">All pages</summary><nav class="kit-tree" aria-label="Pages">';

    h += '<div class="kit-group"><div class="kit-group-t">Overview</div>';
    K.overview.forEach(function (p) { h += link(p.file, p.label, cur); });
    h += '</div>';

    h += '<div class="kit-group"><div class="kit-group-t">Foundations</div>';
    K.foundations.forEach(function (p) { h += link(p.file, p.label, cur); });
    h += '</div>';

    h += '<div class="kit-group"><div class="kit-group-t">Components</div>';
    usedCats().forEach(function (c) {
      var list = inCat(c.id);
      var open = list.some(function (x) { return x.file === cur; });
      h += '<details class="kit-cat"' + (open ? ' open' : '') + '>';
      h += '<summary class="kit-cat-t"><span>' + esc(c.label) + '</span><span class="kit-cat-n">' + list.length + '</span></summary>';
      list.forEach(function (x) {
        h += link(x.file, x.title, cur, '<span class="kit-lvl" title="' + LEVEL[x.level] + '">' + LEVEL[x.level].charAt(0) + '</span>');
      });
      h += '</details>';
    });
    h += '<p class="kit-q-none" hidden>Nothing in the system by that name.</p>';
    h += '</div>';

    /* after the organisms, as the patterns are imported after them in index.css */
    h += '<div class="kit-group"><div class="kit-group-t">Patterns</div>';
    h += link(K.patternsHub.file, K.patternsHub.label, cur);
    K.patterns.forEach(function (x) { h += link(x.file, x.title, cur); });
    h += '</div>';

    h += '<div class="kit-group"><div class="kit-group-t">Verification</div>';
    K.verification.forEach(function (p) { h += link(p.file, p.label, cur); });
    h += '</div>';

    h += '</nav></details>';

    h += '<div class="kit-panel-links"><div class="kit-panel-links-t">Out of the system</div>';
    h += '<a href="../overview.html">The product, all screens</a>';
    h += '<a href="../concept/concept.html">Product language (Concept)</a>';
    h += '</div></aside>';
    mount.outerHTML = h;

    var q = document.getElementById('kit-q');
    if (q) q.addEventListener('input', function () {
      var tree = document.querySelector('.kit-panel-tree');
      if (tree && q.value) tree.open = true;
      filter(q.value);
    });
    /* the current page is in view in the panel, even when its category is far down the list */
    var tree = document.querySelector('.kit-panel-tree'), here_ = document.querySelector('.kit-link.is-current');
    if (tree && here_ && WIDE.matches) {
      var d = here_.getBoundingClientRect().top - tree.getBoundingClientRect().top;
      if (d > tree.clientHeight - 60) tree.scrollTop = d - tree.clientHeight / 2;
    }
    var keep = function () { var t = document.querySelector('.kit-panel-tree'); if (t && WIDE.matches) t.open = true; };
    if (WIDE.addEventListener) WIDE.addEventListener('change', keep);
  }

  function filter(v) {
    v = v.trim().toLowerCase();
    var any = false;
    var links = document.querySelectorAll('.kit-tree .kit-link');
    for (var i = 0; i < links.length; i++) {
      var hit = !v || links[i].getAttribute('data-kit-q').indexOf(v) !== -1;
      links[i].hidden = !hit;
      if (hit && v) any = true;
    }
    var cats = document.querySelectorAll('.kit-cat');
    for (var j = 0; j < cats.length; j++) {
      var has = cats[j].querySelectorAll('.kit-link:not([hidden])').length > 0;
      cats[j].hidden = !has;
      if (v) cats[j].open = has;
    }
    var groups = document.querySelectorAll('.kit-tree > .kit-group');
    for (var g = 0; g < groups.length; g++) {
      groups[g].hidden = !!v && !groups[g].querySelector('.kit-link:not([hidden])');
    }
    var none = document.querySelector('.kit-q-none');
    if (none) {
      none.hidden = !v || any;
      if (v && !any) none.parentNode.hidden = false;
    }
  }

  /* ---- crumbs: Design system / Components / <category> ---- */
  function crumbs() {
    var mount = document.getElementById('kit-crumbs');
    if (!mount) return;
    var c = comp(here());
    var h = '<nav class="kit-crumbs" aria-label="Breadcrumb"><a href="overview.html">Design system</a>';
    if (c) {
      h += '<span aria-hidden="true">/</span><a href="components.html">Components</a>';
      h += '<span aria-hidden="true">/</span><a href="components.html#' + esc(c.category) + '">' + esc(cat(c.category).label) + '</a>';
    } else if (pat(here())) {
      h += '<span aria-hidden="true">/</span><a href="patterns.html">Patterns</a>';
    } else if (here() === K.patternsHub.file) {
      h += '<span aria-hidden="true">/</span><span>Patterns</span>';
    } else if (K.foundations.some(function (p) { return p.file === here(); })) {
      h += '<span aria-hidden="true">/</span><span>Foundations</span>';
    }
    mount.outerHTML = h + '</nav>';
  }

  /* ---- a component page's head, read from the catalog: one source for the panel, the table
     and the page, so a title or a level cannot disagree between them ---- */
  function head() {
    var mount = document.getElementById('kit-head');
    if (!mount) return;
    var c = comp(here()), p = pat(here());
    if (p) {
      var g = '<header class="kit-comp-head">';
      g += '<div class="kit-eyebrow">Pattern &middot; a composition of components</div>';
      g += '<h1 class="kit-h1">' + esc(p.title) + '</h1>';
      g += '<p class="kit-purpose">' + esc(p.purpose) + '</p>';
      g += '<div class="kit-chips">';
      g += '<span class="kit-chip"><span class="kit-chip-k">Code</span> ' + esc(p.css) + '</span>';
      g += '<span class="kit-chip">' + patLine(p) + '</span>';
      g += '<span class="kit-chip kit-chip--ok">Ready</span>';
      g += '</div></header>';
      mount.outerHTML = g;
      return;
    }
    if (!c) return;
    var h = '<header class="kit-comp-head">';
    h += '<div class="kit-eyebrow">' + esc(cat(c.category).label) + ' &middot; ' + LEVEL[c.level] + '</div>';
    h += '<h1 class="kit-h1">' + esc(c.title) + '</h1>';
    h += '<p class="kit-purpose">' + esc(c.purpose) + '</p>';
    h += '<div class="kit-chips">';
    h += '<span class="kit-chip"><span class="kit-chip-k">Code</span> ' + esc(c.css) + '</span>';
    h += '<span class="kit-chip">' + usesLine(c) + '</span>';
    h += '<span class="kit-chip kit-chip--ok">Ready</span>';
    h += '</div></header>';
    mount.outerHTML = h;
  }

  /* ---- tabs: Overview, Technical, History. One page, three panels; the address keeps the tab
     (#tech, #history) so a link can point at the token table directly. Without script every
     panel shows, one under the other, and nothing is lost. ---- */
  function tabs() {
    var bar = document.querySelector('.kit-tabs');
    if (!bar) return;
    var btns = Array.prototype.slice.call(bar.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(document.querySelectorAll('.kit-tabpanel'));
    function show(id, push) {
      if (!document.getElementById(id)) id = panels[0].id;
      btns.forEach(function (b) {
        var on = b.getAttribute('aria-controls') === id;
        b.setAttribute('aria-selected', on ? 'true' : 'false');
        b.tabIndex = on ? 0 : -1;
      });
      panels.forEach(function (p) { p.hidden = p.id !== id; });
      if (push) history.replaceState(null, '', id === panels[0].id ? location.pathname : '#' + id);
    }
    btns.forEach(function (b) {
      b.addEventListener('click', function () { show(b.getAttribute('aria-controls'), true); });
      b.addEventListener('keydown', function (e) {
        var k = btns.indexOf(b);
        if (e.key === 'ArrowRight') k = (k + 1) % btns.length;
        else if (e.key === 'ArrowLeft') k = (k - 1 + btns.length) % btns.length;
        else return;
        e.preventDefault(); btns[k].focus(); show(btns[k].getAttribute('aria-controls'), true);
      });
    });
    var start = location.hash.replace('#', '');
    var owner = start ? document.getElementById(start) : null;
    var host = owner ? (owner.classList.contains('kit-tabpanel') ? owner : owner.closest('.kit-tabpanel')) : null;
    show(host ? host.id : panels[0].id, false);
    if (owner && host && owner !== host) owner.scrollIntoView();
  }

  /* ---- the "All components" table, per category ---- */
  function all() {
    var mount = document.getElementById('kit-all');
    if (!mount) return;
    var h = '';
    usedCats().forEach(function (c) {
      var list = inCat(c.id);
      h += '<section class="kit-sec" id="' + esc(c.id) + '"><h2 class="kit-h2">' + esc(c.label) + ' &middot; ' + list.length + '</h2>';
      h += '<p class="kit-note">' + esc(c.blurb) + '</p>';
      h += '<div class="tbl-wrap"><table class="kit-tbl kit-tbl--index"><thead><tr><th>Component</th><th>File</th><th>Level</th><th>In the product</th><th>States</th><th>Page</th></tr></thead><tbody>';
      list.forEach(function (x) {
        h += '<tr><td><a href="' + esc(x.file) + '">' + esc(x.title) + '</a></td><td><code>' + esc(x.css) + '</code></td><td>' + LEVEL[x.level] + '</td>' +
             '<td>' + usesLine(x) + '</td><td>' + esc(x.states) + '</td>' +
             '<td>' + (x.card ? '<span class="pass">card</span>' : 'old layout') + '</td></tr>';
      });
      h += '</tbody></table></div></section>';
    });
    mount.innerHTML = h;
  }

  /* ---- the hub cards: foundations, a card per category, then the patterns ---- */
  function cards() {
    var mount = document.getElementById('kit-cards');
    if (!mount) return;
    var h = '<section class="kit-sec" id="foundations"><h2 class="kit-h2">Foundations</h2><div class="kit-cards">';
    K.foundations.forEach(function (p) {
      h += '<a class="kit-card" href="' + esc(p.file) + '"><span class="kit-card-t">' + esc(p.label) + '</span>' +
           '<span class="kit-card-d">' + esc(p.blurb) + '</span>' +
           '<span class="kit-card-mini kit-mini--' + esc(p.file.replace('.html', '')) + '" aria-hidden="true"></span></a>';
    });
    h += '</div></section>';
    h += '<section class="kit-sec" id="components"><h2 class="kit-h2">Components by purpose</h2><div class="kit-cards">';
    usedCats().forEach(function (c) {
      var list = inCat(c.id);
      h += '<a class="kit-card" href="components.html#' + esc(c.id) + '"><span class="kit-card-t">' + esc(c.label) +
           ' <span class="kit-card-n">' + list.length + '</span></span><span class="kit-card-d">' + esc(c.blurb) + '</span>' +
           '<span class="kit-card-list">' + list.map(function (x) { return esc(x.title); }).join(' &middot; ') + '</span></a>';
    });
    h += '</div></section>';
    /* the second level of the system: compositions of the components above */
    h += '<section class="kit-sec" id="patterns"><h2 class="kit-h2">Patterns</h2><div class="kit-cards">';
    h += '<a class="kit-card" href="' + esc(K.patternsHub.file) + '"><span class="kit-card-t">' + esc(K.patternsHub.label) + '</span>' +
         '<span class="kit-card-d">' + esc(K.patternsHub.blurb) + '</span></a>';
    K.patterns.forEach(function (x) {
      h += '<a class="kit-card" href="' + esc(x.file) + '"><span class="kit-card-t">' + esc(x.title) + '</span>' +
           '<span class="kit-card-d">' + esc(x.purpose) + '</span>' +
           '<span class="kit-card-list">' + patLine(x) + '. Grey: ' + esc(x.grey) + '</span></a>';
    });
    h += '</div></section>';
    mount.innerHTML = h;
  }

  /* ---- previous / next along the reading order ---- */
  function pager() {
    var mount = document.getElementById('kit-pager');
    if (!mount) return;
    var o = order(), cur = here(), i = -1;
    for (var k = 0; k < o.length; k++) if (o[k].file === cur) i = k;
    if (i < 0) { mount.parentNode.removeChild(mount); return; }
    var h = '<nav class="kit-pager" aria-label="Previous and next page">';
    h += o[i - 1] ? '<a class="kit-pager-prev" href="' + esc(o[i - 1].file) + '"><span>Previous</span>' + esc(o[i - 1].label) + '</a>' : '<span></span>';
    h += o[i + 1] ? '<a class="kit-pager-next" href="' + esc(o[i + 1].file) + '"><span>Next</span>' + esc(o[i + 1].label) + '</a>' : '<span></span>';
    mount.outerHTML = h + '</nav>';
  }

  function boot() {
    panel(); crumbs(); head(); all(); cards(); pager(); tabs();
    var bs = document.querySelectorAll('.kit-theme');
    for (var i = 0; i < bs.length; i++) bs[i].addEventListener('click', toggle);
    apply(stored());
  }

  apply(stored());
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
