import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import * as db from "./db";

export default new Vuex.Store({
  state: {
    groupList: db.groupList,
    groupDetail: db.groupDetail,
    bookList: db.bookList
  },
  getters: {
    groupList: state => {
      return state.groupList;
    },
    getGroupByCode: state => code => {
      return state.groupDetail.find(group => group.code === code);
    },
    getNextMeetup: state => {
      return state.groupList.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
      })[0];
    },
    getBookById: state => id => {
      return state.bookList.find(book => book.id === id);
    }
  },
  mutations: {
    vote: (state, bookId, isUpVote) => {
      if (isUpVote) {
        state.bookList.find(book => book.id === bookId).upvotes++;
      } else {
        state.bookList.find(book => book.id === bookId).downvotes++;
      }
    }
  },
  actions: {
    vote: ({ commit }, bookId, isUpVote) => {
      console.log(isUpVote, bookId);
      commit("vote", bookId, isUpVote);
    }
  }
});
