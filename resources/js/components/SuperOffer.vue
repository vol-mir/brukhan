<script>
    import { getImagePath } from '@/utils/imageHelper';

    export default {
        name: 'SuperOffer',
        setup() {
            return {
                getImagePath,
            };
        },
    };
</script>

<template>
    <!-- Offer Section Start -->
    <section class="section ec-offer-section section-space-p section-space-m">
        <h2 class="d-none">Offer</h2>
        <div class="container">
            <div class="row justify-content-end">
                <div
                    class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center ec-offer-content"
                >
                    <h2 class="ec-offer-title" data-aos="slide-down">
                        Sunglasses
                    </h2>
                    <h3 class="ec-offer-stitle" data-aos="slide-up">
                        Super Offer
                    </h3>
                    <span class="ec-offer-img" data-aos="zoom-in">
                        <img
                            :src="getImagePath('offer-image', '1.png')"
                            alt="offer image"
                            loading="lazy"
                        />
                    </span>
                    <span class="ec-offer-desc">Acetate Frame Sunglasses</span>
                    <span class="ec-offer-price">$40.00 Only</span>
                    <a class="btn btn-primary" data-aos="zoom-in" href="#">
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- Offer Section End -->
</template>
