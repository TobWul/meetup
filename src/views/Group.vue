<template>
  <div id="group">
    <Back />
    <header>
      <h1>{{selectedGroup.title}}</h1>
      <p>
        <em>Code: {{$route.params.group_code}}</em>
      </p>
      <p>{{selectedGroup.description}}</p>
    </header>
    <div v-for="(book, index) in books" :key="index">
      <Book :book="book" />
    </div>
    <br />
  </div>
</template>

<script>
import Back from '../components/Back';
import Book from '../components/Book';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'group',
  components: {
    Back,
    Book
  },
  data: function() {
    return {
      group: {
        title: '',
        description: ''
      },
      books: {}
    };
  },
  computed: {
    ...mapGetters(['selectedGroup'])
  },
  methods: {
    ...mapActions(['getGroupByCode'])
  },
  created: function() {
    const code = this.$route.params.group_code;
    if (code !== this.selectedGroup.code) {
      this.getGroupByCode(code).then(group => {
        console.log(group);

        this.group = group;
      });
    }
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