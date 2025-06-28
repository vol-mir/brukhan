<script>
    import { inject, onMounted, ref, watch, computed } from 'vue';
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/layouts/LayoutBase.vue';
    import { useBodyClass } from '@/composables/useBodyClass';
    import { useSiteInfo } from '@/composables/useSiteInfo';
    import ProductInner from '@/components/ProductInner.vue';
    import ApiClient from '@/apiClient';

    export default {
        name: 'Category',
        layout: Layout,
        components: {
            InertiaLink,
            ProductInner,
        },
        props: {
            category: {
                type: Object,
                required: true,
            },
        },
        setup(props) {
            useBodyClass('category_page');

            const { siteInfoStore } = useSiteInfo();

            const route = inject('route');
            const fullCategory = ref([]);
            const sortOption = ref('low_price');
            const pagination = ref({
                total: 0,
                per_page: 12,
                current_page: 1,
                last_page: 1,
            });
            const priceRange = ref({ min: '', max: '' });
            const popularTags = ref([]);
            const selectedTags = ref([]);

            const fetchFullCategory = async (
                slug,
                order = { field: 'price', direction: 'asc' },
                page = 1,
                range_price = { min: '', max: '' },
                tags = []
            ) => {
                if (!slug) return;

                try {
                    const data = await ApiClient.get(`/api/v1/products`, {
                        category: slug,
                        [`order[${order.field}]`]: order.direction,
                        page: page,
                        ...(range_price.min && { min_price: range_price.min }),
                        ...(range_price.max && { max_price: range_price.max }),
                        ...(tags.length && { tags: tags.join(',') }),
                    });

                    fullCategory.value = data.products;
                    pagination.value = data.pagination;
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            };

            const fetchPopularTags = async () => {
                try {
                    const data = await ApiClient.get(`/api/v1/popular-tags`);

                    popularTags.value = data.popular_tags;
                } catch (error) {
                    console.error('Error fetching popular tags:', error);
                }
            };

            onMounted(async () => {
                await siteInfoStore.fetchSiteInfo();

                if (props.category?.slug) {
                    await fetchFullCategory(props.category.slug);
                }

                await fetchPopularTags();
            });

            watch(
                priceRange,
                async () => {
                    if (props.category?.slug) {
                        await fetchFullCategory(
                            props.category.slug,
                            sortOrder.value,
                            pagination.value.current_page,
                            priceRange.value,
                            selectedTags.value
                        );
                    }
                },
                { deep: true }
            );

            const onSortChange = async () => {
                if (props.category?.slug) {
                    await fetchFullCategory(
                        props.category.slug,
                        sortOrder.value,
                        pagination.value.current_page,
                        priceRange.value,
                        selectedTags.value
                    );
                }
            };

            const startItem = computed(() => {
                return (
                    (pagination.value.current_page - 1) *
                        pagination.value.per_page +
                    1
                );
            });

            const endItem = computed(() => {
                return Math.min(
                    pagination.value.current_page * pagination.value.per_page,
                    pagination.value.total
                );
            });

            const pages = computed(() => {
                const totalPages = pagination.value.last_page;
                const currentPage = pagination.value.current_page;

                if (totalPages <= 7) {
                    return Array.from({ length: totalPages }, (_, i) => i + 1);
                }

                const visiblePages = [];
                const startPages = [1, 2, 3];
                const endPages = [totalPages - 2, totalPages - 1, totalPages];

                if (currentPage <= 4) {
                    visiblePages.push(...startPages, '...', ...endPages);
                } else if (currentPage >= totalPages - 3) {
                    visiblePages.push(...startPages, '...', ...endPages);
                } else {
                    visiblePages.push(
                        ...startPages,
                        '...',
                        currentPage,
                        '...',
                        ...endPages
                    );
                }

                return visiblePages;
            });

            const goToPage = async (page) => {
                if (page >= 1 && page <= pagination.value.last_page) {
                    pagination.value.current_page = page;
                    await fetchFullCategory(
                        props.category.slug,
                        sortOrder.value,
                        page
                    );
                }
            };

            const sortOrder = computed(() => {
                return {
                    field: 'price',
                    direction:
                        sortOption.value === 'low_price' ? 'asc' : 'desc',
                };
            });

            const onTagChange = async (tagSlug) => {
                if (selectedTags.value.includes(tagSlug)) {
                    selectedTags.value = selectedTags.value.filter(
                        (tag) => tag !== tagSlug
                    );
                } else {
                    selectedTags.value.push(tagSlug);
                }

                if (props.category?.slug) {
                    await fetchFullCategory(
                        props.category.slug,
                        sortOrder.value,
                        pagination.value.current_page,
                        priceRange.value,
                        selectedTags.value
                    );
                }
            };

            return {
                route,
                siteInfoStore,
                fullCategory,
                sortOption,
                onSortChange,
                pagination,
                startItem,
                endItem,
                pages,
                goToPage,
                priceRange,
                popularTags,
                selectedTags,
                onTagChange,
            };
        },
    };
</script>

<template>
    <!-- Breadcrumb start -->
    <div class="sticky-header-next-sec ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">
                                {{ category.name }}
                            </h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <!-- ec-breadcrumb-list start -->
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item">
                                    <InertiaLink :href="route('home')">
                                        {{ $t('menu.home') }}
                                    </InertiaLink>
                                </li>
                                <li class="ec-breadcrumb-item active">
                                    {{ $t('menu.shop') }}
                                </li>
                            </ul>
                            <!-- ec-breadcrumb-list end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb end -->

    <!-- Shop page start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div
                    class="ec-shop-rightside col-lg-9 col-md-12 order-lg-last order-md-first margin-b-30"
                >
                    <!-- Shop Top Start -->
                    <div class="ec-pro-list-top d-flex">
                        <div class="col-md-12 ec-sort-select">
                            <span class="sort-by">{{ $t('sort_by') }}</span>
                            <div class="ec-select-inner">
                                <select
                                    name="ec-select"
                                    id="ec-select"
                                    @change="onSortChange"
                                    v-model="sortOption"
                                >
                                    <option value="low_price">
                                        {{ $t('low_price') }}
                                    </option>
                                    <option value="high_price">
                                        {{ $t('high_price') }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- Shop Top End -->

                    <!-- Shop content Start -->
                    <div class="shop-pro-content">
                        <div class="shop-pro-inner">
                            <div class="row">
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content"
                                    v-for="product in fullCategory"
                                    :key="product.slug"
                                >
                                    <ProductInner :product="product" />
                                </div>

                                <div
                                    v-if="fullCategory.length === 0"
                                    class="col-12 text-center"
                                >
                                    <p class="no-products-found">
                                        {{ $t('products_not_found') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- Pagination Start -->
                        <div class="ec-pro-pagination" v-if="pages.length > 1">
                            <div class="ec-pro-pagination">
                                <ul class="ec-pro-pagination-inner">
                                    <li>
                                        <a
                                            class="next"
                                            href="#"
                                            :class="{
                                                disabled:
                                                    pagination.current_page ===
                                                    1,
                                            }"
                                            @click.prevent="
                                                pagination.current_page > 1 &&
                                                goToPage(
                                                    pagination.current_page - 1
                                                )
                                            "
                                        >
                                            <i
                                                class="ecicon eci-angle-left"
                                            ></i>
                                        </a>
                                    </li>

                                    <li v-for="page in pages" :key="page">
                                        <a
                                            v-if="page !== '...'"
                                            href="#"
                                            :class="{
                                                active:
                                                    page ===
                                                    pagination.current_page,
                                            }"
                                            @click.prevent="goToPage(page)"
                                        >
                                            {{ page }}
                                        </a>
                                        <span
                                            v-else
                                            class="pagination-ellipsis"
                                        >
                                            {{ page }}
                                        </span>
                                    </li>

                                    <li>
                                        <a
                                            class="next"
                                            href="#"
                                            :class="{
                                                disabled:
                                                    pagination.current_page ===
                                                    pagination.last_page,
                                            }"
                                            @click.prevent="
                                                pagination.current_page <
                                                    pagination.last_page &&
                                                goToPage(
                                                    pagination.current_page + 1
                                                )
                                            "
                                        >
                                            <i
                                                class="ecicon eci-angle-right"
                                            ></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Pagination End -->
                    </div>
                    <!--Shop content End -->
                </div>
                <!-- Sidebar Area Start -->
                <div
                    class="ec-shop-leftside col-lg-3 col-md-12 order-lg-first order-md-last"
                >
                    <div id="shop_sidebar">
                        <div class="ec-sidebar-heading">
                            <h1>{{ $t('filter_products_by') }}</h1>
                        </div>
                        <div class="ec-sidebar-wrap">
                            <!-- Sidebar Collection Block Start -->
                            <div class="ec-sidebar-block">
                                <div class="ec-sb-title">
                                    <h3 class="ec-sidebar-title">
                                        {{ $t('collections') }}
                                    </h3>
                                </div>
                                <div class="ec-sb-block-content">
                                    <ul>
                                        <li
                                            v-for="tag in popularTags"
                                            :key="tag.slug"
                                        >
                                            <div class="ec-sidebar-block-item">
                                                <input
                                                    type="checkbox"
                                                    :value="tag.slug"
                                                    :checked="
                                                        selectedTags.includes(
                                                            tag.slug
                                                        )
                                                    "
                                                    @change="
                                                        onTagChange(tag.slug)
                                                    "
                                                />
                                                <a href="#" @click.prevent>
                                                    {{ tag.name }}
                                                </a>
                                                <span class="checked"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Sidebar Collection Block End -->
                            <!-- Sidebar Price Block Start -->
                            <div class="ec-sidebar-block">
                                <div class="ec-sb-title">
                                    <h3 class="ec-sidebar-title">
                                        {{ $t('price') }}
                                    </h3>
                                </div>
                                <div
                                    class="ec-sb-block-content es-price-slider"
                                >
                                    <div class="ec-price-filter">
                                        <div
                                            id="ec-sliderPrice"
                                            class="filter__slider-price"
                                        ></div>
                                        <div class="ec-price-input">
                                            <label class="filter__label">
                                                <input
                                                    type="number"
                                                    v-model="priceRange.min"
                                                    class="filter__input"
                                                    placeholder="0"
                                                />
                                            </label>
                                            <span
                                                class="ec-price-divider"
                                            ></span>
                                            <label class="filter__label">
                                                <input
                                                    type="number"
                                                    v-model="priceRange.max"
                                                    class="filter__input"
                                                    placeholder="0"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Sidebar Price Block End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Shop page end-->
</template>
