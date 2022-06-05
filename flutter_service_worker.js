'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0aeb23084fb8e30a5bd0d72468f7ecf2",
".git/config": "204672e0bf1c6f9e38a58fc7eec5d5af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c727c8c2f7f9373ddb5aaa440a9feda3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6186d73ebbfba2afe6a18a78c3f4454",
".git/logs/refs/heads/master": "d6186d73ebbfba2afe6a18a78c3f4454",
".git/logs/refs/remotes/origin/master": "a9c0f18ac6b16223a43005129f70abdc",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/6332cc8561523ff990ace812aa773167c739dd": "1e8442c60a451015a0d6a083120cdf75",
".git/objects/06/d1b748c9451bac980fc31ee5f1ec013a084635": "9029a417acd53f905b9f513437c436ca",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1c/5ddee7ee1014abd7080912008470073f4cb4ab": "292e3b74e8f735088a4914d513194fa5",
".git/objects/1f/c7e193117091af21e018da32000c293120016c": "3ed104bfb6e8089704f590739bc53408",
".git/objects/24/60969c859151a6900ff676df7972f19b26bb61": "89274cdc4691e48fb7078b2afebd031b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/366746dbc7afbed1250376856a478ee9424dbb": "4f43c4950c4b163abb38c3131fe42631",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/21263dd3d7d6c66a72347dc19e8bcc15567093": "1b5c7ecdab98ae42364c4a930bb107c2",
".git/objects/3b/3453af7fb283d1ba3f58cdff2c0f59ed24cc17": "41865135b097057185954cb031510977",
".git/objects/3f/31dcaa1440957ee19c1e2343680e9b11fbcc57": "3169b83bfebc345b4b413cf5e0a9bd4b",
".git/objects/40/6fd15373537f27d3c78fecb77d20c5120c83a9": "523337c31e2bd38b9ac3dcb1daf7b03e",
".git/objects/44/889d16e58cd8d0df8f7cae6dbe166f9cd22298": "bef929c239560f7776f74e2a5d47020e",
".git/objects/46/1177eed28aba4235f62450071c66e207a6d060": "d2cb3db9c60a783ba460f7f8317e2949",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/c16fb80dbdfbde1f3b13109d0de63fe42b44b6": "0e2ef2fdf6c29be7fe883e6c7116b6c3",
".git/objects/55/165e02e5888b36dc5ed07b892c10a852102a3b": "fa05c5e068420d6b742d994c75cd95ee",
".git/objects/5a/7f6a458243fb6f8b95c957e3407338ba5f15a5": "4858063e7b9ef17bad4dd65e539463ab",
".git/objects/63/68721b842cc39854da25473a28d2d346727393": "d29bb9b20733a9d3343f23c92a6f0761",
".git/objects/66/00729e0e73e9ce9237966abf6c70ec24aa56ed": "693e2a5d85b7bdfb93ab5120346eb75e",
".git/objects/67/da6ad32ae34d609af7f86392988e63f16c6924": "209c12bb64f5150025190467644bc68e",
".git/objects/6f/8022be4cc893e184b6994b844610bd3ba7d157": "9ee12372c87f813403cca789e6d3eed9",
".git/objects/72/200cfeacff8c4b9974d17b8652751a5ed001d6": "dad3243fa3860388bd6f54112b090a40",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/a7bc6d75c31148078aa909867d4cbec1adfc35": "5d5c026411ab75ba1e13dd0ed76bb2b9",
".git/objects/95/f17d6b3a7cb54f48e186f78efaf457ba8cbe8a": "336427ff89f777e2c91353a500797494",
".git/objects/9a/b9f8ba61034d2d1e01d92692506d30dcdb5fe8": "9a509ef0bd00072eda939f3956897089",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/e25cdac2fc3c24f391c82b5a69de19e52a3da7": "3cf13b574f9ba35a8244635a4a0d64a5",
".git/objects/a9/c587bdda9f273a0a85cdb438b2e0e75e43f457": "1d1aa28898c210be33a70433d98f8674",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/f5565b99c95ff80ff9523f1c11edfccc659bfe": "5d1e836f9e69bc273774aa0fe67072fd",
".git/objects/b1/8662ca2e8ebae16003bd46fe375798596c3e19": "69c1b30bb623436db5171e65ed666485",
".git/objects/b5/76b8410be6f9ba45b429e2d9c2cfedb900a1b5": "8ef8bd0bf4ebe54829dcdb940ec82a00",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/69fe6da11731b31b5eae6af1330179e194d7b7": "544fe1cbbcc80a8680deef069c3eba0e",
".git/objects/c3/6b1e5b86c16521e81daa9ed468167140578d34": "77f8a89c79ba36bf677e9ba57b8273d4",
".git/objects/c5/7a3ddbd15036087b72cff9afacc6eb4d5bbff9": "0a4001c154ad1fd04d63aef2a3bf0cbc",
".git/objects/c8/0ce84fc990155f747230708350f984066e84fb": "73cbf88cadae0a14aefef29bac14ee25",
".git/objects/cb/fdca27730c6c2db42fa5b8bc998125d3cd0eb6": "c606fa2bbf1c9ea9a94e5b3aaab8ada6",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/109ded403f74c7e06af1b329bcbc953b5c07d0": "55cd0f819cdde80cf8523a3b6ea7aa45",
".git/objects/d5/6e7c058f965ee380468465b233b98dc247fbd2": "05eadce67425f8d7de30b060cbf4abfa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/75780d354e381459ca4d3acbc05280dddb9a2f": "e2231124dbac514329cf16b62f907aad",
".git/objects/e5/0a6caec640d3535af3053c59e76b257983f74e": "992968d110b94867a6a2669825a858d0",
".git/objects/e5/603b237c0f0786d267a884fc15ad727466b0e6": "dd50b0be9860f728d6bc1138b5f44f39",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/d96f0ab426e67e8c5b1ab408b8b6f8d2a0a247": "a493c11e384364a87ae435480aabb30c",
".git/objects/e7/990c0ef4b3dcc5cad0320a6af927dd282f5ba1": "9ebb127d52f99f8f51bf8ed840bc3528",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/dc2c1dde822b656ab4a84f1ce2279d74f93b62": "8a3c6a94a20b0fe11f41d37222220afc",
".git/objects/f0/8515f7912bffd0a2bfe1a2810c7375737bdc70": "762463b7be5341f3cbe98288bfdc0c97",
".git/objects/f2/741a100d29bfda114d8e8a5a6ff83bb4c96d8a": "fc566a97cc4c2b5b06f3802c2d8f9033",
".git/objects/fa/e6a81c8021f98e611643b2e1a78dc23f0ac377": "f369c555ced5a454cbcf1caf8e64a419",
".git/refs/heads/master": "8fc6c6cbe181d31881b889cfaa7d0ab9",
".git/refs/remotes/origin/master": "8fc6c6cbe181d31881b889cfaa7d0ab9",
"assets/AssetManifest.json": "6eb1f3634a7beef7573bd15568b6dcec",
"assets/assets/images/1.jpg": "00da68aec857a66a824fbc701911f5b1",
"assets/assets/images/11.jpg": "6a8d9965786b68aca925b327894545ef",
"assets/assets/images/12.jpg": "e1c0bf752e4d31f41e20c53ce989e8bb",
"assets/assets/images/13.jpg": "e0ce3179e4227451c93986b5341ed374",
"assets/assets/images/14.jpg": "5ea901842b58ee5a66794991d4f92c42",
"assets/assets/images/15.jpg": "6bbbf204cd09441e2429149ad2499928",
"assets/assets/images/2.jpg": "e8fdfcfa45f14232c8c57d9c5ce08c13",
"assets/assets/images/3.jpg": "20a22db49496bfdec4a34a2627b9a702",
"assets/assets/images/4.jpg": "0b48b780c9c1fc4927fac663f0888f68",
"assets/assets/images/5.jpg": "7f97506cca72a80fa96d10bf9d2c973f",
"assets/assets/images/6.jpg": "0d27ae6b8d4e308727827e0be4fd3c0a",
"assets/assets/images/7.jpg": "b5e1818f9ae24d50564a76ab2c683f68",
"assets/assets/images/9.jpg": "422cb6d9947091cb05ceb5c7cc37c119",
"assets/assets/images/contact%2520us.jpg": "b439b1665508789facdb0ad527d1f7c6",
"assets/assets/images/footer.jpg": "00bd57d770a119bdf1382523a60ee12e",
"assets/assets/images/header.png": "40e6aa02630f6ba611bca4e71d8a1ebd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "99644ac949a0073cfc710ffe10b20d85",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "404bac67b68b68e7f4a0aee26e8d68df",
"/": "404bac67b68b68e7f4a0aee26e8d68df",
"main.dart.js": "fab72707142ff8963b14511a17f05ac3",
"manifest.json": "d16cf658a9888ee56f4b23ebd5c6d5e6",
"version.json": "456e7be48f5a33236df327850ab26108"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
