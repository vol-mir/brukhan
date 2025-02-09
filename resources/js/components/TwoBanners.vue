<script>
    import { getImagePath } from '@/utils/imageHelper';

    export default {
        name: 'TwoBanners',
        setup() {
            return {
                getImagePath,
            };
        },
    };
</script>

<template>
    <!-- Banner Section Start -->
    <section class="ec-banner section section-space-p">
        <h2 class="d-none">{{ $t('banner') }}</h2>
        <div class="container">
            <!-- ec Banners Start -->
            <div class="ec-banner-inner">
                <!--ec Banner Start -->
                <div class="ec-banner-block ec-banner-block-2">
                    <div class="row">
                        <div
                            class="banner-block col-lg-6 col-md-12 margin-b-30"
                            data-aos="flip-right"
                        >
                            <div class="bnr-overlay">
                                <img
                                    :src="getImagePath('banner', '2.jpg')"
                                    alt=""
                                    loading="lazy"
                                />
                                <div class="banner-text">
                                    <span class="ec-banner-stitle">
                                        {{ $t('new_arrivals') }}
                                    </span>
                                    <span class="ec-banner-title">
                                        {{ $t('screwdriver') }}
                                    </span>
                                    <span class="ec-banner-discount">
                                        30% {{ $t('discount') }}
                                    </span>
                                </div>
                                <div class="banner-content">
                                    <span class="ec-banner-btn">
                                        <a href="#">{{ $t('order_now') }}</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="banner-block col-lg-6 col-md-12"
                            data-aos="flip-left"
                        >
                            <div class="bnr-overlay">
                                <img
                                    :src="getImagePath('banner', '3.jpg')"
                                    alt=""
                                    loading="lazy"
                                />
                                <div class="banner-text">
                                    <span class="ec-banner-stitle">
                                        {{ $t('new_trending') }}
                                    </span>
                                    <span class="ec-banner-title">
                                        {{ $t('routers') }}
                                    </span>
                                    <span class="ec-banner-discount">
                                        {{ $t('action1') }}
                                        <br />
                                        20% {{ $t('discount') }}
                                    </span>
                                </div>
                                <div class="banner-content">
                                    <span class="ec-banner-btn">
                                        <a href="#">{{ $t('order_now') }}</a>
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
</template>
