/** 通用工具方法 */

export default {
  /** 防抖 */
  debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  },
  isApp() {
    const device = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone|wxwork)/i
    );
    return device;
  },
  isWeiXin() {
    const ua = navigator.userAgent.toLowerCase();
    const runOnWx = ua.indexOf("micromessenger") !== -1;
    if (runOnWx) {
      return true;
    } else {
      return false;
    }
  },
  /** JSON转URL参数 */
  jsonToUrlParam(json) {
    return Object.keys(json)
      .map((key) => key + "=" + json[key])
      .join("&");
  },
  /** URL字符串转JSON对象 */
  paramsToJson(str = "") {
    const params = str.split("&");
    const result = {};
    params.forEach((param) => {
      const [key, value] = param.split("=");
      const deVal = decodeURIComponent(value || "");
      if (key) result[key] = deVal;
    });
    return result;
  },
  base64ToBlob(data, mime = "image/png") {
    data = data.split(",")[1];
    data = window.atob(data);
    const arrs = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
      arrs[i] = data.charCodeAt(i);
    }
    return new Blob([arrs], { type: mime });
  },
  downloadBlob(blob, fileName) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  },
  /** 文件转base64 */
  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  },
  getCode(date) {
    const time = date ? new Date(date) : new Date();
    const d2 = this.formatDate(time).slice(0, 8);
    return md5(d2).slice(0, 4).toLowerCase();
  },
  /** 验证表单 */
  validateForm(formData, rules) {
    const errors = [];
    for (const field in rules) {
      const value = formData[field];
      const fieldRules = rules[field];
      for (const rule of fieldRules) {
        if (field === "code" && rule.pattern) {
          if (this.getCode() !== value) {
            errors.push({ field, message: rule.message });
            break;
          }
        }
        if (rule.required && (!value || value === "")) {
          errors.push({ field, message: rule.message });
          break;
        }
        // 正则校验
        if (rule.pattern && !rule.pattern.test(value)) {
          errors.push({ field, message: rule.message });
          break;
        }
      }
    }
    // 只返回errors的第一个错误信息
    return errors[0] || {};
  },
  formatDate(date, format = "YYYY-MM-DD HH:mm:ss") {
    const d = date ? new Date(date) : new Date();
    const pad = (n) => n.toString().padStart(2, "0");
    // 日期元素提取
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    const seconds = pad(d.getSeconds());
    // 格式替换表
    const replacements = {
      YYYY: year,
      YY: year.toString().slice(-2),
      MM: month,
      DD: day,
      HH: hours,
      hh: pad(d.getHours() % 12 || 12),
      mm: minutes,
      ss: seconds,
      // A: d.getHours() < 12 ? "AM" : "PM",
      // a: d.getHours() < 12 ? "am" : "pm",
    };
    return format.replace(/YYYY|YY|MM|DD|HH|hh|mm|ss|A|a/g, (match) => replacements[match]);
  },
  /** 二维码专用压缩方案 */
  qrCompress(str) {
    if (!str) return str;
    // 1. 中文→Unicode转义序列（比UTF-8更紧凑）
    const unicodeStr = str.replace(/[\u0080-\uffff]/g, (ch) => "\\u" + ch.charCodeAt(0).toString(16).padStart(4, "0"));
    // 2. 使用更高效的LZString库算法
    const compressed = LZString.compressToEncodedURIComponent(unicodeStr);
    return compressed;
  },
  /** 解压缩 */
  qrDecompress(compressed) {
    let str = "";
    try {
      // 1. LZString解压
      const unicodeStr = LZString.decompressFromEncodedURIComponent(compressed);
      // 2. Unicode转回中文
      str = unicodeStr.replace(/\\u([\d\w]{4})/gi, (match, grp) => String.fromCharCode(parseInt(grp, 16)));
    } catch (error) {}
    return str;
  },
};
