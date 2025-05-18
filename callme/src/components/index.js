import Test from "./Test.js";
import VantDatePicker from "./VantDatePicker.js";
import VantUpload from "./VantUpload.js";

const components = [VantDatePicker, VantUpload, Test];

// 注册非路由组件
export function registerComponents(app) {
  components.forEach((c) => app.component(c.name, c));
}
