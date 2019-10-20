import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import firebase from 'firebase';

Vue.config.productionTip = false;

let app = '';

firebase.auth().onAuthStateChanged(() => {
  store.dispatch('updateUserInfo');
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
