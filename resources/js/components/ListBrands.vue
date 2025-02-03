<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    import { useSiteInfoStore } from '@/stores/siteInfoStore';

    export default {
        name: 'ListBrands',
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const siteInfoStore = useSiteInfoStore();

            return {
                modules: [Autoplay],
                siteInfoStore,
            };
        },
        methods: {
            Autoplay,
        },
    };
</script>

<template>
    <!-- Brand Section Start -->
    <section class="section ec-brand-area section-space-p">
        <h2 class="d-none">Brand</h2>
        <div class="container">
            <div class="row">
                <div class="ec-brand-outer" data-aos="zoom-in">
                    <swiper
                        class="ec-brand-slider"
                        :modules="[Autoplay]"
                        :slides-per-view="3"
                        :watchSlidesProgress="true"
                        :loop="true"
                        :autoplay="{
                            delay: 4000,
                            disableOnInteraction: false,
                        }"
                        :breakpoints="{
                            640: { slidesPerView: 4, spaceBetween: 0 },
                            991: { slidesPerView: 5, spaceBetween: 0 },
                            1200: { slidesPerView: 6, spaceBetween: 0 },
                            1450: { slidesPerView: 7, spaceBetween: 0 },
                        }"
                        :auto-height="false"
                    >
                        <swiper-slide
                            v-for="brand in siteInfoStore.brands"
                            :key="brand.slug"
                            class="ec-brand-item"
                        >
                            <div class="ec-brand-img">
                                <a
                                    :href="brand.url ?? '#'"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        :alt="brand.name"
                                        :title="brand.name"
                                        :src="brand.image"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
    <!-- Brand Section End -->
</template>
