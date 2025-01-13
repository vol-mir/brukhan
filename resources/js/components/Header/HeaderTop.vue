<script>
    import { getImagePath } from '@/utils/imageHelper';
    import { useSidebarStore } from '@/stores/sidebarStore';
    import { ref } from 'vue';

    export default {
        name: 'HeaderTop',
        setup() {
            const sidebarStore = useSidebarStore();
            const showLanguageDropdown = ref(false);

            const getIconPath = (name) => getImagePath('icons', name);

            const toggleDropdown = () => {
                showLanguageDropdown.value = !showLanguageDropdown.value;
            };

            return {
                sidebarStore,
                getIconPath,
                showLanguageDropdown,
                toggleDropdown,
            };
        },
    };
</script>

<template>
    <!-- Header Top Start -->
    <div class="header-top">
        <div class="container">
            <div class="row align-items-center">
                <!-- Header Top Social Start -->
                <div class="col text-left header-top-left d-none d-lg-block">
                    <div class="header-top-social">
                        <span class="social-text text-upper">
                            Follow us on:
                        </span>
                        <ul class="mb-0">
                            <li class="list-inline-item">
                                <a
                                    class="hdr-facebook"
                                    href="#"
                                    aria-label="Facebook"
                                >
                                    <i class="ecicon eci-facebook"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a
                                    class="hdr-twitter"
                                    href="#"
                                    aria-label="Twitter"
                                >
                                    <i class="ecicon eci-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a
                                    class="hdr-instagram"
                                    href="#"
                                    aria-label="Instagram"
                                >
                                    <i class="ecicon eci-instagram"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a
                                    class="hdr-linkedin"
                                    href="#"
                                    aria-label="LinkedIn"
                                >
                                    <i class="ecicon eci-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Header Top Social End -->

                <!-- Header Top Message Start -->
                <div class="col text-center header-top-center">
                    <div class="header-top-message text-upper">
                        <span>Free Shipping</span>
                        This Week Order Over - $75
                    </div>
                </div>
                <!-- Header Top Message End -->

                <!-- Header Top Language Currency -->
                <div class="col header-top-right d-none d-lg-block">
                    <div class="header-top-lan-curr d-flex justify-content-end">
                        <!-- Language Start -->
                        <div class="header-top-lan dropdown">
                            <button
                                class="dropdown-toggle text-upper"
                                @click="toggleDropdown"
                                aria-haspopup="true"
                                :aria-expanded="showLanguageDropdown"
                            >
                                Language
                                <i
                                    class="ecicon eci-caret-down"
                                    aria-hidden="true"
                                ></i>
                            </button>
                            <transition name="fade" mode="out-in" appear>
                                <ul
                                    v-if="showLanguageDropdown"
                                    class="dropdown-menu"
                                >
                                    <li class="active">
                                        <a class="dropdown-item" href="#">
                                            Russian
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            English
                                        </a>
                                    </li>
                                </ul>
                            </transition>
                        </div>
                        <!-- Language End -->
                    </div>
                </div>
                <!-- Header Top Language Currency -->

                <!-- Header Top Responsive Action -->
                <div class="col d-lg-none">
                    <div class="ec-header-bottons">
                        <!-- Header Cart Start -->
                        <a
                            href="#ec-side-cart"
                            class="ec-header-btn ec-side-toggle"
                        >
                            <div class="header-icon">
                                <img
                                    :src="getIconPath('cart.svg')"
                                    class="svg_img header_svg"
                                    alt="Cart icon"
                                    loading="lazy"
                                />
                            </div>
                            <span class="ec-header-count cart-count-lable">
                                3
                            </span>
                        </a>
                        <!-- Header Cart End -->

                        <!-- Header Category Icon -->
                        <a
                            href="javascript:void(0)"
                            class="ec-header-btn ec-sidebar-toggle"
                        >
                            <img
                                :src="getIconPath('category-icon.svg')"
                                class="svg_img header_svg"
                                alt="Category icon"
                                loading="lazy"
                            />
                        </a>
                        <!-- Header Menu Start -->
                        <a
                            href="javascript:void(0)"
                            @click="sidebarStore.toggleMobileMenu"
                            class="ec-header-btn ec-side-toggle d-lg-none"
                        >
                            <img
                                :src="getIconPath('menu.svg')"
                                class="svg_img header_svg"
                                alt="Menu icon"
                                loading="lazy"
                            />
                        </a>
                        <!-- Header Menu End -->
                    </div>
                </div>
                <!-- Header Top Responsive Action -->
            </div>
        </div>
    </div>
    <!-- Header Top End -->
</template>

<style scoped>
    .dropdown-menu {
        display: block;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-to,
    .fade-leave-from {
        opacity: 1;
    }
</style>
