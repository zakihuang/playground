import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView";
import About from "../views/AboutView";

const routes = [
  {
    path: "/home",
    name: 'Home',
    component: Home
  },
  {
    path:'/about',
    component:About
  },
  // {
  //   path:'/list',
  //   component:List
  // },
  // {
  //   path:'/detail',
  //   component:Detail
  // },
  {
    path: "/",
    redirect: "/home"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
