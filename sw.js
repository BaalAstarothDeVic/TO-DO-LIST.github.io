self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache')
        .then(cache => {
          return   
   Cache.addAll([
            'index.html',
            'sw.js',
            'manifest.json',
            'service-worker.js',
            'fondo.jpg',
            'icon-72x72.png',
            'icon-96x96.png',
            'icon-128x128.png',
            'icon-144x144.png',
            'icon-152x152.png',
            'icon-192x192.png',
            'icon-384x384.png',
            'icon-512x512.png'
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