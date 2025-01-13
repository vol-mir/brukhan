<template>
    <AppLoader :loading="loading" />

    <AppHeader />
    <SideOverlay />
    <router-view v-slot="{ Component, route }">
        <div :key="route.name">
            <Component :is="Component" />
        </div>
    </router-view>
    <AppFooter />
    <ScrollUp />
</template>

<script>
    import AppLoader from './AppLoader.vue';
    import AppHeader from './Header/AppHeader.vue';
    import SideOverlay from './SideOverlay.vue';
    import AppFooter from './AppFooter.vue';
    import ScrollUp from './ScrollUp.vue';

    export default {
        name: 'App',
        components: {
            AppLoader,
            AppHeader,
            SideOverlay,
            AppFooter,
            ScrollUp,
        },
        data() {
            return {
                loading: true,
            };
        },
        mounted() {
            window.onload = () => {
                this.loading = false;
            };

            window.onerror = () => {
                this.loading = false;
            };
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
