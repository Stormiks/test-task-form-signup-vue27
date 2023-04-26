import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/HomeView.vue"),
  },
  {
    path: "/register",
    name: "FormRegister",
    component: () =>
      import(
        /* webpackChunkName: "form-register" */ "@/views/Auth/FormRegister.vue"
      ),
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () =>
      import(
        /* webpackChunkName: "form-register" */ "@/views/Auth/FormSignIn.vue"
      ),
  },
  {
    path: "/*",
    name: "ErrorNotFound",
    component: () =>
      import(
        /* webpackChunkName: "error-pages" */ "@/views/Errors/ErrorNotFound.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
