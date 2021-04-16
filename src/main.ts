import './lib/waping.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

let app = createApp(App)
app.use(router)     // 要使用路由还需要在App.vue 中引入router-view
app.mount('#app')