const { createApp } = Vue;

import App from "./App.js";
import { registerComponents } from "./components/index.js";
import router from "./utils/router.js";

const app = createApp(App);
registerComponents(app);
app.use(router);
app.use(vant);
app.use(vant.Lazyload);
app.use(ElementPlus);
app.mount("#app");
