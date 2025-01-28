<script>
    import { getImagePath } from '@/utils/imageHelper';

    export default {
        name: 'ProductInner',
        props: {
            product: {
                type: Object,
                required: true,
                validator(value) {
                    return (
                        typeof value.name === 'string' &&
                        typeof value.imageMain === 'string' &&
                        typeof value.imageHover === 'string'
                    );
                },
            },
        },
        setup() {
            return {
                getImagePath,
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
                        :src="getImagePath('product-image', product.imageMain)"
                        :alt="product.name"
                        loading="lazy"
                    />
                    <img
                        class="hover-image"
                        :src="getImagePath('product-image', product.imageHover)"
                        :alt="product.name"
                        loading="lazy"
                    />
                </a>
                <a
                    href="#"
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
                </a>
            </div>
        </div>
        <div class="ec-pro-content">
            <h5 class="ec-pro-title">
                <a href="#">{{ product.name }}</a>
            </h5>
            <div class="ec-pro-rating">
                <i class="ecicon eci-star fill"></i>
                <i class="ecicon eci-star fill"></i>
                <i class="ecicon eci-star fill"></i>
                <i class="ecicon eci-star fill"></i>
                <i class="ecicon eci-star"></i>
            </div>
            <span class="ec-price">
                <span class="old-price">$100.00</span>
                <span class="new-price">$80.00</span>
            </span>
        </div>
    </div>
</template>
