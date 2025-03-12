import { ref } from 'vue';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';

export function useSwiper() {
    const thumbsSwiper = ref(null);

    const modules = [Autoplay, Navigation, Thumbs];

    const autoplayConfig = {
        delay: 4000,
        disableOnInteraction: false,
    };

    const navigationConfig = {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    };

    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
    };

    return {
        thumbsSwiper,
        modules,
        autoplayConfig,
        navigationConfig,
        setThumbsSwiper,
    };
}
