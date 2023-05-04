import MainLayout from "../layouts/MainLayout.vue";
import HomeView from "../views/HomeView.vue";
export default [
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "HomeView",
        component: HomeView,
      },
      {
        path: "/about",
        name: "AboutView",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
];
