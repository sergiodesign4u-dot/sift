/*
  scripts/shoot-states.js - re-take the state snapshots of a component page.

  A snapshot in this system is a MEASUREMENT, not an illustration: hover, active and
  focus-visible are mutually exclusive on one element and cannot stand in a row alive, so the
  page shows a live rest instance and photographs the rest. Step 9 checks these files for byte
  drift, and a snapshot nobody can re-take freezes silently, which is worse than none.

  Usage:  node scripts/shoot-states.js button
  Needs a static server on the port below and Playwright on the machine.

  No em dash anywhere in this file.
*/
const { chromium } = require('/opt/homebrew/lib/node_modules/playwright');
const PORT = process.env.PORT || 8795;
const name = process.argv[2] || 'button';

(async () => {
  const b = await chromium.launch();
  for (const theme of ['dark', 'light']) {
    const ctx = await b.newContext({ viewport: { width: 900, height: 700 }, deviceScaleFactor: 2 });
    const p = await ctx.newPage();
    await p.goto(`http://localhost:${PORT}/design/kit/${name}.html`, { waitUntil: 'networkidle' });
    await p.evaluate(t => {
      if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
      else document.documentElement.removeAttribute('data-theme');
    }, theme);
    await p.waitForTimeout(250);

    const scene = p.locator('#live');
    /* the first real control in the scene, whatever kind it is: this script serves a button
       page, an input page and a link page, and hard-coding 'button' made it silently skip two. */
    const SEL = 'button:not([disabled]), input:not([disabled]), select, textarea, a[href]';
    const first = scene.locator(SEL).first();

    // hover: a real pointer on a real control
    await first.hover();
    await p.waitForTimeout(160);
    await scene.screenshot({ path: `design/kit/screens/${name}-hover-${theme}.png` });

    // active: the pointer held down
    const box = await first.boundingBox();
    await p.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await p.mouse.down();
    await p.waitForTimeout(160);
    await scene.screenshot({ path: `design/kit/screens/${name}-active-${theme}.png` });
    await p.mouse.up();

    // focus-visible: reached by the keyboard, which is the only way it draws
    await p.mouse.move(0, 0);
    await p.evaluate(s => { const e = document.querySelector('#live ' + s); if (e) e.blur(); }, SEL);
    await p.keyboard.press('Tab');
    await p.evaluate(s => { const e = document.querySelector('#live ' + s); if (e) e.focus(); }, SEL);
    await p.keyboard.press('Tab');
    await p.keyboard.down('Shift'); await p.keyboard.press('Tab'); await p.keyboard.up('Shift');
    await p.waitForTimeout(160);
    await scene.screenshot({ path: `design/kit/screens/${name}-focus-${theme}.png` });

    // disabled: no interaction at all, the control is dimmed at rest
    await p.evaluate(() => document.activeElement && document.activeElement.blur());
    await p.mouse.move(0, 0);
    await p.waitForTimeout(160);
    await scene.screenshot({ path: `design/kit/screens/${name}-disabled-${theme}.png` });

    await ctx.close();
    console.log(`${name}: four states taken in the ${theme} theme`);
  }
  await b.close();
})();
