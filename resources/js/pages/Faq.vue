<script>
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import Layout from '@/Layout.vue';
    import FaqAccordion from '@/modules/faq/components/FaqAccordion.vue';
    import { getFaqItems } from '@/modules/faq/data/faqData';
    import { useFaq } from '@/modules/faq/composables/useFaq';
    import ListServices from '@/components/ListServices.vue';
    import ListBrands from '@/components/ListBrands.vue';

    export default {
        name: 'Faq',
        layout: Layout,
        components: {
            InertiaLink,
            FaqAccordion,
            ListServices,
            ListBrands,
        },
        setup() {
            const { activeIndexes, toggleFaq } = useFaq();
            const faqItems = getFaqItems();

            return {
                faqItems,
                activeIndexes,
                toggleFaq,
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
                            <h2 class="ec-breadcrumb-title">FAQ</h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <!-- breadcrumb-list start -->
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item">
                                    <InertiaLink :href="route('home')">
                                        {{ $t('menu.home') }}
                                    </InertiaLink>
                                </li>
                                <li class="ec-breadcrumb-item active">FAQ</li>
                            </ul>
                            <!-- breadcrumb-list end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb end -->

    <!-- FAQ page start -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h1 class="ec-bg-title">
                            {{ $t('full_text_for_faq') }}
                        </h1>
                        <h1 class="ec-title">{{ $t('full_text_for_faq') }}</h1>
                    </div>
                </div>
                <div class="ec-faq-wrapper">
                    <div
                        v-for="(faq, faqIndex) in faqItems"
                        :key="faqIndex"
                        class="ec-faq-container"
                    >
                        <h2 class="ec-faq-heading">{{ faq.name }}</h2>
                        <div id="ec-faq">
                            <FaqAccordion
                                v-for="(item, itemIndex) in faq.items"
                                :key="`faq-${faqIndex}-item-${itemIndex}`"
                                :title="item.title"
                                :content="item.content"
                                :isActive="
                                    activeIndexes.has(
                                        `faq-${faqIndex}-item-${itemIndex}`
                                    )
                                "
                                @toggle="toggleFaq(faqIndex, itemIndex)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- FAQ page end -->

    <ListServices />
    <ListBrands />
</template>
