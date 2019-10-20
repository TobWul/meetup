import db from '../../firebase';
import firebase from 'firebase';

const groupRef = db.collection('groups');

const generateCode = length => {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const state = {
  userGroups: [],
  selectedGroup: {}
};

const getters = {
  userGroups: state => {
    return state.userGroups;
  },
  selectedGroup: state => {
    return state.selectedGroup;
  }
};

const mutations = {
  updateUserGroups: (state, payload) => {
    state.userGroups = payload;
  },
  setCurrentGroup: (state, payload) => {
    state.selectedGroup = payload;
  }
};

const actions = {
  updateUserGroups: ({ commit }) => {
    const userId = firebase.auth().currentUser.uid;
    groupRef
      .where('users', 'array-contains', userId)
      .get()
      .then(querySnapshot => {
        commit(
          'updateUserGroups',
          querySnapshot.docs.map(doc => {
            return {
              code: doc.id,
              date: doc.data().date.toDate(),
              description: doc.data().description,
              title: doc.data().title
            };
          })
        );
      });
  },
  getGroupByCode: ({ commit, state }, code) => {
    if (code !== state.selectedGroup.code) {
      commit('setCurrentGroup', {});
      return new Promise((resolve, reject) => {
        groupRef
          .doc(code)
          .get()
          .then(
            doc => {
              if (doc.exists) {
                commit('setCurrentGroup', doc.data());
              }
              resolve(doc.exists);
            },
            error => reject(error)
          );
      });
    }
  },
  createNewGroup: ({ commit }, group) => {
    const code = generateCode(5);
    return new Promise((resolve, reject) => {
      groupRef
        .doc(code)
        .set({ ...group, code })
        .then(response => resolve(response), error => reject(error));
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
