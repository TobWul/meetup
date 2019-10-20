import Vue from 'vue';
import Vuex from 'vuex';
import db from '../firebase';
import groups from './modules/groups';
import users from './modules/users';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    groups,
    users
  }
});

export default store;
