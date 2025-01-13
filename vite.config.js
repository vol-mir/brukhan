import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/scss/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js/'),
        },
    },
    css: {
        sourcemap: true,
        postcss: './postcss.config.js',
    },
    server: {
        port: 5173,
        hmr: {
            host: 'localhost',
            port: 5173,
        },
    }
});
