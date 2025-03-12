<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { useSwiper } from '@/modules/home/composables/useSwiper';
    import SlideContent from '@/modules/home/components/SlideContent.vue';

    export default {
        name: 'MainSlider',
        components: {
            Swiper,
            SwiperSlide,
            SlideContent,
        },
        setup() {
            const {
                thumbsSwiper,
                modules,
                autoplayConfig,
                navigationConfig,
                setThumbsSwiper,
            } = useSwiper();

            return {
                thumbsSwiper,
                modules,
                autoplayConfig,
                navigationConfig,
                setThumbsSwiper,
            };
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
                :modules="modules"
                :slides-per-view="1"
                :loop="true"
                :autoplay="autoplayConfig"
                :navigation="navigationConfig"
                lazy="true"
            >
                <swiper-slide
                    class="ec-slide-item swiper-slide d-flex ec-slide-1"
                >
                    <SlideContent
                        :title="$t('good_price')"
                        :subtitle="$t('action2')"
                        :button-text="$t('order_now')"
                    />
                </swiper-slide>
                <swiper-slide
                    class="ec-slide-item swiper-slide d-flex ec-slide-2"
                >
                    <SlideContent
                        :title="$t('nice_offer')"
                        :subtitle="$t('action1')"
                        :button-text="$t('order_now')"
                    />
                </swiper-slide>

                <div class="swiper-buttons">
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </swiper>
        </div>
    </div>
    <!-- Main Slider End -->
</template>
