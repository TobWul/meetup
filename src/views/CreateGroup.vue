<template>
  <div id="create-group">
    <form v-on:submit.prevent="submitForm()">
      <label for="title">
        Tittel
        <input type="text" v-model="title" id="title" required />
      </label>
      <label for="description">
        Beskrivelse
        <textarea type="text" v-model="description" id="description" required></textarea>
      </label>
      <label for="date">
        <input type="datetime-local" v-model="date" id="date" required />
      </label>
      <button type="submit">Opprett gruppe</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'createGroup',
  data: function() {
    return {
      title: '',
      description: '',
      date: ''
    };
  },
  methods: {
    ...mapActions(['createNewGroup']),
    submitForm: function() {
      this.createNewGroup({
        title: this.title,
        description: this.description,
        date: new Date(this.date)
      })
        .then(code => {
          this.$router.push({ name: 'group', params: { group_code: code } });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style>
</style>