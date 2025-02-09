<script>
    import { getImagePath } from '@/utils/imageHelper';

    export default {
        name: 'HeaderTop',
        setup() {
            const getIconPath = (name) => getImagePath('icons', name);
            const getLogoPath = (name) => getImagePath('logo', name);

            return {
                getIconPath,
                getLogoPath,
            };
        },
    };
</script>

<template>
    <!-- Header Bottom  Start -->
    <div class="ec-header-bottom d-none d-lg-block">
        <div class="container position-relative">
            <div class="row">
                <div class="ec-flex">
                    <!-- Header Logo Start -->
                    <div class="align-self-center">
                        <div class="header-logo">
                            <a href="#">
                                <img
                                    :src="getLogoPath('logo.png')"
                                    alt="Site Logo"
                                    loading="lazy"
                                />
                                <img
                                    class="dark-logo"
                                    :src="getLogoPath('dark-logo.png')"
                                    alt="Site Logo"
                                    style="display: none"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    </div>
                    <!-- Header Logo End -->

                    <!-- Header Search Start -->
                    <div class="align-self-center">
                        <div class="header-search">
                            <form class="ec-btn-group-form" action="#">
                                <input
                                    class="form-control ec-search-bar"
                                    :placeholder="$t('search_products')"
                                    type="text"
                                />
                                <button class="submit" type="submit">
                                    <img
                                        :src="getIconPath('search.svg')"
                                        class="svg_img header_svg"
                                        alt="Search"
                                        loading="lazy"
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                    <!-- Header Search End -->

                    <!-- Header Button Start -->
                    <div class="align-self-center">
                        <div class="ec-header-bottons"></div>
                    </div>
                    <!-- Header Button End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Header Bottom End -->
</template>
