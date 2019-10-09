import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import * as db from "./db";

export default new Vuex.Store({
  state: {
    groupList: db.groupList,
    groupDetail: db.groupDetail
  },
  getters: {
    groupList: state => {
      return state.groupList;
    },
    getGroupByCode: state => code => {
      return state.groupDetail.find(group => group.code === code);
    }
  },
  mutations: {},
  actions: {}
});
