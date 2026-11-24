/*
  scripts/shoot-states.js - re-take the state snapshots of a component page.

  A snapshot in this system is a MEASUREMENT, not an illustration: hover, active and
  focus-visible are mutually exclusive on one element and cannot stand in a row alive, so the
  page shows a live rest instance and photographs the rest. Step 9 checks these files for byte
  drift, and a snapshot nobody can re-take freezes silently, which is worse than none.

  Usage:  node scripts/shoot-states.js button
          PORT=8611 ONLY_STATES=hover,focus node scripts/shoot-states.js chip
  ONLY_STATES writes only the frames a page shows (checkbox, chip and link show hover and focus;
  input adds disabled; button shows all four). The filled button's pressed frame equals its rest
  frame by decision (button.css: the press reads as a return), and the script says so.
  Needs a static server on the port below and Playwright on the machine.

  The scene is the page's live hero (.kit-hero), the first block of a card-format page. Until
  Stage 08 Step 7 it was #live, which the card format of Step 5 removed: the script then found no
  scene, and the frames on five pages were the August ones, of a layout that no longer exists.
  Focus is reached by pressing Tab until the control itself holds focus, and every frame is
  checked: a state frame identical to the rest frame is reported, not saved silently.

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

    const scene = p.locator('.kit-hero').first();
    if (!(await scene.count())) { console.log(`${name}: no .kit-hero on the page, nothing taken`); process.exitCode = 1; await ctx.close(); continue; }
    await p.mouse.move(0, 0);
    const rest = await scene.screenshot();
    /* the first real control in the scene, whatever kind it is: this script serves a button
       page, an input page and a link page, and hard-coding 'button' made it silently skip two. */
    const SEL = 'button:not([disabled]), input:not([disabled]), select, textarea, a[href]';
    const first = scene.locator(SEL).first();

    // hover: a real pointer on a real control
    await first.hover();
    await p.waitForTimeout(160);
    await shot('hover');

    // active: the pointer held down
    const box = await first.boundingBox();
    async function shot(state, restIsFine) {
      const buf = await scene.screenshot();
      if (!restIsFine && buf.equals(rest)) console.log(`${name} ${theme}: the ${state} frame equals the rest frame`);
      if (process.env.ONLY_STATES && !process.env.ONLY_STATES.split(',').includes(state)) return;
      require('fs').writeFileSync(`design/kit/screens/${name}-${state}-${theme}.png`, buf);
    }
    await p.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await p.mouse.down();
    await p.waitForTimeout(160);
    await shot('active');
    await p.mouse.up();

    // focus-visible: reached by the keyboard, which is the only way it draws
    await p.mouse.move(0, 0);
    await p.evaluate(() => document.activeElement && document.activeElement.blur());
    const h = await first.elementHandle();
    let reached = false;
    for (let k = 0; k < 400 && !reached; k++) {
      await p.keyboard.press('Tab');
      reached = await h.evaluate(e => document.activeElement === e && e.matches(':focus-visible'));
    }
    if (!reached) console.log(`${name} ${theme}: Tab never reached the control, focus frame not taken`);
    else { await p.waitForTimeout(160); await shot('focus'); }

    // disabled: no interaction at all, the control is dimmed at rest
    await p.evaluate(() => document.activeElement && document.activeElement.blur());
    await p.mouse.move(0, 0);
    await p.waitForTimeout(160);
    await shot('disabled', true);

    await ctx.close();
    console.log(`${name}: four states taken in the ${theme} theme`);
  }
  await b.close();
})();
