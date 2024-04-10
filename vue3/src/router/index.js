import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView";
import About from "../views/AboutView";
import Vue3Ref from "../views/Vue3Ref";

export const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/vue3fef",
    name: "Vue3Ref",
    component: Vue3Ref
  },
  // {
  //   path:'/detail',
  //   component:Detail
  // },
  {
    path: "/",
    redirect: "/vue3fef"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
