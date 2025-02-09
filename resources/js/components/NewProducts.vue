<script>
    import { useSiteInfoStore } from '@/stores/siteInfoStore';
    import ProductInner from '@/components/ProductInner.vue';

    export default {
        name: 'NewProducts',
        components: {
            ProductInner,
        },
        setup() {
            const siteInfoStore = useSiteInfoStore();

            return {
                siteInfoStore,
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
                        <h2 class="ec-bg-title">{{ $t('new_arrivals') }}</h2>
                        <h2 class="ec-title">{{ $t('new_arrivals') }}</h2>
                        <p class="sub-title">{{ $t('browse_top_products') }}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- New Product Content -->
                <div
                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content"
                    data-aos="flip-left"
                    v-for="product in siteInfoStore.top_products"
                    :key="product.slug"
                >
                    <ProductInner :product="product" />
                </div>
                <div class="col-sm-12 shop-all-btn">
                    <a href="#">{{ $t('view_all') }}</a>
                </div>
            </div>
        </div>
    </section>
    <!-- New Product end -->
</template>
