const staticColorPicker = "dasturUz"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/script.js"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil (
        caches.open(staticColorPicker).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})