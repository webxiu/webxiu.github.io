// main.js
/* @jsxRuntime classic */
/* @jsx Vue.h */


// 注册 Vue JSX 预设（必须在执行任何 JSX 代码前完成）
if (typeof babel !== 'undefined') {
    babel.registerPreset('vue-jsx', {
        presets: [
            [babel.availablePresets['env'], { modules: false }]
        ],
        plugins: [
            [babel.availablePlugins['transform-vue-jsx'], {
                // Vue 3 JSX 插件选项
            }]
        ]
    });
}

const { createApp, ref } = Vue;


// 定义组件（使用对象形式）
const MyComponent = {
    setup() {
        const name = ref("dewxiu");
        return () => (
            <div>
                测试组件: {name.value}
                <Test />
                <button onClick={() => name.value = 'updated'}>更新</button>
            </div>
        );
    }
};

// 创建应用
const app = createApp(MyComponent)
registerComponents(app);
app.mount("#app");