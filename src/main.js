import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// 创建实例
import { createPinia } from 'pinia';
const pinia = createPinia();
import zhCn  from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

//全局引用css
import '../style/headtap.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus,{ locale:zhCn})

//请求地址
import urls from '../api/api'
app.config.globalProperties.$urls = urls
//请求方法
import request from '../api/request'
app.config.globalProperties.$request = request

//弹窗提示
import tips from '../config/Tips'
app.config.globalProperties.$tips = tips

//mock引入
import "@/mockjs/index"

app.use(pinia)
app.mount('#app')
