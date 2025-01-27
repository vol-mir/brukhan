<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
    import { getImagePath } from '@/utils/imageHelper';
    import Layout from '@/Layout.vue';
    import InstagramFeed from '@/components/InstagramFeed.vue';
    import ListServices from '@/components/ListServices.vue';
    import TestimonialReviews from '@/components/TestimonialReviews.vue';
    import ListBrands from '@/components/ListBrands.vue';
    import SuperOffer from '@/components/SuperOffer.vue';
    import NewProducts from '@/components/NewProducts.vue';
    import TwoBanners from '@/components/TwoBanners.vue';

    export default {
        name: 'HomePage',
        layout: Layout,
        components: {
            Swiper,
            SwiperSlide,
            InstagramFeed,
            ListServices,
            TestimonialReviews,
            ListBrands,
            SuperOffer,
            NewProducts,
            TwoBanners,
        },
        setup() {
            return {
                getImagePath,
                modules: [Autoplay, Navigation, Thumbs],
            };
        },
        data() {
            return {
                thumbsSwiper: null,
            };
        },
        methods: {
            Autoplay,
            Navigation,
            Thumbs,
            setThumbsSwiper(swiper) {
                this.thumbsSwiper = swiper;
            },
        },
    };
</script>

<template>
    <!-- Main Slider Start -->
    <div class="sticky-header-next-sec ec-main-slider section section-space-pb">
        <div class="ec-slider swiper-container main-slider-nav main-slider-dot">
            <!-- Main slider -->
            <swiper
                class="swiper-wrapper"
                :modules="[Autoplay, Navigation]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                    delay: 4000,
                    disableOnInteraction: false,
                }"
                :navigation="{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }"
            >
                <swiper-slide
                    class="ec-slide-item swiper-slide d-flex ec-slide-1"
                >
                    <div class="container align-self-center">
                        <div class="row">
                            <div
                                class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center"
                            >
                                <div class="ec-slide-content slider-animation">
                                    <h1 class="ec-slide-title">
                                        New Fashion Collection
                                    </h1>
                                    <h2 class="ec-slide-stitle">Sale Offer</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do
                                    </p>
                                    <a
                                        href="#"
                                        class="btn btn-lg btn-secondary"
                                    >
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide
                    class="ec-slide-item swiper-slide d-flex ec-slide-2"
                >
                    <div class="container align-self-center">
                        <div class="row">
                            <div
                                class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center"
                            >
                                <div class="ec-slide-content slider-animation">
                                    <h1
                                        class="ec-slide-title"
                                        data-aos="flip-right"
                                    >
                                        Boat Headphone Sets
                                    </h1>
                                    <h2 class="ec-slide-stitle">Sale Offer</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do
                                    </p>
                                    <a
                                        href="#"
                                        class="btn btn-lg btn-secondary"
                                    >
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <div class="swiper-buttons">
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </swiper>
        </div>
    </div>
    <!-- Main Slider End -->

    <TwoBanners />
    <ListServices />
    <SuperOffer />
    <NewProducts />
    <TestimonialReviews />
    <ListBrands />
    <InstagramFeed />
</template>

<style scoped>
    .swiper-button-next,
    .swiper-button-prev {
        color: #fff; /* Цвет стрелок */
        background-color: rgba(0, 0, 0, 0.5); /* Фон стрелок */
        padding: 10px;
        border-radius: 50%;
    }

    .swiper-button-next:hover,
    .swiper-button-prev:hover {
        background-color: rgba(0, 0, 0, 0.8); /* Эффект при наведении */
    }
</style>
