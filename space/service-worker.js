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
    "revision": "8088603def94e968c393879fb096369f"
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
    "url": "assets/js/12.364dc857.js",
    "revision": "98a7ade6f8de2bc3ef06e1b6df44b202"
  },
  {
    "url": "assets/js/13.fafbca56.js",
    "revision": "3130f6cea0515e294a4d8e3a6daf6239"
  },
  {
    "url": "assets/js/14.66ed8247.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.45732e83.js",
    "revision": "aae355859d275f3722425a4a3d971b3a"
  },
  {
    "url": "assets/js/16.a65a16f6.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.78a99eaa.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.9152c63f.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
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
    "url": "assets/js/app.a049486c.js",
    "revision": "329f24e618cd6a1513b0712b05bd18aa"
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
    "revision": "f625764e056fe7644fd39cc78486de92"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c7c786450c90510dd6c2062745c6c038"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "100d4e0c41a879dba350ee19be1b02b9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "24d82652418e891897c226245c29df18"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6ec80e18ad32bcc2f3ec0185e237618c"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "97ed6ac331b50075564fcc798d21f69c"
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
    "revision": "046d09722cb3b6cd2a005adeecfd77b5"
  },
  {
    "url": "js/custom.js",
    "revision": "dd49cdd575c3598db40f09373bdbe178"
  },
  {
    "url": "tag/index.html",
    "revision": "ca2f4a716a2194f36833abed76876cd1"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "feac4e8b118ea59f0edc2ecc0ae04811"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "241b7b63eb06e287757696451856b6f4"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5fa29c2cd89d5e4c47826b0082307d1f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8e401890c01b16c9463f1ece66e0db1b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4e13594879f1408144404abb4f2d8cb9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bcf7c2e489ea6e7c091b66279c1b55bb"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "89348ba392cd385289acff7c420429e4"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "138595133a9b5d9b125063e4da59ec61"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6498244b2e5ba79b9f0ac2f28d0cb600"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "df6714f8d8474cf5bab22064f6257c28"
  },
  {
    "url": "timeline/index.html",
    "revision": "c8c056df57b41d9a986c1d9c068b6e54"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "723d308439654476c265cc8147839942"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2a024249f274fe00ec0b0eb6b38b9bb5"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d78ec9694b92c8cf740c052a495a5cf1"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1362c42f7a349316d74868e4e066fdeb"
  },
  {
    "url": "生活分享/life.html",
    "revision": "befe42ba2310e5409ddf2679d8f8a7d5"
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
