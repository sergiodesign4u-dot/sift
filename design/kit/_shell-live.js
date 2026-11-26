/* design/kit/_shell-live.js - the shell, live, in a window of a given width (Stage 10 Step 3).

   A media query reads the WINDOW, so a page cannot show both forms of the shell side by side by
   narrowing a box: each form needs its own window. This script gives it one. A mount
   <div data-shell-live="360"></div> becomes an iframe exactly that many pixels wide, whose document
   is the product shell: the sprite and the .appframe markup of design/kit/shell.html (the one
   place the shell's markup lives), put in a .app frame and drawn by design/system/index.css. Nothing
   is copied by hand, so this cannot drift from the shell. A wide window is scaled down to the
   column; the rules inside it still see the full width.

   Stand chrome, never product. No em dash anywhere in this file.
*/
(function () {
  var mounts = document.querySelectorAll('[data-shell-live]');
  if (!mounts.length || !window.fetch || !window.DOMParser) return;

  var MAIN = '<main class="appmain"><h1 class="h1">Synthesis</h1>' +
    '<p class="sub">Your feedback, clustered into ranked themes. Open one to trace the evidence behind it.</p></main>';

  fetch('shell.html').then(function (r) { return r.text(); }).then(function (t) {
    var d = new DOMParser().parseFromString(t, 'text/html');
    var sprite = d.querySelector('svg.sprite');
    var frame = d.querySelector('.appframe');
    if (!sprite || !frame) return;
    var main = frame.querySelector('main');
    if (main) main.outerHTML = MAIN;
    var theme = document.documentElement.getAttribute('data-theme');
    var doc = '<!DOCTYPE html><html lang="en"' + (theme ? ' data-theme="' + theme + '"' : '') + '><head><meta charset="UTF-8">' +
      '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;590;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">' +
      '<link rel="stylesheet" href="../system/index.css"></head><body>' + sprite.outerHTML +
      '<div class="app">' + frame.innerHTML + '</div></body></html>';

    Array.prototype.forEach.call(mounts, function (m) {
      var w = parseInt(m.getAttribute('data-shell-live'), 10), h = parseInt(m.getAttribute('data-h') || '330', 10);
      var f = document.createElement('iframe');
      f.title = 'The shell in a ' + w + 'px window';
      f.setAttribute('tabindex', '-1');
      f.style.cssText = 'display:block;border:0;width:' + w + 'px;height:' + h + 'px;transform-origin:0 0';
      f.srcdoc = doc;
      m.style.cssText = 'overflow:hidden;border:1px solid var(--line-hairline);border-radius:var(--radius-md);max-width:100%;width:' + w + 'px';
      m.appendChild(f);
      function fit() {
        var s = Math.min(1, m.parentNode.clientWidth / w);
        f.style.transform = s < 1 ? 'scale(' + s + ')' : '';
        m.style.height = Math.round(h * s) + 'px';
      }
      window.addEventListener('resize', fit); fit();
    });
  });
})();
