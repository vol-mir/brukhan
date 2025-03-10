<script>
    import { ref, onMounted } from 'vue';
    import ApiClient from '@/apiClient';
    import { getImagePath } from '@/utils/imageHelper';
    import ProductInner from '@/components/ProductInner.vue';

    export default {
        name: 'TabProducts',
        components: {
            ProductInner,
        },
        setup() {
            const activeTab = ref(null);
            const productsByTags = ref([]);
            const loaded = ref(false);
            const tabs = ref([]);

            const fetchProductsByTags = async () => {
                try {
                    const response = await ApiClient.get(
                        '/api/v1/products/tags'
                    );
                    productsByTags.value = response.tag_groups || [];

                    tabs.value = productsByTags.value.map((tagGroup) => ({
                        id: `tab-${tagGroup.tag.slug}`,
                        label: tagGroup.tag.name,
                        href: `#tab-${tagGroup.tag.slug}`,
                        products: tagGroup.products,
                    }));

                    if (tabs.value.length > 0) {
                        activeTab.value = tabs.value[0].id;
                    }

                    loaded.value = true;
                } catch (error) {
                    console.error('Error fetching products tags:', error);
                }
            };

            onMounted(fetchProductsByTags);

            const setActiveTab = (tabId) => {
                activeTab.value = tabId;
            };

            return {
                getImagePath,
                activeTab,
                productsByTags,
                loaded,
                tabs,
                setActiveTab,
            };
        },
    };
</script>

<template>
    <!-- Product tab Area Start -->
    <section class="section ec-product-tab section-space-p" id="topProducts">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h2 class="ec-bg-title">
                            {{ $t('our_top_collection') }}
                        </h2>
                        <h2 class="ec-title">{{ $t('our_top_collection') }}</h2>
                        <p class="sub-title">{{ $t('browse_top_products') }}</p>
                    </div>
                </div>

                <!-- Tab Start -->
                <div class="col-md-12 text-center">
                    <ul class="ec-pro-tab-nav nav justify-content-center">
                        <li
                            class="nav-item"
                            v-for="(tab, index) in tabs"
                            :key="index"
                        >
                            <a
                                :class="[
                                    'nav-link',
                                    { active: activeTab === tab.id },
                                ]"
                                :href="tab.href"
                                @click.prevent="setActiveTab(tab.id)"
                                data-bs-toggle="tab"
                            >
                                {{ tab.label }}
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Tab End -->
            </div>

            <div class="row">
                <div class="col">
                    <div class="tab-content">
                        <div
                            v-for="(tab, index) in tabs"
                            :key="index"
                            :class="[
                                'tab-pane',
                                'fade',
                                {
                                    'show active': activeTab === tab.id,
                                },
                            ]"
                            :id="tab.href"
                        >
                            <div class="row">
                                <!-- Product Content -->
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                    v-for="product in tab.products"
                                    :key="product.slug"
                                >
                                    <ProductInner :product="product" />
                                </div>

                                <div class="col-sm-12 shop-all-btn">
                                    <a href="#">{{ $t('view_all') }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product tab Area End -->
</template>
