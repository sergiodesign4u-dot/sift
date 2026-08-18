/*
  design/kit/_nav.js - the ONE registry of the design system showcase, and the renderer of its
  side panel, its hub cards and its theme switch.

  OWN NAMESPACE: window.KIT_NAV. The hub design/kit/overview.html loads two registries at once,
  the roadmap from the root /_nav.js and this one, exactly as ia/structure.html does. A second
  window.NAV here would silently overwrite the roadmap, and the nav-* classes belong to the root
  renderer. Everything in this file is KIT_NAV and kit-*.

  Groups are LEVELS, not purposes: Foundations, then Atoms, Molecules, Organisms in that order,
  then Verification. By purpose a button and a login dialog are both "forms" and land side by
  side though one lives inside the other, and the same wrong order then reaches the @import
  chain. Atoms, molecules and organisms are added by Step 5; Verification by Step 9.

  Architecture stands FIRST in Foundations and not at the bottom with the audit. It is the RULES
  of the system and a system is read from its rules; the audit, the census and the coverage are
  EVIDENCE about the system and they belong to the last group. Mixed into one group at the
  bottom, the rules hide behind the reporting.

  No em dash anywhere in this file.
*/

window.KIT_NAV = [
  { id: 'foundations', label: 'Foundations', pages: [
    { file: 'architecture.html', label: 'Architecture', blurb: 'Two ladders, three surfaces, and where a fix goes' },
    { file: 'color.html',        label: 'Colour',       blurb: '82 primitives, 20 roles, both themes side by side, every ratio measured' },
    { file: 'typography.html',   label: 'Typography',   blurb: 'Two faces, ten steps, every one on real product text' },
    { file: 'geometry.html',     label: 'Geometry',     blurb: 'Space, radius and target, shown as space, radius and target' },
    { file: 'icons.html',        label: 'Icons',        blurb: 'The whole set, one sheet, at the sizes the product uses' },
  ]},
];

(function () {
  var GROUPS = window.KIT_NAV;

  function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function here() {
    var p = location.pathname; if (p.charAt(p.length-1) === '/') p += 'index.html';
    return p.split('/').pop();
  }

  /* ---- the theme switch ----
     The pair was written into tokens.css at Step 3, and a pair nobody can see is a pair nobody
     checks. It lives on the stand only: whether the product ships a theme switch is a separate
     decision, and it is not this file's to make. The choice is remembered, because a reviewer
     who walks eight pages in the light theme should not be thrown back to dark on every click. */
  var KEY = 'sift-kit-theme';
  function apply(t) {
    if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    var b = document.querySelector('.kit-theme');
    if (b) {
      b.textContent = t === 'light' ? 'Light' : 'Dark';
      b.setAttribute('aria-label', 'Theme: ' + (t === 'light' ? 'light' : 'dark') + '. Switch');
    }
  }
  function stored() { try { return localStorage.getItem(KEY) || 'dark'; } catch (e) { return 'dark'; } }
  function toggle() {
    var next = stored() === 'light' ? 'dark' : 'light';
    try { localStorage.setItem(KEY, next); } catch (e) {}
    apply(next);
  }

  /* ---- the side panel: the same four blocks as every other stage panel in this project ---- */
  function panel() {
    var mount = document.getElementById('kit-panel');
    if (!mount) return;
    var cur = here();

    var h = '<aside class="kit-panel" aria-label="Design system navigation">';
    h += '<div class="kit-panel-head">';
    h += '<a class="kit-panel-hub" href="overview.html"><span aria-hidden="true">&larr;</span> The whole system</a>';
    h += '<button class="kit-theme" type="button">Dark</button>';
    h += '<span class="kit-panel-badge">Design system</span>';
    h += '<p class="kit-panel-sub">tokens and components</p>';
    h += '</div>';

    h += '<details class="kit-panel-tree" open><summary class="kit-panel-toggle">All pages</summary><nav class="kit-tree" aria-label="Pages">';
    for (var g = 0; g < GROUPS.length; g++) {
      var grp = GROUPS[g];
      var isCur = grp.pages.some(function (p) { return p.file === cur; });
      h += '<div class="kit-group' + (isCur ? ' is-open' : '') + '">';
      h += '<div class="kit-group-t">' + esc(grp.label) + '</div>';
      if (isCur) {
        for (var i = 0; i < grp.pages.length; i++) {
          var p = grp.pages[i];
          h += '<a class="kit-link' + (p.file === cur ? ' is-current' : '') + '" href="' + esc(p.file) + '"' +
               (p.file === cur ? ' aria-current="page"' : '') + '>' + esc(p.label) + '</a>';
        }
      } else {
        h += '<a class="kit-link is-folded" href="' + esc(grp.pages[0].file) + '">' + grp.pages.length + ' pages</a>';
      }
      h += '</div>';
    }
    h += '</nav></details>';

    h += '<div class="kit-panel-links"><div class="kit-panel-links-t">Out of the system</div>';
    h += '<a href="../overview.html">&larr; The product (all screens)</a>';
    h += '<a href="../concept/concept.html">Product language (Concept) &nearr;</a>';
    h += '</div></aside>';
    mount.outerHTML = h;

    var b = document.querySelector('.kit-theme');
    if (b) b.addEventListener('click', toggle);
  }

  /* ---- the hub cards ---- */
  function cards() {
    var mount = document.getElementById('kit-cards');
    if (!mount) return;
    var h = '';
    for (var g = 0; g < GROUPS.length; g++) {
      var grp = GROUPS[g];
      h += '<section class="kit-sec" id="' + esc(grp.id) + '"><h2 class="kit-h2">' + esc(grp.label) + '</h2>';
      h += '<div class="kit-cards">';
      for (var i = 0; i < grp.pages.length; i++) {
        var p = grp.pages[i];
        h += '<a class="kit-card" href="' + esc(p.file) + '">';
        h += '<span class="kit-card-t">' + esc(p.label) + '</span>';
        h += '<span class="kit-card-d">' + esc(p.blurb) + '</span>';
        h += '<span class="kit-card-mini kit-mini--' + esc(p.file.replace('.html','')) + '" aria-hidden="true"></span>';
        h += '</a>';
      }
      h += '</div></section>';
    }
    mount.innerHTML = h;
    var b = document.querySelector('.kit-theme');
    if (b) b.addEventListener('click', toggle);
  }

  apply(stored());
  panel();
  cards();
  apply(stored());
})();
