import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// router.beforeEach(async (to, from, next) => {
//   await store.restored;
//   if (to.matched.some(record => record.meta.requiresAuth) && store.getters.isLoggedIn) {
//     return next({ name: "DashboardLayout" });
//   } else {
//     return next({ name: "Home" });
//   }
// });

export default router;
