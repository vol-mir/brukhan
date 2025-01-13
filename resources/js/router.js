import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/HomePage.vue'),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('./pages/ContactsPage.vue'),
    },
    {
        path: '/faq',
        name: 'faq',
        component: () => import('./pages/FaqPage.vue'),
    },
    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: () => import('./pages/PrivacyPolicyPage.vue'),
    },
    {
        path: '/terms-condition',
        name: 'terms-condition',
        component: () => import('./pages/TermsConditionPage.vue'),
    },
    {
        path: '/track-order',
        name: 'track-order',
        component: () => import('./pages/TrackOrderPage.vue'),
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import('./pages/AboutUsPage.vue'),
    },
    {
        path: '/',
        name: '#',
        component: () => import('./pages/HomePage.vue'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
