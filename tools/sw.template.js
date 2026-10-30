// Service Worker für Oceans Reise – wird von tools/release.py erzeugt, nicht von Hand ändern.
const VERSION = '__VERSION__';
const CACHE = 'oceans-reise-' + VERSION;
const FONT_CACHE = 'oceans-reise-fonts';
const FILES = [
  __FILES__
];

// Neue Version: alle Dateien vorab laden. Aktiv wird sie erst, wenn die Seite
// "SKIP_WAITING" schickt (passiert automatisch im Startmenü).
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// Alte Versionen aufräumen
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('oceans-reise-') && k !== CACHE && k !== FONT_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Schrift von Google Fonts: aus dem Cache, im Hintergrund auffrischen
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(caches.open(FONT_CACHE).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== location.origin) return;

  // Seite selbst: zuerst aus dem Netz (damit Updates schnell ankommen), offline aus dem Cache
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).catch(() => caches.match('index.html', {cacheName: CACHE})));
    return;
  }
  // Bilder und übrige Dateien: aus dem Cache dieser Version
  event.respondWith(caches.match(req, {cacheName: CACHE}).then(hit => hit || fetch(req)));
});
