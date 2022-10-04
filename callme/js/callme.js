(function (window, document) {
    window.onload = function () {
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
                    console.log("first", URL.createObjectURL(blob));
                    link.href = URL.createObjectURL(blob);
                    link.download = "pic.png";
                    document.body.appendChild(link);
                    link.click();
                });
        }

        function jsonToUrlParam(json) {
            return Object.keys(json).map(key => key + '=' + json[key]).join('&');
        }

        var params = getURLParameters(location.href);
        if (!params.tel || !reg.test(phone)) {
            location.href = '../404.html'
            return;
        }


        var descList = [
            "扫码一键拨打电话, 使用简单、方便、快捷",
            "不限次数, 永久使用, 访问受网络差异影响",
            "可以打印贴在车辆、门窗、墙壁等直接使用",
            "作为个人电子名片信息展示",
            "自定义显示标题、内容、落款信息",
        ];

        var link = '<a href="tel:' + params.tel + '" id="tel">Call Me</a>';
        $("#contact").innerHTML = link;

        var descHtml = `<div class="introduce">Call Me是一个扫码拨打电话的快捷应用入口, 请使用微信扫码打开, 生成自己的二维码请点击右上角, 生成完成后扫码后即可查看, 并提示您是否拨打电话。它具备以下功能:</div>`;
        descList.forEach((item) => {
            descHtml += `<div class="list-item">${item}</div>`;
        });

        var configContent = {
            title: params.title || "欢迎使用Call Me",
            signed: params.signed || formatDate() + " Hailen",
            content:
                params.content ||
                `<p class="center">添加微信咨询</p>
                    <p class="center">
                        <img style="width:75%" src="./images/wechat.jpg" alt="添加二维码" title="添加二维码">
                    </p>
                `,
        };

        // 显示列表
        $(".list-wrap").innerHTML = descHtml;
        $(".title").innerHTML = configContent.title;
        $(".content").innerHTML = configContent.content;
        $(".signed").innerHTML = configContent.signed;
        $(".make-qrcode").innerHTML = '<span id="show-code" class="text-button">生成二维码</span>';


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
        if (params.gen == 'hidden') {
            $(".make-qrcode").innerHTML = ''
        }

        $("#tel").click();

        $("#show-code").onclick = function () {
            $("#code-layer").style.display = "block";
        };

        $("#close-layer").onclick = function () {
            $("#code-layer").style.display = "none";
        };


        var phoneDom = $("#phone");
        var titleDom = $("#title");
        var contentDom = $("#content");
        var signedDom = $("#signed");
        var scodeTipDom = $(".code-tip");
        var qrcode = null;
        var codeUrl = "";

        $("#submit").onclick = function () {
            var phone = phoneDom.value;
            var title = titleDom.value;
            var content = contentDom.value;
            var signed = signedDom.value;

            var reg = /^1[3-9]\d{9}$/
            if (!reg.test(phone)) {
                alert("手机号格式不正确");
                return;
            }

            if (!title || !content || !signed) {
                alert("标题、内容及落款不能为空");
                return;
            }
            $('.qrcode').innerHTML = '';

            var codeQuery = jsonToUrlParam({
                gen: 'hidden',
                tel: phone,
                title: title,
                content: content,
                signed: signed,
                showList: 'hidden',// 是否显示圆点列表
                showNotice: 'block',
                showFooter: 'block',
            });

            // 获取表单的值
            var url = `https://webxiu.github.io/callme/callme.html?${codeQuery}`;
            console.log('url', url)

            qrcode = new QRCode($(".qrcode"), {
                text: url,
                width: 226,
                height: 226,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
            });

            var canvas = qrcode._el.childNodes[0];
            codeUrl = canvas.toDataURL("image/png");
            scodeTipDom.style.display = 'block'
        };

        $("#reset").onclick = function () {
            phoneDom.value = "";
            titleDom.value = "";
            contentDom.value = "";
            signedDom.value = "";
            qrcode && qrcode.clear();
            $('.qrcode').innerHTML = '';
            scodeTipDom.style.display = 'none';
        };

        // $("#download").onclick = function () {
        //     codeUrl && downloadCode(codeUrl);
        // };
    };
})(window, document);
