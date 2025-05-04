<script>
    import Layout from '@/layouts/LayoutBase.vue';
    import MainSlider from '@/modules/home/components/MainSlider.vue';
    import TabProducts from '@/components/TabProducts.vue';
    import TwoBanners from '@/components/TwoBanners.vue';
    import TopCategories from '@/components/TopCategories.vue';
    import ListServices from '@/components/ListServices.vue';
    import SuperOffer from '@/components/SuperOffer.vue';
    import NewProducts from '@/components/NewProducts.vue';
    import ListBrands from '@/components/ListBrands.vue';

    export default {
        name: 'HomePage',
        layout: Layout,
        components: {
            MainSlider,
            TabProducts,
            TwoBanners,
            TopCategories,
            ListServices,
            SuperOffer,
            NewProducts,
            ListBrands,
        },
    };
</script>

<template>
    <MainSlider />
    <TabProducts />
    <TwoBanners />
    <TopCategories />
    <ListServices />
    <SuperOffer />
    <NewProducts />
    <ListBrands />
</template>
