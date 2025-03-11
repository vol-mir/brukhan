<script>
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/Layout.vue';
    import { useBodyClass } from '@/composables/useBodyClass';
    import { useImagePath } from '@/composables/useImagePath';

    export default {
        name: 'TrackOrderPage',
        layout: Layout,
        components: {
            InertiaLink,
        },
        setup() {
            useBodyClass('track_order_page');

            const { getImagePath } = useImagePath();

            return {
                getImagePath,
            };
        },
    };
</script>

<template class="terms_condition_page">
    <!-- Breadcrumb start -->
    <div class="sticky-header-next-sec ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">Track Order</h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <!-- breadcrumb-list start -->
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item">
                                    <InertiaLink :href="route('home')">
                                        {{ $t('menu.home') }}
                                    </InertiaLink>
                                </li>
                                <li class="ec-breadcrumb-item active">Track</li>
                            </ul>
                            <!-- breadcrumb-list end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb end -->

    <!-- Track Order section start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <!-- Track Order Content Start -->
            <div class="ec-trackorder-content col-md-12">
                <div class="ec-trackorder-inner">
                    <div class="ec-trackorder-top">
                        <h2 class="ec-order-id">order #6152</h2>
                        <div class="ec-order-detail">
                            <div>Expected arrival 14-02-2021-2022</div>
                            <div>
                                Grasshoppers
                                <span>v534hb</span>
                            </div>
                        </div>
                    </div>
                    <div class="ec-trackorder-bottom">
                        <div class="ec-progress-track">
                            <ul id="ec-progressbar">
                                <li class="step0 active">
                                    <span class="ec-track-icon">
                                        <img
                                            :src="getImagePath('icons', 'track_1.png')"
                                            alt="track_order"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span class="ec-progressbar-track"></span>
                                    <span class="ec-track-title">
                                        order
                                        <br />
                                        processed
                                    </span>
                                </li>
                                <li class="step0 active">
                                    <span class="ec-track-icon">
                                        <img
                                            :src="getImagePath('icons', 'track_2.png')"
                                            alt="track_order"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span class="ec-progressbar-track"></span>
                                    <span class="ec-track-title">
                                        order
                                        <br />
                                        designing
                                    </span>
                                </li>
                                <li class="step0 active">
                                    <span class="ec-track-icon">
                                        <img
                                            :src="getImagePath('icons', 'track_3.png')"
                                            alt="track_order"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span class="ec-progressbar-track"></span>
                                    <span class="ec-track-title">
                                        order
                                        <br />
                                        shipped
                                    </span>
                                </li>
                                <li class="step0">
                                    <span class="ec-track-icon">
                                        <img
                                            :src="getImagePath('icons', 'track_4.png')"
                                            alt="track_order"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span class="ec-progressbar-track"></span>
                                    <span class="ec-track-title">
                                        order
                                        <br />
                                        enroute
                                    </span>
                                </li>
                                <li class="step0">
                                    <span class="ec-track-icon">
                                        <img
                                            :src="getImagePath('icons', 'track_5.png')"
                                            alt="track_order"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span class="ec-progressbar-track"></span>
                                    <span class="ec-track-title">
                                        order
                                        <br />
                                        arrived
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Track Order Content end -->
        </div>
    </section>
    <!-- Track Order section end -->
</template>
