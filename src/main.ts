import './lib/waping.scss'
import './global/css/index.scss'
import './global/icon/icon.js'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import Markdown from "../src/components/Markdown.vue"

let app = createApp(App)
app.use(router)     // 要使用路由还需要在App.vue 中引入router-view
app.mount('#app')
app.component("Markdown", Markdown)