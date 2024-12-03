importScripts('assets/lib/cache-polyfill.js');

let CACHE_VERSION = 'app-v0.00';
// give all files path you want to work offline
let CACHE_FILES = [

            './',
            'index.html',
            'sw.js',
            'manifest.json',
            'service-worker.js',
            'assets/style/style.css',
            'assets/script/script.js',
            'assets/lib/cache-polyfill.js',
            'assets/lib/bootstrap.bundle.min.js',
            'assets/Imagenes/app-store-badge.svg',
            'assets/Imagenes/demo-screen.mp4',
            'assets/Imagenes/favicon.ico',
            'assets/Imagenes/google-play-badge.svg',
            'assets/Imagenes/tnw-logo.svg',
            'assets/Imagenes/photo-1620207418302-439b387441b0.jpg',
            'assets/Imagenes/photo-1620912189865-1e8a33da4c5e.jpg',                    
            'assets/Imagenes/fondo.jpg',
            'assets/Imagenes/icon-72x72.png',
            'assets/Imagenes/icon-96x96.png',
            'assets/Imagenes/icon-128x128.png',
            'assets/Imagenes/icon-144x144.png',
            'assets/Imagenes/icon-152x152.png',
            'assets/Imagenes/icon-192x192.png',
            'assets/Imagenes/icon-384x384.png',
            'assets/Imagenes/icon-512x512.png'
            
          ];
  
  self.addEventListener('install', function (event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(CACHE_FILES);
            })
    )
})

self.addEventListener('fetch', function (event) {
    let online = navigator.onLine
    if (!online) {
        event.respondWith(
            caches.match(event.request).then(function (res) {
                if (res) {
                    return res;
                }
            })
        )
    }
})

self.addEventListener('activate', function(event){
    event.waitUntil(
        caches.keys().then(function(keys){
            return prompt.all(keys.map(function(keys, i){
                if(keys !== CACHE_VERSION){
                    return caches.delete(keys[i]);
                }
            }))
        })
    )
})