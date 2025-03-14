import LeftSideBar from "@/layouts/leftSideBar/leftSideBar.vue";

const projetos = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/homePage/index.vue")
  },
  {
    path: '/menurestaurante',
    name: 'RestaurantMenu',
    component: () => import("@/views/restaurantMenu/index.vue")
  },
  {
    path: '/projeto2',
    name: 'Projeto 2',
    component: () => import("@/views/projeto2/index.vue"),
  },
]

export const myRoutes = [
  ...projetos
]
