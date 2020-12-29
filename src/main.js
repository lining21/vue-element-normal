import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import wait from './plugins/vue-wait'; // 导入 vue-wait
import './plugins/index';
import './style/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  wait
}).$mount('#app');
