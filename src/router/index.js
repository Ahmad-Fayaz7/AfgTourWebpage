import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import BadakhshanTour from "../pages/BadakhshanTour.vue";
import BamyanTour from "../pages/BamyanTour.vue";
import PanjshirTour from "../pages/PanjshirTour.vue";
import KabulTour from "../pages/KabulTour.vue";
import HeratTour from "../pages/HeratTour.vue";
import MazarTour from "../pages/MazarTour.vue";
import ContactForm from "../pages/ContactForm.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/BadakhshanTour.vue",
    component: BadakhshanTour,
  },
  {
    path: "/BamyanTour.vue",
    component: BamyanTour,
  },
  {
    path: "/PanjshirTour.vue",
    component: PanjshirTour,
  },
  {
    path: "/KabulTour.vue",
    component: KabulTour,
  },
  {
    path: "/HeratTour.vue",
    component: HeratTour,
  },
  {
    path: "/MazarTour.vue",
    component: MazarTour,
  },
  {
    path: "/ContactForm.vue",
    component: ContactForm,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
