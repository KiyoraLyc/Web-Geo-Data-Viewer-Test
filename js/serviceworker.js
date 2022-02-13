var staticCacheName = "ChinHsinCleanupAppPWA";
self.addEventListener("install", function (event) {
    console.log("install");
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(["/"]);
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log("activate");
});
self.addEventListener('updatefound', function (event) {
    console.log("updatefound");
});
self.addEventListener('statechange', function (event) {
    console.log("statechange");
});
self.addEventListener('controllerchange', function (event) {
    console.log("controllerchange");
});
self.addEventListener('message', function (event) {
    console.log("message");
});
self.addEventListener('fetch', function (event) {
    console.log("fetch")
    event.respondWith(async function () {
        try {
            var res = await fetch(event.request);
            var cache = await caches.open('cache');
            cache.put(event.request.url, res.clone());
            //console.log('pwa fetch', res);
            return res;
        }
        catch (error) {
            console.error('pwa fetch error', error);
            return caches.match(event.request);
        }
    }());
});