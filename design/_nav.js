/*
  design/_nav.js - the registry of the colour stage (07) and the renderer of its panel.

  OWN NAMESPACE, deliberately. The globals NAV, NAV_BASE, NAV_SECTIONS and every nav-* class
  belong to the roadmap registry in /_nav.js. design/overview.html loads BOTH registries at
  once, so a second window.NAV here would silently overwrite the roadmap and the sidebar would
  render the wrong project. Everything in this file is DESIGN_NAV and ds*.

  ONE source of navigation for the colour stage. A screen is registered here exactly once, and
  it appears in the panel of every screen and in the two lists on overview.html. The `state`
  field carries the truth the coverage map exists to tell: 'colour' means the screen has been
  assembled from the kit, 'grey' means it is still only in wireframes/ and waits for the
  rollout at Stage 12. The panel links a grey screen to its grey original rather than hiding
  it, because a map that shows only what is finished is not a map.

  Node numbers X.Y come from ia/docs/sitemap.md, states from wireframes/docs/screens.md, flows
  from ia/docs/flows.md. Nothing here is invented.

  Mounted into <aside id="ds-panel" data-node="3.0" data-state="base"> on a screen page, and
  into <div id="ds-index"> on overview.html. Styled by design/_panel.css.

  No em dash anywhere in this file.
*/

window.DESIGN_NAV = [
  { id: '0', title: 'Home + shell', screens: [
    { key: '0.0', label: 'Home (marketing)', file: 'index.html', state: 'colour', states: [
      { key: 'base', label: 'landing', file: 'index.html' } ] },
  ]},
  { id: '1', title: 'Auth', screens: [
    { key: '1.0', label: 'Auth', file: 'auth.html', state: 'grey', states: [
      { key: 'base', label: 'log in', file: 'auth.html' },
      { key: 'signup', label: 'sign up (1.1)', file: 'auth-signup.html' },
      { key: 'reset', label: 'forgot / reset (1.2)', file: 'auth-reset.html' } ] },
  ]},
  { id: '2', title: 'Synthesis', screens: [
    { key: '2.0', label: 'Synthesis view', file: 'synthesis.html', state: 'colour', seed: true, states: [
      { key: 'base', label: 'populated', file: 'synthesis.html' },
      { key: 'empty', label: 'first-run empty (2.1)', file: 'synthesis-empty.html' },
      { key: 'loading', label: 'synthesizing (2.2)', file: 'synthesis-loading.html' },
      { key: 'error', label: 'error (2.3)', file: 'synthesis-error.html' } ] },
  ]},
  { id: '3', title: 'Sources / ingestion', screens: [
    { key: '3.0', label: 'Sources', file: 'sources.html', state: 'colour', states: [
      { key: 'base', label: 'list', file: 'sources.html' },
      { key: 'empty', label: 'none connected (3.4)', file: 'sources-empty.html' },
      { key: 'sync-error', label: 'sync error (3.5)', file: 'sources-sync-error.html' } ] },
    { key: '3.2', label: 'Connect CSV', file: 'connect-csv.html', state: 'colour', states: [
      { key: 'base', label: 'upload and mapping', file: 'connect-csv.html' } ] },
    { key: '3.3', label: 'Connect Intercom', file: 'connect-intercom.html', state: 'grey', states: [
      { key: 'base', label: 'authorize', file: 'connect-intercom.html' } ] },
    { key: '3.6', label: 'Source manage', file: 'sources-manage.html', state: 'grey', states: [
      { key: 'base', label: 'detail and disconnect', file: 'sources-manage.html' } ] },
  ]},
  { id: '4', title: 'Theme detail', screens: [
    { key: '4.0', label: 'Theme detail', file: 'theme.html', state: 'colour', states: [
      { key: 'base', label: 'strong', file: 'theme.html' },
      { key: 'low-signal', label: 'low signal (4.1)', file: 'theme-low-signal.html' },
      { key: 'loading', label: 'loading', file: 'theme-loading.html' },
      { key: 'error', label: 'error', file: 'theme-error.html' } ] },
  ]},
  { id: '5', title: 'Evidence trace', screens: [
    { key: '5.0', label: 'Evidence source', file: 'evidence.html', state: 'grey', states: [
      { key: 'base', label: 'raw in context', file: 'evidence.html' },
      { key: 'redacted', label: 'redacted (5.1)', file: 'evidence-redacted.html' } ] },
  ]},
  { id: '6', title: 'Decide and defend / Briefs', screens: [
    { key: '6.0', label: 'Briefs list', file: 'briefs.html', state: 'colour', states: [
      { key: 'base', label: 'list', file: 'briefs.html' },
      { key: 'empty', label: 'empty (6.5)', file: 'briefs-empty.html' } ] },
    { key: '6.1', label: 'Build brief', file: 'build-brief.html', state: 'colour', states: [
      { key: 'base', label: 'building', file: 'build-brief.html' },
      { key: 'thin-warning', label: 'thin-theme warning (6.2)', file: 'build-brief-thin-warning.html' } ] },
    { key: '6.3', label: 'Share-link', file: 'share-link.html', state: 'colour', states: [
      { key: 'base', label: 'generated', file: 'share-link.html' },
      { key: 'loading', label: 'generating', file: 'share-link-loading.html' } ] },
    { key: '6.4', label: 'Shared brief (public)', file: 'shared-brief.html', state: 'colour', seed: true, states: [
      { key: 'base', label: 'read only', file: 'shared-brief.html' } ] },
  ]},
  { id: '7', title: 'Account / settings', screens: [
    { key: '7.0', label: 'Account', file: 'account.html', state: 'colour', states: [
      { key: 'base', label: 'shell', file: 'account.html' },
      { key: 'data', label: 'data and privacy (7.2)', file: 'account-data.html' } ] },
  ]},
  { id: '8', title: 'System', screens: [
    { key: '8.0', label: '404 not found', file: '404.html', state: 'grey', states: [ { key: 'base', label: '404', file: '404.html' } ] },
    { key: '8.1', label: '500 server error', file: '500.html', state: 'grey', states: [ { key: 'base', label: '500', file: '500.html' } ] },
    { key: '8.2', label: 'Maintenance (503)', file: 'maintenance.html', state: 'grey', states: [ { key: 'base', label: '503', file: 'maintenance.html' } ] },
  ]},
  { id: '9', title: 'Content / legal', screens: [
    { key: '9.0', label: 'Privacy policy', file: 'privacy.html', state: 'grey', states: [ { key: 'base', label: 'policy', file: 'privacy.html' } ] },
    { key: '9.1', label: 'Terms of service', file: 'terms.html', state: 'grey', states: [ { key: 'base', label: 'terms', file: 'terms.html' } ] },
    { key: '9.2', label: 'Security / GDPR', file: 'security.html', state: 'grey', states: [ { key: 'base', label: 'security', file: 'security.html' } ] },
  ]},
];

window.DESIGN_FLOWS = [
  { id: '0', label: 'Main job: synthesis to a defensible call', screens: ['2.0', '4.0', '5.0', '6.1', '6.3', '6.4'] },
  { id: '1', label: 'Bring the signal in (first-run activation)', screens: ['2.0', '3.0'] },
  { id: '2', label: 'Trust the synthesis (confidence, spot-check)', screens: ['4.0', '5.0'] },
  { id: '3', label: 'Defend live under challenge', screens: ['5.0', '6.4'] },
  { id: '4', label: 'Share the brief before the session', screens: ['6.0', '6.1', '6.3', '6.4'] },
];

(function () {
  var NAVD = window.DESIGN_NAV;
  var ALL = NAVD.reduce(function (a, c) { return a.concat(c.screens); }, []);

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function screen(key) { for (var i = 0; i < ALL.length; i++) if (ALL[i].key === key) return ALL[i]; return null; }
  function cluster(key) {
    for (var i = 0; i < NAVD.length; i++)
      for (var j = 0; j < NAVD[i].screens.length; j++)
        if (NAVD[i].screens[j].key === key) return NAVD[i];
    return null;
  }
  /* A screen in colour is a file in design/; a screen still in grey is a file in wireframes/.
     One function, so no page ever has to remember which half of the product it is pointing at. */
  function href(s, file) { return s.state === 'colour' ? file : '../wireframes/' + file; }

  /* ---- the stage panel: four blocks top to bottom ---- */
  function panel() {
    var m = document.getElementById('ds-panel');
    if (!m) return;
    var node = m.getAttribute('data-node');
    var cur = m.getAttribute('data-state') || 'base';
    var sc = screen(node);
    var cl = cluster(node);

    var stateLabel = '';
    if (sc) for (var i = 0; i < sc.states.length; i++) if (sc.states[i].key === cur) stateLabel = sc.states[i].label;

    var h = '<aside class="ds-panel" aria-label="Design stage navigation">';
    h += '<div class="ds-panel-head">';
    h += '<a class="ds-panel-hub" href="overview.html"><span aria-hidden="true">&larr;</span> All screens</a>';
    h += '<span class="ds-panel-badge">Design</span>';
    if (sc) {
      h += '<p class="ds-panel-sub"><span class="ds-panel-node">' + esc(sc.key) + '</span>' + esc(sc.label) +
           '<span class="ds-panel-state">colour copy of the language' + (stateLabel ? ' &middot; ' + esc(stateLabel) : '') + '</span></p>';
    }
    h += '</div>';

    h += '<details class="ds-panel-tree" open><summary class="ds-panel-toggle">All screens and states</summary>';
    h += '<nav class="ds-tree" aria-label="Screens">';
    for (var c = 0; c < NAVD.length; c++) {
      h += '<div class="ds-group"><div class="ds-group-t">' + esc(NAVD[c].id) + ' &middot; ' + esc(NAVD[c].title) + '</div>';
      for (var s = 0; s < NAVD[c].screens.length; s++) {
        var sx = NAVD[c].screens[s];
        var isCur = sx.key === node;
        var cls = 'ds-link' + (isCur ? ' is-current' : '') + (sx.state === 'colour' ? '' : ' is-grey');
        h += '<a class="' + cls + '" href="' + esc(href(sx, sx.file)) + '"' + (isCur ? ' aria-current="true"' : '') + '>' +
             '<span class="ds-node">' + esc(sx.key) + '</span>' + esc(sx.label) + '</a>';
        if (isCur) {
          h += '<ul class="ds-states">';
          for (var t = 0; t < sx.states.length; t++) {
            var st = sx.states[t];
            h += '<li><a class="ds-state' + (st.key === cur ? ' is-current' : '') + '" href="' + esc(href(sx, st.file)) + '"' +
                 (st.key === cur ? ' aria-current="page"' : '') + '>' + esc(st.label) + '</a></li>';
          }
          h += '</ul>';
        }
      }
      h += '</div>';
    }
    h += '</nav></details>';

    h += '<div class="ds-panel-links"><div class="ds-panel-links-t">Out of the artifact</div>';
    h += '<a href="concept/concept.html">&larr; Product language (Concept)</a>';
    h += '<a href="kit/kit.html">Component kit</a>';
    if (sc) h += '<a href="../wireframes/' + esc(sc.file) + '">Grey original &nearr;</a>';
    h += '</div>';

    h += '</aside>';
    m.outerHTML = h;
  }

  /* The tree is an accordion only where there is no room for it. Above the breakpoint the
     summary is hidden by CSS, so a closed tree would have no way back: a control the user
     cannot see must not be a control. */
  function disclosure() {
    var d = document.querySelector('.ds-panel-tree');
    if (!d) return;
    var wide = window.matchMedia('(min-width: 901px)');
    function apply() { wide.matches ? d.setAttribute('open', '') : d.removeAttribute('open'); }
    function guard() { if (wide.matches) d.setAttribute('open', ''); }
    apply();
    wide.addEventListener ? wide.addEventListener('change', apply) : wide.addListener(apply);
    d.addEventListener('toggle', guard);
  }

  /* ---- overview.html: the screens by flow, and the honest coverage map ---- */
  function index() {
    var mount = document.getElementById('ds-index');
    if (!mount) return;
    var colour = 0, grey = 0;
    for (var i = 0; i < ALL.length; i++) ALL[i].state === 'colour' ? colour++ : grey++;

    var h = '';
    h += '<section id="flows"><h2 class="ov-h2">Walk by flow</h2>';
    h += '<p class="ov-lead">The same five flows the prototype walks, in colour where the screen ' +
         'has been assembled from the kit and in grey where it has not. A flow that runs out of ' +
         'colour halfway is telling the truth about where this stage stopped.</p>';
    for (var f = 0; f < window.DESIGN_FLOWS.length; f++) {
      var fl = window.DESIGN_FLOWS[f];
      h += '<div class="ov-flow"><div class="ov-flow-head"><span class="ov-flow-id">Flow ' + esc(fl.id) + '</span>' +
           '<span class="ov-flow-label">' + esc(fl.label) + '</span></div><ol class="ov-flow-screens">';
      for (var k = 0; k < fl.screens.length; k++) {
        var s2 = screen(fl.screens[k]);
        if (!s2) continue;
        var isC = s2.state === 'colour';
        h += '<li class="ov-fscreen ' + (isC ? 'is-colour' : 'is-grey') + '">';
        h += '<span class="ov-fs-node">' + esc(s2.key) + '</span>';
        h += '<a class="ov-fs-label" href="' + esc(href(s2, s2.file)) + '">' + esc(s2.label) + '</a>';
        h += '<span class="ov-fs-states">';
        for (var t2 = 0; t2 < s2.states.length; t2++) {
          h += '<a class="ov-chip" href="' + esc(href(s2, s2.states[t2].file)) + '">' + esc(s2.states[t2].label) + '</a>';
        }
        h += '</span></li>';
      }
      h += '</ol></div>';
    }
    h += '</section>';

    h += '<section id="coverage" class="ov-coverage">';
    h += '<div class="ov-cov-head"><h2 class="ov-h2">Coverage map</h2>';
    h += '<span class="ov-counter"><b>' + colour + '</b> in colour &middot; <b>' + grey + '</b> still grey</span></div>';
    h += '<p class="ov-lead">This map is the honest one. The sample is 5 to 7 screens plus the two ' +
         'seeded at Stage 06, chosen for how much of the component inventory they cover, not for how ' +
         'they look. The rest of the product is assembled once at Stage 12, on the finished system, ' +
         'so that every screen is built once rather than three times.</p>';
    h += '<div class="ov-legend"><span class="ov-lg ov-lg--colour">solid = assembled from the kit</span>' +
         '<span class="ov-lg ov-lg--grey">dashed = still grey, waiting for the rollout</span></div>';
    for (var c2 = 0; c2 < NAVD.length; c2++) {
      h += '<div class="ov-cluster"><h3 class="ov-cluster-t">' + esc(NAVD[c2].id) + ' &middot; ' + esc(NAVD[c2].title) + '</h3>';
      h += '<div class="ov-tiles">';
      for (var s3 = 0; s3 < NAVD[c2].screens.length; s3++) {
        var sx3 = NAVD[c2].screens[s3];
        var isC3 = sx3.state === 'colour';
        var n = sx3.states.length;
        var meta = isC3 ? (n + ' page' + (n === 1 ? '' : 's') + (sx3.seed ? ' &middot; seeded at 06' : '')) : (n + ' state' + (n === 1 ? '' : 's') + ' &middot; grey');
        h += '<a class="ov-tile ' + (isC3 ? 'is-colour' : 'is-grey') + '" href="' + esc(href(sx3, sx3.file)) + '">' +
             '<span class="ov-tile-node">' + esc(sx3.key) + '</span>' +
             '<span class="ov-tile-label">' + esc(sx3.label) + '</span>' +
             '<span class="ov-tile-meta">' + meta + '</span></a>';
      }
      h += '</div></div>';
    }
    h += '</section>';
    mount.innerHTML = h;
  }

  panel();
  disclosure();
  index();
})();
