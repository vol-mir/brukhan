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
                navigation
            >
                <swiper-slide class="ec-slide-item swiper-slide d-flex">
                    <div class="container align-self-center">
                        <div class="row">
                            <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                                <div class="ec-slide-content slider-animation">
                                    <h1 class="ec-slide-title">New Fashion Collection</h1>
                                    <h2 class="ec-slide-stitle">Sale Offer</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                    <a href="#" class="btn btn-lg btn-secondary">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="ec-slide-item swiper-slide d-flex">
                    <div class="container align-self-center">
                        <div class="row">
                            <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                                <div class="ec-slide-content slider-animation">
                                    <h1 class="ec-slide-title">New Fashion Collection</h1>
                                    <h2 class="ec-slide-stitle">Sale Offer</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                    <a href="#" class="btn btn-lg btn-secondary">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

<!--                <div class="swiper-buttons">-->
<!--                    <div class="swiper-button-next"></div>-->
<!--                    <div class="swiper-button-prev"></div>-->
<!--                </div>-->
            </swiper>
<!--            <div class="swiper-wrapper">-->
<!--                <div class="ec-slide-item swiper-slide d-flex ec-slide-1">-->
<!--                    <div class="container align-self-center">-->
<!--                        <div class="row">-->
<!--                            <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">-->
<!--                                <div class="ec-slide-content slider-animation">-->
<!--                                    <h1 class="ec-slide-title">New Fashion Collection</h1>-->
<!--                                    <h2 class="ec-slide-stitle">Sale Offer</h2>-->
<!--                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>-->
<!--                                    <a href="#" class="btn btn-lg btn-secondary">Order Now</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="ec-slide-item swiper-slide d-flex ec-slide-2">-->
<!--                    <div class="container align-self-center">-->
<!--                        <div class="row">-->
<!--                            <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">-->
<!--                                <div class="ec-slide-content slider-animation">-->
<!--                                    <h1 class="ec-slide-title">Boat Headphone Sets</h1>-->
<!--                                    <h2 class="ec-slide-stitle">Sale Offer</h2>-->
<!--                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>-->
<!--                                    <a href="#" class="btn btn-lg btn-secondary">Order Now</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="swiper-pagination swiper-pagination-white"></div>-->
<!--            <div class="swiper-buttons">-->
<!--                <div class="swiper-button-next"></div>-->
<!--                <div class="swiper-button-prev"></div>-->
<!--            </div>-->
        </div>
    </div>
    <!-- Main Slider End -->

    <!-- Banner Section Start -->
    <section class="ec-banner section section-space-p">
        <h2 class="d-none">Banner</h2>
        <div class="container">
            <!-- ec Banners Start -->
            <div class="ec-banner-inner">
                <!--ec Banner Start -->
                <div class="ec-banner-block ec-banner-block-2">
                    <div class="row">
                        <div
                            class="banner-block col-lg-6 col-md-12 margin-b-30 slide-in-left"
                        >
                            <div class="bnr-overlay">
                                <img
                                    :src="getImagePath('banner', '2.jpg')"
                                    alt=""
                                    loading="lazy"
                                />
                                <div class="banner-text">
                                    <span class="ec-banner-stitle">
                                        New Arrivals
                                    </span>
                                    <span class="ec-banner-title">
                                        mens
                                        <br />
                                        Sport shoes
                                    </span>
                                    <span class="ec-banner-discount">
                                        30% Discount
                                    </span>
                                </div>
                                <div class="banner-content">
                                    <span class="ec-banner-btn">
                                        <a href="#">Order Now</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="banner-block col-lg-6 col-md-12 slide-in-right"
                        >
                            <div class="bnr-overlay">
                                <img
                                    :src="getImagePath('banner', '3.jpg')"
                                    alt=""
                                    loading="lazy"
                                />
                                <div class="banner-text">
                                    <span class="ec-banner-stitle">
                                        New Trending
                                    </span>
                                    <span class="ec-banner-title">
                                        Smart
                                        <br />
                                        watches
                                    </span>
                                    <span class="ec-banner-discount">
                                        Buy any 3 Items & get
                                        <br />
                                        20% Discount
                                    </span>
                                </div>
                                <div class="banner-content">
                                    <span class="ec-banner-btn">
                                        <a href="#">Order Now</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ec Banner End -->
                </div>
                <!-- ec Banners End -->
            </div>
        </div>
    </section>
    <!-- Banner Section End -->

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

    <!-- Offer Section Start -->
    <section class="section ec-offer-section section-space-p section-space-m">
        <h2 class="d-none">Offer</h2>
        <div class="container">
            <div class="row justify-content-end">
                <div
                    class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center ec-offer-content"
                >
                    <h2 class="ec-offer-title">Sunglasses</h2>
                    <h3 class="ec-offer-stitle slide-in-down">Super Offer</h3>
                    <span class="ec-offer-img zoom-in">
                        <img
                            :src="getImagePath('offer-image', '1.png')"
                            alt="offer image"
                            loading="lazy"
                        />
                    </span>
                    <span class="ec-offer-desc">Acetate Frame Sunglasses</span>
                    <span class="ec-offer-price">$40.00 Only</span>
                    <a class="btn btn-primary zoom-in" href="#">Shop Now</a>
                </div>
            </div>
        </div>
    </section>
    <!-- Offer Section End -->

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
                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content flip-in-y"
                >
                    <div class="ec-product-inner">
                        <div class="ec-pro-image-outer">
                            <div class="ec-pro-image">
                                <a href="#" class="image">
                                    <img
                                        class="main-image"
                                        :src="
                                            getImagePath(
                                                'product-image',
                                                '9_1.jpg'
                                            )
                                        "
                                        alt="Product"
                                        loading="lazy"
                                    />
                                    <img
                                        class="hover-image"
                                        :src="
                                            getImagePath(
                                                'product-image',
                                                '9_2.jpg'
                                            )
                                        "
                                        alt="Product"
                                        loading="lazy"
                                    />
                                </a>
                                <span class="flags">
                                    <span class="sale">Sale</span>
                                </span>
                                <a
                                    href="#"
                                    class="quickview"
                                    data-link-action="quickview"
                                    title="Quick view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ec_quickview_modal"
                                >
                                    <img
                                        :src="
                                            getImagePath(
                                                'icons',
                                                'quickview.svg'
                                            )
                                        "
                                        class="svg_img pro_svg"
                                        alt=""
                                        loading="lazy"
                                    />
                                </a>
                                <div class="ec-pro-actions">
                                    <a
                                        href="#"
                                        class="ec-btn-group compare"
                                        title="Compare"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'compare.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                    <button
                                        title="Add To Cart"
                                        class="add-to-cart"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'cart.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                        Add To Cart
                                    </button>
                                    <a
                                        class="ec-btn-group wishlist"
                                        title="Wishlist"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'wishlist.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="ec-pro-content">
                            <h5 class="ec-pro-title">
                                <a href="#">Full Sleeve Cap T-Shirt</a>
                            </h5>
                            <div class="ec-pro-rating">
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star"></i>
                            </div>
                            <span class="ec-price">
                                <span class="old-price">$20.00</span>
                                <span class="new-price">$15.00</span>
                            </span>
                            <div class="ec-pro-option">
                                <div class="ec-pro-color">
                                    <span class="ec-pro-opt-label">Color</span>
                                    <ul class="ec-opt-swatch ec-change-img">
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '9_1.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '9_1.jpg'
                                                    )
                                                "
                                                data-tooltip="Orange"
                                            >
                                                <span
                                                    style="
                                                        background-color: #74c7ff;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '9_2.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '9_2.jpg'
                                                    )
                                                "
                                                data-tooltip="Green"
                                            >
                                                <span
                                                    style="
                                                        background-color: #7af6ff;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '9_3.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '9_3.jpg'
                                                    )
                                                "
                                                data-tooltip="Sky Blue"
                                            >
                                                <span
                                                    style="
                                                        background-color: #85ffeb;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ec-pro-size">
                                    <span class="ec-pro-opt-label">Size</span>
                                    <ul class="ec-opt-size">
                                        <li class="active">
                                            <a
                                                href="#"
                                                class="ec-opt-sz"
                                                data-old="$20.00"
                                                data-new="$15.00"
                                                data-tooltip="Small"
                                            >
                                                S
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-sz"
                                                data-old="$22.00"
                                                data-new="$17.00"
                                                data-tooltip="Medium"
                                            >
                                                M
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-sz"
                                                data-old="$25.00"
                                                data-new="$20.00"
                                                data-tooltip="Large"
                                            >
                                                X
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-sz"
                                                data-old="$27.00"
                                                data-new="$22.00"
                                                data-tooltip="Extra Large"
                                            >
                                                XL
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content flip-in-y"
                >
                    <div class="ec-product-inner">
                        <div class="ec-pro-image-outer">
                            <div class="ec-pro-image">
                                <a href="#" class="image">
                                    <img
                                        class="main-image"
                                        :src="
                                            getImagePath(
                                                'product-image',
                                                '11_1.jpg'
                                            )
                                        "
                                        alt="Product"
                                    />
                                    <img
                                        class="hover-image"
                                        :src="
                                            getImagePath(
                                                'product-image',
                                                '11_2.jpg'
                                            )
                                        "
                                        alt="Product"
                                    />
                                </a>
                                <span class="flags">
                                    <span class="new">New</span>
                                </span>
                                <a
                                    href="#"
                                    class="quickview"
                                    data-link-action="quickview"
                                    title="Quick view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ec_quickview_modal"
                                >
                                    <img
                                        :src="
                                            getImagePath(
                                                'icons',
                                                'quickview.svg'
                                            )
                                        "
                                        class="svg_img pro_svg"
                                        alt=""
                                    />
                                </a>
                                <div class="ec-pro-actions">
                                    <a
                                        href="#"
                                        class="ec-btn-group compare"
                                        title="Compare"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'compare.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                    <button
                                        title="Add To Cart"
                                        class="add-to-cart"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'cart.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                        Add To Cart
                                    </button>
                                    <a
                                        class="ec-btn-group wishlist"
                                        title="Wishlist"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'wishlist.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="ec-pro-content">
                            <h5 class="ec-pro-title">
                                <a href="#">Classic Leather purse</a>
                            </h5>
                            <div class="ec-pro-rating">
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star"></i>
                            </div>
                            <span class="ec-price">
                                <span class="old-price">$100.00</span>
                                <span class="new-price">$80.00</span>
                            </span>
                            <div class="ec-pro-option">
                                <div class="ec-pro-color">
                                    <span class="ec-pro-opt-label">Color</span>
                                    <ul class="ec-opt-swatch ec-change-img">
                                        <li class="active">
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '11_1.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '11_1.jpg'
                                                    )
                                                "
                                                data-tooltip="Gray"
                                            >
                                                <span
                                                    style="
                                                        background-color: #dba4ff;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '11_2.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '11_2.jpg'
                                                    )
                                                "
                                                data-tooltip="Orange"
                                            >
                                                <span
                                                    style="
                                                        background-color: #ff4a77;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '11_3.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '11_3.jpg'
                                                    )
                                                "
                                                data-tooltip="Green"
                                            >
                                                <span
                                                    style="
                                                        background-color: #c9ff55;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '11_4.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '11_4.jpg'
                                                    )
                                                "
                                                data-tooltip="Sky Blue"
                                            >
                                                <span
                                                    style="
                                                        background-color: #ffcc5e;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content flip-in-y"
                >
                    <div class="ec-product-inner">
                        <div class="ec-pro-image-outer">
                            <div class="ec-pro-image">
                                <a href="#" class="image">
                                    <img
                                        class="main-image"
                                        :src="
                                            getImagePath(
                                                'product-image',
                                                '12_1.jpg'
                                            )
                                        "
                                        alt="Product"
                                    />
                                    <img
                                        class="hover-image"
                                        :src="
                                            getImagePath(
                                                'product-image',
                                                '12_2.jpg'
                                            )
                                        "
                                        alt="Product"
                                    />
                                </a>
                                <span class="percentage">5%</span>
                                <a
                                    href="#"
                                    class="quickview"
                                    data-link-action="quickview"
                                    title="Quick view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ec_quickview_modal"
                                >
                                    <img
                                        :src="
                                            getImagePath(
                                                'icons',
                                                'quickview.svg'
                                            )
                                        "
                                        class="svg_img pro_svg"
                                        alt=""
                                    />
                                </a>
                                <div class="ec-pro-actions">
                                    <a
                                        href="#"
                                        class="ec-btn-group compare"
                                        title="Compare"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'compare.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                    <button
                                        title="Add To Cart"
                                        class="add-to-cart"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'cart.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                        Add To Cart
                                    </button>
                                    <a
                                        class="ec-btn-group wishlist"
                                        title="Wishlist"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'wishlist.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="ec-pro-content">
                            <h5 class="ec-pro-title">
                                <a href="product-left-sidebar.html">
                                    Fancy Ladies Sandal
                                </a>
                            </h5>
                            <div class="ec-pro-rating">
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star"></i>
                            </div>
                            <span class="ec-price">
                                <span class="old-price">$100.00</span>
                                <span class="new-price">$80.00</span>
                            </span>
                            <div class="ec-pro-option">
                                <div class="ec-pro-color">
                                    <span class="ec-pro-opt-label">Color</span>
                                    <ul class="ec-opt-swatch ec-change-img">
                                        <li class="active">
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '12_1.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '12_1.jpg'
                                                    )
                                                "
                                                data-tooltip="Gray"
                                            >
                                                <span
                                                    style="
                                                        background-color: #db9dff;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '12_2.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '12_2.jpg'
                                                    )
                                                "
                                                data-tooltip="Orange"
                                            >
                                                <span
                                                    style="
                                                        background-color: #00ffff;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '12_3.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '12_3.jpg'
                                                    )
                                                "
                                                data-tooltip="Green"
                                            >
                                                <span
                                                    style="
                                                        background-color: #ffa7f3;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '12_4.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '12_4.jpg'
                                                    )
                                                "
                                                data-tooltip="Sky Blue"
                                            >
                                                <span
                                                    style="
                                                        background-color: #89ff7e;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ec-pro-size">
                                    <span class="ec-pro-opt-label">Size</span>
                                    <ul class="ec-opt-size">
                                        <li class="active">
                                            <a
                                                href="#"
                                                class="ec-opt-sz"
                                                data-old="$50.00"
                                                data-new="$40.00"
                                                data-tooltip="Small"
                                            >
                                                6
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-sz"
                                                data-old="$60.00"
                                                data-new="$50.00"
                                                data-tooltip="Medium"
                                            >
                                                7
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-sz"
                                                data-old="$70.00"
                                                data-new="$60.00"
                                                data-tooltip="Large"
                                            >
                                                8
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-sz"
                                                data-old="$80.00"
                                                data-new="$70.00"
                                                data-tooltip="Extra Large"
                                            >
                                                9
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 ec-product-content flip-in-y"
                >
                    <div class="ec-product-inner">
                        <div class="ec-pro-image-outer">
                            <div class="ec-pro-image">
                                <a href="#" class="image">
                                    <img
                                        class="main-image"
                                        :src="
                                            getImagePath(
                                                'product-image',
                                                '13_1.jpg'
                                            )
                                        "
                                        alt="Product"
                                    />
                                    <img
                                        class="hover-image"
                                        :src="
                                            getImagePath(
                                                'product-image',
                                                '13_2.jpg'
                                            )
                                        "
                                        alt="Product"
                                    />
                                </a>
                                <a
                                    href="#"
                                    class="quickview"
                                    data-link-action="quickview"
                                    title="Quick view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ec_quickview_modal"
                                >
                                    <img
                                        :src="
                                            getImagePath(
                                                'icons',
                                                'quickview.svg'
                                            )
                                        "
                                        class="svg_img pro_svg"
                                        alt=""
                                    />
                                </a>
                                <div class="ec-pro-actions">
                                    <a
                                        href="#"
                                        class="ec-btn-group compare"
                                        title="Compare"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'compare.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                    <button
                                        title="Add To Cart"
                                        class="add-to-cart"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'cart.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                        Add To Cart
                                    </button>
                                    <a
                                        class="ec-btn-group wishlist"
                                        title="Wishlist"
                                    >
                                        <img
                                            :src="
                                                getImagePath(
                                                    'icons',
                                                    'wishlist.svg'
                                                )
                                            "
                                            class="svg_img pro_svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="ec-pro-content">
                            <h5 class="ec-pro-title">
                                <a href="#">Womens Leather Backpack</a>
                            </h5>
                            <div class="ec-pro-rating">
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star fill"></i>
                                <i class="ecicon eci-star"></i>
                            </div>
                            <span class="ec-price">
                                <span class="old-price">$100.00</span>
                                <span class="new-price">$80.00</span>
                            </span>
                            <div class="ec-pro-option">
                                <div class="ec-pro-color">
                                    <span class="ec-pro-opt-label">Color</span>
                                    <ul class="ec-opt-swatch ec-change-img">
                                        <li class="active">
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '13_1.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '13_1.jpg'
                                                    )
                                                "
                                                data-tooltip="Gray"
                                            >
                                                <span
                                                    style="
                                                        background-color: #deffa4;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '13_2.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '13_2.jpg'
                                                    )
                                                "
                                                data-tooltip="Orange"
                                            >
                                                <span
                                                    style="
                                                        background-color: #ffcdbe;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '13_3.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '13_3.jpg'
                                                    )
                                                "
                                                data-tooltip="Green"
                                            >
                                                <span
                                                    style="
                                                        background-color: #ff94df;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                class="ec-opt-clr-img"
                                                :data-src="
                                                    getImagePath(
                                                        'product-image',
                                                        '13_4.jpg'
                                                    )
                                                "
                                                :data-src-hover="
                                                    getImagePath(
                                                        'product-image',
                                                        '13_4.jpg'
                                                    )
                                                "
                                                data-tooltip="Sky Blue"
                                            >
                                                <span
                                                    style="
                                                        background-color: #dd9bfc;
                                                    "
                                                ></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 shop-all-btn">
                    <a href="#">Shop All Collection</a>
                </div>
            </div>
        </div>
    </section>
    <!-- New Product end -->

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

    @keyframes zoomIn {
        from {
            transform: scale(0.5);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    .zoom-in {
        animation: zoomIn 1.5s ease-out;
    }

    @keyframes slideInDown {
        from {
            transform: translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .slide-in-down {
        animation: slideInDown 1.2s ease-out;
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .slide-in-right {
        animation: slideInRight 1s ease-out;
    }

    @keyframes slideInLeft {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .slide-in-left {
        animation: slideInLeft 1s ease-out;
    }

    @keyframes flipInY {
        from {
            transform: perspective(400px) rotateY(90deg);
            opacity: 0;
        }
        50% {
            transform: perspective(400px) rotateY(-10deg);
            opacity: 1;
        }
        to {
            transform: perspective(400px) rotateY(0);
        }
    }

    .flip-in-y {
        animation: flipInY 1.2s cubic-bezier(0.42, 0, 0.58, 1);
        backface-visibility: visible;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: #fff;  /* Цвет стрелок */
        background-color: rgba(0, 0, 0, 0.5);  /* Фон стрелок */
        padding: 10px;
        border-radius: 50%;
    }

    .swiper-button-next:hover,
    .swiper-button-prev:hover {
        background-color: rgba(0, 0, 0, 0.8);  /* Эффект при наведении */
    }
</style>
