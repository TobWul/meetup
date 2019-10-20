<template>
  <a @click="$router.push('/home')">
    <Icon name="back" />Tilbake
  </a>
</template>

<script>
import Icon from './Icon';
export default {
  name: 'Back',
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
a {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: 2rem;
  svg {
    margin-right: 0.5rem;
  }
}
</style>