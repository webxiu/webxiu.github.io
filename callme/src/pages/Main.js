const { defineComponent, ref, reactive } = Vue;
const { useRoute, useRouter } = VueRouter;

export default defineComponent({
  name: "Main",
  props: {},
  template: dom("mainTemplate"),
  setup(props, { emit, slots, attrs }) {
    return {};
  },
});
