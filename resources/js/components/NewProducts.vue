<script>
    import { getImagePath } from '@/utils/imageHelper';
    import ProductInner from '@/components/ProductInner.vue';

    export default {
        name: 'NewProducts',
        components: {
            ProductInner,
        },
        setup() {
            return {
                getImagePath,
            };
        },
    };
</script>

<template>
    <!-- New Product Start -->
    <section class="section ec-new-product section-space-p" id="arrivals">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h2 class="ec-bg-title">New Arrivals</h2>
                        <h2 class="ec-title">New Arrivals</h2>
                        <p class="sub-title">
                            Browse The Collection of Top Products
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- New Product Content -->
                <div
                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                    data-aos="flip-left"
                >
                    <ProductInner
                        :product="{
                            name: 'Classic Leather Purse',
                            imageMain: '11_1.jpg',
                            imageHover: '11_2.jpg',
                        }"
                    />
                </div>
                <div
                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                    data-aos="flip-left"
                >
                    <ProductInner
                        :product="{
                            name: 'Classic Leather Purse',
                            imageMain: '11_1.jpg',
                            imageHover: '11_2.jpg',
                        }"
                    />
                </div>
                <div
                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                    data-aos="flip-left"
                >
                    <ProductInner
                        :product="{
                            name: 'Classic Leather Purse',
                            imageMain: '12_1.jpg',
                            imageHover: '12_2.jpg',
                        }"
                    />
                </div>
                <div
                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                    data-aos="flip-left"
                >
                    <ProductInner
                        :product="{
                            name: 'Classic Leather Purse',
                            imageMain: '13_1.jpg',
                            imageHover: '13_2.jpg',
                        }"
                    />
                </div>
                <div class="col-sm-12 shop-all-btn">
                    <a href="#">Shop All Collection</a>
                </div>
            </div>
        </div>
    </section>
    <!-- New Product end -->
</template>
