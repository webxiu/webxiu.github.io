const { createRouter, createWebHashHistory } = VueRouter;

export const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/home/main",
    meta: { title: "首页", icon: "Monitor", order: 1 },
    component: () => import("../pages/Home.js"),
    children: [
      { path: "/home/main", name: "Main", meta: { title: "主页" }, component: () => import("../pages/Main.js") },
      { path: "/home/contact", name: "Contact", meta: { title: "联系" }, component: () => import("../pages/Contact.js") },
      { path: "/home/detail", name: "Detail", meta: { title: "详情" }, component: () => import("../pages/Detail.js") },
    ],
  },
  {
    path: "/tool",
    name: "Tool",
    redirect: "/tool/vue",
    meta: { title: "工具", icon: "Monitor", order: 1 },
    component: () => import("../pages/Home.js"),
    children: [
      { path: "/tool/vue", name: "Vue", meta: { title: "Vue" }, component: () => import("../pages/Demo.js") },
      { path: "/tool/react", name: "React", meta: { title: "React" }, component: () => import("../pages/Demo.js") },
    ],
  },
  { path: "/qrcode", name: "Qrcode", meta: { title: "二维码", icon: "Monitor", order: 1 }, component: () => import("../pages/single/Qrcode.js") },
  { path: "/inviteCode", name: "InviteCode", meta: { title: "邀请码", icon: "Monitor", order: 1 }, component: () => import("../pages/single/InviteCode.js") },
];

const router = createRouter({
  history: createWebHashHistory(location.pathname),
  routes: routes,
});

export default router;
