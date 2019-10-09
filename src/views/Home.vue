<template>
  <div id="home">
    <h1>Meetup</h1>
    <input type="text" v-model="code" @input="validateCode($event)" />
    <a
      v-for="(group, index) in groupList"
      :key="index"
      :href="'/group/' + group.code"
    >{{group.title}}</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {},
  data: function() {
    return {
      code: ""
    };
  },
  computed: {
    ...mapGetters(["groupList"])
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
  text-align: center;
}
</style>
