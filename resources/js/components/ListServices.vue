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
                            <h2>24X7 Support</h2>
                            <p>Contact us 24 hours a day, 7 days a week</p>
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
                            <h2>30 Days Return</h2>
                            <p>
                                Simply return it within 30 days for an exchange
                            </p>
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
                            <h2>Payment Secure</h2>
                            <p>Contact us 24 hours a day, 7 days a week</p>
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
