
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index'
Vue.config.productionTip = false
Vue.prototype.$http=axios
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
