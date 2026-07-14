/* ============================================================
   AL RAYEES SDN BHD — Service Worker
   Strategy:
     • Precache the app shell (pages, CSS, JS, icons) on install
     • Navigations  → network-first, fall back to cache, then offline.html
     • Static assets → stale-while-revalidate (fast, self-healing)
     • Google Fonts → cache-first (immutable, versioned URLs)
   Bump CACHE_VERSION on any shell change to invalidate old caches.
   ============================================================ */
'use strict';

const CACHE_VERSION = 'v3';
const STATIC_CACHE  = `alrayees-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `alrayees-runtime-${CACHE_VERSION}`;
const FONT_CACHE    = `alrayees-fonts-${CACHE_VERSION}`;
const OFFLINE_URL   = './offline.html';

/* App shell — must all exist or install fails, so keep it to essentials. */
const PRECACHE_URLS = [
  './',
  './index.html',
  './about.html',
  './vegetable-oils.html',
  './grains-foodstuffs.html',
  './agricultural-inputs.html',
  './contact.html',
  './offline.html',
  './manifest.json',
  './assets/css/variables.css',
  './assets/css/reset.css',
  './assets/css/nav-footer.css',
  './assets/css/home.css',
  './assets/css/products.css',
  './assets/css/contact.css',
  './assets/css/about.css',
  './assets/js/components.js',
  './assets/js/main.js',
  './assets/images/favicon_icon.png',
  './assets/images/icon-192.png',
  './assets/images/icon-512.png',
  './assets/images/al_rayees_sdn_bhd_logo.png'
];

/* ── Install: precache the shell ───────────────────── */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: drop stale cache versions ───────────── */
self.addEventListener('activate', (event) => {
  const keep = [STATIC_CACHE, RUNTIME_CACHE, FONT_CACHE];
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((n) => !keep.includes(n)).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

/* Allow the page to trigger an immediate update. */
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

/* ── Fetch routing ─────────────────────────────────── */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // 1) Page navigations → network-first, then cache, then offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // 2) Google Fonts (immutable) → cache-first
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(request).then((cached) =>
          cached || fetch(request).then((res) => { cache.put(request, res.clone()); return res; })
        )
      )
    );
    return;
  }

  // 3) Same-origin static assets → stale-while-revalidate
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const network = fetch(request)
            .then((res) => { if (res && res.status === 200) cache.put(request, res.clone()); return res; })
            .catch(() => cached);
          return cached || network;
        })
      )
    );
    return;
  }

  // 4) Everything else (e.g. Google Maps embed) → straight to network
});
