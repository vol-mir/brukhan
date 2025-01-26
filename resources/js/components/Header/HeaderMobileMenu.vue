<script>
    import { onBeforeUnmount, onMounted, ref } from 'vue';
    import { useSidebarStore } from '@/stores/sidebarStore';
    import { getMenuItems } from '@/data/menuData';
    import MobileMenuItem from './MobileMenuItem.vue';

    export default {
        name: 'HeaderMobileMenu',
        components: {
            MobileMenuItem,
        },
        setup() {
            const sidebarStore = useSidebarStore();
            const mobileMenu = ref(null);
            const showLanguageDropdown = ref(false);
            const activeMenu = ref({});

            const toggleDropdown = () => {
                showLanguageDropdown.value = !showLanguageDropdown.value;
            };

            const toggleSubMenu = (path, event) => {
                event.stopPropagation();

                if (path && Array.isArray(path)) {
                    const fullPath = path.join('/');

                    if (
                        event.target.classList.contains('toggle-menu-link') ||
                        event.target.classList.contains('menu-toggle')
                    ) {
                        if (!(fullPath in activeMenu.value)) {
                            activeMenu.value[fullPath] = true;
                        } else {
                            activeMenu.value[fullPath] =
                                !activeMenu.value[fullPath];
                        }

                        console.log(activeMenu.value);

                        event.preventDefault();
                    }
                }
            };

            const isSubMenuVisible = (path) => {
                const fullPath = path.join('/');
                return !!activeMenu.value[fullPath];
            };

            const handleClickOutside = (event) => {
                if (!event.target.closest('.header-top-lan')) {
                    showLanguageDropdown.value = false;
                }

                if (!event.target.closest('#ec-mobile-menu')) {
                    activeMenu.value = {};
                }
            };

            const closeMenu = (event) => {
                if (sidebarStore.isMobileMenuOpened) {
                    sidebarStore.resetMobileMenuOpened();
                    return;
                }

                if (
                    sidebarStore.isMobileMenuOpen &&
                    mobileMenu.value &&
                    !mobileMenu.value.contains(event.target)
                ) {
                    sidebarStore.closeMobileMenu();
                }
            };

            onMounted(() => {
                document.addEventListener('click', closeMenu);
                document.addEventListener('click', handleClickOutside);
            });

            onBeforeUnmount(() => {
                document.removeEventListener('click', closeMenu);
                document.removeEventListener('click', handleClickOutside);
            });

            const menuItems = ref(getMenuItems());

            return {
                sidebarStore,
                mobileMenu,
                closeMenu,
                showLanguageDropdown,
                toggleDropdown,
                toggleSubMenu,
                isSubMenuVisible,
                activeMenu,
                menuItems,
            };
        },
    };
</script>

<template>
    <!-- Mobile Menu Start -->
    <div
        id="ec-mobile-menu"
        class="ec-side-cart ec-mobile-menu"
        :class="{ 'ec-open': sidebarStore.isMobileMenuOpen }"
        ref="mobileMenu"
    >
        <div class="ec-menu-title">
            <span class="menu_title">My Menu</span>
            <button class="ec-close" @click="sidebarStore.closeMobileMenu">
                ×
            </button>
        </div>
        <div class="ec-menu-inner">
            <div class="ec-menu-content">
                <ul>
                    <MobileMenuItem
                        v-for="(item, index) in menuItems"
                        :key="index"
                        :item="item"
                        :is-sub-menu-visible="isSubMenuVisible"
                        :toggle-sub-menu="toggleSubMenu"
                    />
                </ul>
            </div>
            <div class="header-res-lan-curr">
                <div class="header-top-lan-curr">
                    <!-- Language Start -->
                    <div class="header-top-lan dropdown">
                        <button
                            class="dropdown-toggle text-upper"
                            @click="toggleDropdown"
                            aria-haspopup="true"
                            :aria-expanded="showLanguageDropdown"
                        >
                            Language
                            <i
                                class="ecicon eci-caret-down"
                                aria-hidden="true"
                            ></i>
                        </button>
                        <transition name="slide-fade">
                            <ul
                                v-if="showLanguageDropdown"
                                class="dropdown-menu"
                                ref="dropdownMenu"
                            >
                                <li class="active">
                                    <a class="dropdown-item" href="#">
                                        Russian
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        English
                                    </a>
                                </li>
                            </ul>
                        </transition>
                    </div>
                    <!-- Language End -->
                </div>
                <!-- Social Start -->
                <div class="header-res-social">
                    <div class="header-top-social">
                        <ul class="mb-0">
                            <li class="list-inline-item">
                                <a class="hdr-facebook" href="#">
                                    <i class="ecicon eci-facebook"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="hdr-twitter" href="#">
                                    <i class="ecicon eci-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="hdr-instagram" href="#">
                                    <i class="ecicon eci-instagram"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="hdr-linkedin" href="#">
                                    <i class="ecicon eci-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Social End -->
            </div>
        </div>
    </div>
    <!-- Mobile Menu End -->
</template>

<style scoped>
    .dropdown-menu {
        transform-origin: top;
        display: block;
    }

    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }

    .slide-fade-enter-from {
        opacity: 0;
        transform: translateY(100%);
    }

    .slide-fade-enter-to {
        opacity: 1;
        transform: translateY(0);
    }

    .slide-fade-leave-from {
        opacity: 1;
        transform: translateY(0);
    }

    .slide-fade-leave-to {
        opacity: 0;
        transform: translateY(100%);
    }
</style>
