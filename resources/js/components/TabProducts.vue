<script>
    import { getImagePath } from '@/utils/imageHelper';
    import ProductInner from '@/components/ProductInner.vue';

    export default {
        name: 'TabProducts',
        components: {
            ProductInner,
        },
        setup() {
            return {
                getImagePath,
            };
        },
        data() {
            return {
                activeTab: 'tab-pro-for-all',
                tabs: [
                    {
                        id: 'tab-pro-for-all',
                        label: 'For All',
                        href: '#tab-pro-for-all',
                    },
                    {
                        id: 'tab-pro-for-men',
                        label: 'For Men',
                        href: '#tab-pro-for-men',
                    },
                    {
                        id: 'tab-pro-for-women',
                        label: 'For Women',
                        href: '#tab-pro-for-women',
                    },
                    {
                        id: 'tab-pro-for-child',
                        label: 'For Children',
                        href: '#tab-pro-for-child',
                    },
                ],
            };
        },
        methods: {
            setActiveTab(tabId) {
                this.activeTab = tabId;
            },
        },
    };
</script>

<template>
    <!-- Product tab Area Start -->
    <section class="section ec-product-tab section-space-p" id="top-products">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h2 class="ec-bg-title">Our Top Collection</h2>
                        <h2 class="ec-title">Our Top Collection</h2>
                        <p class="sub-title">
                            Browse The Collection of Top Products
                        </p>
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
                        <!-- 1st Product tab start -->
                        <div
                            :class="[
                                'tab-pane',
                                'fade',
                                {
                                    'show active':
                                        activeTab === 'tab-pro-for-all',
                                },
                            ]"
                            id="tab-pro-for-all"
                        >
                            <div class="row">
                                <!-- Product Content -->
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '6_1.jpg',
                                            imageHover: '6_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '7_1.jpg',
                                            imageHover: '7_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '1_1.jpg',
                                            imageHover: '1_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '2_1.jpg',
                                            imageHover: '2_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '3_1.jpg',
                                            imageHover: '3_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '4_1.jpg',
                                            imageHover: '4_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '5_1.jpg',
                                            imageHover: '5_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '8_1.jpg',
                                            imageHover: '8_2.jpg',
                                        }"
                                    />
                                </div>

                                <div class="col-sm-12 shop-all-btn">
                                    <a href="#">Shop All Collection</a>
                                </div>
                            </div>
                        </div>
                        <!-- 1st Product tab end -->
                        <!-- 2st Product tab start -->
                        <div
                            :class="[
                                'tab-pane',
                                'fade',
                                {
                                    'show active':
                                        activeTab === 'tab-pro-for-men',
                                },
                            ]"
                            id="tab-pro-for-men"
                        >
                            <div class="row">
                                <!-- Product Content -->
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '6_1.jpg',
                                            imageHover: '6_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '7_1.jpg',
                                            imageHover: '7_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '1_1.jpg',
                                            imageHover: '1_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '2_1.jpg',
                                            imageHover: '2_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '3_1.jpg',
                                            imageHover: '3_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '4_1.jpg',
                                            imageHover: '4_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '5_1.jpg',
                                            imageHover: '5_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '8_1.jpg',
                                            imageHover: '8_2.jpg',
                                        }"
                                    />
                                </div>

                                <div class="col-sm-12 shop-all-btn">
                                    <a href="#">Shop All Collection</a>
                                </div>
                            </div>
                        </div>
                        <!-- 2st Product tab end -->
                        <!-- 3st Product tab start -->
                        <div
                            :class="[
                                'tab-pane',
                                'fade',
                                {
                                    'show active':
                                        activeTab === 'tab-pro-for-women',
                                },
                            ]"
                            id="tab-pro-for-women"
                        >
                            <div class="row">
                                <!-- Product Content -->
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '6_1.jpg',
                                            imageHover: '6_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '7_1.jpg',
                                            imageHover: '7_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '1_1.jpg',
                                            imageHover: '1_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '2_1.jpg',
                                            imageHover: '2_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '3_1.jpg',
                                            imageHover: '3_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '4_1.jpg',
                                            imageHover: '4_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '5_1.jpg',
                                            imageHover: '5_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '8_1.jpg',
                                            imageHover: '8_2.jpg',
                                        }"
                                    />
                                </div>

                                <div class="col-sm-12 shop-all-btn">
                                    <a href="#">Shop All Collection</a>
                                </div>
                            </div>
                        </div>
                        <!-- 3st Product tab end -->
                        <!-- 4st Product tab start -->
                        <div
                            :class="[
                                'tab-pane',
                                'fade',
                                {
                                    'show active':
                                        activeTab === 'tab-pro-for-child',
                                },
                            ]"
                            id="tab-pro-for-child"
                        >
                            <div class="row">
                                <!-- Product Content -->
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '6_1.jpg',
                                            imageHover: '6_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '7_1.jpg',
                                            imageHover: '7_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '1_1.jpg',
                                            imageHover: '1_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '2_1.jpg',
                                            imageHover: '2_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '3_1.jpg',
                                            imageHover: '3_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '4_1.jpg',
                                            imageHover: '4_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '5_1.jpg',
                                            imageHover: '5_2.jpg',
                                        }"
                                    />
                                </div>
                                <div
                                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                                    data-aos="fade"
                                >
                                    <ProductInner
                                        :product="{
                                            name: 'Classic Leather Purse',
                                            imageMain: '8_1.jpg',
                                            imageHover: '8_2.jpg',
                                        }"
                                    />
                                </div>

                                <div class="col-sm-12 shop-all-btn">
                                    <a href="#">Shop All Collection</a>
                                </div>
                            </div>
                        </div>
                        <!-- 4st Product tab end -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product tab Area End -->
</template>
