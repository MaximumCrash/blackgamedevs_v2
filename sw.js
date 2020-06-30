/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "05d954cf-f0092df7c7e86bdc851b.js"
  },
  {
    "url": "05d954cf-f0092df7c7e86bdc851b.js.map",
    "revision": "9371cdbe940d1373295b96cd2662fa9d"
  },
  {
    "url": "404.html",
    "revision": "a8ad796ef1d9e830240d4cd073e230c1"
  },
  {
    "url": "404/index.html",
    "revision": "336b2273be906039670b61127bc54277"
  },
  {
    "url": "app-369239fe44bd694ba7b5.js"
  },
  {
    "url": "app-369239fe44bd694ba7b5.js.map",
    "revision": "eeb410e5ed6165d00e3d078aa591725e"
  },
  {
    "url": "app-558410296119267eb51b.js"
  },
  {
    "url": "app-558410296119267eb51b.js.map",
    "revision": "47720f815b0c58c86b1df2114c563468"
  },
  {
    "url": "app-6161a7d033276258f7ab.js"
  },
  {
    "url": "app-6161a7d033276258f7ab.js.map",
    "revision": "2b79dfe5b988f82cdb8786c66b7cccac"
  },
  {
    "url": "app-69a837e5f6e3da716655.js"
  },
  {
    "url": "app-69a837e5f6e3da716655.js.map",
    "revision": "85c6e1b441f8e8046e9be3d296a6446c"
  },
  {
    "url": "app-8882e9c0e315db2e810b.js"
  },
  {
    "url": "app-8882e9c0e315db2e810b.js.map",
    "revision": "93da8620c1327ccf0f92517a0e501297"
  },
  {
    "url": "app-8eeb31542497ccfe2e2a.js"
  },
  {
    "url": "app-8eeb31542497ccfe2e2a.js.map",
    "revision": "86327d68e7a8ccfdf9c1afa9a27af589"
  },
  {
    "url": "app-94a9a1c986fb00733a6f.js"
  },
  {
    "url": "app-94a9a1c986fb00733a6f.js.map",
    "revision": "d0e7e0587290557e7854acda37bf1fde"
  },
  {
    "url": "app-ef7fb12f3f42b803656a.js"
  },
  {
    "url": "app-ef7fb12f3f42b803656a.js.map",
    "revision": "8408f4350bd7556ae3ed3d6aa06e8c91"
  },
  {
    "url": "back-to-top.svg",
    "revision": "52cb66ead3f640a8f9eea00a889b34ba"
  },
  {
    "url": "chunk-map.json",
    "revision": "d4b6b852d45ba318b42f9c4aaaa7bc42"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-235e751eb037707e5d1a.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-235e751eb037707e5d1a.js.map",
    "revision": "755d0a975ff8f556e9fc9307c0431cb7"
  },
  {
    "url": "component---src-pages-404-js-88be21d15411b8b0c378.js"
  },
  {
    "url": "component---src-pages-404-js-88be21d15411b8b0c378.js.map",
    "revision": "f1af83addf0a5677536b39fbcb4837e0"
  },
  {
    "url": "component---src-pages-index-js-008c8cb40e573a389c9b.js"
  },
  {
    "url": "component---src-pages-index-js-008c8cb40e573a389c9b.js.map",
    "revision": "10084ff32cad25ac59d5b9aac899a1f7"
  },
  {
    "url": "component---src-pages-index-js-07e2a8f4960de7454914.js"
  },
  {
    "url": "component---src-pages-index-js-07e2a8f4960de7454914.js.map",
    "revision": "66f0f26ab35931a0fd1be1864a730797"
  },
  {
    "url": "component---src-pages-index-js-20452a8bc51261627ac7.js"
  },
  {
    "url": "component---src-pages-index-js-20452a8bc51261627ac7.js.map",
    "revision": "e19b9a62f0901643e7b54ac7ae0c1f6f"
  },
  {
    "url": "component---src-pages-index-js-23d6304744b25f2c2f29.js"
  },
  {
    "url": "component---src-pages-index-js-23d6304744b25f2c2f29.js.map",
    "revision": "dd29c1b59a3dc98bf9531655b37f7fa9"
  },
  {
    "url": "component---src-pages-index-js-24c8516cf9cd5805f188.js"
  },
  {
    "url": "component---src-pages-index-js-24c8516cf9cd5805f188.js.map",
    "revision": "6e1f0ff09c9a4e48aa93eba1d45cafa6"
  },
  {
    "url": "component---src-pages-index-js-2daba1d36dd7eaf09549.js"
  },
  {
    "url": "component---src-pages-index-js-2daba1d36dd7eaf09549.js.map",
    "revision": "3e5762c893189b169d47fbf593694158"
  },
  {
    "url": "component---src-pages-index-js-4228b9cd20dee156f668.js"
  },
  {
    "url": "component---src-pages-index-js-4228b9cd20dee156f668.js.map",
    "revision": "8e9d6b65bcabda184bdc6ace55bfca07"
  },
  {
    "url": "component---src-pages-index-js-67a5d122af84f38a8aa3.js"
  },
  {
    "url": "component---src-pages-index-js-67a5d122af84f38a8aa3.js.map",
    "revision": "b04e0d2ddab7f24c81f319d579f127c3"
  },
  {
    "url": "component---src-pages-index-js-84698ff8139f87dc1170.js"
  },
  {
    "url": "component---src-pages-index-js-84698ff8139f87dc1170.js.map",
    "revision": "52eabf7b311963730640d91ae440d1fd"
  },
  {
    "url": "component---src-pages-index-js-9ee8e188685d05907f1b.js"
  },
  {
    "url": "component---src-pages-index-js-9ee8e188685d05907f1b.js.map",
    "revision": "9cc28e1715ae41550696a2acf5d73721"
  },
  {
    "url": "component---src-pages-index-js-b011a0779cbf98780dcd.js"
  },
  {
    "url": "component---src-pages-index-js-b011a0779cbf98780dcd.js.map",
    "revision": "3fef7712a512d15f56bc4c4fad46c7a0"
  },
  {
    "url": "component---src-pages-index-js-c04dc16131f68fb4bbd4.js"
  },
  {
    "url": "component---src-pages-index-js-c04dc16131f68fb4bbd4.js.map",
    "revision": "0e29140cf6b145366b648d5741836fed"
  },
  {
    "url": "component---src-pages-index-js-d4626db4362990927b49.js"
  },
  {
    "url": "component---src-pages-index-js-d4626db4362990927b49.js.map",
    "revision": "c82e6ab548e0adcfc4440a1e5fba8895"
  },
  {
    "url": "component---src-pages-index-js-fba8730d6d3c315dd4ab.js"
  },
  {
    "url": "component---src-pages-index-js-fba8730d6d3c315dd4ab.js.map",
    "revision": "3e9426789df1e64e9bef5a51c0171e17"
  },
  {
    "url": "favicon.ico",
    "revision": "938c71886066fe4578e0aabe00f32f71"
  },
  {
    "url": "framework-dd95e8b3d258d85252e9.js"
  },
  {
    "url": "framework-dd95e8b3d258d85252e9.js.map",
    "revision": "dc018e62b3b01ec872b1a8ee8f5883f5"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlEw.woff",
    "revision": "bc1e47a3976358aa868a72de5a85de5a"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
    "revision": "e535f7856b24153e0f3146e8f90a45c5"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlEw.woff",
    "revision": "5c5aa25747e329a14d9ab8be881cbe02"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2",
    "revision": "e8794816c5eaeaa9dd20a6d77ea3b272"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecg.woff2",
    "revision": "1a280523d375e9358d5229df34fc8e94"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiEyp8kv8JHgFVrJJfedA.woff",
    "revision": "46a7d48240d428c9dc3d4ff579199312"
  },
  {
    "url": "icon-business.svg",
    "revision": "a98975b2535e0a2931cfbc92abd7a3e6"
  },
  {
    "url": "icon-game.svg",
    "revision": "60003856d1cbc26979da891923d8b813"
  },
  {
    "url": "icon-location.svg",
    "revision": "df6c040143ab5ebbf985d5b7df7fffad"
  },
  {
    "url": "icon-user.svg",
    "revision": "3094d4585c21cdb1d35cef05f3a08fc2"
  },
  {
    "url": "icon-world.svg",
    "revision": "0408054aedcd6dc784931256d7c82315"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "082b5fcd0a6edc4c8e6959ba96377438"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "260211d2c14395a5e150933f26a77886"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "e9b6f6ad8c8c856b3b37793302485e14"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "67a54bb6dcdec22dae0092c73a05c784"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "8381ab2f7ae17f5a6191b34d8f188c3f"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "c84a9be9da32372c65abd8f3c3c4e491"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "160ca94a1e4fe72ded9a10431595c41b"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "da879066f813352cb6c7f6f08d37937b"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "082b5fcd0a6edc4c8e6959ba96377438"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "282e563d2ed79e7d0c6f15816c362b59"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "635f9d88354eb5386a21f47669e34f65"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "5eb7cc482f9dcad998fd6d2d40b8040c"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "06b65cfc1bdcd33d6a284daeb63739aa"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "8381ab2f7ae17f5a6191b34d8f188c3f"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "5954662046f48c964771c7808421758d"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "16cd7f7660839f50ddb49dfdc3563c53"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "16cd7f7660839f50ddb49dfdc3563c53"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "082b5fcd0a6edc4c8e6959ba96377438"
  },
  {
    "url": "icons/icon-16x16.png",
    "revision": "a03389cd8df91dc1decb6bd4f4cf26d4"
  },
  {
    "url": "icons/icon-32x32.png",
    "revision": "c2a87a7136584ba9e28cf6c739587100"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c84a9be9da32372c65abd8f3c3c4e491"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "082b5fcd0a6edc4c8e6959ba96377438"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "b2778900013dfc8216aad5c960076db1"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "c91296976fb7d8a7624b88fa85cd6576"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "90855c769bc615a0ce361aa1988fdc84"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "da1b4e6c7de5b7661176b532053e7489"
  },
  {
    "url": "loading.png",
    "revision": "aafd7f19d6acb23c905c411287cb4d98"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a87f70e52ea21ce9f9807db6a50a2f6c"
  },
  {
    "url": "minus-icon.svg",
    "revision": "69b30251c6aa797f09b4e1938c3fd6dc"
  },
  {
    "url": "no-company-image.png",
    "revision": "153041c5fc8829bccf58691403f06e8d"
  },
  {
    "url": "no-user-image.png",
    "revision": "b09dc8c8c22620dee72392c6845b9b15"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e3f0edc0b476ca3e0defc17945e03dd0"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "f862d1d166a9bfb064b7a302a9402869"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "ab935f94fe76bebdaa856ee7a3b135f1"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ccb1677a3924eb7498e27ccb409e361"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "robots.txt",
    "revision": "8d56dad080f0ca75d55f49e013d24c18"
  },
  {
    "url": "search_icon.svg",
    "revision": "45a8c2b349965b518c83ccd8ec6d4b57"
  },
  {
    "url": "site-logo.png",
    "revision": "3ca632803a91e307fef48a669bfefb36"
  },
  {
    "url": "sitemap.xml",
    "revision": "e7fd5f56184025854d49d47f02ab698e"
  },
  {
    "url": "static/d/1090166420.json"
  },
  {
    "url": "static/d/2417117884.json"
  },
  {
    "url": "static/d/2602323158.json"
  },
  {
    "url": "static/d/2844921279.json"
  },
  {
    "url": "static/d/3599092153.json"
  },
  {
    "url": "static/d/3856722062.json"
  },
  {
    "url": "static/no-company-image-153041c5fc8829bccf58691403f06e8d.png"
  },
  {
    "url": "webpack-runtime-135855cc85ad0ad29191.js"
  },
  {
    "url": "webpack-runtime-135855cc85ad0ad29191.js.map",
    "revision": "ed282d2d7b2132595b94f974e01eaf77"
  },
  {
    "url": "webpack-runtime-19e89fc5ea2c7a8d65d3.js"
  },
  {
    "url": "webpack-runtime-19e89fc5ea2c7a8d65d3.js.map",
    "revision": "eb125019e50c259710df0cdfa324ba07"
  },
  {
    "url": "webpack-runtime-48f35a4494f78b3f400e.js"
  },
  {
    "url": "webpack-runtime-48f35a4494f78b3f400e.js.map",
    "revision": "a3fd7417ec84e20b3edca5df29164e5f"
  },
  {
    "url": "webpack-runtime-4e06a44200bf58723a6e.js"
  },
  {
    "url": "webpack-runtime-4e06a44200bf58723a6e.js.map",
    "revision": "67cbd527e02029484be995f88f7af58b"
  },
  {
    "url": "webpack-runtime-56a4152b531aa67b7764.js"
  },
  {
    "url": "webpack-runtime-56a4152b531aa67b7764.js.map",
    "revision": "3444cb32ca3bba9132fa206f69c78693"
  },
  {
    "url": "webpack-runtime-57e967e28157a0a3062b.js"
  },
  {
    "url": "webpack-runtime-57e967e28157a0a3062b.js.map",
    "revision": "351a1da38bb68d6564fc920d89fd7449"
  },
  {
    "url": "webpack-runtime-724c9dc958ee8a268455.js"
  },
  {
    "url": "webpack-runtime-724c9dc958ee8a268455.js.map",
    "revision": "cf6cf72f042e14f43761e312072eacc4"
  },
  {
    "url": "webpack-runtime-8a7903ef178329251b03.js"
  },
  {
    "url": "webpack-runtime-8a7903ef178329251b03.js.map",
    "revision": "fd4a55e3a268d4d72972914b555db79b"
  },
  {
    "url": "webpack-runtime-b0c387b42da00b442386.js"
  },
  {
    "url": "webpack-runtime-b0c387b42da00b442386.js.map",
    "revision": "9b1684216004afacb94eebe46d63a949"
  },
  {
    "url": "webpack-runtime-b9403af085a2ffdf85e7.js"
  },
  {
    "url": "webpack-runtime-b9403af085a2ffdf85e7.js.map",
    "revision": "bf45b67d356a094f2439f086310800d4"
  },
  {
    "url": "webpack-runtime-d8bf7fc2891cb83a094d.js"
  },
  {
    "url": "webpack-runtime-d8bf7fc2891cb83a094d.js.map",
    "revision": "56f74cdd83cb63d658346ab8b34d8bc2"
  },
  {
    "url": "webpack-runtime-efb9baeaa1e79da41189.js"
  },
  {
    "url": "webpack-runtime-efb9baeaa1e79da41189.js.map",
    "revision": "e99ed6399587339fc21135cecfd8c6e0"
  },
  {
    "url": "webpack-runtime-f12962ea5a50f48f89a9.js"
  },
  {
    "url": "webpack-runtime-f12962ea5a50f48f89a9.js.map",
    "revision": "7c844cad6bbbb358dd4a8ce28c0fb57e"
  },
  {
    "url": "webpack-runtime-f468a0f7de32abc86bd0.js"
  },
  {
    "url": "webpack-runtime-f468a0f7de32abc86bd0.js.map",
    "revision": "7cf80dd9c26b48fc357cbd669ecd3c0f"
  },
  {
    "url": "webpack-runtime-f5ba09985711a7b8f9c1.js"
  },
  {
    "url": "webpack-runtime-f5ba09985711a7b8f9c1.js.map",
    "revision": "6a71ce082bce558243be2afdad891b53"
  },
  {
    "url": "webpack-runtime-fbd0d54d3883bd9fc5e4.js"
  },
  {
    "url": "webpack-runtime-fbd0d54d3883bd9fc5e4.js.map",
    "revision": "970dcdb88717b990914bc09a09c0cbbf"
  },
  {
    "url": "webpack.stats.json",
    "revision": "965a0beb0b44bb196742461ccd230194"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/blackgamedevs_v2`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/blackgamedevs_v2/app-369239fe44bd694ba7b5.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/blackgamedevs_v2/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
