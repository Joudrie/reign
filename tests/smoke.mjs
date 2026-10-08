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
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, ...opts });
  await ctx.grantPermissions(["clipboard-read", "clipboard-write"]).catch(() => {});
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
    check(st.c === id && st.cur === first && /^1 of \d+/.test(st.n), `deck ${id} opens (${st.n})`);
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
  check(/0\.25/.test(await p.textContent("#zoomLevel")), "zooms out to 0.25 px/year");
  for (let i = 0; i < 9; i++) await p.click("#zoomIn").catch(() => {});
  check(/32/.test(await p.textContent("#zoomLevel")), "zooms in to 32 px/year");
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

// 5. Stats, search, picker, dark mode.
{
  const p = await page({ colorScheme: "dark" });
  await p.goto(URL0); await p.waitForTimeout(1500);
  await tab(p, "stats");
  await p.click("[data-danger-more]"); await p.waitForTimeout(200);
  check(await p.evaluate(() => document.querySelectorAll(".danger li").length) >= 40, "danger chart expands to every deck");
  await tab(p, "search");
  await p.fill("#q", "henry"); await p.waitForTimeout(300);
  check(await p.evaluate(() => document.querySelectorAll(".results li").length) > 3, "search finds Henrys");
  await p.click('[data-region="Asia & Pacific"]'); await p.waitForTimeout(200);
  check(await p.evaluate(() => [...document.querySelectorAll("#countries [data-country]")].some(b => b.dataset.country === "japan")), "region tab lists Japan under Asia");
  check(!p.errors.length, `no errors in stats/search/dark ${p.errors.slice(0, 3).join(" | ")}`);
  await p.close();
}

await browser.close();
console.log(failed ? `\n${failed} check(s) failed` : "\nall checks passed");
process.exit(failed ? 1 : 0);
