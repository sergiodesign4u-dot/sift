/*
  wireframes/_nav.js - single registry and renderers for the wireframe stage (04).

  ONE source of navigation. A screen or state is registered here exactly once, and it
  appears in index.html (flow entries + coverage map), in the top bar state switcher, and
  in the left page rail automatically. Status flips from 'spec' to 'built' as each screen
  is made; the hub and rail light up from this flag.

  Node numbers X.Y come from ia/docs/sitemap.md; states from wireframes/docs/screens.md;
  flows from ia/docs/flows.md. Nothing here is invented.

  Prototype chrome, rendered into placeholders on every screen page:
    #wf-topbar (data-node, data-state)  - back to All screens, node + name, state switcher
    #wf-rail   (data-node, data-state)  - every page, grouped by cluster, current highlighted
  In-frame globals inside the screen: [data-wf="header"|"appfoot"|"bottomtabs"] (data-active).

  No em dash in output files.
*/

const WF_CLUSTERS = [
  { id: '0', title: 'Home + shell', screens: [
    { key: '0.0', label: 'Home (marketing)', file: 'home.html', status: 'built', states: [
      { key: 'base', label: 'landing', file: 'home.html' } ] },
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
      { key: 'connect', label: 'connect chooser (3.1)', file: 'connect.html' },
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

/* ---- index.html hub: flow entries + coverage map ---- */
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

/* ---- top bar: back to All screens, current node + name, state switcher ---- */
function wfTopbar() {
  const m = document.getElementById('wf-topbar');
  if (!m) return;
  const s = wfScreen(m.getAttribute('data-node'));
  const cur = m.getAttribute('data-state') || 'base';
  let title = '', chips = '';
  if (s) {
    title = '<span class="wf-topbar-node">' + s.key + '</span><span class="wf-topbar-title">' + wfEsc(s.label) + '</span>';
    for (const st of s.states) {
      chips += '<a class="wf-state-chip' + (st.key === cur ? ' is-current' : '') + '" href="' + st.file + '">' + wfEsc(st.label) + '</a>';
    }
  }
  m.outerHTML =
    '<div class="wf-topbar">' +
      '<a class="wf-back" href="index.html"><span aria-hidden="true">&larr;</span> All screens</a>' +
      title +
      '<span class="wf-states">' + chips + '</span>' +
    '</div>';
}

/* ---- left rail: every page, grouped by cluster, current highlighted ---- */
function wfRail() {
  const m = document.getElementById('wf-rail');
  if (!m) return;
  const node = m.getAttribute('data-node');
  const cur = m.getAttribute('data-state') || 'base';
  let html = '<nav class="wf-rail" aria-label="Prototype pages">';
  for (const c of WF_CLUSTERS) {
    html += '<div class="wf-rail-group"><div class="wf-rail-title">' + c.id + ' · ' + wfEsc(c.title) + '</div>';
    for (const sc of c.screens) {
      const isCurrent = sc.key === node;
      const isBuilt = sc.status === 'built';
      const cls = 'wf-rail-link' + (isCurrent ? ' is-current' : '') + (isBuilt ? '' : ' is-spec');
      const inner = '<span class="wf-rail-node">' + sc.key + '</span>' + wfEsc(sc.label);
      html += isBuilt
        ? '<a class="' + cls + '" href="' + sc.file + '">' + inner + '</a>'
        : '<span class="' + cls + '">' + inner + '</span>';
      if (isCurrent) {
        html += '<ul class="wf-rail-states">';
        for (const st of sc.states) {
          html += '<li><a class="wf-rail-state' + (st.key === cur ? ' is-current' : '') + '" href="' + st.file + '">' + wfEsc(st.label) + '</a></li>';
        }
        html += '</ul>';
      }
    }
    html += '</div>';
  }
  html += '</nav>';
  m.outerHTML = html;
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
  function bt(id, label, file) { return '<a class="wf-btab' + (id === active ? ' wf-btab--active' : '') + '" href="' + file + '"><span class="ico"></span><span class="lbl">' + label + '</span></a>'; }
  return '<nav class="wf-bottomtabs" aria-label="Primary">' + bt('synthesis', 'Synthesis', 'synthesis.html') + bt('sources', 'Sources', 'sources.html') + bt('briefs', 'Briefs', 'briefs.html') + bt('account', 'Account', 'account.html') + '</nav>';
}
function wfAppFootHTML() { return '<footer class="wf-appfoot">Sift workspace · signal from CSV and Intercom, PII scrubbed by default</footer>'; }

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

/* ---- index hub: project roadmap sidebar (shared with research / IA pages) ---- */
function wfRoadmap() {
  const m = document.getElementById('wf-roadmap');
  if (!m) return;
  let links = '';
  for (const f of WF_FLOWS) links += '<li><a href="index.html#flow-' + f.id + '">' + wfFlowShort(f) + '</a></li>';
  links += '<li><a href="index.html" class="sidebar-current">All screens</a></li>';
  const soon = [['Voice', 'Next'], ['Concept', 'Soon'], ['UI + Visual', 'Soon'], ['Tokens + Components', 'Soon'], ['Design System', 'Soon'], ['Responsive', 'Soon'], ['Animation', 'Soon'], ['Handoff', 'Soon']]
    .map(function (p) { return '<div class="sidebar-coming-soon"><span class="sidebar-cs-label">' + p[0] + '</span><span class="sidebar-cs-badge">' + p[1] + '</span></div>'; }).join('');
  m.outerHTML =
    '<aside class="sidebar">' +
      '<div class="sidebar-phase"><a class="sidebar-phase-label" href="../research/research.html">Foundation Research</a></div>' +
      '<div class="sidebar-phase"><a class="sidebar-phase-label" href="../user-research/personas.html">User Research</a></div>' +
      '<div class="sidebar-phase"><a class="sidebar-phase-label" href="../ia/structure.html">Information Architecture</a></div>' +
      '<div class="sidebar-phase active"><span class="sidebar-phase-label">Wireframes</span><ul class="sidebar-section-links">' + links + '</ul></div>' +
      '<hr class="sidebar-divider">' + soon +
    '</aside>';
}

(function wfBoot() {
  renderWireframeIndex();  // index.html hub only (no-op elsewhere)
  wfRoadmap();             // index.html hub only
  wfTopbar();
  wfRail();
  wfMountGlobals();
})();
