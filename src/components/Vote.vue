<template>
  <div class="vote" @click="$emit('vote', 1)">
    <Icon :name="isUpVote ? 'upvote' : 'downvote'" :class="{downvote: !isUpVote}" />
    {{ votes }}
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "Vote",
  components: {
    Icon
  },
  props: {
    isUpVote: Boolean,
    votes: Number
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.vote {
  border: 1px solid color(grays, 900);
  border-radius: 5px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  line-height: 1em;
  padding: 0.5rem 0.5rem;
  margin-right: 1rem;
  background: color(grays, 100);
  box-shadow: $shadow;

  svg {
    transition: transform 200ms ease-in-out;
  }

  &.active svg {
    transform: translateY(-5px);
  }

  &.active svg.downvote {
    transform: translateY(5px);
  }
}
</style>