import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { ZiggyVue } from 'ziggy-js';
import { Ziggy } from './ziggy.js';
import AOS from 'aos';
import 'animate.css';
import Layout from './Layout.vue';

import ru from '@/locales/ru.js';
import en from '@/locales/en.js';

const defaultLocale = localStorage.getItem('locale') || 'ru';

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages: { ru, en },
});

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => {
            const pages = import.meta.glob('./pages/**/*.vue', { eager: true });
            const page = pages[`./pages/${name}.vue`];

            page.default.layout = page.default.layout || Layout;

            return page;
        },
        setup({ App, props, plugin }) {
            const app = createSSRApp({
                render: () => h(App, props),
            });

            const pinia = createPinia();
            app.use(pinia);

            app.use(ZiggyVue, Ziggy);

            app.use(i18n);
            app.use(plugin);

            AOS.init({
                duration: 1500,
                easing: 'ease-in-out',
                once: true,
            });

            return app;
        },
    })
);
