import { createRouter, createWebHistory } from "vue-router";
import StartPage from "@/views/StartPage.vue";
import NamePage from "@/views/NamePage.vue";
import CharactersPage from "@/views/CharactersPage.vue";

const routes = [
  {
    path: "/",
    name: "Start Page",
    component: StartPage,
  },
  {
    path: "/name",
    name: "Name Page",
    component: NamePage,
  },
  {
    path: "/characters",
    name: "Characters Page",
    component: CharactersPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
