<script>
    import { getImagePath } from '@/utils/imageHelper';

    export default {
        name: 'ListServices',
        setup() {
            return {
                getImagePath,
            };
        },
    };
</script>

<template>
    <!-- Services Section Start -->
    <section class="section ec-services-section section-space-p" id="services">
        <h2 class="d-none">Services</h2>
        <div class="container">
            <div class="row">
                <div
                    class="ec_ser_content ec_ser_content_1 col-sm-12 col-md-6 col-lg-3"
                    data-aos="zoom-in"
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
                            <h2>{{ $t('free_shipping') }}</h2>
                            <p>{{ $t('free_shipping_description') }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="ec_ser_content ec_ser_content_2 col-sm-12 col-md-6 col-lg-3"
                    data-aos="zoom-in"
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
                            <h2>{{ $t('support') }}</h2>
                            <p>{{ $t('support_description') }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="ec_ser_content ec_ser_content_3 col-sm-12 col-md-6 col-lg-3"
                    data-aos="zoom-in"
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
                            <h2>{{ $t('about_return') }}</h2>
                            <p>{{ $t('about_return_description') }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="ec_ser_content ec_ser_content_4 col-sm-12 col-md-6 col-lg-3"
                    data-aos="zoom-in"
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
                            <h2>{{ $t('payment_secure') }}</h2>
                            <p>{{ $t('payment_secure_description') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Services Section End -->
</template>

<style scoped>
    .ec-service-image {
        height: 75px;

        img {
            height: 70px;
        }
    }
</style>
