import { createRouter, createWebHistory } from "vue-router";
import StartPage from "../views/StartPage.vue";

const routes = [
  {
    path: "/",
    name: "Start Page",
    component: StartPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
