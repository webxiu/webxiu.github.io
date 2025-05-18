(function (window, document) {
    window.alert = function (name) {
        var iframe = document.createElement("IFRAME");
        iframe.style.display = "none";
        document.documentElement.appendChild(iframe);
        window.frames[0].window.alert(name);
        iframe.parentNode.removeChild(iframe);
    };

    function $(selector) {
        return document.querySelector(selector);
    }

    function getURLParameters(url) {
        const params = url.match(/([^?=&]+)(=([^&]*))/g) || [];
        const res = params.reduce(function (a, v) {
            const val = decodeURIComponent(v.slice(v.indexOf("=") + 1));
            a[v.slice(0, v.indexOf("="))] = val;
            return a;
        }, {});
        return res;
    }

    function formatDate() {
        var date = new Date();
        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
        var mm = month < 10 ? "0" + month : month;
        var dd = day < 10 ? "0" + day : day;
        return `${year}年${mm}月${dd}日`;
    }

    function downloadCode(base64) {
        var link = document.createElement("a");
        // 这里是将url转成blob地址，
        fetch(base64)
            .then((res) => res.blob())
            .then((blob) => {
                // 将链接地址字符内容转变成blob地址
                link.href = URL.createObjectURL(blob);
                link.download = `Code_${Date.now()}.png`;
                document.body.appendChild(link);
                link.click();
            });
    }

    function getCode(value) {
        var d1 = formatDate().slice(0, 5);// YY
        var d2 = formatDate().slice(0, 8);// YYMM 
        var c1 = md5(d1).slice(0, 4).toLowerCase();
        var c2 = md5(d2).slice(0, 4).toLowerCase();
        // 移除输入判断
        // var vv = value.toLowerCase();
        // if (vv == c1 || vv == c2) {
        //     return true;
        // }
        // return false;
        return c2;
    }

    function jsonToUrlParam(json) {
        return Object.keys(json)
            .map((key) => key + "=" + json[key])
            .join("&");
    }

    // 判断多种浏览器
    var browser = {
        versions: (function () {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                trident: u.indexOf("Trident") > -1, //IE内核
                presto: u.indexOf("Presto") > -1, //opera内核
                webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
                gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
                iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf("iPad") > -1, //是否iPad
                webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
            };
        })(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase(),
    };

    var params = getURLParameters(location.href);
    if (!params.tel) {
        // location.href = "../404.html";
        // return;
    }

    var descList = [
        "扫码一键拨打电话, 使用简单、方便、快捷",
        "自定义显示标题、内容、时间及二维码名称",
        "可以作为个人电子名片及提醒信息展示",
        "方便打印贴在车辆、门窗、公告栏等地方使用",
        "扫码次数不限、永久免费, 访问受网络差异影响",
        "所填信息仅生成二维码时使用, 不会收集个人信息",
        `输入邀请码才能生成二维码, 限时邀请码: ${getCode()}`,
    ];

    var link = '<a href="tel:' + params.tel + '" id="tel">直接呼叫</a>';
    $("#contact").innerHTML = link;

    var descHtml = `<div class="introduce">Call Me是一个扫码拨打电话的快捷应用入口, 请使用微信扫码打开, 生成自己的二维码请点击右上角入口, 生成完成后扫码即可查看, 并提示您是否拨打电话。它具备以下功能:</div>`;
    descList.forEach((item) => {
        descHtml += `<div class="list-item">${item}</div>`;
    });

    var configContent = {
        title: params.title || "欢迎使用Call Me",
        time: params.time || formatDate() + " Hailen",
        content: params.content
            ? `<div class="detail">${params.content}</div>`
            : `<div class="center mt20">
                    <img style="width:75%" src="./images/wechat.jpg" alt="添加二维码" title="添加二维码">
                 </div>
                <div class="center">(添加微信 获取邀请码)</div>
                <div class="center mt20">
                <img style="width:75%" src="./images/callme.png" alt="邀请二维码" title="邀请二维码">
                </div>
                <div class="center">(长按保存·分享)</div>
                `,
    };

    // 显示列表
    $(".list-wrap").innerHTML = descHtml;
    $(".title").innerHTML = configContent.title;
    $(".content").innerHTML = configContent.content;
    $(".author").innerHTML = configContent.time;
    $(".make-qrcode").innerHTML = '<span id="show-code" class="text-button">生成我的二维码</span>';

    if (params.showList == "hidden") {
        $(".list-wrap").innerHTML = "";
    }

    // 显示整个内容
    if (params.showNotice) {
        $(".notice").style.display = params.showNotice;
    }
    if (params.showFooter) {
        $(".footer").style.display = params.showFooter;
    }
    if (params.gen == "hidden") {
        $(".make-qrcode").innerHTML = "";
    }

    if (params.tel != "10086" && params.tel != "10010") {
        $("#tel").click();
    } else {
        $("#tel").style.display = "none";
    }

    var phoneDom = $("#phone");
    var yqCodeDom = $("#yqCode");
    var titleDom = $("#title");
    var contentDom = $("#content");
    var timeDom = $("#time");
    var codeNameDom = $("#codeName");
    var scodeTipDom = $(".code-tip");
    var qrcode = null;
    var codeUrl = "";

    var USER_KEY = "user_key";
    var getUserInfo = () => JSON.parse(localStorage.getItem(USER_KEY) || "{}");
    var setUserInfo = (userInfo) => localStorage.setItem(USER_KEY, JSON.stringify(userInfo));
    var removeUserInfo = () => localStorage.removeItem(USER_KEY);

    function setFormData() {
        var userInfo = getUserInfo();
        phoneDom.value = userInfo.phone || "";
        yqCodeDom.value = userInfo.yqCode || "";
        titleDom.value = userInfo.title || "";
        contentDom.value = userInfo.content || "";
        timeDom.value = userInfo.time || "";
        codeNameDom.value = userInfo.codeName || "";
    }
    setFormData();

    $("#show-code").onclick = function () {
        setFormData();
        $("#code-layer").style.display = "block";
    };

    $("#close-layer").onclick = function () {
        $("#code-layer").style.display = "none";
    };

    $("#submit").onclick = function () {

        var phone = phoneDom.value;
        var yqCode = yqCodeDom.value;
        var title = titleDom.value;
        var content = contentDom.value;
        // var editHtml = window.editHtml;
        var time = timeDom.value;
        var codeName = codeNameDom.value;
        var hasCode = getCode(yqCodeDom.value);

        setUserInfo({
            phone: phone,
            yqCode: yqCode,
            title: title,
            content: content,
            // editHtml: editHtml,
            time: time,
            codeName: codeName,
        });

        var reg = /^1[3-9]\d{9}$/;
        if (!reg.test(phone)) {
            alert("手机号格式不正确");
            return;
        }

        if (yqCodeDom.value == "") {
            alert("请输入邀请码");
            return;
        } else if (hasCode !== yqCodeDom.value) {
            alert("邀请码错误, 请先获取");
            return;
        }

        if (!title || !content || !time || !codeName) {
            alert("标题、内容、时间及名称不能为空");
            return;
        }
        // 清空qrcode上次生成内容
        $(".qrcode").innerHTML = "";


        var codeQuery = jsonToUrlParam({
            gen: "hidden",
            tel: phone,
            title: encodeURIComponent(title),
            content: encodeURIComponent(content),
            time: encodeURIComponent(time),
            showList: "hidden", // 是否显示圆点列表
            showNotice: "block",
            showFooter: "block",
        });

        // 获取表单的值
        var url = `https://webxiu.github.io/callme/callme.html?${codeQuery}`;
        qrcode && qrcode.clear();
        try {
            qrcode = new QRCode($(".qrcode"), {
                text: url,
                width: 400,
                height: 400,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
            });
        } catch (error) {
            alert('生成失败')
        }

        var canvas = qrcode._el.childNodes[0];
        codeUrl = canvas.toDataURL("image/png");

        var ua = navigator.userAgent.toLowerCase();
        if (browser.versions.mobile && ua.match(/MicroMessenger/i) == "micromessenger") {
            //在微信中打开
            scodeTipDom.style.display = "block";
            $("#download").style.display = "none";
        } else {
            //否则就是PC浏览器打开
            scodeTipDom.style.display = "none";
            $("#download").style.display = "block";
        }

        var canvasDom = document.createElement("canvas");
        // 二维码下方文字高度
        var codeHeight = 80;
        //二维码宽高
        var qrcodewidth = 400;
        var qrcodeheight = 400;
        //canvas宽高
        var canvaswidth = qrcodewidth;
        var canvasheight = qrcodeheight + codeHeight;
        //logo宽高
        var logowidth = 100;
        var logoheight = 100;
        //文字描述位置
        var textleft = qrcodewidth / 2;
        var texttop = qrcodeheight + codeHeight / 2;
        //logo位置
        var logoleft = (qrcodewidth - logowidth) / 2;
        var logotop = (qrcodeheight - logoheight) / 2;
        // 二维码距离边缘间隙
        var gap = 20;

        var img = new Image();
        img.src = codeUrl;
        img.onload = function () {
            canvasDom.width = canvaswidth;
            canvasDom.height = canvasheight;
            var ctx = canvasDom.getContext("2d");
            //设置画布背景
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
            //设置文字样式
            ctx.fillStyle = "#000000";
            ctx.font = "bold " + 22 + "px Arial";
            ctx.textAlign = "center";
            //文字描述
            ctx.fillText(codeNameDom.value || "(请扫码联系)", textleft, texttop);
            //绘制二维码
            // ctx.drawImage(img, 0, 0);
            ctx.drawImage(img, gap, gap, canvasDom.width - 2 * gap, canvasDom.height - codeHeight - gap);
            //设置logo
            // var logo = new Image(logowidth, logoheight);
            // logo.setAttribute('crossOrigin', 'anonymous');
            // logo.src = './images/logo.png';
            // logo.onload = function () {
            //     ctx.drawImage(logo, logoleft, logotop, logowidth, logoheight);
            //     // 设置文字二维码
            //     var imgUrl = canvasDom.toDataURL("image/png")
            //     $('#code-img').src = imgUrl
            //     $('#code-img').style.display = 'block'
            // }
            // 设置文字二维码
            var imgUrl = canvasDom.toDataURL("image/png");
            codeUrl = imgUrl;
            $("#code-img").src = imgUrl;
            $("#code-img").style.display = "block";
        };
    };

    $("#reset").onclick = function () {
        phoneDom.value = "";
        titleDom.value = "";
        contentDom.value = "";
        // window.editHtml = '';
        timeDom.value = "";
        codeNameDom.value = "";
        qrcode && qrcode.clear();
        $(".qrcode").innerHTML = "";
        scodeTipDom.style.display = "none";
        var userInfo = getUserInfo();
        // removeUserInfo()
        setUserInfo({ yqCode: userInfo.yqCode });
    };

    $("#download").onclick = function () {
        codeUrl && downloadCode(codeUrl);
    };
})(window, document);
