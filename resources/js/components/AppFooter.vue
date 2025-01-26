<script>
    import { getImagePath } from '@/utils/imageHelper';
    import { useSidebarStore } from '@/stores/sidebarStore';
    import { Link as InertiaLink } from '@inertiajs/vue3';

    export default {
        name: 'AppFooter',
        components: {
            InertiaLink,
        },
        setup() {
            const sidebarStore = useSidebarStore();
            const getIconPath = (name) => getImagePath('icons', name);
            const getLogoPath = (name) => getImagePath('logo', name);

            return {
                sidebarStore,
                getIconPath,
                getLogoPath,
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
                            <span>Win a contest! Get this limited-editon</span>
                            <a href="#" target="_blank">View Detail</a>
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
                                    <a href="#">
                                        <img
                                            :src="
                                                getLogoPath('footer-logo.png')
                                            "
                                            alt=""
                                            loading="lazy"
                                        />
                                        <img
                                            class="dark-footer-logo"
                                            :src="getLogoPath('dark-logo.png')"
                                            alt="Site Logo"
                                            style="display: none"
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                                <h4
                                    class="ec-footer-heading"
                                    @click="toggleDropdown('contacts')"
                                >
                                    Contact us
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
                                                71 Pilgrim Avenue Chevy Chase,
                                                east california.
                                            </li>
                                            <li class="ec-footer-link">
                                                <span>Call Us:</span>
                                                <a href="tel:+440123456789">
                                                    +44 0123 456 789
                                                </a>
                                            </li>
                                            <li class="ec-footer-link">
                                                <span>Email:</span>
                                                <a
                                                    href="mailto:example@ec-email.com"
                                                >
                                                    +example@ec-email.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-2 ec-footer-info">
                            <div class="ec-footer-widget">
                                <h4
                                    class="ec-footer-heading"
                                    @click="toggleDropdown('information')"
                                >
                                    Information
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
                                                <InertiaLink href="/about-us">
                                                    About us
                                                </InertiaLink>
                                            </li>
                                            <li class="ec-footer-link">
                                                <InertiaLink href="/faq">
                                                    FAQ
                                                </InertiaLink>
                                            </li>
                                            <li class="ec-footer-link">
                                                <a href="#">
                                                    Delivery Information
                                                </a>
                                            </li>
                                            <li class="ec-footer-link">
                                                <InertiaLink href="/contacts">
                                                    Contact us
                                                </InertiaLink>
                                            </li>
                                        </ul>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-2 ec-footer-service">
                            <div class="ec-footer-widget">
                                <h4
                                    class="ec-footer-heading"
                                    @click="toggleDropdown('services')"
                                >
                                    Services
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
                                                <a href="#">Discount Returns</a>
                                            </li>
                                            <li class="ec-footer-link">
                                                <InertiaLink
                                                    href="/privacy-policy"
                                                >
                                                    Privacy policy
                                                </InertiaLink>
                                            </li>
                                            <li class="ec-footer-link">
                                                <a href="#">Customer Service</a>
                                            </li>
                                            <li class="ec-footer-link">
                                                <InertiaLink
                                                    href="/terms-condition"
                                                >
                                                    Term condition
                                                </InertiaLink>
                                            </li>
                                        </ul>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-5 ec-footer-news">
                            <div class="ec-footer-widget">
                                <h4
                                    class="ec-footer-heading"
                                    @click="toggleDropdown('newsletter')"
                                >
                                    Newsletter
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
                                                Get instant updates about our
                                                new products and special promos!
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
                                                        placeholder="Enter your email here..."
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
                                    Follow us on:
                                </span>
                                <ul class="mb-0">
                                    <li class="list-inline-item">
                                        <a class="hdr-facebook" href="#">
                                            <i class="ecicon eci-facebook"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="hdr-twitter" href="#">
                                            <i class="ecicon eci-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="hdr-instagram" href="#">
                                            <i class="ecicon eci-instagram"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="hdr-linkedin" href="#">
                                            <i class="ecicon eci-linkedin"></i>
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
                                    Copyright © 2021-{{ currentYear }}
                                    <a class="site-name text-upper" href="#">
                                        ekka
                                        <span>.</span>
                                    </a>
                                    . All Rights Reserved
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
                <div class="ec-nav-panel-icons">
                    <a
                        href="#ec-side-cart"
                        class="toggle-cart ec-header-btn ec-side-toggle"
                    >
                        <img
                            :src="getIconPath('cart.svg')"
                            class="svg_img header_svg"
                            alt="icon"
                            loading="lazy"
                        />
                        <span
                            class="ec-cart-noti ec-header-count cart-count-lable"
                        >
                            3
                        </span>
                    </a>
                </div>
                <div class="ec-nav-panel-icons">
                    <InertiaLink href="/" class="ec-header-btn">
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
