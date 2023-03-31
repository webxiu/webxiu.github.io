


/** 获取地址栏参数 */
function getURLParameters(url) {
    const params = url.match(/([^?=&]+)(=([^&]*))/g) || [];
    const res = params.reduce(function (a, v) {
        const val = decodeURIComponent(v.slice(v.indexOf("=") + 1));
        a[v.slice(0, v.indexOf("="))] = val;
        return a;
    }, {});
    return res;
}

/** 判断是否为PC */
function isPC() {
    let flag = true;
    let userAgent = navigator.userAgent;
    let userAgents = ['Android', 'iPhone', 'SymbianOS', 'Phone', 'iPad', 'iPod'];
    for (let i = 0; i < userAgents.length; i++) {
        if (userAgent.indexOf(userAgents[i]) > -1) {
            flag = false;
            break
        }
    }
    return flag;
}
// 获取Dom元素
function $(selector) {
    return document.querySelector(selector);
}

// 范围随机数
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

function toHHmmss(ms) {
    const seconds = ms / 1000;
    let timeArr = [];
    const hours = seconds / 60 / 60,
        minutes = (seconds / 60) % 60,
        lastSeconds = seconds % 60,
        millisecond = ms % 1000;

    if (seconds >= 3600) {
        timeArr = [parseInt(`${hours}`), parseInt(`${minutes}`), parseInt(`${lastSeconds}`)];
    } else {
        timeArr = [parseInt(`${minutes}`), parseInt(`${lastSeconds}`)];
    }
    return timeArr
        .join(':')
        // .concat('.' + parseInt(`${millisecond}`))
        .replace(/\b(\d)\b/g, '0$1')
        .replace(/[^.]*$/, (s) => s.padStart(3, '0'));
}