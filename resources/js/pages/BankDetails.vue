<script>
    import { computed } from 'vue';
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/layouts/LayoutBase.vue';
    import { useBodyClass } from '@/composables/useBodyClass';
    import { useSiteInfo } from '@/composables/useSiteInfo';
    import { useSanitizedHtml } from '@/composables/useSanitizedHtml';

    export default {
        name: 'BankDetails',
        layout: Layout,
        components: {
            InertiaLink,
        },
        setup() {
            useBodyClass('bank_details_page');

            const { siteInfoStore } = useSiteInfo();
            const sanitizedBankDetails = useSanitizedHtml(
                computed(() => siteInfoStore.bank_details)
            );

            return {
                sanitizedBankDetails,
            };
        },
    };
</script>

<template class="bank_details_page">
    <!-- Breadcrumb start -->
    <div class="sticky-header-next-sec ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">
                                {{ $t('menu.bank_details') }}
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
                                    {{ $t('menu.bank_details') }}
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

    <!-- Privacy & Policy page start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h1 class="ec-bg-title">{{ $t('bank_details') }}</h1>
                        <h1 class="ec-title">{{ $t('bank_details') }}</h1>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="ec-common-wrapper">
                        <div class="col-sm-12 ec-cms-block">
                            <div
                                class="ec-cms-block-inner"
                                v-html="sanitizedBankDetails"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Privacy & Policy page end -->
</template>
