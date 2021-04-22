import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/Homepage",
      name: "Homepage",
      component: () => import("./components/Homepage")
    },
    {
      path: "/Item",
      alias: "/Item",
      name: "Item",
      component: () => import("./components/Item")
    },
    {
      path: "/Login",
      alias: "/Login",
      name: "Login",
      component: () => import("./components/Login")
    },
    {
      path: "*",
      alias: "/404",
      name: "404",
      component: () => import("./components/404")
    },
    // {
    //   path: "/tutorials/:id",
    //   name: "tutorial-details",
    //   component: () => import("./components/Tutorial")
    // },
    // {
    //   path: "/add",
    //   name: "add",
    //   component: () => import("./components/AddTutorial")
    // }
  ]
});