<template>
    <AppLoader :loading="loading" />
    <SideOverlay />

    <slot />
</template>

<script>
    import AppLoader from '@/components/AppLoader.vue';
    import SideOverlay from '@/components/SideOverlay.vue';

    export default {
        components: {
            AppLoader,
            SideOverlay,
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
        mounted() {
            window.onload = () => {
                this.loading = false;
            };

            window.onerror = () => {
                this.loading = false;
            };
        },
    };
</script>
