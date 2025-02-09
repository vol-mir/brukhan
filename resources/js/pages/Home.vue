<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
    import { getImagePath } from '@/utils/imageHelper';
    import Layout from '@/Layout.vue';
    import ListServices from '@/components/ListServices.vue';
    import ListBrands from '@/components/ListBrands.vue';
    import SuperOffer from '@/components/SuperOffer.vue';
    import NewProducts from '@/components/NewProducts.vue';
    import TwoBanners from '@/components/TwoBanners.vue';
    import TabProducts from '@/components/TabProducts.vue';
    import TopCategories from '@/components/TopCategories.vue';

    export default {
        name: 'HomePage',
        layout: Layout,
        components: {
            Swiper,
            SwiperSlide,
            ListServices,
            ListBrands,
            SuperOffer,
            NewProducts,
            TwoBanners,
            TabProducts,
            TopCategories,
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
                                <div
                                    class="ec-slide-content slider-animation slide-one"
                                >
                                    <h1 class="ec-slide-title background-blur">
                                        {{ $t('good_price') }}
                                    </h1>
                                    <h2 class="ec-slide-stitle background-blur">
                                        {{ $t('action2') }}
                                    </h2>
                                    <a
                                        href="#"
                                        class="btn btn-lg btn-secondary"
                                    >
                                        {{ $t('order_now') }}
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
                                        class="ec-slide-title background-blur"
                                        data-aos="flip-right"
                                    >
                                        {{ $t('nice_offer') }}
                                    </h1>
                                    <h2 class="ec-slide-stitle background-blur">
                                        {{ $t('action1') }}
                                    </h2>
                                    <a
                                        href="#"
                                        class="btn btn-lg btn-secondary"
                                    >
                                        {{ $t('order_now') }}
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

    <TabProducts />
    <TwoBanners />
    <TopCategories />
    <ListServices />
    <SuperOffer />
    <NewProducts />
    <ListBrands />
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

    .background-blur {
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(5px);
        padding: 10px;
        display: inline-block;
        color: black;
    }
</style>
