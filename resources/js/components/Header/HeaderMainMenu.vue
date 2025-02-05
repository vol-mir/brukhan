<script>
    import { getImagePath } from '@/utils/imageHelper';
    import { getMenuItems } from '@/data/menuData';
    import MenuItem from './MenuItem.vue';
    import { computed, ref, onMounted, onUnmounted } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { usePage } from "@inertiajs/inertia-vue3";

    export default {
        name: 'HeaderMainMenu',
        components: {
            MenuItem,
        },
        setup() {
            const { t } = useI18n();

            const getIconPath = (name) => getImagePath('icons', name);
            const getMenuBannerPath = (name) =>
                getImagePath('menu-banner', name);

            const menuItems = computed(() => getMenuItems(t));

            const isScrollingDown = ref(false);
            const isScrolledToTop = ref(true);
            let lastScrollTop = 0;

            const onScroll = () => {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;

                isScrollingDown.value = scrollTop > lastScrollTop;

                isScrolledToTop.value = scrollTop === 0;

                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            };

            const isHomePage = ref(false);
            const { url } = usePage();

            onMounted(() => {
                window.addEventListener("scroll", onScroll);
                console.log(url);
                isHomePage.value = url === "/";
            });

            onUnmounted(() => window.removeEventListener("scroll", onScroll));

            return {
                getIconPath,
                getMenuBannerPath,
                menuItems,
                isScrollingDown,
                isScrolledToTop,
                isHomePage,
            };
        },
    };
</script>

<template>
    <!-- Main Menu Start -->
    <div id="ec-main-menu-desk" class="d-none d-lg-block sticky-nav" :class="{ menu_fixed: isScrollingDown || !isScrolledToTop}">
        <div class="container position-relative">
            <div class="row">
                <div class="col-md-12 align-self-center">
                    <div class="ec-main-menu">
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
                        <ul>
                            <MenuItem
                                v-for="(item, index) in menuItems"
                                :key="index"
                                :item="item"
                            />
                            <li class="dropdown scroll-to" v-if="isHomePage">
                                <a href="javascript:void(0)">
                                    <img
                                        :src="getIconPath('scroll.svg')"
                                        class="svg_img header_svg scroll"
                                        alt="scroll"
                                        loading="lazy"
                                    />
                                </a>
                                <ul class="sub-menu">
                                    <li class="menu_title">
                                        {{ $t('scroll_to_section') }}
                                    </li>
                                    <li>
                                        <a
                                            href="#top-products"
                                            class="nav-scroll"
                                        >
                                            {{ $t('menu.top_products') }}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#categories"
                                            class="nav-scroll"
                                        >
                                            {{ $t('menu.categories') }}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#services"
                                            class="nav-scroll"
                                        >
                                            {{ $t('menu.services') }}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#arrivals"
                                            class="nav-scroll"
                                        >
                                            {{  $t('menu.arrivals') }}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Menu End -->
</template>
