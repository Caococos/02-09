/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-11 21:03:51
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-16 17:17:11
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "assets/css/index.css";
new Vue({
  render: h => h(App)
}).$mount('#app')
