<template>
  <div id="home">
    <header>
      <p>{{userName}}</p>
      <p>
        <em>Next meetup</em>
      </p>
      <!-- <h1>{{getNextMeetup.title}}</h1> -->
      <input type="text" v-model="code" @input="validateCode($event)" placeholder="Meetup code" />
      <register-new-group :code="code" :isOpen="popupOpen" />
    </header>
    <div class="joined-groups">
      <p>
        <em>Your events:</em>
      </p>
      <br />
      <router-link
        v-for="(group, index) in userGroups"
        :key="index"
        :to="{name: 'group', params: {group_code: group.code}}"
      >
        <meetup-thumbnail :group="group" />
      </router-link>
    </div>
    <button @click="logout()">Logg ut</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MeetupThumbnail from '../components/MeetupThumbnail';
import RegisterNewGroup from '../components/RegisterNewGroup';
import firebase from 'firebase';
export default {
  name: 'home',
  components: {
    MeetupThumbnail,
    RegisterNewGroup
  },
  data: function() {
    return {
      userName: firebase.auth().currentUser.displayName,
      code: '',
      popupOpen: false
    };
  },
  computed: {
    ...mapGetters(['userGroups', 'selectedGroup'])
  },
  methods: {
    ...mapActions(['updateUserGroups', 'getGroupByCode']),
    validateCode: function() {
      if (this.code.length === 5) {
        this.getGroupByCode(this.code).then(response => {
          console.log(response);

          this.popupOpen = response;
        });
      }
    },
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('login');
        });
    }
  },
  created: function() {
    this.updateUserGroups();
    console.log(this.userGroups);
  }
};
</script>

<style lang="scss" scoped>
#home {
  background: color(grays, 900);
}
header {
  color: color(grays, 100);
  padding: 4rem 2rem 3rem;

  input {
    color: color(grays, 100);
    margin-top: 2rem;
    background: none;
    border: none;
    outline: 0;
    cursor: text;
    font-size: 2rem;

    &::placeholder {
      color: color(grays, 500);
    }
  }
}
.joined-groups {
  padding: 2rem 1.5rem;
  background: $background-color;
  border-radius: 1.5rem 1.5rem 0 0;
  text-align: left;
}
</style>
