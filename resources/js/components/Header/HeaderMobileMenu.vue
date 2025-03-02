<script>
    import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
    import { useSiteInfoStore } from '@/stores/siteInfoStore';
    import { useSidebarStore } from '@/stores/sidebarStore';
    import { getMenuItems } from '@/data/menuData';
    import MobileMenuItem from './MobileMenuItem.vue';
    import { useI18n } from 'vue-i18n';

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
            const siteInfoStore = useSiteInfoStore();

            const toggleDropdown = () => {
                showLanguageDropdown.value = !showLanguageDropdown.value;
            };

            const { locale } = useI18n();
            const activeLanguage = ref(locale.value);

            const changeLanguage = (lang) => {
                if (activeLanguage.value !== lang) {
                    activeLanguage.value = lang;
                    localStorage.setItem('locale', lang);
                    locale.value = lang;
                }
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

            onMounted(async () => {
                document.addEventListener('click', closeMenu);
                document.addEventListener('click', handleClickOutside);

                await siteInfoStore.fetchSiteInfo();
                categories.value = siteInfoStore.categories ?? [];
            });

            onBeforeUnmount(() => {
                document.removeEventListener('click', closeMenu);
                document.removeEventListener('click', handleClickOutside);
            });

            const { t } = useI18n();

            const categories = ref([]);
            const menuItems = computed(() => getMenuItems(t, categories.value));

            return {
                sidebarStore,
                mobileMenu,
                closeMenu,
                showLanguageDropdown,
                toggleDropdown,
                changeLanguage,
                locale,
                toggleSubMenu,
                isSubMenuVisible,
                activeMenu,
                menuItems,
                siteInfoStore,
            };
        },
    };
</script>

<template>
    <!-- Mobile Menu Start -->
    <div
        id="ec-mobile-menu"
        class="ec-side-cart ec-mobile-menu"
        :class="{ 'ec-open': sidebarStore.isMobileMenuOpen ?? false }"
        ref="mobileMenu"
    >
        <div class="ec-menu-title">
            <span class="menu_title">Bruknan</span>
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
                            {{ $t('language') }}
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
                                <li
                                    :class="{
                                        active: activeLanguage === 'ru',
                                    }"
                                >
                                    <a
                                        class="dropdown-item"
                                        href="#"
                                        @click="changeLanguage('ru')"
                                    >
                                        {{ $t('locale.russian') }}
                                    </a>
                                </li>
                                <li
                                    :class="{
                                        active: activeLanguage === 'en',
                                    }"
                                >
                                    <a
                                        class="dropdown-item"
                                        href="#"
                                        @click="changeLanguage('en')"
                                    >
                                        {{ $t('locale.english') }}
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
                        <ul
                            v-if="
                                siteInfoStore && siteInfoStore.social_networks
                            "
                            class="mb-0"
                        >
                            <li
                                v-for="network in siteInfoStore.social_networks ||
                                []"
                                :key="network.slug"
                                class="list-inline-item"
                            >
                                <a
                                    :class="'hdr-' + network.slug.toLowerCase()"
                                    :href="network.url"
                                    :aria-label="network.name"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        :class="'ecicon eci-' + network.slug"
                                    ></i>
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
