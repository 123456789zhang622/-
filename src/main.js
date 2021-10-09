import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// CSS,reset.css设置顶格
import './assets/css/reset.css'
import './assets/css/iconfont.css'

// 引入js,fastclick通过cnpm install fastclick --save下载，设置300ms的延迟状态
import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.config.productionTip = false

// 引用swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import axios from '_axios@0.22.0@axios'
Vue.use(VueAwesomeSwiper)

// axios
Vue.prototype.$http=axios
// Vue.use(VueAxios,axios)

// Vuex 
// import store from './store'

// 全局挂载，都可以使用
new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
