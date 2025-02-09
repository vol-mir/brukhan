<script>
    import { getImagePath } from '@/utils/imageHelper';
    import { useSidebarStore } from '@/stores/sidebarStore';
    import { useSiteInfoStore } from '@/stores/siteInfoStore';
    import { onMounted, ref, onBeforeUnmount } from 'vue';
    import { useI18n } from 'vue-i18n';

    export default {
        name: 'HeaderTop',
        setup() {
            const sidebarStore = useSidebarStore();
            const siteInfoStore = useSiteInfoStore();
            const showLanguageDropdown = ref(false);
            const dropdownRef = ref(null);
            const buttonRef = ref(null);

            const getIconPath = (name) => getImagePath('icons', name);

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

            onMounted(async () => {
                await siteInfoStore.fetchSiteInfo();
                document.addEventListener('click', handleClickOutside);
            });

            const handleClickOutside = (event) => {
                if (
                    dropdownRef.value &&
                    !dropdownRef.value.contains(event.target) &&
                    buttonRef.value &&
                    !buttonRef.value.contains(event.target)
                ) {
                    showLanguageDropdown.value = false;
                }
            };

            onBeforeUnmount(() => {
                // Убираем глобальный обработчик при размонтировании компонента
                document.removeEventListener('click', handleClickOutside);
            });

            return {
                sidebarStore,
                getIconPath,
                showLanguageDropdown,
                toggleDropdown,
                changeLanguage,
                locale,
                siteInfoStore,
                dropdownRef,
                buttonRef,
            };
        },
    };
</script>

<template>
    <!-- Header Top Start -->
    <div class="header-top">
        <div class="container">
            <div class="row align-items-center">
                <!-- Header Top Social Start -->
                <div class="col text-left header-top-left d-none d-lg-block">
                    <div class="header-top-social">
                        <span class="social-text text-upper">
                            {{ $t('follow_us_on') }}:
                        </span>
                        <ul v-if="siteInfoStore.social_networks" class="mb-0">
                            <li
                                v-for="network in siteInfoStore.social_networks"
                                :key="network.slug"
                                class="list-inline-item"
                            >
                                <a
                                    :href="network.url"
                                    :aria-label="network.name"
                                    :class="'hdr-' + network.slug.toLowerCase()"
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
                <!-- Header Top Social End -->

                <!-- Header Top Language Currency -->
                <div class="col header-top-right d-none d-lg-block">
                    <div class="header-top-lan-curr d-flex justify-content-end">
                        <div class="header-top-lan dropdown">
                            <button
                                ref="buttonRef"
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
                            <transition name="fade" mode="out-in" appear>
                                <ul
                                    ref="dropdownRef"
                                    v-if="showLanguageDropdown"
                                    class="dropdown-menu"
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
                    </div>
                </div>
                <!-- Header Top Language Currency End -->

                <!-- Header Top Responsive Action -->
                <div class="col d-lg-none">
                    <div class="ec-header-bottons">
                        <a
                            href="javascript:void(0)"
                            class="ec-header-btn ec-sidebar-toggle"
                        >
                            <img
                                :src="getIconPath('category-icon.svg')"
                                class="svg_img header_svg"
                                alt="Category icon"
                                loading="lazy"
                            />
                        </a>

                        <a
                            href="javascript:void(0)"
                            @click="sidebarStore.toggleMobileMenu"
                            class="ec-header-btn ec-side-toggle d-lg-none"
                        >
                            <img
                                :src="getIconPath('menu.svg')"
                                class="svg_img header_svg"
                                alt="Menu icon"
                                loading="lazy"
                            />
                        </a>
                    </div>
                </div>
                <!-- Header Top Responsive Action End -->
            </div>
        </div>
    </div>
    <!-- Header Top End -->
</template>

<style scoped>
    .dropdown-menu {
        display: block;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-to,
    .fade-leave-from {
        opacity: 1;
    }
</style>
