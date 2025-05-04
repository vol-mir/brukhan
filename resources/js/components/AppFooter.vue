<script>
    import { getImagePath } from '@/utils/imageHelper';
    import { useSiteInfoStore } from '@/stores/siteInfoStore';
    import { useSidebarStore } from '@/stores/sidebarStore';
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import { onMounted, inject } from 'vue';

    export default {
        name: 'AppFooter',
        components: {
            InertiaLink,
        },
        setup() {
            const route = inject('route');
            const sidebarStore = useSidebarStore();
            const siteInfoStore = useSiteInfoStore();
            const getIconPath = (name) => getImagePath('icons', name);
            const getLogoPath = (name) => getImagePath('logo', name);

            onMounted(async () => {
                await siteInfoStore.fetchSiteInfo();
            });

            return {
                route,
                sidebarStore,
                getIconPath,
                getLogoPath,
                siteInfoStore,
            };
        },
        data() {
            return {
                activeIndex: null,
            };
        },
        computed: {
            currentYear() {
                return new Date().getFullYear();
            },
        },
        methods: {
            toggleDropdown(index) {
                this.activeIndex = this.activeIndex === index ? null : index;
            },
        },
    };
</script>

<template>
    <!-- Footer Start -->
    <footer class="ec-footer section-space-mt">
        <div class="footer-container">
            <div class="footer-offer">
                <div class="container">
                    <div class="row">
                        <div class="text-center footer-off-msg">
                            <span>{{ $t('any_questions') }}</span>
                            <a :href="'tel:' + siteInfoStore.main_phone">
                                {{ siteInfoStore.main_phone }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-top section-space-footer-p">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-3 ec-footer-contact">
                            <div class="ec-footer-widget">
                                <div class="ec-footer-logo">
                                    <InertiaLink :href="route('home')">
                                        <img
                                            :src="
                                                getLogoPath('footer-logo.png')
                                            "
                                            :alt="siteInfoStore.full_name"
                                            loading="lazy"
                                        />
                                        <img
                                            class="dark-footer-logo"
                                            :src="getLogoPath('dark-logo.png')"
                                            :alt="siteInfoStore.social_networks"
                                            style="display: none"
                                            loading="lazy"
                                        />
                                    </InertiaLink>
                                </div>
                                <h4
                                    class="ec-footer-heading"
                                    @click="toggleDropdown('contacts')"
                                >
                                    {{ $t('contact_us') }}
                                    <div class="ec-heading-res">
                                        <i class="ecicon eci-angle-down"></i>
                                    </div>
                                </h4>
                                <transition name="slide-fade">
                                    <div
                                        class="ec-footer-links ec-footer-dropdown"
                                        v-show="activeIndex === 'contacts'"
                                    >
                                        <ul class="align-items-center">
                                            <li class="ec-footer-link">
                                                {{ siteInfoStore.address }}
                                            </li>
                                            <li class="ec-footer-link">
                                                <span>
                                                    {{ $t('call_us') }}:
                                                </span>
                                                <a
                                                    :href="
                                                        'tel:' +
                                                        siteInfoStore.main_phone
                                                    "
                                                >
                                                    {{
                                                        siteInfoStore.main_phone
                                                    }}
                                                </a>
                                            </li>
                                            <li class="ec-footer-link">
                                                <span>{{ $t('email') }}:</span>
                                                <a
                                                    :href="
                                                        'mailto:' +
                                                        siteInfoStore.main_email
                                                    "
                                                >
                                                    {{
                                                        siteInfoStore.main_email
                                                    }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-3 ec-footer-info">
                            <div class="ec-footer-widget">
                                <h4
                                    class="ec-footer-heading"
                                    @click="toggleDropdown('information')"
                                >
                                    {{ $t('information') }}
                                    <div class="ec-heading-res">
                                        <i class="ecicon eci-angle-down"></i>
                                    </div>
                                </h4>
                                <transition name="slide-fade">
                                    <div
                                        class="ec-footer-links ec-footer-dropdown"
                                        v-show="activeIndex === 'information'"
                                    >
                                        <ul class="align-items-center">
                                            <li class="ec-footer-link">
                                                <InertiaLink
                                                    :href="route('about-us')"
                                                >
                                                    {{ $t('page.about_us') }}
                                                </InertiaLink>
                                            </li>
                                            <li class="ec-footer-link">
                                                <InertiaLink
                                                    :href="route('faq')"
                                                >
                                                    {{ $t('page.faq') }}
                                                </InertiaLink>
                                            </li>
                                            <li class="ec-footer-link">
                                                <a href="#">
                                                    {{
                                                        $t(
                                                            'page.delivery_information'
                                                        )
                                                    }}
                                                </a>
                                            </li>
                                            <li class="ec-footer-link">
                                                <InertiaLink
                                                    :href="route('contacts')"
                                                >
                                                    {{ $t('page.contact_us') }}
                                                </InertiaLink>
                                            </li>
                                        </ul>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-3 ec-footer-service">
                            <div class="ec-footer-widget">
                                <h4
                                    class="ec-footer-heading"
                                    @click="toggleDropdown('services')"
                                >
                                    {{ $t('to_the_client') }}
                                    <div class="ec-heading-res">
                                        <i class="ecicon eci-angle-down"></i>
                                    </div>
                                </h4>
                                <transition name="slide-fade">
                                    <div
                                        class="ec-footer-links ec-footer-dropdown"
                                        v-show="activeIndex === 'services'"
                                    >
                                        <ul class="align-items-center">
                                            <li class="ec-footer-link">
                                                <InertiaLink
                                                    :href="
                                                        route('privacy-policy')
                                                    "
                                                >
                                                    {{
                                                        $t(
                                                            'page.privacy_policy'
                                                        )
                                                    }}
                                                </InertiaLink>
                                            </li>
                                            <li class="ec-footer-link">
                                                <InertiaLink
                                                    :href="
                                                        route('policy-cookies')
                                                    "
                                                >
                                                    {{
                                                        $t(
                                                            'page.policy_cookies'
                                                        )
                                                    }}
                                                </InertiaLink>
                                            </li>
                                            <li class="ec-footer-link">
                                                <InertiaLink
                                                    :href="
                                                        route('bank-details')
                                                    "
                                                >
                                                    {{
                                                        $t('page.bank_details')
                                                    }}
                                                </InertiaLink>
                                            </li>
                                        </ul>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-3 ec-footer-news">
                            <div class="ec-footer-widget">
                                <h4
                                    class="ec-footer-heading"
                                    @click="toggleDropdown('newsletter')"
                                >
                                    {{ $t('newsletter') }}
                                    <div class="ec-heading-res">
                                        <i class="ecicon eci-angle-down"></i>
                                    </div>
                                </h4>
                                <transition name="slide-fade">
                                    <div
                                        class="ec-footer-links ec-footer-dropdown"
                                        v-show="activeIndex === 'newsletter'"
                                    >
                                        <ul class="align-items-center">
                                            <li class="ec-footer-link">
                                                {{ $t('special_promos') }}
                                            </li>
                                        </ul>
                                        <div class="ec-subscribe-form">
                                            <form
                                                id="ec-newsletter-form"
                                                name="ec-newsletter-form"
                                                method="post"
                                                action="#"
                                            >
                                                <div
                                                    id="ec_news_signup"
                                                    class="ec-form"
                                                >
                                                    <input
                                                        class="ec-email"
                                                        type="email"
                                                        required=""
                                                        :placeholder="
                                                            $t(
                                                                'enter_your_email'
                                                            )
                                                        "
                                                        name="ec-email"
                                                        value=""
                                                    />
                                                    <button
                                                        id="ec-news-btn"
                                                        class="button btn-primary"
                                                        type="submit"
                                                        name="subscribe"
                                                        value=""
                                                    >
                                                        <i
                                                            class="ecicon eci-paper-plane-o"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <!-- Footer social Start -->
                        <div class="col text-left footer-bottom-left">
                            <div class="footer-bottom-social">
                                <span class="social-text text-upper">
                                    {{ $t('follow_us_on') }}:
                                </span>
                                <ul
                                    v-if="
                                        siteInfoStore &&
                                        siteInfoStore.social_networks
                                    "
                                    class="mb-0"
                                >
                                    <li
                                        v-for="network in siteInfoStore.social_networks ||
                                        []"
                                        :key="network.slug"
                                        class="list-inline-item"
                                    >
                                        <a
                                            :class="
                                                'hdr-' +
                                                network.slug.toLowerCase()
                                            "
                                            :href="network.url"
                                            :aria-label="network.name"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                :class="
                                                    'ecicon eci-' + network.slug
                                                "
                                            ></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Footer social End -->
                        <!-- Footer Copyright Start -->
                        <div class="col text-center footer-copy">
                            <div class="footer-bottom-copy">
                                <div class="ec-copy">
                                    © 2024-{{ currentYear }}
                                    <InertiaLink
                                        :href="route('home')"
                                        class="site-name text-upper"
                                    >
                                        {{ siteInfoStore.full_name }}.
                                    </InertiaLink>
                                    {{ $t('all_rights_reserved') }}.
                                </div>
                            </div>
                        </div>
                        <!-- Footer Copyright End -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Area End -->

    <!-- Footer navigation panel for responsive display -->
    <div class="ec-nav-toolbar">
        <div class="container">
            <div class="ec-nav-panel">
                <div class="ec-nav-panel-icons">
                    <a
                        href="javascript:void(0)"
                        @click="sidebarStore.toggleMobileMenu"
                        class="navbar-toggler-btn ec-header-btn ec-side-toggle"
                    >
                        <img
                            :src="getIconPath('menu.svg')"
                            class="svg_img header_svg"
                            alt="icon"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div class="ec-nav-panel-icons"></div>
                <div class="ec-nav-panel-icons">
                    <InertiaLink :href="route('home')" class="ec-header-btn">
                        <img
                            :src="getIconPath('home.svg')"
                            class="svg_img header_svg"
                            alt="icon"
                            loading="lazy"
                        />
                    </InertiaLink>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer navigation panel for responsive display end -->
</template>

<style scoped>
    .ec-footer-dropdown {
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
