//vue3提供的createApp方法
import { createApp } from 'vue'
//引入清除样式
import '@/style/reset.scss'
//@ts-ignore
import App from '@/App.vue'
//引用全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import Login from '@/components/login/index.vue'
import router from '@/router'
//引入element-plus及样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入pinia仓库
import pinia from '@/store'

const app = createApp(App)
app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)
app.component('Login',Login)
app.use(router)
app.use(ElementPlus,{
    locale: zhCn,
})
app.use(pinia)

app.mount('#app')
// createApp(App).mount('#app')
