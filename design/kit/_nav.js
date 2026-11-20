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

  No em dash anywhere in this file.
*/

window.KIT_NAV = {
  overview: [
    { file: 'overview.html',   label: 'System overview' },
    { file: 'components.html', label: 'All components' },
  ],
  foundations: [
    { file: 'architecture.html', label: 'Architecture', blurb: 'Two ladders, three surfaces, and where a fix goes' },
    { file: 'color.html',        label: 'Colour',       blurb: '82 primitives, 20 roles, both themes side by side, every ratio measured' },
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
    { id: 'content',   label: 'Content and identity',     blurb: 'Headings, glyph holders and the person' },
    { id: 'overlays',  label: 'Overlays',                 blurb: 'What floats over the screen' },
    { id: 'shell',     label: 'Shell',                    blurb: 'The frame every screen stands in' },
  ],

  components: [
    { file: 'button.html', css: 'button.css', title: 'Button', category: 'actions', level: 1, card: true,
      purpose: 'The control that does something. One filled button per zone, and it is the next move.',
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
      uses: '18 fields', screens: '8 screens', states: 'hover, focus-visible, disabled; error is still in kit.css only' },
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
  ],

  /* 51 components after the Step 2 consolidation (docs/inventory.md, "Rows after consolidation") */
  total: 51,
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

  /* Reading order of the whole stand: overview, foundations, then components category by
     category. The pager walks it. */
  function order() {
    var out = K.overview.concat(K.foundations);
    usedCats().forEach(function (c) { inCat(c.id).forEach(function (x) { out.push({ file: x.file, label: x.title }); }); });
    return out;
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
    return '<a class="kit-link' + (isCur ? ' is-current' : '') + '" href="' + esc(file) + '"' +
      (isCur ? ' aria-current="page"' : '') + ' data-kit-q="' + esc(label.toLowerCase()) + '">' +
      '<span>' + esc(label) + '</span>' + (extra || '') + '</a>';
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
    var c = comp(here());
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

  /* ---- the hub cards: foundations, then a card per category ---- */
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
