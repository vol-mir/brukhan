<script>
    export default {
        name: 'FaqAccordion',
        props: {
            title: { type: String, required: true },
            content: { type: String, required: true },
            isActive: { type: Boolean, default: false },
        },
        emits: ['toggle'],
        methods: {
            toggle() {
                this.$emit('toggle');
            },
        },
    };
</script>

<template>
    <div class="col-sm-12 ec-faq-block">
        <h4 class="ec-faq-title" @click="toggle()">
            {{ title }}
        </h4>
        <transition name="slide-fade">
            <div v-if="isActive" class="ec-faq-content ec-faq-dropdown">
                <p>{{ content }}</p>
            </div>
        </transition>
    </div>
</template>
