import Vue from 'vue'
import Vuex from 'vuex'

// vue使用插件Vuex
Vue.use(Vuex)

// 先默认defaultCity是上海，然后把本地存储的值传给他
// 使得页面刷新后城市不会改变
let defaultCity = '上海';
defaultCity = localStorage.city;

// 仓库
export default new Vuex.Store({
  // 抛出
  state: {
    city:defaultCity
  },
  // 相当于事件
  mutations: {
    changeCity(state,city){
      state.city = city;
      // 本地存储点击的城市名
      localStorage.city = city;
    }
  },
  actions: {
  },
  modules: {
  }
})
