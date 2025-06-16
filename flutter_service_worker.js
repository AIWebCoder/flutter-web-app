'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "67b01b7438f973e3bb654759797c0c59",
"assets/AssetManifest.bin.json": "4df6f89a1a437e939b44dbe9af71ab33",
"assets/AssetManifest.json": "c766354cf91d13656a9e5ab976579e24",
"assets/assets/3.png": "620528fd2216f614b773482af39e3a24",
"assets/assets/4.png": "c28fed75cd333005b131fd024b4c2193",
"assets/assets/5.png": "fedc37629a3403113f959d7fd27772ea",
"assets/assets/6.png": "eb30a5a8e847bafc70cbb101be79a2bb",
"assets/assets/7.png": "6a68c067bed69b89528a661134ba9d5e",
"assets/assets/banner.jpg": "4e3885b7435d004aa6092205f9c0a3d6",
"assets/assets/bg.png": "e0d9fcc1b41e43c776b1cb8e2ae2c9a3",
"assets/assets/dollar.png": "ec360bfc2af38e464d47d5d69a1487f1",
"assets/assets/eclipse.png": "befd03ae8e77b950a5745898572cbe1a",
"assets/assets/icons/add.png": "2cd4d88ea523204b5cfd71e3fe233eef",
"assets/assets/icons/appicon.png": "d223a9c0042014fb52e6c871270c31e8",
"assets/assets/icons/bluetooth.png": "b648dfe0d5b1d2a393d9acd37a7a7c8b",
"assets/assets/icons/category.png": "f6c4a4d651a0bff4f666e723ddd7ca4e",
"assets/assets/icons/chat.png": "5b3a1dc8206b732495f5c2d95d1cc991",
"assets/assets/icons/home.png": "80bf1a41d3f1786ecbcce9c054546828",
"assets/assets/icons/ia.png": "83b20614697784a7080f25b84dd76618",
"assets/assets/icons/landing.png": "64f53852a59e798e4f527319027eebc6",
"assets/assets/icons/live.png": "b5298037b5674027f7e9c576320b6e7e",
"assets/assets/icons/logout.png": "fe9229a00f654e802f49ec62e6e1730c",
"assets/assets/icons/marketplace.png": "ef1e4b3b10fcab300cbf11863df44273",
"assets/assets/icons/model.png": "32d5953c2cc3aa9fd8b87141641a6a61",
"assets/assets/icons/profile.png": "72139cab60f500700185a3d49c4d9df8",
"assets/assets/icons/reel.png": "7343517a01cc587df2c8485d569ab3dd",
"assets/assets/icons/socialmedia.png": "a76a65ccda9c344e2d119709831230a3",
"assets/assets/icons/star.png": "e0236c6ec2bb91fc5a1ebcbf70771547",
"assets/assets/icons/story.png": "2cba18ee8d203f311e913f79eddf536d",
"assets/assets/icons/subscription.png": "5a22bc355a6ab75ed149c053db9abd88",
"assets/assets/logo.png": "a8f71968acf5b055b67512440a110b1e",
"assets/assets/lottie/avatar.json": "77280a69e47b50b7c8be1fda573f3c00",
"assets/assets/mk1.png": "e93c182e6bb5349dede680fc730b9343",
"assets/assets/mk2.png": "26680a435b75991830465e4b36a559c3",
"assets/assets/mk3.png": "3a880fda7af6d2da11ef1c3ce9339f7b",
"assets/assets/mk4.png": "773742b72ce3260e817d4dfa1a4c0969",
"assets/assets/mk5.png": "fb777282b3b9a4cba0ace12336d3ec52",
"assets/assets/p1.jpg": "0bbe9c1336513ddee98a3eecc459dc96",
"assets/assets/p3.jpg": "f81ae8e714652803c0cc882279b303ec",
"assets/assets/p4.jpg": "afbbe114e03235cd6dc71a73d34f43f8",
"assets/assets/profile.png": "dc5fb6dbbb84483902fc3c383b84cff9",
"assets/assets/profile2.jpg": "4e3885b7435d004aa6092205f9c0a3d6",
"assets/assets/profile2.png": "9237901f9639ee02b39e15586d7c22ba",
"assets/assets/reel.jpeg": "5492f2622cbfca16c7f236b3355c9a8f",
"assets/assets/slider1.png": "cd152d9293d6513faccee09e81a9652e",
"assets/assets/slider2.png": "cc702868af56ffe8b14ab56dba3915fa",
"assets/assets/slider3.png": "95a7864f8d7e961b74f72e39dc340672",
"assets/assets/sliders/1.jpg": "cd152d9293d6513faccee09e81a9652e",
"assets/assets/sliders/1.png": "cd152d9293d6513faccee09e81a9652e",
"assets/assets/sliders/2.png": "cc702868af56ffe8b14ab56dba3915fa",
"assets/assets/sliders/3.png": "c1c8c0433f76ab5195a7dbb09214f22c",
"assets/assets/sliders/4.jpg": "abb3c0a7c271e8f1d757533182c03ab6",
"assets/assets/sliders/5.jpg": "38395f42325d6827a3bdb6aa948b5df7",
"assets/assets/sliders/6.jpg": "942bbd25835c19c9cb4bf4d488a037c7",
"assets/assets/sliders/7.jpg": "b7c19cc4c295bdab0c86d85173ef0746",
"assets/assets/sliders/8.jpg": "904575f7164522981952a3d85ef2968f",
"assets/assets/sliders/9.jpg": "f8c8599b7fb7273c95a2afeb1abe11b2",
"assets/assets/verify.png": "80a407d22a41edec5abe8eeff8683a75",
"assets/assets/video1.jpg": "accb423fb52e4b0beb9b5997923127a0",
"assets/assets/video2.jpg": "77566248ab35d6344f8387b685023c22",
"assets/assets/video3.jpg": "26b096ffea4ac8c6513471e65691022a",
"assets/assets/video4.jpg": "eb89816c629e58a879d80aee4f7a8b1c",
"assets/assets/video5.jpg": "4388fc22d34fb4433d98bb9a35a6f7ea",
"assets/FontManifest.json": "1ee00d31df7d0b30bfafc1cf4922abf8",
"assets/fonts/MaterialIcons-Regular.otf": "9e60b58bba5cfb5705a7e8200e899512",
"assets/NOTICES": "5d766f97289568d21bb0364c221d8b35",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "b41be4ba08f70a655f9df2398b9a94fa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4043c8d678b6759ba8512c37782044a3",
"/": "4043c8d678b6759ba8512c37782044a3",
"main.dart.js": "77f98bdc61e206f8800c421bbc3c18a9",
"manifest.json": "28215d1be948c40809ad20e82d360de2",
"version.json": "07fa34b3174e0bccd1fe153936ca7b70"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
