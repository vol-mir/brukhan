<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    import { getImagePath } from '@/utils/imageHelper';

    export default {
        name: 'ListBrands',
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                getImagePath,
                modules: [Autoplay],
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
                        <swiper-slide class="ec-brand-item">
                            <div class="ec-brand-img">
                                <a href="#">
                                    <img
                                        alt="brand"
                                        title="brand"
                                        :src="
                                            getImagePath('brand-image', '1.png')
                                        "
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-brand-item">
                            <div class="ec-brand-img">
                                <a href="#">
                                    <img
                                        alt="brand"
                                        title="brand"
                                        :src="
                                            getImagePath('brand-image', '2.png')
                                        "
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-brand-item">
                            <div class="ec-brand-img">
                                <a href="#">
                                    <img
                                        alt="brand"
                                        title="brand"
                                        :src="
                                            getImagePath('brand-image', '3.png')
                                        "
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-brand-item">
                            <div class="ec-brand-img">
                                <a href="#">
                                    <img
                                        alt="brand"
                                        title="brand"
                                        :src="
                                            getImagePath('brand-image', '4.png')
                                        "
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-brand-item">
                            <div class="ec-brand-img">
                                <a href="#">
                                    <img
                                        alt="brand"
                                        title="brand"
                                        :src="
                                            getImagePath('brand-image', '5.png')
                                        "
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-brand-item">
                            <div class="ec-brand-img">
                                <a href="#">
                                    <img
                                        alt="brand"
                                        title="brand"
                                        :src="
                                            getImagePath('brand-image', '6.png')
                                        "
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-brand-item">
                            <div class="ec-brand-img">
                                <a href="#">
                                    <img
                                        alt="brand"
                                        title="brand"
                                        :src="
                                            getImagePath('brand-image', '7.png')
                                        "
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-brand-item">
                            <div class="ec-brand-img">
                                <a href="#">
                                    <img
                                        alt="brand"
                                        title="brand"
                                        :src="
                                            getImagePath('brand-image', '8.png')
                                        "
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
