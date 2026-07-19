/*
  wireframes/_nav.js - single registry and renderers for the wireframe stage (04).

  ONE source of navigation. A screen or state is registered here exactly once, and it
  appears in index.html (flow entries + coverage map) and in the sidebar wireframe
  section automatically. Do not hand-build the coverage list or the flow list anywhere
  else.

  Status flips from 'spec' to 'built' as each screen is made (Steps 4 to 8); index.html
  lights up from this flag. Screen and state files, and the node numbers X.Y, come from
  ia/docs/sitemap.md; states come from wireframes/docs/screens.md; flows come from
  ia/docs/flows.md. Nothing here is invented.

  Step 5 will add render functions for the globals (app header, footer, state bar) to
  this same file, injected into placeholders on each screen page.

  No em dash in output files.
*/

/* Coverage map: every product node, by IA cluster. A screen is a base page; its states
   (including the state-nodes X.Y) are pages of their own. */
const WF_CLUSTERS = [
  { id: '0', title: 'Home + shell', screens: [
    { key: '0.0', label: 'Home (marketing)', file: 'home.html', status: 'spec', states: [
      { key: 'base', label: 'landing', file: 'home.html' } ] },
  ]},
  { id: '1', title: 'Auth', screens: [
    { key: '1.0', label: 'Auth', file: 'auth.html', status: 'spec', states: [
      { key: 'base', label: 'log in (1.1)', file: 'auth.html' },
      { key: 'signup', label: 'sign up (1.0)', file: 'auth-signup.html' },
      { key: 'reset', label: 'forgot / reset (1.2)', file: 'auth-reset.html' } ] },
  ]},
  { id: '2', title: 'Synthesis', screens: [
    { key: '2.0', label: 'Synthesis view', file: 'synthesis.html', status: 'spec', flow: '0', states: [
      { key: 'base', label: 'populated', file: 'synthesis.html' },
      { key: 'empty', label: 'first-run empty (2.1)', file: 'synthesis-empty.html' },
      { key: 'loading', label: 'synthesizing (2.2)', file: 'synthesis-loading.html' },
      { key: 'error', label: 'error (2.3)', file: 'synthesis-error.html' } ] },
  ]},
  { id: '3', title: 'Sources / ingestion', screens: [
    { key: '3.0', label: 'Sources', file: 'sources.html', status: 'spec', states: [
      { key: 'base', label: 'list', file: 'sources.html' },
      { key: 'empty', label: 'none connected (3.4)', file: 'sources-empty.html' },
      { key: 'connect', label: 'connect chooser (3.1)', file: 'connect.html' },
      { key: 'csv', label: 'CSV upload + mapping (3.2)', file: 'connect-csv.html' },
      { key: 'intercom', label: 'Intercom OAuth (3.3)', file: 'connect-intercom.html' },
      { key: 'sync-error', label: 'sync error (3.5)', file: 'sources-sync-error.html' },
      { key: 'manage', label: 'manage (3.6)', file: 'sources-manage.html' } ] },
  ]},
  { id: '4', title: 'Theme detail', screens: [
    { key: '4.0', label: 'Theme detail', file: 'theme.html', status: 'spec', flow: '0', states: [
      { key: 'base', label: 'strong', file: 'theme.html' },
      { key: 'low-signal', label: 'low-signal (4.1)', file: 'theme-low-signal.html' },
      { key: 'loading', label: 'loading', file: 'theme-loading.html' },
      { key: 'error', label: 'error', file: 'theme-error.html' } ] },
  ]},
  { id: '5', title: 'Evidence trace', screens: [
    { key: '5.0', label: 'Evidence source', file: 'evidence.html', status: 'spec', flow: '0', states: [
      { key: 'base', label: 'raw in context', file: 'evidence.html' },
      { key: 'redacted', label: 'redacted / unavailable (5.1)', file: 'evidence-redacted.html' } ] },
  ]},
  { id: '6', title: 'Decide and defend / Briefs', screens: [
    { key: '6.0', label: 'Briefs list', file: 'briefs.html', status: 'spec', flow: '4', states: [
      { key: 'base', label: 'list', file: 'briefs.html' },
      { key: 'empty', label: 'empty (6.5)', file: 'briefs-empty.html' } ] },
    { key: '6.1', label: 'Build brief', file: 'build-brief.html', status: 'spec', flow: '0', states: [
      { key: 'base', label: 'building', file: 'build-brief.html' },
      { key: 'thin-warning', label: 'thin-theme warning (6.2)', file: 'build-brief-thin-warning.html' } ] },
    { key: '6.3', label: 'Share-link', file: 'share-link.html', status: 'spec', flow: '0', states: [
      { key: 'base', label: 'generated', file: 'share-link.html' },
      { key: 'loading', label: 'generating', file: 'share-link-loading.html' } ] },
    { key: '6.4', label: 'Shared brief (public)', file: 'shared-brief.html', status: 'spec', flow: '0', states: [
      { key: 'base', label: 'read-only', file: 'shared-brief.html' } ] },
  ]},
  { id: '7', title: 'Account / settings', screens: [
    { key: '7.0', label: 'Account', file: 'account.html', status: 'spec', states: [
      { key: 'base', label: 'shell', file: 'account.html' },
      { key: 'plan', label: 'plan and limits (7.1)', file: 'account-plan.html' },
      { key: 'data', label: 'data and privacy (7.2)', file: 'account-data.html' },
      { key: 'profile', label: 'profile (7.3)', file: 'account-profile.html' } ] },
  ]},
  { id: '8', title: 'System', screens: [
    { key: '8.0', label: '404 not found', file: '404.html', status: 'spec', states: [ { key: 'base', label: '404', file: '404.html' } ] },
    { key: '8.1', label: '500 server error', file: '500.html', status: 'spec', states: [ { key: 'base', label: '500', file: '500.html' } ] },
    { key: '8.2', label: 'Maintenance (503)', file: 'maintenance.html', status: 'spec', states: [ { key: 'base', label: '503', file: 'maintenance.html' } ] },
  ]},
  { id: '9', title: 'Content / legal', screens: [
    { key: '9.0', label: 'Privacy policy', file: 'privacy.html', status: 'spec', states: [ { key: 'base', label: 'policy', file: 'privacy.html' } ] },
    { key: '9.1', label: 'Terms of service', file: 'terms.html', status: 'spec', states: [ { key: 'base', label: 'terms', file: 'terms.html' } ] },
    { key: '9.2', label: 'Security / GDPR', file: 'security.html', status: 'spec', states: [ { key: 'base', label: 'security', file: 'security.html' } ] },
  ]},
];

/* Product flows, from ia/docs/flows.md. Each lists its screens in order (by node key). */
const WF_FLOWS = [
  { id: '0', label: 'Main job: synthesis to a defensible call', screens: ['2.0', '4.0', '5.0', '6.1', '6.3', '6.4'] },
  { id: '1', label: 'Bring the signal in (first-run activation)', screens: ['2.0', '3.0'] },
  { id: '2', label: 'Trust the synthesis (confidence, spot-check)', screens: ['4.0', '5.0'] },
  { id: '3', label: 'Defend live under challenge', screens: ['5.0', '6.4'] },
  { id: '4', label: 'Share the brief before the session', screens: ['6.0', '6.1', '6.3', '6.4'] },
];

/* ---- helpers ---- */
const WF_ALL_SCREENS = WF_CLUSTERS.flatMap(c => c.screens);
function wfScreen(key) { return WF_ALL_SCREENS.find(s => s.key === key) || null; }
function wfEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

/* ---- render: index.html main content (flow entries + coverage map) ---- */
function renderWireframeIndex() {
  const mount = document.getElementById('wf-index');
  if (!mount) return;

  let built = 0, spec = 0;
  WF_ALL_SCREENS.forEach(s => { s.status === 'built' ? built++ : spec++; });

  let html = '';

  /* Flow entries: walk the product by flow */
  html += '<section class="wf-flows"><h2 class="wf-h2">Walk by flow</h2>';
  for (const f of WF_FLOWS) {
    html += '<div class="wf-flow" id="flow-' + f.id + '">';
    html += '<div class="wf-flow-head"><span class="wf-flow-id">Flow ' + f.id + '</span><span class="wf-flow-label">' + wfEsc(f.label) + '</span></div>';
    html += '<ol class="wf-flow-screens">';
    for (const key of f.screens) {
      const s = wfScreen(key);
      if (!s) continue;
      const built = s.status === 'built';
      html += '<li class="wf-fscreen ' + (built ? 'is-built' : 'is-spec') + '">';
      html += '<span class="wf-fs-node">' + s.key + '</span>';
      html += built
        ? '<a class="wf-fs-label" href="' + s.file + '">' + wfEsc(s.label) + '</a>'
        : '<span class="wf-fs-label">' + wfEsc(s.label) + '</span>';
      html += '<span class="wf-fs-states">';
      for (const st of s.states) {
        html += built
          ? '<a class="wf-schip" href="' + st.file + '">' + wfEsc(st.label) + '</a>'
          : '<span class="wf-schip">' + wfEsc(st.label) + '</span>';
      }
      html += '</span></li>';
    }
    html += '</ol></div>';
  }
  html += '</section>';

  /* Coverage map: every node by cluster, built vs spec */
  html += '<section class="wf-coverage">';
  html += '<div class="wf-cov-head"><h2 class="wf-h2">Coverage map</h2>';
  html += '<span class="wf-counter"><b>' + built + '</b> built · <b>' + spec + '</b> in spec</span></div>';
  html += '<div class="wf-legend"><span class="wf-lg wf-lg--built">solid = built</span><span class="wf-lg wf-lg--spec">dashed = in spec (IA)</span></div>';
  for (const c of WF_CLUSTERS) {
    html += '<div class="wf-cluster"><h3 class="wf-cluster-title">' + c.id + ' · ' + wfEsc(c.title) + '</h3>';
    html += '<div class="wf-cluster-screens">';
    for (const s of c.screens) {
      const built = s.status === 'built';
      const pages = s.states.length;
      const meta = built ? (pages + ' page' + (pages === 1 ? '' : 's')) : (pages + ' state' + (pages === 1 ? '' : 's') + ' · IA');
      const inner = '<span class="wf-tile-node">' + s.key + '</span><span class="wf-tile-label">' + wfEsc(s.label) + '</span><span class="wf-tile-meta">' + meta + '</span>';
      html += built
        ? '<a class="wf-tile is-built" href="' + s.file + '">' + inner + '</a>'
        : '<div class="wf-tile is-spec">' + inner + '</div>';
    }
    html += '</div></div>';
  }
  html += '</section>';

  mount.innerHTML = html;
}

/* ---- render: sidebar wireframe sub-links (Flow 0..N + All screens) ---- */
function renderSidebarFlows() {
  const mount = document.getElementById('wf-side-links');
  if (!mount) return;
  const onIndex = /(^|\/)index\.html$/.test(location.pathname) || location.pathname.endsWith('/wireframes/');
  let html = '';
  for (const f of WF_FLOWS) {
    html += '<li><a href="index.html#flow-' + f.id + '">Flow ' + f.id + ' · ' + wfEsc(f.label.split(':')[0].split('(')[0].trim()) + '</a></li>';
  }
  html += '<li><a href="index.html"' + (onIndex ? ' class="sidebar-current"' : '') + '>All screens</a></li>';
  mount.innerHTML = html;
}

(function () {
  renderWireframeIndex();
  renderSidebarFlows();
})();
