import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        isMobileMenuOpen: false,
        isMobileMenuOpened: false,
    }),

    actions: {
        toggleMobileMenu() {
            this.isMobileMenuOpened = !this.$state.isMobileMenuOpen;
            this.isMobileMenuOpen = !this.$state.isMobileMenuOpen;
        },
        openMobileMenu() {
            this.isMobileMenuOpen = true;
            this.isMobileMenuOpened = true;
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
        },
        resetMobileMenuOpened() {
            this.isMobileMenuOpened = false;
        },
    },
});
