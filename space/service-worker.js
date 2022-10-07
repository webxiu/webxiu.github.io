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
    "revision": "d656213f62e4e09d4f472d5d7b239f4c"
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
    "url": "assets/js/12.4a58fc50.js",
    "revision": "c3907d78351dbaef89257137bf17b3e6"
  },
  {
    "url": "assets/js/13.ea886991.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.66ed8247.js",
    "revision": "f754bd440574752dde5184c5efa90116"
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
    "url": "assets/js/app.ff9f364c.js",
    "revision": "b13e78f16659b619ebb86fa9cb89539b"
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
    "revision": "d2687cc1899b6b5be43d8c490c5219b1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9651d736b5cfbca4f75002c231747845"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "82cf416dc601ed901179a54bd72e91f1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2c860ff1cbc2ef944f8512f80971c871"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8cbd3e069f913bf3daaf4bd0f627838f"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "3060c60720515152d2efb0540f35d22c"
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
    "revision": "ad3b26131580967a0db8d4785a4930cf"
  },
  {
    "url": "js/custom.js",
    "revision": "dd49cdd575c3598db40f09373bdbe178"
  },
  {
    "url": "tag/index.html",
    "revision": "c02e722db505cfec4bcfc6790b0477e2"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "6a53be796ad9a38f70a216599b310690"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1a6f133e72c101a3eb4d67cbeda307a0"
  },
  {
    "url": "tags/js/index.html",
    "revision": "54ac00ff973202c5307fab8f61d4dcf7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8b14941b879b4844d1ccfa4adfcf5fbc"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "034ebe02b40a4d024d1d6e26edbfdb13"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6ded7a56f1b4862328751558e215e0e3"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "79ad5c8e5a33ab88ac3bf6dd49185e32"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5303e1e70b1bb0f33e6706f199648bea"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b89e8af2741aa18c15f4849c39d64326"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1f7549a9e8627b4ffcf654dd1026e28a"
  },
  {
    "url": "timeline/index.html",
    "revision": "7afb7193a9f1bb1664bfb384356d5251"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "06664d84d45531b0dacbc2c6fc5f4c2d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "492704b335f31f10ddc3c38e32c95e26"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ffb48b5b28150882e3f428f5bdeaa5bb"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3437e935a88c7138bcf7e2a072172e5e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "21dfb7408106a7baaab896deb704392e"
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
