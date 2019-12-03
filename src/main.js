import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en',
  messages: require('./assets/i18n/message.json')
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
