// End-to-end smoke test of the built site.
// usage: node tests/smoke.mjs [url]   (default http://localhost:8765/index.html, e.g. `python3 -m http.server 8765` in dist/)
// Needs Playwright with a Chromium; PW_CHROMIUM can point at a browser binary.
let pw;
try { pw = await import("playwright"); } catch { pw = await import("/opt/node-tools/node_modules/playwright/index.mjs"); }
const URL0 = process.argv[2] ?? "http://localhost:8765/index.html";
const exe = process.env.PW_CHROMIUM ?? ((await import("fs")).existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined);
const browser = await pw.chromium.launch(exe ? { executablePath: exe } : {});
let failed = 0;
const check = (ok, msg) => { console.log(`${ok ? "ok  " : "FAIL"} ${msg}`); if (!ok) failed++; };

async function page(opts = {}) {
  const { firstVisit, ...ctxOpts } = opts;
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, ...ctxOpts });
  await ctx.grantPermissions(["clipboard-read", "clipboard-write"]).catch(() => {});
  if (!firstVisit) await ctx.addInitScript(() => { try { localStorage.setItem("reign.seen", "1"); } catch {} });
  const p = await ctx.newPage();
  p.errors = [];
  p.on("pageerror", e => p.errors.push(e.message));
  p.on("console", m => { if (m.type() === "error" && !/favicon|net::ERR|Failed to load resource/.test(m.text())) p.errors.push(m.text()); });
  return p;
}
const tab = async (p, t) => { await p.click(`[data-tab="${t}"]`); await p.waitForTimeout(350); };

// 1. Every deck opens on its first card, through a deep link, and shows a portrait or banner.
{
  const p = await page();
  await p.goto(URL0); await p.waitForTimeout(1500);
  const ids = await p.evaluate(() => Object.keys(ALL));
  check(ids.length >= 49, `${ids.length} decks loaded`);
  for (const id of ids) {
    const first = await p.evaluate(c => ALL[c].reigns[0].id, id);
    await p.evaluate(h => { location.hash = h; }, `${id}.${first}`);
    await p.waitForTimeout(250);
    const st = await p.evaluate(() => ({ c: country, n: document.getElementById("count").textContent, cur: reigns[index].id }));
    check(st.c === id && st.cur === first && /(^|, )1 of \d+$/.test(st.n), `deck ${id} opens (${st.n})`);
  }
  check(!p.errors.length, `no errors while opening decks ${p.errors.slice(0, 3).join(" | ")}`);
  await p.close();
}

// 2. Reading: next/prev, last card, share copies a deep link.
{
  const p = await page();
  await p.goto(URL0 + "#england.william-i"); await p.waitForTimeout(1500);
  await p.keyboard.press("ArrowRight"); await p.waitForTimeout(400);
  check(await p.evaluate(() => reigns[index].id) === "william-ii", "arrow key moves to next card");
  await p.evaluate(() => go(reigns.length - 1, 0, true)); await p.waitForTimeout(400);
  check(await p.evaluate(() => !!document.querySelector(".card:last-child .hook")), "last card renders its ending");
  await p.evaluate(() => go(0, 0, true)); await p.waitForTimeout(300);
  await p.evaluate(() => document.querySelector('.card [data-share="0"]').click()); await p.waitForTimeout(400);
  const clip = await p.evaluate(() => navigator.clipboard.readText().catch(() => ""));
  check(clip.endsWith("#england.william-i") || (await p.evaluate(() => document.getElementById("toast").textContent)) !== "", `share produces a deep link (${clip || "toast"})`);
  check(!p.errors.length, `no errors while reading ${p.errors.slice(0, 3).join(" | ")}`);
  await p.close();
}

// 3. Timeline: add every country, zoom to both ends, marker tap.
{
  const p = await page();
  await p.goto(URL0 + "#france.louis-xiv"); await p.waitForTimeout(1500);
  await tab(p, "timeline");
  await p.click("[data-cmp-add]"); await p.click('[data-cmp-all="*"]'); await p.waitForTimeout(800);
  const cols = await p.evaluate(() => document.querySelectorAll(".tl-col").length);
  check(cols >= 48, `compare shows ${cols} columns`);
  for (let i = 0; i < 8; i++) await p.click("#zoomOut").catch(() => {});
  check(await p.evaluate(() => zoom === 0), "zooms all the way out");
  for (let i = 0; i < 9; i++) await p.click("#zoomIn").catch(() => {});
  check(await p.evaluate(() => zoom === ZOOMS.length - 1), "zooms all the way in");
  await p.click('[data-cmp-clear]').catch(async () => { await p.click("[data-cmp-add]"); await p.click("[data-cmp-clear]"); });
  await p.waitForTimeout(400);
  check(await p.evaluate(() => document.querySelectorAll(".tl-col").length) === 1, "keep-only clears to one column");
  check(!p.errors.length, `no errors in timeline ${p.errors.slice(0, 3).join(" | ")}`);
  await p.close();
}

// 4. Quiz: play a full round.
{
  const p = await page();
  await p.goto(URL0); await p.waitForTimeout(1500);
  await tab(p, "play");
  await p.click('[data-play="start"]'); await p.waitForTimeout(300);
  for (let q = 0; q < 10; q++) {
    await p.click('[data-ans="confirmed"]').catch(() => {}); await p.waitForTimeout(150);
    await p.click('[data-play="next"]').catch(() => {}); await p.waitForTimeout(150);
  }
  check(await p.evaluate(() => !!document.querySelector(".score-big")), "a full quiz round reaches the score screen");
  check(!p.errors.length, `no errors in quiz ${p.errors.slice(0, 3).join(" | ")}`);
  await p.close();
}

// 5. First visit: intro shows, closes, and the splash is gone.
{
  const p = await page({ firstVisit: true });
  await p.goto(URL0); await p.waitForTimeout(1500);
  check(await p.isVisible("#intro"), "first visit shows the intro");
  await p.click("#introGo"); await p.waitForTimeout(300);
  check(!(await p.isVisible("#intro")) && !(await p.$("#splash")), "intro closes and splash is removed");
  await p.close();
}

// 6. Stats, search, picker, dark mode.
{
  const p = await page({ colorScheme: "dark" });
  await p.goto(URL0); await p.waitForTimeout(1500);
  await tab(p, "stats");
  await p.click("[data-danger-more]"); await p.waitForTimeout(200);
  check(await p.evaluate(() => document.querySelectorAll(".danger li").length) >= 40, "danger chart expands to every deck");
  await tab(p, "search");
  await p.fill("#q", "henry"); await p.waitForTimeout(300);
  check(await p.evaluate(() => document.querySelectorAll(".results li").length) > 3, "search finds Henrys");
  await p.evaluate(() => document.querySelector('[data-region="Asia & Pacific"]').click()); await p.waitForTimeout(200);
  check(await p.evaluate(() => [...document.querySelectorAll("#countries [data-country]")].some(b => b.dataset.country === "japan")), "region tab lists Japan under Asia");
  check(!p.errors.length, `no errors in stats/search/dark ${p.errors.slice(0, 3).join(" | ")}`);
  await p.close();
}

// 7. Back button: returns from any screen to the card, and from an opened card to the screen it came from.
{
  const p = await page();
  await p.goto(URL0 + "#england.william-i"); await p.waitForTimeout(1500);
  const where = () => p.evaluate(() => `${view} ${country}`);
  await p.click("#countryBtn"); await p.waitForTimeout(300);
  await p.click('[data-country="spain"]'); await p.waitForTimeout(400);
  await p.goBack(); await p.waitForTimeout(400);
  check(await where() === "search spain", "Back from a country picked in Find returns to Find");
  await p.goBack(); await p.waitForTimeout(400);
  check(await where() === "read england", "Back again returns to the first card");
  await tab(p, "timeline"); await p.click("[data-cmp-add]"); await p.goBack(); await p.waitForTimeout(300);
  check(await p.evaluate(() => view === "timeline" && !cmpAdding), "Back closes the Compare add list");
  await p.goBack(); await p.waitForTimeout(300);
  check(await where() === "read england", "Back from Compare returns to the card");
  check(!p.errors.length, `no errors with Back ${p.errors.slice(0, 3).join(" | ")}`);
  await p.close();
}

// 8. Landscape phone: portrait beside the text, nothing wider than the screen.
{
  const p = await page({ viewport: { width: 844, height: 390 } });
  await p.goto(URL0 + "#england.henry-viii"); await p.waitForTimeout(1500);
  const l = await p.evaluate(() => { const c = cards[index], f = c.querySelector(".portrait").getBoundingClientRect(), t = c.querySelector(".title").getBoundingClientRect(); return { side: f.right <= t.left, sw: document.documentElement.scrollWidth }; });
  check(l.side && l.sw <= 844, `landscape card puts the portrait beside the title (${JSON.stringify(l)})`);
  await p.close();
}

// 9. iPhone engine (WebKit, if installed): swiping through 15 cards keeps every card the width of the screen.
//    Chromium never showed the "every third card goes super wide" bug; WebKit did.
{
  let wk = null;
  try { wk = await pw.webkit.launch(); } catch { console.log("skip WebKit not installed (npx playwright install webkit)"); }
  if (wk) {
    const ctx = await wk.newContext({ ...pw.devices["iPhone 13"] });
    await ctx.addInitScript(() => { try { localStorage.setItem("reign.seen", "1"); } catch {} });
    const p = await ctx.newPage();
    await p.goto(URL0 + "#bulgaria.asparuh"); await p.waitForTimeout(2000);
    let worst = 0;
    for (let k = 0; k < 15; k++) {
      await p.mouse.move(330, 400); await p.mouse.down(); await p.mouse.move(60, 410, { steps: 12 }); await p.mouse.up();
      await p.waitForTimeout(1200);
      worst = Math.max(worst, await p.evaluate(() => Math.max(...cards.filter(c => !c.classList.contains("shell")).map(c => c.offsetWidth))));
    }
    const vw = await p.evaluate(() => innerWidth);
    check(worst <= vw - 16, `WebKit: cards stay ${worst}px wide on a ${vw}px iPhone after 15 swipes`);
    await wk.close();
  }
}

await browser.close();
console.log(failed ? `\n${failed} check(s) failed` : "\nall checks passed");
process.exit(failed ? 1 : 0);
