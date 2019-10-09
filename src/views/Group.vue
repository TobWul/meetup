<template>
  <div id="group">
    <h1>{{group.title}}</h1>
    <p>{{group.description}}</p>
    <div v-for="(book, index) in group.books" :key="index">
      <h3>{{book.title}}</h3>
      <p>{{book.author}}</p>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "group",
  data: function() {
    return {
      group: {}
    };
  },
  created: function() {
    this.group = this.$store.getters.getGroupByCode(
      this.$route.params.group_code
    );
  }
};
</script>

<style lang="scss" scoped>
</style>