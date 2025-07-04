self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('todo-cache').then(cache => {
      return cache.addAll([
        './',
        './todolist.html',
        './manifest.json',
        './icons/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});