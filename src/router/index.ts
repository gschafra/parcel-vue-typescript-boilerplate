import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Ecosystem from "../views/ecosystem.vue";
import Essential from "../views/essential.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/essential",
    name: "essential",
    component: Essential
  },
  {
    path: "/ecosystem",
    name: "ecosystem",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //  import(/* webpackChunkName: "about" */ "../views/About.vue")
	component: Ecosystem
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
