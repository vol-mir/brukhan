import { ref } from 'vue';

export function useFaq() {
    const activeIndexes = ref(new Set());

    const toggleFaq = (faqIndex, itemIndex) => {
        const combinedIndex = `faq-${faqIndex}-item-${itemIndex}`;
        if (activeIndexes.value.has(combinedIndex)) {
            activeIndexes.value.delete(combinedIndex);
        } else {
            activeIndexes.value.add(combinedIndex);
        }
    };

    return {
        activeIndexes,
        toggleFaq,
    };
}
