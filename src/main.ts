//vue3提供的createApp方法
import { createApp } from 'vue'
//引入清除样式
import '@/style/reset.scss'
//@ts-ignore
import App from '@/App.vue'
//引用全局组件
//@ts-ignore
import HospitalTop from '@/components/hospital_top/index.vue'
//@ts-ignore
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import router from '@/router'
//引入element-plus及样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)
app.use(router)
app.use(ElementPlus,{
    locale: zhCn,
})

app.mount('#app')
// createApp(App).mount('#app')
