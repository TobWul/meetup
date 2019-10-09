import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Group from "./views/Group.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/group/:group_code",
      name: "group",
      component: Group
    }
  ]
});
