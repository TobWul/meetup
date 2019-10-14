<template>
  <div id="group">
    <Back />
    <header>
      <h1>{{group.title}}</h1>
      <p>
        <em>Code: {{group.code}}</em>
      </p>
      <p>{{group.description}}</p>
    </header>
    <div v-for="(book, index) in books" :key="index">
      <Book :book="book" />
    </div>
    <br />
  </div>
</template>

<script>
import Back from "../components/Back";
import Book from "../components/Book";

export default {
  name: "group",
  components: {
    Back,
    Book
  },
  data: function() {
    return {
      group: {},
      books: {}
    };
  },
  created: function() {
    this.group = this.$store.getters.getGroupByCode(
      this.$route.params.group_code
    );
    this.books = this.group.books.sort((a, b) => {
      return a.downvotes - b.downvotes;
    });
  }
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 2rem;
  padding: 2rem;

  h1,
  p:first-of-type {
    text-align: center;
  }
  p:first-of-type {
    margin-bottom: 2rem;
  }
}
</style>