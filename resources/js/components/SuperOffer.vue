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
        <h2 class="d-none">{{ $t('offer') }}</h2>
        <div class="container">
            <div class="row justify-content-end">
                <div
                    class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center ec-offer-content"
                >
                    <h2 class="ec-offer-title" data-aos="slide-down">
                        {{ $t('routers') }}
                    </h2>
                    <h3 class="ec-offer-stitle" data-aos="slide-up">
                        {{ $t('super') }} {{ $t('offer') }}
                    </h3>
                    <span class="ec-offer-img" data-aos="zoom-in">
                        <img
                            :src="getImagePath('offer-image', '1.png')"
                            alt="offer image"
                            loading="lazy"
                        />
                    </span>
                    <span class="ec-offer-desc">{{ $t('routers') }}</span>
                    <span class="ec-offer-price">$40.00 {{ $t('only') }}</span>
                    <a
                        class="btn btn-primary btn-shop-now"
                        data-aos="zoom-in"
                        href="#"
                    >
                        {{ $t('shop_now') }}
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- Offer Section End -->
</template>

<style scoped>
    .btn-shop-now {
        width: auto;
    }
    .ec-offer-img {
        img {
            max-height: 200px;
        }
    }
</style>
