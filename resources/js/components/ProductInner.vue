<script>
    import { inject, computed } from 'vue';
    import { Link as InertiaLink } from '@inertiajs/vue3';
    import { useImagePath } from '@/composables/useImagePath';

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
                    const isValid =
                        value &&
                        typeof value.name === 'string' &&
                        value.name.length > 0 &&
                        typeof value.slug === 'string' &&
                        value.slug.length > 0 &&
                        typeof value.price === 'number' &&
                        (value.rating === undefined ||
                            value.rating === null ||
                            typeof value.rating === 'number') &&
                        (value.image_main === undefined ||
                            value.image_main === null ||
                            typeof value.image_main === 'string') &&
                        (value.image_hover === undefined ||
                            value.image_hover === null ||
                            typeof value.image_hover === 'string');

                    if (!isValid) {
                        console.warn('Invalid product prop received:', value);
                    }

                    return isValid;
                },
            },
        },
        setup(props) {
            const route = inject('route');
            const { getImagePath } = useImagePath();

            const defaultImage = getImagePath('common', 'default-product.jpg');
            const quickviewIcon = getImagePath('icons', 'quickview.svg');

            const productUrl = computed(() =>
                route('show-product', { slug: props.product.slug })
            );
            const safeRating = computed(() => props.product.rating ?? 0);

            return {
                defaultImage,
                quickviewIcon,
                productUrl,
                safeRating,
                props,
            };
        },
    };
</script>

<template>
    <div class="ec-product-inner">
        <div class="ec-pro-image-outer">
            <div class="ec-pro-image">
                <InertiaLink class="image" :href="productUrl">
                    <img
                        class="main-image"
                        :src="product.image_main || defaultImage"
                        :alt="product.name"
                        loading="lazy"
                    />
                    <img
                        class="hover-image"
                        :src="product.image_hover || defaultImage"
                        :alt="product.name"
                        loading="lazy"
                    />
                </InertiaLink>
                <InertiaLink
                    :href="productUrl"
                    class="quickview"
                    data-link-action="quickview"
                    title="Quick view"
                    data-bs-toggle="modal"
                    data-bs-target="#ec_quickview_modal"
                >
                    <img
                        :src="quickviewIcon"
                        class="svg_img pro_svg"
                        alt="Quick view"
                    />
                </InertiaLink>
            </div>
        </div>
        <div class="ec-pro-content">
            <h5 class="ec-pro-title">
                <InertiaLink :href="productUrl">
                    {{ product.name }}
                </InertiaLink>
            </h5>
            <div class="ec-pro-rating">
                <i
                    v-for="index in 5"
                    :key="`star-${index}`"
                    class="ecicon eci-star"
                    :class="{ fill: index <= safeRating }"
                ></i>
            </div>
            <span class="ec-price">
                <span class="new-price">₽{{ product.price }}</span>
            </span>
        </div>
    </div>
</template>
