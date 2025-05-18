
const { defineComponent, computed, reactive } = Vue;
const { useRoute, useRouter } = VueRouter;

import { routes } from '../utils/router.js'

export default defineComponent({
    name: 'Home',
    props: {},
    template: dom('homeTemplate'),
    setup(props, { emit, slots, attrs }) {
        const cachedComponents = ['Home'];
        const menuList = computed(() => modMenu(routes));

        function modMenu(routes) {
            for (let i = 0; i < routes.length; i++) {
                delete routes[i].components;
                if (routes[i].children && routes[i].children.length) {
                    modMenu(routes[i].children);
                }
            }
            return routes
        }
        return { menuList, cachedComponents }
    }
});
