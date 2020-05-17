import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from '@/router'
//导入element.js
import '@/plugins/element.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
