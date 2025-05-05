<script>
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import { useImagePath } from '@/composables/useImagePath';
    import { useSiteInfo } from '@/composables/useSiteInfo';

    export default {
        name: 'TopCategories',
        components: {
            InertiaLink,
        },
        setup() {
            const { getImagePath } = useImagePath();
            const { siteInfoStore } = useSiteInfo();

            const defaultImage = getImagePath('common', 'default-category.jpg');

            return {
                defaultImage,
                siteInfoStore,
            };
        },
        data() {
            return {
                activeTab: '',
            };
        },
        computed: {
            topCategories() {
                return this.siteInfoStore.top_categories || [];
            },
        },
        methods: {
            setActiveTab(tabId) {
                this.activeTab = tabId;
            },
            isActive(category, index) {
                const id = `tab-cat-${category.slug}`;
                return (
                    this.activeTab === id ||
                    (this.activeTab === '' && index === 0)
                );
            },
        },
    };
</script>

<template>
    <!--  Category Section Start -->
    <section
        class="section ec-category-section section-space-p"
        id="categories"
    >
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h2 class="ec-bg-title">
                            {{ $t('our_top_collection') }}
                        </h2>
                        <h2 class="ec-title">{{ $t('top_categories') }}</h2>
                        <p class="sub-title">
                            {{ $t('browse_top_categories') }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <!--Category Nav Start -->
                <div class="col-lg-3">
                    <ul class="ec-cat-tab-nav nav">
                        <li
                            v-for="(category, index) in topCategories"
                            :key="category.slug"
                            class="cat-item"
                        >
                            <a
                                :class="[
                                    'cat-link',
                                    { active: isActive(category, index) },
                                ]"
                                @click.prevent="
                                    setActiveTab(`tab-cat-${category.slug}`)
                                "
                                data-bs-toggle="tab"
                                :href="`#tab-cat-${category.slug}`"
                            >
                                <div class="cat-desc">
                                    <span>{{ category.name }}</span>
                                    <span>
                                        {{ category.product_count }}
                                        {{ $t('products') }}
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Category Nav End -->
                <!--Category Tab Start -->
                <div class="col-lg-9">
                    <div class="tab-content">
                        <div
                            v-for="(category, index) in topCategories"
                            :key="category.slug"
                            :class="[
                                'tab-pane',
                                'fade',
                                { 'show active': isActive(category, index) },
                            ]"
                            :id="`tab-cat-${category.slug}`"
                        >
                            <div class="row">
                                <img
                                    class="img-top-category"
                                    :src="category.image || defaultImage"
                                    :alt="category.name"
                                    loading="lazy"
                                />
                            </div>
                            <span class="panel-overlay">
                                <InertiaLink
                                    :href="
                                        route(category.link, {
                                            slug: category.slug,
                                        })
                                    "
                                    class="btn btn-primary"
                                >
                                    {{ $t('view_all') }}
                                </InertiaLink>
                            </span>
                        </div>
                    </div>
                    <!-- Category Tab End -->
                </div>
            </div>
        </div>
    </section>
    <!-- Category Section End -->
</template>
