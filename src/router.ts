import {createWebHashHistory, createRouter} from 'vue-router'
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
// 分别引入createWebHashHistory和createRouter，再引入First和Second模块
// 对需要添加的路由进行如下配置
const history = createWebHashHistory()
export  const router = createRouter({
    history: history,
    routes:[
        {path: '/', component: Home},
        {
            path: '/doc', 
            component: Doc, 
            children: [{path: 'switch', component: SwitchDemo}]
        }
    ]
})
router.afterEach(() => {
    console.log("路由切换了");
});