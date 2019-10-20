<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  computed: {},
  methods: {},
  created: function() {
    const user = this.getUser;
    const self = this;
    firebase.auth().onAuthStateChanged(function() {
      console.log(firebase.auth().currentUser.displayName);
    });
  }
};
</script>

<style lang="scss">
@import '../src/scss/css-reset', '../src/scss/_typography',
  '../src/scss/_global';
</style>
