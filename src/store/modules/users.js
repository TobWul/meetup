import firebase from 'firebase';
import db from '../../firebase';

const state = {};

const getters = {};

const mutations = {};

const actions = {
  updateUserInfo: () => {
    const user = firebase.auth().currentUser;
    const usersRef = db.collection('users').doc(user.uid);

    usersRef.get().then(docSnapshot => {
      if (docSnapshot.exists) {
        usersRef.onSnapshot(doc => {
          // do stuff with the data
        });
      } else {
        usersRef.set({
          name: user.displayName
        }); // create the document
      }
    });
  },
  joinGroup: ({}, code) => {
    return new Promise((resolve, reject) => {
      db.collection('groups')
        .doc(code)
        .update({
          users: firebase.firestore.FieldValue.arrayUnion(
            firebase.auth().currentUser.uid
          )
        })
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
