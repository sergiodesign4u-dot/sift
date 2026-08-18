/*
  /_nav.js - the ONE registry of the project roadmap, and the renderer that draws it.

  Every html page of the project carries an empty <aside id="sidebar"></aside>, declares
  window.NAV_BASE (its depth to the repo root, for example '../'), optionally
  window.NAV_SECTIONS (its own sections, for the sub-links under the active page) and
  optionally window.NAV_ACTIVE + window.NAV_ACTIVE_LABEL (for pages that are NOT in the
  registry: IA nodes, seed color copies in design/). This file draws the panel itself.

  The ONE manual action is a line in NAV below plus done:true when a page is ready.
  Everything else (active / Next / SOON / accordion / relative links) is computed here.

  Status lives in exactly two places: done here, and the table in README.md. Never in
  CLAUDE.md. Next is computed BY STAGE: the first stage that still has an unfinished
  page, or no pages at all (page:null), so the badge never falls off the roadmap.

  Namespace: the globals NAV, NAV_BASE, NAV_SECTIONS, NAV_ACTIVE, NAV_ACTIVE_LABEL and
  the nav-* classes belong to this file. Per-stage registries keep their own data in
  IA_NAV / WF_NAV / DESIGN_NAV / KIT_NAV, because hub pages load both at once.

  Appearance is in /_nav.css. No em dash in output files.
*/

window.NAV = [
  { id: 'research', label: 'Foundation Research', pages: [
    { label: 'Foundation Research', page: 'research/research.html', done: true } ] },

  { id: 'user-research', label: 'User Research', pages: [
    { label: 'Personas',    page: 'research/personas.html',   done: true },
    { label: 'JTBD',        page: 'research/jtbd.html',       done: true },
    { label: 'CJM As-Is',   page: 'research/cjm-as-is.html',  done: true },
    { label: 'CJM To-Be',   page: 'research/cjm-to-be.html',  done: true } ] },

  { id: 'ia', label: 'Information Architecture (IA)', pages: [
    { subhead: 'Base layer' },
    { label: 'Flows',       page: 'ia/flows.html',        done: true },
    { label: 'Concept map', page: 'ia/concept-map.html',  done: true },
    { subhead: 'Detail layer' },
    { label: 'Sitemap',     page: 'ia/sitemap.html',      done: true },
    { label: 'Structure',   page: 'ia/structure.html',    done: true } ] },

  { id: 'wireframes', label: 'Wireframes', pages: [
    { label: 'Wireframes', page: 'wireframes/overview.html', done: true } ] },

  { id: 'voice', label: 'Voice', pages: [
    { label: 'Voice', page: 'voice/voice.html', done: true } ] },

  { id: 'concept', label: 'Concept', pages: [
    { label: 'Directions', page: 'design/concept/directions.html', done: true },
    { label: 'Concept',    page: 'design/concept/concept.html',    done: true } ] },

  /* wip marks a stage that has deployed pages and is not finished; without it the roadmap calls
     a stage done the moment its last page exists. Cleared here: Step 7 closed UI + Visual. */
  { id: 'ui-visual', label: 'UI + Visual', pages: [
    { label: 'Component kit',  page: 'design/kit/kit.html',  done: true },
    { label: 'Sample screens', page: 'design/overview.html', done: true } ] },

  { id: 'tokens', label: 'Tokens + Components', wip: true, pages: [ { label: 'Tokens + Components', page: null, done: false } ] },
  { id: 'design-system', label: 'Design System',       pages: [ { label: 'Design System',       page: null, done: false } ] },
  { id: 'responsive',    label: 'Responsive',          pages: [ { label: 'Responsive',          page: null, done: false } ] },
  { id: 'animation',     label: 'Animation',           pages: [ { label: 'Animation',           page: null, done: false } ] },
  { id: 'handoff',       label: 'Handoff',             pages: [ { label: 'Handoff',             page: null, done: false } ] }
];

(function () {
  var NAV = window.NAV;
  var BASE = window.NAV_BASE || '';

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function realPages(stage) {
    return stage.pages.filter(function (p) { return !p.subhead && p.page; });
  }

  function firstDone(stage) {
    var d = realPages(stage).filter(function (p) { return p.done; });
    return d.length ? d[0] : null;
  }

  function stageState(stage) {
    var real = realPages(stage);
    /* wip with no page yet: the stage is running and has nothing deployed. It is not 'soon'. */
    if (!real.length) return stage.wip ? 'partial' : 'soon';
    var done = real.filter(function (p) { return p.done; }).length;
    if (done === 0) return 'soon';
    /* wip wins over a full count: pages can all exist while the stage still has steps to run,
       and the roadmap must not announce a stage finished before its own close-out. */
    if (done === real.length) return stage.wip ? 'partial' : 'done';
    return 'partial';
  }

  /* Current page: either declared by NAV_ACTIVE (page outside the registry) or matched
     against the address bar by path suffix. */
  function here() {
    var p = location.pathname;
    if (p.charAt(p.length - 1) === '/') p += 'index.html';
    return p;
  }

  function isHere(page) {
    var h = here();
    return h === '/' + page || h.slice(-(page.length + 1)) === '/' + page;
  }

  function findCurrent() {
    var declared = window.NAV_ACTIVE || null;
    for (var i = 0; i < NAV.length; i++) {
      var pages = realPages(NAV[i]);
      for (var j = 0; j < pages.length; j++) {
        if (declared ? pages[j].page === declared : isHere(pages[j].page)) {
          return { stage: i, page: pages[j].page };
        }
      }
    }
    return { stage: -1, page: null };
  }

  /* Next = the first stage with an unfinished page, or with no pages at all. */
  function nextStage() {
    for (var i = 0; i < NAV.length; i++) {
      var real = realPages(NAV[i]);
      if (!real.length || NAV[i].wip) return i;
      for (var j = 0; j < real.length; j++) if (!real[j].done) return i;
    }
    return -1;
  }

  function sectionsHtml() {
    var secs = window.NAV_SECTIONS;
    if (!secs || !secs.length) return '';
    var out = '<ul class="nav-sections">';
    for (var i = 0; i < secs.length; i++) {
      var s = secs[i];
      out += '<li class="nav-section" data-section="' + esc(s.id) + '">' +
             '<a href="#' + esc(s.id) + '">' + esc(s.label) + '</a></li>';
    }
    return out + '</ul>';
  }

  function render() {
    var host = document.getElementById('sidebar');
    if (!host) return;

    var cur = findCurrent();
    var nxt = nextStage();
    var out = '<ul class="nav-roadmap">';
    var ruleAfter = 'voice';   /* the roadmap breaks where the design half begins */

    for (var i = 0; i < NAV.length; i++) {
      var stage = NAV[i];
      var state = stageState(stage);
      var active = (i === cur.stage);
      var cls = 'nav-item is-' + (active ? 'active' : state);
      if (active && state !== 'done') cls += ' is-' + state;

      var badge = '';
      if (!active && i === nxt) badge = '<span class="nav-badge nav-badge-next">Next</span>';
      else if (!active && state === 'soon') badge = '<span class="nav-badge nav-badge-soon">Soon</span>';

      var top;
      if (active) {
        top = '<span class="nav-top">' + esc(stage.label) + badge + '</span>';
      } else {
        var target = firstDone(stage);
        top = target
          ? '<a class="nav-top" href="' + BASE + esc(target.page) + '">' + esc(stage.label) + badge + '</a>'
          : '<span class="nav-top">' + esc(stage.label) + badge + '</span>';
      }

      out += '<li class="' + cls + '">' + top;

      /* The accordion: only the stage you are standing on opens. */
      if (active) {
        var real = realPages(stage);
        var extra = (window.NAV_ACTIVE && window.NAV_ACTIVE === cur.page)
          ? (window.NAV_ACTIVE_LABEL || document.title) : null;

        if (real.length === 1 && !extra) {
          out += sectionsHtml();
        } else {
          out += '<ul class="nav-sub">';
          for (var k = 0; k < stage.pages.length; k++) {
            var p = stage.pages[k];
            if (p.subhead) { out += '<li class="nav-subhead">' + esc(p.subhead) + '</li>'; continue; }
            if (!p.page) continue;
            var isCur = (p.page === cur.page);
            out += '<li class="nav-subitem">';
            out += p.done
              ? '<a class="nav-link' + (isCur ? ' is-current' : '') + '" href="' + BASE + esc(p.page) + '">' + esc(p.label) + '</a>'
              : '<span class="nav-link is-soon">' + esc(p.label) + '</span>';
            /* A page outside the registry shows up as a sub-item right under its nearest one. */
            if (isCur && extra) {
              out += '<ul class="nav-sub"><li class="nav-subitem">' +
                     '<span class="nav-link is-current">' + esc(extra) + '</span>' +
                     sectionsHtml() + '</li></ul>';
            } else if (isCur) {
              out += sectionsHtml();
            }
            out += '</li>';
          }
          out += '</ul>';
        }
      }

      out += '</li>';
      if (stage.id === ruleAfter) out += '<li class="nav-item"><hr class="nav-rule"></li>';
    }

    host.innerHTML = out + '</ul>';
    watchSections();
  }

  /* The current section lights up as you scroll. */
  function watchSections() {
    var secs = window.NAV_SECTIONS;
    if (!secs || !secs.length || !window.IntersectionObserver) return;
    var items = {};
    var nodes = [];
    for (var i = 0; i < secs.length; i++) {
      var li = document.querySelector('.nav-section[data-section="' + secs[i].id + '"]');
      var el = document.getElementById(secs[i].id);
      if (li && el) { items[secs[i].id] = li; nodes.push(el); }
    }
    if (!nodes.length) return;
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) seen[entries[i].target.id] = entries[i].isIntersecting;
      var first = null;
      for (var j = 0; j < nodes.length; j++) if (seen[nodes[j].id]) { first = nodes[j].id; break; }
      for (var id in items) items[id].classList.toggle('is-current', id === first);
    }, { rootMargin: '-80px 0px -60% 0px' });
    for (var n = 0; n < nodes.length; n++) io.observe(nodes[n]);
  }

  /* The project entry page (root index.html) lists the same 12 stages from the same
     registry, so "3 of 12 complete" can never drift from the sidebar. The page supplies
     only the prose: window.STAGE_NOTES keyed by stage id. */
  function renderProjectIndex() {
    var host = document.getElementById('project-stages');
    if (!host) return;
    var notes = window.STAGE_NOTES || {};
    var nxt = nextStage();
    var done = 0;
    var out = '';

    for (var i = 0; i < NAV.length; i++) {
      var stage = NAV[i];
      var state = stageState(stage);
      if (state === 'done') done++;

      var badge, cls;
      if (i === nxt) { badge = ['badge-next', 'Next']; cls = 'next'; }
      else if (state === 'done') { badge = ['badge-done', 'Done']; cls = 'done'; }
      else if (state === 'partial') { badge = ['badge-next', 'In progress']; cls = 'next'; }
      else { badge = ['badge-soon', 'Soon']; cls = 'upcoming'; }

      var links = '';
      var real = realPages(stage);
      for (var j = 0; j < real.length; j++) {
        if (real[j].done) links += '<a href="' + esc(real[j].page) + '">' + esc(real[j].label) + '</a>';
      }

      out += '<div class="stage ' + cls + '"><div class="stage-num">' +
             (i + 1 < 10 ? '0' : '') + (i + 1) + '</div><div class="stage-body">' +
             '<div class="stage-titlerow"><span class="stage-title">' + esc(stage.label) + '</span>' +
             '<span class="badge ' + badge[0] + '">' + badge[1] + '</span></div>' +
             (notes[stage.id] ? '<div class="stage-note">' + notes[stage.id] + '</div>' : '') +
             (links ? '<div class="stage-links">' + links + '</div>' : '') +
             '</div></div>';
    }

    host.innerHTML = out;
    var counter = document.getElementById('project-count');
    if (counter) counter.textContent = done + ' of ' + NAV.length + ' stages complete';
  }

  function boot() { render(); renderProjectIndex(); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
