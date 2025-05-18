const { defineComponent, ref, computed, watch } = Vue;

export default defineComponent({
  name: "VantDatePicker",
  props: {
    modelValue: { type: [String, Date, Array], default: "" },
    label: { type: String, default: "时间选择" },
    placeholder: { type: String, default: "请选择时间" },
    title: { type: String, default: "选择时间" },
    format: { type: String, default: "YYYY-MM-DD" },
    required: { type: Boolean, default: false },
    columnsType: { type: Array, default: () => ["year", "month", "day"] },
    minDate: { type: Date, default: () => new Date(1970, 0, 1) },
    maxDate: { type: Date, default: () => new Date(2100, 11, 31) },
    destroyOnClose: { type: Boolean, default: true },
  },
  emits: ["update:modelValue", "change"],
  template: `
    <van-field
      v-model="displayValue"
      is-link
      readonly
      :label="label"
       :required="required"
      :placeholder="placeholder"
      @click="showPicker = true"
    />
    
    <van-popup 
      v-model:show="showPicker" 
      position="bottom"
      :destroy-on-close="destroyOnClose"
    >
      <van-date-picker
        :title="title"
        :model-value="innerValue"
        :min-date="minDate"
        :max-date="maxDate"
        :columns-type="columnsType"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>`,
  setup(props, { emit, slots, attrs }) {
    const showPicker = ref(false);
    const innerValue = ref([]);
    // 初始化值
    const initValue = () => {
      const { date, arr } = getCurrentDateArray(props.modelValue);
      innerValue.value = arr;
      const dateValue = formatDate(date, props.format);
      emit("update:modelValue", dateValue);
      emit("change", dateValue);
    };

    // 获取当前日期数组
    const getCurrentDateArray = (dateStr) => {
      const date = dateStr ? new Date(dateStr) : new Date();
      return {
        date,
        arr: [date.getFullYear(), date.getMonth() + 1, date.getDate()],
      };
    };

    // 格式化显示值
    const displayValue = computed(() => {
      if (!innerValue.value.length) return "";
      const date = new Date(innerValue.value.join("-"));
      return formatDate(date, props.format);
    });

    // 确认选择
    const onConfirm = ({ selectedValues }) => {
      innerValue.value = selectedValues;
      const dateObj = new Date(selectedValues[0], selectedValues[1] - 1, selectedValues[2]);
      const dateValue = formatDate(dateObj, props.format);
      emit("update:modelValue", dateValue);
      emit("change", dateValue);
      showPicker.value = false;
    };

    // 日期格式化函数
    const formatDate = (date, format = "YYYY-MM-DD HH:mm:ss") => {
      const d = date ? new Date(date) : new Date();
      const pad = (n) => n.toString().padStart(2, "0");
      const year = d.getFullYear();
      const month = pad(d.getMonth() + 1);
      const day = pad(d.getDate());
      const hours = pad(d.getHours());
      const minutes = pad(d.getMinutes());
      const seconds = pad(d.getSeconds());
      const replacements = {
        YYYY: year,
        MM: month,
        DD: day,
        HH: hours,
        hh: pad(d.getHours() % 12 || 12),
        mm: minutes,
        ss: seconds,
      };
      return format.replace(/YYYY|YY|MM|DD|HH|hh|mm|ss|A|a/g, (match) => replacements[match]);
    };

    watch(() => props.modelValue, initValue, { immediate: true });

    return { showPicker, innerValue, displayValue, onConfirm };
  },
});
