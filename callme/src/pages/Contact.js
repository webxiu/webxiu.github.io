
const { defineComponent, ref, reactive } = Vue;
const { useRoute, useRouter } = VueRouter;

export default defineComponent({
    name: 'Contact',
    props: {},
    template: dom('contactTemplate'),
    setup(props, { emit, slots, attrs }) {

        console.log('Contact')
        function onGenerate() {
            router.push('/home/detail');
        }

        return { onGenerate }
    }
});
