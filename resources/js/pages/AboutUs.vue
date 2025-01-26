<script>
    import { onBeforeUnmount, onMounted } from 'vue';
    import { getImagePath } from '@/utils/imageHelper';
    import Layout from '@/Layout.vue';
    import InstagramFeed from '@/components/InstagramFeed.vue';
    import ListServices from '@/components/ListServices.vue';
    import TestimonialReviews from '@/components/TestimonialReviews.vue';

    export default {
        name: 'AboutUs',
        layout: Layout,
        components: {
            InstagramFeed,
            ListServices,
            TestimonialReviews,
        },
        setup() {
            onMounted(() => {
                document.body.classList.add('aboutus_page');
            });

            onBeforeUnmount(() => {
                document.body.classList.remove('aboutus_page');
            });

            return {
                getImagePath,
            };
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
                            <h2 class="ec-breadcrumb-title">About Us</h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <!-- ec-breadcrumb-list start -->
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item">
                                    <router-link :to="{ name: 'home' }">
                                        Home
                                    </router-link>
                                </li>
                                <li class="ec-breadcrumb-item active">
                                    About Us
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

    <!-- About Us page start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h2 class="ec-bg-title">About Us</h2>
                        <h2 class="ec-title">About Us</h2>
                        <p class="sub-title mb-3">About our business Firm</p>
                    </div>
                </div>
                <div class="ec-common-wrapper">
                    <div class="row">
                        <div
                            class="col-md-6 ec-cms-block ec-abcms-block text-center"
                        >
                            <div class="ec-cms-block-inner">
                                <img
                                    class="a-img"
                                    :src="getImagePath('offer-image', '1.jpg')"
                                    alt="about"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div
                            class="col-md-6 ec-cms-block ec-abcms-block text-center"
                        >
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    What is the ekka?
                                </h3>
                                <p>
                                    Electronic typesetting text of the printing
                                    and typesetting industry. when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. Lorem Ipsum
                                    is simply dutmmy text ever since the 1500s,
                                    It has survived not only, but also the leap
                                    into electronic typesetting.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing. It has survived not only five
                                    centuries, but also the leap into electronic
                                    typesetting.
                                </p>
                                <p>
                                    Also the leap into electronic typesetting
                                    printing and typesetting industry. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting, when
                                    an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but
                                    also the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Us page end -->

    <TestimonialReviews />
    <ListServices />
    <InstagramFeed />
</template>
