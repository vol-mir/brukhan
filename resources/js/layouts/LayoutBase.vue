<template>
    <InertiaHead>
        <title>{{ page?.title }}</title>
        <meta name="description" :content="page?.description" />
        <meta name="keywords" :content="page?.keywords" />
        <meta name="country" content="RU" />
        <meta name="author" content="Брухан Юрий Игоревич" />
        <meta name="copyright" content="Brukhan Import" />
        <meta name="theme-color" content="#23aa08" />

        <!-- Favicons Icon -->
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </InertiaHead>
    <AppLoader :loading="loading" />
    <AppHeader />
    <SideOverlay />

    <slot />

    <AppFooter />
    <ScrollUp />
</template>

<script>
    import AppLoader from '@/components/AppLoader.vue';
    import AppHeader from '@/components/Header/AppHeader.vue';
    import SideOverlay from '@/components/SideOverlay.vue';
    import AppFooter from '@/components/AppFooter.vue';
    import ScrollUp from '@/components/ScrollUp.vue';
    import { Head as InertiaHead, router } from '@inertiajs/vue3';

    export default {
        components: {
            InertiaHead,
            AppLoader,
            AppHeader,
            SideOverlay,
            AppFooter,
            ScrollUp,
        },
        props: {
            page: {
                type: Object,
                default: () => null,
            },
        },
        data() {
            return {
                loading: true,
            };
        },
        created() {
            router.on('start', () => {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }

                this.loading = true;
            });
            router.on('finish', () => {
                this.timer = setTimeout(() => {
                    this.loading = false;
                    this.timer = null;
                }, 150);
            });
        },
        mounted() {
            setTimeout(() => {
                this.loading = false;
            }, 100);
        },
        beforeUnmount() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },
        watch: {
            $route() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
        },
    };
</script>

<style>
    body {
        scroll-behavior: smooth;
    }
</style>
