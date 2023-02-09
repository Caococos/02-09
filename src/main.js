import Vue from 'vue'
import App from './App.vue'
import 'animate.css'

Vue.config.productionTip = false
import "assets/css/index.css";
new Vue({
  render: h => h(App)
}).$mount('#app')
