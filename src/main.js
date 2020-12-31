import Vue from 'vue'
import '../public/css/index.css'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import MD5 from 'blueimp-md5'

Vue.config.productionTip = false

Vue.prototype.axios = axios;
Vue.prototype.MD5 = MD5;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
