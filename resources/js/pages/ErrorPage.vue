<script>
    import { computed } from 'vue';
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/layouts/LayoutError.vue';
    import { useI18n } from 'vue-i18n';
    import { useImagePath } from '@/composables/useImagePath';

    export default {
        name: 'ErrorPage',
        layout: Layout,
        components: {
            InertiaLink,
        },
        props: {
            status: Number,
        },
        setup(props) {
            const { t } = useI18n();
            const { getImagePath } = useImagePath();

            const title = computed(() => {
                return {
                    503: t('errors.titles.503'),
                    500: t('errors.titles.500'),
                    404: t('errors.titles.404'),
                    403: t('errors.titles.403'),
                }[props.status];
            });

            const description = computed(() => {
                return {
                    503: t('errors.errors.503'),
                    500: t('errors.errors.500'),
                    404: t('errors.errors.404'),
                    403: t('errors.errors.403'),
                }[props.status];
            });

            return {
                getImagePath,
                title,
                description,
            };
        },
    };
</script>

<template>
    <!-- Start main Section -->
    <section class="ec-404-error-page-02">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <img
                        class="img-404"
                        :src="getImagePath('common', '404-error-page.gif')"
                        alt="404-error-page"
                        loading="lazy"
                    />

                    <h1 class="main-title text-center">{{ title }}</h1>
                    <h3 class="sub-title text-center">
                        {{ description }}
                    </h3>

                    <InertiaLink :href="route('home')" class="link-404">
                        {{ $t('menu.home') }}
                    </InertiaLink>
                </div>
            </div>
        </div>
    </section>
    <!-- End main Section -->
</template>
