<script>
    import { getImagePath } from '@/utils/imageHelper';
    import { Link as InertiaLink } from '@inertiajs/vue3';

    export default {
        name: 'HeaderResponsiveBottom',
        components: {
            InertiaLink,
        },
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
    <!-- Header responsive Bottom  Start -->
    <div class="ec-header-bottom d-lg-none">
        <div class="container position-relative">
            <div class="row">
                <!-- Header Logo Start -->
                <div class="col">
                    <div class="header-logo">
                        <InertiaLink :href="route('home')">
                            <img
                                :src="getLogoPath('logo.png')"
                                alt="Site Logo"
                            />
                            <img
                                class="dark-logo"
                                :src="getLogoPath('dark-logo.png')"
                                alt="Site Logo"
                                style="display: none"
                                loading="lazy"
                            />
                        </InertiaLink>
                    </div>
                </div>
                <!-- Header Logo End -->
                <!-- Header Search Start -->
                <div class="col">
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
                                    alt="icon"
                                    loading="lazy"
                                />
                            </button>
                        </form>
                    </div>
                </div>
                <!-- Header Search End -->
            </div>
        </div>
    </div>
    <!-- Header responsive Bottom  End -->
</template>
