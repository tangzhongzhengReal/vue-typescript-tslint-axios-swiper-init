import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Vue from 'vue';
import App from './App.vue';
import {Http} from './http/http';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Http);
Vue.use(iView);

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
});
vm.$mount('#app');
