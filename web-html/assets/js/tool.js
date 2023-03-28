function throttle(fn, delay = 30) {
  var lastTime = 0;
  return function () {
    var nowTime = new Date().getTime();
    if (nowTime - lastTime > delay) {
      fn.apply(this, arguments);
      lastTime = nowTime;
    }
  };
}
