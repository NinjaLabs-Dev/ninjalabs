import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTilt from 'vue-tilt.js'
import VTooltip from 'v-tooltip';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false
Vue.use(VueTilt);
Vue.use(VTooltip);
Vue.use(VueMeta);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
