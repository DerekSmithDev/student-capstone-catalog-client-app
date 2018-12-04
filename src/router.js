import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Show from "./views/Show.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/capstones",
      name: "home",
      component: Home
    },
    {
      path: "/capstones/:id",
      name: "show",
      component: Show
    }
  ]
});
