<script setup>
    import HeaderTop from '@/components/Header/HeaderTop.vue';
    import HeaderBottom from '@/components/Header/HeaderBottom.vue';
    import HeaderMainMenu from '@/components/Header/HeaderMainMenu.vue';
    import HeaderResponsiveBottom from '@/components/Header/HeaderResponsiveBottom.vue';
    import HeaderMobileMenu from '@/components/Header/HeaderMobileMenu.vue';
</script>

<template>
    <!-- Header start  -->
    <header class="ec-header">
        <HeaderTop />
        <HeaderBottom />
        <HeaderResponsiveBottom />
        <HeaderMainMenu />
        <HeaderMobileMenu />
    </header>
    <!-- Header End  -->
</template>

<style scoped></style>
