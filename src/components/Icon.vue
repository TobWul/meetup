<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
    :stroke-width="strokeWidth"
    :stroke="color"
  >
    <path :d="path" />
  </svg>
</template>

<script>
const icons = {
  attachment:
    "M23.25 9.9L12.273 20.878a6.75 6.75 0 0 1-9.546-9.546l9.016-9.015a4.5 4.5 0 1 1 6.363 6.363L9.091 17.7a2.25 2.25 0 0 1-3.182-3.181L14.925 5.5",
  back: "M23.25 12.497H.75M4.5 16.247l-3.75-3.75 3.75-3.75",
  downvote: "M23.25 2.25v10.5h-1.5a7.5 7.5 0 00-7.5 7.5V21a2.25 2.25 0 01-4.5 0v-3.75a1.5 1.5 0 00-1.5-1.5h-3A4.5 4.5 0 01.773 10.8l.465-4.649A6 6 0 017.208.75h6.2a6.006 6.006 0 011.648.231l3.634 1.038a6.006 6.006 0 001.648.231h2.91",
  upvote: "M.75 21.75v-10.5h1.5a7.5 7.5 0 007.5-7.5V3a2.25 2.25 0 014.5 0v3.75a1.5 1.5 0 001.5 1.5h3a4.5 4.5 0 014.477 4.95l-.465 4.649a6 6 0 01-5.97 5.4h-6.2a6.006 6.006 0 01-1.648-.231l-3.636-1.037a6.006 6.006 0 00-1.648-.231H.75"
};
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true
    },
    strokeWidth: {
      default: 1.5,
      type: Number
    },
    color: {
      default: "#000",
      type: String
    }
  },
  computed: {
    path() {
      return icons[this.name];
    }
  }
};
</script>