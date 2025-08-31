// service-worker.js — single SW used by both the PWA cache and OneSignal
// IMPORTANT: must be at the same path you register in index.html

// Let OneSignal run inside this worker
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

// (Optional) Simple app-shell cache (kept minimal while debugging)
const CACHE = 'pheasant-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-32.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE && caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

