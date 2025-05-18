const { defineComponent, ref, watch } = Vue;
const { showNotify } = vant;

export default defineComponent({
  name: "VantUpload",
  props: {
    modelValue: { type: Array, default: () => [] },
    accept: { type: String, default: "image/*" },
    label: { type: String, default: "上传图片" },
    name: { type: String, default: "" },
    placeholder: { type: String, default: "图片Logo" },
    maxSize: { type: Number, default: 1 },
    maxCount: { type: Number, default: 1 },
    required: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },

  emits: ["update:modelValue", "change"],
  template: `
    <van-field :name="name" :label="label" :required="required">
      <template #input> 
        <van-uploader v-model="fileList" :max-count="maxCount" :multiple="multiple" :before-read="onBeforeRead" :after-read="onAfterRead" />
        <span v-if="placeholder" style="color: #969799;font-size: 12px">{{ placeholder }}</span>
      </template>
    </van-field>`,
  setup(props, { emit, slots, attrs }) {
    const fileList = ref([]);
    watch(() => props.modelValue, watchFn, { immediate: true });
    function watchFn(val) {
      if (Array.isArray(val)) {
        fileList.value = val;
      } else if (val) {
        fileList.value.push({ url: val, isImage: true });
      }
    }
    const onBeforeRead = (files) => {
      if (props.disabled) {
        showNotify({ type: "danger", message: "上传功能已禁用" });
        return false;
      }
      if (Array.isArray(files)) {
        return files.every((file) => checkFile(file));
      } else {
        return checkFile(files);
      }
    };

    function checkFile(file) {
      if (file.size / 1024 / 1024 >= props.maxSize) {
        showNotify({ type: "danger", message: `文件大小不能超过${props.maxSize}MB！` });
        return false;
      } else if (props.accept !== "*" && !isFileTypeValid(file, props.accept)) {
        showNotify({ type: "danger", message: `仅支持${props.accept}格式` });
        return false;
      }
      return true;
    }

    // 校验文件类型
    function isFileTypeValid(file, accept) {
      if (accept === "*") return true;
      const acceptTypes = accept.split(",").map((t) => t.trim());
      const fileType = file.type || getFileExtension(file.name);
      return acceptTypes.some((type) => {
        if (type.startsWith(".")) {
          return file.name.toLowerCase().endsWith(type);
        }
        if (type.endsWith("/*")) {
          return fileType.startsWith(type.replace("/*", "/"));
        }
        return fileType === type;
      });
    }

    // 获取文件扩展名
    function getFileExtension(filename) {
      return "." + filename.split(".").pop().toLowerCase();
    }
    function onAfterRead(files) {
      emitChange();
    }

    // 触发change事件
    function emitChange() {
      const list = fileList.value.map((m) => ({ file: m.file, url: m.objectUrl, content: m.content }));
      emit("update:modelValue", list);
      emit("change", list);
    }

    return { fileList, onBeforeRead, onAfterRead };
  },
});
