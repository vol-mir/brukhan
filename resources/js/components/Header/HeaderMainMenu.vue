<script>
    import { getImagePath } from '@/utils/imageHelper';
    import { useSiteInfoStore } from '@/stores/siteInfoStore';
    import { getMenuItems } from '@/data/menuData';
    import MenuItem from './MenuItem.vue';
    import { watch, computed, ref, onMounted, onUnmounted, inject } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { usePage } from '@inertiajs/vue3';

    export default {
        name: 'HeaderMainMenu',
        components: {
            MenuItem,
        },
        setup() {
            const { t } = useI18n();
            const siteInfoStore = useSiteInfoStore();
            const route = inject('route');

            const isHomePage = ref(false);
            const currentPageUrl = ref(null);

            const getPageData = () => {
                try {
                    const page = usePage();
                    return page || {};
                } catch {
                    return {};
                }
            };

            const normalizeUrl = (url) => {
                if (!url) return '';
                const parsed = new URL(url, window.location.origin);
                return parsed.origin + parsed.pathname.replace(/\/$/, '');
            };

            const categories = ref([]);
            const menuItems = computed(() => getMenuItems(t, categories.value));

            const isScrollingDown = ref(false);
            const isScrolledToTop = ref(true);
            let lastScrollTop = 0;

            const checkIfHomePage = () => {
                const homeRoute = normalizeUrl(route('home'));
                const currentUrl = normalizeUrl(
                    currentPageUrl.value || window.location.href
                );
                isHomePage.value = currentUrl === homeRoute;
            };

            const onScroll = () => {
                const scrollTop =
                    window.scrollY || document.documentElement.scrollTop;

                isScrollingDown.value = scrollTop > lastScrollTop;

                isScrolledToTop.value = scrollTop === 0;

                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            };

            onMounted(async () => {
                window.addEventListener('scroll', onScroll);

                const page = getPageData();
                currentPageUrl.value = page?.url || window.location.href;
                checkIfHomePage();

                await siteInfoStore.fetchSiteInfo();
                categories.value = siteInfoStore.categories ?? [];
            });

            onUnmounted(() => window.removeEventListener('scroll', onScroll));

            watch(
                () => getPageData().url,
                (newUrl) => {
                    currentPageUrl.value = newUrl;
                    checkIfHomePage();
                },
                { immediate: true }
            );

            return {
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
    <div
        id="ec-main-menu-desk"
        class="d-none d-lg-block sticky-nav"
        :class="{ menu_fixed: isScrollingDown || !isScrolledToTop }"
    >
        <div class="container position-relative">
            <div class="row">
                <div class="col-md-12 align-self-center">
                    <div class="ec-main-menu">
                        <ul>
                            <MenuItem
                                v-for="(item, index) in menuItems"
                                :key="index"
                                :item="item"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Menu End -->
</template>
