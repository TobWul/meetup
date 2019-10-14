<template>
  <div class="thumbnail">
    <div class="content">
      <div class="days">
        <span>{{ daysLeft(group.date) }}</span>
        <br />dager
      </div>
      <div>
        <h3>{{group.title}}</h3>
        <p>
          <em>{{getDate(group.date).getDate() + "." + getCorrectMonth(getDate(group.date).getMonth()) + "." + getDate(group.date).getFullYear()}}</em>
        </p>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: "MeetupThumbnail",
  props: ["group"],
  methods: {
    daysLeft: date => {
      const today = new Date();
      date = new Date(date);
      const msPerDay = 24 * 60 * 60 * 1000;
      const timeLeft = date.getTime() - today.getTime();
      const e_daysLeft = timeLeft / msPerDay;
      return Math.floor(e_daysLeft);
    },
    getDate: date => {
      return new Date(date);
    },
    getCorrectMonth: month => {
      return ("0" + (month + 1)).slice(-2);
    }
  }
};
</script>

<style lang="scss" scoped>
.thumbnail {
  color: color(grays, 900);
  text-decoration: none;

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0 2rem;
  }

  .days {
    text-align: center;
    line-height: 1em;
    margin-right: 2rem;
    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .divider {
    width: 33%;
    height: 1px;
    background-color: color(grays, 900);
    margin-bottom: 2rem;
  }
}
</style>