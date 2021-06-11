/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-11 21:03:51
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-11 22:08:57
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import "assets/css/index.css";
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
