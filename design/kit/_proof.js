/*
  design/kit/_proof.js - the pair viewer on pixel-proof.html (Stage 08 Step 8).

  Loads the committed before and after frames of the chosen screen and width, draws the after
  frame dimmed with every differing pixel in red, and states the count. The threshold is the one
  the proof used: any channel more than 8 apart. Showcase furniture, never the product.

  No em dash anywhere in this file.
*/
(function () {
  var pick = document.getElementById('proof-pick');
  if (!pick) return;
  var A = document.getElementById('proof-a'), B = document.getElementById('proof-b'), D = document.getElementById('proof-d');
  var out = document.getElementById('proof-count');
  function load(img, src) { return new Promise(function (res, rej) { img.onload = function () { res(img); }; img.onerror = rej; img.src = src; }); }
  function run() {
    var k = pick.value, a = 'screens/proof/' + k + '-before.png', b = 'screens/proof/' + k + '-after.png';
    document.getElementById('proof-a-link').href = a; document.getElementById('proof-b-link').href = b;
    out.textContent = 'measuring';
    Promise.all([load(A, a), load(B, b)]).then(function () {
      var W = Math.max(A.naturalWidth, B.naturalWidth), H = Math.max(A.naturalHeight, B.naturalHeight);
      function data(im) { var c = document.createElement('canvas'); c.width = W; c.height = H; var x = c.getContext('2d'); x.drawImage(im, 0, 0); return x.getImageData(0, 0, W, H).data; }
      var da = data(A), db = data(B);
      D.width = W; D.height = H; var g = D.getContext('2d');
      g.drawImage(B, 0, 0); g.fillStyle = 'rgba(0,0,0,0.6)'; g.fillRect(0, 0, W, H);
      var od = g.getImageData(0, 0, W, H), n = 0;
      for (var i = 0; i < da.length; i += 4) {
        if (Math.abs(da[i] - db[i]) > 8 || Math.abs(da[i + 1] - db[i + 1]) > 8 || Math.abs(da[i + 2] - db[i + 2]) > 8) { n++; od.data[i] = 255; od.data[i + 1] = 40; od.data[i + 2] = 40; od.data[i + 3] = 255; }
      }
      g.putImageData(od, 0, 0);
      var sz = A.naturalHeight === B.naturalHeight ? 'same height' : 'height ' + A.naturalHeight + ' to ' + B.naturalHeight + 'px';
      out.textContent = n.toLocaleString('en') + ' differing pixels, ' + sz;
    }, function () { out.textContent = 'the frames did not load'; });
  }
  pick.addEventListener('change', run);
  run();
})();
