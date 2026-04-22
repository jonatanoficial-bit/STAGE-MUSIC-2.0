const CACHE_NAME = 'stage-music-v0-2-0';
const urlsToCache = [
  '/',
  '/index.html',
  '/login-cifra.html',
  '/modo-live.html',
  '/buscar-cifra.html',
  '/minhas-listas.html',
  '/configuracoes.html',
  '/css/global.css',
  '/css/home.css',
  '/css/auth.css',
  '/css/live.css',
  '/js/build-info.js',
  '/js/app.js',
  '/assets/logo/stage-music-logo.svg',
  '/assets/icons/favicon.svg',
  '/assets/backgrounds/hero-stage.svg',
  '/assets/illustrations/splash-card.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});
