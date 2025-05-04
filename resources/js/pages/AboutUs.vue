<script>
    import { computed } from 'vue';
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/layouts/LayoutBase.vue';
    import { useBodyClass } from '@/composables/useBodyClass';
    import { useImagePath } from '@/composables/useImagePath';
    import { useSiteInfo } from '@/composables/useSiteInfo';
    import ListServices from '@/components/ListServices.vue';
    import NewProducts from '@/components/NewProducts.vue';
    import ListBrands from '@/components/ListBrands.vue';

    export default {
        name: 'AboutUs',
        layout: Layout,
        components: {
            InertiaLink,
            ListServices,
            NewProducts,
            ListBrands,
        },
        setup() {
            useBodyClass('aboutus_page');

            const { getImagePath } = useImagePath();
            const { siteInfoStore } = useSiteInfo();

            const formattedDescription = computed(() =>
                siteInfoStore.description
                    ? siteInfoStore.description.replace(/\n/g, '<br>')
                    : ''
            );

            return {
                getImagePath,
                formattedDescription,
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
                            <h2 class="ec-breadcrumb-title">
                                {{ $t('menu.about_us') }}
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
                                    {{ $t('menu.about_us') }}
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

    <!-- About Us page start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h1 class="ec-bg-title">
                            {{ $t('about_my_business') }}
                        </h1>
                        <h1 class="ec-title">{{ $t('about_my_business') }}</h1>
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
                                    :src="
                                        getImagePath('common', 'about-us.jpg')
                                    "
                                    alt="about-my-business"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div
                            class="col-md-6 ec-cms-block ec-abcms-block text-center"
                        >
                            <div class="ec-cms-block-inner">
                                <p v-html="formattedDescription"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Us page end -->

    <ListServices />
    <NewProducts />
    <ListBrands />
</template>
