<template>
  <div class="card" v-show="isOpen">
    <p>Kode: {{ code }}</p>
    <p>{{selectedGroup.title}}</p>
    <p>{{selectedGroup.description}}</p>
    <button @click="buttonJoin()">Bli med</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'registerNewGroup',
  data: function() {
    return {};
  },
  props: {
    code: {
      type: String,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapGetters(['selectedGroup'])
  },
  methods: {
    ...mapActions(['getGroupByCode', 'joinGroup']),
    buttonJoin: function() {
      this.joinGroup(this.code).then(response => {
        this.$router.push({ name: 'group', params: { group_code: this.code } });
      });
    }
  },
  watch: {
    isOpen: function(newVal, oldVal) {
      console.log(newVal);

      this.getGroupByCode(this.code);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: fixed;
  display: block;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 90vh;
  transform: translate(-50%, -50%);
  background: $background-color;
  box-shadow: $shadow;
  color: color(grays, 900);
  padding: 2rem;
  border-radius: $border-radius;
}
</style>