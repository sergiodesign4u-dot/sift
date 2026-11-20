/*
  design/kit/_states.js - the state matrix of a component page, drawn by the product's OWN rules.

  hover, active and focus-visible are mutually exclusive on one element, so a page cannot show
  them side by side alive. This script reads every rule of design/system/ that carries one of
  those pseudo-classes and writes a twin of it with the pseudo-class replaced by an attribute:

      .btn:hover { ... }   ->   .btn[data-kit-st~="hover"] { ... }

  Same declarations, same specificity (an attribute weighs what a pseudo-class weighs), same
  order. Nothing is drawn by hand: a state that the CSS does not paint does not appear in the
  matrix either, and a change in button.css reaches the matrix on the next load. This is the
  method of the Global Design System capture ("capture --matrix") and of the AMA Energy lab
  (lab-states.tsx), moved to a static page.

  The attribute exists only inside a .kit-matrix, which is marked inert, so a twin can never
  meet a product element. disabled is the real attribute and needs no twin.

  The snapshots on the Technical tab stay: they are the same states taken with a real pointer
  and a real keyboard, and Step 9 compares the two.

  Only sheets under /design/system/ are read: the stand's own chrome has states too, and those
  must not leak into the specimen.

  No em dash anywhere in this file.
*/
(function () {
  var MAP = [[':hover', 'hover'], [':active', 'active'], [':focus-visible', 'focus']];

  /* split a selector list on its top-level commas, leaving :is( a, b ) intact */
  function split(sel) {
    var out = [], depth = 0, cur = '';
    for (var i = 0; i < sel.length; i++) {
      var ch = sel.charAt(i);
      if (ch === '(') depth++;
      if (ch === ')') depth--;
      if (ch === ',' && depth === 0) { out.push(cur.trim()); cur = ''; } else cur += ch;
    }
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  function twin(rule) {
    var made = [];
    split(rule.selectorText).forEach(function (p) {
      var q = p, hit = false;
      MAP.forEach(function (m) {
        if (q.indexOf(m[0]) !== -1) { q = q.split(m[0]).join('[data-kit-st~="' + m[1] + '"]'); hit = true; }
      });
      if (hit) made.push(q);
    });
    return made.length ? made.join(', ') + ' { ' + rule.style.cssText + ' }' : '';
  }

  /* Each twin is inserted directly after its original, in the same sheet or @media block, so it
     keeps the original's place in the cascade as well as its specificity. Appending the twins at
     the end of the document was wrong: there a twin outranks every later rule of equal weight,
     and .check:checked, which follows .check:hover, lost to the forced hover. Walking backwards
     keeps the indices of the rules not yet visited. */
  function walk(list, parent, count) {
    for (var i = list.length - 1; i >= 0; i--) {
      var r = list[i];
      if (r.styleSheet) { count = readSheet(r.styleSheet, count); continue; }      /* @import */
      if (r.media && r.cssRules) { count = walk(r.cssRules, r, count); continue; }  /* @media */
      if (r.selectorText) {
        var t = twin(r);
        if (t) { try { parent.insertRule(t, i + 1); count++; } catch (e) { /* unparsable twin: skip */ } }
      }
    }
    return count;
  }

  function readSheet(sheet, count) {
    if (!sheet.href || sheet.href.indexOf('/design/system/') === -1) return count;
    var rules;
    try { rules = sheet.cssRules; } catch (e) { return count; }
    return walk(rules, sheet, count);
  }

  function build() {
    if (!document.querySelector('.kit-matrix')) return;
    if (document.documentElement.hasAttribute('data-kit-states')) return;
    var n = 0;
    for (var i = 0; i < document.styleSheets.length; i++) n = readSheet(document.styleSheets[i], n);
    document.documentElement.setAttribute('data-kit-states', String(n));
  }

  if (document.readyState === 'complete') build();
  else window.addEventListener('load', build);
})();
