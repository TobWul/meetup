<template>
  <div class="item">
    <img :src="book.img" :alt="book.title" />
    <div>
      <h4>{{book.title}}</h4>
      <div class="votes">
        <Vote :isUpVote="true" :votes="book.upvotes" @vote="vote(book.id, true)" />
        <Vote :isUpVote="false" :votes="book.downvotes" @vote="vote(book.id, false)" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon';
import Vote from './Vote';
import { mapActions } from 'vuex';
export default {
  name: 'Book',
  components: {
    Icon,
    Vote
  },
  props: {
    book: Object
  },
  methods: {
    ...mapActions(['vote'])
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-template-columns: 4fr 6fr;
  margin-bottom: 3rem;
  grid-gap: 1rem;
}

h4 {
  margin-top: 1rem;
}
img {
  border-radius: 0 10px 10px 0;
  width: 100%;
  box-shadow: $shadow;
}
</style>