const staticSite = "olawale-site-v1.0.0";
const assets = [
  "/",
  "/index.html",
  "/portfolio-details.html",
  "/browserconfig.xml",
  "/assets/css/style.css",
  "/assets/js/main.js",
  "/assets/js/typed.min.js",
  "/assets/vendor/",
  "/assets/img/", 
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSite).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});