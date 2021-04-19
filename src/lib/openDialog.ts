import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'
export const openDialog = (options) => {
    const { title, content, ok, cancel, closeOnClickOverlay } = options; // 获取传入的参数
    const div = document.createElement('div'); // 增加用于挂在Dialog的临时div
    document.body.appendChild(div); // 将这个临时div加入到body中
    // 这个临时的div需要挂载Dialog时需要将使用createAPP进行渲染
    // 而createAPP渲染时需要通过一个节点的方式传入Dialog的属性，此时需要使用Vue的h生成带有属性的节点
    // 使用Vue的createApp方式生成一个vue 实例
    const app = createApp({
        render() {
            // h生成节点的方式是，第一个参数是标签、组件，第二个参数是传入该组件的属性、事件，第三个参数是传入的内容，包括插槽
            return h(
                Dialog,
                {
                    visible: true,
                    closeOnClickOverlay,
                    "onUpdate:visible": (newVisible) => {
                        if (newVisible === false) {
                            close()
                        }
                    },
                    ok, cancel
                },
                {
                    title,
                    content
                }
            )
        }
    });
    // 创建好节点之后需要挂载到指定的div中
    app.mount(div);
    // 声明关闭这个Dialog的函数
    const close = () => { 
        app.unmount(); // 先关闭app
        div.remove(); // 再移除div
    }
}