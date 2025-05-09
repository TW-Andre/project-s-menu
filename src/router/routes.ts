import { Default, AuthLayout } from "@/layouts/index";

const user = [
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/account/SignUp.vue"),
    meta: { title: 'Login', requiresAuth: false }
  },
].map((data) => {
  return {
    ...data,
    meta: { ...data.meta, layout: AuthLayout }
  };
});

const home = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/homePage/index.vue"),
    meta: { title: 'Home', requiresAuth: true, layout: Default }
  },
].map((data) => {
  return {
    ...data,
    meta: { ...data.meta, layout: Default }
  };
});

const projetos = [
  {
    path: '/projetos/menurestaurante',
    name: 'RestaurantMenu',
    component: () => import("@/views/projects/restaurantMenu/index.vue"),
    meta: { title: 'Menu de Restaurante', requiresAuth: true, layout: Default }
  },
  {
    path: '/projetos/projeto2',
    name: 'Projeto 2',
    component: () => import("@/views/projects/projeto2/index.vue"),
    meta: { title: 'Projeto 2', requiresAuth: true, layout: Default }
  },
];
const curiosidades = [
  {
    path: '/curiosidades/sobremim',
    name: 'AboutMe',
    component: () => import("@/views/curiosities/aboutMe/index.vue"),
    meta: { title: 'Sobre mim', requiresAuth: true, layout: Default }
  },
  {
    path: '/curiosidades/ferramentas',
    name: 'Curiosidades',
    component: () => import("@/views/curiosities/tools/index.vue"),
    meta: { title: 'Ferramentas', requiresAuth: true, layout: Default }
  },
];

export const myRoutes = [
    ...user,
    ...home,
    ...projetos,
    ...curiosidades
];
