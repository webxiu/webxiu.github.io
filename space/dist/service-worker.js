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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c8967f41e351503c79bdecc9816ab1ea"
  },
  {
    "url": "assets/css/0.styles.5b264c43.css",
    "revision": "3f4d9ad85c656970d63f7f8c05a9632a"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.1c614cb6.js",
    "revision": "b117d2bce8637e818a5a3e220a4c44a5"
  },
  {
    "url": "assets/js/10.7f309bbf.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.8a3652a5.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.46f797c0.js",
    "revision": "7d3341319386f174c58510154d1da83e"
  },
  {
    "url": "assets/js/13.e21f5614.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.93df3760.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.cdb59839.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.ea5a63c1.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.56c23bf8.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
  },
  {
    "url": "assets/js/18.558301ea.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
  },
  {
    "url": "assets/js/4.8a101451.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.9847fff8.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.5096b4c8.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.f807ef53.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.fd291bae.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.039fea03.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.b851ac31.js",
    "revision": "ef6b38c52dd4673b1fca0c70cb3683f1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "3bac4183fc81e11fe7aa3b0834053f5a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0e067246b422d720e66d50058fa5c952"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0eebfba777c96c067242c1127e20b8d0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1b49875625ca63bca6926b5846db8ee5"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "15758089586a6e77d816a5f10006cd8d"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "987c5a56224675a287c72288c51e7fa9"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "b71089a098865c35f19ec6f32080b9ea"
  },
  {
    "url": "js/custom.js",
    "revision": "dd49cdd575c3598db40f09373bdbe178"
  },
  {
    "url": "tag/index.html",
    "revision": "7e6e25939df8c71160adfc4707c8ede4"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1999bb36c68729a23f4d71990caedf00"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5cf6f0137224a232ff273bf1779d6ee8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "aad504a0393955edcfaf7d91127d5544"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "ced9d4a9f2762f24e82b88355938afd5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "850a611ce99e2aa4da56e00768ff37dd"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5fccc51a493331e9a1b39d8c3ec6799b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9aef33b3f040802fc096e75a2566b5f3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5f896671d2856c4345a793a473ab7935"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d2039585cbed15d61269a227a2537a08"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8dff478e3d4930ebc45c46d6a50ce449"
  },
  {
    "url": "timeline/index.html",
    "revision": "d000a72decc302987a0ad8e8c0648e5d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e512fe0cb6dcc032fae546bb2c5f1176"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f898bf56e57d34f27248739f70bba0a9"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "cf8227a40c8211434d1a6b0cd7fba117"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a4cc1839b18ea6915cf22e18f0463ef4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "34f903d7c8d5a037566a4a3308938c7b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
