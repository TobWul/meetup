<template>
  <div id="home">
    <header>
      <p>
        <em>Next meetup</em>
      </p>
      <h1>{{getNextMeetup.title}}</h1>
      <input type="text" v-model="code" @input="validateCode($event)" placeholder="Meetup code" />
    </header>
    <div class="joined-groups">
      <p>
        <em>Your events:</em>
      </p>
      <br />
      <router-link
        v-for="(group, index) in groupList"
        :key="index"
        :to="{name: 'group', params: {group_code: group.code}}"
      >
        <meetup-thumbnail :group="group" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MeetupThumbnail from "../components/MeetupThumbnail";
export default {
  name: "home",
  components: {
    MeetupThumbnail
  },
  data: function() {
    return {
      code: ""
    };
  },
  computed: {
    ...mapGetters(["groupList", "getNextMeetup"])
  },
  methods: {
    validateCode: function() {
      const response = this.$store.getters.getGroupByCode(this.code);
      if (response)
        this.$router.push({ name: "group", params: { group_code: this.code } });
    }
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
