<script>
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/Layout.vue';
    import { useBodyClass } from '@/composables/useBodyClass';

    export default {
        name: 'TermsCondition',
        layout: Layout,
        components: {
            InertiaLink,
        },
        setup() {
            useBodyClass('terms_condition_page');
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
                            <h2 class="ec-breadcrumb-title">
                                Terms & Condition
                            </h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <!-- breadcrumb-list start -->
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item">
                                    <InertiaLink :href="route('home')">
                                        {{ $t('menu.home') }}
                                    </InertiaLink>
                                </li>
                                <li class="ec-breadcrumb-item active">
                                    Condition
                                </li>
                            </ul>
                            <!-- breadcrumb-list end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb end -->

    <!-- Terms & Condition page start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h2 class="ec-bg-title">Terms & Condition</h2>
                        <h2 class="ec-title">Terms & Condition</h2>
                        <p class="sub-title mb-3">
                            Welcome to the ekka multivendor marketplace
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="ec-common-wrapper">
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    Welcome to Ekka Multi Market.
                                </h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                    <b>Lorem Ipsum is simply dutmmy text</b>
                                    ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                    <b>Lorem Ipsum is simply dutmmy text</b>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    Ekka Websites
                                </h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                    <b>Lorem Ipsum is simply dutmmy text</b>
                                    ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                    <b>Lorem Ipsum is simply dutmmy text</b>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    How browsing and vendor works?
                                </h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                    <b>Lorem Ipsum is simply dutmmy text</b>
                                    ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                    <b>Lorem Ipsum is simply dutmmy text</b>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 ec-cms-block">
                            <div class="ec-cms-block-inner">
                                <h3 class="ec-cms-block-title">
                                    Becoming an vendor
                                </h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                    <b>Lorem Ipsum is simply dutmmy text</b>
                                    ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                    <b>Lorem Ipsum is simply dutmmy text</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Terms & Condition page end -->
</template>
