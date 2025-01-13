<script>
    import { useSidebarStore } from '@/stores/sidebarStore';

    export default {
        name: 'SideOverlay',
        setup() {
            const sidebarStore = useSidebarStore();

            return {
                sidebarStore,
            };
        },
        computed: {
            overlayStyle() {
                return {
                    opacity: this.sidebarStore.isMobileMenuOpen ? 1 : 0,
                    pointerEvents: this.sidebarStore.isMobileMenuOpen
                        ? 'auto'
                        : 'none',
                };
            },
        },
    };
</script>

<template>
    <transition name="fade">
        <div class="ec-side-cart-overlay" :style="overlayStyle"></div>
    </transition>
</template>

<style scoped>
    .ec-side-cart-overlay {
        display: block;
        opacity: 0;
        pointer-events: none;
        transition:
            opacity 0.5s ease,
            pointer-events 0s 0.5s;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
