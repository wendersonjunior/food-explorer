import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/autenticacao",
    name: "auth",
    component: AuthView,
  },

  // Default
  {
    path: "*",
    component: HomeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.isAuthenticated ? true : false;
  if (to.name !== "auth" && !isAuthenticated) next({ name: "auth" });
  else if (to.name === "auth" && isAuthenticated) next({ name: "home" });
  else next();
});

export default router;
