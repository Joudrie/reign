// Crown & Succession service worker: the page and fonts are refreshed in the background (stale-while-revalidate);
// portrait sheets never change for a given name, so they are served from cache once seen.
const CACHE = "cs-v1";
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "./manifest.webmanifest", "./favicon.svg"]))); });
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sheet = url.origin === location.origin && url.pathname.includes("/sheets/");
  const own = url.origin === location.origin;
  const font = /fonts\.(googleapis|gstatic)\.com|cdn\.jsdelivr\.net/.test(url.host);
  if (!own && !font) return;   // Wikimedia thumbnails etc. go straight to the network
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, { ignoreSearch: !sheet });
    const fresh = fetch(req).then(r => { if (r.ok || r.type === "opaque") c.put(req, r.clone()); return r; }).catch(() => hit);
    return sheet ? hit || fresh : hit ? (e.waitUntil(fresh), hit) : fresh;
  }));
});
