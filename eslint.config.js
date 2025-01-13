import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config} */
export default [
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        files: ['**/*.{js,mjs,cjs,vue}'],
        ignores: ['node_modules/**'],
    },
    {
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            prettier: pluginPrettier,
            vue: pluginVue,
        },
        rules: {
            'prettier/prettier': ['error', { singleQuote: true, semi: true }],
            'vue/multi-word-component-names': 'off',
            'vue/require-toggle-inside-transition': 'off',
            'vue/order-in-components': ['error', {
                order: [
                    'el',
                    'name',
                    'parent',
                    'functional',
                    'delimiters',
                    'comments',
                    'components',
                    'directives',
                    'filters',
                    'extends',
                    'mixins',
                    'inheritAttrs',
                    'model',
                    'props',
                    'propsData',
                    'emits',
                    'setup',
                    'asyncData',
                    'data',
                    'beforeCreate',
                    'created',
                    'beforeMount',
                    'mounted',
                    'beforeUpdate',
                    'updated',
                    'activated',
                    'deactivated',
                    'beforeUnmount',
                    'unmounted',
                    'computed',
                    'methods',
                    'watch',
                    ['template', 'render'],
                    'renderError',
                ],
            }],
        },
    },
];
