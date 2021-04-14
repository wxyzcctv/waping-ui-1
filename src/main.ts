import { createApp, createRenderer } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import First from './components/First.vue'
import Second from './components/Second.vue'
// 分别引入createWebHashHistory和createRouter，再引入First和Second模块
// 对需要添加的路由进行如下配置
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes:[
        {path: '/', component: First},
        {path: '/second', component: Second}
    ]
})

let app = createApp(App)

app.use(router)     // 要使用路由还需要在App.vue 中引入router-view
app.mount('#app')