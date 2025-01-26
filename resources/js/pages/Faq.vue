<script>
    import { getFaqItems } from '@/data/faqData';
    import Layout from '../Layout.vue';

    export default {
        name: 'Faq',
        layout: Layout,
        data() {
            return {
                faqItems: getFaqItems(),
                activeIndexes: new Set(),
            };
        },
        methods: {
            toggleFaq(faqIndex, itemIndex) {
                const combinedIndex = `faq-${faqIndex}-item-${itemIndex}`;
                if (this.activeIndexes.has(combinedIndex)) {
                    this.activeIndexes.delete(combinedIndex); // Закрытие блока
                } else {
                    this.activeIndexes.add(combinedIndex); // Открытие блока
                }
            },
        },
    };
</script>

<template>
    <!-- Ec breadcrumb start -->
    <div class="sticky-header-next-sec ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">FAQ</h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <!-- ec-breadcrumb-list start -->
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item">
                                    <router-link :to="{ name: 'home' }">
                                        Home
                                    </router-link>
                                </li>
                                <li class="ec-breadcrumb-item active">FAQ</li>
                            </ul>
                            <!-- ec-breadcrumb-list end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Ec breadcrumb end -->

    <!-- Ec FAQ page -->
    <section class="ec-page-content section-space-p">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-title">
                        <h2 class="ec-bg-title">FAQ</h2>
                        <h2 class="ec-title">FAQ</h2>
                        <p class="sub-title mb-3">
                            Customer service management
                        </p>
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
                            <div
                                v-for="(item, itemIndex) in faq.items"
                                :key="`faq-${faqIndex}-item-${itemIndex}`"
                                class="col-sm-12 ec-faq-block"
                            >
                                <h4
                                    class="ec-faq-title"
                                    @click="toggleFaq(faqIndex, itemIndex)"
                                >
                                    {{ item.title }}
                                </h4>
                                <transition name="slide-fade">
                                    <div
                                        v-if="
                                            activeIndexes.has(
                                                `faq-${faqIndex}-item-${itemIndex}`
                                            )
                                        "
                                        class="ec-faq-content ec-faq-dropdown"
                                    >
                                        <p>{{ item.content }}</p>
                                    </div>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .ec-faq-content {
        display: block;
    }
    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition:
            max-height 0.5s ease,
            opacity 0.5s ease;
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to {
        max-height: 0;
        opacity: 0;
    }
    .slide-fade-enter-to,
    .slide-fade-leave-from {
        max-height: 500px;
        opacity: 1;
    }
</style>
