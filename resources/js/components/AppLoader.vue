<template>
    <div v-if="loading" id="ec-overlay">
        <span class="loader_img"></span>
    </div>
</template>

<script>
    export default {
        name: 'AppLoader',
        props: {
            loading: {
                type: Boolean,
                required: true,
            },
        },
    };
</script>
