import Vue from 'vue'
import App from './App'
import uniNavBar from "components/uni-nav-bar/uni-nav-bar.vue"

Vue.config.productionTip = false
// 全局组件注册
Vue.component('uniNavBar',uniNavBar)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
