<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
    import { getImagePath } from '@/utils/imageHelper';

    export default {
        name: 'TestimonialReviews',
        components: {
            Swiper,
            SwiperSlide,
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
    <!-- Testmonial Start -->
    <section
        class="section ec-test-section section-space-ptb-100 section-space-m"
    >
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title mb-0">
                        <h2 class="ec-bg-title">Testimonial</h2>
                        <h2 class="ec-title">Client Review</h2>
                        <p class="sub-title mb-3">What say client about us</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="ec-test-outer">
                    <swiper
                        class="ec-testimonial-slider"
                        :modules="[Autoplay, Thumbs, Navigation]"
                        :thumbs="{ swiper: thumbsSwiper }"
                        :slides-per-view="1"
                        :space-between="0"
                        :navigation="true"
                        :loop="true"
                        :autoplay="{
                            delay: 5000,
                            disableOnInteraction: false,
                        }"
                    >
                        <swiper-slide class="ec-test-item">
                            <img
                                :src="
                                    getImagePath(
                                        'testimonial',
                                        'top-quotes.svg'
                                    )
                                "
                                class="svg_img test_svg top"
                                alt=""
                                loading="lazy"
                            />
                            <div class="ec-test-inner">
                                <div class="ec-test-content">
                                    <div class="ec-test-desc">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                    </div>
                                    <div class="ec-test-name">John Doe 1</div>
                                    <div class="ec-test-designation">
                                        General Manager
                                    </div>
                                    <div class="ec-test-rating">
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                    </div>
                                </div>
                            </div>
                            <img
                                :src="
                                    getImagePath(
                                        'testimonial',
                                        'bottom-quotes.svg'
                                    )
                                "
                                class="svg_img test_svg bottom"
                                alt=""
                                loading="lazy"
                            />
                        </swiper-slide>
                        <swiper-slide class="ec-test-item">
                            <img
                                :src="
                                    getImagePath(
                                        'testimonial',
                                        'top-quotes.svg'
                                    )
                                "
                                class="svg_img test_svg top"
                                alt=""
                                loading="lazy"
                            />
                            <div class="ec-test-inner">
                                <div class="ec-test-content">
                                    <div class="ec-test-desc">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                    </div>
                                    <div class="ec-test-name">John Doe 2</div>
                                    <div class="ec-test-designation">
                                        General Manager
                                    </div>
                                    <div class="ec-test-rating">
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                    </div>
                                </div>
                            </div>
                            <img
                                :src="
                                    getImagePath(
                                        'testimonial',
                                        'bottom-quotes.svg'
                                    )
                                "
                                class="svg_img test_svg bottom"
                                alt=""
                                loading="lazy"
                            />
                        </swiper-slide>
                        <swiper-slide class="ec-test-item">
                            <img
                                :src="
                                    getImagePath(
                                        'testimonial',
                                        'top-quotes.svg'
                                    )
                                "
                                class="svg_img test_svg top"
                                alt=""
                                loading="lazy"
                            />
                            <div class="ec-test-inner">
                                <div class="ec-test-content">
                                    <div class="ec-test-desc">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                    </div>
                                    <div class="ec-test-name">John Doe 3</div>
                                    <div class="ec-test-designation">
                                        General Manager
                                    </div>
                                    <div class="ec-test-rating">
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                        <i class="ecicon eci-star fill"></i>
                                    </div>
                                </div>
                            </div>
                            <img
                                :src="
                                    getImagePath(
                                        'testimonial',
                                        'bottom-quotes.svg'
                                    )
                                "
                                class="svg_img test_svg bottom"
                                alt=""
                                loading="lazy"
                            />
                        </swiper-slide>
                    </swiper>

                    <swiper
                        class="ec-testimonial-thumbs-slider"
                        @swiper="setThumbsSwiper"
                        :modules="[Thumbs]"
                        :slides-per-view="3"
                        :space-between="30"
                        watchSlidesProgress
                        watchSlidesVisibility
                        centeredSlides="true"
                    >
                        <swiper-slide class="ec-testimonial-thumbs-item">
                            <div class="ec-test-img">
                                <img
                                    alt="testimonial"
                                    title="testimonial"
                                    :src="getImagePath('testimonial', '1.jpg')"
                                    loading="lazy"
                                />
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-testimonial-thumbs-item">
                            <div class="ec-test-img">
                                <img
                                    alt="testimonial"
                                    title="testimonial"
                                    :src="getImagePath('testimonial', '2.jpg')"
                                    loading="lazy"
                                />
                            </div>
                        </swiper-slide>
                        <swiper-slide class="ec-testimonial-thumbs-item">
                            <div class="ec-test-img">
                                <img
                                    alt="testimonial"
                                    title="testimonial"
                                    :src="getImagePath('testimonial', '3.jpg')"
                                    loading="lazy"
                                />
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
    <!-- Testmonial end -->
</template>

<style scoped>
    .ec-testimonial-slider {
        padding: 27px 0;

        .ec-test-item {
            max-width: 1640px;
            overflow: visible;
            text-align: center;
        }
    }

    .ec-testimonial-thumbs-slider {
        img {
            width: 100%;
            cursor: pointer;
            border-radius: 4px;
            transition: 0.3s;
        }
        .ec-testimonial-thumbs-item {
            width: 100px !important;
        }
        .swiper-slide-thumb-active img {
            border: 1px solid #007bff;
        }
        .swiper-slide {
            width: 100px; /* Размер миниатюры */
            height: 100px; /* Размер миниатюры */
            border-radius: 50%; /* Делаем круг */
            overflow: hidden; /* Скрываем выходящие части */
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ddd; /* Фон миниатюры */
            cursor: pointer;
            transition:
                transform 0.3s ease,
                opacity 0.3s ease; /* Анимация */
        }
        .swiper-slide img {
            width: 100%; /* Изображение внутри миниатюры */
            height: 100%;
            object-fit: cover; /* Убираем искажение */
            border-radius: 50%; /* Круг для изображения */
        }
        .thumb-swiper .swiper-slide:not(.swiper-slide-thumb-active) {
            opacity: 0.6; /* Полупрозрачные неактивные миниатюры */
        }
    }
</style>
