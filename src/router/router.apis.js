import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../movies/MoviesApi.vue'),
  },
  {
    path: '/movie/:id',
    name: 'movie-details',
    component: () => import('../movies/components/MovieDetails.vue'),
  },
  {
    path: '/phone',
    name: 'phone',
    component: () => import('../phone/PhoneApi.vue'),
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../posts/PostsApi.vue'),
  },
  {
    path: '/tv',
    name: 'tv',
    component: () => import('../tv/TvApi.vue'),
  },
  {
    path: '/tv/:id',
    name: 'tv-details',
    component: () => import('../tv/components/TvDetails.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
