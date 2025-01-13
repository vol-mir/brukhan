<script>
    // import axios from 'axios';
    // import { ref } from 'vue';
    import { getImagePath } from '@/utils/imageHelper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Navigation, Thumbs } from 'swiper/modules';

    // const response = ref(null);
    // const getValue = async () => {
    //     try {
    //         const res = await axios.get('/api/test-me');
    //         response.value = res.data;
    //     } catch (error) {
    //         // Do something with the error
    //         console.log(error);
    //     }
    // };

    export default {
        name: 'HomePage',
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
    <!-- Services Section Start -->
    <section class="section ec-services-section section-space-p">
        <h2 class="d-none">Services</h2>
        <div class="container">
            <div class="row">
                <div
                    class="ec_ser_content ec_ser_content_1 col-sm-12 col-md-6 col-lg-3"
                >
                    <div class="ec_ser_inner">
                        <div class="ec-service-image">
                            <img
                                :src="getImagePath('icons', 'service_1.svg')"
                                class="svg_img"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div class="ec-service-desc">
                            <h2>Free Shipping</h2>
                            <p>
                                Free shipping on all US order or order above
                                $200
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="ec_ser_content ec_ser_content_2 col-sm-12 col-md-6 col-lg-3"
                >
                    <div class="ec_ser_inner">
                        <div class="ec-service-image">
                            <img
                                :src="getImagePath('icons', 'service_2.svg')"
                                class="svg_img"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div class="ec-service-desc">
                            <h2>24X7 Support</h2>
                            <p>Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
                <div
                    class="ec_ser_content ec_ser_content_3 col-sm-12 col-md-6 col-lg-3"
                >
                    <div class="ec_ser_inner">
                        <div class="ec-service-image">
                            <img
                                :src="getImagePath('icons', 'service_3.svg')"
                                class="svg_img"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div class="ec-service-desc">
                            <h2>30 Days Return</h2>
                            <p>
                                Simply return it within 30 days for an exchange
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="ec_ser_content ec_ser_content_4 col-sm-12 col-md-6 col-lg-3"
                >
                    <div class="ec_ser_inner">
                        <div class="ec-service-image">
                            <img
                                :src="getImagePath('icons', 'service_4.svg')"
                                class="svg_img"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div class="ec-service-desc">
                            <h2>Payment Secure</h2>
                            <p>Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Services Section End -->

    <!-- Testmonial Start -->
    <section
        id="reviews"
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

    <!-- Brand Section Start -->
    <section class="section ec-brand-area section-space-p">
        <h2 class="d-none">Brand</h2>
        <div class="container">
            <div class="row">
                <div class="ec-brand-outer">
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

    <!-- Instagram Start -->
    <section
        class="section ec-instagram-section module section-space-p"
        id="insta"
    >
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
                <div class="container">
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

    <!--    <div>-->
    <!--        <button @click.prevent="getValue">Trigger Endpoint</button>-->

    <!--        <p v-if="response">{{ response }}</p>-->
    <!--    </div>-->
</template>

<style scoped>
    .ec-service-image {
        height: 75px;

        img {
            height: 70px;
        }
    }

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
