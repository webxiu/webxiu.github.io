const { defineComponent, reactive, computed } = Vue;
const { useRouter } = VueRouter;
const { showNotify } = vant;

export default defineComponent({
  name: "Qrcode",
  props: {},
  template: `<van-form label-width="52px">
              <van-cell-group inset> 
                  <vant-date-picker v-model="formData.code" label="邀请码"/>
              </van-cell-group> 
              <div>{{code}}</div>
              <div style="margin: 16px;" class="flex-center">
                <van-button type="primary" size="small" @click="onCopy"> 复制 </van-button>
                <van-button size="small" @click="onJump"> 跳转到二维码 </van-button>
              </div>
            </van-form>`,
  setup(props, { emit, slots, attrs }) {
    const router = useRouter();
    const formData = reactive({ code: "" });
    const code = computed(() => md5(formData.code.slice(0, 8)).slice(0, 4).toLowerCase());
    async function copyToClipboard(text) {
      try {
        // 方法1: 使用现代剪贴板API
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
          return true;
        }

        // 方法2: 兼容旧浏览器的后备方案
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed"; // 防止页面滚动
        document.body.appendChild(textarea);
        textarea.select();

        const result = document.execCommand("copy");
        document.body.removeChild(textarea);

        if (!result) {
          throw new Error("复制失败");
        }
        return true;
      } catch (err) {
        console.error("复制失败:", err);

        // 方法3: 完全兼容方案 - 提示用户手动复制
        prompt("请手动复制以下内容", text);
        return false;
      }
    }
    const onCopy = async () => {
      const success = await copyToClipboard(code.value);
      if (success) {
        showNotify({ type: "success", message: "复制成功" });
      } else {
        showNotify({ type: "danger", message: "复制失败, 请手动复制" });
      }
    };

    function onJump() {
      router.push("/qrcode");
    }
    return {
      code,
      formData,
      onCopy,
      onJump,
    };
  },
});
