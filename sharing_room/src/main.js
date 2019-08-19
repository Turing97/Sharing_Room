// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VCharts from 'v-charts'
import App from './App'
import router from './router'
import './assets/icon/iconfont.css'
Vue.use(VCharts)
Vue.use(MintUI)
Vue.config.productionTip = false
//引入axios组件
import axios from 'axios'
axios.defaults.withCredentials=true;  //跨域保存session有用
axios.defaults.baseURL = "http://localhost:3000"; //打包的时候直接删掉，默认基础路径在这里配置
//将 axios 赋值给 Vue，方便在子组件里面使用
Vue.prototype.$reqs = axios;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
