<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
    import { onBeforeUnmount, onMounted, inject, ref } from 'vue';
    import Layout from '@/Layout.vue';
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import DOMPurify from 'dompurify';
    import NewProducts from '@/components/NewProducts.vue';

    export default {
        name: 'Product',
        layout: Layout,
        components: {
            InertiaLink,
            NewProducts,
            Swiper,
            SwiperSlide,
        },
        props: {
            product: {
                type: Object,
                required: true,
            },
        },
        setup() {
            const route = inject('route');
            const activeTab = ref('description');
            const mainSwiper = ref(null);

            onMounted(() => {
                document.body.classList.add('product_page');
            });

            onBeforeUnmount(() => {
                document.body.classList.remove('product_page');
            });

            const slideToNext = () => {
                if (mainSwiper.value) {
                    mainSwiper.value.slideNext();
                }
            };

            const slideToPrev = () => {
                if (mainSwiper.value) {
                    mainSwiper.value.slidePrev();
                }
            };

            return {
                modules: [Autoplay, FreeMode, Navigation, Thumbs],
                route,
                activeTab,
                slideToNext,
                slideToPrev,
                setMainSwiper: (swiper) => {
                    mainSwiper.value = swiper;
                },
            };
        },
        data() {
            return {
                thumbsSwiper: null,
            };
        },
        computed: {
            safePresentation() {
                return DOMPurify.sanitize(this.product.presentation);
            },
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
    <!-- Breadcrumb start -->
    <div class="sticky-header-next-sec ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">
                                {{ product.name }}
                            </h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <!-- ec-breadcrumb-list start -->
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item">
                                    <InertiaLink :href="route('home')">
                                        {{ $t('menu.home') }}
                                    </InertiaLink>
                                </li>
                                <li class="ec-breadcrumb-item active">
                                    {{ $t('menu.product') }}
                                </li>
                            </ul>
                            <!-- ec-breadcrumb-list end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb end -->

    <!-- Single product start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div
                    class="ec-pro-rightside ec-common-rightside col-lg-12 col-md-12"
                >
                    <!-- Single product content Start -->
                    <div class="single-pro-block">
                        <div class="single-pro-inner">
                            <div class="row">
                                <div
                                    class="single-pro-img single-pro-img-no-sidebar"
                                >
                                    <div
                                        class="product-gallery single-product-scroll"
                                    >
                                        <swiper
                                            class="product-gallery-main"
                                            :modules="[Thumbs]"
                                            :thumbs="{ swiper: thumbsSwiper }"
                                            :slides-per-view="1"
                                            :space-between="0"
                                            :loop="true"
                                            @swiper="setMainSwiper"
                                        >
                                            <swiper-slide
                                                class="product-gallery-main-slide"
                                                v-for="(
                                                    image, index
                                                ) in product.images"
                                                :key="index"
                                            >
                                                <img
                                                    :src="image.image"
                                                    :alt="
                                                        image.name ??
                                                        product.name
                                                    "
                                                    loading="lazy"
                                                />
                                            </swiper-slide>
                                        </swiper>

                                        <div class="product-gallery-thumbs">
                                            <swiper
                                                class="product-gallery-thumbs-list"
                                                :loop="true"
                                                @swiper="setThumbsSwiper"
                                                :modules="[Navigation, Thumbs]"
                                                :slides-per-view="4"
                                                :space-between="20"
                                                :freeMode="true"
                                                watchSlidesProgress
                                                watchSlidesVisibility
                                                :navigation="{
                                                    prevEl: '.swiper-button-prev',
                                                    nextEl: '.swiper-button-next',
                                                }"
                                            >
                                                <swiper-slide
                                                    class="product-gallery-thumbs-slide"
                                                    v-for="(
                                                        image, index
                                                    ) in product.images"
                                                    :key="index"
                                                >
                                                    <img
                                                        :src="image.image"
                                                        :alt="
                                                            image.name ??
                                                            product.name
                                                        "
                                                        loading="lazy"
                                                    />
                                                </swiper-slide>
                                            </swiper>

                                            <div class="swiper-buttons">
                                                <div
                                                    class="swiper-button-next"
                                                    @click="slideToNext"
                                                ></div>
                                                <div
                                                    class="swiper-button-prev"
                                                    @click="slideToPrev"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="single-pro-desc single-pro-desc-no-sidebar"
                                >
                                    <div class="single-pro-content">
                                        <h5 class="ec-single-title">
                                            {{ product.name }}
                                        </h5>
                                        <div class="ec-single-rating-wrap">
                                            <div class="ec-single-rating">
                                                <i
                                                    v-for="index in 5"
                                                    :key="index"
                                                    class="ecicon eci-star"
                                                    :class="{
                                                        fill:
                                                            index <=
                                                            product.rating,
                                                    }"
                                                ></i>
                                            </div>
                                        </div>
                                        <div class="ec-single-desc">
                                            {{ product.description }}
                                        </div>
                                        <div class="ec-single-price-stoke">
                                            <div class="ec-single-price">
                                                <span class="new-price">
                                                    ₽{{ product.price }}
                                                </span>
                                            </div>
                                            <div class="ec-single-stoke">
                                                <span class="ec-single-sku">
                                                    {{ $t('sku') }}:
                                                    {{ product.sku }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Single product content End -->

                    <!-- Single product tab start -->
                    <div class="ec-single-pro-tab">
                        <div class="ec-single-pro-tab-wrapper">
                            <div class="ec-single-pro-tab-nav">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            :class="{
                                                active:
                                                    activeTab === 'description',
                                            }"
                                            @click="activeTab = 'description'"
                                        >
                                            {{ $t('description') }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content ec-single-pro-tab-content">
                                <div
                                    :class="[
                                        'tab-pane fade show',
                                        { active: activeTab === 'description' },
                                    ]"
                                >
                                    <div
                                        class="ec-single-pro-tab-desc"
                                        v-html="safePresentation"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Single product tab end -->
                </div>
            </div>
        </div>
    </section>
    <!-- Single product end -->

    <NewProducts />
</template>

<style scoped>
    .ec-breadcrumb-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .product-gallery-thumbs {
        position: relative;
    }

    .swiper-buttons {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        transform: translateY(-50%);
        z-index: 10;
        pointer-events: none;
    }

    .swiper-button-prev,
    .swiper-button-next {
        font-size: 28px;
        font-weight: bold;
        color: white;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
        cursor: pointer;
        pointer-events: all;
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
        text-shadow: 3px 3px 8px rgba(0, 0, 0, 1);
    }

    .swiper-button-prev::before {
        content: '❯';
    }

    .swiper-button-next::before {
        content: '❮';
    }

    .swiper-slide-thumb-active {
        border: 1px solid rgb(52, 116, 212);
    }

    .product-gallery-thumbs {
        margin-top: 10px;
    }

    .product-gallery-thumbs-list {
        display: flex;
        align-items: center;
    }

    .product-gallery-thumbs-slide {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 4px;
    }

    .product-gallery-thumbs-slide img {
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
    }

    .product-gallery-main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 400px;
        overflow: hidden;
    }

    .product-gallery-main-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .product-gallery-main-slide img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
    }
</style>
