const { defineComponent, ref } = Vue;

export default defineComponent({
  name: "Test",
  props: {},
  template: dom("testTemplate"),
  setup(props, { emit, slots, attrs }) {
    console.log("测试组件");
    return {};
  },
});
