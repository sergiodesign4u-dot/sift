/*
  wireframes/_nav.js - single registry and renderers for the wireframe stage (04).

  ONE source of navigation. A screen or state is registered here exactly once, and it
  appears in overview.html (flow entries + coverage map) and in the stage panel, and
  in the left page rail automatically. Status flips from 'spec' to 'built' as each screen
  is made; the hub and rail light up from this flag.

  Node numbers X.Y come from ia/docs/sitemap.md; states from wireframes/docs/screens.md;
  flows from ia/docs/flows.md. Nothing here is invented.

  Prototype chrome, rendered into the placeholder on every screen page:
    #wf-rail   (data-node, data-state)  - every page, grouped by cluster, current highlighted
  In-frame globals inside the screen: [data-wf="header"|"appfoot"|"bottomtabs"] (data-active).

  No em dash in output files.
*/

const WF_CLUSTERS = [
  { id: '0', title: 'Home + shell', screens: [
    { key: '0.0', label: 'Home (marketing)', file: 'index.html', status: 'built', states: [
      { key: 'base', label: 'landing', file: 'index.html' } ] },
  ]},
  { id: '1', title: 'Auth', screens: [
    { key: '1.0', label: 'Auth', file: 'auth.html', status: 'built', states: [
      { key: 'base', label: 'log in (1.1)', file: 'auth.html' },
      { key: 'signup', label: 'sign up (1.0)', file: 'auth-signup.html' },
      { key: 'reset', label: 'forgot / reset (1.2)', file: 'auth-reset.html' } ] },
  ]},
  { id: '2', title: 'Synthesis', screens: [
    { key: '2.0', label: 'Synthesis view', file: 'synthesis.html', status: 'built', flow: '0', states: [
      { key: 'base', label: 'populated', file: 'synthesis.html' },
      { key: 'empty', label: 'first-run empty (2.1)', file: 'synthesis-empty.html' },
      { key: 'loading', label: 'synthesizing (2.2)', file: 'synthesis-loading.html' },
      { key: 'error', label: 'error (2.3)', file: 'synthesis-error.html' } ] },
  ]},
  { id: '3', title: 'Sources / ingestion', screens: [
    { key: '3.0', label: 'Sources', file: 'sources.html', status: 'built', states: [
      { key: 'base', label: 'list', file: 'sources.html' },
      { key: 'empty', label: 'none connected (3.4)', file: 'sources-empty.html' },
      { key: 'csv', label: 'CSV upload + mapping (3.2)', file: 'connect-csv.html' },
      { key: 'intercom', label: 'Intercom OAuth (3.3)', file: 'connect-intercom.html' },
      { key: 'sync-error', label: 'sync error (3.5)', file: 'sources-sync-error.html' },
      { key: 'manage', label: 'manage (3.6)', file: 'sources-manage.html' } ] },
  ]},
  { id: '4', title: 'Theme detail', screens: [
    { key: '4.0', label: 'Theme detail', file: 'theme.html', status: 'built', flow: '0', states: [
      { key: 'base', label: 'strong', file: 'theme.html' },
      { key: 'low-signal', label: 'low-signal (4.1)', file: 'theme-low-signal.html' },
      { key: 'loading', label: 'loading', file: 'theme-loading.html' },
      { key: 'error', label: 'error', file: 'theme-error.html' } ] },
  ]},
  { id: '5', title: 'Evidence trace', screens: [
    { key: '5.0', label: 'Evidence source', file: 'evidence.html', status: 'built', flow: '0', states: [
      { key: 'base', label: 'raw in context', file: 'evidence.html' },
      { key: 'redacted', label: 'redacted / unavailable (5.1)', file: 'evidence-redacted.html' } ] },
  ]},
  { id: '6', title: 'Decide and defend / Briefs', screens: [
    { key: '6.0', label: 'Briefs list', file: 'briefs.html', status: 'built', flow: '4', states: [
      { key: 'base', label: 'list', file: 'briefs.html' },
      { key: 'empty', label: 'empty (6.5)', file: 'briefs-empty.html' } ] },
    { key: '6.1', label: 'Build brief', file: 'build-brief.html', status: 'built', flow: '0', states: [
      { key: 'base', label: 'building', file: 'build-brief.html' },
      { key: 'thin-warning', label: 'thin-theme warning (6.2)', file: 'build-brief-thin-warning.html' } ] },
    { key: '6.3', label: 'Share-link', file: 'share-link.html', status: 'built', flow: '0', states: [
      { key: 'base', label: 'generated', file: 'share-link.html' },
      { key: 'loading', label: 'generating', file: 'share-link-loading.html' } ] },
    { key: '6.4', label: 'Shared brief (public)', file: 'shared-brief.html', status: 'built', flow: '0', states: [
      { key: 'base', label: 'read-only', file: 'shared-brief.html' } ] },
  ]},
  { id: '7', title: 'Account / settings', screens: [
    { key: '7.0', label: 'Account', file: 'account.html', status: 'built', states: [
      { key: 'base', label: 'shell', file: 'account.html' },
      { key: 'plan', label: 'plan and limits (7.1)', file: 'account-plan.html' },
      { key: 'data', label: 'data and privacy (7.2)', file: 'account-data.html' },
      { key: 'profile', label: 'profile (7.3)', file: 'account-profile.html' } ] },
  ]},
  { id: '8', title: 'System', screens: [
    { key: '8.0', label: '404 not found', file: '404.html', status: 'built', states: [ { key: 'base', label: '404', file: '404.html' } ] },
    { key: '8.1', label: '500 server error', file: '500.html', status: 'built', states: [ { key: 'base', label: '500', file: '500.html' } ] },
    { key: '8.2', label: 'Maintenance (503)', file: 'maintenance.html', status: 'built', states: [ { key: 'base', label: '503', file: 'maintenance.html' } ] },
  ]},
  { id: '9', title: 'Content / legal', screens: [
    { key: '9.0', label: 'Privacy policy', file: 'privacy.html', status: 'built', states: [ { key: 'base', label: 'policy', file: 'privacy.html' } ] },
    { key: '9.1', label: 'Terms of service', file: 'terms.html', status: 'built', states: [ { key: 'base', label: 'terms', file: 'terms.html' } ] },
    { key: '9.2', label: 'Security / GDPR', file: 'security.html', status: 'built', states: [ { key: 'base', label: 'security', file: 'security.html' } ] },
  ]},
];

const WF_FLOWS = [
  { id: '0', label: 'Main job: synthesis to a defensible call', screens: ['2.0', '4.0', '5.0', '6.1', '6.3', '6.4'] },
  { id: '1', label: 'Bring the signal in (first-run activation)', screens: ['2.0', '3.0'] },
  { id: '2', label: 'Trust the synthesis (confidence, spot-check)', screens: ['4.0', '5.0'] },
  { id: '3', label: 'Defend live under challenge', screens: ['5.0', '6.4'] },
  { id: '4', label: 'Share the brief before the session', screens: ['6.0', '6.1', '6.3', '6.4'] },
];

/* ---- helpers ---- */
const WF_ALL_SCREENS = WF_CLUSTERS.flatMap(function (c) { return c.screens; });
function wfScreen(key) { return WF_ALL_SCREENS.find(function (s) { return s.key === key; }) || null; }
function wfEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function wfFlowShort(f) { return 'Flow ' + f.id + ' · ' + wfEsc(f.label.split(':')[0].split('(')[0].trim()); }
function wfSet(id, html) { const m = document.getElementById(id); if (m) m.outerHTML = html; }

/* ---- overview.html hub: flow entries + coverage map ---- */
function renderWireframeIndex() {
  const mount = document.getElementById('wf-index');
  if (!mount) return;
  let built = 0, spec = 0;
  WF_ALL_SCREENS.forEach(function (s) { s.status === 'built' ? built++ : spec++; });
  let html = '';

  html += '<section class="wf-flows"><h2 class="wf-h2">Walk by flow</h2>';
  for (const f of WF_FLOWS) {
    html += '<div class="wf-flow" id="flow-' + f.id + '">';
    html += '<div class="wf-flow-head"><span class="wf-flow-id">Flow ' + f.id + '</span><span class="wf-flow-label">' + wfEsc(f.label) + '</span></div>';
    html += '<ol class="wf-flow-screens">';
    for (const key of f.screens) {
      const s = wfScreen(key);
      if (!s) continue;
      const isBuilt = s.status === 'built';
      html += '<li class="wf-fscreen ' + (isBuilt ? 'is-built' : 'is-spec') + '">';
      html += '<span class="wf-fs-node">' + s.key + '</span>';
      html += isBuilt
        ? '<a class="wf-fs-label" href="' + s.file + '">' + wfEsc(s.label) + '</a>'
        : '<span class="wf-fs-label">' + wfEsc(s.label) + '</span>';
      html += '<span class="wf-fs-states">';
      for (const st of s.states) {
        html += isBuilt
          ? '<a class="wf-schip" href="' + st.file + '">' + wfEsc(st.label) + '</a>'
          : '<span class="wf-schip">' + wfEsc(st.label) + '</span>';
      }
      html += '</span></li>';
    }
    html += '</ol></div>';
  }
  html += '</section>';

  html += '<section class="wf-coverage">';
  html += '<div class="wf-cov-head"><h2 class="wf-h2">Coverage map</h2>';
  html += '<span class="wf-counter"><b>' + built + '</b> built · <b>' + spec + '</b> in spec</span></div>';
  html += '<div class="wf-legend"><span class="wf-lg wf-lg--built">solid = built</span><span class="wf-lg wf-lg--spec">dashed = in spec (IA)</span></div>';
  for (const c of WF_CLUSTERS) {
    html += '<div class="wf-cluster"><h3 class="wf-cluster-title">' + c.id + ' · ' + wfEsc(c.title) + '</h3>';
    html += '<div class="wf-cluster-screens">';
    for (const s of c.screens) {
      const isBuilt = s.status === 'built';
      const pages = s.states.length;
      const meta = isBuilt ? (pages + ' page' + (pages === 1 ? '' : 's')) : (pages + ' state' + (pages === 1 ? '' : 's') + ' · IA');
      const inner = '<span class="wf-tile-node">' + s.key + '</span><span class="wf-tile-label">' + wfEsc(s.label) + '</span><span class="wf-tile-meta">' + meta + '</span>';
      html += isBuilt
        ? '<a class="wf-tile is-built" href="' + s.file + '">' + inner + '</a>'
        : '<div class="wf-tile is-spec">' + inner + '</div>';
    }
    html += '</div></div>';
  }
  html += '</section>';
  mount.innerHTML = html;
}

/* ---- the stage panel: ONE navigation, four blocks top to bottom ---- *
   CLAUDE.md: "header with a button to the hub plus a stage badge and one subtitle line; a
   tree of cluster to screen to states; an accordion where only the current node is open; and
   cross-links out of the artifact at the bottom. No thin state strip above the screen."

   There used to be a top bar carrying the hub button, the node name and a row of state chips,
   AND a rail carrying the same states under the current node. Two editions of one navigation:
   the reviewer had to learn which one to trust. The panel is now the only chrome, and at
   narrow widths it collapses into its own header rather than turning into a second strip. */

const WF_IA_PAGE = {
  '0': ['home.html', 'IA node 0.0 Home'],
  '1': ['auth.html', 'IA node 1.x Auth'],
  '2': ['synthesis.html', 'IA node 2.0 Synthesis'],
  '3': ['sources.html', 'IA node 3.0 Sources'],
  '4': ['theme.html', 'IA node 4.0 Theme detail'],
  '5': ['evidence.html', 'IA node 5.0 Evidence'],
  '6': ['briefs.html', 'IA node 6.0 Briefs'],
  '7': ['account.html', 'IA node 7.0 Account'],
  '8': ['system.html', 'IA node 8.x System'],
  '9': ['legal.html', 'IA node 9.x Legal'],
};

function wfCluster(nodeKey) {
  return WF_CLUSTERS.find(function (c) { return c.screens.some(function (s) { return s.key === nodeKey; }); }) || null;
}

function wfPanel() {
  const m = document.getElementById('wf-rail');
  if (!m) return;
  const node = m.getAttribute('data-node');
  const cur = m.getAttribute('data-state') || 'base';
  const sc = wfScreen(node);
  const cluster = wfCluster(node);

  /* 1. header: one way back to the hub, the stage, and one line saying where you are */
  let stateLabel = '';
  if (sc) {
    const st = sc.states.find(function (s) { return s.key === cur; });
    stateLabel = st ? st.label : '';
  }
  let html = '<aside class="wf-panel" aria-label="Wireframe stage navigation">';
  html += '<div class="wf-panel-head">';
  html += '<a class="wf-panel-hub" href="overview.html"><span aria-hidden="true">&larr;</span> All screens</a>';
  html += '<span class="wf-panel-badge">Stage 04 &middot; Wireframes</span>';
  if (sc) {
    html += '<p class="wf-panel-sub"><span class="wf-panel-node">' + sc.key + '</span> ' + wfEsc(sc.label) +
            (stateLabel ? '<span class="wf-panel-state">' + wfEsc(stateLabel) + '</span>' : '') + '</p>';
  }
  html += '</div>';

  /* 2 + 3. the tree, with only the current node opened onto its states */
  html += '<details class="wf-panel-tree" open><summary class="wf-panel-toggle">All screens and states</summary>';
  html += '<nav class="wf-tree" aria-label="Screens">';
  for (const c of WF_CLUSTERS) {
    html += '<div class="wf-rail-group"><div class="wf-rail-title">' + c.id + ' &middot; ' + wfEsc(c.title) + '</div>';
    for (const s of c.screens) {
      const isCurrent = s.key === node;
      const isBuilt = s.status === 'built';
      const cls = 'wf-rail-link' + (isCurrent ? ' is-current' : '') + (isBuilt ? '' : ' is-spec');
      const inner = '<span class="wf-rail-node">' + s.key + '</span>' + wfEsc(s.label);
      html += isBuilt
        ? '<a class="' + cls + '" href="' + s.file + '"' + (isCurrent ? ' aria-current="true"' : '') + '>' + inner + '</a>'
        : '<span class="' + cls + '">' + inner + '</span>';
      if (isCurrent) {
        html += '<ul class="wf-rail-states">';
        for (const st of s.states) {
          html += '<li><a class="wf-rail-state' + (st.key === cur ? ' is-current' : '') + '" href="' + st.file + '"' +
                  (st.key === cur ? ' aria-current="page"' : '') + '>' + wfEsc(st.label) + '</a></li>';
        }
        html += '</ul>';
      }
    }
    html += '</div>';
  }
  html += '</nav></details>';

  /* 4. cross-links out of the artifact: where this screen came from, and where it goes next */
  html += '<div class="wf-panel-links"><div class="wf-panel-links-t">Out of the prototype</div>';
  const ia = cluster ? WF_IA_PAGE[cluster.id] : null;
  if (ia) html += '<a href="../ia/' + ia[0] + '">' + wfEsc(ia[1]) + '</a>';
  html += '<a href="../ia/structure.html#blocks">Block bank by page type</a>';
  html += '<a href="../voice/voice.html">Voice and microcopy</a>';
  html += '<a href="../index.html">Project roadmap</a>';
  html += '</div>';

  html += '</aside>';
  m.outerHTML = html;
}

/* The tree is an accordion only where there is no room for it. Above the breakpoint the panel
   is a column and the disclosure must not be closable, so the summary is hidden by CSS and the
   open state is re-asserted here: a control the user cannot see must not be a control. */
function wfPanelDisclosure() {
  const d = document.querySelector('.wf-panel-tree');
  if (!d) return;
  const wide = window.matchMedia('(min-width: 901px)');
  /* apply: the tree is open where it is a column and closed where it would bury the screen
     it is supposed to navigate. guard: on desktop the summary is hidden, so a closed tree
     would have no way back; there, and only there, a toggle is undone. */
  function apply() { wide.matches ? d.setAttribute('open', '') : d.removeAttribute('open'); }
  function guard() { if (wide.matches) d.setAttribute('open', ''); }
  apply();
  wide.addEventListener ? wide.addEventListener('change', apply) : wide.addListener(apply);
  d.addEventListener('toggle', guard);
}

/* ---- in-frame globals ---- */
function wfHeaderHTML(active) {
  function tab(id, label, file) { return '<a class="wf-tab' + (id === active ? ' wf-tab--active' : '') + '" href="' + file + '"' + (id === active ? ' aria-current="page"' : '') + '>' + label + '</a>'; }
  return '<header class="wf-appbar">' +
      '<span class="wf-brand">SIFT</span>' +
      '<nav class="wf-navtabs" aria-label="Primary">' + tab('synthesis', 'Synthesis', 'synthesis.html') + tab('sources', 'Sources', 'sources.html') + tab('briefs', 'Briefs', 'briefs.html') + '</nav>' +
      '<span class="wf-spacer"></span>' +
      '<a class="wf-avatar" href="account.html" aria-label="Account"></a>' +
    '</header>';
}
function wfBottomTabsHTML(active) {
  function bt(id, label, file) { return '<a class="wf-btab' + (id === active ? ' wf-btab--active' : '') + '" href="' + file + '"' + (id === active ? ' aria-current="page"' : '') + '><span class="ico"></span><span class="lbl">' + label + '</span></a>'; }
  return '<nav class="wf-bottomtabs" aria-label="Primary">' + bt('synthesis', 'Synthesis', 'synthesis.html') + bt('sources', 'Sources', 'sources.html') + bt('briefs', 'Briefs', 'briefs.html') + bt('account', 'Account', 'account.html') + '</nav>';
}
function wfAppFootHTML() { return '<footer class="wf-appfoot">Sift workspace · feedback from CSV and Intercom, PII scrubbed by default</footer>'; }

function wfMountGlobals() {
  document.querySelectorAll('[data-wf]').forEach(function (el) {
    const kind = el.getAttribute('data-wf');
    const active = el.getAttribute('data-active') || '';
    let html = '';
    if (kind === 'header') html = wfHeaderHTML(active);
    else if (kind === 'bottomtabs') html = wfBottomTabsHTML(active);
    else if (kind === 'appfoot') html = wfAppFootHTML();
    if (html) el.outerHTML = html;
  });
}

(function wfBoot() {
  renderWireframeIndex();  // overview.html hub only (no-op elsewhere)
  wfPanel();
  wfPanelDisclosure();
  wfMountGlobals();
})();
