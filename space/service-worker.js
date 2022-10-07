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
    "revision": "27fb50ce0e4e15e4735b34b135c57b14"
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
    "url": "assets/js/13.ea886991.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.1a94d600.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.e8d3ea25.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.ea5a63c1.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.78a99eaa.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.3aa3afa0.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
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
    "url": "assets/js/app.b1dd30ea.js",
    "revision": "68b4748d9ba9c7d0d3bd43ffd7d37354"
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
    "revision": "59f9f8b596adc330305be2dc7278af85"
  },
  {
    "url": "categories/java/index.html",
    "revision": "007ef2a6997c9dd9d3c147d7a99a8f2c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "90cf16019ed3413a196deaee8a1d9101"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9939aa3277df147d303c4bef00d082f0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "933809eb0e05b6dd85338f29b0929a11"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "d8bbe85fc8b30f19383ab7d16837701c"
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
    "revision": "18cef1660ec696f4e6947ca9d6ea572b"
  },
  {
    "url": "js/custom.js",
    "revision": "dd49cdd575c3598db40f09373bdbe178"
  },
  {
    "url": "tag/index.html",
    "revision": "e46b868fb639d61d436682fb3a2654e9"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b1ea36eee7fa3b883c427b1d49fe8d70"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "edc8988c4112c7a983d2da4eb389912e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4239bf3b5176ceafca73063daa4eead3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "85ba2243aa0e9b9904ccfe52c003be56"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "281745205728636cab9f79c4a24b7559"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "184f57876a72a20e47844eda10e61805"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c62026dcca105ead2d6c3cb9347eb991"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "81d6726d4d7bd1848d29d05a0a6b7ea3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7de5abb463b7221447c02b994842c60f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4d20cc9e9c176cbcbc6d5782ceccd884"
  },
  {
    "url": "timeline/index.html",
    "revision": "68f302efe906555d18df4328adf61030"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "9802db0df3c0ea7a521ff0e3466c9e3b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "590cfc317c48711178cbf9dee0225499"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "71c61b4ef834cb44c407f02fa39f00c7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "821e8f1356f07d6059ed9bbf71ea91e3"
  },
  {
    "url": "生活分享/life.html",
    "revision": "294fc03ac1370934ff1f788871a2ab37"
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
