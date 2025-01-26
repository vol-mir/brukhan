<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    import { getImagePath } from '@/utils/imageHelper';

    export default {
        name: 'InstagramFeed',
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
    <!-- Instagram Start -->
    <section class="section ec-instagram-section module section-space-p">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h2 class="ec-bg-title">Instagram Feed</h2>
                        <h2 class="ec-title">Instagram Feed</h2>
                        <p class="sub-title">Share your store with us</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="ec-insta-wrapper">
            <div class="ec-insta-outer">
                <div class="container" data-aos="fade">
                    <swiper
                        class="insta-auto"
                        :modules="[Autoplay]"
                        :slides-per-view="1"
                        :watchSlidesProgress="true"
                        :speed="2000"
                        :loop="true"
                        :autoplay="{
                            delay: 1000,
                            disableOnInteraction: false,
                        }"
                        :breakpoints="{
                            640: { slidesPerView: 2, spaceBetween: 0 },
                            991: { slidesPerView: 3, spaceBetween: 0 },
                            1200: { slidesPerView: 4, spaceBetween: 0 },
                            1450: { slidesPerView: 5, spaceBetween: 0 },
                        }"
                        :auto-height="false"
                    >
                        <swiper-slide class="ec-insta-item">
                            <div class="ec-insta-inner">
                                <a href="#" target="_blank">
                                    <img
                                        :src="
                                            getImagePath(
                                                'instragram-image',
                                                '1.jpg'
                                            )
                                        "
                                        alt="insta"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-insta-item">
                            <div class="ec-insta-inner">
                                <a href="#" target="_blank">
                                    <img
                                        :src="
                                            getImagePath(
                                                'instragram-image',
                                                '2.jpg'
                                            )
                                        "
                                        alt="insta"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-insta-item">
                            <div class="ec-insta-inner">
                                <a href="#" target="_blank">
                                    <img
                                        :src="
                                            getImagePath(
                                                'instragram-image',
                                                '3.jpg'
                                            )
                                        "
                                        alt="insta"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-insta-item">
                            <div class="ec-insta-inner">
                                <a href="#" target="_blank">
                                    <img
                                        :src="
                                            getImagePath(
                                                'instragram-image',
                                                '4.jpg'
                                            )
                                        "
                                        alt="insta"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-insta-item">
                            <div class="ec-insta-inner">
                                <a href="#" target="_blank">
                                    <img
                                        :src="
                                            getImagePath(
                                                'instragram-image',
                                                '5.jpg'
                                            )
                                        "
                                        alt="insta"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-insta-item">
                            <div class="ec-insta-inner">
                                <a href="#" target="_blank">
                                    <img
                                        :src="
                                            getImagePath(
                                                'instragram-image',
                                                '6.jpg'
                                            )
                                        "
                                        alt="insta"
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
    <!-- Instagram End -->
</template>
