import Test from "./Test.js";

const components = [Test];

// 注册非路由组件
function registerComponents(app) {
  components.forEach((c) => app.component(c.name, c));
}
