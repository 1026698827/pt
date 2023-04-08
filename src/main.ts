import { createApp } from 'vue'
// pinia
import pinia from '@/stores'

import App from './App.vue'
// 导入自定义按钮防抖指令并注册
import preventReClick from '@/directive/preventReClick'
import router from './router'

import '@/styles/index.scss'

const app = createApp(App)

app.use(preventReClick)
app.use(pinia)
app.use(router)

app.mount('#app')
