const { defineComponent, ref, reactive, onMounted, watch, computed } = Vue;
const { useRoute } = VueRouter;
const { showNotify } = vant;

import storage from "../../utils/storage.js";
import utils from "../../utils/utils.js";

export default defineComponent({
  name: "Qrcode",
  props: {},
  template: dom("qrcodeTemplate"),
  setup(props, { emit, slots, attrs }) {
    const route = useRoute();
    const visible = ref(false);
    const isPrevew = ref(false);
    const isWechat = ref(false);
    const qrcode = ref();
    const callRef = ref();
    const codeImg = ref("");

    const url = location.host + "/callme/#/qrcode";
    const wechat = ref("./images/wechat.jpg");
    const callme = ref("./images/callme.png");
    const { setItem, getItem, removeItem } = storage.createStorage(storage.CallMe_Key, true);
    const { setItem: setItemFirst, getItem: getItemFirst } = storage.createStorage("first_callme");
    const localData = getItem();
    const firstTime = getItemFirst();
    const currentData = utils.formatDate("", "YYYY年MM月DD日");

    const descList = reactive([
      "扫码一键拨打电话, 使用简单、方便、快捷",
      "自定义显示标题、内容、时间及二维码名称",
      "可以作为个人电子名片及提醒信息展示",
      "方便打印贴在车辆、门窗、公告栏等地方使用",
      "扫码次数不限、永久免费, 访问受网络差异影响",
      "所填信息仅生成二维码时使用, 不会收集个人信息",
      `输入邀请码才能生成二维码, 限时邀请码: ${utils.getCode(new Date(firstTime))}`,
    ]);
    const formItems = reactive([
      { type: "input", label: "手机号", prop: "phone", required: true, maxlength: 11, placeholder: "请输入手机号" },
      { type: "input", label: "邀请码", prop: "code", required: true, maxlength: 4, placeholder: "限时邀请码4位" },
      { type: "input", label: "标题", prop: "title", maxlength: 18, required: true, placeholder: "内容标题,18个字以内" },
      { type: "input", label: "联系人", prop: "name", maxlength: 15, required: true, placeholder: "手机号联系人15个字以内" },
      { type: "input", label: "名称", prop: "codeName", maxlength: 15, required: true, placeholder: "二维码名称 如:(请扫码联系)" },
      { type: "date", label: "日期", prop: "date", required: true, format: "YYYY-MM-DD", placeholder: "请选择日期" },
      { type: "textarea", label: "内容", prop: "content", required: true, rows: 2, maxlength: 120, placeholder: "内容限制120个字以内" },
      { type: "upload", label: "LOGO", prop: "logo", accept: "image/*", maxCount: 1, maxSize: 3, placeholder: "二维码Logo(选填)" },
    ]);
    const rules = reactive({
      phone: [
        { required: true, message: "请输入手机号" },
        { pattern: /^1[3-9]\d{9}$/, message: "手机号格式不正确" },
      ],
      code: [
        { required: true, message: "请输入邀请码" },
        { pattern: /^\d{4}$/, message: "邀请码不正确" },
      ],
      title: [{ required: true, message: "请输入标题" }],
      name: [{ required: true, message: "请输入联系人" }],
      codeName: [{ required: true, message: "请输入二维码名称" }],
      date: [{ required: true, message: "请选择日期" }],
      content: [{ required: true, message: "请输入内容" }],
    });

    const viewData = ref({});
    const formData = reactive({
      phone: "",
      code: "",
      name: "",
      date: "",
      title: "",
      content: "",
      codeName: "",
      ...localData,
      logo: [],
    });

    onMounted(() => {
      // 默认只使用了gen参数
      const query = route.query;
      console.log("query:", query);
      const result = utils.qrDecompress(query.text);
      const _data = utils.paramsToJson(result);
      viewData.value.date = utils.formatDate(_data.date, "YYYY年MM月DD日");
      if (query.tel) {
        Object.assign(_data, { ...query, phone: query.tel, date: query.time });
      }
      viewData.value.gen = query.gen;
      if (_data.phone) {
        viewData.value = _data;
        isPrevew.value = true;
        requestAnimationFrame(() => {
          if (_data.phone && callRef.value) {
            callRef.value.click();
          }
        });
      }
      if (!firstTime) {
        setItemFirst(new Date().getTime());
      }
    });

    watch(
      () => formData,
      (val) => {
        if (visible.value) setItem(val);
      },
      { deep: true }
    );

    function onOpen() {
      visible.value = true;
    }

    function onSubmit() {
      const { logo, ...rest } = formData;
      const res = utils.validateForm(rest, rules);
      if (res.message) {
        showNotify({ type: "danger", message: res.message });
        return;
      }
      const query = utils.jsonToUrlParam(rest);
      const text = url + "?text=" + utils.qrCompress(query);
      console.log("text:", text);
      try {
        qrcode.value?.clear();
        qrcode.value = new QRCode(document.createElement("div"), {
          text: text,
          width: 400,
          height: 400,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H,
        });
      } catch (error) {
        alert("二维码生成失败");
      }
      isWechat.value = utils.isWeiXin();
      const canvas = qrcode.value._el.childNodes[0];
      const codeUrl = canvas.toDataURL("image/png");
      const param = { url: codeUrl, text: formData.codeName, logo: logo[0]?.content };
      drawText(param, (base64) => {
        codeImg.value = base64;
      });
    }

    // 给图片再绘制文字说明
    function drawText({ url, text, logo }, callback) {
      const canvasDom = document.createElement("canvas");
      // 二维码下方文字高度
      const codeHeight = 70;
      //二维码宽高
      const qrcodewidth = 400;
      const qrcodeheight = 400;
      //canvas宽高
      const canvaswidth = qrcodewidth;
      const canvasheight = qrcodeheight + codeHeight;
      //logo宽高
      const logowidth = 100;
      const logoheight = 100;
      //文字描述位置
      const textleft = qrcodewidth / 2;
      const texttop = qrcodeheight + codeHeight / 2;
      //logo位置
      const logoleft = (qrcodewidth - logowidth) / 2;
      const logotop = (qrcodeheight - logoheight) / 2;
      // 二维码距离边缘间隙
      const gap = 20;

      const img = new Image();
      img.src = url;
      img.onload = function () {
        canvasDom.width = canvaswidth;
        canvasDom.height = canvasheight;
        const ctx = canvasDom.getContext("2d");
        //设置画布背景
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
        //设置文字样式
        ctx.fillStyle = "#000000";
        ctx.font = "bold " + 22 + "px Arial";
        ctx.textAlign = "center";
        //设置文字
        ctx.fillText(text || "(请扫码联系)", textleft, texttop);
        ctx.drawImage(img, gap, gap, canvasDom.width - 2 * gap, canvasDom.height - codeHeight - gap);
        //设置logo
        if (logo) {
          const oImg = new Image(logowidth, logoheight);
          oImg.setAttribute("crossOrigin", "anonymous");
          oImg.src = logo;
          oImg.onload = function () {
            ctx.drawImage(oImg, logoleft, logotop, logowidth, logoheight);
            const base64 = canvasDom.toDataURL("image/png");
            callback(base64);
          };
          return;
        }
        const base64 = canvasDom.toDataURL("image/png");
        callback(base64);
      };
    }

    function onClickMe() {
      if (viewData.value.phone) {
        isPrevew.value = !isPrevew.value;
      }
    }

    function onReset() {
      qrcode.value?.clear();
      codeImg.value = "";
      setFormData();
      removeItem();
    }

    function setFormData(obj = {}) {
      Object.keys(formData).forEach((key) => {
        if (key === "logo") {
          return (formData[key] = obj[key] || []);
        }
        formData[key] = obj[key] || "";
      });
    }

    function onDownload() {
      const base64 = codeImg.value;
      const blob = utils.base64ToBlob(base64);
      const fileName = "二维码_" + Date.now() + ".png";
      utils.downloadBlob(blob, fileName);
    }

    return {
      isPrevew,
      formData,
      viewData,
      formItems,
      callRef,
      wechat,
      callme,
      isWechat,
      codeImg,
      visible,
      descList,
      currentData,
      onClickMe,
      onSubmit,
      onReset,
      onDownload,
      onOpen,
    };
  },
});
