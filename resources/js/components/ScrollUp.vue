<script>
    export default {
        data() {
            return {
                visible: false,
            };
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            },
            handleScroll() {
                this.visible = window.scrollY > 200; // Порог видимости
            },
        },
    };
</script>

<template>
    <a id="scrollUp" v-show="visible" @click="scrollToTop">
        <i class="ecicon eci-arrow-up" aria-hidden="true"></i>
    </a>
</template>

<style scoped>
    #scrollUp {
        position: fixed;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        bottom: 25px;
        transition:
            opacity 0.3s,
            transform 0.3s;
    }
</style>
