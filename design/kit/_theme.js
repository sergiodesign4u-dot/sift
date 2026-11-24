/*
  design/kit/_theme.js - the stand's theme, applied before the first paint.

  _nav.js loads at the end of <body>, so a theme it applies arrives after the page has already
  been laid out. With the light theme chosen and _nav.js held back 1.5 s, the page showed its
  full text on the dark ground until the script arrived (Stage 08 Step 7, measured). This file is
  loaded in <head>, synchronously, and does one thing: put the stored choice on <html> before
  <body> exists. _nav.js keeps the switch itself and the label of its button.

  Same key as _nav.js. The stand only: the product's own switch arrives at Step 8 in
  design/_nav.js, and the root /_nav.js is never touched.

  No em dash anywhere in this file.
*/
(function () {
  try {
    if (localStorage.getItem('sift-kit-theme') === 'light') document.documentElement.setAttribute('data-theme', 'light');
  } catch (e) {}
})();
