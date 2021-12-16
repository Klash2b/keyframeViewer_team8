import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Tests from "@/views/Tests";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/tests",
      name: "Tests",
      component: Tests,
    },
  ],
});