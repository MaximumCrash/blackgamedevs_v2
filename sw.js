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
    "revision": "e65e36b8d5f9d77fc62defdb4386ed1b"
  },
  {
    "url": "404/index.html",
    "revision": "999746445bf10042ff887f430ccc4e08"
  },
  {
    "url": "app-d3372c8e8dbefcd58a1e.js"
  },
  {
    "url": "app-d3372c8e8dbefcd58a1e.js.map",
    "revision": "bc02e61edce3758cb1432f33288b4372"
  },
  {
    "url": "back-to-top.svg",
    "revision": "52cb66ead3f640a8f9eea00a889b34ba"
  },
  {
    "url": "chunk-map.json",
    "revision": "e2c584a64a36efff36b6dc66847edca7"
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
    "url": "component---src-pages-index-js-e3dfa149ed918ebb614d.js"
  },
  {
    "url": "component---src-pages-index-js-e3dfa149ed918ebb614d.js.map",
    "revision": "a4a7e8614b38e96f7db69acf44a0a6d9"
  },
  {
    "url": "directory_images/Adewale_Haroun_v1.webp",
    "revision": "e2d0ba8953bffd337d740e8f87fd7aa6"
  },
  {
    "url": "directory_images/Ahmed_Abdullah_v1.webp",
    "revision": "c49577485e511fd368209e40c064db1d"
  },
  {
    "url": "directory_images/Ajari_Wilson_v1.webp",
    "revision": "8f8d738839f63bcbf3064e6628761998"
  },
  {
    "url": "directory_images/Akira_Thompson_v1.gif",
    "revision": "ad5601080f9fc9324adb216629b1452a"
  },
  {
    "url": "directory_images/Alex_Okafor_v1.webp",
    "revision": "59fb47c11586c07c2a39293c83ff22c6"
  },
  {
    "url": "directory_images/Alexander_Francois_v1.webp",
    "revision": "a17208917d4d45445a086606d82541e6"
  },
  {
    "url": "directory_images/Algitt_Studios_v1.webp",
    "revision": "fec20ce43d8fdb3f6f1efecda92a792d"
  },
  {
    "url": "directory_images/Algorythmic_Studios_v1.webp",
    "revision": "2a7f6b05b4b2801c96fdcf127eee2fe7"
  },
  {
    "url": "directory_images/Andreas_J_Hester_v1.webp",
    "revision": "09ff23d51041495d55ca432fd4d944de"
  },
  {
    "url": "directory_images/Andy_James_Nicholis_v1.webp",
    "revision": "2a33a68cf5ebde69a821f8c200059f99"
  },
  {
    "url": "directory_images/Anisiuba_Uche_v1.webp",
    "revision": "6494b51be10653c25b9120262649ed88"
  },
  {
    "url": "directory_images/Anthony_G_Smith_IV_v1.webp",
    "revision": "8cf5798b58163e50bdea1a0c4dfea786"
  },
  {
    "url": "directory_images/ardydo_v1.webp",
    "revision": "f4e3fc1ad2cc43d9602dae0cca41e17f"
  },
  {
    "url": "directory_images/Arthur_Ward_Jr_v1.webp",
    "revision": "761a6493718f35b8fb6c9a71b45096d2"
  },
  {
    "url": "directory_images/Audley_Gordon_v1.webp",
    "revision": "189facab494824561b4bcc0593acb115"
  },
  {
    "url": "directory_images/Ben_Wilson_v1.webp",
    "revision": "9237b859b7fb2b38e8da29cec9441143"
  },
  {
    "url": "directory_images/Biru_Jones_v1.webp",
    "revision": "7aa100ea4b023e632bfb81a5039f5c25"
  },
  {
    "url": "directory_images/Catt_Small_v1.webp",
    "revision": "77f6825113ca76691182a39b1bd77fbb"
  },
  {
    "url": "directory_images/Cedric_J_Adams_v1.webp",
    "revision": "35ff112f362d2566c5e479ee11858878"
  },
  {
    "url": "directory_images/Chris_Wells_v1.webp",
    "revision": "824fcf7854c252485e876aabb7107d9c"
  },
  {
    "url": "directory_images/Christian_Howard_v1.webp",
    "revision": "0472e9793adc8761058391f61f9821e1"
  },
  {
    "url": "directory_images/DanDylan_Lavictoire_v1.webp",
    "revision": "34994f05087fe97949cbb622f9d596aa"
  },
  {
    "url": "directory_images/Dani_Lalonders_v1.webp",
    "revision": "3d6e75f87d1f845cb33ee3151c046c38"
  },
  {
    "url": "directory_images/Decoy_Games_v1.webp",
    "revision": "c49577485e511fd368209e40c064db1d"
  },
  {
    "url": "directory_images/Derrick_Fields_v1.webp",
    "revision": "c919d11d82ca892204bcf2571e8e34a9"
  },
  {
    "url": "directory_images/Donald_Harris_v1.webp",
    "revision": "5c941299ab47e3273b1769166f9be846"
  },
  {
    "url": "directory_images/Edible_Entertainment_v1.webp",
    "revision": "372b2b99b399fd5c49935b99a7432b92"
  },
  {
    "url": "directory_images/Endless_Fluff_v1.webp",
    "revision": "7ec774ec1b14d00991cf6cff7cad9cfe"
  },
  {
    "url": "directory_images/Evan_Higgins_v1.webp",
    "revision": "3ef9bf6f22c7ea037badd7624e04bf1e"
  },
  {
    "url": "directory_images/GN_Games_v1.webp",
    "revision": "7c860d8f2b7ce983429d676e6eb55da1"
  },
  {
    "url": "directory_images/Grand_Scheme_Games_v1.gif",
    "revision": "a84f6bcb0d403508ced81ced0c515ff1"
  },
  {
    "url": "directory_images/Grover_Wimberly_IV_v1.webp",
    "revision": "fad38fc76968f652b02965373e11941d"
  },
  {
    "url": "directory_images/Hermann_Kayode_v1.webp",
    "revision": "90aba6aa165f8bba164790522558873e"
  },
  {
    "url": "directory_images/Hughes_Who_Technologies_Studio_v1.webp",
    "revision": "999462eab1e04eb67b18c623a1a27da1"
  },
  {
    "url": "directory_images/Jord_Farrell_v1.webp",
    "revision": "a63dbc08a90fe0e3dc8a47bf4c4b23af"
  },
  {
    "url": "directory_images/KIROO_Games_v1.webp",
    "revision": "39dcb936059cd49e0ed14affea242fa4"
  },
  {
    "url": "directory_images/Kola_Studios_v1.webp",
    "revision": "1d76a8100f84d28365ba7b2149ca582a"
  },
  {
    "url": "directory_images/Legeci_Studios_v1.webp",
    "revision": "c7c75d659e08f284f215e7ffb9511ccb"
  },
  {
    "url": "directory_images/Leonard_J_Paul_v1.webp",
    "revision": "5afcec695beaaaf4d3f0a4808085a0a3"
  },
  {
    "url": "directory_images/Lucky_Shot_Media_v1.webp",
    "revision": "f1410181fc12fd47af1cb3a45cd7223d"
  },
  {
    "url": "directory_images/MABManZ_v1.webp",
    "revision": "e15ab788050395c133beb382c78b557d"
  },
  {
    "url": "directory_images/Mattieau_Manikk_StCyr_v1.webp",
    "revision": "45ef0f6dad22a63e77101c4890f21186"
  },
  {
    "url": "directory_images/Mel_Cummings_v1.webp",
    "revision": "5fd5086cc0bd09b819cb2201e24e1cff"
  },
  {
    "url": "directory_images/Miscellaneum_Studios_v1.webp",
    "revision": "7cb72eb9c79e94a2be72e573ece8b6d4"
  },
  {
    "url": "directory_images/More_Fire_Games_v1.webp",
    "revision": "d41f4194f4604e2eb21768383bacbf45"
  },
  {
    "url": "directory_images/Nathan_McClain_v1.webp",
    "revision": "33875fbf2395a76ee90a67944c101a23"
  },
  {
    "url": "directory_images/Noohkema_Interactive_v1.webp",
    "revision": "4024b21290aa5b2f5878d7953a6126e6"
  },
  {
    "url": "directory_images/OMC_Games_v1.webp",
    "revision": "8e08eef4989c3b293368c6a799079a5e"
  },
  {
    "url": "directory_images/One_Man_Left_Studios_v1.webp",
    "revision": "3f35a68c6bd3faab084df08b4d39eaf6"
  },
  {
    "url": "directory_images/PawByte_v1.webp",
    "revision": "e972b7d9d98d8db7fcdf9a9656b31a0f"
  },
  {
    "url": "directory_images/Quinn_George_v1.webp",
    "revision": "05fba762aa10e6aeb2ae09f76b8d3c63"
  },
  {
    "url": "directory_images/Revelation_Interactive_v1.webp",
    "revision": "a445c83e22b22891d25e6b76e74a7391"
  },
  {
    "url": "directory_images/Shont_MurrayDaniels_v1.webp",
    "revision": "619d797f3c5a53e5947afc5e8cbd1fbb"
  },
  {
    "url": "directory_images/Stormy_Nights_v1.webp",
    "revision": "146011e275b1c350fb3d250c13ef44fa"
  },
  {
    "url": "directory_images/SwordSharp_v1.webp",
    "revision": "f8653901398d0a1f04f75bb7b3fcac38"
  },
  {
    "url": "directory_images/Sylverstone_Khandr_v1.webp",
    "revision": "b1982817a4e4a7a87ca67c2731c946c0"
  },
  {
    "url": "directory_images/TJ_Hughes_Terrifying_Jellyfish_v1.gif",
    "revision": "62fb730472af7fec36bf8b9cb1283be1"
  },
  {
    "url": "directory_images/TQ_Jefferson_v1.webp",
    "revision": "973ef9b34a44667a08601bea0b277408"
  },
  {
    "url": "directory_images/Trey_Douglas_v1.webp",
    "revision": "b5d935c2855a466b4338815da604edbb"
  },
  {
    "url": "directory_images/Tyler_Rotheram_v1.webp",
    "revision": "313efb92b92f5bf06480af43ad5d011a"
  },
  {
    "url": "directory_images/Victor_Burgos_v1.gif",
    "revision": "3101329bd75447156d5235ef410cbe12"
  },
  {
    "url": "directory_images/Waking_Oni_v1.webp",
    "revision": "c919d11d82ca892204bcf2571e8e34a9"
  },
  {
    "url": "directory_images/Whim_Independent_Studios_v1.webp",
    "revision": "db7794260bf7828b75054f2d1a8bfc6c"
  },
  {
    "url": "directory_images/White_Guardian_Studios_v1.webp",
    "revision": "4852dee4e5668fb94b0ba56195e5cc57"
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
    "revision": "bf83b479facbb46b75aad37b337150da"
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
    "revision": "adf121ba37e63c4b243f078826dccaf5"
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
    "revision": "2a431405fb6f3c0f4755ab0c8923389c"
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
    "url": "static/d/2602323158.json"
  },
  {
    "url": "static/d/2844921279.json"
  },
  {
    "url": "static/d/3595299048.json"
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
    "url": "webpack-runtime-666471b4235571201ff3.js"
  },
  {
    "url": "webpack-runtime-666471b4235571201ff3.js.map",
    "revision": "a5479d29ad0dbdf93b6b941e858fc904"
  },
  {
    "url": "webpack.stats.json",
    "revision": "65b2a6114dc6332af0b99119df280019"
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
  if (!resources || !(await caches.match(`/blackgamedevs_v2/app-d3372c8e8dbefcd58a1e.js`))) {
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
