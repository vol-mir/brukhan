<script>
    import { inject } from 'vue';
    import { getImagePath } from '@/utils/imageHelper';
    import { Link as InertiaLink } from '@inertiajs/vue3';

    export default {
        name: 'ProductInner',
        components: {
            InertiaLink,
        },
        props: {
            product: {
                type: Object,
                required: true,
                validator(value) {
                    return (
                        typeof value.name === 'string' &&
                        typeof value.image_main === 'string' &&
                        typeof value.image_hover === 'string' &&
                        typeof value.price === 'number'
                    );
                },
            },
        },
        setup() {
            const route = inject('route');

            return {
                getImagePath,
                route,
            };
        },
    };
</script>

<template>
    <div class="ec-product-inner">
        <div class="ec-pro-image-outer">
            <div class="ec-pro-image">
                <a href="#" class="image">
                    <img
                        class="main-image"
                        :src="product.image_main"
                        :alt="product.name"
                        loading="lazy"
                    />
                    <img
                        class="hover-image"
                        :src="product.image_hover"
                        :alt="product.name"
                        loading="lazy"
                    />
                </a>
                <InertiaLink
                    :href="route('show-product', { slug: product.slug })"
                    class="quickview"
                    data-link-action="quickview"
                    title="Quick view"
                    data-bs-toggle="modal"
                    data-bs-target="#ec_quickview_modal"
                >
                    <img
                        :src="getImagePath('icons', 'quickview.svg')"
                        class="svg_img pro_svg"
                        alt=""
                    />
                </InertiaLink>
            </div>
        </div>
        <div class="ec-pro-content">
            <h5 class="ec-pro-title">
                <InertiaLink
                    :href="route('show-product', { slug: product.slug })"
                >
                    {{ product.name }}
                </InertiaLink>
            </h5>
            <div class="ec-pro-rating">
                <i
                    v-for="index in 5"
                    :key="index"
                    class="ecicon eci-star"
                    :class="{ fill: index <= product.rating }"
                ></i>
            </div>
            <span class="ec-price">
                <!--<span class="old-price"></span>-->
                <span class="new-price">₽{{ product.price }}</span>
            </span>
        </div>
    </div>
</template>
