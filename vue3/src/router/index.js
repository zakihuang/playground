import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView";
import About from "../views/AboutView";
import Vue3Ref from "../views/Vue3Ref";
import Vue3Hooks from "../views/Vue3Hooks";
import Vue3Setup from "../views/Vue3Setup";

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
  {
    path: "/Vue3Hooks",
    name: "Vue3Hooks",
    component: Vue3Hooks
  },
  {
    path: "/Vue3Setup",
    name: "Vue3Setup",
    component: Vue3Setup
  },
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
