<script>
    import { getImagePath } from '@/utils/imageHelper';
    import { getMenuItems } from '@/data/menuData';
    import MenuItem from './MenuItem.vue';
    import { ref } from 'vue';

    export default {
        name: 'HeaderMainMenu',
        components: {
            MenuItem,
        },
        setup() {
            const getIconPath = (name) => getImagePath('icons', name);
            const getMenuBannerPath = (name) =>
                getImagePath('menu-banner', name);

            const menuItems = ref(getMenuItems());

            return {
                getIconPath,
                getMenuBannerPath,
                menuItems,
            };
        },
    };
</script>

<template>
    <!-- Main Menu Start -->
    <div id="ec-main-menu-desk" class="d-none d-lg-block sticky-nav">
        <div class="container position-relative">
            <div class="row">
                <div class="col-md-12 align-self-center">
                    <div class="ec-main-menu">
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
                        <ul>
                            <MenuItem
                                v-for="(item, index) in menuItems"
                                :key="index"
                                :item="item"
                            />
                            <li class="dropdown scroll-to">
                                <a href="javascript:void(0)">
                                    <img
                                        :src="getIconPath('scroll.svg')"
                                        class="svg_img header_svg scroll"
                                        alt=""
                                        loading="lazy"
                                    />
                                </a>
                                <ul class="sub-menu">
                                    <li class="menu_title">
                                        Scroll To Section
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            data-scroll="collection"
                                            class="nav-scroll"
                                        >
                                            Top Collection
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            data-scroll="categories"
                                            class="nav-scroll"
                                        >
                                            Categories
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            data-scroll="offers"
                                            class="nav-scroll"
                                        >
                                            Offers
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            data-scroll="vendors"
                                            class="nav-scroll"
                                        >
                                            Top Vendors
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            data-scroll="services"
                                            class="nav-scroll"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            data-scroll="arrivals"
                                            class="nav-scroll"
                                        >
                                            New Arrivals
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            data-scroll="reviews"
                                            class="nav-scroll"
                                        >
                                            Client Review
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            data-scroll="insta"
                                            class="nav-scroll"
                                        >
                                            Instagram Feed
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Menu End -->
</template>
