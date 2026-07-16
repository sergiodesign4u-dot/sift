/*
  ia/_nav.js - single registry of IA Detail Layer nodes.

  This is the ONE place a node is registered. Each new html node (Steps 2 to 6)
  adds exactly ONE entry to IA_NODES below and appears as a chip in structure.html
  automatically. Do NOT hand-build the chip list anywhere else, and do NOT put the
  node list in the sidebar: the sidebar stays two fixed links (Site map + Structure).

  Entry shape:
    { key: '0.1', label: 'Navigation', type: 'global element', group: 'global', file: 'navigation.html' }
      key   - node number X.Y from sitemap.md (also the structure.html#X.Y anchor)
      label - node name
      type  - page | dialog | state | flow | section | global element | component
      group - 'global' (Global elements section) | 'pages' (Pages section)
      file  - the node's html file in ia/
*/

const IA_NODES = [
  // Nodes are appended here as each one is built (Steps 2 to 6).
  { key: '0.1', label: 'Navigation', type: 'global element', group: 'global', file: 'navigation.html' },
  { key: '0.2', label: 'Footer', type: 'global element', group: 'global', file: 'footer.html' },
  { key: '0.0', label: 'Home (marketing landing)', type: 'page', group: 'pages', file: 'home.html' },
  { key: '2.0', label: 'Synthesis view', type: 'page', group: 'pages', file: 'synthesis.html' },
  { key: '3.0', label: 'Sources / ingestion', type: 'page', group: 'pages', file: 'sources.html' },
  { key: '4.0', label: 'Theme detail', type: 'page', group: 'pages', file: 'theme.html' },
  { key: '5.0', label: 'Evidence source', type: 'page', group: 'pages', file: 'evidence.html' },
  { key: '6.0', label: 'Decide and defend / Briefs', type: 'page', group: 'pages', file: 'briefs.html' },
  { key: '1.0', label: 'Auth (sign up / log in)', type: 'page', group: 'pages', file: 'auth.html' },
  { key: '7.0', label: 'Account / settings', type: 'page', group: 'pages', file: 'account.html' },
  { key: '8.0', label: 'System (404 / 500 / cookie / toast)', type: 'system + global', group: 'pages', file: 'system.html' },
  { key: '9.0', label: 'Content / legal (privacy / terms / security)', type: 'page', group: 'pages', file: 'legal.html' }
];

(function renderStructureHub() {
  const mount = document.getElementById('ia-structure');
  if (!mount) return;

  const groups = [
    { id: 'global', title: 'Global elements' },
    { id: 'pages', title: 'Pages' }
  ];
  const activeKey = decodeURIComponent((location.hash || '').replace(/^#/, ''));

  let html = '';
  for (const g of groups) {
    const items = IA_NODES.filter(n => n.group === g.id)
      .sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
    html += '<div class="hub-group">';
    html += '<h3 class="hub-group-title">' + g.title + ' <span class="hub-count">' + items.length + '</span></h3>';
    if (!items.length) {
      html += '<p class="hub-empty">Nodes appear here as they are built.</p>';
    } else {
      html += '<div class="hub-chips">';
      for (const n of items) {
        const active = n.key === activeKey ? ' hub-chip-active' : '';
        html += '<a class="hub-chip' + active + '" id="chip-' + n.key + '" href="' + n.file + '">'
          + '<span class="hub-chip-num">' + n.key + '</span>'
          + '<span class="hub-chip-label">' + n.label + '</span>'
          + '<span class="hub-chip-type">' + n.type + '</span>'
          + '</a>';
      }
      html += '</div>';
    }
    html += '</div>';
  }
  mount.innerHTML = html;

  // If the hub was opened at structure.html#X.Y, bring that chip into view.
  if (activeKey) {
    const el = document.getElementById('chip-' + activeKey);
    if (el) el.scrollIntoView({ block: 'center', behavior: 'auto' });
  }
})();
