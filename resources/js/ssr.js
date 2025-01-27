import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';
import { createPinia } from 'pinia';
import AOS from 'aos';
import 'animate.css';
import Layout from './Layout.vue';

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
