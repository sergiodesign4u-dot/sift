/*
  design/_theme.js - the product's theme, applied before the first paint.

  design/_nav.js renders the panel and its theme switch at the end of <body>, so a theme applied
  there would arrive after the screen had already been painted dark. This file is loaded in
  <head>, synchronously, and does one thing: put the stored choice on <html> before <body>
  exists. The same mechanism as design/kit/_theme.js on the stand (Stage 08 Step 7).

  Its own key, not the stand's: the stand and the product are two surfaces with two switches,
  and a "no" to the light theme in the product (Stage 08 Step 8) removes this file, the switch
  in design/_nav.js and the <script> line in each screen's head, and nothing on the stand.

  No em dash anywhere in this file.
*/
(function () {
  try {
    if (localStorage.getItem('sift-theme') === 'light') document.documentElement.setAttribute('data-theme', 'light');
  } catch (e) {}
})();
