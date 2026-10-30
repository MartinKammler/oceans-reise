// Service Worker für Oceans Reise – wird von tools/release.py erzeugt, nicht von Hand ändern.
const VERSION = '1.0.0';
const CACHE = 'oceans-reise-' + VERSION;
const FONT_CACHE = 'oceans-reise-fonts';
const FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'img/angler.webp',
  'img/anker.webp',
  'img/bg_eis.jpg',
  'img/bg_hafen.jpg',
  'img/bg_hell.jpg',
  'img/bg_leucht.jpg',
  'img/bg_offen.jpg',
  'img/bg_riff.jpg',
  'img/bg_steg.jpg',
  'img/bg_tief.jpg',
  'img/bg_violett.jpg',
  'img/bg_wild.jpg',
  'img/bg_wrack.jpg',
  'img/blasen1.webp',
  'img/blasen2.webp',
  'img/boden_hafen.webp',
  'img/boden_hafen2.webp',
  'img/boden_lagune.webp',
  'img/boden_mix.webp',
  'img/boden_riff.webp',
  'img/boden_tief.webp',
  'img/body.png',
  'img/boje.webp',
  'img/dose.webp',
  'img/eimer.webp',
  'img/fels1.webp',
  'img/fels2.webp',
  'img/fels3.webp',
  'img/fisch3.webp',
  'img/fisch_falter.webp',
  'img/fisch_makrele.webp',
  'img/fisch_papagei.webp',
  'img/fisch_pink.webp',
  'img/fisch_rot.webp',
  'img/flasche.webp',
  'img/flip_back.png',
  'img/flip_back_far.png',
  'img/flip_front.png',
  'img/flip_front_far.png',
  'img/gurtretter.webp',
  'img/haken.webp',
  'img/head_determined.png',
  'img/head_happy.png',
  'img/head_surprised.png',
  'img/head_worried.png',
  'img/herz.webp',
  'img/krabbe.webp',
  'img/krake.webp',
  'img/kugelfisch.webp',
  'img/m_becher1.webp',
  'img/m_becher2.webp',
  'img/m_becher3.webp',
  'img/m_becher4.webp',
  'img/m_dose1.webp',
  'img/m_dose2.webp',
  'img/m_dose3.webp',
  'img/m_dose4.webp',
  'img/m_dose5.webp',
  'img/m_dose6.webp',
  'img/m_dose7.webp',
  'img/m_flasche1.webp',
  'img/m_flasche2.webp',
  'img/m_flasche3.webp',
  'img/m_flasche4.webp',
  'img/m_flasche5.webp',
  'img/m_flasche6.webp',
  'img/m_flasche7.webp',
  'img/m_kanister1.webp',
  'img/m_kanister2.webp',
  'img/m_kanister3.webp',
  'img/m_kanister4.webp',
  'img/m_netz1.webp',
  'img/m_plastik1.webp',
  'img/m_plastik2.webp',
  'img/m_plastik3.webp',
  'img/m_sixpack1.webp',
  'img/m_strohhalm1.webp',
  'img/m_strohhalm2.webp',
  'img/m_tuete1.webp',
  'img/m_tuete2.webp',
  'img/m_tuete3.webp',
  'img/m_tuete4.webp',
  'img/m_tuete5.webp',
  'img/muschel.webp',
  'img/netz.webp',
  'img/qualle.webp',
  'img/reifen.webp',
  'img/robbe.webp',
  'img/schatz.webp',
  'img/schwarm_blau.webp',
  'img/schwarm_gelb.webp',
  'img/schwarm_sardine.webp',
  'img/seegras.webp',
  'img/seeigel.webp',
  'img/seepferd.webp',
  'img/stern.webp',
  'img/torpedo.webp',
  'img/tuete.webp',
  'img/wal.webp',
  'img/wave.png',
  'img/zuhause.webp',
  'icons/apple-touch-icon.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png'
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
