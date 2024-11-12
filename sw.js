self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache')
        .then(cache => {
          return   
   Cache.addAll([
            '/index.html',
            '/styles.css',
            '/manifest.json',
            '/service-worker.js',
            '/fondo.jpg',
          ]);
        })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(   
  
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  });