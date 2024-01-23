import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/onas',
            name: 'onas',
            component: () => import('../views/OnasView.vue'),
        },
        {
            path: '/galeria',
            name: 'galeria',
            component: () => import('../views/GaleriaView.vue'),
        },
        {
            path: '/kontakt',
            name: 'kontakt',
            component: () => import('../views/KontaktView.vue'),
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('../views/DetailView.vue'),
        },
        {
            path: '/kalkulacka',
            name: 'kalkulacka',
            component: () => import('../views/KalkulackaView.vue'),
        },
        
    ],
});

export default router;
