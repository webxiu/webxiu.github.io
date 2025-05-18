const { defineComponent, ref } = Vue;

export default defineComponent({
    name: 'Demo',
    props: {},
    template: dom('demoTemplate'),
    setup(props, { emit, slots, attrs }) {
        console.log('Demo组件',)
        return {}
    }
});
