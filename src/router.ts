import { createWebHashHistory, createRouter } from 'vue-router'
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DialogDemo from "./components/DialogDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"
import DocDemo from "./components/DocDemo.vue"
import Intro from "./views/Intro.vue"
import GetStarted from "./views/GetStarted.vue"
import Install from "./views/Install.vue"
// 分别引入createWebHashHistory和createRouter，再引入First和Second模块
// 对需要添加的路由进行如下配置
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: '', component: DocDemo },
                { path: 'intro', component: Intro },
                { path: 'get-started', component: GetStarted },
                { path: 'install', component: Install },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
            ]
        }
    ]
})