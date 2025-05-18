
const { defineComponent, reactive } = Vue;

export default defineComponent({
    name: 'Detail',
    props: {},
    template: dom('detailTemplate'),
    setup(props, { emit, slots, attrs }) {
        console.log('detail',)

        const formData = reactive({
            phone: '333',
            yqCode: '333',
            title: '333',
            content: '333',
            date: '333',
            cName: '333',
            codeName: '333',
        });
        const formItems = reactive([
            { type: 'input', label: '手机号', prop: 'phone', placeholder: '请输入手机号', rules: [{ required: true, message: '请输入手机号' }] },
            { type: 'input', label: '邀请码', prop: 'yqCode', placeholder: '请输入邀请码', rules: [{ required: true, message: '请输入邀请码' }] },
            { type: 'input', label: '标题', prop: 'title', placeholder: '标题限制18个字以内', rules: [{ required: true, message: '请输入标题' }] },
            { type: 'input', label: '内容', prop: 'content', placeholder: '内容限制120个字以内', rules: [{ required: true, message: '请输入内容' }] },
            { type: 'input', label: '时间', prop: 'date', placeholder: '请输入时间', rules: [{ required: true, message: '请输入时间' }] },
            { type: 'input', label: '署名', prop: 'cName', placeholder: '请输入署名', rules: [{ required: true, message: '请输入署名' }] },
            { type: 'input', label: '名称', prop: 'codeName', placeholder: '二维码底部名称 如:(请扫码联系)', rules: [{ required: true, message: '请输入名称' }] },
        ]);
        function onSubmit(values) {
            console.log('submit', values);
        }
        return { formData, formItems, onSubmit }
    }
});

