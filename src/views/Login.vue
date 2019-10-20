<template>
  <div id="login">
    <button @click="socialLogin()">Login with google</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  components: {},
  methods: {
    ...mapActions(['setUser']),
    socialLogin: function() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .update({
              userId: firebase.auth().currentUser.uid
            });
          this.$router.replace('home');
        })
        .catch(err => {
          alert('Oops' + err.message);
        });
    }
  }
};
</script>

<style>
</style>