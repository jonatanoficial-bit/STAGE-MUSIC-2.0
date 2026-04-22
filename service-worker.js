const CACHE_NAME = 'stage-music-v0-1-0';
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
  '/js/app.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});
